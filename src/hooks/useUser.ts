import useSWR from 'swr';
import type {MagicUserMetadata} from "@magic-sdk/types";

/**
 * Get the logged in user.
 */
export function useUser(): UseUserResponse {
    const { data, error } = useSWR('/api/auth/user', fetcher);
    const user: MagicUserMetadata|undefined = data?.user;

    return {
        user,
        error,
        finished: Boolean(data),
        hasUser: Boolean(user),
    };
}

export interface UseUserResponse {
    user: MagicUserMetadata|undefined;
    error: Error,
    finished: boolean,
    hasUser: boolean,
}

const fetcher = (url) => fetch(
    url
).then(
    res => res.json()
).then(
    data => ({ user: data?.user || null })
);
