import React, { useEffect } from 'react';
import style from './index.module.scss';
import { Box, Text } from '@mantine/core';
import { useMediaQuery, useWindowScroll } from '@mantine/hooks';
import { shallow } from 'zustand/shallow';
import {useNewsStore} from "../../shared/store/news";
import {OurMission} from "../../futures";
import {useRouter} from "next/router";

export default function News() {
  const matches = useMediaQuery('(max-width: 834px)');
  const contentTextM = matches ? '12px 0 40px' : '43px 0 50px';
  const [scroll, scrollTo] = useWindowScroll();
  const [newsInfo, fetchNewInfo] = useNewsStore(s => [s.newsInfo, s.fetchNewInfo], shallow);
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    if (!id) return;
    fetchNewInfo(+id);
    setTimeout(()=> scrollTo({ y: 0 }),0)
  }, [id]);

  return (
      <>
        <Box className={'container'}>
          <Text component={'p'} className={'headerTitle'}>
            {newsInfo?.title || '-'}
          </Text>

          <Text component={'p'} className={style.date}>
            {newsInfo?.publish_date || '-'}
          </Text>

          <div className={style.section}>
            <img src={newsInfo?.image} alt={'img'} width={'100%'}
                 height={matches ? '221px' : '569px'} />
            <div className={style.newsWrapper}>
              <Text component={'p'} className={style.text} m={contentTextM}
                    dangerouslySetInnerHTML={{ __html: newsInfo?.content || '-'}} />

            </div>
          </div>
          <OurMission m={matches ? '40px auto' : '80px auto'} />
        </Box>
      </>
  );
};