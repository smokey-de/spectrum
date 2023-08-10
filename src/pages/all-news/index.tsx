import { useCallback, useEffect } from 'react';
import cl from 'classnames';
import style from './index.module.scss';
import { Box, Pagination, Text, Center, Flex, Button, Skeleton } from '@mantine/core';
import { useMediaQuery, useWindowScroll } from '@mantine/hooks';
import NewsImage from '../../../public/images/news-image.png';
import ArrowRounded from '../../../public/images/arrow-rounded.svg';
import ArrowLeft from '../../../public/images/pagination-arrow-left.svg';
import ArrowRight from '../../../public/images/pagination-arrow-right.svg';

import { shallow } from 'zustand/shallow';

import {useRouter} from "next/router";
import {useNewsStore} from "../../shared/store/news";
import {INewsList} from "../../shared/api/news";
import {OurMission} from "../../futures";
import useTranslation from "next-translate/useTranslation";
import Trans from "next-translate/Trans";

export default function AllNews() {
  const navigate = useRouter();
  const matches = useMediaQuery('(max-width: 834px)');
  const { t } = useTranslation('common');
  const [fetchNews, newsList, reset] = useNewsStore(s => [s.fetchNews, s.newsList, s.reset], shallow);
  const [scroll, scrollTo] = useWindowScroll();



  useEffect(() => {
    setTimeout(()=>     scrollTo({ y: 0 }),0)
    fetchNews();

    return () => reset();
  }, []);

  const onNewsClick = useCallback((item: INewsList) => {
    navigate.push('/news/' + item?.id);
  }, []);

  const onSetPage = (page: number) => {
    fetchNews(page);
  };

  return (
      <>
        <Box className={'container'}>
          <Text component={'p'} className={'headerTitle'}>
            <Trans components={{ span: <span /> }} i18nKey={'common:allNewsTitle'}/>
          </Text>

          { newsList?.data?.length === 0 ?
              (<div className={style.cards} >
                <Skeleton height={413} radius={10}/>
                <Skeleton height={413} radius={10}/>
                <Skeleton height={413} radius={10}/>
              </div>)
              :
              <div className={style.cards}>
                {newsList.data?.map((i, index) =>
                    <div key={index} className={style.card}>
                      <Box>
                        <img src={i?.image || ''} alt={'image'} height={matches ? 164 : 203} className={style.image}/>
                        {/*<Image src={`${i?.image || ''}`} alt={'image'} width={100} height={matches ? 164 : 203}/>*/}
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
                        <Button onClick={() => onNewsClick(i)} className={style.btn}>
                          <ArrowRounded />
                        </Button>
                      </Flex>
                    </div>,
                )}
              </div>}

          <Center mt={32}>
            <Pagination
                onChange={(page) => onSetPage(page)}
                nextIcon={ArrowRight}
                previousIcon={ArrowLeft}
                total={Math.ceil(newsList.count / 9)} className={style.pagination} />
          </Center>
          <OurMission m={matches ? '40px auto' : '80px auto'} />
        </Box>
      </>
  );
};