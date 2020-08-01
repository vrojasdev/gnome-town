import { Gnome, FilterOptions } from "../redux";
var lodash = require('lodash');


// function that generates an array only containing the id's of the population
export const generateActiveIndices = (population:Array<Gnome>) => {
    return population.map(gnome => gnome.id);
}


// function that process the filter by Age
export const filterByAge = (data:Array<Gnome>, activeFilters:FilterOptions) => {
    const arrayFiltered:Array<Gnome> = data.filter(gnome => {
        return (activeFilters.minAge <= gnome.age) && (gnome.age <= activeFilters.maxAge);
    });

    return arrayFiltered;
}

// function that process the filter by Weight
export const filterByWeight = (data:Array<Gnome>, activeFilters:FilterOptions) => {
    const arrayFiltered:Array<Gnome> = data.filter(gnome => {
        return (activeFilters.minWeight <= gnome.weight) && (gnome.weight <= activeFilters.maxWeight);
    });

    return arrayFiltered;
}

// function that process the filter by Height
export const filterByHeight = (data:Array<Gnome>, activeFilters:FilterOptions) => {
    const arrayFiltered:Array<Gnome> = data.filter(gnome => {
        return (activeFilters.minHeight <= gnome.height) && (gnome.height <= activeFilters.maxHeight);
    });

    return arrayFiltered;
}

// function that process the filter by HairColor
export const filterByHairColor = (data:Array<Gnome>, activeFilters:FilterOptions) => {
    const arrayFiltered:Array<Gnome> = data.filter(gnome => {
        return activeFilters.hairColor.includes(gnome.hair_color)
    });

    return arrayFiltered;
}

// function that process the filter by Professions
export const filterByProfessions = (data:Array<Gnome>, activeFilters:FilterOptions) => {
    const arrayFiltered:Array<Gnome> = data.filter(gnome => {
        return (gnome.professions.length > 0) && (lodash.intersection(activeFilters.professions, gnome.professions).length > 0)
    });

    return arrayFiltered;
}

// function that process the filter by Name
export const filterByName = (data:Array<Gnome>, activeFilters:FilterOptions) => {
    const arrayFiltered:Array<Gnome> = data.filter(gnome => {
        return (gnome.name.toLowerCase().includes(activeFilters.name.toLowerCase()))
    });

    return arrayFiltered;
}


/*  ----------------------------------------------------------------------------------------
    function that process the filters applied and returns the array of id's corresponding 
    to the individuals that match the filters indicated by the user
    ----------------------------------------------------------------------------------------  */
export const generateNewActiveArray = (population:Array<Gnome>, activeFilters:FilterOptions, resetFilters:FilterOptions, initialResults:Array<number>) => {
    let newResults:Array<number> = [...initialResults];

    // if activeFilters === resetFilters => results = initialResults
    if (lodash.isEqual(activeFilters, resetFilters)) {
        return newResults;
    } 

    else {
        // First we filter by Age
        let tempPopulation:Array<Gnome> = filterByAge(population, activeFilters);
        // if after filtering by Age we have population, then we filter by Weight
        if (tempPopulation.length > 0) tempPopulation = filterByWeight(tempPopulation, activeFilters);
        // if after filtering by Weight we have population, then we filter by Height
        if (tempPopulation.length > 0) tempPopulation = filterByHeight(tempPopulation, activeFilters);
        // if after filtering by Height we have population, then we filter by HairColor
        if (tempPopulation.length > 0 && activeFilters.hairColor.length > 0) tempPopulation = filterByHairColor(tempPopulation, activeFilters);
        // if after filtering by HairColor we have population, then we filter by Professions
        if (tempPopulation.length > 0 && activeFilters.professions.length > 0) tempPopulation = filterByProfessions(tempPopulation, activeFilters);
        // if after filtering by Professions we have population, then we filter by Name
        if (tempPopulation.length > 0) tempPopulation = filterByName(tempPopulation, activeFilters);
        
        // if After all filters we have population, then we get the ids of the population left
        // otherwise we return an empty array with no population
        //(tempPopulation.length > 0) ? newResults = tempPopulation.map(g => g.id) : newResults = [];
        (tempPopulation.length > 0) ? newResults = generateActiveIndices(tempPopulation) : newResults = [];
    }

    return newResults;
}