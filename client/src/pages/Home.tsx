import Banner from "../components/Home/Banner";
import Footer from "../components/Home/Footer";
import Testimonials from "../components/Home/Testimonials";

const Home = () => {
  return (
    <div
      style={{
        background: `linear-gradient(90deg, rgb(0, 31, 169) 1.1%, rgba(64, 19, 122) 60%, rgba(71, 15, 98) 99%);`,
      }}
    >
      <Banner />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
