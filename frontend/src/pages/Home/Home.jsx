import Banner from "../../components/Banner/Banner";
import HomeNavbar from "../../components/HomeNavbar/HomeNavbar";
import requests from "../../utility/requests";
import MovieRow from "../../components/MovieRow/MovieRow";
import styles  from "./Home.module.css"

const Home = () => {
  return (
    <>
      <HomeNavbar />
      <Banner />
      <div className={styles.body}>

      <MovieRow title="Movie Suggestions" fetchUrl={requests.fetchSuggestions} />
      <MovieRow title="Popular on Netflix" fetchUrl={requests.fetchPopular} />
      <MovieRow title="Trending Now" fetchUrl={requests.fetchTrending} />
      <MovieRow title="New Release" fetchUrl={requests.fetchNewReleases} />
      </div>
     
    </>
  );
};

export default Home;
