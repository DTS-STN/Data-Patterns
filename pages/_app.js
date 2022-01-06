import React from 'react';
import {GCFooter, GCHeader} from 'gc-tortilla';
import InfoPanel from '../components/molecules/infoPanel';
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {

    return (
        <React.Fragment>
            <GCHeader/>
            <Component {...pageProps} />
            <InfoPanel content={pageProps.infoPanel}/>
            <GCFooter/>
        </React.Fragment>
    )
};