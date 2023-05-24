import styled from "styled-components";

interface MainLayoutStyledProps {
    showHeaderFooter?: boolean;
}

export const StyledMainLayoutContainer = styled.div`
    width: 100%;
    height: 100%;
`;

export const StyledMainHeaderContainer = styled.div<MainLayoutStyledProps>`
    height: 60px;
    position: fixed;
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
    top: ${(props) => (props.showHeaderFooter ? "60px" : "0")};
    left: 0;
    height: ${(props) =>
        props.showHeaderFooter ? "calc(100vh - 120px)" : "100%"};
    width: 300px;
    padding: 15px;
    box-sizing: border-box;
    border-right: 1px solid black;
`;

export const StyledMainContentContainer = styled.div<MainLayoutStyledProps>`
    box-sizing: border-box;
    margin-top: ${(props) => (props.showHeaderFooter ? "60px" : "0")};
    margin-left: 300px;
    min-height: ${(props) =>
        props.showHeaderFooter ? "calc(100vh - 120px)" : "100vh"};
    position: relative;
    margin-bottom: ${(props) => (props.showHeaderFooter ? "60px" : "0")};
`;

export const StyledMainFooterContainer = styled.div<MainLayoutStyledProps>`
    position: fixed;
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
