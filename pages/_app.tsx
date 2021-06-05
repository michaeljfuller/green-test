import { Provider as ReduxProvider } from 'react-redux'
import '../styles/globals.scss';
import SignInContext, {defaultSignIn} from "../src/contexts/SignInContext";
import store from "../src/store";
import {useUser} from "../src/hooks/useUser";

function MyApp({Component, pageProps}) {
    useUser();
    return <Component {...pageProps} />;
}

export default function MyAppWrapper({Component, pageProps}) {
    return <>
        <ReduxProvider store={store}>
            <SignInContext.Provider value={defaultSignIn}>
                <MyApp Component={Component} pageProps={pageProps} />
            </SignInContext.Provider>
        </ReduxProvider>
    </>;
}
