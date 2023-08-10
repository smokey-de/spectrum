import {About as AboutPage} from "../src/pages"
import useTranslation from "next-translate/useTranslation";

export default function About() {
    const { t } = useTranslation('common')

    return (
        <>
            <AboutPage/>
        </>
    )
}

// export const getStaticProps = async ({locale}:any) => ({
//     props: {
//         ...(await serverSideTranslations(locale, ['common'])),
//     },
// })