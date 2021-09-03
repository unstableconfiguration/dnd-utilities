import { phbMonsters } from "./imports/monsters.js"

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
    
let preparePhbMonsters = function() { 
    for(let m in phbMonsters) {
        let phbMonster = phbMonsters[m];
        if(!Array.isArray(phbMonster.trait)) { phbMonster.trait = phbMonster.trait ? [phbMonster.trait] : []; }
        if(!Array.isArray(phbMonster.action)) { phbMonster.action = phbMonster.action ? [phbMonster.action] : []; }
        if(!Array.isArray(phbMonster.legendary)) { phbMonster.legendary = phbMonster.legendary ? [phbMonster.legendary] : []; }
        if(!Array.isArray(phbMonster.reaction)) { phbMonster.reaction = phbMonster.reaction ?[phbMonster.reaction] : []; }

        monsters[m] = new Monster({
            Name : phbMonster.name,
            Alignment : phbMonster.alignment,
            ChallengeRating : phbMonster.cr,
            ConditionImmune : phbMonster.conditionImmune,
            Immune : phbMonster.immune,
            Languages : phbMonster.languages,
            Resist : phbMonster.resist,
            Senses : phbMonster.senses,
            Size : {
                'T' : 'Tiny',
                'S' : 'Small',
                'M' : 'Medium',
                'L' : 'Large',
                'H' : 'Huge',
                'G' : 'Gargantuan'
            }[phbMonster.size],
            Saves : phbMonster.save,
            Skills : phbMonster.skill,
            Speed : phbMonster.speed,
            Type : phbMonster.type.split(',')[0],
            Vulnerable : phbMonster.vulnerable, 
            AC : phbMonster.ac,
            HP : phbMonster.hp,
            Str : phbMonster.str,
            Dex : phbMonster.dex,
            Con : phbMonster.con,
            Int : phbMonster.int,
            Wis : phbMonster.wis,
            Cha : phbMonster.cha,
            Traits : phbMonster.trait.map(t => { return { Name : t.name, Text : t.text }}),
            Actions : phbMonster.action.map(a => { return { Name : a.name, Text : a.text }}),
            Reactions : phbMonster.reaction.map(r => { return { Name : r.name, Text : r.text }}),
            LegendaryActions : phbMonster.legendary.map(l => { return { Name : l.name, Text : l.text }})
        });
    }
}

preparePhbMonsters();