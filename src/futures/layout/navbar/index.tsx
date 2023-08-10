import style from "./navbar.module.scss"
import {useDisclosure, useMediaQuery} from "@mantine/hooks";
import {useState} from "react";
import {routePaths} from "./libs"
import {ActionIcon, Anchor, Burger, Button, Collapse, Drawer, Flex, Group, Menu, Select, Text} from "@mantine/core";
import cl from 'classnames'
import Link from 'next/link'
import {usePathname} from "next/navigation";
import {useRouter} from "next/router";
import Logo from "../../../../public/images/logo.svg"
import IconFlagRu from "../../../../public/images/icon-flag-ru.svg"
import IconFlagUz from "../../../../public/images/icon-flag-uz.svg"
import IconFlagEn from "../../../../public/images/icon-flag-en.svg"
import IconClose from "../../../../public/images/icon-x-mark.svg"
import ArrowDown from "../../../../public/images/arrow-down.svg"
import {useNewsStore} from "../../../shared/store/news";
import setLanguage from "next-translate/setLanguage";
import useTranslation from "next-translate/useTranslation";
import Trans from "next-translate/Trans";

const data = [
    {
        label: 'Ru',
        value: 'ru',
    },
    {
        label: 'Uz',
        value: 'uz',
    },
    {
        label: 'En',
        value: 'en',
    },
];

export default function Navbar() {
    const location = usePathname()
    const navigate = useRouter();
    const matches = useMediaQuery('(max-width: 1439px)');
    const [opened, {open, close}] = useDisclosure(false);
    const [accordionOne, setAccordionOne] = useState(false);
    const [accordionTwo, setAccordionTwo] = useState(false);
    const {t,lang} = useTranslation();


    const closeDrawer = () => {
        close();
        setAccordionOne(false);
        setAccordionTwo(false);
    };

    const changeLanguage = (lang: string) => {
        setLanguage(lang);
    }

    return (
        <>
            <div className={style.navbarWrapper}>
                <div className={style.navbar}>
                    <Logo className={style.logo} onClick={() => navigate.push(routePaths.root)} />
                    <ul>
                        <li>
                            <Anchor className={cl(style.link)} component={Link} href={routePaths.root}>
                                {t('main')}
                            </Anchor>
                        </li>
                        <li>
                            <Menu classNames={{
                                item: style.menuItem,
                            }} radius={10} shadow='0px 8px 32px 0px rgba(0, 113, 187, 0.10)'>
                                <Menu.Target>
                                    <Flex
                                        className={cl(style.link, [(location === '/about' || location === '/our-team') && style.active])}
                                        align={'center'}
                                        columnGap={8}>
                                        <Text component={'p'}>
                                            {t('aboutCompany')}
                                        </Text>
                                        <ArrowDown />
                                    </Flex>
                                </Menu.Target>

                                <Menu.Dropdown>
                                    <Menu.Item component={Link} href={routePaths.about}>
                                        <Text component={'p'}
                                              className={cl(style.link, [location === '/about' && style.active])}>
                                            {t('aboutUs')}
                                        </Text>
                                    </Menu.Item>
                                    <Menu.Item component={Link} href={routePaths.ourTeam}>
                                        <Text component={'p'}
                                              className={cl(style.link, [location === '/our-team' && style.active])}>
                                            {t('ourTeam')}
                                        </Text>
                                    </Menu.Item>
                                </Menu.Dropdown>
                            </Menu>
                        </li>
                        <li>
                            <Anchor className={cl(style.link, [location === '/our-services' && style.active])}
                                    component={Link} href={routePaths.ourServices}>
                                {t('services')}
                            </Anchor>
                        </li>
                        <li>
                            <Menu classNames={{
                                item: style.menuItem,
                            }} radius={10} shadow='0px 8px 32px 0px rgba(0, 113, 187, 0.10)'>
                                <Menu.Target>
                                    <Flex
                                        className={cl(style.link, [(
                                            location === `/${routePaths.monitoringLevelOverdue}` ||
                                            location === `/${routePaths.debtSettlement}` ||
                                            location === `/${routePaths.portfolioAnalysis}` ||
                                            location === `/${routePaths.legalSupportRecoveryProcess}`)
                                        && style.active])}
                                        align={'center'} columnGap={8}>
                                        <Text component={'p'}>
                                            <Trans components={{br: <br style={{display: 'none'}}/>}} i18nKey={'common:activities'}/>
                                        </Text>
                                        <ArrowDown />
                                    </Flex>
                                </Menu.Target>

                                <Menu.Dropdown>
                                    <Menu.Item component={Link} href={routePaths.monitoringLevelOverdue}>
                                        <Text
                                            className={cl(style.link, [location === `/${routePaths.monitoringLevelOverdue}` && style.active])}
                                            component={'p'}>
                                            <Trans components={{span: <span/>}} i18nKey={'common:activitiesOne'}/>
                                        </Text>
                                    </Menu.Item>
                                    <Menu.Item component={Link} href={routePaths.debtSettlement}>
                                        <Text
                                            className={cl(style.link, [location === `/${routePaths.debtSettlement}` && style.active])}
                                            component={'p'}>
                                            <Trans components={{span: <span/>, br: <span/>}} i18nKey={'common:activitiesTwo'}/>
                                        </Text>
                                    </Menu.Item>
                                    <Menu.Item component={Link} href={routePaths.portfolioAnalysis}>
                                        <Text
                                            className={cl(style.link, [location === `/${routePaths.portfolioAnalysis}` && style.active])}
                                            component={'p'}>
                                            <Trans components={{span: <span/>, br: <span/>}} i18nKey={'common:activitiesThree'}/>
                                        </Text>
                                    </Menu.Item>
                                    <Menu.Item component={Link} href={routePaths.legalSupportRecoveryProcess}>
                                        <Text
                                            className={cl(style.link, [location === `/${routePaths.legalSupportRecoveryProcess}` && style.active])}
                                            component={'p'}>
                                            <Trans components={{span: <span/>, br: <span/>}} i18nKey={'common:activitiesFour'}/>
                                        </Text>
                                    </Menu.Item>
                                </Menu.Dropdown>
                            </Menu>
                        </li>
                        <li>
                            <Anchor className={cl(style.link, [location === '/career' && style.active])}
                                    component={Link}
                                    href={'/career'}>
                                {t('careers')}
                            </Anchor>
                        </li>
                    </ul>
                    {!matches && (<>
                        <Flex columnGap={matches ? 20 : 12} align={'center'}>
                            <Select
                                value={lang}
                                onChange={changeLanguage}
                                className={style.languages}
                                data={data}
                                rightSection={false}
                                classNames={{
                                    rightSection: style.languagesRightSection
                                }}
                                icon={(lang === 'ru' && <IconFlagRu />) || (lang === 'uz' &&
                                    <IconFlagUz />) || (lang === 'en' && <IconFlagEn />)}
                            />
                            <Button onClick={() => navigate.push('/contact')} className={style.navBtn}>
                                {t('contacts')}
                            </Button>
                        </Flex>
                    </>)}
                    {matches && (<>
                        <Burger color={'#0071BB'} opened={opened} onClick={open}/>
                    </>)}
                </div>
            </div>

            {matches && (<>  <Drawer
                position='right' size='100%'
                className={style.drawerMenu}
                opened={opened} onClose={close}
                title={false}
                withCloseButton={false}
                classNames={{
                    content: style.drawerContent,
                }}
            >

                <Flex className={style.drawerHead}>
                    <Logo />
                    <ActionIcon onClick={close}>
                        <IconClose />
                    </ActionIcon>
                </Flex>
                <div className={style.languagesWrapper}>
                    <div onClick={() => changeLanguage('ru')} className={cl(style.language, [lang === 'ru' && style.active])}>
                        <Flex align={'center'} columnGap={12}>
                            <IconFlagRu />
                            Русский
                        </Flex>
                        <div className={style.point} />
                    </div>
                    <div onClick={() => changeLanguage('uz')} className={cl(style.language, [lang === 'uz' && style.active])}>
                        <Flex align={'center'} columnGap={12}>
                            <IconFlagUz />
                            Ўзбек тили
                        </Flex>
                        <div className={style.point} />
                    </div>
                    <div onClick={() => changeLanguage('en')} className={cl(style.language, [lang === 'en' && style.active])}>
                        <Flex align={'center'} columnGap={12}>
                            <IconFlagEn />
                            English
                        </Flex>
                        <div className={style.point} />
                    </div>
                </div>

                <ul>
                    <li>
                        <Anchor onClick={closeDrawer} component={Link} href={routePaths.root}>
                            <Text component={'p'} className={style.navLink}>
                                {t('main')}
                            </Text>
                        </Anchor>
                    </li>
                    <li>
                        <Group>
                            <Flex
                                onClick={() => setAccordionOne(!accordionOne)}
                                className={cl(style.navLink, [accordionOne && style.active])}
                                align={'center'}
                                justify={'space-between'}
                                columnGap={8}>
                                <Text component={'p'}>
                                    {t('aboutCompany')}
                                </Text>
                                <ArrowDown />
                            </Flex>
                        </Group>

                        <Collapse in={accordionOne}>
                            <Anchor onClick={closeDrawer} component={Link} href={routePaths.about}>
                                <Text component={'p'} className={cl(style.link, style.firstLink)}>
                                    {t('aboutUs')}
                                </Text>
                            </Anchor>
                            <Anchor onClick={closeDrawer} component={Link} href={routePaths.ourTeam}>
                                <Text component={'p'}
                                      className={style.link}>
                                    {t('ourTeam')}
                                </Text>
                            </Anchor>
                        </Collapse>
                    </li>
                    <li>
                        <Anchor onClick={closeDrawer} component={Link} href={routePaths.ourServices}>
                            <Text component={'p'} className={style.navLink}>
                                {t('services')}
                            </Text>
                        </Anchor>
                    </li>
                    <li>
                        <Group>
                            <Flex
                                onClick={() => setAccordionTwo(!accordionTwo)}
                                className={cl(style.navLink, [accordionTwo && style.active])}
                                align={'center'}
                                justify={'space-between'}
                                columnGap={8}>
                                <Text component={'p'}>
                                    <Trans components={{ br: <span /> }} i18nKey={'common:activities'}/>
                                </Text>
                                <ArrowDown />
                            </Flex>
                        </Group>

                        <Collapse in={accordionTwo}>
                            <Anchor onClick={closeDrawer} component={Link} href={routePaths.monitoringLevelOverdue}>
                                <Text component={'p'} className={cl(style.link, style.firstLink)}>
                                    {t('activitiesCardOne')}
                                </Text>
                            </Anchor>
                            <Anchor onClick={closeDrawer} component={Link} href={routePaths.debtSettlement}>
                                <Text component={'p'}
                                      className={style.link}>
                                    {t('activitiesCardTwo')}
                                </Text>
                            </Anchor>
                            <Anchor onClick={closeDrawer} component={Link} href={routePaths.portfolioAnalysis}>
                                <Text component={'p'} className={style.link}>
                                    <Trans components={{ br: <span /> }} i18nKey={'common:activitiesCardThree'}/>
                                </Text>
                            </Anchor>
                            <Anchor onClick={closeDrawer} component={Link} href={routePaths.legalSupportRecoveryProcess}>
                                <Text component={'p'}
                                      className={style.link}>
                                    {t('activitiesCardFour')}
                                </Text>
                            </Anchor>
                        </Collapse>
                    </li>
                    <li>
                        <Anchor onClick={closeDrawer} component={Link} href={routePaths.career}>
                            <Text component={'p'} className={style.navLink}>
                                {t('careers')}
                            </Text>
                        </Anchor>
                    </li>
                </ul>

                <Button fullWidth onClick={() => {
                    navigate.push('/contact');
                    close();
                    setAccordionOne(false);
                    setAccordionTwo(false);
                }} className={style.navBtn}>
                    {t('contacts')}
                </Button>
            </Drawer>
            </>)}
        </>
    )
}

