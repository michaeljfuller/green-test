import Image from "next/image";
import css from "./SignIn.module.scss";
import SignInForm, {SignInFormProps} from "../ui/forms/SignInForm";

export interface SignInProps {

}

/**
 * The SignIn screen that submits a sign-in request when the user has filled in the SignInForm.
 */
export function SignIn(props: SignInProps) {
    const handleSubmit: SignInFormProps['onSubmit'] = async (email, rememberMe) => {
        console.log(`TODO: Sign in ${email}`);
    };

    return <section className={css.root}>

        <Image src="/green.svg" alt="Green Logo" width={100} height={26} />

        <h1>Operations studio</h1>
        <p>Please enter your email below</p>

        <SignInForm onSubmit={handleSubmit} />

    </section>;
}
export default SignIn;
