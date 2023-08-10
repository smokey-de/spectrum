import style from './index.module.scss';
import { Button, Text } from '@mantine/core';
import {useRouter} from "next/router";
import useTranslation from "next-translate/useTranslation";
interface IProps {
  m?: string
}
export default function OurMission({m}:IProps){
  const navigate = useRouter()
  const { t } = useTranslation('common');
  return (
    <>
      <div className={style.section} style={{
        margin: m,
      }}>
        <Text className={style.title} component={'p'}>
          {t('ourMission')}
        </Text>
        <Text className={style.subTitle} component={'p'}>
          {t('ourMissionText')}
        </Text>
        <Button onClick={() => navigate.push('/contact')} className={style.btn}>
          {t('submitApplication')}
        </Button>
      </div>
    </>
  );
};