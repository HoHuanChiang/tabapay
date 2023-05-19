import styled from "styled-components";

interface TreeItemStyledProps {
    isSelected?: boolean;
}

export const StyledOuterContainer = styled.div`
    height: 100vh;
    display: flex;
`;

export const StyledTreeNavContainer = styled.div`
    padding: 20px;
    box-sizing: border-box;
    width: 300px;
    border-right: 1px solid black;
`;

export const StyledRow = styled.div`
    margin: 10px 0;

    & > span {
        margin-right: 10px;
        font-weight: bold;
    }
`;

export const StyledTreeNameContainer = styled.div<TreeItemStyledProps>`
    font-weight: ${(props) => (props.isSelected ? "bold" : "normal")};
`;

export const StyledMainContentContainer = styled.div`
    box-sizing: border-box;
    padding: 20px;
    flex: 1;
`;
