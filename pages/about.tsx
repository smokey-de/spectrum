import {About as AboutPage} from "../src/pages"
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import {useRouter} from "next/router";
import {useTitleStore} from "../src/shared/store/title";

import {useEffect} from "react";
import {shallow} from "zustand/shallow";

export default function About() {
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
                <title>Spectrum Collection - {t('aboutCompany')}</title>
                <meta name="description" content={titleItem?.description ? titleItem?.description : "About"}/>
                <meta name='keywords' content='test keywords, test2 rew rew,rewrwe'/>
            </Head>
            <AboutPage/>
        </>
    )
}