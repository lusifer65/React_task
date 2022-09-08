import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: 128px;
  position: relative;
  top: 427px;
  background: #11377c;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 32px 158px;

  box-sizing: border-box;
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
`;
