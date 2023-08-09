import style from './index.module.scss';
import { Carousel } from '@mantine/carousel';
import { Text } from '@mantine/core';
import ImageOne from '../../../public/images/main-image/carousel-one.png';
import ImageTwo from '../../../public/images/main-image/carousel-two.png';
import ImageThree from '../../../public/images/main-image/carousel-three.png';
import ArrowLeft from '../../../public/images/carousel-arrow.svg';
import ArrowRight from '../../../public/images/carousel-arrow-right.svg';
import { useMediaQuery } from '@mantine/hooks';
import { Trans, useTranslation } from 'react-i18next';
import cl from "classnames";

export default function MainCarousel() {
  const { t } = useTranslation();
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
                    <Trans components={{ span: <span/> }}>
                      main-carousel-one
                    </Trans>
                  </Text>
                </div>
              </div>
            </Carousel.Slide>
            <Carousel.Slide>
              <div className={cl(style.card,style.two)} >
                <div className={style.cardText}>
                  <Text component={'p'}>
                    <Trans components={{ span: <span/> }}>
                      mainCarouselTwo
                    </Trans>
                  </Text>
                </div>
              </div>
            </Carousel.Slide>
            <Carousel.Slide>
              <div className={cl(style.card,style.three)} >
                <div className={style.cardText}>
                  <Text component={'p'}>
                    <Trans components={{ span: <span/> }}>
                      mainCarouselThree
                    </Trans>
                  </Text>
                </div>
              </div>
            </Carousel.Slide>
          </Carousel>
        </div>
      </>
  );
}