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
  const col1 = [
    [logo1, "avail"],
    [logo2, "facebook"],
    [logo3, "Twitter"],
    [logo4, "Linkdin"],
    [logo5, "Instagram"],
    [logo6, "youtube"],
  ];
  const col2 = [
    {
      width: "169",
      heading: "GET STARTED",
      listItem: ["Landlord Sign up", "Tenant Sign up"],
    },
    {
      width: "102",
      heading: "About Us",
      listItem: [
        "About Us",
        "Avail news",
        "House Rule",
        "Testimonials",
        "Jobs",
        "Press",
      ],
    },
  ];
  const col3 = [
    {
      heading: "FEATURES",
      listItem: [
        "Rental Listings",
        "Rental Applications",
        "Tenant Screening",
        "Credit, Criminal, Eviction Reports",
        "Digital Leases",
        "Online Rent Collection",
        " Maintenance Tracking",
        "Rent Price Analysis",
      ],
    },
  ];
  const col4 = [
    {
      heading: "RESOURCES",
      listItem: [
        "Education",
        "Articles",
        "Guides",
        "Landlord Resources",
        "Avail Community Forum",
        "Earn $50",
      ],
    },
    {
      heading: "CONTACT US",
      listItem: ["Help Center", "Contact Support", "(312) 292-9347"],
    },
    {
      id: "address",
      data: "1 S Wacker Dr Fl 26, Ste 2640 Chicago, IL 60606",
    },
  ];
  return (
    <TOP_FOOTER>
      <Container>
        <TopBar
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          To Top ^
        </TopBar>
        <ListContainer>
          <Section id="LogoCollection">
            {col1.map((item, i) => (
              <img src={item[0]} alt={item[1]} key={i} />
            ))}
          </Section>
          <Section>
            {col2.map((element, i) => {
              return (
                <InnerDiv Width={element.width} key={i}>
                  <Heading>{element.heading}</Heading>
                  {element.listItem.map((list, index) => {
                    return <ListItem key={index}>{list}</ListItem>;
                  })}
                </InnerDiv>
              );
            })}
          </Section>
          <Section>
            {col3.map((item, i) => {
              return (
                <InnerDiv key={i}>
                  <Heading>{item.heading}</Heading>
                  {item.listItem.map((list, x) => {
                    if (x === 3) {
                      return (
                        <ListItem className="manageWidth" key={x}>
                          {list}
                        </ListItem>
                      );
                    }
                    return <ListItem key={x}>{list}</ListItem>;
                  })}
                </InnerDiv>
              );
            })}
          </Section>
          <Section>
            {col4.map((item, i) => {
              if (i === 2) {
                return (
                  <InnerDiv key={i}>
                    <ListItem id={item.id}>{item.data}</ListItem>
                  </InnerDiv>
                );
              }
              return (
                <InnerDiv key={i}>
                  <Heading>{item.heading}</Heading>
                  {item.listItem.map((data, x) => {
                    return <ListItem key={x}>{data}</ListItem>;
                  })}
                </InnerDiv>
              );
            })}
          </Section>
        </ListContainer>
      </Container>
    </TOP_FOOTER>
  );
};

export default TopFooter;
