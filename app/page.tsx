import Image from "next/image";
import styles from "./page.module.css";
import banner from "@/public/banner.jpg";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          src={banner}
          alt=""
          width={700}
          height={500}
          priority
          placeholder="blur"
        />
      </main>
    </div>
  );
}
