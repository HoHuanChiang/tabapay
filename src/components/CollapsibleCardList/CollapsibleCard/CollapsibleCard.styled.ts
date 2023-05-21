import styled from "styled-components";

interface CollapsibleCardStyledProps {
    isOpen: boolean;
}

export const StyledCardContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    overflow: hidden;
    border: 1px solid black;
    padding: 0 15px;
`;

export const StyledCardHeader = styled.div`
    height: 25px;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 10px 4px;
    font-weight: bold;
    position: relative;
    justify-content: space-between;
`;

export const StyledCardContentContainer = styled.div<CollapsibleCardStyledProps>`
    box-sizing: border-box;
    display: grid;
    grid-template-rows: ${(props) => (props.isOpen ? "1fr" : "0fr")};
    transition: grid-template-rows 0.3s ease;
    overflow: hidden;
    position: relative;

    &::before {
        content: "";
        height: 1px;
        background: black;
        position: absolute;
        top: 0;
        left: 0;
        width: ${(props) => (props.isOpen ? "100%" : "0")};
        transition: all 0.5s ease;
    }
`;

export const StyledCardExpandIcon = styled.div<CollapsibleCardStyledProps>`
    justify-self: flex-end;
    height: 23px;
    width: 23px;
    position: relative;

    &::before,
    &::after {
        content: "";
        position: absolute;
        transition: transform 0.2s ease;
        width: 100%;
        height: 2px;
        background: black;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        transform-origin: center;
    }

    &::before {
        transform: translateY(-50%)
            ${(props) => (props.isOpen ? "" : "rotate(90deg)")};
    }
`;

export const StyledCardContentInnerContainer = styled.div`
    overflow: hidden;
`;

export const StyledCardContent = styled.div`
    padding: 10px;
    box-sizing: border-box;
    overflow: hidden;
`;
