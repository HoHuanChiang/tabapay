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
} from "../../components/ModalNotification/ModalNotification";

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
    // For Popup modal
    const [modalContent, setModalContent] = React.useState<string>("");
    // For Notification modal
    const { pushNotification } = React.useContext(NotificationContext);
    const [modalType, setModalType] = React.useState<ModalType>(
        ModalType.Notification
    );
    const onModelClose = () => {
        setModalContent("");
    };

    const onTreeItemClick = (item: TreeItem) => {
        switch (modalType) {
            case ModalType.Popup:
                setModalContent(item.name);
                break;
            case ModalType.Notification:
                pushNotification(item.name);
                break;
        }
    };

    const renderModal = () => {
        switch (modalType) {
            case ModalType.Popup:
                return (
                    <Modal
                        title={"Tree Item Name"}
                        content={modalContent}
                        isOpen={modalContent !== ""}
                        onClose={onModelClose}
                    />
                );
        }
    };

    return (
        <div>
            <StyledPartTitle>Part 2</StyledPartTitle>
            <TreeMenu
                root={TREE_MOCK_DATA}
                collapseSiblingOnExpand={true}
                onTreeItemClick={onTreeItemClick}
            />
            {renderModal()}
        </div>
    );
};

export default Part2;
