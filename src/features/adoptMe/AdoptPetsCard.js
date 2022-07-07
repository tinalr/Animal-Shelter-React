import { Card, CardImg, CardTitle, Button } from "reactstrap";


const AdoptPetsCard = ({ pets }) => {
  console.log(pets);
  const { image, name } = pets;

    return (
      
    <Card>
      <CardImg width="100%" src={image} alt={name} />
        <CardTitle className="text-center" >{name}</CardTitle>
        <Button color='warning'>Adopt Me</Button>
    </Card>
        
  );
 };

export default AdoptPetsCard;