import React, { useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { APP_HEADER_NAVIGATION, appAccount } from '@constants';
import apiConfig from '@constants/apiConfig';
import useFetch from '@hooks/useFetch';
import useFetchAction from '@hooks/useFetchAction';
import { accountActions } from '@store/actions';
import { Buffer } from 'buffer';
import { FaArrowRight, FaChevronDown } from 'react-icons/fa6';

import styles from './AppHeader.module.scss';
import './AppHeader.scss';
import classNames from 'classnames';

window.Buffer = window.Buffer || Buffer;
const AppHeader = ({ profile, collapsed, onCollapse }) => {
    const base64Credentials = Buffer.from(`${appAccount.APP_USERNAME}:${appAccount.APP_PASSWORD}`).toString('base64');
    const { execute, loading } = useFetch({
        ...apiConfig.account.loginBasic,
        authorization: `Basic ${base64Credentials}`,
    });

    const { execute: executeGetProfile } = useFetchAction(accountActions.getProfile, {
        loading: useFetchAction.LOADING_TYPE.APP,
    });

    const [hoveredItem, setHoveredItem] = useState(null);
    const [arrowX, setArrowX] = useState(0);
    const navContainerRef = useRef(null);
    const navItemRefs = useRef([]);

    const handleMouseEnter = (itemKey) => {
        setHoveredItem(itemKey);
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
    };

    const dropdownContentRef = useRef(null);
    const [dropdownSize, setDropdownSize] = useState({ width: 0, height: 0 });
    useLayoutEffect(() => {
        if (dropdownContentRef.current && hoveredItem) {
            const { offsetWidth, offsetHeight } = dropdownContentRef.current;
            setDropdownSize({ width: offsetWidth, height: offsetHeight });
        }
    }, [hoveredItem]);

    return (
        <div className={styles.navbar}>
            <div className={classNames(styles.containerFluid, styles.px30)}>
                {/* Logo */}
                <Link className={styles.navbarBrand} to={'/#'}>
                    <img
                        src={'/topcv-logo.webp'}
                        alt="TopCV - Tạo CV, Tìm việc làm, Tuyển dụng hiệu quả"
                        title="TopCV - Tạo CV, Tìm việc làm, Tuyển dụng hiệu quả"
                    />
                </Link>

                {/* Left side */}
                <div id="navigation-left-desktop" className={'navigation-left-root-element navigation-left-desktop'}>
                    <div
                        className="navigation-left-container"
                        ref={navContainerRef}
                        onMouseLeave={() => setHoveredItem(null)}
                    >
                        <div className="navigation-left__item-wrapper">
                            {APP_HEADER_NAVIGATION.map((item, index) => (
                                <div
                                    key={index}
                                    ref={(el) => (navItemRefs.current[index] = el)}
                                    className={classNames('navigation-left__item', item.dataDropdownClassName, {
                                        'open-dropdown': hoveredItem === item.dataDropdownClassName,
                                    })}
                                    data-dropdown-classname={item.dataDropdownClassName}
                                    onMouseMove={() => {
                                        handleMouseEnter(item.dataDropdownClassName);

                                        const itemEl = navItemRefs.current[index];
                                        const containerLeft =
                                            navContainerRef.current?.getBoundingClientRect().left || 0;
                                        const itemCenter = itemEl.getBoundingClientRect().left + itemEl.offsetWidth / 2;

                                        setArrowX(itemCenter - containerLeft);
                                    }}
                                >
                                    <a className="navigation-left__item-link" href={item.link}>
                                        {item.title}
                                        <FaChevronDown className="navigation-left__item-link-icon" />
                                    </a>
                                </div>
                            ))}

                            <div className="navigation-left__item topcv-pro-item">
                                <a className="navigation-left__item-link" href="https://www.topcv.vn/pro">
                                    TopCV
                                    <div className="job-pro-wrap">
                                        <span className="job-pro-icon">Pro</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div
                            className={classNames('navigation-left__dropdowns', {
                                'open-dropdown': hoveredItem,
                            })}
                            style={{
                                width: dropdownSize.width,
                                height: dropdownSize.height,
                            }}
                        >
                            <div
                                className="navigation-left__dropdowns-background"
                                style={{ transform: 'translateX(221.522px)' }}
                            />
                            <div className="navigation-left__dropdowns-content" ref={dropdownContentRef}>
                                <div
                                    className={classNames('navigation-left__item-sub-menu sub-menu-job-search', {
                                        'open-dropdown': hoveredItem === 'sub-menu-job-search',
                                    })}
                                >
                                    <div className="navigation-left__item-sub-menu-wrapper navigation-left__item-sub-menu-left">
                                        <div className="sub-menu__header">Việc làm</div>
                                        <div className="sub-menu__items">
                                            <div className="sub-menu__items-col">
                                                <a
                                                    className="sub-menu__item "
                                                    href="https://www.topcv.vn/viec-lam"
                                                    title="Tìm việc làm"
                                                >
                                                    <img
                                                        className="sub-menu__item-icon"
                                                        src="https://www.topcv.vn/v4/image/header/navigation/navigation-left/job-search/search-job.png"
                                                        alt="search-job.png"
                                                    />
                                                    <span className="sub-menu__item-text">
                                                        Tìm việc làm
                                                        <FaArrowRight className="sub-menu__item-text-icon" />
                                                    </span>
                                                </a>
                                                <a
                                                    className="sub-menu__item "
                                                    href="https://www.topcv.vn/viec-lam-da-luu"
                                                    title="Việc làm đã lưu"
                                                >
                                                    <img
                                                        className="sub-menu__item-icon"
                                                        src="https://www.topcv.vn/v4/image/header/navigation/navigation-left/job-search/saved-jobs.png"
                                                        alt="saved-jobs.png"
                                                    />
                                                    <span className="sub-menu__item-text">
                                                        Việc làm đã lưu
                                                        <FaArrowRight className="sub-menu__item-text-icon" />
                                                    </span>
                                                </a>
                                                <a
                                                    className="sub-menu__item "
                                                    href="https://www.topcv.vn/lich-su-ung-tuyen"
                                                    title="Việc làm đã ứng tuyển"
                                                >
                                                    <img
                                                        className="sub-menu__item-icon"
                                                        src="https://www.topcv.vn/v4/image/header/navigation/navigation-left/job-search/applied-jobs.png"
                                                        alt="applied-jobs.png"
                                                    />
                                                    <span className="sub-menu__item-text">
                                                        Việc làm đã ứng tuyển
                                                        <FaArrowRight className="sub-menu__item-text-icon" />
                                                    </span>
                                                </a>
                                                <a
                                                    className="sub-menu__item "
                                                    href="https://www.topcv.vn/viec-lam-phu-hop"
                                                    title="Việc làm phù hợp"
                                                >
                                                    <img
                                                        className="sub-menu__item-icon"
                                                        src="https://www.topcv.vn/v4/image/header/navigation/navigation-left/job-search/suitable-jobs.png"
                                                        alt="suitable-jobs.png"
                                                    />
                                                    <span className="sub-menu__item-text">
                                                        Việc làm phù hợp
                                                        <FaArrowRight className="sub-menu__item-text-icon" />
                                                    </span>
                                                </a>
                                            </div>
                                            <div className="sub-menu__items-col">
                                                <div className="sub-menu__items-col__header">Công ty</div>
                                                <div className="sub-menu__items-col__wrapper">
                                                    <a
                                                        className="sub-menu__item "
                                                        href="https://www.topcv.vn/cong-ty"
                                                        title="Danh sách công ty"
                                                    >
                                                        <img
                                                            className="sub-menu__item-icon"
                                                            src="https://www.topcv.vn/v4/image/header/navigation/navigation-left/job-search/company.png"
                                                            alt="company.png"
                                                        />
                                                        <span className="sub-menu__item-text">
                                                            Danh sách công ty
                                                            <FaArrowRight className="sub-menu__item-text-icon" />
                                                        </span>
                                                    </a>
                                                    <a
                                                        className="sub-menu__item "
                                                        href="https://www.topcv.vn/top-cong-ty"
                                                        title="Top công ty"
                                                    >
                                                        <img
                                                            className="sub-menu__item-icon"
                                                            src="https://www.topcv.vn/v4/image/header/navigation/navigation-left/job-search/top-companies.png"
                                                            alt="top-companies.png"
                                                        />
                                                        <span className="sub-menu__item-text">
                                                            Top công ty
                                                            <FaArrowRight className="sub-menu__item-text-icon" />
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="navigation-left__item-sub-menu-separate"></div>
                                    <div className="navigation-left__item-sub-menu-wrapper navigation-left__item-sub-menu-right">
                                        <div className="sub-menu__header">VIỆC LÀM THEO VỊ TRÍ</div>
                                        <div className="sub-menu__items">
                                            <div className="sub-menu__items-col">
                                                <a
                                                    className="sub-menu__item "
                                                    href="/tim-viec-lam-nhan-vien-kinh-doanh"
                                                    title="Việc làm Nhân viên kinh doanh"
                                                >
                                                    <i className="fa-regular fa-briefcase-blank sub-menu__item-icon" />
                                                    <span className="sub-menu__item-text">
                                                        Việc làm Nhân viên kinh doanh
                                                        <FaArrowRight className="sub-menu__item-text-icon" />
                                                    </span>
                                                </a>
                                                <a
                                                    className="sub-menu__item "
                                                    href="/tim-viec-lam-ke-toan"
                                                    title="Việc làm Kế toán"
                                                >
                                                    <i className="fa-regular fa-briefcase-blank sub-menu__item-icon" />
                                                    <span className="sub-menu__item-text">
                                                        Việc làm Kế toán
                                                        <FaArrowRight className="sub-menu__item-text-icon" />
                                                    </span>
                                                </a>
                                                <a
                                                    className="sub-menu__item "
                                                    href="/tim-viec-lam-marketing"
                                                    title="Việc làm Marketing"
                                                >
                                                    <i className="fa-regular fa-briefcase-blank sub-menu__item-icon" />
                                                    <span className="sub-menu__item-text">
                                                        Việc làm Marketing
                                                        <FaArrowRight className="sub-menu__item-text-icon" />
                                                    </span>
                                                </a>
                                                <a
                                                    className="sub-menu__item "
                                                    href="/tim-viec-lam-hanh-chinh-nhan-su"
                                                    title="Việc làm Hành chính nhân sự"
                                                >
                                                    <i className="fa-regular fa-briefcase-blank sub-menu__item-icon" />
                                                    <span className="sub-menu__item-text">
                                                        Việc làm Hành chính nhân sự
                                                        <FaArrowRight className="sub-menu__item-text-icon" />
                                                    </span>
                                                </a>
                                                <a
                                                    className="sub-menu__item "
                                                    href="/tim-viec-lam-nhan-vien-cham-soc-khach-hang"
                                                    title="Viêc làm Chăm sóc khách hàng"
                                                >
                                                    <i className="fa-regular fa-briefcase-blank sub-menu__item-icon" />
                                                    <span className="sub-menu__item-text">
                                                        Viêc làm Chăm sóc khách hàng
                                                        <FaArrowRight className="sub-menu__item-text-icon" />
                                                    </span>
                                                </a>
                                                <a
                                                    className="sub-menu__item "
                                                    href="/tim-viec-lam-ngan-hang"
                                                    title="Việc làm Ngân hàng"
                                                >
                                                    <i className="fa-regular fa-briefcase-blank sub-menu__item-icon" />
                                                    <span className="sub-menu__item-text">
                                                        Việc làm Ngân hàng
                                                        <FaArrowRight className="sub-menu__item-text-icon" />
                                                    </span>
                                                </a>
                                                <a
                                                    className="sub-menu__item "
                                                    href="https://www.topcv.vn/viec-lam-it"
                                                    title="Việc làm IT"
                                                >
                                                    <i className="fa-regular fa-briefcase-blank sub-menu__item-icon" />
                                                    <span className="sub-menu__item-text">
                                                        Việc làm IT
                                                        <FaArrowRight className="sub-menu__item-text-icon" />
                                                    </span>
                                                </a>
                                            </div>
                                            <div className="sub-menu__items-col">
                                                <a
                                                    className="sub-menu__item "
                                                    href="/tim-viec-lam-lao-dong-pho-thong"
                                                    title="Việc làm Lao động phổ thông"
                                                >
                                                    <i className="fa-regular fa-briefcase-blank sub-menu__item-icon" />
                                                    <span className="sub-menu__item-text">
                                                        Việc làm Lao động phổ thông
                                                        <FaArrowRight className="sub-menu__item-text-icon" />
                                                    </span>
                                                </a>
                                                <a
                                                    className="sub-menu__item "
                                                    href="https://www.topcv.vn/viec-lam-senior"
                                                    title="Việc làm Senior"
                                                >
                                                    <i className="fa-regular fa-briefcase-blank sub-menu__item-icon" />
                                                    <span className="sub-menu__item-text">
                                                        Việc làm Senior
                                                        <FaArrowRight className="sub-menu__item-text-icon" />
                                                    </span>
                                                </a>
                                                <a
                                                    className="sub-menu__item "
                                                    href="/tim-viec-lam-ky-su-xay-dung"
                                                    title="Việc làm Kỹ sư xây dựng"
                                                >
                                                    <i className="fa-regular fa-briefcase-blank sub-menu__item-icon" />
                                                    <span className="sub-menu__item-text">
                                                        Việc làm Kỹ sư xây dựng
                                                        <FaArrowRight className="sub-menu__item-text-icon" />
                                                    </span>
                                                </a>
                                                <a
                                                    className="sub-menu__item "
                                                    href="/tim-viec-lam-thiet-ke-do-hoa-designer"
                                                    title="Việc làm Thiết kế đồ hoạ"
                                                >
                                                    <i className="fa-regular fa-briefcase-blank sub-menu__item-icon" />
                                                    <span className="sub-menu__item-text">
                                                        Việc làm Thiết kế đồ hoạ
                                                        <FaArrowRight className="sub-menu__item-text-icon" />
                                                    </span>
                                                </a>
                                                <a
                                                    className="sub-menu__item "
                                                    href="/tim-viec-lam-bat-dong-san"
                                                    title="Việc làm Bất động sản"
                                                >
                                                    <i className="fa-regular fa-briefcase-blank sub-menu__item-icon" />
                                                    <span className="sub-menu__item-text">
                                                        Việc làm Bất động sản
                                                        <FaArrowRight className="sub-menu__item-text-icon" />
                                                    </span>
                                                </a>
                                                <a
                                                    className="sub-menu__item "
                                                    href="/tim-viec-lam-giao-duc"
                                                    title="Việc làm Giáo dục"
                                                >
                                                    <i className="fa-regular fa-briefcase-blank sub-menu__item-icon" />
                                                    <span className="sub-menu__item-text">
                                                        Việc làm Giáo dục
                                                        <FaArrowRight className="sub-menu__item-text-icon" />
                                                    </span>
                                                </a>
                                                <a
                                                    className="sub-menu__item "
                                                    href="/tim-viec-lam-nhan-vien-telesales"
                                                    title="Việc làm telesales"
                                                >
                                                    <i className="fa-regular fa-briefcase-blank sub-menu__item-icon" />
                                                    <span className="sub-menu__item-text">
                                                        Việc làm telesales
                                                        <FaArrowRight className="sub-menu__item-text-icon" />
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={classNames('navigation-left__item-sub-menu sub-menu-cv', {
                                        'open-dropdown': hoveredItem === 'sub-menu-cv',
                                    })}
                                >
                                    <div className="navigation-left__item-sub-menu-wrapper navigation-left__item-sub-menu-left">
                                        <div className="sub-menu-cv-wrapper">
                                            <div className="sub-menu-cv__block">
                                                <a
                                                    className="sub-menu-cv__block-header"
                                                    href="https://www.topcv.vn/mau-cv"
                                                    title="Mẫu CV theo style"
                                                >
                                                    <span className="sub-menu-cv__block-header-text">
                                                        Mẫu CV theo style
                                                    </span>
                                                    <i className="fa-regular fa-arrow-right sub-menu-cv__block-header-icon" />
                                                    <FaArrowRight className="sub-menu-cv__block-header-icon" />
                                                </a>
                                                <div className="sub-menu-cv__block-items">
                                                    <a
                                                        className="sub-menu-cv__block-item "
                                                        href="/mau-cv-tieng-viet/mau-don-gian"
                                                        title="Mẫu CV Đơn giản"
                                                    >
                                                        <img
                                                            src="https://www.topcv.vn/v4/image/header/navigation/navigation-left/cv-manage/cube.png"
                                                            alt="cube"
                                                            className="sub-menu-cv__block-item-img"
                                                        />
                                                        <span className="sub-menu-cv__block-item-text">
                                                            Mẫu CV Đơn giản
                                                        </span>
                                                    </a>
                                                    <a
                                                        className="sub-menu-cv__block-item "
                                                        href="/mau-cv-tieng-viet/mau-an-tuong"
                                                        title="Mẫu CV Ấn tượng"
                                                    >
                                                        <img
                                                            src="https://www.topcv.vn/v4/image/header/navigation/navigation-left/cv-manage/compass.png"
                                                            alt="compass"
                                                            className="sub-menu-cv__block-item-img"
                                                        />
                                                        <span className="sub-menu-cv__block-item-text">
                                                            Mẫu CV Ấn tượng
                                                        </span>
                                                    </a>
                                                    <a
                                                        className="sub-menu-cv__block-item "
                                                        href="/mau-cv-tieng-viet/mau-chuyen-nghiep"
                                                        title="Mẫũ CV Chuyên nghiệp"
                                                    >
                                                        <img
                                                            src="https://www.topcv.vn/v4/image/header/navigation/navigation-left/cv-manage/star.png"
                                                            alt="star"
                                                            className="sub-menu-cv__block-item-img"
                                                        />
                                                        <span className="sub-menu-cv__block-item-text">
                                                            Mẫu CV Chuyên nghiệp
                                                        </span>
                                                    </a>
                                                    <a
                                                        className="sub-menu-cv__block-item "
                                                        href="/mau-cv-tieng-viet/mau-hien-dai"
                                                        title="Mẫu CV Hiện đại"
                                                    >
                                                        <img
                                                            src="https://www.topcv.vn/v4/image/header/navigation/navigation-left/cv-manage/pen-tool.png"
                                                            alt="pen-tool"
                                                            className="sub-menu-cv__block-item-img"
                                                        />
                                                        <span className="sub-menu-cv__block-item-text">
                                                            Mẫu CV Hiện đại
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="sub-menu-cv__block">
                                                <a
                                                    className="sub-menu-cv__block-header"
                                                    href="https://www.topcv.vn/mau-cv-theo-vi-tri-cong-viec"
                                                    title="Mẫu CV theo style"
                                                >
                                                    <span className="sub-menu-cv__block-header-text">
                                                        Mẫu CV theo vị trí ứng tuyển
                                                    </span>
                                                    <i className="fa-regular fa-arrow-right sub-menu-cv__block-header-icon" />
                                                    <FaArrowRight className="sub-menu-cv__block-header-icon" />
                                                </a>
                                                <div className="sub-menu-cv__block-items">
                                                    <a
                                                        className="sub-menu-cv__block-item "
                                                        href="/mau-cv-tieng-viet/mau-cv-nhan-vien-kinh-doanh"
                                                        title="Nhân viên kinh doanh"
                                                    >
                                                        <i className="fa-regular fa-briefcase-blank sub-menu-cv__block-item-icon" />
                                                        <span className="sub-menu-cv__block-item-text">
                                                            Nhân viên kinh doanh
                                                        </span>
                                                    </a>
                                                    <a
                                                        className="sub-menu-cv__block-item "
                                                        href="/mau-cv-tieng-viet/mau-cv-lap-trinh-vien"
                                                        title="Lập trình viên"
                                                    >
                                                        <i className="fa-regular fa-briefcase-blank sub-menu-cv__block-item-icon" />
                                                        <span className="sub-menu-cv__block-item-text">
                                                            Lập trình viên
                                                        </span>
                                                    </a>
                                                    <a
                                                        className="sub-menu-cv__block-item "
                                                        href="/mau-cv-tieng-viet/mau-cv-nhan-vien-ke-toan"
                                                        title="Nhân viên kế toán"
                                                    >
                                                        <i className="fa-regular fa-briefcase-blank sub-menu-cv__block-item-icon" />
                                                        <span className="sub-menu-cv__block-item-text">
                                                            Nhân viên kế toán
                                                        </span>
                                                    </a>
                                                    <a
                                                        className="sub-menu-cv__block-item "
                                                        href="/mau-cv-tieng-viet/mau-cv-chuyen-vien-marketing"
                                                        title="Chuyên viên marketing"
                                                    >
                                                        <i className="fa-regular fa-briefcase-blank sub-menu-cv__block-item-icon" />
                                                        <span className="sub-menu-cv__block-item-text">
                                                            Chuyên viên marketing
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="navigation-left__item-sub-menu-separate"></div>
                                    <div className="navigation-left__item-sub-menu-wrapper navigation-left__item-sub-menu-right">
                                        <div className="sub-menu__items">
                                            <div className="sub-menu__items-col">
                                                <a
                                                    className="sub-menu__item "
                                                    href="https://www.topcv.vn/quan-ly-cv"
                                                    title="Quản lý CV"
                                                >
                                                    <img
                                                        className="sub-menu__item-icon"
                                                        src="https://www.topcv.vn/v4/image/header/navigation/navigation-left/cv-manage/cv-manage.png"
                                                        alt="cv-manage.png"
                                                    />
                                                    <span className="sub-menu__item-text">
                                                        Quản lý CV
                                                        <FaArrowRight className="sub-menu__item-text-icon" />
                                                    </span>
                                                </a>
                                                <a
                                                    className="sub-menu__item "
                                                    href="https://www.topcv.vn/upload-cv?ta_source=UploadCVInMenu"
                                                    title="Tải CV lên"
                                                >
                                                    <img
                                                        className="sub-menu__item-icon"
                                                        src="https://www.topcv.vn/v4/image/header/navigation/navigation-left/cv-manage/cv-upload.png"
                                                        alt="cv-upload.png"
                                                    />
                                                    <span className="sub-menu__item-text">
                                                        Tải CV lên
                                                        <FaArrowRight className="sub-menu__item-text-icon" />
                                                    </span>
                                                </a>
                                                <a
                                                    className="sub-menu__item "
                                                    href="/huong-dan-viet-cv-chi-tiet-theo-nganh"
                                                    title="Hướng dẫn viết CV"
                                                >
                                                    <img
                                                        className="sub-menu__item-icon"
                                                        src="https://www.topcv.vn/v4/image/header/navigation/navigation-left/cv-manage/cv-write-guide.png"
                                                        alt="cv-write-guide.png"
                                                    />
                                                    <span className="sub-menu__item-text">
                                                        Hướng dẫn viết CV
                                                        <FaArrowRight className="sub-menu__item-text-icon" />
                                                    </span>
                                                </a>
                                                <a
                                                    className="sub-menu__item "
                                                    href="https://www.topcv.vn/quan-ly-cover-letter"
                                                    title="Quản lý Cover Letter"
                                                >
                                                    <img
                                                        className="sub-menu__item-icon"
                                                        src="https://www.topcv.vn/v4/image/header/navigation/navigation-left/cv-manage/cover-letter-manage.png"
                                                        alt="cover-letter-manage.png"
                                                    />
                                                    <span className="sub-menu__item-text">
                                                        Quản lý Cover Letter
                                                        <FaArrowRight className="sub-menu__item-text-icon" />
                                                    </span>
                                                </a>
                                                <a
                                                    className="sub-menu__item "
                                                    href="https://www.topcv.vn/mau-cover-letter-thu-xin-viec"
                                                    title="Mẫu Cover Letter"
                                                >
                                                    <img
                                                        className="sub-menu__item-icon"
                                                        src="https://www.topcv.vn/v4/image/header/navigation/navigation-left/cv-manage/cover-letter-sample.png"
                                                        alt="cover-letter-sample.png"
                                                    />
                                                    <span className="sub-menu__item-text">
                                                        Mẫu Cover Letter
                                                        <FaArrowRight className="sub-menu__item-text-icon" />
                                                    </span>
                                                </a>
                                                <a
                                                    className="sub-menu__item "
                                                    href="https://www.topcv.vn/profile?ta_source=ViewProfileInMenubar"
                                                    title="TopCV Profile"
                                                >
                                                    <img
                                                        className="sub-menu__item-icon"
                                                        src="https://www.topcv.vn/v4/image/header/navigation/navigation-left/cv-manage/topcv-profile.png"
                                                        alt="topcv-profile.png"
                                                    />
                                                    <span className="sub-menu__item-text">
                                                        TopCV Profile
                                                        <FaArrowRight className="sub-menu__item-text-icon" />
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>{' '}
                                <div
                                    className={classNames('navigation-left__item-sub-menu sub-menu-utility-tool', {
                                        'open-dropdown': hoveredItem === 'sub-menu-utility-tool',
                                    })}
                                >
                                    <div className="navigation-left__item-sub-menu-wrapper navigation-left__item-sub-menu-left">
                                        <div className="sub-menu__header">Khám phá và nâng cấp bản thân</div>
                                        <div className="sub-menu__items">
                                            <div className="sub-menu__items-col">
                                                <a
                                                    className="sub-menu__item "
                                                    href="https://www.topcv.vn/trac-nghiem-tinh-cach-mbti"
                                                    title="Trắc nghiệm MBTI"
                                                >
                                                    <img
                                                        className="sub-menu__item-icon"
                                                        src="https://www.topcv.vn/v4/image/header/navigation/navigation-left/utility-tool/multiple-choice-mbti.png"
                                                        alt="multiple-choice-mbti.png"
                                                    />
                                                    <span className="sub-menu__item-text">
                                                        Trắc nghiệm MBTI
                                                        <FaArrowRight className="sub-menu__item-text-icon" />
                                                    </span>
                                                </a>
                                                <a
                                                    className="sub-menu__item "
                                                    href="https://www.topcv.vn/trac-nghiem-da-tri-thong-minh-multiple-intelligences-test"
                                                    title="Trắc nghiệm MI"
                                                >
                                                    <img
                                                        className="sub-menu__item-icon"
                                                        src="https://www.topcv.vn/v4/image/header/navigation/navigation-left/utility-tool/multiple-choice-mi.png"
                                                        alt="multiple-choice-mi.png"
                                                    />
                                                    <span className="sub-menu__item-text">
                                                        Trắc nghiệm MI
                                                        <FaArrowRight className="sub-menu__item-text-icon" />
                                                    </span>
                                                </a>
                                                <a
                                                    className="sub-menu__item "
                                                    href="https://www.topcv.vn/danh-gia-nang-luc"
                                                    title="TopCV Skills"
                                                >
                                                    <img
                                                        className="sub-menu__item-icon"
                                                        src="https://www.topcv.vn/v4/image/header/navigation/navigation-left/utility-tool/topcv-skills.png"
                                                        alt="topcv-skills.png"
                                                    />
                                                    <span className="sub-menu__item-text">
                                                        TopCV Skills
                                                        <FaArrowRight className="sub-menu__item-text-icon" />
                                                    </span>
                                                </a>
                                                <a
                                                    className="sub-menu__item "
                                                    href="https://www.topcv.vn/khoa-hoc"
                                                    title="Khóa học"
                                                >
                                                    <img
                                                        className="sub-menu__item-icon"
                                                        src="https://www.topcv.vn/v4/image/header/navigation/navigation-left/utility-tool/courses.png"
                                                        alt="courses.png"
                                                    />
                                                    <span className="sub-menu__item-text">
                                                        Khóa học
                                                        <FaArrowRight className="sub-menu__item-text-icon" />
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="navigation-left__item-sub-menu-separate"></div>
                                    <div className="navigation-left__item-sub-menu-wrapper navigation-left__item-sub-menu-right">
                                        <div className="sub-menu__header">Công cụ</div>
                                        <div className="sub-menu__items">
                                            <div className="sub-menu__items-col">
                                                <a
                                                    className="sub-menu__item "
                                                    href="https://www.topcv.vn/tinh-luong-gross-net"
                                                    title="Tính lương Gross - Net"
                                                >
                                                    <img
                                                        className="sub-menu__item-icon"
                                                        src="https://www.topcv.vn/v4/image/header/navigation/navigation-left/utility-tool/gross-net.png"
                                                        alt="gross-net.png"
                                                    />
                                                    <span className="sub-menu__item-text">
                                                        Tính lương Gross - Net
                                                        <FaArrowRight className="sub-menu__item-text-icon" />
                                                    </span>
                                                </a>
                                                <a
                                                    className="sub-menu__item "
                                                    href="https://www.topcv.vn/tinh-thue-thu-nhap-ca-nhan"
                                                    title="Tính thuế thu nhập cá nhân"
                                                >
                                                    <img
                                                        className="sub-menu__item-icon"
                                                        src="https://www.topcv.vn/v4/image/header/navigation/navigation-left/utility-tool/personal-tax.png"
                                                        alt="personal-tax.png"
                                                    />
                                                    <span className="sub-menu__item-text">
                                                        Tính thuế thu nhập cá nhân
                                                        <FaArrowRight className="sub-menu__item-text-icon" />
                                                    </span>
                                                </a>
                                                <a
                                                    className="sub-menu__item "
                                                    href="https://www.topcv.vn/tinh-lai-kep"
                                                    title="Tính lãi suất kép"
                                                >
                                                    <img
                                                        className="sub-menu__item-icon"
                                                        src="https://www.topcv.vn/v4/image/header/navigation/navigation-left/utility-tool/compounding-interest.png"
                                                        alt="compounding-interest.png"
                                                    />
                                                    <span className="sub-menu__item-text">
                                                        Tính lãi suất kép
                                                        <FaArrowRight className="sub-menu__item-text-icon" />
                                                    </span>
                                                </a>
                                                <a
                                                    className="sub-menu__item "
                                                    href="https://www.topcv.vn/cong-cu-tinh-muc-huong-bao-hiem-that-nghiep"
                                                    title="Tính bảo hiểm thất nghiệp"
                                                >
                                                    <img
                                                        className="sub-menu__item-icon"
                                                        src="https://www.topcv.vn/v4/image/header/navigation/navigation-left/utility-tool/unemployment-insurance.png"
                                                        alt="unemployment-insurance.png"
                                                    />
                                                    <span className="sub-menu__item-text">
                                                        Tính bảo hiểm thất nghiệp
                                                        <FaArrowRight className="sub-menu__item-text-icon" />
                                                    </span>
                                                </a>
                                            </div>
                                            <div className="sub-menu__items-col">
                                                <a
                                                    className="sub-menu__item "
                                                    href="https://www.topcv.vn/tinh-bao-hiem-xa-hoi-mot-lan"
                                                    title="Tính bảo hiểm xã hội một lần"
                                                >
                                                    <img
                                                        className="sub-menu__item-icon"
                                                        src="https://www.topcv.vn/v4/image/header/navigation/navigation-left/utility-tool/social_insurance.png"
                                                        alt="social_insurance.png"
                                                    />
                                                    <span className="sub-menu__item-text">
                                                        Tính bảo hiểm xã hội một lần
                                                        <FaArrowRight className="sub-menu__item-text-icon" />
                                                    </span>
                                                </a>
                                                <a
                                                    className="sub-menu__item "
                                                    href="https://www.topcv.vn/lap-ke-hoach-tiet-kiem"
                                                    title="Lập kế hoạch tiết kiệm"
                                                >
                                                    <img
                                                        className="sub-menu__item-icon"
                                                        src="https://www.topcv.vn/v4/image/header/navigation/navigation-left/utility-tool/saving-plan.png"
                                                        alt="saving-plan.png"
                                                    />
                                                    <span className="sub-menu__item-text">
                                                        Lập kế hoạch tiết kiệm
                                                        <FaArrowRight className="sub-menu__item-text-icon" />
                                                    </span>
                                                </a>
                                                <a
                                                    className="sub-menu__item "
                                                    href="https://www.topcv.vn/app"
                                                    title="Mobile App TopCV"
                                                >
                                                    <img
                                                        className="sub-menu__item-icon"
                                                        src="https://www.topcv.vn/v4/image/header/navigation/navigation-left/utility-tool/app-topcv.png"
                                                        alt="app-topcv.png"
                                                    />
                                                    <span className="sub-menu__item-text">
                                                        Mobile App TopCV
                                                        <FaArrowRight className="sub-menu__item-text-icon" />
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>{' '}
                                <div
                                    className={classNames('navigation-left__item-sub-menu sub-menu-career-guide', {
                                        'open-dropdown': hoveredItem === 'sub-menu-career-guide',
                                    })}
                                >
                                    <div className="navigation-left__item-sub-menu-wrapper navigation-left__item-sub-menu-left">
                                        <div className="sub-menu__items">
                                            <div className="sub-menu__items-col">
                                                <a
                                                    className="sub-menu__item "
                                                    href="/blog/huong-nghiep"
                                                    title="Định hướng nghề nghiệp"
                                                >
                                                    <img
                                                        className="sub-menu__item-icon"
                                                        src="https://www.topcv.vn/v4/image/header/navigation/navigation-left/career-guide/career-orientation.png"
                                                        alt="career-orientation.png"
                                                    />
                                                    <span className="sub-menu__item-text">
                                                        Định hướng nghề nghiệp
                                                        <FaArrowRight className="sub-menu__item-text-icon" />
                                                    </span>
                                                </a>
                                                <a
                                                    className="sub-menu__item "
                                                    href="/blog/bi-kip-tim-viec"
                                                    title="Bí kíp tìm việc"
                                                >
                                                    <img
                                                        className="sub-menu__item-icon"
                                                        src="https://www.topcv.vn/v4/image/header/navigation/navigation-left/career-guide/job-search-tip.png"
                                                        alt="job-search-tip.png"
                                                    />
                                                    <span className="sub-menu__item-text">
                                                        Bí kíp tìm việc
                                                        <FaArrowRight className="sub-menu__item-text-icon" />
                                                    </span>
                                                </a>
                                                <a
                                                    className="sub-menu__item "
                                                    href="/blog/che-do-luong-thuong"
                                                    title="Chế độ lương thưởng"
                                                >
                                                    <img
                                                        className="sub-menu__item-icon"
                                                        src="https://www.topcv.vn/v4/image/header/navigation/navigation-left/career-guide/salary-benefit.png"
                                                        alt="salary-benefit.png"
                                                    />
                                                    <span className="sub-menu__item-text">
                                                        Chế độ lương thưởng
                                                        <FaArrowRight className="sub-menu__item-text-icon" />
                                                    </span>
                                                </a>
                                                <a
                                                    className="sub-menu__item "
                                                    href="/blog/kien-thuc-nganh"
                                                    title="Kiến thức chuyên ngành"
                                                >
                                                    <img
                                                        className="sub-menu__item-icon"
                                                        src="https://www.topcv.vn/v4/image/header/navigation/navigation-left/career-guide/specialized-knowledge.png"
                                                        alt="specialized-knowledge.png"
                                                    />
                                                    <span className="sub-menu__item-text">
                                                        Kiến thức chuyên ngành
                                                        <FaArrowRight className="sub-menu__item-text-icon" />
                                                    </span>
                                                </a>
                                                <a
                                                    className="sub-menu__item "
                                                    href="/blog/hanh-trang-nghe-nghiep"
                                                    title="Hành trang nghề nghiệp"
                                                >
                                                    <img
                                                        className="sub-menu__item-icon"
                                                        src="https://www.topcv.vn/v4/image/header/navigation/navigation-left/career-guide/professional-luggage.png"
                                                        alt="professional-luggage.png"
                                                    />
                                                    <span className="sub-menu__item-text">
                                                        Hành trang nghề nghiệp
                                                        <FaArrowRight className="sub-menu__item-text-icon" />
                                                    </span>
                                                </a>
                                                <a
                                                    className="sub-menu__item "
                                                    href="/blog/xu-huong"
                                                    title="Thị trường & xu hướng tuyển dụng"
                                                >
                                                    <img
                                                        className="sub-menu__item-icon"
                                                        src="https://www.topcv.vn/v4/image/header/navigation/navigation-left/career-guide/specialized-knowledge.png"
                                                        alt="specialized-knowledge.png"
                                                    />
                                                    <span className="sub-menu__item-text">
                                                        Thị trường &amp; xu hướng tuyển dụng
                                                        <FaArrowRight className="sub-menu__item-text-icon" />
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="navigation-left__item-sub-menu-separate"></div>
                                    <div className="navigation-left__item-sub-menu-wrapper navigation-left__item-sub-menu-right">
                                        <div className="sub-menu__article-header">Bài viết nổi bật</div>
                                        <div className="sub-menu__article-wrapper">
                                            <div className="sub-menu__articles">
                                                <a
                                                    className="sub-menu__article"
                                                    href="https://www.topcv.vn/10-viec-lam-tieng-anh-sieu-hot"
                                                    title="Tổng hợp 10 việc làm tiếng Anh siêu HOT cho dân ngoại ngữ"
                                                >
                                                    <img
                                                        className="sub-menu__article-img"
                                                        src="https://cdn-new.topcv.vn/unsafe/600x/https://static.topcv.vn/cms/viec-lam-tieng-anh-2.jpg608778fb644aa.jpg"
                                                        alt="Tổng hợp 10 việc làm tiếng Anh siêu HOT cho dân ngoại ngữ"
                                                    />
                                                    <div className="sub-menu__article-detail">
                                                        <div className="sub-menu__article-detail-title">
                                                            Tổng hợp 10 việc làm tiếng Anh siêu HOT cho dân ngoại ngữ
                                                        </div>
                                                        <div className="sub-menu__article-detail-description">
                                                            Với xu thế hội nhập như hiện nay, nhu cầu về việc làm cần
                                                            tiếng Anh của các doanh nghiệp ngày càng cao. Vậy, có những
                                                            việc làm tiếng Anh nào đang siêu HOT hiện nay? Trong bài
                                                            viết này, TopCV sẽ tổng hợp ngay 10 việc làm tiếng Anh siêu
                                                            HOT 2024 cho dân ngoại ngữ tham khảo.
                                                        </div>
                                                    </div>
                                                </a>
                                                <a
                                                    className="sub-menu__article"
                                                    href="https://www.topcv.vn/topcv-pro-ung-vien-chat-doanh-nghiep-hang-dau"
                                                    title="TopCV Pro – Không gian tuyển dụng chuyên biệt kết nối Ứng viên chất với Doanh nghiệp hàng đầu"
                                                >
                                                    <img
                                                        className="sub-menu__article-img"
                                                        src="https://cdn-new.topcv.vn/unsafe/600x/https://static.topcv.vn/cms/topcv-pro.jpg6837e82e97ea6.jpg"
                                                        alt="TopCV Pro – Không gian tuyển dụng chuyên biệt kết nối Ứng viên chất với Doanh nghiệp hàng đầu"
                                                    />
                                                    <div className="sub-menu__article-detail">
                                                        <div className="sub-menu__article-detail-title">
                                                            TopCV Pro – Không gian tuyển dụng chuyên biệt kết nối Ứng
                                                            viên chất với Doanh nghiệp hàng đầu
                                                        </div>
                                                        <div className="sub-menu__article-detail-description">
                                                            Mỗi chúng ta đều mang trong mình một khát vọng chạm tới đỉnh
                                                            cao trong sự nghiệp, được làm việc tại một môi trường chuyên
                                                            nghiệp, đồng hành cùng những cá nhân xuất sắc và phát triển
                                                            sự nghiệp tại những tổ chức xứng tầm. Nhưng để hành trình ấy
                                                            không chỉ là ước mơ xa vời mà sẽ trở thành hiện thực trong
                                                            tầm tay thì điều quan trọng đầu tiên chính là: Bạn phải ở
                                                            đúng nơi, nơi tạo điều kiện để người giỏi gặp đúng cơ
                                                            hội.TopCV Pro chính là không gian tuyển dụng chuyên biệt ra
                                                            đời để hiện thực hóa ước mơ của bạn, nơi mà Ứng viên chất
                                                            không cần đắn đo giữa cơ hội và định hướng, mà được kết nối
                                                            với những Doanh nghiệp lớn, uy tín với những vị trí xứng tầm
                                                            năng lực, hứa hẹn một tương lai phát triển với nhiều cơ hội
                                                            rộng mở.Hành trình vươn xa không bắt đầu bằng may mắn, mà
                                                            bắt đầu từ một cú chạm đúng lúc. Và TopCV Pro chính là điểm
                                                            chạm đầu tiên ấy.
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <a
                                                className="sub-menu__article-view-all"
                                                href="https://www.topcv.vn/blog"
                                                title="Danh sách bài viết"
                                            >
                                                <span className="sub-menu__article-view-all-text">
                                                    Xem thêm bài viết nổi bật
                                                </span>
                                                <i className="fa-regular fa-arrow-right sub-menu__article-view-all-icon" />
                                            </a>
                                        </div>
                                    </div>
                                </div>{' '}
                            </div>
                            <div
                                className="navigation-left__dropdowns-arrow"
                                style={{ transform: `translateX(${arrowX}px) rotate(45deg)` }}
                            />
                        </div>
                    </div>
                </div>
                {/* Right side */}
                <ul className="nav navbar-nav navbar-right">
                    <li className="navbar-right__item register">
                        <a className="btn btn-primary" href="https://www.topcv.vn/sign-up">
                            Đăng ký
                        </a>
                    </li>
                    <li className="navbar-right__item login">
                        <a className="btn btn-outline-primary" href="https://www.topcv.vn/login">
                            Đăng nhập
                        </a>
                    </li>
                    <li className="navbar-right__item post-job">
                        <a
                            type="button"
                            className="btn btn-dark"
                            href="https://tuyendung.topcv.vn?utm_source=epl-btn&utm_medium=nav-button&utm_campaign=click-tracking"
                        >
                            Đăng tuyển &amp; tìm hồ sơ
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default AppHeader;
