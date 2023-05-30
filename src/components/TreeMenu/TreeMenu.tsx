import React from "react";
import {
    ExpandTree,
    FilterFolder,
    HighlightSelectedTreeItem,
    TreeFolder,
    TreeItem,
} from "./TreeMenu.util";
import {
    StyledSubFolderContainer,
    StyledTreeRow,
    StyledArrow,
    StyledTreeNameContainer,
    StyledInput,
} from "./TreeMenu.styled";

interface TreeMenuProps {
    root: TreeFolder;
    collapseSiblingOnExpand?: boolean;
    collapseSiblingSubFolderOnExpand?: boolean;
    onTreeItemClick?: (item: TreeItem) => void;
    highlightOnTreeItemClick?: boolean;
    initialSelectedTreeItemId?: number;
    showFilter?: boolean;
}

const TreeMenu = (props: TreeMenuProps) => {
    const [rootFolder, setRootFolder] = React.useState<TreeFolder>(props.root);
    const [hasData, setHasData] = React.useState<boolean>(true);

    React.useEffect(() => {
        if (props.initialSelectedTreeItemId) {
            const selectedTreeItemId = props.initialSelectedTreeItemId;
            setRootFolder((prevFolder) => {
                const copyRootFolder = deepCopy(prevFolder);
                ExpandTree(copyRootFolder, selectedTreeItemId);
                return copyRootFolder;
            });
        }
    }, [props.initialSelectedTreeItemId]);

    const onFilterInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const copyRootFolder = deepCopy(props.root);
        const isFound = FilterFolder(e.target.value, copyRootFolder);
        setRootFolder(copyRootFolder);
        setHasData(isFound);
    };

    const onTreeFolderItemClick = (paths: number[]) => {
        const copyRootFolder = deepCopy(rootFolder);
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

    const deepCopy = (treeFolder: TreeFolder): TreeFolder => {
        return JSON.parse(JSON.stringify(treeFolder));
    };

    const onRecursiveCollapse = (folder: TreeFolder) => {
        folder.isExpand = false;
        folder.subFolders?.forEach((subFolder) => {
            onRecursiveCollapse(subFolder);
        });
    };

    const onTreeItemClick = (item: TreeItem) => {
        if (props.highlightOnTreeItemClick) {
            const updatedTree = HighlightSelectedTreeItem(rootFolder, item.id);
            setRootFolder(updatedTree);
        }
        props.onTreeItemClick?.(item);
    };

    const renderTreeFolder = (
        folder: TreeFolder,
        depth: number,
        paths: number[]
    ) => {
        if (!hasData) {
            return <div>No data found</div>;
        }

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
                                        isSelected={item.isSelected}
                                    />
                                    <StyledTreeNameContainer
                                        isSelected={item.isSelected}
                                    >
                                        {item.name}
                                    </StyledTreeNameContainer>
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
            {props.showFilter && (
                <StyledInput type={"text"} onChange={onFilterInputChange} />
            )}
            {renderTreeFolder(rootFolder, 0, [])}
        </div>
    );
};

export default TreeMenu;
