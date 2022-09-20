import React, { useState } from "react";
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
  const [curr, setCurr] = useState(0);

  const arr = [
    {
      data: `I’ve used Avail for about a year now and couldn’t be more
                satisfied! I’m a first time landlord and Avail has really helped
                me with the process. Easy to use website and customer service
                that is outstanding! Thank you Avail!`,
      img: img1,
      name: "Andrew Bergler",
      address: "Landlord in Illinois, 1 Unit",
    },
    {
      data: `It’s affordable and easy to use. We love the advertising process
                and online dashboard, our tenants love the free online rent
                payment and online lease signing. Thank you Avail!`,
      img: img2,
      name: "Kevin and Jackie White",
      address: "Landlords in Colorado, 2 units",
    },
    {
      data: ` This is a helpful website for new landlords like me. I was
                totally ignorant of the entire renting process until I found
                Avail. And whenever I had a question, their support team was
                there to help. Thank you Avail!`,
      img: img3,
      name: "Polly",
      address: "Landlord in Florida, 1 unit",
    },
  ];

  return (
    <MainDiv>
      <Container>
        <Wraper>
          <Heading>See what landlords are saying about Avail</Heading>
          <CardRow>
            {arr.map((item, i) => {
              return (
                <Card id={`card${i + 1}`} key={i}>
                  <CardData>{item.data}</CardData>
                  <Details>
                    <img src={item.img} alt={item.name} />
                    <Name>{item.name}</Name>
                    <Address>{item.address}</Address>
                  </Details>
                </Card>
              );
            })}
          </CardRow>
          <Card id="mobile">
            <CardData>{arr[curr].data}</CardData>
            <Details>
              <img src={arr[curr].img} alt={arr[curr].name} />
              <Name>{arr[curr].name}</Name>
              <Address>{arr[curr].address}</Address>
            </Details>
          </Card>
          <Changer>
            <button
              style={{ color: `${curr > 0 ? "white" : "black"}` }}
              onClick={() => {
                if (curr > 0) {
                  setCurr(curr - 1);
                }
              }}
            >
              &lt;
            </button>
            <button
              style={{ color: `${curr < arr.length - 1 ? "white" : "black"}` }}
              onClick={() => {
                if (curr < arr.length - 1) {
                  setCurr(curr + 1);
                }
              }}
            >
              &gt;
            </button>
          </Changer>
        </Wraper>
      </Container>
    </MainDiv>
  );
};

export default Testimonial;
