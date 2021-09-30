import { DangerIcon, Description, Title, Wrapper } from "./styled";
import { ButtonLink } from "../../../ButtonLink";
import { githubUsername } from "../../githubUsername";


const Error = () => (
  <Wrapper>
    <DangerIcon />
    <Title>Ooops! Something went&nbsp;wrong...</Title>
    <Description>Sorry, failed to load Github&nbsp;projects. You can check them directly&nbsp;on&nbsp;Github.</Description>
    <ButtonLink href={`https://github.com/${githubUsername}`} target="_blank">Go to GitHub</ButtonLink>
  </Wrapper>
);

export default Error;