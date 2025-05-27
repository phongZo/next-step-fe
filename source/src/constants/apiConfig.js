import { apiUrl, apiUrlTenant, AppConstants } from '.';

const baseHeader = {
    'Content-Type': 'application/json',
};

const multipartFormHeader = {
    'Content-Type': 'multipart/form-data',
};

const apiConfig = {
    file: {
        upload: {
            baseURL: `${AppConstants.mediaRootUrl}v1/file/upload`,
            method: 'POST',
            headers: multipartFormHeader,
        },
    },
    account: {
        loginBasic: {
            baseURL: `${apiUrl}api/token`,
            method: 'POST',
            headers: baseHeader,
        },
        login: {
            baseURL: `${apiUrl}v1/account/login`,
            method: 'POST',
            headers: baseHeader,
        },
        logout: {
            baseURL: `${apiUrl}v1/account/logout`,
            method: 'GET',
            headers: baseHeader,
        },
        verifyCredential: {
            baseURL: `${apiUrl}v1/account/verify-credential`,
            method: 'POST',
            headers: baseHeader,
        },
        verifyOtp: {
            baseURL: `${apiUrl}v1/account/verify-otp`,
            method: 'POST',
            headers: baseHeader,
        },
        getProfile: {
            baseURL: `${apiUrl}v1/account/profile`,
            method: 'GET',
            headers: baseHeader,
        },
        register: {
            baseURL: `${apiUrl}v1/customer/register`,
            method: 'POST',
            headers: baseHeader,
        },
        updateProfile: {
            baseURL: `${apiUrl}v1/account/update_admin`,
            method: 'PUT',
            headers: baseHeader,
        },
        getById: {
            baseURL: `${apiUrl}v1/account/get/:id`,
            method: 'GET',
            headers: baseHeader,
        },
        requestForgetPassword: {
            baseURL: `${apiUrl}v1/account/request-forget-password`,
            method: 'POST',
            headers: baseHeader,
        },
        forgetPassword: {
            baseURL: `${apiUrl}v1/account/forget-password`,
            method: 'POST',
            headers: baseHeader,
        },
    },
    user: {
        register: {
            baseURL: `${apiUrl}v1/user/register`,
            method: 'POST',
            headers: baseHeader,
        },
        getProfile: {
            baseURL: `${apiUrl}v1/user/profile`,
            method: 'GET',
            headers: baseHeader,
            isRequiredTenantId: false,
        },
        updateProfile: {
            baseURL: `${apiUrl}v1/user/update-profile`,
            method: 'PUT',
            headers: baseHeader,
            isRequiredTenantId: false,
        },
    },
};

export default apiConfig;
