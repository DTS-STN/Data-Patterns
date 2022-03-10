import Alert from "../atoms/Alert";
import styles from '../../styles/PatternInfoPanel.module.css';

export default function PatternInfoPanel(props) {
    return (
        <>
            <Alert>
                <p>{props.t["This pattern is currently"]} <strong>{props.pattern.data.status}</strong></p>
            </Alert>
            <img className={styles.featuredImage} src={props.pattern.data["feature-img-path"]} alt={props.pattern.data["feature-img-alt"]}/>
            <p><strong>{props.pattern.data["short-description"]}</strong></p>
        </>
    );
}
