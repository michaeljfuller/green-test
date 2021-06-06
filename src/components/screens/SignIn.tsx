import Image from "next/image";
import css from "./SignIn.module.scss";
import SignInForm, {SignInFormProps} from "../ui/forms/SignInForm";
import useStoreSelector from "../../hooks/useStoreSelector";
import useStoreDispatch from "../../hooks/useStoreDispatch";
import {setAuthError, setSigningIn, setUser} from '../../store/user';
import {useAuthApis} from "../../contexts/AuthApiContext";

export interface SignInProps {}

/**
 * The SignIn screen that submits a sign-in request when the user has filled in the SignInForm.
 */
export function SignIn(props: SignInProps) {
    const signingIn = useStoreSelector((state) => state.user.signingIn);
    const dispatch = useStoreDispatch();
    const {signIn} = useAuthApis();

    const handleSubmit: SignInFormProps['onSubmit'] = async (email, rememberMe) => {
        try {
            dispatch(setSigningIn(true));
            const response = await signIn(email, rememberMe);
            dispatch(setUser(response.user));
        } catch (e) {
            dispatch(setAuthError(e));
        } finally {
            dispatch(setSigningIn(false));
        }
    };

    return <section className={css.root}>

        <Image src="/green.svg" alt="Green Logo" width={94} height={24} />

        <h1>Operations studio</h1>
        <p>Please enter your email below</p>

        <SignInForm onSubmit={handleSubmit} disabled={signingIn} />

    </section>;
}
export default SignIn;
