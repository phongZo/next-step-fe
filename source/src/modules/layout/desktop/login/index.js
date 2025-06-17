import './index.scss';
import { Buffer } from 'buffer';
import { defineMessages } from 'react-intl';
import { FaUser } from 'react-icons/fa';
import { Form } from '@components/common/elements/Form';
import { InputField } from '@components/common/elements/Input';
import { PasswordField } from '@components/common/elements/PasswordInput';
import Flex from '@components/common/elements/Flex';
import React, { useState } from 'react';
import styles from './index.module.scss';
import useTranslate from '@hooks/useTranslate';
import Card from '@components/common/elements/Card/Card';
import { RiShieldKeyholeFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import Button from '@components/common/elements/Button';
import { FaFacebook, FaGoogle, FaLinkedin } from 'react-icons/fa6';
import Divider from '@components/common/elements/Divider';

window.Buffer = window.Buffer || Buffer;

const message = defineMessages({
    titleComeback: 'Welcome back',
    title: 'Today is a new day. It’s your day.',
    titleLogin: 'Log in to start experiencing our services.',
    register: 'Don’t have an account?',
    confirmOTP: 'OTP Verification',
    setupAccount: 'Set up a new account in your authenticator app and scan the QR code below.',
    enterOTP: 'Enter OTP code',
    continue: 'Continue',
});

function LoginPageDesktop({
    onFinish,
    onFinishOTP,
    handleForgotPasswordClick,
    handleRegisterPage,
    loading,
    loadingVerifyCredential,
    form,
    imgUrl,
    isOtp,
    loadingApp,
    restaurantData,
    loginSlidesShow,
}) {
    const [otp, setOtpLocal] = useState('');
    const translate = useTranslate();

    const handleSubmit = () => {
        onFinishOTP(otp);
    };

    return (
        <div className={styles.loginPage}>
            <div className="auth">
                <div className="auth-inner">
                    <div className="auth-form">
                        {/* Header title */}
                        <div className="header">
                            <h2 className="title">Chào mừng bạn đã quay trở lại</h2>
                            <div className="text-muted caption">
                                Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội sự nghiệp lý tưởng
                            </div>
                        </div>
                        {/* Login form */}
                        <Card className="login">
                            <Form>
                                <Flex direction="column" rowGap={'24px'}>
                                    <InputField
                                        name="email"
                                        label="Email"
                                        placeholder="Email"
                                        fieldProps={{
                                            addonBefore: <FaUser color="#00b14f" />,
                                        }}
                                    />
                                    <PasswordField
                                        name="password"
                                        type="password"
                                        label="Mật khẩu"
                                        placeholder="Mật khẩu"
                                        fieldProps={{
                                            addonBefore: <RiShieldKeyholeFill color="#00b14f" />,
                                        }}
                                    />
                                    <div className="forgot-password">
                                        <Link to="https://www.topcv.vn/forgot-password">Quên mật khẩu</Link>
                                    </div>
                                </Flex>
                                <Flex direction="column" style={{ marginTop: 24 }}>
                                    <Button buttonType="submit" className="btn-login">
                                        Đăng nhập
                                    </Button>
                                    <p className="or-login">Hoặc đăng nhập bằng</p>
                                </Flex>
                                <Flex style={{ columnGap: 8 }}>
                                    <Link className="login-width-google" to="#">
                                        <FaGoogle />
                                        <span>Google</span>
                                    </Link>
                                    <Link className="login-width-facebook" to="#">
                                        <FaFacebook />
                                        <span>Facebook</span>
                                    </Link>
                                    <Link className="login-width-linkedin" to="#">
                                        <FaLinkedin />
                                        <span>Linkedin</span>
                                    </Link>
                                </Flex>
                            </Form>
                            <div className="option-auth">
                                <div>
                                    <span>Bạn chưa có tài khoản?</span>
                                    &nbsp;
                                    <Link className="text-success" to="https://www.topcv.vn/sign-up">
                                        Đăng ký ngay
                                    </Link>
                                </div>
                            </div>
                            <div className="support">
                                <p className="support-text">Bạn gặp khó khăn khi tạo tài khoản?</p>
                                <p>
                                    Vui lòng gọi tới số &nbsp;
                                    <a href="tel:(024) 6680 5588" className="hotline">
                                        (024) 6680 5588
                                    </a>
                                    &nbsp; (giờ hành chính).
                                </p>
                            </div>
                        </Card>
                    </div>
                </div>
                <p className="auth-copy-right">
                    © {new Date().getFullYear()}. All Rights Reserved. TopCV Vietnam JSC.
                </p>
            </div>
            <div className="bg-right">
                <div className="bg-right-abs">
                    <a href="https://www.topcv.vn?ref=you">
                        <img width="160" src="https://static.topcv.vn/v4/image/auth/topcv_white.png" />
                    </a>
                    <h1 className="mt-4">
                        Tiếp lợi thế
                        <br />
                        Nối thành công
                    </h1>
                    <p>TopCV - Hệ sinh thái nhân sự tiên phong ứng dụng công nghệ tại Việt Nam</p>
                </div>
                <div className="bg-right-arrow"></div>
                <a className="bg-right-link" href="https://www.topcv.vn?ref=you"></a>
            </div>
        </div>
    );
}

export default LoginPageDesktop;
