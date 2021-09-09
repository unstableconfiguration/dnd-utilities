import { condensedPhb } from "./imports/spells/spells-condensed-phb";
import { condensedTce } from './imports/spells/spells-condensed-tce';
import { condensedXge } from './imports/spells/spells-condensed-xge';

//import * as x from './imports/spells-sanitizer'


export const spells = {}

let Spell = function(data) { 
    this.CastingTime = data.CastingTime;
    this.Components = data.Components;
    this.Description = data.Description;
    this.Duration = data.Duration,
    this.Level = data.Level;
    this.Name = data.Name;
    this.Range = data.Range;
    this.Ritual = data.Ritual;
    this.School = data.School;
    return this;
}



let convertSpell = function(spell) {
    //console.log(spell)
    return new Spell({
        CastingTime : spell.castTime,
        Components : spell.components,
        Description : spell.description,
        Duration : spell.duration,
        Level : spell.level,
        Name : spell.name,
        Range : spell.range,
        Ritual : spell.meta && spell.meta.ritual,
        School : spell.school
    });
}

condensedPhb.forEach(s => { 
    spells[s.name] = convertSpell(s);
});

condensedTce.forEach(s => {
    spells[s.name] = convertSpell(s);
})

condensedXge.forEach(s => {
    spells[s.name] = convertSpell(s);
});