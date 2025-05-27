import React, { Children, useEffect, useMemo, useState } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { generatePath, Link, matchPath, useNavigate, useParams } from 'react-router-dom';
import { ReactComponent as IconBag } from '@assets/icons/bag-2.svg';
import { ReactComponent as Language } from '@assets/icons/language.svg';
import { ReactComponent as IconLogin } from '@assets/icons/login.svg';
import { ReactComponent as IconLogout } from '@assets/icons/logoutt.svg';
import { ReactComponent as IconMenu } from '@assets/icons/menu-1.svg';
import { ReactComponent as IconRegister } from '@assets/icons/register.svg';
import { ReactComponent as PreviousIcon } from '@assets/icons/Vector.svg';
import avatar from '@assets/images/avatar_profile.png';
import { useConfirmModal } from '@components/common/elements/ConfirmModalWrapper';
import { AppConstants, ORDER_STATE_WAITING, storageKeys } from '@constants';
import { commonMessage } from '@constants/intl';
import getNavMenuConfig from '@constants/menuConfig';
import useAuth from '@hooks/useAuth';
import useLocale from '@hooks/useLocale';
import useTranslate from '@hooks/useTranslate';
import routes from '@routes';
import { getCacheAccessToken, getCacheX_tenant, removeCacheToken } from '@services/userService';
import { accountActions, appActions } from '@store/actions';

import NavDrawer from './NavDrawer';

//import styles 👇
import 'react-modern-drawer/dist/index.css';
import styles from './AppHeader.module.scss';

const message = defineMessages({
    locale: '{locale, select, en {Vietnamese} other {English}}',
});

const AppHeaderMobile = ({ children, title, setOpenFilter = () => {}, showFilter, activeBack = false }) => {
    const intl = useIntl();
    const changeCart = useSelector((state) => state.cart.appCart);
    const token = getCacheAccessToken();
    const translate = useTranslate();
    const [ open, setOpen ] = useState(false);
    const [ showMenu, setShowMenu ] = useState(false);
    const navigate = useNavigate();
    const { profile } = useAuth();
    const dispatch = useDispatch();
    const { locale } = useLocale();
    const { confirm } = useConfirmModal();
    const onLogout = () => {
        confirm({
            title: 'Đăng xuất',
            content: 'Bạn có chắc chắn muốn đăng xuất?',
            onConfirm: () => {
                removeCacheToken();
                dispatch(accountActions.logout());
                navigate('/login');
            },
        });
    };
    const handleChangeLocale = () => {
        dispatch(appActions.changeLanguage(locale === 'en' ? 'vi' : 'en'));
    };
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    useEffect(() => {
        const rootElement = document.getElementById('root');
        if (open) {
            rootElement.classList.add('no-scroll');
        } else {
            rootElement.classList.remove('no-scroll');
        }
        return () => {
            rootElement.classList.remove('no-scroll');
        };
    }, [ open ]);

    const [ active, setActive ] = useState('dashboard');
    let Title = null;
    Children.forEach(children, (child) => {
        if (child.type === AppHeaderMobile.Title) Title = child;
    });
    const { restaurantId, id } = useParams();
    const navMenuConfig = getNavMenuConfig(restaurantId);

    const path = location.pathname;
    const restaurantPaths = {
        [`/${restaurantId}/availability`]: commonMessage.myCart,
        [`/${restaurantId}/order-history`]: commonMessage.orderHistory,
        [`/${restaurantId}/detail-service/${id}`]: commonMessage.detailService,
        [`/${restaurantId}/detail`]: commonMessage.detailColection,
        [`/${restaurantId}/colection`]: commonMessage.colection,
        [`/${restaurantId}/rating`]: commonMessage.rating,
        [`/${restaurantId}/change-password-profile`]: commonMessage.changePassword,
        [`/${restaurantId}/checkout`]: commonMessage.checkout,
        [`/${restaurantId}/introduction`]: commonMessage.introduction,
        [`/${restaurantId}/profile`]: commonMessage.profile,
    };

    return (
        <>
            <div className={styles.header}>
                {path in restaurantPaths ? (
                    <div className={styles.myCart} onClick={() => navigate(-1)}>
                        <PreviousIcon className={styles.icon} />
                        <div>{translate.formatMessage(restaurantPaths[path])}</div>
                    </div>
                ) : (
                    <div className={styles.headerContainer}>
                        <div className={styles.headerLogo}>
                            <IconMenu
                                style={{ cursor: 'pointer', color: '#000' }}
                                onClick={() => setOpen(true)}
                                className={styles.hamburger}
                                alt=""
                            />
                        </div>
                        <div className={styles.action}>
                            <div
                                className={styles.cart}
                                onClick={() => {
                                    if (changeCart?.length > 0) {
                                        navigate(
                                            generatePath(`${routes.availabilityPage.path}`, {
                                                restaurantId: restaurantId,
                                            }),
                                        );
                                    }
                                }}
                            >
                                <IconBag width={25} height={25} style={{ marginLeft: '11px' }} />
                                {changeCart?.length > 0 && (
                                    <div className={styles.numberCart}>{changeCart?.length}</div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className={`${location.pathname === '/profile' ? '' : styles.appHeader}`} id="">
                <NavDrawer open={open} onClose={() => setOpen(false)} headerTitle="Menu" direction="left">
                    <ul className={styles.siderMenu}>
                        {token ? (
                            <div>
                                <div
                                    className={styles.headerTitlee}
                                    onClick={() => navigate(`/${restaurantId}/profile`)}
                                >
                                    <div>
                                        <img
                                            className={styles.logo}
                                            alt="avatar"
                                            src={
                                                profile?.avatar ? AppConstants.contentRootUrl + profile?.avatar : avatar
                                            }
                                        />
                                    </div>
                                    <div className={styles.profile}>
                                        <div className={styles.title}>{profile?.account?.fullName}</div>
                                        <div className={styles.title1}>{profile?.account?.email}</div>
                                    </div>
                                </div>
                                {navMenuConfig.map((item) => {
                                    return (
                                        <Link
                                            className={styles.link}
                                            data-active={!!matchPath(item.link + '/*', location.pathname) || undefined}
                                            to={item.link}
                                            key={item.key}
                                            onClick={(event) => {
                                                event.preventDefault();
                                                setActive(item.key);
                                                if (item.key === 'notification') {
                                                    localStorage.setItem(
                                                        'activeOrderTab',
                                                        ORDER_STATE_WAITING.toString(),
                                                    );
                                                }
                                                navigate(item?.link);
                                            }}
                                        >
                                            <div
                                                className={styles.item}
                                                data-active={
                                                    !!matchPath(item.link + '/*', location.pathname) || undefined
                                                }
                                            >
                                                <div
                                                    className={styles.itemIcon}
                                                    // style={{ marginRight: 17, stroke: item.key === active ? 'white' : 'black' }}
                                                    style={{ marginRight: 17 }}
                                                >
                                                    {item.icon}
                                                </div>
                                                <div className={styles.label}>{item.label}</div>
                                            </div>
                                            <div
                                                className={styles.left}
                                                data-active={item.key === active || undefined}
                                            ></div>
                                        </Link>
                                    );
                                })}
                                <div style={{ width: '100%' }} />
                                {/* <Link className={styles.link} onClick={handleChangeLocale}>
                                    <div className={styles.item}>
                                        <span style={{ marginRight: 13 }}>
                                            <Language style={{ paddingBottom: '1px', color: '#000' }} width={20} />
                                        </span>
                                        <span>{translate.formatMessage(message.locale, { locale })}</span>
                                    </div>
                                </Link>
                                <div style={{ width: '100%' }} /> */}
                                <Link className={styles.link} onClick={onLogout}>
                                    <div className={styles.item}>
                                        <span style={{ marginRight: 13, stroke: 'red' }}>
                                            <IconLogout style={{ paddingBottom: '1px' }} width={20} />
                                        </span>
                                        <span style={{ color: 'red' }}>
                                            {translate.formatMessage(commonMessage.logout)}
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        ) : (
                            <div>
                                <div className={styles.loginContent} onClick={() => navigate(`/${restaurantId}/login`)}>
                                    <IconLogin style={{ marginRight: '15px', width: '20px', right: '10px' }} />
                                    <div className={styles.login}>{translate.formatMessage(commonMessage.login)}</div>
                                </div>
                                <div
                                    className={styles.registerContent}
                                    onClick={() => navigate(`/${restaurantId}/register`)}
                                >
                                    <IconRegister style={{ marginRight: '15px', width: '20px', right: '10px' }} />
                                    <div className={styles.register}>
                                        {translate.formatMessage(commonMessage.register)}
                                    </div>
                                </div>
                            </div>
                        )}
                    </ul>
                </NavDrawer>
            </div>
        </>
    );
};

function Title({ children }) {
    return children;
}

AppHeaderMobile.Title = Title;

export default AppHeaderMobile;
