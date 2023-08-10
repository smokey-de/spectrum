import {Home as HomePage} from '../src/pages'
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";

export default function Home() {
    const { t } = useTranslation('common');
    return (
        <>
            <Head>
                <title>Spectrum Collection - {t('main')}</title>
                <meta name="description" content="This is Spectrum Collection Main page"/>
                <meta name='keywords' content='test keywords, test2 rew rew,rewrwe'/>
            </Head>
            <HomePage/>
        </>
    );
}