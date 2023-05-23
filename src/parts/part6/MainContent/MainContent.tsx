import React from "react";
import { APIRequest } from "../../../api/api";
import { useParams } from "react-router-dom";
import { Part3RouteParams } from "../../part3/Part3";
import { Destination } from "../../../api/api.models";

const MainContent = () => {
    const { treeItemId } = useParams<Part3RouteParams>();
    const [destination, setDestination] = React.useState<Destination>();

    React.useEffect(() => {
        if (treeItemId && !isNaN(parseInt(treeItemId))) {
            const getDestinationDetails = async () => {
                const destination =
                    await APIRequest.getDestinationDetailsApiPath(
                        parseInt(treeItemId)
                    );
                setDestination(destination);
            };

            getDestinationDetails().catch(console.error);
        }
    }, [treeItemId]);

    return <div>{destination?.locations?.map((x) => x.name)}</div>;
};

export default MainContent;
