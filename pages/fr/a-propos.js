import fs from "fs";
import matter from "gray-matter";
import ContentPage from "../../components/templates/ContentPage";
import dictionary from '../../content/fr/dictionary.json';

export default function About(props) {

    return (
        <ContentPage t={dictionary} content={props.content}/>
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
            content: {
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