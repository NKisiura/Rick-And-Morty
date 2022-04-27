export interface CharacterInterface {
  id: number,
  name: string,
  status: CharacterAliveStatusTypes,
  species: string,
  type: string,
  gender: CharacterGenderTypes,
  origin: {
    name: string,
    link: string
  },
  location: {
    name: string,
    link: string
  },
  image: string,
  episode: string[],
  url: string,
  created: string
}

export type CharacterAliveStatusTypes = 'Alive' | 'Dead' | 'unknown';
export type CharacterGenderTypes = 'Female' | 'Male' | 'Genderless' | 'unknown';
