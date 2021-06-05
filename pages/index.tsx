import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Green Test</title>
                <meta name="description" content="Test for Green"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>

                <Image src="/green.svg" alt="Green Logo" width={135} height={34}/>

            </main>
        </div>
    );
}
