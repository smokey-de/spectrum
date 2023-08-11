import React, {useEffect, useState} from 'react';
import style from './index.module.scss';
import {Anchor, Box, Button, Flex, Input, Modal, Text, Textarea, TextInput} from '@mantine/core';
import {IMaskInput} from 'react-imask';
import IconCheck from '../../../public/images/icon-check-success.svg';
import {useDisclosure, useMediaQuery, useWindowScroll} from '@mantine/hooks';
import useTranslation from "next-translate/useTranslation";
import {useForm} from "@mantine/form";
import {sendContactForm} from "../../shared/api/contact";

export default function Contact(){
  const [opened, { open, close }] = useDisclosure(false);
  const matches = useMediaQuery('(max-width: 834px)');
  const { t } = useTranslation('common');
  const [scroll, scrollTo] = useWindowScroll();

  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    initialValues: {
      phone: '+998',
      name: '',
      text: '',
      termsOfService: false,
    },

    validate: {
      phone: (value) => (value?.length > 18 ? null : ' '),
      name: (value) => (value?.length ? null : ' '),
    },
  });


  const sendContact = async (values: {name:string,phone: string,termsOfService: boolean,text: string}) => {
    setIsLoading(true);

    const body = {...values, termsOfService: undefined}

    try {
      const response = await sendContactForm(body);
      if (response.status === 200) {
        form.setValues({name: '',phone: '+998',text: ''})
        open();
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setTimeout(() => scrollTo({ y: 0 }), 0);
  }, [scrollTo]);



  return (
      <>
        <Box className={'container'}>
          <Text component={'p'} className={'headerTitle'}>
            {t('contactDetails')}
          </Text>
          <Flex className={style.boxes}>
            <div className={style.boxLeft}>
              <Text component={'p'} className={'title'}>
                {t('contactUs')}
              </Text>
              <Text component={'p'} className={style.subTitle}>
                {t('contactUsText')}
              </Text>

              <div className={style.textWrapper}>
                <Text className={style.label} component={'p'}>
                  {t('contactTelLabel')}
                </Text>
                <Anchor href={'tel:+998712023434'}>
                  +998 (71) 202-34-34
                </Anchor>
              </div>
              <div className={style.textWrapper}>
                <Text className={style.label} component={'p'}>
                  {t('contactEmailLabel')}
                </Text>
                <Anchor href={'mailto: info@spectrumcollection.uz'}>
                  info@spectrumcollection.uz
                </Anchor>
              </div>
              <div className={style.textWrapper}>
                <Text className={style.label} component={'p'}>
                  {t('contactAddressLabel')}
                </Text>
                <Anchor target={'_blank'} href={'https://goo.gl/maps/v4SRYWZCpbAVkxQ27'}>
                  Сайрам МФЙ, Сайрам, проезд 7 кучаси,<br /> 92-уй
                </Anchor>
              </div>
            </div>
            {matches && <div className={style.mapWrapper}>
              <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d749.0478049996674!2d69.3194602!3d41.3264551!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef4eefd8fae91%3A0x99f0f32263f53cd3!2zOTIgNS3QuSDQv9GALiDQodCw0LnRgNCw0LwsINCi0LDRiNC60LXQvdGC!5e0!3m2!1s${t('mapLanguage')}!2s!4v1688994532965!5m2!1s${t('mapLanguage')}!2s`}
                  width='100%' height='100%' style={{ border: 0 }} allowFullScreen={true} loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'></iframe>
            </div>}
              <form className={style.boxRight} onSubmit={form.onSubmit((values) => sendContact(values))}>

              <Input.Wrapper className={style.inputWrapper}>
                <Input.Label>
                  {t('name')}
                </Input.Label>
                <TextInput {...form.getInputProps('name')}/>
              </Input.Wrapper>
              <Input.Wrapper m={'24px 0'} className={style.inputWrapper}>
                <Input.Label>
                  {t('telNumber')}
                </Input.Label>
                <TextInput<any>  component={IMaskInput}
                       mask='+998 (00) 000-00-00'
                       {...form.getInputProps('phone')}
                />
              </Input.Wrapper>
              <Input.Wrapper className={style.inputWrapper}>
                <Input.Label>
                  {t('contactDescription')}
                </Input.Label>
                <Textarea  maxLength={500} {...form.getInputProps('text')}/>
              </Input.Wrapper>
              <Button fullWidth className={style.btn}  type={'submit'} loading={isLoading}>
                {t('ContactSubmitApplication')}
              </Button>
              </form>
          </Flex>


          {!matches && <div className={style.mapWrapper}>
            <iframe
                src={`https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d749.0478049996674!2d69.3194602!3d41.3264551!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef4eefd8fae91%3A0x99f0f32263f53cd3!2zOTIgNS3QuSDQv9GALiDQodCw0LnRgNCw0LwsINCi0LDRiNC60LXQvdGC!5e0!3m2!1s${t('mapLanguage')}!2s!4v1688994532965!5m2!1s${t('mapLanguage')}!2s`}
                width='100%' height='100%' style={{ border: 0 }} allowFullScreen={true} loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'></iframe>
          </div>}
        </Box>

        <Modal overlayProps={{
          color: '#0B1E1D',
          opacity: 0.08,
          blur: 10,
        }}
               radius={10} size={416} padding={matches ? '32px 16px' : '40px 32px'}
               centered title={false} withCloseButton={false}
               opened={opened} onClose={close}
               transitionProps={{ transition: 'fade', duration: 200, timingFunction: 'linear' }}
        >
          <Flex className={style.modal} direction={'column'} align={'center'}>
            <IconCheck />
            <Text className={style.title} component={'p'}>
              {t('successfullySent')}
            </Text>
            <Text className={style.subTitle} component={'p'}>
              {t('contactShortly')}
            </Text>
          </Flex>
          <Button onClick={close} fullWidth className={style.btn}>
            {t('clear')}
          </Button>
        </Modal>
      </>
  );
}