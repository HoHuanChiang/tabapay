import React from "react";
import { StyledOuterContainer } from "./MainContext.styled";
import { StyledRow } from "../Part3.styled";
import { useParams } from "react-router-dom";
import { Part3RouteParams } from "../Part3";
import {
    RetrieveTreeItemData,
    TREE_MOCK_DATA,
} from "../../../components/TreeMenu/TreeMenu.util";

interface MainContentProps {
    text?: string;
}

const MainContent = (props: MainContentProps) => {
    const { treeItemId } = useParams<Part3RouteParams>();
    const [retrievedName, setName] = React.useState<string>("");

    React.useEffect(() => {
        if (treeItemId && !isNaN(parseInt(treeItemId))) {
            const treeItemIdNum = parseInt(treeItemId);
            const item = RetrieveTreeItemData(TREE_MOCK_DATA, treeItemIdNum);
            if (item) {
                setName(item.name);
            }
        }
    }, [treeItemId]);

    return (
        <StyledOuterContainer>
            <div>
                <StyledRow>
                    <span>Passed By Props:</span>
                    {props.text}
                </StyledRow>
                <StyledRow>
                    <span>
                        Retrieve Tree Item Id from URL and retrieve name:
                    </span>
                    {retrievedName}
                </StyledRow>
            </div>
        </StyledOuterContainer>
    );
};

export default MainContent;
