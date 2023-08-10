import {Trans, useTranslation} from 'next-i18next';
import {useRouter} from "next/router";
import {OurValues, Statistics, WeTrusted} from "../../futures";
import {Box, Button, Flex, Text} from "@mantine/core";
import style from "./index.module.scss"
import {useMediaQuery} from "@mantine/hooks";
export default function About() {
    const navigate = useRouter();
    const matches = useMediaQuery('(max-width: 834px)');
    const {t} = useTranslation();

    return (
        <>
            <Box className={'container'}>
                <Text className={'headerTitle'} component={'p'}>
                    <Trans components={{span: <span/>}}>
                        aboutTitle
                    </Trans>
                </Text>
                <Flex className={style.sectionTwo}>
                    <div className={style.boxLeft}>
                        <Text component={'p'} className={style.boxTitle}>
                            {t('ourMission')}
                        </Text>
                        <Text component={'p'} className={style.boxText}>
                            {t('ourMissionText')}
                        </Text>

                        <Button onClick={() => navigate.push('/contact')} className={style.boxBtn}>
                            {t('submitApplication')}
                        </Button>
                    </div>
                    <div className={style.boxRight}>
                        <Text mb={16} component={'p'} className={'title'}>
                            {t('WeOffer')}
                        </Text>
                        <Text className={style.boxText} component={'p'}>
                            <Trans components={{br: <br/>}}>
                                WeOfferText
                            </Trans>
                        </Text>
                    </div>
                </Flex>
                <Box mt={ matches ? 40 : 80}>
                    <Statistics />
                </Box>
                <div className={style.sectionFour}>
                    <Text align={'center'} className={'title'} component={'p'}>
                        {t('profitableCooperate')}
                    </Text>
                    <div className={style.cards}>
                        <div className={style.card}>
                            ●
                            <Text component={'p'}>
                                {t('profitableCooperateCardOne')}
                            </Text>
                        </div>
                        <div className={style.card}>
                            ●
                            <Text component={'p'}>
                                {t('profitableCooperateCardTwo')}
                            </Text>
                        </div>
                        <div className={style.card}>
                            ●
                            <Text component={'p'}>
                                {t('profitableCooperateCardThree')}
                            </Text>
                        </div>
                        <div className={style.card}>
                            ●
                            <Text component={'p'}>
                                {t('profitableCooperateCardFour')}
                            </Text>
                        </div>
                        <div className={style.card}>
                            ●
                            <Text component={'p'}>
                                {t('profitableCooperateCardFive')}
                            </Text>
                        </div>
                        <div className={style.card}>
                            ●
                            <Text component={'p'}>
                                {t('profitableCooperateCardSix')}
                            </Text>
                        </div>
                    </div>
                </div>
            </Box>
            <OurValues />
            <WeTrusted />
        </>
    );
}
