import styled from "styled-components";
import { ReactComponent as BulletIcon } from "../../images/bullet.svg";

export const Section = styled.section`
  margin-top: 64px;
  background: ${({ theme }) => theme.color.sectionBackground};
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
  padding: 32px;
`;

export const Header = styled.h2`
  margin: 0;
  font-size: 30px;
  padding-bottom: 15px;
  border-bottom: 1px solid ${({ theme }) => theme.color.borderBottom};
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px 32px;
  margin: 32px 0 0;
  padding-left: 0; 
`;

export const Item = styled.li`
  font-size: 18px;
  color: ${({ theme }) => theme.color.secondaryText };
  list-style-type: none;
  /* display: flex; */
  /* align-items: center;
  flex-grow: 0;
  
  margin: 0 0 8px; */ 
`;

export const Bullet = styled(BulletIcon)`
  margin-right: 14px;
`;