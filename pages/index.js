import fs from "fs";
import matter from "gray-matter";
import dictionary from '../content/en/dictionary.json';
import Home from '../components/templates/Home';

export default function Index(props) {
    return (
        <Home/>
    )
}

export async function getStaticProps() {
    const markdownWithMetadata = fs.readFileSync("content/en/infoPanel.md").toString();
    const parsedMarkdown = matter(markdownWithMetadata);

    return {
        props: {
            infoPanel: {
                markdown: parsedMarkdown.content,
                data: parsedMarkdown.data
            }
        }
    };
}
