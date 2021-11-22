import styled from "styled-components";
import { ReactComponent as HireIcon } from "./Message.svg";
import { ButtonLink } from "../ButtonLink";

export const Wrapper = styled.article`
  margin-top: -30px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 64px;
  align-items: center;

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-gap: 12px;
    grid-template-columns: 1fr;
  }
`;

export const Image = styled.img` 
  width: 30vw;
  border-radius: 50%;
  max-width: 384px;

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 132px;
  }
`; 

export const ThisIs = styled.div`
  font-weight: bold;
  font-size: 12px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.secondaryText};
`;

export const Name = styled.h1`
  font-weight: 900;
  font-size: 38px;
  line-height: 46px;
  margin: 12px 0 0 0;
  color: ${({ theme }) => theme.color.textPrimary};

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 22px;
    margin-top: 8px;
  }
`;

export const Description = styled.p`
  font-size: 20px;
  line-height: 140%;
  margin: 36px 0 0 0;
  max-width: 650px;
  color: ${({ theme }) => theme.color.secondaryText};

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 16px;
    font-size: 16px;
    max-width: 570px;
  }
`;

export const StyledButtonLink = styled(ButtonLink)`
  display: inline-flex;
  align-items: center;
  margin-top: 32px;

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 24px;
  }
`;

export const HireMeIcon = styled(HireIcon)`
  margin-right: 16px; 
`;