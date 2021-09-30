import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  list-style: none;
  padding: 0px;
  margin: 56px 0 50px 0;
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-right: 24px;
  }
`;

export const Link = styled.a`
  transition: color 0.3s;
  color: ${({ theme }) => theme.color.socialsColor};

  &:hover {
    color: ${({ theme }) => theme.color.socialsHover};
  }
`;

export const StyledIcon = Icon => styled(Icon)`
  height: auto;
`;