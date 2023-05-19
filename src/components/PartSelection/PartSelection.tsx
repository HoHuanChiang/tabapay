import React from "react";
import {
    StyledLinkContainer,
    StyledLinkGroupContainer,
    StyledOuterContainer,
} from "./PartSelection.styled";
import { Link } from "react-router-dom";

const PartSelection = () => {
    return (
        <StyledOuterContainer>
            <StyledLinkGroupContainer>
                <Link to="/part1">
                    <StyledLinkContainer>Part 1</StyledLinkContainer>
                </Link>
                <Link to="/part2">
                    <StyledLinkContainer>Part 2</StyledLinkContainer>
                </Link>
            </StyledLinkGroupContainer>
        </StyledOuterContainer>
    );
};

export default PartSelection;
