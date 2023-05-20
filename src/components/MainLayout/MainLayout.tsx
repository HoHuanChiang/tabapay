import React from "react";
import {
    StyledMainContentContainer,
    StyledMainFooterContainer,
    StyledMainHeaderContainer,
    StyledMainLayoutContainer,
    StyledMainNavigationContainer,
} from "./MainLayout.styled";
import { Link } from "react-router-dom";

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
            >
                <Link to={"/"}>
                    <img src={require("../../images/logo.png")} />
                </Link>
                <span>Take Home Project - TabaPay</span>
            </StyledMainHeaderContainer>
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
            >
                <span>Ho-Huan (Lars) Chiang</span>
                <span>chianglars@gmail.com</span>
                <span>
                    <a
                        href={"https://hohuanchiang.github.io/portfolio"}
                        target={"_blank"}
                    >
                        https://hohuanchiang.github.io/portfolio
                    </a>
                </span>
            </StyledMainFooterContainer>
        </StyledMainLayoutContainer>
    );
};

export default MainLayout;
