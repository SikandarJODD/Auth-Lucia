// routes/signup/+page.server.ts
import { lucia } from "$lib/server/auth";
import { fail, redirect } from "@sveltejs/kit";
import { Scrypt, generateId } from "lucia";

import type { Actions } from "./$types";
import { db } from "$lib/server/db";
import { userTable } from "$lib/server/schema";

export const actions: Actions = {
    default: async ({ request, cookies }) => {
        const formData = await request.formData();
        const username = String(formData.get("username"));
        const password = String(formData.get("password"));
        console.log(username, password);
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

        let userId = generateId(15);
        let hashedPassword = (await new Scrypt().hash(password)).toString();
        // console.log(hashedPassword);




        // TODO: check if username is already used
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

        return redirect(302, "/");
    }
};