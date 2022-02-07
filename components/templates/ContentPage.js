import React from 'react';
import Head from 'next/head';
import ContentContainer from '../organisms/ContentContainer';
import MarkdownRenderer from "../organisms/MarkdownRenderer";
import styles from '../../styles/ContentPage.module.css';

export default function ContentPage(props) {

    return (
        <React.Fragment>
            <Head>
                <title>{props.content.data.name}</title>
                <meta name="description" content={props.content.data["short-description"]} />
            </Head>
            <ContentContainer>
                <h1 className={styles.title}>{props.content.data.name}</h1>
                <MarkdownRenderer markdown={props.content.markdown}/>
                <div>{props.t["Date Modified"]}: {props.content.data["date-modified"]}</div>
            </ContentContainer>
        </React.Fragment>
    )
}