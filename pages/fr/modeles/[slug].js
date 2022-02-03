import fs from "fs";
import path from "path";
import matter from "gray-matter";
import PatternLayout from "../../../components/organisms/PatternLayout";
import dictionary from '../../../content/fr/dictionary.json';

export default function Pattern(props) {

    return (
        <PatternLayout t={dictionary} pattern={props.pattern}/>
    )
}

export async function getStaticPaths() {
    const files = fs.readdirSync("content/fr/patterns");
    console.log("files: ", files);
    const paths = files.map(filename => ({
        params: {
            slug: filename.replace(".md", "")
        }
    }));
    console.log("paths: ", paths);

    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({ params: { slug } }) {
    const markdownWithMetadata = fs.readFileSync(path.join("content/fr/patterns", slug + ".md")).toString();

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