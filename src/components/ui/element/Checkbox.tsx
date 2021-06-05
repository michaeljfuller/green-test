import css from "./Checkbox.module.scss";

export interface CheckboxProps {
    label: string;
    name?: string;
    className?: string;
    disabled?: boolean;
}

export function Checkbox(props: CheckboxProps) {
    return <label className={css.root+" "+(props.className || '')}>
        <input type="checkbox" name={props.name} disabled={props.disabled} />
        <span>{props.label}</span>
    </label>;
}
