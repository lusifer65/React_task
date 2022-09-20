import styled from "styled-components";
import MobileImg from "../assets/header/RectangleMobile.png";
import NormalImg from "../assets/header/Rectangle.png";

export const Head = styled.header`
  width: 100%;
  height: 96px;
  display: flex;
  font-family: "Nunito";
  #logo {
    height: 48px;
    width: 194px;
    align-self: center;
    margin-left: 17px;

    @media screen and (max-width: 370px) {
      margin-left: 0px;
      height: 24px;
      width: 96px;
    }
  }
  #menu {
    width: 24px;
    height: 24px;
    position: relative;
    left: 24%;
    display: none;
    padding: 24px 24px 32px 0px;
    cursor: pointer;
    :hover {
      width: 25px;
      height: 25px;
    }

    @media screen and (max-width: 370px) {
      display: block;
    }
  }

  @media screen and (max-width: 370px) {
    height: 80px;
    #banner {
      height: 20px;
      width: 80px;
    }
  }
`;

export const NavData = styled.ul`
  list-style: none;
  display: flex;
  align-self: center;
  align-content: right;
  margin-left: 3%;
  position: absolute;
  right: 20px;

  li {
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.5px;
    text-align: center;
    color: rgba(13, 44, 98, 1);
    padding: 12px;
    :hover {
      cursor: pointer;
      color: rgba(13, 44, 90, 1);
    }
  }
  @media screen and (max-width: 370px) {
    display: none;
  }
`;

export const DropDown = styled.select`
  border: none;
  font-size: 16px;
  font-family: "Nunito";
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.5px;
  text-align: center;
  background: rgba(239, 241, 243, 1);
  color: rgba(13, 44, 98, 1);
  padding: 12px;
  :hover {
    cursor: pointer;
    color: rgba(13, 44, 90, 1);
  }
`;

export const HeaderLogo = styled.div`
  height: 96px;
  width: 264px;
  background: url(${NormalImg});
  img {
    padding: 24px;
    :hover {
      cursor: pointer;
    }
  }
  @media screen and (max-width: 370px) {
    height: 80px;
    width: 128px;
    background: url(${MobileImg});
  }
`;
