'use client';

import {useTranslation} from 'next-i18next';
import Link from "next/link";
import {useRouter} from "next/router";

export default function About() {
    const router = useRouter()

    const {t, i18n} = useTranslation();

    return (
        <>
            {/*<button onClick={() => i18n.changeLanguage('en')}>en</button>*/}
            {/*<button onClick={() => i18n.changeLanguage('uz')}>uz</button>*/}
            {/*<button onClick={() => i18n.changeLanguage('ru')}>ru</button>*/}
            <Link href={router.pathname} locale="en">
                en
            </Link>
            <Link href={router.pathname} locale="ru">
                ru
            </Link>
            <Link href={router.pathname} locale="uz">
                uz
            </Link>
            <h1>
                {t('app')}
            </h1>
            <h1>
                {t('tetest')}
            </h1>
        </>
    );
}
