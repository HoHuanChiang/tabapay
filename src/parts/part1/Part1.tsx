import React from "react";
import TreeMenu from "../../components/TreeMenu/TreeMenu";
import { TREE_MOCK_DATA } from "../../components/TreeMenu/TreeMenu.util";
import { StyledPartTitle } from "../../index.styled";
import {
    StyledPartInnerContainer,
    StyledPartOuterContainer,
    TreeMenuContainer,
} from "./Part1.styled";
import Toggle from "../../components/Toggle/Toggle";
import BackButton from "../../components/BackButton/BackButton";

const Part1 = () => {
    const [collapseSibing, setCollapseSibling] = React.useState<boolean>(true);
    const [collapseSibingAndSubFolders, setCollaseSiblingAndSubFolders] =
        React.useState<boolean>(false);

    return (
        <StyledPartOuterContainer>
            <BackButton />
            <StyledPartInnerContainer>
                <StyledPartTitle>Part 1</StyledPartTitle>
                <div>
                    <Toggle
                        isOpen={collapseSibing}
                        onToggleUpdate={setCollapseSibling}
                        label={"Sibling Collapse"}
                    />
                    <Toggle
                        isOpen={collapseSibingAndSubFolders}
                        onToggleUpdate={setCollaseSiblingAndSubFolders}
                        label={"Sibling Collapse and Nested Collapse"}
                    />
                </div>
                <TreeMenuContainer>
                    <TreeMenu
                        root={TREE_MOCK_DATA}
                        collapseSiblingOnExpand={collapseSibing}
                        collapseSiblingSubFolderOnExpand={
                            collapseSibingAndSubFolders
                        }
                    />
                </TreeMenuContainer>
            </StyledPartInnerContainer>
        </StyledPartOuterContainer>
    );
};

export default Part1;
