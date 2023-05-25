import React from "react";
import MainLayout from "../../components/MainLayout/MainLayout";
import { useParams, useNavigate } from "react-router-dom";
import TreeMenu from "../../components/TreeMenu/TreeMenu";
import {
    TreeItem,
    TREE_MOCK_DATA,
} from "../../components/TreeMenu/TreeMenu.util";
import { Part3RouteParams } from "../part3/Part3";
import MainContent from "./MainContent/MainContent";

const Part4 = () => {
    const { treeItemId } = useParams<Part3RouteParams>();
    const [clickedTreeItemName, setClickedTreeItemName] =
        React.useState<string>("");
    const navigate = useNavigate();
    const [isFixedHeader, setFixedHeader] = React.useState<boolean>(true);
    const [isFixedFooter, setFixedFooter] = React.useState<boolean>(false);

    const onTreeItemClick = (item: TreeItem) => {
        setClickedTreeItemName(item.name);
        navigate(`/part4/${item.id}`, { replace: true });
    };

    const getInitialSelectedTreeItemId = () => {
        if (treeItemId && parseInt(treeItemId)) {
            return parseInt(treeItemId);
        }
    };

    const onFixedHeaderChange = (isOpen: boolean) => {
        setFixedHeader(isOpen);
    };

    const onFixedFooterChange = (isOpen: boolean) => {
        setFixedFooter(isOpen);
    };

    return (
        <MainLayout
            showHeaderFooter={true}
            mainContent={
                <MainContent
                    text={clickedTreeItemName}
                    stickFooter={isFixedFooter}
                    stickHeader={isFixedHeader}
                    onStickFooterChange={onFixedFooterChange}
                    onStickHeaderChange={onFixedHeaderChange}
                />
            }
            navContent={
                <TreeMenu
                    root={TREE_MOCK_DATA}
                    collapseSiblingOnExpand={true}
                    highlightOnTreeItemClick={true}
                    onTreeItemClick={onTreeItemClick}
                    initialSelectedTreeItemId={getInitialSelectedTreeItemId()}
                />
            }
            stickHeader={isFixedHeader}
            stickFooter={isFixedFooter}
        />
    );
};

export default Part4;
