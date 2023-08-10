import React from 'react';
import style from './index.module.scss';
import { Box,  Text } from '@mantine/core';
import ImageOne from '../../../public/images/our-activities/image-3.png';
import ImageTwo from '../../../public/images/our-activities/image-4.png';
import { useMediaQuery } from '@mantine/hooks';
import Image from "next/image";
import {OtherActivities} from "../../futures";
import useTranslation from "next-translate/useTranslation";
import Trans from "next-translate/Trans";

export default function DebtSettlement() {
  const matches = useMediaQuery('(max-width: 834px)');
  const { t } = useTranslation();
  return (
      <>
        <Box className={'container'}>
          <Text component={'p'} className={'headerTitle'}>
            <Trans components={{ span: <span />, br: <br /> }} i18nKey={'common:activitiesTwo'}/>
          </Text>
          <div className={style.section}>
            <Image src={ImageOne}  alt={'ImageOne'} />
            <div className={style.newsWrapper}>
              <Text component={'p'} className={style.text}>
                <Trans components={{br: <br/> }} i18nKey={'common:preTrialSettlementText1'}/>
              </Text>
              <Box m={matches ? '40px 0 24px' : '50px 0'}>
                <Image  src={ImageTwo} alt={'ImageTwo'}  />
              </Box>
              <Box className={style.box} >
                <Text className={'title'} component={'p'}>{t('preTrialSettlementTitle1')}</Text>
                <Text className={style.text} component={'p'} mt={16}>
                  ● {t('preTrialSettlementText2')}<br />
                  ● {t('preTrialSettlementText3')}<br />
                  ● {t('preTrialSettlementText4')}
                </Text>
              </Box>
              <Box className={style.box}  mt={50}>
                <Text className={'title'} component={'p'}>{t('preTrialSettlementTitle2')}</Text>
                <Text className={style.text} component={'p'} mt={16}>
                  ● {t('preTrialSettlementText5')} <br />
                  ● {t('preTrialSettlementText6')} <br />
                  ● {t('preTrialSettlementText7')}
                </Text>
              </Box>
            </div>
          </div>
        </Box>
        <OtherActivities />
      </>
  );
}