import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { fetchDrupalData } from '../../utils/fetch-functions';
import ContentWrapper from '../content-wrapper';
import TitleBreadcrumb from './title-breadcrumb';


export default function Page({ slug, pageData }) {
    const [data, setData] = useState(pageData);
    const [dataFetched, setDataFetched] = useState(false);
    const [pageExists, setPageExists] = useState(true);

    useEffect(() => {
        if (dataFetched === false) {
            fetchDrupalData('page', { ['slug']: slug }).then(response => {
                if (response.length > 0) {
                    setData(response[0]);
                    setPageExists(true);
                }
                else {
                    setPageExists(false);
                }
                setDataFetched(true);
            });
        } else {
            setData(pageData);
        }
    }, [dataFetched, slug, pageData]);

    return dataFetched === true ? (
        <section>
            <TitleBreadcrumb
                title={data ? data.title : ''}
                breadcrumbs={[['Home', '/']]}
            />
            <ContentWrapper width="wide">
                {data && pageExists ? <div className="content" dangerouslySetInnerHTML={{ __html: data.content }} /> : <div className="content">Page not found.</div>}
            </ContentWrapper>
        </section>
    ) : ('');
}
