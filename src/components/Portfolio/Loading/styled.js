import styled from "styled-components";
import { ReactComponent as Loading } from "../Icons/icon-spinner.svg";

export const Wrapper = styled.div`
    text-align: center;
    margin-top: 64px;
`;

export const Wait = styled.p`
    font-size: 20px;
    line-height: 25px;
`;

export const LoadingIcon = styled(Loading)`
    margin-top: 48px;
    max-width: 160px;
    max-height: 160px;

    animation-name: rotate;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    @keyframes rotate {
      from{
        transform: rotate(0deg);
      };
      to{
        transform: rotate(360deg);
      };
  };

`;

