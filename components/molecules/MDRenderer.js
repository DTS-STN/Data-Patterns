import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import styles from "../../styles/MDRenderer.module.css";

export default function MarkdownLayout(props) {
    return (
        // this will get expanded on when styling for customm renders are included
        <ReactMarkdown className={styles.markdown}>
            {props.markdown}
        </ReactMarkdown>
    );
}
