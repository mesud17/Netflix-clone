import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <h1>Netflix Clone</h1>

      <Link to="/login">
        <button>Login</button>
      </Link>

      <Link to="/register">
        <button>Register</button>
      </Link>
    </div>
  );
};

export default Landing;