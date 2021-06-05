import {createContext, useContext} from "react";
import signIn from "../client/signIn";

export const defaultSignIn = signIn;

/**
 * A context to inject the signIn method into a component.
 * Using Contexts allows us to adhere to the dependency inversion principle.
 */
export const SignInContext = createContext(defaultSignIn);
export default SignInContext;

export const useSignIn = () => useContext(SignInContext);
