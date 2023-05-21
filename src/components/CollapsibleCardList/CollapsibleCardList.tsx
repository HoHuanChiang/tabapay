import React from "react";
import CollapsibleCard, {
    CollapsibleCardProps,
} from "./CollapsibleCard/CollapsibleCard";
import { CollapsibleCardInfo } from "./CollapsibleCard/CollapsibleCard.util";
import { StyledCardsContainer } from "./CollapsibleCardList.styled";
import { convertToCollapsibleCardProps } from "./CollapsibleCardList.util";

interface CollapsibleCardListProps {
    cards: CollapsibleCardInfo[];
    collapseSiblingCardsOnHeaderClick?: boolean;
}

const CollapsibleCardList = (props: CollapsibleCardListProps) => {
    const [cards, setCards] = React.useState<CollapsibleCardProps[]>(
        convertToCollapsibleCardProps(props.cards)
    );

    const onHeaderClick = (cardId: number) => {
        const copyCards = [...cards];
        const foundCard = copyCards.find((c) => c.id === cardId);
        if (foundCard) {
            if (props.collapseSiblingCardsOnHeaderClick && !foundCard.isOpen) {
                copyCards.forEach((card) => {
                    card.isOpen = false;
                });
            }

            foundCard.isOpen = !foundCard.isOpen;
            setCards(copyCards);
        }
    };

    const renderCards = () => {
        return (
            <StyledCardsContainer>
                {cards.map((cardInfo) => (
                    <CollapsibleCard
                        {...cardInfo}
                        onHeaderClick={onHeaderClick}
                    />
                ))}
            </StyledCardsContainer>
        );
    };
    return renderCards();
};

export default CollapsibleCardList;
