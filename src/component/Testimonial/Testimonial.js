import React from "react";
import {
  Container,
  Heading,
  CardData,
  Card,
  CardRow,
  Wraper,
  Details,
  Name,
  Address,
  MainDiv,
  Changer,
} from "./TestimonialStyle";
import img1 from "./img/1.png";
import img2 from "./img/2.png";
import img3 from "./img/3.png";
 
const Testimonial = () => {
  return (
    <MainDiv>
      <Container>
        <Wraper>
          <Heading>See what landlords are saying about Avail</Heading>
          <CardRow>
            <Card id="card1">
              <CardData>
                I’ve used Avail for about a year now and couldn’t be more
                satisfied! I’m a first time landlord and Avail has really helped
                me with the process. Easy to use website and customer service
                that is outstanding! Thank you Avail!
              </CardData>
              <Details>
                <img src={img1} alt="photo1" />
                <Name>Andrew Bergler</Name>
                <Address>Landlord in Illinois, 1 Unit</Address>
              </Details>
            </Card>
            <Card id="card2">
              <CardData>
                It’s affordable and easy to use. We love the advertising process
                and online dashboard, our tenants love the free online rent
                payment and online lease signing. Thank you Avail!
              </CardData>
              <Details>
                <img src={img2} alt="photo2" />
                <Name>Kevin and Jackie White</Name>
                <Address>Landlords in Colorado, 2 units</Address>
              </Details>
            </Card>
            <Card id="card3">
              <CardData>
                This is a helpful website for new landlords like me. I was
                totally ignorant of the entire renting process until I found
                Avail. And whenever I had a question, their support team was
                there to help. Thank you Avail!
              </CardData>
              <Details>
                <img src={img3} alt="photo2" />
                <Name>Polly</Name>
                <Address>Landlord in Florida, 1 unit</Address>
              </Details>
            </Card>
          </CardRow>
          <Changer>
            <button>&lt;</button>
            <button>&gt;</button>
          </Changer>
        </Wraper>
      </Container>
    </MainDiv>
  );
};

export default Testimonial;
