import { Gnome, FilterOptions, Results } from "../redux";
var lodash = require('lodash');

export const generateActiveIndices = (population:Array<Gnome>) => {
    return population.map(gnome => gnome.id);
}


export const generateNewActiveArray = (population:Array<Gnome>, activeFilters:FilterOptions, resetFilters:FilterOptions, results:Array<number>) => {
    let newResults:Array<number> = [...results];

    // if activeFilters === resetFilters => results = []
    if (lodash.isEqual(activeFilters, resetFilters)) {
        return newResults;
    } 

    else {
        // First we filter by Age
        const populationAfterAge = population.filter(gnome => {
            return (activeFilters.minAge <= gnome.age) && (gnome.age <= activeFilters.maxAge);
        });

        // if after filtering by Age we have population, then we filter by Weight
        if(populationAfterAge.length > 0) {
            const populationAfterWeight = populationAfterAge.filter(gnome => {
                return (activeFilters.minWeight <= gnome.weight) && (gnome.weight <= activeFilters.maxWeight);
            });
            
        // if after filtering by Weight we have population, then we filter by Height
            if(populationAfterWeight.length > 0) {
                const populationAfterHeight = populationAfterWeight.filter(gnome => {
                    return (activeFilters.minHeight <= gnome.height) && (gnome.height <= activeFilters.maxHeight);
                });
                
        // if after filtering by Height we have population, then we filter by HairColor
                if(populationAfterHeight.length > 0) {
                    // if the HairColor filter has any value, then we filter
                    const populationAfterHair:Array<Gnome> =
                    (activeFilters.hairColor.length > 0) 
                    ?   populationAfterHeight.filter(gnome => {
                            return activeFilters.hairColor.includes(gnome.hair_color)
                        })
                    :   populationAfterHeight;

        // if after filtering by HairColor we have population, then we filter by Professions
                    if(populationAfterHair.length > 0) {
                        // if the Professions filter has any value, then we filter
                        const populationAfterProfessions: Array<Gnome> =
                        (activeFilters.professions.length > 0)
                        ?   populationAfterHair.filter(gnome => {
                                return (gnome.professions.length > 0) && (lodash.intersection(activeFilters.professions, gnome.professions).length > 0)
                            })
                        :   populationAfterHair;
                        
        // if after filtering by Professions we have population, then we filter by Name
                        if(populationAfterProfessions.length > 0) {
                            let populationAfterName:Array<Gnome>;
                            // we check if we are filtering by name
                            if(activeFilters.name !== '') {
                                populationAfterName = populationAfterProfessions.filter(gnome => {
                                    return (gnome.name.toLowerCase().includes(activeFilters.name.toLowerCase()))
                                });
                                // if After all filters we have population, then we get the ids of the population left
                                newResults = populationAfterName.map(g => g.id);
                            }
                            // otherwise we return the values after filtering from professions
                            else newResults = populationAfterProfessions.map(g => g.id);
                        }
                    }
                }
            }
        }

        // the "newResults" array contains the id's of the elements matching the filters specified
        return newResults;
    }
}