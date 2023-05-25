import styled from "styled-components";

interface ImageSelectionStyledProps {
    isSelected: boolean;
}

export const StyledImageSelectionContainer = styled.div`
    height: 300px;
    display: flex;
    position: relative;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
`;

export const StyledImageNavbar = styled.div`
    width: 160px;
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    padding-right: 10px;

    /* width */
    ::-webkit-scrollbar {
        width: 5px;
        border-radius: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: var(--primaryColor3);
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: var(--primaryColor1);
    }
`;

export const StyledImageContentContainer = styled.div`
    width: 500px;
`;

export const StyledCompressedImage = styled.img<ImageSelectionStyledProps>`
    width: 100%;
    height: 110px;
    cursor: pointer;
    object-fit: stretch;
    border: ${(props) =>
        props.isSelected ? "3px solid var(--primaryColor1)" : "none"};
    box-sizing: border-box;
    object-fit: cover;
`;

export const StyledDisplayImage = styled.img`
    width: 100%;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
    object-fit: contain;
`;
