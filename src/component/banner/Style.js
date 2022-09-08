import styled from "styled-components";
export const Banner = styled.section`
  background: url(${(props) => props.img});
  width: 100%;
  height: 780px;
  position: relative;
  color: white;
`;

export const Wapper = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
gap: 24px;
position: absolute;
left: 14%;
top: 204px;
`;

export const Content=styled.div`
display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;
  width: 630px;
  height: 308px;
`;

export const Heading=styled.p`
font-family: Nunito;
font-size: 60px;
font-weight: 200;
line-height: 72px;
letter-spacing: 0px;
text-align: left;
`;

export const Subtitle=styled.span`
font-family: Nunito;
font-size: 24px;
font-weight: 400;
line-height: 150%;
letter-spacing: 0.5px;
text-align: left;
`;

export const Button=styled.button`
height: 48px;
width: 170px;
left: 0px;
top: 0px;
border-radius: 4px;
padding: 12px 24px 12px 24px;
`;