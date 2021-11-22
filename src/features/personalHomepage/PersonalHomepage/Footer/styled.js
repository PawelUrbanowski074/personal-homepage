import styled from "styled-components";

export const Wrapper = styled.footer`
  margin-top: 120px;

  @media(max-width: ${({theme}) => theme.breakpoint.mobileMax}px ){
    margin-top: 48px;
  }
`;

export const LetsTalk = styled.h2`
  font-size: 12px;
  line-height: 130%;
  text-transform: uppercase;
  letter-spacing: initial;
  color: ${({ theme }) => theme.color.secondaryText};
  margin: 0 0 24px 0;

  @media(max-width: ${({theme}) => theme.breakpoint.mobileMax}px ){
    margin: 0 0 16px 0;
  }
`;

export const Mail = styled.a`
  color: ${({ theme }) => theme.color.textPrimary};
  text-decoration: none;
  font-weight: 900;
  font-size: 32px;
  letter-spacing: 0.05em;
  transition:  0.3s;

  &:hover {
    color: ${({ theme }) => theme.color.textPrimaryHover};
  }

  @media(max-width: ${({theme}) => theme.breakpoint.mobileMax}px ){
    font-size: 22px;
  }
`;

export const Description = styled.p`
  max-width: 670px;
  font-size: 18px;
  line-height: 140%;
  margin: 24px 0 0 0;
  color: ${({ theme }) => theme.color.textPrimary};

  @media(max-width: ${({theme}) => theme.breakpoint.mobileMax}px ){
    font-size: 14px;
  }
`;