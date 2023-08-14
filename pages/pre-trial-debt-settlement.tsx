import DebtSettlementPage from "../src/pages/our-activities/debt-settlement";
import {useRouter} from "next/router";
import {useTitleStore} from "../src/shared/store/title";
import {shallow} from "zustand/shallow";
import {useEffect} from "react";
import Head from "next/head";


export default function DebtSettlement() {
    const navigate = useRouter()
    const [fetchTitle, titleItem, reset] = useTitleStore(s => [s.fetchTitle, s.titleItem, s.reset], shallow);
    useEffect(() => {
        fetchTitle(navigate.route)
        return () => reset();
    }, [])
    return (
        <>
            <Head>
                <title>Spectrum Collection</title>
                <meta name="description"
                      content={titleItem?.description ? titleItem?.description : "DebtSettlement"}/>
                <meta name='keywords' content='test keywords, test2 rew rew,rewrwe'/>
            </Head>
            <DebtSettlementPage/>
        </>
    )
}