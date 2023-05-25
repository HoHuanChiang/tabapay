import React from "react";
import {
    StyledCompressedImage,
    StyledDisplayImage,
    StyledImageContentContainer,
    StyledImageNavbar,
    StyledImageSelectionContainer,
} from "./ImageSelection.styled";

interface ImageSelectionProps {
    imageUrls: string[];
}

const ImageSelection = (props: ImageSelectionProps) => {
    const [selectedImageIndex, setSelectedImageIndex] =
        React.useState<number>(0);

    React.useEffect(() => {
        setSelectedImageIndex(0);
    }, [props.imageUrls]);

    const onCompressImageClick = (index: number) => {
        setSelectedImageIndex(index);
    };

    const renderNavbar = () => {
        return props.imageUrls.map((imageUrl, index) => {
            return (
                <StyledCompressedImage
                    src={imageUrl}
                    onClick={() => onCompressImageClick(index)}
                    isSelected={index === selectedImageIndex}
                />
            );
        });
    };
    const renderContent = () => {
        if (selectedImageIndex < props.imageUrls.length) {
            return (
                <StyledDisplayImage src={props.imageUrls[selectedImageIndex]} />
            );
        }
    };

    return (
        <StyledImageSelectionContainer>
            <StyledImageContentContainer>
                {renderContent()}
            </StyledImageContentContainer>
            <StyledImageNavbar>{renderNavbar()}</StyledImageNavbar>
        </StyledImageSelectionContainer>
    );
};

export default ImageSelection;
