import styled from "styled-components";

export const Tile = styled.div`
  max-width: 690px;
  margin-top: 120px;
`;

export const LetsTalk = styled.div`
  font-weight: bold;
  font-size: 12px;
  line-height: 130%;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.secondaryText};
  padding-bottom: 24px;
`;

export const Mail = styled.a`
  color: ${({ theme }) => theme.color.text};
  text-decoration: none;
  font-weight: 900;
  font-size: 32px;
  line-height: 39px;
  letter-spacing: 0.05em;
`;

export const Description = styled.div`
  margin-top: 24px;
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 0.05em;
`;

export const SocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 56px;
  padding: 0;
`;