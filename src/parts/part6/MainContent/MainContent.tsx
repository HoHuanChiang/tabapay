import React from "react";
import { APIRequest, GetImageUrl } from "../../../api/api";
import { useNavigate, useParams } from "react-router-dom";
import { Part3RouteParams } from "../../part3/Part3";
import { Destination, Location } from "../../../api/api.models";
import {
    StyledCustomCardContentContainer,
    StyledImageSelectionContainer,
    StyledInfo,
    StyledMainContainer,
    StyledParagraph,
    StyledSelectionCardContainer,
    StyledTitle,
} from "./MainContent.styled";
import SelectionCard from "../../../components/SelectionCard/SelectionCard";
import { CardInfo } from "../../../components/CollapsibleCardList/CollapsibleCard/CollapsibleCard.util";
import ImageSelection from "../../../components/ImageSelection/ImageSelection";

interface MainContentProps {
    defaultTreeItemId?: number;
}

const MainContent = (props: MainContentProps) => {
    const { treeItemId } = useParams<Part3RouteParams>();
    const [destination, setDestination] = React.useState<Destination>();
    const navigate = useNavigate();
    React.useEffect(() => {
        if (!treeItemId && props.defaultTreeItemId) {
            navigate(`/part6/${props.defaultTreeItemId}`, { replace: true });
        }
    }, [props.defaultTreeItemId]);

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
            <StyledCustomCardContentContainer>
                <StyledTitle>{`${destination?.name}-${location.name}`}</StyledTitle>
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
            </StyledCustomCardContentContainer>
        );
    };

    if (!destination) {
        return (
            <StyledMainContainer>Please pick a destination</StyledMainContainer>
        );
    }

    return (
        <StyledSelectionCardContainer>
            <SelectionCard
                cards={getCards()}
                onRenderContent={renderCardContent}
            />
        </StyledSelectionCardContainer>
    );
};

export default MainContent;
