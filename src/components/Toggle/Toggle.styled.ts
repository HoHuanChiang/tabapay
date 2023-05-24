import styled from "styled-components";

interface ToggleStyledProps {
    isOpen: boolean;
}

export const StyledToggleContainer = styled.div`
    border-radius: 20px;
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
`;

export const StyledLabelName = styled.div`
    font-weight: bold;
    margin-right: 10px;

    &::after {
        content: ":";
    }
`;

export const StyledTrack = styled.div<ToggleStyledProps>`
    height: 45x;
    width: 60px;
    border-radius: 20px;
    background: ${(props) => (props.isOpen ? "green" : "red")};
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 4px;
    transition: all 0.2s ease;
`;

export const StyledInnerTrack = styled.div<ToggleStyledProps>`
    height: 100%;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    box-sizing: border-box;
    transition: all 0.2s ease;
    flex: ${(props) => (props.isOpen ? "1" : "none")};
`;

export const StyledInnerCircleContainer = styled.div<ToggleStyledProps>`
    height: 20px;
    width: 20px;
    background: white;
    box-sizing: border-box;
    border-radius: 20px;
    transition: all 0.2s ease;
    transition: all 0.2s ease;
`;
