import Link from "next/link";

const Header = () => {
  return (
    <header>
      <Link href="/" aria-label="Home">
        Rental<span>Car</span>
      </Link>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/catalog">Catalog</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
