import styled from "styled-components";

export const StyledTitle = styled.div`
    width: 100%;
    text-align: center;
    font-size: 30px;
    font-weight: bold;
`;

export const StyledParagraph = styled.div`
    margin: 20px 0;
`;

export const StyledInfo = styled.div`
    margin: 5px 0;
    & > span:first-of-type {
        font-weight: bold;
        margin-right: 4px;
    }
`;

export const StyledCustomCardContentContainer = styled.div`
    padding: 0 10px;
`;

export const StyledImageSelectionContainer = styled.div`
    margin: 60px auto;
    display: flex;
    justify-content: center;
`;

export const StyledSelectionCardContainer = styled.div`
    width: 90%;
    padding: 30px 0;
`;

export const StyledDivider = styled.div`
    width: 100%;
    height: 2px;
    background: var(--primaryColor1);
    margin-bottom: 30px;
`;
