import { monsterManual } from './imports/monsters/condensed-mm-monsters'
import { volos } from './imports/monsters/condensed-vgm-monsters'
import { mordenkainens } from './imports/monsters/condensed-mtf-monsters'
import { strahd } from './imports/monsters/condensed-cos-monsters'
//import * as wat  from './imports/monster-sanitizer.js';

export const monsters = {}

let Monster = function(data){
    this.Alignment = data.Alignment;
    this.ChallengeRating = data.ChallengeRating;
    this.Defenses = {
        AC : data.AC,
        ConditionImmune : data.ConditionImmune,
        HP : data.HP,
        Immune : data.Immune,
        Resist : data.Resist,
        Vulnerable : data.Vulnerable,
        Saves : data.Saves
    };
    this.Description = data.Description;
    this.Languages = data.Languages;
    this.Name = data.Name;
    this.Senses = data.Senses;
    this.Size = data.Size;
    this.Skills = data.Skills;
    this.Speed = data.Speed;
    this.Stats = {
        Str : data.Str,
        Dex : data.Dex,
        Con : data.Con,
        Int : data.Int,
        Wis : data.Wis,
        Cha : data.Cha
    }
    this.Type = data.Type;
    this.Actions = data.Actions || [];
    this.LegendaryActions = data.LegendaryActions || [];
    this.Reactions = data.Reactions || [];
    this.Traits = data.Traits || [];
    this.Items = data.Items || [];
}

let loadMonsters = function(monsterSet) { 
    for(let m in monsterSet) { 
        let monster = monsterSet[m];
        monster = new Monster({
            Name : monster.name,
            Alignment : monster.alignment,
            ChallengeRating : monster.cr,
            ConditionImmune : monster.conditionImmune,
            Immune : monster.immune,
            Languages : monster.languages,
            Resist : monster.resist ? monster.resist.join(', ') : undefined,
            Senses : monster.senses,
            Size : {
                'T' : 'Tiny',
                'S' : 'Small',
                'M' : 'Medium',
                'L' : 'Large',
                'H' : 'Huge',
                'G' : 'Gargantuan'
            }[monster.size],
            Saves : monster.save,
            Skills : monster.skill,
            Speed : monster.speed,
            Type : monster.type,
            Vulnerable : monster.vulnerable ? monster.vulnerable.join(', ') : '', 
            AC : monster.ac,
            HP : monster.hp,
            Str : monster.str,
            Dex : monster.dex,
            Con : monster.con,
            Int : monster.int,
            Wis : monster.wis,
            Cha : monster.cha,
            Traits : monster.trait, //.map(t => { return { Name : t.name, Text : t.text }}),
            Actions : monster.action, //.map(a => { return { Name : a.name, Text : a.text }}),
            Reactions : monster.reaction, //.map(r => { return { Name : r.name, Text : r.text }}),
            LegendaryActions : monster.legendary, //.map(l => { return { Name : l.name, Text : l.text }})
        });
    
        monsters[monster.Name] = monster;
        
    }    
}

loadMonsters(monsterManual);
loadMonsters(volos);
loadMonsters(mordenkainens);
loadMonsters(strahd);