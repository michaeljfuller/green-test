import {CSSProperties, PropsWithChildren} from "react";
import css from "./Card.module.scss";

export interface CardProps {
    className?: string;
    style?: CSSProperties;
}

/**
 * A card container.
 */
export function Card(props: PropsWithChildren<CardProps>) {
    let className = css.root;
    if (props.className) className += " " + props.className;
    return <div className={className} style={props.style}>
        {props.children}
    </div>;
}
export default Card;
