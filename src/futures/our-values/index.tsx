import {  useState } from 'react';
import cl from 'classnames';
import style from './index.module.scss';
import { Flex, Text } from '@mantine/core';
import IconHandshake from '../../../public/images/icon-handshake.svg';
import IconArrowUp from '../../../public/images/icon-arrow-up.svg';
import IconHome from '../../../public/images/icon-home-2.svg';
import { useMediaQuery } from '@mantine/hooks';
import { Carousel } from '@mantine/carousel';
import CArrowRight from '../../../public/images/carousel-arrow-right.svg';
import CArrowLeft from '../../../public/images/carousel-arrow.svg';
import useTranslation from "next-translate/useTranslation";

export default function OurValues()  {
  const [carousel,setCarousel] = useState(false)
  const matches = useMediaQuery('(max-width: 834px)');
  const { t } = useTranslation('common');

  setTimeout(() => {
    setCarousel(true)
  }, 1000);

  return (
      <>
        <div className={cl(style.section, 'container')}>
          <Text className={style.sectionTitle}>
            {t('ourValues')}
          </Text>
          {!matches && <Flex columnGap={24}>
            <div className={style.card}>
              <Flex align={'center'} columnGap={16}>
                <IconHandshake />
                <Text component={'p'} className={style.cardTitle}>
                  {t('respect')}
                </Text>
              </Flex>
              <Text component={'p'} className={style.text}>
                {t('ourValuesCardOne')}
              </Text>
            </div>
            <div className={style.card}>
              <Flex align={'center'} columnGap={16}>
                <IconHandshake />
                <Text component={'p'} className={style.cardTitle}>
                  {t('cooperation')}
                </Text>
              </Flex>
              <Text component={'p'} className={style.text}>
                {t('ourValuesCardTwo')}
              </Text>
            </div>
            <div className={style.card}>
              <Flex align={'center'} columnGap={16}>
                <IconArrowUp />
                <Text component={'p'} className={style.cardTitle}>
                  {t('development')}
                </Text>
              </Flex>
              <Text component={'p'} className={style.text}>
                {t('ourValuesCardThree')}
              </Text>
            </div>
            <div className={style.card}>
              <Flex align={'center'} columnGap={16}>
                <IconHome />
                <Text component={'p'} className={style.cardTitle}>
                  {t('simplicity')}
                </Text>
              </Flex>
              <Text component={'p'} className={style.text}>
                {t('ourValuesCardFour')}
              </Text>
            </div>
          </Flex>}
          { matches && (carousel && <Carousel
              slideSize='33.333333%'
              slideGap='md'
              loop
              align='center'
              slidesToScroll={1}
              classNames={{
                control: style.control,
                controls: style.controls,
              }}
              nextControlIcon={<CArrowRight />}
              previousControlIcon={<CArrowLeft />}
          >
            <Carousel.Slide size={343}>
              <div className={style.card}>
                <Flex align={'center'} columnGap={16}>
                  <IconHandshake />
                  <Text component={'p'} className={style.cardTitle}>
                    {t('respect')}
                  </Text>
                </Flex>
                <Text component={'p'} className={style.text}>
                  {t('ourValuesCardOne')}
                </Text>
              </div>
            </Carousel.Slide>
            <Carousel.Slide size={343}>
              <div className={style.card}>
                <Flex align={'center'} columnGap={16}>
                  <IconHandshake />
                  <Text component={'p'} className={style.cardTitle}>
                    {t('cooperation')}
                  </Text>
                </Flex>
                <Text component={'p'} className={style.text}>
                  {t('ourValuesCardTwo')}
                </Text>
              </div>
            </Carousel.Slide>
            <Carousel.Slide size={343}>
              <div className={style.card}>
                <Flex align={'center'} columnGap={16}>
                  <IconArrowUp />
                  <Text component={'p'} className={style.cardTitle}>
                    {t('development')}
                  </Text>
                </Flex>
                <Text component={'p'} className={style.text}>
                  {t('ourValuesCardThree')}
                </Text>
              </div>
            </Carousel.Slide>
            <Carousel.Slide size={343}>
              <div className={style.card}>
                <Flex align={'center'} columnGap={16}>
                  <IconHome />
                  <Text component={'p'} className={style.cardTitle}>
                    {t('simplicity')}
                  </Text>
                </Flex>
                <Text component={'p'} className={style.text}>
                  {t('ourValuesCardFour')}
                </Text>
              </div>
            </Carousel.Slide>
          </Carousel>)}
        </div>
      </>
  );
};