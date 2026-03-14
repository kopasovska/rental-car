"use client";

import Link from "next/link";
import css from "./Header.module.css";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname() || "/";

  return (
    <header className={css.header}>
      <Link href="/" aria-label="Home" className={css.logo}>
        <svg className={css.iconLogo}>
          <use xlinkHref="/icons.svg#icon-logo"></use>
        </svg>
      </Link>
      <ul className={css.navList}>
        <li className={pathname === "/" ? "active" : ""}>
          <Link href="/">Home</Link>
        </li>
        <li className={pathname === "/catalog" ? "active" : ""}>
          <Link href="/catalog">Catalog</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
