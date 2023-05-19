import React from "react";
import {
    StyledMainContentContainer,
    StyledMainFooterContainer,
    StyledMainHeaderContainer,
    StyledMainLayoutContainer,
    StyledMainNavigationContainer,
} from "./MainLayout.styled";

interface MainLayoutProps {
    showHeaderFooter?: boolean;
    mainContent: JSX.Element;
    navContent: JSX.Element;
}

const MainLayout = (props: MainLayoutProps) => {
    return (
        <StyledMainLayoutContainer>
            <StyledMainHeaderContainer
                showHeaderFooter={props.showHeaderFooter}
            ></StyledMainHeaderContainer>
            <StyledMainNavigationContainer
                showHeaderFooter={props.showHeaderFooter}
            >
                {props.navContent}
            </StyledMainNavigationContainer>
            <StyledMainContentContainer
                showHeaderFooter={props.showHeaderFooter}
            >
                {props.mainContent}
            </StyledMainContentContainer>
            <StyledMainFooterContainer
                showHeaderFooter={props.showHeaderFooter}
            ></StyledMainFooterContainer>
        </StyledMainLayoutContainer>
    );
};

export default MainLayout;
