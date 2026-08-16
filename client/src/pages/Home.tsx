import Hero from "../components/Hero"
import Footer from "../components/Footer"
import Features from "../components/Features"

const Home = () => {
  return (
    <div className="home-page">
      <Hero/>
      <Features/>
      <Footer/>
    </div>
  );
}

export default Home;