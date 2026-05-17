import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import styles from "./Login.module.css";
import logo from "../../assets/images/Netflix-logo.png"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    }
  };
  return (
    <div className={styles.page}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.logo}><img src={logo} alt="netflix logo" /></div>
      </header>
      {/* Main */}
      <main className={styles.main}>
        <div className={styles.card}>
          <h1 className={styles.title}>Enter your info to sign in</h1>
          <p className={styles.subtitle}>Or get started with a new account.</p>
          {error && <p className={styles.errorMsg}>{error}</p>}
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputWrapper}>
              <input
                className={styles.input}
                type="email"
                placeholder="Email or mobile number"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.inputWrapper}>
              <input
                className={styles.input}
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button className={styles.submitBtn} type="submit">
              Continue
            </button>
          </form>
          <div className={styles.helpRow}>
            Get Help <span className={styles.helpChevron}>&#8964;</span>
          </div>

          <p className={styles.recaptcha}>
            This page is protected by Google reCAPTCHA to ensure you're not a bot.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Login;