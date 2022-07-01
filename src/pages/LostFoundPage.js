import { Container } from "reactstrap";
import LostPetList from "../features/lostpets/LostPetList";

const LostFoundPage = () => {
    return (
        <Container>
            <LostPetList />
        </Container>
    );
};

export default LostFoundPage;