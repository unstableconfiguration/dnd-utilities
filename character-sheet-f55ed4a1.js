import { _ as _classPrivateMethodGet, a as _classPrivateFieldGet, L as Lite, G as Gridify } from './index.js';
import { i as items } from './items-7818512a.js';
import { s as spells, S as SpellBox } from './spellbox-6973dd1c.js';
import { M as Modal } from './modal-74c39af9.js';

var html$2 = "<div id='character-sheet'>\r\n    <div class=\"tab-container\">\r\n        <ul>\r\n            <li id='stats'><div class=\"tab-item-content\">main</div></li>\r\n            <li id='background'><div class=\"tab-item-content\">background</div></li>\r\n            <li id='notes'><div class=\"tab-item-content\">notes</div></li>\r\n            <li id='skills'><div class=\"tab-item-content\">skills</div></li>\r\n            <li id='items'><div class=\"tab-item-content\">items</div></li>\r\n            <li id='spells'><div class=\"tab-item-content\">spells</div></li>\r\n        </ul>\r\n    </div>\r\n\t<div>\r\n\t\t<div id='sections'>\r\n\t\t\t<div class='section' id='stats-container'></div>\r\n\t\t\t<div class='section' id='background-container'></div>\r\n\t\t\t<div class='section' id='notes-container'></div>\r\n\t\t\t<div class='section' id='skills-container'></div>\r\n\t\t\t<div class='section' id='items-container'></div>\r\n\t\t\t<div class='section' id='spells-container'></div>\r\n\t\t</div>\r\n\t</div>\r\n</div>";

var skills = {};
skills.Athletics = 'Strength';
['Acrobatics', 'Sleight of Hand', 'Stealth'].forEach(s => {
  skills[s] = 'Dexterity';
});
['Arcana', 'History', 'Investigation', 'Nature', 'Religion'].forEach(s => {
  skills[s] = 'Intelligence';
});
['Animal Handling', 'Insight', 'Medicine', 'Perception', 'Survival'].forEach(s => {
  skills[s] = 'Wisdom';
});
['Deception', 'Intimidation', 'Performance', 'Persuasion'].forEach(s => {
  skills[s] = 'Charisma';
});

var _classes = /*#__PURE__*/new WeakMap();

class CharacterClass {
  constructor(name, level, archetype) {
    _classes.set(this, {
      writable: true,
      value: {
        'Barbarian': {
          HD: 12
        },
        'Bard': {
          HD: 8
        },
        'Cleric': {
          HD: 8
        },
        'Druid': {
          HD: 8
        },
        'Fighter': {
          HD: 10
        },
        'Monk': {
          HD: 8
        },
        'Paladin': {
          HD: 10
        },
        'Ranger': {
          HD: 10
        },
        'Rogue': {
          HD: 8
        },
        'Sorcerer': {
          HD: 6
        },
        'Warlock': {
          HD: 8
        },
        'Wizard': {
          HD: 6
        }
      }
    });

    this.Name = name;
    this.Level = +level || 1;
    this.HD = _classPrivateFieldGet(this, _classes)[name].HD;
    this.Archetype = archetype || '';
  }

}

var _setClassLevels = /*#__PURE__*/new WeakSet();

var _setDefenses = /*#__PURE__*/new WeakSet();

var _getHp = /*#__PURE__*/new WeakSet();

var _setSkills = /*#__PURE__*/new WeakSet();

var _setSpells = /*#__PURE__*/new WeakSet();

var _setItems = /*#__PURE__*/new WeakSet();

class Character {
  constructor(char) {
    _setItems.add(this);

    _setSpells.add(this);

    _setSkills.add(this);

    _getHp.add(this);

    _setDefenses.add(this);

    _setClassLevels.add(this);

    this.Name = char.Name || 'Unnamed';
    this.Languages = char.Languages || 'common';
    this.Race = char.Race || '';
    this.Senses = char.Senses || '';
    this.Size = char.Size || 'medium';
    this.Speed = char.Speed || 30;
    this.Alignment = char.Alignment || '';
    this.Stats = char.Stats;
    this.CarryWeight = this.Stats.Strength * 15;

    _classPrivateMethodGet(this, _setClassLevels, _setClassLevels2).call(this, char.Classes);

    this.Proficiency = Math.ceil(this.Level / 4 + 1);

    _classPrivateMethodGet(this, _setDefenses, _setDefenses2).call(this, char.Defenses);

    _classPrivateMethodGet(this, _setSkills, _setSkills2).call(this, char.Skills);

    this.Features = char.Features;
    this.Actions = char.Actions;
    this.Reactions = char.Reactions;
    this.Background = char.Background;

    _classPrivateMethodGet(this, _setSpells, _setSpells2).call(this, char.Spells);

    _classPrivateMethodGet(this, _setItems, _setItems2).call(this, char.Items);
  }

  getBonus(abilityScore) {
    return Math.floor((abilityScore - 10) / 2);
  }

}

function _setClassLevels2(charClasses) {
  var level = 0;
  this.Classes = {};
  charClasses.forEach(c => {
    level += c.Level || 1;
    this.Classes[c.Name] = new CharacterClass(c.Name, c.Level, c.Archetype);
  });
  this.Level = level;
}

function _setDefenses2(defenses) {
  this.Defenses = {
    AC: defenses.AC || 10,
    Resistances: defenses.Resistances || '',
    Immunities: defenses.ConditionImmunities || '',
    Saves: {
      Strength: this.getBonus(this.Stats.Strength),
      Dexterity: this.getBonus(this.Stats.Dexterity),
      Constitution: this.getBonus(this.Stats.Strength),
      Intelligence: this.getBonus(this.Stats.Intelligence),
      Wisdom: this.getBonus(this.Stats.Wisdom),
      Charisma: this.getBonus(this.Stats.Charisma)
    }
  };

  for (var save in defenses.Saves) {
    if (defenses.Saves[save].Trained) this.Defenses.Saves[save] += this.Proficiency;
    if (defenses.Saves[save].Bonus) this.Defensese.Saves[save] += defenses.Saves[save].Bonus;
  }

  this.Defenses.HP = _classPrivateMethodGet(this, _getHp, _getHp2).call(this);
}

function _getHp2() {
  var hp = 0;
  Object.keys(this.Classes).forEach((name, idx) => {
    var _class = this.Classes[name];
    hp += _class.Level * (_class.HD / 2 + 1);
    if (idx == 0) // Extra HP for first level
      hp += _class.HD / 2 - 1;
  });
  hp += this.getBonus(this.Stats.Constitution) * this.Level;
  return hp;
}

function _setSkills2(charSkills) {
  this.Skills = {};

  for (var name in skills) {
    var ability = skills[name];
    var charSkill = charSkills[name];
    this.Skills[name] = {
      Name: name,
      Ability: ability.substring(0, 3),
      Trained: (charSkill === null || charSkill === void 0 ? void 0 : charSkill.Trained) || false,
      Expertise: (charSkill === null || charSkill === void 0 ? void 0 : charSkill.Expertise) || false
    };
    var bonus = this.getBonus(this.Stats[ability]);
    if (this.Skills[name].Trained) bonus += this.Proficiency;
    if (this.Skills[name].Expertise) bonus += this.Proficiency;
    this.Skills[name].Bonus = bonus;
  }
}

function _setSpells2(charSpells) {
  this.Spells = {};
  charSpells.forEach(s => this.Spells[s] = spells[s]);
}

function _setItems2() {
  var charItems = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  this.Items = {};

  for (var name in charItems) {
    if (!items[name]) console.log(name + ' not found in items db');
    var item = items[name] ? Object.assign({}, items[name]) : {
      Name: name,
      Weight: 0,
      Cost: 0
    };
    item.Count = charItems[name];
    item.baseWeight = item.Weight || 0;
    item.Weight = Math.floor(item.baseWeight * item.Count * 10) / 10;
    this.Items[name] = item;
  }
}

var notes$1 = "noootes";

var BarbicanBrady = new Character({
  Name: 'Barbican Brady',
  Race: 'Human',
  Alignment: 'Chaotic Good',
  Speed: 30,
  Senses: '',
  Languages: 'common, -look up languages',
  Stats: {
    // Base Stats: 15, 13, 13, 13, 11, 8
    // +1 all for human
    Strength: 16,
    Dexterity: 14,
    Constitution: 14,
    Intelligence: 9,
    Wisdom: 12,
    Charisma: 14
  },
  Classes: [{
    Name: 'Bard',
    Level: 3,
    Archetype: 'Valor'
  }],
  Defenses: {
    //HP :
    AC: '14 (studded leather)',
    // may need to upgrade
    Immunities: '',
    Resistances: '',
    ConditionImmunities: '',
    Saves: {
      Dexterity: {
        Trained: true
      },
      Charisma: {
        Trained: true
      }
    }
  },
  Skills: {
    // Background: carnival wrestler
    Athletics: {
      Trained: true,
      Expertise: true
    },
    // expertise with lvl 3
    Performance: {
      Trained: true,
      Expertise: true
    },
    // Bard - pick 3
    Insight: {
      Trained: true
    },
    Persuasion: {
      Trained: true
    },
    Acrobatics: {
      Trained: true
    },
    'Sleight of Hand': {
      Bonus: 1
    },
    Stealth: {
      Bonus: 1
    },
    'Animal Handling': {
      Bonus: 1
    },
    Medicine: {
      Bonus: 1
    },
    Perception: {
      Bonus: 1
    },
    Survival: {
      Bonus: 1
    },
    Deception: {
      Bonus: 1
    },
    Intimidation: {
      Bonus: 1
    }
  },
  Features: {
    'Spellcasting': "Brady is a 3rd level spellcaster. His spellcasting ability modifier \n            is Charisma (spell save DC 12, +4 to hit with spell attacks). He has the following spells prepared: \n                <br>Cantrips: Prestidigitation, Light\n                <br>1st (4 slots): Comprehend Languages, Detect Magic, Disguise Self, Healing Word\n                <br>2nd (2 slots): Enhance Ability, Lesser Restoration",
    'Bardic Inspiration (2 slots)': "Brady can use a bonus action to inspire another creature within 60 feet. \n            For the next 10 minutes, the creature has a bardic inspiration die (d6) which they can roll to: \n            <br>* Add it to the result of one ability check, attack roll, or saving throw. \n            <br>* Add it to a weapon damage roll. \n            <br>* Add it to their AC against an attack (after roll, before hit)",
    'Jack of All Trades': "Brady can add half his proficiency, rounded down, to any ability check he makes that \n            he is not already proficient with. ",
    'Song of Rest': "Brady and friendly creatures that gain hit points during a short rest can gain an additional d6 hit points."
  },
  Spells: [// Cantrips
  'Prestidigitation', 'Light', // Level 1
  'Comprehend Languages', 'Detect Magic', 'Disguise Self', 'Healing Word', 'Identify', // Level 2
  'Enhance Ability'],
  Actions: {
    'Attack': "Brady can make a melee attack, shoot his hand crossbow, or grapple",
    'Melee Attack': "+5 to hit, one target. Longsword, Quarterstaff, Crowbar, unarmed",
    'Hand Crossbow': "Ranged weapon attack +4 to hit, range 30ft, one target. Hit 4 (d6+2) piercing damage.",
    'Grapple': "Make a grapple check (Athletics) contested by the opponent's athletics or acrobatics check."
  },
  Items: {
    'Rod of the Pact Keeper': 1,
    'Gold': 20,
    'Studded Leather': 1,
    'Bag of Holding': 1,
    'Traveler\'s clothes': 1,
    'Fine Clothes': 3,
    'Silk Rope': 2,
    'Explorer\'s Pack': 1,
    'Fishing Tackle': 2,
    'Grappling Hook': 2,
    'Jug': 1,
    '': 0
  },
  Background: {
    Trait: "I'm always looking to ply my trade and test myself against others.",
    Ideal: "I like to inspire the crowd and let them share in feelings of heroism.",
    Bond: "Win or lose, I feel cameraderie with anyone who will matches with me.",
    Flaw: "I like to 'play the heel' in my performances, often playing a local lord or authority.",
    Background: "Carnival Wrestler",
    Description: "Travelling carnivals often have a master and one or more journeymen wrestlers that can spar with the locals. ",
    Feature: "Tool Proficiency, disguise kit. "
  }
});
BarbicanBrady.Notes = notes$1;

var notes = "onetrick notes";

// Weight: 165
// Convert sorcery points to spell slots: 1 bonus action 
// Meta magic to quicken spell: 1 bonus action

var OneTrick = new Character({
  Name: 'One Trick Pony',
  Race: 'Tabaxi',
  Alignment: 'True Neutral',
  Speed: 30,
  Senses: 'Darkvision 60',
  Languages: 'common',
  Stats: {
    Strength: 10,
    // 4 8
    Dexterity: 16,
    Constitution: 14,
    // 
    Intelligence: 9,
    Wisdom: 10,
    Charisma: 18 // 12 16

  },
  Classes: [{
    Name: 'Warlock',
    Level: 2,
    Archetype: 'Archfey: Pact of the Chain'
  }, {
    Name: 'Sorcerer',
    Level: 4,
    Archetype: 'Wild Magic'
  }],
  Defenses: {
    //HP :
    AC: '15 (studded leather)',
    // mage armor
    Immunities: '',
    Resistances: '',
    ConditionImmunities: '',
    Saves: {
      Wisdom: {
        Trained: true
      },
      Charisma: {
        Trained: true
      }
    }
  },
  Skills: {
    Perception: {
      Trained: true
    },
    // Tabaxi
    Stealth: {
      Trained: true
    },
    // Tabaxi
    Investigation: {
      Trained: true
    },
    // Warlock
    Nature: {
      Trained: true
    },
    // Warlock
    Survival: {
      Trained: true
    },
    // Outlander
    Athletics: {
      Trained: true
    } // Outlander   

  },
  Features: {
    'Feline Agility': "One Trick can double his move speed on a turn. Once used, \n            this trait cannot be used again until he has moved 0 feet on one of his turns.",
    'Fey Presence 1/short rest': "As an action, you can cause each creature in\n            a 10-foot cube originating from you to make a Wisdom\n            saving throw against your warlock spell save DC. The\n            creatures that fail their saving throws are all charmed\n            or frightened by you (your choice) until the end of\n            your next turn.",
    'Invocation: Agonizing Blast': "When you cast eldritch blast, add your Charisma\n            modifier to the damage it deals on a hit.",
    "Invocation: Eldritch Sight": "You can cast Detect Magic at will, without expending \n            a spell slot.",
    'Wild Magic Surge (house ruled)': "When expending a spell slot or consuming a spell point, \n            roll once on the wild magic table.",
    'Tides of Chaos 1/recharge': "Gain advantage on one attack roll, ability check, or saving throw. \n            Recharges on a long rest, or on wild magic surge activation.",
    'Sorcery Points 4/long rest': "Used for flexible casting and meta magic.",
    'Flexible Casting': "As a bonus action. A spell can be converted to its level of sorcery points, \n            or sorcery points can be spent to regain a spell slot (see notes).",
    'Meta Magic: Quickened Spell': "When you cast a spell that has a casting time of 1 action,\n            you can spend 2 sorcery points to change the casting time to 1 bonus action for this casting.",
    'Meta Magic: Extended Spell': "When you cast a spell that has a duration of 1 minute\n            or longer. you can spend 1 sorcery point to double its duration, to a maximum duration of 24 hours.",
    'Spellcasting (sorcerer)': "One Trick is a 5th level spellcaster. His spellcasting ability modifier \n            is Charisma (spell save DC 15, +7 to hit with spell attacks). He has the following spells prepared: \n            Cantrips: Eldritch Blast, Mage Hand, Mending, Message, Minor Illusion, Prestidigitation, Ray of Frost\n            <br>1st Level (4 sorcerer slots, 2 warlock slots): Feather Fall, Thunderwave, Hex, \n                Protection from Evil and Good, Comprehend Languages\n            <br>2nd Level (3 slots): Misty Step, Levitate, Spider Climb",
    'Spellcasting (warlock)': "Same DC and attack bonus as sorcerer spells. \n            He has the following spells prepared.\n            <br>Cantrips: Eldritch Blast"
  },
  Spells: [// Cantrips
  'Prestidigitation', 'Mending', 'Ray of Frost', 'Message', 'Mage Hand', 'Eldritch Blast', 'Minor Illusion', // Level 1
  // Sorcerer
  'Feather Fall', 'Thunderwave', // Warlock
  'Hex', 'Protection from Evil and Good', 'Comprehend Languages', 'Detect Magic', // Invocation
  // Level 2', 
  // Sorcerer
  'Misty Step', 'Levitate', 'Spider Climb'],
  Actions: {
    'Eldritch Blast': "Ranged spell attack +7 to hit, range 240 feet, \n            one target. Hit 9 (1d10+4) force damage. Two attacks. ",
    "Cat's Claws": "Melee unarmed attack +3 to hit, one target. Hit 2(1d4) slashing damage.",
    'Detect Magic': "One Trick can cast Detect Magic at will without expending a spell slot \n            or components."
  },
  Items: {
    'Rod of the Pact Keeper': 1,
    'Gold': 20,
    'Studded Leather': 1,
    'Bag of Holding': 1,
    'Traveler\'s clothes': 1,
    'Fine Clothes': 3,
    'Silk Rope': 2,
    'Explorer\'s Pack': 1,
    'Fishing Tackle': 2,
    'Grappling Hook': 2,
    'Jug': 1,
    '': 0
  },
  Background: {
    Trait: "I'm always picking things up, absently fiddling with\n                them, and sometimes accidentally breaking them.",
    Ideal: "Staying fascinated and pursuing the esoteric is wealth in itself.",
    Bond: "",
    Flaw: "",
    Background: "",
    Description: "",
    Feature: ""
  }
});
OneTrick.Notes = notes;

var Characters = {
  'barbican-brady': BarbicanBrady,
  'one-trick': OneTrick
};

var html$1 = "<div id='stats' class='character'>\r\n\t<textarea rows='1' style='min-height:4rem;' placeholder=\"hp tracker\"></textarea>\r\n\t<div>\r\n\t\t<span id='Name' name='Name' class='name'></span>\r\n\t</div>\r\n\t<div style='font-style:italic;'>\r\n\t\t<span id='Size' name='Size'></span>\r\n\t\t<span id='Race' name='Race'></span><span>,</span>\r\n\t\t<span id='Alignment' name='Alignment'></span>\r\n\t</div>\r\n\t<div class='divider'></div>\r\n\t<div>\r\n\t\t<span class='red-left'>Saving Throws </span>\r\n\t\t<span id='Save' name='SaveText'>\r\n\t</div>\r\n\t<div id='resistances'>\r\n\t\t<span class='red-left'>Resistances </span>\r\n\t\t<span id='Resistances' name='Defenses.Resistances'>\r\n\t</div>\r\n\t<div id='immunities'>\r\n\t\t<span class='red-left'>Damage Immunities </span>\r\n\t\t<span id='Immune' name='Defenses.Immunities'>\r\n\t</div>\r\n\t<div id='condition-immunities'>\r\n\t\t<span class='red-left'>Condition Immunities </span>\r\n\t\t<span id='ConditionImmune' name='Defenses.ConditionImmunities'>\r\n\t</div>\r\n\t<div>\r\n\t\t<span class='red-left'>Armor Class </span>\r\n\t\t<span id='Ac' name='Defenses.AC'>\r\n\t</div>\r\n\t<div>\r\n\t\t<span class='red-left'>Hit Points </span>\r\n\t\t<span id='Hp' name='Defenses.HP'></span>\r\n\t</div>\r\n\t<div>\r\n\t\t<span class='red-left'>Speed </span>\r\n\t\t<span id='Speed' name='Speed'></span>\r\n\t</div>\r\n\t<div class='divider'></div>\r\n\t<div>\r\n\t\t<div>\r\n\t\t\t<span class='stat-label'>STR</span>\r\n\t\t\t<span class='stat-label'>DEX</span>\r\n\t\t\t<span class='stat-label'>CON</span>\r\n\t\t\t<span class='stat-label'>INT</span>\r\n\t\t\t<span class='stat-label'>WIS</span>\r\n\t\t\t<span class='stat-label'>CHA</span>\t\r\n\t\t</div>\r\n\t\t<div>\r\n\t\t\t<span id='Str' name='Stats.Strength' class='stat-value'></span>\r\n\t\t\t<span id='Dex' name='Stats.Dexterity' class='stat-value'></span>\r\n\t\t\t<span id='Con' name='Stats.Constitution' class='stat-value'></span>\r\n\t\t\t<span id='Int' name='Stats.Intelligence' class='stat-value'></span>\r\n\t\t\t<span id='Wis' name='Stats.Wisdom' class='stat-value'></span>\r\n\t\t\t<span id='Cha' name='Stats.Charisma' class='stat-value'></span>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class='divider'></div>\r\n\t<div>\r\n\t\t<span class='red-left'>Senses </span>\r\n\t\t<span id='Senses' name='Senses'></span>\r\n\t</div>\r\n\t<div>\r\n\t\t<span class='red-left'>Languages </span>\r\n\t\t<span id='Languages' name='Languages'></span>\r\n\t</div>\r\n\t<div>\r\n\t\t<span class='red-left'>Level </span>\r\n\t\t<span id='Level' name='LevelText'></span>\r\n\t</div>\r\n\t<div id='features'>\r\n        <span class='red-left'>Features</span>\r\n        <div class='divider'></div>\r\n\t</div>\r\n\t<div id='actions'>\r\n\t\t<span class='red-left'>Actions</span>\r\n\t\t<div class='divider'></div>\r\n\t</div>\r\n\t<div id='reactions'>\r\n\t\t<span class='red-left'>Reactions</span>\r\n\t\t<div class='divider'></div>\r\n\t</div>\r\n\t\r\n</div>";

var _setSaveText = /*#__PURE__*/new WeakSet();

var _setStats = /*#__PURE__*/new WeakSet();

var _setLevelText = /*#__PURE__*/new WeakSet();

var _bindData$4 = /*#__PURE__*/new WeakSet();

var _bindKeyValues = /*#__PURE__*/new WeakSet();

var _getKeyValueDiv = /*#__PURE__*/new WeakSet();

var _hide = /*#__PURE__*/new WeakSet();

var _hideEmpty = /*#__PURE__*/new WeakSet();

class Stats {
  constructor(options) {
    _hideEmpty.add(this);

    _hide.add(this);

    _getKeyValueDiv.add(this);

    _bindKeyValues.add(this);

    _bindData$4.add(this);

    _setLevelText.add(this);

    _setStats.add(this);

    _setSaveText.add(this);

    this.container = Lite.append(options.container, html$1);
    this.character = options.character;

    _classPrivateMethodGet(this, _setSaveText, _setSaveText2).call(this);

    _classPrivateMethodGet(this, _setStats, _setStats2).call(this);

    _classPrivateMethodGet(this, _setLevelText, _setLevelText2).call(this);

    _classPrivateMethodGet(this, _bindData$4, _bindData2$4).call(this);
  }

}

function _setSaveText2() {
  var saves = [];

  for (var name in this.character.Defenses.Saves) {
    var save = this.character.Defenses.Saves[name];
    saves.push(name.substring(0, 3) + (save < 0 ? '' : '+') + save);
  }

  this.character.SaveText = saves.join(', ');
}

function _setStats2() {
  var stats = this.character.Stats;

  var setStatBonus = value => value + (value < 10 ? '' : '+') + this.character.getBonus(value);

  Stats.Strength = setStatBonus(stats.Strength);
  stats.Dexterity = setStatBonus(stats.Dexterity);
  stats.Constitution = setStatBonus(stats.Constitution);
  stats.Intelligence = setStatBonus(stats.Intelligence);
  stats.Wisdom = setStatBonus(stats.Wisdom);
  stats.Charisma = setStatBonus(stats.Charisma);
}

function _setLevelText2() {
  var classes = this.character.Classes;
  var levelText = [];

  for (var className in classes) {
    levelText.push(classes[className].Name + ' ' + classes[className].Level);
  }

  this.character.LevelText = levelText.join('/');
}

function _bindData2$4() {
  Lite.bindings.bind(this.container, this.character);

  _classPrivateMethodGet(this, _bindKeyValues, _bindKeyValues2).call(this, 'Features', 'features');

  _classPrivateMethodGet(this, _bindKeyValues, _bindKeyValues2).call(this, 'Actions', 'actions');

  _classPrivateMethodGet(this, _bindKeyValues, _bindKeyValues2).call(this, 'Reactions', 'reactions');

  _classPrivateMethodGet(this, _hideEmpty, _hideEmpty2).call(this);
}

function _bindKeyValues2(key, container) {
  var data = this.character[key];
  container = this.container.querySelector('#' + container);
  if (!data) return _classPrivateMethodGet(this, _hide, _hide2).call(this, container);

  for (var i in data) {
    container.appendChild(_classPrivateMethodGet(this, _getKeyValueDiv, _getKeyValueDiv2).call(this, i, data[i]));
  }
}

function _getKeyValueDiv2(key, value) {
  var div = document.createElement('div');
  var label = div.appendChild(document.createElement('span'));
  var description = div.appendChild(document.createElement('span'));
  label.className = 'grey-left';
  label.innerHTML = key + '. ';
  description.innerHTML = value;
  return div;
}

function _hide2(container) {
  if (!(container instanceof HTMLElement)) container = this.container.querySelector('#' + container);
  container.setAttribute('hidden', '');
}

function _hideEmpty2() {
  var defenses = this.character.Defenses;
  if (!defenses.Resistances) _classPrivateMethodGet(this, _hide, _hide2).call(this, 'resistances');
  if (!defenses.Immunities) _classPrivateMethodGet(this, _hide, _hide2).call(this, 'immunities');
  if (!defenses.ConditionImmunities) _classPrivateMethodGet(this, _hide, _hide2).call(this, 'condition-immunities');
}

/**
 * marked - a markdown parser
 * Copyright (c) 2011-2022, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/markedjs/marked
 */

/**
 * DO NOT EDIT THIS FILE
 * The code in this file is generated from files in ./src/
 */
function getDefaults() {
  return {
    async: false,
    baseUrl: null,
    breaks: false,
    extensions: null,
    gfm: true,
    headerIds: true,
    headerPrefix: '',
    highlight: null,
    langPrefix: 'language-',
    mangle: true,
    pedantic: false,
    renderer: null,
    sanitize: false,
    sanitizer: null,
    silent: false,
    smartypants: false,
    tokenizer: null,
    walkTokens: null,
    xhtml: false
  };
}

var defaults = getDefaults();

function changeDefaults(newDefaults) {
  defaults = newDefaults;
}
/**
 * Helpers
 */


var escapeTest = /[&<>"']/;
var escapeReplace = /[&<>"']/g;
var escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/;
var escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;
var escapeReplacements = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
};

var getEscapeReplacement = ch => escapeReplacements[ch];

function escape(html, encode) {
  if (encode) {
    if (escapeTest.test(html)) {
      return html.replace(escapeReplace, getEscapeReplacement);
    }
  } else {
    if (escapeTestNoEncode.test(html)) {
      return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
    }
  }

  return html;
}

var unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
/**
 * @param {string} html
 */

function unescape(html) {
  // explicitly match decimal, hex, and named HTML entities
  return html.replace(unescapeTest, (_, n) => {
    n = n.toLowerCase();
    if (n === 'colon') return ':';

    if (n.charAt(0) === '#') {
      return n.charAt(1) === 'x' ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1));
    }

    return '';
  });
}

var caret = /(^|[^\[])\^/g;
/**
 * @param {string | RegExp} regex
 * @param {string} opt
 */

function edit(regex, opt) {
  regex = typeof regex === 'string' ? regex : regex.source;
  opt = opt || '';
  var obj = {
    replace: (name, val) => {
      val = val.source || val;
      val = val.replace(caret, '$1');
      regex = regex.replace(name, val);
      return obj;
    },
    getRegex: () => {
      return new RegExp(regex, opt);
    }
  };
  return obj;
}

var nonWordAndColonTest = /[^\w:]/g;
var originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
/**
 * @param {boolean} sanitize
 * @param {string} base
 * @param {string} href
 */

function cleanUrl(sanitize, base, href) {
  if (sanitize) {
    var prot;

    try {
      prot = decodeURIComponent(unescape(href)).replace(nonWordAndColonTest, '').toLowerCase();
    } catch (e) {
      return null;
    }

    if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0 || prot.indexOf('data:') === 0) {
      return null;
    }
  }

  if (base && !originIndependentUrl.test(href)) {
    href = resolveUrl(base, href);
  }

  try {
    href = encodeURI(href).replace(/%25/g, '%');
  } catch (e) {
    return null;
  }

  return href;
}

var baseUrls = {};
var justDomain = /^[^:]+:\/*[^/]*$/;
var protocol = /^([^:]+:)[\s\S]*$/;
var domain = /^([^:]+:\/*[^/]*)[\s\S]*$/;
/**
 * @param {string} base
 * @param {string} href
 */

function resolveUrl(base, href) {
  if (!baseUrls[' ' + base]) {
    // we can ignore everything in base after the last slash of its path component,
    // but we might need to add _that_
    // https://tools.ietf.org/html/rfc3986#section-3
    if (justDomain.test(base)) {
      baseUrls[' ' + base] = base + '/';
    } else {
      baseUrls[' ' + base] = rtrim(base, '/', true);
    }
  }

  base = baseUrls[' ' + base];
  var relativeBase = base.indexOf(':') === -1;

  if (href.substring(0, 2) === '//') {
    if (relativeBase) {
      return href;
    }

    return base.replace(protocol, '$1') + href;
  } else if (href.charAt(0) === '/') {
    if (relativeBase) {
      return href;
    }

    return base.replace(domain, '$1') + href;
  } else {
    return base + href;
  }
}

var noopTest = {
  exec: function noopTest() {}
};

function merge(obj) {
  var i = 1,
      target,
      key;

  for (; i < arguments.length; i++) {
    target = arguments[i];

    for (key in target) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        obj[key] = target[key];
      }
    }
  }

  return obj;
}

function splitCells(tableRow, count) {
  // ensure that every cell-delimiting pipe has a space
  // before it to distinguish it from an escaped pipe
  var row = tableRow.replace(/\|/g, (match, offset, str) => {
    var escaped = false,
        curr = offset;

    while (--curr >= 0 && str[curr] === '\\') {
      escaped = !escaped;
    }

    if (escaped) {
      // odd number of slashes means | is escaped
      // so we leave it alone
      return '|';
    } else {
      // add space before unescaped |
      return ' |';
    }
  }),
      cells = row.split(/ \|/);
  var i = 0; // First/last cell in a row cannot be empty if it has no leading/trailing pipe

  if (!cells[0].trim()) {
    cells.shift();
  }

  if (cells.length > 0 && !cells[cells.length - 1].trim()) {
    cells.pop();
  }

  if (cells.length > count) {
    cells.splice(count);
  } else {
    while (cells.length < count) {
      cells.push('');
    }
  }

  for (; i < cells.length; i++) {
    // leading or trailing whitespace is ignored per the gfm spec
    cells[i] = cells[i].trim().replace(/\\\|/g, '|');
  }

  return cells;
}
/**
 * Remove trailing 'c's. Equivalent to str.replace(/c*$/, '').
 * /c*$/ is vulnerable to REDOS.
 *
 * @param {string} str
 * @param {string} c
 * @param {boolean} invert Remove suffix of non-c chars instead. Default falsey.
 */


function rtrim(str, c, invert) {
  var l = str.length;

  if (l === 0) {
    return '';
  } // Length of suffix matching the invert condition.


  var suffLen = 0; // Step left until we fail to match the invert condition.

  while (suffLen < l) {
    var currChar = str.charAt(l - suffLen - 1);

    if (currChar === c && !invert) {
      suffLen++;
    } else if (currChar !== c && invert) {
      suffLen++;
    } else {
      break;
    }
  }

  return str.slice(0, l - suffLen);
}

function findClosingBracket(str, b) {
  if (str.indexOf(b[1]) === -1) {
    return -1;
  }

  var l = str.length;
  var level = 0,
      i = 0;

  for (; i < l; i++) {
    if (str[i] === '\\') {
      i++;
    } else if (str[i] === b[0]) {
      level++;
    } else if (str[i] === b[1]) {
      level--;

      if (level < 0) {
        return i;
      }
    }
  }

  return -1;
}

function checkSanitizeDeprecation(opt) {
  if (opt && opt.sanitize && !opt.silent) {
    console.warn('marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options');
  }
} // copied from https://stackoverflow.com/a/5450113/806777

/**
 * @param {string} pattern
 * @param {number} count
 */


function repeatString(pattern, count) {
  if (count < 1) {
    return '';
  }

  var result = '';

  while (count > 1) {
    if (count & 1) {
      result += pattern;
    }

    count >>= 1;
    pattern += pattern;
  }

  return result + pattern;
}

function outputLink(cap, link, raw, lexer) {
  var href = link.href;
  var title = link.title ? escape(link.title) : null;
  var text = cap[1].replace(/\\([\[\]])/g, '$1');

  if (cap[0].charAt(0) !== '!') {
    lexer.state.inLink = true;
    var token = {
      type: 'link',
      raw,
      href,
      title,
      text,
      tokens: lexer.inlineTokens(text)
    };
    lexer.state.inLink = false;
    return token;
  }

  return {
    type: 'image',
    raw,
    href,
    title,
    text: escape(text)
  };
}

function indentCodeCompensation(raw, text) {
  var matchIndentToCode = raw.match(/^(\s+)(?:```)/);

  if (matchIndentToCode === null) {
    return text;
  }

  var indentToCode = matchIndentToCode[1];
  return text.split('\n').map(node => {
    var matchIndentInNode = node.match(/^\s+/);

    if (matchIndentInNode === null) {
      return node;
    }

    var [indentInNode] = matchIndentInNode;

    if (indentInNode.length >= indentToCode.length) {
      return node.slice(indentToCode.length);
    }

    return node;
  }).join('\n');
}
/**
 * Tokenizer
 */


class Tokenizer {
  constructor(options) {
    this.options = options || defaults;
  }

  space(src) {
    var cap = this.rules.block.newline.exec(src);

    if (cap && cap[0].length > 0) {
      return {
        type: 'space',
        raw: cap[0]
      };
    }
  }

  code(src) {
    var cap = this.rules.block.code.exec(src);

    if (cap) {
      var text = cap[0].replace(/^ {1,4}/gm, '');
      return {
        type: 'code',
        raw: cap[0],
        codeBlockStyle: 'indented',
        text: !this.options.pedantic ? rtrim(text, '\n') : text
      };
    }
  }

  fences(src) {
    var cap = this.rules.block.fences.exec(src);

    if (cap) {
      var raw = cap[0];
      var text = indentCodeCompensation(raw, cap[3] || '');
      return {
        type: 'code',
        raw,
        lang: cap[2] ? cap[2].trim() : cap[2],
        text
      };
    }
  }

  heading(src) {
    var cap = this.rules.block.heading.exec(src);

    if (cap) {
      var text = cap[2].trim(); // remove trailing #s

      if (/#$/.test(text)) {
        var trimmed = rtrim(text, '#');

        if (this.options.pedantic) {
          text = trimmed.trim();
        } else if (!trimmed || / $/.test(trimmed)) {
          // CommonMark requires space before trailing #s
          text = trimmed.trim();
        }
      }

      return {
        type: 'heading',
        raw: cap[0],
        depth: cap[1].length,
        text,
        tokens: this.lexer.inline(text)
      };
    }
  }

  hr(src) {
    var cap = this.rules.block.hr.exec(src);

    if (cap) {
      return {
        type: 'hr',
        raw: cap[0]
      };
    }
  }

  blockquote(src) {
    var cap = this.rules.block.blockquote.exec(src);

    if (cap) {
      var text = cap[0].replace(/^ *>[ \t]?/gm, '');
      return {
        type: 'blockquote',
        raw: cap[0],
        tokens: this.lexer.blockTokens(text, []),
        text
      };
    }
  }

  list(src) {
    var cap = this.rules.block.list.exec(src);

    if (cap) {
      var raw, istask, ischecked, indent, i, blankLine, endsWithBlankLine, line, nextLine, rawLine, itemContents, endEarly;
      var bull = cap[1].trim();
      var isordered = bull.length > 1;
      var list = {
        type: 'list',
        raw: '',
        ordered: isordered,
        start: isordered ? +bull.slice(0, -1) : '',
        loose: false,
        items: []
      };
      bull = isordered ? "\\d{1,9}\\".concat(bull.slice(-1)) : "\\".concat(bull);

      if (this.options.pedantic) {
        bull = isordered ? bull : '[*+-]';
      } // Get next list item


      var itemRegex = new RegExp("^( {0,3}".concat(bull, ")((?:[\t ][^\\n]*)?(?:\\n|$))")); // Check if current bullet point can start a new List Item

      while (src) {
        endEarly = false;

        if (!(cap = itemRegex.exec(src))) {
          break;
        }

        if (this.rules.block.hr.test(src)) {
          // End list if bullet was actually HR (possibly move into itemRegex?)
          break;
        }

        raw = cap[0];
        src = src.substring(raw.length);
        line = cap[2].split('\n', 1)[0];
        nextLine = src.split('\n', 1)[0];

        if (this.options.pedantic) {
          indent = 2;
          itemContents = line.trimLeft();
        } else {
          indent = cap[2].search(/[^ ]/); // Find first non-space char

          indent = indent > 4 ? 1 : indent; // Treat indented code blocks (> 4 spaces) as having only 1 indent

          itemContents = line.slice(indent);
          indent += cap[1].length;
        }

        blankLine = false;

        if (!line && /^ *$/.test(nextLine)) {
          // Items begin with at most one blank line
          raw += nextLine + '\n';
          src = src.substring(nextLine.length + 1);
          endEarly = true;
        }

        if (!endEarly) {
          var nextBulletRegex = new RegExp("^ {0,".concat(Math.min(3, indent - 1), "}(?:[*+-]|\\d{1,9}[.)])((?: [^\\n]*)?(?:\\n|$))"));
          var hrRegex = new RegExp("^ {0,".concat(Math.min(3, indent - 1), "}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)"));
          var fencesBeginRegex = new RegExp("^ {0,".concat(Math.min(3, indent - 1), "}(?:```|~~~)"));
          var headingBeginRegex = new RegExp("^ {0,".concat(Math.min(3, indent - 1), "}#")); // Check if following lines should be included in List Item

          while (src) {
            rawLine = src.split('\n', 1)[0];
            line = rawLine; // Re-align to follow commonmark nesting rules

            if (this.options.pedantic) {
              line = line.replace(/^ {1,4}(?=( {4})*[^ ])/g, '  ');
            } // End list item if found code fences


            if (fencesBeginRegex.test(line)) {
              break;
            } // End list item if found start of new heading


            if (headingBeginRegex.test(line)) {
              break;
            } // End list item if found start of new bullet


            if (nextBulletRegex.test(line)) {
              break;
            } // Horizontal rule found


            if (hrRegex.test(src)) {
              break;
            }

            if (line.search(/[^ ]/) >= indent || !line.trim()) {
              // Dedent if possible
              itemContents += '\n' + line.slice(indent);
            } else if (!blankLine) {
              // Until blank line, item doesn't need indentation
              itemContents += '\n' + line;
            } else {
              // Otherwise, improper indentation ends this item
              break;
            }

            if (!blankLine && !line.trim()) {
              // Check if current line is blank
              blankLine = true;
            }

            raw += rawLine + '\n';
            src = src.substring(rawLine.length + 1);
          }
        }

        if (!list.loose) {
          // If the previous item ended with a blank line, the list is loose
          if (endsWithBlankLine) {
            list.loose = true;
          } else if (/\n *\n *$/.test(raw)) {
            endsWithBlankLine = true;
          }
        } // Check for task list items


        if (this.options.gfm) {
          istask = /^\[[ xX]\] /.exec(itemContents);

          if (istask) {
            ischecked = istask[0] !== '[ ] ';
            itemContents = itemContents.replace(/^\[[ xX]\] +/, '');
          }
        }

        list.items.push({
          type: 'list_item',
          raw,
          task: !!istask,
          checked: ischecked,
          loose: false,
          text: itemContents
        });
        list.raw += raw;
      } // Do not consume newlines at end of final item. Alternatively, make itemRegex *start* with any newlines to simplify/speed up endsWithBlankLine logic


      list.items[list.items.length - 1].raw = raw.trimRight();
      list.items[list.items.length - 1].text = itemContents.trimRight();
      list.raw = list.raw.trimRight();
      var l = list.items.length; // Item child tokens handled here at end because we needed to have the final item to trim it first

      for (i = 0; i < l; i++) {
        this.lexer.state.top = false;
        list.items[i].tokens = this.lexer.blockTokens(list.items[i].text, []);
        var spacers = list.items[i].tokens.filter(t => t.type === 'space');
        var hasMultipleLineBreaks = spacers.every(t => {
          var chars = t.raw.split('');
          var lineBreaks = 0;

          for (var char of chars) {
            if (char === '\n') {
              lineBreaks += 1;
            }

            if (lineBreaks > 1) {
              return true;
            }
          }

          return false;
        });

        if (!list.loose && spacers.length && hasMultipleLineBreaks) {
          // Having a single line break doesn't mean a list is loose. A single line break is terminating the last list item
          list.loose = true;
          list.items[i].loose = true;
        }
      }

      return list;
    }
  }

  html(src) {
    var cap = this.rules.block.html.exec(src);

    if (cap) {
      var token = {
        type: 'html',
        raw: cap[0],
        pre: !this.options.sanitizer && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
        text: cap[0]
      };

      if (this.options.sanitize) {
        var text = this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]);
        token.type = 'paragraph';
        token.text = text;
        token.tokens = this.lexer.inline(text);
      }

      return token;
    }
  }

  def(src) {
    var cap = this.rules.block.def.exec(src);

    if (cap) {
      if (cap[3]) cap[3] = cap[3].substring(1, cap[3].length - 1);
      var tag = cap[1].toLowerCase().replace(/\s+/g, ' ');
      return {
        type: 'def',
        tag,
        raw: cap[0],
        href: cap[2],
        title: cap[3]
      };
    }
  }

  table(src) {
    var cap = this.rules.block.table.exec(src);

    if (cap) {
      var item = {
        type: 'table',
        header: splitCells(cap[1]).map(c => {
          return {
            text: c
          };
        }),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        rows: cap[3] && cap[3].trim() ? cap[3].replace(/\n[ \t]*$/, '').split('\n') : []
      };

      if (item.header.length === item.align.length) {
        item.raw = cap[0];
        var l = item.align.length;
        var i, j, k, row;

        for (i = 0; i < l; i++) {
          if (/^ *-+: *$/.test(item.align[i])) {
            item.align[i] = 'right';
          } else if (/^ *:-+: *$/.test(item.align[i])) {
            item.align[i] = 'center';
          } else if (/^ *:-+ *$/.test(item.align[i])) {
            item.align[i] = 'left';
          } else {
            item.align[i] = null;
          }
        }

        l = item.rows.length;

        for (i = 0; i < l; i++) {
          item.rows[i] = splitCells(item.rows[i], item.header.length).map(c => {
            return {
              text: c
            };
          });
        } // parse child tokens inside headers and cells
        // header child tokens


        l = item.header.length;

        for (j = 0; j < l; j++) {
          item.header[j].tokens = this.lexer.inline(item.header[j].text);
        } // cell child tokens


        l = item.rows.length;

        for (j = 0; j < l; j++) {
          row = item.rows[j];

          for (k = 0; k < row.length; k++) {
            row[k].tokens = this.lexer.inline(row[k].text);
          }
        }

        return item;
      }
    }
  }

  lheading(src) {
    var cap = this.rules.block.lheading.exec(src);

    if (cap) {
      return {
        type: 'heading',
        raw: cap[0],
        depth: cap[2].charAt(0) === '=' ? 1 : 2,
        text: cap[1],
        tokens: this.lexer.inline(cap[1])
      };
    }
  }

  paragraph(src) {
    var cap = this.rules.block.paragraph.exec(src);

    if (cap) {
      var text = cap[1].charAt(cap[1].length - 1) === '\n' ? cap[1].slice(0, -1) : cap[1];
      return {
        type: 'paragraph',
        raw: cap[0],
        text,
        tokens: this.lexer.inline(text)
      };
    }
  }

  text(src) {
    var cap = this.rules.block.text.exec(src);

    if (cap) {
      return {
        type: 'text',
        raw: cap[0],
        text: cap[0],
        tokens: this.lexer.inline(cap[0])
      };
    }
  }

  escape(src) {
    var cap = this.rules.inline.escape.exec(src);

    if (cap) {
      return {
        type: 'escape',
        raw: cap[0],
        text: escape(cap[1])
      };
    }
  }

  tag(src) {
    var cap = this.rules.inline.tag.exec(src);

    if (cap) {
      if (!this.lexer.state.inLink && /^<a /i.test(cap[0])) {
        this.lexer.state.inLink = true;
      } else if (this.lexer.state.inLink && /^<\/a>/i.test(cap[0])) {
        this.lexer.state.inLink = false;
      }

      if (!this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.lexer.state.inRawBlock = true;
      } else if (this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.lexer.state.inRawBlock = false;
      }

      return {
        type: this.options.sanitize ? 'text' : 'html',
        raw: cap[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]) : cap[0]
      };
    }
  }

  link(src) {
    var cap = this.rules.inline.link.exec(src);

    if (cap) {
      var trimmedUrl = cap[2].trim();

      if (!this.options.pedantic && /^</.test(trimmedUrl)) {
        // commonmark requires matching angle brackets
        if (!/>$/.test(trimmedUrl)) {
          return;
        } // ending angle bracket cannot be escaped


        var rtrimSlash = rtrim(trimmedUrl.slice(0, -1), '\\');

        if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) {
          return;
        }
      } else {
        // find closing parenthesis
        var lastParenIndex = findClosingBracket(cap[2], '()');

        if (lastParenIndex > -1) {
          var start = cap[0].indexOf('!') === 0 ? 5 : 4;
          var linkLen = start + cap[1].length + lastParenIndex;
          cap[2] = cap[2].substring(0, lastParenIndex);
          cap[0] = cap[0].substring(0, linkLen).trim();
          cap[3] = '';
        }
      }

      var href = cap[2];
      var title = '';

      if (this.options.pedantic) {
        // split pedantic href and title
        var link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);

        if (link) {
          href = link[1];
          title = link[3];
        }
      } else {
        title = cap[3] ? cap[3].slice(1, -1) : '';
      }

      href = href.trim();

      if (/^</.test(href)) {
        if (this.options.pedantic && !/>$/.test(trimmedUrl)) {
          // pedantic allows starting angle bracket without ending angle bracket
          href = href.slice(1);
        } else {
          href = href.slice(1, -1);
        }
      }

      return outputLink(cap, {
        href: href ? href.replace(this.rules.inline._escapes, '$1') : href,
        title: title ? title.replace(this.rules.inline._escapes, '$1') : title
      }, cap[0], this.lexer);
    }
  }

  reflink(src, links) {
    var cap;

    if ((cap = this.rules.inline.reflink.exec(src)) || (cap = this.rules.inline.nolink.exec(src))) {
      var link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
      link = links[link.toLowerCase()];

      if (!link || !link.href) {
        var text = cap[0].charAt(0);
        return {
          type: 'text',
          raw: text,
          text
        };
      }

      return outputLink(cap, link, cap[0], this.lexer);
    }
  }

  emStrong(src, maskedSrc) {
    var prevChar = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    var match = this.rules.inline.emStrong.lDelim.exec(src);
    if (!match) return; // _ can't be between two alphanumerics. \p{L}\p{N} includes non-english alphabet/numbers as well

    if (match[3] && prevChar.match(/(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/)) return;
    var nextChar = match[1] || match[2] || '';

    if (!nextChar || nextChar && (prevChar === '' || this.rules.inline.punctuation.exec(prevChar))) {
      var lLength = match[0].length - 1;
      var rDelim,
          rLength,
          delimTotal = lLength,
          midDelimTotal = 0;
      var endReg = match[0][0] === '*' ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
      endReg.lastIndex = 0; // Clip maskedSrc to same section of string as src (move to lexer?)

      maskedSrc = maskedSrc.slice(-1 * src.length + lLength);

      while ((match = endReg.exec(maskedSrc)) != null) {
        rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6];
        if (!rDelim) continue; // skip single * in __abc*abc__

        rLength = rDelim.length;

        if (match[3] || match[4]) {
          // found another Left Delim
          delimTotal += rLength;
          continue;
        } else if (match[5] || match[6]) {
          // either Left or Right Delim
          if (lLength % 3 && !((lLength + rLength) % 3)) {
            midDelimTotal += rLength;
            continue; // CommonMark Emphasis Rules 9-10
          }
        }

        delimTotal -= rLength;
        if (delimTotal > 0) continue; // Haven't found enough closing delimiters
        // Remove extra characters. *a*** -> *a*

        rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal); // Create `em` if smallest delimiter has odd char count. *a***

        if (Math.min(lLength, rLength) % 2) {
          var _text = src.slice(1, lLength + match.index + rLength);

          return {
            type: 'em',
            raw: src.slice(0, lLength + match.index + rLength + 1),
            text: _text,
            tokens: this.lexer.inlineTokens(_text)
          };
        } // Create 'strong' if smallest delimiter has even char count. **a***


        var text = src.slice(2, lLength + match.index + rLength - 1);
        return {
          type: 'strong',
          raw: src.slice(0, lLength + match.index + rLength + 1),
          text,
          tokens: this.lexer.inlineTokens(text)
        };
      }
    }
  }

  codespan(src) {
    var cap = this.rules.inline.code.exec(src);

    if (cap) {
      var text = cap[2].replace(/\n/g, ' ');
      var hasNonSpaceChars = /[^ ]/.test(text);
      var hasSpaceCharsOnBothEnds = /^ /.test(text) && / $/.test(text);

      if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
        text = text.substring(1, text.length - 1);
      }

      text = escape(text, true);
      return {
        type: 'codespan',
        raw: cap[0],
        text
      };
    }
  }

  br(src) {
    var cap = this.rules.inline.br.exec(src);

    if (cap) {
      return {
        type: 'br',
        raw: cap[0]
      };
    }
  }

  del(src) {
    var cap = this.rules.inline.del.exec(src);

    if (cap) {
      return {
        type: 'del',
        raw: cap[0],
        text: cap[2],
        tokens: this.lexer.inlineTokens(cap[2])
      };
    }
  }

  autolink(src, mangle) {
    var cap = this.rules.inline.autolink.exec(src);

    if (cap) {
      var text, href;

      if (cap[2] === '@') {
        text = escape(this.options.mangle ? mangle(cap[1]) : cap[1]);
        href = 'mailto:' + text;
      } else {
        text = escape(cap[1]);
        href = text;
      }

      return {
        type: 'link',
        raw: cap[0],
        text,
        href,
        tokens: [{
          type: 'text',
          raw: text,
          text
        }]
      };
    }
  }

  url(src, mangle) {
    var cap;

    if (cap = this.rules.inline.url.exec(src)) {
      var text, href;

      if (cap[2] === '@') {
        text = escape(this.options.mangle ? mangle(cap[0]) : cap[0]);
        href = 'mailto:' + text;
      } else {
        // do extended autolink path validation
        var prevCapZero;

        do {
          prevCapZero = cap[0];
          cap[0] = this.rules.inline._backpedal.exec(cap[0])[0];
        } while (prevCapZero !== cap[0]);

        text = escape(cap[0]);

        if (cap[1] === 'www.') {
          href = 'http://' + text;
        } else {
          href = text;
        }
      }

      return {
        type: 'link',
        raw: cap[0],
        text,
        href,
        tokens: [{
          type: 'text',
          raw: text,
          text
        }]
      };
    }
  }

  inlineText(src, smartypants) {
    var cap = this.rules.inline.text.exec(src);

    if (cap) {
      var text;

      if (this.lexer.state.inRawBlock) {
        text = this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]) : cap[0];
      } else {
        text = escape(this.options.smartypants ? smartypants(cap[0]) : cap[0]);
      }

      return {
        type: 'text',
        raw: cap[0],
        text
      };
    }
  }

}
/**
 * Block-Level Grammar
 */


var block = {
  newline: /^(?: *(?:\n|$))+/,
  code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
  fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
  hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
  heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
  blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
  list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
  html: '^ {0,3}(?:' // optional indentation
  + '<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)' // (1)
  + '|comment[^\\n]*(\\n+|$)' // (2)
  + '|<\\?[\\s\\S]*?(?:\\?>\\n*|$)' // (3)
  + '|<![A-Z][\\s\\S]*?(?:>\\n*|$)' // (4)
  + '|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)' // (5)
  + '|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (6)
  + '|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (7) open tag
  + '|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (7) closing tag
  + ')',
  def: /^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
  table: noopTest,
  lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
  // regex template, placeholders will be replaced according to different paragraph
  // interruption rules of commonmark and the original markdown spec:
  _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
  text: /^[^\n]+/
};
block._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
block._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
block.def = edit(block.def).replace('label', block._label).replace('title', block._title).getRegex();
block.bullet = /(?:[*+-]|\d{1,9}[.)])/;
block.listItemStart = edit(/^( *)(bull) */).replace('bull', block.bullet).getRegex();
block.list = edit(block.list).replace(/bull/g, block.bullet).replace('hr', '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))').replace('def', '\\n+(?=' + block.def.source + ')').getRegex();
block._tag = 'address|article|aside|base|basefont|blockquote|body|caption' + '|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption' + '|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe' + '|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option' + '|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr' + '|track|ul';
block._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
block.html = edit(block.html, 'i').replace('comment', block._comment).replace('tag', block._tag).replace('attribute', / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
block.paragraph = edit(block._paragraph).replace('hr', block.hr).replace('heading', ' {0,3}#{1,6} ').replace('|lheading', '') // setex headings don't interrupt commonmark paragraphs
.replace('|table', '').replace('blockquote', ' {0,3}>').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
.replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)').replace('tag', block._tag) // pars can be interrupted by type (6) html blocks
.getRegex();
block.blockquote = edit(block.blockquote).replace('paragraph', block.paragraph).getRegex();
/**
 * Normal Block Grammar
 */

block.normal = merge({}, block);
/**
 * GFM Block Grammar
 */

block.gfm = merge({}, block.normal, {
  table: '^ *([^\\n ].*\\|.*)\\n' // Header
  + ' {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?' // Align
  + '(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)' // Cells

});
block.gfm.table = edit(block.gfm.table).replace('hr', block.hr).replace('heading', ' {0,3}#{1,6} ').replace('blockquote', ' {0,3}>').replace('code', ' {4}[^\\n]').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
.replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)').replace('tag', block._tag) // tables can be interrupted by type (6) html blocks
.getRegex();
block.gfm.paragraph = edit(block._paragraph).replace('hr', block.hr).replace('heading', ' {0,3}#{1,6} ').replace('|lheading', '') // setex headings don't interrupt commonmark paragraphs
.replace('table', block.gfm.table) // interrupt paragraphs with table
.replace('blockquote', ' {0,3}>').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
.replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)').replace('tag', block._tag) // pars can be interrupted by type (6) html blocks
.getRegex();
/**
 * Pedantic grammar (original John Gruber's loose markdown specification)
 */

block.pedantic = merge({}, block.normal, {
  html: edit('^ *(?:comment *(?:\\n|\\s*$)' + '|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)' // closed tag
  + '|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))').replace('comment', block._comment).replace(/tag/g, '(?!(?:' + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub' + '|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)' + '\\b)\\w+(?!:|[^\\w\\s@]*@)\\b').getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: noopTest,
  // fences not supported
  paragraph: edit(block.normal._paragraph).replace('hr', block.hr).replace('heading', ' *#{1,6} *[^\n]').replace('lheading', block.lheading).replace('blockquote', ' {0,3}>').replace('|fences', '').replace('|list', '').replace('|html', '').getRegex()
});
/**
 * Inline-Level Grammar
 */

var inline = {
  escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
  url: noopTest,
  tag: '^comment' + '|^</[a-zA-Z][\\w:-]*\\s*>' // self-closing tag
  + '|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>' // open tag
  + '|^<\\?[\\s\\S]*?\\?>' // processing instruction, e.g. <?php ?>
  + '|^<![a-zA-Z]+\\s[\\s\\S]*?>' // declaration, e.g. <!DOCTYPE html>
  + '|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>',
  // CDATA section
  link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
  reflink: /^!?\[(label)\]\[(ref)\]/,
  nolink: /^!?\[(ref)\](?:\[\])?/,
  reflinkSearch: 'reflink|nolink(?!\\()',
  emStrong: {
    lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
    //        (1) and (2) can only be a Right Delimiter. (3) and (4) can only be Left.  (5) and (6) can be either Left or Right.
    //          () Skip orphan inside strong  () Consume to delim (1) #***                (2) a***#, a***                   (3) #***a, ***a                 (4) ***#              (5) #***#                 (6) a***a
    rDelimAst: /^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[^*]+(?=[^*])|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,
    rDelimUnd: /^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/ // ^- Not allowed for _

  },
  code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
  br: /^( {2,}|\\)\n(?!\s*$)/,
  del: noopTest,
  text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
  punctuation: /^([\spunctuation])/
}; // list of punctuation marks from CommonMark spec
// without * and _ to handle the different emphasis markers * and _

inline._punctuation = '!"#$%&\'()+\\-.,/:;<=>?@\\[\\]`^{|}~';
inline.punctuation = edit(inline.punctuation).replace(/punctuation/g, inline._punctuation).getRegex(); // sequences em should skip over [title](link), `code`, <html>

inline.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;
inline.escapedEmSt = /\\\*|\\_/g;
inline._comment = edit(block._comment).replace('(?:-->|$)', '-->').getRegex();
inline.emStrong.lDelim = edit(inline.emStrong.lDelim).replace(/punct/g, inline._punctuation).getRegex();
inline.emStrong.rDelimAst = edit(inline.emStrong.rDelimAst, 'g').replace(/punct/g, inline._punctuation).getRegex();
inline.emStrong.rDelimUnd = edit(inline.emStrong.rDelimUnd, 'g').replace(/punct/g, inline._punctuation).getRegex();
inline._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;
inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
inline.autolink = edit(inline.autolink).replace('scheme', inline._scheme).replace('email', inline._email).getRegex();
inline._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
inline.tag = edit(inline.tag).replace('comment', inline._comment).replace('attribute', inline._attribute).getRegex();
inline._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
inline._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
inline._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
inline.link = edit(inline.link).replace('label', inline._label).replace('href', inline._href).replace('title', inline._title).getRegex();
inline.reflink = edit(inline.reflink).replace('label', inline._label).replace('ref', block._label).getRegex();
inline.nolink = edit(inline.nolink).replace('ref', block._label).getRegex();
inline.reflinkSearch = edit(inline.reflinkSearch, 'g').replace('reflink', inline.reflink).replace('nolink', inline.nolink).getRegex();
/**
 * Normal Inline Grammar
 */

inline.normal = merge({}, inline);
/**
 * Pedantic Inline Grammar
 */

inline.pedantic = merge({}, inline.normal, {
  strong: {
    start: /^__|\*\*/,
    middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
    endAst: /\*\*(?!\*)/g,
    endUnd: /__(?!_)/g
  },
  em: {
    start: /^_|\*/,
    middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
    endAst: /\*(?!\*)/g,
    endUnd: /_(?!_)/g
  },
  link: edit(/^!?\[(label)\]\((.*?)\)/).replace('label', inline._label).getRegex(),
  reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace('label', inline._label).getRegex()
});
/**
 * GFM Inline Grammar
 */

inline.gfm = merge({}, inline.normal, {
  escape: edit(inline.escape).replace('])', '~|])').getRegex(),
  _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
  url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
  _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
});
inline.gfm.url = edit(inline.gfm.url, 'i').replace('email', inline.gfm._extended_email).getRegex();
/**
 * GFM + Line Breaks Inline Grammar
 */

inline.breaks = merge({}, inline.gfm, {
  br: edit(inline.br).replace('{2,}', '*').getRegex(),
  text: edit(inline.gfm.text).replace('\\b_', '\\b_| {2,}\\n').replace(/\{2,\}/g, '*').getRegex()
});
/**
 * smartypants text replacement
 * @param {string} text
 */

function smartypants(text) {
  return text // em-dashes
  .replace(/---/g, '\u2014') // en-dashes
  .replace(/--/g, '\u2013') // opening singles
  .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018') // closing singles & apostrophes
  .replace(/'/g, '\u2019') // opening doubles
  .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c') // closing doubles
  .replace(/"/g, '\u201d') // ellipses
  .replace(/\.{3}/g, '\u2026');
}
/**
 * mangle email addresses
 * @param {string} text
 */


function mangle(text) {
  var out = '',
      i,
      ch;
  var l = text.length;

  for (i = 0; i < l; i++) {
    ch = text.charCodeAt(i);

    if (Math.random() > 0.5) {
      ch = 'x' + ch.toString(16);
    }

    out += '&#' + ch + ';';
  }

  return out;
}
/**
 * Block Lexer
 */


class Lexer {
  constructor(options) {
    this.tokens = [];
    this.tokens.links = Object.create(null);
    this.options = options || defaults;
    this.options.tokenizer = this.options.tokenizer || new Tokenizer();
    this.tokenizer = this.options.tokenizer;
    this.tokenizer.options = this.options;
    this.tokenizer.lexer = this;
    this.inlineQueue = [];
    this.state = {
      inLink: false,
      inRawBlock: false,
      top: true
    };
    var rules = {
      block: block.normal,
      inline: inline.normal
    };

    if (this.options.pedantic) {
      rules.block = block.pedantic;
      rules.inline = inline.pedantic;
    } else if (this.options.gfm) {
      rules.block = block.gfm;

      if (this.options.breaks) {
        rules.inline = inline.breaks;
      } else {
        rules.inline = inline.gfm;
      }
    }

    this.tokenizer.rules = rules;
  }
  /**
   * Expose Rules
   */


  static get rules() {
    return {
      block,
      inline
    };
  }
  /**
   * Static Lex Method
   */


  static lex(src, options) {
    var lexer = new Lexer(options);
    return lexer.lex(src);
  }
  /**
   * Static Lex Inline Method
   */


  static lexInline(src, options) {
    var lexer = new Lexer(options);
    return lexer.inlineTokens(src);
  }
  /**
   * Preprocessing
   */


  lex(src) {
    src = src.replace(/\r\n|\r/g, '\n');
    this.blockTokens(src, this.tokens);
    var next;

    while (next = this.inlineQueue.shift()) {
      this.inlineTokens(next.src, next.tokens);
    }

    return this.tokens;
  }
  /**
   * Lexing
   */


  blockTokens(src) {
    var _this = this;

    var tokens = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    if (this.options.pedantic) {
      src = src.replace(/\t/g, '    ').replace(/^ +$/gm, '');
    } else {
      src = src.replace(/^( *)(\t+)/gm, (_, leading, tabs) => {
        return leading + '    '.repeat(tabs.length);
      });
    }

    var token, lastToken, cutSrc, lastParagraphClipped;

    while (src) {
      if (this.options.extensions && this.options.extensions.block && this.options.extensions.block.some(extTokenizer => {
        if (token = extTokenizer.call({
          lexer: this
        }, src, tokens)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          return true;
        }

        return false;
      })) {
        continue;
      } // newline


      if (token = this.tokenizer.space(src)) {
        src = src.substring(token.raw.length);

        if (token.raw.length === 1 && tokens.length > 0) {
          // if there's a single \n as a spacer, it's terminating the last line,
          // so move it there so that we don't get unecessary paragraph tags
          tokens[tokens.length - 1].raw += '\n';
        } else {
          tokens.push(token);
        }

        continue;
      } // code


      if (token = this.tokenizer.code(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1]; // An indented code block cannot interrupt a paragraph.

        if (lastToken && (lastToken.type === 'paragraph' || lastToken.type === 'text')) {
          lastToken.raw += '\n' + token.raw;
          lastToken.text += '\n' + token.text;
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }

        continue;
      } // fences


      if (token = this.tokenizer.fences(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      } // heading


      if (token = this.tokenizer.heading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      } // hr


      if (token = this.tokenizer.hr(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      } // blockquote


      if (token = this.tokenizer.blockquote(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      } // list


      if (token = this.tokenizer.list(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      } // html


      if (token = this.tokenizer.html(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      } // def


      if (token = this.tokenizer.def(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];

        if (lastToken && (lastToken.type === 'paragraph' || lastToken.type === 'text')) {
          lastToken.raw += '\n' + token.raw;
          lastToken.text += '\n' + token.raw;
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else if (!this.tokens.links[token.tag]) {
          this.tokens.links[token.tag] = {
            href: token.href,
            title: token.title
          };
        }

        continue;
      } // table (gfm)


      if (token = this.tokenizer.table(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      } // lheading


      if (token = this.tokenizer.lheading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      } // top-level paragraph
      // prevent paragraph consuming extensions by clipping 'src' to extension start


      cutSrc = src;

      if (this.options.extensions && this.options.extensions.startBlock) {
        (function () {
          var startIndex = Infinity;
          var tempSrc = src.slice(1);
          var tempStart = void 0;

          _this.options.extensions.startBlock.forEach(function (getStartIndex) {
            tempStart = getStartIndex.call({
              lexer: this
            }, tempSrc);

            if (typeof tempStart === 'number' && tempStart >= 0) {
              startIndex = Math.min(startIndex, tempStart);
            }
          });

          if (startIndex < Infinity && startIndex >= 0) {
            cutSrc = src.substring(0, startIndex + 1);
          }
        })();
      }

      if (this.state.top && (token = this.tokenizer.paragraph(cutSrc))) {
        lastToken = tokens[tokens.length - 1];

        if (lastParagraphClipped && lastToken.type === 'paragraph') {
          lastToken.raw += '\n' + token.raw;
          lastToken.text += '\n' + token.text;
          this.inlineQueue.pop();
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }

        lastParagraphClipped = cutSrc.length !== src.length;
        src = src.substring(token.raw.length);
        continue;
      } // text


      if (token = this.tokenizer.text(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];

        if (lastToken && lastToken.type === 'text') {
          lastToken.raw += '\n' + token.raw;
          lastToken.text += '\n' + token.text;
          this.inlineQueue.pop();
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }

        continue;
      }

      if (src) {
        var errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);

        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }

    this.state.top = true;
    return tokens;
  }

  inline(src) {
    var tokens = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    this.inlineQueue.push({
      src,
      tokens
    });
    return tokens;
  }
  /**
   * Lexing/Compiling
   */


  inlineTokens(src) {
    var _this2 = this;

    var tokens = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var token, lastToken, cutSrc; // String with links masked to avoid interference with em and strong

    var maskedSrc = src;
    var match;
    var keepPrevChar, prevChar; // Mask out reflinks

    if (this.tokens.links) {
      var links = Object.keys(this.tokens.links);

      if (links.length > 0) {
        while ((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null) {
          if (links.includes(match[0].slice(match[0].lastIndexOf('[') + 1, -1))) {
            maskedSrc = maskedSrc.slice(0, match.index) + '[' + repeatString('a', match[0].length - 2) + ']' + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
          }
        }
      }
    } // Mask out other blocks


    while ((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + '[' + repeatString('a', match[0].length - 2) + ']' + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    } // Mask out escaped em & strong delimiters


    while ((match = this.tokenizer.rules.inline.escapedEmSt.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + '++' + maskedSrc.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);
    }

    while (src) {
      if (!keepPrevChar) {
        prevChar = '';
      }

      keepPrevChar = false; // extensions

      if (this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some(extTokenizer => {
        if (token = extTokenizer.call({
          lexer: this
        }, src, tokens)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          return true;
        }

        return false;
      })) {
        continue;
      } // escape


      if (token = this.tokenizer.escape(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      } // tag


      if (token = this.tokenizer.tag(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];

        if (lastToken && token.type === 'text' && lastToken.type === 'text') {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }

        continue;
      } // link


      if (token = this.tokenizer.link(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      } // reflink, nolink


      if (token = this.tokenizer.reflink(src, this.tokens.links)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];

        if (lastToken && token.type === 'text' && lastToken.type === 'text') {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }

        continue;
      } // em & strong


      if (token = this.tokenizer.emStrong(src, maskedSrc, prevChar)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      } // code


      if (token = this.tokenizer.codespan(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      } // br


      if (token = this.tokenizer.br(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      } // del (gfm)


      if (token = this.tokenizer.del(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      } // autolink


      if (token = this.tokenizer.autolink(src, mangle)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      } // url (gfm)


      if (!this.state.inLink && (token = this.tokenizer.url(src, mangle))) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      } // text
      // prevent inlineText consuming extensions by clipping 'src' to extension start


      cutSrc = src;

      if (this.options.extensions && this.options.extensions.startInline) {
        (function () {
          var startIndex = Infinity;
          var tempSrc = src.slice(1);
          var tempStart = void 0;

          _this2.options.extensions.startInline.forEach(function (getStartIndex) {
            tempStart = getStartIndex.call({
              lexer: this
            }, tempSrc);

            if (typeof tempStart === 'number' && tempStart >= 0) {
              startIndex = Math.min(startIndex, tempStart);
            }
          });

          if (startIndex < Infinity && startIndex >= 0) {
            cutSrc = src.substring(0, startIndex + 1);
          }
        })();
      }

      if (token = this.tokenizer.inlineText(cutSrc, smartypants)) {
        src = src.substring(token.raw.length);

        if (token.raw.slice(-1) !== '_') {
          // Track prevChar before string of ____ started
          prevChar = token.raw.slice(-1);
        }

        keepPrevChar = true;
        lastToken = tokens[tokens.length - 1];

        if (lastToken && lastToken.type === 'text') {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }

        continue;
      }

      if (src) {
        var errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);

        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }

    return tokens;
  }

}
/**
 * Renderer
 */


class Renderer {
  constructor(options) {
    this.options = options || defaults;
  }

  code(code, infostring, escaped) {
    var lang = (infostring || '').match(/\S*/)[0];

    if (this.options.highlight) {
      var out = this.options.highlight(code, lang);

      if (out != null && out !== code) {
        escaped = true;
        code = out;
      }
    }

    code = code.replace(/\n$/, '') + '\n';

    if (!lang) {
      return '<pre><code>' + (escaped ? code : escape(code, true)) + '</code></pre>\n';
    }

    return '<pre><code class="' + this.options.langPrefix + escape(lang, true) + '">' + (escaped ? code : escape(code, true)) + '</code></pre>\n';
  }
  /**
   * @param {string} quote
   */


  blockquote(quote) {
    return "<blockquote>\n".concat(quote, "</blockquote>\n");
  }

  html(html) {
    return html;
  }
  /**
   * @param {string} text
   * @param {string} level
   * @param {string} raw
   * @param {any} slugger
   */


  heading(text, level, raw, slugger) {
    if (this.options.headerIds) {
      var id = this.options.headerPrefix + slugger.slug(raw);
      return "<h".concat(level, " id=\"").concat(id, "\">").concat(text, "</h").concat(level, ">\n");
    } // ignore IDs


    return "<h".concat(level, ">").concat(text, "</h").concat(level, ">\n");
  }

  hr() {
    return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
  }

  list(body, ordered, start) {
    var type = ordered ? 'ol' : 'ul',
        startatt = ordered && start !== 1 ? ' start="' + start + '"' : '';
    return '<' + type + startatt + '>\n' + body + '</' + type + '>\n';
  }
  /**
   * @param {string} text
   */


  listitem(text) {
    return "<li>".concat(text, "</li>\n");
  }

  checkbox(checked) {
    return '<input ' + (checked ? 'checked="" ' : '') + 'disabled="" type="checkbox"' + (this.options.xhtml ? ' /' : '') + '> ';
  }
  /**
   * @param {string} text
   */


  paragraph(text) {
    return "<p>".concat(text, "</p>\n");
  }
  /**
   * @param {string} header
   * @param {string} body
   */


  table(header, body) {
    if (body) body = "<tbody>".concat(body, "</tbody>");
    return '<table>\n' + '<thead>\n' + header + '</thead>\n' + body + '</table>\n';
  }
  /**
   * @param {string} content
   */


  tablerow(content) {
    return "<tr>\n".concat(content, "</tr>\n");
  }

  tablecell(content, flags) {
    var type = flags.header ? 'th' : 'td';
    var tag = flags.align ? "<".concat(type, " align=\"").concat(flags.align, "\">") : "<".concat(type, ">");
    return tag + content + "</".concat(type, ">\n");
  }
  /**
   * span level renderer
   * @param {string} text
   */


  strong(text) {
    return "<strong>".concat(text, "</strong>");
  }
  /**
   * @param {string} text
   */


  em(text) {
    return "<em>".concat(text, "</em>");
  }
  /**
   * @param {string} text
   */


  codespan(text) {
    return "<code>".concat(text, "</code>");
  }

  br() {
    return this.options.xhtml ? '<br/>' : '<br>';
  }
  /**
   * @param {string} text
   */


  del(text) {
    return "<del>".concat(text, "</del>");
  }
  /**
   * @param {string} href
   * @param {string} title
   * @param {string} text
   */


  link(href, title, text) {
    href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);

    if (href === null) {
      return text;
    }

    var out = '<a href="' + escape(href) + '"';

    if (title) {
      out += ' title="' + title + '"';
    }

    out += '>' + text + '</a>';
    return out;
  }
  /**
   * @param {string} href
   * @param {string} title
   * @param {string} text
   */


  image(href, title, text) {
    href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);

    if (href === null) {
      return text;
    }

    var out = "<img src=\"".concat(href, "\" alt=\"").concat(text, "\"");

    if (title) {
      out += " title=\"".concat(title, "\"");
    }

    out += this.options.xhtml ? '/>' : '>';
    return out;
  }

  text(text) {
    return text;
  }

}
/**
 * TextRenderer
 * returns only the textual part of the token
 */


class TextRenderer {
  // no need for block level renderers
  strong(text) {
    return text;
  }

  em(text) {
    return text;
  }

  codespan(text) {
    return text;
  }

  del(text) {
    return text;
  }

  html(text) {
    return text;
  }

  text(text) {
    return text;
  }

  link(href, title, text) {
    return '' + text;
  }

  image(href, title, text) {
    return '' + text;
  }

  br() {
    return '';
  }

}
/**
 * Slugger generates header id
 */


class Slugger {
  constructor() {
    this.seen = {};
  }
  /**
   * @param {string} value
   */


  serialize(value) {
    return value.toLowerCase().trim() // remove html tags
    .replace(/<[!\/a-z].*?>/ig, '') // remove unwanted chars
    .replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '').replace(/\s/g, '-');
  }
  /**
   * Finds the next safe (unique) slug to use
   * @param {string} originalSlug
   * @param {boolean} isDryRun
   */


  getNextSafeSlug(originalSlug, isDryRun) {
    var slug = originalSlug;
    var occurenceAccumulator = 0;

    if (this.seen.hasOwnProperty(slug)) {
      occurenceAccumulator = this.seen[originalSlug];

      do {
        occurenceAccumulator++;
        slug = originalSlug + '-' + occurenceAccumulator;
      } while (this.seen.hasOwnProperty(slug));
    }

    if (!isDryRun) {
      this.seen[originalSlug] = occurenceAccumulator;
      this.seen[slug] = 0;
    }

    return slug;
  }
  /**
   * Convert string to unique id
   * @param {object} [options]
   * @param {boolean} [options.dryrun] Generates the next unique slug without
   * updating the internal accumulator.
   */


  slug(value) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var slug = this.serialize(value);
    return this.getNextSafeSlug(slug, options.dryrun);
  }

}
/**
 * Parsing & Compiling
 */


class Parser {
  constructor(options) {
    this.options = options || defaults;
    this.options.renderer = this.options.renderer || new Renderer();
    this.renderer = this.options.renderer;
    this.renderer.options = this.options;
    this.textRenderer = new TextRenderer();
    this.slugger = new Slugger();
  }
  /**
   * Static Parse Method
   */


  static parse(tokens, options) {
    var parser = new Parser(options);
    return parser.parse(tokens);
  }
  /**
   * Static Parse Inline Method
   */


  static parseInline(tokens, options) {
    var parser = new Parser(options);
    return parser.parseInline(tokens);
  }
  /**
   * Parse Loop
   */


  parse(tokens) {
    var top = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var out = '',
        i,
        j,
        k,
        l2,
        l3,
        row,
        cell,
        header,
        body,
        token,
        ordered,
        start,
        loose,
        itemBody,
        item,
        checked,
        task,
        checkbox,
        ret;
    var l = tokens.length;

    for (i = 0; i < l; i++) {
      token = tokens[i]; // Run any renderer extensions

      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
        ret = this.options.extensions.renderers[token.type].call({
          parser: this
        }, token);

        if (ret !== false || !['space', 'hr', 'heading', 'code', 'table', 'blockquote', 'list', 'html', 'paragraph', 'text'].includes(token.type)) {
          out += ret || '';
          continue;
        }
      }

      switch (token.type) {
        case 'space':
          {
            continue;
          }

        case 'hr':
          {
            out += this.renderer.hr();
            continue;
          }

        case 'heading':
          {
            out += this.renderer.heading(this.parseInline(token.tokens), token.depth, unescape(this.parseInline(token.tokens, this.textRenderer)), this.slugger);
            continue;
          }

        case 'code':
          {
            out += this.renderer.code(token.text, token.lang, token.escaped);
            continue;
          }

        case 'table':
          {
            header = ''; // header

            cell = '';
            l2 = token.header.length;

            for (j = 0; j < l2; j++) {
              cell += this.renderer.tablecell(this.parseInline(token.header[j].tokens), {
                header: true,
                align: token.align[j]
              });
            }

            header += this.renderer.tablerow(cell);
            body = '';
            l2 = token.rows.length;

            for (j = 0; j < l2; j++) {
              row = token.rows[j];
              cell = '';
              l3 = row.length;

              for (k = 0; k < l3; k++) {
                cell += this.renderer.tablecell(this.parseInline(row[k].tokens), {
                  header: false,
                  align: token.align[k]
                });
              }

              body += this.renderer.tablerow(cell);
            }

            out += this.renderer.table(header, body);
            continue;
          }

        case 'blockquote':
          {
            body = this.parse(token.tokens);
            out += this.renderer.blockquote(body);
            continue;
          }

        case 'list':
          {
            ordered = token.ordered;
            start = token.start;
            loose = token.loose;
            l2 = token.items.length;
            body = '';

            for (j = 0; j < l2; j++) {
              item = token.items[j];
              checked = item.checked;
              task = item.task;
              itemBody = '';

              if (item.task) {
                checkbox = this.renderer.checkbox(checked);

                if (loose) {
                  if (item.tokens.length > 0 && item.tokens[0].type === 'paragraph') {
                    item.tokens[0].text = checkbox + ' ' + item.tokens[0].text;

                    if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === 'text') {
                      item.tokens[0].tokens[0].text = checkbox + ' ' + item.tokens[0].tokens[0].text;
                    }
                  } else {
                    item.tokens.unshift({
                      type: 'text',
                      text: checkbox
                    });
                  }
                } else {
                  itemBody += checkbox;
                }
              }

              itemBody += this.parse(item.tokens, loose);
              body += this.renderer.listitem(itemBody, task, checked);
            }

            out += this.renderer.list(body, ordered, start);
            continue;
          }

        case 'html':
          {
            // TODO parse inline content if parameter markdown=1
            out += this.renderer.html(token.text);
            continue;
          }

        case 'paragraph':
          {
            out += this.renderer.paragraph(this.parseInline(token.tokens));
            continue;
          }

        case 'text':
          {
            body = token.tokens ? this.parseInline(token.tokens) : token.text;

            while (i + 1 < l && tokens[i + 1].type === 'text') {
              token = tokens[++i];
              body += '\n' + (token.tokens ? this.parseInline(token.tokens) : token.text);
            }

            out += top ? this.renderer.paragraph(body) : body;
            continue;
          }

        default:
          {
            var errMsg = 'Token with "' + token.type + '" type was not found.';

            if (this.options.silent) {
              console.error(errMsg);
              return;
            } else {
              throw new Error(errMsg);
            }
          }
      }
    }

    return out;
  }
  /**
   * Parse Inline Tokens
   */


  parseInline(tokens, renderer) {
    renderer = renderer || this.renderer;
    var out = '',
        i,
        token,
        ret;
    var l = tokens.length;

    for (i = 0; i < l; i++) {
      token = tokens[i]; // Run any renderer extensions

      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
        ret = this.options.extensions.renderers[token.type].call({
          parser: this
        }, token);

        if (ret !== false || !['escape', 'html', 'link', 'image', 'strong', 'em', 'codespan', 'br', 'del', 'text'].includes(token.type)) {
          out += ret || '';
          continue;
        }
      }

      switch (token.type) {
        case 'escape':
          {
            out += renderer.text(token.text);
            break;
          }

        case 'html':
          {
            out += renderer.html(token.text);
            break;
          }

        case 'link':
          {
            out += renderer.link(token.href, token.title, this.parseInline(token.tokens, renderer));
            break;
          }

        case 'image':
          {
            out += renderer.image(token.href, token.title, token.text);
            break;
          }

        case 'strong':
          {
            out += renderer.strong(this.parseInline(token.tokens, renderer));
            break;
          }

        case 'em':
          {
            out += renderer.em(this.parseInline(token.tokens, renderer));
            break;
          }

        case 'codespan':
          {
            out += renderer.codespan(token.text);
            break;
          }

        case 'br':
          {
            out += renderer.br();
            break;
          }

        case 'del':
          {
            out += renderer.del(this.parseInline(token.tokens, renderer));
            break;
          }

        case 'text':
          {
            out += renderer.text(token.text);
            break;
          }

        default:
          {
            var errMsg = 'Token with "' + token.type + '" type was not found.';

            if (this.options.silent) {
              console.error(errMsg);
              return;
            } else {
              throw new Error(errMsg);
            }
          }
      }
    }

    return out;
  }

}
/**
 * Marked
 */


function marked(src, opt, callback) {
  // throw error in case of non string input
  if (typeof src === 'undefined' || src === null) {
    throw new Error('marked(): input parameter is undefined or null');
  }

  if (typeof src !== 'string') {
    throw new Error('marked(): input parameter is of type ' + Object.prototype.toString.call(src) + ', string expected');
  }

  if (typeof opt === 'function') {
    callback = opt;
    opt = null;
  }

  opt = merge({}, marked.defaults, opt || {});
  checkSanitizeDeprecation(opt);

  if (callback) {
    var highlight = opt.highlight;
    var tokens;

    try {
      tokens = Lexer.lex(src, opt);
    } catch (e) {
      return callback(e);
    }

    var done = function done(err) {
      var out;

      if (!err) {
        try {
          if (opt.walkTokens) {
            marked.walkTokens(tokens, opt.walkTokens);
          }

          out = Parser.parse(tokens, opt);
        } catch (e) {
          err = e;
        }
      }

      opt.highlight = highlight;
      return err ? callback(err) : callback(null, out);
    };

    if (!highlight || highlight.length < 3) {
      return done();
    }

    delete opt.highlight;
    if (!tokens.length) return done();
    var pending = 0;
    marked.walkTokens(tokens, function (token) {
      if (token.type === 'code') {
        pending++;
        setTimeout(() => {
          highlight(token.text, token.lang, function (err, code) {
            if (err) {
              return done(err);
            }

            if (code != null && code !== token.text) {
              token.text = code;
              token.escaped = true;
            }

            pending--;

            if (pending === 0) {
              done();
            }
          });
        }, 0);
      }
    });

    if (pending === 0) {
      done();
    }

    return;
  }

  function onError(e) {
    e.message += '\nPlease report this to https://github.com/markedjs/marked.';

    if (opt.silent) {
      return '<p>An error occurred:</p><pre>' + escape(e.message + '', true) + '</pre>';
    }

    throw e;
  }

  try {
    var _tokens = Lexer.lex(src, opt);

    if (opt.walkTokens) {
      if (opt.async) {
        return Promise.all(marked.walkTokens(_tokens, opt.walkTokens)).then(() => {
          return Parser.parse(_tokens, opt);
        }).catch(onError);
      }

      marked.walkTokens(_tokens, opt.walkTokens);
    }

    return Parser.parse(_tokens, opt);
  } catch (e) {
    onError(e);
  }
}
/**
 * Options
 */


marked.options = marked.setOptions = function (opt) {
  merge(marked.defaults, opt);
  changeDefaults(marked.defaults);
  return marked;
};

marked.getDefaults = getDefaults;
marked.defaults = defaults;
/**
 * Use Extension
 */

marked.use = function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var opts = merge({}, ...args);
  var extensions = marked.defaults.extensions || {
    renderers: {},
    childTokens: {}
  };
  var hasExtensions;
  args.forEach(pack => {
    // ==-- Parse "addon" extensions --== //
    if (pack.extensions) {
      hasExtensions = true;
      pack.extensions.forEach(ext => {
        if (!ext.name) {
          throw new Error('extension name required');
        }

        if (ext.renderer) {
          // Renderer extensions
          var prevRenderer = extensions.renderers ? extensions.renderers[ext.name] : null;

          if (prevRenderer) {
            // Replace extension with func to run new extension but fall back if false
            extensions.renderers[ext.name] = function () {
              for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
              }

              var ret = ext.renderer.apply(this, args);

              if (ret === false) {
                ret = prevRenderer.apply(this, args);
              }

              return ret;
            };
          } else {
            extensions.renderers[ext.name] = ext.renderer;
          }
        }

        if (ext.tokenizer) {
          // Tokenizer Extensions
          if (!ext.level || ext.level !== 'block' && ext.level !== 'inline') {
            throw new Error("extension level must be 'block' or 'inline'");
          }

          if (extensions[ext.level]) {
            extensions[ext.level].unshift(ext.tokenizer);
          } else {
            extensions[ext.level] = [ext.tokenizer];
          }

          if (ext.start) {
            // Function to check for start of token
            if (ext.level === 'block') {
              if (extensions.startBlock) {
                extensions.startBlock.push(ext.start);
              } else {
                extensions.startBlock = [ext.start];
              }
            } else if (ext.level === 'inline') {
              if (extensions.startInline) {
                extensions.startInline.push(ext.start);
              } else {
                extensions.startInline = [ext.start];
              }
            }
          }
        }

        if (ext.childTokens) {
          // Child tokens to be visited by walkTokens
          extensions.childTokens[ext.name] = ext.childTokens;
        }
      });
    } // ==-- Parse "overwrite" extensions --== //


    if (pack.renderer) {
      (function () {
        var renderer = marked.defaults.renderer || new Renderer();

        var _loop = function _loop(prop) {
          var prevRenderer = renderer[prop]; // Replace renderer with func to run extension, but fall back if false

          renderer[prop] = function () {
            for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              args[_key3] = arguments[_key3];
            }

            var ret = pack.renderer[prop].apply(renderer, args);

            if (ret === false) {
              ret = prevRenderer.apply(renderer, args);
            }

            return ret;
          };
        };

        for (var prop in pack.renderer) {
          _loop(prop);
        }

        opts.renderer = renderer;
      })();
    }

    if (pack.tokenizer) {
      (function () {
        var tokenizer = marked.defaults.tokenizer || new Tokenizer();

        var _loop2 = function _loop2(prop) {
          var prevTokenizer = tokenizer[prop]; // Replace tokenizer with func to run extension, but fall back if false

          tokenizer[prop] = function () {
            for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
              args[_key4] = arguments[_key4];
            }

            var ret = pack.tokenizer[prop].apply(tokenizer, args);

            if (ret === false) {
              ret = prevTokenizer.apply(tokenizer, args);
            }

            return ret;
          };
        };

        for (var prop in pack.tokenizer) {
          _loop2(prop);
        }

        opts.tokenizer = tokenizer;
      })();
    } // ==-- Parse WalkTokens extensions --== //


    if (pack.walkTokens) {
      var _walkTokens = marked.defaults.walkTokens;

      opts.walkTokens = function (token) {
        var values = [];
        values.push(pack.walkTokens.call(this, token));

        if (_walkTokens) {
          values = values.concat(_walkTokens.call(this, token));
        }

        return values;
      };
    }

    if (hasExtensions) {
      opts.extensions = extensions;
    }

    marked.setOptions(opts);
  });
};
/**
 * Run callback for every token
 */


marked.walkTokens = function (tokens, callback) {
  var values = [];

  var _loop3 = function _loop3(token) {
    values = values.concat(callback.call(marked, token));

    switch (token.type) {
      case 'table':
        {
          for (var cell of token.header) {
            values = values.concat(marked.walkTokens(cell.tokens, callback));
          }

          for (var row of token.rows) {
            for (var _cell of row) {
              values = values.concat(marked.walkTokens(_cell.tokens, callback));
            }
          }

          break;
        }

      case 'list':
        {
          values = values.concat(marked.walkTokens(token.items, callback));
          break;
        }

      default:
        {
          if (marked.defaults.extensions && marked.defaults.extensions.childTokens && marked.defaults.extensions.childTokens[token.type]) {
            // Walk any extensions
            marked.defaults.extensions.childTokens[token.type].forEach(function (childTokens) {
              values = values.concat(marked.walkTokens(token[childTokens], callback));
            });
          } else if (token.tokens) {
            values = values.concat(marked.walkTokens(token.tokens, callback));
          }
        }
    }
  };

  for (var token of tokens) {
    _loop3(token);
  }

  return values;
};
/**
 * Parse Inline
 * @param {string} src
 */


marked.parseInline = function (src, opt) {
  // throw error in case of non string input
  if (typeof src === 'undefined' || src === null) {
    throw new Error('marked.parseInline(): input parameter is undefined or null');
  }

  if (typeof src !== 'string') {
    throw new Error('marked.parseInline(): input parameter is of type ' + Object.prototype.toString.call(src) + ', string expected');
  }

  opt = merge({}, marked.defaults, opt || {});
  checkSanitizeDeprecation(opt);

  try {
    var tokens = Lexer.lexInline(src, opt);

    if (opt.walkTokens) {
      marked.walkTokens(tokens, opt.walkTokens);
    }

    return Parser.parseInline(tokens, opt);
  } catch (e) {
    e.message += '\nPlease report this to https://github.com/markedjs/marked.';

    if (opt.silent) {
      return '<p>An error occurred:</p><pre>' + escape(e.message + '', true) + '</pre>';
    }

    throw e;
  }
};
/**
 * Expose
 */


marked.Parser = Parser;
marked.parser = Parser.parse;
marked.Renderer = Renderer;
marked.TextRenderer = TextRenderer;
marked.Lexer = Lexer;
marked.lexer = Lexer.lex;
marked.Tokenizer = Tokenizer;
marked.Slugger = Slugger;
marked.parse = marked;
Parser.parse;
Lexer.lex;

var _bindData$3 = /*#__PURE__*/new WeakSet();

class Background {
  constructor(options) {
    _bindData$3.add(this);

    this.container = Lite.append(options.container, "<div id='background'></div>");
    this.character = options.character;

    _classPrivateMethodGet(this, _bindData$3, _bindData2$3).call(this);
  }

}

function _bindData2$3() {
  var background = this.container.querySelector('#background');
  var markup = '';

  for (var b in this.character.Background) {
    markup += '* **' + b + '**: ' + this.character.Background[b] + ' \n';
  }

  markup = marked.parse(markup);
  background.innerHTML = markup;
}

var _bindData$2 = /*#__PURE__*/new WeakSet();

class Notes {
  constructor(options) {
    _bindData$2.add(this);

    this.container = Lite.append(options.container, "<div id='notes'></div>");
    this.character = options.character;

    _classPrivateMethodGet(this, _bindData$2, _bindData2$2).call(this);
  }

}

function _bindData2$2() {
  var div = this.container.querySelector('#notes');
  div.innerHTML = marked.parse(this.character.Notes);
}

var _getGridData$2 = /*#__PURE__*/new WeakSet();

var _bindData$1 = /*#__PURE__*/new WeakSet();

var _numberSort$1 = /*#__PURE__*/new WeakSet();

class Skills {
  constructor(options) {
    _numberSort$1.add(this);

    _bindData$1.add(this);

    _getGridData$2.add(this);

    this.container = Lite.append(options.container, "<div id='skills'></div>");
    this.character = options.character;

    _classPrivateMethodGet(this, _bindData$1, _bindData2$1).call(this);
  }

}

function _getGridData2$2() {
  var results = [];
  var skills = this.character.Skills;

  for (var name in skills) {
    results.push(skills[name]);
  }

  results.forEach(skill => skill.Trained = skill.Trained ? 'Yes' : 'No');
  return results;
}

function _bindData2$1() {
  var view = this;

  var gridData = _classPrivateMethodGet(this, _getGridData$2, _getGridData2$2).call(this);

  var container = this.container.querySelector('#skills');
  new Gridify({
    container: container,
    data: gridData,
    columns: [{
      field: 'Name',
      header: 'Name',
      style: 'text-align:left',
      sort: true
    }, {
      field: 'Ability',
      header: 'Ability',
      style: 'text-align:center',
      sort: true
    }, {
      field: 'Trained',
      header: 'Trained',
      style: 'text-align:center',
      sort: true
    }, {
      field: 'Bonus',
      header: 'Bonus',
      style: 'text-align:right',
      sort: _classPrivateMethodGet(view, _numberSort$1, _numberSort2$1)
    }],
    className: 'table small'
  });
}

function _numberSort2$1(a, b) {
  if (+a === +b) {
    return 0;
  } else return +a > +b ? 1 : -1;
}

var html = "<div id='items'>\r\n    <div id='carrying-capacity'>Carrying Capacity: </div>\r\n    <div id='items-grid-container'></div>\r\n</div>";

var _bindData = /*#__PURE__*/new WeakSet();

var _getGridData$1 = /*#__PURE__*/new WeakSet();

var _bindCarryWeight = /*#__PURE__*/new WeakSet();

var _bindGrid$1 = /*#__PURE__*/new WeakSet();

var _numberSort = /*#__PURE__*/new WeakSet();

var _coinSort = /*#__PURE__*/new WeakSet();

class Items {
  constructor(options) {
    _coinSort.add(this);

    _numberSort.add(this);

    _bindGrid$1.add(this);

    _bindCarryWeight.add(this);

    _getGridData$1.add(this);

    _bindData.add(this);

    this.container = Lite.append(options.container, html);
    this.character = options.character;

    _classPrivateMethodGet(this, _bindData, _bindData2).call(this);
  }

}

function _bindData2() {
  var data = _classPrivateMethodGet(this, _getGridData$1, _getGridData2$1).call(this);

  _classPrivateMethodGet(this, _bindCarryWeight, _bindCarryWeight2).call(this, data);

  _classPrivateMethodGet(this, _bindGrid$1, _bindGrid2$1).call(this, data);
}

function _getGridData2$1() {
  var items = [];
  Object.values(this.character.Items).forEach(item => {
    if (!(typeof item == 'object')) return;
    item.Weight = item.Weight || 0;
    item.Value = item.Value || '0gp';
    items.push(item);
  });
  return items;
}

function _bindCarryWeight2(data) {
  var totalWeight = data.reduce((acc, item) => acc += item.Weight || 0, 0);
  var capacityDiv = this.container.querySelector('#carrying-capacity');
  capacityDiv.innerHTML = capacityDiv.innerHTML + ' ' + totalWeight + '/' + this.character.CarryWeight;
}

function _bindGrid2$1(data) {
  var view = this; // styling looks a bit weird. 
  // we had a 'grid' class that might be useful. 

  new Gridify({
    container: 'items-grid-container',
    data: data,
    columns: [{
      field: 'Name',
      header: 'Name',
      style: 'text-align:left',
      sort: true
    }, {
      field: 'Count',
      header: 'Count',
      style: 'text-align:right'
    }, {
      field: 'Value',
      header: 'Value',
      sort: _classPrivateMethodGet(view, _coinSort, _coinSort2),
      style: 'text-align:center'
    }, {
      field: 'Weight',
      header: 'Weight',
      style: 'text-align:right',
      sort: _classPrivateMethodGet(view, _numberSort, _numberSort2)
    }],
    className: 'table small'
  });
}

function _numberSort2(a, b) {
  if (+a === +b) {
    return 0;
  } else return +a > +b ? 1 : -1;
}

function _coinSort2(a, b) {
  var coinValues = [{
    suffix: 'cp',
    rate: 1
  }, {
    suffix: 'sp',
    rate: 10
  }, {
    suffix: 'ep',
    rate: 50
  }, {
    suffix: 'gp',
    rate: 100
  }, {
    suffix: 'pp',
    rate: 1000
  }];

  var convertToCopper = function convertToCopper(value) {
    var conversion = coinValues.find(v => value.includes(v.suffix));

    if (!conversion) {
      return -1;
    }

    value = +value.replace(conversion.suffix, '');
    value = value * conversion.rate;
    return value;
  };

  a = convertToCopper(a);
  b = convertToCopper(b);

  if (a === b) {
    return 0;
  }

  return a > b ? 1 : -1;
}

var _getGridData = /*#__PURE__*/new WeakSet();

var _bindGrid = /*#__PURE__*/new WeakSet();

var _getRitualFilter = /*#__PURE__*/new WeakSet();

class Spells {
  constructor(options) {
    _getRitualFilter.add(this);

    _bindGrid.add(this);

    _getGridData.add(this);

    this.container = Lite.append(options.container, "<div id='spells'></div>");
    this.character = options.character;

    _classPrivateMethodGet(this, _bindGrid, _bindGrid2).call(this);
  }

}

function _getGridData2() {
  var spells = Object.values(this.character.Spells);
  spells.forEach(spell => spell.Ritual = spell.Ritual ? 'Yes' : 'No');
  return spells;
}

function _bindGrid2() {
  var view = this;

  var data = _classPrivateMethodGet(this, _getGridData, _getGridData2).call(this);

  this.grid = new Gridify({
    container: 'spells-container',
    data: data,
    columns: [{
      field: 'Name',
      header: 'Name',
      style: 'text-align:left; text-decoration:underline',
      filter: true,
      sort: true,
      click: e => {
        var spell = spells[e.target.innerHTML];
        var modal = new Modal();
        new SpellBox({
          data: spell,
          container: modal.body
        });
      }
    }, {
      field: 'Level',
      header: 'Level',
      filter: true,
      sort: true
    }, {
      field: 'CastingTime',
      header: 'Cast Time',
      filter: true,
      style: 'max-width:300px; text-align:left'
    }, {
      field: 'Ritual',
      header: 'Ritual',
      filter: _classPrivateMethodGet(view, _getRitualFilter, _getRitualFilter2).call(view)
    }, {
      field: 'Range',
      header: 'Range',
      filter: true
    }, {
      field: 'Duration',
      header: 'Duration',
      filter: true
    }],
    className: 'table small',

    onHeaderCreated(thead, options) {
      thead.querySelectorAll('input[type="text"]').forEach(i => i.className = "input-xsmall");
    },

    onHeaderCellCreated(th, options) {
      var sortIcon = th.querySelector('.sort');

      if (sortIcon) {
        sortIcon.className = 'fa fa-sort';
      }
    }

  });
}

function _getRitualFilter2() {
  var view = this;
  var checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBox.addEventListener('click', e => {
    e.target.value = e.target.checked;
    view.grid.filter();
  });

  var compare = function compare(columnValue, filterValue) {
    return filterValue == 'true' ? columnValue == 'Yes' : true;
  };

  return {
    control: checkBox,
    compare: compare
  };
}

var _loadCharacter = /*#__PURE__*/new WeakSet();

var _addEventListeners = /*#__PURE__*/new WeakSet();

var _toggleTabs = /*#__PURE__*/new WeakSet();

var _toggleContainer = /*#__PURE__*/new WeakSet();

var _loadTabs = /*#__PURE__*/new WeakSet();

class CharacterSheet {
  constructor(options) {
    _loadTabs.add(this);

    _toggleContainer.add(this);

    _toggleTabs.add(this);

    _addEventListeners.add(this);

    _loadCharacter.add(this);

    this.container = Lite.append(options.container, html$2);
    Lite.head.addCss('./css/character-sheet.css');

    _classPrivateMethodGet(this, _addEventListeners, _addEventListeners2).call(this);

    _classPrivateMethodGet(this, _loadCharacter, _loadCharacter2).call(this);

    _classPrivateMethodGet(this, _loadTabs, _loadTabs2).call(this);

    _classPrivateMethodGet(this, _toggleTabs, _toggleTabs2).call(this);

    _classPrivateMethodGet(this, _toggleContainer, _toggleContainer2).call(this, 'stats');
  }

}

function _loadCharacter2() {
  var name = location.hash.replace('#character-sheet/', '');
  var character = Characters[name];
  this.character = character;
}

function _addEventListeners2() {
  var view = this;
  var tabs = view.container.querySelectorAll('.tab-container > ul > li');
  tabs.forEach(tab => {
    tab.addEventListener('click', function () {
      _classPrivateMethodGet(view, _toggleContainer, _toggleContainer2).call(view, tab.id);
    });
  });
}

function _toggleTabs2() {
  if (!this.character.Background) this.container.querySelector('.tab-container #background').setAttribute('hidden', '');
  if (!this.character.Notes) this.container.querySelector('.tab-container #notes').setAttribute('hidden', '');
  if (!this.character.Spells) this.container.querySelector('.tabs-container #spells)').setAttribute('hidden', '');
}

function _toggleContainer2(id) {
  var view = this; // Hide containers

  var containers = view.container.querySelectorAll('#sections>.section');
  Array.from(containers).forEach(container => container.setAttribute('hidden', '')); // show container

  var container = view.container.querySelector('#' + id + '-container');
  container.removeAttribute('hidden');
}

function _loadTabs2() {
  var view = this;
  new Stats({
    container: 'stats-container',
    character: view.character
  });
  new Background({
    container: 'background-container',
    character: view.character
  });
  new Notes({
    container: 'notes-container',
    character: view.character
  });
  new Skills({
    container: 'skills-container',
    character: view.character
  });
  new Items({
    container: 'items-container',
    character: view.character
  });
  new Spells({
    container: 'spells-container',
    character: view.character
  });
}

var View = CharacterSheet;

export { CharacterSheet, View };
