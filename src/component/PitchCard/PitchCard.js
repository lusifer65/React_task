import React from "react";
import { Container, Card, Heading, Subtitle, TextLink, Frame } from "./StylePitchCard";
import img1 from "./icons/1.png";
import img2 from "./icons/2.png";
import img3 from "./icons/3.png";
import img4 from "./icons/4.png";
import img5 from "./icons/5.png";
import img6 from "./icons/6.png";
import img7 from "./icons/7.png";

const PitchCard = () => {
  return (
    <Container>
    <Frame>
      <Card>
        <img src={img1} alt="img" />
        <Heading>One-Click Listings</Heading>
        <Subtitle>
          We make it simple to post rental listings online to reach more
          renters. Just create 1 listing and we’ll post it across the web to all
          major rental networks like Zillow and Trulia.
        </Subtitle>
        <TextLink>Advertise across the web</TextLink>
      </Card>
      <Card>
        <img src={img2} alt="img" />
        <Heading>Simple Rental Applications</Heading>
        <Subtitle>
          Instead of juggling the stress of tenant rental applications and
          tenant screening, use Avail to request and review tenant applications
          online. It’s never been easier
          <strong>to find and keep quality tenants.</strong>
        </Subtitle>
        <TextLink>Find the right tenants</TextLink>
      </Card>
      <Card>
        <img src={img3} alt="img" />
        <Heading>Credit & Background Checks</Heading>
        <Subtitle>
          Avoid the frustrations by using our streamlined software. Simply enter
          your tenant’s email, wait for them to authorize the report, and soon
          you can review their full credit report online.
        </Subtitle>
        <TextLink>Start screening applicants</TextLink>
      </Card>
      </Frame>
      <Frame>
      <Card>
        <img src={img4} alt="img" />
        <Heading>Online Leases</Heading>
        <Subtitle>
          Step away from the fax machine. With Avail, you can customize a
          digital lease and send it to your tenant to sign online. Hello
          convenience!
        </Subtitle>
        <TextLink>Send and Sign today</TextLink>
      </Card>
      <Card>
        <img src={img5} alt="img" />
        <Heading>Online Rent Collection</Heading>
        <Subtitle>
          It should be easy to pay rent online, and to collect rent online.
          We’ve also made it convenient to schedule rent due dates and track
          payments. We offer the fastest payments for online rent
          collection—check out <strong>FastPay.</strong>
        </Subtitle>
        <TextLink>Setup payments instantly</TextLink>
      </Card>
      <Card>
        <img src={img6} alt="img" />
        <Heading>Maintenance Tickets</Heading>
        <Subtitle>
          Let your tenants submit maintenance tickets online. Forward requests
          to a contractor or rely on one of our suggested contractors. No more
          midnight phone calls.
        </Subtitle>
        <TextLink>Discover peace of mind</TextLink>
      </Card> 
      </Frame>
      <Frame id="midile">
      <Card >
        <img src={img7} alt="img"  style={{margin:"5px 100px",}}/>
        <Heading>Resident Portal</Heading>
        <Subtitle>
          Renting should be easy for your tenants too. With Avail, your tenants
          get access to a resident portal for 24-hour access to pay rent, submit
          maintenance requests and more.
        </Subtitle>
        <TextLink>Learn more about tenant features</TextLink>
      </Card>
      </Frame>
    </Container>
  );
};

export default PitchCard;
