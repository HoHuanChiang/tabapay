import styled from "styled-components";

interface MainLayoutStyledProps {
    showHeaderFooter?: boolean;
    stickHeader?: boolean;
    stickFooter?: boolean;
}

export const StyledMainLayoutContainer = styled.div`
    width: 100%;
    height: 100%;
`;

export const StyledMainHeaderContainer = styled.div<MainLayoutStyledProps>`
    height: 60px;
    position: ${(props) => (props.stickHeader ? "fixed" : "absolute")};
    top: 0;
    left: 0;
    width: 100%;
    display: ${(props) => (props.showHeaderFooter ? "flex" : "none")};
    align-items: center;
    justify-content: center;
    background: var(--primaryColor5);
    color: white;
    z-index: 2;

    img {
        height: 100%;
        object-fit: contain;
        cursor: pointer;
        position: absolute;
        top: 0;
        left: 20px;
    }

    span {
        font-weight: bold;
        font-size: 20px;
    }
`;

export const StyledMainNavigationContainer = styled.div<MainLayoutStyledProps>`
    position: fixed;
    top: 0;
    left: 0;
    width: 300px;
    height: 100%;
    box-sizing: border-box;
    border-right: 1px solid black;
`;

export const StyledNavigationContentContainer = styled.div`
    padding: 15px;
`;

export const StyledMainContentContainer = styled.div<MainLayoutStyledProps>`
    box-sizing: border-box;
    margin-top: ${(props) => (props.showHeaderFooter ? "60px" : "0")};
    margin-left: 300px;
    min-height: ${(props) =>
        props.showHeaderFooter ? "calc(100vh - 120px)" : "100vh"};
    position: relative;
    margin-bottom: ${(props) =>
        props.showHeaderFooter && props.stickFooter ? "60px" : "0"};
    overflow: auto;
`;

export const StyledMainFooterContainer = styled.div<MainLayoutStyledProps>`
    position: ${(props) => (props.stickFooter ? "fixed" : "relative")};
    bottom: 0;
    left: 0;
    height: 60px;
    width: 100%;
    display: ${(props) => (props.showHeaderFooter ? "flex" : "none")};
    border-top: 1px solid black;
    align-items: center;
    justify-content: center;
    color: white;
    background: var(--primaryColor5);
    z-index: 2;
    box-sizing: border-box;

    &>span: first-of-type {
        font-weight: bold;
    }

    & > span {
        margin: 0 20px;
    }

    a {
        color: white;
    }
`;

export const StyledMiniHeader = styled.div`
    background: var(--primaryColor5);
    height: 60px;
    position: relative;

    img {
        height: 100%;
        object-fit: contain;
        cursor: pointer;
        position: absolute;
        top: 0;
        left: 20px;
    }
`;
