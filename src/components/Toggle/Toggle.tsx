import React from "react";
import {
    StyledInnerCircleContainer,
    StyledInnerTrack,
    StyledLabelName,
    StyledToggleContainer,
    StyledTrack,
} from "./Toggle.styled";

interface ToggleProps {
    isOpen: boolean;
    onToggleUpdate?: (isOpen: boolean) => void;
    label?: string;
}

const Toggle = (props: ToggleProps) => {
    const [isOpen, setOpen] = React.useState<boolean>(props.isOpen);

    React.useEffect(() => {
        setOpen(props.isOpen);
    }, [props.isOpen]);

    const onToggleUpdate = () => {
        setOpen(!isOpen);
        props.onToggleUpdate?.(!isOpen);
    };

    return (
        <StyledToggleContainer onClick={onToggleUpdate}>
            {props.label && <StyledLabelName>{props.label}</StyledLabelName>}
            <StyledTrack isOpen={isOpen}>
                <StyledInnerTrack isOpen={isOpen}>
                    <StyledInnerCircleContainer isOpen={isOpen} />
                </StyledInnerTrack>
            </StyledTrack>
        </StyledToggleContainer>
    );
};

export default Toggle;
