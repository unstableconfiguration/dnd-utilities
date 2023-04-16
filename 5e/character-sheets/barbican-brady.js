import { Character } from '../character.js';
import notes from '../character-notes/barbican-brady.md';

export let BarbicanBrady = new Character({
    Name : 'Barbican Brady',
    Race : 'Human',
    Alignment : 'Chaotic Good',
    Speed : 30,
    Senses : '',
    Languages : 'common, Orc',
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
        // Todo: level to 4
        { Name : 'Bard', Level : 3, Archetype : 'Valor' }
    ],
    Defenses : {
        AC : '16 (breastplate)',// 14 + 2 dex
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
        'Combat Inspiration' : `Bardic inspiration die can be used to add to the damage of an attack or as a reaction 
            to boost AC against an attack.3`,
        'Jack of All Trades' : `Brady can add half his proficiency, rounded down, to any ability check he makes that 
            he is not already proficient with. `,
        'Song of Rest' : `Brady and friendly creatures that gain hit points during a short rest can gain an additional d6 hit points.`
    },
    // Todo: know spell components so we know when we need a focus
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
        // Todo: split these into objects 
            // key for looking up in item dictionary 
            // display text to override base name
            // count defaulting to 1

        // Weapons and Armor
        'Handaxe' : 1
        , 'Longsword' : 1 // Longsword of vengeance, cursed +1 longsword2
        , 'Crowbar' : 1 // Excallibar
        , 'Breastplate' : 1

        // Adventuring Kit
        , 'Backpack' : 1
        , 'Map or Scroll Case' : 1
        , 'Chalk' : 2
        , 'Grappling Hook' : 1
        , 'Hammer' : 1
        , 'Silk Rope (50 feet)' : 1
        , 'Piton' : 10

        // Food 
        , 'Book' : 1 // regional edible plants 
        , 'Fishing Tackle' : 1
        , 'Flask' : 2
        , 'Tinderbox' : 1
        , 'Mess Kit' : 1
        , 'Iron Pot': 1
        , 'Jug' : 1 
        , 'Waterskin' : 1
        
        // Grooming
        , 'Traveler\'s Clothes' : 1
        , 'Fine Clothes' : 1
        , 'Disguise Kit' : 1
        //, 'Razor' : 1
        //, 'Stropping Leather' : 1
        , 'Soap' : 1
        , 'Steel Mirror' : 1
        , 'Whetstone' : 1
        
        // Bedding 
        , 'Tent' : 1
        , 'Bedroll' : 1
        , 'Blanket' : 1

        // Writing
        , 'Sealing Wax' : 5
        , 'Ink' : 1
        , 'Ink Pen' : 2
        , 'Paper' : 5
       
    },
    Background : {
        Trait : `I'm always looking to test my strength against others.`
        , Ideal : `I like to inspire people and let them share in feelings of heroism.`
        , Bond : `Win or lose, I feel cameraderie with anyone who will match with me.`
        , Flaw : `I can tend to think with my muscles and neglect better tools.`
        , Background : `Carnival Wrestler`
        , Description : `Traveling carnivals often have a master and one or more journeymen wrestlers that can spar with the locals. `
        , Feature : `Tool Proficiency, disguise kit. `
    }
});

BarbicanBrady.Notes = notes;