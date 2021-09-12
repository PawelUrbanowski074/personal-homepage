import styled from "styled-components";
import { ReactComponent as HireIcon } from "../../images/Message.svg";

export const Tile = styled.article`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 66px;
  align-items: center;
`;

export const Image = styled.img`
  border-radius: 50%;
`;

export const Hero = styled.div`

`;

export const ThisIs = styled.div`
  font-weight: bold;
  font-size: 12px;
  line-height: 130%;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.secondaryText};
  padding-bottom: 12px;
`;

export const Name = styled.div`
  font-weight: 900;
  font-size: 38px;
  line-height: 46px;
  letter-spacing: 0.05em;
  padding-bottom: 36px;
`;

export const Description = styled.p`
  font-size: 20px;
  line-height: 140%;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.secondaryText};
`;

export const HireMeButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  background: ${({ theme }) => theme.color.buttonBacground};
  border: 1px solid rgba(209, 213, 218, 0.3);
  box-sizing: border-box;
  border-radius: 4px;
  color: ${({ theme }) => theme.color.buttonText};
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.05em;
`;

export const HireMeIcon = styled(HireIcon)`
  margin-right: 16px; 
`;