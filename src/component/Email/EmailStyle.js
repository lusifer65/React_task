import styled from "styled-components";

export const Main=styled.div`
position:relative;
top: 427px;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 0px 0px 228px;
  width: 100%;
  height: 264px;
  box-sizing:border-box;
`;
export const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 72px 0px;
  gap: 24px;
  width: 984px;
  height: 264px;
`;
export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;

  width: 480px;
  height: 120px;
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
`;
export const InputTab = styled.div`
  width: 480px;
  height: 80px;
  margin: 0px;
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
  }
  Button {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 24px;
    gap: 6px;
    position: absolute;
    width: 158px;
    left: calc(71% - 158px / 2 + 152px);
    top: 33.29%;
    margin: 5px 0px;
    background: #11377c;
    border: 2px solid #11377c;
    border-radius: 4px;
    color: white;
    text-transform: uppercase;
  }
  input::placeholder {
    position: absolute;
    width: 45px;
    height: 24px;
    left: 24px;
    top: 24px;
    font-weight: 400;
    font-size: 18px;
    line-height: 134%;
    color: #7d899c;
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
  }
`;
