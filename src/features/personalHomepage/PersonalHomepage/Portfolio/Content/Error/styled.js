import styled from "styled-components";
import { ReactComponent as ErrorIcon } from "../../Icons/Danger.svg";

export const Wrapper = styled.article`
  text-align: center;
  margin-top: 96px;
  display: grid;
  justify-items: center;
  grid-gap: 32px;
  color: ${({ theme }) => theme.color.textPrimary};
`;

export const DangerIcon = styled(ErrorIcon)`
  max-width: 48px;
  padding: 0px;
  margin: 0;
`;

export const Title = styled.header`
  font-weight: 700;
  font-size: 24px;
`;

export const Description = styled.p`
  font-size: 20px;
  line-height: 140%;
  max-width: 410px; //?
  margin: 0;
`;