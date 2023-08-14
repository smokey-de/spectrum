import {News as NewsPage} from "../../src/pages"
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
export default function AllNews() {
    const { t } = useTranslation('common');
    return (<>
          <Head>
                <title>Spectrum Collection - {t('news')}</title>
                <meta name="description" content="This is Spectrum Collection news page"/>

            </Head>
        <NewsPage/>
    </>)
}