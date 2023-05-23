import React from "react";
import {
    StyledCompressedImage,
    StyledDisplayImage,
    StyledImageContentContainer,
    StyledImageNavbar,
    StyledImageSelectionContainer,
} from "./ImageSelection.styled";
import { GetImageUrl } from "../../api/api";

interface ImageSelectionProps {
    imageUrls: string[];
}

const ImageSelection = (props: ImageSelectionProps) => {
    const [selectedImageIndex, setSelectedImageIndex] =
        React.useState<number>(0);

    const onCompressImageClick = (index: number) => {
        setSelectedImageIndex(index);
    };

    const renderNavbar = () => {
        return props.imageUrls.map((imageUrl, index) => {
            return (
                <StyledCompressedImage
                    src={imageUrl}
                    onClick={() => onCompressImageClick(index)}
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
            <StyledImageNavbar>{renderNavbar()}</StyledImageNavbar>
            <StyledImageContentContainer>
                {renderContent()}
            </StyledImageContentContainer>
        </StyledImageSelectionContainer>
    );
};

export default ImageSelection;
