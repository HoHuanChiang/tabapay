import styled from "styled-components";

interface ModalStyledProps {
    isOpen: boolean;
}

export const StyledMaskContainer = styled.div<ModalStyledProps>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: grey;
    opacity: 0.6;
    display: ${(props) => (props.isOpen ? "block" : "none")};
`;

export const StyledModalOuterContainer = styled.div<ModalStyledProps>`
    transition: all 0.3s ease;
    background: green;
    opacity: ${(props) => (props.isOpen ? 1 : 0)};
`;

export const StyledModalContainer = styled.div<ModalStyledProps>`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    min-height: 100px;
    border-radius: 10px;
    overflow: hidden;
    display: ${(props) => (props.isOpen ? "block" : "none")};
`;

export const StyledModalContent = styled.div`
    min-height: 70px;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyledModalHeader = styled.div`
    height: 30px;
    background: white;
    border-bottom: 1px solid black;
    padding: 10px 5px;
    position: relative;
`;

export const StyledModalHeaderTitle = styled.span`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

export const StyledCloseButton = styled.button`
    padding: 0px 14px;
    background: transparent;
    border: none;
    cursor: pointer;
    color: transparent;
    transition: all 0.5s ease;
    height: 27px;
    display: flex;
    align-items: center;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);

    &::before,
    &::after {
        content: "";
        position: absolute;
        background: black;
        height: 2px;
        transform-origin: left;
        border-radius: 10px;
        transition: all 0.5s ease;
        left: 55%;
    }

    &::before {
        top: 4px;
        transform: translateX(-50%) rotate(45deg);
        width: 20px;
    }

    &::after {
        top: 18px;
        transform: translateX(-50%) rotate(-45deg);
        width: 20px;
    }

    &:hover::before {
        top: 0;
        left: 0;
        transform: rotate(0);
        width: 100%;
    }

    &:hover::after {
        top: 100%;
        left: 0;
        transform: rotate(0);
        width: 100%;
    }

    &:hover {
        color: black;
    }
`;
