import {PropsWithChildren, ReactElement} from "react";
import {useUser} from "../../../hooks/useUser";
import SignIn from "../../screens/SignIn";

export interface AuthenticationRequiredProps {
    unauthenticated?: ReactElement;
    authenticating?: ReactElement;
}

/**
 * Renders the children if authenticated, otherwise shows something else.
 */
export function AuthenticationRequired({
    children,
    authenticating,
    unauthenticated,
}: PropsWithChildren<AuthenticationRequiredProps>) {
    const { user, error, finished } = useUser();

    if (user) {
        return <>{children}</>;
    }
    if (finished) {
        return <>
            {unauthenticated || <SignIn />}
            {error ? <p>{error.message}</p> : null}
        </>;
    }
    return authenticating || <p>Authenticating...</p>;
}
export default AuthenticationRequired;
