import styled from "styled-components";

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;
  margin-top: 24px;
  list-style: none;
  padding: 0;
`;

export const Tile = styled.li`
  background:  ${({ theme }) => theme.color.boxBackground};
  border: 6px solid ${({ theme }) => theme.color.border};
  box-sizing: border-box;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
  padding: 56px;
  margin: 0;
  transition: border-color 0.3s;

  &:hover {
    border: 6px solid ${({ theme }) => theme.color.borderHover};
  }
`;

export const Title = styled.h3`
  font-size: 24px;
  line-height: 29px;
  color: ${({ theme }) => theme.color.ghBoxHeader};
  margin: 0;
  text-transform: uppercase;
`;

export const Description = styled.p`
  margin-top: 24px;
  line-height: 140%;
  color: ${({ theme }) => theme.color.secondaryText};
`;

export const Links = styled.dl`
  display: grid;
  grid-gap: 8px;
  line-height: 160%;
  margin: 24px 0 0 0;
  word-break: break-all;
`;

export const LinksRow = styled.div`
  display: grid;
  grid-template-columns: 4em 1fr;
`;

export const LinksValue = styled.dd`
  margin: 0;
`;


export const LinkHref = styled.a`
  color: ${({ theme }) => theme.color.scienceBlue};
  text-decoration: none;
  border-bottom: 1px solid ${({theme}) => theme.color.buttonBorder};
  padding-bottom: 1px;
  transition: 0.3s;
  &:hover {
    color: ${({ theme }) => theme.color.linkColorHover};
    border-color: unset;
  }
  &:visited {
    color: ${({ theme }) => theme.color.linkColor};
  }
`;