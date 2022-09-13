import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 1728px;
  position: initial;
  display: block;
  .divider {
    margin-bottom: -7px;
    width: 100%;
    position: inherit;
    @media screen and (max-width:370px){
      position: relative;
        top: -1px;  
    }
  }
  .divider2 {
    @media screen and (max-width:370px){
      position: relative;
        top: -5px;  
    }
  }
  @media screen and (max-width: 370px){
    height: 1470px;
    position: absolute;
    top:209em;

  }
`;
export const Item = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 72px 0px;
  gap: 24px;
  background: ${(props) => props.color || "#EFF1F3"};
  width: 100%;
  height: ${(props) => props.Height || "576"}px;
  @media screen and (max-width: 370px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    width: 100%;
    gap: 12px;
    img {
      width: 312px;
      margin-left:24px;
      height: 234px;
    }
    div {
      margin: 0px 24px;
    }
  }
`;

export const Heading = styled.p`
  width: 480px;
  height: ${(props) => props.Height || "48"}px;
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 48px;
  @media screen and (max-width: 370px) {
    width: 312px;
    height: 72px;
    font-weight: 400;
    font-size: 24px;
    margin: 24px 0px;

    line-height: 36px;
    letter-spacing: 0.5px;
    margin: 0px;
  }
`;

export const Subtitle = styled.p`
  width: 480px;
  height: 48px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  @media screen and (max-width: 370px) {
    width: 312px;
    height: 72px;
    font-size: 16px;
    line-height: 150%;
    margin: 0px 0px;
  }
`;
