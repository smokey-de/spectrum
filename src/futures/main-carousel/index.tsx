import style from './index.module.scss';
import { Carousel } from '@mantine/carousel';
import { Text } from '@mantine/core';
import ArrowLeft from '../../../public/images/carousel-arrow.svg';
import ArrowRight from '../../../public/images/carousel-arrow-right.svg';
import { useMediaQuery } from '@mantine/hooks';
import cl from "classnames";
import useTranslation from "next-translate/useTranslation";
import Trans from "next-translate/Trans";

export default function MainCarousel() {
  const { t } = useTranslation('common');
  const matches = useMediaQuery('(max-width: 834px)');
  return (
      <>
        <div className={style.carouselWrapper}>

          <Carousel loop classNames={{
            control: style.control,
            controls: style.controls,
          }}
                    nextControlIcon={<ArrowRight />}
                    previousControlIcon={<ArrowLeft />}
                    maw={1296} height={matches ? 231 : 471}
                    align='center'
                    slideSize='100%'
                    slideGap='md'
          >

            <Carousel.Slide>
              <div className={cl(style.card,style.one)} >
                <div className={style.cardText}>
                  <Text component={'p'}>
                    <Trans components={{ span: <span/> }} i18nKey={'common:main-carousel-one'} />
                  </Text>
                </div>
              </div>
            </Carousel.Slide>
            <Carousel.Slide>
              <div className={cl(style.card,style.two)} >
                <div className={style.cardText}>
                  <Text component={'p'}>
                    <Trans components={{ span: <span/> }} i18nKey={'common:mainCarouselTwo'} />
                  </Text>
                </div>
              </div>
            </Carousel.Slide>
            <Carousel.Slide>
              <div className={cl(style.card,style.three)} >
                <div className={style.cardText}>
                  <Text component={'p'}>
                    <Trans components={{ span: <span/> }} i18nKey={'common:mainCarouselThree'} />
                  </Text>
                </div>
              </div>
            </Carousel.Slide>
          </Carousel>
        </div>
      </>
  );
}