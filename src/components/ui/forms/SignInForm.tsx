import {FormEventHandler, InputHTMLAttributes, useState} from 'react';
import css from './SignInForm.module.scss';
import {Checkbox} from "../element/Checkbox";

export interface SignInFormProps {
    onSubmit: (email: string, rememberMe: boolean) => void;
}

/**
 * A form with the fields needed to sign in via email.
 */
export function SignInForm(props: SignInFormProps) {
    const [validEmail, setValidEmail] = useState(false);

    const handleInput: InputHTMLAttributes<HTMLInputElement>['onChange'] = (event) => {
        setValidEmail(event.target.value && event.target.validity.valid);
    };
    const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        props.onSubmit(
            (event.currentTarget.email as HTMLInputElement).value,
            (event.currentTarget.remember as HTMLInputElement).checked
        );
    };

    return <form onSubmit={handleSubmit} className={css.root}>

        <div className={css.email}>
            <label>
                <span>Email Address</span>
                <input name="email" type="email" onChange={handleInput} />
            </label>
        </div>

        <div className={css.remember}>
            <Checkbox label="Remember this device" name="remember" />
        </div>

        <button type="submit" className={css.submit} disabled={!validEmail}>Sign In</button>

    </form>;
}
export default SignInForm;
