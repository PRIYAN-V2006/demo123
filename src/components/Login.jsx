import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login Successful!");
  };

  return (
    <div style={styles.wrapper}>

      {/* Login Card */}
      <div style={styles.card}>
        <h1 style={styles.title}>MINDCRAFT AI</h1>
        <p style={styles.subtitle}>
          Intelligent Personal Learning Manager
        </p>

        <form onSubmit={handleSubmit}>
          <input
            style={styles.input}
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            style={styles.input}
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button style={styles.button} type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    height: "100vh",
    width: "100vw",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#0f172a",
    overflow: "hidden",
  },
  card: {
    position: "relative",
    zIndex: 1,
    background: "rgba(15, 23, 42, 0.85)",
    backdropFilter: "blur(20px)",
    padding: "40px",
    borderRadius: "20px",
    width: "400px",
    textAlign: "center",
    color: "white",
    boxShadow: "0 0 60px rgba(37, 99, 235, 0.5)",
  },
  title: {
    color: "#2563eb",
    marginBottom: "10px",
    fontSize: "32px",
  },
  subtitle: {
    marginBottom: "25px",
    fontSize: "14px",
    color: "#cbd5e1",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "10px",
    border: "none",
    outline: "none",
  },
  button: {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    background: "#2563eb",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default Login;
