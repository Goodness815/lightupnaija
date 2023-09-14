import About from "../../components/homeSections/about/About";
import Cta from "../../components/homeSections/cta/Cta";
import Market from "../../components/homeSections/market/Market";
import Reviews from "../../components/homeSections/review/Reviews";
import Showcase from "../../components/homeSections/showcase/Showcase";
import Works from "../../components/homeSections/works/Works";
import HomeLayout from "../../components/layouts/HomeLayout";

function Home() {
  return (
    <HomeLayout>
      <Showcase />
      <About />
      <Market />
      <Works />
      <Reviews />
      <Cta />
    </HomeLayout>
  );
}

export default Home;
