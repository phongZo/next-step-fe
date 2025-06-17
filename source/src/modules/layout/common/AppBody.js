import React, { useState } from 'react';

import styles from './AppBody.module.scss';
import './AppBody.scss';
import { FaChevronLeft, FaChevronRight, FaCommentDots, FaHeadset, FaHeart, FaXmark } from 'react-icons/fa6';
import { IoShieldCheckmark } from 'react-icons/io5';
import classNames from 'classnames';

const AppBody = ({ children }) => {
    const [setShowSlide, setSetShowSlide] = useState(false);
    const handleAntiScamClick = () => {
        setSetShowSlide(!setShowSlide);
    };
    return (
        <main className={styles.main}>
            {children}
            <div id="fixed-right-helper-sidebar">
                <div id="save-job-helper" className="save-job-helper" data-saved-job-count={0}>
                    <a
                        href="https://www.topcv.vn/viec-lam-da-luu"
                        title="Việc làm đã lưu"
                        className="save-job-helper__icon-wrapper"
                    >
                        <FaHeart className="save-job-helper__icon" />

                        <span className="save-job-helper__job-count">0</span>
                    </a>
                    <div id="saved-job-tooltip">
                        <div className="saved-job-tooltip__title">Lưu tin thành công!</div>
                        <div className="link-saved-job">
                            Để xem
                            <a href="https://www.topcv.vn/viec-lam-da-luu" target="blank">
                                Danh sách việc làm đã lưu
                            </a>
                            , click vào đây!
                        </div>
                    </div>
                    <div className="save-job-helper__tooltip-hover">Danh sách việc làm đã lưu</div>
                </div>
                <div id="anti-scam">
                    <div
                        className={classNames('anti-scam', {
                            active: setShowSlide,
                        })}
                    >
                        <div
                            className={classNames('anti-scam-popup', {
                                show: setShowSlide,
                            })}
                        >
                            <button
                                aria-label="xmark"
                                title="xmark"
                                className="anti-scam-popup__close"
                                onClick={handleAntiScamClick}
                            >
                                <FaXmark size={10} />
                            </button>{' '}
                            <p className="anti-scam-popup__title">Tìm việc an toàn cùng TopCV</p>{' '}
                            <div className="anti-scam_slide">
                                <div id="slide-custom" className="slide-custom">
                                    <div
                                        className="slide-custom_inner"
                                        style={{
                                            transition: 'transform 0.5s ease-in-out',
                                            transform: 'translateX(-300%)',
                                        }}
                                    >
                                        <div className="slide-custom_item" data-index={0}>
                                            <a
                                                href="https://blog.topcv.vn/canh-bao-mao-danh-topcv-tuyen-dung-cong-tac-vien-lam-viec-thoi-vu/"
                                                title="CẢNH BÁO MẠO DANH TOPCV TUYỂN DỤNG CỘNG TÁC VIÊN/LÀM VIỆC THỜI VỤ"
                                            >
                                                <img
                                                    alt="CẢNH BÁO MẠO DANH TOPCV TUYỂN DỤNG CỘNG TÁC VIÊN/LÀM VIỆC THỜI VỤ"
                                                    data-src="https://cdn-new.topcv.vn/unsafe/250x/https://blog.topcv.vn/wp-content/uploads/2025/05/1200x628-WARNING-SCAM-696x364.png"
                                                    className="anti-scam-popup__avatar lazy entered loaded"
                                                    data-ll-status="loaded"
                                                    src="https://cdn-new.topcv.vn/unsafe/250x/https://blog.topcv.vn/wp-content/uploads/2025/05/1200x628-WARNING-SCAM-696x364.png"
                                                />{' '}
                                                <p className="anti-scam-popup__description">Chống lừa đảo 2025</p>
                                            </a>
                                        </div>{' '}
                                        <div className="slide-custom_item" data-index={1}>
                                            <a
                                                href="https://blog.topcv.vn/topcv-viet-nam-khong-ngung-no-luc-phong-chong-ngan-chan-lua-dao-thong-qua-hinh-thuc-tuyen-dung/"
                                                title="TopCV Việt Nam không ngừng nỗ lực phòng chống, ngăn chặn lừa đảo thông qua hình thức tuyển dụng"
                                            >
                                                <img
                                                    alt="TopCV Việt Nam không ngừng nỗ lực phòng chống, ngăn chặn lừa đảo thông qua hình thức tuyển dụng"
                                                    data-src="https://cdn-new.topcv.vn/unsafe/250x/https://blog.topcv.vn/wp-content/uploads/2023/06/Thumbnail-1-1068x559.png"
                                                    className="anti-scam-popup__avatar lazy entered loaded"
                                                    data-ll-status="loaded"
                                                    src="https://cdn-new.topcv.vn/unsafe/250x/https://blog.topcv.vn/wp-content/uploads/2023/06/Thumbnail-1-1068x559.png"
                                                />{' '}
                                                <p className="anti-scam-popup__description">
                                                    TopCV nỗ lực phòng chống lừa đảo
                                                </p>
                                            </a>
                                        </div>{' '}
                                        <div className="slide-custom_item" data-index={2}>
                                            <a
                                                href="https://blog.topcv.vn/topcv-viet-nam-bat-tay-cung-chong-lua-dao-cua-chuyen-gia-an-ninh-mang-hieu-pc/"
                                                title="TopCV Việt Nam “bắt tay” cùng Chống Lừa Đảo của Chuyên gia an ninh mạng Hiếu PC"
                                            >
                                                <img
                                                    alt="TopCV Việt Nam “bắt tay” cùng Chống Lừa Đảo của Chuyên gia an ninh mạng Hiếu PC"
                                                    data-src="https://cdn-new.topcv.vn/unsafe/250x/https://blog.topcv.vn/wp-content/uploads/2023/03/blog-cover-696x479.png"
                                                    className="anti-scam-popup__avatar lazy entered loaded"
                                                    data-ll-status="loaded"
                                                    src="https://cdn-new.topcv.vn/unsafe/250x/https://blog.topcv.vn/wp-content/uploads/2023/03/blog-cover-696x479.png"
                                                />{' '}
                                                <p className="anti-scam-popup__description">
                                                    TopCV &quot;bắt tay&quot; phòng chống lừa đảo với Chuyên gia an ninh
                                                    mạng Hiếu PC
                                                </p>
                                            </a>
                                        </div>{' '}
                                        <div className="slide-custom_item active" data-index={3}>
                                            <a
                                                href="https://blog.topcv.vn/ung-tuyen-an-toan-cung-topcv/"
                                                title="Ứng tuyển an toàn cùng TopCV"
                                            >
                                                <img
                                                    alt="Ứng tuyển an toàn cùng TopCV"
                                                    data-src="https://cdn-new.topcv.vn/unsafe/250x/https://blog.topcv.vn/wp-content/uploads/2024/06/1200-x-628-2-696x383.png"
                                                    className="anti-scam-popup__avatar lazy entered loaded"
                                                    data-ll-status="loaded"
                                                    src="https://cdn-new.topcv.vn/unsafe/250x/https://blog.topcv.vn/wp-content/uploads/2024/06/1200-x-628-2-696x383.png"
                                                />{' '}
                                                <p className="anti-scam-popup__description">
                                                    Ứng tuyển an toàn cùng TopCV
                                                </p>
                                            </a>
                                        </div>{' '}
                                        <div className="slide-custom_item" data-index={4}>
                                            <a
                                                href="https://blog.topcv.vn/topcv-canh-bao-nha-tuyen-dung-tin-dang-co-dau-hieu-bat-thuong/"
                                                title="TopCV cảnh báo Nhà tuyển dụng & Tin đăng có dấu hiệu bất thường"
                                            >
                                                <img
                                                    alt="TopCV cảnh báo Nhà tuyển dụng & Tin đăng có dấu hiệu bất thường"
                                                    data-src="https://cdn-new.topcv.vn/unsafe/250x/https://blog.topcv.vn/wp-content/uploads/2024/06/TopCV-canh-bao-Nha-tuyen-dung-Tin-dang-co-dau-hieu-bat-thuong-696x383.png"
                                                    className="anti-scam-popup__avatar lazy entered loaded"
                                                    data-ll-status="loaded"
                                                    src="https://cdn-new.topcv.vn/unsafe/250x/https://blog.topcv.vn/wp-content/uploads/2024/06/TopCV-canh-bao-Nha-tuyen-dung-Tin-dang-co-dau-hieu-bat-thuong-696x383.png"
                                                />{' '}
                                                <p className="anti-scam-popup__description">
                                                    TopCV cảnh báo NTD &amp; Tin đăng có dấu hiệu bất thường
                                                </p>
                                            </a>
                                        </div>{' '}
                                        <div className="slide-custom_item" data-index={5}>
                                            <a
                                                title="Chống lừa đảo"
                                                href="https://blog.topcv.vn/danh-muc/chong-lua-dao/"
                                            >
                                                <img
                                                    alt="chong-lua-dao.png"
                                                    data-src="https://cdn-new.topcv.vn/unsafe/250x/https://static.topcv.vn/v4/image/anti-scam/chong-lua-dao.png"
                                                    className="anti-scam-popup__avatar lazy"
                                                />
                                            </a>{' '}
                                            <p className="anti-scam-popup__description">
                                                <a
                                                    title="Xem thêm"
                                                    href="https://blog.topcv.vn/danh-muc/chong-lua-dao/"
                                                    className="see-more"
                                                >
                                                    Xem thêm
                                                    <i className="fa-solid fa-arrow-right" />
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="slide-custom_navigation">
                                        <a
                                            href="#"
                                            title="navigation-item-slide"
                                            className="slide-custom_navigation-item"
                                            data-index={0}
                                        />
                                        <a
                                            href="#"
                                            title="navigation-item-slide"
                                            className="slide-custom_navigation-item"
                                            data-index={1}
                                        />
                                        <a
                                            href="#"
                                            title="navigation-item-slide"
                                            className="slide-custom_navigation-item"
                                            data-index={2}
                                        />
                                        <a
                                            href="#"
                                            title="navigation-item-slide"
                                            className="slide-custom_navigation-item active"
                                            data-index={3}
                                        />
                                        <a
                                            href="#"
                                            title="navigation-item-slide"
                                            className="slide-custom_navigation-item"
                                            data-index={4}
                                        />
                                        <a
                                            href="#"
                                            title="navigation-item-slide"
                                            className="slide-custom_navigation-item"
                                            data-index={5}
                                        />
                                    </div>
                                    <div className="slide-custom_arrow prev">
                                        <FaChevronLeft size={10} />
                                    </div>
                                    <div className="slide-custom_arrow next">
                                        <FaChevronRight size={10} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="anti-scam__icon-wrapper" onClick={handleAntiScamClick}>
                            <IoShieldCheckmark
                                className={classNames('anti-scam__icon', {
                                    open: setShowSlide,
                                })}
                            />
                            <div className="anti-scam__tooltip-hover">Tìm việc an toàn cùng TopCV</div>
                        </div>
                    </div>
                </div>
                <div id="support-ticket-root">
                    <div id="fixed-product-comment" className="fixed-product-comment">
                        <FaCommentDots className="fixed-product-comment__icon" />
                        <span className="fixed-product-comment__text">Góp ý</span>{' '}
                        <div className="fixed-product-comment__tooltip-hover">Góp ý cho TopCV</div>
                    </div>{' '}
                    {/**/}{' '}
                    <div id="support-ticket-launcher" className="support-ticket-launcher">
                        <FaHeadset className="support-ticket-launcher__icon" />
                        <div className="support-ticket-launcher__text">Hỗ trợ</div>{' '}
                        <div className="support-ticket-launcher__tooltip-hover">Trung tâm hỗ trợ ứng viên</div>
                    </div>{' '}
                    <div id="support-ticket-modal-wraper">
                        <div id="modalHotlineContact" className="support-ticket-modal">
                            <div className="support-ticket-modal-header">
                                <div className="support-ticket-modal-title st-text-highlight text-center">Liên hệ</div>
                            </div>{' '}
                            <div className="support-ticket-modal-body">
                                <div className="st-text-center">
                                    <p>
                                        <strong className="st-text-bold">
                                            TopCV cam kết sẽ xử lý các vấn đề của bạn trong vòng tối đa 24h.
                                        </strong>
                                    </p>{' '}
                                    <p>
                                        Tổng đài:
                                        <span className="st-text-highlight">(024) 6680 5588 (Giờ hành chính) </span>
                                    </p>{' '}
                                    <p>
                                        Trong trường hợp không liên lạc được, vui lòng gửi hỗ trợ tới email:{' '}
                                        <span className="st-text-highlight">hotro@topcv.vn</span>
                                    </p>{' '}
                                    <p>Xin cảm ơn!</p>
                                </div>
                            </div>{' '}
                            <div className="support-ticket-modal-footer text-center mt-20">
                                <a href="#" className="btn btn-default btn-close ">
                                    Đóng lại
                                </a>
                            </div>
                        </div>{' '}
                        <div id="modalSubmitTicket" className="support-ticket-modal">
                            <form action="" method="post" id="frmSubmitTicket">
                                <div className="support-ticket-modal-header">
                                    <div className="support-ticket-modal-title">Gửi yêu cầu hỗ trợ</div>{' '}
                                    <button
                                        type="button"
                                        data-dismiss="modal"
                                        aria-label="Close"
                                        className="close close-modal"
                                    >
                                        <span aria-hidden="true">
                                            <i className="fa-regular fa-xmark" />
                                        </span>
                                    </button>
                                </div>{' '}
                                <div className="support-ticket-modal-body">
                                    <div className="row">
                                        <div className="st-form-group col-md-12">
                                            <span className="st-text-dark-gray">
                                                Họ tên <span className="st-text-red">*</span>
                                            </span>{' '}
                                            <input
                                                name="fullname"
                                                id="st-fullname"
                                                defaultValue=""
                                                placeholder="e.g Nguyễn Văn A"
                                                className="st-form-control"
                                            />
                                        </div>
                                    </div>{' '}
                                    <div className="row">
                                        <div className="st-form-group col-md-6 pdr-10">
                                            <span className="st-text-dark-gray">
                                                Email <span className="st-text-red">*</span>
                                            </span>{' '}
                                            <input
                                                name="email"
                                                id="st-email"
                                                defaultValue=""
                                                placeholder="e.g nguyenvana@gmail.com"
                                                className="st-form-control"
                                            />
                                        </div>{' '}
                                        <div className="st-form-group col-md-6 pdl-10">
                                            <span className="st-text-dark-gray">
                                                Số điện thoại <span className="st-text-red">*</span>
                                            </span>{' '}
                                            <input
                                                name="phone"
                                                id="st-phone"
                                                defaultValue=""
                                                placeholder="e.g 0123456789"
                                                className="st-form-control"
                                            />
                                        </div>
                                    </div>{' '}
                                    <div className="row">
                                        <div className="st-form-group col-md-12">
                                            <span className="st-text-dark-gray">
                                                Vấn đề cần hỗ trợ <span className="st-text-red">*</span>
                                            </span>{' '}
                                            <select name="type" id="st-type" className="st-form-control">
                                                <option value="">-- Chọn vấn đề --</option>{' '}
                                                <option value={3}>Thanh toán dịch vụ</option>{' '}
                                                <option value={1}>Sử dụng công cụ tạo CV</option>{' '}
                                                <option value={2}>Tìm Việc làm</option>{' '}
                                                <option value={50}>Góp ý tính năng, sản phẩm</option>{' '}
                                                <option value={4}>Bảo mật thông tin cá nhân</option>{' '}
                                                <option value={100}>Hỗ trợ khác</option>
                                            </select>
                                        </div>
                                    </div>{' '}
                                    <div className="row" style={{ display: 'none' }}>
                                        <div className="st-form-group col-md-12">
                                            <span className="st-text-dark-gray">
                                                Gói dịch vụ <span className="st-text-red">*</span>
                                            </span>{' '}
                                            <select name="package" id="st-package" className="st-form-control">
                                                <option value="">-- Chọn gói dịch vụ --</option>{' '}
                                                <option value="pro">Gói tài khoản Pro</option>{' '}
                                                <option value="education">Gói tài khoản Education</option>{' '}
                                                <option value="premium">Gói tài khoản Premium</option>{' '}
                                                <option value="job_apply_number">
                                                    Dịch vụ xem số lượng người đã ứng tuyển
                                                </option>{' '}
                                                <option value="job_fitness">Dịch vụ xem mức độ phù hợp</option>{' '}
                                                <option value="download_cv_no_logo">
                                                    Tải CV không kèm biểu tượng ©topcv.vn
                                                </option>{' '}
                                                <option value="service_active_candidate">
                                                    Huy hiệu &quot;Tìm việc tích cực&quot;
                                                </option>
                                            </select>
                                        </div>
                                    </div>{' '}
                                    <div className="row">
                                        <div className="st-form-group col-md-12">
                                            <span className="st-text-dark-gray">
                                                Mô tả vấn đề cần hỗ trợ <span className="st-text-red">*</span>
                                            </span>{' '}
                                            <textarea
                                                name="content"
                                                id="st-content"
                                                rows={4}
                                                placeholder="Mô tả rõ vấn đề bạn gặp phải hoặc thông tin góp ý để TopCV có thể xử lý chính xác nhất."
                                                className="st-form-control"
                                                defaultValue={''}
                                            />
                                        </div>
                                    </div>
                                </div>{' '}
                                <div className="support-ticket-modal-footer text-center">
                                    <p className="notice">
                                        TopCV cam kết sẽ xử lý các vấn đề của bạn trong vòng tối đa 24h.
                                    </p>{' '}
                                    <a href="#" className="btn btn-default btn-close" style={{ minWidth: 117 }}>
                                        Đóng lại
                                    </a>{' '}
                                    <a href="#" className="btn btn-submit" style={{ minWidth: 117, marginLeft: 10 }}>
                                        Gửi yêu cầu
                                    </a>
                                </div>
                            </form>
                        </div>{' '}
                        <div id="modalSubmitTicketSuccess" className="support-ticket-modal">
                            <div className="support-ticket-modal-header">
                                <div className="support-ticket-modal-title st-text-highlight text-center">
                                    Gửi yêu cầu thành công
                                </div>
                            </div>{' '}
                            <div className="support-ticket-modal-body">
                                <div className="st-text-center">
                                    <p>
                                        <strong className="st-text-bold">
                                            TopCV sẽ gửi phản hồi qua email bạn đã nhập trong vòng tối đa 24h.
                                        </strong>
                                    </p>{' '}
                                    <p>
                                        Liên hệ hotline nếu sau 24h bạn chưa nhận được phản hồi qua email: <br />{' '}
                                        <span className="st-text-highlight">(024) 6680 5588 (Giờ hành chính) </span>
                                    </p>{' '}
                                    <p>
                                        Hoặc email trực tiếp cho TopCV tại địa chỉ:{' '}
                                        <span className="st-text-highlight">hotro@topcv.vn</span>
                                    </p>{' '}
                                    <p>Xin cảm ơn!</p>
                                </div>
                            </div>{' '}
                            <div className="support-ticket-modal-footer text-center mt-20">
                                <a href="#" className="btn btn-default btn-close ">
                                    Đóng lại
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AppBody;
