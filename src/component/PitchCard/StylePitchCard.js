import styled from "styled-components";

export const Container = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  margin: 72px auto 144px 100px;
  gap: 24px;
  width: 1124px;
  height: 1044px;
  #midile {
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 370px) {
    width: 85vw;
    margin: 0px 24px;
    height: 1044px;
    
  }
`;
export const Frame = styled.section`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;
  margin-bottom: 24px;
  width: 1124px;
  height: 348px;
  @media screen and (max-width: 370px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 24px;
    width: 312px;
    height: 2244px;
  }
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;
  width: 358.67px;
  height: 336px;
  img {
    width: 96px;
    height: 96px;
  }
  @media screen and (max-width: 370px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 12px;
    width: 312px;
    height: auto;
    margin-top: 12px;
  }
`;

export const Heading = styled.p`
  width: 312px;
  height: 36px;
  margin: 0px;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: 0.5px;
  @media screen and (max-width: 370px) {
    font-size: 18px;
    font-weight: 800;
  }
`;
export const Subtitle = styled.p`
  width: 312px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 134%;
  @media screen and (max-width: 370px) {
    margin: 0px;
  }
`;
export const TextLink = styled.p`
  box-shadow: inset 0px -5px 1px #80cfbd;
  height: 24px;
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 134%;
  margin-top: 0px;
  :hover {
    box-shadow: inset 0px -5px 1px #80cfbd;
    cursor: pointer;
    color: rgba(13, 44, 98, 1);
  }
  @media screen and (max-width: 370px) {
    position: relative;
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    box-sizing: border-box;
    margin-bottom:12px;
  }
`;
