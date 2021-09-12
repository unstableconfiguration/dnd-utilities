
export let mordenkainens = [
  {
    "name": "Abyssal Wretch",
    "size": "M",
    "type": "fiend (demon)",
    "alignment": "Chaotic Evil",
    "ac": 11,
    "hp": 18,
    "speed": "Walk 20",
    "str": 9,
    "dex": 12,
    "con": 11,
    "int": 5,
    "wis": 8,
    "cha": 5,
    "senses": "darkvision 120 ft.",
    "passive": 9,
    "resist": [
      "cold",
      "fire",
      "lightning"
    ],
    "immune": "poison",
    "conditionImmune": "charmed, frightened, poisoned",
    "languages": "understands Abyssal but can't speak",
    "cr": "1/4",
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one target. Hit:5 (1d8 + 1) slashing damage."
      }
    ]
  },
  {
    "name": "Adult Kruthik",
    "size": "M",
    "type": "monstrosity",
    "alignment": "Unaligned",
    "ac": "18 natural armor",
    "hp": 39,
    "speed": "Walk 40, Burrow 20, Climb 40",
    "str": 15,
    "dex": 16,
    "con": 15,
    "int": 7,
    "wis": 12,
    "cha": 8,
    "senses": "darkvision 60 ft., tremorsense 60 ft.",
    "passive": 11,
    "languages": "Kruthik",
    "cr": "2",
    "trait": [
      {
        "Name": "Keen Smell",
        "Text": "The kruthik has advantage on Wisdom (Perception) checks that rely on smell."
      },
      {
        "Name": "Pack Tactics",
        "Text": "The kruthik has advantage on an attack roll against a creature if at least one of the kruthik's allies is within 5 feet of the creature and the ally isn't incapacitated."
      },
      {
        "Name": "Tunneler",
        "Text": "The kruthik can burrow through solid rock at half its burrowing speed and leaves a 5-foot-diameter tunnel in its wake."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The kruthik makes two stab attacks or two spike attacks."
      },
      {
        "Name": "Stab",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:6 (1d6 + 3) piercing damage."
      },
      {
        "Name": "Spike",
        "Text": "Ranged Weapon 5 to hit, range 20/60 ft., one target. Hit:5 (1d4 + 3) piercing damage."
      }
    ],
    "environment": [
      "desert",
      "mountain",
      "underdark"
    ]
  },
  {
    "name": "Adult Oblex",
    "size": "M",
    "type": "ooze",
    "alignment": "Lawful Evil",
    "ac": 14,
    "hp": 75,
    "speed": "Walk 20",
    "str": 8,
    "dex": 19,
    "con": 16,
    "int": 19,
    "wis": 12,
    "cha": 15,
    "save": "Int +7, Cha +5",
    "skill": "Deception +5, Perception +4, Other [object Object]",
    "senses": "blindsight 60 ft. (blind beyond this distance)",
    "passive": 14,
    "conditionImmune": "blinded, charmed, deafened, exhaustion, prone",
    "languages": "Common plus two more languages",
    "cr": "5",
    "trait": [
      {
        "Name": "Amorphous",
        "Text": "The oblex can move through a space as narrow as 1 inch wide without squeezing."
      },
      {
        "Name": "Aversion to Fire",
        "Text": "If the oblex takes fire damage, it has disadvantage on attack rolls and ability checks until the end of its next turn."
      },
      {
        "Name": "Sulfurous Impersonation",
        "Text": "As a bonus action, the oblex can extrude a piece of itself that assumes the appearance of one Medium or smaller creature whose memories it has stolen. This simulacrum appears, feels, and sounds exactly like the creature it impersonates, though it smells faintly of sulfur. The oblex can impersonate 1d4 + 1 different creatures, each one tethered to its body by a strand of slime that can extend up to 120 feet away. For all practical purposes, the simulacrum is the oblex, meaning that the oblex occupies its space and the simulacrum's space simultaneously. The slimy tether is immune to damage, but it is severed if there is no opening at least 1 inch wide between the oblex's main body and the simulacrum. The simulacrum disappears if the tether is severed."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>3/day each: <em>charm person (as 5th-level spell), color spray, detect thoughts, hold person (as 3rd-level spell)</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The oblex makes one pseudopod attack and uses Eat Memories."
      },
      {
        "Name": "Pseudopod",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:7 (1d6 + 4) bludgeoning damage plus 5 (2d4) psychic damage."
      },
      {
        "Name": "Eat Memories",
        "Text": "The oblex targets one creature it can see within 5 feet of it. The target must succeed on a 15 Wisdom saving throw or take 18 (4d8) psychic damage and become memory drained until it finishes a short or long rest or until it benefits from the greater restoration or heal spell. Constructs, oozes, plants, and undead succeed on the save automatically."
      }
    ],
    "environment": [
      "swamp",
      "underdark",
      "urban"
    ]
  },
  {
    "name": "Air Elemental Myrmidon",
    "size": "M",
    "type": "elemental",
    "alignment": "Neutral",
    "ac": "18 plate armor",
    "hp": 117,
    "speed": "Walk 30, Fly 30 (hover)",
    "str": 18,
    "dex": 14,
    "con": 14,
    "int": 9,
    "wis": 10,
    "cha": 10,
    "senses": "darkvision 60 ft.",
    "passive": 10,
    "resist": [
      "lightning",
      "thunder",
      {
        "resist": [
          "bludgeoning",
          "piercing",
          "slashing"
        ],
        "note": "from nonmagical attacks",
        "cond": true
      }
    ],
    "immune": "poison",
    "conditionImmune": "paralyzed, petrified, poisoned, prone",
    "languages": "Auran, one language of its creator's choice",
    "cr": "7",
    "trait": [
      {
        "Name": "Magic Weapons",
        "Text": "The myrmidon's weapon attacks are magical."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The myrmidon makes three flail attacks."
      },
      {
        "Name": "Flail",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:8 (1d8 + 4) bludgeoning damage."
      },
      {
        "Name": "Lightning Strike (Recharge 6)",
        "Text": "The myrmidon makes one flail attack. On a hit, the target takes an extra 18 (4d8) lightning damage, and the target must succeed on a 13 Constitution saving throw or be stunned until the end of the myrmidon's next turn."
      }
    ]
  },
  {
    "name": "Alkilith",
    "size": "M",
    "type": "fiend (demon)",
    "alignment": "Chaotic Evil",
    "ac": "17 natural armor",
    "hp": 157,
    "speed": "Walk 40",
    "str": 12,
    "dex": 19,
    "con": 22,
    "int": 6,
    "wis": 11,
    "cha": 7,
    "save": "Dex +8, Con +10",
    "skill": "Stealth +8",
    "senses": "darkvision 120 ft.",
    "passive": 10,
    "resist": [
      "acid",
      "cold",
      "fire",
      "lightning",
      {
        "resist": [
          "bludgeoning",
          "piercing",
          "slashing"
        ],
        "note": "from nonmagical attacks",
        "cond": true
      }
    ],
    "immune": "poison",
    "conditionImmune": "charmed, frightened, poisoned",
    "languages": "understands Abyssal but can't speak",
    "cr": "11",
    "trait": [
      {
        "Name": "Amorphous",
        "Text": "The alkilith can move through a space as narrow as 1 inch wide without squeezing."
      },
      {
        "Name": "False Appearance",
        "Text": "While the alkilith is motionless, it is indistinguishable from an ordinary slime or fungus."
      },
      {
        "Name": "Foment Madness",
        "Text": "Any creature that isn't a demon that starts its turn within 30 feet of the alkilith must succeed on a 18 Wisdom saving throw, or it hears a faint buzzing in its head for a moment and has disadvantage on its next attack roll, saving throw, or ability check."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The alkilith has advantage on saving throws against spells and other magical effects."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The alkilith makes three tentacle attacks."
      },
      {
        "Name": "Tentacle",
        "Text": "Melee Weapon 8 to hit, reach 15 ft., one target. Hit:18 (4d6 + 4) acid damage."
      }
    ],
    "environment": [
      "underdark",
      "urban"
    ]
  },
  {
    "name": "Allip",
    "size": "M",
    "type": "undead",
    "alignment": "Lawful Evil",
    "ac": 13,
    "hp": 40,
    "speed": "Walk 0, Fly 40 (hover)",
    "str": 6,
    "dex": 17,
    "con": 10,
    "int": 17,
    "wis": 15,
    "cha": 16,
    "save": "Int +6, Wis +5",
    "skill": "Perception +5, Stealth +6",
    "senses": "darkvision 60 ft.",
    "passive": 15,
    "resist": [
      "acid",
      "fire",
      "lightning",
      "thunder",
      {
        "resist": [
          "bludgeoning",
          "piercing",
          "slashing"
        ],
        "note": "from nonmagical attacks",
        "cond": true
      }
    ],
    "immune": "cold, necrotic, poison",
    "conditionImmune": "charmed, exhaustion, frightened, grappled, paralyzed, petrified, poisoned, prone, restrained",
    "languages": "the languages it knew in life",
    "cr": "5",
    "trait": [
      {
        "Name": "Incorporeal Movement",
        "Text": "The allip can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object."
      }
    ],
    "action": [
      {
        "Name": "Maddening Touch",
        "Text": "Melee Spell 6 to hit, reach 5 ft., one target. Hit:17 (4d6 + 3) psychic damage."
      },
      {
        "Name": "Whispers of Madness",
        "Text": "The allip chooses up to three creatures it can see within 60 feet of it. Each target must succeed on a 14 Wisdom saving throw, or it takes 7 (1d8 + 3) psychic damage and must use its reaction to make a melee weapon attack against one creature of the allip's choice that the allip can see. Constructs and undead are immune to this effect."
      },
      {
        "Name": "Howling Babble (Recharge 6)",
        "Text": "Each creature within 30 feet of the allip that can hear it must make a 14 Wisdom saving throw. On a failed save, a target takes 12 (2d8 + 3) psychic damage, and it is stunned until the end of its next turn. On a successful save, it takes half as much damage and isn't stunned. Constructs and undead are immune to this effect."
      }
    ],
    "environment": [
      "swamp",
      "urban"
    ]
  },
  {
    "name": "Amnizu",
    "size": "M",
    "type": "fiend (devil)",
    "alignment": "Lawful Evil",
    "ac": "21 natural armor",
    "hp": 202,
    "speed": "Walk 30, Fly 40",
    "str": 11,
    "dex": 13,
    "con": 16,
    "int": 20,
    "wis": 12,
    "cha": 18,
    "save": "Dex +7, Con +9, Wis +7, Cha +10",
    "skill": "Perception +7",
    "senses": "darkvision 120 ft.",
    "passive": 17,
    "resist": [
      "cold",
      {
        "resist": [
          "bludgeoning",
          "piercing",
          "slashing"
        ],
        "note": "from nonmagical attacks that aren't silvered",
        "cond": true
      }
    ],
    "immune": "fire, poison",
    "conditionImmune": "charmed, poisoned",
    "languages": "Common, Infernal, telepathy 1,000 ft.",
    "cr": "18",
    "trait": [
      {
        "Name": "Devil's Sight",
        "Text": "Magical darkness doesn't impede the amnizu's darkvision."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The amnizu has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day each: <em>dominate monster, feeblemind</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The amnizu uses Poison Mind. It also makes two attacks: one with its whip and one with its Disruptive Touch."
      },
      {
        "Name": "Taskmaster Whip",
        "Text": "Melee Weapon 11 to hit, reach 10 ft., one target. Hit:10 (2d4 + 5) slashing damage plus 33 (6d10) force damage."
      },
      {
        "Name": "Disruptive Touch",
        "Text": "Melee Spell 11 to hit, reach 5 ft., one target. Hit:44 (8d10) necrotic damage."
      },
      {
        "Name": "Poison Mind",
        "Text": "The amnizu targets one or two creatures that it can see within 60 feet of it. Each target must succeed on a 19 Wisdom saving throw or take 26 (4d12) necrotic damage and is blinded until the start of the amnizu's next turn."
      },
      {
        "Name": "Forgetfulness (Recharge 6)",
        "Text": "The amnizu targets one creature it can see within 60 feet of it. That creature must make a 18 Intelligence saving throw and on a failure the target is stunned for 1 minute. A stunned creature repeats the saving throw at the end of each of its turns, ending the effect on itself on a success. If the target remains stunned for the full minute, it forgets everything it sensed, experienced, and learned during the last 5 hours."
      }
    ],
    "reaction": [
      {
        "Name": "Instinctive Charm",
        "Text": "When a creature within 60 feet of the amnizu makes an attack roll against it, and another creature is within the attack's range, the attacker must make a 19 Wisdom saving throw. On a failed save, the attacker must target the creature that is closest to it, not including the amnizu or itself. If multiple creatures are closest, the attacker chooses which one to target. If the saving throw is successful, the attacker is immune to the amnizu's Instinctive Charm for 24 hours."
      }
    ]
  },
  {
    "name": "Armanite",
    "size": "L",
    "type": "fiend (demon)",
    "alignment": "Chaotic Evil",
    "ac": "16 natural armor",
    "hp": 84,
    "speed": "Walk 60",
    "str": 21,
    "dex": 18,
    "con": 21,
    "int": 8,
    "wis": 12,
    "cha": 13,
    "senses": "darkvision 120 ft.",
    "passive": 11,
    "resist": [
      "cold",
      "fire",
      "lightning"
    ],
    "immune": "poison",
    "conditionImmune": "poisoned",
    "languages": "Abyssal, telepathy 120 ft.",
    "cr": "7",
    "trait": [
      {
        "Name": "Magic Resistance",
        "Text": "The armanite has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Magic Weapons",
        "Text": "The armanite's weapon attacks are magical."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The armanite makes three attacks: one with its hooves, one with its claws, and one with its serrated tail."
      },
      {
        "Name": "Hooves",
        "Text": "Melee Weapon 8 to hit, reach 5 ft., one target. Hit:12 (2d6 + 5) bludgeoning damage."
      },
      {
        "Name": "Claws",
        "Text": "Melee Weapon 8 to hit, reach 5 ft., one target. Hit:10 (2d4 + 5) slashing damage."
      },
      {
        "Name": "Serrated Tail",
        "Text": "Melee Weapon 8 to hit, reach 10 ft., one target. Hit:16 (2d10 + 5) slashing damage."
      },
      {
        "Name": "Lightning Lance (Recharge 5-6)",
        "Text": "The armanite looses a bolt of lightning in a line 60 feet long and 10 feet wide. Each creature in the line must make a 15 Dexterity saving throw, taking 27 (6d8) lightning damage on a failed save, or half as much damage on a successful one."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Astral Dreadnought",
    "size": "G",
    "type": "monstrosity (titan)",
    "alignment": "Unaligned",
    "ac": "20 natural armor",
    "hp": 297,
    "speed": "Walk 15, Fly 80 (hover)",
    "str": 28,
    "dex": 7,
    "con": 25,
    "int": 5,
    "wis": 14,
    "cha": 18,
    "save": "Dex +5, Wis +9",
    "skill": "Perception +9",
    "senses": "darkvision 120 ft.",
    "passive": 19,
    "resist": [
      {
        "resist": [
          "bludgeoning",
          "piercing",
          "slashing"
        ],
        "note": "from nonmagical attacks",
        "cond": true
      }
    ],
    "conditionImmune": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned, prone, stunned",
    "cr": "21",
    "trait": [
      {
        "Name": "Antimagic Cone",
        "Text": "The astral dreadnought's opened eye creates an area of antimagic, as in the antimagic field spell, in a 150-foot cone. At the start of each of its turns, the dreadnought decides which way the cone faces. The cone doesn't function while the dreadnought's eye is closed or while the dreadnought is blinded."
      },
      {
        "Name": "Astral Entity",
        "Text": "The astral dreadnought can't leave the Astral Plane, nor can it be banished or otherwise transported out of the Astral Plane."
      },
      {
        "Name": "Demiplanar Donjon",
        "Text": "Any creature or object that the astral dreadnought swallows is transported to a demiplane that can be entered by no other means except a wish spell or this creature's Donjon Visit ability. A creature can leave the demiplane only by using magic that enables planar travel, such as the plane shift spell. The demiplane resembles a stone cave roughly 1,000 feet in diameter with a ceiling 100 feet high. Like a stomach, it contains the remains of the dreadnought's past meals."
      },
      {
        "Name": "Legendary Resistance (3/Day)",
        "Text": "If the astral dreadnought fails a saving throw, it can choose to succeed instead."
      },
      {
        "Name": "Magic Weapons",
        "Text": "An astral dreadnought's weapon attacks are magical."
      },
      {
        "Name": "Sever Silver Cord",
        "Text": "If the astral dreadnought scores a critical hit against a creature traveling through the Astral Plane by means of the astral projection spell, the dreadnought can cut the target's silver cord instead of dealing damage."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The astral dreadnought makes three attacks: one with its bite and two with its claws."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 16 to hit, reach 10 ft., one target. Hit:36 (5d10 + 9) piercing damage. If the target is a creature of Huge size or smaller and this damage reduces it to 0 hit points or it is incapacitated, the astral dreadnought swallows it. The swallowed target, along with everything it is wearing and carrying, appears in an unoccupied space on the floor of the astral dreadnought's Demiplanar Donjon."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 16 to hit, reach 20 ft., one target. Hit:19 (3d6 + 9) slashing damage."
      }
    ],
    "legendary": [
      {
        "Name": "Claw",
        "Text": "The astral dreadnought makes one claw attack."
      },
      {
        "Name": "Donjon Visit (Costs 2 Actions)",
        "Text": "One creature that is Huge or smaller that the astral dreadnought can see within 60 feet of it must succeed on a 19 Charisma saving throw or be magically teleported to an unoccupied space on the floor of the astral dreadnought's Demiplanar Donjon. At the end of the target's next turn, the target reappears in the space it left or in the nearest unoccupied space if that space is occupied."
      },
      {
        "Name": "Psychic Projection (Costs 3 Actions)",
        "Text": "Each creature within 60 feet of the astral dreadnought must make a 19 Wisdom saving throw, taking 15 (2d10 + 4) psychic damage on a failed save, or half as much damage on a successful one."
      }
    ]
  },
  {
    "name": "Autumn Eladrin",
    "size": "M",
    "type": "fey (elf)",
    "alignment": "Chaotic Neutral",
    "ac": "19 natural armor",
    "hp": 127,
    "speed": "Walk 30",
    "str": 12,
    "dex": 16,
    "con": 16,
    "int": 14,
    "wis": 17,
    "cha": 18,
    "skill": "Insight +7, Medicine +7",
    "senses": "darkvision 60 ft.",
    "passive": 13,
    "resist": [
      {
        "resist": [
          "bludgeoning",
          "piercing",
          "slashing"
        ],
        "note": "from nonmagical attacks",
        "cond": true
      }
    ],
    "languages": "Common, Elvish, Sylvan",
    "cr": "10",
    "trait": [
      {
        "Name": "Enchanting Presence",
        "Text": "Any non-eladrin creature that starts its turn within 60 feet of the eladrin must make a 16 Wisdom saving throw. On a failed save, the creature is charmed by the eladrin for 1 minute. On a successful save, the creature becomes immune to any eladrin's Enchanting Presence for 24 hours.<br>Whenever the eladrin deals damage to the charmed creature, the creature can repeat the saving throw, ending the effect on itself on a success."
      },
      {
        "Name": "Fey Step (Recharge 4-6)",
        "Text": "As a bonus action, the eladrin can teleport up to 30 feet to an unoccupied space it can see."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The eladrin has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day each: <em>greater restoration, heal, raise dead</em>"
      }
    ],
    "action": [
      {
        "Name": "Longsword",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:5 (1d8 + 1) slashing damage plus 18 (4d8) psychic damage, or 6 (1d10 + 1) slashing damage plus 18 (4d8) psychic damage if used with two hands."
      },
      {
        "Name": "Longbow",
        "Text": "Ranged Weapon 7 to hit, range 150/600 ft., one target. Hit:7 (1d8 + 3) piercing damage plus 18 (4d8) psychic damage."
      }
    ],
    "reaction": [
      {
        "Name": "Foster Peace",
        "Text": "If a creature charmed by the eladrin hits with an attack roll while within 60 feet of the eladrin, the eladrin magically causes the attack to miss, provided the eladrin can see the attacker."
      }
    ],
    "environment": [
      "forest"
    ]
  },
  {
    "name": "Bael",
    "isNamedCreature": true,
    "size": "L",
    "type": "fiend (devil)",
    "alignment": "Lawful Evil",
    "ac": "18 plate armor",
    "hp": 189,
    "speed": "Walk 30",
    "str": 24,
    "dex": 17,
    "con": 20,
    "int": 21,
    "wis": 24,
    "cha": 24,
    "save": "Dex +9, Con +11, Int +11, Cha +13",
    "skill": "Intimidation +13, Perception +13, Persuasion +13",
    "senses": "truesight 120 ft.",
    "passive": 23,
    "resist": [
      "cold",
      {
        "resist": [
          "bludgeoning",
          "piercing",
          "slashing"
        ],
        "note": "from nonmagical attacks that aren't silvered",
        "cond": true
      }
    ],
    "immune": "fire, poison",
    "conditionImmune": "charmed, exhaustion, frightened, poisoned",
    "languages": "all, telepathy 120 ft.",
    "cr": "19",
    "trait": [
      {
        "Name": "Dreadful",
        "Text": "Bael can use a bonus action to appear dreadful until the start of his next turn. Each creature, other than a devil, that starts its turn within 10 feet of Bael must succeed on a 22 Wisdom saving throw or be frightened until the start of the creature's next turn."
      },
      {
        "Name": "Legendary Resistance (3/Day)",
        "Text": "If Bael fails a saving throw, he can choose to succeed instead."
      },
      {
        "Name": "Magic Resistance",
        "Text": "Bael has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Magic Weapons",
        "Text": "Bael's weapon attacks are magical."
      },
      {
        "Name": "Regeneration",
        "Text": "Bael regains 20 hit points at the start of his turn. If he takes cold or radiant damage, this trait doesn't function at the start of his next turn. Bael dies only if he starts his turn with 0 hit points and doesn't regenerate."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day each: <em>dominate monster, symbol (stunning only)</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "Bael makes two melee attacks."
      },
      {
        "Name": "Hellish Morningstar",
        "Text": "Melee Weapon 13 to hit, reach 20 ft., one target. Hit:16 (2d8 + 7) piercing damage plus 13 (3d8) necrotic damage."
      },
      {
        "Name": "Infernal Command",
        "Text": "Each ally of Bael's within 60 feet of him can't be charmed or frightened until the end of his next turn."
      },
      {
        "Name": "Teleport",
        "Text": "Bael magically teleports, along with any equipment he is wearing and carrying, up to 120 feet to an unoccupied space he can see."
      }
    ],
    "legendary": [
      {
        "Name": "Attack (Cost 2 Actions)",
        "Text": "Bael attacks once with his hellish morningstar."
      },
      {
        "Name": "Awaken Greed",
        "Text": "Bael casts charm person or major image."
      },
      {
        "Name": "Infernal Command",
        "Text": "Bael uses his Infernal Command action."
      },
      {
        "Name": "Teleport",
        "Text": "Bael uses his Teleport action."
      }
    ]
  },
  {
    "name": "Balhannoth",
    "size": "L",
    "type": "aberration",
    "alignment": "Chaotic Evil",
    "ac": "17 natural armor",
    "hp": 114,
    "speed": "Walk 25, Climb 25",
    "str": 17,
    "dex": 8,
    "con": 18,
    "int": 6,
    "wis": 15,
    "cha": 8,
    "save": "Con +8",
    "skill": "Perception +6",
    "senses": "blindsight 500 ft. (blind beyond this radius)",
    "passive": 16,
    "conditionImmune": "blinded",
    "languages": "understands Deep Speech, telepathy 1 mile",
    "cr": "11",
    "trait": [
      {
        "Name": "Legendary Resistance (2/Day)",
        "Text": "If the balhannoth fails a saving throw, it can choose to succeed instead."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The balhannoth makes a bite attack and up to two tentacle attacks, or it makes up to four tentacle attacks."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:25 (4d10 + 3) piercing damage."
      },
      {
        "Name": "Tentacle",
        "Text": "Melee Weapon 7 to hit, reach 10 ft., one target. Hit:10 (2d6 + 3) bludgeoning damage, and the target is grappled (escape 15) and is moved up to 5 feet toward the balhannoth. Until this grapple ends, the target is restrained, and the balhannoth can't use this tentacle against other targets. The balhannoth has four tentacles."
      }
    ],
    "legendary": [
      {
        "Name": "Bite Attack",
        "Text": "The balhannoth makes one bite attack against one creature it has grappled."
      },
      {
        "Name": "Teleport",
        "Text": "The balhannoth magically teleports, along with any equipment it is wearing or carrying and any creatures it has grappled, up to 60 feet to an unoccupied space it can see."
      },
      {
        "Name": "Vanish",
        "Text": "The balhannoth magically becomes invisible for up to 10 minutes or until immediately after it makes an attack roll."
      }
    ],
    "environment": [
      "coastal",
      "mountain",
      "underdark"
    ]
  },
  {
    "name": "Baphomet",
    "isNamedCreature": true,
    "size": "H",
    "type": "fiend (demon)",
    "alignment": "Chaotic Evil",
    "ac": "22 natural armor",
    "hp": 275,
    "speed": "Walk 40",
    "str": 30,
    "dex": 14,
    "con": 26,
    "int": 18,
    "wis": 24,
    "cha": 16,
    "save": "Dex +9, Con +15, Wis +14",
    "skill": "Intimidation +17, Perception +14",
    "senses": "truesight 120 ft.",
    "passive": 24,
    "resist": [
      "cold",
      "fire",
      "lightning"
    ],
    "immune": "poison, bludgeoning, piercing, slashing from nonmagical attacks",
    "conditionImmune": "charmed, exhaustion, frightened, poisoned",
    "languages": "all, telepathy 120 ft.",
    "cr": "23",
    "trait": [
      {
        "Name": "Charge",
        "Text": "If Baphomet moves at least 10 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 16 (3d10) piercing damage. If the target is a creature, it must succeed on a 25 Strength saving throw or be pushed up to 10 feet away and knocked prone."
      },
      {
        "Name": "Labyrinthine Recall",
        "Text": "Baphomet can perfectly recall any path he has traveled, and he is immune to the maze spell."
      },
      {
        "Name": "Legendary Resistance (3/Day)",
        "Text": "If Baphomet fails a saving throw, he can choose to succeed instead."
      },
      {
        "Name": "Magic Resistance",
        "Text": "Baphomet has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Magic Weapons",
        "Text": "Baphomet's weapon attacks are magical."
      },
      {
        "Name": "Reckless",
        "Text": "At the start of his turn, Baphomet can gain advantage on all melee weapon attack rolls during that turn, but attack rolls against him have advantage until the start of his next turn."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day: <em>teleport</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "Baphomet makes three attacks: one with Heartcleaver, one with his bite, and one with his gore attack."
      },
      {
        "Name": "Heartcleaver",
        "Text": "Melee Weapon 17 to hit, reach 15 ft., one target. Hit:21 (2d10 + 10) slashing damage."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 17 to hit, reach 10 ft., one target. Hit:19 (2d8 + 10) piercing damage."
      },
      {
        "Name": "Gore",
        "Text": "Melee Weapon 17 to hit, reach 10 ft., one target. Hit:17 (2d6 + 10) piercing damage."
      },
      {
        "Name": "Frightful Presence",
        "Text": "Each creature of Baphomet's choice within 120 feet of him and aware of him must succeed on a 18 Wisdom saving throw or become frightened for 1 minute. A frightened creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. These later saves have disadvantage if Baphomet is within line of sight of the creature."
      }
    ],
    "legendary": [
      {
        "Name": "Heartcleaver Attack",
        "Text": "Baphomet makes a melee attack with Heartcleaver."
      },
      {
        "Name": "Charge (Costs 2 Actions)",
        "Text": "Baphomet moves up to his speed, then makes a gore attack."
      }
    ]
  },
  {
    "name": "Berbalang",
    "size": "M",
    "type": "aberration",
    "alignment": "Neutral Evil",
    "ac": "14 natural armor",
    "hp": 38,
    "speed": "Walk 30, Fly 40",
    "str": 9,
    "dex": 16,
    "con": 9,
    "int": 17,
    "wis": 11,
    "cha": 10,
    "save": "Dex +5, Int +5",
    "skill": "Arcana +5, History +5, Insight +2, Perception +2, Religion +5",
    "senses": "truesight 120 ft.",
    "passive": 12,
    "languages": "all but rarely speaks",
    "cr": "2",
    "trait": [
      {
        "Name": "Spectral Duplicate (Recharges after a Short or Long Rest)",
        "Text": "As a bonus action, the berbalang creates one spectral duplicate of itself in an unoccupied space it can see within 60 feet of it. While the duplicate exists, the berbalang is unconscious. A berbalang can have only one duplicate at a time. The duplicate disappears when it or the berbalang drops to 0 hit points or when the berbalang dismisses it (no action required).<br>The duplicate has the same statistics and knowledge as the berbalang, and everything experienced by the duplicate is known by the berbalang. All damage dealt by the duplicate's attacks is psychic damage."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day: <em>plane shift (self only)</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The berbalang makes two attacks: one with its bite and one with its claws."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:8 (1d10 + 3) piercing damage."
      },
      {
        "Name": "Claws",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:8 (2d4 + 3) slashing damage."
      }
    ],
    "environment": [
      "desert"
    ]
  },
  {
    "name": "Black Abishai",
    "size": "M",
    "type": "fiend (devil)",
    "alignment": "Lawful Evil",
    "ac": "15 natural armor",
    "hp": 58,
    "speed": "Walk 30, Fly 40",
    "str": 14,
    "dex": 17,
    "con": 14,
    "int": 13,
    "wis": 16,
    "cha": 11,
    "save": "Dex +6, Wis +6",
    "skill": "Perception +6, Stealth +6",
    "senses": "darkvision 120 ft.",
    "passive": 16,
    "resist": [
      "cold",
      {
        "resist": [
          "bludgeoning",
          "piercing",
          "slashing"
        ],
        "note": "from nonmagical attacks that aren't silvered",
        "cond": true
      }
    ],
    "immune": "acid, fire, poison",
    "conditionImmune": "poisoned",
    "languages": "Draconic, Infernal, telepathy 120 ft.",
    "cr": "7",
    "trait": [
      {
        "Name": "Devil's Sight",
        "Text": "Magical darkness doesn't impede the abishai's darkvision."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The abishai has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Magic Weapons",
        "Text": "The abishai's weapon attacks are magical."
      },
      {
        "Name": "Shadow Stealth",
        "Text": "While in dim light or darkness, the abishai can take the Hide action as a bonus action."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The abishai makes three attacks: two with its scimitar and one with its bite."
      },
      {
        "Name": "Scimitar",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:6 (1d6 + 3) slashing damage."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:8 (1d10 + 3) piercing damage plus 9 (2d8) acid damage."
      },
      {
        "Name": "Creeping Darkness (Recharge 6)",
        "Text": "The abishai casts darkness at a point within 120 feet of it, requiring no components. Wisdom is its spellcasting ability for this spell. While the spell persists, the abishai can move the area of darkness up to 60 feet as a bonus action."
      }
    ],
    "environment": [
      "urban"
    ]
  },
  {
    "name": "Blue Abishai",
    "size": "M",
    "type": "fiend (devil)",
    "alignment": "Lawful Evil",
    "ac": "19 natural armor",
    "hp": 195,
    "speed": "Walk 30, Fly 50",
    "str": 15,
    "dex": 14,
    "con": 17,
    "int": 22,
    "wis": 23,
    "cha": 18,
    "save": "Int +12, Wis +12",
    "skill": "Arcana +12",
    "senses": "darkvision 120 ft.",
    "passive": 16,
    "resist": [
      "cold",
      {
        "resist": [
          "bludgeoning",
          "piercing",
          "slashing"
        ],
        "note": "from nonmagical attacks that aren't silvered",
        "cond": true
      }
    ],
    "immune": "fire, lightning, poison",
    "conditionImmune": "poisoned",
    "languages": "Draconic, Infernal, telepathy 120 ft.",
    "cr": "17",
    "trait": [
      {
        "Name": "Devil's Sight",
        "Text": "Magical darkness doesn't impede the abishai's darkvision."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The abishai has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Magic Weapons",
        "Text": "The abishai's weapon attacks are magical."
      },
      {
        "Name": "Spellcasting",
        "Text": "The abishai is a 13th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 20, +12 to hit with spell attacks). The abishai has the following wizard spells prepared:<br><br>Cantrips (at will): <em>friends, mage hand, message, minor illusion, shocking grasp</em><br>1st (1 slots): <em>chromatic orb, disguise self, expeditious retreat, magic missile, charm person, thunderwave</em><br>2nd (2 slots): <em>darkness, mirror image, misty step</em><br>3rd (3 slots): <em>dispel magic, fear, lightning bolt</em><br>4th (4 slots): <em>dimension door, greater invisibility, ice storm</em><br>5th (5 slots): <em>cone of cold, wall of force</em><br>6th (6 slots): <em>chain lightning</em><br>7th (7 slots): <em>teleport</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The abishai makes two attacks: one with its quarterstaff and one with its bite."
      },
      {
        "Name": "Quarterstaff",
        "Text": "Melee Weapon 8 to hit, reach 5 ft., one target. Hit:5 (1d6 + 2) bludgeoning damage, or 6 (1d8 + 2) bludgeoning damage if used with two hands."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 8 to hit, reach 5 ft., one target. Hit:13 (2d10 + 2) piercing damage plus 14 (4d6) lightning damage."
      }
    ],
    "environment": [
      "coastal",
      "urban"
    ]
  },
  {
    "name": "Boneclaw",
    "size": "L",
    "type": "undead",
    "alignment": "Chaotic Evil",
    "ac": "16 natural armor",
    "hp": 127,
    "speed": "Walk 40",
    "str": 19,
    "dex": 16,
    "con": 15,
    "int": 13,
    "wis": 15,
    "cha": 9,
    "save": "Dex +7, Con +6, Wis +6",
    "skill": "Perception +6, Stealth +7",
    "senses": "darkvision 60 ft.",
    "passive": 16,
    "resist": [
      "cold",
      "necrotic",
      {
        "resist": [
          "bludgeoning",
          "piercing",
          "slashing"
        ],
        "note": "from nonmagical attacks",
        "cond": true
      }
    ],
    "conditionImmune": "charmed, exhaustion, frightened, paralyzed, poisoned",
    "languages": "Common plus the main language of its master",
    "cr": "12",
    "trait": [
      {
        "Name": "Rejuvenation",
        "Text": "While its master lives, a destroyed boneclaw gains a new body in 1d10 hours, with all its hit points. The new body appears within 1 mile of the boneclaw's master."
      },
      {
        "Name": "Shadow Stealth",
        "Text": "While in dim light or darkness, the boneclaw can take the Hide action as a bonus action."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The boneclaw makes two claw attacks."
      },
      {
        "Name": "Piercing Claw",
        "Text": "Melee Weapon 8 to hit, reach 15 ft., one target. Hit:20 (3d10 + 4) piercing damage. If the target is a creature, the boneclaw can pull the target up to 10 feet toward itself, and the target is grappled (escape 14). The boneclaw has two claws. While a claw grapples a target, the claw can attack only that target."
      },
      {
        "Name": "Shadow Jump",
        "Text": "If the boneclaw is in dim light or darkness, each creature of the boneclaw's choice within 5 feet of it must succeed on a 14 Constitution saving throw or take 34 (5d12 + 2) necrotic damage."
      }
    ],
    "reaction": [
      {
        "Name": "Deadly Reach",
        "Text": "In response to a visible enemy moving into its reach, the boneclaw makes one claw attack against that enemy. If the attack hits, the boneclaw can make a second claw attack against the target."
      }
    ],
    "environment": [
      "arctic",
      "desert",
      "urban"
    ]
  },
  {
    "name": "Bronze Scout",
    "size": "M",
    "type": "construct",
    "alignment": "Unaligned",
    "ac": 13,
    "hp": 18,
    "speed": "Walk 30, Burrow 30",
    "str": 10,
    "dex": 16,
    "con": 11,
    "int": 3,
    "wis": 14,
    "cha": 1,
    "skill": "Perception +6, Stealth +7",
    "senses": "darkvision 60 ft.",
    "passive": 16,
    "immune": "poison, bludgeoning, piercing, slashing from nonmagical attacks that aren't adamantine",
    "conditionImmune": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned",
    "languages": "understands one language of its creator but can't speak",
    "cr": "1",
    "trait": [
      {
        "Name": "Earth Armor",
        "Text": "The bronze scout doesn't provoke opportunity attacks when it burrows."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The bronze scout has advantage on saving throws against spells and other magical effects."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:5 (1d4 + 3) piercing damage plus 3 (1d6) lightning damage."
      },
      {
        "Name": "Lightning Flare (Recharges after a Short or Long Rest)",
        "Text": "Each creature in contact with the ground within 15 feet of the bronze scout must make a 13 Dexterity saving throw, taking 14 (4d6) lightning damage on a failed save, or half as much damage on a successful one."
      }
    ],
    "environment": [
      "forest",
      "grassland",
      "hill",
      "mountain"
    ]
  },
  {
    "name": "Bulezau",
    "size": "M",
    "type": "fiend (demon)",
    "alignment": "Chaotic Evil",
    "ac": "14 natural armor",
    "hp": 52,
    "speed": "Walk 40",
    "str": 15,
    "dex": 14,
    "con": 17,
    "int": 8,
    "wis": 9,
    "cha": 6,
    "senses": "darkvision 120 ft.",
    "passive": 9,
    "resist": [
      "cold",
      "fire",
      "lightning"
    ],
    "immune": "poison",
    "conditionImmune": "charmed, frightened, poisoned",
    "languages": "Abyssal, telepathy 60 ft.",
    "cr": "3",
    "trait": [
      {
        "Name": "Rotting Presence",
        "Text": "When any creature that isn't a demon starts its turn within 30 feet one or more bulezaus, that creature must succeed on a 13 Constitution saving throw or take 1d6 necrotic damage plus 1 necrotic damage for each bulezau within 30 feet of it."
      },
      {
        "Name": "Standing Leap",
        "Text": "The bulezau's long jump is up to 20 feet and its high jump is up to 10 feet, with or without a running start."
      },
      {
        "Name": "Sure-Footed",
        "Text": "The bulezau has advantage on Strength and Dexterity saving throws made against effects that would knock it prone."
      }
    ],
    "action": [
      {
        "Name": "Barbed Tail",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:8 (1d12 + 2) piercing damage. If the target is a creature, it must succeed on a 13 Constitution saving throw against disease or become poisoned until the disease ends. While poisoned in this way, the target sports festering boils, coughs up flies, and sheds rotting skin, and the target must repeat the saving throw after every 24 hours that elapse. On a successful save, the disease ends. On a failed save, the target's hit point maximum is reduced by 4 (1d8). The target dies if its hit point maximum is reduced to 0."
      }
    ]
  },
  {
    "name": "Cadaver Collector",
    "size": "L",
    "type": "construct",
    "alignment": "Lawful Evil",
    "ac": "17 natural armor",
    "hp": 189,
    "speed": "Walk 30",
    "str": 21,
    "dex": 14,
    "con": 20,
    "int": 5,
    "wis": 11,
    "cha": 8,
    "senses": "darkvision 60 ft.",
    "passive": 10,
    "immune": "necrotic, poison, psychic, bludgeoning, piercing, slashing from nonmagical attacks that aren't adamantine",
    "conditionImmune": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned",
    "languages": "understands all languages but can't speak",
    "cr": "14",
    "trait": [
      {
        "Name": "Magic Resistance",
        "Text": "The cadaver collector has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Summon Specters (Recharges after a Short or Long Rest)",
        "Text": "As a bonus action, the cadaver collector calls up the enslaved spirits of those it has slain; 1d6 specters (without Sunlight Sensitivity) arise in unoccupied spaces within 15 feet of the cadaver collector. The specters act right after the cadaver collector on the same initiative count and fight until they're destroyed. They disappear when the cadaver collector is destroyed."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The cadaver collector makes two slam attacks."
      },
      {
        "Name": "Slam",
        "Text": "Melee Weapon 10 to hit, reach 5 ft., one target. Hit:18 (3d8 + 5) bludgeoning damage plus 16 (3d10) necrotic damage."
      },
      {
        "Name": "Paralyzing Breath (Recharge 5-6)",
        "Text": "The cadaver collector releases paralyzing gas in a 30-foot cone. Each creature in that area must make a successful 18 Constitution saving throw or be paralyzed for 1 minute. A paralyzed creature repeats the saving throw at the end of each of its turns, ending the effect on itself with a success."
      }
    ],
    "environment": [
      "grassland"
    ]
  },
  {
    "name": "Canoloth",
    "size": "M",
    "type": "fiend (yugoloth)",
    "alignment": "Neutral Evil",
    "ac": "16 natural armor",
    "hp": 120,
    "speed": "Walk 50",
    "str": 18,
    "dex": 10,
    "con": 17,
    "int": 5,
    "wis": 17,
    "cha": 12,
    "skill": "Investigation +3, Perception +9",
    "senses": "darkvision 60 ft., truesight 120 ft.",
    "passive": 19,
    "resist": [
      "cold",
      "fire",
      "lightning",
      {
        "resist": [
          "bludgeoning",
          "piercing",
          "slashing"
        ],
        "note": "from nonmagical attacks",
        "cond": true
      }
    ],
    "immune": "acid, poison",
    "conditionImmune": "poisoned",
    "languages": "Abyssal, Infernal, telepathy 60 ft.",
    "cr": "8",
    "trait": [
      {
        "Name": "Dimensional Lock",
        "Text": "Other creatures can't teleport to or from a space within 60 feet of the canoloth. Any attempt to do so is wasted."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The canoloth has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Magic Weapons",
        "Text": "The canoloth's weapon attacks are magical."
      },
      {
        "Name": "Uncanny Senses",
        "Text": "The canoloth can't be surprised while it isn't incapacitated."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The canoloth makes two attacks: one with its tongue or its bite and one with its claws."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:25 (6d6 + 4) piercing damage."
      },
      {
        "Name": "Claws",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:15 (2d10 + 4) slashing damage."
      },
      {
        "Name": "Tongue",
        "Text": "Ranged Weapon 7 to hit, range 30 ft., one target. Hit:17 (2d12 + 4) piercing damage. If the target is Medium or smaller, it is grappled (escape 15), pulled up to 30 feet toward the canoloth, and is restrained until the grapple ends. The canoloth can grapple one target at a time with its tongue."
      }
    ],
    "environment": [
      "coastal",
      "underdark",
      "urban"
    ]
  },
  {
    "name": "Choker",
    "size": "S",
    "type": "aberration",
    "alignment": "Chaotic Evil",
    "ac": "16 natural armor",
    "hp": 13,
    "speed": "Walk 30",
    "str": 16,
    "dex": 14,
    "con": 13,
    "int": 4,
    "wis": 12,
    "cha": 7,
    "skill": "Stealth +6",
    "senses": "darkvision 60 ft.",
    "passive": 11,
    "languages": "Deep Speech",
    "cr": "1",
    "trait": [
      {
        "Name": "Aberrant Quickness (Recharges after a Short or Long Rest)",
        "Text": "The choker can take an extra action on its turn."
      },
      {
        "Name": "Boneless",
        "Text": "The choker can move through and occupy a space as narrow as 4 inches wide without squeezing."
      },
      {
        "Name": "Spider Climb",
        "Text": "The choker can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The choker makes two tentacle attacks."
      },
      {
        "Name": "Tentacle",
        "Text": "Melee Weapon 5 to hit, reach 10 ft., one target. Hit:5 (1d4 + 3) bludgeoning damage plus 3 (1d6) piercing damage. If the target is a Large or smaller creature, it is grappled (escape 15). Until this grapple ends, the target is restrained, and the choker can't use this tentacle on another target. The choker has two tentacles. If this attack is a critical hit, the target also can't breathe or speak until the grapple ends."
      }
    ],
    "environment": [
      "forest",
      "mountain",
      "underdark"
    ],
    "altArt": [
      {
        "name": "Choker (Alt)",
        "source": "TftYP"
      }
    ]
  },
  {
    "name": "Corpse Flower",
    "size": "L",
    "type": "plant",
    "alignment": "Chaotic Evil",
    "ac": 12,
    "hp": 127,
    "speed": "Walk 20, Climb 20",
    "str": 14,
    "dex": 14,
    "con": 16,
    "int": 7,
    "wis": 15,
    "cha": 3,
    "senses": "blindsight 120 ft. (blind beyond this radius)",
    "passive": 12,
    "conditionImmune": "blinded, deafened",
    "cr": "8",
    "trait": [
      {
        "Name": "Corpses",
        "Text": "When first encountered, a corpse flower contains the corpses of 1d6 + 3 humanoids. A corpse flower can hold the remains of up to nine dead humanoids. These remains have total cover against attacks and other effects outside the corpse flower. If the corpse flower dies, the corpses within it can be pulled free.<br>While it has at least one humanoid corpse in its body, the corpse flower can use a bonus action to do one of the following:<br>[object Object]"
      },
      {
        "Name": "Spider Climb",
        "Text": "The corpse flower can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
      },
      {
        "Name": "Stench of Death",
        "Text": "Each creature that starts its turn within 10 feet of the corpse flower or one of its zombies must make a 14 Constitution saving throw, unless the creature is a construct or undead. On a failed save, the creature is incapacitated until the end of the turn. Creatures that are immune to poison damage or the poisoned condition automatically succeed on this saving throw. On a successful save, the creature is immune to the stench of all corpse flowers for 24 hours."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The corpse flower makes three tentacle attacks."
      },
      {
        "Name": "Tentacle",
        "Text": "Melee Weapon 5 to hit, reach 10 ft., one target. Hit:9 (2d6 + 2) bludgeoning damage, and the target must succeed on a 14 Constitution saving throw or take 14 (4d6) poison damage."
      },
      {
        "Name": "Harvest the Dead",
        "Text": "The corpse flower grabs one unsecured dead humanoid within 10 feet of it and stuffs the corpse into itself, along with any equipment the corpse is wearing or carrying. The remains can be used with the Corpses trait."
      }
    ],
    "environment": [
      "forest",
      "swamp",
      "urban"
    ]
  },
  {
    "name": "Deathlock",
    "size": "M",
    "type": "undead",
    "alignment": "Lawful Evil",
    "ac": 12,
    "hp": 36,
    "speed": "Walk 30",
    "str": 11,
    "dex": 15,
    "con": 10,
    "int": 14,
    "wis": 12,
    "cha": 16,
    "save": "Int +4, Cha +5",
    "skill": "Arcana +4, History +4",
    "senses": "darkvision 60 ft.",
    "passive": 11,
    "resist": [
      "necrotic",
      {
        "resist": [
          "bludgeoning",
          "piercing",
          "slashing"
        ],
        "note": "from nonmagical attacks that aren't silvered",
        "cond": true
      }
    ],
    "immune": "poison",
    "conditionImmune": "exhaustion, poisoned",
    "languages": "the languages it knew in life",
    "cr": "4",
    "trait": [
      {
        "Name": "Turn Resistance",
        "Text": "The deathlock has advantage on saving throws against any effect that turns undead."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "The deathlock's innate spellcasting ability is Charisma (spell save DC 13). It can innately cast the following spells, requiring no material components:<br>At will: <em>detect magic, disguise self, mage armor</em>"
      },
      {
        "Name": "Spellcasting",
        "Text": "The deathlock is a 5th-level spellcaster. Its spellcasting ability is Charisma (spell save DC 13, +5 to hit with spell attacks). It regains its expended spell slots when it finishes a short or long rest. It knows the following warlock spells:<br><br>Cantrips (at will): <em>chill touch, eldritch blast, mage hand</em><br>3rd (3 slots): <em>arms of Hadar, dispel magic, hold person, hunger of Hadar, invisibility, spider climb</em>"
      }
    ],
    "action": [
      {
        "Name": "Deathly Claw",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:9 (2d6 + 2) necrotic damage."
      }
    ],
    "environment": [
      "urban"
    ]
  },
  {
    "name": "Deathlock Mastermind",
    "size": "M",
    "type": "undead",
    "alignment": "Lawful Evil",
    "ac": 13,
    "hp": 110,
    "speed": "Walk 30",
    "str": 11,
    "dex": 16,
    "con": 12,
    "int": 15,
    "wis": 12,
    "cha": 17,
    "save": "Int +5, Cha +6",
    "skill": "Arcana +5, History +5, Perception +4",
    "senses": "darkvision 120 ft. (including magical darkness)",
    "passive": 14,
    "resist": [
      "necrotic",
      {
        "resist": [
          "bludgeoning",
          "piercing",
          "slashing"
        ],
        "note": "from nonmagical attacks that aren't silvered",
        "cond": true
      }
    ],
    "immune": "poison",
    "conditionImmune": "exhaustion, poisoned",
    "languages": "the languages it knew in life",
    "cr": "8",
    "trait": [
      {
        "Name": "Turn Resistance",
        "Text": "The deathlock has advantage on saving throws against any effect that turns undead."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "The deathlock's innate spellcasting ability is Charisma (spell save DC 14). It can innately cast the following spells, requiring no material components:<br>At will: <em>detect magic, disguise self, mage armor</em>"
      },
      {
        "Name": "Spellcasting",
        "Text": "The deathlock is a 10th-level spellcaster. Its spellcasting ability is Charisma (spell save DC 14, +6 to hit with spell attacks). It regains its expended spell slots when it finishes a short or long rest. It knows the following warlock spells:<br><br>Cantrips (at will): <em>chill touch, mage hand, minor illusion, poison spray</em><br>5th (5 slots): <em>arms of Hadar, blight, counterspell, crown of madness, darkness, dimension door, dispel magic, fly, hold monster, invisibility</em>"
      }
    ],
    "action": [
      {
        "Name": "Deathly Claw",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:13 (3d6 + 3) necrotic damage)."
      },
      {
        "Name": "Grave Bolts",
        "Text": "Ranged Spell 6 to hit, range 120 ft., one or two targets. Hit:18 (4d8) necrotic damage. If the target is Large or smaller, it must succeed on a 16 Strength saving throw or become restrained as shadowy tendrils wrap around it for 1 minute. A restrained target can use its action to repeat the saving throw, ending the effect on itself on a success."
      }
    ],
    "environment": [
      "urban"
    ]
  },
  {
    "name": "Deathlock Wight",
    "size": "M",
    "type": "undead",
    "alignment": "Lawful Evil",
    "ac": 12,
    "hp": 37,
    "speed": "Walk 30",
    "str": 11,
    "dex": 14,
    "con": 16,
    "int": 12,
    "wis": 14,
    "cha": 16,
    "save": "Wis +4",
    "skill": "Arcana +3, Perception +4",
    "senses": "darkvision 60 ft.",
    "passive": 14,
    "resist": [
      "necrotic",
      {
        "resist": [
          "bludgeoning",
          "piercing",
          "slashing"
        ],
        "note": "from nonmagical attacks",
        "cond": true
      }
    ],
    "immune": "poison",
    "conditionImmune": "exhaustion, poisoned",
    "languages": "the languages it knew in life",
    "cr": "3",
    "trait": [
      {
        "Name": "Sunlight Sensitivity",
        "Text": "While in sunlight, the wight has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day each: <em>fear, hold person, misty step</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The wight attacks twice with Grave Bolt."
      },
      {
        "Name": "Grave Bolt",
        "Text": "Ranged Spell 5 to hit, range 120 ft., one target. Hit:7 (1d8 + 3) necrotic damage."
      },
      {
        "Name": "Life Drain",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one creature. Hit:9 (2d6 + 2) necrotic damage. The target must succeed on a 13 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0."
      }
    ],
    "altArt": [
      {
        "name": "Deathlock Wight (Alt)",
        "source": "TftYP"
      }
    ]
  },
  {
    "name": "Demogorgon",
    "isNamedCreature": true,
    "size": "H",
    "type": "fiend (demon)",
    "alignment": "Chaotic Evil",
    "ac": "22 natural armor",
    "hp": 406,
    "speed": "Walk 50, Swim 50",
    "str": 29,
    "dex": 14,
    "con": 26,
    "int": 20,
    "wis": 17,
    "cha": 25,
    "save": "Dex +10, Con +16, Wis +11, Cha +15",
    "skill": "Insight +11, Perception +19",
    "senses": "truesight 120 ft.",
    "passive": 29,
    "resist": [
      "cold",
      "fire",
      "lightning"
    ],
    "immune": "poison, bludgeoning, piercing, slashing from nonmagical attacks",
    "conditionImmune": "charmed, exhaustion, frightened, poisoned",
    "languages": "all, telepathy 120 ft.",
    "cr": "26",
    "trait": [
      {
        "Name": "Legendary Resistance (3/Day)",
        "Text": "If Demogorgon fails a saving throw, he can choose to succeed instead."
      },
      {
        "Name": "Magic Resistance",
        "Text": "Demogorgon has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Magic Weapons",
        "Text": "Demogorgon's weapon attacks are magical."
      },
      {
        "Name": "Two Heads",
        "Text": "Demogorgon has advantage on saving throws against being blinded, deafened, stunned, or knocked unconscious."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day each: <em>feeblemind, project image</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "Demogorgon makes two tentacle attacks."
      },
      {
        "Name": "Tentacle",
        "Text": "Melee Weapon 17 to hit, reach 10 ft., one target. Hit:28 (3d12 + 9) bludgeoning damage. If the target is a creature, it must succeed on a 23 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if its hit point maximum is reduced to 0."
      },
      {
        "Name": "Gaze",
        "Text": "Demogorgon turns his magical gaze toward one creature that he can see within 120 feet of him. That target must make a 23 Wisdom saving throw. Unless the target is incapacitated, it can avert its eyes to avoid the gaze and to automatically succeed on the save. If the target does so, it can't see Demogorgon until the start of his next turn. If the target looks at him in the meantime, it must immediately make the save."
      }
    ],
    "legendaryActions": 2,
    "legendary": [
      {
        "Name": "Tail",
        "Text": "Melee Weapon 17 to hit, reach 15 ft., one target. Hit:20 (2d10 + 9) bludgeoning damage plus 11 (2d10) necrotic damage."
      },
      {
        "Name": "Maddening Gaze",
        "Text": "Demogorgon uses his Gaze action, and must choose either the Beguiling Gaze or the Insanity Gaze effect."
      }
    ]
  },
  {
    "name": "Derro",
    "size": "S",
    "type": "humanoid (derro)",
    "alignment": "Chaotic Evil",
    "ac": "13 leather armor",
    "hp": 13,
    "speed": "Walk 30",
    "str": 10,
    "dex": 14,
    "con": 12,
    "int": 11,
    "wis": 5,
    "cha": 9,
    "skill": "Stealth +4",
    "senses": "darkvision 120 ft.",
    "passive": 7,
    "languages": "Dwarvish, Undercommon",
    "cr": "1/4",
    "trait": [
      {
        "Name": "Magic Resistance",
        "Text": "The derro has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Sunlight Sensitivity",
        "Text": "While in sunlight, the derro has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
      }
    ],
    "action": [
      {
        "Name": "Hooked Spear",
        "Text": "Melee Weapon 2 to hit, reach 5 ft., one target. Hit:3 (1d6) piercing damage. If the target is Medium or smaller, the derro can choose to deal no damage and knock it prone."
      },
      {
        "Name": "Light Crossbow",
        "Text": "Ranged Weapon 4 to hit, range 80/320 ft., one target. Hit:6 (1d8 + 2) piercing damage."
      }
    ],
    "environment": [
      "mountain",
      "underdark"
    ]
  },
  {
    "name": "Derro Savant",
    "size": "S",
    "type": "humanoid (derro)",
    "alignment": "Chaotic Evil",
    "ac": "13 leather armor",
    "hp": 36,
    "speed": "Walk 30",
    "str": 9,
    "dex": 14,
    "con": 12,
    "int": 11,
    "wis": 5,
    "cha": 14,
    "skill": "Stealth +4",
    "senses": "darkvision 120 ft.",
    "passive": 7,
    "languages": "Dwarvish, Undercommon",
    "cr": "3",
    "trait": [
      {
        "Name": "Magic Resistance",
        "Text": "The derro savant has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Sunlight Sensitivity",
        "Text": "While in sunlight, the derro savant has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
      },
      {
        "Name": "Spellcasting",
        "Text": "The derro savant is a 5th-level spellcaster. Its spellcasting ability is Charisma (spell save DC 12, +4 to hit with spell attacks). The derro knows the following sorcerer spells:<br><br>Cantrips (at will): <em>acid splash, mage hand, message, prestidigitation, ray of frost</em><br>1st (1 slots): <em>burning hands, chromatic orb, sleep</em><br>2nd (2 slots): <em>invisibility, spider climb</em><br>3rd (3 slots): <em>lightning bolt</em>"
      }
    ],
    "action": [
      {
        "Name": "Quarterstaff",
        "Text": "Melee Weapon 1 to hit, reach 5 ft., one target. Hit:2 (1d6 - 1) bludgeoning damage."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Dhergoloth",
    "size": "M",
    "type": "fiend (yugoloth)",
    "alignment": "Neutral Evil",
    "ac": "15 natural armor",
    "hp": 119,
    "speed": "Walk 30",
    "str": 17,
    "dex": 10,
    "con": 19,
    "int": 7,
    "wis": 10,
    "cha": 9,
    "save": "Str +6",
    "senses": "blindsight 60 ft., darkvision 60 ft.",
    "passive": 10,
    "resist": [
      "cold",
      "fire",
      "lightning",
      {
        "resist": [
          "bludgeoning",
          "piercing",
          "slashing"
        ],
        "note": "from nonmagical attacks",
        "cond": true
      }
    ],
    "immune": "acid, poison",
    "conditionImmune": "poisoned",
    "languages": "Abyssal, Infernal, telepathy 60 ft.",
    "cr": "7",
    "trait": [
      {
        "Name": "Magic Resistance",
        "Text": "The dhergoloth has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Magic Weapons",
        "Text": "The dhergoloth's weapon attacks are magical."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>3/day: <em>sleep</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The dhergoloth makes two claw attacks."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:12 (2d8 + 3) slashing damage."
      },
      {
        "Name": "Flailing Claws (Recharge 5-6)",
        "Text": "The dhergoloth moves up to its walking speed in a straight line and targets each creature within 5 feet of it during its movement. Each target must succeed on a 14 Dexterity saving throw or take 22 (3d12 + 3) slashing damage."
      },
      {
        "Name": "Teleport",
        "Text": "The dhergoloth magically teleports, along with any equipment it is wearing or carrying, up to 60 feet to an unoccupied space it can see."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Dire Troll",
    "size": "H",
    "type": "giant",
    "alignment": "Chaotic Evil",
    "ac": "15 natural armor",
    "hp": 172,
    "speed": "Walk 40",
    "str": 22,
    "dex": 15,
    "con": 21,
    "int": 9,
    "wis": 11,
    "cha": 5,
    "save": "Wis +5, Cha +2",
    "skill": "Perception +5",
    "senses": "darkvision 60 ft.",
    "passive": 15,
    "resist": [
      {
        "resist": [
          "bludgeoning",
          "piercing",
          "slashing"
        ],
        "note": "from nonmagical attacks",
        "cond": true
      }
    ],
    "conditionImmune": "frightened, poisoned",
    "languages": "Giant",
    "cr": "13",
    "trait": [
      {
        "Name": "Keen Senses",
        "Text": "The troll has advantage on Wisdom (Perception) checks that rely on smell or sight."
      },
      {
        "Name": "Regeneration",
        "Text": "The troll regains 10 hit points at the start of its turn. If the troll takes acid or fire damage, it regains only 5 hit points at the start of its next turn. The troll dies only if it is hit by an attack that deals 10 or more acid or fire damage while the troll has 0 hit points."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The troll makes five attacks: one with its bite and four with its claws."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 11 to hit, reach 10 ft., one target. Hit:10 (1d8 + 6) piercing damage plus 5 (1d10) poison damage."
      },
      {
        "Name": "Claws",
        "Text": "Melee Weapon 11 to hit, reach 10 ft., one target. Hit:16 (3d6 + 6) slashing damage."
      },
      {
        "Name": "Whirlwind of Claws (Recharge 5-6)",
        "Text": "Each creature within 10 feet of the troll must make a 19 Dexterity saving throw, taking 44 (8d10) slashing damage on a failed save, or half as much damage on a successful one."
      }
    ],
    "environment": [
      "arctic",
      "forest",
      "hill",
      "mountain",
      "underdark"
    ]
  },
  {
    "name": "Drow Arachnomancer",
    "size": "M",
    "type": "humanoid (elf)",
    "alignment": "Chaotic Evil",
    "ac": "15 studded leather armor",
    "hp": 162,
    "speed": "Walk 30, Climb 30",
    "str": 11,
    "dex": 17,
    "con": 14,
    "int": 19,
    "wis": 14,
    "cha": 16,
    "save": "Con +7, Int +9, Cha +8",
    "skill": "Arcana +9, Nature +9, Perception +7, Stealth +8",
    "senses": "blindsight 10 ft., darkvision 120 ft.",
    "passive": 17,
    "resist": [
      "poison"
    ],
    "languages": "Elvish, Undercommon, can speak with spiders",
    "cr": "13",
    "trait": [
      {
        "Name": "Change Shape (Recharges after a Short or Long Rest)",
        "Text": "The drow can use a bonus action to magically polymorph into a giant spider, remaining in that form for up to 1 hour. It can revert to its true form as a bonus action. Its statistics, other than its size, are the same in each form. It can speak and cast spells while in giant spider form. Any equipment it is wearing or carrying in humanoid form melds into the giant spider form. It can't activate, use, wield, or otherwise benefit from any of its equipment. It reverts to its humanoid form if it dies."
      },
      {
        "Name": "Fey Ancestry",
        "Text": "The drow has advantage on saving throws against being charmed, and magic can't put the drow to sleep."
      },
      {
        "Name": "Spider Climb",
        "Text": "The drow can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
      },
      {
        "Name": "Sunlight Sensitivity",
        "Text": "While in sunlight, the drow has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
      },
      {
        "Name": "Web Walker",
        "Text": "The drow ignores movement restrictions caused by webbing."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day each: <em>darkness, faerie fire, levitate (self only)</em>"
      },
      {
        "Name": "Spellcasting",
        "Text": "<br>1/day: <em>eyebite, etherealness, dominate monster</em><br><br>Cantrips (at will): <em>chill touch, eldritch blast, mage hand, poison spray</em><br>5th (5 slots): <em>conjure animals (spiders only), crown of madness, dimension door, dispel magic, fear, fly, giant insect, hold monster, insect plague, invisibility, vampiric touch, web, witch bolt</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The drow makes two poisonous touch attacks or two bite attacks. The first of these attacks that hits each round deals an extra 26 (4d12) poison damage to the target."
      },
      {
        "Name": "Poisonous Touch (Humanoid Form Only)",
        "Text": "Melee Weapon 8 to hit, reach 5 ft., one target. Hit:28 (8d6) poison damage."
      },
      {
        "Name": "Bite (Giant Spider Form Only)",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:12 (2d8 + 3) piercing damage, and the target must make a 15 Constitution saving throw, taking 26 (4d12) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way."
      },
      {
        "Name": "Web (Giant Spider Form Only Recharge 5–6)",
        "Text": "Ranged Weapon 8 to hit, range 30/60 ft., one target. Hit:The target is restrained by webbing. As an action, the restrained target can make a 15 Strength check, bursting the webbing on a success. The webbing can also be attacked and destroyed (AC 10; hp 5; vulnerability to fire damage; immunity to bludgeoning, poison, and psychic damage)."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Drow Favored Consort",
    "size": "M",
    "type": "humanoid (elf)",
    "alignment": "Neutral Evil",
    "ac": 15,
    "hp": 225,
    "speed": "Walk 30",
    "str": 15,
    "dex": 20,
    "con": 16,
    "int": 18,
    "wis": 15,
    "cha": 18,
    "save": "Dex +11, Con +9, Cha +10",
    "skill": "Acrobatics +11, Athletics +8, Perception +8, Stealth +11",
    "senses": "darkvision 120 ft.",
    "passive": 18,
    "languages": "Elvish, Undercommon",
    "cr": "18",
    "trait": [
      {
        "Name": "Fey Ancestry",
        "Text": "The drow has advantage on saving throws against being charmed, and magic can't put the drow to sleep."
      },
      {
        "Name": "Sunlight Sensitivity",
        "Text": "While in sunlight, the drow has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
      },
      {
        "Name": "War Magic",
        "Text": "When the drow uses its action to cast a spell, it can make one weapon attack as a bonus action."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day each: <em>darkness, faerie fire, levitate (self only)</em>"
      },
      {
        "Name": "Spellcasting",
        "Text": "The drow is a 11th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 18, +10 to hit with spell attacks). It has the following wizard spells prepared:<br><br>Cantrips (at will): <em>mage hand, message, poison spray, shocking grasp, ray of frost</em><br>1st (1 slots): <em>burning hands, mage armor, magic missile, shield</em><br>2nd (2 slots): <em>gust of wind, invisibility, misty step, shatter</em><br>3rd (3 slots): <em>counterspell, fireball, haste</em><br>4th (4 slots): <em>dimension door, Otiluke's resilient sphere</em><br>5th (5 slots): <em>cone of cold</em><br>6th (6 slots): <em>chain lightning</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The drow makes three scimitar attacks."
      },
      {
        "Name": "Scimitar",
        "Text": "Melee Weapon 11 to hit, reach 5 ft., one target. Hit:8 (1d6 + 5) slashing damage plus 18 (4d8) poison damage. In addition, the target has disadvantage on the next saving throw it makes against a spell the drow casts before the end of the drow's next turn."
      },
      {
        "Name": "Hand Crossbow",
        "Text": "Ranged Weapon 11 to hit, range 30/120 ft., one target. Hit:8 (1d6 + 5) piercing damage, and the target must succeed on a 13 Constitution saving throw or be poisoned for 1 hour. If the saving throw fails by 5 or more, the target is also unconscious while poisoned in this way. The target regains consciousness if it takes damage or if another creature takes an action to shake it."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Drow House Captain",
    "size": "M",
    "type": "humanoid (elf)",
    "alignment": "Neutral Evil",
    "ac": "16 chain mail",
    "hp": 162,
    "speed": "Walk 30",
    "str": 14,
    "dex": 19,
    "con": 15,
    "int": 12,
    "wis": 14,
    "cha": 13,
    "save": "Dex +8, Con +6, Wis +6",
    "skill": "Perception +6, Stealth +8",
    "senses": "darkvision 120 ft.",
    "passive": 16,
    "languages": "Elvish, Undercommon",
    "cr": "9",
    "trait": [
      {
        "Name": "Battle Command",
        "Text": "As a bonus action, the drow targets one ally he can see within 30 feet of him. If the target can see or hear the drow, the target can use its reaction to make one melee attack or to take the Dodge or Hide action."
      },
      {
        "Name": "Fey Ancestry",
        "Text": "The drow has advantage on saving throws against being charmed, and magic can't put the drow to sleep."
      },
      {
        "Name": "Sunlight Sensitivity",
        "Text": "While in sunlight, the drow has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day each: <em>darkness, faerie fire, levitate (self only)</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The drow makes three attacks: two with his scimitar and one with his whip or his hand crossbow."
      },
      {
        "Name": "Scimitar",
        "Text": "Melee Weapon 8 to hit, reach 5 ft., one target. Hit:7 (1d6 + 4) slashing damage plus 14 (4d6) poison damage."
      },
      {
        "Name": "Whip",
        "Text": "Melee Weapon 8 to hit, reach 10 ft., one target. Hit:6 (1d4 + 4) slashing damage. If the target is an ally, it has advantage on attack rolls until the end of its next turn."
      },
      {
        "Name": "Hand Crossbow",
        "Text": "Ranged Weapon 8 to hit, range 30/120 ft., one target. Hit:7 (1d6 + 4) piercing damage, and the target must succeed on a 13 Constitution saving throw or be poisoned for 1 hour. If the saving throw fails by 5 or more, the target is also unconscious while poisoned in this way. The target regains consciousness if it takes damage or if another creature takes an action to shake it."
      }
    ],
    "reaction": [
      {
        "Name": "Parry",
        "Text": "The drow adds 3 to his AC against one melee attack that would hit him. To do so, the drow must see the attacker and be wielding a melee weapon."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Drow Inquisitor",
    "size": "M",
    "type": "humanoid (elf)",
    "alignment": "Neutral Evil",
    "ac": "16 breastplate",
    "hp": 143,
    "speed": "Walk 30",
    "str": 11,
    "dex": 15,
    "con": 14,
    "int": 16,
    "wis": 21,
    "cha": 20,
    "save": "Con +7, Wis +10, Cha +10",
    "skill": "Insight +10, Perception +10, Religion +8, Stealth +7",
    "senses": "darkvision 120 ft.",
    "passive": 20,
    "conditionImmune": "frightened",
    "languages": "Elvish, Undercommon",
    "cr": "14",
    "trait": [
      {
        "Name": "Discern Lie",
        "Text": "The drow knows when she hears a creature speak a lie in a language she knows."
      },
      {
        "Name": "Fey Ancestry",
        "Text": "The drow has advantage on saving throws against being charmed, and magic can't put the drow to sleep."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The drow has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Sunlight Sensitivity",
        "Text": "While in sunlight, the drow has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day each: <em>clairvoyance, darkness, detect thoughts, dispel magic, faerie fire, levitate (self only), suggestion</em>"
      },
      {
        "Name": "Spellcasting",
        "Text": "The drow is a 12th-level spellcaster. Her spellcasting ability is Wisdom (spell save DC 18, +10 to hit with spell attacks). She has the following cleric spells prepared:<br><br>Cantrips (at will): <em>guidance, message, poison spray, resistance, thaumaturgy</em><br>1st (1 slots): <em>bane, cure wounds, inflict wounds</em><br>2nd (2 slots): <em>blindness/deafness, silence, spiritual weapon</em><br>3rd (3 slots): <em>bestow curse, dispel magic, magic circle</em><br>4th (4 slots): <em>banishment, divination, freedom of movement</em><br>5th (5 slots): <em>contagion, dispel evil and good, insect plague</em><br>6th (6 slots): <em>harm, true seeing</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The drow makes three death lance attacks."
      },
      {
        "Name": "Death Lance",
        "Text": "Melee Weapon 10 to hit, reach 5 ft., one target. Hit:8 (1d6 + 5) piercing damage plus 18 (4d8) necrotic damage. The target's hit point maximum is reduced by an amount equal to the necrotic damage it takes. This reduction lasts until the target finishes a long rest. The target dies if its hit point maximum is reduced to 0."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Drow Matron Mother",
    "size": "M",
    "type": "humanoid (elf)",
    "alignment": "Neutral Evil",
    "ac": "17 half plate armor",
    "hp": 262,
    "speed": "Walk 30",
    "str": 12,
    "dex": 18,
    "con": 16,
    "int": 17,
    "wis": 21,
    "cha": 22,
    "save": "Con +9, Wis +11, Cha +12",
    "skill": "Insight +11, Perception +11, Religion +9, Stealth +10",
    "senses": "darkvision 120 ft.",
    "passive": 21,
    "conditionImmune": "charmed, frightened, poisoned",
    "languages": "Elvish, Undercommon",
    "cr": "20",
    "trait": [
      {
        "Name": "Fey Ancestry",
        "Text": "The drow has advantage on saving throws against being charmed, and magic can't put the drow to sleep."
      },
      {
        "Name": "Lolth's Fickle Favor",
        "Text": "As a bonus action, the matron can bestow the Spider Queen's blessing on one ally she can see within 30 feet of her. The ally takes 7 (2d6) psychic damage but has advantage on the next attack roll it makes until the end of its next turn."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The drow has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Sunlight Sensitivity",
        "Text": "While in sunlight, the drow has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day each: <em>clairvoyance, darkness, detect thoughts, dispel magic, faerie fire, levitate (self only), suggestion</em>"
      },
      {
        "Name": "Spellcasting",
        "Text": "The drow is a 20th-level spellcaster. Her spellcasting ability is Wisdom (spell save DC 19, +11 to hit with spell attacks). The drow has the following cleric spells prepared:<br><br>Cantrips (at will): <em>guidance, mending, resistance, sacred flame, thaumaturgy</em><br>1st (1 slots): <em>bane, command, cure wounds, guiding bolt</em><br>2nd (2 slots): <em>hold person, silence, spiritual weapon</em><br>3rd (3 slots): <em>bestow curse, clairvoyance, dispel magic, spirit guardians</em><br>4th (4 slots): <em>banishment, death ward, freedom of movement, guardian of faith</em><br>5th (5 slots): <em>contagion, flame strike, geas, mass cure wounds</em><br>6th (6 slots): <em>blade barrier, harm</em><br>7th (7 slots): <em>divine word, plane shift</em><br>8th (8 slots): <em>holy aura</em><br>9th (9 slots): <em>gate</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The matron mother makes two demon staff attacks or three tentacle rod attacks."
      },
      {
        "Name": "Demon Staff",
        "Text": "Melee Weapon 10 to hit, reach 5 ft., one target. Hit:7 (1d6 + 4) bludgeoning damage, or 8 (1d8 + 4) bludgeoning damage if used with two hands, plus 14 (4d6) psychic damage. In addition, the target must succeed on a DC19 Wisdom saving throw or become frightened of the drow for 1 minute. The frightened target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      },
      {
        "Name": "Tentacle Rod",
        "Text": "Melee Weapon 9 to hit, reach 15 ft., one target. Hit:3 (1d6) bludgeoning damage. If the target is hit three times by the rod on one turn, the target must succeed on a 15 Constitution saving throw or suffer the following effects for 1 minute: the target's speed is halved, it has disadvantage on Dexterity saving throws, and it can't use reactions. Moreover, on each of its turns, it can take either an action or a bonus action, but not both. At the end of each of its turns, it can repeat the saving throw, ending the effect on itself on a success."
      },
      {
        "Name": "Summon Servant (1/Day)",
        "Text": "The drow magically summons a retriever or a yochlol. The summoned creature appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 10 minutes, until it or its summoner dies, or until its summoner dismisses it as an action."
      }
    ],
    "legendary": [
      {
        "Name": "Demon Staff",
        "Text": "The drow makes one attack with her demon staff."
      },
      {
        "Name": "Compel Demon (Costs 2 Actions)",
        "Text": "An allied demon within 30 feet of the drow uses its reaction to make one attack against a target of the drow's choice that she can see."
      },
      {
        "Name": "Cast a Spell (Costs 1–3 Actions)",
        "Text": "The drow expends a spell slot to cast a 1st-, 2nd-, or 3rd-level spell that she has prepared. Doing so costs 1 legendary action per level of the spell."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Drow Shadowblade",
    "size": "M",
    "type": "humanoid (elf)",
    "alignment": "Neutral Evil",
    "ac": "17 studded leather armor",
    "hp": 150,
    "speed": "Walk 30",
    "str": 14,
    "dex": 21,
    "con": 16,
    "int": 12,
    "wis": 14,
    "cha": 13,
    "save": "Dex +9, Con +7, Wis +6",
    "skill": "Perception +6, Stealth +9",
    "senses": "darkvision 120 ft.",
    "passive": 16,
    "languages": "Elvish, Undercommon",
    "cr": "11",
    "trait": [
      {
        "Name": "Fey Ancestry",
        "Text": "The drow has advantage on saving throws against being charmed, and magic can't put the drow to sleep."
      },
      {
        "Name": "Shadow Step",
        "Text": "While in dim light or darkness, the drow can teleport as a bonus action up to 60 feet to an unoccupied space it can see that is also in dim light or darkness. It then has advantage on the first melee attack it makes before the end of the turn."
      },
      {
        "Name": "Sunlight Sensitivity",
        "Text": "While in sunlight, the drow has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day each: <em>darkness, faerie fire, levitate (self only)</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The drow makes two attacks with its shadow sword. If either attack hits and the target is within 10 feet of a 5-foot cube of darkness created by the shadow sword on a previous turn, the drow can dismiss that darkness and cause the target to take 21 (6d6) necrotic damage. The drow can dismiss darkness in this way no more than once per turn."
      },
      {
        "Name": "Shadow Sword",
        "Text": "Melee Weapon 9 to hit, reach 5 ft., one target. Hit:8 (1d6 + 5) piercing damage plus 10 (3d6) necrotic damage and 10 (3d6) poison damage. The drow can then fill an unoccupied 5-foot cube within 5 feet of the target with magical darkness, which remains for 1 minute."
      },
      {
        "Name": "Hand Crossbow",
        "Text": "Ranged Weapon 9 to hit, range 30/120 ft., one target. Hit:8 (1d6 + 5) piercing damage, and the target must succeed on a 13 Constitution saving throw or be poisoned for 1 hour. If the saving throw fails by 5 or more, the target is also unconscious while poisoned in this way. The target regains consciousness if it takes damage or if another creature takes an action to shake it."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Duergar Despot",
    "size": "M",
    "type": "humanoid (dwarf)",
    "alignment": "Lawful Evil",
    "ac": "21 natural armor",
    "hp": 119,
    "speed": "Walk 25",
    "str": 20,
    "dex": 5,
    "con": 19,
    "int": 15,
    "wis": 14,
    "cha": 13,
    "save": "Con +8, Wis +6",
    "senses": "darkvision 120 ft.",
    "passive": 12,
    "immune": "poison",
    "conditionImmune": "charmed, exhaustion, frightened, paralyzed, poisoned",
    "languages": "Dwarvish, Undercommon",
    "cr": "12",
    "trait": [
      {
        "Name": "Magic Resistance",
        "Text": "The duergar has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Psychic Engine",
        "Text": "When the duergar despot suffers a critical hit or is reduced to 0 hit points, psychic energy erupts from its frame to deal 14 (4d6) psychic damage to each creature within 5 feet of it."
      },
      {
        "Name": "Sunlight Sensitivity",
        "Text": "While in sunlight, the duergar despot has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
      },
      {
        "Name": "Innate Spellcasting (Psionics)",
        "Text": "<br>1/day each: <em>counterspell, misty step, stinking cloud</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The despot makes two iron fist attacks and two stomping foot attacks. It can replace up to four of these attacks with uses of its Flame Jet."
      },
      {
        "Name": "Iron Fist",
        "Text": "Melee Weapon 9 to hit, reach 5 ft., one target. Hit:14 (2d8 + 5) bludgeoning damage. If the target is a Large or smaller creature, it must make a successful 17 Strength saving throw or be thrown up to 30 feet away in a straight line. The target is knocked prone and then takes 10 (3d6) bludgeoning damage."
      },
      {
        "Name": "Stomping Foot",
        "Text": "Melee Weapon 9 to hit, reach 5 ft., one target. Hit:9 (1d8 + 5) bludgeoning damage, or 18 (3d8 + 5) bludgeoning damage to a prone target."
      },
      {
        "Name": "Flame Jet",
        "Text": "The duergar spews flames in a line 100 feet long and 5 feet wide. Each creature in the line must make a 16 Dexterity saving throw, taking 18 (4d8) fire damage on a failed save, or half as much damage on a successful one."
      }
    ],
    "environment": [
      "mountain",
      "underdark"
    ]
  },
  {
    "name": "Duergar Hammerer",
    "size": "M",
    "type": "construct",
    "alignment": "Lawful Evil",
    "ac": "17 natural armor",
    "hp": 33,
    "speed": "Walk 20",
    "str": 17,
    "dex": 7,
    "con": 12,
    "int": 5,
    "wis": 5,
    "cha": 5,
    "senses": "darkvision 60 ft.",
    "passive": 7,
    "immune": "poison",
    "conditionImmune": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned",
    "languages": "understands Dwarvish but can't speak",
    "cr": "2",
    "trait": [
      {
        "Name": "Engine of Pain",
        "Text": "Once per turn, a creature that attacks the hammerer can target the duergar trapped in it. The attacker has disadvantage on the attack roll. On a hit, the attack deals an extra 5 (1d10) damage to the hammerer, and the hammerer can respond by using its Multiattack with its reaction."
      },
      {
        "Name": "Siege Monster",
        "Text": "The hammerer deals double damage to objects and structures."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The hammerer makes two attacks: one with its claw and one with its hammer."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:6 (1d6 + 3) bludgeoning damage."
      },
      {
        "Name": "Hammer",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:10 (2d6 + 3) bludgeoning damage."
      }
    ],
    "environment": [
      "mountain",
      "underdark"
    ]
  },
  {
    "name": "Duergar Kavalrachni",
    "size": "M",
    "type": "humanoid (dwarf)",
    "alignment": "Lawful Evil",
    "ac": "16 scale mail",
    "hp": 26,
    "speed": "Walk 25",
    "str": 14,
    "dex": 11,
    "con": 14,
    "int": 11,
    "wis": 10,
    "cha": 9,
    "senses": "darkvision 120 ft.",
    "passive": 10,
    "resist": [
      "poison"
    ],
    "languages": "Dwarvish, Undercommon",
    "cr": "2",
    "trait": [
      {
        "Name": "Cavalry Training",
        "Text": "When the duergar hits a target with a melee attack while mounted on a female steeder, the steeder can make one melee attack against the same target as a reaction."
      },
      {
        "Name": "Duergar Resilience",
        "Text": "The duergar has advantage on saving throws against poison, spells, and illusions, as well as to resist being charmed or paralyzed."
      },
      {
        "Name": "Sunlight Sensitivity",
        "Text": "While in sunlight, the duergar has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The duergar makes two war pick attacks."
      },
      {
        "Name": "War Pick",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:6 (1d8 + 2) piercing damage plus 5 (2d4) poison damage."
      },
      {
        "Name": "Heavy Crossbow",
        "Text": "Ranged Weapon 2 to hit, range 100/400 ft., one target. Hit:5 (1d10) piercing damage."
      },
      {
        "Name": "Shared Invisibility (Recharges after a Short or Long Rest)",
        "Text": "The duergar magically turns invisible for up to 1 hour or until it attacks, it casts a spell, or its concentration is broken (as if concentrating on a spell). Any equipment the duergar wears or carries is invisible with it. While the invisible duergar is mounted on a female steeder, the steeder is invisible as well. The invisibility ends early on the steeder immediately after it attacks."
      }
    ],
    "environment": [
      "mountain",
      "underdark"
    ]
  },
  {
    "name": "Duergar Mind Master",
    "size": "M",
    "type": "humanoid (dwarf)",
    "alignment": "Lawful Evil",
    "ac": "14 leather armor",
    "hp": 39,
    "speed": "Walk 25",
    "str": 11,
    "dex": 17,
    "con": 14,
    "int": 15,
    "wis": 10,
    "cha": 12,
    "save": "Wis +2",
    "skill": "Perception +2, Stealth +5",
    "senses": "darkvision 120 ft., truesight 30 ft.",
    "passive": 12,
    "resist": [
      "poison"
    ],
    "languages": "Dwarvish, Undercommon",
    "cr": "2",
    "trait": [
      {
        "Name": "Duergar Resilience",
        "Text": "The duergar has advantage on saving throws against poison, spells, and illusions, as well as to resist being charmed or paralyzed."
      },
      {
        "Name": "Sunlight Sensitivity",
        "Text": "While in sunlight, the duergar has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The duergar makes two melee attacks. It can replace one of those attacks with a use of Mind Mastery."
      },
      {
        "Name": "Mind-Poison Dagger",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:5 (1d4 + 3) piercing damage and 10 (3d6) psychic damage, or 1 piercing damage and 14 (4d6) psychic damage while reduced."
      },
      {
        "Name": "Invisibility (Recharge 4-6)",
        "Text": "The duergar magically turns invisible for up to 1 hour or until it attacks, it casts a spell, it uses its Reduce, or its concentration is broken (as if concentrating on a spell). Any equipment the duergar wears or carries is invisible with it."
      },
      {
        "Name": "Mind Mastery",
        "Text": "The duergar targets one creature it can see within 60 feet of it. The target must succeed on a 12 Intelligence saving throw, or the duergar causes it to use its reaction either to make one weapon attack against another creature the duergar can see or to move up to 10 feet in a direction of the duergar's choice. Creatures that can't be charmed are immune to this effect."
      },
      {
        "Name": "Reduce (Recharges after a Short or Long Rest)",
        "Text": "For 1 minute, the duergar magically decreases in size, along with anything it is wearing or carrying. While reduced, the duergar is Tiny, reduces its weapon damage to 1, and makes attacks, checks, and saving throws with disadvantage if they use Strength. It gains a +5 bonus to all Dexterity (Stealth) checks and a +5 bonus to its AC. It can also take a bonus action on each of its turns to take the Hide action."
      }
    ],
    "environment": [
      "mountain",
      "underdark"
    ]
  },
  {
    "name": "Duergar Screamer",
    "size": "M",
    "type": "construct",
    "alignment": "Lawful Evil",
    "ac": "15 natural armor",
    "hp": 38,
    "speed": "Walk 20",
    "str": 18,
    "dex": 7,
    "con": 12,
    "int": 5,
    "wis": 5,
    "cha": 5,
    "senses": "darkvision 60 ft.",
    "passive": 7,
    "immune": "poison",
    "conditionImmune": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned",
    "languages": "understands Dwarvish but can't speak",
    "cr": "3",
    "trait": [
      {
        "Name": "Engine of Pain",
        "Text": "Once per turn, a creature that attacks the screamer can target the duergar trapped in it. The attacker has disadvantage on the attack roll. On a hit, the attack deals an extra 11 (2d10) damage to the screamer, and the screamer can respond by using its Multiattack with its reaction."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The screamer makes one drill attack and uses its Sonic Scream."
      },
      {
        "Name": "Drill",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:10 (1d12 + 4) piercing damage."
      },
      {
        "Name": "Sonic Scream",
        "Text": "The screamer emits destructive energy in a 15-foot cube. Each creature in that area must succeed on a 11 Strength saving throw or take 7 (2d6) thunder damage and be knocked prone."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Duergar Soulblade",
    "size": "M",
    "type": "humanoid (dwarf)",
    "alignment": "Lawful Evil",
    "ac": "14 leather armor",
    "hp": 18,
    "speed": "Walk 25",
    "str": 11,
    "dex": 16,
    "con": 10,
    "int": 11,
    "wis": 10,
    "cha": 12,
    "senses": "darkvision 120 ft.",
    "passive": 10,
    "resist": [
      "poison"
    ],
    "languages": "Dwarvish, Undercommon",
    "cr": "1",
    "trait": [
      {
        "Name": "Duergar Resilience",
        "Text": "The duergar has advantage on saving throws against poison, spells, and illusions, as well as to resist being charmed or paralyzed."
      },
      {
        "Name": "Create Soulblade",
        "Text": "As a bonus action, the duergar can create a shortsword-sized, visible blade of psionic energy. The weapon appears in the duergar's hand and vanishes if it leaves the duergar's grip, or if the duergar dies or is incapacitated."
      },
      {
        "Name": "Sunlight Sensitivity",
        "Text": "While in sunlight, the duergar has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
      },
      {
        "Name": "Innate Spellcasting (Psionics)",
        "Text": "<br>3/day each: <em>jump, hunter's mark</em>"
      }
    ],
    "action": [
      {
        "Name": "Soulblade",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:6 (1d6 + 3) force damage, or 10 (2d6 + 3) force damage while enlarged. If the soulblade has advantage on the attack roll, the attack deals an extra 3 (1d6) force damage."
      },
      {
        "Name": "Enlarge (Recharges after a Short or Long Rest)",
        "Text": "For 1 minute, the duergar magically increases in size, along with anything it is wearing or carrying. While enlarged, the duergar is Large, doubles its damage dice on Strength-based weapon attacks (included in the attacks), and makes Strength checks and Strength saving throws with advantage. If the duergar lacks the room to become Large, it attains the maximum size possible in the space available."
      },
      {
        "Name": "Invisibility (Recharges after a Short or Long Rest)",
        "Text": "The duergar magically turns invisible for up to 1 hour or until it attacks, it casts a spell, it uses its Enlarge, or its concentration is broken (as if concentrating on a spell). Any equipment the duergar wears or carries is invisible with it."
      }
    ],
    "environment": [
      "mountain",
      "underdark"
    ]
  },
  {
    "name": "Duergar Stone Guard",
    "size": "M",
    "type": "humanoid (dwarf)",
    "alignment": "Lawful Evil",
    "ac": "18 chain mail",
    "hp": 39,
    "speed": "Walk 25",
    "str": 18,
    "dex": 11,
    "con": 14,
    "int": 11,
    "wis": 10,
    "cha": 9,
    "senses": "darkvision 120 ft.",
    "passive": 10,
    "resist": [
      "poison"
    ],
    "languages": "Dwarvish, Undercommon",
    "cr": "2",
    "trait": [
      {
        "Name": "Duergar Resilience",
        "Text": "The duergar has advantage on saving throws against poison, spells, and illusions, as well as to resist being charmed or paralyzed."
      },
      {
        "Name": "Phalanx Formation",
        "Text": "The duergar has advantage on attack rolls and Dexterity saving throws while standing within 5 feet of a duergar ally wielding a shield."
      },
      {
        "Name": "Sunlight Sensitivity",
        "Text": "While in sunlight, the duergar has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
      }
    ],
    "action": [
      {
        "Name": "King's Knife (Shortsword)",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:7 (1d6 + 4) piercing damage, or 11 (2d6 + 4) piercing damage while enlarged."
      },
      {
        "Name": "Javelin",
        "Text": "Melee or Ranged Weapon 6 to hit, reach 5 ft. or range 30/120 ft., one target. Hit:7 (1d6 + 4) piercing damage, or 11 (2d6 + 4) piercing damage while enlarged."
      },
      {
        "Name": "Enlarge (Recharges after a Short or Long Rest)",
        "Text": "For 1 minute, the duergar magically increases in size, along with anything it is wearing or carrying. While enlarged, the duergar is Large, doubles its damage dice on Strength-based weapon attacks (included in the attacks), and makes Strength checks and Strength saving throws with advantage. If the duergar lacks the room to become Large, it attains the maximum size possible in the space available."
      },
      {
        "Name": "Invisibility (Recharges after a Short or Long Rest)",
        "Text": "The duergar magically turns invisible for up to 1 hour or until it attacks, it casts a spell, it uses its Enlarge, or its concentration is broken (as if concentrating on a spell). Any equipment the duergar wears or carries is invisible with it."
      }
    ],
    "environment": [
      "mountain",
      "underdark"
    ]
  },
  {
    "name": "Duergar Warlord",
    "size": "M",
    "type": "humanoid (dwarf)",
    "alignment": "Lawful Evil",
    "ac": "20 plate armor",
    "hp": 75,
    "speed": "Walk 25",
    "str": 18,
    "dex": 11,
    "con": 17,
    "int": 12,
    "wis": 12,
    "cha": 14,
    "senses": "darkvision 120 ft.",
    "passive": 11,
    "resist": [
      "poison"
    ],
    "languages": "Dwarvish, Undercommon",
    "cr": "6",
    "trait": [
      {
        "Name": "Duergar Resilience",
        "Text": "The duergar has advantage on saving throws against poison, spells, and illusions, as well as to resist being charmed or paralyzed."
      },
      {
        "Name": "Sunlight Sensitivity",
        "Text": "While in sunlight, the duergar has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The duergar makes three hammer or javelin attacks and uses Call to Attack, or Enlarge if it is available."
      },
      {
        "Name": "Psychic-Attuned Hammer",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:9 (1d10 + 4) bludgeoning damage plus 5 (1d10) psychic damage, or 15 (2d10 + 4) bludgeoning damage plus 5 (1d10) psychic damage while enlarged,"
      },
      {
        "Name": "Javelin",
        "Text": "Melee or Ranged Weapon 7 to hit, reach 5 ft. or range 30/120 ft., one target. Hit:7 (1d6 + 4) piercing damage, or 11 (2d6 + 4) piercing damage while enlarged."
      },
      {
        "Name": "Call to Attack",
        "Text": "Up to three allied duergar within 120 feet of this duergar that can hear it can each use their reaction to make one weapon attack."
      },
      {
        "Name": "Enlarge (Recharges after a Short or Long Rest)",
        "Text": "For 1 minute, the duergar magically increases in size, along with anything it is wearing or carrying. While enlarged, the duergar is Large, doubles its damage dice on Strength-based weapon attacks (included in the attacks), and makes Strength checks and Strength saving throws with advantage. If the duergar lacks the room to become Large, it attains the maximum size possible in the space available."
      },
      {
        "Name": "Invisibility (Recharge 4-6)",
        "Text": "The duergar magically turns invisible for up to 1 hour or until it attacks, it casts a spell, it uses its Enlarge, or its concentration is broken (as if concentrating on a spell). Any equipment the duergar wears or carries is invisible with it."
      }
    ],
    "reaction": [
      {
        "Name": "Scouring Instruction",
        "Text": "When an ally that the duergar can see makes a d20 roll, the duergar can roll a 1d6 and the ally can add the number rolled to the d20 roll by taking 3 (1d6) psychic damage. A creature immune to psychic damage can't be affected by Scouring Instruction."
      }
    ],
    "environment": [
      "mountain",
      "underdark"
    ]
  },
  {
    "name": "Duergar Xarrorn",
    "size": "M",
    "type": "humanoid (dwarf)",
    "alignment": "Lawful Evil",
    "ac": "18 plate armor",
    "hp": 26,
    "speed": "Walk 25",
    "str": 16,
    "dex": 11,
    "con": 14,
    "int": 11,
    "wis": 10,
    "cha": 9,
    "senses": "darkvision 120 ft.",
    "passive": 10,
    "resist": [
      "poison"
    ],
    "languages": "Dwarvish, Undercommon",
    "cr": "2",
    "trait": [
      {
        "Name": "Duergar Resilience",
        "Text": "The duergar has advantage on saving throws against poison, spells, and illusions, as well as to resist being charmed or paralyzed."
      },
      {
        "Name": "Sunlight Sensitivity",
        "Text": "While in sunlight, the duergar has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
      }
    ],
    "action": [
      {
        "Name": "Fire Lance",
        "Text": "Melee Weapon 5 to hit (with disadvantage if the target is within 5 feet of the duergar), reach 10 ft., one target. Hit:9 (1d12 + 3) piercing damage plus 3 (1d6) fire damage, or 16 (2d12 + 3) piercing damage plus 3 (1d6) fire damage while enlarged."
      },
      {
        "Name": "Fire Spray (Recharge 5-6)",
        "Text": "From its fire lance, the duergar shoots a 15-foot cone of fire or a line of fire 30 feet long and 5 feet wide. Each creature in that area must make a 12 Dexterity saving throw, taking 10 (3d6) fire damage on a failed save, or half as much damage on a successful one."
      },
      {
        "Name": "Enlarge (Recharges after a Short or Long Rest)",
        "Text": "For 1 minute, the duergar magically increases in size, along with anything it is wearing or carrying. While enlarged, the duergar is Large, doubles its damage dice on Strength-based weapon attacks (included in the attacks), and makes Strength checks and Strength saving throws with advantage. If the duergar lacks the room to become Large, it attains the maximum size possible in the space available."
      },
      {
        "Name": "Invisibility (Recharges after a Short or Long Rest)",
        "Text": "The duergar magically turns invisible for up to 1 hour or until it attacks, it casts a spell, it uses its Enlarge, or its concentration is broken (as if concentrating on a spell). Any equipment the duergar wears or carries is invisible with it."
      }
    ],
    "environment": [
      "mountain",
      "underdark"
    ]
  },
  {
    "name": "Dybbuk",
    "size": "M",
    "type": "fiend (demon)",
    "alignment": "Chaotic Evil",
    "ac": 14,
    "hp": 37,
    "speed": "Walk 0, Fly 40 (hover)",
    "str": 6,
    "dex": 19,
    "con": 16,
    "int": 16,
    "wis": 15,
    "cha": 14,
    "skill": "Deception +6, Intimidation +4, Perception +4",
    "senses": "darkvision 120 ft.",
    "passive": 14,
    "resist": [
      "acid",
      "cold",
      "fire",
      "lightning",
      "thunder",
      {
        "resist": [
          "bludgeoning",
          "piercing",
          "slashing"
        ],
        "note": "from nonmagical attacks",
        "cond": true
      }
    ],
    "immune": "poison",
    "conditionImmune": "charmed, exhaustion, frightened, grappled, paralyzed, petrified, poisoned, prone, restrained",
    "languages": "Abyssal, Common, telepathy 120 ft.",
    "cr": "4",
    "trait": [
      {
        "Name": "Incorporeal Movement",
        "Text": "The dybbuk can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The dybbuk has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Violate Corpse",
        "Text": "The dybbuk can use a bonus action while it is possessing a corpse to make it do something unnatural, such as vomit blood, twist its head all the way around, or cause a quadruped to move as a biped. Any beast or humanoid that sees this behavior must succeed on a 12 Wisdom saving throw or become frightened for 1 minute. The frightened creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. A creature that succeeds on a saving throw against this ability is immune to Violate Corpse for 24 hours."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>3/day each: <em>fear, phantasmal force</em>"
      }
    ],
    "action": [
      {
        "Name": "Tendril",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:13 (2d8 + 4) necrotic damage. If the target is a creature, its hit point maximum is also reduced by 3 (1d6). This reduction lasts until the target finishes a short or long rest. The target dies if this effect reduces its hit point maximum to 0."
      },
      {
        "Name": "Possess Corpse (Recharge 6)",
        "Text": "The dybbuk disappears into an intact corpse it can see within 5 feet of it. The corpse must be Large or smaller and be that of a beast or a humanoid. The dybbuk is now effectively the possessed creature. Its type becomes undead, though it now looks alive, and it gains a number of temporary hit points equal to the corpse's hit point maximum in life."
      }
    ],
    "environment": [
      "desert",
      "urban"
    ]
  },
  {
    "name": "Earth Elemental Myrmidon",
    "size": "M",
    "type": "elemental",
    "alignment": "Neutral",
    "ac": "18 plate armor",
    "hp": 127,
    "speed": "Walk 30",
    "str": 18,
    "dex": 10,
    "con": 17,
    "int": 8,
    "wis": 10,
    "cha": 10,
    "senses": "darkvision 60 ft.",
    "passive": 10,
    "resist": [
      {
        "resist": [
          "bludgeoning",
          "piercing",
          "slashing"
        ],
        "note": "from nonmagical attacks",
        "cond": true
      }
    ],
    "immune": "poison",
    "conditionImmune": "paralyzed, petrified, poisoned, prone",
    "languages": "Terran, one language of its creator's choice",
    "cr": "7",
    "trait": [
      {
        "Name": "Magic Weapons",
        "Text": "The myrmidon's weapon attacks are magical."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The myrmidon makes two maul attacks."
      },
      {
        "Name": "Maul",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:11 (2d6 + 4) bludgeoning damage."
      },
      {
        "Name": "Thunderous Strike (Recharge 6)",
        "Text": "The myrmidon makes one maul attack. On a hit, the target takes an extra 16 (3d10) thunder damage, and the target must succeed on a 14 Strength saving throw or be knocked prone."
      }
    ]
  },
  {
    "name": "Eidolon",
    "size": "M",
    "type": "undead",
    "alignment": "Any",
    "ac": 9,
    "hp": 63,
    "speed": "Walk 0, Fly 40 (hover)",
    "str": 7,
    "dex": 8,
    "con": 9,
    "int": 14,
    "wis": 19,
    "cha": 16,
    "save": "Wis +8",
    "skill": "Perception +8",
    "senses": "darkvision 60 ft.",
    "passive": 18,
    "resist": [
      "acid",
      "fire",
      "lightning",
      "thunder",
      {
        "resist": [
          "bludgeoning",
          "piercing",
          "slashing"
        ],
        "note": "from nonmagical attacks",
        "cond": true
      }
    ],
    "immune": "cold, necrotic, poison",
    "conditionImmune": "charmed, exhaustion, frightened, grappled, paralyzed, petrified, poisoned, prone, restrained",
    "languages": "the languages it knew in life",
    "cr": "12",
    "trait": [
      {
        "Name": "Incorporeal Movement",
        "Text": "The eidolon can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object other than a sacred statue."
      },
      {
        "Name": "Sacred Animation (Recharge 5-6)",
        "Text": "When the eidolon moves into a space occupied by a sacred statue, the eidolon can disappear, causing the statue to become a creature under the eidolon's control. The eidolon uses the sacred statue's statistics in place of its own."
      },
      {
        "Name": "Turn Resistance",
        "Text": "The eidolon has advantage on saving throws against any effect that turns undead."
      }
    ],
    "action": [
      {
        "Name": "Divine Dread",
        "Text": "Each creature within 60 feet of the eidolon that can see it must succeed on a 15 Wisdom saving throw or be frightened for 1 minute. While frightened in this way, the creature must take the Dash action and move away from the eidolon by the safest available route at the start of each of its turns, unless there is nowhere for it to move, in which case the creature also becomes stunned until it can move again. A frightened target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a target's saving throw is successful or the effect ends for it, the target is immune to any eidolon's Divine Dread for the next 24 hours."
      }
    ],
    "environment": [
      "coastal",
      "desert",
      "forest",
      "grassland",
      "mountain",
      "urban"
    ]
  },
  {
    "name": "Elder Oblex",
    "size": "H",
    "type": "ooze",
    "alignment": "Lawful Evil",
    "ac": 16,
    "hp": 115,
    "speed": "Walk 20",
    "str": 15,
    "dex": 16,
    "con": 21,
    "int": 22,
    "wis": 13,
    "cha": 18,
    "save": "Int +10, Cha +8",
    "skill": "Arcana +10, Deception +8, History +10, Nature +10, Perception +5, Religion +10",
    "senses": "blindsight 60 ft. (blind beyond this distance)",
    "passive": 15,
    "conditionImmune": "blinded, charmed, deafened, exhaustion, prone",
    "languages": "Common plus six more",
    "cr": "10",
    "trait": [
      {
        "Name": "Amorphous",
        "Text": "The oblex can move through a space as narrow as 1 inch wide without squeezing."
      },
      {
        "Name": "Aversion to Fire",
        "Text": "If the oblex takes fire damage, it has disadvantage on attack rolls and ability checks until the end of its next turn."
      },
      {
        "Name": "Sulfurous Impersonation",
        "Text": "As a bonus action, the oblex can extrude a piece of itself that assumes the appearance of one Medium or smaller creature whose memories it has stolen. This simulacrum appears, feels, and sounds exactly like the creature it impersonates, though it smells faintly of sulfur. The oblex can impersonate 2d6 + 1 different creatures, each one tethered to its body by a strand of slime that can extend up to 120 feet away. For all practical purposes, the simulacrum is the oblex, meaning the oblex occupies its space and the simulacrum's space simultaneously. The slimy tether is immune to damage, but it is severed if there is no opening at least 1 inch wide between the oblex's main body and the simulacrum. The simulacrum disappears if the tether is severed."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>3/day each: <em>confusion, dimension door, dominate person, fear, hallucinatory terrain, hold monster, hypnotic pattern, telekinesis</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The elder oblex makes two pseudopod attacks and uses Eat Memories."
      },
      {
        "Name": "Pseudopod",
        "Text": "Melee Weapon 7 to hit, reach 10 ft., one target. Hit:17 (4d6 + 3) bludgeoning damage plus 7 (2d6) psychic damage."
      },
      {
        "Name": "Eat Memories",
        "Text": "The oblex targets one creature it can see within 5 feet of it. The target must succeed on a 18 Wisdom saving throw or take 44 (8d10) psychic damage and become memory drained until it finishes a short or long rest or until it benefits from the greater restoration or heal spell. Constructs, oozes, plants, and undead succeed on the save automatically."
      }
    ],
    "environment": [
      "swamp",
      "underdark",
      "urban"
    ]
  },
  {
    "name": "Elder Tempest",
    "size": "G",
    "type": "elemental",
    "alignment": "Neutral",
    "ac": 19,
    "hp": 264,
    "speed": "Walk 0, Fly 120 (hover)",
    "str": 23,
    "dex": 28,
    "con": 23,
    "int": 2,
    "wis": 21,
    "cha": 18,
    "save": "Wis +12, Cha +11",
    "senses": "darkvision 60 ft.",
    "passive": 15,
    "resist": [
      {
        "resist": [
          "bludgeoning",
          "piercing",
          "slashing"
        ],
        "note": "from nonmagical attacks",
        "cond": true
      }
    ],
    "immune": "lightning, poison, thunder",
    "conditionImmune": "exhaustion, grappled, paralyzed, petrified, poisoned, prone, restrained, stunned",
    "cr": "23",
    "trait": [
      {
        "Name": "Air Form",
        "Text": "The tempest can enter a hostile creature's space and stop there. It can move through a space as narrow as 1 inch wide without squeezing."
      },
      {
        "Name": "Flyby",
        "Text": "The tempest doesn't provoke opportunity attacks when it flies out of an enemy's reach."
      },
      {
        "Name": "Legendary Resistance (3/Day)",
        "Text": "If the tempest fails a saving throw, it can choose to succeed instead."
      },
      {
        "Name": "Living Storm",
        "Text": "The tempest is always at the center of a storm 1d6 + 4 miles in diameter. Heavy precipitation in the form of either rain or snow falls there, causing the area to be lightly obscured. Heavy rain also extinguishes open flames and imposes disadvantage on Wisdom (Perception) checks that rely on hearing."
      },
      {
        "Name": "Siege Monster",
        "Text": "The tempest deals double damage to objects and structures."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The tempest makes two attacks with its thunderous slam."
      },
      {
        "Name": "Thunderous Slam",
        "Text": "Melee Weapon 16 to hit, reach 20 ft., one target. Hit:23 (4d6 + 9) thunder damage."
      },
      {
        "Name": "Lightning Storm (Recharge 6)",
        "Text": "All other creatures within 120 feet of the tempest must each make a 20 Dexterity saving throw, taking 27 (6d8) lightning damage on a failed save, or half as much damage on a successful one. If a target's saving throw fails by 5 or more, the creature is also stunned until the end of its next turn."
      }
    ],
    "legendary": [
      {
        "Name": "Move",
        "Text": "The tempest moves up to its speed."
      },
      {
        "Name": "Lightning Strike (Costs 2 Actions)",
        "Text": "The tempest can cause a bolt of lightning to strike a point on the ground anywhere under its storm. Each creature within 5 feet of that point must make a 20 Dexterity saving throw, taking 16 (3d10) lightning damage on a failed save, or half as much damage on a successful one."
      },
      {
        "Name": "Screaming Gale (Costs 3 Actions)",
        "Text": "The tempest releases a blast of thunder and wind in a line that is 1 mile long and 20 feet wide. Objects in that area take 22 (4d10) thunder damage. Each creature there must succeed on a 21 Dexterity saving throw or take 22 (4d10) thunder damage and be flung up to 60 feet in a direction away from the line. If a thrown target collides with an immovable object, such as a wall or floor, the target takes 3 (1d6) bludgeoning damage for every 10 feet it was thrown before impact. If the target would collide with another creature instead, that other creature must succeed on a 19 Dexterity saving throw or take the same damage and be knocked prone."
      }
    ],
    "environment": [
      "arctic",
      "coastal",
      "grassland",
      "hill",
      "mountain"
    ]
  },
  {
    "name": "Female Steeder",
    "size": "L",
    "type": "monstrosity",
    "alignment": "Unaligned",
    "ac": "14 natural armor",
    "hp": 30,
    "speed": "Walk 30, Climb 30",
    "str": 15,
    "dex": 16,
    "con": 14,
    "int": 2,
    "wis": 10,
    "cha": 3,
    "skill": "Stealth +7, Perception +4",
    "senses": "darkvision 120 ft.",
    "passive": 14,
    "cr": "1",
    "trait": [
      {
        "Name": "Spider Climb",
        "Text": "The steeder can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
      },
      {
        "Name": "Extraordinary Leap",
        "Text": "The distance of the steeder's long jumps is tripled; every foot of its walking speed that it spends on the jump allows it to move 3 feet."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:7 (1d8 + 3) piercing damage plus 9 (2d8) poison damage."
      },
      {
        "Name": "Sticky Leg",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one Medium or smaller creature. Hit:The target is stuck to the steeder's leg and is grappled until it escapes (escape 12). The steeder can have only one creature grappled at a time."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Fire Elemental Myrmidon",
    "size": "M",
    "type": "elemental",
    "alignment": "Neutral",
    "ac": "18 plate armor",
    "hp": 123,
    "speed": "Walk 40",
    "str": 13,
    "dex": 18,
    "con": 15,
    "int": 9,
    "wis": 10,
    "cha": 10,
    "senses": "darkvision 60 ft.",
    "passive": 10,
    "resist": [
      {
        "resist": [
          "bludgeoning",
          "piercing",
          "slashing"
        ],
        "note": "from nonmagical attacks",
        "cond": true
      }
    ],
    "immune": "fire, poison",
    "conditionImmune": "paralyzed, petrified, poisoned, prone",
    "languages": "Ignan, one language of its creator's choice",
    "cr": "7",
    "trait": [
      {
        "Name": "Illumination",
        "Text": "The myrmidon sheds bright light in a 20-foot radius and dim light in a 40-foot radius."
      },
      {
        "Name": "Magic Weapons",
        "Text": "The myrmidon's weapon attacks are magical."
      },
      {
        "Name": "Water Susceptibility",
        "Text": "For every 5 feet the myrmidon moves in 1 foot or more of water, it takes 2 (1d4) cold damage."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The myrmidon makes three scimitar attacks."
      },
      {
        "Name": "Scimitar",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:7 (1d6 + 4) slashing damage."
      },
      {
        "Name": "Fiery Strikes (Recharge 6)",
        "Text": "The myrmidon uses Multiattack. Each attack that hits deals an extra 5 (1d10) fire damage."
      }
    ]
  },
  {
    "name": "Fraz-Urb'luu",
    "isNamedCreature": true,
    "size": "L",
    "type": "fiend (demon)",
    "alignment": "Chaotic Evil",
    "ac": "18 natural armor",
    "hp": 337,
    "speed": "Walk 40, Fly 40",
    "str": 29,
    "dex": 12,
    "con": 25,
    "int": 26,
    "wis": 24,
    "cha": 26,
    "save": "Dex +8, Con +14, Int +15, Wis +14",
    "skill": "Deception +15, Perception +14, Stealth +8",
    "senses": "truesight 120 ft.",
    "passive": 24,
    "resist": [
      "cold",
      "fire",
      "lightning"
    ],
    "immune": "poison, bludgeoning, piercing, slashing from nonmagical attacks",
    "conditionImmune": "charmed, exhaustion, frightened, poisoned",
    "languages": "all, telepathy 120 ft.",
    "cr": {
      "cr": "23",
      "lair": "24"
    },
    "trait": [
      {
        "Name": "Legendary Resistance (3/Day)",
        "Text": "If Fraz-Urb'luu fails a saving throw, he can choose to succeed instead."
      },
      {
        "Name": "Magic Resistance",
        "Text": "Fraz-Urb'luu has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Magic Weapons",
        "Text": "Fraz-Urb'luu's weapon attacks are magical."
      },
      {
        "Name": "Undetectable",
        "Text": "Fraz-Urb'luu can't be targeted by divination magic, perceived through magical scrying sensors, or detected by abilities that sense demons or fiends."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day each: <em>mirage arcane, modify memory, project image</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "Fraz-Urb'luu makes three attacks: one with his bite and two with his fists."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 16 to hit, reach 10 ft., one target. Hit:19 (3d6 + 9) piercing damage."
      },
      {
        "Name": "Fist",
        "Text": "Melee Weapon 16 to hit, reach 10 ft., one target. Hit:22 (3d8 + 9) bludgeoning damage."
      }
    ],
    "legendary": [
      {
        "Name": "Tail",
        "Text": "Melee Weapon 16 to hit, reach 15 ft., one target. Hit:20 (2d10 + 9) bludgeoning damage. If the target is a Large or smaller creature, it is also grappled (escape 24). The grappled target is also restrained. Fraz-Urb'luu can grapple only one creature with his tail at a time."
      },
      {
        "Name": "Phantasmal Killer (Costs 2 Actions)",
        "Text": "Fraz-Urb'luu casts phantasmal killer, no concentration required."
      }
    ]
  },
  {
    "name": "Frost Salamander",
    "size": "H",
    "type": "elemental",
    "alignment": "Unaligned",
    "ac": "17 natural armor",
    "hp": 168,
    "speed": "Walk 60, Burrow 40, Climb 40",
    "str": 20,
    "dex": 12,
    "con": 18,
    "int": 7,
    "wis": 11,
    "cha": 7,
    "save": "Con +8, Wis +4",
    "skill": "Perception +4",
    "senses": "darkvision 60 ft., tremorsense 60 ft.",
    "passive": 14,
    "immune": "cold",
    "vulnerable": [
      "fire"
    ],
    "languages": "Primordial",
    "cr": "9",
    "trait": [
      {
        "Name": "Burning Fury",
        "Text": "When the salamander takes fire damage, its Freezing Breath automatically recharges."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The salamander makes five attacks: four with its claws and one with its bite."
      },
      {
        "Name": "Claws",
        "Text": "Melee Weapon 9 to hit, reach 10 ft., one target. Hit:8 (1d6 + 5) piercing damage."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 9 to hit, reach 15 ft., one target. Hit:9 (1d8 + 5) piercing damage and 5 (1d10) cold damage."
      },
      {
        "Name": "Freezing Breath (Recharge 6)",
        "Text": "The salamander exhales chill wind in a 60-foot cone. Each creature in that area must make a 17 Constitution saving throw, taking 44 (8d10) cold damage on a failed save, or half as much damage on a successful one."
      }
    ],
    "environment": [
      "arctic"
    ]
  },
  {
    "name": "Geryon",
    "isNamedCreature": true,
    "size": "H",
    "type": "fiend (devil)",
    "alignment": "Lawful Evil",
    "ac": "19 natural armor",
    "hp": 300,
    "speed": "Walk 30, Fly 50",
    "str": 29,
    "dex": 17,
    "con": 22,
    "int": 19,
    "wis": 16,
    "cha": 23,
    "save": "Dex +10, Con +13, Wis +10, Cha +13",
    "skill": "Deception +13, Intimidation +13, Perception +10",
    "senses": "truesight 120 ft.",
    "passive": 20,
    "resist": [
      {
        "resist": [
          "bludgeoning",
          "piercing",
          "slashing"
        ],
        "note": "from nonmagical attacks that aren't silvered",
        "cond": true
      }
    ],
    "immune": "cold, fire, poison",
    "conditionImmune": "charmed, exhaustion, frightened, poisoned",
    "languages": "all, telepathy 120 ft.",
    "cr": "22",
    "trait": [
      {
        "Name": "Legendary Resistance (3/Day)",
        "Text": "If Geryon fails a saving throw, he can choose to succeed instead."
      },
      {
        "Name": "Magic Resistance",
        "Text": "Geryon has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Magic Weapons",
        "Text": "Geryon's weapon attacks are magical."
      },
      {
        "Name": "Regeneration",
        "Text": "Geryon regains 20 hit points at the start of his turn. If he takes radiant damage, this trait doesn't function at the start of his next turn. Geryon dies only if he starts his turn with 0 hit points and doesn't regenerate."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day each: <em>divine word, symbol (pain only)</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "Geryon makes two attacks: one with his claws and one with his stinger."
      },
      {
        "Name": "Claws",
        "Text": "Melee Weapon 16 to hit, reach 15 ft., one target. Hit:23 (4d6 + 9) slashing damage. If the target is Large or smaller, it is grappled (24) and is restrained until the grapple ends. Geryon can grapple one creature at a time. If the target is already grappled by Geryon, the target takes an extra 27 (6d8) slashing damage."
      },
      {
        "Name": "Stinger",
        "Text": "Melee Weapon 16 to hit, reach 20 ft., one creature. Hit:14 (2d4 + 9) piercing damage, and the target must succeed on a 21 Constitution saving throw or take 13 (2d12) poison damage and become poisoned until it finishes a short or long rest. The target's hit point maximum is reduced by an amount equal to half the poison damage it takes. If its hit point maximum drops to 0, it dies. This reduction lasts until the poisoned condition is removed."
      },
      {
        "Name": "Teleport",
        "Text": "Geryon magically teleports, along with any equipment he is wearing and carrying, up to 120 feet to an unoccupied space he can see."
      }
    ],
    "legendary": [
      {
        "Name": "Infernal Glare",
        "Text": "Geryon targets one creature he can see within 60 feet of him. If the target can see Geryon, the target must succeed on a 23 Wisdom saving throw or become frightened of Geryon until the end of its next turn."
      },
      {
        "Name": "Swift Sting (Costs 2 Actions)",
        "Text": "Geryon attacks with his stinger."
      },
      {
        "Name": "Teleport",
        "Text": "Geryon uses his Teleport action."
      }
    ]
  },
  {
    "name": "Giff",
    "size": "M",
    "type": "humanoid",
    "alignment": "Lawful Neutral",
    "ac": "16 breastplate",
    "hp": 60,
    "speed": "Walk 30",
    "str": 18,
    "dex": 14,
    "con": 17,
    "int": 11,
    "wis": 12,
    "cha": 12,
    "passive": 11,
    "languages": "Common",
    "cr": "3",
    "trait": [
      {
        "Name": "Headfirst Charge",
        "Text": "The giff can try to knock a creature over; if the giff moves at least 20 feet in a straight line that ends within 5 feet of a Large or smaller creature, that creature must succeed on a 14 Strength saving throw or take 7 (2d6) bludgeoning damage and be knocked prone."
      },
      {
        "Name": "Firearms Knowledge",
        "Text": "The giff's mastery of its weapons enables it to ignore the loading property of muskets and pistols."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The giff makes two pistol attacks."
      },
      {
        "Name": "Longsword",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:8 (1d8 + 4) slashing damage, or 9 (1d10 + 4) slashing damage if used with two hands."
      },
      {
        "Name": "Musket",
        "Text": "Ranged Weapon 4 to hit, range 40/120 ft., one target. Hit:8 (1d12 + 2) piercing damage."
      },
      {
        "Name": "Pistol",
        "Text": "Ranged Weapon 4 to hit, range 30/90 ft., one target. Hit:7 (1d10 + 2) piercing damage."
      },
      {
        "Name": "Fragmentation Grenade (1/Day)",
        "Text": "The giff throws a grenade up to 60 feet. Each creature within 20 feet of the grenade's detonation must make a 15 Dexterity saving throw, taking 17 (5d6) piercing damage on a failed save, or half as much damage on a successful one."
      }
    ],
    "environment": [
      "urban"
    ]
  },
  {
    "name": "Githyanki Gish",
    "size": "M",
    "type": "humanoid (gith)",
    "alignment": "Lawful Evil",
    "ac": "17 half plate armor",
    "hp": 123,
    "speed": "Walk 30",
    "str": 17,
    "dex": 15,
    "con": 14,
    "int": 16,
    "wis": 15,
    "cha": 16,
    "save": "Con +6, Int +7, Wis +6",
    "skill": "Insight +6, Perception +6, Stealth +6",
    "passive": 16,
    "languages": "Gith",
    "cr": "10",
    "trait": [
      {
        "Name": "War Magic",
        "Text": "When the githyanki uses its action to cast a spell, it can make one weapon attack as a bonus action."
      },
      {
        "Name": "Innate Spellcasting (Psionics)",
        "Text": "<br>1/day each: <em>plane shift, telekinesis</em>"
      },
      {
        "Name": "Spellcasting",
        "Text": "The githyanki is an 8th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 15, +7 to hit with spell attacks). The githyanki has the following wizard spells prepared:<br><br>Cantrips (at will): <em>blade ward, light, message, true strike</em><br>1st (1 slots): <em>expeditious retreat, magic missile, sleep, thunderwave</em><br>2nd (2 slots): <em>blur, invisibility, levitate</em><br>3rd (3 slots): <em>counterspell, fireball, haste</em><br>4th (4 slots): <em>dimension door</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The githyanki makes two longsword attacks."
      },
      {
        "Name": "Longsword",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:7 (1d8 + 3) slashing damage plus 18 (4d8) psychic damage, or 8 (1d10 + 3) slashing damage plus 18 (4d8) psychic damage if used with two hands."
      }
    ],
    "environment": [
      "desert",
      "mountain",
      "urban"
    ]
  },
  {
    "name": "Githyanki Kith'rak",
    "size": "M",
    "type": "humanoid (gith)",
    "alignment": "Lawful Evil",
    "ac": "18 plate armor",
    "hp": 180,
    "speed": "Walk 30",
    "str": 18,
    "dex": 16,
    "con": 17,
    "int": 16,
    "wis": 15,
    "cha": 17,
    "save": "Con +7, Int +7, Wis +6",
    "skill": "Intimidation +7, Perception +6",
    "passive": 16,
    "languages": "Gith",
    "cr": "12",
    "trait": [
      {
        "Name": "Rally the Troops",
        "Text": "As a bonus action, the githyanki can magically end the charmed and frightened conditions on itself and each creature of its choice that it can see within 30 feet of it."
      },
      {
        "Name": "Innate Spellcasting (Psionics)",
        "Text": "<br>1/day each: <em>plane shift, telekinesis</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The githyanki makes three greatsword attacks."
      },
      {
        "Name": "Greatsword",
        "Text": "Melee Weapon 8 to hit, reach 5 ft., one target. Hit:11 (2d6 + 4) slashing damage plus 17 (5d6) psychic damage."
      }
    ],
    "reaction": [
      {
        "Name": "Parry",
        "Text": "The githyanki adds 4 to its AC against one melee attack that would hit it. To do so, the githyanki must see the attacker and be wielding a melee weapon."
      }
    ],
    "environment": [
      "desert",
      "mountain",
      "urban"
    ]
  },
  {
    "name": "Githyanki Supreme Commander",
    "size": "M",
    "type": "humanoid (gith)",
    "alignment": "Lawful Evil",
    "ac": "18 plate armor",
    "hp": 187,
    "speed": "Walk 30",
    "str": 19,
    "dex": 17,
    "con": 18,
    "int": 16,
    "wis": 16,
    "cha": 18,
    "save": "Con +9, Int +8, Wis +8",
    "skill": "Insight +8, Intimidation +9, Perception +8",
    "passive": 18,
    "languages": "Gith",
    "cr": "14",
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The githyanki makes two greatsword attacks."
      },
      {
        "Name": "Silver Greatsword",
        "Text": "Melee Weapon 12 to hit, reach 5 ft., one target. Hit:14 (2d6 + 7) slashing damage plus 17 (5d6) psychic damage. On a critical hit against a target in an astral body (as with the astral projection spell), the githyanki can cut the silvery cord that tethers the target to its material body, instead of dealing damage."
      }
    ],
    "reaction": [
      {
        "Name": "Parry",
        "Text": "The githyanki adds 5 to its AC against one melee attack that would hit it. To do so, the githyanki must see the attacker and be wielding a melee weapon."
      }
    ],
    "legendary": [
      {
        "Name": "Attack (2 Actions)",
        "Text": "The githyanki makes a greatsword attack."
      },
      {
        "Name": "Command Ally",
        "Text": "The githyanki targets one ally it can see within 30 feet of it. If the target can see or hear the githyanki, the target can make one melee weapon attack using its reaction and has advantage on the attack roll."
      },
      {
        "Name": "Teleport",
        "Text": "The githyanki magically teleports, along with any equipment it is wearing and carrying, to an unoccupied space it can see within 30 feet of it. It also becomes insubstantial until the start of its next turn. While insubstantial, it can move through other creatures and objects as if they were difficult terrain. If it ends its turn inside an object, it takes 16 (3d10) force damage and is moved to the nearest unoccupied space."
      }
    ],
    "environment": [
      "desert",
      "mountain",
      "urban"
    ],
    "trait": [
      {
        "Name": "Innate Spellcasting (Psionics)",
        "Text": "<br>1/day each: <em>Bigby's hand, mass suggestion, plane shift, telekinesis</em>"
      }
    ]
  },
  {
    "name": "Githzerai Anarch",
    "size": "M",
    "type": "humanoid (gith)",
    "alignment": "Lawful Neutral",
    "ac": 20,
    "hp": 144,
    "speed": "Walk 30, Fly 40 (hover)",
    "str": 16,
    "dex": 21,
    "con": 18,
    "int": 18,
    "wis": 20,
    "cha": 14,
    "save": "Str +8, Dex +10, Int +9, Wis +10",
    "skill": "Arcana +9, Insight +10, Perception +10",
    "passive": 20,
    "languages": "Gith",
    "cr": "16",
    "trait": [
      {
        "Name": "Psychic Defense",
        "Text": "While the anarch is wearing no armor and wielding no shield, its AC includes its Wisdom modifier."
      },
      {
        "Name": "Innate Spellcasting (Psionics)",
        "Text": "<br>1/day each: <em>globe of invulnerability, plane shift, teleportation circle, wall of force</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The anarch makes three unarmed strikes."
      },
      {
        "Name": "Unarmed Strike",
        "Text": "Melee Weapon 10 to hit, reach 5 ft., one target. Hit:14 (2d8 + 5) bludgeoning damage plus 18 (4d8) psychic damage."
      }
    ],
    "legendary": [
      {
        "Name": "Strike",
        "Text": "The anarch makes one unarmed strike."
      },
      {
        "Name": "Teleport",
        "Text": "The anarch magically teleports, along with any equipment it is wearing and carrying, to an unoccupied space it can see within 30 feet of it."
      },
      {
        "Name": "Change Gravity (Costs 3 Actions)",
        "Text": "The anarch casts the reverse gravity spell. The spell has the normal effect, except that the anarch can orient the area in any direction and creatures and objects fall toward the end of the area."
      }
    ]
  },
  {
    "name": "Githzerai Enlightened",
    "size": "M",
    "type": "humanoid (gith)",
    "alignment": "Lawful Neutral",
    "ac": 18,
    "hp": 112,
    "speed": "Walk 30",
    "str": 14,
    "dex": 19,
    "con": 16,
    "int": 17,
    "wis": 19,
    "cha": 13,
    "save": "Str +6, Dex +8, Int +7, Wis +8",
    "skill": "Arcana +7, Insight +8, Perception +8",
    "passive": 18,
    "languages": "Gith",
    "cr": "10",
    "trait": [
      {
        "Name": "Psychic Defense",
        "Text": "While the githzerai is wearing no armor and wielding no shield, its AC includes its Wisdom modifier."
      },
      {
        "Name": "Innate Spellcasting (Psionics)",
        "Text": "<br>1/day each: <em>haste, plane shift, teleport</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The githzerai makes three unarmed strikes."
      },
      {
        "Name": "Unarmed Strike",
        "Text": "Melee Weapon 8 to hit, reach 5 ft., one target. Hit:13 (2d8 + 4) bludgeoning damage plus 13 (3d8) psychic damage."
      },
      {
        "Name": "Temporal Strike (Recharge 6)",
        "Text": "Melee Weapon 8 to hit, reach 5 ft., one creature. Hit:13 (2d8 + 4) bludgeoning damage plus 52 (8d12) psychic damage. The target must succeed on a 16 Wisdom saving throw or move 1 round forward in time. A target moved forward in time vanishes for the duration. When the effect ends, the target reappears in the space it left or in an unoccupied space nearest to that space if it's occupied."
      }
    ],
    "environment": [
      "desert",
      "mountain",
      "urban"
    ]
  },
  {
    "name": "Gloom Weaver",
    "size": "M",
    "type": "humanoid (elf)",
    "alignment": "Neutral",
    "ac": 14,
    "hp": 104,
    "speed": "Walk 30",
    "str": 11,
    "dex": 18,
    "con": 14,
    "int": 15,
    "wis": 12,
    "cha": 18,
    "save": "Dex +8, Con +6",
    "senses": "darkvision 60 ft.",
    "passive": 11,
    "immune": "necrotic",
    "conditionImmune": "charmed, exhaustion",
    "languages": "Common, Elvish",
    "cr": "9",
    "trait": [
      {
        "Name": "Burden of Time",
        "Text": "Beasts and humanoids, other than shadar-kai, have disadvantage on saving throws while within 10 feet of the gloom weaver."
      },
      {
        "Name": "Fey Ancestry",
        "Text": "The gloom weaver has advantage on saving throws against being charmed, and magic can't put it to sleep."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day each: <em>arcane gate, bane, compulsion, confusion, true seeing</em>"
      },
      {
        "Name": "Spellcasting",
        "Text": "The gloom weaver is a 12th-level spellcaster. Its spellcasting ability is Charisma (spell save DC 16, +8 to hit with spell attacks). It regains its expended spell slots when it finishes a short or long rest. It knows the following warlock spells:<br><br>Cantrips (at will): <em>minor illusion, prestidigitation, chill touch, eldritch blast*</em><br>5th (5 slots): <em>armor of Agathys, blight, darkness, dream, invisibility, fear, hypnotic pattern, major image, contact other plane, vampiric touch, witch bolt</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The gloom weaver makes two spear attacks and casts one spell that takes 1 action to cast."
      },
      {
        "Name": "Shadow Spear",
        "Text": "Melee Weapon 8 to hit, reach 5 ft., one target. Hit:7 (1d6 + 4) piercing damage plus 26 (4d12) necrotic damage, or 8 (1d8 + 4) piercing damage plus 26 (4d12) necrotic damage if used with two hands."
      }
    ],
    "reaction": [
      {
        "Name": "Misty Escape (Recharges after a Short or Long Rest)",
        "Text": "When the gloom weaver takes damage, it turns invisible and teleports up to 60 feet to an unoccupied space it can see. It remains invisible until the start of its next turn or until it attacks or casts a spell."
      }
    ],
    "environment": [
      "underdark",
      "urban"
    ]
  },
  {
    "name": "Gray Render",
    "size": "L",
    "type": "monstrosity",
    "alignment": "Chaotic Neutral",
    "ac": "19 natural armor",
    "hp": 189,
    "speed": "Walk 30",
    "str": 19,
    "dex": 13,
    "con": 20,
    "int": 3,
    "wis": 6,
    "cha": 8,
    "save": "Str +8, Con +9",
    "skill": "Perception +2",
    "senses": "darkvision 60 ft.",
    "passive": 12,
    "cr": "12",
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The gray render makes three attacks: one with its bite and two with its claws."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 8 to hit, reach 5 ft., one target. Hit:17 (2d12 + 4) piercing damage. If the target is Medium or smaller, the target must succeed on a 16 Strength saving throw or be knocked prone."
      },
      {
        "Name": "Claws",
        "Text": "Melee Weapon 8 to hit, reach 10 ft., one target. Hit:13 (2d8 + 4) slashing damage. If the target is prone an additional 7 (2d6) bludgeoning damage is dealt to the target."
      }
    ],
    "reaction": [
      {
        "Name": "Bloody Rampage",
        "Text": "When the gray render takes damage, it makes one attack with its claws against a random creature within its reach, other than its master."
      }
    ],
    "environment": [
      "forest",
      "hill"
    ]
  },
  {
    "name": "Graz'zt",
    "isNamedCreature": true,
    "size": "L",
    "type": "fiend (demon, shapechanger)",
    "alignment": "Chaotic Evil",
    "ac": "20 natural armor",
    "hp": 346,
    "speed": "Walk 40",
    "str": 22,
    "dex": 15,
    "con": 21,
    "int": 23,
    "wis": 21,
    "cha": 26,
    "save": "Dex +9, Con +12, Wis +12",
    "skill": "Deception +15, Insight +12, Perception +12, Persuasion +15",
    "senses": "truesight 120 ft.",
    "passive": 22,
    "resist": [
      "cold",
      "fire",
      "lightning"
    ],
    "immune": "poison, bludgeoning, piercing, slashing from nonmagical attacks",
    "conditionImmune": "charmed, exhaustion, frightened, poisoned",
    "languages": "all, telepathy 120 ft.",
    "cr": "24",
    "trait": [
      {
        "Name": "Shapechanger",
        "Text": "Graz'zt can use his action to polymorph into a form that resembles a Medium humanoid, or back into his true form. Aside from his size, his statistics are the same in each form. Any equipment he is wearing or carrying isn't transformed."
      },
      {
        "Name": "Legendary Resistance (3/Day)",
        "Text": "If Graz'zt fails a saving throw, he can choose to succeed instead."
      },
      {
        "Name": "Magic Resistance",
        "Text": "Graz'zt has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Magic Weapons",
        "Text": "Graz'zt's weapon attacks are magical."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day each: <em>dominate monster, greater invisibility</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "Graz'zt attacks twice with Wave of Sorrow."
      },
      {
        "Name": "Wave of Sorrow (Greatsword)",
        "Text": "Melee Weapon 13 to hit, reach 10 ft., one target. Hit:20 (4d6 + 6) slashing damage plus 10 (3d6) acid damage."
      },
      {
        "Name": "Teleport",
        "Text": "Graz'zt magically teleports, along with any equipment he is wearing or carrying, up to 120 feet to an unoccupied space he can see."
      }
    ],
    "legendary": [
      {
        "Name": "Attack",
        "Text": "Graz'zt attacks once with Wave of Sorrow."
      },
      {
        "Name": "Dance, My Puppet",
        "Text": "One creature charmed by Graz'zt that Graz'zt can see must use its reaction to move up to its speed as Graz'zt directs."
      },
      {
        "Name": "Sow Discord",
        "Text": "Graz'zt casts crown of madness or dissonant whispers."
      },
      {
        "Name": "Teleport",
        "Text": "Graz'zt uses his Teleport action."
      }
    ]
  },
  {
    "name": "Green Abishai",
    "size": "M",
    "type": "fiend (devil)",
    "alignment": "Lawful Evil",
    "ac": "18 natural armor",
    "hp": 187,
    "speed": "Walk 30, Fly 40",
    "str": 12,
    "dex": 17,
    "con": 16,
    "int": 17,
    "wis": 12,
    "cha": 19,
    "save": "Int +8, Cha +9",
    "skill": "Deception +9, Insight +6, Perception +6, Persuasion +9",
    "senses": "darkvision 120 ft.",
    "passive": 16,
    "resist": [
      "cold",
      {
        "resist": [
          "bludgeoning",
          "piercing",
          "slashing"
        ],
        "note": "from nonmagical attacks that aren't silvered",
        "cond": true
      }
    ],
    "immune": "fire, poison",
    "conditionImmune": "poisoned",
    "languages": "Draconic, Infernal, telepathy 120 ft.",
    "cr": "15",
    "trait": [
      {
        "Name": "Devil's Sight",
        "Text": "Magical darkness doesn't impede the abishai's darkvision."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The abishai has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Magic Weapons",
        "Text": "The abishai's weapon attacks are magical."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day each: <em>confusion, dominate person, mass suggestion</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The abishai makes two attacks, one with its claws and one with its longsword, or it casts one spell from its Innate Spellcasting trait and makes one claw attack."
      },
      {
        "Name": "Longsword",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:5 (1d8 + 1) slashing damage, or 6 (1d10 + 1) slashing damage if used with two hands."
      },
      {
        "Name": "Claws",
        "Text": "Melee Weapon 8 to hit, reach 5 ft., one target. Hit:12 (2d8 + 3) piercing damage. If the target is a creature, it must succeed on a 16 Constitution saving throw or take 11 (2d10) poison damage and become poisoned for 1 minute. The poisoned target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      }
    ],
    "environment": [
      "urban"
    ]
  },
  {
    "name": "Hellfire Engine",
    "size": "H",
    "type": "construct",
    "alignment": "Lawful Evil",
    "ac": "18 natural armor",
    "hp": 216,
    "speed": "Walk 40",
    "str": 20,
    "dex": 16,
    "con": 24,
    "int": 2,
    "wis": 10,
    "cha": 1,
    "save": "Dex +8, Wis +5, Cha +0",
    "senses": "darkvision 120 ft.",
    "passive": 10,
    "resist": [
      "cold",
      "psychic",
      {
        "resist": [
          "bludgeoning",
          "piercing",
          "slashing"
        ],
        "note": "from nonmagical attacks that aren't silvered",
        "cond": true
      }
    ],
    "immune": "fire, poison",
    "conditionImmune": "charmed, deafened, exhaustion, frightened, paralyzed, poisoned, unconscious",
    "languages": "understands Infernal but can't speak",
    "cr": "16",
    "trait": [
      {
        "Name": "Immutable Form",
        "Text": "The hellfire engine is immune to any spell or effect that would alter its form."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The hellfire engine has advantage on saving throws against spells and other magical effects."
      }
    ],
    "action": [
      {
        "Name": "Flesh-Crushing Stride",
        "Text": "The hellfire engine moves up to its speed in a straight line. During this move, it can enter Large or smaller creatures' spaces. A creature whose space the hellfire engine enters must make a 18 Dexterity saving throw. On a successful save, the creature is pushed to the nearest space out of the hellfire engine's path. On a failed save, the creature falls prone and takes 28 (8d6) bludgeoning damage.<br>If the hellfire engine remains in the prone creature's space, the creature is also restrained until it's no longer in the same space as the hellfire engine. While restrained in this way, the creature, or another creature within 5 feet of it, can make a 18 Strength check. On a success, the creature is shunted to an unoccupied space of its choice within 5 feet of the hellfire engine and is no longer restrained."
      },
      {
        "Name": "Hellfire Weapons",
        "Text": "The hellfire engine uses one of the following options:"
      }
    ]
  },
  {
    "name": "Howler",
    "size": "L",
    "type": "fiend",
    "alignment": "Chaotic Evil",
    "ac": "16 natural armor",
    "hp": 90,
    "speed": "Walk 40",
    "str": 17,
    "dex": 16,
    "con": 15,
    "int": 5,
    "wis": 20,
    "cha": 6,
    "skill": "Perception +8",
    "senses": "darkvision 60 ft.",
    "passive": 15,
    "resist": [
      "cold",
      "fire",
      "lightning",
      {
        "resist": [
          "bludgeoning",
          "piercing",
          "slashing"
        ],
        "note": "from nonmagical attacks",
        "cond": true
      }
    ],
    "conditionImmune": "frightened",
    "languages": "understands Abyssal but can't speak",
    "cr": "8",
    "trait": [
      {
        "Name": "Pack Tactics",
        "Text": "A howler has advantage on attack rolls against a creature if at least one of the howler's allies is within 5 feet of the creature and the ally isn't incapacitated."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The howler makes two bite attacks."
      },
      {
        "Name": "Rending Bite",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:10 (2d6 + 3) piercing damage. If the target is frightened it takes an additional 22 (4d10) psychic damage. This attack ignores damage resistance."
      },
      {
        "Name": "Mind-Breaking Howl (Recharge 6)",
        "Text": "The howler emits a keening howl in a 60-foot cone. Each creature in that area that isn't deafened must succeed on a 16 Wisdom saving throw or be frightened until the end of the howler's next turn. While a creature is frightened in this way, its speed is halved, and it is incapacitated. A target that successfully saves is immune to the Mind-Breaking Howl of all howlers for the next 24 hours."
      }
    ],
    "environment": [
      "desert",
      "grassland",
      "hill",
      "underdark"
    ]
  },
  {
    "name": "Hutijin",
    "isNamedCreature": true,
    "size": "L",
    "type": "fiend (devil)",
    "alignment": "Lawful Evil",
    "ac": "19 natural armor",
    "hp": 200,
    "speed": "Walk 30, Fly 60",
    "str": 27,
    "dex": 15,
    "con": 25,
    "int": 23,
    "wis": 19,
    "cha": 25,
    "save": "Dex +9, Con +14, Wis +11",
    "skill": "Intimidation +14, Perception +11",
    "senses": "truesight 120 ft.",
    "passive": 21,
    "resist": [
      "cold",
      {
        "resist": [
          "bludgeoning",
          "piercing",
          "slashing"
        ],
        "note": "from nonmagical attacks that aren't silvered",
        "cond": true
      }
    ],
    "immune": "fire, poison",
    "conditionImmune": "charmed, exhaustion, frightened, poisoned",
    "languages": "all, telepathy 120 ft.",
    "cr": "21",
    "trait": [
      {
        "Name": "Infernal Despair",
        "Text": "Each creature within 15 feet of Hutijin that isn't a devil makes saving throws with disadvantage."
      },
      {
        "Name": "Legendary Resistance (3/Day)",
        "Text": "If Hutijin fails a saving throw, he can choose to succeed instead."
      },
      {
        "Name": "Magic Resistance",
        "Text": "Hutijin has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Magic Weapons",
        "Text": "Hutijin's weapon attacks are magical."
      },
      {
        "Name": "Regeneration",
        "Text": "Hutijin regains 20 hit points at the start of his turn. If he takes radiant damage, this trait doesn't function at the start of his next turn. Hutijin dies only if he starts his turn with 0 hit points and doesn't regenerate."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day each: <em>heal, symbol (hopelessness only)</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "Hutijin makes four attacks: one with his bite, one with his claw, one with his mace, and one with his tail."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 15 to hit, reach 5 ft., one target. Hit:15 (2d6 + 8) piercing damage. The target must succeed on a 22 Constitution saving throw or become poisoned. While poisoned in this way, the target can't regain hit points, and it takes 10 (3d6) poison damage at the start of each of its turns. The poisoned target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 15 to hit, reach 10 ft., one target. Hit:17 (2d8 + 8) slashing damage."
      },
      {
        "Name": "Mace",
        "Text": "Melee Weapon 15 to hit, reach 5 ft., one target. Hit:15 (2d6 + 8) bludgeoning damage."
      },
      {
        "Name": "Tail",
        "Text": "Melee Weapon 15 to hit, reach 10 ft., one target. Hit:19 (2d10 + 8) bludgeoning damage."
      },
      {
        "Name": "Teleport",
        "Text": "Hutijin magically teleports, along with any equipment he is wearing and carrying, up to 120 feet to an unoccupied space he can see."
      }
    ],
    "reaction": [
      {
        "Name": "Fearful Voice (Recharge 5-6)",
        "Text": "In response to taking damage, Hutijin utters a dreadful word of power. Each creature within 30 feet of him that isn't a devil must succeed on a 22 Wisdom saving throw or become frightened of him for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. A creature that saves against this effect is immune to Hutijin's Fearful Voice for 24 hours."
      }
    ],
    "legendary": [
      {
        "Name": "Attack",
        "Text": "Hutijin attacks once with his mace."
      },
      {
        "Name": "Lightning Storm (Costs 2 Actions)",
        "Text": "Hutijin releases lightning in a 20-foot radius. All other creatures in that area must each make a 22 Dexterity saving throw, taking 18 (4d8) lightning damage on a failed save, or half as much damage on a successful one."
      },
      {
        "Name": "Teleport",
        "Text": "Hutijin uses his Teleport action."
      }
    ]
  },
  {
    "name": "Hydroloth",
    "size": "M",
    "type": "fiend (yugoloth)",
    "alignment": "Neutral Evil",
    "ac": 15,
    "hp": 135,
    "speed": "Walk 20, Swim 40",
    "str": 12,
    "dex": 21,
    "con": 16,
    "int": 19,
    "wis": 10,
    "cha": 14,
    "skill": "Insight +4, Perception +4",
    "senses": "blindsight 60 ft., darkvision 60 ft.",
    "passive": 14,
    "resist": [
      "cold",
      "lightning",
      {
        "resist": [
          "bludgeoning",
          "piercing",
          "slashing"
        ],
        "note": "from nonmagical attacks",
        "cond": true
      }
    ],
    "immune": "acid, poison",
    "vulnerable": [
      "fire"
    ],
    "conditionImmune": "poisoned",
    "languages": "Abyssal, Infernal, telepathy 60 ft.",
    "cr": "9",
    "trait": [
      {
        "Name": "Amphibious",
        "Text": "The hydroloth can breathe air and water."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The hydroloth has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Magic Weapons",
        "Text": "The hydroloth's weapon attacks are magical."
      },
      {
        "Name": "Secure Memory",
        "Text": "The hydroloth is immune to the waters of the River Styx as well as any effect that would steal or modify its memories or detect or read its thoughts."
      },
      {
        "Name": "Watery Advantage",
        "Text": "While submerged in liquid, the hydroloth has advantage on attack rolls."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>3/day each: <em>control water, crown of madness, fear, phantasmal killer, suggestion</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The hydroloth makes two melee attacks. In place of one of these attacks, it can cast one spell that takes 1 action to cast."
      },
      {
        "Name": "Claws",
        "Text": "Melee Weapon 9 to hit, reach 5 ft., one target. Hit:14 (2d8 + 5) slashing damage."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 9 to hit, reach 5 ft., one target. Hit:16 (2d10 + 5) piercing damage."
      },
      {
        "Name": "Steal Memory (1/Day)",
        "Text": "The hydroloth targets one creature it can see within 60 feet of it. The target takes 4d6 psychic damage, and it must make a 16 Intelligence saving throw. On a successful save, the target becomes immune to this hydroloth's Steal Memory for 24 hours. On a failed save, the target loses all proficiencies, it can't cast spells, it can't understand language, and if its Intelligence and Charisma scores are higher than 5, they become 5. Each time the target finishes a long rest, it can repeat the saving throw, ending the effect on itself on a success. A greater restoration or remove curse spell cast on the target ends this effect early."
      },
      {
        "Name": "Teleport",
        "Text": "The hydroloth magically teleports, along with any equipment it is wearing or carrying, up to 60 feet to an unoccupied space it can see."
      }
    ]
  },
  {
    "name": "Iron Cobra",
    "size": "M",
    "type": "construct",
    "alignment": "Unaligned",
    "ac": 13,
    "hp": 45,
    "speed": "Walk 30",
    "str": 12,
    "dex": 16,
    "con": 14,
    "int": 3,
    "wis": 10,
    "cha": 1,
    "skill": "Stealth +7",
    "senses": "darkvision 60 ft.",
    "passive": 10,
    "immune": "poison, bludgeoning, piercing, slashing from nonmagical attacks that aren't adamantine",
    "conditionImmune": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned",
    "languages": "understands one language of its creator but can't speak",
    "cr": "4",
    "trait": [
      {
        "Name": "Magic Resistance",
        "Text": "The iron cobra has advantage on saving throws against spells and other magical effects."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:6 (1d6 + 3) piercing damage. If the target is a creature, it must succeed on a 13 Constitution saving throw or suffer one random poison effect:<br>1. Poison Damage: The target takes 13 (3d8) poison damage.<br>2. Confusion: On its next turn, the target must use its action to make one weapon attack against a random creature it can see within 30 feet of it, using whatever weapon it has in hand and moving beforehand if necessary to get in range. If it's holding no weapon, it makes an unarmed strike. If no creature is visible within 30 feet, it takes the Dash action, moving toward the nearest creature.<br>3. Paralysis: The target is paralyzed until the end of its next turn."
      }
    ],
    "environment": [
      "forest",
      "grassland",
      "hill",
      "mountain"
    ]
  },
  {
    "name": "Juiblex",
    "isNamedCreature": true,
    "size": "H",
    "type": "fiend (demon)",
    "alignment": "Chaotic Evil",
    "ac": "18 natural armor",
    "hp": 350,
    "speed": "Walk 30",
    "str": 24,
    "dex": 10,
    "con": 23,
    "int": 20,
    "wis": 20,
    "cha": 16,
    "save": "Dex +7, Con +13, Wis +12",
    "skill": "Perception +12",
    "senses": "truesight 120 ft.",
    "passive": 22,
    "resist": [
      "cold",
      "fire",
      "lightning"
    ],
    "immune": "poison, bludgeoning, piercing, slashing from nonmagical attacks",
    "conditionImmune": "blinded, charmed, deafened, exhaustion, frightened, grappled, paralyzed, petrified, poisoned, prone, restrained, stunned, unconscious",
    "languages": "all, telepathy 120 ft.",
    "cr": "23",
    "trait": [
      {
        "Name": "Foul",
        "Text": "Any creature, other than an ooze, that starts its turn within 10 feet of Juiblex must succeed on a 21 Constitution saving throw or be poisoned until the start of the creature's next turn."
      },
      {
        "Name": "Legendary Resistance (3/Day)",
        "Text": "If Juiblex fails a saving throw, it can choose to succeed instead."
      },
      {
        "Name": "Magic Resistance",
        "Text": "Juiblex has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Magic Weapons",
        "Text": "Juiblex's weapon attacks are magical."
      },
      {
        "Name": "Regeneration",
        "Text": "Juiblex regains 20 hit points at the start of its turn. If it takes fire or radiant damage, this trait doesn't function at the start of its next turn. Juiblex dies only if it starts its turn with 0 hit points and doesn't regenerate."
      },
      {
        "Name": "Spider Climb",
        "Text": "Juiblex can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>3/day each: <em>blight, contagion, gaseous form</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "Juiblex makes three acid lash attacks."
      },
      {
        "Name": "Acid Lash",
        "Text": "Melee Weapon 14 to hit, reach 10 ft., one target. Hit:21 (4d6 + 7) acid damage. Any creature killed by this attack is drawn into Juiblex's body, and the corpse is obliterated after 1 minute."
      },
      {
        "Name": "Eject Slime (Recharge 5-6)",
        "Text": "Juiblex spews out a corrosive slime, targeting one creature that it can see within 60 feet of it. The target must make a 21 Dexterity saving throw. On a failure, the target takes 55 (10d10) acid damage. Unless the target avoids taking any of this damage, any metal armor worn by the target takes a permanent −1 penalty to the AC it offers, and any metal weapon it is carrying or wearing takes a permanent −1 penalty to damage rolls. The penalty worsens each time a target is subjected to this effect. If the penalty on an object drops to −5, the object is destroyed."
      }
    ],
    "legendary": [
      {
        "Name": "Acid Splash",
        "Text": "Juiblex casts acid splash."
      },
      {
        "Name": "Attack",
        "Text": "Juiblex makes one acid lash attack."
      },
      {
        "Name": "Corrupting Touch (Costs 2 Actions)",
        "Text": "Melee Weapon 14 to hit, reach 10 ft., one creature. Hit:21 (4d6 + 7) poison damage, and the target is slimed. Until the slime is scraped off with an action, the target is poisoned, and any creature, other than an ooze, is poisoned while within 10 feet of the target."
      }
    ]
  },
  {
    "name": "Kruthik Hive Lord",
    "size": "L",
    "type": "monstrosity",
    "alignment": "Unaligned",
    "ac": "20 natural armor",
    "hp": 102,
    "speed": "Walk 40, Burrow 20, Climb 40",
    "str": 19,
    "dex": 16,
    "con": 17,
    "int": 10,
    "wis": 14,
    "cha": 10,
    "senses": "darkvision 60 ft., tremorsense 60 ft.",
    "passive": 12,
    "languages": "Kruthik",
    "cr": "5",
    "trait": [
      {
        "Name": "Keen Smell",
        "Text": "The kruthik has advantage on Wisdom (Perception) checks that rely on smell."
      },
      {
        "Name": "Pack Tactics",
        "Text": "The kruthik has advantage on an attack roll against a creature if at least one of the kruthik's allies is within 5 feet of the creature and the ally isn't incapacitated."
      },
      {
        "Name": "Tunneler",
        "Text": "The kruthik can burrow through solid rock at half its burrowing speed and leaves a 10-foot-diameter tunnel in its wake."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The kruthik makes two stab attacks or two spike attacks."
      },
      {
        "Name": "Stab",
        "Text": "Melee Weapon 7 to hit, reach 10 ft., one target. Hit:9 (1d10 + 4) piercing damage."
      },
      {
        "Name": "Spike",
        "Text": "Ranged Weapon 6 to hit, range 30/120 ft., one target. Hit:7 (1d6 + 4) piercing damage."
      },
      {
        "Name": "Acid Spray (Recharge 5-6)",
        "Text": "The kruthik sprays acid in a 15-foot cone. Each creature in that area must make a 14 Dexterity saving throw, taking 22 (4d10) acid damage on a failed save, or half as much damage on a successful one."
      }
    ],
    "environment": [
      "desert",
      "mountain",
      "underdark"
    ]
  },
  {
    "name": "Leviathan",
    "size": "G",
    "type": "elemental",
    "alignment": "Neutral",
    "ac": 17,
    "hp": 328,
    "speed": "Walk 40, Swim 120",
    "str": 30,
    "dex": 24,
    "con": 30,
    "int": 2,
    "wis": 18,
    "cha": 17,
    "save": "Wis +10, Cha +9",
    "senses": "darkvision 60 ft.",
    "passive": 14,
    "resist": [
      {
        "resist": [
          "bludgeoning",
          "piercing",
          "slashing"
        ],
        "note": "from nonmagical attacks",
        "cond": true
      }
    ],
    "immune": "acid, poison",
    "conditionImmune": "exhaustion, grappled, paralyzed, petrified, poisoned, prone, restrained, stunned",
    "cr": "20",
    "trait": [
      {
        "Name": "Legendary Resistance (3/Day)",
        "Text": "If the leviathan fails a saving throw, it can choose to succeed instead."
      },
      {
        "Name": "Partial Freeze",
        "Text": "If the leviathan takes 50 cold damage or more during a single turn, the leviathan partially freezes; until the end of its next turn, its speeds are reduced to 20 feet, and it makes attack rolls with disadvantage."
      },
      {
        "Name": "Siege Monster",
        "Text": "The leviathan deals double damage to objects and structures (included in Tidal Wave)."
      },
      {
        "Name": "Water Form",
        "Text": "The leviathan can enter a hostile creature's space and stop there. It can move through a space as narrow as 1 inch wide without squeezing."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The leviathan makes two attacks: one with its slam and one with its tail."
      },
      {
        "Name": "Slam",
        "Text": "Melee Weapon 16 to hit, reach 20 ft., one target. Hit:15 (1d10 + 10) bludgeoning damage plus 5 (1d10) acid damage."
      },
      {
        "Name": "Tail",
        "Text": "Melee Weapon 16 to hit, reach 20 ft., one target. Hit:16 (1d12 + 10) bludgeoning damage plus 6 (1d12) acid damage."
      },
      {
        "Name": "Tidal Wave (Recharge 6)",
        "Text": "While submerged, the leviathan magically creates a wall of water centered on itself. The wall is up 250 feet long, up to 250 feet high, and up to 50 feet thick. When the wall appears, all other creatures within its area must each make a 24 Strength saving throw. A creature takes 33 (6d10) bludgeoning damage on failed save, or half as much damage on a successful one."
      }
    ],
    "legendary": [
      {
        "Name": "Slam (Costs 2 Actions)",
        "Text": "The leviathan makes one slam attack."
      },
      {
        "Name": "Move",
        "Text": "The leviathan moves up to its speed."
      }
    ],
    "environment": [
      "coastal",
      "underwater"
    ]
  },
  {
    "name": "Male Steeder",
    "size": "M",
    "type": "monstrosity",
    "alignment": "Unaligned",
    "ac": "12 natural armor",
    "hp": 13,
    "speed": "Walk 30, Climb 30",
    "str": 15,
    "dex": 12,
    "con": 14,
    "int": 2,
    "wis": 10,
    "cha": 3,
    "skill": "Stealth +5, Perception +4",
    "senses": "darkvision 120 ft.",
    "passive": 14,
    "cr": "1/4",
    "trait": [
      {
        "Name": "Spider Climb",
        "Text": "The steeder can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
      },
      {
        "Name": "Extraordinary Leap",
        "Text": "The distance of the steeder's long jumps is tripled; every foot of its walking speed that it spends on the jump allows it to jump 3 feet."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:6 (1d8 + 2) piercing damage plus 4 (1d8) poison damage."
      },
      {
        "Name": "Sticky Leg",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one Small or Tiny creature. Hit:The target is stuck to the steeder's leg and is grappled until it escapes (escape 12). The steeder can have only one creature grappled at a time."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Marut",
    "size": "L",
    "type": "construct (inevitable)",
    "alignment": "Lawful Neutral",
    "ac": "22 natural armor",
    "hp": 432,
    "speed": "Walk 40, Fly 30 (hover)",
    "str": 28,
    "dex": 12,
    "con": 26,
    "int": 19,
    "wis": 15,
    "cha": 18,
    "save": "Int +12, Wis +10, Cha +12",
    "skill": "Insight +10, Intimidation +12, Perception +10",
    "senses": "darkvision 60 ft.",
    "passive": 20,
    "resist": [
      "thunder",
      {
        "resist": [
          "bludgeoning",
          "piercing",
          "slashing"
        ],
        "note": "from nonmagical attacks",
        "cond": true
      }
    ],
    "immune": "poison",
    "conditionImmune": "charmed, frightened, paralyzed, poisoned, unconscious",
    "languages": "all but rarely speaks",
    "cr": "25",
    "trait": [
      {
        "Name": "Immutable Form",
        "Text": "The marut is immune to any spell or effect that would alter its form."
      },
      {
        "Name": "Legendary Resistance (3/Day)",
        "Text": "If the marut fails a saving throw, it can choose to succeed instead."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The marut has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "The marut's innate spellcasting ability is Intelligence (spell save DC 20). The marut can innately cast the following spell, requiring no material components.<br>At will: <em>plane shift (self only)</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The marut makes two slam attacks."
      },
      {
        "Name": "Unerring Slam",
        "Text": "Melee Weapon automatic hit, reach 5 ft., one target. Hit:60 force damage, and the target is pushed up to 5 feet away from the marut if it is Huge or smaller."
      },
      {
        "Name": "Blazing Edict (Recharge 5-6)",
        "Text": "Arcane energy emanates from the marut's chest in a 60-foot cube. Every creature in that area takes 45 radiant damage. Each creature that takes any of this damage must succeed on a 20 Wisdom saving throw or be stunned until the end of the marut's next turn."
      },
      {
        "Name": "Justify",
        "Text": "The marut targets up to two creatures it can see within 60 feet of it. Each target must succeed on a 20 Charisma saving throw or be teleported to a teleportation circle in the Hall of Concordance in Sigil. A target fails automatically if it is incapacitated. If either target is teleported in this way, the marut teleports with it to the circle."
      }
    ]
  },
  {
    "name": "Maurezhi",
    "size": "M",
    "type": "fiend (demon)",
    "alignment": "Chaotic Evil",
    "ac": "15 natural armor",
    "hp": 88,
    "speed": "Walk 30",
    "str": 14,
    "dex": 17,
    "con": 12,
    "int": 11,
    "wis": 12,
    "cha": 15,
    "skill": "Deception +5",
    "senses": "darkvision 120 ft.",
    "passive": 11,
    "resist": [
      "cold",
      "fire",
      "lightning",
      "necrotic",
      {
        "resist": [
          "bludgeoning",
          "piercing",
          "slashing"
        ],
        "note": "from nonmagical attacks",
        "cond": true
      }
    ],
    "immune": "poison",
    "conditionImmune": "charmed, exhaustion, poisoned",
    "languages": "Abyssal, Elvish, telepathy 120 ft.",
    "cr": "7",
    "trait": [
      {
        "Name": "Assume Form",
        "Text": "The maurezhi can assume the appearance of any Medium humanoid it has eaten. It remains in this form for 1d6 days, during which time the form gradually decays until, when the effect ends, the form sloughs from the demon's body."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The maurezhi has advantage on saving throws against spells and other magical effects."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The maurezhi makes two attacks: one with its bite and one with its claws."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:14 (2d10 + 3) piercing damage. If the target is a humanoid, its Charisma score is reduced by 1d4. This reduction lasts until the target finishes a short or long rest. The target dies if this reduces its Charisma to 0. It rises 24 hours later as a ghoul, unless it has been revived or its corpse has been destroyed."
      },
      {
        "Name": "Claws",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:12 (2d8 + 3) slashing damage. If the target is a creature other than an undead, it must succeed on a 12 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      },
      {
        "Name": "Raise Ghoul (Recharge 5-6)",
        "Text": "The maurezhi targets one dead ghoul or ghast it can see within 30 feet of it. The target is revived with all its hit points."
      }
    ],
    "environment": [
      "swamp",
      "urban"
    ]
  },
  {
    "name": "Meazel",
    "size": "M",
    "type": "humanoid (meazel)",
    "alignment": "Lawful Evil",
    "ac": 13,
    "hp": 35,
    "speed": "Walk 30",
    "str": 8,
    "dex": 17,
    "con": 9,
    "int": 14,
    "wis": 13,
    "cha": 10,
    "skill": "Perception +3, Stealth +5",
    "senses": "darkvision 120 ft.",
    "passive": 13,
    "languages": "Common",
    "cr": "1",
    "trait": [
      {
        "Name": "Shadow Stealth",
        "Text": "While in dim light or darkness, the meazel can take the Hide action as a bonus action."
      }
    ],
    "action": [
      {
        "Name": "Garrote",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target of the meazel's size or smaller. Hit:6 (1d6 + 3) bludgeoning damage, and the target is grappled (escape 13 with disadvantage). Until the grapple ends, the target takes 10 (2d6 + 3) bludgeoning damage at the start of each of the meazel's turns. The meazel can't make weapon attacks while grappling a creature in this way."
      },
      {
        "Name": "Shortsword",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:6 (1d6 + 3) piercing damage, plus 3 (1d6) necrotic damage."
      },
      {
        "Name": "Shadow Teleport (Recharge 5-6)",
        "Text": "The meazel, any equipment it is wearing or carrying, and any creature it is grappling teleport to an unoccupied space within 500 feet of it, provided that the starting space and the destination are in dim light or darkness. The destination must be a place the meazel has seen before, but it need not be within line of sight. If the destination space is occupied, the teleportation leads to the nearest unoccupied space."
      }
    ],
    "environment": [
      "desert",
      "forest",
      "grassland",
      "hill",
      "mountain",
      "swamp",
      "underdark",
      "urban"
    ]
  },
  {
    "name": "Merregon",
    "size": "M",
    "type": "fiend (devil)",
    "alignment": "Lawful Evil",
    "ac": "16 natural armor",
    "hp": 45,
    "speed": "Walk 30",
    "str": 18,
    "dex": 14,
    "con": 17,
    "int": 6,
    "wis": 12,
    "cha": 8,
    "senses": "darkvision 60 ft.",
    "passive": 11,
    "resist": [
      "cold",
      {
        "resist": [
          "bludgeoning",
          "piercing",
          "slashing"
        ],
        "note": "from nonmagical attacks that aren't silvered",
        "cond": true
      }
    ],
    "immune": "fire, poison",
    "conditionImmune": "frightened, poisoned",
    "languages": "understands Infernal but can't speak, telepathy 120 ft.",
    "cr": "4",
    "trait": [
      {
        "Name": "Devil's Sight",
        "Text": "Magical darkness doesn't impede the merregon's darkvision."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The merregon has advantage on saving throws against spells and other magical effects."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The merregon makes two halberd attacks, or if an allied fiend of challenge rating 6 or higher is within 60 feet of it, the merregon makes three halberd attacks."
      },
      {
        "Name": "Halberd",
        "Text": "Melee Weapon 6 to hit, reach 10 ft., one target. Hit:9 (1d10 + 4) slashing damage."
      },
      {
        "Name": "Heavy Crossbow",
        "Text": "Ranged Weapon 4 to hit, range 100/400 ft., one target. Hit:7 (1d10 + 2) piercing damage."
      }
    ],
    "reaction": [
      {
        "Name": "Loyal Bodyguard",
        "Text": "When another fiend within 5 feet of the merregon is hit by an attack, the merregon causes itself to be hit instead."
      }
    ]
  },
  {
    "name": "Merrenoloth",
    "size": "M",
    "type": "fiend (yugoloth)",
    "alignment": "Neutral Evil",
    "ac": 13,
    "hp": 40,
    "speed": "Walk 30, Swim 40",
    "str": 8,
    "dex": 17,
    "con": 10,
    "int": 17,
    "wis": 14,
    "cha": 11,
    "save": "Dex +5, Int +5",
    "skill": "History +5, Nature +5, Perception +4, Survival +4",
    "senses": "blindsight 60 ft., darkvision 60 ft.",
    "passive": 14,
    "resist": [
      "cold",
      "fire",
      "lightning",
      {
        "resist": [
          "bludgeoning",
          "piercing",
          "slashing"
        ],
        "note": "from nonmagical attacks",
        "cond": true
      }
    ],
    "immune": "acid, poison",
    "conditionImmune": "poisoned",
    "languages": "Abyssal, Infernal, telepathy 60 ft.",
    "cr": "3",
    "trait": [
      {
        "Name": "Magic Resistance",
        "Text": "The merrenoloth has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Magic Weapons",
        "Text": "The merrenoloth's weapon attacks are magical."
      },
      {
        "Name": "Teleport",
        "Text": "As a bonus action, the merrenoloth magically teleports, along with any equipment it is wearing or carrying, up to 60 feet to an unoccupied space it can see."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day: <em>control weather</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The merrenoloth uses Fear Gaze once and makes one oar attack."
      },
      {
        "Name": "Oar",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:8 (2d4 + 3) slashing damage."
      },
      {
        "Name": "Fear Gaze",
        "Text": "The merrenoloth targets one creature it can see within 60 feet of it. The target must succeed on a 13 Wisdom saving throw or become frightened for 1 minute. The frightened target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      }
    ],
    "environment": [
      "coastal"
    ]
  },
  {
    "name": "Moloch",
    "isNamedCreature": true,
    "size": "L",
    "type": "fiend (devil)",
    "alignment": "Lawful Evil",
    "ac": "19 natural armor",
    "hp": 253,
    "speed": "Walk 30",
    "str": 26,
    "dex": 19,
    "con": 22,
    "int": 21,
    "wis": 18,
    "cha": 23,
    "save": "Dex +11, Con +13, Wis +11, Cha +13",
    "skill": "Deception +13, Intimidation +13, Perception +11",
    "senses": "darkvision 120 ft.",
    "passive": 21,
    "resist": [
      "cold",
      {
        "resist": [
          "bludgeoning",
          "piercing",
          "slashing"
        ],
        "note": "from nonmagical attacks that aren't silvered",
        "cond": true
      }
    ],
    "immune": "fire, poison",
    "conditionImmune": "charmed, exhaustion, frightened, poisoned",
    "languages": "all, telepathy 120 ft.",
    "cr": "21",
    "trait": [
      {
        "Name": "Legendary Resistance (3/Day)",
        "Text": "If Moloch fails a saving throw, he can choose to succeed instead."
      },
      {
        "Name": "Magic Resistance",
        "Text": "Moloch has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Magic Weapons",
        "Text": "Moloch's weapon attacks are magical."
      },
      {
        "Name": "Regeneration",
        "Text": "Moloch regains 20 hit points at the start of his turn. If he takes radiant damage, this trait doesn't function at the start of his next turn. Moloch dies only if he starts his turn with 0 hit points and doesn't regenerate."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day each: <em>flame strike, symbol (stunning only)</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "Moloch makes three attacks: one with his bite, one with his claw, and one with his whip."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 15 to hit, reach 5 ft., one target. Hit:26 (4d8 + 8) piercing damage."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 15 to hit, reach 10 ft., one target. Hit:17 (2d8 + 8) slashing damage."
      },
      {
        "Name": "Many-Tailed Whip",
        "Text": "Melee Weapon 15 to hit, reach 30 ft., one target. Hit:13 (2d4 + 8) slashing damage plus 11 (2d10) lightning damage. If the target is a creature, it must succeed on a 24 Strength saving throw or be pulled up to 30 feet in a straight line toward Moloch."
      },
      {
        "Name": "Breath of Despair (Recharge 5-6)",
        "Text": "Moloch exhales in a 30-foot cube. Each creature in that area must succeed on a 21 Wisdom saving throw or take 27 (5d10) psychic damage, drop whatever it is holding, and become frightened for 1 minute. While frightened in this way, a creature must take the Dash action and move away from Moloch by the safest available route on each of its turns, unless there is nowhere to move, in which case it needn't take the Dash action. If the creature ends its turn in a location where it doesn't have line of sight to Moloch, the creature can repeat the saving throw. On a success, the effect ends."
      },
      {
        "Name": "Teleport",
        "Text": "Moloch magically teleports, along with any equipment he is wearing and carrying, up to 120 feet to an unoccupied space he can see."
      }
    ],
    "legendary": [
      {
        "Name": "Stinking Cloud",
        "Text": "Moloch casts stinking cloud."
      },
      {
        "Name": "Teleport",
        "Text": "Moloch uses his Teleport action."
      },
      {
        "Name": "Whip",
        "Text": "Moloch makes one attack with his whip."
      }
    ]
  },
  {
    "name": "Molydeus",
    "size": "H",
    "type": "fiend (demon)",
    "alignment": "Chaotic Evil",
    "ac": "19 natural armor",
    "hp": 216,
    "speed": "Walk 40",
    "str": 28,
    "dex": 22,
    "con": 25,
    "int": 21,
    "wis": 24,
    "cha": 24,
    "save": "Str +16, Con +14, Wis +14, Cha +14",
    "skill": "Perception +21",
    "senses": "truesight 120 ft.",
    "passive": 31,
    "resist": [
      "cold",
      "fire",
      "lightning",
      {
        "resist": [
          "bludgeoning",
          "piercing",
          "slashing"
        ],
        "note": "from nonmagical attacks",
        "cond": true
      }
    ],
    "immune": "poison",
    "conditionImmune": "blinded, charmed, deafened, frightened, poisoned, stunned",
    "languages": "Abyssal, telepathy 120 ft.",
    "cr": "21",
    "trait": [
      {
        "Name": "Legendary Resistance (3/Day)",
        "Text": "If the molydeus fails a saving throw, it can choose to succeed instead."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The molydeus has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Magic Weapons",
        "Text": "The molydeus's weapon attacks are magical."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day: <em>imprisonment</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The molydeus makes three attacks: one with its weapon, one with its wolf bite, and one with its snakebite."
      },
      {
        "Name": "Demonic Weapon",
        "Text": "Melee Weapon 16 to hit, reach 15 ft., one target. Hit:20 (2d10 + 9) slashing damage. If the target has at least one head and the molydeus rolled a 20 on the attack roll, the target is decapitated and dies if it can't survive without that head. A target is immune to this effect if it takes none of the damage, has legendary actions, or is Huge or larger. Such a creature takes an extra 6d8 slashing damage from the hit."
      },
      {
        "Name": "Wolf Bite",
        "Text": "Melee Weapon 16 to hit, reach 10 ft., one target. Hit:16 (2d6 + 9) piercing damage."
      },
      {
        "Name": "Snakebite",
        "Text": "Melee Weapon 16 to hit, reach 15 ft., one creature. Hit:12 (1d6 + 9) piercing damage, and the target must succeed on a 22 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target transforms into a manes if this reduces its hit point maximum to 0. This transformation can be ended only by a wish spell."
      }
    ],
    "legendary": [
      {
        "Name": "Attack",
        "Text": "The molydeus makes one attack, either with its demonic weapon or with its snakebite."
      },
      {
        "Name": "Move",
        "Text": "The molydeus moves without provoking opportunity attacks."
      },
      {
        "Name": "Cast a Spell",
        "Text": "The molydeus casts one spell from its Innate Spellcasting trait."
      }
    ]
  },
  {
    "name": "Nabassu",
    "size": "M",
    "type": "fiend (demon)",
    "alignment": "Chaotic Evil",
    "ac": "18 natural armor",
    "hp": 190,
    "speed": "Walk 40, Fly 60",
    "str": 22,
    "dex": 14,
    "con": 21,
    "int": 14,
    "wis": 15,
    "cha": 17,
    "save": "Str +11, Dex +7",
    "skill": "Perception +7",
    "senses": "darkvision 60 ft.",
    "passive": 17,
    "resist": [
      "cold",
      "fire",
      "lightning",
      {
        "resist": [
          "bludgeoning",
          "piercing",
          "slashing"
        ],
        "note": "from nonmagical attacks",
        "cond": true
      }
    ],
    "immune": "poison",
    "conditionImmune": "poisoned",
    "languages": "Abyssal, telepathy 120 ft.",
    "cr": "15",
    "trait": [
      {
        "Name": "Demonic Shadows",
        "Text": "The nabassu darkens the area around its body in a 10-foot radius. Nonmagical light can't illuminate this area of dim light."
      },
      {
        "Name": "Devour Soul",
        "Text": "A nabassu can eat the soul of a creature it has killed within the last hour, provided that creature is neither a construct nor an undead. The devouring requires the nabassu to be within 5 feet of the corpse for at least 10 minutes, after which it gains a number of Hit Dice (d8s) equal to half the creature's number of Hit Dice. Roll those dice, and increase the nabassu's hit points by the numbers rolled. For every 4 Hit Dice the nabassu gains in this way, its attacks deal an extra 3 (1d6) damage on a hit. The nabassu retains these benefits for 6 days. A creature devoured by a nabassu can be restored to life only by a wish spell."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The nabassu has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Magic Weapons",
        "Text": "The nabassu's weapon attacks are magical."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The nabassu uses its Soul-Stealing Gaze and makes two attacks: one with its claws and one with its bite."
      },
      {
        "Name": "Claws",
        "Text": "Melee Weapon 11 to hit, reach 5 ft., one target. Hit:17 (2d10 + 6) slashing damage."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 11 to hit, reach 5 ft., one target. Hit:32 (4d12 + 6) piercing damage."
      },
      {
        "Name": "Soul-Stealing Gaze",
        "Text": "The nabassu targets one creature it can see within 30 feet of it. If the target can see the nabassu and isn't a construct or an undead, it must succeed on a 16 Charisma saving throw or reduce its hit point maximum by 13 (2d12) damage and give the nabassu an equal number of temporary hit points. This reduction lasts until the target finishes a short or long rest. The target dies if its hit point maximum is reduced to 0, and if the target is a humanoid, it immediately rises as a ghoul under the nabassu's control."
      }
    ],
    "environment": [
      "swamp",
      "underdark",
      "urban"
    ]
  },
  {
    "name": "Nagpa",
    "size": "M",
    "type": "humanoid (nagpa)",
    "alignment": "Lawful Evil",
    "ac": "19 natural armor",
    "hp": 187,
    "speed": "Walk 30",
    "str": 9,
    "dex": 15,
    "con": 12,
    "int": 23,
    "wis": 18,
    "cha": 21,
    "save": "Int +12, Wis +10, Cha +11",
    "skill": "Arcana +12, Deception +11, History +12, Insight +10, Perception +10",
    "senses": "truesight 120 ft.",
    "passive": 20,
    "languages": "Common plus up to five other languages",
    "cr": "17",
    "trait": [
      {
        "Name": "Corruption",
        "Text": "As a bonus action, the nagpa targets one creature it can see within 90 feet of it. The target must make a 20 Charisma saving throw. An evil creature makes the save with disadvantage. On a failed save, the target is charmed by the nagpa until the start of the nagpa's next turn. On a successful save, the target becomes immune to the nagpa's Corruption for the next 24 hours."
      },
      {
        "Name": "Paralysis (Recharge 6)",
        "Text": "As a bonus action, the nagpa forces each creature within 30 feet of it to succeed on a 20 Wisdom saving throw or be paralyzed for 1 minute. A paralyzed target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Undead and constructs are immune to this effect."
      },
      {
        "Name": "Spellcasting",
        "Text": "The nagpa is a 15th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 20, +12 to hit with spell attacks). A nagpa has the following wizard spells prepared:<br><br>Cantrips (at will): <em>chill touch, fire bolt, mage hand, message, minor illusion</em><br>1st (1 slots): <em>charm person, detect magic, protection from evil and good, witch bolt</em><br>2nd (2 slots): <em>hold person, ray of enfeeblement, suggestion</em><br>3rd (3 slots): <em>counterspell, fireball, fly</em><br>4th (4 slots): <em>confusion, hallucinatory terrain, wall of fire</em><br>5th (5 slots): <em>dominate person, dream, geas</em><br>6th (6 slots): <em>circle of death, disintegrate</em><br>7th (7 slots): <em>etherealness, prismatic spray</em><br>8th (8 slots): <em>feeblemind</em>"
      }
    ],
    "action": [
      {
        "Name": "Staff",
        "Text": "Melee Weapon 8 to hit, reach 5 ft., one target. Hit:9 (2d6 + 2) bludgeoning damage."
      }
    ],
    "environment": [
      "coastal",
      "desert",
      "forest",
      "swamp",
      "underdark",
      "urban"
    ]
  },
  {
    "name": "Narzugon",
    "size": "M",
    "type": "fiend (devil)",
    "alignment": "Lawful Evil",
    "ac": "20 plate armor",
    "hp": 112,
    "speed": "Walk 30",
    "str": 20,
    "dex": 10,
    "con": 17,
    "int": 16,
    "wis": 14,
    "cha": 19,
    "save": "Dex +5, Con +8, Cha +9",
    "skill": "Perception +7",
    "senses": "darkvision 120 ft.",
    "passive": 17,
    "resist": [
      "acid",
      "cold",
      {
        "resist": [
          "bludgeoning",
          "piercing",
          "slashing"
        ],
        "note": "from nonmagical attacks that aren't silvered",
        "cond": true
      }
    ],
    "immune": "fire, poison",
    "conditionImmune": "charmed, frightened, poisoned",
    "languages": "Common, Infernal, telepathy 120 ft.",
    "cr": "13",
    "trait": [
      {
        "Name": "Diabolical Sense",
        "Text": "The narzugon has advantage on Wisdom (Perception) checks made to perceive good-aligned creatures."
      },
      {
        "Name": "Infernal Tack",
        "Text": "The narzugon wears spurs that are part of infernal tack, which allow it to summon its nightmare companion."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The narzugon has advantage on saving throws against spells and other magical effects."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The narzugon uses its Infernal Command or Terrifying Command. It also makes three hellfire lance attacks."
      },
      {
        "Name": "Hellfire Lance",
        "Text": "Melee Weapon 10 to hit, reach 10 ft., one target. Hit:11 (1d12 + 5) piercing damage plus 16 (3d10) fire damage. If this damage kills a creature, the creature's soul rises from the River Styx as a lemure in Avernus in 1d4 hours."
      },
      {
        "Name": "Infernal Command",
        "Text": "Each ally of the narzugon within 60 feet of it can't be charmed or frightened until the end of the narzugon's next turn."
      },
      {
        "Name": "Terrifying Command",
        "Text": "Each creature that isn't a fiend within 60 feet of the narzugon that can hear it must succeed on a 17 Charisma saving throw or become frightened of it for 1 minute."
      },
      {
        "Name": "Healing (1/Day)",
        "Text": "The narzugon, or one creature it touches, regains up to 100 hit points."
      }
    ]
  },
  {
    "name": "Nightwalker",
    "size": "H",
    "type": "undead",
    "alignment": "Chaotic Evil",
    "ac": 14,
    "hp": 297,
    "speed": "Walk 40, Fly 40",
    "str": 22,
    "dex": 19,
    "con": 24,
    "int": 6,
    "wis": 9,
    "cha": 8,
    "save": "Con +13",
    "senses": "darkvision 120 ft.",
    "passive": 9,
    "resist": [
      "acid",
      "cold",
      "fire",
      "lightning",
      "thunder",
      {
        "resist": [
          "bludgeoning",
          "piercing",
          "slashing"
        ],
        "note": "from nonmagical attacks",
        "cond": true
      }
    ],
    "immune": "necrotic, poison",
    "conditionImmune": "exhaustion, frightened, grappled, paralyzed, petrified, poisoned, prone, restrained",
    "cr": "20",
    "trait": [
      {
        "Name": "Annihilating Aura",
        "Text": "Any creature that starts its turn within 30 feet of the nightwalker must succeed on a 21 Constitution saving throw or take 14 (4d6) necrotic damage and grant the nightwalker advantage on attack rolls against it until the start of the creature's next turn. Undead are immune to this aura."
      },
      {
        "Name": "Life Eater",
        "Text": "A creature reduced to 0 hit points from damage dealt by the nightwalker dies and can't be revived by any means short of a wish spell."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The nightwalker uses Enervating Focus twice, or it uses Enervating Focus and Finger of Doom, if available."
      },
      {
        "Name": "Enervating Focus",
        "Text": "Melee Weapon 12 to hit, reach 15 ft., one target. Hit:28 (5d8 + 6) necrotic damage. The target must succeed on a 21 Constitution saving throw or its hit point maximum is reduced by an amount equal to the necrotic damage taken. This reduction lasts until the target finishes a long rest."
      },
      {
        "Name": "Finger of Doom (Recharge 6)",
        "Text": "The nightwalker points at one creature it can see within 300 feet of it. The target must succeed on a 21 Wisdom saving throw or take 26 (4d12) necrotic damage and become frightened until the end of the nightwalker's next turn. While frightened in this way, the creature is also paralyzed. If a target's saving throw is successful, the target is immune to the nightwalker's Finger of Doom for the next 24 hours."
      }
    ],
    "environment": [
      "arctic",
      "desert",
      "swamp",
      "underdark"
    ]
  },
  {
    "name": "Nupperibo",
    "size": "M",
    "type": "fiend (devil)",
    "alignment": "Lawful Evil",
    "ac": "13 natural armor",
    "hp": 11,
    "speed": "Walk 20",
    "str": 16,
    "dex": 11,
    "con": 13,
    "int": 3,
    "wis": 8,
    "cha": 1,
    "skill": "Perception +1",
    "senses": "blindsight 10 ft. (blind beyond this radius)",
    "passive": 11,
    "resist": [
      "acid",
      "cold",
      {
        "resist": [
          "bludgeoning",
          "piercing",
          "slashing"
        ],
        "note": "from nonmagical attacks that aren't silvered",
        "cond": true
      }
    ],
    "immune": "fire, poison",
    "conditionImmune": "blinded, charmed, frightened, poisoned",
    "languages": "understands Infernal but can't speak",
    "cr": "1/2",
    "trait": [
      {
        "Name": "Cloud of Vermin",
        "Text": "Any creature, other than a devil, that starts its turn within 20 feet of the nupperibo must make a 11 Constitution saving throw. A creature within the areas of two or more nupperibos makes the saving throw with disadvantage. On a failure, the creature takes 2 (1d4) piercing damage."
      },
      {
        "Name": "Hunger-Driven",
        "Text": "In the Nine Hells, the nupperibos can flawlessly track any creature that has taken damage from any nupperibo's Cloud of Vermin within the previous 24 hours."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:6 (1d6 + 3) piercing damage."
      }
    ]
  },
  {
    "name": "Oaken Bolter",
    "size": "M",
    "type": "construct",
    "alignment": "Unaligned",
    "ac": "16 natural armor",
    "hp": 58,
    "speed": "Walk 30",
    "str": 12,
    "dex": 18,
    "con": 15,
    "int": 3,
    "wis": 10,
    "cha": 1,
    "senses": "darkvision 60 ft.",
    "passive": 10,
    "immune": "poison, bludgeoning, piercing, slashing from nonmagical attacks that aren't adamantine",
    "conditionImmune": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned",
    "languages": "understands one language of its creator but can't speak",
    "cr": "5",
    "trait": [
      {
        "Name": "Magic Resistance",
        "Text": "The oaken bolter has advantage on saving throws against spells and other magical effects."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The oaken bolter makes two lancing bolt attacks or one lancing bolt attack and one harpoon attack."
      },
      {
        "Name": "Lancing Bolt",
        "Text": "Melee or Ranged Weapon 7 to hit, reach 5 ft. or range 100/400 ft., one target. Hit:15 (2d10 + 4) piercing damage."
      },
      {
        "Name": "Harpoon",
        "Text": "Ranged Weapon 7 to hit, range 50/200 ft., one target. Hit:9 (1d10 + 4) piercing damage, and the target is grappled (escape 12). While grappled in this way, a creature's speed isn't reduced, but it can move only in directions that bring it closer to the oaken bolter. A creature takes 5 (1d10) slashing damage if it escapes from the grapple or if it tries and fails. As a bonus action, the oaken bolter can pull a creature grappled by it 20 feet closer. The oaken bolter can grapple only one creature at a time."
      },
      {
        "Name": "Explosive Bolt (Recharge 5-6)",
        "Text": "The oaken bolter launches an explosive charge at a point within 120 feet. Each creature within 20 feet of that point must make a 15 Dexterity saving throw, taking 17 (5d6) fire damage on a failed save, or half as much damage on a successful one."
      }
    ],
    "environment": [
      "forest",
      "grassland",
      "hill",
      "mountain"
    ]
  },
  {
    "name": "Oblex Spawn",
    "size": "T",
    "type": "ooze",
    "alignment": "Lawful Evil",
    "ac": 13,
    "hp": 18,
    "speed": "Walk 20",
    "str": 8,
    "dex": 16,
    "con": 15,
    "int": 14,
    "wis": 11,
    "cha": 10,
    "save": "Int +4, Cha +2",
    "senses": "blindsight 60 ft. (blind beyond this distance)",
    "passive": 12,
    "conditionImmune": "blinded, charmed, deafened, exhaustion, prone",
    "cr": "1/4",
    "trait": [
      {
        "Name": "Amorphous",
        "Text": "The oblex can move through a space as narrow as 1 inch wide without squeezing."
      },
      {
        "Name": "Aversion to Fire",
        "Text": "If the oblex takes fire damage, it has disadvantage on attack rolls and ability checks until the end of its next turn."
      }
    ],
    "action": [
      {
        "Name": "Pseudopod",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:5 (1d4 + 3) bludgeoning damage plus 2 (1d4) psychic damage."
      }
    ],
    "environment": [
      "swamp",
      "underdark",
      "urban"
    ]
  },
  {
    "name": "Ogre Battering Ram",
    "size": "L",
    "type": "giant",
    "alignment": "Chaotic Evil",
    "ac": "14 ring mail",
    "hp": 59,
    "speed": "Walk 40",
    "str": 19,
    "dex": 8,
    "con": 16,
    "int": 5,
    "wis": 7,
    "cha": 7,
    "senses": "darkvision 60 ft.",
    "passive": 8,
    "languages": "Common, Giant",
    "cr": "4",
    "trait": [
      {
        "Name": "Siege Monster",
        "Text": "The ogre deals double damage to objects and structures."
      }
    ],
    "action": [
      {
        "Name": "Bash",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:15 (2d10 + 4) bludgeoning damage, and the ogre can push the target 5 feet away if the target is Huge or smaller."
      },
      {
        "Name": "Block the Path",
        "Text": "Until the start of the ogre's next turn, attack rolls against the ogre have disadvantage, it has advantage on the attack roll it makes for an opportunity attack, and that attack deals an extra 16 (3d10) bludgeoning damage on a hit. Also, each enemy that tries to move out of the ogre's reach without teleporting must succeed on a 14 Strength saving throw or have its speed reduced to 0 until the start of the ogre's next turn."
      }
    ],
    "environment": [
      "grassland",
      "hill",
      "mountain"
    ]
  },
  {
    "name": "Ogre Bolt Launcher",
    "size": "L",
    "type": "giant",
    "alignment": "Chaotic Evil",
    "ac": "13 hide armor",
    "hp": 59,
    "speed": "Walk 40",
    "str": 19,
    "dex": 12,
    "con": 16,
    "int": 5,
    "wis": 7,
    "cha": 7,
    "senses": "darkvision 60 ft.",
    "passive": 8,
    "languages": "Common, Giant",
    "cr": "2",
    "action": [
      {
        "Name": "Fist",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:9 (2d4 + 4) bludgeoning damage."
      },
      {
        "Name": "Bolt Launcher",
        "Text": "Ranged Weapon 3 to hit, range 120/480 ft., one target. Hit:17 (3d10 + 1) piercing damage."
      }
    ],
    "environment": [
      "grassland",
      "hill",
      "mountain"
    ]
  },
  {
    "name": "Ogre Chain Brute",
    "size": "L",
    "type": "giant",
    "alignment": "Chaotic Evil",
    "ac": "11 hide armor",
    "hp": 59,
    "speed": "Walk 40",
    "str": 19,
    "dex": 8,
    "con": 16,
    "int": 5,
    "wis": 7,
    "cha": 7,
    "senses": "darkvision 60 ft.",
    "passive": 8,
    "languages": "Common, Giant",
    "cr": "3",
    "action": [
      {
        "Name": "Fist",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:9 (2d4 + 4) bludgeoning damage."
      },
      {
        "Name": "Chain Sweep",
        "Text": "The ogre swings its chain, and every creature within 10 feet of it must make a 14 Dexterity saving throw. On a failed saving throw, a creature takes 8 (1d8 + 4) bludgeoning damage and is knocked prone. On a successful save, the creature takes half as much damage and isn't knocked prone."
      },
      {
        "Name": "Chain Smash (Recharge 6)",
        "Text": "Melee Weapon 6 to hit, reach 10 ft., one target. Hit:13 (2d8 + 4) bludgeoning damage, and the target must make a 14 Constitution saving throw. On a failure the target is unconscious for 1 minute. The unconscious target repeats the saving throw if it takes damage and at the end of each of its turns, ending the effect on itself on a success."
      }
    ],
    "environment": [
      "grassland",
      "hill",
      "mountain"
    ]
  },
  {
    "name": "Ogre Howdah",
    "size": "L",
    "type": "giant",
    "alignment": "Chaotic Evil",
    "ac": "13 breastplate",
    "hp": 59,
    "speed": "Walk 40",
    "str": 19,
    "dex": 8,
    "con": 16,
    "int": 5,
    "wis": 7,
    "cha": 7,
    "senses": "darkvision 60 ft.",
    "passive": 8,
    "languages": "Common, Giant",
    "cr": "2",
    "trait": [
      {
        "Name": "Howdah",
        "Text": "The ogre carries a compact fort on its back. Up to four Small creatures can ride in the fort without squeezing. To make a melee attack against a target within 5 feet of the ogre, they must use spears or weapons with reach. Creatures in the fort have three-quarters cover against attacks and effects from outside it. If the ogre dies, creatures in the fort are placed in unoccupied spaces within 5 feet of the ogre."
      }
    ],
    "action": [
      {
        "Name": "Mace",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:11 (2d6 + 4) bludgeoning damage."
      }
    ],
    "environment": [
      "grassland",
      "hill"
    ]
  },
  {
    "name": "Oinoloth",
    "size": "M",
    "type": "fiend (yugoloth)",
    "alignment": "Neutral Evil",
    "ac": "17 natural armor",
    "hp": 126,
    "speed": "Walk 40",
    "str": 19,
    "dex": 17,
    "con": 18,
    "int": 17,
    "wis": 16,
    "cha": 19,
    "save": "Con +8, Wis +7",
    "skill": "Deception +8, Intimidation +8, Perception +7",
    "senses": "blindsight 60 ft., darkvision 60 ft.",
    "passive": 17,
    "resist": [
      "cold",
      "fire",
      "lightning",
      {
        "resist": [
          "bludgeoning",
          "piercing",
          "slashing"
        ],
        "note": "from nonmagical attacks",
        "cond": true
      }
    ],
    "immune": "acid, poison",
    "conditionImmune": "poisoned",
    "languages": "Abyssal, Infernal, telepathy 60 ft.",
    "cr": "12",
    "trait": [
      {
        "Name": "Bringer of Plagues (Recharge 5-6)",
        "Text": "As a bonus action, the oinoloth blights the area within 30 feet of it. The blight lasts for 24 hours. While blighted, all normal plants in the area wither and die, and the number of hit points restored by a spell to a creature in that area is halved.<br>Furthermore, when a creature moves into the blighted area or starts its turn there, that creature must make a 16 Constitution saving throw. On a successful save, the creature is immune to the oinoloth's Bringer of Plagues for the next 24 hours. On a failed save, the creature takes 14 (4d6) necrotic damage and is poisoned.<br>The poisoned creature can't regain hit points. After every 24 hours that elapse, the poisoned creature can repeat the saving throw. On a failed save, the creature's hit point maximum is reduced by 5 (1d10). This reduction lasts until the poison ends, and the target dies if its hit point maximum is reduced to 0. The poison ends after the creature successfully saves against it three times."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The oinoloth has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Magic Weapons",
        "Text": "The oinoloth's weapon attacks are magical."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day each: <em>feeblemind, globe of invulnerability, wall of fire, wall of ice</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The oinoloth uses its Transfixing Gaze and makes two claw attacks."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 8 to hit, reach 5 ft., one target. Hit:14 (3d6 + 4) slashing damage plus 22 (4d10) necrotic damage."
      },
      {
        "Name": "Corrupted Healing (Recharge 6)",
        "Text": "The oinoloth touches one willing creature within 5 feet of it. The target regains all its hit points. In addition, the oinoloth can end one disease on the target or remove one of the following conditions from it: blinded, deafened, paralyzed, or poisoned. The target then gains 1 level of exhaustion, and its hit point maximum is reduced by 7 (2d6). This reduction can be removed only by a wish spell or by casting greater restoration on the target three times within the same hour. The target dies if its hit point maximum is reduced to 0."
      },
      {
        "Name": "Teleport",
        "Text": "The oinoloth magically teleports, along with any equipment it is wearing or carrying, up to 60 feet to an unoccupied space it can see."
      },
      {
        "Name": "Transfixing Gaze",
        "Text": "The oinoloth targets one creature it can see within 30 feet of it. The target must succeed on a 16 Wisdom saving throw against this magic or be charmed until the end of the oinoloth's next turn. While charmed in this way, the target is restrained. If the target's saving throw is successful, the target is immune to the oinoloth's gaze for the next 24 hours."
      }
    ],
    "environment": [
      "desert",
      "underdark"
    ]
  },
  {
    "name": "Orcus",
    "isNamedCreature": true,
    "size": "H",
    "type": "fiend (demon)",
    "alignment": "Chaotic Evil",
    "ac": "17 natural armor",
    "hp": 405,
    "speed": "Walk 40, Fly 40",
    "str": 27,
    "dex": 14,
    "con": 25,
    "int": 20,
    "wis": 20,
    "cha": 25,
    "save": "Dex +10, Con +15, Wis +13",
    "skill": "Arcana +13, Perception +13",
    "senses": "truesight 120 ft.",
    "passive": 22,
    "resist": [
      "cold",
      "fire",
      "lightning"
    ],
    "immune": "necrotic, poison, bludgeoning, piercing, slashing from nonmagical attacks",
    "conditionImmune": "charmed, exhaustion, frightened, poisoned",
    "languages": "all, telepathy 120 ft.",
    "cr": "26",
    "trait": [
      {
        "Name": "Wand of Orcus",
        "Text": "The wand has 7 charges, and any of its properties that require a saving throw have a save DC of 18. While holding it, Orcus can use an action to cast animate dead, blight, or speak with dead. Alternatively, he can expend 1 or more of the wand's charges to cast one of the following spells from it: circle of death (1 charge), finger of death (1 charge), or power word kill (2 charges). The wand regains 1d4 + 3 charges daily at dawn.<br>While holding the wand, Orcus can use an action to conjure undead creatures whose combined average hit points don't exceed 500. These undead magically rise up from the ground or otherwise form in unoccupied spaces within 300 feet of Orcus and obey his commands until they are destroyed or until he dismisses them as an action. Once this property of the wand is used, the property can't be used again until the next dawn."
      },
      {
        "Name": "Legendary Resistance (3/Day)",
        "Text": "If Orcus fails a saving throw, he can choose to succeed instead."
      },
      {
        "Name": "Magic Resistance",
        "Text": "Orcus has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Magic Weapons",
        "Text": "Orcus's weapon attacks are magical."
      },
      {
        "Name": "Master of Undeath",
        "Text": "When Orcus casts animate dead or create undead, he chooses the level at which the spell is cast, and the creatures created by the spells remain under his control indefinitely. Additionally, he can cast create undead even when it isn't night."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day: <em>time stop</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "Orcus makes two Wand of Orcus attacks."
      },
      {
        "Name": "Wand of Orcus",
        "Text": "Melee Weapon 19 to hit, reach 10 ft., one target. Hit:21 (3d8 + 8) bludgeoning damage plus 13 (2d12) necrotic damage."
      },
      {
        "Name": "Tail",
        "Text": "Melee Weapon 16 to hit, reach 10 ft., one target. Hit:21 (3d8 + 8) piercing damage plus 9 (2d8) poison damage."
      }
    ],
    "legendary": [
      {
        "Name": "Tail",
        "Text": "Orcus makes one tail attack."
      },
      {
        "Name": "A Taste of Undeath",
        "Text": "Orcus casts chill touch (17th level)."
      },
      {
        "Name": "Creeping Death (Costs 2 Actions)",
        "Text": "Orcus chooses a point on the ground that he can see within 100 feet of him. A cylinder of swirling necrotic energy 60 feet tall and with a 10-foot radius rises from that point and lasts until the end of Orcus's next turn. Creatures in that area have vulnerability to necrotic damage."
      }
    ]
  },
  {
    "name": "Orthon",
    "size": "L",
    "type": "fiend (devil)",
    "alignment": "Lawful Evil",
    "ac": "17 half plate armor",
    "hp": 105,
    "speed": "Walk 30, Climb 30",
    "str": 22,
    "dex": 16,
    "con": 21,
    "int": 15,
    "wis": 15,
    "cha": 16,
    "save": "Dex +7, Con +9, Wis +6",
    "skill": "Perception +10, Stealth +11, Survival +10",
    "senses": "darkvision 120 ft., truesight 30 ft.",
    "passive": 20,
    "resist": [
      "cold",
      {
        "resist": [
          "bludgeoning",
          "piercing",
          "slashing"
        ],
        "note": "from nonmagical attacks that aren't silvered",
        "cond": true
      }
    ],
    "immune": "fire, poison",
    "conditionImmune": "charmed, exhaustion, poisoned",
    "languages": "Common, Infernal, telepathy 120 ft.",
    "cr": "10",
    "trait": [
      {
        "Name": "Invisibility Field",
        "Text": "The orthon can use a bonus action to become invisible. Any equipment the orthon wears or carries is also invisible as long as the equipment is on its person. This invisibility ends immediately after the orthon makes an attack roll or is hit by an attack."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The orthon has advantage on saving throws against spells and other magical effects."
      }
    ],
    "action": [
      {
        "Name": "Infernal Dagger",
        "Text": "Melee Weapon 10 to hit, reach 5 ft., one target. Hit:11 (2d4 + 6) slashing damage, and the target must make a 17 Constitution saving throw, taking 22 (4d10) poison damage on a failed save, or half as much damage on a successful one. On a failure, the target is poisoned for 1 minute. The poisoned target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      },
      {
        "Name": "Brass Crossbow",
        "Text": "Ranged Weapon 7 to hit, range 100/400 ft., one target. Hit:14 (2d10 + 3) piercing damage, plus one of the following effects:"
      }
    ],
    "reaction": [
      {
        "Name": "Explosive Retribution",
        "Text": "When it is reduced to 15 hit points or fewer, the orthon causes itself to explode. All other creatures within 30 feet of it must each make a 17 Dexterity saving throw, taking 9 (2d8) fire damage plus 9 (2d8) thunder damage on a failed save, or half as much damage on a successful one. This explosion destroys the orthon, its infernal dagger, and its brass crossbow."
      }
    ],
    "environment": [
      "desert",
      "underdark",
      "urban"
    ]
  },
  {
    "name": "Phoenix",
    "size": "G",
    "type": "elemental",
    "alignment": "Neutral",
    "ac": 18,
    "hp": 175,
    "speed": "Walk 20, Fly 120",
    "str": 19,
    "dex": 26,
    "con": 25,
    "int": 2,
    "wis": 21,
    "cha": 18,
    "save": "Wis +10, Cha +9",
    "senses": "darkvision 60 ft.",
    "passive": 15,
    "resist": [
      {
        "resist": [
          "bludgeoning",
          "piercing",
          "slashing"
        ],
        "note": "from nonmagical attacks",
        "cond": true
      }
    ],
    "immune": "fire, poison",
    "conditionImmune": "exhaustion, grappled, paralyzed, petrified, poisoned, prone, restrained, stunned",
    "cr": "16",
    "trait": [
      {
        "Name": "Fiery Death and Rebirth",
        "Text": "When the phoenix dies, it explodes. Each creature within 60-feet of it must make a 20 Dexterity saving throw, taking 22 (4d10) fire damage on a failed save, or half as much damage on a successful one. The fire ignites flammable objects in the area that aren't worn or carried.<br>The explosion destroys the phoenix's body and leaves behind an egg-shaped cinder that weighs 5 pounds. The cinder is blazing hot, dealing 21 (6d6) fire damage to any creature that touches it, though no more than once per round. The cinder is immune to all damage, and after 1d6 days, it hatches a new phoenix."
      },
      {
        "Name": "Fire Form",
        "Text": "The phoenix can move through a space as narrow as 1 inch wide without squeezing. Any creature that touches the phoenix or hits it with a melee attack while within 5 feet of it takes 5 (1d10) fire damage. In addition, the phoenix can enter a hostile creature's space and stop there. The first time it enters a creature's space on a turn, that creature takes 5 (1d10) fire damage. With a touch, the phoenix can also ignite flammable objects that aren't worn or carried (no action required)."
      },
      {
        "Name": "Flyby",
        "Text": "The phoenix doesn't provoke opportunity attacks when it flies out of an enemy's reach."
      },
      {
        "Name": "Illumination",
        "Text": "The phoenix sheds bright light in a 60-foot radius and dim light for an additional 30 feet."
      },
      {
        "Name": "Legendary Resistance (3/Day)",
        "Text": "If the phoenix fails a saving throw, it can choose to succeed instead."
      },
      {
        "Name": "Siege Monster",
        "Text": "The phoenix deals double damage to objects and structures."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The phoenix makes two attacks: one with its beak and one with its fiery talons."
      },
      {
        "Name": "Beak",
        "Text": "Melee Weapon 13 to hit, reach 15 ft., one target. Hit:15 (2d6 + 8) fire damage. If the target is a creature or a flammable object, it ignites. Until a creature takes an action to douse the fire, the target takes 5 (1d10) fire damage at the start of each of its turns."
      },
      {
        "Name": "Fiery Talons",
        "Text": "Melee Weapon 13 to hit, reach 15 ft., one target. Hit:17 (2d8 + 8) fire damage."
      }
    ],
    "legendary": [
      {
        "Name": "Peck",
        "Text": "The phoenix makes one beak attack."
      },
      {
        "Name": "Move",
        "Text": "The phoenix moves up to its speed."
      },
      {
        "Name": "Swoop (Costs 2 Actions)",
        "Text": "The phoenix moves up to its speed and attacks with its fiery talons."
      }
    ],
    "environment": [
      "desert",
      "mountain"
    ]
  },
  {
    "name": "Red Abishai",
    "size": "M",
    "type": "fiend (devil)",
    "alignment": "Lawful Evil",
    "ac": "22 natural armor",
    "hp": 255,
    "speed": "Walk 30, Fly 50",
    "str": 23,
    "dex": 16,
    "con": 19,
    "int": 14,
    "wis": 15,
    "cha": 19,
    "save": "Str +12, Con +10, Wis +8",
    "skill": "Intimidation +10, Perception +8",
    "senses": "darkvision 120 ft.",
    "passive": 18,
    "resist": [
      "cold",
      {
        "resist": [
          "bludgeoning",
          "piercing",
          "slashing"
        ],
        "note": "from nonmagical attacks that aren't silvered",
        "cond": true
      }
    ],
    "immune": "fire, poison",
    "conditionImmune": "poisoned",
    "languages": "Draconic, Infernal, telepathy 120 ft.",
    "cr": "19",
    "trait": [
      {
        "Name": "Devil's Sight",
        "Text": "Magical darkness doesn't impede the abishai's darkvision."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The abishai has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Magic Weapons",
        "Text": "The abishai's weapon attacks are magical."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The abishai can use its Frightful Presence. It also makes three attacks: one with its morningstar, one with its claw, and one with its bite."
      },
      {
        "Name": "Morningstar",
        "Text": "Melee Weapon 12 to hit, reach 5 ft., one target. Hit:10 (1d8 + 6) piercing damage."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 12 to hit, reach 5 ft., one target. Hit:17 (2d10 + 6) slashing damage."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 12 to hit, reach 5 ft., one target. Hit:22 (3d10 + 6) piercing damage plus 38 (7d10) fire damage."
      },
      {
        "Name": "Frightful Presence",
        "Text": "Each creature of the abishai's choice that is within 120 feet and aware of it must succeed on a 18 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the abishai's Frightful Presence for the next 24 hours."
      },
      {
        "Name": "Incite Fanaticism",
        "Text": "The abishai chooses up to four of its allies within 60 feet of it that can see it. For 1 minute, each of those allies makes attack rolls with advantage and can't be frightened."
      },
      {
        "Name": "Power of the Dragon Queen",
        "Text": "The abishai targets one dragon it can see within 120 feet of it. The dragon must make a 18 Charisma saving throw. A chromatic dragon makes this save with disadvantage. On a successful save, the target is immune to the abishai's Power of the Dragon Queen for 1 hour. On a failed save, the target is charmed by the abishai for 1 hour. While charmed in this way, the target regards the abishai as a trusted friend to be heeded and protected. This effect ends if the abishai or its companions deal damage to the target."
      }
    ],
    "environment": [
      "mountain",
      "urban"
    ]
  },
  {
    "name": "Retriever",
    "size": "L",
    "type": "construct",
    "alignment": "Lawful Evil",
    "ac": "19 natural armor",
    "hp": 210,
    "speed": "Walk 40, Climb 40",
    "str": 22,
    "dex": 16,
    "con": 20,
    "int": 3,
    "wis": 11,
    "cha": 4,
    "save": "Dex +8, Con +10, Wis +5",
    "skill": "Perception +5, Stealth +8",
    "senses": "blindsight 30 ft., darkvision 60 ft.",
    "passive": 15,
    "immune": "necrotic, poison, psychic, bludgeoning, piercing, slashing from nonmagical attacks that aren't adamantine",
    "conditionImmune": "charmed, exhaustion, frightened, paralyzed, poisoned",
    "languages": "understands Abyssal, Elvish, and Undercommon but can't speak",
    "cr": "14",
    "trait": [
      {
        "Name": "Faultless Tracker",
        "Text": "The retriever is given a quarry by its master. The quarry can be a specific creature or object the master is personally acquainted with, or it can be a general type of creature or object the master has seen before. The retriever knows the direction and distance to its quarry as long as the two of them are on the same plane of existence. The retriever can have only one such quarry at a time. The retriever also always knows the location of its master."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>3/day each: <em>plane shift (only self and up to one incapacitated creature which is considered willing for the spell), web</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The retriever makes two foreleg attacks and uses its force or paralyzing beam once, if available."
      },
      {
        "Name": "Foreleg",
        "Text": "Melee Weapon 11 to hit, reach 10 ft., one target. Hit:15 (2d8 + 6) slashing damage."
      },
      {
        "Name": "Force Beam",
        "Text": "The retriever targets one creature it can see within 60 feet of it. The target must make a 16 Dexterity saving throw, taking 27 (5d10) force damage on a failed save, or half as much damage on a successful one."
      },
      {
        "Name": "Paralyzing Beam (Recharge 5-6)",
        "Text": "The retriever targets one creature it can see within 60 feet of it. The target must succeed on a 18 Constitution saving throw or be paralyzed for 1 minute. The paralyzed target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      }
    ],
    "environment": [
      "desert",
      "forest",
      "underdark"
    ]
  },
  {
    "name": "Rot Troll",
    "size": "L",
    "type": "giant",
    "alignment": "Chaotic Evil",
    "ac": "16 natural armor",
    "hp": 138,
    "speed": "Walk 30",
    "str": 18,
    "dex": 13,
    "con": 22,
    "int": 5,
    "wis": 8,
    "cha": 4,
    "skill": "Perception +3",
    "senses": "darkvision 60 ft.",
    "passive": 13,
    "immune": "necrotic",
    "languages": "Giant",
    "cr": "9",
    "trait": [
      {
        "Name": "Rancid Degeneration",
        "Text": "At the end of each of the troll's turns, each creature within 5 feet of it takes 11 (2d10) necrotic damage, unless the troll has taken acid or fire damage since the end of its last turn."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The troll makes three attacks: one with its bite and two with its claws."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 8 to hit, reach 5 ft., one target. Hit:7 (1d6 + 4) piercing damage plus 16 (3d10) necrotic damage."
      },
      {
        "Name": "Claws",
        "Text": "Melee Weapon 8 to hit, reach 5 ft., one target. Hit:11 (2d6 + 4) slashing damage plus 5 (1d10) necrotic damage."
      }
    ],
    "environment": [
      "desert",
      "forest",
      "swamp",
      "underdark"
    ]
  },
  {
    "name": "Rutterkin",
    "size": "M",
    "type": "fiend (demon)",
    "alignment": "Chaotic Evil",
    "ac": 12,
    "hp": 37,
    "speed": "Walk 20",
    "str": 14,
    "dex": 15,
    "con": 17,
    "int": 5,
    "wis": 12,
    "cha": 6,
    "senses": "darkvision 120 ft.",
    "passive": 11,
    "resist": [
      "cold",
      "fire",
      "lightning"
    ],
    "immune": "poison",
    "conditionImmune": "charmed, frightened, poisoned",
    "languages": "understands Abyssal but can't speak",
    "cr": "2",
    "trait": [
      {
        "Name": "Crippling Fear",
        "Text": "When a creature that isn't a demon starts its turn within 30 feet of three or more rutterkins, it must make a 11 Wisdom saving throw. The creature has disadvantage on the save if it's within 30 feet of six or more rutterkins. On a successful save, the creature is immune to the Crippling Fear of all rutterkins for 24 hours. On a failed save, the creature becomes frightened for 1 minute. While frightened in this way, the creature is restrained. At the end of each of the frightened creature's turns, it can repeat the saving throw, ending the effect on itself on a success."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:12 (3d6 + 2) piercing damage. If the target is a creature, it must succeed on a 13 Constitution saving throw against disease or become poisoned. At the end of each long rest, the poisoned target can repeat the saving throw, ending the effect on itself on a success. If the target is reduced to 0 hit points while poisoned in this way, it dies and instantly transforms into a living abyssal wretch. The transformation of the body can be undone only by a wish spell. (See notes)"
      }
    ]
  },
  {
    "name": "Sacred Statue",
    "size": "L",
    "type": "construct",
    "alignment": "[object Object]",
    "ac": "19 natural armor",
    "hp": 95,
    "speed": "Walk 25",
    "str": 19,
    "dex": 8,
    "con": 19,
    "int": 14,
    "wis": 19,
    "cha": 16,
    "save": "Wis +8",
    "senses": "darkvision 60 ft.",
    "passive": 14,
    "resist": [
      "acid",
      "fire",
      "lightning",
      {
        "resist": [
          "bludgeoning",
          "piercing",
          "slashing"
        ],
        "note": "from nonmagical attacks",
        "cond": true
      }
    ],
    "immune": "cold, necrotic, poison",
    "conditionImmune": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned",
    "languages": "the languages the eidolon knew in life",
    "trait": [
      {
        "Name": "False Appearance",
        "Text": "While the statue remains motionless, it is indistinguishable from a normal statue."
      },
      {
        "Name": "Ghostly Inhabitant",
        "Text": "The eidolon that enters the sacred statue remains inside it until the statue drops to 0 hit points, the eidolon uses a bonus action to move out of the statue, or the eidolon is turned or forced out by an effect such as the dispel evil and good spell. When the eidolon leaves the statue, it appears in an unoccupied space within 5 feet of the statue."
      },
      {
        "Name": "Inert",
        "Text": "When not inhabited by an eidolon, the statue is an object."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The statue makes two slam attacks."
      },
      {
        "Name": "Slam",
        "Text": "Melee Weapon 8 to hit, reach 10 ft., one target. Hit:43 (6d12 + 4) bludgeoning damage."
      },
      {
        "Name": "Rock",
        "Text": "Ranged Weapon 8 to hit, range 60/240 ft., one target. Hit:37 (6d10 + 4) bludgeoning damage."
      }
    ]
  },
  {
    "name": "Shadow Dancer",
    "size": "M",
    "type": "humanoid (elf)",
    "alignment": "Neutral",
    "ac": "15 studded leather armor",
    "hp": 71,
    "speed": "Walk 30",
    "str": 12,
    "dex": 16,
    "con": 13,
    "int": 11,
    "wis": 12,
    "cha": 12,
    "save": "Dex +6, Cha +4",
    "skill": "Stealth +6",
    "senses": "darkvision 60 ft.",
    "passive": 11,
    "resist": [
      "necrotic"
    ],
    "conditionImmune": "charmed, exhaustion",
    "languages": "Common, Elvish",
    "cr": "7",
    "trait": [
      {
        "Name": "Fey Ancestry",
        "Text": "The shadow dancer has advantage on saving throws against being charmed, and magic can't put it to sleep."
      },
      {
        "Name": "Shadow Jump",
        "Text": "As a bonus action, the shadow dancer can teleport up to 30 feet to an unoccupied space it can see. Both the space it teleports from and the space it teleports to must be in dim light or darkness. The shadow dancer can use this ability between the weapon attacks of another action it takes."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The shadow dancer makes three spiked chain attacks."
      },
      {
        "Name": "Spiked Chain",
        "Text": "Melee Weapon 6 to hit, reach 10 ft., one target. Hit:10 (2d6 + 3) piercing damage, and the target must succeed on a 14 Dexterity saving throw or suffer one additional effect of the shadow dancer's choice:"
      }
    ],
    "environment": [
      "forest",
      "underdark",
      "urban"
    ]
  },
  {
    "name": "Sibriex",
    "size": "H",
    "type": "fiend (demon)",
    "alignment": "Chaotic Evil",
    "ac": "19 natural armor",
    "hp": 150,
    "speed": "Walk 0, Fly 20 (hover)",
    "str": 10,
    "dex": 3,
    "con": 23,
    "int": 25,
    "wis": 24,
    "cha": 25,
    "save": "Int +13, Cha +13",
    "skill": "Arcana +13, History +13, Perception +13",
    "senses": "truesight 120 ft.",
    "passive": 23,
    "resist": [
      "cold",
      "fire",
      "lightning",
      {
        "resist": [
          "bludgeoning",
          "piercing",
          "slashing"
        ],
        "note": "from nonmagical attacks",
        "cond": true
      }
    ],
    "immune": "poison",
    "conditionImmune": "poisoned",
    "languages": "all, telepathy 120 ft.",
    "cr": "18",
    "trait": [
      {
        "Name": "Contamination",
        "Text": "The sibriex emits an aura of corruption 30 feet in every direction. Plants that aren't creatures wither in the aura, and the ground in it is difficult terrain for other creatures. Any creature that starts its turn in the aura must succeed on a 20 Constitution saving throw or take 14 (4d6) poison damage. A creature that succeeds on the save is immune to this sibriex's Contamination for 24 hours."
      },
      {
        "Name": "Legendary Resistance (3/Day)",
        "Text": "If the sibriex fails a saving throw, it can choose to succeed instead."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The sibriex has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>3/day: <em>feeblemind</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The sibriex uses Squirt Bile once and makes three attacks using its chain, bite, or both."
      },
      {
        "Name": "Chain",
        "Text": "Melee Weapon 6 to hit, reach 15 ft., one target. Hit:20 (2d12 + 7) piercing damage."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:9 (2d8) piercing damage plus 9 (2d8) acid damage."
      },
      {
        "Name": "Squirt Bile",
        "Text": "The sibriex targets one creature it can see within 120 feet of it. The target must succeed on a 20 Dexterity saving throw or take 35 (10d6) acid damage."
      },
      {
        "Name": "Warp Creature",
        "Text": "The sibriex targets up to three creatures it can see within 120 feet of it. Each target must make a 20 Constitution saving throw. On a successful save, a creature becomes immune to this sibriex's Warp Creature. On a failed save, the target is poisoned, which causes it to also gain 1 level of exhaustion. While poisoned in this way, the target must repeat the saving throw at the start of each of its turns. Three successful saves against the poison end it, and ending the poison removes any levels of exhaustion caused by it. Each failed save causes the target to suffer another level of exhaustion. Once the target reaches 6 levels of exhaustion, it dies and instantly transforms into a living abyssal wretch under the sibriex's control. The transformation of the body can be undone only by a wish spell."
      }
    ],
    "legendary": [
      {
        "Name": "Cast a Spell",
        "Text": "The sibriex casts a spell."
      },
      {
        "Name": "Spray Bile",
        "Text": "The sibriex uses Squirt Bile."
      },
      {
        "Name": "Warp (Costs 2 Actions)",
        "Text": "The sibriex uses Warp Creature."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Skulk",
    "size": "M",
    "type": "humanoid",
    "alignment": "Chaotic Neutral",
    "ac": 14,
    "hp": 18,
    "speed": "Walk 30",
    "str": 6,
    "dex": 19,
    "con": 10,
    "int": 10,
    "wis": 7,
    "cha": 1,
    "save": "Con +2",
    "skill": "Stealth +8",
    "senses": "darkvision 120 ft.",
    "passive": 8,
    "immune": "radiant",
    "conditionImmune": "blinded",
    "languages": "understands Common but can't speak",
    "cr": "1/2",
    "trait": [
      {
        "Name": "Fallible Invisibility",
        "Text": "The skulk is invisible. This invisibility can be circumvented by three things:<br>[object Object]"
      },
      {
        "Name": "Trackless",
        "Text": "The skulk leaves no tracks to indicate where it has been or where it's headed."
      }
    ],
    "action": [
      {
        "Name": "Claws",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:6 (1d4 + 4) slashing damage. If the skulk has advantage on the attack roll, the target also takes 7 (2d6) necrotic damage."
      }
    ],
    "environment": [
      "coastal",
      "forest",
      "swamp",
      "underdark",
      "urban"
    ]
  },
  {
    "name": "Skull Lord",
    "size": "M",
    "type": "undead",
    "alignment": "Lawful Evil",
    "ac": "18 plate armor",
    "hp": 105,
    "speed": "Walk 30",
    "str": 14,
    "dex": 16,
    "con": 17,
    "int": 16,
    "wis": 15,
    "cha": 21,
    "skill": "Athletics +7, History +8, Perception +12, Stealth +8",
    "senses": "darkvision 60 ft.",
    "passive": 22,
    "resist": [
      "cold",
      "necrotic",
      {
        "resist": [
          "bludgeoning",
          "piercing",
          "slashing"
        ],
        "note": "from nonmagical attacks",
        "cond": true
      }
    ],
    "immune": "poison",
    "conditionImmune": "blinded, charmed, deafened, exhaustion, frightened, poisoned, stunned, unconscious",
    "languages": "all the languages it knew in life",
    "cr": "15",
    "trait": [
      {
        "Name": "Legendary Resistance (3/Day)",
        "Text": "If the skull lord fails a saving throw, it can choose to succeed instead."
      },
      {
        "Name": "Master of the Grave",
        "Text": "While within 30 feet of the skull lord, any undead ally of the skull lord makes saving throws with advantage, and that ally regains 1d6 hit points whenever it starts its turn there."
      },
      {
        "Name": "Evasion",
        "Text": "If the skull lord is subjected to an effect that allows it to make a Dexterity saving throw to take only half the damage, the skull lord instead takes no damage if it succeeds on the saving throw, and only half damage if it fails."
      },
      {
        "Name": "Spellcasting",
        "Text": "The skull lord is a 13th-level spellcaster. Its spellcasting ability is Charisma (spell save DC 18, +10 to hit with spell attacks). The skull lord knows the following sorcerer spells:<br><br>Cantrips (at will): <em>chill touch, fire bolt, mage hand, poison spray, ray of frost, shocking grasp</em><br>1st (1 slots): <em>magic missile, expeditious retreat, thunderwave</em><br>2nd (2 slots): <em>mirror image, scorching ray</em><br>3rd (3 slots): <em>fear, haste</em><br>4th (4 slots): <em>dimension door, ice storm</em><br>5th (5 slots): <em>cloudkill, cone of cold</em><br>6th (6 slots): <em>eyebite</em><br>7th (7 slots): <em>finger of death</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The skull lord makes three bone staff attacks."
      },
      {
        "Name": "Bone Staff",
        "Text": "Melee Weapon 8 to hit, reach 5 ft., one target. Hit:7 (1d8 + 3) bludgeoning damage plus 14 (4d6) necrotic damage."
      }
    ],
    "legendary": [
      {
        "Name": "Bone Staff (Costs 2 Actions)",
        "Text": "The skull lord makes a bone staff attack."
      },
      {
        "Name": "Cantrip",
        "Text": "The skull lord casts a cantrip."
      },
      {
        "Name": "Move",
        "Text": "The skull lord moves up to its speed without provoking opportunity attacks."
      },
      {
        "Name": "Summon Undead (Costs 3 Actions)",
        "Text": "Up to five skeletons or zombies appear in unoccupied spaces within 30 feet of the skull lord and remain until destroyed. Undead summoned in this way roll initiative and act in the next available turn. The skull lord can have up to five undead summoned by this ability at a time."
      }
    ],
    "environment": [
      "desert",
      "swamp",
      "underdark"
    ]
  },
  {
    "name": "Soul Monger",
    "size": "M",
    "type": "humanoid (elf)",
    "alignment": "Neutral",
    "ac": "15 studded leather armor",
    "hp": 123,
    "speed": "Walk 30",
    "str": 8,
    "dex": 17,
    "con": 14,
    "int": 19,
    "wis": 15,
    "cha": 13,
    "save": "Dex +7, Wis +6, Cha +5",
    "skill": "Perception +6",
    "senses": "darkvision 60 ft.",
    "passive": 17,
    "immune": "necrotic, psychic",
    "conditionImmune": "charmed, exhaustion, frightened",
    "languages": "Common, Elvish",
    "cr": "11",
    "trait": [
      {
        "Name": "Fey Ancestry",
        "Text": "The soul monger has advantage on saving throws against being charmed, and magic can't put it to sleep."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The soul monger has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Soul Thirst",
        "Text": "When the soul monger reduces a creature to 0 hit points, the soul monger can gain temporary hit points equal to half the creature's hit point maximum. While the soul monger has temporary hit points from this ability, it has advantage on attack rolls."
      },
      {
        "Name": "Weight of Ages",
        "Text": "Any beast or humanoid, other than a shadar-kai, that starts its turn within 5 feet of the soul monger has its speed reduced by 20 feet until the start of that creature's next turn."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day each: <em>bestow curse, chain lightning, finger of death, gaseous form, phantasmal killer, seeming</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The soul monger makes two phantasmal dagger attacks."
      },
      {
        "Name": "Phantasmal Dagger",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:13 (4d4 + 3) piercing damage plus 19 (3d12) necrotic damage, and the target has disadvantage on saving throws until the start of the soul monger's next turn."
      },
      {
        "Name": "Wave of Weariness (Recharge 4-6)",
        "Text": "The soul monger emits weariness in a 60-foot cube. Each creature in that area must make a 16 Constitution saving throw. On a failed save, a creature takes 45 (10d8) psychic damage and suffers 1 level of exhaustion. On a successful save, it takes 22 (5d8) psychic damage."
      }
    ],
    "environment": [
      "underdark",
      "urban"
    ]
  },
  {
    "name": "Spirit Troll",
    "size": "L",
    "type": "giant",
    "alignment": "Chaotic Evil",
    "ac": "17 natural armor",
    "hp": 97,
    "speed": "Walk 30",
    "str": 1,
    "dex": 17,
    "con": 13,
    "int": 8,
    "wis": 9,
    "cha": 16,
    "skill": "Perception +3",
    "senses": "darkvision 60 ft.",
    "passive": 13,
    "resist": [
      "acid",
      "cold",
      "fire",
      "lightning",
      "thunder"
    ],
    "immune": "bludgeoning, piercing, slashing from nonmagical attacks",
    "conditionImmune": "exhaustion, grappled, paralyzed, petrified, prone, restrained, unconscious",
    "languages": "Giant",
    "cr": "11",
    "trait": [
      {
        "Name": "Incorporeal Movement",
        "Text": "The troll can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object."
      },
      {
        "Name": "Regeneration",
        "Text": "The troll regains 10 hit points at the start of each of its turns. If the troll takes psychic or force damage, this trait doesn't function at the start of the troll's next turn. The troll dies only if it starts its turn with 0 hit points and doesn't regenerate."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The troll makes three attacks: one with its bite and two with its claws."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one creature. Hit:19 (3d10 + 3) psychic damage, and the target must succeed on a 15 Wisdom saving throw or be stunned for 1 minute. The stunned target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      },
      {
        "Name": "Claws",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one creature. Hit:14 (2d10 + 3) psychic damage."
      }
    ],
    "environment": [
      "coastal",
      "forest",
      "swamp",
      "underdark"
    ]
  },
  {
    "name": "Spring Eladrin",
    "size": "M",
    "type": "fey (elf)",
    "alignment": "Chaotic Neutral",
    "ac": "19 natural armor",
    "hp": 127,
    "speed": "Walk 30",
    "str": 14,
    "dex": 16,
    "con": 16,
    "int": 18,
    "wis": 11,
    "cha": 18,
    "skill": "Deception +8, Persuasion +8",
    "senses": "darkvision 60 ft.",
    "passive": 10,
    "resist": [
      {
        "resist": [
          "bludgeoning",
          "piercing",
          "slashing"
        ],
        "note": "from nonmagical attacks",
        "cond": true
      }
    ],
    "languages": "Common, Elvish, Sylvan",
    "cr": "10",
    "trait": [
      {
        "Name": "Fey Step (Recharge 4-6)",
        "Text": "As a bonus action, the eladrin can teleport up to 30 feet to an unoccupied space it can see."
      },
      {
        "Name": "Joyful Presence",
        "Text": "Any non-eladrin creature that starts its turn within 60 feet of the eladrin must make a 16 Wisdom saving throw. On a failed save, the creature is charmed for 1 minute. On a successful save, the creature becomes immune to any eladrin's Joyful Presence for 24 hours."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The eladrin has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day each: <em>hallucinatory terrain, Otto's irresistible dance</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The eladrin makes two weapon attacks. The eladrin can cast one spell in place of one of these attacks."
      },
      {
        "Name": "Longsword",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:6 (1d8 + 2) slashing damage plus 4 (1d8) psychic damage, or 7 (1d10 + 2) slashing damage plus 4 (1d8) psychic damage if used with two hands."
      },
      {
        "Name": "Longbow",
        "Text": "Ranged Weapon 7 to hit, range 150/600 ft., one target. Hit:7 (1d8 + 3) piercing damage plus 4 (1d8) psychic damage."
      }
    ],
    "environment": [
      "forest",
      "grassland"
    ]
  },
  {
    "name": "Star Spawn Grue",
    "size": "S",
    "type": "aberration",
    "alignment": "Lawful Evil",
    "ac": 11,
    "hp": 17,
    "speed": "Walk 30",
    "str": 6,
    "dex": 13,
    "con": 10,
    "int": 9,
    "wis": 11,
    "cha": 6,
    "senses": "darkvision 60 ft.",
    "passive": 10,
    "immune": "psychic",
    "languages": "Deep Speech",
    "cr": "1/4",
    "trait": [
      {
        "Name": "Aura of Madness",
        "Text": "Creatures within 20 feet of the grue that aren't aberrations have disadvantage on saving throws, as well as on attack rolls against creatures other than a star spawn grue."
      }
    ],
    "action": [
      {
        "Name": "Confounding Bite",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one target. Hit:6 (2d4 + 1) piercing damage, and the target must succeed on a 10 Wisdom saving throw or attack rolls against it have advantage until the start of the grue's next turn."
      }
    ],
    "environment": [
      "mountain",
      "swamp"
    ]
  },
  {
    "name": "Star Spawn Hulk",
    "size": "L",
    "type": "aberration",
    "alignment": "Chaotic Evil",
    "ac": "16 natural armor",
    "hp": 136,
    "speed": "Walk 30",
    "str": 20,
    "dex": 8,
    "con": 21,
    "int": 7,
    "wis": 12,
    "cha": 9,
    "save": "Dex +3, Wis +5",
    "skill": "Perception +5",
    "senses": "darkvision 60 ft.",
    "passive": 15,
    "resist": [
      {
        "resist": [
          "bludgeoning",
          "piercing",
          "slashing"
        ],
        "note": "from nonmagical attacks",
        "cond": true
      }
    ],
    "conditionImmune": "charmed, frightened",
    "languages": "Deep Speech",
    "cr": "10",
    "trait": [
      {
        "Name": "Psychic Mirror",
        "Text": "If the hulk takes psychic damage, each creature within 10 feet of the hulk takes that damage instead; the hulk takes none of the damage. In addition, the hulk's thoughts and location can't be discerned by magic."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The hulk makes two slam attacks. If both attacks hit the same target, the target also takes 9 (2d8) psychic damage and must succeed on a 17 Constitution saving throw or be stunned until the end of the target's next turn."
      },
      {
        "Name": "Slam",
        "Text": "Melee Weapon 9 to hit, reach 10 ft., one target. Hit:14 (2d8 + 5) bludgeoning damage."
      },
      {
        "Name": "Reaping Arms (Recharge 5-6)",
        "Text": "The hulk makes a separate slam attack against each creature within 10 feet of it. Each creature that is hit must also succeed on a 17 Dexterity saving throw or be knocked prone."
      }
    ]
  },
  {
    "name": "Star Spawn Larva Mage",
    "size": "M",
    "type": "aberration",
    "alignment": "Chaotic Evil",
    "ac": "16 natural armor",
    "hp": 168,
    "speed": "Walk 30",
    "str": 17,
    "dex": 12,
    "con": 23,
    "int": 18,
    "wis": 12,
    "cha": 16,
    "save": "Dex +6, Wis +6, Cha +8",
    "skill": "Perception +6",
    "senses": "darkvision 60 ft.",
    "passive": 16,
    "resist": [
      "cold",
      {
        "resist": [
          "bludgeoning",
          "piercing",
          "slashing"
        ],
        "note": "from nonmagical attacks",
        "cond": true
      }
    ],
    "immune": "psychic",
    "conditionImmune": "charmed, frightened, paralyzed, petrified, poisoned, restrained",
    "languages": "Deep Speech",
    "cr": "16",
    "trait": [
      {
        "Name": "Return to Worms",
        "Text": "When the larva mage is reduced to 0 hit points, it breaks apart into a swarm of insects in the same space. Unless the swarm is destroyed, the larva mage reforms from it 24 hours later."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day: <em>circle of death</em>"
      }
    ],
    "action": [
      {
        "Name": "Slam",
        "Text": "Melee Weapon 8 to hit, reach 10 ft., one target. Hit:7 (1d8 + 3) bludgeoning damage, and the target must succeed on a 19 Constitution saving throw or be poisoned until the end of its next turn."
      },
      {
        "Name": "Plague of Worms (Recharge 6)",
        "Text": "Each creature other than a star spawn within 10 feet of the larva mage must make a 19 Dexterity saving throw. On a failure the target takes 22 (5d8) necrotic damage and is blinded and restrained by masses of swarming worms. The affected creature takes 22 (5d8) necrotic damage at the start of each of the larva mage's turns. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      }
    ],
    "reaction": [
      {
        "Name": "Feed on Weakness",
        "Text": "When a creature within 20 feet of the larva mage fails a saving throw, the larva mage gains 10 temporary hit points."
      }
    ],
    "legendary": [
      {
        "Name": "Cantrip (Costs 2 Actions)",
        "Text": "The larva mage casts one cantrip."
      },
      {
        "Name": "Slam (Costs 2 Actions)",
        "Text": "The larva mage makes one slam attack."
      },
      {
        "Name": "Feed (Costs 3 Actions)",
        "Text": "Each creature restrained by the larva mage's Plague of Worms takes 13 (3d8) necrotic damage, and the larva mage gains 6 temporary hit points."
      }
    ],
    "environment": [
      "mountain"
    ]
  },
  {
    "name": "Star Spawn Mangler",
    "size": "M",
    "type": "aberration",
    "alignment": "Chaotic Evil",
    "ac": 14,
    "hp": 71,
    "speed": "Walk 40, Climb 40",
    "str": 8,
    "dex": 18,
    "con": 12,
    "int": 11,
    "wis": 12,
    "cha": 7,
    "save": "Dex +7, Con +4",
    "skill": "Stealth +7",
    "senses": "darkvision 60 ft.",
    "passive": 11,
    "resist": [
      "cold"
    ],
    "immune": "psychic",
    "conditionImmune": "charmed, frightened, prone",
    "languages": "Deep Speech",
    "cr": "5",
    "trait": [
      {
        "Name": "Ambush",
        "Text": "On the first round of each combat, the mangler has advantage on attack rolls against a creature that hasn't taken a turn yet."
      },
      {
        "Name": "Shadow Stealth",
        "Text": "While in dim light or darkness, the mangler can take the Hide action as a bonus action."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The mangler makes two claw attacks."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:8 (1d8 + 4) slashing damage. If the attack roll has advantage, the target also takes 7 (2d6) psychic damage."
      },
      {
        "Name": "Flurry of Claws (Recharge 4-6)",
        "Text": "The mangler makes six claw attacks against one target. Either before or after these attacks, it can move up to its speed as a bonus action without provoking opportunity attacks."
      }
    ]
  },
  {
    "name": "Star Spawn Seer",
    "size": "M",
    "type": "aberration",
    "alignment": "Lawful Evil",
    "ac": "17 natural armor",
    "hp": 153,
    "speed": "Walk 30",
    "str": 14,
    "dex": 12,
    "con": 18,
    "int": 22,
    "wis": 19,
    "cha": 16,
    "save": "Dex +6, Int +11, Wis +9, Cha +8",
    "skill": "Perception +9",
    "senses": "darkvision 60 ft.",
    "passive": 19,
    "resist": [
      "cold",
      {
        "resist": [
          "bludgeoning",
          "piercing",
          "slashing"
        ],
        "note": "from nonmagical attacks",
        "cond": true
      }
    ],
    "immune": "psychic",
    "conditionImmune": "charmed, frightened",
    "languages": "Common, Deep Speech, Undercommon",
    "cr": "13",
    "trait": [
      {
        "Name": "Out-of-Phase Movement",
        "Text": "The seer can move through other creatures and objects as if they were difficult terrain. Each creature it moves through takes 5 (1d10) psychic damage; no creature can take this damage more than once per turn. The seer takes 5 (1d10) force damage if it ends its turn inside an object."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The seer makes two comet staff attacks or uses Psychic Orb twice."
      },
      {
        "Name": "Comet Staff",
        "Text": "Melee Weapon 11 to hit, reach 5 ft., one target. Hit:9 (1d6 + 6) bludgeoning damage plus 18 (4d8) psychic damage, or 10 (1d8 + 6) bludgeoning damage plus 18 (4d8) psychic damage, if used with two hands, and the target must succeed on a 19 Constitution saving throw or be incapacitated until the end of its next turn."
      },
      {
        "Name": "Psychic Orb",
        "Text": "Ranged Spell 11 to hit, range 120 feet, one target. Hit:27 (5d10) psychic damage."
      },
      {
        "Name": "Collapse Distance (Recharge 6)",
        "Text": "The seer warps space around a creature it can see within 30 feet of it. That creature must make a 19 Wisdom saving throw. On a failed save, the target, along with any equipment it is wearing or carrying, is magically teleported up to 60 feet to an unoccupied space the seer can see, and all other creatures within 10 feet of the target's original space each takes 39 (6d12) psychic damage. On a successful save, the target takes 19 (3d12) psychic damage."
      }
    ],
    "reaction": [
      {
        "Name": "Bend Space",
        "Text": "When the seer would be hit by an attack, it teleports, exchanging positions with another star spawn it can see within 60 feet of it. The other star spawn is hit by the attack instead."
      }
    ],
    "environment": [
      "mountain",
      "swamp",
      "urban"
    ]
  },
  {
    "name": "Steel Predator",
    "size": "L",
    "type": "construct",
    "alignment": "Lawful Evil",
    "ac": "20 natural armor",
    "hp": 207,
    "speed": "Walk 40",
    "str": 24,
    "dex": 17,
    "con": 22,
    "int": 4,
    "wis": 14,
    "cha": 6,
    "skill": "Perception +7, Stealth +8, Survival +7",
    "senses": "blindsight 30 ft., darkvision 60 ft.",
    "passive": 17,
    "resist": [
      "cold",
      "lightning",
      "necrotic",
      "thunder"
    ],
    "immune": "poison, psychic, bludgeoning, piercing, slashing from nonmagical attacks",
    "conditionImmune": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned, stunned",
    "languages": "understands Modron and the language of its owner but can't speak",
    "cr": "16",
    "trait": [
      {
        "Name": "Magic Resistance",
        "Text": "The steel predator has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Magic Weapons",
        "Text": "The steel predator's weapon attacks are magical."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>3/day each: <em>dimension door (self only), plane shift (self only)</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The steel predator makes three attacks: one with its bite and two with its claw."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 12 to hit, reach 5 ft., one target. Hit:14 (2d6 + 7) piercing damage."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 12 to hit, reach 5 ft., one target. Hit:16 (2d8 + 7) slashing damage."
      },
      {
        "Name": "Stunning Roar (Recharge 5-6)",
        "Text": "The steel predator emits a roar in a 60-foot cone. Each creature in that area must make a 19 Constitution saving throw. On a failed save, a creature takes 27 (5d10) thunder damage, drops everything it's holding, and is stunned for 1 minute. On a successful save, a creature takes half as much damage. The stunned creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      }
    ],
    "environment": [
      "urban"
    ]
  },
  {
    "name": "Stone Cursed",
    "size": "M",
    "type": "construct",
    "alignment": "Lawful Evil",
    "ac": "17 natural armor",
    "hp": 19,
    "speed": "Walk 10",
    "str": 16,
    "dex": 5,
    "con": 14,
    "int": 5,
    "wis": 8,
    "cha": 7,
    "passive": 9,
    "immune": "poison",
    "vulnerable": [
      "bludgeoning"
    ],
    "conditionImmune": "charmed, exhaustion, frightened, petrified, poisoned",
    "languages": "the languages it knew in life",
    "cr": "1",
    "trait": [
      {
        "Name": "Cunning Opportunist",
        "Text": "The stone cursed has advantage on the attack rolls of opportunity attacks."
      },
      {
        "Name": "False Appearance",
        "Text": "While the stone cursed remains motionless, it is indistinguishable from a normal statue."
      }
    ],
    "action": [
      {
        "Name": "Petrifying Claws",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:8 (1d10 + 3) slashing damage, or 14 (2d10 + 3) slashing damage if the attack roll had advantage. If the target is a creature, it must succeed on a 12 Constitution saving throw, or it begins to turn to stone and is restrained until the end of its next turn, when it must repeat the saving throw. The effect ends if the second save is successful; otherwise the target is petrified for 24 hours."
      }
    ],
    "environment": [
      "desert",
      "mountain",
      "urban"
    ]
  },
  {
    "name": "Stone Defender",
    "size": "M",
    "type": "construct",
    "alignment": "Unaligned",
    "ac": "16 natural armor",
    "hp": 52,
    "speed": "Walk 30",
    "str": 19,
    "dex": 10,
    "con": 17,
    "int": 3,
    "wis": 10,
    "cha": 1,
    "senses": "darkvision 60 ft.",
    "passive": 10,
    "immune": "poison, bludgeoning, piercing, slashing from nonmagical attacks that aren't adamantine",
    "conditionImmune": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned",
    "languages": "understands one language of its creator but can't speak",
    "cr": "4",
    "trait": [
      {
        "Name": "False Appearance",
        "Text": "While the stone defender remains motionless against an uneven earthen or stone surface, it is indistinguishable from that surface."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The stone defender has advantage on saving throws against spells and other magical effects."
      }
    ],
    "action": [
      {
        "Name": "Slam",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:11 (2d6 + 4) bludgeoning damage, and if the target is Large or smaller, it is knocked prone."
      }
    ],
    "reaction": [
      {
        "Name": "Intercept Attack",
        "Text": "In response to another creature within 5 feet of it being hit by an attack roll, the stone defender gives that creature a +5 bonus to its AC against that attack, potentially causing a miss. To use this ability, the stone defender must be able to see the creature and the attacker."
      }
    ],
    "environment": [
      "forest",
      "grassland",
      "hill",
      "mountain"
    ]
  },
  {
    "name": "Summer Eladrin",
    "size": "M",
    "type": "fey (elf)",
    "alignment": "Chaotic Neutral",
    "ac": "19 natural armor",
    "hp": 127,
    "speed": "Walk 50",
    "str": 19,
    "dex": 21,
    "con": 16,
    "int": 14,
    "wis": 12,
    "cha": 18,
    "skill": "Athletics +8, Intimidation +8",
    "senses": "darkvision 60 ft.",
    "passive": 9,
    "resist": [
      {
        "resist": [
          "bludgeoning",
          "piercing",
          "slashing"
        ],
        "note": "from nonmagical attacks",
        "cond": true
      }
    ],
    "languages": "Common, Elvish, Sylvan",
    "cr": "10",
    "trait": [
      {
        "Name": "Fearsome Presence",
        "Text": "Any non-eladrin creature that starts its turn within 60 feet of the eladrin must make a 16 Wisdom saving throw. On a failed save, the creature becomes frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to any eladrin's Fearsome Presence for the next 24 hours."
      },
      {
        "Name": "Fey Step (Recharge 4-6)",
        "Text": "As a bonus action, the eladrin can teleport up to 30 feet to an unoccupied space it can see."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The eladrin has advantage on saving throws against spells and other magical effects."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The eladrin makes two weapon attacks."
      },
      {
        "Name": "Longsword",
        "Text": "Melee Weapon 8 to hit, reach 5 ft., one target. Hit:13 (2d8 + 4) slashing damage plus 4 (1d8) fire damage, or 15 (2d10 + 4) slashing damage plus 4 (1d8) fire damage if used with two hands."
      },
      {
        "Name": "Longbow",
        "Text": "Ranged Weapon 9 to hit, range 150/600 ft., one target. Hit:14 (2d8 + 5) piercing damage plus 4 (1d8) fire damage."
      }
    ],
    "reaction": [
      {
        "Name": "Parry",
        "Text": "The eladrin adds 3 to its AC against one melee attack that would hit it. To do so, the eladrin must see the attacker and be wielding a melee weapon."
      }
    ],
    "environment": [
      "desert",
      "forest"
    ]
  },
  {
    "name": "Sword Wraith Commander",
    "size": "M",
    "type": "undead",
    "alignment": "Lawful Evil",
    "ac": "18 breastplate",
    "hp": 127,
    "speed": "Walk 30",
    "str": 18,
    "dex": 14,
    "con": 18,
    "int": 11,
    "wis": 12,
    "cha": 14,
    "skill": "Perception +4",
    "senses": "darkvision 60 ft.",
    "passive": 14,
    "resist": [
      "necrotic",
      {
        "resist": [
          "bludgeoning",
          "piercing",
          "slashing"
        ],
        "note": "from nonmagical attacks",
        "cond": true
      }
    ],
    "immune": "poison",
    "conditionImmune": "exhaustion, frightened, poisoned, unconscious",
    "languages": "the languages it knew in life",
    "cr": "8",
    "trait": [
      {
        "Name": "Martial Fury",
        "Text": "As a bonus action, the sword wraith can make one weapon attack, which deals an extra 9 (2d8) necrotic damage on a hit. If it does so, attack rolls against it have advantage until the start of its next turn."
      },
      {
        "Name": "Turning Defiance",
        "Text": "The sword wraith and any other sword wraiths within 30 feet of it have advantage on saving throws against effects that turn undead."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The sword wraith makes two weapon attacks."
      },
      {
        "Name": "Longsword",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:8 (1d8 + 4) slashing damage, or 9 (1d10 + 4) slashing damage if used with two hands."
      },
      {
        "Name": "Longbow",
        "Text": "Ranged Weapon 5 to hit, range 150/600 ft., one target. Hit:6 (1d8 + 2) piercing damage."
      },
      {
        "Name": "Call to Honor (1/Day)",
        "Text": "To use this action, the sword wraith must have taken damage during the current combat. If the sword wraith can use this action, it gives itself advantage on attack rolls until the end of its next turn, and 1d4 + 1 sword wraith warrior|sword wraith warriors appear in unoccupied spaces within 30 feet of it. The warriors last until they drop to 0 hit points, and they take their turns immediately after the commander's turn on the same initiative count."
      }
    ],
    "environment": [
      "grassland",
      "swamp"
    ]
  },
  {
    "name": "Sword Wraith Warrior",
    "size": "M",
    "type": "undead",
    "alignment": "Lawful Evil",
    "ac": "16 chain shirt",
    "hp": 45,
    "speed": "Walk 30",
    "str": 18,
    "dex": 12,
    "con": 17,
    "int": 6,
    "wis": 9,
    "cha": 10,
    "senses": "darkvision 60 ft.",
    "passive": 9,
    "resist": [
      "necrotic",
      {
        "resist": [
          "bludgeoning",
          "piercing",
          "slashing"
        ],
        "note": "from nonmagical attacks",
        "cond": true
      }
    ],
    "immune": "poison",
    "conditionImmune": "exhaustion, frightened, poisoned, unconscious",
    "languages": "the languages it knew in life",
    "cr": "3",
    "trait": [
      {
        "Name": "Martial Fury",
        "Text": "As a bonus action, the sword wraith can make one weapon attack. If it does so, attack rolls against it have advantage until the start of its next turn."
      }
    ],
    "action": [
      {
        "Name": "Longsword",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:8 (1d8 + 4) slashing damage, or 9 (1d10 + 4) slashing damage if used with two hands."
      },
      {
        "Name": "Longbow",
        "Text": "Ranged Weapon 3 to hit, range 150/600 ft., one target. Hit:5 (1d8 + 1) piercing damage."
      }
    ],
    "environment": [
      "grassland",
      "swamp"
    ]
  },
  {
    "name": "The Angry",
    "size": "M",
    "type": "monstrosity",
    "alignment": "Lawful Evil",
    "ac": "18 natural armor",
    "hp": 255,
    "speed": "Walk 30",
    "str": 17,
    "dex": 10,
    "con": 19,
    "int": 8,
    "wis": 13,
    "cha": 6,
    "skill": "Perception +6",
    "senses": "darkvision 60 ft.",
    "passive": 16,
    "resist": [
      {
        "resist": [
          "bludgeoning",
          "piercing",
          "slashing"
        ],
        "note": "while in dim light or darkness",
        "cond": true
      }
    ],
    "languages": "Common",
    "cr": "13",
    "trait": [
      {
        "Name": "Two Heads",
        "Text": "The Angry has advantage on Wisdom (Perception) checks and on saving throws against being blinded, charmed, deafened, frightened, stunned, or knocked unconscious."
      },
      {
        "Name": "Rising Anger",
        "Text": "If another creature deals damage to the Angry, the Angry's attack rolls have advantage until the end of its next turn, and the first time it hits with a hook attack on its next turn, the attack's target takes an extra 19 (3d12) psychic damage."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The Angry makes two hook attacks."
      },
      {
        "Name": "Hook",
        "Text": "Melee Weapon 8 to hit, reach 5 ft., one target. Hit:16 (2d12 + 3) piercing damage."
      }
    ],
    "environment": [
      "underdark",
      "urban"
    ]
  },
  {
    "name": "The Hungry",
    "size": "M",
    "type": "monstrosity",
    "alignment": "Lawful Evil",
    "ac": "17 natural armor",
    "hp": 225,
    "speed": "Walk 30",
    "str": 19,
    "dex": 10,
    "con": 17,
    "int": 6,
    "wis": 11,
    "cha": 6,
    "senses": "darkvision 60 ft.",
    "passive": 10,
    "resist": [
      {
        "resist": [
          "bludgeoning",
          "piercing",
          "slashing"
        ],
        "note": "while in dim light or darkness",
        "cond": true
      }
    ],
    "languages": "Common",
    "cr": "11",
    "trait": [
      {
        "Name": "Life Hunger",
        "Text": "If a creature the Hungry can see regains hit points, the Hungry gains two benefits until the end of its next turn: it has advantage on attack rolls, and its bite deals an extra 22 (4d10) necrotic damage on a hit."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The Hungry makes two attacks: one with its bite and one with its claws."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 8 to hit, reach 5 ft., one target. Hit:8 (1d8 + 4) piercing damage plus 13 (3d8) necrotic damage."
      },
      {
        "Name": "Claws",
        "Text": "Melee Weapon 8 to hit, reach 10 ft., one target. Hit:18 (4d6 + 4) slashing damage. If the target is Medium or smaller, it is grappled (escape 16) and is restrained until the grapple ends. While grappling a creature, the Hungry can't attack with its claws."
      }
    ],
    "environment": [
      "forest",
      "underdark",
      "urban"
    ]
  },
  {
    "name": "The Lonely",
    "size": "M",
    "type": "monstrosity",
    "alignment": "Lawful Evil",
    "ac": "16 natural armor",
    "hp": 112,
    "speed": "Walk 30",
    "str": 16,
    "dex": 12,
    "con": 17,
    "int": 6,
    "wis": 11,
    "cha": 6,
    "senses": "darkvision 60 ft.",
    "passive": 10,
    "resist": [
      {
        "resist": [
          "bludgeoning",
          "piercing",
          "slashing"
        ],
        "note": "while in dim light or darkness",
        "cond": true
      }
    ],
    "languages": "Common",
    "cr": "9",
    "trait": [
      {
        "Name": "Psychic Leech",
        "Text": "At the start of each of the Lonely's turns, each creature within 5 feet of it must succeed on a 15 Wisdom saving throw or take 10 (3d6) psychic damage."
      },
      {
        "Name": "Thrives on Company",
        "Text": "The Lonely has advantage on attack rolls while it is within 30 feet of at least two other creatures. It otherwise has disadvantage on attack rolls."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The Lonely makes one harpoon arm attack and uses Sorrowful Embrace."
      },
      {
        "Name": "Harpoon Arm",
        "Text": "Melee Weapon 7 to hit, reach 60 ft., one target. Hit:21 (4d8 + 3) piercing damage, and the target is grappled (escape 15) if it is a Large or smaller creature."
      },
      {
        "Name": "Sorrowful Embrace",
        "Text": "Each creature grappled by the Lonely must make a 15 Wisdom saving throw. A creature takes 18 (4d8) psychic damage on a failed save, or half as much damage on a successful one. In either case, the Lonely pulls each creature grappled by it up to 30 feet straight toward it."
      }
    ],
    "environment": [
      "coastal",
      "desert",
      "mountain",
      "underdark",
      "urban"
    ]
  },
  {
    "name": "The Lost",
    "size": "M",
    "type": "monstrosity",
    "alignment": "Lawful Evil",
    "ac": "15 natural armor",
    "hp": 78,
    "speed": "Walk 30",
    "str": 17,
    "dex": 12,
    "con": 15,
    "int": 6,
    "wis": 7,
    "cha": 5,
    "skill": "Athletics +6",
    "senses": "darkvision 60 ft.",
    "passive": 8,
    "resist": [
      {
        "resist": [
          "bludgeoning",
          "piercing",
          "slashing"
        ],
        "note": "while in dim light or darkness",
        "cond": true
      }
    ],
    "languages": "Common",
    "cr": "7",
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The Lost makes two arm spike attacks."
      },
      {
        "Name": "Arm Spike",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:14 (2d10 + 3) piercing damage."
      },
      {
        "Name": "Embrace",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:25 (4d10 + 3) piercing damage, and the target is grappled (escape 14) if it is a Medium or smaller creature. Until the grapple ends, the target is frightened, and it takes 27 (6d8) psychic damage at the end of each of its turns. The Lost can embrace only one creature at a time."
      }
    ],
    "reaction": [
      {
        "Name": "Tightening Embrace",
        "Text": "If the Lost takes damage while it has a creature grappled, that creature takes 18 (4d8) psychic damage."
      }
    ],
    "environment": [
      "arctic",
      "desert",
      "forest",
      "mountain",
      "swamp",
      "underdark",
      "urban"
    ]
  },
  {
    "name": "The Wretched",
    "size": "S",
    "type": "monstrosity",
    "alignment": "Lawful Evil",
    "ac": "15 natural armor",
    "hp": 10,
    "speed": "Walk 40",
    "str": 7,
    "dex": 12,
    "con": 9,
    "int": 5,
    "wis": 6,
    "cha": 5,
    "senses": "darkvision 60 ft.",
    "passive": 8,
    "resist": [
      {
        "resist": [
          "bludgeoning",
          "piercing",
          "slashing"
        ],
        "note": "while in dim light or darkness",
        "cond": true
      }
    ],
    "cr": "1/4",
    "trait": [
      {
        "Name": "Wretched Pack Tactics",
        "Text": "The Wretched has advantage on an attack roll against a creature if at least one of the Wretched's allies is within 5 feet of the creature and the ally isn't incapacitated. The Wretched otherwise has disadvantage on attack rolls."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one target. Hit:6 (1d10 + 1) piercing damage, and the Wretched attaches to the target. While attached, the Wretched can't attack, and at the start of each of the Wretched's turns, the target takes 6 (1d10 + 1) necrotic damage.<br>The attached Wretched moves with the target whenever the target moves, requiring none of the Wretched's movement. The Wretched can detach itself by spending 5 feet of its movement on its turn. A creature, including the target, can use its action to detach a Wretched."
      }
    ],
    "environment": [
      "swamp",
      "underdark",
      "urban"
    ]
  },
  {
    "name": "Titivilus",
    "isNamedCreature": true,
    "size": "M",
    "type": "fiend (devil)",
    "alignment": "Lawful Evil",
    "ac": "20 natural armor",
    "hp": 127,
    "speed": "Walk 40, Fly 60",
    "str": 19,
    "dex": 22,
    "con": 17,
    "int": 24,
    "wis": 22,
    "cha": 26,
    "save": "Dex +11, Con +8, Wis +11, Cha +13",
    "skill": "Deception +13, Insight +11, Intimidation +13, Persuasion +13",
    "senses": "darkvision 120 ft.",
    "passive": 16,
    "resist": [
      "cold",
      {
        "resist": [
          "bludgeoning",
          "piercing",
          "slashing"
        ],
        "note": "from nonmagical attacks that aren't silvered",
        "cond": true
      }
    ],
    "immune": "fire, poison",
    "conditionImmune": "charmed, exhaustion, frightened, poisoned",
    "languages": "all, telepathy 120 ft.",
    "cr": "16",
    "trait": [
      {
        "Name": "Legendary Resistance (3/Day)",
        "Text": "If Titivilus fails a saving throw, he can choose to succeed instead."
      },
      {
        "Name": "Magic Resistance",
        "Text": "Titivilus has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Magic Weapons",
        "Text": "Titivilus's weapon attacks are magical."
      },
      {
        "Name": "Regeneration",
        "Text": "Titivilus regains 10 hit points at the start of his turn. If he takes cold or radiant damage, this trait doesn't function at the start of his next turn. Titivilus dies only if he starts his turn with 0 hit points and doesn't regenerate."
      },
      {
        "Name": "Ventriloquism",
        "Text": "Whenever Titivilus speaks, he can choose a point within 60 feet; his voice emanates from that point."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day each: <em>feeblemind, symbol (discord or sleep only)</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "Titivilus makes one sword attack and uses his Frightful Word once."
      },
      {
        "Name": "Silver Sword",
        "Text": "Melee Weapon 9 to hit, reach 5 ft., one target. Hit:8 (1d8 + 4) slashing damage plus 16 (3d10) necrotic damage, or 9 (1d10 + 4) slashing damage plus 16 (3d10) necrotic damage if used with two hands. If the target is a creature, its hit point maximum is reduced by an amount equal to half the necrotic damage it takes."
      },
      {
        "Name": "Frightful Word",
        "Text": "Titivilus targets one creature he can see within 10 feet of him. The target must succeed on a 21 Wisdom saving throw or become frightened for 1 minute. While frightened in this way, the target must take the Dash action and move away from Titivilus by the safest available route on each of its turns, unless there is nowhere to move, in which case it needn't take the Dash action. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      },
      {
        "Name": "Teleport",
        "Text": "Titivilus magically teleports, along with any equipment he is wearing and carrying, up to 120 feet to an unoccupied space he can see."
      },
      {
        "Name": "Twisting Words",
        "Text": "Titivilus targets one creature he can see within 60 feet of him. The target must make a 21 Charisma saving throw. On a failure the target is charmed for 1 minute. The charmed target can repeat the saving throw if Titivilus deals any damage to it. A creature that succeeds on the saving throw is immune to Titivilus's Twisting Words for 24 hours."
      }
    ],
    "legendary": [
      {
        "Name": "Assault (Costs 2 Actions)",
        "Text": "Titivilus attacks with his silver sword or uses his Frightful Word."
      },
      {
        "Name": "Corrupting Guidance",
        "Text": "Titivilus uses Twisting Words. Alternatively, he targets one creature charmed by him that is within 60 feet of him; that charmed target must make a 21 Charisma saving throw. On a failure, Titivilus decides how the target acts during its next turn."
      },
      {
        "Name": "Teleport",
        "Text": "Titivilus uses his Teleport action."
      }
    ]
  },
  {
    "name": "Tortle",
    "size": "M",
    "type": "humanoid (tortle)",
    "alignment": "Lawful Good",
    "ac": "17 natural armor",
    "hp": 22,
    "speed": "Walk 30",
    "str": 15,
    "dex": 10,
    "con": 12,
    "int": 11,
    "wis": 13,
    "cha": 12,
    "skill": "Athletics +4, Survival +3",
    "passive": 11,
    "languages": "Aquan, Common",
    "cr": "1/4",
    "trait": [
      {
        "Name": "Hold Breath",
        "Text": "The tortle can hold its breath for 1 hour."
      }
    ],
    "action": [
      {
        "Name": "Claws",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:4 (1d4 + 2) slashing damage."
      },
      {
        "Name": "Quarterstaff",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:5 (1d6 + 2) bludgeoning damage, or 6 (1d8 + 2) bludgeoning damage if used with two hands."
      },
      {
        "Name": "Light Crossbow",
        "Text": "Ranged Weapon 2 to hit, range 80/320 ft., one target. Hit:4 (1d8) piercing damage."
      },
      {
        "Name": "Shell Defense",
        "Text": "The tortle withdraws into its shell. Until it emerges, it gains a +4 bonus to AC and has advantage on Strength and Constitution saving throws. While in its shell, the tortle is prone, its speed is 0 and can't increase, it has disadvantage on Dexterity saving throws, it can't take reactions, and the only action it can take is a bonus action to emerge."
      }
    ],
    "environment": [
      "coastal"
    ]
  },
  {
    "name": "Tortle Druid",
    "size": "M",
    "type": "humanoid (tortle)",
    "alignment": "Lawful Neutral",
    "ac": "17 natural armor",
    "hp": 33,
    "speed": "Walk 30",
    "str": 14,
    "dex": 10,
    "con": 12,
    "int": 11,
    "wis": 15,
    "cha": 12,
    "skill": "Animal handling +4, Nature +2, Survival +4",
    "passive": 12,
    "languages": "Aquan, Common",
    "cr": "2",
    "trait": [
      {
        "Name": "Hold Breath",
        "Text": "The tortle can hold its breath for 1 hour."
      },
      {
        "Name": "Spellcasting",
        "Text": "The tortle is a 4th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 12, +4 to hit with spell attacks). It has the following druid spells prepared:<br><br>Cantrips (at will): <em>druidcraft, guidance, produce flame</em><br>1st (1 slots): <em>animal friendship, cure wounds, speak with animals, thunderwave</em><br>2nd (2 slots): <em>darkvision, hold person</em>"
      }
    ],
    "action": [
      {
        "Name": "Claws",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:4 (1d4 + 2) slashing damage."
      },
      {
        "Name": "Quarterstaff",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:5 (1d6 + 2) bludgeoning damage, or 6 (1d8 + 2) bludgeoning damage if used with two hands."
      },
      {
        "Name": "Shell Defense",
        "Text": "The tortle withdraws into its shell. Until it emerges, it gains a +4 bonus to AC and has advantage on Strength and Constitution saving throws. While in its shell, the tortle is prone, its speed is 0 and can't increase, it has disadvantage on Dexterity saving throws, it can't take reactions, and the only action it can take is a bonus action to emerge."
      }
    ],
    "environment": [
      "coastal"
    ]
  },
  {
    "name": "Vampiric Mist",
    "size": "M",
    "type": "undead",
    "alignment": "Chaotic Evil",
    "ac": 13,
    "hp": 30,
    "speed": "Walk 0, Fly 30 (hover)",
    "str": 6,
    "dex": 16,
    "con": 16,
    "int": 6,
    "wis": 12,
    "cha": 7,
    "save": "Wis +3",
    "senses": "darkvision 60 ft.",
    "passive": 11,
    "resist": [
      "acid",
      "cold",
      "lightning",
      "necrotic",
      "thunder",
      {
        "resist": [
          "bludgeoning",
          "piercing",
          "slashing"
        ],
        "note": "from nonmagical attacks",
        "cond": true
      }
    ],
    "immune": "poison",
    "conditionImmune": "charmed, exhaustion, grappled, paralyzed, petrified, poisoned, prone, restrained",
    "cr": "3",
    "trait": [
      {
        "Name": "Life Sense",
        "Text": "The mist can sense the location of any creature within 60 feet of it, unless that creature's type is construct or undead."
      },
      {
        "Name": "Forbiddance",
        "Text": "The mist can't enter a residence without an invitation from one of the occupants."
      },
      {
        "Name": "Misty Form",
        "Text": "The mist can occupy another creature's space and vice versa. In addition, if air can pass through a space, the mist can pass through it without squeezing. Each foot of movement in water costs it 2 extra feet, rather than 1 extra foot. The mist can't manipulate objects in any way that requires fingers or manual dexterity."
      },
      {
        "Name": "Sunlight Hypersensitivity",
        "Text": "The mist takes 10 radiant damage whenever it starts its turn in sunlight. While in sunlight, the mist has disadvantage on attack rolls and ability checks."
      }
    ],
    "action": [
      {
        "Name": "Life Drain",
        "Text": "The mist touches one creature in its space. The target must succeed on a 13 Constitution saving throw (undead and constructs automatically succeed), or it takes 10 (2d6 + 3) necrotic damage, the mist regains 10 hit points, and the target's hit point maximum is reduced by an amount equal to the necrotic damage taken. This reduction lasts until the target finishes a long rest. The target dies if its hit point maximum is reduced to 0."
      }
    ],
    "environment": [
      "arctic",
      "coastal",
      "forest",
      "grassland",
      "mountain",
      "swamp",
      "underdark",
      "urban"
    ],
    "altArt": [
      {
        "name": "Vampiric Mist (Alt)",
        "source": "TftYP"
      }
    ]
  },
  {
    "name": "Venom Troll",
    "size": "L",
    "type": "giant",
    "alignment": "Chaotic Evil",
    "ac": "15 natural armor",
    "hp": 94,
    "speed": "Walk 30",
    "str": 18,
    "dex": 13,
    "con": 20,
    "int": 7,
    "wis": 9,
    "cha": 7,
    "skill": "Perception +2",
    "senses": "darkvision 60 ft.",
    "passive": 12,
    "immune": "poison",
    "conditionImmune": "poisoned",
    "languages": "Giant",
    "cr": "7",
    "trait": [
      {
        "Name": "Keen Smell",
        "Text": "The troll has advantage on Wisdom (Perception) checks that rely on smell."
      },
      {
        "Name": "Poison Splash",
        "Text": "When the troll takes damage of any type but psychic, each creature within 5 feet of the troll takes 9 (2d8) poison damage."
      },
      {
        "Name": "Regeneration",
        "Text": "The troll regains 10 hit points at the start of each of its turns. If the troll takes acid or fire damage, this trait doesn't function at the start of the troll's next turn. The troll dies only if it starts its turn with 0 hit points and doesn't regenerate."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The troll makes three attacks: one with its bite and two with its claws."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:7 (1d6 + 4) piercing damage plus 4 (1d8) poison damage, and the creature is poisoned until the start of the troll's next turn."
      },
      {
        "Name": "Claws",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:11 (2d6 + 4) slashing damage plus 4 (1d8) poison damage."
      },
      {
        "Name": "Venom Spray (Recharge 6)",
        "Text": "The troll slices itself with a claw, releasing a spray of poison in a 15-foot cube. The troll takes 7 (2d6) slashing damage (this damage can't be reduced in any way). Each creature in the area must make a 16 Constitution saving throw. On a failed save, a creature takes 18 (4d8) poison damage and is poisoned for 1 minute. On a successful save, the creature takes half as much damage and isn't poisoned. A poisoned creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      }
    ],
    "environment": [
      "forest",
      "swamp",
      "underdark"
    ]
  },
  {
    "name": "Wastrilith",
    "size": "L",
    "type": "fiend (demon)",
    "alignment": "Chaotic Evil",
    "ac": "18 natural armor",
    "hp": 157,
    "speed": "Walk 30, Swim 80",
    "str": 19,
    "dex": 18,
    "con": 21,
    "int": 19,
    "wis": 12,
    "cha": 14,
    "save": "Str +9, Con +10",
    "senses": "darkvision 120 ft.",
    "passive": 11,
    "resist": [
      "cold",
      "fire",
      "lightning",
      {
        "resist": [
          "bludgeoning",
          "piercing",
          "slashing"
        ],
        "note": "from nonmagical attacks",
        "cond": true
      }
    ],
    "immune": "poison",
    "conditionImmune": "poisoned",
    "languages": "Abyssal, telepathy 120 ft.",
    "cr": "13",
    "trait": [
      {
        "Name": "Amphibious",
        "Text": "The wastrilith can breathe air and water."
      },
      {
        "Name": "Corrupt Water",
        "Text": "At the start of each of the wastrilith's turns, exposed water within 30 feet of it is befouled. Underwater, this effect lightly obscures the area until a current clears it away. Water in containers remains corrupted until it evaporates."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The wastrilith has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Undertow",
        "Text": "As a bonus action when the wastrilith is underwater, it can cause all water within 60 feet of it to be difficult terrain for other creatures until the start of its next turn."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The wastrilith uses Grasping Spout and makes three attacks: one with its bite and two with its claws."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 9 to hit, reach 10 ft., one target. Hit:30 (4d12 + 4) piercing damage."
      },
      {
        "Name": "Claws",
        "Text": "Melee Weapon 9 to hit, reach 10 ft., one target. Hit:18 (4d6 + 4) slashing damage."
      },
      {
        "Name": "Grasping Spout",
        "Text": "The wastrilith magically launches a spout of water at one creature it can see within 60 feet of it. The target must make a 17 Strength saving throw, and it has disadvantage if it's underwater. On a failed save, it takes 22 (4d8 + 4) acid damage and is pulled up to 60 feet toward the wastrilith. On a successful save, it takes half as much damage and isn't pulled."
      }
    ],
    "environment": [
      "coastal",
      "swamp",
      "underdark",
      "underwater"
    ]
  },
  {
    "name": "Water Elemental Myrmidon",
    "size": "M",
    "type": "elemental",
    "alignment": "Neutral",
    "ac": "18 plate armor",
    "hp": 127,
    "speed": "Walk 40, Swim 40",
    "str": 18,
    "dex": 14,
    "con": 15,
    "int": 8,
    "wis": 10,
    "cha": 10,
    "senses": "darkvision 60 ft.",
    "passive": 10,
    "resist": [
      "acid",
      {
        "resist": [
          "bludgeoning",
          "piercing",
          "slashing"
        ],
        "note": "from nonmagical attacks",
        "cond": true
      }
    ],
    "immune": "poison",
    "conditionImmune": "paralyzed, petrified, poisoned, prone",
    "languages": "Aquan, one language of its creator's choice",
    "cr": "7",
    "trait": [
      {
        "Name": "Magic Weapons",
        "Text": "The myrmidon's weapon attacks are magical."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The myrmidon makes three trident attacks."
      },
      {
        "Name": "Trident",
        "Text": "Melee or Ranged Weapon 7 to hit, reach 5 ft. or range 20/60 ft., one target. Hit:7 (1d6 + 4) piercing damage, or 8 (1d8 + 4) piercing damage if used with two hands to make a melee attack."
      },
      {
        "Name": "Freezing Strikes (Recharge 6)",
        "Text": "The myrmidon uses Multiattack. Each attack that hits deals an extra 5 (1d10) cold damage. A target that is hit by one or more of these attacks has its speed reduced by 10 feet until the end of the myrmidon's next turn."
      }
    ]
  },
  {
    "name": "White Abishai",
    "size": "M",
    "type": "fiend (devil)",
    "alignment": "Lawful Evil",
    "ac": "15 natural armor",
    "hp": 68,
    "speed": "Walk 30, Fly 40",
    "str": 16,
    "dex": 11,
    "con": 18,
    "int": 11,
    "wis": 12,
    "cha": 13,
    "save": "Str +6, Con +7",
    "senses": "darkvision 120 ft.",
    "passive": 11,
    "resist": [
      {
        "resist": [
          "bludgeoning",
          "piercing",
          "slashing"
        ],
        "note": "from nonmagical attacks that aren't silvered",
        "cond": true
      }
    ],
    "immune": "cold, fire, poison",
    "conditionImmune": "poisoned",
    "languages": "Draconic, Infernal, telepathy 120 ft.",
    "cr": "6",
    "trait": [
      {
        "Name": "Devil's Sight",
        "Text": "Magical darkness doesn't impede the abishai's darkvision."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The abishai has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Magic Weapons",
        "Text": "The abishai's weapon attacks are magical."
      },
      {
        "Name": "Reckless",
        "Text": "At the start of its turn, the abishai can gain advantage on all melee weapon attack rolls during that turn, but attack rolls against it have advantage until the start of its next turn."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The abishai makes two attacks: one with its longsword and one with its claw."
      },
      {
        "Name": "Longsword",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:7 (1d8 + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:8 (1d10 + 3) slashing damage."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:5 (1d4 + 3) piercing damage plus 3 (1d6) cold damage."
      }
    ],
    "reaction": [
      {
        "Name": "Vicious Reprisal",
        "Text": "In response to taking damage, the abishai makes a bite attack against a random creature within 5 feet of it. If no creature is within reach, the abishai moves up to half its speed toward an enemy it can see, without provoking opportunity attacks."
      }
    ],
    "environment": [
      "urban"
    ]
  },
  {
    "name": "Winter Eladrin",
    "size": "M",
    "type": "fey (elf)",
    "alignment": "Chaotic Neutral",
    "ac": "19 natural armor",
    "hp": 127,
    "speed": "Walk 30",
    "str": 11,
    "dex": 10,
    "con": 16,
    "int": 18,
    "wis": 17,
    "cha": 13,
    "senses": "darkvision 60 ft.",
    "passive": 13,
    "resist": [
      "cold",
      {
        "resist": [
          "bludgeoning",
          "piercing",
          "slashing"
        ],
        "note": "from nonmagical attacks",
        "cond": true
      }
    ],
    "languages": "Common, Elvish, Sylvan",
    "cr": "10",
    "trait": [
      {
        "Name": "Fey Step (Recharge 4-6)",
        "Text": "As a bonus action, the eladrin can teleport up to 30 feet to an unoccupied space it can see."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The eladrin has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Sorrowful Presence",
        "Text": "Any non-eladrin creature that starts its turn within 60 feet of the eladrin must make a 13 Wisdom saving throw. On a failed save, the creature is charmed for 1 minute. While charmed in this way, the creature has disadvantage on ability checks and saving throws. The charmed creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to any eladrin's Sorrowful Presence for the next 24 hours."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day each: <em>cone of cold, ice storm</em>"
      }
    ],
    "action": [
      {
        "Name": "Longsword",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:4 (1d8) slashing damage, or 5 (1d10) slashing damage if used with two hands."
      },
      {
        "Name": "Longbow",
        "Text": "Ranged Weapon 4 to hit, range 150/600 ft., one target. Hit:4 (1d8) piercing damage."
      }
    ],
    "reaction": [
      {
        "Name": "Frigid Rebuke",
        "Text": "When the eladrin takes damage from a creature the eladrin can see within 60 feet of it, the eladrin can force that creature to succeed on a 16 Constitution saving throw or take 11 (2d10) cold damage."
      }
    ],
    "environment": [
      "arctic",
      "forest"
    ]
  },
  {
    "name": "Yagnoloth",
    "size": "L",
    "type": "fiend (yugoloth)",
    "alignment": "Neutral Evil",
    "ac": "17 natural armor",
    "hp": 147,
    "speed": "Walk 40",
    "str": 19,
    "dex": 14,
    "con": 21,
    "int": 16,
    "wis": 15,
    "cha": 18,
    "save": "Dex +6, Int +7, Wis +6, Cha +8",
    "skill": "Deception +8, Insight +6, Perception +6, Persuasion +8",
    "senses": "blindsight 60 ft., darkvision 60 ft.",
    "passive": 16,
    "resist": [
      "cold",
      "fire",
      "lightning",
      {
        "resist": [
          "bludgeoning",
          "piercing",
          "slashing"
        ],
        "note": "from nonmagical attacks",
        "cond": true
      }
    ],
    "immune": "acid, poison",
    "conditionImmune": "poisoned",
    "languages": "Abyssal, Infernal, telepathy 60 ft.",
    "cr": "11",
    "trait": [
      {
        "Name": "Magic Resistance",
        "Text": "The yagnoloth has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Magic Weapons",
        "Text": "The yagnoloth's weapon attacks are magical."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>3/day: <em>lightning bolt</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The yagnoloth makes one massive arm attack and one electrified touch attack, or it makes one massive arm attack and teleports before or after the attack."
      },
      {
        "Name": "Electrified Touch",
        "Text": "Melee Weapon 8 to hit, reach 5 ft., one target. Hit:27 (6d8) lightning damage."
      },
      {
        "Name": "Massive Arm",
        "Text": "Melee Weapon 8 to hit, reach 15 ft., one target. Hit:23 (3d12 + 4) bludgeoning damage. If the target is a creature, it must succeed on a 16 Constitution saving throw or is stunned until the end of the yagnoloth's next turn."
      },
      {
        "Name": "Life Leech",
        "Text": "The yagnoloth touches one incapacitated creature within 15 feet of it. The target takes 36 (7d8 + 4) necrotic damage, and the yagnoloth gains temporary hit points equal to half the damage dealt. The target must succeed on a 16 Constitution saving throw, or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest, and the target dies if its hit point maximum is reduced to 0."
      },
      {
        "Name": "Battlefield Cunning (Recharge 4-6)",
        "Text": "Up to two allied yugoloths within 60 feet of the yagnoloth that can hear it can use their reactions to make one melee attack each."
      },
      {
        "Name": "Teleport",
        "Text": "The yagnoloth magically teleports, along with any equipment it is wearing or carrying, up to 60 feet to an unoccupied space it can see."
      }
    ],
    "environment": [
      "urban"
    ]
  },
  {
    "name": "Yeenoghu",
    "isNamedCreature": true,
    "size": "H",
    "type": "fiend (demon)",
    "alignment": "Chaotic Evil",
    "ac": "20 natural armor",
    "hp": 333,
    "speed": "Walk 50",
    "str": 29,
    "dex": 16,
    "con": 26,
    "int": 15,
    "wis": 24,
    "cha": 15,
    "save": "Dex +10, Con +15, Wis +14",
    "skill": "Intimidation +9, Perception +14",
    "senses": "truesight 120 ft.",
    "passive": 24,
    "resist": [
      "cold",
      "fire",
      "lightning"
    ],
    "immune": "poison, bludgeoning, piercing, slashing from nonmagical attacks",
    "conditionImmune": "charmed, exhaustion, frightened, poisoned",
    "languages": "all, telepathy 120 ft.",
    "cr": "24",
    "trait": [
      {
        "Name": "Legendary Resistance (3/Day)",
        "Text": "If Yeenoghu fails a saving throw, he can choose to succeed instead."
      },
      {
        "Name": "Magic Resistance",
        "Text": "Yeenoghu has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Magic Weapons",
        "Text": "Yeenoghu's weapon attacks are magical."
      },
      {
        "Name": "Rampage",
        "Text": "When Yeenoghu reduces a creature to 0 hit points with a melee attack on his turn, Yeenoghu can take a bonus action to move up to half his speed and make a bite attack."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day: <em>teleport</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "Yeenoghu makes three flail attacks. If an attack hits, he can cause it to create an additional effect of his choice or at random (each effect can be used only once per Multiattack):<br>1. The attack deals an extra 13 (2d12) bludgeoning damage.<br>2. The target must succeed on a 17 Constitution saving throw or be paralyzed until the start of Yeenoghu's next turn.<br>3. The target must succeed on a 17 Wisdom saving throw or be affected by the confusion spell until the start of Yeenoghu's next turn."
      },
      {
        "Name": "Flail",
        "Text": "Melee Weapon 16 to hit, reach 15 ft., one target. Hit:15 (1d12 + 9) bludgeoning damage."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 16 to hit, reach 10 ft., one target. Hit:14 (1d10 + 9) piercing damage."
      }
    ],
    "legendary": [
      {
        "Name": "Charge",
        "Text": "Yeenoghu moves up to his speed."
      },
      {
        "Name": "Swat Away",
        "Text": "Yeenoghu makes a flail attack. If the attack hits, the target must succeed on a 24 Strength saving throw or be pushed 15 feet in a straight line away from Yeenoghu. If the saving throw fails by 5 or more, the target falls prone."
      },
      {
        "Name": "Savage (Costs 2 Actions)",
        "Text": "Yeenoghu makes a bite attack against each creature within 10 feet of him."
      }
    ]
  },
  {
    "name": "Young Kruthik",
    "size": "S",
    "type": "monstrosity",
    "alignment": "Unaligned",
    "ac": "16 natural armor",
    "hp": 9,
    "speed": "Walk 30, Burrow 10, Climb 30",
    "str": 13,
    "dex": 16,
    "con": 13,
    "int": 4,
    "wis": 10,
    "cha": 6,
    "senses": "darkvision 30 ft., tremorsense 60 ft.",
    "passive": 10,
    "languages": "Kruthik",
    "cr": "1/8",
    "trait": [
      {
        "Name": "Keen Smell",
        "Text": "The kruthik has advantage on Wisdom (Perception) checks that rely on smell."
      },
      {
        "Name": "Pack Tactics",
        "Text": "The kruthik has advantage on an attack roll against a creature if at least one of the kruthik's allies is within 5 feet of the creature and the ally isn't incapacitated."
      },
      {
        "Name": "Tunneler",
        "Text": "The kruthik can burrow through solid rock at half its burrowing speed and leaves a 2 1/2-foot-diameter tunnel in its wake."
      }
    ],
    "action": [
      {
        "Name": "Stab",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:5 (1d4 + 3) piercing damage."
      }
    ],
    "environment": [
      "desert",
      "mountain",
      "underdark"
    ]
  },
  {
    "name": "Zaratan",
    "size": "G",
    "type": "elemental",
    "alignment": "Neutral",
    "ac": "21 natural armor",
    "hp": 307,
    "speed": "Walk 40, Swim 40",
    "str": 30,
    "dex": 10,
    "con": 30,
    "int": 2,
    "wis": 21,
    "cha": 18,
    "save": "Wis +12, Cha +11",
    "senses": "darkvision 60 ft., tremorsense 60 ft.",
    "passive": 15,
    "resist": [
      "cold",
      "fire",
      "lightning",
      {
        "resist": [
          "bludgeoning",
          "piercing",
          "slashing"
        ],
        "note": "from nonmagical attacks",
        "cond": true
      }
    ],
    "immune": "poison",
    "vulnerable": [
      "thunder"
    ],
    "conditionImmune": "exhaustion, paralyzed, petrified, poisoned, stunned",
    "cr": "22",
    "trait": [
      {
        "Name": "Earth-Shaking Movement",
        "Text": "As a bonus action after moving at least 10 feet on the ground, the zaratan can send a shock wave through the ground in a 120-foot-radius circle centered on itself. That area becomes difficult terrain for 1 minute. Each creature on the ground that is concentrating must succeed on a 25 Constitution saving throw or the creature's concentration is broken.<br>The shock wave deals 100 thunder damage to all structures in contact with the ground in the area. If a creature is near a structure that collapses, the creature might be buried; a creature within half the distance of the structure's height must make a 25 Dexterity saving throw. On a failed save, the creature takes 17 (5d6) bludgeoning damage, is knocked prone, and is trapped in the rubble. A trapped creature is restrained, requiring a successful 20 Strength (Athletics) check as an action to escape. Another creature within 5 feet of the buried creature can use its action to clear rubble and grant advantage on the check. If three creatures use their actions in this way, the check is an automatic success. On a successful save, the creature takes half as much damage and doesn't fall prone or become trapped."
      },
      {
        "Name": "Legendary Resistance (3/Day)",
        "Text": "If the zaratan fails a saving throw, it can choose to succeed instead."
      },
      {
        "Name": "Magic Weapons",
        "Text": "The zaratan's weapon attacks are magical."
      },
      {
        "Name": "Siege Monster",
        "Text": "The elemental deals double damage to objects and structures (included in Earth-Shaking Movement)."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The zaratan makes two attacks: one with its bite and one with its stomp."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 17 to hit, reach 20 ft., one target. Hit:28 (4d8 + 10) piercing damage."
      },
      {
        "Name": "Stomp",
        "Text": "Melee Weapon 17 to hit, reach 20 ft., one target. Hit:26 (3d10 + 10) bludgeoning damage."
      },
      {
        "Name": "Spit Rock",
        "Text": "Ranged Weapon 17 to hit, range 120/240 ft., one target. Hit:31 (6d8 + 10) bludgeoning damage."
      },
      {
        "Name": "Spew Debris (Recharge 5-6)",
        "Text": "The zaratan exhales rocky debris in a 90-foot cube. Each creature in that area must make a 25 Dexterity saving throw. A creature takes 33 (6d10) bludgeoning damage on a failed save, or half as much damage on a successful one. A creature that fails the save by 5 or more is knocked prone."
      }
    ],
    "legendary": [
      {
        "Name": "Stomp",
        "Text": "The zaratan makes one stomp attack."
      },
      {
        "Name": "Move",
        "Text": "The zaratan moves up to its speed."
      },
      {
        "Name": "Spit (Costs 2 Actions)",
        "Text": "The zaratan uses Spit Rock."
      },
      {
        "Name": "Retract (Costs 2 Actions)",
        "Text": "The zaratan retracts into its shell. Until it takes its Emerge action, it has resistance to all damage, and it is restrained. The next time it takes a legendary action, it must take its Revitalize or Emerge action."
      },
      {
        "Name": "Revitalize (Costs 2 Actions)",
        "Text": "The zaratan can use this option only if it is retracted in its shell. It regains 52 (5d20) hit points. The next time it takes a legendary action, it must take its Emerge action."
      },
      {
        "Name": "Emerge (Costs 2 Actions)",
        "Text": "The zaratan emerges from its shell and uses Spit Rock. It can use this option only if it is retracted in its shell."
      }
    ],
    "environment": [
      "desert",
      "forest",
      "grassland",
      "hill",
      "mountain",
      "underdark"
    ]
  },
  {
    "name": "Zariel",
    "isNamedCreature": true,
    "size": "L",
    "type": "fiend (devil)",
    "alignment": "Lawful Evil",
    "ac": "21 natural armor",
    "hp": 580,
    "speed": "Walk 50, Fly 150",
    "str": 27,
    "dex": 24,
    "con": 28,
    "int": 26,
    "wis": 27,
    "cha": 30,
    "save": "Int +16, Wis +16, Cha +18",
    "skill": "Intimidation +18, Perception +16",
    "senses": "darkvision 120 ft.",
    "passive": 26,
    "resist": [
      "cold",
      "fire",
      "radiant",
      {
        "resist": [
          "bludgeoning",
          "piercing",
          "slashing"
        ],
        "note": "from nonmagical attacks that aren't silvered",
        "cond": true
      }
    ],
    "immune": "necrotic, poison",
    "conditionImmune": "charmed, exhaustion, frightened, poisoned",
    "languages": "all, telepathy 120 ft.",
    "cr": "26",
    "trait": [
      {
        "Name": "Devil's Sight",
        "Text": "Magical darkness doesn't impede Zariel's darkvision."
      },
      {
        "Name": "Magic Weapons",
        "Text": "Zariel's weapon attacks are magical. When she hits with any weapon, the weapon deals an extra 36 (8d8) fire damage (included in the weapon attacks below)."
      },
      {
        "Name": "Legendary Resistance (3/Day)",
        "Text": "If Zariel fails a saving throw, she can choose to succeed instead."
      },
      {
        "Name": "Magic Resistance",
        "Text": "Zariel has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Regeneration",
        "Text": "Zariel regains 20 hit points at the start of her turn. If she takes radiant damage, this trait doesn't function at the start of her next turn. Zariel dies only if she starts her turn with 0 hit points and doesn't regenerate."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>3/day each: <em>blade barrier, dispel evil and good, finger of death</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "Zariel attacks twice with her longsword or with her javelins. She can substitute Horrid Touch for one of these attacks."
      },
      {
        "Name": "Longsword",
        "Text": "Melee Weapon 16 to hit, reach 10 ft., one target. Hit:17 (2d8 + 8) slashing damage plus 36 (8d8) fire damage, or 19 (2d10 + 8) slashing damage plus 36 (8d8) fire damage if used with two hands."
      },
      {
        "Name": "Javelin",
        "Text": "Melee or Ranged Weapon 16 to hit, reach 10 ft. or range 30/120 ft., one target. Hit:15 (2d6 + 8) piercing damage plus 36 (8d8) fire damage."
      },
      {
        "Name": "Horrid Touch (Recharge 5-6)",
        "Text": "Zariel touches one creature within 10 feet of her. The target must succeed on a DC 26 Constitution saving throw or take 44 (8d10) necrotic damage and be poisoned for 1 minute. While poisoned in this way, the target is also blinded and deafened. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      },
      {
        "Name": "Teleport",
        "Text": "Zariel magically teleports, along with any equipment she is wearing and carrying, up to 120 feet to an unoccupied space she can see."
      }
    ],
    "legendary": [
      {
        "Name": "Immolating Gaze (Costs 2 Actions)",
        "Text": "Zariel turns her magical gaze toward one creature she can see within 120 feet of her and commands it to combust. The target must succeed on a 26 Wisdom saving throw or take 22 (4d10) fire damage."
      },
      {
        "Name": "Teleport",
        "Text": "Zariel uses her Teleport action."
      }
    ]
  },
  {
    "name": "Zuggtmoy",
    "isNamedCreature": true,
    "size": "L",
    "type": "fiend (demon)",
    "alignment": "Chaotic Evil",
    "ac": "18 natural armor",
    "hp": 304,
    "speed": "Walk 30",
    "str": 22,
    "dex": 15,
    "con": 18,
    "int": 20,
    "wis": 19,
    "cha": 24,
    "save": "Dex +9, Con +11, Wis +11",
    "skill": "Perception +11",
    "senses": "truesight 120 ft.",
    "passive": 21,
    "resist": [
      "cold",
      "fire",
      "lightning"
    ],
    "immune": "poison, bludgeoning, piercing, slashing from nonmagical attacks",
    "conditionImmune": "charmed, exhaustion, frightened, poisoned",
    "languages": "all, telepathy 120 ft.",
    "cr": "23",
    "trait": [
      {
        "Name": "Legendary Resistance (3/Day)",
        "Text": "If Zuggtmoy fails a saving throw, she can choose to succeed instead."
      },
      {
        "Name": "Magic Resistance",
        "Text": "Zuggtmoy has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Magic Weapons",
        "Text": "Zuggtmoy's weapon attacks are magical."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day each: <em>etherealness, teleport</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "Zuggtmoy makes three pseudopod attacks."
      },
      {
        "Name": "Pseudopod",
        "Text": "Melee Weapon 13 to hit, reach 10 ft., one target. Hit:15 (2d8 + 6) bludgeoning damage plus 9 (2d8) poison damage."
      },
      {
        "Name": "Infestation Spores (3/Day)",
        "Text": "Zuggtmoy releases spores that burst out in a cloud that fills a 20-foot-radius sphere centered on her, and it lingers for 1 minute. Any flesh-and-blood creature in the cloud when it appears, or that enters it later, must make a 19 Constitution saving throw. On a successful save, the creature can't be infected by these spores for 24 hours. On a failed save, the creature is infected with a disease called the spores of Zuggtmoy and also gains a random form of madness (determined by rolling on the Madness of Zuggtmoy table) that lasts until the creature is cured of the disease or dies. While infected in this way, the creature can't be reinfected, and it must repeat the saving throw at the end of every 24 hours, ending the infection on a success. On a failure, the infected creature's body is slowly taken over by fungal growth, and after three such failed saves, the creature dies and is reanimated as a spore servant if it's a type of creature that can be (see the \"Myconids\" entry in the Monster Manual)."
      },
      {
        "Name": "Mind Control Spores (Recharge 5-6)",
        "Text": "Zuggtmoy releases spores that burst out in a cloud that fills a 20-foot-radius sphere centered on her, and it lingers for 1 minute. Humanoids and beasts in the cloud when it appears, or that enter it later, must make a 19 Wisdom saving throw. On a successful save, the creature can't be infected by these spores for 24 hours. On a failed save, the creature is infected with a disease called the influence of Zuggtmoy for 24 hours. While infected in this way, the creature is charmed by her and can't be reinfected by these spores."
      }
    ],
    "reaction": [
      {
        "Name": "Protective Thrall",
        "Text": "When Zuggtmoy is hit by an attack, one creature within 5 feet of Zuggtmoy that is charmed by her must use its reaction to be hit by the attack instead."
      }
    ],
    "legendary": [
      {
        "Name": "Attack",
        "Text": "Zuggtmoy makes one pseudopod attack."
      },
      {
        "Name": "Exert Will",
        "Text": "One creature charmed by Zuggtmoy that she can see must use its reaction to move up to its speed as she directs or to make a weapon attack against a target that she designates."
      }
    ]
  }
]
