import fs from "fs";
import matter from "gray-matter";
import MDContent from "../components/templates/MDContent";
import dictionary from '../content/en/dictionary.json';

export default function About(props) {

    return (
        <MDContent t={dictionary} pattern={props.pattern}/>
    )
}

export async function getStaticProps() {
    const markdownWithMetadata = fs.readFileSync("content/en/about.md").toString();
    const parsedMarkdown = matter(markdownWithMetadata);

    const infoPanelMarkdownMeta = fs.readFileSync("content/en/infoPanel.md").toString();
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