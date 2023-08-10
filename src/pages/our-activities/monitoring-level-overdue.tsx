import React from 'react';
import style from './index.module.scss';
import { Box,  Text } from '@mantine/core';
import ImageOne from '../../../public/images/our-activities/image-1.png';
import ImageTwo from '../../../public/images/our-activities/image-2.png';

import { useMediaQuery } from '@mantine/hooks';
import {OtherActivities} from "../../futures";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import Trans from "next-translate/Trans";

const MonitoringLevelOverdue = () => {
  const { t } = useTranslation('common');
  const matches = useMediaQuery('(max-width: 834px)');
  return (
    <>
      <Box className={'container'}>
        <Text m={'0 auto'} maw={'886px'} component={'p'} className={'headerTitle'}>
          <Trans components={{span: <span/>}} i18nKey={'common:levelMonitoring'}/>
        </Text>
        <div className={style.section}>
          <Image src={ImageOne} alt={'ImageOne'}/>
          <div className={style.newsWrapper}>
            <Text component={'p'} className={style.text}>
              <Trans components={{br:<br/>}} i18nKey={'common:levelMonitoringTextOne'}/>
            </Text>
            <Box m={matches ? '40px 0 24px' : '50px 0'}>
              <Image  src={ImageTwo} alt={'ImageTwo'} />
            </Box>
            <Box className={style.box}>
              <Text className={'title'} component={'p'}>{t('levelMonitoringTitleOne')}</Text>
              <Text className={style.text} component={'p'} mt={16}>
                <Trans components={{br: <br/>}} i18nKey={'common:levelMonitoringTextTwo'}/>
              </Text>
            </Box>
            <Box mt={50} className={style.box}>
              <Text className={'title'} component={'p'}>{t('levelMonitoringTitleTwo')}</Text>
              <Text className={style.text} component={'p'} mt={16}>
                ● {t('honeCalls')} <br />
                ● {t('voiceMessages')} <br />
                ● {t('textMessages')} <br />
                ● {t('individualRequests')}
              </Text>
            </Box>
          </div>
        </div>
      </Box>
      <OtherActivities />
    </>
  );
};

export default MonitoringLevelOverdue;