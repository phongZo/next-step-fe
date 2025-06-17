import React from 'react';
import { enableMobile } from '@constants';
import useDevices from '@hooks/useDevices';
import DefaultLayout from '@modules/layout/common/DefaultLayout';

import PageNotFound from '../page/PageNotFound';

const RenderContext = ({ layout, components, layoutProps, ...props }) => {
    const { isMobile } = useDevices();
    const ComponentLayout = layout?.defaultTheme || DefaultLayout;
    const ComponentRender =
        (isMobile && enableMobile ? components?.mobile?.defaultTheme : components?.desktop?.defaultTheme) ||
        PageNotFound;
    return (
        <ComponentLayout layoutProps={layoutProps}>
            <ComponentRender {...props} />
        </ComponentLayout>
    );
};

export default RenderContext;
