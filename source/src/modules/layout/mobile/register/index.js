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
    title: 'Today is a new day. It is your day.',
    titleLogin: 'Log in to start experiencing our services.',
    register: `Don't have an account?`,
    confirmOTP: 'OTP Verification',
    setupAccount: 'Set up a new account in your authentication app and scan the following QR code',
    enterOTP: 'Enter OTP',
    continue: 'Continue',
    createAccount: 'Create Account',
    enterFirstName: 'Enter first name',
    enterLastName: 'Enter last name',
    requiredGender: 'Please select gender',
    policy: 'By signing up, I agree to our general terms and conditions.',
    firstName: 'First Name',
    lastName: 'Last Name',
    description:
        'Click here if you want to receive updates from NailHPOS via email about current offers and beauty news. You can withdraw your consent at any time with future effect. To do so, click the link at the bottom of the respective email. More information can be found in',
    policyLink: 'privacy policy',
    aboutUs: ' of ours.',
    goOn: 'Continue',
    requiredPhone: 'Please enter your phone',
    errorPhone: 'Phone must be at 10 characters long!',
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
                <div className={styles.createAccount}>{translate.formatMessage(message.createAccount)}</div>
                <div></div>
            </div>
            {!isOtp ? (
                <div>
                    <div className={styles.loginForm}>
                        <div className={styles.headerForm}>
                            <div className={styles.descriptionHeader}>{translate.formatMessage(message.title)}</div>
                            <div className={styles.description}>
                                <div className={styles.shortDescription}>
                                    {translate.formatMessage(message.titleLogin)}
                                </div>
                            </div>
                        </div>
                        <Form className={styles.form} form={form} onFinish={onFinish}>
                            <Flex direction="column" rowGap="15px">
                                <InputField
                                    className={styles.input}
                                    name="firstName"
                                    required
                                    label={translate.formatMessage(message.firstName)}
                                    placeholder={translate.formatMessage(message.enterFirstName)}
                                />
                                <InputField
                                    className={styles.input}
                                    name="lastName"
                                    required
                                    label={translate.formatMessage(message.lastName)}
                                    placeholder={translate.formatMessage(message.enterLastName)}
                                />
                                <InputField
                                    className={styles.input}
                                    name="phone"
                                    required
                                    label={translate.formatMessage(commonMessage.phone)}
                                    placeholder={translate.formatMessage(commonMessage.placeholderPhone)}
                                    rules={[
                                        { required: true, message: translate.formatMessage(message.requiredPhone) },
                                        {
                                            min: 10,
                                            message: translate.formatMessage(message.errorPhone),
                                        },
                                    ]}
                                />
                                <InputField
                                    className={styles.input}
                                    name="email"
                                    required
                                    label={translate.formatMessage(commonMessage.email)}
                                    placeholder={translate.formatMessage(commonMessage.email)}
                                />
                                <PasswordField
                                    className={styles.input}
                                    name="password"
                                    label={translate.formatMessage(commonMessage.password)}
                                    required
                                    placeholder={translate.formatMessage(commonMessage.placeholderPassword)}
                                />
                            </Flex>
                            <div className={styles.sex}>
                                <div>
                                    <span className={styles.label}>
                                        {translate.formatMessage(commonMessage.gender)}
                                    </span>
                                    <Form.Item
                                        name="gender"
                                        className={styles.radioText}
                                        label={translate.formatMessage(commonMessage.gender)}
                                        initialValue="1"
                                        rules={[
                                            {
                                                required: true,
                                                message: translate.formatMessage(message.requiredGender),
                                            },
                                        ]}
                                    >
                                        <div className={styles.sexInput}>
                                            <div className={styles.radio}>
                                                <input
                                                    type="radio"
                                                    id="female"
                                                    name="gender"
                                                    value="1"
                                                    defaultChecked
                                                    className={styles.radioInput}
                                                />
                                                <label className={styles.customRadioLabel} htmlFor="female">
                                                    {translate.formatMessage(commonMessage.female)}
                                                </label>
                                            </div>
                                            <div className={styles.radio}>
                                                <input
                                                    type="radio"
                                                    id="male"
                                                    name="gender"
                                                    value="0"
                                                    className={styles.radioInput}
                                                />
                                                <label className={styles.customRadioLabel} htmlFor="male">
                                                    {translate.formatMessage(commonMessage.male)}
                                                </label>
                                            </div>
                                        </div>
                                    </Form.Item>
                                </div>
                            </div>
                            <div className={styles.description}>
                                <input type="checkbox" className={styles.checkbox} id="customCheckbox" />
                                <label htmlFor="customCheckbox" className={styles.customCheckbox}></label>
                                <div className={styles.shortDescription}>
                                    {translate.formatMessage(message.description)}{' '}
                                    <span className={styles.security}>
                                        {translate.formatMessage(message.policyLink)}
                                    </span>{' '}
                                    {translate.formatMessage(message.aboutUs)}{' '}
                                </div>
                            </div>
                            <div className={styles.footer}>
                                <span className={styles.answer}>{translate.formatMessage(message.policy)}</span>
                                <Button loading={loading} className={styles.btn} buttonType="submit">
                                    {translate.formatMessage(commonMessage.register)}
                                </Button>
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
