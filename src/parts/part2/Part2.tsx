import React from "react";
import { StyledPartTitle } from "../../index.styled";
import TreeMenu from "../../components/TreeMenu/TreeMenu";
import {
    TREE_MOCK_DATA,
    TreeItem,
} from "../../components/TreeMenu/TreeMenu.util";
import Modal from "../../components/Modal/Modal";
import ModalNotification, {
    NotificationContext,
    NotificationType,
} from "../../components/ModalNotification/ModalNotification";
import {
    StyledPartInnerContainer,
    StyledPartOuterContainer,
    TreeMenuContainer,
} from "../part1/Part1.styled";
import BackButton from "../../components/BackButton/BackButton";
import Toggle from "../../components/Toggle/Toggle";
import {
    StyledNotificationSettings,
    StyledSelect,
    StyledSelectOption,
} from "./Part2.styled";
import { StyledLabelName } from "../../components/Toggle/Toggle.styled";

enum ModalType {
    Popup = 0,
    Notification = 1,
}

const Part2 = () => {
    return (
        <ModalNotification dismissInMillisec={3000}>
            <Part2InnerContent />
        </ModalNotification>
    );
};

const Part2InnerContent = () => {
    const { pushNotification } = React.useContext(NotificationContext);
    const [notificationType, setNotificationType] =
        React.useState<NotificationType>(NotificationType.Info);
    const [modalPopupContent, setModalPopupContent] =
        React.useState<string>("");
    const [modalType, setModalType] = React.useState<ModalType>(
        ModalType.Popup
    );

    const onModelClose = () => {
        setModalPopupContent("");
    };

    const onTreeItemClick = (item: TreeItem) => {
        switch (modalType) {
            case ModalType.Popup:
                setModalPopupContent(item.name);
                break;
            case ModalType.Notification:
                pushNotification(item.name, notificationType);
                break;
        }
    };

    const renderModal = () => {
        switch (modalType) {
            case ModalType.Popup:
                return (
                    <Modal
                        title={"Tree Item Name"}
                        content={modalPopupContent}
                        isOpen={modalPopupContent !== ""}
                        onClose={onModelClose}
                    />
                );
        }
    };

    const onModalTypeUpdate = (isOpen: boolean) => {
        setModalType(isOpen ? ModalType.Notification : ModalType.Popup);
    };

    const onNotificationTypeChange = (
        option: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setNotificationType(parseInt(option.target.value));
    };

    const renderNotificationSettings = () => {
        if (modalType !== ModalType.Notification) {
            return;
        }
        return (
            <StyledNotificationSettings>
                <StyledLabelName>Notification Type</StyledLabelName>
                <StyledSelect onChange={onNotificationTypeChange}>
                    <StyledSelectOption
                        value={NotificationType.Info.toString()}
                        selected={notificationType === NotificationType.Info}
                    >
                        Info
                    </StyledSelectOption>
                    <StyledSelectOption
                        value={NotificationType.Success.toString()}
                        selected={notificationType === NotificationType.Success}
                    >
                        Success
                    </StyledSelectOption>
                    <StyledSelectOption
                        value={NotificationType.Error.toString()}
                        selected={notificationType === NotificationType.Error}
                    >
                        Error
                    </StyledSelectOption>
                </StyledSelect>
            </StyledNotificationSettings>
        );
    };

    return (
        <StyledPartOuterContainer>
            <BackButton />
            <StyledPartInnerContainer>
                <StyledPartTitle>Part 2</StyledPartTitle>
                <div>
                    <Toggle
                        isOpen={modalType === ModalType.Notification}
                        onToggleUpdate={onModalTypeUpdate}
                        label={"Popup Modal / Notifcation Modal"}
                    />
                    {renderNotificationSettings()}
                </div>
                <TreeMenuContainer>
                    <TreeMenu
                        root={TREE_MOCK_DATA}
                        collapseSiblingOnExpand={true}
                        onTreeItemClick={onTreeItemClick}
                    />
                </TreeMenuContainer>
                {renderModal()}
            </StyledPartInnerContainer>
        </StyledPartOuterContainer>
    );
};

export default Part2;
