import { lucia } from "$lib/server/auth";
import { fail, redirect } from "@sveltejs/kit";

import type { Actions } from "./$types";
import { db } from "$lib/server/db";
import { userTable } from "$lib/server/schema";
import { eq } from "drizzle-orm";
import { Scrypt } from "lucia";
import { setError, superValidate } from "sveltekit-superforms/server";
import { authSchema } from "$lib";


export const load = async () => {
    let form = await superValidate(authSchema);
    return { form }
};


export const actions: Actions = {
    default: async ({ request, cookies }) => {
        let form = await superValidate(request, authSchema);
        let username = form.data.username.toLowerCase();
        let password = form.data.password;
        console.log(form);


        if (!form.valid) {
            return fail(400, { form });
        }

        let existingUser: any = await db.select().from(userTable).where(eq(userTable.username, username.toLowerCase()));
        // console.log(existingUser, 'existingUser');

        if (existingUser.length === 0) {
            //     // NOTE:
            //     // Returning immediately allows malicious actors to figure out valid usernames from response times,
            //     // allowing them to only focus on guessing passwords in brute-force attacks.
            //     // As a preventive measure, you may want to hash passwords even for invalid usernames.
            //     // However, valid usernames can be already be revealed with the signup page among other methods.
            //     // It will also be much more resource intensive.
            //     // Since protecting against this is none-trivial,
            //     // it is crucial your implementation is protected against brute-force attacks with login throttling etc.
            //     // If usernames are public, you may outright tell the user that the username is invalid.
            return setError(form, 'username', 'Incorrect Username');
        }


        const validPassword = await new Scrypt().verify(existingUser[0].password, password);
        if (!validPassword) {
            return setError(form, "password", "Incorrect password");
        }

        let session = await lucia.createSession(existingUser[0].id, {});
        const sessionCookie = lucia.createSessionCookie(session.id);
        cookies.set(sessionCookie.name, sessionCookie.value, {
            path: ".",
            ...sessionCookie.attributes
        });
        return { form };
    }
};