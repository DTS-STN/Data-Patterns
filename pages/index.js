import fs from "fs";
import matter from "gray-matter";
import dictionary from '../content/en/dictionary.json';
import Home from '../components/templates/Home';

export default function Index(props) {
    return (
        <Home content={props.home}/>
    )
}

export async function getStaticProps() {
    const markdownWithMetadata = fs.readFileSync("content/en/infoPanel.md").toString();
    const parsedMarkdown = matter(markdownWithMetadata);

    const homeMarkdownMeta = fs.readFileSync("content/en/home.md").toString();
    const parsedHomeMarkdown = matter(homeMarkdownMeta);

    return {
        props: {
            t: dictionary,
            home: {
                markdown: parsedHomeMarkdown.content,
                data: parsedHomeMarkdown.data
            },
            infoPanel: {
                markdown: parsedMarkdown.content,
                data: parsedMarkdown.data
            }
        }
    };
}
