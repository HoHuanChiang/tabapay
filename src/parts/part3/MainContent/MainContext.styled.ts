import styled from "styled-components";

export const StyledOuterContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledRow = styled.div`
    margin: 10px 0;

    & > span {
        margin-right: 10px;
        font-weight: bold;
    }
`;
