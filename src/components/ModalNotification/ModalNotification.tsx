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
    pushNotification: (text: string, type: NotificationType) => void;
}

interface NotificationItem {
    message: string;
    id: number;
    type: NotificationType;
}

export enum NotificationType {
    Info = 0,
    Success = 1,
    Error = 2,
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

    const generateNotificationItem = (
        message: string,
        type: NotificationType
    ): NotificationItem => {
        return {
            message: message,
            id: generateNotificationId(),
            type: type,
        };
    };

    const pushNotification = (message: string, type: NotificationType) => {
        const notificationItem = generateNotificationItem(message, type);
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

    const getBackgroundColor = (type: NotificationType) => {
        switch (type) {
            case NotificationType.Info:
                return "var(--modal-info-color)";
            case NotificationType.Success:
                return "var(--modal-success-color)";
            case NotificationType.Error:
                return "var(--modal-error-color)";
        }
        return "black";
    };

    return (
        <NotificationContext.Provider value={notificationContextState}>
            <StyledNotificationGroupContainer>
                {notifications.map((notification, index) => {
                    return (
                        <StyledModalNotificationContainer
                            key={index}
                            backgroundColor={getBackgroundColor(
                                notification.type
                            )}
                        >
                            <StyledNotificationContent>
                                {notification.message}
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
