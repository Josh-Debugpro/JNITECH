import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div
      style={{
        background: "#050816",
       
      }}
    >
      <Hero />
      <Categories />
      <Products />
      <Testimonials />
    </div>
  );
};

export default Home;