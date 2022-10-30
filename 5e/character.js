import { items } from './items.js';
import { skills } from './skills.js';
import { spells } from './spells.js';

export class CharacterClass { 
    constructor(name, level, archetype) {
        this.Name = name;
        this.Level = +level || 1;
        this.HD = this.#classes[name].HD;
        this.Archetype = archetype || '';
    }

    #classes = { 
        'Barbarian': { HD: 12 },
        'Bard': { HD: 8 },
        'Cleric': { HD: 8 },
        'Druid': { HD: 8 },
        'Fighter': { HD: 10 },
        'Monk': { HD: 8 },
        'Paladin': { HD: 10 },
        'Ranger': { HD: 10 },
        'Rogue': { HD: 8 },
        'Sorcerer': { HD: 6 },
        'Warlock': { HD: 8 },
        'Wizard': { HD: 6 }
    }
}

export class Character { 
    constructor(char) { 
        this.Name = char.Name || 'Unnamed';
        this.Languages = char.Languages || 'common';
        this.Race = char.Race || '';
        this.Senses = char.Senses || '';
        this.Size = char.Size || 'medium';
        this.Speed = char.Speed || 30;
        this.Alignment = char.Alignment || '';
        this.Stats = char.Stats;
        this.CarryWeight = this.Stats.Strength * 15;

        this.#setClassLevels(char.Classes);
        this.Proficiency = Math.ceil((this.Level / 4) + 1 );

        this.#setDefenses(char.Defenses);
        this.#setSkills(char.Skills);

        this.Features = char.Features;
        this.Actions = char.Actions;
        this.Reactions = char.Reactions;
        this.Background = char.Background;

        this.#setSpells(char.Spells);
        this.#setItems(char.Items);
    }

    #getBonus(abilityScore) { return Math.floor((abilityScore - 10) / 2 ); }
    #setClassLevels(charClasses) {
        let level = 0;
        this.Classes = {};
        charClasses.forEach(c => {
            level += c.Level || 1;
            this.Classes[c.Name] = new CharacterClass(c.Name, c.Level, c.Archetype);
        })
        this.Level = level;
    }

    #setDefenses(defenses) { 
        this.Defenses = {
            AC : defenses.AC || 10,
            Resistances : defenses.Resistances || '',
            Immunities : defenses.ConditionImmunities || '',
            Saves : {
                Strength : this.#getBonus(this.Stats.Strength),
                Dexterity : this.#getBonus(this.Stats.Dexterity),
                Constitution : this.#getBonus(this.Stats.Strength),
                Intelligence : this.#getBonus(this.Stats.Intelligence),
                Wisdom : this.#getBonus(this.Stats.Wisdom),
                Charisma : this.#getBonus(this.Stats.Charisma)     
            }
        }

        for(let save in defenses.Saves) {
            if(defenses.Saves[save].Trained)
                this.Defenses.Saves[save] += this.Proficiency;
            if(defenses.Saves[save].Bonus)
                this.Defensese.Saves[save] += defenses.Saves[save].Bonus;
        }

        this.Defenses.HP = this.#getHp();
    }

    #getHp() { 
        let hp = 0;
        Object.keys(this.Classes).forEach((name, idx) => {
            let _class = this.Classes[name];

            hp += _class.Level *  ((_class.HD / 2) + 1);
            if(idx == 0) // Extra HP for first level
                hp += (_class.HD / 2) - 1;
            

        })
        hp += this.#getBonus(this.Stats.Constitution) *  this.Level;
        return hp;
    }

    // poor naming: 
        // skills = a list of all skills from PH
        // charSkills = params from char sheet 
    #setSkills(charSkills) {
        this.Skills = {};
        for(let name in skills) {
            let ability = skills[name];
            let charSkill = charSkills[name];
            this.Skills[name] = {
                Name : name,
                Ability : ability.substring(0, 3),
                Trained : charSkill?.Trained || false,
                Expertise : charSkill?.Expertise || false
            }

            let bonus = this.#getBonus(this.Stats[ability]);
            if(this.Skills[name].Trained) bonus += this.Proficiency;
            if(this.Skills[name].Expertise) bonus += this.Proficiency;
            this.Skills[name].Bonus = bonus;
        }
    }

    #setSpells(charSpells) {
        this.Spells = {};
        charSpells.forEach(s => this.Spells[s] = spells[s]);
    }

    #setItems(charItems = {}) {
        this.Items = {};
        for(let name in charItems) {
            if(!items[name]) console.log(name + ' not found in items db');

            let item = items[name] ?
                 Object.assign({}, items[name])
                 : { Name : name, Weight : 0, Cost : 0 };
            item.Count = charItems[name];
            item.baseWeight = item.Weight || 0;
            item.Weight = Math.floor(((item.baseWeight * item.Count) * 10)) / 10;
            this.Items[name] = item;
        }
    }
}
