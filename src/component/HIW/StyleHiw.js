import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 1728px;
  display:block;
  .divider{
    margin-bottom: -7px;
    width:100%;
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
  height: ${(props) => props.Height || "576"}px ;
  
`;

export const Heading = styled.p`
  width: 480px;
  height: ${(props) => props.Height || "48"}px ;
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 48px;
`;

export const Subtitle = styled.p`
  width: 480px;
  height: 48px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
`;
