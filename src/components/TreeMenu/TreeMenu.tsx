import React from "react";
import { TreeFolder, TreeItem } from "./TreeMenu.util";
import {
    StyledSubFolderContainer,
    StyledTreeRow,
    StyledArrow,
} from "./TreeMenu.styled";

interface TreeMenuProps {
    root: TreeFolder;
    collapseSiblingOnExpand?: boolean;
    collapseSiblingSubFolderOnExpand?: boolean;
    onTreeItemClick?: (item: TreeItem) => void;
}

const TreeMenu = (props: TreeMenuProps) => {
    const [rootFolder, setRootFolder] = React.useState<TreeFolder>(props.root);

    const onTreeFolderItemClick = (paths: number[]) => {
        const copyRootFolder = { ...rootFolder };
        let currentTreeFolder: TreeFolder | undefined = copyRootFolder;
        let siblingItems: TreeFolder[] | undefined;
        paths.forEach((path, index) => {
            if (index === paths.length - 1) {
                siblingItems = currentTreeFolder?.subFolders;
            }
            currentTreeFolder = currentTreeFolder?.subFolders?.at(path);
        });

        if (
            siblingItems &&
            props.collapseSiblingOnExpand &&
            !currentTreeFolder.isExpand
        ) {
            siblingItems.forEach((siblingsItem) => {
                if (props.collapseSiblingSubFolderOnExpand) {
                    onRecursiveCollapse(siblingsItem);
                } else {
                    siblingsItem.isExpand = false;
                }
            });
        }

        if (currentTreeFolder) {
            currentTreeFolder.isExpand = !currentTreeFolder.isExpand;
            setRootFolder(copyRootFolder);
        }
    };

    const onRecursiveCollapse = (folder: TreeFolder) => {
        folder.isExpand = false;
        folder.subFolders?.forEach((subFolder) => {
            onRecursiveCollapse(subFolder);
        });
    };

    const onTreeItemClick = (item: TreeItem) => {
        props.onTreeItemClick?.(item);
    };

    const renderTreeFolder = (
        folder: TreeFolder,
        depth: number,
        paths: number[]
    ) => {
        return (
            <div>
                <StyledTreeRow onClick={() => onTreeFolderItemClick(paths)}>
                    <StyledArrow
                        isExpand={folder.isExpand}
                        iconContent={"►"}
                        expandOnRotate={true}
                    />
                    {folder.name}
                </StyledTreeRow>
                <StyledSubFolderContainer isExpand={folder.isExpand}>
                    <div>
                        {folder.items?.map((item) => {
                            return (
                                <StyledTreeRow
                                    onClick={() => onTreeItemClick(item)}
                                >
                                    <StyledArrow
                                        isExpand={folder.isExpand}
                                        iconContent={"◉"}
                                        expandOnRotate={true}
                                    />
                                    {item.name}
                                </StyledTreeRow>
                            );
                        })}
                        {folder.subFolders?.map((subFolder, index) => {
                            const newPath = [...paths];
                            newPath.push(index);
                            return renderTreeFolder(
                                subFolder,
                                depth + 1,
                                newPath
                            );
                        })}
                    </div>
                </StyledSubFolderContainer>
            </div>
        );
    };

    return renderTreeFolder(rootFolder, 0, []);
};

export default TreeMenu;
