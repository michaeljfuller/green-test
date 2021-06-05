import css from "./Checkbox.module.scss";

export interface CheckboxProps {
    label: string;
    name?: string;
    className?: string;
}

export function Checkbox(props: CheckboxProps) {
    return <label className={css.root+" "+(props.className || '')}>
        <input type="checkbox" name={props.name} />
        <span>{props.label}</span>
    </label>;
}
