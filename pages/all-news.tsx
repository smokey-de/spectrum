import {AllNews as AllNewsPage} from "../src/pages"
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";

export default function AllNews() {
    const { t } = useTranslation('common');
    return (
        <>
             <Head>
                <title>Spectrum Collection - {t('allNewsTwo')}</title>
                <meta name="description" content="This is Spectrum Collection AllNews page"/>
                <meta name='keywords' content='test keywords, test2 rew rew,rewrwe'/>
            </Head>
            <AllNewsPage/>
        </>
    )
}