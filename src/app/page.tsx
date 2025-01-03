
import Abayas from "./components/Collection1";
import Chadars from "./components/Collection3";
import Collection from "./components/Collection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Hijabs from "./components/Collection2";
import Brand from "./components/Brand";

export default function Home() {
  return (
    <div >
      <Header/>
      <Hero/>
      <Collection/>
      <Abayas/>
      <Hijabs/>
      <Chadars/>
      <Brand/>
      <Footer/>
    </div>
  );
}
