import React from "react";
import { StyledPartTitle } from "../../index.styled";
import TreeMenu from "../../components/TreeMenu/TreeMenu";
import {
    TREE_MOCK_DATA,
    TreeItem,
} from "../../components/TreeMenu/TreeMenu.util";
import Modal from "../../components/Modal/Modal";

const Part2 = () => {
    const [modelContent, setModelContent] = React.useState<string>("");
    const onModelClose = () => {
        setModelContent("");
    };

    const onTreeItemClick = (item: TreeItem) => {
        setModelContent(item.name);
    };

    return (
        <div>
            <StyledPartTitle>Part 2</StyledPartTitle>
            <TreeMenu
                root={TREE_MOCK_DATA}
                collapseSiblingOnExpand={true}
                collapseSiblingSubFolderOnExpand={false}
                onTreeItemClick={onTreeItemClick}
            />
            <Modal
                title={"Tree Item Name"}
                content={modelContent}
                isOpen={modelContent !== ""}
                onClose={onModelClose}
            />
        </div>
    );
};

export default Part2;
