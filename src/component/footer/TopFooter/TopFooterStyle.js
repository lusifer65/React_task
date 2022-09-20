import styled from "styled-components";

export const TOP_FOOTER = styled.div`
  width: 100%;
  cursor: pointer;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px 158px;
  gap: 24px;
  box-sizing: border-box;
  background: #e9effb;
  @media screen and (max-width: 370px) {
    width: 342px;
    padding: 24px 25px 32px 24px;
    gap: 24px;
    height: 1387px;
  }
`;
export const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;
  width: 100%;
  height: 24px;
  font-weight: 400;
  font-size: 18px;
  line-height: 134%;
  color: #11377c;
  @media screen and (max-width: 370px) {
    width: 301px;
    position: relative;
    top:24px;
  }
`;
export const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;

  width: 1124px;
  height: 481px;
  @media screen and (max-width: 370px) {
    flex-direction: column;
    width: 300px;
  }
  #LogoCollection {
    @media screen and (max-width: 370px) {
      flex-direction: row;
      align-items: center;
      width: 288px;
      height: 48px;
      position: relative;
      top: 78em;
      bottom: -1px;
    }
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;
  width: 263px;
  color: #11377c;

  @media screen and (max-width: 370px) {
    padding: 0px;
  }
`;

export const InnerDiv = styled.ul`
  display: flex;
  width: ${(props) => props.Width || "263"}px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  list-style: none;
  margin: 0px;
  #address {
    width: 156px;
  }
  .manageWidth {
    margin-bottom: 28px;
  }
  @media screen and (max-width: 370px) {
    padding: 0px;
    margin-top: 12px;
  }
`;

export const Heading = styled.li`
  width: 169px;
  height: 24px;
  font-weight: 800;
  font-size: 18px;
  line-height: 134%;
  margin: 0px;
`;

export const ListItem = styled.li`
  width: 263px;
  margin: 0px;
  height: 24px;
  font-weight: 400;
  font-size: 18px;
  line-height: 164%;
  color: #11377c;
  white-space: no-wrap;
`;
