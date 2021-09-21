import styled from "styled-components";

export const Tiles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
`;

export const Tile = styled.div`
  background-color:  ${({ theme }) => theme.color.sectionBackground};
  border: 6px solid ${({ theme }) => theme.color.border};
  box-sizing: border-box;
  box-shadow: 0px -2px 50px ${({ theme }) => theme.color.shadowBorder2}, 
              0px 16px 58px ${({ theme }) => theme.color.shadowBorder3};
  border-radius: 4px;
  padding: 56px;
`;

export const TileTitle = styled.h3`
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  color: ${({ theme }) => theme.color.blueText};
  margin: 0 0 24px 0;
`;

export const TileBody = styled.p`
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.05em;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.color.secondaryText};
  text-align: justify;
  text-justify: inter-word;
  word-break: break-word;
`;

export const TileLink = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 8px;
  font-size: 18px;
  line-height: 25px;
`;

export const LinkDescription = styled.div`
  color: ${({ theme }) => theme.color.secondaryText};
`;

export const LinkHref = styled.a`
  color: ${({ theme }) => theme.color.blueText};
  font-size: 18px;
  line-height: 25px;
`;