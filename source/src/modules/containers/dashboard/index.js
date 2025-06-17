import React from 'react';
import RenderContext from '@components/common/elements/RenderContext';
import useDevices from '@hooks/useDevices';
import useTranslate from '@hooks/useTranslate';
import DashboardPageDesktop from '@modules/layout/desktop/landing';
import DashboardPageMobile from '@modules/layout/mobile/landing';

const DashBoardPageContainer = ({ title }) => {

   
    return (
        <RenderContext
            components={{
                desktop: {
                    defaultTheme: DashboardPageDesktop,
                },
                mobile: {
                    defaultTheme: DashboardPageMobile,
                },
            }}
            
        />
    );
};

export default DashBoardPageContainer;
