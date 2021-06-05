import type { NextApiRequest, NextApiResponse } from 'next';
import { magic } from '../../../src/api/auth/magic-link';
import { removeTokenCookie } from '../../../src/api/auth/cookies';
import { getLoginSession } from '../../../src/api/auth/session';

export default async function logout(req: NextApiRequest, res: NextApiResponse) {
    try {
        const session = await getLoginSession(req);

        if (session) {
            await magic.users.logoutByIssuer(session.issuer);
            removeTokenCookie(res);
        }
    } catch (error) {
        console.error(error);
    }

    res.writeHead(302, { Location: '/' });
    res.end();
}
