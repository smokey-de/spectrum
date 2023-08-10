import {AppProps} from "next/app";
import Head from "next/head";
import {MantineProvider} from "@mantine/core";
import '../public/index.scss'
import Layout from "../src/futures/layout";
import {appWithTranslation} from 'next-i18next';
import useTranslation from 'next-translate/useTranslation'

function App(props: AppProps) {
    const {Component, pageProps} = props;

    return (
        <>
            <Head>
                <title>Home</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
            </Head>

            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={{
                    colorScheme: "light",
                }}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </MantineProvider>
        </>
    );
}

export default appWithTranslation(App);