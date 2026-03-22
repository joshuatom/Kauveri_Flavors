import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate, Link } from "react-router-dom";
import { styles } from "./theme";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Account Created Successfully 🎉");
      navigate("/shop");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Register</h2>
        <p style={styles.subtitle}>Create a new account</p>

        <input
          type="email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        <button onClick={handleSignup} style={styles.button}>
          Sign Up
        </button>

        <p style={styles.linkText}>
          Already have an account?{" "}
          <Link to="/" style={styles.link}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
