import "./globals.css";
import Nav from "./components/Nav";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <footer style={{ marginTop: "3rem", textAlign: "center", color: "#f7f3f3" }}>
          <p> Built with Next.js by Quinta Susan 💙 </p>
          <p> © My Site </p> 
        </footer>
      </body>
    </html>
  );
}