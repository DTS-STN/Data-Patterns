import styles from '../../styles/ContentContainer.module.css';

export default function ContentContainer(props) {

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                {props.children}
            </div>
        </div>
    )
}