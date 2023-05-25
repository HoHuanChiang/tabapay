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

export const StyledMainNoDataContainer = styled.div`
    min-height: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 18px;
`;

export const StyledErrorContainer = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0 20px;
    background: var(--modal-error-color);
    font-weight: bold;
`;
