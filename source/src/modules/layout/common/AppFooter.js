import React from 'react';
import { useIntl } from 'react-intl';
import AppStore from '@assets/icons/apple-store.svg';
import avatar from '@assets/icons/avatar.svg';
import GoogleStore from '@assets/icons/google-store.svg';
import { ReactComponent as IconBrandLinkedinFilled } from '@assets/icons/linken-icon.svg';
import { ReactComponent as IconBrandTwitterFilled } from '@assets/icons/twiter-icon.svg';
import { ReactComponent as IconBrandXFilled } from '@assets/icons/x-icon.svg';
import { ReactComponent as IconBrandYoutubeFilled } from '@assets/icons/ytb-icon.svg';
import dividerIcon from '@assets/images/Divider.png';
import { AppConstants } from '@constants';
import classNames from 'classnames';
import dayjs from 'dayjs';

import styles from './AppFooter.module.scss';

const AppFooter = ({ restaurantData }) => {
    const intl = useIntl();
    return (
        <div className={styles.appFooter}>
            <div className={classNames('container')}>
                <div className={styles.top}>
                    <div className={styles.content}>
                        <div className={styles.footerItem}>
                            <img
                                alt="logo"
                                className={styles.logo}
                                src={
                                    restaurantData?.logoPath
                                        ? AppConstants.contentRootUrl + restaurantData?.logoPath
                                        : avatar
                                }
                            />
                            One-time shopping solution, lifetime benefits
                        </div>
                        <div className={styles.center}></div>
                        <div className={styles.footerItem}>
                            <div className={styles.title}>Phát hiện</div>
                            <div className={styles.content}>
                                <div> Hương dẫn điều trị</div>
                                <div> Blog của chúng tôi</div>
                                <div> Phiếu quà tặng</div>
                                <div> Đăng ký bản tin</div>
                            </div>
                        </div>
                        <div className={styles.footerItem}>
                            <div className={styles.title}>Đối tác kinh doanh</div>
                            <div className={styles.content}>
                                <div> Trở thành đối tác</div>
                                <div> Blog của chúng tôi</div>
                                <div> Trung tâm hỗ trợ</div>
                                <div> Trung tâm trợ giúp</div>
                            </div>
                        </div>
                        <div className={styles.footerItem}>
                            <div className={styles.title}>Theo đuổi</div>
                            <div className={styles.content}>
                                <div> Về chúng tôi</div>
                                <div> Việc làm</div>
                                <div> Dấu ấn</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.install}>
                        <div className={styles.footerItem}>
                            <div className={styles.title}>Install app</div>
                            <div className={styles.content}>
                                <div className={styles.installItem}>
                                    <img src={AppStore} />
                                </div>
                                <div className={styles.installItem}>
                                    <img src={GoogleStore} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.divider}>
                    <img src={dividerIcon} />
                </div>
                <div className={styles.bottom}>
                    <div size="sub" className={styles.text}>
                        © {dayjs().year()} | HQTech
                    </div>
                    <div className={styles.icon}>
                        <div className={styles.iconItem}>
                            <IconBrandYoutubeFilled />
                        </div>
                        <div className={styles.iconItem}>
                            <IconBrandXFilled />
                        </div>
                        <div className={styles.iconItem}>
                            <IconBrandTwitterFilled />
                        </div>
                        <div className={styles.iconItem}>
                            <IconBrandLinkedinFilled />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppFooter;
