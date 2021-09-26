import styled, { css } from "styled-components";
import { ReactComponent as switchIcon } from "../../images/Switcher.svg";

export const Section = styled.section`
  display: flex;
  flex-direction: row-reverse;
`;

export const Button = styled.button`
  border: none;
  background: inherit;
  position: absolute;
  padding: 0;
  display: flex;
  align-items: center;
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.color.secondaryText};
  text-transform: uppercase;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  padding: 5px 0;
`;

export const Switcher = styled.span`
  width: 46px;
  height: 24px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.switchBackground};
  margin: 0 0 0 12px;
  padding: 3px;
  display: flex;
  align-items: center;
`;

export const IconWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: ${({ theme }) => theme.color.switchIcons};
  width: 20px;
  height: 20px;

  ${({ moveToRight }) => moveToRight && css`
      transform: translateX(20px);
  `}
`;

export const Icon = styled(switchIcon)`
  color: ${({ theme }) => theme.color.switchIcons};
`;