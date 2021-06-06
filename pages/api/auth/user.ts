import type { NextApiRequest, NextApiResponse } from 'next';
import { getLoginSession } from '../../../src/api/auth/session';

/** Respond with the current user. */
export default async function user(req: NextApiRequest, res: NextApiResponse) {
    const session = await getLoginSession(req);
    res.status(200).json({ user: session || null });
}
