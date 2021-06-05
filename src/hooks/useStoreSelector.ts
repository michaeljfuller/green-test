import {TypedUseSelectorHook, useSelector} from "react-redux";
import type {RootState} from "../store";

/** Typed version of react-redux's useSelector() */
export const useStoreSelector: TypedUseSelectorHook<RootState> = useSelector;
export default useStoreSelector;
