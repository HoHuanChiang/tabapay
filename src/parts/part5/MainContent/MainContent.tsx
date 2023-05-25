import React from "react";
import CollapsibleCardList from "../../../components/CollapsibleCardList/CollapsibleCardList";
import { CARDS_MOCK_DATA } from "../../../components/CollapsibleCardList/CollapsibleCard/CollapsibleCard.util";
import SelectionCard from "../../../components/SelectionCard/SelectionCard";
import { StyledMainContent } from "./MainContent.styled";

const MainContent = () => (
    <StyledMainContent>
        <CollapsibleCardList
            cards={CARDS_MOCK_DATA}
            collapseSiblingCardsOnHeaderClick={true}
        />
        <SelectionCard cards={CARDS_MOCK_DATA} />
    </StyledMainContent>
);

export default MainContent;
