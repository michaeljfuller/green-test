import { Provider as ReduxProvider } from 'react-redux'
import '../styles/globals.scss';
import AuthApiContext, {defaultSignIn as signIn, defaultSignOut as signOut} from "../src/contexts/AuthApiContext";
import store from "../src/store";
import {useUser} from "../src/hooks/useUser";

/** The root of the application. */
function MyApp({Component, pageProps}) {
    useUser();
    return <Component {...pageProps} />;
}

/** Wraps providers around MyApp, before it uses any of their consumers (i.e. via useUser). */
export default function MyAppWrapper({Component, pageProps}) {
    return <>
        <ReduxProvider store={store}>
            <AuthApiContext.Provider value={{signIn, signOut}}>
                <MyApp Component={Component} pageProps={pageProps} />
            </AuthApiContext.Provider>
        </ReduxProvider>
    </>;
}
