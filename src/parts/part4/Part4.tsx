import React from "react";
import MainLayout from "../../components/MainLayout/MainLayout";
import { useParams, useNavigate } from "react-router-dom";
import TreeMenu from "../../components/TreeMenu/TreeMenu";
import {
    TreeItem,
    TREE_MOCK_DATA,
} from "../../components/TreeMenu/TreeMenu.util";
import MainContent from "../part3/MainContent/MainContent";
import { Part3RouteParams } from "../part3/Part3";

const Part4 = () => {
    const { treeItemId } = useParams<Part3RouteParams>();
    const [clickedTreeItemName, setClickedTreeItemName] =
        React.useState<string>("");
    const navigate = useNavigate();

    const onTreeItemClick = (item: TreeItem) => {
        setClickedTreeItemName(item.name);
        navigate(`/part4/${item.id}`, { replace: true });
    };

    const getInitialSelectedTreeItemId = () => {
        if (treeItemId && parseInt(treeItemId)) {
            return parseInt(treeItemId);
        }
    };

    return (
        <MainLayout
            showHeaderFooter={true}
            mainContent={<MainContent text={clickedTreeItemName} />}
            navContent={
                <TreeMenu
                    root={TREE_MOCK_DATA}
                    collapseSiblingOnExpand={true}
                    highlightOnTreeItemClick={true}
                    onTreeItemClick={onTreeItemClick}
                    initialSelectedTreeItemId={getInitialSelectedTreeItemId()}
                />
            }
        />
    );
};

export default Part4;
