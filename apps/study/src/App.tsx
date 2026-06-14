export default function App() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: "#0F1B2D", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>
      <div style={{ textAlign: "center", maxWidth: 480, padding: "0 24px" }}>
        <div style={{ fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", color: "#60A5FA", fontWeight: 600, marginBottom: 16 }}>
          Versewell Study
        </div>
        <h1 style={{ fontSize: 40, fontWeight: 800, marginBottom: 16, lineHeight: 1.2 }}>
          Coming soon
        </h1>
        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 18, lineHeight: 1.6, marginBottom: 32 }}>
          The full Versewell Study app is on its way. Replace this placeholder with your app code.
        </p>
        <a href="https://versewell.io/study" style={{ color: "#60A5FA", textDecoration: "none", fontSize: 14 }}>
          ← Back to Study overview
        </a>
      </div>
    </div>
  );
}
