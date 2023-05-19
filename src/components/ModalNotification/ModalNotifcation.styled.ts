import styled from "styled-components";

export const StyledNotificationGroupContainer = styled.div`
    position: absolute;
    top: 0px;
    left: 50%;
    transform: translateX(-50%);
    min-width: 300px;
    transition: all 2s ease;
    min-height: 2px;
`;

export const StyledModalNotificationContainer = styled.div`
    width: 100%;
    box-sizing: border-box;
    margin: 18px 0;
    padding: 10px;
    border: 1px solid black;
    border-radius: 10px;
    animation: fadeIn 0.3s ease;
    text-align: center;
    position: relative;
    display: flex;
    align-items: center;

    @keyframes fadeIn {
        0% {
            transform: translateY(-30px);
            opacity: 0;
        }
        100% {
            transform: translateY(0);
            opacity: 1;
        }
    }
`;

export const StyledNotificationContent = styled.div`
    flex: 1;
`;

export const StyledCloseButton = styled.div`
    cursor: pointer;
    height: 25px;
    width: 25px;
    position: relative;

    &::before,
    &::after {
        content: "";
        position: absolute;
        height: 1px;
        width: 100%;
        background: black;
        top: 50%;
        left: 50%;
        transition: all 0.2s ease;
    }

    &::after {
        transform: translate(-50%, -50%) rotate(45deg);
    }

    &::before {
        transform: translate(-50%, -50%) rotate(-45deg);
    }

    &:hover::before {
        animation: leftRight 0.4s ease;
        height: 3px;
    }

    &:hover::after {
        animation: rightLeft 0.4s ease;
        height: 3px;
    }

    @keyframes leftRight {
        0% {
            transform: translate(-50%, -50%) rotate(45deg);
        }
        100% {
            transform: translate(-50%, -50%) rotate(-45deg);
        }
    }

    @keyframes rightLeft {
        0% {
            transform: translate(-50%, -50%) rotate(-45deg);
        }
        100% {
            transform: translate(-50%, -50%) rotate(45deg);
        }
    }
`;
