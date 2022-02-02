import IcomoonReact from "icomoon-react";
import icons from "../icons/selection.json";
import styles from '../../styles/Alert.module.css';

export default function Alert(props) {

    return (
        <div className={styles.container}>
            <div className={styles.infoBar}>
                <IcomoonReact iconSet={icons} size={22} icon="info" />
            </div>
            {props.children}
        </div>
    )
}