import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Title from "./Components/Title/Title";
import Programs from "./Components/Programs/Programs";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Testimonials from "./Components/Testimonials/Testimonials";
import ContactUs from "./Components/CotactUs/ContactUs";
import Footer from "./Components/Footer/Footer";
import Video from "./Components/Video/Video";
import { useState } from "react";

function App() {
  const [playerState, setPlayerState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our PROGRAM" title="What we offer" />
        <Programs />
        <About setPlayerState={setPlayerState} />
        <Title subTitle="Gallery" title="Campus Photos" />
        <Campus />
        <Title subTitle="TESTIMONIALS" title="What Student Says" />
        <Testimonials />
        <Title subTitle="Contact Us" title="Get in Touch" />
        <ContactUs />
        <Footer />
      </div>
      <Video playerState={playerState} setPlayerState={setPlayerState} />
    </div>
  );
}

export default App;
