import {AppProps} from "next/app";
import Head from "next/head";
import {MantineProvider} from "@mantine/core";
import '../public/index.scss'
import Layout from "../src/futures/layout";
import {appWithTranslation} from 'next-i18next';
import useTranslation from 'next-translate/useTranslation'
import {useEffect} from "react";

function App(props: AppProps) {
    const {Component, pageProps} = props;
    const {t,lang} = useTranslation();

    useEffect(() => {
        localStorage.setItem('languageLocal', lang)
    },[lang])

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