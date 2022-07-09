import { Card, CardImg, CardText, CardBody, Col, CardTitle, Button } from 'reactstrap';

const AdoptPetsDetails = ({ pets }) => {
    const { image, name, description } = pets;
    

    return (
        <Col md='12' className='m-4'>
            <Card>
                <CardImg top src={image} alt={name} />
                <CardBody>
                    <CardTitle className='text-center'>{name}</CardTitle>
                    <CardText>{description}</CardText>
                    <Button>Adopt Me</Button>
                    
                </CardBody>
            </Card>
        </Col>
    );
}

export default AdoptPetsDetails;