import { Destination, Folder } from "../../api/api.models";

export interface TreeItem {
    id: number;
    name: string;
    isSelected?: boolean;
}

export interface TreeFolder {
    name: string;
    isExpand: boolean;
    subFolders?: TreeFolder[];
    items?: TreeItem[];
}

export const TREE_MOCK_DATA: TreeFolder = {
    name: "test 1",
    isExpand: false,
    subFolders: [
        {
            name: "test 1-1",
            isExpand: false,
            items: [
                {
                    id: 1,
                    name: "test 1-1 Item1",
                },
                {
                    id: 2,
                    name: "test 1-1 Item2",
                },
            ],
            subFolders: [
                {
                    name: "test 1-1-1",
                    isExpand: false,
                    subFolders: [
                        {
                            name: "test 1-1-1-1",
                            isExpand: false,
                        },
                        {
                            name: "test 1-1-1-2",
                            isExpand: false,
                        },
                    ],
                    items: [
                        {
                            id: 3,
                            name: "test 1-1-1 Item1",
                        },
                    ],
                },
                {
                    name: "test 1-1-2",
                    isExpand: false,
                    subFolders: [
                        {
                            name: "test 1-1-2-1",
                            isExpand: false,
                        },
                    ],
                    items: [
                        {
                            id: 4,
                            name: "test 1-1-2 Item1",
                        },
                        {
                            id: 5,
                            name: "test 1-1-2 Item2",
                        },
                    ],
                },
            ],
        },
        {
            name: "test 2-1",
            isExpand: false,
            subFolders: [
                {
                    name: "test 2-1-1",
                    isExpand: false,
                    subFolders: [
                        {
                            name: "test 2-1-1-1",
                            isExpand: false,
                        },
                        {
                            name: "test 2-1-1-2",
                            isExpand: false,
                        },
                    ],
                },
                {
                    name: "test 2-1-2",
                    isExpand: false,
                    subFolders: [
                        {
                            name: "test 2-1-2-1",
                            isExpand: false,
                        },
                    ],
                },
            ],
        },
    ],
};

export const RetrieveTreeItemData = (
    data: TreeFolder,
    treeItemId: number
): TreeItem | undefined => {
    if (data.items) {
        for (let i = 0; i < data.items.length; i++) {
            if (data.items[i].id === treeItemId) {
                return data.items[i];
            }
        }
    }

    if (data.subFolders) {
        for (let i = 0; i < data.subFolders?.length; i++) {
            const retrieveItem = RetrieveTreeItemData(
                data.subFolders[i],
                treeItemId
            );
            if (retrieveItem) {
                return retrieveItem;
            }
        }
    }
};

export const HighlightSelectedTreeItem = (
    folder: TreeFolder,
    selectedTreeItemId: number
) => {
    const copyFolder = { ...folder };
    copyFolder.items?.forEach((item) => {
        item.isSelected = item.id === selectedTreeItemId;
    });

    copyFolder.subFolders?.forEach((subFolder) => {
        HighlightSelectedTreeItem(subFolder, selectedTreeItemId);
    });

    return copyFolder;
};

export const ExpandTree = (folder: TreeFolder, treeItemId: number) => {
    if (folder.items) {
        for (let i = 0; i < folder.items.length; i++) {
            if (folder.items[i].id === treeItemId) {
                folder.isExpand = true;
                folder.items[i].isSelected = true;
                return true;
            }
        }
    }

    if (folder.subFolders) {
        for (let i = 0; i < folder.subFolders.length; i++) {
            const isFound = ExpandTree(folder.subFolders[i], treeItemId);
            if (isFound) {
                folder.isExpand = true;
                return true;
            }
        }
    }
    return false;
};

export const ConvertToTreeFolder = (folder: Folder): TreeFolder => {
    return {
        name: folder.name,
        isExpand: false,
        subFolders: folder.subFolders?.map((subFolder) =>
            ConvertToTreeFolder(subFolder)
        ),
        items: folder.destinations.map((destination) =>
            ConvertToTreeItem(destination)
        ),
    };
};

export const ConvertToTreeItem = (destination: Destination): TreeItem => {
    return {
        id: destination.id,
        name: destination.name,
        isSelected: false,
    };
};
