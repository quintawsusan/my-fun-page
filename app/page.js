import { items } from "./data";
import Hero from "./components/Hero";
import CardGrid from "./components/CardGrid";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <div className = {styles.hero}>
        <Hero 
          title="My Fan Page" 
          tagline="A page about the things I love." 
        />
      </div>
      <CardGrid items={items} />
    </main>
  );
}
