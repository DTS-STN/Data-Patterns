import React from 'react';
import Alert from '../atoms/Alert';
import MDContent from "./MDContent";
import styles from '../../styles/PatternLayout.module.css';

export default function Pattern(props) {

    return (
        <MDContent markdown={props.pattern.markdown} pattern={props.pattern} t={props.t}>
            <Alert>
                <p>{props.t["This pattern is currently"]} <strong>{props.pattern.data.status}</strong></p>
            </Alert>
            <img className={styles.featuredImage} src={props.pattern.data["feature-img-path"]} alt={props.pattern.data["feature-img-alt"]}/>
            <p><strong>{props.pattern.data["short-description"]}</strong></p>
        </MDContent>
    );
}