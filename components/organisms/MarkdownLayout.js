import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import ContentContainer from '../organisms/ContentContainer';
import styles from '../../styles/MarkdownLayout.module.css';

export default function MarkdownLayout(props) {
    return (
        <>
            <Head>
                <title>{props.pattern.data.name}</title>
                <meta name="description" content={props.pattern.data["short-description"]} />
            </Head>
            <ContentContainer>
                <h1 className={styles.title}>{props.pattern.data.name}</h1>
                { props.children }
                <ReactMarkdown className={styles.markdown} children={props.pattern.markdown}/>
                <div>{props.t["Date Modified"]}: {props.pattern.data["date-modified"]}</div>
            </ContentContainer>
        </>     
    )
}
