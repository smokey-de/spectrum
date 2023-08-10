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

function App(props: AppProps) {
    const {Component, pageProps} = props;
    const [fetchMetrics, metricsList, reset] = useMetricsStore(s => [s.fetchMetrics, s.metricsList, s.reset], shallow);
    useEffect(() => {
        fetchMetrics();
        return () => reset();
    }, []);
    return (
        <>
            <Head>
                <title>
                    Spectrum Collection
                </title>
                {metricsList?.map((i: any) => parse(i?.code))}
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