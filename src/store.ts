import { configureStore } from '@reduxjs/toolkit';
import userReducer from './store/user';

export const store = configureStore({
    reducer: {
        user: userReducer,
    },
    devTools: true,
});
export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
