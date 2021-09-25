import { DangerIcon, Description, GHButton, Title, Wrapper } from "./styled";


const Error = () => (
  <Wrapper>
    <DangerIcon />
    <Title>Ooops! Something went wrong...</Title>
    <Description>Sorry, failed to load Github projects. You can check them directly on Github.</Description>
    <GHButton>Go to GitHub</GHButton>
  </Wrapper>
);

export default Error;