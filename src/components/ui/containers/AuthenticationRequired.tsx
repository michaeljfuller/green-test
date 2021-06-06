import {PropsWithChildren, ReactElement} from "react";
import SignIn from "../../screens/SignIn";
import useStoreSelector from "../../../hooks/useStoreSelector";

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
    const userState = useStoreSelector((state) => state.user);

    if (userState.current) {
        return <>{children}</>;
    }
    if (userState.authenticating) {
        return authenticating || <p>Authenticating...</p>;
    }
    return <>
        {unauthenticated || <SignIn />}
        {userState.authError ? <p style={{color: 'red'}}>{userState.authError.message}</p> : null}
    </>;
}
export default AuthenticationRequired;
