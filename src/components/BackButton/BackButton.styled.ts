import styled from "styled-components";

export const BackButtonContainer = styled.div`
    width: 100px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &::before {
        content: "<<";
        margin-right: 10px;
        transition: all 0.2s ease;
    }

    &:hover::before {
        letter-spacing: 5px;
    }
`;
