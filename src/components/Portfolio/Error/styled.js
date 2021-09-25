import styled from "styled-components";
import { ReactComponent as ErrorIcon } from "../Icons/Danger.svg";

export const Wrapper = styled.div`
  text-align: center;
  margin-top: 64px;
  margin-bottom: 64px;
`;

export const DangerIcon = styled(ErrorIcon)`
  max-width: 48px;
  padding: 0px;
  margin: 0;
`;

export const Title = styled.h3`
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.05em;
  padding: 16px 0;
  margin: 0;
`;

export const Description = styled.p`
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.05em;
  max-width: 420px;
  margin: auto;
  padding: 16px 0;
`;

export const GHButton = styled.button`
  background: ${({ theme }) => theme.color.buttonBacground};
  border: 1px solid ${({ theme }) => theme.color.buttonText};
  border-radius: 4px;

  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.buttonText};
  padding: 12px 16px;
  margin-top: 16px;

`;