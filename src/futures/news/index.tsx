import  { useCallback, useEffect } from 'react';
import style from './index.module.scss';
import { Anchor, Box, Button, Flex, Image, Text } from '@mantine/core';
import ArrowRight from '../../../public/images/arrow-right.svg';
import ArrowRounded from '../../../public/images/arrow-rounded.svg';
import cl from 'classnames';
import { Link, useNavigate } from 'react-router-dom';
import { useMediaQuery } from '@mantine/hooks';
import { Carousel } from '@mantine/carousel';
import CArrowLeft from '../../../public/images/carousel-arrow.svg';
import CArrowRight from '../../../public/images/carousel-arrow-right.svg';
import { useTranslation } from 'react-i18next';
import {useRouter} from "next/router";
import {INewsList} from "../../shared/api/news";
import {useNewsStore} from "../../shared/store/news";
import { shallow } from 'zustand/shallow';

export default function News() {
  const navigate = useRouter();
  const matches = useMediaQuery('(max-width: 1439px)');
  const smallMatches = useMediaQuery('(max-width: 834px)');
  const { t } = useTranslation();

  const [fetchNews, mainNewList, reset] = useNewsStore(s => [s.fetchNews, s.mainNewList, s.reset], shallow);
  useEffect(() => {
    fetchNews();

    return () => reset();
  }, []);
  // localStorage.getItem('language')

  const onNewsClick = useCallback((item: INewsList) => {
    navigate.push('/news/' + item.id);
  }, []);
  return (
      <>
        <div className={style.section}>
          <Flex mb={24} align={'center'} justify={'space-between'}>
            <Text component={'p'} className={'title'}>
              {t('news')}
            </Text>

            <Button variant={'white'} onClick={() => navigate.push('/all-news')} className={style.allNews}>
              {t('allNews')} <ArrowRight />
            </Button>
          </Flex>
          {!smallMatches && (
              <Flex className={style.cards}>
                {mainNewList?.slice(0, 3).map((i:any, index:number) =>
                    <div key={index} className={style.card}>
                      <Box>
                        <Image radius={10} src={i?.image || ''} alt={'image'} width={'100%'} height={smallMatches ? 164 : 203}
                               withPlaceholder />
                        <Text component={'p'} className={style.cardTitle}>
                          {i?.title || '-'}
                        </Text>
                        <Text component={'p'} className={style.text} dangerouslySetInnerHTML={{ __html: i?.content?.slice(0,180) + (i?.content?.length < 180 ? '' : '...') }} />
                      </Box>
                      <Flex mt={matches ? 18 : 27} justify={'space-between'}>
                        <Box>
                          <Text component={'p'} className={cl(style.badge, style.one)}>
                            {t('newsBadge')}
                          </Text>
                          <Text component={'p'} className={cl(style.badge, style.two)}>
                            {i?.publish_date || '00.00.0000'}
                          </Text>
                        </Box>
                        <Button onClick={() => null} className={style.btn}>
                          <ArrowRounded />
                        </Button>
                      </Flex>
                    </div>,
                )}
              </Flex>
          )}
          {smallMatches && (
              <>
                <Carousel
                    slideSize='33.333333%'
                    slideGap='md'
                    loop
                    align='start'
                    classNames={{
                      control: style.control,
                      controls: style.controls,
                    }}
                    nextControlIcon={<CArrowRight />}
                    previousControlIcon={<CArrowLeft />}
                >

                  {mainNewList?.slice(0, 4).map((i:any, index:number) =>
                      <Carousel.Slide key={index}>
                        <div key={index} className={style.card}>
                          <Box>
                            <Image radius={10} src={i?.image || ''} alt={'image'} width={'100%'}
                                   height={smallMatches ? 164 : 203}
                                   withPlaceholder />
                            <Text component={'p'} className={style.cardTitle}>
                              {i?.title || '-'}
                            </Text>
                            <Text component={'p'} className={style.text} dangerouslySetInnerHTML={{ __html: i?.content?.slice(0,180) + (i?.content?.length < 180 ? '' : '...') || '-' }} />
                          </Box>
                          <Flex mt={matches ? 18 : 27} justify={'space-between'}>
                            <Box>
                              <Text component={'p'} className={cl(style.badge, style.one)}>
                                {t('newsBadge')}
                              </Text>
                              <Text component={'p'} className={cl(style.badge, style.two)}>
                                {i?.publish_date || '00.00.0000'}
                              </Text>
                            </Box>
                            <Button onClick={() => null} className={style.btn}>
                              <ArrowRounded />
                            </Button>
                          </Flex>
                        </div>
                      </Carousel.Slide>,
                  )}

                </Carousel>

                <Button onClick={() => navigate.push('/all-news')} className={style.more} rightIcon={<ArrowRight />}>
                  {t('allNews')}
                </Button>
              </>
          )}
        </div>
      </>
  );
};










