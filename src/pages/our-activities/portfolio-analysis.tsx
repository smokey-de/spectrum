import React from 'react';
import style from './index.module.scss';
import {Box, Text} from '@mantine/core';
import ImageOne from '../../../public/images/our-activities/image-5.png';
import ImageTwo from '../../../public/images/our-activities/image-6.png';
import {useMediaQuery} from '@mantine/hooks';
import {Trans, useTranslation} from 'react-i18next';
import Image from "next/image";
import {OtherActivities} from "../../futures";

const PortfolioAnalysis = () => {
    const matches = useMediaQuery('(max-width: 834px)');

    const {t} = useTranslation();
    return (
        <>
            <Box className={'container'}>
                <Text component={'p'} className={'headerTitle'}>
                    <Trans components={{span: <span/>}}>
                        activitiesThree
                    </Trans>
                </Text>
                <div className={style.section}>
                    <Image src={ImageOne} alt={'ImageOne'}/>
                    <div className={style.newsWrapper}>
                        <Text component={'p'} className={style.text}>
                            <Trans components={{span: <span/>}}>
                                portfolioAnalysisText1
                            </Trans>
                        </Text>
                        <Box m={matches ? '40px 0 24px' : '50px 0'}>
                            <Image src={ImageTwo} alt={'ImageTwo'}/>
                        </Box>
                        <Box className={style.box} mt={50}>
                            <Text className={'title'} component={'p'}>{t('portfolioAnalysisTitle')}</Text>
                            <Text className={style.text} component={'p'} mt={16}>
                                ● {t('segmentationDebtors')} <br/>
                                ● {t('dueDiligence')} <br/>
                                ● {t('statisticalAnalysis')} <br/>
                                ● {t('backtesting')}
                            </Text>

                            <Text className={style.text} component={'p'} mt={16}>
                                {t('portfolioAnalysisText2')}
                            </Text>
                        </Box>
                    </div>
                </div>
            </Box>
            <OtherActivities/>
        </>
    );
};

export default PortfolioAnalysis;