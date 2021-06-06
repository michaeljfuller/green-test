import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {MagicUserMetadata} from "@magic-sdk/admin";

interface UserState {
    current?: MagicUserMetadata;
    authenticating: boolean;
    signingIn: boolean;
    authError?: Error;
}
const initialState: UserState = {
    authenticating: false,
    signingIn: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,

    reducers: {

        setUser: (state, action: PayloadAction<MagicUserMetadata>) => {
            state.current = action.payload || undefined;
            state.signingIn = false;
            state.authenticating = false;
            state.authError = undefined;
        },

        removeUser: (state) => {
            state.current = undefined;
        },

        setAuthenticating: (state, action: PayloadAction<boolean>) => {
            state.authenticating = action.payload;
            state.authError = undefined;
        },

        setSigningIn: (state, action: PayloadAction<boolean>) => {
            state.signingIn = action.payload;
            state.authError = undefined;
        },

        setAuthError: (state, action: PayloadAction<Error>) => {
            state.authError = action.payload;
            state.signingIn = false;
            state.authenticating = false;
            state.current = undefined;
        },

    },

})

// Action creators are generated for each case reducer function
export const { setUser, removeUser, setAuthenticating, setSigningIn, setAuthError } = userSlice.actions;
export default userSlice.reducer;
