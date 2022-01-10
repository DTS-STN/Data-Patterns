import React from 'react';
import {GCFooter} from 'gc-tortilla';
import SCLabsHeader from '../components/molecules/SCLabsHeader';
import GCHeader from '../components/molecules/GCHeader';
import InfoPanel from '../components/molecules/infoPanel';
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {

    return (
        <React.Fragment>
            <SCLabsHeader t={pageProps.t}/>
            <GCHeader t={pageProps.t}/>
            <Component {...pageProps} />
            {pageProps.infoPanel &&
                <InfoPanel content={pageProps.infoPanel}/>
            }
            <GCFooter/>
        </React.Fragment>
    )
};