import { CollapsibleCardProps } from "./CollapsibleCard/CollapsibleCard";
import { CardInfo } from "./CollapsibleCard/CollapsibleCard.util";

export const convertToCollapsibleCardProps = (
    cards: CardInfo[]
): CollapsibleCardProps[] => {
    return cards.map((card, index) => {
        return {
            id: card.id ?? index,
            headerName: card.headerName,
            content: card.content ?? "",
            isOpen: false,
        };
    });
};
