import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 0px 0px 165px;
  width: 100%;
  height: 264px;
  box-sizing: border-box;
  @media screen and (max-width: 370px) {
    width: 349px;
    height: 420px;
    position: relative;
    padding: 0px 0px 0px 24px;
  }
`;
export const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 72px 0px;
  gap: 24px;
  width: 984px;
  height: 264px;
  @media screen and (max-width: 370px) {
    padding: 0px;
    width: 312px;
    height: 172px;
  }
`;
export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;
  width: 480px;
  height: 120px;
  @media screen and (max-width: 360px) {
    width: 312px;
    height: 172px;
    margin-top: 40px;
  }
`;
export const Heading = styled.p`
  width: 480px;
  height: 60px;
  margin: 0px;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 60px;
  @media screen and (max-width: 370px) {
    width: 312px;
    height: 96px;
    font-size: 36px;
    line-height: 48px;
  }
`;
export const SubHeading = styled.p`
  width: 480px;
  height: 48px;
  margin: 0px;

  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 48px;
  @media screen and (max-width: 370px) {
    width: 312px;
    height: 36px;
    font-size: 24px;
    line-height: 36px;
    letter-spacing: 0.5px;
  }
`;
export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;
  margin: 0px;
  width: 480px;
  height: 112px;
  @media screen and (max-width: 370px) {
    width: 312px;
    position: absolute;
    height: 172px;
    left: 24px;
    bottom: 40px;
  }
`;
export const InputTab = styled.div`
  width: 480px;
  height: 80px;
  margin: 0px;
  @media screen and (max-width: 370px) {
    width: 312px;
  }
  input {
    box-sizing: border-box;
    background: #ffffff;
    border: 2px solid #eff1f3;
    border-radius: 4px;
    height: 80px;
    width: 480px;
    left: 0px;
    top: 0px;
    border-radius: 4px;
    @media screen and (max-width: 370px) {
      width: 312px;
      height: 80px;
    }
  }
  Button {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 24px;
    gap: 6px;
    position: relative;
    width: 158px;
    left: calc(50% - 158px / 2 + 152px);
    top: -85.29%;
    margin: 5px 0px;
    background: #11377c;
    border: 2px solid #11377c;
    border-radius: 4px;
    color: white;
    text-transform: uppercase;
    :hover {
      background: rgba(13, 44, 98, 1);
    }
    @media screen and (max-width: 370px) {
      width: 312px;
      left: 1px;
      top: 64px;
      height: 48px;
    }
  }
  input {
    font-weight: 400;
    font-size: 18px;
    line-height: 134%;
    padding-left: 22px;
    ::placeholder {
      position: absolute;
      width: 45px;
      height: 24px;
      left: 24px;
      top: 28px;
      font-weight: 400;
      font-size: 18px;
      line-height: 134%;
      color: #7d899c;
    }
  }
`;
export const Subtitle = styled.div`
  margin: 0px;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  strong {
    box-shadow: inset 0px -5px 1px #80cfbd;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    margin-left: 5px;
    :hover {
      box-shadow: inset 0px -5px 1px #80cfbd;
      cursor: pointer;
      color: rgba(13, 44, 98, 1);
    }
  }
  @media screen and (max-width: 370px) {
    position: relative;
    bottom: -24px;
    left: 4px;
  }
`;
