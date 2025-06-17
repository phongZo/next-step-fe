import React, { useEffect, useState } from 'react';
import { defineMessages } from 'react-intl';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Flex from '@components/common/elements/Flex';
import { Form } from '@components/common/elements/Form';
import { InputField } from '@components/common/elements/Input';
import { FEMALE, MALE } from '@constants';
import apiConfig from '@constants/apiConfig';
import { commonMessage } from '@constants/intl';
import useAuth from '@hooks/useAuth';
import useBasicForm from '@hooks/useBasicForm';
import useFetch from '@hooks/useFetch';
import useTranslate from '@hooks/useTranslate';
import { toast } from 'sonner';

import { ReactComponent as IconBack } from '../../../../assets/icons/Vector.svg';

import styles from './index.module.scss';

const messages = defineMessages({
    profileUser: 'User Information',
    avatarUser: 'Profile Picture',
    fullName: 'Full Name',
    email: 'Email',
    enterFullName: 'Enter full name',
    enterEmail: 'Enter your email',
    birthday: 'Date of Birth',
    enterBirthday: 'Enter date of birth',
    address: 'Address',
    enterAddress: 'Enter address',
    phone: 'Phone Number',
    enterPhone: 'Enter phone number',
    profileIdentify: 'Identification Information',
    idNumber: 'ID Card',
    enterIdNumber: 'Enter ID card number',
    dateIssue: 'Date of Issue',
    enterDateIssue: 'Enter date of issue',
    placeIssue: 'Place of Issue',
    enterPlaceIssue: 'Enter place of issue',
    gender: 'Gender',
    enterGender: 'Enter gender',
    firstName: 'First Name',
    lastName: 'Last Name',
    enterFirstName: 'Enter first name',
    enterLastName: 'Enter last name',
    profile: 'Profile',
});

const ProfileMobileComponent = (props) => {
    const { profile: user } = useAuth();
    const navigate = useNavigate();
    const translate = useTranslate();
    const { formId, actions, dataDetail, onSubmit, setIsChangedFormValues, groups, branchs, isEditing } = props;

    const { execute: executeProfileUser, data: userData } = useFetch({
        ...apiConfig.user.getProfile,
    });

    const { form, mixinFuncs, onValuesChange } = useBasicForm({
        onSubmit,
        setIsChangedFormValues,
    });

    const [ seller, setSeller ] = useState(null);
    const [ imageUrl, setImageUrl ] = useState(null);
    const [ headerHeight, setHeaderHeight ] = useState(50); // Chiều cao mặc định của header

    const { execute: executeUpFile } = useFetch(apiConfig.file.upload);

    const uploadFile = (file, onSuccess, onError) => {
        executeUpFile({
            data: {
                type: 'AVATAR',
                file: file,
            },
            onCompleted: (response) => {
                if (response.result === true) {
                    onSuccess();
                    setImageUrl(response.data.filePath);
                    setIsChangedFormValues(true);
                }
            },
            onError: (error) => {
                if (error.code == 'ERROR-FILE-FORMAT-INVALID') {
                    // showErrorMessage('File upload không hợp lệ !');
                }
            },
        });
    };

    useEffect(() => {
        if (imageUrl) {
            form.setFieldValue('avatarPath', imageUrl);
        }
    }, [ imageUrl ]);

    useEffect(() => {
        executeProfileUser();
    }, []);

    const getGenderDisplay = (genderValue) => {
        return genderValue === MALE ? 'Nam' : genderValue === FEMALE ? 'Nữ' : '';
    };

    const getGenderValue = (genderDisplay) => {
        return genderDisplay === 'Nam' ? MALE : genderDisplay === 'Nữ' ? FEMALE : null;
    };

    useEffect(() => {
        if (user) {
            form.setFieldsValue({
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.account.email,
                fullName: user.account.fullName,
                gender: getGenderDisplay(user.gender),
            });
            setImageUrl(user.avatarPath);
        }
    }, [ user, form ]);

    const dispatch = useDispatch();
    const { execute: executeUpdateProfile } = useFetch(apiConfig.user.updateProfile);
    const onFinish = () => {
        const values = form.getFieldsValue();
        const genderValue = getGenderValue(values.gender);
        executeUpdateProfile({
            data: {
                ...values,
                gender: genderValue,
            },
            onCompleted: (res) => {
                toast.success(translate.formatMessage(commonMessage.success));
            },
            onError: (err) => {
                toast.error(translate.formatMessage(commonMessage.fail));
            },
        });
    };

    useEffect(() => {
        const handleViewportChange = () => {
            const header = document.querySelector(`.${styles.header}`);
            const wrapper = document.querySelector(`.${styles.wrapper}`);

            if (!header || !wrapper) return;

            const headerRect = header.getBoundingClientRect();
            setHeaderHeight(headerRect.height);

            if (window.visualViewport) {
                const viewportHeight = window.visualViewport.height;
                const viewportOffset = window.visualViewport.offsetTop;

                header.style.position = 'fixed';
                header.style.top = `${viewportOffset}px`;

                wrapper.style.paddingTop = `${headerRect.height + 10}px`;

                document.body.style.height = `${viewportHeight}px`;
                document.body.style.overflow = 'auto';
            } else {
                const viewportHeight = window.innerHeight;
                header.style.position = 'fixed';
                header.style.top = '0';
                wrapper.style.paddingTop = `${headerRect.height + 10}px`;
                document.body.style.height = `${viewportHeight}px`;
            }
        };

        if (window.visualViewport) {
            window.visualViewport.addEventListener('resize', handleViewportChange);
            window.visualViewport.addEventListener('scroll', handleViewportChange);
        } else {
            window.addEventListener('resize', handleViewportChange);
        }

        handleViewportChange();

        return () => {
            if (window.visualViewport) {
                window.visualViewport.removeEventListener('resize', handleViewportChange);
                window.visualViewport.removeEventListener('scroll', handleViewportChange);
            } else {
                window.removeEventListener('resize', handleViewportChange);
            }
            document.body.style.height = '';
            document.body.style.overflow = '';
        };
    }, []);

    return (
        <>
            <div className={styles.wrapper}>
                <Form form={form}>
                    <Flex direction="column" rowGap="24px">
                        <InputField
                            name="firstName"
                            label={translate.formatMessage(messages.firstName)}
                            placeholder={translate.formatMessage(messages.enterFirstName)}
                        />
                        <InputField
                            name="lastName"
                            label={translate.formatMessage(messages.lastName)}
                            placeholder={translate.formatMessage(messages.enterLastName)}
                        />
                        <InputField
                            name="email"
                            label={translate.formatMessage(messages.email)}
                            placeholder={translate.formatMessage(messages.enterEmail)}
                        />
                        <InputField
                            name="gender"
                            label={translate.formatMessage(messages.gender)}
                            placeholder={translate.formatMessage(messages.enterGender)}
                        />
                    </Flex>

                    <div onClick={() => onFinish()} className={styles.updateProfile}>
                        {translate.formatMessage(commonMessage.update)}
                    </div>
                </Form>
            </div>
        </>
    );
};

export default ProfileMobileComponent;
