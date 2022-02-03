import fs from "fs";
import matter from "gray-matter";
import dictionary from '../../content/fr/dictionary.json';
import HomeLayout from '../../components/organisms/HomeLayout';

export default function Index(props) {
    return (
        <HomeLayout t={dictionary} content={props.home} patterns={props.patterns}/>
    )
}

export async function getStaticProps() {
    const markdownWithMetadata = fs.readFileSync("content/fr/infoPanel.md").toString();
    const parsedMarkdown = matter(markdownWithMetadata);

    const homeMarkdownMeta = fs.readFileSync("content/fr/home.md").toString();
    const parsedHomeMarkdown = matter(homeMarkdownMeta);

    let patternsPath = "content/fr/patterns";
    let patternFiles = fs.readdirSync(patternsPath);
    patternFiles = patternFiles.filter(file => file.slice(file.length - 3) === ".md");
    patternFiles = patternFiles.map(filename => {
        let parsed = fs.readFileSync(`${patternsPath}/${filename}`).toString();
        parsed = matter(parsed);
        return parsed.data;
    });

    return {
        props: {
            t: dictionary,
            patterns: patternFiles,
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
