import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ locals }) => {
    let session = await locals.user;
    if (session) {
        return {
            username: session.username.toString()
        }
    }
    else {

        return {
            username: ''
        }
    }
};