import type { NextApiRequest, NextApiResponse } from 'next';
import { magic } from '../../../src/api/auth/magic-link';
import { removeTokenCookie } from '../../../src/api/auth/cookies';
import { getLoginSession } from '../../../src/api/auth/session';

/** Log out the user and clear the cookie. */
export default async function logout(req: NextApiRequest, res: NextApiResponse) {
    try {
        const session = await getLoginSession(req);

        if (session) {
            await magic.users.logoutByIssuer(session.issuer);
            removeTokenCookie(res);
        }
        res.status(200).send({ success: true } as LogOutResponse);
    } catch (error) {
        res.status(error.status || 500).end(error.message);
    }
}

export interface LogOutResponse {
    success: boolean;
}
