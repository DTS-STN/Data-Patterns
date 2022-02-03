import React from 'react';
import Head from 'next/head';
import ContentContainer from '../organisms/ContentContainer';
import Alert from '../atoms/Alert';
import MarkdownLayout from "../organisms/MarkdownLayout";
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
                {props.pattern.data.hasOwnProperty("status") &&
                    <Alert>
                        <p>{props.t["This pattern is currently"]} <strong>{props.pattern.data.status}</strong></p>
                    </Alert>
                }
                {props.pattern.data.hasOwnProperty("feature-img-path") &&
                    <img className={styles.featuredImage} src={props.pattern.data["feature-img-path"]} alt={props.pattern.data["feature-img-alt"]}/>
                }
                {props.pattern.data.hasOwnProperty("short-description") &&
                    <p><strong>{props.pattern.data["short-description"]}</strong></p>   
                }
                <MarkdownLayout markdown={props.pattern.markdown}/>
                {props.pattern.data.hasOwnProperty("date-modified") &&
                    <div>{props.t["Date Modified"]}: {props.pattern.data["date-modified"]}</div>
                }
            </ContentContainer>
        </React.Fragment>
    )
}