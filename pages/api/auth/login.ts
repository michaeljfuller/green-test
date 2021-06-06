import type { NextApiRequest, NextApiResponse } from 'next';
import { magic } from '../../../src/api/auth/magic-link';
import { setLoginSession } from '../../../src/api/auth/session';
import type {MagicUserMetadata} from "@magic-sdk/types";

/** Fetches the MagicUserMetadata for the user that matches the Bearer token in the request header. */
export default async function login(req: NextApiRequest, res: NextApiResponse) {
    try {
        const body = req.body as LoginRequestBody;
        const token = req.headers.authorization.substr(7);
        const metadata = await magic.users.getMetadataByToken(token);

        if (body.remember) await setLoginSession(res, { ...metadata });

        res.status(200).send({ user: metadata } as LoginResponse);
    } catch (error) {
        res.status(error.status || 500).end(error.message);
    }
}

export interface LoginRequestBody {
    email: string;
    remember: boolean;
}

export interface LoginResponse {
    user: MagicUserMetadata;
}
