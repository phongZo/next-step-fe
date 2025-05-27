import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useForm } from '@components/common/elements/Form';
import { appAccount } from '@constants';
import apiConfig from '@constants/apiConfig';
import useFetch from '@hooks/useFetch';
import useFetchAction from '@hooks/useFetchAction';
import { accountActions } from '@store/actions';
import { Buffer } from 'buffer';

import styles from './AppHeader.module.scss';
window.Buffer = window.Buffer || Buffer;
const AppHeader = ({ profile, collapsed, onCollapse }) => {

    const base64Credentials = Buffer.from(`${appAccount.APP_USERNAME}:${appAccount.APP_PASSWORD}`).toString('base64');
    const { execute, loading } = useFetch({
        ...apiConfig.account.loginBasic,
        authorization: `Basic ${base64Credentials}`,
    });

    const { execute: executeGetProfile } = useFetchAction(accountActions.getProfile, {
        loading: useFetchAction.LOADING_TYPE.APP,
    });

    return (
        <div className={styles.appHeader} id="">
            
        </div>
    );
};

export default AppHeader;
