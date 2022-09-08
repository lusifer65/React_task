import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  margin: 72px auto 144px 158px;
  gap: 24px;
  width: 1124px;
  height: 1044px;
  #midile {
    justify-content: center;
    align-items: center;
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
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;
  width: 358.67px;
  height: 336px;
`;

export const Heading = styled.p`
  width: 312px;
  height: 36px;
  margin:0px;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: 0.5px;
`;
export const Subtitle = styled.p`
  width: 312px;
  height: 120px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 134%;
`;
export const TextLink = styled.p`
  box-shadow: inset 0px -5px 1px #80cfbd;
  cursor: pointer;
  height: 24px;
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 134%;
`;
