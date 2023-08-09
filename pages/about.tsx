import {About as AboutPage} from "../src/pages"
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

export default function About() {
    return (
        <>
            <AboutPage/>
        </>
    )
}

// export const getStaticProps = async ({ locale}) => ({
//     props: {
//         ...(await serverSideTranslations(locale, ["common"])),
//     },
// });