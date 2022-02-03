import Head from 'next/head';
import MDRenderer from '../molecules/MDRenderer';
import ContentContainer from '../organisms/ContentContainer';

export default function MarkdownLayout(props) {
    return (
        <>
            <Head>
                <title>{props.pattern.data.name}</title>
                <meta name="description" content={props.pattern.data["short-description"]} />
            </Head>
            <ContentContainer>
                <h1>{props.pattern.data.name}</h1>
                { props.children }
                <MDRenderer markdown={props.pattern.markdown} />
                <div>{props.t["Date Modified"]}: {props.pattern.data["date-modified"]}</div>
            </ContentContainer>
        </>     
    )
}
