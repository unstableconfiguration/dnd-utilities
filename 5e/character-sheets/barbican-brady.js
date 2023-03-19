import { Character } from '../character.js';
import notes from '../character-notes/barbican-brady.md';

export let BarbicanBrady = new Character({
    Name : 'Barbican Brady',
    Race : 'Human',
    Alignment : 'Chaotic Good',
    Speed : 30,
    Senses : '',
    Languages : 'common, -look up languages',
    Stats : {
        // Base Stats: 15, 13, 13, 13, 11, 8
        // +1 all for human
        Strength : 16, 
        Dexterity : 14,
        Constitution : 14, 
        Intelligence : 9,
        Wisdom : 12, 
        Charisma : 14 
    },
    Classes : [
        { Name : 'Bard', Level : 3, Archetype : 'Valor' }
    ],
    Defenses : {
        //HP :
        AC : '14 (studded leather)', // may need to upgrade
        Immunities : '',
        Resistances : '',
        ConditionImmunities : '',
        Saves : {
            Dexterity : { Trained : true  },
            Charisma : { Trained : true }
        }
    },
    Skills : {
        // Background: carnival wrestler
        Athletics : { Trained : true, Expertise : true }, // expertise with lvl 3
        Performance : { Trained : true, Expertise : true },
        // Bard - pick 3
        Insight : { Trained : true },
        Persuasion : { Trained : true },
        Acrobatics : { Trained : true },

        'Sleight of Hand' : { Bonus : 1 },
        Stealth : { Bonus : 1 },
        'Animal Handling' : { Bonus : 1 },
        Medicine : { Bonus : 1 },
        Perception : { Bonus : 1 },
        Survival : { Bonus : 1 },
        Deception : { Bonus : 1 },
        Intimidation : { Bonus : 1 }
    },
    Features : {
        'Spellcasting' : `Brady is a 3rd level spellcaster. His spellcasting ability modifier 
            is Charisma (spell save DC 12, +4 to hit with spell attacks). He has the following spells prepared: 
                <br>Cantrips: Prestidigitation, Light
                <br>1st (4 slots): Comprehend Languages, Detect Magic, Disguise Self, Healing Word
                <br>2nd (2 slots): Enhance Ability, Lesser Restoration`,
        'Bardic Inspiration (2 slots)' : `Brady can use a bonus action to inspire another creature within 60 feet. 
            For the next 10 minutes, the creature has a bardic inspiration die (d6) which they can roll to: 
            <br>* Add it to the result of one ability check, attack roll, or saving throw. 
            <br>* Add it to a weapon damage roll. 
            <br>* Add it to their AC against an attack (after roll, before hit)`,
        'Jack of All Trades' : `Brady can add half his proficiency, rounded down, to any ability check he makes that 
            he is not already proficient with. `,
        'Song of Rest' : `Brady and friendly creatures that gain hit points during a short rest can gain an additional d6 hit points.`
    },
    Spells : [
        // Cantrips
        'Prestidigitation', 'Light',

        // Level 1
        'Comprehend Languages', 'Detect Magic', 'Disguise Self',
        'Healing Word', 'Identify',

        // Level 2
        'Enhance Ability'
    ],
    Actions : {
        'Attack' : `Brady can make a melee attack, shoot his hand crossbow, or grapple`,
        'Melee Attack' : `+5 to hit, one target. Longsword, Quarterstaff, Crowbar, unarmed`,
        'Hand Crossbow' : `Ranged weapon attack +4 to hit, range 30ft, one target. Hit 4 (d6+2) piercing damage.`,
        'Grapple' : `Make a grapple check (Athletics) contested by the opponent's athletics or acrobatics check.`        
    },
    Items : {
        'Rod of the Pact Keeper' : 1 
        , 'Gold' : 20 
        , 'Studded Leather' : 1
        , 'Bag of Holding' : 1
        , 'Traveler\'s clothes' : 1
        , 'Fine Clothes' : 3
        , 'Silk Rope' : 2
        , 'Explorer\'s Pack' : 1
        , 'Fishing Tackle' : 2
        , 'Grappling Hook' : 2
        , 'Jug' : 1
        , '' : 0
    },
    Background : {
        Trait : `I'm always looking to test my strength against others.`
        , Ideal : `I like to inspire people and let them share in feelings of heroism.`
        , Bond : `Win or lose, I feel cameraderie with anyone who will matches with me.`
        , Flaw : `I like to 'play the heel' in my performances, often playing a local lord or authority.`
        , Background : `Carnival Wrestler`
        , Description : `Travelling carnivals often have a master and one or more journeymen wrestlers that can spar with the locals. `
        , Feature : `Tool Proficiency, disguise kit. `
    }

});

BarbicanBrady.Notes = notes;