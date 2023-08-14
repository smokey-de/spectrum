import {Contact as ContactPage} from "../src/pages"
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";

export default function Contact() {
      const { t } = useTranslation('common');
    return (
        <>
            <Head>
                <title>Spectrum Collection - {t('contacts')}</title>
                <meta name="description" content="This is Spectrum Collection contacts page"/>
            </Head>
            <ContactPage/>
        </>
    )
}