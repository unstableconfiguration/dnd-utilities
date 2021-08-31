import { phbSpells } from './imports/spells.js';
import { tcoeSpells } from './imports/tcoe-spells.js'

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

/* phb import contains spells from elemental evil as well */
let convertPhb = function() { 
    phbSpells.forEach(s => {
        let spell = new Spell({
            CastingTime : s.Cast_Time,
            Components : s.Components,
            Description : s.Description + '<br>' + s.Description_Higher_Levels,
            Level : s.Level,
            Name : s.Name,
            Range : s.Range, 
            Ritual : s.Ritual,
            School : s.School
        });
        spells[spell.Name] = spell;
    });
}

let convertTashas = function() { 
    for(let k in tcoeSpells) {
        let spell = tcoeSpells[k];
        spell = new Spell({
            CastingTime : spell.CastingTime,
            Components : spell.Components,
            Description : spell.Description,
            Level : spell.Level,
            Name : spell.Name,
            Range : spell.Range, 
            Ritual : spell.Ritual,
            School : spell.School
        });
        
        spells[spell.Name] = spell; 
    }
}
convertPhb();
convertTashas();
