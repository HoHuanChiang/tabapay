import {
    StyledMainContentContainer,
    StyledMainFooterContainer,
    StyledMainHeaderContainer,
    StyledMainLayoutContainer,
    StyledMainNavigationContainer,
    StyledMiniHeader,
    StyledNavigationContentContainer,
} from "./MainLayout.styled";
import { Link } from "react-router-dom";

interface MainLayoutProps {
    showHeaderFooter?: boolean;
    mainContent?: JSX.Element;
    navContent?: JSX.Element;
    stickHeader?: boolean;
    stickFooter?: boolean;
}

const MainLayout = (props: MainLayoutProps) => {
    return (
        <StyledMainLayoutContainer>
            <StyledMainHeaderContainer
                showHeaderFooter={props.showHeaderFooter}
                stickHeader={props.stickHeader}
            >
                <Link to={"/"}>
                    <img src={require("../../images/logo.png")} alt={"Logo"} />
                </Link>
                <span>Take Home Project - TabaPay</span>
            </StyledMainHeaderContainer>
            <StyledMainNavigationContainer
                showHeaderFooter={props.showHeaderFooter}
                stickHeader={props.stickHeader}
            >
                <StyledMiniHeader>
                    <Link to={"/"}>
                        <img
                            src={require("../../images/logo.png")}
                            alt={"Logo"}
                        />
                    </Link>
                </StyledMiniHeader>
                <StyledNavigationContentContainer
                    showHeaderFooter={props.showHeaderFooter}
                >
                    {props.navContent}
                </StyledNavigationContentContainer>
            </StyledMainNavigationContainer>
            <StyledMainContentContainer
                showHeaderFooter={props.showHeaderFooter}
                stickFooter={props.stickFooter}
            >
                {props.mainContent}
            </StyledMainContentContainer>
            <StyledMainFooterContainer
                showHeaderFooter={props.showHeaderFooter}
                stickFooter={props.stickFooter}
            >
                <span>Ho-Huan (Lars) Chiang</span>
                <span>chianglars@gmail.com</span>
                <span>
                    <a
                        href={"https://hohuanchiang.github.io/portfolio"}
                        target={"_blank"}
                        rel={"noopener noreferrer"}
                    >
                        https://hohuanchiang.github.io/portfolio
                    </a>
                </span>
            </StyledMainFooterContainer>
        </StyledMainLayoutContainer>
    );
};

export default MainLayout;
