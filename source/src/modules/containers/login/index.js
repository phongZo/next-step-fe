import React, { useState } from 'react';
import { defineMessages } from 'react-intl';
import { useNavigate } from 'react-router-dom';
import RenderContext from '@components/common/elements/RenderContext';
import { appAccount, GROUP_KIND_STUDENT, storageKeys } from '@constants';
import apiConfig from '@constants/apiConfig';
import useDevices from '@hooks/useDevices';
import useFetch from '@hooks/useFetch';
import useFetchAction from '@hooks/useFetchAction';
import useTranslate from '@hooks/useTranslate';
import LoginPageDesktop from '@modules/layout/desktop/login';
import LoginMobileComponent from '@modules/layout/mobile/login';
import { showErrorMessage } from '@services/notifyService';
import { setCacheAccessToken } from '@services/userService';
import { accountActions } from '@store/actions';
import { setData } from '@utils/localStorage';
import useForm from 'rc-field-form/lib/useForm';

const message = defineMessages({
    login: 'Đăng nhập',
    forgetpassword: 'Quên mật khẩu',
    noAccount: 'Bạn chưa có tài khoản?',
    required: 'Yêu cầu ngay',
    loginFail: 'Sai tên đăng nhập hoặc mật khẩu !!!',
    verifyFailOTP: 'Mã OTP không đúng!!!',
    verifySuccessOTP: 'Xác thực OTP thành công!!!',
    loginNoAccess: 'Loại tài khoản không phù hợp!!!',
    loginFaied: 'Đăng nhập không thành công!!!',
    username: 'Username',
    otp: 'OTP',
    password: 'Password',
    cancel: 'Hủy',
});

const LoginPageContainer = () => {
    const { isMobile } = useDevices();
    const translate = useTranslate();
    const navigate = useNavigate();
    const [ form ] = useForm();
    const [ isMfaEnable, setIsMfaEnable ] = useState([]);
    const [ isMfa, setIsMa ] = useState([]);
    const [ isOtp, setIsOtp ] = useState(false);
    const [ token, setToken ] = useState(null);
    const [ imgUrl, setImgUrl ] = useState(null);
    const [ loginData, setLoginData ] = useState({});
    const [ loadingApp, setLoading ] = useState(false);
    const base64Credentials = Buffer.from(`${appAccount.APP_USERNAME}:${appAccount.APP_PASSWORD}`).toString('base64');
    const { execute, loading } = useFetch({
        ...apiConfig.account.loginBasic,
        authorization: `Basic ${base64Credentials}`,
    });
    const { execute: executeVerifyCredential, loading: loadingVerifyCredential } = useFetch({
        ...apiConfig.account.verifyCredential,
        authorization: `Basic ${base64Credentials}`,
    });

    const { execute: executeGetProfile } = useFetchAction(accountActions.getProfile, {
        loading: useFetchAction.LOADING_TYPE.APP,
    });

    const handleForgotPasswordClick = () => {
        navigate('/change-password');
    };

    const onFinish = (values) => {
        const loginData = {
            username: values.userName,
            password: values.password,
        };
        setLoginData(loginData);
        executeVerifyCredential({
            data: loginData,
            onCompleted: (res) => {
                if (res.data.isMfaEnable == false) {
                    execute({
                        data: { ...loginData, grant_type: 'seller' },
                        onCompleted: (responseLogin) => {
                            setToken(responseLogin);
                            if (isMfaEnable == false) {
                                handleLoginSuccess(responseLogin);
                            } else {
                                if (isMfa == true) {
                                    setIsOtp(true);
                                }
                                handleLoginSuccess(responseLogin);
                            }
                        },
                        onError: ({ response }) => {
                            if (response?.data?.code === 'ERROR-SELLER-0008') {
                                showErrorMessage(translate.formatMessage(message.loginNoAccess));
                            } else showErrorMessage(translate.formatMessage(message.loginFaied));
                        },
                    });
                } else {
                    setIsMfaEnable(res.data.isMfaEnable);
                    setIsMa(res.data.isMfa);
                    setIsOtp(true);
                    if (res.data.qrUrl) {
                        setImgUrl(res.data.qrUrl);
                    }
                }
            },
            onError: (error) => {
                showErrorMessage(translate.formatMessage(message.loginFail));
            },
        });
    };

    const handleLoginSuccess = (res) => {
        setCacheAccessToken(res.access_token);
        executeGetProfile();
        setData(storageKeys.USER_KIND, GROUP_KIND_STUDENT);
        // dispatch(hideAppLoginModal({}));
        // closeError();
    };

    const onFinishOTP = (values) => {
        const otpValue = values;
        execute({
            data: { ...loginData, grant_type: 'seller', totp: otpValue },
            onCompleted: (responseLogin) => {
                setLoading(true);
                setToken(responseLogin);
                if (isMfaEnable == false) {
                    handleLoginSuccess(responseLogin);
                    setLoading(false);
                } else {
                    if (isMfa == true) {
                        setIsOtp(true);
                    }
                    handleLoginSuccess(responseLogin);
                }
            },
            onError: ({ response }) => {
                if (response?.data?.code === 'ERROR-SELLER-0008') {
                    showErrorMessage(translate.formatMessage(message.loginNoAccess));
                } else showErrorMessage(translate.formatMessage(message.loginFaied));
            },
        });
    };

    const checkUserName = (_, value) => {
        if (value) {
            const usernameRegex = /^[a-zA-Z0-9_]{2,20}$/;
            if (!usernameRegex.test(value)) {
                return Promise.reject('Username invalid !');
            }
        } else return Promise.reject('Username invalid !');

        return Promise.resolve();
    };
    const checkPassword = (_, value) => {
        if (value) {
            const passwordRegex = /^[A-Za-z\d!@#$%^&*()_+\-=]{6,}$/;
            if (!passwordRegex.test(value)) {
                return Promise.reject('Password invalid !');
            }
        } else return Promise.reject('Password invalid !');

        return Promise.resolve();
    };

    const layout = isMobile
        ? {
            defaultTheme: (props) => (
                <LoginMobileComponent
                    onFinish={onFinish}
                    onFinishOTP={onFinishOTP}
                    handleForgotPasswordClick={handleForgotPasswordClick}
                    form={form}
                    imgUrl={imgUrl}
                    isOtp={isOtp}
                    loading={loading}
                    loadingApp={loadingApp}
                    loadingVerifyCredential={loadingVerifyCredential}
                />
            ),
        }
        : {
            defaultTheme: (props) => (
                <LoginPageDesktop
                    onFinish={onFinish}
                    onFinishOTP={onFinishOTP}
                    handleForgotPasswordClick={handleForgotPasswordClick}
                    form={form}
                    imgUrl={imgUrl}
                    isOtp={isOtp}
                    loadingApp={loadingApp}
                    loading={loading}
                    loadingVerifyCredential={loadingVerifyCredential}
                />
            ),
        };

    return (
        <RenderContext
            components={{
                desktop: {
                    defaultTheme: LoginPageDesktop,
                },
                mobile: {
                    defaultTheme: LoginMobileComponent,
                },
            }}
            layout={layout}
        />
    );
};

export default LoginPageContainer;
