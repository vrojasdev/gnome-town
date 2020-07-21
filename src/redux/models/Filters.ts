export interface Age {
    minAge: number,
    maxAge: number
}

export interface Weight {
    minWeight: number,
    maxWeight: number
}

export interface Height {
    minHeight: number,
    maxHeight: number
}

export interface FilterOptions extends Age, Weight, Height {
    name: string,
    hairColor: Array<string>,
    professions: Array<string>
}

export interface Filters {
    active: FilterOptions,
    initialValues: FilterOptions,
    resetValues: FilterOptions
}
