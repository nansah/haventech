export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0F1B2D",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <div
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "16px",
          background: "#3B82F6",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "white",
          marginBottom: "1.5rem",
        }}
      >
        S
      </div>

      <h1
        style={{
          color: "white",
          fontSize: "2.5rem",
          fontWeight: "700",
          margin: "0 0 0.5rem",
          lineHeight: "1.2",
        }}
      >
        SermonFlow
      </h1>

      <p
        style={{
          color: "rgba(255,255,255,0.5)",
          fontSize: "0.875rem",
          fontWeight: "600",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          margin: "0 0 1.5rem",
        }}
      >
        presenter.versewell.io
      </p>

      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          background: "rgba(59,130,246,0.15)",
          border: "1px solid rgba(59,130,246,0.3)",
          borderRadius: "9999px",
          padding: "0.5rem 1rem",
          marginBottom: "2rem",
        }}
      >
        <span
          style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: "#F59E0B",
          }}
        />
        <span
          style={{
            color: "#93C5FD",
            fontSize: "0.75rem",
            fontWeight: "600",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}
        >
          Under Construction
        </span>
      </div>

      <p
        style={{
          color: "rgba(255,255,255,0.6)",
          maxWidth: "420px",
          lineHeight: "1.6",
          marginBottom: "2.5rem",
        }}
      >
        SermonFlow is the sermon preparation and presentation tool for pastors
        and teachers. Outline builder, teleprompter, scripture integration, and
        live presentation mode — coming soon.
      </p>

      <a
        href="https://versewell.io/presenter"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          background: "#F59E0B",
          color: "#0F1B2D",
          padding: "0.75rem 1.5rem",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "600",
          fontSize: "0.875rem",
          transition: "opacity 0.2s",
        }}
      >
        Learn more at versewell.io →
      </a>
    </div>
  );
}
