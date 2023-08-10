import {useEffect} from 'react';
import style from './index.module.scss';
import {Flex, Text, Box, Skeleton} from '@mantine/core';
import { useStatisticsStore } from '../../shared/store/statistics';
import { shallow } from 'zustand/shallow';
import useTranslation from "next-translate/useTranslation";
import {useBankDataStore} from "../../shared/store/dataBank";

export default function Statistics() {
    const {t,lang} = useTranslation('common');

    const [fetchStatistics, statisticsList, reset] = useStatisticsStore(s => [s.fetchStatistics, s.statisticsList, s.reset], shallow);
    const [bankDate, fetchBankData] = useBankDataStore(s => [s.bankDate, s.fetchBankData], shallow);
    useEffect(() => {
      fetchStatistics();
      fetchBankData();
      return () => reset();
    }, [lang]);

    return (
        <>
            <div className={style.boxWrapper}>
                <Text component={'p'} className={style.title}>
                    {t('statisticsTitle')}
                </Text>

                {statisticsList?.length === 0 ? (
                    <Flex className={style.cards}>
                        <Skeleton height={160} radius={12} opacity={0.2}/>
                        <Skeleton height={160} radius={12} opacity={0.2}/>
                        <Skeleton height={160} radius={12} opacity={0.2}/>
                    </Flex>
                ) : (
                    <Flex className={style.cards}>
                        {statisticsList?.map((i: any, index: number) =>
                            <div key={index} className={style.card}>
                                <img src={i?.icon} alt='icon'/>
                                <Box>
                                    <Text component={'span'}>
                                        {i?.value}
                                    </Text>
                                    <Text component={'p'}>
                                        {i?.title || '-'}
                                    </Text>
                                </Box>
                            </div>,
                        )}
                    </Flex>
                )}

                {bankDate?.map((i, index) => <Text key={index} className={style.subTitle}>
                    {t('statisticsBottomText', { date: i?.date || '00.00.0000' })}
                </Text>)}
            </div>


        </>
    );
};