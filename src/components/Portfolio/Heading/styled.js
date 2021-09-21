import styled from "styled-components";
import { ReactComponent as GitHub } from "../Icons/github.svg";

export const Wrapper = styled.div`
  text-align: center;
  margin-bottom: 24px;
`;

export const Header = styled.h2`
  font-weight: 900;
  font-size: 30px;
  line-height: 36px;
  letter-spacing: 0.05em;
  margin: 0;
`;

export const Paragraph = styled.p`
  font-size: 20px;
  line-height: 140%;
  letter-spacing: 0.05em;
  margin: 0;
`;

export const GitHubIcon = styled(GitHub)`
  max-width: 40px;
  margin-bottom: 12px;
`;