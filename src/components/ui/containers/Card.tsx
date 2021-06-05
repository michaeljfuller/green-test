import {PropsWithChildren} from "react";
import css from "./Card.module.scss";

export interface CardProps {
    className?: string
}

/**
 * A card container.
 */
export function Card(props: PropsWithChildren<CardProps>) {
    let className = css.root;
    if (props.className) className += " " + props.className;
    return <div className={className}>
        {props.children}
    </div>;
}
export default Card;
