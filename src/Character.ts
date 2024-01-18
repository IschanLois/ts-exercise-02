type Height = `${number}`

type Mass = `${number}` | 'unknown'

type HairColor =
  | 'blond'
  | 'brown'
  | 'brown, grey'
  | 'black'
  | 'auburn, white'
  | 'auburn, grey'
  | 'white'
  | 'grey'
  | 'auburn'
  | 'blonde'
  | 'n/a'
  | 'none'

type SkinColor =
  | 'fair'
  | 'gold'
  | 'white, blue'
  | 'white'
  | 'light'
  | 'white, red'
  | 'unknown'
  | 'green'
  | 'green-tan, brown'
  | 'pale'
  | 'metal'
  | 'dark'
  | 'brown mottle'
  | 'brown'
  | 'grey'
  | 'mottled green'
  | 'orange'
  | 'blue, grey'
  | 'grey, red'
  | 'red'
  | 'blue'
  | 'grey, blue'
  | 'grey, green, yellow'
  | 'yellow'
  | 'tan'
  | 'fair, green, yellow'
  | 'silver, red'
  | 'green, grey'
  | 'red, blue, white'
  | 'brown, white'

type EyeColor =
  | 'blue'
  | 'yellow'
  | 'red'
  | 'brown'
  | 'blue-gray'
  | 'black'
  | 'orange'
  | 'hazel'
  | 'pink'
  | 'unknown'
  | 'red, blue'
  | 'gold'
  | 'green, yellow'
  | 'white'

type BirthYear = `${number}BBY`

type Gender = 'male' | 'female' | 'hermaphrodite' | 'none' | 'n/a'

export type Url<T extends string> = `https://swapi.dev/api/${T}/${number}/` | `https://swapi.dev/api/${T}/?page=${number}`

export type Character = {
  name: string
	height: Height
	mass: Mass
	hair_color: HairColor
	skin_color: SkinColor
	eye_color: EyeColor
	birth_year: BirthYear
	gender: Gender
	homeworld: Url<'planets'>
	films: Url<'films'>[]
	species: Url<'species'>[]
	vehicles: Url<'vehicles'>[]
	starships: Url<'starships'>[]
	created: string
	edited: string
	url: Url<'people'>
}
