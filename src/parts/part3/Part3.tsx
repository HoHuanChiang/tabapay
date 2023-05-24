import React from "react";
import TreeMenu from "../../components/TreeMenu/TreeMenu";
import {
    TREE_MOCK_DATA,
    TreeItem,
} from "../../components/TreeMenu/TreeMenu.util";
import MainContent from "./MainContent/MainContent";
import { useNavigate, useParams } from "react-router-dom";
import MainLayout from "../../components/MainLayout/MainLayout";
import BackButton from "../../components/BackButton/BackButton";

export type Part3RouteParams = {
    treeItemId?: string;
};

const Part3 = () => {
    const { treeItemId } = useParams<Part3RouteParams>();
    const [clickedTreeItemName, setClickedTreeItemName] =
        React.useState<string>("");
    const navigate = useNavigate();

    const onTreeItemClick = (item: TreeItem) => {
        // Set props
        setClickedTreeItemName(item.name);
        // Set Url
        navigate(`/part3/${item.id}`, { replace: true });
    };

    const getInitialSelectedTreeItemId = () => {
        if (treeItemId && parseInt(treeItemId)) {
            return parseInt(treeItemId);
        }
    };

    const renderNavContent = () => {
        return (
            <div>
                <BackButton />
                <TreeMenu
                    root={TREE_MOCK_DATA}
                    collapseSiblingOnExpand={true}
                    highlightOnTreeItemClick={true}
                    onTreeItemClick={onTreeItemClick}
                    initialSelectedTreeItemId={getInitialSelectedTreeItemId()}
                />
            </div>
        );
    };

    return (
        <MainLayout
            showHeaderFooter={false}
            mainContent={<MainContent text={clickedTreeItemName} />}
            navContent={renderNavContent()}
        />
    );
};

export default Part3;
