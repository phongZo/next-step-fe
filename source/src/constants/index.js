export const apiUrl = process.env.REACT_APP_API;
export const apiUrlTenant = process.env.REACT_APP_API_TENANT;
export const version = process.env.REACT_APP_VERSION;
export const enableExposure = process.env.REACT_APP_ENABLE_EXPOSURE === 'true';
export const enableMobile = process.env.REACT_APP_IS_MOBILE === 'true';

export const fixedPath = {
    privacy: `${apiUrl}${process.env.REACT_APP_PRIVACY_PATH}`,
    help: `${apiUrl}${process.env.REACT_APP_HELP_PATH}`,
    aboutUs: `${apiUrl}${process.env.REACT_APP_ABOUT_US_PATH}`,
};

//LTS SHOP

export const brandName = 'nail-fe';

export const appName = 'nail-fe';

export const storageKeys = {
    USER_ACCESS_TOKEN: `${appName}-user-access-token`,
    USER_REFRESH_TOKEN: `${appName}-user-refresh-token`,
    RESTAURANT_ACTIVE: `${appName}-restaurant-active`,
    X_TENANT: `${appName}-X-tenant`,
    CART: `${appName}-cart`,
    TENANT_HEADER: `X-Tenant`,
    CART_DIRECT: `${appName}-cart-direct`,
    APP_VERSION_RESETED: `${appName}-${version}`,
};

export const AppConstants = {
    apiRootUrl: process.env.REACT_APP_API,
    gameApiRootUrl: process.env.REACT_APP_GAME_API,
    contentRootUrl: `${process.env.REACT_APP_API_MEDIA}v1/file/download`,
    mediaRootUrl: `${process.env.REACT_APP_API_MEDIA}`,
    langKey: 'vi',
};
export const appAccount = {
    APP_USERNAME: process.env.REACT_APP_USERNAME,
    APP_PASSWORD: process.env.REACT_APP_PASSWORD,
};
export const GROUP_KIND_STUDENT = 4;
export const GROUP_KIND_EXPERT = 5;
export const GROUP_KIND_SELLER = 6;

export const THEMES = {
    DARK: 'dark',
    LIGHT: 'light',
};

export const defaultLocale = 'vi';
export const locales = ['en', 'vi'];

export const DATE_DISPLAY_FORMAT = 'DD-MM-YYYY HH:mm';
export const DATE_SHORT_MONTH_FORMAT = 'DD MMM YYYY';
export const TIME_FORMAT_DISPLAY = 'HH:mm';
export const DATE_FORMAT_VALUE = 'DD/MM/YYYY';
export const DATE_FORMAT_DISPLAY = 'DD/MM/YYYY';
export const DEFAULT_FORMAT = 'DD/MM/YYYY HH:mm:ss';
export const DATE_FORMAT_ZERO_TIME = 'DD/MM/YYYY 00:00:00';
export const DATE_FORMAT_END_OF_DAY_TIME = 'DD/MM/YYYY 23:59:59';
export const DEFAULT_EXCEL_DATE = 'DDMMYYHHmmss';
export const DEFAULT_FORMAT_DAY_OFF_LOG = 'DD/MM/YYYY HH:mm:00';
export const DEFAULT_FORMAT_ZERO_SECOND = 'DD/MM/YYYY HH:mm:00';

export const KIND_SERVICE = 1;
export const KIND_SERVICE_COMBO = 0;

export const navigateTypeEnum = {
    PUSH: 'PUSH',
    POP: 'POP',
    REPLACE: 'REPLACE',
};

export const articleTypeEnum = {
    URL: 'url',
    PLAIN: 'plain',
};

export const accessRouteTypeEnum = {
    NOT_LOGIN: false,
    REQUIRE_LOGIN: true,
    BOTH: null,
};

export const UploadFileTypes = {
    AVATAR: 'AVATAR',
    LOGO: 'LOGO',
    DOCUMENT: 'DOCUMENT',
};
export const DATE_YEAR_FORMAT = 'DD/MM/YYYY';
export const DATE_YEAR_FORMAT_TIME = 'DD/MM/YYYY HH:mm';
export const DATE_YEAR = 'MMM DD YYYY';
export const LIMIT_IMAGE_SIZE = 512000;

export const STATUS_PENDING = 0;
export const STATUS_ACTIVE = 1;
export const STATUS_LOCK = -1;
export const STATUS_DELETE = -2;

export const DEFAULT_PAGE_SIZE = 10;
export const DEFAULT_TABLE_ITEM_SIZE = 20;
export const DEFAULT_TABLE_ITEM_MOBILE_SIZE = 10;
export const DEFAULT_TABLE_PAGE_START = 0;
export const DEFAULT_LANGUAGE_ID = '1';
export const LESSON_KIND_TEXT = 1;
export const LESSON_KIND_VIDEO = 2;
export const LESSON_KIND_SECTION = 3;
export const commonStatus = {
    PENDING: 0,
    ACTIVE: 1,
    LOCK: -1,
    DELETE: -2,
};

export const commonStatusColor = {
    [commonStatus.PENDING]: 'warning',
    [commonStatus.ACTIVE]: 'green',
    [commonStatus.LOCK]: 'red',
};

export const CurrentcyPositions = {
    FRONT: 0,
    BACK: 1,
};

export const USER_DATA = 'user-data';
export const LANGUAGE = 'language';

export const KEYS = {
    USER_DATA,
    LANGUAGE,
};

export const shopVariantKey = {
    color: 0,
    size: 1,
};

export const FieldTypes = {
    STRING: 'STRING_TYPE',
    NUMBER: 'NUMBER_TYPE',
    SELECT: 'SELECT',
    AUTOCOMPLETE: 'AUTOCOMPLETE',
    DATE: 'DATE',
    DATE_RANGE: 'DATE_RANGE',
};

export const MONTHLY_PERIOD_STATE_PENDING = 0;
export const MONTHLY_PERIOD_STATE_CALCULATED = 1;
export const MONTHLY_PERIOD_STATE_DONE = 2;
export const MONTHLY_PERIOD_STATE_CANCEL = 3;

export const TRANSACTION_LOG_STATE_PENDING = 1;
export const TRANSACTION_LOG_STATE_APPROVED = 2;
export const TRANSACTION_LOG_STATE_REJECTED = 3;

export const REVENUE_PRICE_INTRODUCE = 1;
export const REVENUE_PRICE_SYSTEM = 2;
export const REVENUE_PRICE_PAID = 3;
export const SALARY_PERIOD_DETAIL_STATE_UNPAID = 0;
export const SALARY_PERIOD_DETAIL_STATE_PAID = 1;

export const ORDER_PAYMENT_METHOD_CASH = 1;
export const ORDER_PAYMENT_METHOD_CARD = 2;

export const ORDER_STATE_WAITING = 0;
export const ORDER_STATE_CONFIRM = 1;
export const ORDER_STATE_DONE = 2;
export const ORDER_STATE_CANCEL = 3;

export const BOOKING_STATE_BOOKING = 1;
export const BOOKING_STATE_WORKING = 2;
export const BOOKING_STATE_DONE = 3;
export const BOOKING_STATE_CANCEL = 4;

export const BOOKING_PAYOUT_STATUS_UNPAID = 0;
export const BOOKING_PAYOUT_STATUS_PROCESSING = 1;
export const BOOKING_PAYOUT_STATUS_PAID = 2;

export const FEMALE = 1;
export const MALE = 0;

export const routesNotRequireSiteInfo = [];
export const defaultSlug = 'default';

export const freeEmployee = -1;

export const SERVICE_RATING_KIND_BOOKING = 1;
export const SERVICE_RATING_KIND_AMBIENCE = 2;
export const SERVICE_RATING_KIND_CLEANLINESS = 3;
export const SERVICE_RATING_KIND_SERVICE = 4;
export const SERVICE_RATING_KIND_REPLY = 5;
export const SERVICE_RATING_KIND_USER_REPLY = 6;

export const BEFORE_TAX = 1;
export const AFTER_TAX = 2;

export const APP_HEADER_NAVIGATION = [
    {
        title: 'Việc làm',
        link: '/#',
        dataDropdownClassName: 'sub-menu-job-search',
    },
    {
        title: 'Tạo CV',
        link: '/#',
        dataDropdownClassName: 'sub-menu-cv',
    },
    {
        title: 'Công cụ',
        link: '/#',
        dataDropdownClassName: 'sub-menu-utility-tool',
    },
    {
        title: 'Cẩm nang nghề nghiệp',
        link: '/#',
        dataDropdownClassName: 'sub-menu-career-guide',
    },
];

export const DROP_DOWN_LIST = [
    {
        dataDropdownClassName: 'sub-menu-job-search',
        title: 'Việc làm',
        groups: [
            {
                title: 'Chức năng',
                items: [
                    { label: 'Tìm việc làm', href: 'https://www.topcv.vn/viec-lam', icon: 'search-job.png' },
                    { label: 'Việc làm đã lưu', href: 'https://www.topcv.vn/viec-lam-da-luu', icon: 'saved-jobs.png' },
                    {
                        label: 'Việc làm đã ứng tuyển',
                        href: 'https://www.topcv.vn/lich-su-ung-tuyen',
                        icon: 'applied-jobs.png',
                    },
                    {
                        label: 'Việc làm phù hợp',
                        href: 'https://www.topcv.vn/viec-lam-phu-hop',
                        icon: 'suitable-jobs.png',
                    },
                ],
            },
            {
                title: 'Công ty',
                items: [
                    { label: 'Danh sách công ty', href: 'https://www.topcv.vn/cong-ty', icon: 'company.png' },
                    { label: 'Top công ty', href: 'https://www.topcv.vn/top-cong-ty', icon: 'top-companies.png' },
                ],
            },
            {
                title: 'Việc làm theo vị trí',
                items: [
                    { label: 'Nhân viên kinh doanh', href: '/tim-viec-lam-nhan-vien-kinh-doanh' },
                    { label: 'Kế toán', href: '/tim-viec-lam-ke-toan' },
                    { label: 'Marketing', href: '/tim-viec-lam-marketing' },
                    { label: 'Hành chính nhân sự', href: '/tim-viec-lam-hanh-chinh-nhan-su' },
                    { label: 'Chăm sóc khách hàng', href: '/tim-viec-lam-nhan-vien-cham-soc-khach-hang' },
                    { label: 'Ngân hàng', href: '/tim-viec-lam-ngan-hang' },
                    { label: 'IT', href: 'https://www.topcv.vn/viec-lam-it' },
                    { label: 'Lao động phổ thông', href: '/tim-viec-lam-lao-dong-pho-thong' },
                    { label: 'Senior', href: 'https://www.topcv.vn/viec-lam-senior' },
                    { label: 'Kỹ sư xây dựng', href: '/tim-viec-lam-ky-su-xay-dung' },
                    { label: 'Thiết kế đồ hoạ', href: '/tim-viec-lam-thiet-ke-do-hoa-designer' },
                    { label: 'Bất động sản', href: '/tim-viec-lam-bat-dong-san' },
                    { label: 'Giáo dục', href: '/tim-viec-lam-giao-duc' },
                    { label: 'Telesales', href: '/tim-viec-lam-nhan-vien-telesales' },
                ],
            },
        ],
    },
    {
        dataDropdownClassName: 'sub-menu-cv',
        title: 'Tạo CV',
        groups: [
            {
                title: 'Mẫu CV theo style',
                items: [
                    { label: 'Mẫu CV Đơn giản', href: '/mau-cv-tieng-viet/mau-don-gian', icon: 'cube.png' },
                    { label: 'Mẫu CV Ấn tượng', href: '/mau-cv-tieng-viet/mau-an-tuong', icon: 'compass.png' },
                    { label: 'Mẫu CV Chuyên nghiệp', href: '/mau-cv-tieng-viet/mau-chuyen-nghiep', icon: 'star.png' },
                    { label: 'Mẫu CV Hiện đại', href: '/mau-cv-tieng-viet/mau-hien-dai', icon: 'pen-tool.png' },
                ],
            },
            {
                title: 'Mẫu CV theo vị trí',
                items: [
                    { label: 'Nhân viên kinh doanh', href: '/mau-cv-tieng-viet/mau-cv-nhan-vien-kinh-doanh' },
                    { label: 'Lập trình viên', href: '/mau-cv-tieng-viet/mau-cv-lap-trinh-vien' },
                    { label: 'Kế toán', href: '/mau-cv-tieng-viet/mau-cv-nhan-vien-ke-toan' },
                    { label: 'Marketing', href: '/mau-cv-tieng-viet/mau-cv-chuyen-vien-marketing' },
                ],
            },
            {
                title: 'Quản lý CV',
                items: [
                    { label: 'Quản lý CV', href: 'https://www.topcv.vn/quan-ly-cv', icon: 'cv-manage.png' },
                    {
                        label: 'Tải CV lên',
                        href: 'https://www.topcv.vn/upload-cv?ta_source=UploadCVInMenu',
                        icon: 'cv-upload.png',
                    },
                    {
                        label: 'Hướng dẫn viết CV',
                        href: '/huong-dan-viet-cv-chi-tiet-theo-nganh',
                        icon: 'cv-write-guide.png',
                    },
                    {
                        label: 'Quản lý Cover Letter',
                        href: 'https://www.topcv.vn/quan-ly-cover-letter',
                        icon: 'cover-letter-manage.png',
                    },
                    {
                        label: 'Mẫu Cover Letter',
                        href: 'https://www.topcv.vn/mau-cover-letter-thu-xin-viec',
                        icon: 'cover-letter-sample.png',
                    },
                    {
                        label: 'TopCV Profile',
                        href: 'https://www.topcv.vn/profile?ta_source=ViewProfileInMenubar',
                        icon: 'topcv-profile.png',
                    },
                ],
            },
        ],
    },
    {
        dataDropdownClassName: 'sub-menu-utility-tool',
        title: 'Công cụ',
        groups: [
            {
                title: 'Khám phá bản thân',
                items: [
                    { label: 'Trắc nghiệm MBTI', href: 'https://www.topcv.vn/trac-nghiem-tinh-cach-mbti' },
                    {
                        label: 'Trắc nghiệm MI',
                        href: 'https://www.topcv.vn/trac-nghiem-da-tri-thong-minh-multiple-intelligences-test',
                    },
                    { label: 'TopCV Skills', href: 'https://www.topcv.vn/danh-gia-nang-luc' },
                    { label: 'Khoá học', href: 'https://www.topcv.vn/khoa-hoc' },
                ],
            },
            {
                title: 'Tính toán & App',
                items: [
                    { label: 'Tính lương Gross - Net', href: 'https://www.topcv.vn/tinh-luong-gross-net' },
                    { label: 'Tính thuế thu nhập cá nhân', href: 'https://www.topcv.vn/tinh-thue-thu-nhap-ca-nhan' },
                    { label: 'Tính lãi suất kép', href: 'https://www.topcv.vn/tinh-lai-kep' },
                    {
                        label: 'Bảo hiểm thất nghiệp',
                        href: 'https://www.topcv.vn/cong-cu-tinh-muc-huong-bao-hiem-that-nghiep',
                    },
                    { label: 'BHXH một lần', href: 'https://www.topcv.vn/tinh-bao-hiem-xa-hoi-mot-lan' },
                    { label: 'Kế hoạch tiết kiệm', href: 'https://www.topcv.vn/lap-ke-hoach-tiet-kiem' },
                    { label: 'App TopCV', href: 'https://www.topcv.vn/app' },
                ],
            },
        ],
    },
];

export const CAREER_GUIDE_LIST = [
    {
        groups: [
            {
                items: [
                    { label: 'Định hướng nghề nghiệp', href: '/blog/huong-nghiep' },
                    { label: 'Bí kíp tìm việc', href: '/blog/bi-kip-tim-viec' },
                    { label: 'Chế độ lương thưởng', href: '/blog/che-do-luong-thuong' },
                    { label: 'Kiến thức chuyên ngành', href: '/blog/kien-thuc-nganh' },
                    { label: 'Hành trang nghề nghiệp', href: '/blog/hanh-trang-nghe-nghiep' },
                    { label: 'Xu hướng tuyển dụng', href: '/blog/xu-huong' },
                ],
            },
            {
                title: 'Bài viết nổi bật',
                articles: [
                    {
                        title: '10 việc làm tiếng Anh siêu HOT',
                        href: 'https://www.topcv.vn/10-viec-lam-tieng-anh-sieu-hot',
                    },
                    {
                        title: 'TopCV Pro – Kết nối ứng viên chất',
                        href: 'https://www.topcv.vn/topcv-pro-ung-vien-chat-doanh-nghiep-hang-dau',
                    },
                ],
            },
        ],
    },
];
