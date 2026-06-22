import styles from "./about.module.css";

export default function AboutPage() {
  return (
    
    <div className={styles.blueBox}>
      {/* 1. Main Blue Box Container */}
      <h1 className={styles.boxTitle}>About My Fan Page</h1>

      <div className={styles.boxText}>
        {/* 2. Text Written Inside the Box */}
        <p>
          Hey there! I created this fan page to share a few of the things that
          bring genuine joy to my everyday life. My interests are a bit of a
          mix: 
        </p>

        <p>I love the thrill of being active outdoors; skating and biking
          are my go-to ways to explore and clear my head.</p>

        <br></br>

        <p>
          At the same time, I have a massive appreciation for creative arts,
          whether that's experimenting with photography, listening to music, or
          trying out new baking ideas. And of course, when it's time to fully
          unwind, nothing beats a classic 'Netflix & chill' session to recharge.
        </p>

        <br></br>

        <p>Thanks for stopping by to check out what keeps me moving ❤️</p>
      </div>
    </div>
  );
}
