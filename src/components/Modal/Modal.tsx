import React from "react";
import {
    StyledCloseButton,
    StyledMaskContainer,
    StyledModalContainer,
    StyledModalContent,
    StyledModalHeader,
    StyledModalHeaderTitle,
    StyledModalOuterContainer,
} from "./Modal.styled";

interface ModalProps {
    title: string;
    content: string | JSX.Element;
    isOpen: boolean;
    onClose: () => void;
}

const Modal = (props: ModalProps) => {
    const onClose = () => {
        props.onClose();
    };

    return (
        <StyledModalOuterContainer isOpen={props.isOpen}>
            <StyledMaskContainer isOpen={props.isOpen} />
            <StyledModalContainer isOpen={props.isOpen}>
                <StyledModalHeader>
                    <StyledModalHeaderTitle>
                        {props.title}
                    </StyledModalHeaderTitle>
                    <StyledCloseButton onClick={onClose}>
                        Close
                    </StyledCloseButton>
                </StyledModalHeader>
                <StyledModalContent>{props.content}</StyledModalContent>
            </StyledModalContainer>
        </StyledModalOuterContainer>
    );
};

export default Modal;
