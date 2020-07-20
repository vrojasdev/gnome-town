import { Gnome } from '../redux/models';
var loadshArray = require('lodash');

export const ProcessArrayInfo = (arrayData:Array<Gnome>) => {
    const ageData = arrayData.map(gnome => gnome.age);
    const weightData = arrayData.map(gnome => gnome.weight);
    const heightData = arrayData.map(gnome => gnome.height);
    const hairData = arrayData.map(gnome => gnome.hair_color);
    const professionsData = arrayData.map(gnome => gnome.professions);

    //console.log(ageData);
    //console.log(weightData);
    //console.log(heightData);
    //console.log(hairData);
    //console.log(professionsData);

    // process the info for the Age filter
    const minAge = loadshArray.min(ageData);
    const maxAge = loadshArray.max(ageData);

    // process the info for the Weight filter
    const minWeight = loadshArray.min(weightData);
    const maxWeight = loadshArray.max(weightData);

    // process the info for the Height filter
    const minHeight = loadshArray.min(heightData);
    const maxHeight = loadshArray.max(heightData);

    // process the info for the HairColor filter
    const newHairValues = loadshArray.uniq(hairData);

    // process the info for the Professions filter
    const newProfessionsValues = loadshArray.union(...professionsData);

    const filtersData = {
        name: '',
        minAge: minAge,
        maxAge: maxAge,
        minWeight: Math.floor(minWeight),
        maxWeight: Math.ceil(maxWeight),
        minHeight: Math.floor(minHeight),
        maxHeight: Math.ceil(maxHeight),
        hairColor: newHairValues,
        professions: newProfessionsValues
    }

    return filtersData;
}