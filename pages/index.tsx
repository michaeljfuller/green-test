import Head from 'next/head'
import css from '../styles/Home.module.scss'
import SignIn from "../src/components/screens/SignIn";
import Card from "../src/components/ui/containers/Card";

export default function Home() {
    return (
        <div className={css.root}>
            <Head>
                <title>Green Test</title>
                <meta name="description" content="Test for Green"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main>
                <Card>
                    <SignIn />
                </Card>
            </main>
        </div>
    );
}
