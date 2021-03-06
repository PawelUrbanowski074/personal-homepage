import styled from "styled-components";

export const ButtonLink = styled.a`
  text-decoration: none;
  padding: 12px 16px;
  background: ${({ theme }) => theme.color.buttonBackground};
  border: 1px solid ${({ theme }) => theme.color.buttonBorder};
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
  color: ${({ theme }) => theme.color.buttonText};
  font-weight: 600;
  font-size: 20px;
  transition: background 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.color.buttonBackgroundHover};
  }

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 18px;
  }
`;