import React from "react";
import { APIRequest, GetImageUrl } from "../../../api/api";
import { useParams } from "react-router-dom";
import { Part3RouteParams } from "../../part3/Part3";
import { Destination, Location } from "../../../api/api.models";
import {
    StyledImageSelectionContainer,
    StyledInfo,
    StyledParagraph,
    StyledThumbnailContainer,
    StyledTitle,
} from "./MainContent.styled";
import SelectionCard from "../../../components/SelectionCard/SelectionCard";
import { CardInfo } from "../../../components/CollapsibleCardList/CollapsibleCard/CollapsibleCard.util";
import ImageSelection from "../../../components/ImageSelection/ImageSelection";

const MainContent = () => {
    const { treeItemId } = useParams<Part3RouteParams>();
    const [destination, setDestination] = React.useState<Destination>();
    const [selectedLocation, setSelectedLocation] = React.useState<Location>();

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

    const onHeaderClick = (card: CardInfo) => {
        if (destination) {
            const foundLocation = destination.locations.find(
                (x) => x.id === card.id
            );
            if (foundLocation) {
                setSelectedLocation({ ...foundLocation });
            }
        }
    };

    const getCards = (): CardInfo[] => {
        if (destination && destination.locations) {
            console.log(destination.locations);
            return destination.locations.map((location) => {
                return {
                    id: location.id,
                    headerName: location.name,
                    data: { ...location },
                };
            });
        }
        return [];
    };

    const renderCardContent = (card: CardInfo) => {
        const location = card.data as Location;
        return (
            <div>
                <StyledImageSelectionContainer>
                    <ImageSelection
                        imageUrls={location.imageUrls.map((imageUrl) =>
                            GetImageUrl(imageUrl)
                        )}
                    />
                </StyledImageSelectionContainer>
                <div>
                    <StyledInfo>
                        <span>Address:</span>
                        <span>{location.address}</span>
                    </StyledInfo>
                    <StyledInfo>
                        <span>Website:</span>
                        <span>{location.website}</span>
                    </StyledInfo>
                </div>
                {location.description.split("\r\n").map((paragraph) => (
                    <StyledParagraph>{paragraph}</StyledParagraph>
                ))}
            </div>
        );
    };

    if (!destination) {
        return <div></div>;
    }

    return (
        <div>
            <SelectionCard
                cards={getCards()}
                onHeaderClick={onHeaderClick}
                onRenderContent={renderCardContent}
            />
        </div>
    );
};

export default MainContent;
