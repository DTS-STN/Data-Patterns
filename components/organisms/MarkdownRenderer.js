import ReactMarkdown from 'react-markdown';
import styles from '../../styles/MarkdownRenderer.module.css';

export default function MarkdownRenderer(props) {
    return (
        <ReactMarkdown className={styles.markdown} children={props.markdown}/>       
    )
}
