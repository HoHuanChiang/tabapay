import React from "react";
import {
    StyledLinkContainer,
    StyledLinkGroupContainer,
    StyledOuterContainer,
    StyledTitle,
} from "./PartSelection.styled";
import { Link } from "react-router-dom";

const PartSelection = () => {
    return (
        <StyledOuterContainer>
            <StyledTitle>Take Home Project - TabaPay</StyledTitle>
            <StyledLinkGroupContainer>
                <Link to="/part1">
                    <StyledLinkContainer>Part 1</StyledLinkContainer>
                </Link>
                <Link to="/part2">
                    <StyledLinkContainer>Part 2</StyledLinkContainer>
                </Link>
                <Link to="/part3">
                    <StyledLinkContainer>Part 3</StyledLinkContainer>
                </Link>
                <Link to="/part4">
                    <StyledLinkContainer>Part 4</StyledLinkContainer>
                </Link>
                <Link to="/part5">
                    <StyledLinkContainer>Part 5</StyledLinkContainer>
                </Link>
                <Link to="/part6">
                    <StyledLinkContainer>Part 6</StyledLinkContainer>
                </Link>
            </StyledLinkGroupContainer>
        </StyledOuterContainer>
    );
};

export default PartSelection;
