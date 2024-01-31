import { lucia } from "$lib/server/auth";
import { fail, redirect } from "@sveltejs/kit";

import type { Actions } from "./$types";
import { db } from "$lib/server/db";
import { userTable } from "$lib/server/schema";
import { eq } from "drizzle-orm";
import { Scrypt } from "lucia";

export const actions: Actions = {
    default: async ({ request, cookies }) => {
        const formData = await request.formData();
        const username = formData.get("username");
        const password = formData.get("password");

        if (
            typeof username !== "string" ||
            username.length < 3 ||
            username.length > 31 ||
            !/^[a-z0-9_-]+$/.test(username)
        ) {
            return fail(400, {
                message: "Invalid username"
            });
        }
        if (typeof password !== "string" || password.length < 6 || password.length > 255) {
            return fail(400, {
                message: "Invalid password"
            });
        }


        let existingUser = await db.select().from(userTable).where(eq(userTable.username, username.toLowerCase()));
        console.log(existingUser, 'existingUser');

        if (!existingUser) {
            // NOTE:
            // Returning immediately allows malicious actors to figure out valid usernames from response times,
            // allowing them to only focus on guessing passwords in brute-force attacks.
            // As a preventive measure, you may want to hash passwords even for invalid usernames.
            // However, valid usernames can be already be revealed with the signup page among other methods.
            // It will also be much more resource intensive.
            // Since protecting against this is none-trivial,
            // it is crucial your implementation is protected against brute-force attacks with login throttling etc.
            // If usernames are public, you may outright tell the user that the username is invalid.
            return fail(400, {
                message: "Incorrect username or password"
            });
        }

        // const validPassword = await new Argon2id().verify(existingUser[0].password, password);

        const validPassword = await new Scrypt().verify(existingUser[0].password, password);
        if (!validPassword) {
            return fail(400, {
                message: "Incorrect username or password"
            });
        }

        let session = await lucia.createSession(existingUser[0].id, {});
        const sessionCookie = lucia.createSessionCookie(session.id);
        cookies.set(sessionCookie.name, sessionCookie.value, {
            path: ".",
            ...sessionCookie.attributes
        });

        return redirect(302, "/protected");
    }
};