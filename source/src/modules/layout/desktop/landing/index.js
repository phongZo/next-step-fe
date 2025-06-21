import React from 'react';
import AppBody from '@modules/layout/common/AppBody';
import './index.scss';
import {
    FaAngleDown,
    FaAngleLeft,
    FaAngleRight,
    FaArrowTrendUp,
    FaChevronDown,
    FaChevronLeft,
    FaChevronRight,
    FaLightbulb,
    FaMagnifyingGlass,
    FaX,
} from 'react-icons/fa6';
import { IoLocationOutline } from 'react-icons/io5';
import { MdOutlineFilterList } from 'react-icons/md';

function LandingPageDesktop() {
    return (
        <AppBody>
            <div id="page-welcome">
                {/* Header banner */}
                <section id="section-header">
                    <div className="container header-content">
                        {/* Header search */}
                        <div className="header-content_search">
                            <form id="frm-search-job">
                                <div className="group-search">
                                    {/* Search input */}
                                    <div className="item item-search">
                                        <FaMagnifyingGlass className="icon" />
                                        <input
                                            className="form-controlui-autocomplete-input"
                                            value=""
                                            placeholder="Vị trí tuyển dụng, tên công ty"
                                            id="keyword"
                                            autoComplete="off"
                                        />
                                    </div>
                                    {/* Location Filter */}
                                    <div className="item">
                                        <div className="item-select-wrapper item-location">
                                            <div
                                                id="location-selection-desktop-form-search-job"
                                                className="location-selection-desktop"
                                            >
                                                <input
                                                    id="location-selection-desktop-form-search-job-input"
                                                    type="text"
                                                    aria-label="invisible-input"
                                                    className="location-selection-desktop__invisible-input"
                                                />
                                                <div className="select-multi-location">
                                                    <IoLocationOutline className="select-multi-location__icon" />
                                                    <div className="select-multi-location__content">
                                                        <p className="select-multi-location__content-default">
                                                            Địa điểm
                                                        </p>
                                                    </div>
                                                    <FaAngleDown className="select-multi-location__angle" />
                                                </div>
                                                {/* view-source:https://www.topcv.vn/ */}
                                            </div>
                                        </div>
                                    </div>
                                    {/* Search button */}
                                    <div className="col-button btn-search-job-wrapper">
                                        <button className="btn btn-topcv btn-search-job">
                                            <FaMagnifyingGlass />
                                            Tìm kiếm
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        {/* Left category filter */}
                        <div className="header-content_category-family">
                            <div
                                id="category-filter-navigation-home-desktop-container"
                                className="category-filter-navigation-home-desktop-container"
                            >
                                <div className="category-level-1">
                                    {/* Category options */}
                                    <div className="category-level-1__options">
                                        <div className="category-level-1__option">
                                            <a
                                                href="https://www.topcv.vn/tim-viec-lam-kinh-doanh-ban-hang-cr1?category_family=r1"
                                                title="Kinh doanh/Bán hàng"
                                                className="category-level-1__option-text"
                                            >
                                                <div className="lv1-text">
                                                    <div className="lv1-text__content">Kinh doanh/Bán hàng</div>
                                                </div>
                                                <FaChevronRight className="lv1-icon" />
                                            </a>
                                        </div>
                                        <div className="category-level-1__option">
                                            <a
                                                href="https://www.topcv.vn/tim-viec-lam-kinh-doanh-ban-hang-cr1?category_family=r1"
                                                title="Kinh doanh/Bán hàng"
                                                className="category-level-1__option-text"
                                            >
                                                <div className="lv1-text">
                                                    <div className="lv1-text__content">Kinh doanh/Bán hàng</div>
                                                </div>
                                                <FaChevronRight className="lv1-icon" />
                                            </a>
                                        </div>
                                        <div className="category-level-1__option">
                                            <a
                                                href="https://www.topcv.vn/tim-viec-lam-kinh-doanh-ban-hang-cr1?category_family=r1"
                                                title="Kinh doanh/Bán hàng"
                                                className="category-level-1__option-text"
                                            >
                                                <div className="lv1-text">
                                                    <div className="lv1-text__content">Kinh doanh/Bán hàng</div>
                                                </div>
                                                <FaChevronRight className="lv1-icon" />
                                            </a>
                                        </div>
                                        <div className="category-level-1__option">
                                            <a
                                                href="https://www.topcv.vn/tim-viec-lam-kinh-doanh-ban-hang-cr1?category_family=r1"
                                                title="Kinh doanh/Bán hàng"
                                                className="category-level-1__option-text"
                                            >
                                                <div className="lv1-text">
                                                    <div className="lv1-text__content">Kinh doanh/Bán hàng</div>
                                                </div>
                                                <FaChevronRight className="lv1-icon" />
                                            </a>
                                        </div>
                                        <div className="category-level-1__option">
                                            <a
                                                href="https://www.topcv.vn/tim-viec-lam-kinh-doanh-ban-hang-cr1?category_family=r1"
                                                title="Kinh doanh/Bán hàng"
                                                className="category-level-1__option-text"
                                            >
                                                <div className="lv1-text">
                                                    <div className="lv1-text__content">Kinh doanh/Bán hàng</div>
                                                </div>
                                                <FaChevronRight className="lv1-icon" />
                                            </a>
                                        </div>
                                        <div className="category-level-1__option">
                                            <a
                                                href="https://www.topcv.vn/tim-viec-lam-kinh-doanh-ban-hang-cr1?category_family=r1"
                                                title="Kinh doanh/Bán hàng"
                                                className="category-level-1__option-text"
                                            >
                                                <div className="lv1-text">
                                                    <div className="lv1-text__content">Kinh doanh/Bán hàng</div>
                                                </div>
                                                <FaChevronRight className="lv1-icon" />
                                            </a>
                                        </div>
                                    </div>
                                    {/* Pagination */}
                                    <div className="category-level-1__header">
                                        <div className="category-level-1__header-pagination">
                                            <div className="category-level-1__header-pagination-text">1/4</div>
                                            <div className="category-level-1__header-pagination-action">
                                                <div className="category-level-1__header-pagination-action-icon prev inactive">
                                                    <FaAngleLeft />
                                                </div>
                                                <div className="category-level-1__header-pagination-action-icon next">
                                                    <FaAngleRight />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Right banner */}
                        <div className="header-content_banner">
                            <a href="#" rel="nofollow" className="btn-show-video">
                                <img
                                    className="img-responsive"
                                    src="https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/welcome/section-header/header-banner.png?v=1.0"
                                    alt="banner trang chủ TopCV"
                                />
                            </a>
                        </div>
                        <div className="header-content_work-market">
                            <div className="work-market_header">
                                <img
                                    src="https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/welcome/section-header/work_market_biefcase.png"
                                    alt
                                />
                                <span>Thị trường việc làm hôm nay</span>
                                <span className="date">17/06/2025</span>
                            </div>
                            <div className="work-market_content">
                                <div className="job-hiring">
                                    <span>Việc làm đang tuyển</span>
                                    <span className="quantity" name="quantity_job_recruitment">
                                        48.138
                                    </span>
                                    <div className="status down">
                                        <FaArrowTrendUp />
                                    </div>
                                </div>
                                <div className="job-hiring">
                                    <span>Việc làm mới hôm nay</span>
                                    <span className="quantity" name="quantity_job_new_today">
                                        2.889
                                    </span>
                                </div>
                            </div>
                            <div className="box-load-more">
                                <a>
                                    Xem thêm
                                    <FaChevronDown />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                {/* List features job */}
                <div id="list-feature-jobs">
                    <div className="container">
                        <div id="box-feature-jobs" className="box_general">
                            <div className="box-header">
                                <div className="box-header__wrap">
                                    <div className="box-header__title">
                                        <h2 className="box-title">Việc làm tốt nhất</h2>
                                        <div className="box-label">
                                            <img
                                                src="https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/welcome/feature-job/label-toppy-ai.png"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="box-header__tool">
                                    <span className="see-more">
                                        <a href="https://www.topcv.vn/viec-lam-tot-nhat">Xem tất cả</a>
                                    </span>
                                    <span className="btn-feature-jobs-pre btn-slick-arrow">
                                        <FaChevronLeft />
                                    </span>
                                    <span className="btn-feature-jobs-next btn-slick-arrow">
                                        <FaChevronRight />
                                    </span>
                                </div>
                            </div>
                            <div className="box-filter">
                                <div className="input">
                                    <div className="input-group" id="filter-feature-job-container">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <MdOutlineFilterList />
                                                Lọc theo:
                                            </span>
                                        </div>
                                        <select
                                            id="filter-feature-job"
                                            className="form-control js-option-filter select2-hidden-accessible"
                                            tabIndex="-1"
                                            aria-hidden="true"
                                        >
                                            <option value="cities">Địa điểm</option>{' '}
                                            <option value="salary">Mức lương</option>{' '}
                                            <option value="experience">Kinh nghiệm</option>{' '}
                                            <option value="categories">Ngành nghề</option>
                                        </select>
                                        <span
                                            className="select2 select2-container select2-container--default select2-container--below"
                                            dir="ltr"
                                            style={{ width: '169px' }}
                                        >
                                            <span className="selection">
                                                <span
                                                    className="select2-selection select2-selection--single"
                                                    role="combobox"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                    tabIndex={0}
                                                    aria-labelledby="select2-filter-feature-job-container"
                                                >
                                                    <span
                                                        className="select2-selection__rendered"
                                                        id="select2-filter-feature-job-container"
                                                        title="Địa điểm"
                                                    >
                                                        Địa điểm
                                                    </span>
                                                    <span className="select2-selection__arrow" role="presentation">
                                                        <FaChevronDown className="select2-selection__icon" />
                                                    </span>
                                                </span>
                                            </span>
                                            <span className="dropdown-wrapper" aria-hidden="true"></span>
                                        </span>
                                    </div>
                                </div>
                                <div className="box-smart-filter box-smart-feature-jobs">
                                    <div className="box-smart-location">
                                        <div className="prev-location btn-slick-arrow">
                                            <FaChevronLeft />
                                        </div>
                                        <div className="box-smart-list-location">
                                            <div data-city_id="0" className="box-smart-item active">
                                                Ngẫu Nhiên
                                            </div>
                                            <div data-city_id="1" className="box-smart-item">
                                                Hà Nội
                                            </div>
                                            <div data-city_id="2" className="box-smart-item">
                                                Thành phố Hồ Chí Minh
                                            </div>
                                            <div data-city_id="41" className="box-smart-item">
                                                Miền Bắc
                                            </div>
                                            <div data-city_id="42" className="box-smart-item">
                                                Miền Nam
                                            </div>
                                        </div>{' '}
                                        <div className="next-location btn-slick-arrow">
                                            <FaChevronRight />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-guide-quick-view guide-box-feature active">
                                <p>
                                    <FaLightbulb /> <b>Gợi ý</b>: Di chuột vào tiêu đề việc làm để xem thêm thông tin
                                    chi tiết
                                </p>
                                <button aria-label="close" title="close" data-type="guide-box-feature">
                                    <FaX />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppBody>
    );
}

export default LandingPageDesktop;
