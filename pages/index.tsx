import {Home as HomePage} from '../src/pages'
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
export default function Home() {

    return (
        <>
          <HomePage/>
        </>
    );
}

// export const getStaticProps = async ({ locale = 'es-ES' }) => ({
//     props: {
//         ...(await serverSideTranslations(locale, ["common"])),
//     },
// });