import {useDispatch} from "react-redux";
import type {AppDispatch} from "../store";

/** Typed version of react-redux's useDispatch() */
export const useStoreDispatch = () => useDispatch<AppDispatch>()
export default useStoreDispatch;
