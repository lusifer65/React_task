import React from "react";
import { Banner, Wapper, Content, Heading, Subtitle, Button } from "./Style";
import "../../style.css";
import CardImg from "../assets/banner/card.svg";
import BackgroundImg from "../assets/banner/background.png";
const BannerComponent = () => {
  return (
    <Banner img={BackgroundImg}>
      <Wapper>
        <Content>
          <Heading>Manage Your Rental Property With Ease</Heading>
          <Subtitle>
            Simplify how you find, screen, and manage your tenants with our
            software. You’ll gain access to our complete set of tools, guidance,
            and best-in-class educational content to help you be a confident and
            professional landlord whether you have one unit or 10.
          </Subtitle>
          <Button>TRY IT FOR FREE</Button>
        </Content>
        <div className="card">
          <img src={CardImg} alt="Card"/>
        </div>
      </Wapper>
    </Banner>
  );
};

export default BannerComponent;
