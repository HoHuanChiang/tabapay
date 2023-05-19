import React from "react";
import {
    StyledCloseButton,
    StyledModalNotificationContainer,
    StyledNotificationContent,
    StyledNotificationGroupContainer,
} from "./ModalNotifcation.styled";

interface ModalNotificationProps {
    children: JSX.Element;
    dismissInMillisec: number;
}

interface NotificationContextState {
    pushNotification: (text: string) => void;
}

interface NotificationItem {
    message: string;
    id: number;
}

export const NotificationContext =
    React.createContext<NotificationContextState>({
        pushNotification: () => {},
    });

const ModalNotification = (props: ModalNotificationProps) => {
    const [notifications, setNotifications] = React.useState<
        NotificationItem[]
    >([]);
    const [notificationCurrentId, setNotificationCurrentId] =
        React.useState<number>(0);

    const generateNotificationId = () => {
        const id = notificationCurrentId;
        setNotificationCurrentId(id + 1);
        return id;
    };

    const generateNotificationItem = (message: string): NotificationItem => {
        return {
            message: message,
            id: generateNotificationId(),
        };
    };

    const pushNotification = (message: string) => {
        const notificationItem = generateNotificationItem(message);
        setNotifications([...notifications, notificationItem]);
        setDismissTimer(notificationItem.id);
    };

    const removeNotificationItem = (notificationId: number) => {
        setNotifications((prevState) => {
            const copyNotifications = [...prevState].filter(
                (x) => x.id !== notificationId
            );
            return copyNotifications;
        });
    };

    const setDismissTimer = (notificationId: number) => {
        setTimeout(() => {
            removeNotificationItem(notificationId);
        }, props.dismissInMillisec);
    };

    const notificationContextState: NotificationContextState = {
        pushNotification: pushNotification,
    };

    return (
        <NotificationContext.Provider value={notificationContextState}>
            <StyledNotificationGroupContainer>
                {notifications.map((notification, index) => {
                    return (
                        <StyledModalNotificationContainer key={index}>
                            <StyledNotificationContent>
                                {notification.id}
                            </StyledNotificationContent>
                            <StyledCloseButton
                                onClick={() =>
                                    removeNotificationItem(notification.id)
                                }
                            />
                        </StyledModalNotificationContainer>
                    );
                })}
            </StyledNotificationGroupContainer>
            {props.children}
        </NotificationContext.Provider>
    );
};

export default ModalNotification;
