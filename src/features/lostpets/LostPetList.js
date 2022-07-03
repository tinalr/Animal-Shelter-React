import LostPetCard from "./LostPetCard";
import { useState } from "react";
import { Row, Col, Container, Button, ButtonGroup } from "reactstrap";
import { selectAllLostPets, selectLostDogs, selectLostCats, selectLostOthers } from "./lostPetSlice";

const LostPetList = () => {

    const [filter, setFilter] = useState(selectAllLostPets)

    return (
        <Container>
            <Row>
                <Col>
                    <ButtonGroup>
                        <Button onClick={() => setFilter(selectLostDogs)}>Dogs</Button>
                        <Button onClick={() => setFilter(selectLostCats)}>Cats</Button>
                        <Button onClick={() => setFilter(selectLostOthers)}>Other</Button>
                        <Button color="danger" onClick={() => setFilter(selectAllLostPets)}>Reset</Button>
                    </ButtonGroup>
                </Col>
                <Col sm='3'>
                    <Button color="primary">Post a Lost Pet</Button>
                </Col>
            </Row>
            <Row>
                {filter.map((lostpet) => {
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
        </Container>
    );
};
export default LostPetList;