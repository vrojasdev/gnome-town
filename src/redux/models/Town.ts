export interface Gnome {
    id: number,
    name: string,
    thumbnail: string,
    age: number,
    weight: number,
    height: number,
    "hair_color": string,
    professions: Array<string>,
    friends: Array<string>
}

export interface Town {
    name: string,
    population: Array<Gnome>
}