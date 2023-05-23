import styled from "styled-components";

interface MainContentHeaderStyledProps {
    imageBase64?: string;
}

export const StyledThumbnailContainer = styled.div<MainContentHeaderStyledProps>`
    width: 100%;
    height: 400px;
    background: ${(props) =>
        props.imageBase64 ? `url(${props.imageBase64})` : "none"};
    background-size: contain;
    background-position: top;
`;

export const StyledTitle = styled.div`
    width: 100%;
`;

export const StyledParagraph = styled.div`
    margin: 20px 0;
`;

export const StyledInfo = styled.div`
    margin: 5px 0;
    & > span:first-of-type {
        font-weight: bold;
        margin-right: 4px;
    }
`;

export const StyledImageSelectionContainer = styled.div`
    max-width: 600px;
    margin: 20px auto;
`;
