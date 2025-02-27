import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      {/* Animated Title */}
      <motion.h1
        style={styles.title}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to <span style={styles.highlight}>Expense Splitter</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        style={styles.subtitle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Effortlessly split expenses with friends & family.
      </motion.p>

      {/* Start Button */}
      <motion.button
        style={styles.button}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => navigate("/split")}
      >
        Start
      </motion.button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    background: "linear-gradient(to right, #1e1e1e, #333333)",
    color: "yellow",
    textAlign: "center",
  },
  title: {
    fontSize: "3rem",
    fontWeight: "bold",
    textShadow: "0 0 10px yellow, 0 0 20px yellow",
  },
  highlight: {
    color: "#FFD700",
    textShadow: "0 0 15px #FFD700, 0 0 25px #FFD700",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#ddd",
    marginTop: "10px",
  },
  button: {
    marginTop: "20px",
    padding: "12px 24px",
    fontSize: "1.3rem",
    backgroundColor: "yellow",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "all 0.3s ease",
    boxShadow: "0px 4px 10px rgba(255, 255, 0, 0.7)",
  },
};

export default WelcomePage;
