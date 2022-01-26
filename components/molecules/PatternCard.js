import Link from 'next/link';
import styles from '../../styles/PatternCard.module.css';

export default function PatternCard(props) {
    return (
        <Link href={props.pattern.permalink}>
            <figure className={styles.container}>
                <img src={props.pattern["feature-img-path"]} alt={props.pattern["feature-img-alt"]}/>
                <div className={styles.content}>
                    <h4>{props.pattern.name}</h4>
                    <figcaption>{props.pattern["short-description"]}</figcaption>
                </div>
            </figure>
        </Link>
    )
}