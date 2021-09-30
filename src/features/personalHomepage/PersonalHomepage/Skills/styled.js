import styled from "styled-components";
import { ReactComponent as BulletIcon } from "./bullet.svg";

export const Section = styled.section`
  margin-top: 72px;
  background: ${({ theme }) => theme.color.boxBackground};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
  padding: 32px;
`;

export const Header = styled.h2`
  margin: 0;
  font-size: 30px;
  font-weight: 900;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.color.headerBorderBottom};
  color: ${({ theme }) => theme.color.textPrimary};
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 8px 32px;
  margin: 32px 0 0 0;
  padding: 0; 
  list-style: none;
`;

export const Item = styled.li`
color: ${({ theme }) => theme.color.secondaryText };
line-height: 140%;
  /* display: flex; */
`;

export const Bullet = styled(BulletIcon)`
  margin-right: 16px;
  height: auto;
  color: ${({ theme }) => theme.color.boxBullet };
`;