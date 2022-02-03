import React from 'react';
import Alert from '../atoms/Alert';
import MarkdownLayout from "./MarkdownLayout";
import styles from '../../styles/PatternLayout.module.css';

export default function PatternLayout(props) {

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