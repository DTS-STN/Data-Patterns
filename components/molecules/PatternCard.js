import Link from 'next/link'
import styles from '../../styles/PatternCard.module.css';

export default function PatternCard(props) {
    return (
        <Link href={props.pattern.permalink}>
            <figure className={styles.container}>
                <img src={props.pattern["feature-img-path"]} alt="" />
                <figcaption className={styles.content}>
                    <h4>{props.pattern.name}</h4>
                    {props.pattern["short-description"]}
                </figcaption>
            </figure>
        </Link>
    )
}