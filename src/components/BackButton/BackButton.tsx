import { Path } from "../../App";
import { BackButtonContainer } from "./BackButton.styled";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
    const navigate = useNavigate();

    const onButtonClick = () => {
        navigate(Path.Home);
    };

    return (
        <BackButtonContainer onClick={onButtonClick}>Back</BackButtonContainer>
    );
};

export default BackButton;
