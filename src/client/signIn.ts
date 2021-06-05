import { Magic } from 'magic-sdk';

/**
 * Log in the user with their email.
 * @throws {Error}
 */
export default async function signIn(email: string, remember: boolean) { // TODO Plug in 'remember'
    const magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY);
    const token = await magic.auth.loginWithMagicLink({ email });
    const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
        },
        body: JSON.stringify({ email }),
    });
    if (res.status === 200) {
        console.log('Logged In!');
        console.log(await res.text());
    } else {
        throw new Error(await res.text());
    }
}
