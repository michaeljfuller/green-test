import {createContext, useContext} from "react";
import signIn from "../client/signIn";
import signOut from "../client/signOut";

export const defaultSignIn = signIn;
export const defaultSignOut = signOut;

export interface AuthApiGroup {
    signIn: typeof defaultSignIn,
    signOut: typeof defaultSignOut,
}

/**
 * A context to inject the signIn method into a component.
 * Using Contexts allows us to adhere to the dependency inversion principle.
 */
export const AuthApiContext = createContext<AuthApiGroup>({
    signIn: defaultSignIn,
    signOut: defaultSignOut,
});
export default AuthApiContext;

export const useAuthApis = () => useContext(AuthApiContext);
