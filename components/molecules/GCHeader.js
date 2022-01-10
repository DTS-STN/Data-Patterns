import React from 'react';
import styles from '../../styles/GCHeader.module.css';

export default function GCHeader(props) {

    return (
        <React.Fragment>
            <div className={styles.content}>
                <a>{props.t.getOppositeLang}</a>
                <img className={styles.fip} src='https://www.canada.ca/etc/designs/canada/cdts/gcweb/v4_0_43/wet-boew/assets/sig-blk-en.svg' alt={props.t["Government of Canada"]}/>
            </div>
            <div className={styles.divider}/>
            <div className={styles.breadCrumbs}>
                <a>Canada.ca</a>
                &nbsp;&nbsp;&gt;&nbsp;&nbsp;
                <a>{props.t.siteTitle}</a>
            </div>
        </React.Fragment>
    )
}