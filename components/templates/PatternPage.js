import React from 'react';
import Head from 'next/head';
import ContentContainer from '../organisms/ContentContainer';
import Alert from '../atoms/Alert';
import MarkdownRenderer from "../organisms/MarkdownRenderer";
import styles from '../../styles/PatternPage.module.css';

export default function PatternPage(props) {

    return (
        <React.Fragment>
            <Head>
                <title>{props.pattern.data.name}</title>
                <meta name="description" content={props.pattern.data["short-description"]} />
            </Head>
            <ContentContainer>
                <h1 className={styles.title}>{props.pattern.data.name}</h1>
                <Alert>
                    <p>{props.t["This pattern is currently"]} <strong>{props.pattern.data.status}</strong></p>
                </Alert>
                <img className={styles.featuredImage} src={props.pattern.data["feature-img-path"]} alt={props.pattern.data["feature-img-alt"]}/>
                <p><strong>{props.pattern.data["short-description"]}</strong></p>   
                <MarkdownRenderer markdown={props.pattern.markdown}/>
                <div>{props.t["Date Modified"]}: {props.pattern.data["date-modified"]}</div>
            </ContentContainer>
        </React.Fragment>
    )
}