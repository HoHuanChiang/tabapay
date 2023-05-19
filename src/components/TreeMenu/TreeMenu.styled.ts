import styled from "styled-components";

export interface TreeMenuBaseStyledProps {
    isExpand: boolean;
}

interface TreeItemStyledProps {
    isSelected?: boolean;
}

export interface TreeMenuIconProps {
    iconContent: string;
    isExpand: boolean;
    expandOnRotate?: boolean;
}

export const StyledSubFolderContainer = styled.div<TreeMenuBaseStyledProps>`
    transition: all 0.2s ease;
    display: grid;
    overflow: hidden;
    grid-template-rows: ${(props) => (props.isExpand ? "1" : "0")}fr;
    margin-left: 30px;

    & > div {
        overflow: hidden;
    }
`;

export const StyledTreeRow = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export const StyledArrow = styled.div<TreeMenuIconProps>`
    width: 25px;
    height: 25px;
    color: black;
    font-size: 20px;
    display: flex;
    align-items: center;
    margin-right: 5px;

    &::before {
        content: "${(props) => props.iconContent}";
        transform: rotate(
            ${(props) =>
                props.isExpand && props.expandOnRotate ? "90" : "0"}deg
        );
        transition: transform 0.2s ease;
    }
`;

export const StyledTreeNameContainer = styled.div<TreeItemStyledProps>`
    font-weight: ${(props) => (props.isSelected ? "bold" : "normal")};
`;
