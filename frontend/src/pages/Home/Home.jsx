import { useAuth } from "../../context/AuthContext";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  console.log(currentUser);

  return (
    <div>
     <h1>{`Welcome to Home Page ${currentUser?.displayName}`}</h1> 
     <button className={styles.logoutButton}
     onClick={() => {
       navigate("/login");
     }}
     >
       log out
     </button>
    </div>
  );
};

export default Home;