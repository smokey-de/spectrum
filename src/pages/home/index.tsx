import {useMediaQuery, useWindowScroll} from "@mantine/hooks";
import Head from "next/head";
import {Anchor, Box, Button, Flex, Text} from "@mantine/core";
import style from "./index.module.scss";
import Image from "next/image";
import IconCheck from "../../../public/images/icon-checkmark.svg";
import IconPhone from "../../../public/images/icon-phone.svg";
import IconClipboard from "../../../public/images/icon-clipboard.svg";
import CardRectengle from "../../../public/images/card-rectengle.svg";
import {Carousel} from "@mantine/carousel";
import ArrowRight from "../../../public/images/carousel-arrow-right.svg";
import ArrowLeft from "../../../public/images/carousel-arrow.svg";
import IconCalculator from "../../../public/images/icon-calculator.svg";
import IconDebtSettlement from "../../../public/images/icon-debt-settlement.svg";
import IconPiggybank from "../../../public/images/icon-piggybank.svg";
import IconCash from "../../../public/images/icon-cash.svg";
import cl from "classnames";
import {useRouter} from "next/router";
import {routePaths} from "../../futures/layout/navbar/libs";
import {MainCarousel, News, Statistics, WeTrusted} from "../../futures";
import {useBenefitsStore} from "../../shared/store/benefits";
import {useEffect} from "react";
import {shallow} from "zustand/shallow";
import useTranslation from "next-translate/useTranslation";
import Trans from "next-translate/Trans";
import dynamic from "next/dynamic";
export default function Home() {
    const navigate = useRouter();
    const matches = useMediaQuery('(max-width: 834px)');
    const { t } = useTranslation('common');
    const [scroll, scrollTo] = useWindowScroll();

    const [fetchBenefits, benefitsList, reset] = useBenefitsStore(s => [s.fetchBenefits, s.benefitsList, s.reset], shallow);
    useEffect(() => {
        fetchBenefits();
        setTimeout(()=> scrollTo({ y: 0 }),0)
        return () => reset();
    }, []);
    return (
        <>

            <Box className={'container'}>
                <Box mt={matches ? 24 : 50}>
                    <MainCarousel />
                </Box>
                <Box className={style.sectionTwo}>
                    <div className={style.boxLeft}>
                        <Text component={'p'} className={style.title}>
                            {t('mainSectionTwoTitle')}
                        </Text>
                        <Flex className={style.textWrapper} columnGap={12} align={'center'}>
                            <IconCheck />
                            <Text component={'p'} className={style.text}>
                                {t('sectionTwoTextOne')}
                            </Text>
                        </Flex>
                        <Flex className={style.textWrapper} columnGap={12} align={'center'}>
                            <IconCheck />
                            <Text component={'p'} className={style.text}>
                                {t('sectionTwoTextTwo')}
                            </Text>
                        </Flex>
                        <Flex className={style.textWrapper} columnGap={12} align={'center'}>
                            <IconCheck />
                            <Text component={'p'} className={style.text}>
                                {t('sectionTwoTextThree')}
                            </Text>
                        </Flex>
                        <Flex className={style.textWrapper} columnGap={12} align={'center'}>
                            <IconCheck />
                            <Text component={'p'} className={style.text}>
                                {t('sectionTwoTextFour')}
                            </Text>
                        </Flex>
                        <Flex className={style.textWrapper} columnGap={12} align={'center'}>
                            <IconCheck />
                            <Text component={'p'} className={style.text}>
                                {t('sectionTwoTextFive')}
                            </Text>
                        </Flex>
                    </div>
                    <div className={style.boxRight}>
                        <Text component={'p'} className={'title'}>
                            {t('contact')}
                        </Text>

                        <Flex m={'24px 0 16px'} align={'center'} columnGap={11}>
                            <IconPhone />
                            <Anchor className={style.phoneNumber} href={'tel:+998712023434'}>
                                +998 71 202 34 34
                            </Anchor>
                        </Flex>
                        <Text component={'p'} className={style.text}>
                            <Trans components={{ b: <span /> }} i18nKey={'common:sectionTwoContactText'}/>
                        </Text>
                        <Button onClick={() => navigate.push('/contact')} className={style.btn} leftIcon={<IconClipboard />}>
                            {t('submitApplication')}
                        </Button>
                    </div>
                </Box>
                <Box mt={matches ? 40 : 80}>
                    <Statistics />
                </Box>
                <div className={style.sectionFour} >
                    <div className={style.textWrapper}>
                        <Text component={'p'} className={'title'}>
                            <Trans components={{ br: <br /> }} i18nKey={'common:activities'}/>
                        </Text>
                    </div>
                    {matches && <Carousel
                        w={'100%'}
                        height={150}
                        slideSize={300}
                        slideGap={16}
                        loop
                        align='center'
                        slidesToScroll={1}
                        className={style.carousel}
                        classNames={{
                            control: style.control,
                            controls: style.controls,
                        }}
                        nextControlIcon={<ArrowRight />}
                        previousControlIcon={<ArrowLeft />}
                    >
                        <Carousel.Slide>
                            <div onClick={() => {
                                navigate.push(`/${routePaths.monitoringLevelOverdue}`);
                                scrollTo({ y: 0 })
                            }} className={style.card}>
                                <Flex columnGap={12}>
                                    <div className={style.icon}>
                                        <IconCalculator />
                                    </div>
                                    <Text component={'p'} className={style.cardTitle}>
                                        <Trans components={{ span: <p /> }} i18nKey={'common:activitiesMainOne'}/>
                                    </Text>
                                </Flex>
                            </div>
                        </Carousel.Slide>
                        <Carousel.Slide>
                            <div onClick={() => {
                                navigate.push(`/${routePaths.debtSettlement}`);
                                scrollTo({ y: 0 })
                            }} className={style.card}>
                                <Flex columnGap={12}>
                                    <div className={style.icon}>
                                        <IconDebtSettlement />
                                    </div>
                                    <Text component={'p'} className={style.cardTitle}>
                                        <Trans components={{ span: <p />, br: <span /> }} i18nKey={'common:activitiesTwo'}/>

                                    </Text>
                                </Flex>
                            </div>
                        </Carousel.Slide>
                        <Carousel.Slide>
                            <div onClick={() => {
                                navigate.push(`/${routePaths.portfolioAnalysis}`);
                                scrollTo({ y: 0 })
                            }} className={style.card}>
                                <Flex columnGap={12}>
                                    <div className={style.icon}>
                                        <IconPiggybank />
                                    </div>
                                    <Text component={'p'} className={style.cardTitle}>
                                        <Trans components={{ span: <p />, br: <span /> }} i18nKey={'common:activitiesThree'}/>
                                    </Text>
                                </Flex>
                            </div>
                        </Carousel.Slide>
                        <Carousel.Slide>
                            <div onClick={() => {
                                navigate.push(`/${routePaths.legalSupportRecoveryProcess}`);
                                scrollTo({ y: 0 })
                            }} className={style.card}>
                                <Flex columnGap={12}>
                                    <div className={style.icon}>
                                        <IconCash />
                                    </div>
                                    <Text component={'p'} className={style.cardTitle}>
                                        <Trans components={{ span: <p />, br: <span /> }} i18nKey={'common:activitiesFour'}/>
                                    </Text>
                                </Flex>
                            </div>
                        </Carousel.Slide>
                    </Carousel>}

                    <div className={style.cardsWrapper}>
                        <div onClick={() => {
                            navigate.push(`/${routePaths.monitoringLevelOverdue}`);
                            scrollTo({ y: 0 })
                        }} className={style.card}>
                            <Flex columnGap={12}>
                                <div className={style.icon}>
                                    <IconCalculator />
                                </div>
                                <Text component={'p'} className={style.cardTitle}>
                                    {t('activitiesMainOne')}
                                </Text>
                            </Flex>
                        </div>
                        <div onClick={() => {
                            navigate.push(`/${routePaths.debtSettlement}`);
                            scrollTo({ y: 0 })
                        }} className={style.card}>
                            <Flex columnGap={12}>
                                <div className={style.icon}>
                                    <IconDebtSettlement />
                                </div>
                                <Text component={'p'} className={style.cardTitle}>
                                    <Trans components={{ span: <p />, br: <span /> }} i18nKey={'common:activitiesTwo'}/>
                                </Text>
                            </Flex>
                        </div>
                        <div onClick={() => {
                            navigate.push(`/${routePaths.portfolioAnalysis}`);
                            scrollTo({ y: 0 })
                        }} className={style.card}>
                            <Flex columnGap={12}>
                                <div className={style.icon}>
                                    <IconPiggybank />
                                </div>
                                <Text component={'p'} className={style.cardTitle}>
                                    <Trans components={{ span: <p />, br: <span /> }} i18nKey={'common:activitiesThree'}/>
                                </Text>
                            </Flex>
                        </div>
                        <div onClick={() => {
                            navigate.push(`/${routePaths.legalSupportRecoveryProcess}`);
                            scrollTo({ y: 0 })
                        }} className={style.card}>
                            <Flex columnGap={12}>
                                <div className={style.icon}>
                                    <IconCash />
                                </div>
                                <Text component={'p'} className={style.cardTitle}>
                                    <Trans components={{ span: <p />, br: <span /> }} i18nKey={'common:activitiesFour'}/>
                                </Text>
                            </Flex>
                        </div>
                    </div>

                </div>
            </Box>
            <div className={cl(style.sectionFive, 'container')}>
                <Text component={'p'} className={style.title}>
                    {t('cooperatingReceive')}
                </Text>
                {!matches && (
                    <>
                        <div className={style.cards} >
                            {benefitsList?.map((i:any,index:any) =>
                                <div key={index} className={style.card}>
                                    <CardRectengle className={style.cardCorner} />
                                    <div className={style.icon}>
                                        <img src={i.icon} alt={'icon'}/>
                                    </div>
                                    <Text component={'p'}>
                                        {i.title || '-' }
                                    </Text>
                                </div>
                            )}
                        </div>
                    </>
                )}
                {matches && (
                    <>
                        <ul>
                            {benefitsList?.map((i:any,index:any) => <li key={index} >{i?.title}</li> )}
                        </ul>
                    </>
                )}
            </div>
            <Box className={'container'}>
                <News />
            </Box>
            <WeTrusted />
        </>
    );
}