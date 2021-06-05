import { Magic } from 'magic-sdk';
import type {LoginResponse, LoginRequestBody} from "../../pages/api/auth/login";

/**
 * Log in the user with their email.
 * @throws {Error}
 */
export default async function signIn(email: string, remember: boolean): Promise<LoginResponse> {
    const magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY);
    const token = await magic.auth.loginWithMagicLink({ email });
    const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
        },
        body: JSON.stringify({ email, remember } as LoginRequestBody),
    });
    if (res.status === 200) {
        return res.json();
    }
    throw new Error(await res.text());
}
