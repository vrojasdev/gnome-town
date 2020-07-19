export interface FilterOptions {
    name: string,
    minAge: number,
    maxAge: number,
    minWeight: number,
    maxWeight: number,
    minHeight: number,
    maxHeight: number,
    hairColor: Array<string>,
    professions: Array<string>
}

export interface Filters {
    active: FilterOptions,
    resetValues: FilterOptions
}