import Head from 'next/head'
import Image from 'next/image'
import css from '../styles/Home.module.scss'

export default function Home() {
    return (
        <div className={css.root}>
            <Head>
                <title>Green Test</title>
                <meta name="description" content="Test for Green"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main>

                <Image src="/green.svg" alt="Green Logo" width={135} height={34} />

            </main>
        </div>
    );
}
