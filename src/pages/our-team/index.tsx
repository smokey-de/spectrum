import React, { useEffect } from 'react';
import style from './index.module.scss';
import { Box, Flex, Image, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { Trans, useTranslation } from 'react-i18next';
import { shallow } from 'zustand/shallow';
import {useOurTeamStore} from "../../shared/store/our-team";
import {WeTrusted} from "../../futures";


export default function OurTeam() {
  const matches = useMediaQuery('(max-width: 834px)');
  const { t } = useTranslation();

  const [fetchOurTeam, ourTeamList, reset] = useOurTeamStore(s => [s.fetchOurTeam, s.ourTeamList, s.reset], shallow);

  useEffect(() => {
    fetchOurTeam();

    return () => reset();
  }, []);

    // localStorage.getItem('language')

  return (
      <>
        <Box className={'container'}>
          <Text component={'p'} className={'headerTitle'}>
            <Trans components={{ span: <span /> }}>
              ourTeamTitle
            </Trans>
          </Text>
          <div className={style.section}>
            {ourTeamList?.map((i,index) => <>
              <Flex key={index} className={style.box}>
                <div className={style.textWrapper}>
                  <Text className={style.title} component={'p'}>
                    {i?.title || '-'}
                  </Text>
                  <Text className={style.subTitle} component={'p'}>
                    {i?.position || '-'}
                    <hr />
                  </Text>
                  {matches && (
                      <Box className={style.imageWrapper} mt={16}>
                        <Image fit={'contain'} src={i?.photo} width={'100%'} height={'100%'} withPlaceholder radius={6} />
                      </Box>
                  )}
                  <Text component={'p'} className={style.text} dangerouslySetInnerHTML={{ __html: i?.description }} />
                </div>
                {!matches && <div className={style.imageWrapper}>
                  <Image fit={'contain'} src={i?.photo} width={'100%'} height={'100%'} withPlaceholder radius={6} />
                </div>}
              </Flex>
            </>)}
          </div>
        </Box>
        <WeTrusted />
      </>
  );
};


// <Flex className={style.box}>
//   <div className={style.textWrapper}>
//     <Text className={style.title} component={'p'}>
//       Андрей Варельджян
//     </Text>
//     <Text className={style.subTitle} component={'p'}>
//       Генеральный директор ООО «Spectrum Collection»
//       <hr />
//     </Text>
//     {matches && (
//       <Box mt={16} className={style.imageWrapper}>
//         <Image fit={'contain'} src={ImageTwo} width={'100%'} height={'100%'} withPlaceholder radius={6} />
//       </Box>
//     )}
//     <Text component={'p'} className={style.text}>
//       В период 2012 - 2020 возглавлял управление рисками и коллекшен в международных банках и финансовых
//       холдингах. <br /> <br />
//       Имеет огромную практику в автоматизации кредитных и операционных рисков, а также в управлении
//       коллекшен. <br /><br />
//       Советник Председателя Правления по рискам ЧАКБ «Ориент Финанс» 2020-2022. Является сертифицированным
//       профессионалом в области управления рисками по международному стандарту ISO 31000. <br /><br />
//       Член Глобальной ассоциации профессионалов в области управления рисками (GARP).
//     </Text>
//   </div>
//   {!matches && <div className={style.imageWrapper}>
//     <Image fit={'contain'} src={ImageTwo} width={'100%'} height={'100%'} withPlaceholder radius={6} />
//   </div>}
// </Flex>
// <Flex className={style.box}>
//   <div className={style.textWrapper}>
//     <Text className={style.title} component={'p'}>
//       Бехзод Хайруллаев
//     </Text>
//     <Text className={style.subTitle} component={'p'}>
//       Руководитель коллекшена
//       <hr />
//     </Text>
//     {matches && (
//       <Box mt={16} className={style.imageWrapper}>
//         <Image fit={'contain'} src={ImageThree} width={'100%'} height={'100%'} withPlaceholder radius={6} />
//       </Box>
//     )}
//     <Text component={'p'} className={style.text}>
//       Эксперт в сборе просроченной задолженности в Узбекистане с опытом работы более 3-х лет (АКБ TBC BANK).
//       Выпускник Национального Университета Узбекистана. <br /> <br />
//       Опытный коучер по методам ведения переговоров, эффективной коммуникации, а также в разработке скриптов
//       для софт коллекшен.
//     </Text>
//   </div>
//   {!matches && <div className={style.imageWrapper}>
//     <Image fit={'contain'} src={ImageThree} width={'100%'} height={'100%'} withPlaceholder radius={6} />
//   </div>}
// </Flex>