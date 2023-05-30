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

    const onCollaseSiblingAndSubFoldersChange = (isOpen: boolean) => {
        if (isOpen) {
            setCollapseSibling(isOpen);
        }

        setCollaseSiblingAndSubFolders(isOpen);
    };

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
                        onToggleUpdate={onCollaseSiblingAndSubFoldersChange}
                        label={"Sibling Collapse + Nested Collapse"}
                    />
                </div>
                <TreeMenuContainer>
                    <TreeMenu
                        root={TREE_MOCK_DATA}
                        collapseSiblingOnExpand={collapseSibing}
                        collapseSiblingSubFolderOnExpand={
                            collapseSibingAndSubFolders
                        }
                        showFilter={true}
                    />
                </TreeMenuContainer>
            </StyledPartInnerContainer>
        </StyledPartOuterContainer>
    );
};

export default Part1;
