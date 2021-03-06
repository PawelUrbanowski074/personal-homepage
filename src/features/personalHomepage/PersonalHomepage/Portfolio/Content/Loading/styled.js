import styled from "styled-components";
import { ReactComponent as Loading } from "../../Icons/icon-spinner.svg";

export const Wrapper = styled.div`
    text-align: center;
    margin-top: 88px;
    font-size: 20px;
    color: ${({ theme }) => theme.color.textPrimary};
    display: grid;
    justify-items: center;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
      font-size: 17px;
      margin-top: 32px;
    }
`;

export const LoadingIcon = styled(Loading)`
    margin-top: 48px;
    animation-name: rotate;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    color: ${({ theme }) => theme.color.spinnerColor};

    @keyframes rotate {
      to{
        transform: rotate(360deg);
      };
  };
  
    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
      margin-top: 32px;
      width: 60px;
    }
`;