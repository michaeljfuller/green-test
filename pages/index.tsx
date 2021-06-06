import Head from 'next/head'
import css from '../styles/Home.module.scss'
import Card from "../src/components/ui/containers/Card";
import AuthenticationRequired from "../src/components/ui/containers/AuthenticationRequired";
import {Dashboard} from "../src/components/screens/Dashboard";

export default function Home() {
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
                        <Dashboard />
                    </AuthenticationRequired>
                </Card>
            </main>

        </div>
    );
}
