import React, { useState } from 'react';
import style from './index.module.scss';
import { Flex, Text } from '@mantine/core';
import IconDebtSettlement from '../../../public/images/icon-debt-settlement.svg';
import IconPiggybank from '../../../public/images/icon-piggybank.svg';
import IconCash from '../../../public/images/icon-cash.svg';
import { useMediaQuery, useScrollIntoView, useWindowScroll } from '@mantine/hooks';
import { Carousel } from '@mantine/carousel';
import ArrowLeft from '../../../public/images/carousel-arrow.svg';
import ArrowRight from '../../../public/images/carousel-arrow-right.svg';
import { Trans, useTranslation } from 'react-i18next';

import {useRouter} from "next/router";
import {routePaths} from "../layout/navbar/libs";
import {usePathname} from "next/navigation";

export default function OtherActivities() {
  const location = usePathname()
  const navigate = useRouter()
  const matches = useMediaQuery('(max-width: 834px)');
  const { t } = useTranslation();
  const [scroll, scrollTo] = useWindowScroll();
  const [carousel,setCarousel] = useState(false)

  setTimeout(() => {
    setCarousel(true)
  }, 500);
  return (
    <>
      <div className={style.cards}>
        <Text component={'p'} className={style.title}>
          {t('otherActivities')}
        </Text>

        { !matches && <Flex columnGap={24} justify={'center'}>
          { location !== `/${routePaths.monitoringLevelOverdue}` && <div onClick={() => {
            scrollTo({ y: 0 })
            navigate.push(`/${routePaths.monitoringLevelOverdue}`);
          }} className={style.card}>
            <Flex columnGap={12} align={'center'}>
              <div className={style.icon}>
                <IconDebtSettlement />
              </div>
              <Text component={'p'} className={style.cardTitle}>
                {t('activitiesCardOne')}
              </Text>
            </Flex>
          </div>}
          { location !== `/${routePaths.debtSettlement}` && <div onClick={() => {
            scrollTo({ y: 0 })
            navigate.push(`/${routePaths.debtSettlement}`);
          }} className={style.card}>
            <Flex columnGap={12} align={'center'}>
              <div className={style.icon}>
                <IconDebtSettlement />
              </div>
              <Text component={'p'} className={style.cardTitle}>
                {t('activitiesCardTwo')}
              </Text>
            </Flex>
          </div>}
          { location !== `/${routePaths.portfolioAnalysis}` && <div onClick={() => {
            scrollTo({ y: 0 })
            navigate.push(`/${routePaths.portfolioAnalysis}`);
          }} className={style.card}>
            <Flex columnGap={12} align={'center'}>
              <div className={style.icon}>
                <IconPiggybank />
              </div>
              <Text component={'p'} className={style.cardTitle}>
                <Trans components={{br: <br/>}}>
                  activitiesCardThree
                </Trans>
              </Text>
            </Flex>
          </div>}
          { location !== `/${routePaths.legalSupportRecoveryProcess}` && <div onClick={() => {
            scrollTo({ y: 0 })
            navigate.push(`/${routePaths.legalSupportRecoveryProcess}`);
          }} className={style.card}>
            <Flex columnGap={12} align={'center'}>
              <div className={style.icon}>
                <IconCash />
              </div>
              <Text component={'p'} className={style.cardTitle}>
                {t('activitiesCardFour')}
              </Text>
            </Flex>
          </div>}
        </Flex>}

        { matches && (carousel && <Carousel
          height={150}
          slideGap='24px'
          loop
          align='center'
          slidesToScroll={1}
          classNames={{
            control: style.control,
            controls: style.controls,
          }}
          nextControlIcon={<ArrowRight />}
          previousControlIcon={<ArrowLeft />}
        >
          {  location !== `/${routePaths.monitoringLevelOverdue}` && <Carousel.Slide>
            <div onClick={() => {
              navigate.push(`/${routePaths.monitoringLevelOverdue}`);
              scrollTo({ y: 0 })
            }} className={style.card}>
              <Flex columnGap={12} align={'center'}>
                <div className={style.icon}>
                  <IconDebtSettlement />
                </div>
                <Text component={'p'} className={style.cardTitle}>
                  {t('activitiesCardOne')}
                </Text>
              </Flex>
            </div>
          </Carousel.Slide>}
          {  location !== `/${routePaths.debtSettlement}` &&  <Carousel.Slide>
            <div onClick={() => {
              navigate.push(`/${routePaths.debtSettlement}`);
              scrollTo({ y: 0 })
            }} className={style.card}>
              <Flex columnGap={12} align={'center'}>
                <div className={style.icon}>
                  <IconDebtSettlement />
                </div>
                <Text component={'p'} className={style.cardTitle}>
                  {t('activitiesCardTwo')}
                </Text>
              </Flex>
            </div>
          </Carousel.Slide>}
          {  location !== `/${routePaths.portfolioAnalysis}` &&  <Carousel.Slide>
            <div onClick={() => {
              navigate.push(`/${routePaths.portfolioAnalysis}`);
              scrollTo({ y: 0 })
            }} className={style.card}>
              <Flex columnGap={12} align={'center'}>
                <div className={style.icon}>
                  <IconPiggybank />
                </div>
                <Text component={'p'} className={style.cardTitle}>
                  <Trans components={{br: <br/>}}>
                    activitiesCardThree
                  </Trans>
                </Text>
              </Flex>
            </div>
          </Carousel.Slide>}
          {  location !== `/${routePaths.legalSupportRecoveryProcess}` &&  <Carousel.Slide>
            <div onClick={() => {
              navigate.push(`/${routePaths.legalSupportRecoveryProcess}`);
              scrollTo({ y: 0 })
            }} className={style.card}>
              <Flex columnGap={12} align={'center'}>
                <div className={style.icon}>
                  <IconCash />
                </div>
                <Text component={'p'} className={style.cardTitle}>
                  {t('activitiesCardFour')}
                </Text>
              </Flex>
            </div>
          </Carousel.Slide>}

        </Carousel>)}
      </div>
    </>
  );
};