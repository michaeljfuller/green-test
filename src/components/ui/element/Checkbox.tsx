import type {InputHTMLAttributes} from "react";
import css from "./Checkbox.module.scss";

type InputAttr = InputHTMLAttributes<HTMLInputElement>;

export type CheckboxProps = Omit<InputAttr, 'type'|'value'|'defaultValue'> & {
    label: string;
}

export function Checkbox(props: CheckboxProps) {
    const {
        label,
        className,
        ...checkboxProps
    } = props;
    return <label className={css.root+" "+(className || '')}>
        <input {...checkboxProps} type="checkbox" />
        <span>{label}</span>
    </label>;
}
