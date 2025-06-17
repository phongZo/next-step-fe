import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import apiConfig from '@constants/apiConfig';
import useFetch from '@hooks/useFetch';

import DashboardPageMobile from '../dashboard';

const InfiniteScrollList = () => {
    const [ data, setData ] = useState([]);
    const [ hasMore, setHasMore ] = useState(true);

    const {
        execute: executeTransactionLog,
        data: transactionLogData,
        loading: loadingSeller,
    } = useFetch(apiConfig.transaction.myOrder);

    const fetchMoreData = () => {
        if (transactionLogData && transactionLogData.length > 0) {
            setData((prevData) => prevData.concat(transactionLogData));
        } else {
            setHasMore(false); 
        }
    };

    const loader = <h4>Loading...</h4>;

    const renderItem = (item, index) => (
        <div style={{ height: 30, border: '1px solid green', margin: 6, padding: 8 }} key={index}>
            div - #{index}
        </div>
    );

    useEffect(() => {
        if (transactionLogData && transactionLogData.length > 0) {
            fetchMoreData(); 
        }
    }, [ transactionLogData ]);

    return (
        <InfiniteScroll dataLength={data.length} next={fetchMoreData} hasMore={hasMore} loader={loader}>
            {data.map((item, index) => renderItem(item, index))}
            <DashboardPageMobile  />
        </InfiniteScroll>
    );
};

export default InfiniteScrollList;
