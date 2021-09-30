import styled, { css } from "styled-components";
import { ReactComponent as switchIcon } from "./Switcher.svg";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  color: ${({ theme }) => theme.color.secondaryText};
`;

export const Button = styled.button`
  cursor: pointer; 
  border: none;
  background: none;
  display: flex;
  align-items: center;
  color: inherit;
  outline-offset: 8px;
`;

export const Text = styled.span`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 12px; 
  margin-right: 12px;
`;

export const Switcher = styled.span`
  width: 48px;
  border-radius: 12px;
  border: 1px solid;
  padding: 3px;
  display: flex;
  background: ${({ theme }) => theme.color.switchBackground};
`;

export const IconWrapper = styled.span`
  display: flex;
  border-radius: 50%;
  background: currentColor;
  padding: 3px;
  ${({ moveToRight }) => moveToRight && css`
      transform: translateX(20px);
  `}
`;

export const Icon = styled(switchIcon)`
  color: ${({ theme }) => theme.color.switchIcons};
`;