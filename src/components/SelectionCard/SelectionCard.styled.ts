import styled from "styled-components";

interface SelectionCardStyledProps {
    isSelected: boolean;
}

export const StyledSelectionContainer = styled.div`
    display: flex;
    margin: 30px 0;
`;

export const StyledSelectionNavbar = styled.div`
    min-width: 300px;
`;

export const StyledSelectionNarbarItem = styled.div<SelectionCardStyledProps>`
    box-sizing: border-box;
    padding-left: 50px;
    align-items: center;
    cursor: pointer;
    font-weight: ${(props) => (props.isSelected ? "bold" : "normal")};
    border: 3px solid var(--primaryColor1);
    width: ${(props) => (props.isSelected ? "90%" : "80%")};
    position: relative;
    height: 50px;
    display: flex;
    align-items: center;
    overflow: hidden;
    background: ${(props) =>
        props.isSelected ? "var(--primaryColor4)" : "var(--primaryColor2)"};
    margin: 10px 0;
    margin-left: auto;
    border-left: none;
    border-right: none;
    color: white;
    transition: all 0.2s ease;

    &::before {
        box-sizing: border-box;
        content: "";
        background: ${(props) =>
            props.isSelected ? "var(--primaryColor5)" : "white"};
        position: absolute;
        top: 0;
        left: 0;
        width: 34px;
        height: 100%;
        z-index: 1;
        transform: rotate(45deg);
        transform-origin: top left;
        border: 3px solid var(--primaryColor1);
    }
`;

export const StyledSelectionNavbarItemDivider = styled.div`
    &::before,
    &::after {
        height: 100%;
        width: 2px;
        background: var(--primaryColor1);
        content: "";
        position: absolute;
        top: 0;
    }

    &::before {
        left: 36px;
    }

    &::after {
        left: 30px;
    }
`;

export const StyledSelectionContent = styled.div`
    flex: 1;
    display: flex;
    padding: 15px 10px;
    border: 2px solid var(--primaryColor1);
    border-radius: 10px;
    background: white;
`;
