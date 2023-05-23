import React from "react";
import MainLayout from "../../components/MainLayout/MainLayout";
import TreeMenu from "../../components/TreeMenu/TreeMenu";
import {
    ConvertToTreeFolder,
    TreeFolder,
    TreeItem,
} from "../../components/TreeMenu/TreeMenu.util";
import MainContent from "./MainContent/MainContent";
import { APIRequest } from "../../api/api";
import { useNavigate, useParams } from "react-router-dom";
import { Part3RouteParams } from "../part3/Part3";

const Part6 = () => {
    const [rootFolder, setRootFolder] = React.useState<TreeFolder>();
    const { treeItemId } = useParams<Part3RouteParams>();
    const navigate = useNavigate();

    React.useEffect(() => {
        const getRootFolder = async () => {
            const folder = await APIRequest.GetRootFolder();
            setRootFolder(ConvertToTreeFolder(folder));
        };

        getRootFolder().catch(console.error);
    }, []);

    const onTreeItemClick = (item: TreeItem) => {
        navigate(`/part6/${item.id}`, { replace: true });
    };

    const getInitialSelectedTreeItemId = () => {
        if (treeItemId && parseInt(treeItemId)) {
            return parseInt(treeItemId);
        }
    };

    const getTreeMenu = () => {
        if (rootFolder) {
            return (
                <TreeMenu
                    root={rootFolder}
                    collapseSiblingOnExpand={true}
                    highlightOnTreeItemClick={true}
                    onTreeItemClick={onTreeItemClick}
                    initialSelectedTreeItemId={getInitialSelectedTreeItemId()}
                />
            );
        }
        return undefined;
    };

    return (
        <MainLayout
            showHeaderFooter={true}
            mainContent={<MainContent />}
            navContent={getTreeMenu()}
        />
    );
};

export default Part6;
