import styled from "styled-components";
import mobileBackground from '../assets/banner/backgroundMobile.png'
export const Banner = styled.section`
  background: url(${(props) => props.img});
  width: 100%;
  height: 780px;
  position: relative;
  box-sizing: border-box;
  color: white;
  @media screen and (max-width: 370px) {
    background:url(${mobileBackground});
    height: 683.74px;
    width: 360px;
  }
`;

export const Wapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;
  position: absolute;
  left: 9%;
  top: 204px;
  @media screen and (max-width: 370px) {
    margin:48px 0px 119px 24px;
    top:0px;
    left:0px;
   
    .card img {
      display: none;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;
  width: 630px;
  height: 308px;
  Button:hover {
    background: rgba(217, 220, 226, 1);
  }
  @media screen and (max-width: 370px) {
    gap:12px;
    height: 516px;
    width: 312px;
    left: 24px;
    top: 48px;
  }
`;

export const Heading = styled.p`
  font-family: Nunito;
  font-size: 60px;
  font-weight: 400;
  line-height: 72px;
  letter-spacing: 0px;
  text-align: left;
  @media screen and (max-width: 370px) {
    margin:0px 0px;
    width: 312px;
    height: 240px;
    font-weight: 400;
    font-size: 48px;
    line-height: 60px;
  }
`;

export const Subtitle = styled.span`
  font-family: Nunito;
  font-size: 24px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.5px;
  text-align: left;
  @media screen and (max-width: 370px) {
    width: 312px;
    height: 192px;
    font-size: 18px;
    line-height: 24px;
  }
`;

export const Button = styled.button`
  height: 48px;
  width: 170px;
  left: 0px;
  top: 0px;
  border-radius: 4px;
  padding: 12px 24px 12px 24px;
  @media screen and (max-width: 370px){
    margin-top:12px;
  }
`;
