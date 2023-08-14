import style from './index.module.scss';
import {Carousel} from '@mantine/carousel';
import {Text} from '@mantine/core';
import ArrowLeft from '../../../public/images/carousel-arrow.svg';
import ArrowRight from '../../../public/images/carousel-arrow-right.svg';
import {useMediaQuery} from '@mantine/hooks';
import cl from "classnames";
import useTranslation from "next-translate/useTranslation";
import Trans from "next-translate/Trans";
import {shallow} from "zustand/shallow";
import {useEffect} from "react";
import {useCarouselStore} from "../../shared/store/carousel";
import Image from "next/image";

export default function MainCarousel() {
    const {t} = useTranslation('common');
    const matches = useMediaQuery('(max-width: 834px)');

    const [fetchCarousel, carouselList, reset] = useCarouselStore(s => [s.fetchCarousel, s.carouselList, s.reset], shallow);
    useEffect(() => {
        fetchCarousel();
        return () => reset();
    }, []);

    return (
        <>
            <div className={style.carouselWrapper}>

                <Carousel loop classNames={{
                    control: style.control,
                    controls: style.controls,
                }}
                          nextControlIcon={<ArrowRight/>}
                          previousControlIcon={<ArrowLeft/>}
                          maw={1296} height={matches ? 231 : 471}
                          align='center'
                          slideSize='100%'
                          slideGap='md'
                >
                    {carouselList?.map((i:any) => (
                        <Carousel.Slide key={i?.id}>
                            <div className={style.card} style={{backgroundImage: `url(${i?.image})`}}>
                                <div className={style.cardText}>
                                    <Text component={'p'} dangerouslySetInnerHTML={{ __html: i?.title || '-'}} />
                                </div>
                            </div>
                        </Carousel.Slide>
                    ))}

                </Carousel>
            </div>
        </>
    );
}