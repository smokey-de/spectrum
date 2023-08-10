import {OurServices as OurServicesPage} from "../src/pages"
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";

export default function OurServices() {
    const { t } = useTranslation('common');
    return (
        <>
              <Head>
                <title>Spectrum Collection - {t('services')}</title>
                <meta name="description" content="This is Spectrum Collection OurServices page"/>
                <meta name='keywords' content='test keywords, test2 rew rew,rewrwe'/>
            </Head>
            <OurServicesPage/>
        </>
    )
}