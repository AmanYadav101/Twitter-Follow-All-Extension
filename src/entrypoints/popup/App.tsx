import "./App.css";

function App() {
  return (
    <>
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <h1 style={{ color: "#1da1f2" }}>🚀 Auto Follow Extension for X</h1>
        <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
          Simplify your experience on X by automatically following users on the
          "For You" tab.
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: "2rem" }}>
        <div
          style={{
            padding: "1rem",
            border: "1px solid #ddd",
            borderRadius: "8px",
            width: "300px",
          }}
        >
          <h2 style={{ color: "#333" }}>🌟 Features</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>✅ Floating "Follow All" button</li>
            <li>✅ Automatically switches to "For You" tab</li>
            <li>✅ Follows users with a single click</li>
            <li>✅ Human-like delays</li>
          </ul>
        </div>
        <div
          style={{
            padding: "1rem",
            border: "1px solid #ddd",
            borderRadius: "8px",
            width: "300px",
          }}
        >
          <h2 style={{ color: "#333" }}>📖 How to Use</h2>
          <ol style={{ paddingLeft: "1.5rem" }}>
            <li>Install the extension in your browser</li>
            <li>Go to the "For You" tab on X</li>
            <li>Click the "Follow All" button</li>
          </ol>
        </div>
      </div>
      <footer style={{ textAlign: "center", marginTop: "2rem", color: "#555" }}>
        Built with ❤️ to make your life easier!
      </footer>
    </>
  );
}

export default App;
