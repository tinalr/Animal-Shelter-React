import { LOSTPETS } from "../../app/data/LOSTPETS";

export const selectAllLostPets = () => {
    return LOSTPETS;
}; 

export const selectLostDogs = () => {
    return LOSTPETS.filter((object) => object.species === 'dog');
};

export const selectLostCats = () => {
    return LOSTPETS.filter((object) => object.species === 'cat');
};

export const selectLostOthers = () => {
    return LOSTPETS.filter((object) => object.species === 'other');
};