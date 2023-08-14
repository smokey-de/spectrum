import {Career as CareerPage} from "../src/pages"
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import {useTitleStore} from "../src/shared/store/title";
import {useEffect} from "react";
import {useRouter} from "next/router";
import {shallow} from "zustand/shallow";

export default function Career() {
    const {t} = useTranslation('common');
    const navigate = useRouter()
    const [fetchTitle, titleItem, reset] = useTitleStore(s => [s.fetchTitle, s.titleItem, s.reset], shallow);
    useEffect(() => {
        fetchTitle(navigate.route)
        return () => reset();
    }, [])
    return (
        <>
            <Head>
                <title>Spectrum Collection - {t('careers')}</title>
                <meta name="description" content={titleItem?.description ? titleItem?.description : "Career"}/>
            </Head>
            <CareerPage/>
        </>
    )
}