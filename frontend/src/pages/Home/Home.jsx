import { useAuth } from "../../context/AuthContext";

const Home = () => {
  const { currentUser } = useAuth();

  console.log(currentUser);

  return (
    <div>
     <h1>{`Welcome to Home Page ${currentUser?.displayName}`}</h1> 
    </div>
  );
};

export default Home;