import { Container, Row, Col, Button, ButtonGroup } from 'reactstrap';
//import AdoptPetsDetails from '../features/adoptMe/AdoptPetsDetails';
import AdoptPetsList from '../features/adoptMe/AdoptPetsList';
import { useState } from 'react';
import { selectAllPets, selectkidFriendlyPet, selectPetsById, selectPetsByTypeCat, selectPetsByTypeDog, selectPetFriendlyPet, alonePet } from '../features/adoptMe/adoptPetsSlice';



const AdoptionsPage = () => {
    const [petsId, setPetsId] = useState(0);
    const selectedPets = selectPetsById(petsId);

    const [petType, setPetType] = useState(selectAllPets)

    

    return (
        <Container>
            <h1 className='text-center'>Ready to Adopt?</h1>
            <Row>
                <ButtonGroup>
                    <Button color='danger' onClick={() => setPetType(selectPetsByTypeCat)}>Cats</Button>
                    <Button color='primary' onClick={() => setPetType(selectPetsByTypeDog) }>Dog</Button>
                    <Button color='success' onClick={() => setPetType(selectkidFriendlyPet)}>Kid Friendly</Button>
                    <Button color='info' onClick={() => setPetType(selectPetFriendlyPet)}>Pet Friendly</Button>
                    <Button color='light' onClick={()=> setPetType(alonePet)}>Solo Pets </Button>
                    <Button color='secondary' onClick={()=> setPetType(selectAllPets)}>Reset</Button>
                </ButtonGroup>
            </Row>
            <Row>
                <Col>
                    <AdoptPetsList petType={petType} />
                </Col>

                
            </Row>
        </Container>
    )
};

export default AdoptionsPage;

