import React, {useEffect} from 'react';
import style from './index.module.scss';
import { Text} from '@mantine/core';
import {Carousel} from '@mantine/carousel';
import ImageOne from '../../../public/images/image-buzzfeed.svg';
import ImageTwo from '../../../public/images/image-zendesk.svg';
import ImageThree from '../../../public/images/image-mollie.svg';
import ImageFour from '../../../public/images/image-dropbox.svg';

import  CArrowRight from '../../../public/images/carousel-arrow.svg';
import CArrowLeft from '../../../public/images/carousel-arrow-right.svg';
import {useMediaQuery} from '@mantine/hooks';
import {useTranslation} from 'react-i18next';

import {shallow} from 'zustand/shallow';
import {usePartnersStore} from "../../shared/store/partners";

export default function WeTrusted(){
    const matches = useMediaQuery('(max-width: 834px)');
    const {t} = useTranslation();

    const [fetchPartners, partnersList, reset] = usePartnersStore(s => [s.fetchPartners, s.partnersList, s.reset], shallow);

    useEffect(() => {
      fetchPartners();

      return () => reset();
    }, []);
    return (
        <>
            <div className={style.section}>
                <Text align={'center'} component={'p'} className={'title'}>
                    {t('weTrusted')}
                </Text>

                <Carousel
                    mt={matches ? 23 : 16}
                    height={matches ? 90 : 202}
                    loop
                    align='center'
                    slideSize={matches ? '163px' : '306px'}
                    slideGap='md'
                    slidesToScroll={matches ? 2 : 1}
                    styles={{
                        container: {alignItems: 'center'},
                    }}
                    classNames={{
                        control: style.control,
                        controls: style.controls,
                    }}
                    nextControlIcon={<CArrowLeft/>}
                    previousControlIcon={<CArrowRight/>}
                >
                    {partnersList?.map((i: any, index: number) =>
                        <Carousel.Slide key={index}>
                            <div className={style.card}>
                                <img src={i.logo || ''} alt={'logo'}/>
                            </div>
                        </Carousel.Slide>,
                    )}
                    {/*<Carousel.Slide>*/}
                    {/*    <div className={style.card}><ImageTwo /></div>*/}
                    {/*</Carousel.Slide>*/}
                    {/*<Carousel.Slide>*/}
                    {/*    <div className={style.card}>*/}
                    {/*        <ImageOne />*/}
                    {/*    </div>*/}
                    {/*</Carousel.Slide>*/}
                    {/*<Carousel.Slide>*/}
                    {/*    <div className={style.card}>*/}
                    {/*        <ImageTwo />*/}
                    {/*    </div>*/}
                    {/*</Carousel.Slide>*/}
                    {/*<Carousel.Slide>*/}
                    {/*    <div className={style.card}>*/}
                    {/*        <ImageThree />*/}
                    {/*    </div>*/}
                    {/*</Carousel.Slide>*/}
                    {/*<Carousel.Slide>*/}
                    {/*    <div className={style.card}>*/}
                    {/*        <ImageFour />*/}
                    {/*    </div>*/}
                    {/*</Carousel.Slide>*/}
                    {/*<Carousel.Slide>*/}
                    {/*    <div className={style.card}><ImageThree /></div>*/}
                    {/*</Carousel.Slide>*/}
                </Carousel>

            </div>
        </>
    );
};