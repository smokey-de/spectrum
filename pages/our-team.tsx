import {OurTeam as OurTeamPage} from "../src/pages"
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";

export default function OurTeam() {
     const { t } = useTranslation('common');
    return (
        <>
            <Head>
                <title>Spectrum Collection - {t('ourTeam')}</title>
                <meta name="description" content="This is Spectrum Collection Our team page"/>
                <meta name='keywords' content='test keywords, test2 rew rew,rewrwe'/>
            </Head>
            <OurTeamPage/>
        </>
    )
}