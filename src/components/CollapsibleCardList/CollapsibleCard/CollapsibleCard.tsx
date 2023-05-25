import {
    StyledCardContainer,
    StyledCardContent,
    StyledCardContentContainer,
    StyledCardContentInnerContainer,
    StyledCardExpandIcon,
    StyledCardHeader,
} from "./CollapsibleCard.styled";

export interface CollapsibleCardProps {
    id: number;
    headerName: string;
    content: string | JSX.Element;
    onHeaderClick?: (id: number) => void;
    isOpen: boolean;
}

const CollapsibleCard = (props: CollapsibleCardProps) => {
    const { isOpen } = props;

    const onHeaderClick = () => {
        props.onHeaderClick?.(props.id);
    };

    return (
        <StyledCardContainer>
            <StyledCardHeader onClick={onHeaderClick}>
                {props.headerName}
                <StyledCardExpandIcon isOpen={isOpen} />
            </StyledCardHeader>
            <StyledCardContentContainer isOpen={isOpen}>
                <StyledCardContentInnerContainer>
                    <StyledCardContent>
                        <div>{props.content}</div>
                    </StyledCardContent>
                </StyledCardContentInnerContainer>
            </StyledCardContentContainer>
        </StyledCardContainer>
    );
};

export default CollapsibleCard;
