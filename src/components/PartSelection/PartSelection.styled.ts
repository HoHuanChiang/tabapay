import styled from "styled-components";

export const StyledOuterContainer = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const StyledInnerContainer = styled.div`
    border: 10px solid var(--primaryColor1);
    padding: 40px;
    border-radius: 10px;
`;

export const StyledTitle = styled.div`
    font-weight: bold;
    margin-bottom: 20px;
    font-size: 20px;
`;

export const StyledLinkGroupContainer = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;

    a {
        text-decoration: none;
        color: black;
        width: 100%;
    }
`;

export const StyledLinkContainer = styled.div`
    width: 100%;
    padding: 10px;
    text-align: center;
    box-sizing: border-box;
    cursor: pointer;
    border: 2px solid var(--primaryColor1);
    margin: 4px 0;
    border-radius: 10px;
    transition: all 0.1s ease;

    &:hover {
        font-weight: bold;
        background: var(--primaryColor1);
        color: white;
    }
`;
