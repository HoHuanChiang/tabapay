import styled from "styled-components";

export const StyledOuterContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
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

    & > a:not(:last-of-type) {
        border-bottom: 1px solid black;
    }
`;

export const StyledLinkContainer = styled.div`
    width: 100%;
    padding: 10px;
    text-align: center;
    box-sizing: border-box;
    cursor: pointer;

    &:hover {
        font-weight: bold;
    }
`;
