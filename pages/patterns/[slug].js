import fs from "fs";
import path from "path";
import matter from "gray-matter";
import PatternPage from "../../components/templates/PatternPage";
import dictionary from '../../content/en/dictionary.json';

export default function Pattern(props) {

    return (
        <PatternPage t={dictionary} pattern={props.pattern}/>
    )
}

export async function getStaticPaths() {
    const files = fs.readdirSync("content/en/patterns");
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
    const markdownWithMetadata = fs.readFileSync(path.join("content/en/patterns", slug + ".md")).toString();

    const parsedMarkdown = matter(markdownWithMetadata);

    const infoPanelMarkdownMeta = fs.readFileSync("content/en/infoPanel.md").toString();
    const parsedInfoPanelMarkdown = matter(infoPanelMarkdownMeta);

    return {
        props: {
            t: dictionary,
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