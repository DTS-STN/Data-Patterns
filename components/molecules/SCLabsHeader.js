import styles from '../../styles/SCLabsHeader.module.css';

export default function SCLabsHeader(props) {

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.backContainer}>
                    <div className={styles.betaLabel}>{props.t.betaNoticeLabel}</div>
                    <a href={props.t.backToProjectsLink}>{props.t.backToProjects}</a>
                </div>
                <p>{props.t.SCLabsBetaNotice}</p>
            </div>
        </div>
    )
}