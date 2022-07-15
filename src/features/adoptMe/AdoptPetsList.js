
import { Col, Row, } from 'reactstrap';
import AdoptPetsCard from './AdoptPetsCard';
import { selectAllPets, selectPetsById } from './adoptPetsSlice';

const AdoptPetsList = ({ petType } ) => {
    const pets = selectAllPets();
    return (
        <Row className='my-5'>
            {petType.map((pets) => {
                return (
                    <Col className='my-4' xs='6' sm='4' lg='3' key={pets.id} >
                        <AdoptPetsCard onClick={selectPetsById(pets.id)} pets={pets} />
                    </Col>
                );
            })}
        </Row>
    );
}

export default AdoptPetsList;