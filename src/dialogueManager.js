import healing_data_1 from "./scripts/healing-place-1.json"
import soft_data_1 from './scripts/soft-place-1.json'
import chaotic_data_1 from './scripts/chaotic-place-1.json'
import eternal_data_1 from './scripts/eternal-place-1.json'

function loadJson() {
    const healing_1 = [...healing_data_1];
    const soft_1 = [...soft_data_1];
    const chaotic_1 = [...chaotic_data_1];
    const eternal_1 = [...eternal_data_1];

    const all_healing = [healing_1];
    const all_soft = [soft_1];
    const all_chaotic = [chaotic_1];
    const all_eternal = [eternal_1];

    const all_scripts = [all_healing, all_soft, all_chaotic, all_eternal]
    return all_scripts;
}

export default loadJson;

// all_scripts = array containing arrays that contain all of the scripts for each location
// inner arrays contain different arrays loaded in from json data