import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import styles from "./Register.module.css";
import logo from "../../assets/images/Netflix-logo.png"
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState("");
const navigate=useNavigate()
  const { signup } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(email, password, username);
      alert("Account created!");
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    }
  };

  return (
    <div className={styles.page}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.logo}><img src={logo} alt="" /></div>
        <button className={styles.signInLink} onClick={()=>navigate("/login")}>Sign In</button>
      </header>

      {/* Main */}
      <main className={styles.main}>
        <div className={styles.card}>
          <h1 className={styles.title}>Welcome back! Joining Netflix is easy.</h1>
          <p className={styles.subtitle}>Sign in and you'll be watching in no time.</p>

          {error && <p className={styles.errorMsg}>{error}</p>}

          <form className={styles.form} onSubmit={handleSubmit}>
            {/* Username */}
            <div className={styles.floatGroup}>
              <input
                className={styles.floatInput}
                type="text"
                placeholder=" "
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label className={styles.floatLabel}>Username</label>
            </div>

            {/* Email */}
            <div className={styles.floatGroup}>
              <input
                className={styles.floatInput}
                type="email"
                placeholder=" "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className={styles.floatLabel}>Email or mobile number</label>
            </div>

            {/* Password (shown only when "Use password" is clicked) */}
            
              <div className={styles.floatGroup}>
                <input
                  className={styles.floatInput}
                  type="password"
                  placeholder=" "
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label className={styles.floatLabel}>Password</label>
              </div>
            {/* Primary CTA */}
            <button className={styles.primaryBtn} type="submit">
            Sign Up 
            </button>
            {/* Remember me */}
            <label className={styles.rememberRow}>
              <input
                className={styles.checkbox}
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <span className={styles.rememberLabel}>Remember me</span>
            </label>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Register;