import style from "./navbar.module.scss"
import {useDisclosure, useMediaQuery} from "@mantine/hooks";
import { useParams} from "react-router";
import {useState} from "react";
// import {i18n, useTranslation} from "next-i18next";
import {routePaths} from "./libs"
import {Anchor, Burger, Button, Flex, Menu, Select, Text} from "@mantine/core";
import cl from 'classnames'
import Link from 'next/link'
import {usePathname} from "next/navigation";
import {useRouter} from "next/router";
export default function Navbar() {
    const location = usePathname()
    const navigate = useRouter();
    const matches = useMediaQuery('(max-width: 1439px)');
    const [opened, { open, close }] = useDisclosure(false);
    // const [language, setLanguage] = useState(localStorage.getItem('language') || 'ru');
    // const [selectValue, setSelectValue] = useState(localStorage.getItem('language') || 'ru');
    const [accordionOne, setAccordionOne] = useState(false);
    const [accordionTwo, setAccordionTwo] = useState(false);
    // const { t } = useTranslation();
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
    const { id } = useParams();
    // const fetchNewInfo = useNewsStore(s => s.fetchNewInfo);

    const onChange = (value: string) => {
        // if (id) setTimeout(()=> fetchNewInfo(+id))

        localStorage.setItem('language', value);
        // i18n.changeLanguage(value);
        // setSelectValue(value);
    };

    const closeDrawer = () => {
        close();
        setAccordionOne(false);
        setAccordionTwo(false);
    };

    const changeLanguage = (lang: string) => {
        // if (id) setTimeout(()=> fetchNewInfo(+id))
        // setLanguage(lang);
        // i18n.changeLanguage(lang);
        localStorage.setItem('language', lang);
    }

    return (
        <>
            <div className={style.navbarWrapper}>
                <div className={style.navbar}>
                    {/*<Logo className={style.logo} onClick={() => navigate('/')} />*/}
                    <ul>

                        <li>
                            <Anchor className={cl(style.link)} component={Link} href={'about'}>
                                {/*{t('main')}*/}
                                <span>main</span>
                            </Anchor>
                        </li>
                        {/*<li>*/}
                        {/*    <Menu classNames={{*/}
                        {/*        item: style.menuItem,*/}
                        {/*    }} radius={10} shadow='0px 8px 32px 0px rgba(0, 113, 187, 0.10)'>*/}
                        {/*        <Menu.Target>*/}
                        {/*            <Flex*/}
                        {/*                className={cl(style.link, [(location === '/about' || location === '/our-team') && style.active])}*/}
                        {/*                align={'center'}*/}
                        {/*                columnGap={8}>*/}
                        {/*                <Text component={'p'}>*/}
                        {/*                    /!*{t('aboutCompany')}*!/*/}
                        {/*                </Text>*/}
                        {/*                /!*<ArrowDown />*!/*/}
                        {/*            </Flex>*/}
                        {/*        </Menu.Target>*/}

                        {/*        <Menu.Dropdown>*/}
                        {/*            <Menu.Item component={Link} to={routePaths.about}>*/}
                        {/*                <Text component={'p'} className={cl(style.link, [location === '/about' && style.active])}>*/}
                        {/*                    /!*{t('aboutUs')}*!/*/}
                        {/*                </Text>*/}
                        {/*            </Menu.Item>*/}
                        {/*            <Menu.Item component={Link} to={routePaths.ourTeam}>*/}
                        {/*                <Text component={'p'}*/}
                        {/*                      className={cl(style.link, [location === '/our-team' && style.active])}>*/}
                        {/*                    /!*{t('ourTeam')}*!/*/}
                        {/*                </Text>*/}
                        {/*            </Menu.Item>*/}
                        {/*        </Menu.Dropdown>*/}
                        {/*    </Menu>*/}
                        {/*</li>*/}
                        {/*<li>*/}
                        {/*    <Anchor className={cl(style.link, [location === '/our-services' && style.active])}*/}
                        {/*            component={Link} to={routePaths.ourServices}>*/}
                        {/*        /!*{t('services')}*!/*/}
                        {/*    </Anchor>*/}
                        {/*</li>*/}
                        {/*<li>*/}
                        {/*    <Menu classNames={{*/}
                        {/*        item: style.menuItem,*/}
                        {/*    }} radius={10} shadow='0px 8px 32px 0px rgba(0, 113, 187, 0.10)'>*/}
                        {/*        <Menu.Target>*/}
                        {/*            <Flex*/}
                        {/*                className={cl(style.link, [(*/}
                        {/*                    location === `/${routePaths.monitoringLevelOverdue}` ||*/}
                        {/*                    location === `/${routePaths.debtSettlement}` ||*/}
                        {/*                    location === `/${routePaths.portfolioAnalysis}` ||*/}
                        {/*                    location === `/${routePaths.legalSupportRecoveryProcess}`)*/}
                        {/*                && style.active])}*/}
                        {/*                align={'center'} columnGap={8}>*/}
                        {/*                <Text component={'p'}>*/}
                        {/*                    /!*<Trans components={{ br: <br style={{ display: 'none' }} /> }}>*!/*/}
                        {/*                    /!*    activities*!/*/}
                        {/*                    /!*</Trans>*!/*/}
                        {/*                </Text>*/}
                        {/*                /!*<ArrowDown />*!/*/}
                        {/*            </Flex>*/}
                        {/*        </Menu.Target>*/}

                        {/*        <Menu.Dropdown>*/}
                        {/*            <Menu.Item component={Link} to={routePaths.monitoringLevelOverdue}>*/}
                        {/*                <Text*/}
                        {/*                    className={cl(style.link, [location === `/${routePaths.monitoringLevelOverdue}` && style.active])}*/}
                        {/*                    component={'p'}>*/}
                        {/*                    /!*<Trans components={{ span: <span /> }}>*!/*/}
                        {/*                        activitiesOne*/}
                        {/*                    /!*</Trans>*!/*/}
                        {/*                </Text>*/}
                        {/*            </Menu.Item>*/}
                        {/*            <Menu.Item component={Link} to={routePaths.debtSettlement}>*/}
                        {/*                <Text*/}
                        {/*                    className={cl(style.link, [location === `/${routePaths.debtSettlement}` && style.active])}*/}
                        {/*                    component={'p'}>*/}
                        {/*                    /!*<Trans components={{ span: <span />, br: <span /> }}>*!/*/}
                        {/*                        activitiesTwo*/}
                        {/*                    /!*</Trans>*!/*/}
                        {/*                </Text>*/}
                        {/*            </Menu.Item>*/}
                        {/*            <Menu.Item component={Link} to={routePaths.portfolioAnalysis}>*/}
                        {/*                <Text*/}
                        {/*                    className={cl(style.link, [location === `/${routePaths.portfolioAnalysis}` && style.active])}*/}
                        {/*                    component={'p'}>*/}
                        {/*                    /!*<Trans components={{ span: <span />, br: <span /> }}>*!/*/}
                        {/*                        activitiesThree*/}
                        {/*                    /!*</Trans>*!/*/}
                        {/*                </Text>*/}
                        {/*            </Menu.Item>*/}
                        {/*            <Menu.Item component={Link} to={routePaths.legalSupportRecoveryProcess}>*/}
                        {/*                <Text*/}
                        {/*                    className={cl(style.link, [location === `/${routePaths.legalSupportRecoveryProcess}` && style.active])}*/}
                        {/*                    component={'p'}>*/}
                        {/*                    /!*<Trans components={{ span: <span />, br: <span /> }}>*!/*/}
                        {/*                        activitiesFour*/}
                        {/*                    /!*</Trans>*!/*/}
                        {/*                </Text>*/}
                        {/*            </Menu.Item>*/}
                        {/*        </Menu.Dropdown>*/}
                        {/*    </Menu>*/}
                        {/*</li>*/}
                        {/*<li>*/}
                        {/*    <Anchor className={cl(style.link, [location === '/career' && style.active])} component={Link}*/}
                        {/*            to={'/career'}>*/}
                        {/*        /!*{t('careers')}*!/*/}
                        {/*    </Anchor>*/}
                        {/*</li>*/}
                    </ul>
                    {/*{!matches && (<>*/}
                    {/*    <Flex columnGap={matches ? 20 : 12} align={'center'}>*/}
                    {/*        <Select*/}
                    {/*            // value={selectValue}*/}
                    {/*            onChange={onChange}*/}
                    {/*            className={style.languages}*/}
                    {/*            data={data}*/}
                    {/*            rightSection={false}*/}
                    {/*            classNames={{*/}
                    {/*                rightSection: style.languagesRightSection*/}
                    {/*            }}*/}
                    {/*            // icon={(selectValue === 'ru' && <IconFlagRu />) || (selectValue === 'uz' &&*/}
                    {/*            //     <IconFlagUz />) || (selectValue === 'en' && <IconFlagEn />)}*/}
                    {/*        />*/}
                    {/*        <Button onClick={() => navigate.push('/contact')} className={style.navBtn}>*/}
                    {/*            /!*{t('contacts')}*!/*/}
                    {/*        </Button>*/}
                    {/*    </Flex>*/}
                    {/*</>)}*/}
                    {/*{matches && (<>*/}
                    {/*    <Burger color={'#0071BB'} opened={opened} onClick={open} />*/}
                    {/*</>)}*/}
                </div>
            </div>
        </>
    )
}

