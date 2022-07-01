import LostPetCard from "./LostPetCard";
import { Row, Col } from "reactstrap";
import { selectAllLostPets } from "./lostPetSlice";

const LostPetList = () => {
    const lostpets = selectAllLostPets();
    console.log('lost pets:', lostpets)

    return (
        <Row>
            {lostpets.map((lostpet) => {
                return (
                    <Col
                        sm='6'
                        md='4'
                        lg='3'
                        key={lostpet.id}
                    >
                        <LostPetCard lostpet={lostpet} />
                    </Col>
                );
            })}
        </Row>
    );
};
export default LostPetList;