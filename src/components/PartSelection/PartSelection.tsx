import { Path } from "../../App";
import {
    StyledInnerContainer,
    StyledLinkContainer,
    StyledLinkGroupContainer,
    StyledOuterContainer,
    StyledTitle,
} from "./PartSelection.styled";
import { Link } from "react-router-dom";

const PartSelection = () => {
    return (
        <StyledOuterContainer>
            <StyledInnerContainer>
                <StyledTitle>Take Home Project - TabaPay</StyledTitle>
                <StyledLinkGroupContainer>
                    <Link to={Path.Part1}>
                        <StyledLinkContainer>Part 1</StyledLinkContainer>
                    </Link>
                    <Link to={Path.Part2}>
                        <StyledLinkContainer>Part 2</StyledLinkContainer>
                    </Link>
                    <Link to={Path.Part3}>
                        <StyledLinkContainer>Part 3</StyledLinkContainer>
                    </Link>
                    <Link to={Path.Part4}>
                        <StyledLinkContainer>Part 4</StyledLinkContainer>
                    </Link>
                    <Link to={Path.Part5}>
                        <StyledLinkContainer>Part 5</StyledLinkContainer>
                    </Link>
                    <Link to={Path.Part6}>
                        <StyledLinkContainer>Part 6</StyledLinkContainer>
                    </Link>
                </StyledLinkGroupContainer>
            </StyledInnerContainer>
        </StyledOuterContainer>
    );
};

export default PartSelection;
