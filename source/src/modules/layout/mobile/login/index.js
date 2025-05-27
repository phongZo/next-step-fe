import React, { useState } from 'react';
import { defineMessages } from 'react-intl';
import OtpInput from 'react-otp-input';
import { useNavigate } from 'react-router-dom';
import Button from '@components/common/elements/Button';
import Flex from '@components/common/elements/Flex';
import { Form } from '@components/common/elements/Form';
import { InputField } from '@components/common/elements/Input';
import { PasswordField } from '@components/common/elements/PasswordInput';
import { commonMessage } from '@constants/intl';
import useTranslate from '@hooks/useTranslate';
import { Buffer } from 'buffer';

import { ReactComponent as IconBack } from '../../../../assets/icons/Vector.svg';

import styles from './index.module.scss';

window.Buffer = window.Buffer || Buffer;
const message = defineMessages({
    titleComeback: 'Welcome back',
    title: 'Today is a new day. It’s your day.',
    titleLogin: 'Log in to start experiencing our services.',
    register: `Don't have an account?`,
    confirmOTP: 'Verify OTP',
    setupAccount: 'Set up a new account in your authenticator app and scan the QR code below.',
    enterOTP: 'Enter OTP code',
    continue: 'Continue',
    enterEmail: 'Enter your email',
    goOn: 'Proceed',
    email: 'Email',
});

const LoginMobileComponent = ({
    onFinish,
    onFinishOTP,
    handleForgotPasswordClick,
    loading,
    loadingVerifyCredential,
    form,
    imgUrl,
    isOtp,
    loadingApp,
    handleRegisterPage,
    loginSlidesShow,
}) => {
    const [ otp, setOtpLocal ] = useState('');
    const translate = useTranslate();
    const navigate = useNavigate();

    const handleSubmit = () => {
        onFinishOTP(otp);
    };

    const backPage = () => {
        navigate(-1);
    };

    return (
        <div className={styles.loginPage}>
            <div className={styles.header}>
                <div className={styles.iconBack}>
                    <IconBack onClick={backPage} className={styles.iconBack} />
                </div>
            </div>
            {!isOtp ? (
                <div className={styles.wrapper}>
                    <div className={styles.loginForm}>
                        <div className={styles.headerForm}>
                            <div className={styles.description}>
                                <div className={styles.customTitle}>
                                    {translate.formatMessage(message.titleComeback)} 👋
                                </div>
                                {translate.formatMessage(message.title)}
                                <div className={styles.shortDescription}>
                                    {translate.formatMessage(message.titleLogin)}
                                </div>
                            </div>
                        </div>
                        <Form className={styles.form} form={form} onFinish={onFinish}>
                            <Flex direction="column">
                                <InputField
                                    className={styles.input}
                                    name="userName"
                                    required
                                    label={translate.formatMessage(message.email)}
                                    placeholder={translate.formatMessage(message.enterEmail)}
                                />
                                <PasswordField
                                    name="password"
                                    label={translate.formatMessage(commonMessage.password)}
                                    required
                                    placeholder={translate.formatMessage(commonMessage.placeholderPassword)}
                                    className={styles.input}
                                />
                            </Flex>

                            <div className={styles.forgotPassword} onClick={handleForgotPasswordClick}>
                                {translate.formatMessage(commonMessage.forgetPassword)} ?
                            </div>
                            <Button
                                loading={loadingVerifyCredential || loading || loadingApp}
                                className={styles.btn}
                                buttonType="submit"
                            >
                                {translate.formatMessage(commonMessage.login)}
                            </Button>
                            <div className={styles.footer} onClick={handleRegisterPage}>
                                <div className={styles.question}>{translate.formatMessage(message.register)}</div>
                                <div className={styles.register}>{translate.formatMessage(commonMessage.register)}</div>
                            </div>
                        </Form>
                    </div>
                    <div className={styles.footerCopyRight}>© 2025 HQTech</div>
                </div>
            ) : (
                <div className={styles.confirmOTP}>
                    <h3 className={styles.titleOTP}>{translate.formatMessage(message.confirmOTP)}</h3>
                    {imgUrl != null ? (
                        <div className={styles.qrUrl}>
                            <span className={styles.note}>{translate.formatMessage(message.setupAccount)}</span>
                            <img src={imgUrl} style={{ width: 240, height: 240 }} />
                        </div>
                    ) : (
                        <div>
                            <span className={styles.note}>{translate.formatMessage(message.enterOTP)}</span>
                        </div>
                    )}
                    <Form onFinish={handleSubmit}>
                        <div className={styles.otpContainer}>
                            <OtpInput
                                value={otp}
                                onChange={setOtpLocal}
                                numInputs={6}
                                inputType="number"
                                inputStyle={styles.otpInput}
                                renderInput={(props) => <input {...props} />}
                            />
                        </div>
                        <Flex gap={15}>
                            <Button
                                loaderProps={loadingVerifyCredential}
                                loading={loading || loadingVerifyCredential || loadingApp}
                                className={styles.btn}
                                buttonType="submit"
                            >
                                {translate.formatMessage(message.goOn)}
                            </Button>
                        </Flex>
                    </Form>
                </div>
            )}
        </div>
    );
};

export default LoginMobileComponent;
