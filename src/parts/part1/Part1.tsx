import React from "react";
import TreeMenu from "../../components/TreeMenu/TreeMenu";
import { TREE_MOCK_DATA } from "../../components/TreeMenu/TreeMenu.util";
import { StyledPartTitle } from "../../index.styled";

const Part1 = () => {
    return (
        <div>
            <StyledPartTitle>Part 1</StyledPartTitle>
            <TreeMenu
                root={TREE_MOCK_DATA}
                collapseSiblingOnExpand={true}
                collapseSiblingSubFolderOnExpand={false}
            />
        </div>
    );
};

export default Part1;
