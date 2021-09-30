import styled from "styled-components";
import { ReactComponent as GitHub } from "./Icons/github.svg";

export const Section = styled.section`
  margin-top: 72px;
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 24px;
`;

export const Subheader = styled.h2`
  font-weight: 900;
  font-size: 30px;
  line-height: 36px;
  letter-spacing: 0.05em;
  margin: 0;
`;

export const Paragraph = styled.h3`
  font-weight: normal;
  font-size: 20px;
  margin-top: 8px;
`;

export const GitHubIcon = styled(GitHub)`
  max-width: 40px;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.color.githubIcon};
`;