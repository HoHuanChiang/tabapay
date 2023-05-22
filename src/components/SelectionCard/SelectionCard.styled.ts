import styled from "styled-components";

interface SelectionCardStyledProps {
    isSelected: boolean;
}

export const StyledSelectionContainer = styled.div`
    display: flex;
    height: 700px;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
`;

export const StyledSelectionNavbar = styled.div`
    width: 200px;
    border-right: 1px solid black;
`;

export const StyledSelectionNarbarItem = styled.div<SelectionCardStyledProps>`
    padding: 15px 10px;
    display: flex;
    align-items: center;
    cursor: pointer;
    border-bottom: 1px solid black;
    font-weight: ${(props) => (props.isSelected ? "bold" : "normal")};
`;

export const StyledSelectionContent = styled.div`
    flex: 1;
    display: flex;
    padding: 15px 10px;
`;
