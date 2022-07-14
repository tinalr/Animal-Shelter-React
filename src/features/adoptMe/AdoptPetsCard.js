import { Card, CardImg, CardTitle, Button } from "reactstrap";


const AdoptPetsCard = ({ pets }) => {
  console.log(pets);
  const { image, name } = pets;

  return (

    <Card>
      <CardImg className="adoptPetCardImg" width="100%" src={image} alt={name} />
      <CardTitle tag='h4' className="text-center" >{name}</CardTitle>
      <Button className="custom-btn">Adopt Me</Button>
    </Card>

  );
};

export default AdoptPetsCard;