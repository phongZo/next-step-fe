import React, { useState } from 'react';
import { defineMessages } from 'react-intl';
import { generatePath,useNavigate, useParams } from 'react-router-dom';
import RenderContext from '@components/common/elements/RenderContext';
import apiConfig from '@constants/apiConfig';
import { errorCodes } from '@constants/ErrorCode';
import useDevices from '@hooks/useDevices';
import useFetch from '@hooks/useFetch';
import useNotification from '@hooks/useNotification';
import useTranslate from '@hooks/useTranslate';
import RegisterDesktop from '@modules/layout/desktop/register';
import RegisterMobile from '@modules/layout/mobile/register';
import routes from '@routes';
import { showErrorMessage } from '@services/notifyService';
import { useForm } from 'rc-field-form';
import { toast } from 'sonner';

const messages = defineMessages({
    registrationSuccess: 'Account registration successfully',
    registrationFail : 'Error register',
});
const RegisterContainer = ({ title }) => {
    const { isMobile } = useDevices();
    const [ form ] = useForm();

    const translate = useTranslate();
    const navigate = useNavigate();
    const params = useParams();
    const notification = useNotification();
    const { execute: executeRegister, loading: loadingRegister } = useFetch({
        ...apiConfig.user.register,
    });

    const onFinish = (values) => {
        const loginData = {
            ...values,
        };
        executeRegister({
            data: loginData,
            onCompleted: (res) => {
                navigate(
                    generatePath(`${routes.loginPage.path}`, {
                        restaurantId: params.restaurantId,
                    }),
                );
                toast.success(translate.formatMessage(messages.registrationSuccess));
            },
            onError: (err) => {
                const errorCode = err?.response?.data?.code;

                const errorMessage = errorCodes[errorCode]?.message;
                if (errorMessage) {
                    showErrorMessage(translate.formatMessage(errorMessage), translate);
                } else {
                    showErrorMessage(translate.formatMessage(messages.registrationFail));
                }
            },
        });
    };

    const layout = isMobile
        ? {
            defaultTheme: (props) => <RegisterMobile form={form} onFinish={onFinish} loading={loadingRegister} />,
        }
        : {
            defaultTheme: (props) => <RegisterDesktop form={form} onFinish={onFinish} loading={loadingRegister}/>,
        };

    return (
        <RenderContext
            components={{
                desktop: {
                    defaultTheme: RegisterDesktop,
                },
                mobile: {
                    defaultTheme: RegisterMobile,
                },
            }}
            layout={layout}
        />
    );
};

export default RegisterContainer;
