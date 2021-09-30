import styled from "styled-components";
import { ReactComponent as HireIcon } from "./Message.svg";
import { ButtonLink } from "../ButtonLink";

export const Wrapper = styled.article`
  margin-top: -30px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 64px;
  align-items: center;
`;

export const Image = styled.img`
  width: 40vw;
  border-radius: 50%;
  max-width: 384px;
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
`;

export const Description = styled.p`
  font-size: 20px;
  line-height: 140%;
  margin: 36px 0 0 0;
  max-width: 650px;
  color: ${({ theme }) => theme.color.secondaryText};
`;

export const StyledButtonLink = styled(ButtonLink)`
  display: inline-flex;
  align-items: center;
  margin-top: 32px;
`;

export const HireMeIcon = styled(HireIcon)`
  margin-right: 16px; 
`;