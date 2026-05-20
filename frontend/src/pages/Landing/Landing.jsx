import Hero from "../../components/Hero/Hero";
import TrendingRow from "../../components/TrendingRow/TrendingRow";
import FeatureCards from "../../components/FeatureCards/FeatureCards";
import FAQ from "../../components/FAQ/FAQ";
import LandingFooter from "../../components/LandingFooter/LandingFooter";

const Landing = () => {
  return (
    <>
      <Hero />
      <TrendingRow />
      <FeatureCards />
      <FAQ />
      <LandingFooter />
    </>
  );
};

export default Landing;
