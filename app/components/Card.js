import Image from "next/image";
import styles from "./Card.module.css";

export default function Card({ name, blurb, rating, image }) {
  return (
    <article className={styles.card}>
      {image ? (
        <Image src={image} alt={name} width={200} height={200} />
      ) : (
        <div className={styles.stars}>{stars}</div>
      )}
      <h2>{name}</h2>
      <p>{blurb}</p>
      <p className={styles.stars}>{"⭐".repeat(rating)}</p>
    </article>
  );
}