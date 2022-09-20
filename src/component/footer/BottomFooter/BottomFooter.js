import React from "react";
import {
  Footer,
  LeftDiv,
  Logo,
  Main,
  RightDiv,
  Text,
} from "./BottomFooterStyle";
import Logo1 from "../../assets/footer/bottomfooter/houselogic__new.png";
import Logo2 from "../../assets/footer/bottomfooter/realtor-3 1.png";

const BottomFooter = () => {
  return (
    <Main>
      <Footer>
        <LeftDiv>
          <Text>
            <span>Site Map |</span> Privacy | Terms
          </Text>
          <Text id="copy">© 2011—2021 Avail, All Rights Reserved.</Text>
        </LeftDiv>
        <RightDiv>
          <Logo>
            <img src={Logo1} alt="logo" />
          </Logo>
          <Logo>
            <img id="realtorIcon" src={Logo2} alt="logo" />
          </Logo>
        </RightDiv>
      </Footer>
    </Main>
  );
};

export default BottomFooter;
