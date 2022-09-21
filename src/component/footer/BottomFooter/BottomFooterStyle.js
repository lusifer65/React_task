import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  background: #11377c;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 32px 158px;
  box-sizing: border-box;
  @media screen and (max-width: 370px) {
    flex-direction: column-reverse;
    align-items: center;
    gap: 24px;
  }
`;
export const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  width: 562px;
  height: 56px;
  #copy {
    width: 305px;
    color: #bbc1cb;
    word-spacing: 0px;
  }
  span {
    word-spacing: 0px;
  }
  @media screen and (max-width: 370px) {
    width: 312px;
    height: 56px;
    margin-left: 8px;
    span {
      display: none;
    }
  }
`;

export const Text = styled.p`
  margin: 0px;
  width: 217px;
  height: 24px;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #ffffff;
  word-spacing: 8px;
`;

export const RightDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;
  width: 562px;
  height: 64px;
  margin-left: 34%;

  #realtorIcon {
    height: 32px;
    top: 16px;
    @media screen and (max-width: 370px){
      width: 123.3px;
      height: 22.59px;
      left: 10.59px;
      top: 11.29px;
    }
    
  }
  @media screen and (max-width: 370px) {
    align-items: center;
    gap: 24px;
    width: 312px;
    height: 45.18px;
  }
  img {
    width: 143.26px;
    height: 48px;
    position: relative;
    top: 8px;
    left: 30px;
  }
`;

export const Logo = styled.div`
  width: 204px;
  height: 64px;
  background: #ffffff;
  border-radius: 8px;
  @media screen and (max-width: 370px) {
    width: 144px;
    height: 45.18px;
    img {
      width: 123.3px;
      height: 22.59px;
      left: 10.59px;
      top: 11.29px;
    }
  }
`;
