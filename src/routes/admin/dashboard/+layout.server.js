import { redirect } from '@sveltejs/kit'

export const load = async ({ params, locals: { user } }) => {
    if (!user){
        throw redirect(303, '/admin');
    }
}