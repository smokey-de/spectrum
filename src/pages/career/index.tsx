import React from 'react';
import style from './index.module.scss';
import { Box, Text, Anchor } from '@mantine/core';
import ImageOne from '../../../public/images/image-career.png';
import cl from 'classnames';
import {OurValues, WeTrusted} from "../../futures";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import Trans from "next-translate/Trans";

export default function Career(){
  const { t } = useTranslation('common');
  return (
      <>
        <Box className={'container'}>
          <Text maw={1182} m={'0 auto'} className={'headerTitle'} component={'p'}>
            <Trans i18nKey={'common:careerTitle'} components={{span: <span/>}}/>
          </Text>

          <div className={style.sectionOne}>
            <Text className={cl(style.title,'title')} component={'p'}>
              {t('careerWithUs')}
            </Text>
            <div className={style.leftTexts}>
              <Text className={'title'} component={'p'}>
                {t('careerWithUs')}
              </Text>

              <Text className={style.text} component={'p'}>
                <Trans components={{b: <b/>}} i18nKey={"common:careerWithUsText"}/>
              </Text>

              <Anchor target={'_blank'} href={'https://tashkent.hh.uz/employer/9857172?hhtmFrom=vacancy'} className={style.link}>
                <div className={style.linkItem}>
                <span>
                {t('careerWithUsBtn')}
              </span>
                </div>
              </Anchor>
            </div>
            <div className={style.imageWrapper}>
              <Image src={ImageOne} alt={'ImageOne'}/>
            </div>
          </div>
        </Box>

        <OurValues />
        <WeTrusted />
      </>
  );
};