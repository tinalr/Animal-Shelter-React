
import { Col, Row, } from 'reactstrap';
import AdoptPetsCard from './AdoptPetsCard';
import { selectAllPets, selectPetsById } from './adoptPetsSlice';

const AdoptPetsList = ({ petType } ) => {
    const pets = selectAllPets();
    

    return (
        <Row className='ms-auto'>
            {petType.map((pets) => {
                return (
                    <Col xs='6' sm='6'  md='2' key={pets.id} >
                        <AdoptPetsCard onClick={selectPetsById(pets.id)} pets={pets} />
                    </Col>
                );
            })}
        </Row>
    );
}

export default AdoptPetsList;