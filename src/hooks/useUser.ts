import useSWR from 'swr';
import type {MagicUserMetadata} from "@magic-sdk/types";
import useStoreDispatch from "./useStoreDispatch";
import {setAuthError, setAuthenticating, setUser} from "../store/user";

/** Get the logged in user. */
export function useUser(): UseUserResponse {
    const dispatch = useStoreDispatch();

    const fetcher = (url) => {
        dispatch(setAuthenticating(true));
        return fetch(
            url
        ).then(
            res => res.json()
        ).then(
            data => ({ user: data?.user || null })
        ).then(
            data => {
                dispatch(setUser(data.user));
                return data;
            },
        ).catch(error => {
            dispatch(setAuthError(error));
            throw error;
        });
    };

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
