import style from "./footer.module.scss"
import { Text, Anchor, Flex } from '@mantine/core';
import { useMediaQuery, useScrollIntoView } from '@mantine/hooks';
import Link  from 'next/link';
import { useTranslation } from 'react-i18next';
import Logo from "../../../../public/images/logo.svg"
import IconTelegram from "../../../../public/images/icon-telegram.svg"
import IconInstagram from "../../../../public/images/icon-instagram.svg"
import IconFacebook from "../../../../public/images/icon-facebook.svg"
import IconLinkedin from "../../../../public/images/icon-linkedin.svg"
export default function Footer() {
    const matches = useMediaQuery('(max-width: 1439px)');
    const { t } = useTranslation();
    // const { scrollIntoView } = useScrollIntoView<HTMLDivElement>({
    //     offset: 10,
    // });
    //
    const scrollTop = () => {
        // scrollIntoView({
        //     alignment: 'start',
        // })
        console.log('click')
    }
    return (
        <>
            <div className={style.footerWrapper}>
                <div className={style.footer}>
                    <div className={style.footerLeft}>
                        <Logo />
                        <Text component={'p'} className={style.leftTitle}>
                            {t('partnerBusiness')}
                        </Text>
                        <ul>
                            <li>
                                <Anchor  onClick={scrollTop} component={Link} href={'/about'}>
                                    {t('aboutUs')}
                                </Anchor>
                            </li>
                            <li>
                                <Anchor onClick={scrollTop} component={Link} href={'/our-team'}>
                                    {t('ourTeam')}
                                </Anchor>
                            </li>
                            <li>
                                <Anchor onClick={scrollTop} component={Link} href={'/our-services'}>
                                    {t('services')}
                                </Anchor>
                            </li>
                            <li>
                                <Anchor onClick={scrollTop} component={Link} href={'/all-news'}>
                                    {t('news')}
                                </Anchor>
                            </li>
                            <li>
                                <Anchor onClick={scrollTop} component={Link} href={'/career'}>
                                    {t('careers')}
                                </Anchor>
                            </li>
                        </ul>
                    </div>
                    <div className={style.footerRight}>
                        <Text component={'p'} className={style.rightTitle}>
                            {t('socialMedia')}
                        </Text>

                        <Flex className={style.messengers} m={'16px 0 32px'} columnGap={matches ? 24 : 36}>
                            <Anchor target={'_blank'} href={'https://t.me/spectrumcollection'}>
                                <IconTelegram />
                            </Anchor>
                            <Anchor target={'_blank'} href={'https://www.instagram.com/spectrumcollection.uz/?igshid=NTc4MTIwNjQ2YQ%3D%3D'}>
                                <IconInstagram />
                            </Anchor>
                            <Anchor target={'_blank'} href={'https://www.facebook.com/Spectrumcollection.uz'}>
                                <IconFacebook />
                            </Anchor>
                            <Anchor target={'_blank'} href={'https://www.linkedin.com/company/spectrum-collection/'}>
                                <IconLinkedin />
                            </Anchor>
                        </Flex>
                        <Text className={style.numberLabel} component={'p'}>
                            {t('haveQuestions')}
                        </Text>
                        <Anchor className={style.number} href={'tel:+998 71 202 34 34'}>
                            +998 71 202 34 34
                        </Anchor>
                    </div>
                </div>
            </div>
        </>
    )
}