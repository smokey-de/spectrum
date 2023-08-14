import {Home as HomePage} from '../src/pages'
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import {useTitleStore} from "../src/shared/store/title";
import {shallow} from "zustand/shallow";
import {useEffect} from "react";

export default function Main() {
    const {t} = useTranslation('common');
    const [fetchTitle, titleItem, reset] = useTitleStore(s => [s.fetchTitle, s.titleItem, s.reset], shallow);
    useEffect(() => {
        fetchTitle('main')
        return () => reset();
    }, [])
    return (
        <>
            <Head>
                <title>Spectrum Collection - {t('main')}</title>
                <meta name="description" content={titleItem?.description ? titleItem?.description : "Main"}/>
            </Head>
            <HomePage/>
        </>
    );
}