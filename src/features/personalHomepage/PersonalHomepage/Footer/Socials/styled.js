import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  list-style: none;
  padding: 0px;
  margin: 56px 0 50px 0;

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 40px;
  }
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-right: 24px;
  }

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-right: 16px;
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

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 32px;
  }
`;