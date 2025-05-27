import React from 'react';
import { Form } from '@components/common/elements/Form';
import RenderContext from '@components/common/elements/RenderContext';
import PageNotFound from '@components/common/page/PageNotFound';
import apiConfig from '@constants/apiConfig';
import { commonMessage } from '@constants/intl';
import useAuth from '@hooks/useAuth';
import useDevices from '@hooks/useDevices';
import useFetch from '@hooks/useFetch';
import useFetchAction from '@hooks/useFetchAction';
import useTranslate from '@hooks/useTranslate';
import ProfileComponent from '@modules/layout/desktop/profile';
import ProfileMobileComponent from '@modules/layout/mobile/profile';
import { accountActions } from '@store/actions';
import { toast } from 'sonner';
const ProfilePageContainer = ({ title }) => {
    const { execute: executeGetProfile } = useFetchAction(accountActions.getProfile, {
        loading: useFetchAction.LOADING_TYPE.APP,
    });
    const { isMobile } = useDevices();
    const { execute, loading } = useFetch(apiConfig.account.updateProfile, {});

    return (
        <RenderContext
            components={{
                desktop: {
                    defaultTheme: (props) => (
                        <ProfileComponent
                            execute={execute}
                            loading={loading}
                            executeGetProfile={executeGetProfile}
                            layoutProps={{ title: title }}
                        />
                    ),
                },
                mobile: {
                    defaultTheme: (props) => (
                        <ProfileMobileComponent
                            execute={execute}
                            loading={loading}
                            executeGetProfile={executeGetProfile}
                            layoutProps={{ title: title }}
                        />
                    ),
                },
            }}
        />
    );
};

export default ProfilePageContainer;
