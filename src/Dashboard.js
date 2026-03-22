import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import { styles } from "./App";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Welcome to Dashboard 🎉</h2>
        <p style={styles.subtitle}>You are successfully logged in</p>
        <button onClick={handleLogout} style={styles.button}>Logout</button>
      </div>
    </div>
  );
}

export default Dashboard;
