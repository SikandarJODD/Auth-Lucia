import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals }) => {
    let session = locals.user;
    if (!session) {
        redirect(302, "/login");
    }
    return {
        username: session.username
    }
};