import React from "react";
import Toggle from "../../../components/Toggle/Toggle";
import { StyledOuterContainer } from "./MainContent.styled";

interface MainContentProps {
    text?: string;
    stickHeader: boolean;
    stickFooter: boolean;
    onStickHeaderChange?: (isOpen: boolean) => void;
    onStickFooterChange?: (isOpen: boolean) => void;
}

const MainContent = (props: MainContentProps) => {
    const [showDemoText, setShowDemoText] = React.useState<boolean>(false);
    const renderLongMockData = () => {
        if (showDemoText) {
            const rows: JSX.Element[] = [];
            rows.push(<div>This is the first line</div>);
            for (let i = 0; i < 100; i++) {
                rows.push(<div>This is for demo</div>);
            }
            rows.push(<div>This is the last line</div>);
            return <div>{rows}</div>;
        }
    };

    return (
        <StyledOuterContainer>
            <Toggle
                label={"Stick header"}
                isOpen={props.stickHeader}
                onToggleUpdate={props.onStickHeaderChange}
            />
            <Toggle
                label={"Stick footer"}
                isOpen={props.stickFooter}
                onToggleUpdate={props.onStickFooterChange}
            />
            <Toggle
                label={"Show long text"}
                isOpen={showDemoText}
                onToggleUpdate={setShowDemoText}
            />
            {renderLongMockData()}
        </StyledOuterContainer>
    );
};

export default MainContent;
