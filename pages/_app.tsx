import '../styles/globals.scss';
import SignInContext, {defaultSignIn} from "../src/contexts/SignInContext";

function MyApp({Component, pageProps}) {
    return <>
        <SignInContext.Provider value={defaultSignIn}>
            <Component {...pageProps} />
        </SignInContext.Provider>
    </>;
}

export default MyApp
