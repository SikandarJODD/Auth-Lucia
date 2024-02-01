// routes/signup/+page.server.ts
import { lucia } from "$lib/server/auth";
import { fail, redirect } from "@sveltejs/kit";
import { Scrypt, generateId } from "lucia";

import type { Actions } from "./$types";
import { db } from "$lib/server/db";
import { userTable } from "$lib/server/schema";

import { setError, superValidate } from 'sveltekit-superforms/server';
import { authSchema } from "$lib";
import { eq } from "drizzle-orm";
export const load = async () => {
    let form = await superValidate(authSchema);
    return { form };

};

export const actions: Actions = {
    default: async ({ request, cookies }) => {
        let form = await superValidate(request, authSchema);
        console.log(form);
        let username = form.data.username.toLowerCase();
        let password = form.data.password;

        let userId = generateId(15);
        let hashedPassword = (await new Scrypt().hash(password)).toString();
        // console.log(hashedPassword);

        // Check if form is Valid
        if (!form.valid) {
            return fail(400, { form });
        }

        //  TODO: check if username is already used
        let userAlreadyPresent = await db.select().from(userTable).where(eq(userTable.username, username));

        if (userAlreadyPresent.length > 0) {
            return setError(form, "username", "Username already taken");
        }


        await db.insert(userTable).values({
            id: userId,
            username: username,
            password: hashedPassword,
        })

        const session = await lucia.createSession(userId, {});
        const sessionCookie = lucia.createSessionCookie(session.id);
        cookies.set(sessionCookie.name, sessionCookie.value, {
            path: ".",
            ...sessionCookie.attributes
        });

        return { form };
    }
};