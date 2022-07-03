import { Card, CardImg, CardTitle, CardBody, List } from "reactstrap";

const LostPetCard = ({ lostpet }) => {
    const { id, name, sex, breed, location, weight, species, image } = lostpet;
    
    return (
        <Card outline='true'>
            <CardImg
                className="lostPetCardImg"
                top='true'
                src={image}
                alt={name}
            />
            <CardTitle tag='h4'>
                {name}
            </CardTitle>
            <CardBody>
                <List type='unstyled'>
                    <li>Species: {species}</li>
                    <li>Breed: {breed}</li>
                    <li>Sex: {sex}</li>
                    <li>Weight: {weight}</li>
                    <li>Last Seen: {location}</li>
                </List>
            </CardBody>
        </Card>
    );
};
export default LostPetCard;