import React from 'react';
import Link from 'next/link';
import ContentContainer from '../organisms/ContentContainer';
import styles from '../../styles/GCHeader.module.css';

export default function GCHeader(props) {

    return (
        <React.Fragment>
            <ContentContainer>
                <div className={styles.content}>
                    <Link href={props.langLink}>
                        <a>{props.t.getOppositeLang}</a>
                    </Link>
                    <img className={styles.fip} src='https://www.canada.ca/etc/designs/canada/cdts/gcweb/v4_0_43/wet-boew/assets/sig-blk-en.svg' alt={props.t["Government of Canada"]}/>
                </div>
            </ContentContainer>
            <div className={styles.divider}/>
            <ContentContainer>
                <div className={styles.breadCrumbs}>
                    <a href={props.t.canadaLink}>Canada.ca</a>
                    &nbsp;&nbsp;&gt;&nbsp;&nbsp;
                    <a href={props.t.dataPatternsLink}>{props.t.siteTitle}</a>
                </div>
            </ContentContainer>
        </React.Fragment>
    )
}