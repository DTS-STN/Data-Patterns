import ContentContainer from '../organisms/ContentContainer';
import styles from '../../styles/GCFooter.module.css';

export default function GCFooter(props) {

    return (
        <div className={styles.container}>
            <ContentContainer>
            <div className={styles.content}>
                <div className={styles.linksContainer}>
                    <a href={props.t.contactInfoLink}>{props.t["Contact information"]}</a>
                    &nbsp;&nbsp;&#183;&nbsp;&nbsp;
                    <a href={props.t.termsAndConditionsLink}>{props.t["Terms and conditions"]}</a>
                    &nbsp;&nbsp;&#183;&nbsp;&nbsp;
                    <a href={props.t.privacyLink}>{props.t.Privacy}</a>
                </div>
                <ul className={styles.mobileLinksContainer}>
                    <li>
                        <a href={props.t.contactInfoLink}>{props.t["Contact information"]}</a>
                    </li>
                    <li>
                    <a href={props.t.termsAndConditionsLink}>{props.t["Terms and conditions"]}</a>
                    </li>
                    <li>
                    <a href={props.t.privacyLink}>{props.t.Privacy}</a>
                    </li>
                </ul>
                <img className={styles.fip} src="https://www.canada.ca/etc/designs/canada/cdts/gcweb/v4_0_43/wet-boew/assets/wmms-blk.svg"/>  
            </div>
            </ContentContainer>
        </div>
    )
}