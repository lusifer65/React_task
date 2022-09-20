import React from "react";
import Header from "./component/header/Header";
import BannerComponent from "./component/banner/Banner";
import PitchCard from "./component/PitchCard/PitchCard";
import Hiw from "./component/HIW/Hiw";
import Testimonial from "./component/Testimonial/Testimonial";
import Email from "./component/Email/Email";
import TopFooter from "./component/footer/TopFooter/TopFooter";
import BottomFooter from "./component/footer/BottomFooter/BottomFooter";

function App() {
  return (
    <>
      <Header />
      <BannerComponent />
      <PitchCard />
      <Hiw />
      <Testimonial />
      <Email />
      <TopFooter />
      <BottomFooter />
    </>
  );
}

export default App;
