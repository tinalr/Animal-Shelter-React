import { ADOPTPETS } from '../../app/data/ADOPTPETS';

export const selectAllPets = () => {
    return ADOPTPETS;
}

export const selectPetsById = (id) => {
    return ADOPTPETS.find((pets) => pets.id === id);
}

export const selectPetsByTypeDog = () => {
    return ADOPTPETS.filter((pets) => pets.type === 'dog');
}

export const selectPetsByTypeCat = () => {
    return ADOPTPETS.filter((pets) => pets.type === 'cat' )
}

export const selectkidFriendlyPet = () => {
    return ADOPTPETS.filter((pets) => pets.kidFriendly )
}

export const selectPetFriendlyPet = () => {
    return ADOPTPETS.filter((pets) => pets.petFriendly)
}

export const alonePet = () => {
    return ADOPTPETS.filter((pets) => !pets.kidFriendly && !pets.petFriendly)
}