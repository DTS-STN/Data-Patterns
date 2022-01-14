import InfoPanel from '../molecules/InfoPanel';
import GCFooter from '../molecules/GCFooter';
import ContentContainer from './ContentContainer';
import styles from '../../styles/Footer.module.css';

export default function Footer(props) {

    return (
        <div className={styles.container}>
            <ContentContainer>
                {props.infoPanel &&
                    <InfoPanel content={props.infoPanel}/>
                }
                <p>{props.t.footerText} <a href={props.t.footerLink}>{props.t.footerLinkLabel}</a></p>
            </ContentContainer>
            <GCFooter t={props.t}/>
        </div>
    )
}