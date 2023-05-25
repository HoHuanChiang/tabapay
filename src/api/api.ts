import axios from "axios";
import { Destination, Folder } from "./api.models";

const API_ENDPOINT_BASE_URL = "http://localhost:8080";

enum ApiPath {
    GetRootFolder = "/folder/root",
    GetDestinationDetails = "/destination/",
}

const getRootFolderApiPath = () => {
    return API_ENDPOINT_BASE_URL + ApiPath.GetRootFolder;
};

const getDestinationDetailsApiPath = (destinationId: number) => {
    return (
        API_ENDPOINT_BASE_URL +
        ApiPath.GetDestinationDetails +
        destinationId.toString()
    );
};

const instance = axios.create({
    baseURL: API_ENDPOINT_BASE_URL,
    timeout: 15000,
});

const getData = <T>(url: string): Promise<T> => {
    return instance.get(url).then((response) => response.data);
};

export const APIRequest = {
    GetRootFolder: () => getData<Folder>(getRootFolderApiPath()),
    getDestinationDetailsApiPath: (destinationId: number) =>
        getData<Destination>(getDestinationDetailsApiPath(destinationId)),
};

export const GetImageUrl = (imageName: string) => {
    return `${API_ENDPOINT_BASE_URL}/image/${imageName}`;
};
