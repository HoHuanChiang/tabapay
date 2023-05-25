import React from "react";
import { CardInfo } from "../CollapsibleCardList/CollapsibleCard/CollapsibleCard.util";
import {
    StyledSelectionContainer,
    StyledSelectionContent,
    StyledSelectionNarbarItem,
    StyledSelectionNavbar,
    StyledSelectionNavbarItemDivider,
} from "./SelectionCard.styled";
import { assignIdtoCards } from "./SelectionCard.util";

interface SelectionCardProps {
    cards: CardInfo[];
    onHeaderClick?: (card: CardInfo) => void;
    onRenderContent?: (card: CardInfo) => JSX.Element;
}

const SelectionCard = (props: SelectionCardProps) => {
    const [cards, setCards] = React.useState<CardInfo[]>();
    const [selectedCardId, setSelectedCardId] = React.useState<number>();

    React.useEffect(() => {
        setCards(assignIdtoCards(props.cards));
        if (props.cards.length > 0) {
            setSelectedCardId(props.cards[0].id);
        }
    }, [props.cards]);

    const onCategoryHeaderClick = (card: CardInfo) => {
        setSelectedCardId(card.id ?? 0);
        props.onHeaderClick?.({ ...card });
    };

    const renderNavbar = () => {
        return cards?.map((card, index) => {
            return (
                <StyledSelectionNarbarItem
                    key={index}
                    onClick={() => onCategoryHeaderClick(card)}
                    isSelected={selectedCardId === card.id}
                >
                    <StyledSelectionNavbarItemDivider />
                    {card.headerName}
                </StyledSelectionNarbarItem>
            );
        });
    };

    const renderContent = () => {
        if (!selectedCardId) {
            return "Please select a category";
        }
        const foundCard = cards?.find((x) => x.id === selectedCardId);
        if (foundCard) {
            if (props.onRenderContent) {
                return props.onRenderContent(foundCard);
            }
            return foundCard.content;
        }

        return "No Data Found";
    };

    return (
        <StyledSelectionContainer>
            <StyledSelectionNavbar>{renderNavbar()}</StyledSelectionNavbar>
            <StyledSelectionContent>{renderContent()}</StyledSelectionContent>
        </StyledSelectionContainer>
    );
};

export default SelectionCard;
