import styled from "styled-components";
import Background from "../assets/Testimonials/background.png";
export const MainDiv=styled.div`
height: 812px;
width: 100%;
position:relative;
top: 427px;
`;
export const Container = styled.div`
  width: 100%;
  height: 668px;
  background: url(${Background});
  margin: 73px 0px;
  position:absolute;
  top:1px;
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
  left: 228px;
  top: calc(50% - 468px / 2 + 0.33px);
`;

export const Heading = styled.p`
  width: 909px;
  padding: 0px;
  height: 60px;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 60px;
  margin: 0px 0px 24px 0px;
`;

export const CardRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;
  width: 984px;
  height: 384px;
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
