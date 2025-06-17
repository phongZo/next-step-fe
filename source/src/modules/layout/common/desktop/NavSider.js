import React from 'react';
import { Link, matchPath, useNavigate } from 'react-router-dom';
import LogoIcon from '@assets/images/logo-sellManage.png';
import Logo from '@assets/images/logo-sellManage.png';
import navMenuConfig from '@constants/menuConfig';

import styles from './NavSider.module.scss'; // Import file CSS

export default function NavSider({ collapsed }) {
    const navigate = useNavigate();
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'start',
                alignItems: 'start',
                width: collapsed ? 352 : 100,
                padding: 0,
                backgroundColor: '#001529',
                borderBottom: '1px solid #ccc',
                position: 'fixed',
                top: 0,
                zIndex: 1,
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                height: '100%',
                flexDirection: 'column',
            }}
        >
            <ul className={styles.siderMenu} style={{ width: collapsed ? 352 : 100 }}>
                <li className={styles.menuItem} style={{ textAlign: 'center' }}>
                    <Link to="/">
                        <img className={styles.imgLogo} src={collapsed ? Logo : LogoIcon} width="100%" />
                    </Link>
                </li>
            </ul>
            <aside style={{ width: collapsed ? 352 : 100 }}>
                {navMenuConfig
                    .filter((item) => item?.isMobile)
                    .map((item) => (
                        <Link
                            className={styles.link}
                            data-active={!!matchPath(item.link + '/*', location.pathname) || undefined}
                            to={item.link}
                            key={item.key}
                            onClick={(event) => {
                                event.preventDefault();
                                navigate(item?.link);
                            }}
                        >
                            <div
                                className={styles.item}
                                data-active={!!matchPath(item.link + '/*', location.pathname) || undefined}
                                style={{ display: 'flex', alignItems: 'center' }}
                            >
                                <span
                                    className={styles.iconClassName}
                                    style={
                                        collapsed
                                            ? {
                                                marginRight: 20,
                                                stroke: 'white',
                                                height: 17,
                                                width: 17,
                                            }
                                            : {
                                                textAlign: 'center',
                                                paddingLeft: '5px',
                                                width: '100%',
                                                stroke: 'white',
                                            }
                                    }
                                >
                                    {item.icon}
                                </span>
                                {collapsed && (
                                    <span style={{ fontSize: '17px', fontWeight: '300', color: 'white' }}>
                                        {item.label}
                                    </span>
                                )}
                            </div>
                        </Link>
                    ))}
            </aside>
            <div style={{ width: '100%', margin: '4px 0px' }} />
           
        </div>
    );
}
