import {Career as CareerPage} from "../src/pages"
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";

export default function Career() {
    const { t } = useTranslation('common');
    return (
        <>
             <Head>
                <title>Spectrum Collection - {t('careers')}</title>
                <meta name="description" content="This is Spectrum Collection Career page"/>
                <meta name='keywords' content='test keywords, test2 rew rew,rewrwe'/>
            </Head>
            <CareerPage/>
        </>
    )
}