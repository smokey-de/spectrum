import React from 'react';
import style from './index.module.scss';
import {Box, Text} from '@mantine/core';
import ImageOne from '../../../public/images/our-activities/image-7.png';
import ImageTwo from '../../../public/images/our-activities/image-8.png';
import {useMediaQuery} from '@mantine/hooks';
import {Trans, useTranslation} from 'react-i18next';
import {OtherActivities} from "../../futures";
import Image from "next/image";

const LegalSupportRecoveryProcess = () => {
    const matches = useMediaQuery('(max-width: 834px)');
    const {t} = useTranslation();
    return (
        <>
            <Box className={'container'}>
                <Text component={'p'} className={'headerTitle'}>
                    <Trans components={{span: <span/>, br: <br/>}}>
                        activitiesFour
                    </Trans>
                </Text>
                <div className={style.section}>
                    <Image src={ImageOne} alt={'ImageOne'}/>
                    <div className={style.newsWrapper}>
                        <Text component={'p'} className={style.text}>
                            {t('legaSupportText1')}
                        </Text>
                        <Box m={matches ? '40px 0 24px' : '50px 0'}>
                            <Image src={ImageTwo} alt={'ImageTwo'}/>
                        </Box>
                        <Box className={style.box} mt={50}>
                            <Text className={'title'} component={'p'}>{t('legaSupportTitle')}</Text>
                            <Text className={style.text} component={'p'} mt={16}>
                                ● {t('legaSupportText2')} <br/>
                                ● {t('legaSupportText3')} <br/>
                                ● {t('legaSupportText4')}
                            </Text>

                            <Text className={style.text} component={'p'} mt={16}>
                                {t('legaSupportText5')}
                            </Text>
                        </Box>
                    </div>
                </div>
            </Box>
            <OtherActivities/>
        </>
    );
};

export default LegalSupportRecoveryProcess;