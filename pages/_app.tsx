import { Provider as ReduxProvider } from 'react-redux'
import '../styles/globals.scss';
import AuthApiContext, {defaultSignIn as signIn, defaultSignOut as signOut} from "../src/contexts/AuthApiContext";
import store from "../src/store";
import {useUser} from "../src/hooks/useUser";

function MyApp({Component, pageProps}) {
    useUser();
    return <Component {...pageProps} />;
}

export default function MyAppWrapper({Component, pageProps}) {
    return <>
        <ReduxProvider store={store}>
            <AuthApiContext.Provider value={{signIn, signOut}}>
                <MyApp Component={Component} pageProps={pageProps} />
            </AuthApiContext.Provider>
        </ReduxProvider>
    </>;
}
