export interface Folder {
    id: number;
    name: string;
    subFolders: Folder[];
    destinations: Destination[];
}

export interface Destination {
    id: number;
    name: string;
    locations: Location[];
}

export interface Location {
    id: number;
    name: string;
    address: string;
    description: string;
    website: string;
    imageUrls: string[];
}
