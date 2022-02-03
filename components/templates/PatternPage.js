import React from 'react';
import ContentContainer from '../organisms/ContentContainer';
import Alert from '../atoms/Alert';
import MarkdownLayout from "../organisms/MarkdownLayout";
import styles from '../../styles/PatternPage.module.css';

export default function PatternPage(props) {

    return (
        <MarkdownLayout markdown={props.pattern.markdown} pattern={props.pattern} t={props.t}>
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
        </MarkdownLayout>
    );
}