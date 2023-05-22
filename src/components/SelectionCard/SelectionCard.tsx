import React from "react";
import { CardInfo } from "../CollapsibleCardList/CollapsibleCard/CollapsibleCard.util";
import {
    StyledSelectionContainer,
    StyledSelectionContent,
    StyledSelectionNarbarItem,
    StyledSelectionNavbar,
} from "./SelectionCard.styled";
import { assignIdtoCards } from "./SelectionCard.util";

interface SelectionCardProps {
    cards: CardInfo[];
}

const SelectionCard = (props: SelectionCardProps) => {
    const [cards, setCards] = React.useState<CardInfo[]>(
        assignIdtoCards(props.cards)
    );
    const [selectedCardId, setSelectedCardId] = React.useState<number>();

    const onCategoryHeaderClick = (cardId?: number) => {
        if (cardId) {
            setSelectedCardId(cardId);
        }
    };

    const renderNavbar = () => {
        return cards.map((card) => {
            return (
                <StyledSelectionNarbarItem
                    onClick={() => onCategoryHeaderClick(card.id)}
                    isSelected={selectedCardId === card.id}
                >
                    {card.headerName}
                </StyledSelectionNarbarItem>
            );
        });
    };

    const renderContent = () => {
        if (!selectedCardId) {
            return "Please select a category";
        }
        const foundCard = cards.find((x) => x.id === selectedCardId);
        return foundCard?.content ?? "No data found";
    };

    return (
        <StyledSelectionContainer>
            <StyledSelectionNavbar>{renderNavbar()}</StyledSelectionNavbar>
            <StyledSelectionContent>{renderContent()}</StyledSelectionContent>
        </StyledSelectionContainer>
    );
};

export default SelectionCard;
