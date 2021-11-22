import styled from "styled-components";

export const Container = styled.div`
    max-width: 1216px;
    margin: auto;
    padding-top: 100px;
    

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px ){
        padding: 8px;
    }
`;