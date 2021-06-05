import type { NextApiRequest, NextApiResponse } from 'next';
import { magic } from '../../../src/api/auth/magic-link';
import { setLoginSession } from '../../../src/api/auth/session';

export default async function login(req: NextApiRequest, res: NextApiResponse) {
    try {
        const token = req.headers.authorization.substr(7);
        const metadata = await magic.users.getMetadataByToken(token);
        const session = { ...metadata };

        await setLoginSession(res, session);

        res.status(200).send({ done: true, user: metadata });
    } catch (error) {
        res.status(error.status || 500).end(error.message);
    }
}
