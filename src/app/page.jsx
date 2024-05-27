import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better Design for your digital products.</h1>
        <p className={styles.desc}>
          Turning your idea into reality. We bring toether the teams fromt the
          global tech company.
        </p>
        <button className={styles.button}>See Our Works</button>
      </div>
      <div className={styles.item}>
        <Image
          width={500}
          height={500}
          src={"/hero.png"}
          // src={"https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg"}
          alt="Hero"
          className={styles.img}
        />
      </div>
    </div>
  );
}
