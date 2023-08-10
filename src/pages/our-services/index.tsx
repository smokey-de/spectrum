import React from 'react';
import style from './index.module.scss';
import { Box, Flex, Text, Button } from '@mantine/core';

import IconCheck from '../../../public/images/icon-checkmark-3.svg';
import ImageOne from '../../../public/images/our-services/image-one.png';
import ImageTwo from '../../../public/images/our-services/image-two.png';
import ImageThree from '../../../public/images/our-services/image-three.png';
import cl from 'classnames';
import { Trans, useTranslation } from 'react-i18next';
import {OurMission, WeTrusted} from "../../futures";
import Image from "next/image";

export default function OurServices()  {
  const { t } = useTranslation();
  return (
      <>
        <Box className={'container'}>
          <div className={style.sectionOne}>
            <Text component={'p'} className={'headerTitle'}>
              <Trans components={{span: <span/>}}>
                servicesTitle
              </Trans>
            </Text>
            <Text className={style.headerSubTitle} component={'p'}>
              {t('servicesSubtitle')}
            </Text>
          </div>

          <Flex className={cl(style.box, style.boxColumn)}>
            <Text mb={24} className={cl(style.title, 'title')} component={'p'}>
              {t('servicesBoxTitleOne')}
            </Text>
            <div className={style.boxText}>
              <Text mb={24} className={'title'} component={'p'}>
                {t('servicesBoxTitleOne')}
              </Text>
              <Flex className={style.text}>
                <IconCheck />
                <Text component={'p'}>
                  {t('servicesBox1')}
                </Text>
              </Flex>
              <Flex className={style.text}>
                <IconCheck />
                <Text component={'p'}>
                  {t('servicesBox2')}
                </Text>
              </Flex>
              <Flex className={style.text}>
                <IconCheck />
                <Text component={'p'}>
                  {t('servicesBox3')}
                </Text>
              </Flex>
              <Flex className={style.text}>
                <IconCheck />
                <Text component={'p'}>
                  {t('servicesBox4')}
                </Text>
              </Flex>
              <Flex className={style.text}>
                <IconCheck />
                <Text component={'p'}>
                  {t('servicesBox5')}
                </Text>
              </Flex>
              <Flex className={style.text}>
                <IconCheck />
                <Text component={'p'}>
                  {t('servicesBox6')}
                </Text>
              </Flex>
            </div>
            <div className={style.boxImage}>
              <Image src={ImageOne} alt={'ImageOne'}/>
            </div>
          </Flex>
          <Flex className={style.box}>
            <Text mb={24} className={cl(style.title, 'title')} component={'p'}>
              {t('servicesBoxTitleTwo')}
            </Text>
            <div className={style.boxImage}>
              <Image src={ImageTwo} alt={'ImageTwo'}/>
            </div>
            <div className={style.boxText}>
              <Text mb={24} className={'title'} component={'p'}>
                {t('servicesBoxTitleTwo')}
              </Text>
              <Flex className={style.text}>
                <IconCheck />
                <Text component={'p'}>
                  {t('servicesBox7')}
                </Text>
              </Flex>
              <Flex className={style.text}>
                <IconCheck />
                <Text component={'p'}>
                  {t('servicesBox8')}
                </Text>
              </Flex>
              <Flex className={style.text}>
                <IconCheck />
                <Text component={'p'}>
                  {t('servicesBox9')}
                </Text>
              </Flex>
              <Flex className={style.text}>
                <IconCheck />
                <Text component={'p'}>
                  {t('servicesBox10')}
                </Text>
              </Flex>
            </div>
          </Flex>
          <Flex className={cl(style.box, style.boxColumn)}>
            <Text mb={24} className={cl(style.title, 'title')} component={'p'}>
              {t('servicesBoxTitleThree')}
            </Text>
            <div className={style.boxText}>
              <Text mb={24} className={'title'} component={'p'}>
                {t('servicesBoxTitleThree')}
              </Text>
              <Flex className={style.text}>
                <IconCheck />
                <Text component={'p'}>
                  {t('servicesBox11')}
                </Text>
              </Flex>
              <Flex className={style.text}>
                <IconCheck />
                <Text component={'p'}>
                  {t('servicesBox12')}
                </Text>
              </Flex>
              <Flex className={style.text}>
                <IconCheck />
                <Text component={'p'}>
                  {t('servicesBox13')}
                </Text>
              </Flex>
            </div>
            <div className={style.boxImage}>
              <Image src={ImageThree} alt={'ImageThree'}/>
            </div>
          </Flex>

          <OurMission />
        </Box>
        <WeTrusted />
      </>
  );
};