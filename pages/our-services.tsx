import {OurServices as OurServicesPage} from "../src/pages"
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import {useRouter} from "next/router";
import {useTitleStore} from "../src/shared/store/title";
import {shallow} from "zustand/shallow";
import {useEffect} from "react";

export default function OurServices() {
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
                <title>Spectrum Collection - {t('services')}</title>
                <meta name="description" content={titleItem?.description ? titleItem?.description : "OurServices"}/>
            </Head>
            <OurServicesPage/>
        </>
    )
}