import React from "react";
import logo1 from "../../assets/footer/topFooter/avail__logo.png";
import logo2 from "../../assets/footer/topFooter/facebook.png";
import logo3 from "../../assets/footer/topFooter/twitter.png";
import logo4 from "../../assets/footer/topFooter/linkedin.png";
import logo5 from "../../assets/footer/topFooter/instagram.png";
import logo6 from "../../assets/footer/topFooter/youtube.png";

import {
  Container,
  Heading,
  InnerDiv,
  ListContainer,
  ListItem,
  Section,
  TopBar,
  TOP_FOOTER,
} from "./TopFooterStyle";

const TopFooter = () => {
  return (
    <TOP_FOOTER>
      <Container>
        <TopBar>To Top ^</TopBar>
        <ListContainer>
          <Section>
            <img src={logo1} alt="avail" />
            <img src={logo2} alt="Facebook" />
            <img src={logo3} alt="Twitter" />
            <img src={logo4} alt="Linkdin" />
            <img src={logo5} alt="Insagram" />
            <img src={logo6} alt="youtube" />
          </Section>
          <Section>
            <InnerDiv Width={"169"}>
              <Heading>GET STARTED</Heading>
              <ListItem>Landlord Sign up </ListItem>
              <ListItem>Tenant Sign up </ListItem>
            </InnerDiv>
            <InnerDiv Width={"102"}>
              <Heading>About Us</Heading>
              <ListItem>About Us</ListItem>
              <ListItem>Avail news</ListItem>
              <ListItem>House Rule</ListItem>
              <ListItem>Testimonials</ListItem>
              <ListItem>Jobs</ListItem>
              <ListItem>Press</ListItem>
            </InnerDiv>
          </Section>
          <Section>
            <InnerDiv>
              <Heading>FEATURES</Heading>
              <ListItem>Rental Listings</ListItem>
              <ListItem>Rental Applications</ListItem>
              <ListItem>Tenant Screening</ListItem>
              <ListItem className="manageWidth">
                Credit, Criminal, Eviction Reports
                <br />
              </ListItem>
              <ListItem>Digital Leases</ListItem>
              <ListItem>Online Rent Collection</ListItem>
              <ListItem>Maintenance Tracking</ListItem>
              <ListItem>Rent Price Analysis</ListItem>
            </InnerDiv>
          </Section>
          <Section>
            <InnerDiv>
              <Heading>RESOURCES</Heading>
                <ListItem>Education</ListItem>
                <ListItem>Articles</ListItem>
                <ListItem>Guides</ListItem>
                <ListItem>Landlord Resources</ListItem>
                <ListItem>Avail Community Forum</ListItem>
                <ListItem>Earn $50</ListItem>
            </InnerDiv>
            <InnerDiv>
            <Heading>CONTACT US</Heading>
            <ListItem>Help Center</ListItem>
            <ListItem>Contact Support</ListItem>
            <ListItem>(312) 292-9347</ListItem>
            </InnerDiv>
            <InnerDiv>
            <ListItem id="address">1 S Wacker Dr
            Fl 26, Ste 2640
            Chicago, IL 60606</ListItem>
            </InnerDiv>
          </Section>
        </ListContainer>
      </Container>
    </TOP_FOOTER>
  );
};

export default TopFooter;
