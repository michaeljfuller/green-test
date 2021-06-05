import {FormEventHandler} from 'react';
import css from './SignInForm.module.scss';

export interface SignInFormProps {
    onSubmit: (email: string, rememberMe: boolean) => void;
}

/**
 * A form with the fields needed to sign in via email.
 */
export function SignInForm(props: SignInFormProps) {
    const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        props.onSubmit(
            (event.currentTarget.email as HTMLInputElement).value,
            (event.currentTarget.remember as HTMLInputElement).checked
        );
    };
    return <form onSubmit={handleSubmit} className={css.root}>

        <label>
            <span>Email Address</span>
            <input name="email" type="email" />
        </label>

        <label>
            <input name="remember" type="checkbox" />
            <span>Remember this device</span>
        </label>

        <button type="submit">Sign In</button>

    </form>;
}
export default SignInForm;
