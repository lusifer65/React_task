import styled from "styled-components";

export const CombineFooter = styled.div``;

export const TOP_FOOTER = styled.div`
  width: 100%;
  height: 585px;
  position:relative;
  top:427px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px 158px 32px;
  gap: 24px;
  box-sizing: border-box;
  background: #e9effb;
`;
export const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;
  width: 1124px;
  height: 24px;
  font-weight: 400;
  font-size: 18px;
  line-height: 134%;
  color: #11377C;
`;
export const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;
  width: 1124px;
  height: 481px;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;
  width: 263px;
  color: #11377c;
`;

export const InnerDiv = styled.ul`
  display: flex;
  width: ${(props) => props.Width || "263"}px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  list-style:none;
  margin:0px;
  #address{
    width:156px;
  }
  .manageWidth{
    margin-bottom:28px;
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

  .manageWidth{
    border:1px solid red;
  }
`;
