import InfoPanel from '../molecules/InfoPanel';
import GCFooter from '../molecules/GCFooter';
import styles from '../../styles/Footer.module.css';

export default function Footer(props) {

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                {props.infoPanel &&
                    <InfoPanel content={props.infoPanel}/>
                }
                <p>{props.t.footerText} <a href={props.t.footerLink}>{props.t.footerLinkLabel}</a></p>
            </div>
            <GCFooter t={props.t}/>
        </div>
    )
}