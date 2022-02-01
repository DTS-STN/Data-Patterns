import Head from 'next/head';
import ContentContainer from '../organisms/ContentContainer';
import MarkdownRenderer from '../organisms/MarkdownRenderer';
import PatternCard from '../molecules/PatternCard';
import styles from '../../styles/Home.module.css';

export default function Home(props) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Data Patterns Library</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ContentContainer>
                <MarkdownRenderer markdown={props.content.markdown}/>
                <h2 className={styles.patternsTitle}>{props.t.Patterns}</h2>
                <div className={styles.cardContainer}>
                    {props.patterns.map(pattern => (
                        <PatternCard key={props.patterns.indexOf(pattern)} pattern={pattern}/>
                    ))}
                    {props.patterns.length % 3 == 2 &&
                        <div style={{width: "30%", visibility: "hidden"}}></div>
                    }
                </div>
            </ContentContainer>
        </div>
    )
}