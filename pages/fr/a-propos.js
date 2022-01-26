import fs from "fs";
import matter from "gray-matter";
import PatternPage from "../../components/templates/PatternPage";
import dictionary from '../../content/fr/dictionary.json';

export default function About(props) {

    return (
        <PatternPage t={dictionary} pattern={props.pattern}/>
    )
}

export async function getStaticProps() {
    const markdownWithMetadata = fs.readFileSync("content/fr/about.md").toString();
    const parsedMarkdown = matter(markdownWithMetadata);

    const infoPanelMarkdownMeta = fs.readFileSync("content/fr/infoPanel.md").toString();
    const parsedInfoPanelMarkdown = matter(infoPanelMarkdownMeta);

    return {
        props: {
            t: dictionary,
            langLink: parsedMarkdown.data["lang-link"],
            pattern: {
                markdown: parsedMarkdown.content,
                data: parsedMarkdown.data
            },
            infoPanel: {
                markdown: parsedInfoPanelMarkdown.content,
                data: parsedInfoPanelMarkdown.data
            }
        }
    };
  }