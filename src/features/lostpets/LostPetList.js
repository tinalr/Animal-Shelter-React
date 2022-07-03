import LostPetCard from "./LostPetCard";
import { useState } from "react";
import { Row, Col, Container, Button, ButtonGroup } from "reactstrap";
import { selectAllLostPets, selectLostDogs, selectLostCats, selectLostOthers } from "./lostPetSlice";

const LostPetList = () => {

    const [filter, setFilter] = useState('all')

    const handleFilter = (value) => {
        setFilter(value);
        
        if (value === 'dog') { selectLostDogs() }
        else if (value === 'cat') { selectLostCats() }
        else if (value === 'other') { selectLostOthers() }
        else if (value === 'all') { selectAllLostPets() }
        
    };

    return (
        <Container>
            <Row>
                <ButtonGroup>
                    <Button onClick={() => handleFilter('dogs')}>Dogs</Button>
                    <Button onClick={() => handleFilter('cats')}>Cats</Button>
                    <Button onClick={() => handleFilter('other')}>Other</Button>
                    <Button color="danger" onClick={() => handleFilter('all')}>Reset</Button>
                </ButtonGroup>
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