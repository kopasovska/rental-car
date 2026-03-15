import Image from "next/image";
import css from "./page.module.css";
import banner from "@/public/banner.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <section className={css.heroSection}>
      <Image
        src={banner}
        alt=""
        fill
        style={{ objectFit: "cover" }}
        priority
        placeholder="blur"
      />
      <div className={css.heroContent}>
        <h1 className="heading-xl">Find your perfect rental car</h1>
        <h2 className="heading-lg" style={{ marginBottom: "40px" }}>
          Reliable and budget-friendly rentals for any journey
        </h2>
        <Link href="/catalog" className="cta-btn">
          View Catalog
        </Link>
      </div>
    </section>
  );
}
