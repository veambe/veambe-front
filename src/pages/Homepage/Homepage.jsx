import "./Homepage.css";
import CategoriesList from "../../components/CategoriesList/CategoriesList";

const Homepage = () => {
  return (
    <section className="homepage-main">
      <img className="hero" src="/images/heroVeambe.png" alt="logo veambe" />
      <CategoriesList />
    </section>
  );
};

export default Homepage;
