import Head from 'next/head'
import css from '../styles/Home.module.scss'
import Card from "../src/components/ui/containers/Card";
import {useUser} from "../src/hooks/useUser";
import AuthenticationRequired from "../src/components/ui/containers/AuthenticationRequired";

export default function Home() {
    const {user} = useUser();

    return (
        <div className={css.root}>
            <Head>
                <title>Green Test</title>
                <meta name="description" content="Test for Green"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main>
                <Card style={{ minWidth: 400 }}>
                    <AuthenticationRequired>
                        <p>Logged in as {user?.email}</p>
                    </AuthenticationRequired>
                </Card>
            </main>

        </div>
    );
}
