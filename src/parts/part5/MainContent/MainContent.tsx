import React from "react";
import CollapsibleCardList from "../../../components/CollapsibleCardList/CollapsibleCardList";
import { CARDS_MOCK_DATA } from "../../../components/CollapsibleCardList/CollapsibleCard/CollapsibleCard.util";
import SelectionCard from "../../../components/SelectionCard/SelectionCard";

const MainContent = () => {
    return (
        <div>
            <CollapsibleCardList
                cards={CARDS_MOCK_DATA}
                collapseSiblingCardsOnHeaderClick={true}
            />
            <SelectionCard cards={CARDS_MOCK_DATA} />
        </div>
    );
};

export default MainContent;
