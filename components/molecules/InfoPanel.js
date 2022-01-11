import ReactMarkdown from 'react-markdown';
import styles from '../../styles/InfoPanel.module.css';

export default function InfoPanel(props) {

    return (
        <div className={styles.panel}>
            <h2>{props.content.data.title}</h2>
            <div className={styles.body}>
                <ReactMarkdown children={props.content.markdown}/>
            </div>
        </div>
    )
}