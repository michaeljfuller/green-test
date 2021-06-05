import {PropsWithChildren} from "react";
import css from "./Card.module.scss";

export interface CardProps {

}

/**
 * A card container.
 */
export function Card(props: PropsWithChildren<CardProps>) {
    return <div className={css.root}>
        {props.children}
    </div>;
}
export default Card;
