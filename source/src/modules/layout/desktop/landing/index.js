import React from 'react';
import AppBody from '@modules/layout/common/AppBody';
import './index.scss';
import { FaAngleDown, FaMagnifyingGlass } from 'react-icons/fa6';
import { IoLocationOutline } from 'react-icons/io5';

function LandingPageDesktop() {
    return (
        <AppBody>
            <div id="page-welcome">
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
                        <div className="header-content_category-family"></div>
                    </div>
                </section>
            </div>
        </AppBody>
    );
}

export default LandingPageDesktop;
