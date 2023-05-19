import React from "react";
import { TreeFolder } from "./TreeMenu.util";
import {
    StyledSubFolderContainer,
    StyledTreeRow,
    StyledArrow,
} from "./TreeMenu.styled";
import Modal from "../Modal/Modal";

interface TreeMenuProps {
    root: TreeFolder;
    collapseSiblingOnExpand?: boolean;
    collapseSiblingSubFolderOnExpand?: boolean;
}

const TreeMenu = (props: TreeMenuProps) => {
    const [rootFolder, setRootFolder] = React.useState<TreeFolder>(props.root);
    const [modelContent, setModelContent] = React.useState<string>("");

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

    const onModelClose = () => {
        setModelContent("");
    };

    const onTreeItemClick = (name: string) => {
        setModelContent(name);
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
                                    onClick={() => onTreeItemClick(item.name)}
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

    return (
        <div>
            {renderTreeFolder(rootFolder, 0, [])}
            <Modal
                title={"Tree Item Name"}
                content={modelContent}
                isOpen={modelContent !== ""}
                onClose={onModelClose}
            />
        </div>
    );
};

export default TreeMenu;
