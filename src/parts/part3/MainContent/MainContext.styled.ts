import styled from "styled-components";

export const StyledOuterContainer = styled.div`
    width: 100%;
    min-height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
`;

export const StyledRow = styled.div`
    margin: 10px 0;

    & > span {
        margin-right: 10px;
        font-weight: bold;
    }
`;
