import styled from "styled-components";

export const Head = styled.header`
  width: 100%;
  height: 96px;
  display: flex;

  #logo {
    height: 48px;
    width: 194px;
    align-self: center;
    margin-left: 17px;
  }
`;

export const NavData = styled.ul`
  list-style: none;
  display: flex;
  align-self: center;
  align-content: right;
  margin-left: 3%;
  position: absolute;
  right: 20px;
  li {
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.5px;
    text-align: center;
    color: rgba(13, 44, 98, 1);
    padding: 12px;
  }
`;

export const DropDown = styled.select`
  border: none;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.5px;
  text-align: center;
  background: rgba(239, 241, 243, 1);
  color: rgba(13, 44, 98, 1);
  padding: 12px;
`;

export const HeaderLogo = styled.div`
height: 96px;
width: 264px;
img{
  padding:24px;
}
`;
