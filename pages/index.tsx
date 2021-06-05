import Head from 'next/head'
import css from '../styles/Home.module.scss'
import Card from "../src/components/ui/containers/Card";
import AuthenticationRequired from "../src/components/ui/containers/AuthenticationRequired";
import useStoreSelector from "../src/hooks/useStoreSelector";

export default function Home() {
    const user = useStoreSelector((state) => state.user.current);

    return (
        <div className={css.root}>
            <Head>
                <title>Green Test</title>
                <meta name="description" content="Test for Green"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main>
                <Card style={{ minWidth: 400, minHeight: 375 }}>
                    <AuthenticationRequired>
                        <p>Logged in as {user?.email}</p>
                    </AuthenticationRequired>
                </Card>
            </main>

        </div>
    );
}
