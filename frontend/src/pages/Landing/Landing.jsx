import LandingHero from "../../components/LandingHero/LandingHero";
import TrendingRow from "../../components/TrendingRow/TrendingRow";
import FeatureCards from "../../components/FeatureCards/FeatureCards";
import FAQ from "../../components/FAQ/FAQ";
import LandingFooter from "../../components/LandingFooter/LandingFooter";
import styles from "./Landing.module.css"

const Landing = () => {
  return (
    <>
    <div className={styles.container}>
    <LandingHero />
      <TrendingRow />
      <FeatureCards />
      <FAQ />
      <LandingFooter />
    </div>
     
    </>
  );
};

export default Landing;
