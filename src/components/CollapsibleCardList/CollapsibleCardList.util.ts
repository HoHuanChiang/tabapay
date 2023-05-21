import { CollapsibleCardProps } from "./CollapsibleCard/CollapsibleCard";
import { CollapsibleCardInfo } from "./CollapsibleCard/CollapsibleCard.util";

export const convertToCollapsibleCardProps = (
    cards: CollapsibleCardInfo[]
): CollapsibleCardProps[] => {
    return cards.map((card, index) => {
        return {
            id: index,
            headerName: card.headerName,
            content: card.content,
            isOpen: false,
        };
    });
};
