import { Wrapper, LoadingIcon, Wait } from "./styled";


const Loading = () => (
  <Wrapper>
    <Wait>Please wait, projects are being loaded...</Wait>
    <LoadingIcon />
  </Wrapper>
);

export default Loading;