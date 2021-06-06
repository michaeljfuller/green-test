import {LogOutResponse} from "../../pages/api/auth/logout";

/**
 * Log out the user.
 * @throws {Error}
 */
export default async function signOut(): Promise<LogOutResponse> {
    const res = await fetch('/api/auth/logout');
    if (res.status === 200) {
        return res.json();
    }
    throw new Error(await res.text());
}
