import { tcoe } from './tcoe.js'

export let spells = {}

let convertTashas = function() { 
    for(let k in tcoe) {
        spells[k] = tcoe[k];
    }
}
convertTashas();