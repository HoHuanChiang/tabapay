import React from "react";
import MainLayout from "../../components/MainLayout/MainLayout";
import TreeMenu from "../../components/TreeMenu/TreeMenu";
import { TREE_MOCK_DATA } from "../../components/TreeMenu/TreeMenu.util";
import MainContent from "./MainContent/MainContent";

const Part5 = () => {
    return (
        <MainLayout
            showHeaderFooter={true}
            mainContent={<MainContent />}
            navContent={
                <TreeMenu
                    root={TREE_MOCK_DATA}
                    collapseSiblingOnExpand={true}
                    highlightOnTreeItemClick={true}
                />
            }
        />
    );
};

export default Part5;
