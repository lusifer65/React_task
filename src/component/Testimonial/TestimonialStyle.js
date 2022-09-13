import styled from "styled-components";
import Background from "../assets/Testimonials/background.png";
import MobileBackground from "../assets/Testimonials/Skew.png";

export const MainDiv = styled.div`
  height: 706px;
  width: 100%;
  position: relative;
  top: 427px;
  @media screen and (max-width: 370px) {
    position: absolute;
    width: 349px;
    top: 310rem;
    background: #f9de89;
  }
`;
export const Container = styled.div`
  width: 100%;
  height: 668px;
  background: url(${Background});
  position: absolute;
  top: 1px;
  @media screen and (max-width: 370px) {
    background: url(${MobileBackground});
    height: auto;
  }
`;
export const Wraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;
  position: absolute;
  width: 984px;
  height: 468px;
  left: 13%;
  top: calc(50% - 468px / 2 + 0.33px);
  @media screen and (max-width: 370px) {
    top: 92px;
    left: 24px;
    width: 312px;
  }
`;

export const Heading = styled.p`
  width: 909px;
  padding: 0px;
  height: 60px;
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 60px;
  margin: 0px 0px 24px 0px;

  @media screen and (max-width: 370px) {
    width: 312px;
    height: 144px;
    font-size: 36px;
    line-height: 48px;
    margin: 0px;
  }
`;

export const CardRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;
  width: 984px;
  height: 384px;
  @media screen and (max-width: 370px) {
    width: 312px;
    height: 384px;
    #card2,
    #card3 {
      display: none;
    }
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 36px;
  width: 312px;
  height: 384px;
  background: #ffffff;
  border: 1px solid #eff1f3;
  border-radius: 12px;
  @media screen and (max-width: 370px) {
    padding: 24px;
    margin: 0px;
    gap: 24px;
    width: 312px;
    height: 384px;
    box-sizing: border-box;
  }
`;
export const CardData = styled.p`
  width: 264px;
  height: 192px;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  margin: 24px;
  margin-bottom: 0px;
  box-sizing: border-box;
  @media screen and (max-width: 370px) {
    width: 264px;
    height: 192px;
    margin: 0px;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 24px;
  padding: 0px;
  gap: 12px;
  width: 264px;
  height: 108px;
  img {
    height: 48px;
    width: 48px;
    left: 108px;
    top: 0px;
    border-radius: 0px;
  }
  @media screen {
    margin: 0px;
  }
`;
export const Name = styled.div`
  width: 275px;
  height: 24px;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 134%;
  text-align: center;
`;
export const Address = styled.div`
  width: 275px;
  height: 24px;

  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  text-align: center;
`;
export const Changer = styled.div`
  display: none;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;
  width: 72px;
  height: 24px;
  position: absolute;
  bottom: -26%;
  right: 22px;
  button {
    border: none;
    background-color: #f9de89;
    width: 24px;
    height: 24px;
    font-size: 24px;
    :nth-child(2) {
      color: white;
    }
  }
  @media screen and (max-width: 370px) {
    display: flex;
  }
`;
