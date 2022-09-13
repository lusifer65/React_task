import React from "react";
import { Container, Item, Heading, Subtitle } from "./StyleHiw";
import img1 from '../assets/HIW/1.png'
import img2 from '../assets/HIW/2.png'
import img3 from '../assets/HIW/3.png'
import Rect1 from '../assets/HIW/Rectangle1.png'
import Rect2 from '../assets/HIW/Rectangle2.png'


const Hiw = () => {
  return (
    <Container>
      <Item>
        <div>
          <Heading>Simplify Life as a Landlord</Heading>
          <Subtitle>
            We help you find, screen and keep tenants to free up valuable time.
          </Subtitle>
        </div>
        <img src={img1} alt="img" />
      </Item>
      <img src={Rect1} className="divider divider1" alt="divider"/>
      <Item  color="white">
        <img src={img2} alt="img" />
        <div>
          <Heading>Easily Connect with Tenants</Heading>
          <Subtitle>
          Streamline communication with your renters for payments, maintenance requests and more.
          </Subtitle>
        </div>
      </Item>
      <img src={Rect2} className="divider divider2" alt="divider"/>

      <Item Height={"432"}>
        <div>
          <Heading Height={"96"}>Be a Confident and Professional Landlord</Heading>
          <Subtitle>
          Learn how to be a better landlord through an extensive set of tools, resources and education.
          </Subtitle>
        </div>
        <img src={img3} alt="img" />
      </Item>
    </Container>
  );
};

export default Hiw;
