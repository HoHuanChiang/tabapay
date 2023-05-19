export interface TreeItem {
    name: string;
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
                    name: "test 1-1 Item1",
                },
                {
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
                            name: "test 1-1-2 Item1",
                        },
                        {
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

const createTreeFolder = (name: string) => {};
