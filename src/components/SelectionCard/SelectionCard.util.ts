import { CardInfo } from "../CollapsibleCardList/CollapsibleCard/CollapsibleCard.util";

export const assignIdtoCards = (cards: CardInfo[]) => {
    const copyCard = [...cards];
    copyCard.forEach((card, index) => {
        card.id = card.id ?? index + 1;
    });
    return copyCard;
};
