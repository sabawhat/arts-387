import healing_data_1 from "./scripts/healing-place-1.json"
import soft_data_1 from './scripts/soft-place-1.json'
import chaotic_data_1 from './scripts/chaotic-place-1.json'
import eternal_data_1 from './scripts/eternal-place-1.json'
import healing_data_2 from "./scripts/healing-place-2.json"
import soft_data_2 from './scripts/soft-place-2.json'
import chaotic_data_2 from './scripts/chaotic-place-2.json'
import eternal_data_2 from './scripts/eternal-place-2.json'
import healing_data_3 from "./scripts/healing-place-3.json"
import soft_data_3 from './scripts/soft-place-3.json'
import chaotic_data_3 from './scripts/chaotic-place-3.json'
import eternal_data_3 from './scripts/eternal-place-3.json'
import healing_data_low from "./scripts/healing-place-low.json"
import soft_data_low from './scripts/soft-place-low.json'
import chaotic_data_low from './scripts/chaotic-place-low.json'
import eternal_data_low from './scripts/eternal-place-low.json'
import healing_data_high from "./scripts/healing-place-high.json"
import soft_data_high from './scripts/soft-place-high.json'
import chaotic_data_high from './scripts/chaotic-place-high.json'
import eternal_data_high from './scripts/eternal-place-high.json'
import empty_data from './scripts/empty-place.json'


function loadJson() {
    const healing_1 = [...healing_data_1];
    const soft_1 = [...soft_data_1];
    const chaotic_1 = [...chaotic_data_1];
    const eternal_1 = [...eternal_data_1];

    const healing_2 = [...healing_data_2];
    const soft_2 = [...soft_data_2];
    const chaotic_2 = [...chaotic_data_2];
    const eternal_2 = [...eternal_data_2];

    const healing_3 = [...healing_data_3];
    const soft_3 = [...soft_data_3];
    const chaotic_3 = [...chaotic_data_3];
    const eternal_3 = [...eternal_data_3];

    const healing_low = [...healing_data_low];
    const soft_low = [...soft_data_low];
    const chaotic_low = [...chaotic_data_low];
    const eternal_low = [...eternal_data_low];

    const healing_high = [...healing_data_high];
    const soft_high = [...soft_data_high];
    const chaotic_high = [...chaotic_data_high];
    const eternal_high = [...eternal_data_high];

    const empty = [...empty_data]

    const all_healing = [healing_1, healing_2, healing_3, healing_low, healing_high];
    const all_soft = [soft_1, soft_2, soft_3, soft_low, soft_high];
    const all_chaotic = [chaotic_1, chaotic_2, chaotic_3, chaotic_low, chaotic_high];
    const all_eternal = [eternal_1, eternal_2, eternal_3, eternal_low, eternal_high];

    const all_scripts = [all_healing, all_soft, all_chaotic, all_eternal, [empty]]
    return all_scripts;
}

export default loadJson;

// all_scripts = array containing arrays that contain all of the scripts for each location
// inner arrays contain different arrays loaded in from json data