import LostPetCard from "./LostPetCard";
import { useState } from "react";
import { Row, Col, Container, Button, ButtonGroup } from "reactstrap";
import { selectAllLostPets, selectLostDogs, selectLostCats, selectLostOthers } from "./lostPetSlice";
import PostLostPetForm from "./PostLostPetForm";

const LostPetList = () => {

    const [filter, setFilter] = useState(selectAllLostPets)

    return (
        <Container>
            <Row className="my-4">
                <Col>
                    <ButtonGroup>
                        <Button onClick={() => setFilter(selectLostDogs)}>Dogs</Button>
                        <Button onClick={() => setFilter(selectLostCats)}>Cats</Button>
                        <Button onClick={() => setFilter(selectLostOthers)}>Other</Button>
                        <Button color="danger" onClick={() => setFilter(selectAllLostPets)}>Reset</Button>
                    </ButtonGroup>
                </Col>
                <Col sm='3'>

                    <PostLostPetForm/>

                </Col>
            </Row>
            <Row className="my-4">
                {filter.map((lostpet) => {
                    return (
                        <Col
                            className="my-4"
                            xs='6'
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