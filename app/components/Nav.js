import Link from "next/link";
import styles from "./Nav.module.css"

export default function Nav() {
  return (
    <div className = {styles.nav}>
      <nav style={{ display: "flex", gap: "16px", marginBottom: "1rem"}}>
        <Link style = {{color: "white", textDecoration: "none", fontSize: "20px",}} href="/">Home</Link>
        <Link style = {{color: "white", textDecoration: "none", fontSize: "20px"}} href="/about">About</Link>
      </nav>
    </div>
  );
}
