import React from 'react';
import RenderContext from '@components/common/elements/RenderContext';
import LandingPageDesktop from '@modules/layout/desktop/landing';
import LandingPageMobile from '@modules/layout/mobile/landing';

const LandingPageContainer = ({ title }) => {
    return (
        <RenderContext
            components={{
                desktop: {
                    defaultTheme: LandingPageDesktop,
                },
                mobile: {
                    defaultTheme: LandingPageMobile,
                },
            }}
        />
    );
};

export default LandingPageContainer;
