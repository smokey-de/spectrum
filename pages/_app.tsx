import {AppProps} from "next/app";
import Head from "next/head";
import {MantineProvider} from "@mantine/core";
import '../public/index.scss'
import Layout from "../src/futures/layout";
import {appWithTranslation} from 'next-i18next';
import parse from "html-react-parser";
import {useMetricsStore} from "../src/shared/store/metrics";
import {shallow} from "zustand/shallow";
import {useEffect} from "react";
import useTranslation from 'next-translate/useTranslation'

function App(props: AppProps) {
    const {Component, pageProps} = props;
    const {t, lang} = useTranslation();
    const [fetchMetrics, metricsList, reset] = useMetricsStore(s => [s.fetchMetrics, s.metricsList, s.reset], shallow);
    useEffect(() => {
        fetchMetrics();
        localStorage.setItem('languageLocal', lang)
        return () => reset();
    }, [lang]);

    return (
        <>
            <Head>
                <title>Spectrum Collection</title>
                <meta name="theme-color" content="#0071BB"/>
                <meta name="msapplication-navbutton-color" content="#0071BB"/>
                <meta name="apple-mobile-web-app-status-bar-style" content="#0071BB"/>
                {metricsList?.map((i: any) => parse(i?.code))}
            </Head>

            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={{colorScheme: "light"}}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </MantineProvider>
        </>
    );
}

export default appWithTranslation(App);