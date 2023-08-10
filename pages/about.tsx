import {About as AboutPage} from "../src/pages"
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";

export default function About() {
     const { t } = useTranslation('common');

    return (
        <>
             <Head>
                <title>Spectrum Collection - {t('aboutCompany')}</title>
                <meta name="description" content="This is Spectrum Collection About page"/>
                <meta name='keywords' content='test keywords, test2 rew rew,rewrwe'/>
            </Head>
            <AboutPage/>
        </>
    )
}