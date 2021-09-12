
export let monsterManual = [
  {
    "name": "Aarakocra",
    "size": "M",
    "type": "humanoid (aarakocra)",
    "alignment": "Neutral Good",
    "ac": 12,
    "hp": 13,
    "speed": "Walk 20, Fly 50",
    "str": 10,
    "dex": 14,
    "con": 10,
    "int": 11,
    "wis": 12,
    "cha": 11,
    "skill": "Perception +5",
    "passive": 15,
    "languages": "Auran, Aarakocra",
    "cr": "1/4",
    "trait": [
      {
        "Name": "Dive Attack",
        "Text": "If the aarakocra is flying and dives at least 30 feet straight toward a target and then hits it with a melee weapon attack, the attack deals an extra 3 (1d6) damage to the target."
      }
    ],
    "action": [
      {
        "Name": "Talon",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:4 (1d4 + 2) slashing damage."
      },
      {
        "Name": "Javelin",
        "Text": "Melee or Ranged Weapon 4 to hit, reach 5 ft. or range 30/120 ft., one target. Hit:5 (1d6 + 2) piercing damage."
      },
      {
        "Name": "Summon Air Elemental",
        "Text": "Five aarakocra within 30 feet of each other can magically summon an air elemental. Each of the five must use its action and movement on three consecutive turns to perform an aerial dance and must maintain concentration while doing so (as if concentrating on a spell). When all five have finished their third turn of the dance, the elemental appears in an unoccupied space within 60 feet of them. It is friendly toward them and obeys their spoken commands. It remains for 1 hour, until it or all its summoners die, or until any of its summoners dismisses it as a bonus action. A summoner can't perform the dance again until it finishes a short rest. When the elemental returns to the Elemental Plane of Air, any aarakocra within 5 feet of it can return with it."
      }
    ],
    "environment": [
      "mountain"
    ]
  },
  {
    "name": "Aboleth",
    "size": "L",
    "type": "aberration",
    "alignment": "Lawful Evil",
    "ac": "17 natural armor",
    "hp": 135,
    "speed": "Walk 10, Swim 40",
    "str": 21,
    "dex": 9,
    "con": 15,
    "int": 18,
    "wis": 15,
    "cha": 18,
    "save": "Con +6, Int +8, Wis +6",
    "skill": "History +12, Perception +10",
    "senses": "darkvision 120 ft.",
    "passive": 20,
    "languages": "Deep Speech, telepathy 120 ft.",
    "cr": "10",
    "trait": [
      {
        "Name": "Amphibious",
        "Text": "The aboleth can breathe air and water."
      },
      {
        "Name": "Mucous Cloud",
        "Text": "While underwater, the aboleth is surrounded by transformative mucus. A creature that touches the aboleth or that hits it with a melee attack while within 5 feet of it must make a 14 Constitution saving throw. On a failure, the creature is diseased for 1d4 hours. The diseased creature can breathe only underwater."
      },
      {
        "Name": "Probing Telepathy",
        "Text": "If a creature communicates telepathically with the aboleth, the aboleth learns the creature's greatest desires if the aboleth can see the creature."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The aboleth makes three tentacle attacks."
      },
      {
        "Name": "Tentacle",
        "Text": "Melee Weapon 9 to hit, reach 10 ft., one target. Hit:12 (2d6 + 5) bludgeoning damage. If the target is a creature, it must succeed on a 14 Constitution saving throw or become diseased. The disease has no effect for 1 minute and can be removed by any magic that cures disease. After 1 minute, the diseased creature's skin becomes translucent and slimy, the creature can't regain hit points unless it is underwater, and the disease can be removed only by heal or another disease-curing spell of 6th level or higher. When the creature is outside a body of water, it takes 6 (1d12) acid damage every 10 minutes unless moisture is applied to the skin before 10 minutes have passed."
      },
      {
        "Name": "Tail",
        "Text": "Melee Weapon 9 to hit, reach 10 ft., one target. Hit:15 (3d6 + 5) bludgeoning damage."
      },
      {
        "Name": "Enslave (3/Day)",
        "Text": "The aboleth targets one creature it can see within 30 feet of it. The target must succeed on a 14 Wisdom saving throw or be magically charmed by the aboleth until the aboleth dies or until it is on a different plane of existence from the target. The charmed target is under the aboleth's control and can't take reactions, and the aboleth and the target can communicate telepathically with each other over any distance."
      }
    ],
    "legendary": [
      {
        "Name": "Detect",
        "Text": "The aboleth makes a Wisdom (Perception) check."
      },
      {
        "Name": "Tail Swipe",
        "Text": "The aboleth makes one tail attack."
      },
      {
        "Name": "Psychic Drain (Costs 2 Actions)",
        "Text": "One creature charmed by the aboleth takes 10 (3d6) psychic damage, and the aboleth regains hit points equal to the damage the creature takes."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Abominable Yeti",
    "size": "H",
    "type": "monstrosity",
    "alignment": "Chaotic Evil",
    "ac": "15 natural armor",
    "hp": 137,
    "speed": "Walk 40, Climb 40",
    "str": 24,
    "dex": 10,
    "con": 22,
    "int": 9,
    "wis": 13,
    "cha": 9,
    "skill": "Perception +5, Stealth +4",
    "senses": "darkvision 60 ft.",
    "passive": 15,
    "immune": "cold",
    "languages": "Yeti",
    "cr": "9",
    "trait": [
      {
        "Name": "Fear of Fire",
        "Text": "If the yeti takes fire damage, it has disadvantage on attack rolls and ability checks until the end of its next turn."
      },
      {
        "Name": "Keen Smell",
        "Text": "The yeti has advantage on Wisdom (Perception) checks that rely on smell."
      },
      {
        "Name": "Snow Camouflage",
        "Text": "The yeti has advantage on Dexterity (Stealth) checks made to hide in snowy terrain."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The yeti can use its Chilling Gaze and makes two claw attacks."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 11 to hit, reach 5 ft., one target. Hit:14 (2d6 + 7) slashing damage plus 7 (2d6) cold damage."
      },
      {
        "Name": "Chilling Gaze",
        "Text": "The yeti targets one creature it can see within 30 feet of it. If the target can see the yeti, the target must succeed on a 18 Constitution saving throw against this magic or take 21 (6d6) cold damage and then be paralyzed for 1 minute, unless it is immune to cold damage. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If the target's saving throw is successful, or if the effect ends on it, the target is immune to this yeti's gaze for 1 hour."
      },
      {
        "Name": "Cold Breath (Recharge 6)",
        "Text": "The yeti exhales a 30-foot cone of frigid air. Each creature in that area must make a 18 Constitution saving throw, taking 45 (10d8) cold damage on a failed save, or half as much damage on a successful one."
      }
    ],
    "environment": [
      "arctic"
    ]
  },
  {
    "name": "Acolyte",
    "size": "M",
    "type": "humanoid (any race)",
    "alignment": "Any",
    "ac": 10,
    "hp": 9,
    "speed": "Walk 30",
    "str": 10,
    "dex": 10,
    "con": 10,
    "int": 10,
    "wis": 14,
    "cha": 11,
    "skill": "Medicine +4, Religion +2",
    "passive": 12,
    "languages": "any one language (usually Common)",
    "cr": "1/4",
    "action": [
      {
        "Name": "Club",
        "Text": "Melee Weapon 2 to hit, reach 5 ft., one target. Hit:2 (1d4) bludgeoning damage."
      }
    ],
    "trait": [
      {
        "Name": "Spellcasting",
        "Text": "The acolyte is a 1st-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 12, +4 to hit with spell attacks). The acolyte has following cleric spells prepared:<br><br>Cantrips (at will): <em>light, sacred flame, thaumaturgy</em><br>1st (1 slots): <em>bless, cure wounds, sanctuary</em>"
      }
    ]
  },
  {
    "name": "Adult Black Dragon",
    "size": "H",
    "type": "dragon",
    "alignment": "Chaotic Evil",
    "ac": "19 natural armor",
    "hp": 195,
    "speed": "Walk 40, Fly 80, Swim 40",
    "str": 23,
    "dex": 14,
    "con": 21,
    "int": 14,
    "wis": 13,
    "cha": 17,
    "save": "Dex +7, Con +10, Wis +6, Cha +8",
    "skill": "Perception +11, Stealth +7",
    "senses": "blindsight 60 ft., darkvision 120 ft.",
    "passive": 21,
    "immune": "acid",
    "languages": "Common, Draconic",
    "cr": "14",
    "trait": [
      {
        "Name": "Amphibious",
        "Text": "The dragon can breathe air and water."
      },
      {
        "Name": "Legendary Resistance (3/Day)",
        "Text": "If the dragon fails a saving throw, it can choose to succeed instead."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 11 to hit, reach 10 ft., one target. Hit:17 (2d10 + 6) piercing damage plus 4 (1d8) acid damage."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 11 to hit, reach 5 ft., one target. Hit:13 (2d6 + 6) slashing damage."
      },
      {
        "Name": "Tail",
        "Text": "Melee Weapon 11 to hit, reach 15 ft., one target. Hit:15 (2d8 + 6) bludgeoning damage."
      },
      {
        "Name": "Frightful Presence",
        "Text": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
      },
      {
        "Name": "Acid Breath (Recharge 5-6)",
        "Text": "The dragon exhales acid in a 60-foot line that is 5 feet wide. Each creature in that line must make a 18 Dexterity saving throw, taking 54 (12d8) acid damage on a failed save, or half as much damage on a successful one."
      }
    ],
    "legendary": [
      {
        "Name": "Detect",
        "Text": "The dragon makes a Wisdom (Perception) check."
      },
      {
        "Name": "Tail Attack",
        "Text": "The dragon makes a tail attack."
      },
      {
        "Name": "Wing Attack (Costs 2 Actions)",
        "Text": "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
      }
    ],
    "environment": [
      "swamp"
    ]
  },
  {
    "name": "Adult Blue Dracolich",
    "size": "H",
    "type": "undead",
    "alignment": "Lawful Evil",
    "ac": "19 natural armor",
    "hp": 225,
    "speed": "Walk 40, Burrow 30, Fly 80",
    "str": 25,
    "dex": 10,
    "con": 23,
    "int": 16,
    "wis": 15,
    "cha": 19,
    "save": "Dex +6, Con +12, Wis +8, Cha +10",
    "skill": "Perception +14, Stealth +6",
    "senses": "blindsight 60 ft., darkvision 120 ft.",
    "passive": 24,
    "resist": [
      "necrotic"
    ],
    "immune": "lightning, poison",
    "conditionImmune": "charmed, exhaustion, frightened, paralyzed, poisoned",
    "languages": "Common, Draconic",
    "cr": "17",
    "trait": [
      {
        "Name": "Legendary Resistance (3/Day)",
        "Text": "If the dracolich fails a saving throw, it can choose to succeed instead."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The dracolich has advantage on saving throws against spells and other magical effects."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The dracolich can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 13 to hit, reach 10 ft., one target. Hit:18 (2d10 + 7) piercing damage plus 5 (1d10) lightning damage."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 13 to hit, reach 5 ft., one target. Hit:14 (2d6 + 7) slashing damage."
      },
      {
        "Name": "Tail",
        "Text": "Melee Weapon 13 to hit, reach 15 ft., one target. Hit:16 (2d8 + 7) bludgeoning damage."
      },
      {
        "Name": "Frightful Presence",
        "Text": "Each creature of the dracolich's choice that is within 120 feet of the dracolich and aware of it must succeed on a 18 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dracolich's Frightful Presence for the next 24 hours."
      },
      {
        "Name": "Lightning Breath (Recharge 5-6)",
        "Text": "The dracolich exhales lightning in a 90-foot line that is 5 feet wide. Each creature in that line must make a 20 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much damage on a successful one."
      }
    ],
    "legendary": [
      {
        "Name": "Detect",
        "Text": "The dracolich makes a Wisdom (Perception) check."
      },
      {
        "Name": "Tail Attack",
        "Text": "The dracolich makes a tail attack."
      },
      {
        "Name": "Wing Attack (Costs 2 Actions)",
        "Text": "The dracolich beats its tattered wings. Each creature within 10 feet of the dracolich must succeed on a 21 Dexterity saving throw or take 14 (2d6 + 7) bludgeoning damage and be knocked prone. After beating its wings this way, the dracolich can fly up to half its flying speed."
      }
    ],
    "environment": [
      "desert"
    ]
  },
  {
    "name": "Adult Blue Dragon",
    "size": "H",
    "type": "dragon",
    "alignment": "Lawful Evil",
    "ac": 19,
    "hp": 225,
    "speed": "Walk 40, Burrow 30, Fly 80",
    "str": 25,
    "dex": 10,
    "con": 23,
    "int": 16,
    "wis": 15,
    "cha": 19,
    "save": "Dex +5, Con +11, Wis +7, Cha +9",
    "skill": "Perception +12, Stealth +5",
    "senses": "blindsight 60 ft., darkvision 120 ft.",
    "passive": 22,
    "immune": "lightning",
    "languages": "Common, Draconic",
    "cr": "16",
    "trait": [
      {
        "Name": "Legendary Resistance (3/Day)",
        "Text": "If the dragon fails a saving throw, it can choose to succeed instead."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 12 to hit, reach 10 ft., one target. Hit:18 (2d10 + 7) piercing damage plus 5 (1d10) lightning damage."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 12 to hit, reach 5 ft., one target. Hit:14 (2d6 + 7) slashing damage."
      },
      {
        "Name": "Tail",
        "Text": "Melee Weapon 12 to hit, reach 15 ft., one target. Hit:16 (2d8 + 7) bludgeoning damage."
      },
      {
        "Name": "Frightful Presence",
        "Text": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a 17 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
      },
      {
        "Name": "Lightning Breath (Recharge 5-6)",
        "Text": "The dragon exhales lightning in a 90-foot line that is 5 feet wide. Each creature in that line must make a 19 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much damage on a successful one."
      }
    ],
    "legendary": [
      {
        "Name": "Detect",
        "Text": "The dragon makes a Wisdom (Perception) check."
      },
      {
        "Name": "Tail Attack",
        "Text": "The dragon makes a tail attack."
      },
      {
        "Name": "Wing Attack (Costs 2 Actions)",
        "Text": "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a 20 Dexterity saving throw or take 14 (2d6 + 7) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
      }
    ],
    "environment": [
      "desert",
      "coastal"
    ]
  },
  {
    "name": "Adult Brass Dragon",
    "size": "H",
    "type": "dragon",
    "alignment": "Chaotic Good",
    "ac": "18 natural armor",
    "hp": 172,
    "speed": "Walk 40, Burrow 40, Fly 80",
    "str": 23,
    "dex": 10,
    "con": 21,
    "int": 14,
    "wis": 13,
    "cha": 17,
    "save": "Dex +5, Con +10, Wis +6, Cha +8",
    "skill": "History +7, Perception +11, Persuasion +8, Stealth +5",
    "senses": "blindsight 60 ft., darkvision 120 ft.",
    "passive": 21,
    "immune": "fire",
    "languages": "Common, Draconic",
    "cr": "13",
    "trait": [
      {
        "Name": "Legendary Resistance (3/Day)",
        "Text": "If the dragon fails a saving throw, it can choose to succeed instead."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 11 to hit, reach 10 ft., one target. Hit:17 (2d10 + 6) piercing damage."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 11 to hit, reach 5 ft., one target. Hit:13 (2d6 + 6) slashing damage."
      },
      {
        "Name": "Tail",
        "Text": "Melee Weapon 11 to hit, reach 15 ft., one target. Hit:15 (2d8 + 6) bludgeoning damage."
      },
      {
        "Name": "Frightful Presence",
        "Text": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
      },
      {
        "Name": "Breath Weapons (Recharge 5-6)",
        "Text": "The dragon uses one of the following breath weapons."
      }
    ],
    "legendary": [
      {
        "Name": "Detect",
        "Text": "The dragon makes a Wisdom (Perception) check."
      },
      {
        "Name": "Tail Attack",
        "Text": "The dragon makes a tail attack."
      },
      {
        "Name": "Wing Attack (Costs 2 Actions)",
        "Text": "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
      }
    ],
    "environment": [
      "desert"
    ]
  },
  {
    "name": "Adult Bronze Dragon",
    "size": "H",
    "type": "dragon",
    "alignment": "Lawful Good",
    "ac": "19 natural armor",
    "hp": 212,
    "speed": "Walk 40, Fly 80, Swim 40",
    "str": 25,
    "dex": 10,
    "con": 23,
    "int": 16,
    "wis": 15,
    "cha": 19,
    "save": "Dex +5, Con +11, Wis +7, Cha +9",
    "skill": "Insight +7, Perception +12, Stealth +5",
    "senses": "blindsight 60 ft., darkvision 120 ft.",
    "passive": 22,
    "immune": "lightning",
    "languages": "Common, Draconic",
    "cr": "15",
    "trait": [
      {
        "Name": "Amphibious",
        "Text": "The dragon can breathe air and water."
      },
      {
        "Name": "Legendary Resistance (3/Day)",
        "Text": "If the dragon fails a saving throw, it can choose to succeed instead."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 12 to hit, reach 10 ft., one target. Hit:18 (2d10 + 7) piercing damage."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 12 to hit, reach 5 ft., one target. Hit:14 (2d6 + 7) slashing damage."
      },
      {
        "Name": "Tail",
        "Text": "Melee Weapon 12 to hit, reach 15 ft., one target. Hit:16 (2d8 + 7) bludgeoning damage."
      },
      {
        "Name": "Frightful Presence",
        "Text": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a 17 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
      },
      {
        "Name": "Breath Weapons (Recharge 5-6)",
        "Text": "The dragon uses one of the following breath weapons."
      },
      {
        "Name": "Change Shape",
        "Text": "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice)."
      }
    ],
    "legendary": [
      {
        "Name": "Detect",
        "Text": "The dragon makes a Wisdom (Perception) check."
      },
      {
        "Name": "Tail Attack",
        "Text": "The dragon makes a tail attack."
      },
      {
        "Name": "Wing Attack (Costs 2 Actions)",
        "Text": "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a 20 Dexterity saving throw or take 14 (2d6 + 7) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
      }
    ],
    "environment": [
      "coastal"
    ]
  },
  {
    "name": "Adult Copper Dragon",
    "size": "H",
    "type": "dragon",
    "alignment": "Chaotic Good",
    "ac": "18 natural armor",
    "hp": 184,
    "speed": "Walk 40, Climb 40, Fly 80",
    "str": 23,
    "dex": 12,
    "con": 21,
    "int": 18,
    "wis": 15,
    "cha": 17,
    "save": "Dex +6, Con +10, Wis +7, Cha +8",
    "skill": "Deception +8, Perception +12, Stealth +6",
    "senses": "blindsight 60 ft., darkvision 120 ft.",
    "passive": 22,
    "immune": "acid",
    "languages": "Common, Draconic",
    "cr": "14",
    "trait": [
      {
        "Name": "Legendary Resistance (3/Day)",
        "Text": "If the dragon fails a saving throw, it can choose to succeed instead."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 11 to hit, reach 10 ft., one target. Hit:17 (2d10 + 6) piercing damage."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 11 to hit, reach 5 ft., one target. Hit:13 (2d6 + 6) slashing damage."
      },
      {
        "Name": "Tail",
        "Text": "Melee Weapon 11 to hit, reach 15 ft., one target. Hit:15 (2d8 + 6) bludgeoning damage."
      },
      {
        "Name": "Frightful Presence",
        "Text": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
      },
      {
        "Name": "Breath Weapons (Recharge 5-6)",
        "Text": "The dragon uses one of the following breath weapons."
      }
    ],
    "legendary": [
      {
        "Name": "Detect",
        "Text": "The dragon makes a Wisdom (Perception) check."
      },
      {
        "Name": "Tail Attack",
        "Text": "The dragon makes a tail attack."
      },
      {
        "Name": "Wing Attack (Costs 2 Actions)",
        "Text": "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
      }
    ],
    "environment": [
      "hill"
    ]
  },
  {
    "name": "Adult Gold Dragon",
    "size": "H",
    "type": "dragon",
    "alignment": "Lawful Good",
    "ac": "19 natural armor",
    "hp": 256,
    "speed": "Walk 40, Fly 80, Swim 40",
    "str": 27,
    "dex": 14,
    "con": 25,
    "int": 16,
    "wis": 15,
    "cha": 24,
    "save": "Dex +8, Con +13, Wis +8, Cha +13",
    "skill": "Insight +8, Perception +14, Persuasion +13, Stealth +8",
    "senses": "blindsight 60 ft., darkvision 120 ft.",
    "passive": 24,
    "immune": "fire",
    "languages": "Common, Draconic",
    "cr": "17",
    "trait": [
      {
        "Name": "Amphibious",
        "Text": "The dragon can breathe air and water."
      },
      {
        "Name": "Legendary Resistance (3/Day)",
        "Text": "If the dragon fails a saving throw, it can choose to succeed instead."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 14 to hit, reach 10 ft., one target. Hit:19 (2d10 + 8) piercing damage."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 14 to hit, reach 5 ft., one target. Hit:15 (2d6 + 8) slashing damage."
      },
      {
        "Name": "Tail",
        "Text": "Melee Weapon 14 to hit, reach 15 ft., one target. Hit:17 (2d8 + 8) bludgeoning damage."
      },
      {
        "Name": "Frightful Presence",
        "Text": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a 21 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
      },
      {
        "Name": "Breath Weapons (Recharge 5-6)",
        "Text": "The dragon uses one of the following breath weapons."
      },
      {
        "Name": "Change Shape",
        "Text": "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice)."
      }
    ],
    "legendary": [
      {
        "Name": "Detect",
        "Text": "The dragon makes a Wisdom (Perception) check."
      },
      {
        "Name": "Tail Attack",
        "Text": "The dragon makes a tail attack."
      },
      {
        "Name": "Wing Attack (Costs 2 Actions)",
        "Text": "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
      }
    ],
    "environment": [
      "grassland",
      "forest"
    ]
  },
  {
    "name": "Adult Green Dragon",
    "size": "H",
    "type": "dragon",
    "alignment": "Lawful Evil",
    "ac": "19 natural armor",
    "hp": 207,
    "speed": "Walk 40, Fly 80, Swim 40",
    "str": 23,
    "dex": 12,
    "con": 21,
    "int": 18,
    "wis": 15,
    "cha": 17,
    "save": "Dex +6, Con +10, Wis +7, Cha +8",
    "skill": "Deception +8, Insight +7, Perception +12, Persuasion +8, Stealth +6",
    "senses": "blindsight 60 ft., darkvision 120 ft.",
    "passive": 22,
    "immune": "poison",
    "conditionImmune": "poisoned",
    "languages": "Common, Draconic",
    "cr": "15",
    "trait": [
      {
        "Name": "Amphibious",
        "Text": "The dragon can breathe air and water."
      },
      {
        "Name": "Legendary Resistance (3/Day)",
        "Text": "If the dragon fails a saving throw, it can choose to succeed instead."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 11 to hit, reach 10 ft., one target. Hit:17 (2d10 + 6) piercing damage plus 7 (2d6) poison damage."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 11 to hit, reach 5 ft., one target. Hit:13 (2d6 + 6) slashing damage."
      },
      {
        "Name": "Tail",
        "Text": "Melee Weapon 11 to hit, reach 15 ft., one target. Hit:15 (2d8 + 6) bludgeoning damage."
      },
      {
        "Name": "Frightful Presence",
        "Text": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
      },
      {
        "Name": "Poison Breath (Recharge 5-6)",
        "Text": "The dragon exhales poisonous gas in a 60-foot cone. Each creature in that area must make a 18 Constitution saving throw, taking 56 (16d6) poison damage on a failed save, or half as much damage on a successful one."
      }
    ],
    "legendary": [
      {
        "Name": "Detect",
        "Text": "The dragon makes a Wisdom (Perception) check."
      },
      {
        "Name": "Tail Attack",
        "Text": "The dragon makes a tail attack."
      },
      {
        "Name": "Wing Attack (Costs 2 Actions)",
        "Text": "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
      }
    ],
    "environment": [
      "forest"
    ]
  },
  {
    "name": "Adult Red Dragon",
    "size": "H",
    "type": "dragon",
    "alignment": "Chaotic Evil",
    "ac": "19 natural armor",
    "hp": 256,
    "speed": "Walk 40, Climb 40, Fly 80",
    "str": 27,
    "dex": 10,
    "con": 25,
    "int": 16,
    "wis": 13,
    "cha": 21,
    "save": "Dex +6, Con +13, Wis +7, Cha +11",
    "skill": "Perception +13, Stealth +6",
    "senses": "blindsight 60 ft., darkvision 120 ft.",
    "passive": 23,
    "immune": "fire",
    "languages": "Common, Draconic",
    "cr": "17",
    "trait": [
      {
        "Name": "Legendary Resistance (3/Day)",
        "Text": "If the dragon fails a saving throw, it can choose to succeed instead."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 14 to hit, reach 10 ft., one target. Hit:19 (2d10 + 8) piercing damage plus 7 (2d6) fire damage."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 14 to hit, reach 5 ft., one target. Hit:15 (2d6 + 8) slashing damage."
      },
      {
        "Name": "Tail",
        "Text": "Melee Weapon 14 to hit, reach 15 ft., one target. Hit:17 (2d8 + 8) bludgeoning damage."
      },
      {
        "Name": "Frightful Presence",
        "Text": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a 19 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
      },
      {
        "Name": "Fire Breath (Recharge 5-6)",
        "Text": "The dragon exhales fire in a 60-foot cone. Each creature in that area must make a 21 Dexterity saving throw, taking 63 (18d6) fire damage on a failed save, or half as much damage on a successful one."
      }
    ],
    "legendary": [
      {
        "Name": "Detect",
        "Text": "The dragon makes a Wisdom (Perception) check."
      },
      {
        "Name": "Tail Attack",
        "Text": "The dragon makes a tail attack."
      },
      {
        "Name": "Wing Attack (Costs 2 Actions)",
        "Text": "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
      }
    ],
    "environment": [
      "mountain",
      "hill"
    ]
  },
  {
    "name": "Adult Silver Dragon",
    "size": "H",
    "type": "dragon",
    "alignment": "Lawful Good",
    "ac": "19 natural armor",
    "hp": 243,
    "speed": "Walk 40, Fly 80",
    "str": 27,
    "dex": 10,
    "con": 25,
    "int": 16,
    "wis": 13,
    "cha": 21,
    "save": "Dex +5, Con +12, Wis +6, Cha +10",
    "skill": "Arcana +8, History +8, Perception +11, Stealth +5",
    "senses": "blindsight 60 ft., darkvision 120 ft.",
    "passive": 21,
    "immune": "cold",
    "languages": "Common, Draconic",
    "cr": "16",
    "trait": [
      {
        "Name": "Legendary Resistance (3/Day)",
        "Text": "If the dragon fails a saving throw, it can choose to succeed instead."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 13 to hit, reach 10 ft., one target. Hit:19 (2d10 + 8) piercing damage."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 13 to hit, reach 5 ft., one target. Hit:15 (2d6 + 8) slashing damage."
      },
      {
        "Name": "Tail",
        "Text": "Melee Weapon 13 to hit, reach 15 ft., one target. Hit:17 (2d8 + 8) bludgeoning damage."
      },
      {
        "Name": "Frightful Presence",
        "Text": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a 18 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
      },
      {
        "Name": "Breath Weapons (Recharge 5-6)",
        "Text": "The dragon uses one of the following breath weapons."
      },
      {
        "Name": "Change Shape",
        "Text": "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice)."
      }
    ],
    "legendary": [
      {
        "Name": "Detect",
        "Text": "The dragon makes a Wisdom (Perception) check."
      },
      {
        "Name": "Tail Attack",
        "Text": "The dragon makes a tail attack."
      },
      {
        "Name": "Wing Attack (Costs 2 Actions)",
        "Text": "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
      }
    ],
    "environment": [
      "mountain",
      "urban"
    ]
  },
  {
    "name": "Adult White Dragon",
    "size": "H",
    "type": "dragon",
    "alignment": "Chaotic Evil",
    "ac": "18 natural armor",
    "hp": 200,
    "speed": "Walk 40, Burrow 30, Fly 80, Swim 40",
    "str": 22,
    "dex": 10,
    "con": 22,
    "int": 8,
    "wis": 12,
    "cha": 12,
    "save": "Dex +5, Con +11, Wis +6, Cha +6",
    "skill": "Perception +11, Stealth +5",
    "senses": "blindsight 60 ft., darkvision 120 ft.",
    "passive": 21,
    "immune": "cold",
    "languages": "Common, Draconic",
    "cr": "13",
    "trait": [
      {
        "Name": "Ice Walk",
        "Text": "The dragon can move across and climb icy surfaces without needing to make an ability check. Additionally, difficult terrain composed of ice or snow doesn't cost it extra movement."
      },
      {
        "Name": "Legendary Resistance (3/Day)",
        "Text": "If the dragon fails a saving throw, it can choose to succeed instead."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 11 to hit, reach 10 ft., one target. Hit:17 (2d10 + 6) piercing damage plus 4 (1d8) cold damage."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 11 to hit, reach 5 ft., one target. Hit:13 (2d6 + 6) slashing damage."
      },
      {
        "Name": "Tail",
        "Text": "Melee Weapon 11 to hit, reach 15 ft., one target. Hit:15 (2d8 + 6) bludgeoning damage."
      },
      {
        "Name": "Frightful Presence",
        "Text": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a 14 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
      },
      {
        "Name": "Cold Breath (Recharge 5-6)",
        "Text": "The dragon exhales an icy blast in a 60-foot cone. Each creature in that area must make a 19 Constitution saving throw, taking 54 (12d8) cold damage on a failed save, or half as much damage on a successful one."
      }
    ],
    "legendary": [
      {
        "Name": "Detect",
        "Text": "The dragon makes a Wisdom (Perception) check."
      },
      {
        "Name": "Tail Attack",
        "Text": "The dragon makes a tail attack."
      },
      {
        "Name": "Wing Attack (Costs 2 Actions)",
        "Text": "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
      }
    ],
    "environment": [
      "arctic"
    ]
  },
  {
    "name": "Air Elemental",
    "size": "L",
    "type": "elemental",
    "alignment": "Neutral",
    "ac": 15,
    "hp": 90,
    "speed": "Fly 90 (hover)",
    "str": 14,
    "dex": 20,
    "con": 14,
    "int": 6,
    "wis": 10,
    "cha": 6,
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
    "conditionImmune": "exhaustion, grappled, paralyzed, petrified, poisoned, prone, restrained, unconscious",
    "languages": "Auran",
    "cr": "5",
    "trait": [
      {
        "Name": "Air Form",
        "Text": "The elemental can enter a hostile creature's space and stop there. It can move through a space as narrow as 1 inch wide without squeezing."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The elemental makes two slam attacks."
      },
      {
        "Name": "Slam",
        "Text": "Melee Weapon 8 to hit, reach 5 ft., one target. Hit:14 (2d8 + 5) bludgeoning damage."
      },
      {
        "Name": "Whirlwind (Recharge 4-6)",
        "Text": "Each creature in the elemental's space must make a 13 Strength saving throw. On a failure, a target takes 15 (3d8 + 2) bludgeoning damage and is flung up 20 feet away from the elemental in a random direction and knocked prone. If a thrown target strikes an object, such as a wall or floor, the target takes 3 (1d6) bludgeoning damage for every 10 feet it was thrown. If the target is thrown at another creature, that creature must succeed on a 13 Dexterity saving throw or take the same damage and be knocked prone."
      }
    ],
    "environment": [
      "mountain",
      "desert"
    ]
  },
  {
    "name": "Allosaurus",
    "size": "L",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": "13 natural armor",
    "hp": 51,
    "speed": "Walk 60",
    "str": 19,
    "dex": 13,
    "con": 17,
    "int": 2,
    "wis": 12,
    "cha": 5,
    "skill": "Perception +5",
    "passive": 15,
    "cr": "2",
    "trait": [
      {
        "Name": "Pounce",
        "Text": "If the allosaurus moves at least 30 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a 13 Strength saving throw or be knocked prone. If the target is prone, the allosaurus can make one bite attack against it as a bonus action."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:15 (2d10 + 4) piercing damage."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:8 (1d8 + 4) slashing damage."
      }
    ],
    "environment": [
      "grassland"
    ]
  },
  {
    "name": "Ancient Black Dragon",
    "size": "G",
    "type": "dragon",
    "alignment": "Chaotic Evil",
    "ac": "22 natural armor",
    "hp": 367,
    "speed": "Walk 40, Fly 80, Swim 40",
    "str": 27,
    "dex": 14,
    "con": 25,
    "int": 16,
    "wis": 15,
    "cha": 19,
    "save": "Dex +9, Con +14, Wis +9, Cha +11",
    "skill": "Perception +16, Stealth +9",
    "senses": "blindsight 60 ft., darkvision 120 ft.",
    "passive": 26,
    "immune": "acid",
    "languages": "Common, Draconic",
    "cr": "21",
    "trait": [
      {
        "Name": "Amphibious",
        "Text": "The dragon can breathe air and water."
      },
      {
        "Name": "Legendary Resistance (3/Day)",
        "Text": "If the dragon fails a saving throw, it can choose to succeed instead."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 15 to hit, reach 15 ft., one target. Hit:19 (2d10 + 8) piercing damage plus 9 (2d8) acid damage."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 15 to hit, reach 10 ft., one target. Hit:15 (2d6 + 8) slashing damage."
      },
      {
        "Name": "Tail",
        "Text": "Melee Weapon 15 to hit, reach 20 ft., one target. Hit:17 (2d8 + 8) bludgeoning damage."
      },
      {
        "Name": "Frightful Presence",
        "Text": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a 19 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
      },
      {
        "Name": "Acid Breath (Recharge 5-6)",
        "Text": "The dragon exhales acid in a 90-foot line that is 10 feet wide. Each creature in that line must make a 22 Dexterity saving throw, taking 67 (15d8) acid damage on a failed save, or half as much damage on a successful one."
      }
    ],
    "legendary": [
      {
        "Name": "Detect",
        "Text": "The dragon makes a Wisdom (Perception) check."
      },
      {
        "Name": "Tail Attack",
        "Text": "The dragon makes a tail attack."
      },
      {
        "Name": "Wing Attack (Costs 2 Actions)",
        "Text": "The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a 23 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
      }
    ],
    "environment": [
      "swamp"
    ]
  },
  {
    "name": "Ancient Blue Dragon",
    "size": "G",
    "type": "dragon",
    "alignment": "Lawful Evil",
    "ac": "22 natural armor",
    "hp": 481,
    "speed": "Walk 40, Burrow 40, Fly 80",
    "str": 29,
    "dex": 10,
    "con": 27,
    "int": 18,
    "wis": 17,
    "cha": 21,
    "save": "Dex +7, Con +15, Wis +10, Cha +12",
    "skill": "Perception +17, Stealth +7",
    "senses": "blindsight 60 ft., darkvision 120 ft.",
    "passive": 27,
    "immune": "lightning",
    "languages": "Common, Draconic",
    "cr": "23",
    "trait": [
      {
        "Name": "Legendary Resistance (3/Day)",
        "Text": "If the dragon fails a saving throw, it can choose to succeed instead."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 16 to hit, reach 15 ft., one target. Hit:20 (2d10 + 9) piercing damage plus 11 (2d10) lightning damage."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 16 to hit, reach 10 ft., one target. Hit:16 (2d6 + 9) slashing damage."
      },
      {
        "Name": "Tail",
        "Text": "Melee Weapon 16 to hit, reach 20 ft., one target. Hit:18 (2d8 + 9) bludgeoning damage."
      },
      {
        "Name": "Frightful Presence",
        "Text": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a 20 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
      },
      {
        "Name": "Lightning Breath (Recharge 5-6)",
        "Text": "The dragon exhales lightning in a 120-foot line that is 10 feet wide. Each creature in that line must make a 23 Dexterity saving throw, taking 88 (16d10) lightning damage on a failed save, or half as much damage on a successful one."
      }
    ],
    "legendary": [
      {
        "Name": "Detect",
        "Text": "The dragon makes a Wisdom (Perception) check."
      },
      {
        "Name": "Tail Attack",
        "Text": "The dragon makes a tail attack."
      },
      {
        "Name": "Wing Attack (Costs 2 Actions)",
        "Text": "The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a 24 Dexterity saving throw or take 16 (2d6 + 9) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
      }
    ],
    "environment": [
      "desert",
      "coastal"
    ]
  },
  {
    "name": "Ancient Brass Dragon",
    "size": "G",
    "type": "dragon",
    "alignment": "Chaotic Good",
    "ac": "20 natural armor",
    "hp": 297,
    "speed": "Walk 40, Burrow 40, Fly 80",
    "str": 27,
    "dex": 10,
    "con": 25,
    "int": 16,
    "wis": 15,
    "cha": 19,
    "save": "Dex +6, Con +13, Wis +8, Cha +10",
    "skill": "History +9, Perception +14, Persuasion +10, Stealth +6",
    "senses": "blindsight 60 ft., darkvision 120 ft.",
    "passive": 24,
    "immune": "fire",
    "languages": "Common, Draconic",
    "cr": "20",
    "trait": [
      {
        "Name": "Legendary Resistance (3/Day)",
        "Text": "If the dragon fails a saving throw, it can choose to succeed instead."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 14 to hit, reach 15 ft., one target. Hit:19 (2d10 + 8) piercing damage."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 14 to hit, reach 10 ft., one target. Hit:15 (2d6 + 8) slashing damage."
      },
      {
        "Name": "Tail",
        "Text": "Melee Weapon 14 to hit, reach 20 ft., one target. Hit:17 (2d8 + 8) bludgeoning damage."
      },
      {
        "Name": "Frightful Presence",
        "Text": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a 18 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
      },
      {
        "Name": "Breath Weapons (Recharge 5-6)",
        "Text": "The dragon uses one of the following breath weapons:"
      },
      {
        "Name": "Change Shape",
        "Text": "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice)."
      }
    ],
    "legendary": [
      {
        "Name": "Detect",
        "Text": "The dragon makes a Wisdom (Perception) check."
      },
      {
        "Name": "Tail Attack",
        "Text": "The dragon makes a tail attack."
      },
      {
        "Name": "Wing Attack (Costs 2 Actions)",
        "Text": "The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
      }
    ],
    "environment": [
      "desert"
    ]
  },
  {
    "name": "Ancient Bronze Dragon",
    "size": "G",
    "type": "dragon",
    "alignment": "Lawful Good",
    "ac": "22 natural armor",
    "hp": 444,
    "speed": "Walk 40, Fly 80, Swim 40",
    "str": 29,
    "dex": 10,
    "con": 27,
    "int": 18,
    "wis": 17,
    "cha": 21,
    "save": "Dex +7, Con +15, Wis +10, Cha +12",
    "skill": "Insight +10, Perception +17, Stealth +7",
    "senses": "blindsight 60 ft., darkvision 120 ft.",
    "passive": 27,
    "immune": "lightning",
    "languages": "Common, Draconic",
    "cr": "22",
    "trait": [
      {
        "Name": "Amphibious",
        "Text": "The dragon can breathe air and water."
      },
      {
        "Name": "Legendary Resistance (3/Day)",
        "Text": "If the dragon fails a saving throw, it can choose to succeed instead."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 16 to hit, reach 15 ft., one target. Hit:20 (2d10 + 9) piercing damage."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 16 to hit, reach 10 ft., one target. Hit:16 (2d6 + 9) slashing damage."
      },
      {
        "Name": "Tail",
        "Text": "Melee Weapon 16 to hit, reach 20 ft., one target. Hit:18 (2d8 + 9) bludgeoning damage."
      },
      {
        "Name": "Frightful Presence",
        "Text": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a 20 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
      },
      {
        "Name": "Breath Weapons (Recharge 5-6)",
        "Text": "The dragon uses one of the following breath weapons."
      },
      {
        "Name": "Change Shape",
        "Text": "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice)."
      }
    ],
    "legendary": [
      {
        "Name": "Detect",
        "Text": "The dragon makes a Wisdom (Perception) check."
      },
      {
        "Name": "Tail Attack",
        "Text": "The dragon makes a tail attack."
      },
      {
        "Name": "Wing Attack (Costs 2 Actions)",
        "Text": "The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a 24 Dexterity saving throw or take 16 (2d6 + 9) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
      }
    ],
    "environment": [
      "coastal"
    ]
  },
  {
    "name": "Ancient Copper Dragon",
    "size": "G",
    "type": "dragon",
    "alignment": "Chaotic Good",
    "ac": "21 natural armor",
    "hp": 350,
    "speed": "Walk 40, Climb 40, Fly 80",
    "str": 27,
    "dex": 12,
    "con": 25,
    "int": 20,
    "wis": 17,
    "cha": 19,
    "save": "Dex +8, Con +14, Wis +10, Cha +11",
    "skill": "Deception +11, Perception +17, Stealth +8",
    "senses": "blindsight 60 ft., darkvision 120 ft.",
    "passive": 27,
    "immune": "acid",
    "languages": "Common, Draconic",
    "cr": "21",
    "trait": [
      {
        "Name": "Legendary Resistance (3/Day)",
        "Text": "If the dragon fails a saving throw, it can choose to succeed instead."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 15 to hit, reach 15 ft., one target. Hit:19 (2d10 + 8) piercing damage."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 15 to hit, reach 10 ft., one target. Hit:15 (2d6 + 8) slashing damage."
      },
      {
        "Name": "Tail",
        "Text": "Melee Weapon 15 to hit, reach 20 ft., one target. Hit:17 (2d8 + 8) bludgeoning damage."
      },
      {
        "Name": "Frightful Presence",
        "Text": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a 19 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
      },
      {
        "Name": "Breath Weapons (Recharge 5-6)",
        "Text": "The dragon uses one of the following breath weapons."
      },
      {
        "Name": "Change Shape",
        "Text": "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice)."
      }
    ],
    "legendary": [
      {
        "Name": "Detect",
        "Text": "The dragon makes a Wisdom (Perception) check."
      },
      {
        "Name": "Tail Attack",
        "Text": "The dragon makes a tail attack."
      },
      {
        "Name": "Wing Attack (Costs 2 Actions)",
        "Text": "The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a 23 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
      }
    ],
    "environment": [
      "hill"
    ]
  },
  {
    "name": "Ancient Gold Dragon",
    "size": "G",
    "type": "dragon",
    "alignment": "Lawful Good",
    "ac": "22 natural armor",
    "hp": 546,
    "speed": "Walk 40, Fly 80, Swim 40",
    "str": 30,
    "dex": 14,
    "con": 29,
    "int": 18,
    "wis": 17,
    "cha": 28,
    "save": "Dex +9, Con +16, Wis +10, Cha +16",
    "skill": "Insight +10, Perception +17, Persuasion +16, Stealth +9",
    "senses": "blindsight 60 ft., darkvision 120 ft.",
    "passive": 27,
    "immune": "fire",
    "languages": "Common, Draconic",
    "cr": "24",
    "trait": [
      {
        "Name": "Amphibious",
        "Text": "The dragon can breathe air and water."
      },
      {
        "Name": "Legendary Resistance (3/Day)",
        "Text": "If the dragon fails a saving throw, it can choose to succeed instead."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 17 to hit, reach 15 ft., one target. Hit:21 (2d10 + 10) piercing damage."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 17 to hit, reach 10 ft., one target. Hit:17 (2d6 + 10) slashing damage."
      },
      {
        "Name": "Tail",
        "Text": "Melee Weapon 17 to hit, reach 20 ft., one target. Hit:19 (2d8 + 10) bludgeoning damage."
      },
      {
        "Name": "Frightful Presence",
        "Text": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a 24 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
      },
      {
        "Name": "Breath Weapons (Recharge 5-6)",
        "Text": "The dragon uses one of the following breath weapons."
      },
      {
        "Name": "Change Shape",
        "Text": "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice)."
      }
    ],
    "legendary": [
      {
        "Name": "Detect",
        "Text": "The dragon makes a Wisdom (Perception) check."
      },
      {
        "Name": "Tail Attack",
        "Text": "The dragon makes a tail attack."
      },
      {
        "Name": "Wing Attack (Costs 2 Actions)",
        "Text": "The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a 25 Dexterity saving throw or take 17 (2d6 + 10) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
      }
    ],
    "environment": [
      "grassland",
      "forest"
    ]
  },
  {
    "name": "Ancient Green Dragon",
    "size": "G",
    "type": "dragon",
    "alignment": "Lawful Evil",
    "ac": "21 natural armor",
    "hp": 385,
    "speed": "Walk 40, Fly 80, Swim 40",
    "str": 27,
    "dex": 12,
    "con": 25,
    "int": 20,
    "wis": 17,
    "cha": 19,
    "save": "Dex +8, Con +14, Wis +10, Cha +11",
    "skill": "Deception +11, Insight +10, Perception +17, Persuasion +11, Stealth +8",
    "senses": "blindsight 60 ft., darkvision 120 ft.",
    "passive": 27,
    "immune": "poison",
    "conditionImmune": "poisoned",
    "languages": "Common, Draconic",
    "cr": "22",
    "trait": [
      {
        "Name": "Amphibious",
        "Text": "The dragon can breathe air and water."
      },
      {
        "Name": "Legendary Resistance (3/Day)",
        "Text": "If the dragon fails a saving throw, it can choose to succeed instead."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 15 to hit, reach 15 ft., one target. Hit:19 (2d10 + 8) piercing damage plus 10 (3d6) poison damage."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 15 to hit, reach 10 ft., one target. Hit:22 (4d6 + 8) slashing damage."
      },
      {
        "Name": "Tail",
        "Text": "Melee Weapon 15 to hit, reach 20 ft., one target. Hit:17 (2d8 + 8) bludgeoning damage."
      },
      {
        "Name": "Frightful Presence",
        "Text": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a 19 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
      },
      {
        "Name": "Poison Breath (Recharge 5-6)",
        "Text": "The dragon exhales poisonous gas in a 90-foot cone. Each creature in that area must make a 22 Constitution saving throw, taking 77 (22d6) poison damage on a failed save, or half as much damage on a successful one."
      }
    ],
    "legendary": [
      {
        "Name": "Detect",
        "Text": "The dragon makes a Wisdom (Perception) check."
      },
      {
        "Name": "Tail Attack",
        "Text": "The dragon makes a tail attack."
      },
      {
        "Name": "Wing Attack (Costs 2 Actions)",
        "Text": "The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a 23 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
      }
    ],
    "environment": [
      "forest"
    ]
  },
  {
    "name": "Ancient Red Dragon",
    "size": "G",
    "type": "dragon",
    "alignment": "Chaotic Evil",
    "ac": "22 natural armor",
    "hp": 546,
    "speed": "Walk 40, Climb 40, Fly 80",
    "str": 30,
    "dex": 10,
    "con": 29,
    "int": 18,
    "wis": 15,
    "cha": 23,
    "save": "Dex +7, Con +16, Wis +9, Cha +13",
    "skill": "Perception +16, Stealth +7",
    "senses": "blindsight 60 ft., darkvision 120 ft.",
    "passive": 26,
    "immune": "fire",
    "languages": "Common, Draconic",
    "cr": "24",
    "trait": [
      {
        "Name": "Legendary Resistance (3/Day)",
        "Text": "If the dragon fails a saving throw, it can choose to succeed instead."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 17 to hit, reach 15 ft., one target. Hit:21 (2d10 + 10) piercing damage plus 14 (4d6) fire damage."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 17 to hit, reach 10 ft., one target. Hit:17 (2d6 + 10) slashing damage."
      },
      {
        "Name": "Tail",
        "Text": "Melee Weapon 17 to hit, reach 20 ft., one target. Hit:19 (2d8 + 10) bludgeoning damage."
      },
      {
        "Name": "Frightful Presence",
        "Text": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a 21 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
      },
      {
        "Name": "Fire Breath (Recharge 5-6)",
        "Text": "The dragon exhales fire in a 90-foot cone. Each creature in that area must make a 24 Dexterity saving throw, taking 91 (26d6) fire damage on a failed save, or half as much damage on a successful one."
      }
    ],
    "legendary": [
      {
        "Name": "Detect",
        "Text": "The dragon makes a Wisdom (Perception) check."
      },
      {
        "Name": "Tail Attack",
        "Text": "The dragon makes a tail attack."
      },
      {
        "Name": "Wing Attack (Costs 2 Actions)",
        "Text": "The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a 25 Dexterity saving throw or take 17 (2d6 + 10) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
      }
    ],
    "environment": [
      "mountain",
      "hill"
    ]
  },
  {
    "name": "Ancient Silver Dragon",
    "size": "G",
    "type": "dragon",
    "alignment": "Lawful Good",
    "ac": "22 natural armor",
    "hp": 487,
    "speed": "Walk 40, Fly 80",
    "str": 30,
    "dex": 10,
    "con": 29,
    "int": 18,
    "wis": 15,
    "cha": 23,
    "save": "Dex +7, Con +16, Wis +9, Cha +13",
    "skill": "Arcana +11, History +11, Perception +16, Stealth +7",
    "senses": "blindsight 60 ft., darkvision 120 ft.",
    "passive": 26,
    "immune": "cold",
    "languages": "Common, Draconic",
    "cr": "23",
    "trait": [
      {
        "Name": "Legendary Resistance (3/Day)",
        "Text": "If the dragon fails a saving throw, it can choose to succeed instead."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 17 to hit, reach 15 ft., one target. Hit:21 (2d10 + 10) piercing damage."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 17 to hit, reach 10 ft., one target. Hit:17 (2d6 + 10) slashing damage."
      },
      {
        "Name": "Tail",
        "Text": "Melee Weapon 17 to hit, reach 20 ft., one target. Hit:19 (2d8 + 10) bludgeoning damage."
      },
      {
        "Name": "Frightful Presence",
        "Text": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a 21 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
      },
      {
        "Name": "Breath Weapons (Recharge 5-6)",
        "Text": "The dragon uses one of the following breath weapons."
      },
      {
        "Name": "Change Shape",
        "Text": "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice)."
      }
    ],
    "legendary": [
      {
        "Name": "Detect",
        "Text": "The dragon makes a Wisdom (Perception) check."
      },
      {
        "Name": "Tail Attack",
        "Text": "The dragon makes a tail attack."
      },
      {
        "Name": "Wing Attack (Costs 2 Actions)",
        "Text": "The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a 25 Dexterity saving throw or take 17 (2d6 + 10) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
      }
    ],
    "environment": [
      "mountain",
      "urban"
    ]
  },
  {
    "name": "Ancient White Dragon",
    "size": "G",
    "type": "dragon",
    "alignment": "Chaotic Evil",
    "ac": "20 natural armor",
    "hp": 333,
    "speed": "Walk 40, Burrow 40, Fly 80, Swim 40",
    "str": 26,
    "dex": 10,
    "con": 26,
    "int": 10,
    "wis": 13,
    "cha": 14,
    "save": "Dex +6, Con +14, Wis +7, Cha +8",
    "skill": "Perception +13, Stealth +6",
    "senses": "blindsight 60 ft., darkvision 120 ft.",
    "passive": 23,
    "immune": "cold",
    "languages": "Common, Draconic",
    "cr": "20",
    "trait": [
      {
        "Name": "Ice Walk",
        "Text": "The dragon can move across and climb icy surfaces without needing to make an ability check. Additionally, difficult terrain composed of ice or snow doesn't cost it extra movement."
      },
      {
        "Name": "Legendary Resistance (3/Day)",
        "Text": "If the dragon fails a saving throw, it can choose to succeed instead."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 14 to hit, reach 15 ft., one target. Hit:19 (2d10 + 8) piercing damage plus 9 (2d8) cold damage."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 14 to hit, reach 10 ft., one target. Hit:15 (2d6 + 8) slashing damage."
      },
      {
        "Name": "Tail",
        "Text": "Melee Weapon 14 to hit, reach 20 ft., one target. Hit:17 (2d8 + 8) bludgeoning damage."
      },
      {
        "Name": "Frightful Presence",
        "Text": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
      },
      {
        "Name": "Cold Breath (Recharge 5-6)",
        "Text": "The dragon exhales an icy blast in a 90-foot cone. Each creature in that area must make a 22 Constitution saving throw, taking 72 (16d8) cold damage on a failed save, or half as much damage on a successful one."
      }
    ],
    "legendary": [
      {
        "Name": "Detect",
        "Text": "The dragon makes a Wisdom (Perception) check."
      },
      {
        "Name": "Tail Attack",
        "Text": "The dragon makes a tail attack."
      },
      {
        "Name": "Wing Attack (Costs 2 Actions)",
        "Text": "The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
      }
    ],
    "environment": [
      "arctic"
    ]
  },
  {
    "name": "Androsphinx",
    "size": "L",
    "type": "monstrosity",
    "alignment": "Lawful Neutral",
    "ac": "17 natural armor",
    "hp": 199,
    "speed": "Walk 40, Fly 60",
    "str": 22,
    "dex": 10,
    "con": 20,
    "int": 16,
    "wis": 18,
    "cha": 23,
    "save": "Dex +6, Con +11, Int +9, Wis +10",
    "skill": "Arcana +9, Perception +10, Religion +15",
    "senses": "truesight 120 ft.",
    "passive": 20,
    "immune": "psychic, bludgeoning, piercing, slashing from nonmagical attacks",
    "conditionImmune": "charmed, frightened",
    "languages": "Common, Sphinx",
    "cr": "17",
    "trait": [
      {
        "Name": "Inscrutable",
        "Text": "The sphinx is immune to any effect that would sense its emotions or read its thoughts, as well as any divination spell that it refuses. Wisdom (Insight) checks made to ascertain the sphinx's intentions or sincerity have disadvantage."
      },
      {
        "Name": "Magic Weapons",
        "Text": "The sphinx's weapon attacks are magical."
      },
      {
        "Name": "Spellcasting",
        "Text": "The sphinx is a 12th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 18, +10 to hit with spell attacks). It requires no material components to cast its spells. The sphinx has the following cleric spells prepared:<br><br>Cantrips (at will): <em>sacred flame, spare the dying, thaumaturgy</em><br>1st (1 slots): <em>command, detect evil and good, detect magic</em><br>2nd (2 slots): <em>lesser restoration, zone of truth</em><br>3rd (3 slots): <em>dispel magic, tongues</em><br>4th (4 slots): <em>banishment, freedom of movement</em><br>5th (5 slots): <em>flame strike, greater restoration</em><br>6th (6 slots): <em>heroes' feast</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The sphinx makes two claw attacks."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 12 to hit, reach 5 ft., one target. Hit:17 (2d10 + 6) slashing damage."
      },
      {
        "Name": "Roar (3/Day)",
        "Text": "The sphinx emits a magical roar. Each time it roars before finishing a long rest, the roar is louder and the effect is different, as detailed below. Each creature within 500 feet of the sphinx and able to hear the roar must make a saving throw."
      }
    ],
    "legendary": [
      {
        "Name": "Claw Attack",
        "Text": "The sphinx makes one claw attack."
      },
      {
        "Name": "Teleport (Costs 2 Actions)",
        "Text": "The sphinx magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see."
      },
      {
        "Name": "Cast a Spell (Costs 3 Actions)",
        "Text": "The sphinx casts a spell from its list of prepared spells, using a spell slot as normal."
      }
    ],
    "environment": [
      "desert"
    ]
  },
  {
    "name": "Animated Armor",
    "size": "M",
    "type": "construct",
    "alignment": "Unaligned",
    "ac": "18 natural armor",
    "hp": 33,
    "speed": "Walk 25",
    "str": 14,
    "dex": 11,
    "con": 13,
    "int": 1,
    "wis": 3,
    "cha": 1,
    "senses": "blindsight 60 ft. (blind beyond this radius)",
    "passive": 6,
    "immune": "poison, psychic",
    "conditionImmune": "blinded, charmed, deafened, exhaustion, frightened, paralyzed, petrified, poisoned",
    "cr": "1",
    "trait": [
      {
        "Name": "Antimagic Susceptibility",
        "Text": "The armor is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the armor must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute."
      },
      {
        "Name": "False Appearance",
        "Text": "While the armor remains motionless, it is indistinguishable from a normal suit of armor."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The armor makes two melee attacks."
      },
      {
        "Name": "Slam",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:5 (1d6 + 2) bludgeoning damage."
      }
    ]
  },
  {
    "name": "Ankheg",
    "size": "L",
    "type": "monstrosity",
    "alignment": "Unaligned",
    "ac": "14 natural armor",
    "hp": 39,
    "speed": "Walk 30, Burrow 10",
    "str": 17,
    "dex": 11,
    "con": 13,
    "int": 1,
    "wis": 13,
    "cha": 6,
    "senses": "darkvision 60 ft., tremorsense 60 ft.",
    "passive": 11,
    "cr": "2",
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:10 (2d6 + 3) slashing damage plus 3 (1d6) acid damage. If the target is a Large or smaller creature, it is grappled (escape 13). Until this grapple ends, the ankheg can bite only the grappled creature and has advantage on attack rolls to do so."
      },
      {
        "Name": "Acid Spray (Recharge 6)",
        "Text": "The ankheg spits acid in a line that is 30 feet long and 5 feet wide, provided that it has no creature grappled. Each creature in that line must make a 13 Dexterity saving throw, taking 10 (3d6) acid damage on a failed save, or half as much damage on a successful one."
      }
    ],
    "environment": [
      "grassland",
      "forest"
    ]
  },
  {
    "name": "Ankylosaurus",
    "size": "H",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": "15 natural armor",
    "hp": 68,
    "speed": "Walk 30",
    "str": 19,
    "dex": 11,
    "con": 15,
    "int": 2,
    "wis": 12,
    "cha": 5,
    "passive": 11,
    "cr": "3",
    "action": [
      {
        "Name": "Tail",
        "Text": "Melee Weapon 7 to hit, reach 10 ft., one target. Hit:18 (4d6 + 4) bludgeoning damage. If the target is a creature, it must succeed on a 14 Strength saving throw or be knocked prone."
      }
    ],
    "environment": [
      "grassland"
    ]
  },
  {
    "name": "Ape",
    "size": "M",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": 12,
    "hp": 19,
    "speed": "Walk 30, Climb 30",
    "str": 16,
    "dex": 14,
    "con": 14,
    "int": 6,
    "wis": 12,
    "cha": 7,
    "skill": "Athletics +5, Perception +3",
    "passive": 13,
    "cr": "1/2",
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The ape makes two fist attacks."
      },
      {
        "Name": "Fist",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:6 (1d6 + 3) bludgeoning damage."
      },
      {
        "Name": "Rock",
        "Text": "Ranged Weapon 5 to hit, range 25/50 ft., one target. Hit:6 (1d6 + 3) bludgeoning damage."
      }
    ],
    "environment": [
      "forest"
    ]
  },
  {
    "name": "Arcanaloth",
    "size": "M",
    "type": "fiend (yugoloth)",
    "alignment": "Neutral Evil",
    "ac": "17 natural armor",
    "hp": 104,
    "speed": "Walk 30, Fly 30",
    "str": 17,
    "dex": 12,
    "con": 14,
    "int": 20,
    "wis": 16,
    "cha": 17,
    "save": "Dex +5, Int +9, Wis +7, Cha +7",
    "skill": "Arcana +13, Deception +11, Insight +11, Perception +7",
    "senses": "truesight 120 ft.",
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
    "conditionImmune": "charmed, poisoned",
    "languages": "all, telepathy 120 ft.",
    "cr": "12",
    "trait": [
      {
        "Name": "Magic Resistance",
        "Text": "The arcanaloth has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Magic Weapons",
        "Text": "The arcanaloth's weapon attacks are magical."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "The arcanaloth's innate spellcasting ability is Charisma (spell save DC 15). The arcanaloth can innately cast the following spells, requiring no material components:<br>At will: <em>alter self, darkness, heat metal, invisibility (self only), magic missile</em>"
      },
      {
        "Name": "Spellcasting",
        "Text": "The arcanaloth is a 16th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 17, +9 to hit with spell attacks). The arcanaloth has the following wizard spells prepared:<br><br>Cantrips (at will): <em>fire bolt, mage hand, minor illusion, prestidigitation</em><br>1st (1 slots): <em>detect magic, identify, shield, Tenser's floating disk</em><br>2nd (2 slots): <em>detect thoughts, mirror image, phantasmal force, suggestion</em><br>3rd (3 slots): <em>counterspell, fear, fireball</em><br>4th (4 slots): <em>banishment, dimension door</em><br>5th (5 slots): <em>contact other plane, hold monster</em><br>6th (6 slots): <em>chain lightning</em><br>7th (7 slots): <em>finger of death</em><br>8th (8 slots): <em>mind blank</em>"
      }
    ],
    "action": [
      {
        "Name": "Claws",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:8 (2d4 + 3) slashing damage. The target must make a 14 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one."
      },
      {
        "Name": "Teleport",
        "Text": "The arcanaloth magically teleports, along with any equipment it is wearing or carrying, up to 60 feet to an unoccupied space it can see."
      }
    ]
  },
  {
    "name": "Archmage",
    "size": "M",
    "type": "humanoid (any race)",
    "alignment": "Any",
    "ac": 12,
    "hp": 99,
    "speed": "Walk 30",
    "str": 10,
    "dex": 14,
    "con": 12,
    "int": 20,
    "wis": 15,
    "cha": 16,
    "save": "Int +9, Wis +6",
    "skill": "Arcana +13, History +13",
    "passive": 12,
    "resist": [
      {
        "special": "damage from spells"
      },
      {
        "resist": [
          "bludgeoning",
          "piercing",
          "slashing"
        ],
        "note": "(from stoneskin)",
        "cond": true,
        "preNote": "nonmagical"
      }
    ],
    "languages": "any six languages",
    "cr": "12",
    "trait": [
      {
        "Name": "Magic Resistance",
        "Text": "The archmage has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Spellcasting",
        "Text": "The archmage is an 18th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 17, +9 to hit with spell attacks). The archmage can cast disguise self and invisibility at will and has the following wizard spells prepared:<br>At will: <em>disguise self, invisibility</em><br><br>Cantrips (at will): <em>fire bolt, light, mage hand, prestidigitation, shocking grasp</em><br>1st (1 slots): <em>detect magic, identify, mage armor*, magic missile</em><br>2nd (2 slots): <em>detect thoughts, mirror image, misty step</em><br>3rd (3 slots): <em>counterspell, fly, lightning bolt</em><br>4th (4 slots): <em>banishment, fire shield, stoneskin*</em><br>5th (5 slots): <em>cone of cold, scrying, wall of force</em><br>6th (6 slots): <em>globe of invulnerability</em><br>7th (7 slots): <em>teleport</em><br>8th (8 slots): <em>mind blank*</em><br>9th (9 slots): <em>time stop</em>"
      }
    ],
    "action": [
      {
        "Name": "Dagger",
        "Text": "Melee or Ranged Weapon 6 to hit, reach 5 ft. or range 20/60 ft., one target. Hit:4 (1d4 + 2) piercing damage."
      }
    ]
  },
  {
    "name": "Assassin",
    "size": "M",
    "type": "humanoid (any race)",
    "alignment": "Lawful Any Non-Good Chaotic Any Non-Lawful Evil",
    "ac": "15 studded leather armor",
    "hp": 78,
    "speed": "Walk 30",
    "str": 11,
    "dex": 16,
    "con": 14,
    "int": 13,
    "wis": 11,
    "cha": 10,
    "save": "Dex +6, Int +4",
    "skill": "Acrobatics +6, Deception +3, Perception +3, Stealth +9",
    "passive": 13,
    "resist": [
      "poison"
    ],
    "languages": "Thieves' cant plus any two languages",
    "cr": "8",
    "trait": [
      {
        "Name": "Assassinate",
        "Text": "During its first turn, the assassin has advantage on attack rolls against any creature that hasn't taken a turn. Any hit the assassin scores against a surprised creature is a critical hit."
      },
      {
        "Name": "Evasion",
        "Text": "If the assassin is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, the assassin instead takes no damage if it succeeds on the saving throw, and only half damage if it fails."
      },
      {
        "Name": "Sneak Attack (1/Turn)",
        "Text": "The assassin deals an extra 14 (4d6) damage when it hits a target with a weapon attack and has advantage on the attack roll, or when the target is within 5 feet of an ally of the assassin that isn't incapacitated and the assassin doesn't have disadvantage on the attack roll."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The assassin makes two shortsword attacks."
      },
      {
        "Name": "Shortsword",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:6 (1d6 + 3) piercing damage, and the target must make a 15 Constitution saving throw, taking 24 (7d6) poison damage on a failed save, or half as much damage on a successful one."
      },
      {
        "Name": "Light Crossbow",
        "Text": "Ranged Weapon 6 to hit, range 80/320 ft., one target. Hit:7 (1d8 + 3) piercing damage, and the target must make a 15 Constitution saving throw, taking 24 (7d6) poison damage on a failed save, or half as much damage on a successful one."
      }
    ]
  },
  {
    "name": "Awakened Shrub",
    "size": "S",
    "type": "plant",
    "alignment": "Unaligned",
    "ac": 9,
    "hp": 10,
    "speed": "Walk 20",
    "str": 3,
    "dex": 8,
    "con": 11,
    "int": 10,
    "wis": 10,
    "cha": 6,
    "passive": 10,
    "resist": [
      "piercing"
    ],
    "vulnerable": [
      "fire"
    ],
    "languages": "one language known by its creator",
    "cr": "0",
    "trait": [
      {
        "Name": "False Appearance",
        "Text": "While the shrub remains motionless, it is indistinguishable from a normal shrub."
      }
    ],
    "action": [
      {
        "Name": "Rake",
        "Text": "Melee Weapon 1 to hit, reach 5 ft., one target. Hit:1 (1d4 - 1) slashing damage."
      }
    ],
    "environment": [
      "forest"
    ]
  },
  {
    "name": "Awakened Tree",
    "size": "H",
    "type": "plant",
    "alignment": "Unaligned",
    "ac": "13 natural armor",
    "hp": 59,
    "speed": "Walk 20",
    "str": 19,
    "dex": 6,
    "con": 15,
    "int": 10,
    "wis": 10,
    "cha": 7,
    "passive": 10,
    "resist": [
      "bludgeoning",
      "piercing"
    ],
    "vulnerable": [
      "fire"
    ],
    "languages": "one language known by its creator",
    "cr": "2",
    "trait": [
      {
        "Name": "False Appearance",
        "Text": "While the tree remains motionless, it is indistinguishable from a normal tree."
      }
    ],
    "action": [
      {
        "Name": "Slam",
        "Text": "Melee Weapon 6 to hit, reach 10 ft., one target. Hit:14 (3d6 + 4) bludgeoning damage."
      }
    ],
    "environment": [
      "forest"
    ]
  },
  {
    "name": "Axe Beak",
    "size": "L",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": 11,
    "hp": 19,
    "speed": "Walk 50",
    "str": 14,
    "dex": 12,
    "con": 12,
    "int": 2,
    "wis": 10,
    "cha": 5,
    "passive": 10,
    "cr": "1/4",
    "action": [
      {
        "Name": "Beak",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:6 (1d8 + 2) slashing damage."
      }
    ],
    "environment": [
      "grassland",
      "hill"
    ]
  },
  {
    "name": "Azer",
    "size": "M",
    "type": "elemental",
    "alignment": "Lawful Neutral",
    "ac": "17 natural armor, shield",
    "hp": 39,
    "speed": "Walk 30",
    "str": 17,
    "dex": 12,
    "con": 15,
    "int": 12,
    "wis": 13,
    "cha": 10,
    "save": "Con +4",
    "passive": 11,
    "immune": "fire, poison",
    "conditionImmune": "poisoned",
    "languages": "Ignan",
    "cr": "2",
    "trait": [
      {
        "Name": "Heated Body",
        "Text": "A creature that touches the azer or hits it with a melee attack while within 5 feet of it takes 5 (1d10) fire damage."
      },
      {
        "Name": "Heated Weapons",
        "Text": "When the azer hits with a metal melee weapon, it deals an extra 3 (1d6) fire damage (included in the attack)."
      },
      {
        "Name": "Illumination",
        "Text": "The azer sheds bright light in a 10-foot radius and dim light for an additional 10 feet."
      }
    ],
    "action": [
      {
        "Name": "Warhammer",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:7 (1d8 + 3) bludgeoning damage, or 8 (1d10 + 3) bludgeoning damage if used with two hands to make a melee attack, plus 3 (1d6) fire damage."
      }
    ]
  },
  {
    "name": "Baboon",
    "size": "S",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": 12,
    "hp": 3,
    "speed": "Walk 30, Climb 30",
    "str": 8,
    "dex": 14,
    "con": 11,
    "int": 4,
    "wis": 12,
    "cha": 6,
    "passive": 11,
    "cr": "0",
    "trait": [
      {
        "Name": "Pack Tactics",
        "Text": "The baboon has advantage on an attack roll against a creature if at least one of the baboon's allies is within 5 feet of the creature and the ally isn't incapacitated."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 1 to hit, reach 5 ft., one target. Hit:1 (1d4 - 1) piercing damage."
      }
    ],
    "environment": [
      "forest",
      "hill"
    ]
  },
  {
    "name": "Badger",
    "size": "T",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": 10,
    "hp": 3,
    "speed": "Walk 20, Burrow 5",
    "str": 4,
    "dex": 11,
    "con": 12,
    "int": 2,
    "wis": 12,
    "cha": 5,
    "senses": "darkvision 30 ft.",
    "passive": 11,
    "cr": "0",
    "trait": [
      {
        "Name": "Keen Smell",
        "Text": "The badger has advantage on Wisdom (Perception) checks that rely on smell."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 2 to hit, reach 5 ft., one target. Hit:1 piercing damage."
      }
    ],
    "environment": [
      "forest"
    ]
  },
  {
    "name": "Balor",
    "size": "H",
    "type": "fiend (demon)",
    "alignment": "Chaotic Evil",
    "ac": "19 natural armor",
    "hp": 262,
    "speed": "Walk 40, Fly 80",
    "str": 26,
    "dex": 15,
    "con": 22,
    "int": 20,
    "wis": 16,
    "cha": 22,
    "save": "Str +14, Con +12, Wis +9, Cha +12",
    "senses": "truesight 120 ft.",
    "passive": 13,
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
    "immune": "fire, poison",
    "conditionImmune": "poisoned",
    "languages": "Abyssal, telepathy 120 ft.",
    "cr": "19",
    "trait": [
      {
        "Name": "Death Throes",
        "Text": "When the balor dies, it explodes, and each creature within 30 feet of it must make a 20 Dexterity saving throw, taking 70 (20d6) fire damage on a failed save, or half as much damage on a successful one. The explosion ignites flammable objects in that area that aren't being worn or carried, and it destroys the balor's weapons."
      },
      {
        "Name": "Fire Aura",
        "Text": "At the start of each of the balor's turns, each creature within 5 feet of it takes 10 (3d6) fire damage, and flammable objects in the aura that aren't being worn or carried ignite. A creature that touches the balor or hits it with a melee attack while within 5 feet of it takes 10 (3d6) fire damage."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The balor has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Magic Weapons",
        "Text": "The balor's weapon attacks are magical."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The balor makes two attacks: one with its longsword and one with its whip."
      },
      {
        "Name": "Longsword",
        "Text": "Melee Weapon 14 to hit, reach 10 ft., one target. Hit:21 (3d8 + 8) slashing damage plus 13 (3d8) lightning damage. If the balor scores a critical hit, it rolls damage dice three times, instead of twice."
      },
      {
        "Name": "Whip",
        "Text": "Melee Weapon 14 to hit, reach 30 ft., one target. Hit:15 (2d6 + 8) slashing damage plus 10 (3d6) fire damage, and the target must succeed on a 20 Strength saving throw or be pulled up to 25 feet toward the balor."
      },
      {
        "Name": "Teleport",
        "Text": "The balor magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see."
      }
    ]
  },
  {
    "name": "Bandit",
    "size": "M",
    "type": "humanoid (any race)",
    "alignment": "Any Non-Good Chaotic Good Any Non-Lawful Evil",
    "ac": "12 leather armor",
    "hp": 11,
    "speed": "Walk 30",
    "str": 11,
    "dex": 12,
    "con": 12,
    "int": 10,
    "wis": 10,
    "cha": 10,
    "passive": 10,
    "languages": "any one language (usually Common)",
    "cr": "1/8",
    "action": [
      {
        "Name": "Scimitar",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one target. Hit:4 (1d6 + 1) slashing damage."
      },
      {
        "Name": "Light Crossbow",
        "Text": "Ranged Weapon 3 to hit, range 80/320 ft., one target. Hit:5 (1d8 + 1) piercing damage."
      }
    ],
    "altArt": [
      {
        "name": "Diabolical Bandit",
        "source": "MTF",
        "page": 18
      },
      {
        "name": "Uttolot Elf Bandit",
        "source": "EGW"
      }
    ]
  },
  {
    "name": "Bandit Captain",
    "size": "M",
    "type": "humanoid (any race)",
    "alignment": "Any Non-Good Chaotic Good Any Non-Lawful Evil",
    "ac": "15 studded leather armor",
    "hp": 65,
    "speed": "Walk 30",
    "str": 15,
    "dex": 16,
    "con": 14,
    "int": 14,
    "wis": 11,
    "cha": 14,
    "save": "Str +4, Dex +5, Wis +2",
    "skill": "Athletics +4, Deception +4",
    "passive": 10,
    "languages": "any two languages",
    "cr": "2",
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The captain makes three melee attacks: two with its scimitar and one with its dagger. Or the captain makes two ranged attacks with its daggers."
      },
      {
        "Name": "Scimitar",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:6 (1d6 + 3) slashing damage."
      },
      {
        "Name": "Dagger",
        "Text": "Melee or Ranged Weapon 5 to hit, reach 5 ft. or range 20/60 ft., one target. Hit:5 (1d4 + 3) piercing damage."
      }
    ],
    "reaction": [
      {
        "Name": "Parry",
        "Text": "The captain adds 2 to its AC against one melee attack that would hit it. To do so, the captain must see the attacker and be wielding a melee weapon."
      }
    ],
    "altArt": [
      {
        "name": "Diabolical Bandit Captain",
        "source": "MTF",
        "page": 18
      }
    ]
  },
  {
    "name": "Banshee",
    "size": "M",
    "type": "undead",
    "alignment": "Chaotic Evil",
    "ac": 12,
    "hp": 58,
    "speed": "Walk 0, Fly 40 (hover)",
    "str": 1,
    "dex": 14,
    "con": 10,
    "int": 12,
    "wis": 11,
    "cha": 17,
    "save": "Wis +2, Cha +5",
    "senses": "darkvision 60 ft.",
    "passive": 10,
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
    "languages": "Common, Elvish",
    "cr": "4",
    "trait": [
      {
        "Name": "Detect Life",
        "Text": "The banshee can magically sense the presence of living creatures up to 5 miles away that aren't undead or constructs. She knows the general direction they're in but not their exact locations."
      },
      {
        "Name": "Incorporeal Movement",
        "Text": "The banshee can move through other creatures and objects as if they were difficult terrain. She takes 5 (1d10) force damage if she ends her turn inside an object."
      }
    ],
    "action": [
      {
        "Name": "Corrupting Touch",
        "Text": "Melee Spell 4 to hit, reach 5 ft., one target. Hit:12 (3d6 + 2) necrotic damage."
      },
      {
        "Name": "Horrifying Visage",
        "Text": "Each non-undead creature within 60 feet of the banshee that can see her must succeed on a 13 Wisdom saving throw or be frightened for 1 minute. A frightened target can repeat the saving throw at the end of each of its turns, with disadvantage if the banshee is within line of sight, ending the effect on itself on a success. If a target's saving throw is successful or the effect ends for it, the target is immune to the banshee's Horrifying Visage for the next 24 hours."
      },
      {
        "Name": "Wail (1/Day)",
        "Text": "The banshee releases a mournful wail, provided that she isn't in sunlight. This wail has no effect on constructs and undead. All other creatures within 30 feet of her that can hear her must make a 13 Constitution saving throw. On a failure, a creature drops to 0 hit points. On a success, a creature takes 10 (3d6) psychic damage."
      }
    ],
    "environment": [
      "forest",
      "coastal"
    ]
  },
  {
    "name": "Barbed Devil",
    "size": "M",
    "type": "fiend (devil)",
    "alignment": "Lawful Evil",
    "ac": "15 natural armor",
    "hp": 110,
    "speed": "Walk 30",
    "str": 16,
    "dex": 17,
    "con": 18,
    "int": 12,
    "wis": 14,
    "cha": 14,
    "save": "Str +6, Con +7, Wis +5, Cha +5",
    "skill": "Deception +5, Insight +5, Perception +8",
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
    "languages": "Infernal, telepathy 120 ft.",
    "cr": "5",
    "trait": [
      {
        "Name": "Barbed Hide",
        "Text": "At the start of each of its turns, the barbed devil deals 5 (1d10) piercing damage to any creature grappling it."
      },
      {
        "Name": "Devil's Sight",
        "Text": "Magical darkness doesn't impede the devil's darkvision."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The devil has advantage on saving throws against spells and other magical effects."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The devil makes three melee attacks: one with its tail and two with its claws. Alternatively, it can use Hurl Flame twice."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:6 (1d6 + 3) piercing damage."
      },
      {
        "Name": "Tail",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:10 (2d6 + 3) piercing damage."
      },
      {
        "Name": "Hurl Flame",
        "Text": "Ranged Spell 5 to hit, range 150 ft., one target. Hit:10 (3d6) fire damage. If the target is a flammable object that isn't being worn or carried, it also catches fire."
      }
    ]
  },
  {
    "name": "Barlgura",
    "size": "L",
    "type": "fiend (demon)",
    "alignment": "Chaotic Evil",
    "ac": "15 natural armor",
    "hp": 68,
    "speed": "Walk 40, Climb 40",
    "str": 18,
    "dex": 15,
    "con": 16,
    "int": 7,
    "wis": 14,
    "cha": 9,
    "save": "Dex +5, Con +6",
    "skill": "Perception +5, Stealth +5",
    "senses": "blindsight 30 ft., darkvision 120 ft.",
    "passive": 15,
    "resist": [
      "cold",
      "fire",
      "lightning"
    ],
    "immune": "poison",
    "conditionImmune": "poisoned",
    "languages": "Abyssal, telepathy 120 ft.",
    "cr": "5",
    "trait": [
      {
        "Name": "Reckless",
        "Text": "At the start of its turn, the barlgura can gain advantage on all melee weapon attack rolls it makes during that turn, but attack rolls against it have advantage until the start of its next turn."
      },
      {
        "Name": "Running Leap",
        "Text": "The barlgura's long jump is up to 40 feet and its high jump is up to 20 feet when it has a running start."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day each: <em>entangle, phantasmal force</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The barlgura makes three attacks: one with its bite and two with its fists."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:11 (2d6 + 4) piercing damage."
      },
      {
        "Name": "Fist",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:9 (1d10 + 4) bludgeoning damage."
      }
    ]
  },
  {
    "name": "Basilisk",
    "size": "M",
    "type": "monstrosity",
    "alignment": "Unaligned",
    "ac": "15 natural armor",
    "hp": 52,
    "speed": "Walk 20",
    "str": 16,
    "dex": 8,
    "con": 15,
    "int": 2,
    "wis": 8,
    "cha": 7,
    "senses": "darkvision 60 ft.",
    "passive": 9,
    "cr": "3",
    "trait": [
      {
        "Name": "Petrifying Gaze",
        "Text": "If a creature starts its turn within 30 feet of the basilisk and the two of them can see each other, the basilisk can force the creature to make a 12 Constitution saving throw if the basilisk isn't incapacitated. On a failed save, the creature magically begins to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure, the creature is petrified until freed by the greater restoration spell or other magic.<br>A creature that isn't surprised can avert its eyes to avoid the saving throw at the start of its turn. If it does so, it can't see the basilisk until the start of its next turn, when it can avert its eyes again. If it looks at the basilisk in the meantime, it must immediately make the save.<br>If the basilisk sees its reflection within 30 feet of it in bright light, it mistakes itself for a rival and targets itself with its gaze."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:10 (2d6 + 3) piercing damage plus 7 (2d6) poison damage."
      }
    ],
    "environment": [
      "mountain"
    ]
  },
  {
    "name": "Bat",
    "size": "T",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": 12,
    "hp": 1,
    "speed": "Walk 5, Fly 30",
    "str": 2,
    "dex": 15,
    "con": 8,
    "int": 2,
    "wis": 12,
    "cha": 4,
    "senses": "blindsight 60 ft.",
    "passive": 11,
    "cr": "0",
    "trait": [
      {
        "Name": "Echolocation",
        "Text": "The bat can't use its blindsight while deafened."
      },
      {
        "Name": "Keen Hearing",
        "Text": "The bat has advantage on Wisdom (Perception) checks that rely on hearing."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 0 to hit, reach 5 ft., one creature. Hit:1 piercing damage."
      }
    ],
    "familiar": true
  },
  {
    "name": "Bearded Devil",
    "size": "M",
    "type": "fiend (devil)",
    "alignment": "Lawful Evil",
    "ac": "13 natural armor",
    "hp": 52,
    "speed": "Walk 30",
    "str": 16,
    "dex": 15,
    "con": 15,
    "int": 9,
    "wis": 11,
    "cha": 11,
    "save": "Str +5, Con +4, Wis +2",
    "senses": "darkvision 120 ft.",
    "passive": 10,
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
    "languages": "Infernal, telepathy 120 ft.",
    "cr": "3",
    "trait": [
      {
        "Name": "Devil's Sight",
        "Text": "Magical darkness doesn't impede the devil's darkvision."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The devil has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Steadfast",
        "Text": "The devil can't be frightened while it can see an allied creature within 30 feet of it."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The devil makes two attacks: one with its beard and one with its glaive."
      },
      {
        "Name": "Beard",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one creature. Hit:6 (1d8 + 2) piercing damage, and the target must succeed on a 12 Constitution saving throw or be poisoned for 1 minute. While poisoned in this way, the target can't regain hit points. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      },
      {
        "Name": "Glaive",
        "Text": "Melee Weapon 5 to hit, reach 10 ft., one target. Hit:8 (1d10 + 3) slashing damage. If the target is a creature other than an undead or a construct, it must succeed on a 12 Constitution saving throw or lose 5 (1d10) hit points at the start of each of its turns due to an infernal wound. Each time the devil hits the wounded target with this attack, the damage dealt by the wound increases by 5 (1d10). Any creature can take an action to stanch the wound with a successful 12 Wisdom (Medicine) check. The wound also closes if the target receives magical healing."
      }
    ]
  },
  {
    "name": "Behir",
    "size": "H",
    "type": "monstrosity",
    "alignment": "Neutral Evil",
    "ac": "17 natural armor",
    "hp": 168,
    "speed": "Walk 50, Climb 40",
    "str": 23,
    "dex": 16,
    "con": 18,
    "int": 7,
    "wis": 14,
    "cha": 12,
    "skill": "Perception +6, Stealth +7",
    "senses": "darkvision 90 ft.",
    "passive": 16,
    "immune": "lightning",
    "languages": "Draconic",
    "cr": "11",
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The behir makes two attacks: one with its bite and one to constrict."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 10 to hit, reach 10 ft., one target. Hit:22 (3d10 + 6) piercing damage."
      },
      {
        "Name": "Constrict",
        "Text": "Melee Weapon 10 to hit, reach 5 ft., one Large or smaller creature. Hit:17 (2d10 + 6) bludgeoning damage plus 17 (2d10 + 6) slashing damage. The target is grappled (escape 16) if the behir isn't already constricting a creature, and the target is restrained until this grapple ends."
      },
      {
        "Name": "Lightning Breath (Recharge 5-6)",
        "Text": "The behir exhales a line of lightning that is 20 feet long and 5 feet wide. Each creature in that line must make a 16 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much damage on a successful one."
      },
      {
        "Name": "Swallow",
        "Text": "The behir makes one bite attack against a Medium or smaller target it is grappling. If the attack hits, the target is also swallowed, and the grapple ends. While swallowed, the target is blinded and restrained, it has total cover against attacks and other effects outside the behir, and it takes 21 (6d6) acid damage at the start of each of the behir's turns. A behir can have only one creature swallowed at a time."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Beholder",
    "size": "L",
    "type": "aberration",
    "alignment": "Lawful Evil",
    "ac": "18 natural armor",
    "hp": 180,
    "speed": "Walk 0, Fly 20 (hover)",
    "str": 10,
    "dex": 14,
    "con": 18,
    "int": 17,
    "wis": 15,
    "cha": 17,
    "save": "Int +8, Wis +7, Cha +8",
    "skill": "Perception +12",
    "senses": "darkvision 120 ft.",
    "passive": 22,
    "conditionImmune": "prone",
    "languages": "Deep Speech, Undercommon",
    "cr": {
      "cr": "13",
      "lair": "14"
    },
    "trait": [
      {
        "Name": "Antimagic Cone",
        "Text": "The beholder's central eye creates an area of antimagic, as in the antimagic field spell, in a 150-foot cone. At the start of each of its turns, the beholder decides which way the cone faces and whether the cone is active. The area works against the beholder's own eye rays."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:14 (4d6) piercing damage."
      },
      {
        "Name": "Eye Rays",
        "Text": "The beholder shoots three of the following magical eye rays at random (reroll duplicates), choosing one to three targets it can see within 120 feet of it:"
      }
    ],
    "legendaryHeader": [
      "The beholder can take 3 legendary actions, using the Eye Ray option below. It can take only one legendary action at a time and only at the end of another creature's turn. The beholder regains spent legendary actions at the start of its turn."
    ],
    "legendary": [
      {
        "Name": "Eye Ray",
        "Text": "The beholder uses one random eye ray."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Beholder Zombie",
    "size": "L",
    "type": "undead",
    "alignment": "Neutral Evil",
    "ac": "15 natural armor",
    "hp": 93,
    "speed": "Walk 0, Fly 20 (hover)",
    "str": 10,
    "dex": 8,
    "con": 16,
    "int": 3,
    "wis": 8,
    "cha": 5,
    "save": "Wis +2",
    "senses": "darkvision 60 ft.",
    "passive": 9,
    "immune": "poison",
    "conditionImmune": "poisoned, prone",
    "languages": "understands Deep Speech and Undercommon but can't speak",
    "cr": "5",
    "trait": [
      {
        "Name": "Undead Fortitude",
        "Text": "If damage reduces the zombie to 0 hit points, it must make a Constitution saving throw with a DC of 5 + the damage taken, unless the damage is radiant or from a critical hit. On a success, the zombie drops to 1 hit point instead."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one target. Hit:14 (4d6) piercing damage."
      },
      {
        "Name": "Eye Ray",
        "Text": "The zombie uses a random magical eye ray, choosing a target that it can see within 60 feet of it."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Berserker",
    "size": "M",
    "type": "humanoid (any race)",
    "alignment": "Chaotic Good Any Non-Lawful Evil",
    "ac": "13 hide armor",
    "hp": 67,
    "speed": "Walk 30",
    "str": 16,
    "dex": 12,
    "con": 17,
    "int": 9,
    "wis": 11,
    "cha": 9,
    "passive": 10,
    "languages": "any one language (usually Common)",
    "cr": "2",
    "trait": [
      {
        "Name": "Reckless",
        "Text": "At the start of its turn, the berserker can gain advantage on all melee weapon attack rolls during that turn, but attack rolls against it have advantage until the start of its next turn."
      }
    ],
    "action": [
      {
        "Name": "Greataxe",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:9 (1d12 + 3) slashing damage."
      }
    ],
    "altArt": [
      {
        "name": "Diabolical Berserker",
        "source": "MTF",
        "page": 18
      }
    ]
  },
  {
    "name": "Black Bear",
    "size": "M",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": "11 natural armor",
    "hp": 19,
    "speed": "Walk 40, Climb 30",
    "str": 15,
    "dex": 10,
    "con": 14,
    "int": 2,
    "wis": 12,
    "cha": 7,
    "skill": "Perception +3",
    "passive": 13,
    "cr": "1/2",
    "trait": [
      {
        "Name": "Keen Smell",
        "Text": "The bear has advantage on Wisdom (Perception) checks that rely on smell."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The bear makes two attacks: one with its bite and one with its claws."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:5 (1d6 + 2) piercing damage."
      },
      {
        "Name": "Claws",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:7 (2d4 + 2) slashing damage."
      }
    ],
    "environment": [
      "forest"
    ]
  },
  {
    "name": "Black Dragon Wyrmling",
    "size": "M",
    "type": "dragon",
    "alignment": "Chaotic Evil",
    "ac": "17 natural armor",
    "hp": 33,
    "speed": "Walk 30, Fly 60, Swim 30",
    "str": 15,
    "dex": 14,
    "con": 13,
    "int": 10,
    "wis": 11,
    "cha": 13,
    "save": "Dex +4, Con +3, Wis +2, Cha +3",
    "skill": "Perception +4, Stealth +4",
    "senses": "blindsight 10 ft., darkvision 60 ft.",
    "passive": 14,
    "immune": "acid",
    "languages": "Draconic",
    "cr": "2",
    "trait": [
      {
        "Name": "Amphibious",
        "Text": "The dragon can breathe air and water."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:7 (1d10 + 2) piercing damage plus 2 (1d4) acid damage."
      },
      {
        "Name": "Acid Breath (Recharge 5-6)",
        "Text": "The dragon exhales acid in a 15-foot line that is 5 feet wide. Each creature in that line must make a 11 Dexterity saving throw, taking 22 (5d8) acid damage on a failed save, or half as much damage on a successful one."
      }
    ]
  },
  {
    "name": "Black Pudding",
    "size": "L",
    "type": "ooze",
    "alignment": "Unaligned",
    "ac": 7,
    "hp": 85,
    "speed": "Walk 20, Climb 20",
    "str": 16,
    "dex": 5,
    "con": 16,
    "int": 1,
    "wis": 6,
    "cha": 1,
    "senses": "blindsight 60 ft. (blind beyond this radius)",
    "passive": 8,
    "immune": "acid, cold, lightning, slashing",
    "conditionImmune": "blinded, charmed, deafened, exhaustion, frightened, prone",
    "cr": "4",
    "trait": [
      {
        "Name": "Amorphous",
        "Text": "The pudding can move through a space as narrow as 1 inch wide without squeezing."
      },
      {
        "Name": "Corrosive Form",
        "Text": "A creature that touches the pudding or hits it with a melee attack while within 5 feet of it takes 4 (1d8) acid damage. Any nonmagical weapon made of metal or wood that hits the pudding corrodes. After dealing damage, the weapon takes a permanent and cumulative −1 penalty to damage rolls. If its penalty drops to −5, the weapon is destroyed. Nonmagical ammunition made of metal or wood that hits the pudding is destroyed after dealing damage. The pudding can eat through 2-inch-thick, nonmagical wood or metal in 1 round."
      },
      {
        "Name": "Spider Climb",
        "Text": "The pudding can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
      }
    ],
    "action": [
      {
        "Name": "Pseudopod",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:6 (1d6 + 3) bludgeoning damage plus 18 (4d8) acid damage. In addition, nonmagical armor worn by the target is partly dissolved and takes a permanent and cumulative −1 penalty to the AC it offers. The armor is destroyed if the penalty reduces its AC to 10."
      }
    ],
    "reaction": [
      {
        "Name": "Split",
        "Text": "When a pudding that is Medium or larger is subjected to lightning or slashing damage, it splits into two new puddings if it has at least 10 hit points. Each new pudding has hit points equal to half the original pudding's, rounded down. New puddings are one size smaller than the original pudding."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Blink Dog",
    "size": "M",
    "type": "fey",
    "alignment": "Lawful Good",
    "ac": 13,
    "hp": 22,
    "speed": "Walk 40",
    "str": 12,
    "dex": 17,
    "con": 12,
    "int": 10,
    "wis": 13,
    "cha": 11,
    "skill": "Perception +3, Stealth +5",
    "passive": 10,
    "languages": "Blink Dog, understands Sylvan but can't speak it",
    "cr": "1/4",
    "trait": [
      {
        "Name": "Keen Hearing and Smell",
        "Text": "The dog has advantage on Wisdom (Perception) checks that rely on hearing or smell."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one target. Hit:4 (1d6 + 1) piercing damage."
      },
      {
        "Name": "Teleport (Recharge 4-6)",
        "Text": "The dog magically teleports, along with any equipment it is wearing or carrying, up to 40 feet to an unoccupied space it can see. Before or after teleporting, the dog can make one bite attack."
      }
    ],
    "environment": [
      "forest"
    ]
  },
  {
    "name": "Blood Hawk",
    "size": "S",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": 12,
    "hp": 7,
    "speed": "Walk 10, Fly 60",
    "str": 6,
    "dex": 14,
    "con": 10,
    "int": 3,
    "wis": 14,
    "cha": 5,
    "skill": "Perception +4",
    "passive": 14,
    "cr": "1/8",
    "trait": [
      {
        "Name": "Keen Sight",
        "Text": "The hawk has advantage on Wisdom (Perception) checks that rely on sight."
      },
      {
        "Name": "Pack Tactics",
        "Text": "The hawk has advantage on an attack roll against a creature if at least one of the hawk's allies is within 5 feet of the creature and the ally isn't incapacitated."
      }
    ],
    "action": [
      {
        "Name": "Beak",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:4 (1d4 + 2) piercing damage."
      }
    ],
    "environment": [
      "mountain",
      "grassland",
      "forest",
      "hill",
      "coastal",
      "arctic"
    ]
  },
  {
    "name": "Blue Dragon Wyrmling",
    "size": "M",
    "type": "dragon",
    "alignment": "Lawful Evil",
    "ac": "17 natural armor",
    "hp": 52,
    "speed": "Walk 30, Burrow 15, Fly 60",
    "str": 17,
    "dex": 10,
    "con": 15,
    "int": 12,
    "wis": 11,
    "cha": 15,
    "save": "Dex +2, Con +4, Wis +2, Cha +4",
    "skill": "Perception +4, Stealth +2",
    "senses": "blindsight 10 ft., darkvision 60 ft.",
    "passive": 14,
    "immune": "lightning",
    "languages": "Draconic",
    "cr": "3",
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:8 (1d10 + 3) piercing damage plus 3 (1d6) lightning damage."
      },
      {
        "Name": "Lightning Breath (Recharge 5-6)",
        "Text": "The dragon exhales lightning in a 30-foot line that is 5 feet wide. Each creature in that line must make a 12 Dexterity saving throw, taking 22 (4d10) lightning damage on a failed save, or half as much damage on a successful one."
      }
    ]
  },
  {
    "name": "Blue Slaad",
    "size": "L",
    "type": "aberration",
    "alignment": "Chaotic Neutral",
    "ac": "15 natural armor",
    "hp": 123,
    "speed": "Walk 30",
    "str": 20,
    "dex": 15,
    "con": 18,
    "int": 7,
    "wis": 7,
    "cha": 9,
    "skill": "Perception +1",
    "senses": "darkvision 60 ft.",
    "passive": 11,
    "resist": [
      "acid",
      "cold",
      "fire",
      "lightning",
      "thunder"
    ],
    "languages": "Slaad, telepathy 60 ft.",
    "cr": "7",
    "trait": [
      {
        "Name": "Magic Resistance",
        "Text": "The slaad has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Regeneration",
        "Text": "The slaad regains 10 hit points at the start of its turn if it has at least 1 hit point."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The slaad makes three attacks: one with its bite and two with its claws."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 8 to hit, reach 5 ft., one target. Hit:12 (2d6 + 5) piercing damage."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 8 to hit, reach 5 ft., one target. Hit:12 (2d6 + 5) slashing damage. If the target is a humanoid, it must succeed on a 15 Constitution saving throw or be infected with a disease called chaos phage. While infected, the target can't regain hit points, and its hit point maximum is reduced by 10 (3d6) every 24 hours. If the disease reduces the target's hit point maximum to 0, the target instantly transforms into a red slaad or, if it has the ability to cast spells of 3rd level or higher, a green slaad. Only a wish spell can reverse the transformation."
      }
    ]
  },
  {
    "name": "Boar",
    "size": "M",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": "11 natural armor",
    "hp": 11,
    "speed": "Walk 40",
    "str": 13,
    "dex": 11,
    "con": 12,
    "int": 2,
    "wis": 9,
    "cha": 5,
    "passive": 9,
    "cr": "1/4",
    "trait": [
      {
        "Name": "Charge",
        "Text": "If the boar moves at least 20 feet straight toward a target and then hits it with a tusk attack on the same turn, the target takes an extra 3 (1d6) slashing damage. If the target is a creature, it must succeed on a 11 Strength saving throw or be knocked prone."
      },
      {
        "Name": "Relentless (Recharges after a Short or Long Rest)",
        "Text": "If the boar takes 7 damage or less that would reduce it to 0 hit points, it is reduced to 1 hit point instead."
      }
    ],
    "action": [
      {
        "Name": "Tusk",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one target. Hit:4 (1d6 + 1) slashing damage."
      }
    ],
    "environment": [
      "grassland",
      "forest",
      "hill"
    ]
  },
  {
    "name": "Bone Devil",
    "size": "L",
    "type": "fiend (devil)",
    "alignment": "Lawful Evil",
    "ac": "19 natural armor",
    "hp": 142,
    "speed": "Walk 40, Fly 40",
    "str": 18,
    "dex": 16,
    "con": 18,
    "int": 13,
    "wis": 14,
    "cha": 16,
    "save": "Int +5, Wis +6, Cha +7",
    "skill": "Deception +7, Insight +6",
    "senses": "darkvision 120 ft.",
    "passive": 12,
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
    "languages": "Infernal, telepathy 120 ft.",
    "cr": "9",
    "trait": [
      {
        "Name": "Devil's Sight",
        "Text": "Magical darkness doesn't impede the devil's darkvision."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The devil has advantage on saving throws against spells and other magical effects."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The devil makes three attacks: two with its claws and one with its sting."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 8 to hit, reach 10 ft., one target. Hit:8 (1d8 + 4) slashing damage."
      },
      {
        "Name": "Sting",
        "Text": "Melee Weapon 8 to hit, reach 10 ft., one target. Hit:13 (2d8 + 4) piercing damage plus 17 (5d6) poison damage, and the target must succeed on a 14 Constitution saving throw or become poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      }
    ]
  },
  {
    "name": "Bone Naga (Guardian)",
    "size": "L",
    "type": "undead",
    "alignment": "Lawful Evil",
    "ac": "15 natural armor",
    "hp": 58,
    "speed": "Walk 30",
    "str": 15,
    "dex": 16,
    "con": 12,
    "int": 15,
    "wis": 15,
    "cha": 16,
    "senses": "darkvision 60 ft.",
    "passive": 12,
    "immune": "poison",
    "conditionImmune": "charmed, exhaustion, paralyzed, poisoned",
    "languages": "Common plus one other language",
    "cr": "4",
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 5 to hit, reach 10 ft., one creature. Hit:10 (2d6 + 3) piercing damage plus 10 (3d6) poison damage."
      }
    ],
    "environment": [
      "underdark"
    ],
    "trait": [
      {
        "Name": "Spellcasting",
        "Text": "The naga is a 5th-level spellcaster (spell save DC 12, +4 to hit with spell attacks) that needs only verbal components to cast its spells. Its spellcasting ability is Wisdom, and it has the following cleric spells prepared:<br><br>Cantrips (at will): <em>mending, sacred flame, thaumaturgy</em><br>1st (1 slots): <em>command, shield of faith</em><br>2nd (2 slots): <em>calm emotions, hold person</em><br>3rd (3 slots): <em>bestow curse</em>"
      }
    ]
  },
  {
    "name": "Bone Naga (Spirit)",
    "size": "L",
    "type": "undead",
    "alignment": "Lawful Evil",
    "ac": "15 natural armor",
    "hp": 58,
    "speed": "Walk 30",
    "str": 15,
    "dex": 16,
    "con": 12,
    "int": 15,
    "wis": 15,
    "cha": 16,
    "senses": "darkvision 60 ft.",
    "passive": 12,
    "immune": "poison",
    "conditionImmune": "charmed, exhaustion, paralyzed, poisoned",
    "languages": "Common plus one other language",
    "cr": "4",
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 5 to hit, reach 10 ft., one creature. Hit:10 (2d6 + 3) piercing damage plus 10 (3d6) poison damage."
      }
    ],
    "environment": [
      "underdark"
    ],
    "trait": [
      {
        "Name": "Spellcasting",
        "Text": "The naga is a 5th-level spellcaster (spell save DC 12, +4 to hit with spell attacks) that needs only verbal components to cast its spells. Its spellcasting ability is Intelligence, and it has the following wizard spells prepared:<br><br>Cantrips (at will): <em>mage hand, minor illusion, ray of frost</em><br>1st (1 slots): <em>charm person, sleep</em><br>2nd (2 slots): <em>detect thoughts, hold person</em><br>3rd (3 slots): <em>lightning bolt</em>"
      }
    ]
  },
  {
    "name": "Brass Dragon Wyrmling",
    "size": "M",
    "type": "dragon",
    "alignment": "Chaotic Good",
    "ac": "16 natural armor",
    "hp": 16,
    "speed": "Walk 30, Burrow 15, Fly 60",
    "str": 15,
    "dex": 10,
    "con": 13,
    "int": 10,
    "wis": 11,
    "cha": 13,
    "save": "Dex +2, Con +3, Wis +2, Cha +3",
    "skill": "Perception +4, Stealth +2",
    "senses": "blindsight 10 ft., darkvision 60 ft.",
    "passive": 14,
    "immune": "fire",
    "languages": "Draconic",
    "cr": "1",
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:7 (1d10 + 2) piercing damage."
      },
      {
        "Name": "Breath Weapons (Recharge 5-6)",
        "Text": "The dragon uses one of the following breath weapons."
      }
    ]
  },
  {
    "name": "Bronze Dragon Wyrmling",
    "size": "M",
    "type": "dragon",
    "alignment": "Lawful Good",
    "ac": "17 natural armor",
    "hp": 32,
    "speed": "Walk 30, Fly 60, Swim 30",
    "str": 17,
    "dex": 10,
    "con": 15,
    "int": 12,
    "wis": 11,
    "cha": 15,
    "save": "Dex +2, Con +4, Wis +2, Cha +4",
    "skill": "Perception +4, Stealth +2",
    "senses": "blindsight 10 ft., darkvision 60 ft.",
    "passive": 14,
    "immune": "lightning",
    "languages": "Draconic",
    "cr": "2",
    "trait": [
      {
        "Name": "Amphibious",
        "Text": "The dragon can breathe air and water."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:8 (1d10 + 3) piercing damage."
      },
      {
        "Name": "Breath Weapons (Recharge 5-6)",
        "Text": "The dragon uses one of the following breath weapons."
      }
    ]
  },
  {
    "name": "Brown Bear",
    "size": "L",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": "11 natural armor",
    "hp": 34,
    "speed": "Walk 40, Climb 30",
    "str": 19,
    "dex": 10,
    "con": 16,
    "int": 2,
    "wis": 13,
    "cha": 7,
    "skill": "Perception +3",
    "passive": 13,
    "cr": "1",
    "trait": [
      {
        "Name": "Keen Smell",
        "Text": "The bear has advantage on Wisdom (Perception) checks that rely on smell."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The bear makes two attacks: one with its bite and one with its claws."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:8 (1d8 + 4) piercing damage."
      },
      {
        "Name": "Claws",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:11 (2d6 + 4) slashing damage."
      }
    ],
    "environment": [
      "forest",
      "hill",
      "arctic"
    ]
  },
  {
    "name": "Bugbear",
    "size": "M",
    "type": "humanoid (goblinoid)",
    "alignment": "Chaotic Evil",
    "ac": "16 hide armor",
    "hp": 27,
    "speed": "Walk 30",
    "str": 15,
    "dex": 14,
    "con": 13,
    "int": 8,
    "wis": 11,
    "cha": 9,
    "skill": "Stealth +6, Survival +2",
    "senses": "darkvision 60 ft.",
    "passive": 10,
    "languages": "Common, Goblin",
    "cr": "1",
    "trait": [
      {
        "Name": "Brute",
        "Text": "A melee weapon deals one extra die of its damage when the bugbear hits with it (included in the attack)."
      },
      {
        "Name": "Surprise Attack",
        "Text": "If the bugbear surprises a creature and hits it with an attack during the first round of combat, the target takes an extra 7 (2d6) damage from the attack."
      }
    ],
    "action": [
      {
        "Name": "Morningstar",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:11 (2d8 + 2) piercing damage."
      },
      {
        "Name": "Javelin",
        "Text": "Melee or Ranged Weapon 4 to hit, reach 5 ft. or range 30/120 ft., one target. Hit:9 (2d6 + 2) piercing damage in melee or 5 (1d6 + 2) piercing damage at range."
      }
    ],
    "environment": [
      "underdark",
      "grassland",
      "forest"
    ]
  },
  {
    "name": "Bugbear Chief",
    "size": "M",
    "type": "humanoid (goblinoid)",
    "alignment": "Chaotic Evil",
    "ac": "17 chain shirt",
    "hp": 65,
    "speed": "Walk 30",
    "str": 17,
    "dex": 14,
    "con": 14,
    "int": 11,
    "wis": 12,
    "cha": 11,
    "skill": "Intimidation +2, Stealth +6, Survival +3",
    "senses": "darkvision 60 ft.",
    "passive": 11,
    "languages": "Common, Goblin",
    "cr": "3",
    "trait": [
      {
        "Name": "Brute",
        "Text": "A melee weapon deals one extra die of its damage when the bugbear hits with it (included in the attack)."
      },
      {
        "Name": "Surprise Attack",
        "Text": "If the bugbear surprises a creature and hits it with an attack during the first round of combat, the target takes an extra 7 (2d6) damage from the attack."
      },
      {
        "Name": "Heart of Hruggek",
        "Text": "The bugbear has advantage on saving throws against being charmed, frightened, paralyzed, poisoned, stunned, or put to sleep."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The bugbear makes two melee attacks."
      },
      {
        "Name": "Morningstar",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:11 (2d8 + 3) piercing damage."
      },
      {
        "Name": "Javelin",
        "Text": "Melee or Ranged Weapon 5 to hit, reach 5 ft. or range 30/120 ft., one target. Hit:9 (2d6 + 3) piercing damage in melee or 5 (1d6 + 3) piercing damage at range."
      }
    ],
    "environment": [
      "underdark",
      "grassland",
      "forest"
    ]
  },
  {
    "name": "Bulette",
    "size": "L",
    "type": "monstrosity",
    "alignment": "Unaligned",
    "ac": "17 natural armor",
    "hp": 94,
    "speed": "Walk 40, Burrow 40",
    "str": 19,
    "dex": 11,
    "con": 21,
    "int": 2,
    "wis": 10,
    "cha": 5,
    "skill": "Perception +6",
    "senses": "darkvision 60 ft., tremorsense 60 ft.",
    "passive": 16,
    "cr": "5",
    "trait": [
      {
        "Name": "Standing Leap",
        "Text": "The bulette's long jump is up to 30 feet and its high jump is up to 15 feet, with or without a running start."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:30 (4d12 + 4) piercing damage."
      },
      {
        "Name": "Deadly Leap",
        "Text": "If the bulette jumps at least 15 feet as part of its movement, it can then use this action to land on its feet in a space that contains one or more other creatures. Each of those creatures must succeed on a 16 Strength or Dexterity saving throw (target's choice) or be knocked prone and take 14 (3d6 + 4) bludgeoning damage plus 14 (3d6 + 4) slashing damage. On a successful save, the creature takes only half the damage, isn't knocked prone, and is pushed 5 feet out of the bulette's space into an unoccupied space of the creature's choice. If no unoccupied space is within range, the creature instead falls prone in the bulette's space."
      }
    ],
    "environment": [
      "mountain",
      "grassland",
      "hill"
    ]
  },
  {
    "name": "Bullywug",
    "size": "M",
    "type": "humanoid (bullywug)",
    "alignment": "Neutral Evil",
    "ac": "15 hide armor",
    "hp": 11,
    "speed": "Walk 20, Swim 40",
    "str": 12,
    "dex": 12,
    "con": 13,
    "int": 7,
    "wis": 10,
    "cha": 7,
    "skill": "Stealth +3",
    "passive": 10,
    "languages": "Bullywug",
    "cr": "1/4",
    "trait": [
      {
        "Name": "Amphibious",
        "Text": "The bullywug can breathe air and water."
      },
      {
        "Name": "Speak with Frogs and Toads",
        "Text": "The bullywug can communicate simple concepts to frogs and toads when it speaks in Bullywug."
      },
      {
        "Name": "Swamp Camouflage",
        "Text": "The bullywug has advantage on Dexterity (Stealth) checks made to hide in swampy terrain."
      },
      {
        "Name": "Standing Leap",
        "Text": "The bullywug's long jump is up to 20 feet and its high jump is up to 10 feet, with or without a running start."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The bullywug makes two melee attacks: one with its bite and one with its spear."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one target. Hit:3 (1d4 + 1) bludgeoning damage."
      },
      {
        "Name": "Spear",
        "Text": "Melee or Ranged Weapon 3 to hit, reach 5 ft. or range 20/60 ft., one target. Hit:4 (1d6 + 1) piercing damage, or 5 (1d8 + 1) piercing damage if used with two hands to make a melee attack."
      }
    ],
    "environment": [
      "swamp"
    ],
    "altArt": [
      {
        "name": "Blacktongue Bullywug",
        "source": "WDMM"
      }
    ]
  },
  {
    "name": "Cambion",
    "size": "M",
    "type": "fiend",
    "alignment": "Lawful Any Non-Good Chaotic Evil",
    "ac": "19 scale mail",
    "hp": 82,
    "speed": "Walk 30, Fly 60",
    "str": 18,
    "dex": 18,
    "con": 16,
    "int": 14,
    "wis": 12,
    "cha": 16,
    "save": "Str +7, Con +6, Int +5, Cha +6",
    "skill": "Deception +6, Intimidation +6, Perception +4, Stealth +7",
    "senses": "darkvision 60 ft.",
    "passive": 14,
    "resist": [
      "cold",
      "fire",
      "lightning",
      "poison",
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
    "languages": "Abyssal, Common, Infernal",
    "cr": "5",
    "trait": [
      {
        "Name": "Fiendish Blessing",
        "Text": "The AC of the cambion includes its Charisma bonus."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day: <em>plane shift (self only)</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The cambion makes two melee attacks or uses its Fire Ray twice."
      },
      {
        "Name": "Spear",
        "Text": "Melee or Ranged Weapon 7 to hit, reach 5 ft. or range 20/60 ft., one target. Hit:7 (1d6 + 4) piercing damage, or 8 (1d8 + 4) piercing damage if used with two hands to make a melee attack, plus 3 (1d6) fire damage."
      },
      {
        "Name": "Fire Ray",
        "Text": "Ranged Spell 7 to hit, range 120 ft., one target. Hit:10 (3d6) fire damage."
      },
      {
        "Name": "Fiendish Charm",
        "Text": "One humanoid the cambion can see within 30 feet of it must succeed on a 14 Wisdom saving throw or be magically charmed for 1 day. The charmed target obeys the cambion's spoken commands. If the target suffers any harm from the cambion or another creature or receives a suicidal command from the cambion, the target can repeat the saving throw, ending the effect on itself on a success. If a target's saving throw is successful, or if the effect ends for it, the creature is immune to the cambion's Fiendish Charm for the next 24 hours."
      }
    ],
    "environment": [
      "urban"
    ],
    "altArt": [
      {
        "name": "Male Demonic Cambion",
        "source": "MTF",
        "page": 32
      },
      {
        "name": "Female Demonic Cambion",
        "source": "MTF",
        "page": 32
      }
    ]
  },
  {
    "name": "Camel",
    "size": "L",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": 9,
    "hp": 15,
    "speed": "Walk 50",
    "str": 16,
    "dex": 8,
    "con": 14,
    "int": 2,
    "wis": 8,
    "cha": 5,
    "passive": 9,
    "cr": "1/8",
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:2 (1d4) bludgeoning damage."
      }
    ],
    "environment": [
      "desert"
    ]
  },
  {
    "name": "Carrion Crawler",
    "size": "L",
    "type": "monstrosity",
    "alignment": "Unaligned",
    "ac": "13 natural armor",
    "hp": 51,
    "speed": "Walk 30, Climb 30",
    "str": 14,
    "dex": 13,
    "con": 16,
    "int": 1,
    "wis": 12,
    "cha": 5,
    "skill": "Perception +3",
    "senses": "darkvision 60 ft.",
    "passive": 13,
    "cr": "2",
    "trait": [
      {
        "Name": "Keen Smell",
        "Text": "The carrion crawler has advantage on Wisdom (Perception) checks that rely on smell."
      },
      {
        "Name": "Spider Climb",
        "Text": "The carrion crawler can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The carrion crawler makes two attacks: one with its tentacles and one with its bite."
      },
      {
        "Name": "Tentacles",
        "Text": "Melee Weapon 8 to hit, reach 10 ft., one creature. Hit:4 (1d4 + 2) poison damage, and the target must succeed on a 13 Constitution saving throw or be poisoned for 1 minute. Until this poison ends, the target is paralyzed. The target can repeat the saving throw at the end of each of its turns, ending the poison on itself on a success."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:7 (2d4 + 2) piercing damage."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Cat",
    "size": "T",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": 12,
    "hp": 2,
    "speed": "Walk 40, Climb 30",
    "str": 3,
    "dex": 15,
    "con": 10,
    "int": 3,
    "wis": 12,
    "cha": 7,
    "skill": "Perception +3, Stealth +4",
    "passive": 13,
    "cr": "0",
    "trait": [
      {
        "Name": "Keen Smell",
        "Text": "The cat has advantage on Wisdom (Perception) checks that rely on smell."
      }
    ],
    "action": [
      {
        "Name": "Claws",
        "Text": "Melee Weapon 0 to hit, reach 5 ft., one target. Hit:1 slashing damage."
      }
    ],
    "environment": [
      "grassland",
      "forest",
      "urban",
      "desert"
    ],
    "familiar": true
  },
  {
    "name": "Cave Bear",
    "size": "L",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": "12 natural armor",
    "hp": 42,
    "speed": "Walk 40, Swim 30",
    "str": 20,
    "dex": 10,
    "con": 16,
    "int": 2,
    "wis": 13,
    "cha": 7,
    "skill": "Perception +3",
    "senses": "darkvision 60 ft.",
    "passive": 13,
    "cr": "2",
    "trait": [
      {
        "Name": "Keen Smell",
        "Text": "The bear has advantage on Wisdom (Perception) checks that rely on smell."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The bear makes two attacks: one with its bite and one with its claws."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:9 (1d8 + 5) piercing damage."
      },
      {
        "Name": "Claws",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:12 (2d6 + 5) slashing damage."
      }
    ],
    "environment": [
      "forest"
    ]
  },
  {
    "name": "Centaur",
    "size": "L",
    "type": "monstrosity",
    "alignment": "Neutral Good",
    "ac": 12,
    "hp": 45,
    "speed": "Walk 50",
    "str": 18,
    "dex": 14,
    "con": 14,
    "int": 9,
    "wis": 13,
    "cha": 11,
    "skill": "Athletics +6, Perception +3, Survival +3",
    "passive": 13,
    "languages": "Elvish, Sylvan",
    "cr": "2",
    "trait": [
      {
        "Name": "Charge",
        "Text": "If the centaur moves at least 30 feet straight toward a target and then hits it with a pike attack on the same turn, the target takes an extra 10 (3d6) piercing damage."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The centaur makes two attacks: one with its pike and one with its hooves or two with its longbow."
      },
      {
        "Name": "Pike",
        "Text": "Melee Weapon 6 to hit, reach 10 ft., one target. Hit:9 (1d10 + 4) piercing damage."
      },
      {
        "Name": "Hooves",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:11 (2d6 + 4) bludgeoning damage."
      },
      {
        "Name": "Longbow",
        "Text": "Ranged Weapon 4 to hit, range 150/600 ft., one target. Hit:6 (1d8 + 2) piercing damage."
      }
    ],
    "environment": [
      "grassland",
      "forest"
    ]
  },
  {
    "name": "Chain Devil",
    "size": "M",
    "type": "fiend (devil)",
    "alignment": "Lawful Evil",
    "ac": "16 natural armor",
    "hp": 85,
    "speed": "Walk 30",
    "str": 18,
    "dex": 15,
    "con": 18,
    "int": 11,
    "wis": 12,
    "cha": 14,
    "save": "Con +7, Wis +4, Cha +5",
    "senses": "darkvision 120 ft.",
    "passive": 8,
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
    "languages": "Infernal, telepathy 120 ft.",
    "cr": "8",
    "trait": [
      {
        "Name": "Devil's Sight",
        "Text": "Magical darkness doesn't impede the devil's darkvision."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The devil has advantage on saving throws against spells and other magical effects."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The devil makes two attacks with its chains."
      },
      {
        "Name": "Chain",
        "Text": "Melee Weapon 8 to hit, reach 10 ft., one target. Hit:11 (2d6 + 4) slashing damage. The target is grappled (escape 14) if the devil isn't already grappling a creature. Until this grapple ends, the target is restrained and takes 7 (2d6) piercing damage at the start of each of its turns."
      },
      {
        "Name": "Animate Chains (Recharges after a Short or Long Rest)",
        "Text": "Up to four chains the devil can see within 60 feet of it magically sprout razor-edged barbs and animate under the devil's control, provided that the chains aren't being worn or carried."
      }
    ],
    "reaction": [
      {
        "Name": "Unnerving Mask",
        "Text": "When a creature the devil can see starts its turn within 30 feet of the devil, the devil can create the illusion that it looks like one of the creature's departed loved ones or bitter enemies. If the creature can see the devil, it must succeed on a 14 Wisdom saving throw or be frightened until the end of its turn."
      }
    ]
  },
  {
    "name": "Chasme",
    "size": "L",
    "type": "fiend (demon)",
    "alignment": "Chaotic Evil",
    "ac": "15 natural armor",
    "hp": 84,
    "speed": "Walk 20, Fly 60",
    "str": 15,
    "dex": 15,
    "con": 12,
    "int": 11,
    "wis": 14,
    "cha": 10,
    "save": "Dex +5, Wis +5",
    "skill": "Perception +5",
    "senses": "blindsight 10 ft., darkvision 120 ft.",
    "passive": 15,
    "resist": [
      "cold",
      "fire",
      "lightning"
    ],
    "immune": "poison",
    "conditionImmune": "poisoned",
    "languages": "Abyssal, telepathy 120 ft.",
    "cr": "6",
    "trait": [
      {
        "Name": "Drone",
        "Text": "The chasme produces a horrid droning sound to which demons are immune. Any other creature that starts its turn with in 30 feet of the chasme must succeed on a 12 Constitution saving throw or fall unconscious for 10 minutes. A creature that can't hear the drone automatically succeeds on the save. The effect on the creature ends if it takes damage or if another creature takes an action to splash it with holy water. If a creature's saving throw is successful or the effect ends for it, it is immune to the drone for the next 24 hours."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The chasme has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Spider Climb",
        "Text": "The chasme can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
      }
    ],
    "action": [
      {
        "Name": "Proboscis",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one creature. Hit:16 (4d6 + 2) piercing damage plus 24 (7d6) necrotic damage, and the target's hit point maximum is reduced by an amount equal to the necrotic damage taken. If this effect reduces a creature's hit point maximum to 0, the creature dies. This reduction to a creature's hit point maximum lasts until the creature finishes a long rest or until it is affected by a spell like greater restoration."
      }
    ]
  },
  {
    "name": "Chimera",
    "size": "L",
    "type": "monstrosity",
    "alignment": "Chaotic Evil",
    "ac": "14 natural armor",
    "hp": 114,
    "speed": "Walk 30, Fly 60",
    "str": 19,
    "dex": 11,
    "con": 19,
    "int": 3,
    "wis": 14,
    "cha": 10,
    "skill": "Perception +8",
    "senses": "darkvision 60 ft.",
    "passive": 18,
    "languages": "understands Draconic but can't speak",
    "cr": "6",
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The chimera makes three attacks: one with its bite, one with its horns, and one with its claws. When its fire breath is available, it can use the breath in place of its bite or horns."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:11 (2d6 + 4) piercing damage."
      },
      {
        "Name": "Horns",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:10 (1d12 + 4) bludgeoning damage."
      },
      {
        "Name": "Claws",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:11 (2d6 + 4) slashing damage."
      },
      {
        "Name": "Fire Breath (Recharge 5-6)",
        "Text": "The dragon head exhales fire in a 15-foot cone. Each creature in that area must make a 15 Dexterity saving throw, taking 31 (7d8) fire damage on a failed save, or half as much damage on a successful one."
      }
    ],
    "environment": [
      "underdark",
      "mountain",
      "grassland",
      "hill"
    ]
  },
  {
    "name": "Chuul",
    "size": "L",
    "type": "aberration",
    "alignment": "Chaotic Evil",
    "ac": "16 natural armor",
    "hp": 93,
    "speed": "Walk 30, Swim 30",
    "str": 19,
    "dex": 10,
    "con": 16,
    "int": 5,
    "wis": 11,
    "cha": 5,
    "skill": "Perception +4",
    "senses": "darkvision 60 ft.",
    "passive": 14,
    "immune": "poison",
    "conditionImmune": "poisoned",
    "languages": "understands Deep Speech but can't speak",
    "cr": "4",
    "trait": [
      {
        "Name": "Amphibious",
        "Text": "The chuul can breathe air and water."
      },
      {
        "Name": "Sense Magic",
        "Text": "The chuul senses magic within 120 feet of it at will. This trait otherwise works like the detect magic spell but isn't itself magical."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The chuul makes two pincer attacks. If the chuul is grappling a creature, the chuul can also use its tentacles once."
      },
      {
        "Name": "Pincer",
        "Text": "Melee Weapon 6 to hit, reach 10 ft., one target. Hit:11 (2d6 + 4) bludgeoning damage. The target is grappled (escape 14) if it is a Large or smaller creature and the chuul doesn't have two other creatures grappled."
      },
      {
        "Name": "Tentacles",
        "Text": "One creature grappled by the chuul must succeed on a 13 Constitution saving throw or be poisoned for 1 minute. Until this poison ends, the target is paralyzed. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Clay Golem",
    "size": "L",
    "type": "construct",
    "alignment": "Unaligned",
    "ac": "14 natural armor",
    "hp": 133,
    "speed": "Walk 20",
    "str": 20,
    "dex": 9,
    "con": 18,
    "int": 3,
    "wis": 8,
    "cha": 1,
    "senses": "darkvision 60 ft.",
    "passive": 9,
    "immune": "acid, poison, psychic, bludgeoning, piercing, slashing from nonmagical attacks that aren't adamantine",
    "conditionImmune": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned",
    "languages": "understands the languages of its creator but can't speak",
    "cr": "9",
    "trait": [
      {
        "Name": "Acid Absorption",
        "Text": "Whenever the golem is subjected to acid damage, it takes no damage and instead regains a number of hit points equal to the acid damage dealt."
      },
      {
        "Name": "Berserk",
        "Text": "Whenever the golem starts its turn with 60 hit points or fewer, roll a d6. On a 6, the golem goes berserk. On each of its turns while berserk, the golem attacks the nearest creature it can see. If no creature is near enough to move to and attack, the golem attacks an object, with preference for an object smaller than itself. Once the golem goes berserk, it continues to do so until it is destroyed or regains all its hit points."
      },
      {
        "Name": "Immutable Form",
        "Text": "The golem is immune to any spell or effect that would alter its form."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The golem has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Magic Weapons",
        "Text": "The golem's weapon attacks are magical."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The golem makes two slam attacks."
      },
      {
        "Name": "Slam",
        "Text": "Melee Weapon 8 to hit, reach 5 ft., one target. Hit:16 (2d10 + 5) bludgeoning damage. If the target is a creature, it must succeed on a 15 Constitution saving throw or have its hit point maximum reduced by an amount equal to the damage taken. The target dies if this attack reduces its hit point maximum to 0. The reduction lasts until removed by the greater restoration spell or other magic."
      },
      {
        "Name": "Haste (Recharge 5-6)",
        "Text": "Until the end of its next turn, the golem magically gains a +2 bonus to its AC, has advantage on Dexterity saving throws, and can use its slam attack as a bonus action."
      }
    ]
  },
  {
    "name": "Cloaker",
    "size": "L",
    "type": "aberration",
    "alignment": "Chaotic Neutral",
    "ac": "14 natural armor",
    "hp": 78,
    "speed": "Walk 10, Fly 40",
    "str": 17,
    "dex": 15,
    "con": 12,
    "int": 13,
    "wis": 12,
    "cha": 14,
    "skill": "Stealth +5",
    "senses": "darkvision 60 ft.",
    "passive": 11,
    "languages": "Deep Speech, Undercommon",
    "cr": "8",
    "trait": [
      {
        "Name": "Damage Transfer",
        "Text": "While attached to a creature, the cloaker takes only half the damage dealt to it (rounded down). and that creature takes the other half."
      },
      {
        "Name": "False Appearance",
        "Text": "While the cloaker remains motionless without its underside exposed, it is indistinguishable from a dark leather cloak."
      },
      {
        "Name": "Light Sensitivity",
        "Text": "While in bright light, the cloaker has disadvantage on attack rolls and Wisdom (Perception) checks that rely on sight."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The cloaker makes two attacks: one with its bite and one with its tail."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one creature. Hit:10 (2d6 + 3) piercing damage, and if the target is Large or smaller, the cloaker attaches to it. If the cloaker has advantage against the target, the cloaker attaches to the target's head, and the target is blinded and unable to breathe while the cloaker is attached. While attached, the cloaker can make this attack only against the target and has advantage on the attack roll. The cloaker can detach itself by spending 5 feet of its movement. A creature, including the target, can take its action to detach the cloaker by succeeding on a 16 Strength check."
      },
      {
        "Name": "Tail",
        "Text": "Melee Weapon 6 to hit, reach 10 ft., one creature. Hit:7 (1d8 + 3) slashing damage."
      },
      {
        "Name": "Moan",
        "Text": "Each creature within 60 feet of the cloaker that can hear its moan and that isn't an aberration must succeed on a 13 Wisdom saving throw or become frightened until the end of the cloaker's next turn. If a creature's saving throw is successful, the creature is immune to the cloaker's moan for the next 24 hours."
      },
      {
        "Name": "Phantasms (Recharges after a Short or Long Rest)",
        "Text": "The cloaker magically creates three illusory duplicates of itself if it isn't in bright light. The duplicates move with it and mimic its actions, shifting position so as to make it impossible to track which cloaker is the real one. If the cloaker is ever in an area of bright light, the duplicates disappear."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Cloud Giant",
    "size": "H",
    "type": "giant",
    "alignment": "50%,N,G 50%,N,E",
    "ac": "14 natural armor",
    "hp": 200,
    "speed": "Walk 40",
    "str": 27,
    "dex": 10,
    "con": 22,
    "int": 12,
    "wis": 16,
    "cha": 16,
    "save": "Con +10, Wis +7, Cha +7",
    "skill": "Insight +7, Perception +7",
    "passive": 17,
    "languages": "Common, Giant",
    "cr": "9",
    "trait": [
      {
        "Name": "Keen Smell",
        "Text": "The giant has advantage on Wisdom (Perception) checks that rely on smell."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day each: <em>control weather, gaseous form</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The giant makes two morningstar attacks."
      },
      {
        "Name": "Morningstar",
        "Text": "Melee Weapon 12 to hit, reach 10 ft., one target. Hit:21 (3d8 + 8) piercing damage."
      },
      {
        "Name": "Rock",
        "Text": "Ranged Weapon 12 to hit, range 60/240 ft., one target. Hit:30 (4d10 + 8) bludgeoning damage."
      }
    ],
    "environment": [
      "mountain"
    ]
  },
  {
    "name": "Cockatrice",
    "size": "S",
    "type": "monstrosity",
    "alignment": "Unaligned",
    "ac": 11,
    "hp": 27,
    "speed": "Walk 20, Fly 40",
    "str": 6,
    "dex": 12,
    "con": 12,
    "int": 2,
    "wis": 13,
    "cha": 5,
    "senses": "darkvision 60 ft.",
    "passive": 11,
    "cr": "1/2",
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one creature. Hit:3 (1d4 + 1) piercing damage, and the target must succeed on a 11 Constitution saving throw against being magically petrified. On a failed save, the creature begins to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure, the creature is petrified for 24 hours."
      }
    ],
    "environment": [
      "grassland"
    ]
  },
  {
    "name": "Commoner",
    "size": "M",
    "type": "humanoid (any race)",
    "alignment": "Any",
    "ac": 10,
    "hp": 4,
    "speed": "Walk 30",
    "str": 10,
    "dex": 10,
    "con": 10,
    "int": 10,
    "wis": 10,
    "cha": 10,
    "passive": 10,
    "languages": "any one language (usually Common)",
    "cr": "0",
    "action": [
      {
        "Name": "Club",
        "Text": "Melee Weapon 2 to hit, reach 5 ft., one target. Hit:2 (1d4) bludgeoning damage."
      }
    ],
    "environment": [
      "arctic",
      "desert",
      "coastal",
      "grassland",
      "hill",
      "urban",
      "forest"
    ],
    "altArt": [
      {
        "name": "Commoner",
        "source": "EGW"
      }
    ]
  },
  {
    "name": "Constrictor Snake",
    "size": "L",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": 12,
    "hp": 13,
    "speed": "Walk 30, Swim 30",
    "str": 15,
    "dex": 14,
    "con": 12,
    "int": 1,
    "wis": 10,
    "cha": 3,
    "senses": "blindsight 10 ft.",
    "passive": 10,
    "cr": "1/4",
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one creature. Hit:5 (1d6 + 2) piercing damage."
      },
      {
        "Name": "Constrict",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one creature. Hit:6 (1d8 + 2) bludgeoning damage, and the target is grappled (escape 14). Until this grapple ends, the creature is restrained, and the snake can't constrict another target."
      }
    ],
    "environment": [
      "underwater",
      "forest",
      "swamp",
      "desert"
    ]
  },
  {
    "name": "Copper Dragon Wyrmling",
    "size": "M",
    "type": "dragon",
    "alignment": "Chaotic Good",
    "ac": "16 natural armor",
    "hp": 22,
    "speed": "Walk 30, Climb 30, Fly 60",
    "str": 15,
    "dex": 12,
    "con": 13,
    "int": 14,
    "wis": 11,
    "cha": 13,
    "save": "Dex +3, Con +3, Wis +2, Cha +3",
    "skill": "Perception +4, Stealth +3",
    "senses": "blindsight 10 ft., darkvision 60 ft.",
    "passive": 14,
    "immune": "acid",
    "languages": "Draconic",
    "cr": "1",
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:7 (1d10 + 2) piercing damage."
      },
      {
        "Name": "Breath Weapons (Recharge 5-6)",
        "Text": "The dragon uses one of the following breath weapons."
      }
    ]
  },
  {
    "name": "Couatl",
    "size": "M",
    "type": "celestial",
    "alignment": "Lawful Good",
    "ac": "19 natural armor",
    "hp": 97,
    "speed": "Walk 30, Fly 90",
    "str": 16,
    "dex": 20,
    "con": 17,
    "int": 18,
    "wis": 20,
    "cha": 18,
    "save": "Con +5, Wis +7, Cha +6",
    "senses": "truesight 120 ft.",
    "passive": 15,
    "resist": [
      "radiant"
    ],
    "immune": "psychic, bludgeoning, piercing, slashing from nonmagical attacks",
    "languages": "all, telepathy 120 ft.",
    "cr": "4",
    "trait": [
      {
        "Name": "Magic Weapons",
        "Text": "The couatl's weapon attacks are magical."
      },
      {
        "Name": "Shielded Mind",
        "Text": "The couatl is immune to scrying and to any effect that would sense its emotions, read its thoughts, or detect its location."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day each: <em>dream, greater restoration, scrying</em>"
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 8 to hit, reach 5 ft., one creature. Hit:8 (1d6 + 5) piercing damage, and the target must succeed on a 13 Constitution saving throw or be poisoned for 24 hours. Until this poison ends, the target is unconscious. Another creature can use an action to shake the target awake."
      },
      {
        "Name": "Constrict",
        "Text": "Melee Weapon 6 to hit, reach 10 ft., one Medium or smaller creature. Hit:10 (2d6 + 3) bludgeoning damage, and the target is grappled (escape 15). Until this grapple ends, the target is restrained, and the couatl can't constrict another target."
      },
      {
        "Name": "Change Shape",
        "Text": "The couatl magically polymorphs into a humanoid or beast that has a challenge rating equal to or less than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the couatl's choice)."
      }
    ],
    "environment": [
      "grassland",
      "forest",
      "urban",
      "desert"
    ]
  },
  {
    "name": "Crab",
    "size": "T",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": "11 natural armor",
    "hp": 2,
    "speed": "Walk 20, Swim 20",
    "str": 2,
    "dex": 11,
    "con": 10,
    "int": 1,
    "wis": 8,
    "cha": 2,
    "skill": "Stealth +2",
    "senses": "blindsight 30 ft.",
    "passive": 9,
    "cr": "0",
    "trait": [
      {
        "Name": "Amphibious",
        "Text": "The crab can breathe air and water."
      }
    ],
    "action": [
      {
        "Name": "Claw",
        "Text": "Melee Weapon 0 to hit, reach 5 ft., one target. Hit:1 bludgeoning damage."
      }
    ],
    "environment": [
      "coastal"
    ],
    "familiar": true
  },
  {
    "name": "Crawling Claw",
    "size": "T",
    "type": "undead",
    "alignment": "Neutral Evil",
    "ac": 12,
    "hp": 2,
    "speed": "Walk 20, Climb 20",
    "str": 13,
    "dex": 14,
    "con": 11,
    "int": 5,
    "wis": 10,
    "cha": 4,
    "senses": "blindsight 30 ft. (blind beyond this radius)",
    "passive": 10,
    "immune": "poison",
    "conditionImmune": "charmed, exhaustion, poisoned",
    "languages": "understands Common but can't speak",
    "cr": "0",
    "trait": [
      {
        "Name": "Turn Immunity",
        "Text": "The claw is immune to effects that turn undead."
      }
    ],
    "action": [
      {
        "Name": "Claw",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one target. Hit:3 (1d4 + 1) bludgeoning or slashing damage (claw's choice)."
      }
    ]
  },
  {
    "name": "Crocodile",
    "size": "L",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": "12 natural armor",
    "hp": 19,
    "speed": "Walk 20, Swim 30",
    "str": 15,
    "dex": 10,
    "con": 13,
    "int": 2,
    "wis": 10,
    "cha": 5,
    "skill": "Stealth +2",
    "passive": 10,
    "cr": "1/2",
    "trait": [
      {
        "Name": "Hold Breath",
        "Text": "The crocodile can hold its breath for 15 minutes."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one creature. Hit:7 (1d10 + 2) piercing damage, and the target is grappled (escape 12). Until this grapple ends, the target is restrained, and the crocodile can't bite another target"
      }
    ],
    "environment": [
      "swamp",
      "urban"
    ]
  },
  {
    "name": "Cult Fanatic",
    "size": "M",
    "type": "humanoid (any race)",
    "alignment": "Lawful Any Non-Good Chaotic Any Non-Lawful Evil",
    "ac": "13 leather armor",
    "hp": 33,
    "speed": "Walk 30",
    "str": 11,
    "dex": 14,
    "con": 12,
    "int": 10,
    "wis": 13,
    "cha": 14,
    "skill": "Deception +4, Persuasion +4, Religion +2",
    "passive": 11,
    "languages": "any one language (usually Common)",
    "cr": "2",
    "trait": [
      {
        "Name": "Dark Devotion",
        "Text": "The fanatic has advantage on saving throws against being charmed or frightened."
      },
      {
        "Name": "Spellcasting",
        "Text": "The fanatic is a 4th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 11, +3 to hit with spell attacks). The fanatic has the following cleric spells prepared:<br><br>Cantrips (at will): <em>light, sacred flame, thaumaturgy</em><br>1st (1 slots): <em>command, inflict wounds, shield of faith</em><br>2nd (2 slots): <em>hold person, spiritual weapon</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The fanatic makes two melee attacks."
      },
      {
        "Name": "Dagger",
        "Text": "Melee or Ranged Weapon 4 to hit, reach 5 ft. or range 20/60 ft., one creature. Hit:4 (1d4 + 2) piercing damage."
      }
    ],
    "altArt": [
      {
        "name": "Diabolical Cult Fanatic",
        "source": "MTF",
        "page": 18
      }
    ]
  },
  {
    "name": "Cultist",
    "size": "M",
    "type": "humanoid (any race)",
    "alignment": "Lawful Any Non-Good Chaotic Any Non-Lawful Evil",
    "ac": "12 leather armor",
    "hp": 9,
    "speed": "Walk 30",
    "str": 11,
    "dex": 12,
    "con": 10,
    "int": 10,
    "wis": 11,
    "cha": 10,
    "skill": "Deception +2, Religion +2",
    "passive": 10,
    "languages": "any one language (usually Common)",
    "cr": "1/8",
    "trait": [
      {
        "Name": "Dark Devotion",
        "Text": "The cultist has advantage on saving throws against being charmed or frightened."
      }
    ],
    "action": [
      {
        "Name": "Scimitar",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one creature. Hit:4 (1d6 + 1) slashing damage."
      }
    ],
    "altArt": [
      {
        "name": "Diabolical Cultist",
        "source": "MTF",
        "page": 18
      },
      {
        "name": "Cultist",
        "source": "RMBRE"
      }
    ]
  },
  {
    "name": "Cyclops",
    "size": "H",
    "type": "giant",
    "alignment": "Chaotic Neutral",
    "ac": "14 natural armor",
    "hp": 138,
    "speed": "Walk 30",
    "str": 22,
    "dex": 11,
    "con": 20,
    "int": 8,
    "wis": 6,
    "cha": 10,
    "passive": 8,
    "languages": "Giant",
    "cr": "6",
    "trait": [
      {
        "Name": "Poor Depth Perception",
        "Text": "The cyclops has disadvantage on any attack roll against a target more than 30 feet away."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The cyclops makes two greatclub attacks."
      },
      {
        "Name": "Greatclub",
        "Text": "Melee Weapon 9 to hit, reach 10 ft., one target. Hit:19 (3d8 + 6) bludgeoning damage."
      },
      {
        "Name": "Rock",
        "Text": "Ranged Weapon 9 to hit, range 30/120 ft., one target. Hit:28 (4d10 + 6) bludgeoning damage."
      }
    ],
    "environment": [
      "underdark",
      "mountain",
      "grassland",
      "hill",
      "desert",
      "coastal"
    ]
  },
  {
    "name": "Dao",
    "size": "L",
    "type": "elemental",
    "alignment": "Neutral Evil",
    "ac": "18 natural armor",
    "hp": 187,
    "speed": "Walk 30, Burrow 30, Fly 30",
    "str": 23,
    "dex": 12,
    "con": 24,
    "int": 12,
    "wis": 13,
    "cha": 14,
    "save": "Int +5, Wis +5, Cha +6",
    "senses": "darkvision 120 ft.",
    "passive": 11,
    "conditionImmune": "petrified",
    "languages": "Terran",
    "cr": "11",
    "trait": [
      {
        "Name": "Earth Glide",
        "Text": "The dao can burrow through nonmagical, unworked earth and stone. While doing so, the dao doesn't disturb the material it moves through."
      },
      {
        "Name": "Elemental Demise",
        "Text": "If the dao dies, its body disintegrates into crystalline powder, leaving behind only equipment the dao was wearing or carrying."
      },
      {
        "Name": "Sure-Footed",
        "Text": "The dao has advantage on Strength and Dexterity saving throws made against effects that would knock it prone."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day each: <em>conjure elemental (earth elemental only), gaseous form, invisibility, phantasmal killer, plane shift, wall of stone</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The Dao makes two fist attacks or two maul attacks."
      },
      {
        "Name": "Fist",
        "Text": "Melee Weapon 10 to hit, reach 5 ft., one target. Hit:15 (2d8 + 6) bludgeoning damage."
      },
      {
        "Name": "Maul",
        "Text": "Melee Weapon 10 to hit, reach 5 ft., one target. Hit:20 (4d6 + 6) bludgeoning damage. If the target is a Huge or smaller creature, it must succeed on a 18 Strength check or be knocked prone."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Darkmantle",
    "size": "S",
    "type": "monstrosity",
    "alignment": "Unaligned",
    "ac": 11,
    "hp": 22,
    "speed": "Walk 10, Fly 30",
    "str": 16,
    "dex": 12,
    "con": 13,
    "int": 2,
    "wis": 10,
    "cha": 5,
    "skill": "Stealth +3",
    "senses": "blindsight 60 ft.",
    "passive": 10,
    "cr": "1/2",
    "trait": [
      {
        "Name": "Echolocation",
        "Text": "The darkmantle can't use its blindsight while deafened."
      },
      {
        "Name": "False Appearance",
        "Text": "While the darkmantle remains motionless, it is indistinguishable from a cave formation such as a stalactite or stalagmite."
      }
    ],
    "action": [
      {
        "Name": "Crush",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one creature. Hit:6 (1d6 + 3) bludgeoning damage, and the darkmantle attaches to the target. If the target is Medium or smaller and the darkmantle has advantage on the attack roll, it attaches by engulfing the target's head, and the target is also blinded and unable to breathe while the darkmantle is attached in this way.<br>While attached to the target, the darkmantle can attack no other creature except the target but has advantage on its attack rolls. The darkmantle's speed also becomes 0, it can't benefit from any bonus to its speed, and it moves with the target.<br>A creature can detach the darkmantle by making a successful 13 Strength check as an action. On its turn, the darkmantle can detach itself from the target by using 5 feet of movement."
      },
      {
        "Name": "Darkness Aura (1/Day)",
        "Text": "A 15-foot radius of magical darkness extends out from the darkmantle, moves with it, and spreads around corners. The darkness lasts as long as the darkmantle maintains concentration, up to 10 minutes (as if concentrating on a spell). Darkvision can't penetrate this darkness, and no natural light can illuminate it. If any of the darkness overlaps with an area of light created by a spell of 2nd level or lower, the spell creating the light is dispelled."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Death Dog",
    "size": "M",
    "type": "monstrosity",
    "alignment": "Neutral Evil",
    "ac": 12,
    "hp": 39,
    "speed": "Walk 40",
    "str": 15,
    "dex": 14,
    "con": 14,
    "int": 3,
    "wis": 13,
    "cha": 6,
    "skill": "Perception +5, Stealth +4",
    "senses": "darkvision 120 ft.",
    "passive": 15,
    "cr": "1",
    "trait": [
      {
        "Name": "Two-Headed",
        "Text": "The dog has advantage on Wisdom (Perception) checks and on saving throws against being blinded, charmed, deafened, frightened, stunned, or knocked unconscious."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The dog makes two bite attacks."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:5 (1d6 + 2) piercing damage. If the target is a creature, it must succeed on a 12 Constitution saving throw against disease or become poisoned until the disease is cured. Every 24 hours that elapse, the creature must repeat the saving throw, reducing its hit point maximum by 5 (1d10) on a failure. This reduction lasts until the disease is cured. The creature dies if the disease reduces its hit point maximum to 0."
      }
    ],
    "environment": [
      "desert"
    ]
  },
  {
    "name": "Death Knight",
    "size": "M",
    "type": "undead",
    "alignment": "Chaotic Evil",
    "ac": "20 plate armor",
    "hp": 180,
    "speed": "Walk 30",
    "str": 20,
    "dex": 11,
    "con": 20,
    "int": 12,
    "wis": 16,
    "cha": 18,
    "save": "Dex +6, Wis +9, Cha +10",
    "senses": "darkvision 120 ft.",
    "passive": 13,
    "immune": "necrotic, poison",
    "conditionImmune": "exhaustion, frightened, poisoned",
    "languages": "Abyssal, Common",
    "cr": "17",
    "trait": [
      {
        "Name": "Magic Resistance",
        "Text": "The death knight has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Marshal Undead",
        "Text": "Unless the death knight is incapacitated, it and undead creatures of its choice within 60 feet of it have advantage on saving throws against features that turn undead."
      },
      {
        "Name": "Spellcasting",
        "Text": "The death knight is a 19th-level spellcaster. Its spellcasting ability is Charisma (spell save DC 18, +10 to hit with spell attacks). It has the following paladin spells prepared:<br><br>1st (1 slots): <em>command, compelled duel, searing smite</em><br>2nd (2 slots): <em>hold person, magic weapon</em><br>3rd (3 slots): <em>dispel magic, elemental weapon</em><br>4th (4 slots): <em>banishment, staggering smite</em><br>5th (5 slots): <em>destructive wave (necrotic)</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The death knight makes three longsword attacks."
      },
      {
        "Name": "Longsword",
        "Text": "Melee Weapon 11 to hit, reach 5 ft., one target. Hit:9 (1d8 + 5) slashing damage, or 10 (1d10 + 5) slashing damage if used with two hands, plus 18 (4d8) necrotic damage."
      },
      {
        "Name": "Hellfire Orb (1/Day)",
        "Text": "The death knight hurls a magical ball of fire that explodes at a point it can see within 120 feet of it. Each creature in a 20-foot-radius sphere centered on that point must make a 18 Dexterity saving throw. The sphere spreads around corners. A creature takes 35 (10d6) fire damage and 35 (10d6) necrotic damage on a failed save, or half as much damage on a successful one."
      }
    ],
    "reaction": [
      {
        "Name": "Parry",
        "Text": "The death knight adds 6 to its AC against one melee attack that would hit it. To do so, the death knight must see the attacker and be wielding a melee weapon."
      }
    ]
  },
  {
    "name": "Death Slaad",
    "size": "M",
    "type": "aberration (shapechanger)",
    "alignment": "Chaotic Evil",
    "ac": "18 natural armor",
    "hp": 170,
    "speed": "Walk 30",
    "str": 20,
    "dex": 15,
    "con": 19,
    "int": 15,
    "wis": 10,
    "cha": 16,
    "skill": "Arcana +6, Perception +8",
    "senses": "blindsight 60 ft., darkvision 60 ft.",
    "passive": 18,
    "resist": [
      "acid",
      "cold",
      "fire",
      "lightning",
      "thunder"
    ],
    "languages": "Slaad, telepathy 60 ft.",
    "cr": "10",
    "trait": [
      {
        "Name": "Shapechanger",
        "Text": "The slaad can use its action to polymorph into a Small or Medium humanoid, or back into its true form. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The slaad has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Magic Weapons",
        "Text": "The slaad's weapon attacks are magical."
      },
      {
        "Name": "Regeneration",
        "Text": "The slaad regains 10 hit points at the start of its turn if it has at least 1 hit point."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day each: <em>cloudkill, plane shift</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The slaad makes three attacks: one with its bite and two with its claws or greatsword."
      },
      {
        "Name": "Bite (Slaad Form Only)",
        "Text": "Melee Weapon 9 to hit, reach 5 ft., one target. Hit:9 (1d8 + 5) piercing damage plus 7 (2d6) necrotic damage."
      },
      {
        "Name": "Claws (Slaad Form Only)",
        "Text": "Melee Weapon 9 to hit, reach 5 ft., one target. Hit:10 (1d10 + 5) slashing damage plus 7 (2d6) necrotic damage."
      },
      {
        "Name": "Greatsword",
        "Text": "Melee Weapon 9 to hit, reach 5 ft., one target. Hit:12 (2d6 + 5) slashing damage plus 7 (2d6) necrotic damage."
      }
    ]
  },
  {
    "name": "Death Tyrant",
    "size": "L",
    "type": "undead",
    "alignment": "Lawful Evil",
    "ac": "19 natural armor",
    "hp": 187,
    "speed": "Walk 0, Fly 20 (hover)",
    "str": 10,
    "dex": 14,
    "con": 14,
    "int": 19,
    "wis": 15,
    "cha": 19,
    "save": "Str +5, Con +7, Int +9, Wis +7, Cha +9",
    "skill": "Perception +12",
    "senses": "darkvision 120 ft.",
    "passive": 22,
    "immune": "poison",
    "conditionImmune": "charmed, exhaustion, paralyzed, petrified, poisoned, prone",
    "languages": "Deep Speech, Undercommon",
    "cr": {
      "cr": "14",
      "lair": "15"
    },
    "trait": [
      {
        "Name": "Negative Energy Cone",
        "Text": "The death tyrant's central eye emits an invisible, magical 150-foot cone of negative energy. At the start of each of its turns, the tyrant decides which way the cone faces and whether the cone is active.<br>Any creature in that area can't regain hit points. Any humanoid that dies there becomes a zombie under the tyrant's command. The dead humanoid retains its place in the initiative order and animates at the start of its next turn, provided that its body hasn't been completely destroyed."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:14 (4d6) piercing damage."
      },
      {
        "Name": "Eye Rays",
        "Text": "The death tyrant shoots three of the following magical eye rays at random (reroll duplicates), choosing one to three targets it can see within 120 feet of it:"
      }
    ],
    "legendary": [
      {
        "Name": "Eye Ray",
        "Text": "The death tyrant uses one random eye ray."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Deep Gnome (Svirfneblin)",
    "size": "S",
    "type": "humanoid (gnome)",
    "alignment": "Neutral Good",
    "ac": "15 chain shirt",
    "hp": 16,
    "speed": "Walk 20",
    "str": 15,
    "dex": 14,
    "con": 14,
    "int": 12,
    "wis": 10,
    "cha": 9,
    "skill": "Investigation +3, Perception +2, Stealth +4",
    "senses": "darkvision 120 ft.",
    "passive": 12,
    "languages": "Gnomish, Terran, Undercommon",
    "cr": "1/2",
    "trait": [
      {
        "Name": "Stone Camouflage",
        "Text": "The gnome has advantage on Dexterity (Stealth) checks made to hide in rocky terrain."
      },
      {
        "Name": "Gnome Cunning",
        "Text": "The gnome has advantage on Intelligence, Wisdom, and Charisma saving throws against magic."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day each: <em>blindness/deafness, blur, disguise self</em>"
      }
    ],
    "action": [
      {
        "Name": "War Pick",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:6 (1d8 + 2) piercing damage."
      },
      {
        "Name": "Poisoned Dart",
        "Text": "Ranged Weapon 4 to hit, range 30/120 ft., one creature. Hit:4 (1d4 + 2) piercing damage, and the target must succeed on a 12 Constitution saving throw or be poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success"
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Deer",
    "size": "M",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": 13,
    "hp": 4,
    "speed": "Walk 50",
    "str": 11,
    "dex": 16,
    "con": 11,
    "int": 2,
    "wis": 14,
    "cha": 5,
    "passive": 12,
    "cr": "0",
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 2 to hit, reach 5 ft., one target. Hit:2 (1d4) piercing damage."
      }
    ],
    "environment": [
      "grassland",
      "forest"
    ]
  },
  {
    "name": "Demilich",
    "size": "T",
    "type": "undead",
    "alignment": "Neutral Evil",
    "ac": "20 natural armor",
    "hp": 80,
    "speed": "Walk 0, Fly 30 (hover)",
    "str": 1,
    "dex": 20,
    "con": 10,
    "int": 20,
    "wis": 17,
    "cha": 20,
    "save": "Con +6, Int +11, Wis +9, Cha +11",
    "senses": "truesight 120 ft.",
    "passive": 13,
    "resist": [
      {
        "resist": [
          "bludgeoning",
          "piercing",
          "slashing"
        ],
        "note": "from magic weapons",
        "cond": true
      }
    ],
    "immune": "necrotic, poison, psychic, bludgeoning, piercing, slashing from nonmagical attacks",
    "conditionImmune": "charmed, deafened, exhaustion, frightened, paralyzed, petrified, poisoned, prone, stunned",
    "cr": {
      "cr": "18",
      "lair": "20"
    },
    "trait": [
      {
        "Name": "Avoidance",
        "Text": "If the demilich is subjected to an effect that allows it to make a saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails."
      },
      {
        "Name": "Legendary Resistance (3/Day)",
        "Text": "If the demilich fails a saving throw, it can choose to succeed instead."
      },
      {
        "Name": "Turn Immunity",
        "Text": "The demilich is immune to effects that turn undead."
      }
    ],
    "action": [
      {
        "Name": "Howl (Recharge 5-6)",
        "Text": "The demilich emits a bloodcurdling howl. Each creature within 30 feet of the demilich that can hear the howl must succeed on a 15 Constitution saving throw or drop to 0 hit points. On a successful save, the creature is frightened until the end of its next turn."
      },
      {
        "Name": "Life Drain",
        "Text": "The demilich targets up to three creatures that it can see within 10 feet of it. Each target must succeed on a 19 Constitution saving throw or take 21 (6d6) necrotic damage, and the demilich regains hit points equal to the total damage dealt to all targets."
      }
    ],
    "legendary": [
      {
        "Name": "Flight",
        "Text": "The demilich flies up to half its flying speed."
      },
      {
        "Name": "Cloud of Dust",
        "Text": "The demilich magically swirls its dusty remains. Each creature within 10 feet of the demilich, including around a corner, must succeed on a 15 Constitution saving throw or be blinded until the end of the demilich's next turn. A creature that succeeds on the saving throw is immune to this effect until the end of the demilich's next turn."
      },
      {
        "Name": "Energy Drain (Costs 2 Actions)",
        "Text": "Each creature with in 30 feet of the demilich must make a 15 Constitution saving throw. On a failed save, the creature's hit point maximum is magically reduced by 10 (3d6). If a creature's hit point maximum is reduced to 0 by this effect, the creature dies. A creature's hit point maximum can be restored with the greater restoration spell or similar magic."
      },
      {
        "Name": "Vile Curse (Costs 3 Actions)",
        "Text": "The demilich targets one creature it can see within 30 feet of it. The target must succeed on a 15 Wisdom saving throw or be magically cursed. Until the curse ends, the target has disadvantage on attack rolls and saving throws. The target can repeat the saving throw at the end of each of its turns, ending the curse on a success."
      }
    ]
  },
  {
    "name": "Deva",
    "size": "M",
    "type": "celestial",
    "alignment": "Lawful Good",
    "ac": "17 natural armor",
    "hp": 136,
    "speed": "Walk 30, Fly 90",
    "str": 18,
    "dex": 18,
    "con": 18,
    "int": 17,
    "wis": 20,
    "cha": 20,
    "save": "Wis +9, Cha +9",
    "skill": "Insight +9, Perception +9",
    "senses": "darkvision 120 ft.",
    "passive": 19,
    "resist": [
      "radiant",
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
    "conditionImmune": "charmed, exhaustion, frightened",
    "languages": "all, telepathy 120 ft.",
    "cr": "10",
    "trait": [
      {
        "Name": "Angelic Weapons",
        "Text": "The deva's weapon attacks are magical. When the deva hits with any weapon, the weapon deals an extra 4d8 radiant damage (included in the attack)."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The deva has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day each: <em>commune, raise dead</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The deva makes two melee attacks."
      },
      {
        "Name": "Mace",
        "Text": "Melee Weapon 8 to hit, reach 5 ft., one target. Hit:7 (1d6 + 4) bludgeoning damage plus 18 (4d8) radiant damage."
      },
      {
        "Name": "Healing Touch (3/Day)",
        "Text": "The deva touches another creature. The target magically regains 20 (4d8 + 2) hit points and is freed from any curse, disease, poison, blindness, or deafness."
      },
      {
        "Name": "Change Shape",
        "Text": "The deva magically polymorphs into a humanoid or beast that has a challenge rating equal to or less than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the deva's choice)."
      }
    ]
  },
  {
    "name": "Dire Wolf",
    "size": "L",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": "14 natural armor",
    "hp": 37,
    "speed": "Walk 50",
    "str": 17,
    "dex": 15,
    "con": 15,
    "int": 3,
    "wis": 12,
    "cha": 7,
    "skill": "Perception +3, Stealth +4",
    "passive": 13,
    "cr": "1",
    "trait": [
      {
        "Name": "Keen Hearing and Smell",
        "Text": "The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell."
      },
      {
        "Name": "Pack Tactics",
        "Text": "The wolf has advantage on an attack roll against a creature if at least one of the wolf's allies is within 5 feet of the creature and the ally isn't incapacitated."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:10 (2d6 + 3) piercing damage. If the target is a creature, it must succeed on a 13 Strength saving throw or be knocked prone."
      }
    ],
    "environment": [
      "forest",
      "hill"
    ]
  },
  {
    "name": "Displacer Beast",
    "size": "L",
    "type": "monstrosity",
    "alignment": "Lawful Evil",
    "ac": "13 natural armor",
    "hp": 85,
    "speed": "Walk 40",
    "str": 18,
    "dex": 15,
    "con": 16,
    "int": 6,
    "wis": 12,
    "cha": 8,
    "senses": "darkvision 60 ft.",
    "passive": 11,
    "cr": "3",
    "trait": [
      {
        "Name": "Avoidance",
        "Text": "If the displacer beast is subjected to an effect that allows it to make a saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails."
      },
      {
        "Name": "Displacement",
        "Text": "The displacer beast projects a magical illusion that makes it appear to be standing near its actual location, causing attack rolls against it to have disadvantage. If it is hit by an attack, this trait is disrupted until the end of its next turn. This trait is also disrupted while the displacer beast is incapacitated or has a speed of 0."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The displacer beast makes two attacks with its tentacles."
      },
      {
        "Name": "Tentacle",
        "Text": "Melee Weapon 6 to hit, reach 10 ft., one target. Hit:7 (1d6 + 4) bludgeoning damage plus 3 (1d6) piercing damage."
      }
    ],
    "environment": [
      "forest"
    ]
  },
  {
    "name": "Djinni",
    "size": "L",
    "type": "elemental",
    "alignment": "Chaotic Good",
    "ac": "17 natural armor",
    "hp": 161,
    "speed": "Walk 30, Fly 90",
    "str": 21,
    "dex": 15,
    "con": 22,
    "int": 15,
    "wis": 16,
    "cha": 20,
    "save": "Dex +6, Wis +7, Cha +9",
    "senses": "darkvision 120 ft.",
    "passive": 13,
    "immune": "lightning, thunder",
    "languages": "Auran",
    "cr": "11",
    "trait": [
      {
        "Name": "Elemental Demise",
        "Text": "If the djinni dies, its body disintegrates into a warm breeze, leaving behind only equipment the djinni was wearing or carrying."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day each: <em>conjure elemental (air elemental only), creation, gaseous form, invisibility, major image, plane shift</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The djinni makes three scimitar attacks."
      },
      {
        "Name": "Scimitar",
        "Text": "Melee Weapon 9 to hit, reach 5 ft., one target. Hit:12 (2d6 + 5) slashing damage plus 3 (1d6) lightning or thunder damage (djinni's choice)."
      },
      {
        "Name": "Create Whirlwind",
        "Text": "A 5-foot-radius, 30-foot-tall cylinder of swirling air magically forms on a point the djinni can see within 120 feet of it. The whirlwind lasts as long as the djinni maintains concentration (as if concentrating on a spell). Any creature but the djinni that enters the whirlwind must succeed on a 18 Strength saving throw or be restrained by it. The djinni can move the whirlwind up to 60 feet as an action, and creatures restrained by the whirlwind move with it. The whirlwind ends if the djinni loses sight of it."
      }
    ],
    "environment": [
      "coastal"
    ]
  },
  {
    "name": "Doppelganger",
    "size": "M",
    "type": "monstrosity (shapechanger)",
    "alignment": "Neutral",
    "ac": 14,
    "hp": 52,
    "speed": "Walk 30",
    "str": 11,
    "dex": 18,
    "con": 14,
    "int": 11,
    "wis": 12,
    "cha": 14,
    "skill": "Deception +6, Insight +3",
    "senses": "darkvision 60 ft.",
    "passive": 11,
    "conditionImmune": "charmed",
    "languages": "Common",
    "cr": "3",
    "trait": [
      {
        "Name": "Shapechanger",
        "Text": "The doppelganger can use its action to polymorph into a Small or Medium humanoid it has seen, or back into its true form. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
      },
      {
        "Name": "Ambusher",
        "Text": "In the first round of a combat, the doppelganger has advantage on attack rolls against any creature it surprised."
      },
      {
        "Name": "Surprise Attack",
        "Text": "If the doppelganger surprises a creature and hits it with an attack during the first round of combat, the target takes an extra 10 (3d6) damage from the attack."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The doppelganger makes two melee attacks."
      },
      {
        "Name": "Slam",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:7 (1d6 + 4) bludgeoning damage."
      },
      {
        "Name": "Read Thoughts",
        "Text": "The doppelganger magically reads the surface thoughts of one creature within 60 feet of it. The effect can penetrate barriers, but 3 feet of wood or dirt, 2 feet of stone, 2 inches of metal, or a thin sheet of lead blocks it. While the target is in range, the doppelganger can continue reading its thoughts, as long as the doppelganger's concentration isn't broken (as if concentrating on a spell). While reading the target's mind, the doppelganger has advantage on Wisdom (Insight) and Charisma (Deception, Intimidation, and Persuasion) checks against the target."
      }
    ],
    "environment": [
      "underdark",
      "urban"
    ]
  },
  {
    "name": "Draft Horse",
    "size": "L",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": 10,
    "hp": 19,
    "speed": "Walk 40",
    "str": 18,
    "dex": 10,
    "con": 12,
    "int": 2,
    "wis": 11,
    "cha": 7,
    "passive": 10,
    "cr": "1/4",
    "action": [
      {
        "Name": "Hooves",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:9 (2d4 + 4) bludgeoning damage."
      }
    ],
    "environment": [
      "urban"
    ]
  },
  {
    "name": "Dragon Turtle",
    "size": "G",
    "type": "dragon",
    "alignment": "Neutral",
    "ac": "20 natural armor",
    "hp": 341,
    "speed": "Walk 20, Swim 40",
    "str": 25,
    "dex": 10,
    "con": 20,
    "int": 10,
    "wis": 12,
    "cha": 12,
    "save": "Dex +6, Con +11, Wis +7",
    "senses": "darkvision 120 ft.",
    "passive": 11,
    "resist": [
      "fire"
    ],
    "languages": "Aquan, Draconic",
    "cr": "17",
    "trait": [
      {
        "Name": "Amphibious",
        "Text": "The dragon turtle can breathe air and water."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The dragon turtle makes three attacks: one with its bite and two with its claws. It can make one tail attack in place of its two claw attacks."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 13 to hit, reach 15 ft., one target. Hit:26 (3d12 + 7) piercing damage."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 13 to hit, reach 10 ft., one target. Hit:16 (2d8 + 7) slashing damage."
      },
      {
        "Name": "Tail",
        "Text": "Melee Weapon 13 to hit, reach 15 ft., one target. Hit:26 (3d12 + 7) bludgeoning damage. If the target is a creature, it must succeed on a 20 Strength saving throw or be pushed up to 10 feet away from the dragon turtle and knocked prone."
      },
      {
        "Name": "Steam Breath (Recharge 5-6)",
        "Text": "The dragon turtle exhales scalding steam in a 60-foot cone. Each creature in that area must make a 18 Constitution saving throw, taking 52 (15d6) fire damage on a failed save, or half as much damage on a successful one. Being underwater doesn't grant resistance against this damage."
      }
    ],
    "environment": [
      "underwater",
      "coastal"
    ]
  },
  {
    "name": "Dretch",
    "size": "S",
    "type": "fiend (demon)",
    "alignment": "Chaotic Evil",
    "ac": "11 natural armor",
    "hp": 18,
    "speed": "Walk 20",
    "str": 11,
    "dex": 11,
    "con": 12,
    "int": 5,
    "wis": 8,
    "cha": 3,
    "senses": "darkvision 60 ft.",
    "passive": 9,
    "resist": [
      "cold",
      "fire",
      "lightning"
    ],
    "immune": "poison",
    "conditionImmune": "poisoned",
    "languages": "Abyssal, telepathy 60 ft. (works only with creatures that understand Abyssal)",
    "cr": "1/4",
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The dretch makes two attacks: one with its bite and one with its claws."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 2 to hit, reach 5 ft., one target. Hit:3 (1d6) piercing damage."
      },
      {
        "Name": "Claws",
        "Text": "Melee Weapon 2 to hit, reach 5 ft., one target. Hit:5 (2d4) slashing damage."
      },
      {
        "Name": "Fetid Cloud (1/Day)",
        "Text": "A 10-foot radius of disgusting green gas extends out from the dretch. The gas spreads around corners, and its area is lightly obscured. It lasts for 1 minute or until a strong wind disperses it. Any creature that starts its turn in that area must succeed on a 11 Constitution saving throw or be poisoned until the start of its next turn. While poisoned in this way, the target can take either an action or a bonus action on its turn, not both, and can't take reactions."
      }
    ]
  },
  {
    "name": "Drider",
    "size": "L",
    "type": "monstrosity",
    "alignment": "Chaotic Evil",
    "ac": "19 natural armor",
    "hp": 123,
    "speed": "Walk 30, Climb 30",
    "str": 16,
    "dex": 16,
    "con": 18,
    "int": 13,
    "wis": 14,
    "cha": 12,
    "skill": "Perception +5, Stealth +9",
    "senses": "darkvision 120 ft.",
    "passive": 15,
    "languages": "Elvish, Undercommon",
    "cr": "6",
    "trait": [
      {
        "Name": "Fey Ancestry",
        "Text": "The drider has advantage on saving throws against being charmed, and magic can't put the drider to sleep."
      },
      {
        "Name": "Spider Climb",
        "Text": "The drider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
      },
      {
        "Name": "Sunlight Sensitivity",
        "Text": "While in sunlight, the drider has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
      },
      {
        "Name": "Web Walker",
        "Text": "The drider ignores movement restrictions caused by webbing."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day each: <em>darkness, faerie fire</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The drider makes three attacks, either with its longsword or its longbow. It can replace one of those attacks with a bite attack."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one creature. Hit:2 (1d4) piercing damage plus 9 (2d8) poison damage."
      },
      {
        "Name": "Longsword",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:7 (1d8 + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands."
      },
      {
        "Name": "Longbow",
        "Text": "Ranged Weapon 6 to hit, range 150/600 ft., one target. Hit:7 (1d8 + 3) piercing damage plus 4 (1d8) poison damage."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Drow",
    "size": "M",
    "type": "humanoid (elf)",
    "alignment": "Neutral Evil",
    "ac": "15 chain shirt",
    "hp": 13,
    "speed": "Walk 30",
    "str": 10,
    "dex": 14,
    "con": 10,
    "int": 11,
    "wis": 11,
    "cha": 12,
    "skill": "Perception +2, Stealth +4",
    "senses": "darkvision 120 ft.",
    "passive": 12,
    "languages": "Elvish, Undercommon",
    "cr": "1/4",
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
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day each: <em>darkness, faerie fire</em>"
      }
    ],
    "action": [
      {
        "Name": "Shortsword",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:5 (1d6 + 2) piercing damage."
      },
      {
        "Name": "Hand Crossbow",
        "Text": "Ranged Weapon 4 to hit, range 30/120 ft., one target. Hit:5 (1d6 + 2) piercing damage, and the target must succeed on a 13 Constitution saving throw or be poisoned for 1 hour. If the saving throw fails by 5 or more, the target is also unconscious while poisoned in this way. The target wakes up if it takes damage or if another creature takes an action to shake it awake."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Drow Elite Warrior",
    "size": "M",
    "type": "humanoid (elf)",
    "alignment": "Neutral Evil",
    "ac": "18 studded leather armor",
    "hp": 71,
    "speed": "Walk 30",
    "str": 13,
    "dex": 18,
    "con": 14,
    "int": 11,
    "wis": 13,
    "cha": 12,
    "save": "Dex +7, Con +5, Wis +4",
    "skill": "Perception +4, Stealth +10",
    "senses": "darkvision 120 ft.",
    "passive": 14,
    "languages": "Elvish, Undercommon",
    "cr": "5",
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
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day each: <em>darkness, faerie fire, levitate (self only)</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The drow makes two shortsword attacks."
      },
      {
        "Name": "Shortsword",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:7 (1d6 + 4) piercing damage plus 10 (3d6) poison damage."
      },
      {
        "Name": "Hand Crossbow",
        "Text": "Ranged Weapon 7 to hit, range 30/120 ft., one target. Hit:7 (1d6 + 4) piercing damage, and the target must succeed on a 13 Constitution saving throw or be poisoned for 1 hour. If the saving throw fails by 5 or more, the target is also unconscious while poisoned in this way. The target wakes up if it takes damage or if another creature takes an action to shake it awake."
      }
    ],
    "reaction": [
      {
        "Name": "Parry",
        "Text": "The drow adds 3 to its AC against one melee attack that would hit it. To do so, the drow must see the attacker and be wielding a melee weapon."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Drow Mage",
    "size": "M",
    "type": "humanoid (elf)",
    "alignment": "Neutral Evil",
    "ac": 12,
    "hp": 45,
    "speed": "Walk 30",
    "str": 9,
    "dex": 14,
    "con": 10,
    "int": 17,
    "wis": 13,
    "cha": 12,
    "skill": "Arcana +6, Deception +4, Perception +4, Stealth +5",
    "senses": "darkvision 120 ft.",
    "passive": 14,
    "languages": "Elvish, Undercommon",
    "cr": "7",
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
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day each: <em>darkness, faerie fire, levitate (self only)</em>"
      },
      {
        "Name": "Spellcasting",
        "Text": "The drow is a 10th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 14, +6 to hit with spell attacks). The drow has the following wizard spells prepared:<br><br>Cantrips (at will): <em>mage hand, minor illusion, poison spray, ray of frost</em><br>1st (1 slots): <em>mage armor, magic missile, shield, witch bolt</em><br>2nd (2 slots): <em>alter self, misty step, web</em><br>3rd (3 slots): <em>fly, lightning bolt</em><br>4th (4 slots): <em>Evard's black tentacles, greater invisibility</em><br>5th (5 slots): <em>cloudkill</em>"
      }
    ],
    "action": [
      {
        "Name": "Staff",
        "Text": "Melee Weapon 2 to hit, reach 5 ft., one target. Hit:2 (1d6 - 1) bludgeoning damage, or 3 (1d8 - 1) bludgeoning damage if used with two hands, plus 3 (1d6) poison damage."
      },
      {
        "Name": "Summon Demon (1/Day)",
        "Text": "The drow magically summons a quasit, or attempts to summon a shadow demon with a 50% summoning chance chance of success. The summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 10 minutes, until it or its summoner dies, or until its summoner dismisses it as an action."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Drow Priestess of Lolth",
    "size": "M",
    "type": "humanoid (elf)",
    "alignment": "Neutral Evil",
    "ac": "16 scale mail",
    "hp": 71,
    "speed": "Walk 30",
    "str": 10,
    "dex": 14,
    "con": 12,
    "int": 13,
    "wis": 17,
    "cha": 18,
    "save": "Con +4, Wis +6, Cha +7",
    "skill": "Insight +6, Perception +6, Religion +4, Stealth +5",
    "senses": "darkvision 120 ft.",
    "passive": 16,
    "languages": "Elvish, Undercommon",
    "cr": "8",
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
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day each: <em>darkness, faerie fire, levitate (self only)</em>"
      },
      {
        "Name": "Spellcasting",
        "Text": "The drow is a 10th-level spellcaster. Her spellcasting ability is Wisdom (save DC 14, +6 to hit with spell attacks). The drow has the following cleric spells prepared:<br><br>Cantrips (at will): <em>guidance, poison spray, resistance, spare the dying, thaumaturgy</em><br>1st (1 slots): <em>animal friendship, cure wounds, detect poison and disease, ray of sickness</em><br>2nd (2 slots): <em>lesser restoration, protection from poison, web</em><br>3rd (3 slots): <em>conjure animals (2 giant spiders), dispel magic</em><br>4th (4 slots): <em>divination, freedom of movement</em><br>5th (5 slots): <em>insect plague, mass cure wounds</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The drow makes two scourge attacks."
      },
      {
        "Name": "Scourge",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:5 (1d6 + 2) piercing damage plus 17 (5d6) poison damage."
      },
      {
        "Name": "Summon Demon (1/Day)",
        "Text": "The drow attempts to magically summon a yochlol with a 30% summoning chance chance of success. If the attempt fails, the drow takes 5 (1d10) psychic damage. Otherwise, the summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 10 minutes, until it or its summoner dies, or until its summoner dismisses it as an action."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Druid",
    "size": "M",
    "type": "humanoid (any race)",
    "alignment": "Any",
    "ac": 11,
    "hp": 27,
    "speed": "Walk 30",
    "str": 10,
    "dex": 12,
    "con": 13,
    "int": 12,
    "wis": 15,
    "cha": 11,
    "skill": "Medicine +4, Nature +3, Perception +4",
    "passive": 14,
    "languages": "Druidic plus any two languages",
    "cr": "2",
    "action": [
      {
        "Name": "Quarterstaff",
        "Text": "Melee Weapon 2 to hit (4 to hit with shillelagh), reach 5 ft., one target. Hit:3 (1d6) bludgeoning damage, 4 (1d8) bludgeoning damage if wielded with two hands, or 6 (1d8 + 2) bludgeoning damage with shillelagh."
      }
    ],
    "altArt": [
      {
        "name": "Demonic Druid",
        "source": "MTF",
        "page": 29
      }
    ],
    "trait": [
      {
        "Name": "Spellcasting",
        "Text": "The druid is a 4th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 12, +4 to hit with spell attacks). It has the following druid spells prepared:<br><br>Cantrips (at will): <em>druidcraft, produce flame, shillelagh</em><br>1st (1 slots): <em>entangle, longstrider, speak with animals, thunderwave</em><br>2nd (2 slots): <em>animal messenger, barkskin</em>"
      }
    ]
  },
  {
    "name": "Dryad",
    "size": "M",
    "type": "fey",
    "alignment": "Neutral",
    "ac": 11,
    "hp": 22,
    "speed": "Walk 30",
    "str": 10,
    "dex": 12,
    "con": 11,
    "int": 14,
    "wis": 15,
    "cha": 18,
    "skill": "Perception +4, Stealth +5",
    "senses": "darkvision 60 ft.",
    "passive": 14,
    "languages": "Elvish, Sylvan",
    "cr": "1",
    "trait": [
      {
        "Name": "Magic Resistance",
        "Text": "The dryad has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Speak with Beasts and Plants",
        "Text": "The dryad can communicate with beasts and plants as if they shared a language."
      },
      {
        "Name": "Tree Stride",
        "Text": "Once on her turn, the dryad can use 10 feet of her movement to step magically into one living tree within her reach and emerge from a second living tree within 60 feet of the first tree, appearing in an unoccupied space within 5 feet of the second tree. Both trees must be large or bigger."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day each: <em>barkskin, pass without trace, shillelagh</em>"
      }
    ],
    "action": [
      {
        "Name": "Club",
        "Text": "Melee Weapon 2 to hit (6 to hit with shillelagh), reach 5 ft., one target. Hit:2 (1d4) bludgeoning damage, or 8 (1d8 + 4) bludgeoning damage with shillelagh."
      },
      {
        "Name": "Fey Charm",
        "Text": "The dryad targets one humanoid or beast that she can see within 30 feet of her. If the target can see the dryad, it must succeed on a 14 Wisdom saving throw or be magically charmed. The charmed creature regards the dryad as a trusted friend to be heeded and protected. Although the target isn't under the dryad's control, it takes the dryad's requests or actions in the most favorable way it can."
      }
    ],
    "environment": [
      "forest"
    ]
  },
  {
    "name": "Duergar",
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
    "cr": "1",
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
        "Name": "Enlarge (Recharges after a Short or Long Rest)",
        "Text": "For 1 minute, the duergar magically increases in size, along with anything it is wearing or carrying. While enlarged, the duergar is Large, doubles its damage dice on Strength-based weapon attacks (included in the attacks), and makes Strength checks and Strength saving throws with advantage. If the duergar lacks the room to become Large, it attains the maximum size possible in the space available."
      },
      {
        "Name": "War Pick",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:6 (1d8 + 2) piercing damage, or 11 (2d8 + 2) piercing damage while enlarged."
      },
      {
        "Name": "Javelin",
        "Text": "Melee or Ranged Weapon 4 to hit, reach 5 ft. or range 30/120 ft., one target. Hit:5 (1d6 + 2) piercing damage, or 9 (2d6 + 2) piercing damage while enlarged."
      },
      {
        "Name": "Invisibility (Recharges after a Short or Long Rest)",
        "Text": "The duergar magically turns invisible until it attacks, casts a spell, or uses its Enlarge, or until its concentration is broken, up to 1 hour (as if concentrating on a spell). Any equipment the duergar wears or carries is invisible with it."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Duodrone",
    "size": "M",
    "type": "construct",
    "alignment": "Lawful Neutral",
    "ac": "15 natural armor",
    "hp": 11,
    "speed": "Walk 30",
    "str": 11,
    "dex": 13,
    "con": 12,
    "int": 6,
    "wis": 10,
    "cha": 7,
    "senses": "truesight 120 ft.",
    "passive": 10,
    "languages": "Modron",
    "cr": "1/4",
    "trait": [
      {
        "Name": "Axiomatic Mind",
        "Text": "The duodrone can't be compelled to act in a manner contrary to its nature or its instructions."
      },
      {
        "Name": "Disintegration",
        "Text": "If the duodrone dies, its body disintegrates into dust, leaving behind its weapons and anything else it was carrying."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The duodrone makes two fist attacks or two javelin attacks."
      },
      {
        "Name": "Fist",
        "Text": "Melee Weapon 2 to hit, reach 5 ft., one target. Hit:2 (1d4) bludgeoning damage."
      },
      {
        "Name": "Javelin",
        "Text": "Melee or Ranged Weapon 3 to hit, reach 5 ft. or range 30/120 ft., one target. Hit:4 (1d6 + 1) piercing damage."
      }
    ]
  },
  {
    "name": "Dust Mephit",
    "size": "S",
    "type": "elemental",
    "alignment": "Neutral Evil",
    "ac": 12,
    "hp": 17,
    "speed": "Walk 30, Fly 30",
    "str": 5,
    "dex": 14,
    "con": 10,
    "int": 9,
    "wis": 11,
    "cha": 10,
    "skill": "Perception +2, Stealth +4",
    "senses": "darkvision 60 ft.",
    "passive": 12,
    "immune": "poison",
    "vulnerable": [
      "fire"
    ],
    "conditionImmune": "poisoned",
    "languages": "Auran, Terran",
    "cr": "1/2",
    "trait": [
      {
        "Name": "Death Burst",
        "Text": "When the mephit dies, it explodes in a burst of dust. Each creature within 5 feet of it must then succeed on a 10 Constitution saving throw or be blinded for 1 minute. A blinded creature can repeat the saving throw on each of its turns, ending the effect on itself on a success."
      },
      {
        "Name": "Innate Spellcasting (1/Day)",
        "Text": "The mephit can innately cast sleep, requiring no material components. Its innate spellcasting ability is Charisma.<br>At will: <em>sleep</em>"
      }
    ],
    "action": [
      {
        "Name": "Claws",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one creature. Hit:4 (1d4 + 2) slashing damage."
      },
      {
        "Name": "Blinding Breath (Recharge 6)",
        "Text": "The mephit exhales a 15-foot cone of blinding dust. Each creature in that area must succeed on a 10 Dexterity saving throw or be blinded for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      }
    ],
    "environment": [
      "desert"
    ]
  },
  {
    "name": "Eagle",
    "size": "S",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": 12,
    "hp": 3,
    "speed": "Walk 10, Fly 60",
    "str": 6,
    "dex": 15,
    "con": 10,
    "int": 2,
    "wis": 14,
    "cha": 7,
    "skill": "Perception +4",
    "passive": 14,
    "cr": "0",
    "trait": [
      {
        "Name": "Keen Sight",
        "Text": "The eagle has advantage on Wisdom (Perception) checks that rely on sight."
      }
    ],
    "action": [
      {
        "Name": "Talons",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:4 (1d4 + 2) slashing damage."
      }
    ],
    "environment": [
      "mountain",
      "grassland",
      "hill",
      "coastal"
    ]
  },
  {
    "name": "Earth Elemental",
    "size": "L",
    "type": "elemental",
    "alignment": "Neutral",
    "ac": "17 natural armor",
    "hp": 126,
    "speed": "Walk 30, Burrow 30",
    "str": 20,
    "dex": 8,
    "con": 20,
    "int": 5,
    "wis": 10,
    "cha": 5,
    "senses": "darkvision 60 ft., tremorsense 60 ft.",
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
    "vulnerable": [
      "thunder"
    ],
    "conditionImmune": "exhaustion, paralyzed, petrified, poisoned, unconscious",
    "languages": "Terran",
    "cr": "5",
    "trait": [
      {
        "Name": "Earth Glide",
        "Text": "The elemental can burrow through nonmagical, unworked earth and stone. While doing so, the elemental doesn't disturb the material it moves through."
      },
      {
        "Name": "Siege Monster",
        "Text": "The elemental deals double damage to objects and structures."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The elemental makes two slam attacks."
      },
      {
        "Name": "Slam",
        "Text": "Melee Weapon 8 to hit, reach 10 ft., one target. Hit:14 (2d8 + 5) bludgeoning damage."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Efreeti",
    "size": "L",
    "type": "elemental",
    "alignment": "Lawful Evil",
    "ac": "17 natural armor",
    "hp": 200,
    "speed": "Walk 40, Fly 60",
    "str": 22,
    "dex": 12,
    "con": 24,
    "int": 16,
    "wis": 15,
    "cha": 16,
    "save": "Int +7, Wis +6, Cha +7",
    "senses": "darkvision 120 ft.",
    "passive": 12,
    "immune": "fire",
    "languages": "Ignan",
    "cr": "11",
    "trait": [
      {
        "Name": "Elemental Demise",
        "Text": "If the efreeti dies, its body disintegrates in a flash of fire and puff of smoke, leaving behind only equipment the djinni was wearing or carrying."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day each: <em>conjure elemental (fire elemental only), gaseous form, invisibility, major image, plane shift, wall of fire</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The efreeti makes two scimitar attacks or uses its Hurl Flame twice."
      },
      {
        "Name": "Scimitar",
        "Text": "Melee Weapon 10 to hit, reach 5 ft., one target. Hit:13 (2d6 + 6) slashing damage plus 7 (2d6) fire damage."
      },
      {
        "Name": "Hurl Flame",
        "Text": "Ranged Spell 7 to hit, range 120 ft., one target. Hit:17 (5d6) fire damage."
      }
    ],
    "environment": [
      "desert"
    ]
  },
  {
    "name": "Elephant",
    "size": "H",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": "12 natural armor",
    "hp": 76,
    "speed": "Walk 40",
    "str": 22,
    "dex": 9,
    "con": 17,
    "int": 3,
    "wis": 11,
    "cha": 6,
    "passive": 10,
    "cr": "4",
    "trait": [
      {
        "Name": "Trampling Charge",
        "Text": "If the elephant moves at least 20 feet straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a 12 Strength saving throw or be knocked prone. If the target is prone, the elephant can make one stomp attack against it as a bonus action."
      }
    ],
    "action": [
      {
        "Name": "Gore",
        "Text": "Melee Weapon 8 to hit, reach 5 ft., one target. Hit:19 (3d8 + 6) piercing damage."
      },
      {
        "Name": "Stomp",
        "Text": "Melee Weapon 8 to hit, reach 5 ft., one prone creature. Hit:22 (3d10 + 6) bludgeoning damage."
      }
    ],
    "environment": [
      "grassland"
    ]
  },
  {
    "name": "Elk",
    "size": "L",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": 10,
    "hp": 13,
    "speed": "Walk 50",
    "str": 16,
    "dex": 10,
    "con": 12,
    "int": 2,
    "wis": 10,
    "cha": 6,
    "passive": 10,
    "cr": "1/4",
    "trait": [
      {
        "Name": "Charge",
        "Text": "If the elk moves at least 20 feet straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 7 (2d6) damage. If the target is a creature, it must succeed on a 13 Strength saving throw or be knocked prone."
      }
    ],
    "action": [
      {
        "Name": "Ram",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:6 (1d6 + 3) bludgeoning damage."
      },
      {
        "Name": "Hooves",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one prone creature. Hit:8 (2d4 + 3) bludgeoning damage."
      }
    ],
    "environment": [
      "grassland",
      "forest",
      "hill"
    ]
  },
  {
    "name": "Empyrean",
    "size": "H",
    "type": "celestial (titan)",
    "alignment": "75%,C,G 25%,N,E",
    "ac": "22 natural armor",
    "hp": 313,
    "speed": "Walk 50, Fly 50, Swim 50",
    "str": 30,
    "dex": 21,
    "con": 30,
    "int": 21,
    "wis": 22,
    "cha": 27,
    "save": "Str +17, Int +12, Wis +13, Cha +15",
    "skill": "Insight +13, Persuasion +15",
    "senses": "truesight 120 ft.",
    "passive": 16,
    "immune": "bludgeoning, piercing, slashing from nonmagical attacks",
    "languages": "all",
    "cr": "23",
    "trait": [
      {
        "Name": "Legendary Resistance (3/Day)",
        "Text": "If the empyrean fails a saving throw, it can choose to succeed instead."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The empyrean has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Magic Weapons",
        "Text": "The empyrean's weapon attacks are magical."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day each: <em>commune, dispel evil and good, earthquake, fire storm, plane shift (self only)</em>"
      }
    ],
    "action": [
      {
        "Name": "Maul",
        "Text": "Melee Weapon 17 to hit, reach 10 ft., one target. Hit:31 (6d6 + 10) bludgeoning damage. If the target is a creature, it must succeed on a 15 Constitution saving throw or be stunned until the end of the empyrean's next turn."
      },
      {
        "Name": "Bolt",
        "Text": "Ranged Spell 15 to hit, range 600 ft., one target. Hit:24 (7d6) damage of one of the following types (empyrean's choice): acid, cold, fire, force, lightning, radiant, or thunder."
      }
    ],
    "legendary": [
      {
        "Name": "Attack",
        "Text": "The empyrean makes one attack."
      },
      {
        "Name": "Bolster",
        "Text": "The empyrean bolsters all nonhostile creatures within 120 feet of it until the end of its next turn. Bolstered creatures can't be charmed or frightened, and they gain advantage on ability checks and saving throws until the end of the empyrean's next turn."
      },
      {
        "Name": "Trembling Strike (Costs 2 Actions)",
        "Text": "The empyrean strikes the ground with its maul, triggering an earth tremor. All other creatures on the ground within 60 feet of the empyrean must succeed on a 25 Strength saving throw or be knocked prone."
      }
    ]
  },
  {
    "name": "Erinyes",
    "size": "M",
    "type": "fiend (devil)",
    "alignment": "Lawful Evil",
    "ac": "18 plate armor",
    "hp": 153,
    "speed": "Walk 30, Fly 60",
    "str": 18,
    "dex": 16,
    "con": 18,
    "int": 14,
    "wis": 14,
    "cha": 18,
    "save": "Dex +7, Con +8, Wis +6, Cha +8",
    "senses": "truesight 120 ft.",
    "passive": 12,
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
    "languages": "Infernal, telepathy 120 ft.",
    "cr": "12",
    "trait": [
      {
        "Name": "Hellish Weapons",
        "Text": "The erinyes's weapon attacks are magical and deal an extra 13 (3d8) poison damage on a hit (included in the attacks)."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The erinyes has advantage on saving throws against spells and other magical effects."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The erinyes makes three attacks."
      },
      {
        "Name": "Longsword",
        "Text": "Melee Weapon 8 to hit, reach 5 ft., one target. Hit:8 (1d8 + 4) slashing damage, or 9 (1d10 + 4) slashing damage if used with two hands, plus 13 (3d8) poison damage."
      },
      {
        "Name": "Longbow",
        "Text": "Ranged Weapon 7 to hit, range 150/600 ft., one target. Hit:7 (1d8 + 3) piercing damage plus 13 (3d8) poison damage, and the target must succeed on a 14 Constitution saving throw or be poisoned. The poison lasts until it is removed by the lesser restoration spell or similar magic."
      }
    ],
    "reaction": [
      {
        "Name": "Parry",
        "Text": "The erinyes adds 4 to its AC against one melee attack that would hit it. To do so, the erinyes must see the attacker and be wielding a melee weapon."
      }
    ]
  },
  {
    "name": "Ettercap",
    "size": "M",
    "type": "monstrosity",
    "alignment": "Neutral Evil",
    "ac": "13 natural armor",
    "hp": 44,
    "speed": "Walk 30, Climb 30",
    "str": 14,
    "dex": 15,
    "con": 13,
    "int": 7,
    "wis": 12,
    "cha": 8,
    "skill": "Perception +3, Stealth +4, Survival +3",
    "senses": "darkvision 60 ft.",
    "passive": 13,
    "cr": "2",
    "trait": [
      {
        "Name": "Spider Climb",
        "Text": "The ettercap can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
      },
      {
        "Name": "Web Sense",
        "Text": "While in contact with a web, the ettercap knows the exact location of any other creature in contact with the same web."
      },
      {
        "Name": "Web Walker",
        "Text": "The ettercap ignores movement restrictions caused by webbing."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The ettercap makes two attacks: one with its bite and one with its claws."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one creature. Hit:6 (1d8 + 2) piercing damage plus 4 (1d8) poison damage. The target must succeed on a 11 Constitution saving throw or be poisoned for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      },
      {
        "Name": "Claws",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:7 (2d4 + 2) slashing damage."
      },
      {
        "Name": "Web (Recharge 5-6)",
        "Text": "Ranged Weapon 4 to hit, range 30/60 ft., one Large or smaller creature. Hit:The creature is restrained by webbing. As an action, the restrained creature can make a 11 Strength check, escaping from the webbing on a success. The effect ends if the webbing is destroyed. The webbing has AC 10, 5 hit points, is vulnerable to fire damage and immune to bludgeoning, poison and psychic damage."
      }
    ],
    "environment": [
      "forest"
    ]
  },
  {
    "name": "Ettin",
    "size": "L",
    "type": "giant",
    "alignment": "Chaotic Evil",
    "ac": "12 natural armor",
    "hp": 85,
    "speed": "Walk 40",
    "str": 21,
    "dex": 8,
    "con": 17,
    "int": 6,
    "wis": 10,
    "cha": 8,
    "skill": "Perception +4",
    "senses": "darkvision 60 ft.",
    "passive": 14,
    "languages": "Giant, Orc",
    "cr": "4",
    "trait": [
      {
        "Name": "Two Heads",
        "Text": "The ettin has advantage on Wisdom (Perception) checks and on saving throws against being blinded, charmed, deafened, frightened, stunned, and knocked unconscious."
      },
      {
        "Name": "Wakeful",
        "Text": "When one of the ettin's heads is asleep, its other head is awake."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The ettin makes two attacks: one with its battleaxe and one with its morningstar."
      },
      {
        "Name": "Battleaxe",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:14 (2d8 + 5) slashing damage."
      },
      {
        "Name": "Morningstar",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:14 (2d8 + 5) piercing damage."
      }
    ],
    "environment": [
      "underdark",
      "mountain",
      "hill"
    ]
  },
  {
    "name": "Faerie Dragon (Blue)",
    "size": "T",
    "type": "dragon",
    "alignment": "Chaotic Good",
    "ac": 15,
    "hp": 14,
    "speed": "Walk 10, Fly 60",
    "str": 3,
    "dex": 20,
    "con": 13,
    "int": 14,
    "wis": 12,
    "cha": 16,
    "skill": "Arcana +4, Perception +3, Stealth +7",
    "senses": "darkvision 60 ft.",
    "passive": 13,
    "languages": "Draconic, Sylvan",
    "cr": "2",
    "trait": [
      {
        "Name": "The Colors of Age",
        "Text": "A faerie dragon's scales change hue as it ages, moving through all the colors of the rainbow. All faerie dragons have innate spellcasting ability, gaining new spells as they mature.<br>Red—5 years or less<br>Orange—6–10 years<br>Yellow—11–20 years<br>Green—21–30 years<br>Blue—31–40 years<br>Indigo—41–50 years<br>Violet—51 years or more<br>A green or older faerie dragon's CR increases to 2."
      },
      {
        "Name": "Superior Invisibility",
        "Text": "As a bonus action, the dragon can magically turn invisible until its concentration ends (as if concentrating on a spell). Any equipment the dragon wears or carries is invisible with it."
      },
      {
        "Name": "Limited Telepathy",
        "Text": "Using telepathy, the dragon can magically communicate with any other faerie dragon within 60 feet of it."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The faerie dragon has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day each: <em>color spray, dancing lights, mage hand, major image, minor illusion, mirror image, suggestion</em>"
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one creature. Hit:1 piercing damage."
      },
      {
        "Name": "Euphoria Breath (Recharge 5-6)",
        "Text": "The dragon exhales a puff of euphoria gas at one creature within 5 feet of it. The target must succeed on a 11 Wisdom saving throw, or for 1 minute, the target can't take reactions and must roll a d6 at the start of each of its turns to determine its behavior during the turn:"
      }
    ],
    "environment": [
      "forest"
    ]
  },
  {
    "name": "Faerie Dragon (Green)",
    "size": "T",
    "type": "dragon",
    "alignment": "Chaotic Good",
    "ac": 15,
    "hp": 14,
    "speed": "Walk 10, Fly 60",
    "str": 3,
    "dex": 20,
    "con": 13,
    "int": 14,
    "wis": 12,
    "cha": 16,
    "skill": "Arcana +4, Perception +3, Stealth +7",
    "senses": "darkvision 60 ft.",
    "passive": 13,
    "languages": "Draconic, Sylvan",
    "cr": "2",
    "trait": [
      {
        "Name": "The Colors of Age",
        "Text": "A faerie dragon's scales change hue as it ages, moving through all the colors of the rainbow. All faerie dragons have innate spellcasting ability, gaining new spells as they mature.<br>Red—5 years or less<br>Orange—6–10 years<br>Yellow—11–20 years<br>Green—21–30 years<br>Blue—31–40 years<br>Indigo—41–50 years<br>Violet—51 years or more<br>A green or older faerie dragon's CR increases to 2."
      },
      {
        "Name": "Superior Invisibility",
        "Text": "As a bonus action, the dragon can magically turn invisible until its concentration ends (as if concentrating on a spell). Any equipment the dragon wears or carries is invisible with it."
      },
      {
        "Name": "Limited Telepathy",
        "Text": "Using telepathy, the dragon can magically communicate with any other faerie dragon within 60 feet of it."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The faerie dragon has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day each: <em>color spray, dancing lights, mage hand, minor illusion, mirror image, suggestion</em>"
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one creature. Hit:1 piercing damage."
      },
      {
        "Name": "Euphoria Breath (Recharge 5-6)",
        "Text": "The dragon exhales a puff of euphoria gas at one creature within 5 feet of it. The target must succeed on a 11 Wisdom saving throw, or for 1 minute, the target can't take reactions and must roll a d6 at the start of each of its turns to determine its behavior during the turn:"
      }
    ],
    "environment": [
      "forest"
    ]
  },
  {
    "name": "Faerie Dragon (Indigo)",
    "size": "T",
    "type": "dragon",
    "alignment": "Chaotic Good",
    "ac": 15,
    "hp": 14,
    "speed": "Walk 10, Fly 60",
    "str": 3,
    "dex": 20,
    "con": 13,
    "int": 14,
    "wis": 12,
    "cha": 16,
    "skill": "Arcana +4, Perception +3, Stealth +7",
    "senses": "darkvision 60 ft.",
    "passive": 13,
    "languages": "Draconic, Sylvan",
    "cr": "2",
    "trait": [
      {
        "Name": "The Colors of Age",
        "Text": "A faerie dragon's scales change hue as it ages, moving through all the colors of the rainbow. All faerie dragons have innate spellcasting ability, gaining new spells as they mature.<br>Red—5 years or less<br>Orange—6–10 years<br>Yellow—11–20 years<br>Green—21–30 years<br>Blue—31–40 years<br>Indigo—41–50 years<br>Violet—51 years or more<br>A green or older faerie dragon's CR increases to 2."
      },
      {
        "Name": "Superior Invisibility",
        "Text": "As a bonus action, the dragon can magically turn invisible until its concentration ends (as if concentrating on a spell). Any equipment the dragon wears or carries is invisible with it."
      },
      {
        "Name": "Limited Telepathy",
        "Text": "Using telepathy, the dragon can magically communicate with any other faerie dragon within 60 feet of it."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The faerie dragon has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day each: <em>color spray, dancing lights, hallucinatory terrain, mage hand, major image, minor illusion, mirror image, suggestion</em>"
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one creature. Hit:1 piercing damage."
      },
      {
        "Name": "Euphoria Breath (Recharge 5-6)",
        "Text": "The dragon exhales a puff of euphoria gas at one creature within 5 feet of it. The target must succeed on a 11 Wisdom saving throw, or for 1 minute, the target can't take reactions and must roll a d6 at the start of each of its turns to determine its behavior during the turn:"
      }
    ],
    "environment": [
      "forest"
    ]
  },
  {
    "name": "Faerie Dragon (Orange)",
    "size": "T",
    "type": "dragon",
    "alignment": "Chaotic Good",
    "ac": 15,
    "hp": 14,
    "speed": "Walk 10, Fly 60",
    "str": 3,
    "dex": 20,
    "con": 13,
    "int": 14,
    "wis": 12,
    "cha": 16,
    "skill": "Arcana +4, Perception +3, Stealth +7",
    "senses": "darkvision 60 ft.",
    "passive": 13,
    "languages": "Draconic, Sylvan",
    "cr": "1",
    "trait": [
      {
        "Name": "The Colors of Age",
        "Text": "A faerie dragon's scales change hue as it ages, moving through all the colors of the rainbow. All faerie dragons have innate spellcasting ability, gaining new spells as they mature.<br>Red—5 years or less<br>Orange—6–10 years<br>Yellow—11–20 years<br>Green—21–30 years<br>Blue—31–40 years<br>Indigo—41–50 years<br>Violet—51 years or more<br>A green or older faerie dragon's CR increases to 2."
      },
      {
        "Name": "Superior Invisibility",
        "Text": "As a bonus action, the dragon can magically turn invisible until its concentration ends (as if concentrating on a spell). Any equipment the dragon wears or carries is invisible with it."
      },
      {
        "Name": "Limited Telepathy",
        "Text": "Using telepathy, the dragon can magically communicate with any other faerie dragon within 60 feet of it."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The faerie dragon has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day each: <em>color spray, dancing lights, mage hand, minor illusion</em>"
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one creature. Hit:1 piercing damage."
      },
      {
        "Name": "Euphoria Breath (Recharge 5-6)",
        "Text": "The dragon exhales a puff of euphoria gas at one creature within 5 feet of it. The target must succeed on a 11 Wisdom saving throw, or for 1 minute, the target can't take reactions and must roll a d6 at the start of each of its turns to determine its behavior during the turn:"
      }
    ],
    "environment": [
      "forest"
    ]
  },
  {
    "name": "Faerie Dragon (Red)",
    "size": "T",
    "type": "dragon",
    "alignment": "Chaotic Good",
    "ac": 15,
    "hp": 14,
    "speed": "Walk 10, Fly 60",
    "str": 3,
    "dex": 20,
    "con": 13,
    "int": 14,
    "wis": 12,
    "cha": 16,
    "skill": "Arcana +4, Perception +3, Stealth +7",
    "senses": "darkvision 60 ft.",
    "passive": 13,
    "languages": "Draconic, Sylvan",
    "cr": "1",
    "trait": [
      {
        "Name": "The Colors of Age",
        "Text": "A faerie dragon's scales change hue as it ages, moving through all the colors of the rainbow. All faerie dragons have innate spellcasting ability, gaining new spells as they mature.<br>Red—5 years or less<br>Orange—6–10 years<br>Yellow—11–20 years<br>Green—21–30 years<br>Blue—31–40 years<br>Indigo—41–50 years<br>Violet—51 years or more<br>A green or older faerie dragon's CR increases to 2."
      },
      {
        "Name": "Superior Invisibility",
        "Text": "As a bonus action, the dragon can magically turn invisible until its concentration ends (as if concentrating on a spell). Any equipment the dragon wears or carries is invisible with it."
      },
      {
        "Name": "Limited Telepathy",
        "Text": "Using telepathy, the dragon can magically communicate with any other faerie dragon within 60 feet of it."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The faerie dragon has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day each: <em>dancing lights, mage hand, minor illusion</em>"
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one creature. Hit:1 piercing damage."
      },
      {
        "Name": "Euphoria Breath (Recharge 5-6)",
        "Text": "The dragon exhales a puff of euphoria gas at one creature within 5 feet of it. The target must succeed on a 11 Wisdom saving throw, or for 1 minute, the target can't take reactions and must roll a d6 at the start of each of its turns to determine its behavior during the turn:"
      }
    ],
    "environment": [
      "forest"
    ]
  },
  {
    "name": "Faerie Dragon (Violet)",
    "size": "T",
    "type": "dragon",
    "alignment": "Chaotic Good",
    "ac": 15,
    "hp": 14,
    "speed": "Walk 10, Fly 60",
    "str": 3,
    "dex": 20,
    "con": 13,
    "int": 14,
    "wis": 12,
    "cha": 16,
    "skill": "Arcana +4, Perception +3, Stealth +7",
    "senses": "darkvision 60 ft.",
    "passive": 13,
    "languages": "Draconic, Sylvan",
    "cr": "2",
    "trait": [
      {
        "Name": "The Colors of Age",
        "Text": "A faerie dragon's scales change hue as it ages, moving through all the colors of the rainbow. All faerie dragons have innate spellcasting ability, gaining new spells as they mature.<br>Red—5 years or less<br>Orange—6–10 years<br>Yellow—11–20 years<br>Green—21–30 years<br>Blue—31–40 years<br>Indigo—41–50 years<br>Violet—51 years or more<br>A green or older faerie dragon's CR increases to 2."
      },
      {
        "Name": "Superior Invisibility",
        "Text": "As a bonus action, the dragon can magically turn invisible until its concentration ends (as if concentrating on a spell). Any equipment the dragon wears or carries is invisible with it."
      },
      {
        "Name": "Limited Telepathy",
        "Text": "Using telepathy, the dragon can magically communicate with any other faerie dragon within 60 feet of it."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The faerie dragon has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day each: <em>color spray, dancing lights, hallucinatory terrain, mage hand, major image, minor illusion, mirror image, polymorph, suggestion</em>"
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one creature. Hit:1 piercing damage."
      },
      {
        "Name": "Euphoria Breath (Recharge 5-6)",
        "Text": "The dragon exhales a puff of euphoria gas at one creature within 5 feet of it. The target must succeed on a 11 Wisdom saving throw, or for 1 minute, the target can't take reactions and must roll a d6 at the start of each of its turns to determine its behavior during the turn:"
      }
    ],
    "environment": [
      "forest"
    ]
  },
  {
    "name": "Faerie Dragon (Yellow)",
    "size": "T",
    "type": "dragon",
    "alignment": "Chaotic Good",
    "ac": 15,
    "hp": 14,
    "speed": "Walk 10, Fly 60",
    "str": 3,
    "dex": 20,
    "con": 13,
    "int": 14,
    "wis": 12,
    "cha": 16,
    "skill": "Arcana +4, Perception +3, Stealth +7",
    "senses": "darkvision 60 ft.",
    "passive": 13,
    "languages": "Draconic, Sylvan",
    "cr": "1",
    "trait": [
      {
        "Name": "The Colors of Age",
        "Text": "A faerie dragon's scales change hue as it ages, moving through all the colors of the rainbow. All faerie dragons have innate spellcasting ability, gaining new spells as they mature.<br>Red—5 years or less<br>Orange—6–10 years<br>Yellow—11–20 years<br>Green—21–30 years<br>Blue—31–40 years<br>Indigo—41–50 years<br>Violet—51 years or more<br>A green or older faerie dragon's CR increases to 2."
      },
      {
        "Name": "Superior Invisibility",
        "Text": "As a bonus action, the dragon can magically turn invisible until its concentration ends (as if concentrating on a spell). Any equipment the dragon wears or carries is invisible with it."
      },
      {
        "Name": "Limited Telepathy",
        "Text": "Using telepathy, the dragon can magically communicate with any other faerie dragon within 60 feet of it."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The faerie dragon has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day each: <em>color spray, dancing lights, mage hand, minor illusion, mirror image</em>"
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one creature. Hit:1 piercing damage."
      },
      {
        "Name": "Euphoria Breath (Recharge 5-6)",
        "Text": "The dragon exhales a puff of euphoria gas at one creature within 5 feet of it. The target must succeed on a 11 Wisdom saving throw, or for 1 minute, the target can't take reactions and must roll a d6 at the start of each of its turns to determine its behavior during the turn:"
      }
    ],
    "environment": [
      "forest"
    ]
  },
  {
    "name": "Fire Elemental",
    "size": "L",
    "type": "elemental",
    "alignment": "Neutral",
    "ac": 13,
    "hp": 102,
    "speed": "Walk 50",
    "str": 10,
    "dex": 17,
    "con": 16,
    "int": 6,
    "wis": 10,
    "cha": 7,
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
    "conditionImmune": "exhaustion, grappled, paralyzed, petrified, poisoned, prone, restrained, unconscious",
    "languages": "Ignan",
    "cr": "5",
    "trait": [
      {
        "Name": "Fire Form",
        "Text": "The elemental can move through a space as narrow as 1 inch wide without squeezing. A creature that touches the elemental or hits it with a melee attack while within 5 feet of it takes 5 (1d10) fire damage. In addition, the elemental can enter a hostile creature's space and stop there. The first time it enters a creature's space on a turn, that creature takes 5 (1d10) fire damage and catches fire; until someone takes an action to douse the fire, the creature takes 5 (1d10) fire damage at the start of each of its turns."
      },
      {
        "Name": "Illumination",
        "Text": "The elemental sheds bright light in a 30-foot radius and dim light in an additional 30 feet."
      },
      {
        "Name": "Water Susceptibility",
        "Text": "For every 5 feet the elemental moves in water, or for every gallon of water splashed on it, it takes 1 cold damage."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The elemental makes two touch attacks."
      },
      {
        "Name": "Touch",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:10 (2d6 + 3) fire damage. If the target is a creature or a flammable object, it ignites. Until a creature takes an action to douse the fire, the target takes 5 (1d10) fire damage at the start of each of its turns."
      }
    ],
    "environment": [
      "desert"
    ]
  },
  {
    "name": "Fire Giant",
    "size": "H",
    "type": "giant",
    "alignment": "Lawful Evil",
    "ac": "18 plate armor",
    "hp": 162,
    "speed": "Walk 30",
    "str": 25,
    "dex": 9,
    "con": 23,
    "int": 10,
    "wis": 14,
    "cha": 13,
    "save": "Dex +3, Con +10, Cha +5",
    "skill": "Athletics +11, Perception +6",
    "passive": 16,
    "immune": "fire",
    "languages": "Giant",
    "cr": "9",
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The giant makes two greatsword attacks."
      },
      {
        "Name": "Greatsword",
        "Text": "Melee Weapon 11 to hit, reach 10 ft., one target. Hit:28 (6d6 + 7) slashing damage."
      },
      {
        "Name": "Rock",
        "Text": "Ranged Weapon 11 to hit, range 60/240 ft., one target. Hit:29 (4d10 + 7) bludgeoning damage."
      }
    ],
    "environment": [
      "underdark",
      "mountain"
    ]
  },
  {
    "name": "Fire Snake",
    "size": "M",
    "type": "elemental",
    "alignment": "Neutral Evil",
    "ac": "14 natural armor",
    "hp": 22,
    "speed": "Walk 30",
    "str": 12,
    "dex": 14,
    "con": 11,
    "int": 7,
    "wis": 10,
    "cha": 8,
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
    "immune": "fire",
    "vulnerable": [
      "cold"
    ],
    "languages": "understands Ignan but can't speak",
    "cr": "1",
    "trait": [
      {
        "Name": "Heated Body",
        "Text": "A creature that touches the snake or hits it with a melee attack while within 5 feet of it takes 3 (1d6) fire damage."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The snake makes two attacks: one with its bite and one with its tail."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one target. Hit:3 (1d4 + 1) piercing damage plus 3 (1d6) fire damage."
      },
      {
        "Name": "Tail",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one target. Hit:3 (1d4 + 1) bludgeoning damage plus 3 (1d6) fire damage."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Flameskull",
    "size": "T",
    "type": "undead",
    "alignment": "Neutral Evil",
    "ac": 13,
    "hp": 40,
    "speed": "Walk 0, Fly 40 (hover)",
    "str": 1,
    "dex": 17,
    "con": 14,
    "int": 16,
    "wis": 10,
    "cha": 11,
    "skill": "Arcana +5, Perception +2",
    "senses": "darkvision 60 ft.",
    "passive": 12,
    "resist": [
      "lightning",
      "necrotic",
      "piercing"
    ],
    "immune": "cold, fire, poison",
    "conditionImmune": "charmed, frightened, paralyzed, poisoned, prone",
    "languages": "Common",
    "cr": "4",
    "trait": [
      {
        "Name": "Illumination",
        "Text": "The flameskull sheds either dim light in a 15-foot radius, or bright light in a 15-foot radius and dim light for an additional 15 feet. It can switch between the options as an action."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The flameskull has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Rejuvenation",
        "Text": "If the flameskull is destroyed, it regains all its hit points in 1 hour unless holy water is sprinkled on its remains or a dispel magic or remove curse spell is cast on them."
      },
      {
        "Name": "Spellcasting",
        "Text": "The flameskull is a 5th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 13, +5 to hit with spell attacks). It requires no somatic or material components to cast its spells. The flameskull has the following wizard spells prepared:<br><br>Cantrips (at will): <em>mage hand</em><br>1st (1 slots): <em>magic missile, shield</em><br>2nd (2 slots): <em>blur, flaming sphere</em><br>3rd (3 slots): <em>fireball</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The flameskull uses Fire Ray twice."
      },
      {
        "Name": "Fire Ray",
        "Text": "Ranged Spell 5 to hit, range 30 ft., one target. Hit:10 (3d6) fire damage."
      }
    ],
    "environment": [
      "underdark"
    ],
    "altArt": [
      {
        "name": "Flameskull",
        "source": "RMBRE"
      }
    ]
  },
  {
    "name": "Flesh Golem",
    "size": "M",
    "type": "construct",
    "alignment": "Neutral",
    "ac": 9,
    "hp": 93,
    "speed": "Walk 30",
    "str": 19,
    "dex": 9,
    "con": 18,
    "int": 6,
    "wis": 10,
    "cha": 5,
    "senses": "darkvision 60 ft.",
    "passive": 10,
    "immune": "lightning, poison, bludgeoning, piercing, slashing from nonmagical attacks that aren't adamantine",
    "conditionImmune": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned",
    "languages": "understands the languages of its creator but can't speak",
    "cr": "5",
    "trait": [
      {
        "Name": "Berserk",
        "Text": "Whenever the golem starts its turn with 40 hit points or fewer, roll a d6. On a 6, the golem goes berserk. On each of its turns while berserk, the golem attacks the nearest creature it can see. If no creature is near enough to move to and attack, the golem attacks an object, with preference for an object smaller than itself. Once the golem goes berserk, it continues to do so until it is destroyed or regains all its hit points.<br>The golem's creator, if within 60 feet of the berserk golem, can try to calm it by speaking firmly and persuasively. The golem must be able to hear its creator, who must take an action to make a 15 Charisma (Persuasion) check. If the check succeeds, the golem ceases being berserk. If it takes damage while still at 40 hit points or fewer, the golem might go berserk again."
      },
      {
        "Name": "Aversion of Fire",
        "Text": "If the golem takes fire damage, it has disadvantage on attack rolls and ability checks until the end of its next turn."
      },
      {
        "Name": "Immutable Form",
        "Text": "The golem is immune to any spell or effect that would alter its form."
      },
      {
        "Name": "Lightning Absorption",
        "Text": "Whenever the golem is subjected to lightning damage, it takes no damage and instead regains a number of hit points equal to the lightning damage dealt."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The golem has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Magic Weapons",
        "Text": "The golem's weapon attacks are magical."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The golem makes two slam attacks."
      },
      {
        "Name": "Slam",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:13 (2d8 + 4) bludgeoning damage."
      }
    ]
  },
  {
    "name": "Flumph",
    "size": "S",
    "type": "aberration",
    "alignment": "Lawful Good",
    "ac": 12,
    "hp": 7,
    "speed": "Walk 5, Fly 30",
    "str": 6,
    "dex": 15,
    "con": 10,
    "int": 14,
    "wis": 14,
    "cha": 11,
    "skill": "Arcana +4, History +4, Religion +4",
    "senses": "darkvision 60 ft.",
    "passive": 12,
    "vulnerable": [
      "psychic"
    ],
    "languages": "understands Undercommon but can't speak, telepathy 60 ft.",
    "cr": "1/8",
    "trait": [
      {
        "Name": "Advanced Telepathy",
        "Text": "The flumph can perceive the content of any telepathic communication used within 60 feet of it, and it can't be surprised by creatures with any form of telepathy."
      },
      {
        "Name": "Prone Deficiency",
        "Text": "If the flumph is knocked prone, roll a die. On an odd result, the flumph lands upside-down and is incapacitated. At the end of each of its turns, the flumph can make a 10 Dexterity saving throw, righting itself and ending the incapacitated condition if it succeeds."
      },
      {
        "Name": "Telepathic Shroud",
        "Text": "The flumph is immune to any effect that would sense its emotions or read its thoughts, as well as all divination spells."
      }
    ],
    "action": [
      {
        "Name": "Tendrils",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one creature. Hit:4 (1d4 + 2) piercing damage plus 2 (1d4) acid damage. At the end of each of its turns, the target must make a 10 Constitution saving throw, taking 2 (1d4) acid damage on a failure or ending the recurring acid damage on a success. A lesser restoration spell cast on the target also ends the recurring acid damage."
      },
      {
        "Name": "Stench Spray (1/Day)",
        "Text": "Each creature in a 15-foot cone originating from the flumph must succeed on a 10 Dexterity saving throw or be coated in a foul-smelling liquid. A coated creature exudes a horrible stench for 1d4 hours. The coated creature is poisoned as long as the stench lasts, and other creatures are poisoned while with in 5 feet of the coated creature. A creature can remove the stench on itself by using a short rest to bathe in water, alcohol, or vinegar."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Flying Snake",
    "size": "T",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": 14,
    "hp": 5,
    "speed": "Walk 30, Fly 60, Swim 30",
    "str": 4,
    "dex": 18,
    "con": 11,
    "int": 2,
    "wis": 12,
    "cha": 5,
    "senses": "blindsight 10 ft.",
    "passive": 11,
    "cr": "1/8",
    "trait": [
      {
        "Name": "Flyby",
        "Text": "The snake doesn't provoke opportunity attacks when it flies out of an enemy's reach."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:1 piercing damage plus 7 (3d4) poison damage."
      }
    ],
    "environment": [
      "grassland",
      "forest",
      "urban",
      "desert"
    ]
  },
  {
    "name": "Flying Sword",
    "size": "S",
    "type": "construct",
    "alignment": "Unaligned",
    "ac": "17 natural armor",
    "hp": 17,
    "speed": "Walk 0, Fly 50 (hover)",
    "str": 12,
    "dex": 15,
    "con": 11,
    "int": 1,
    "wis": 5,
    "cha": 1,
    "save": "Dex +4",
    "senses": "blindsight 60 ft. (blind beyond this radius)",
    "passive": 7,
    "immune": "poison, psychic",
    "conditionImmune": "blinded, charmed, deafened, frightened, paralyzed, petrified, poisoned",
    "cr": "1/4",
    "trait": [
      {
        "Name": "Antimagic Susceptibility",
        "Text": "The sword is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the sword must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute."
      },
      {
        "Name": "False Appearance",
        "Text": "While the sword remains motionless and isn't flying, it is indistinguishable from a normal sword."
      }
    ],
    "action": [
      {
        "Name": "Longsword",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one target. Hit:5 (1d8 + 1) slashing damage."
      }
    ]
  },
  {
    "name": "Fomorian",
    "size": "H",
    "type": "giant",
    "alignment": "Chaotic Evil",
    "ac": "14 natural armor",
    "hp": 149,
    "speed": "Walk 30",
    "str": 23,
    "dex": 10,
    "con": 20,
    "int": 9,
    "wis": 14,
    "cha": 6,
    "skill": "Perception +8, Stealth +3",
    "senses": "darkvision 120 ft.",
    "passive": 18,
    "languages": "Giant, Undercommon",
    "cr": "8",
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The fomorian attacks twice with its greatclub or makes one greatclub attack and uses Evil Eye once."
      },
      {
        "Name": "Greatclub",
        "Text": "Melee Weapon 9 to hit, reach 15 ft., one target. Hit:19 (3d8 + 6) bludgeoning damage."
      },
      {
        "Name": "Evil Eye",
        "Text": "The fomorian magically forces a creature it can see within 60 feet of it to make a 14 Charisma saving throw. The creature takes 27 (6d8) psychic damage on a failed save, or half as much damage on a successful one."
      },
      {
        "Name": "Curse of the Evil Eye (Recharges after a Short or Long Rest)",
        "Text": "With a stare, the fomorian uses Evil Eye, but on a failed save, the creature is also cursed with magical deformities. While deformed, the creature has its speed halved and has disadvantage on ability checks, saving throws, and attacks based on Strength or Dexterity."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Frog",
    "size": "T",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": 11,
    "hp": 1,
    "speed": "Walk 20, Swim 20",
    "str": 1,
    "dex": 13,
    "con": 8,
    "int": 1,
    "wis": 8,
    "cha": 3,
    "skill": "Perception +1, Stealth +3",
    "senses": "darkvision 30 ft.",
    "passive": 11,
    "cr": "0",
    "trait": [
      {
        "Name": "Amphibious",
        "Text": "The frog can breathe air and water."
      },
      {
        "Name": "Standing Leap",
        "Text": "The frog's long jump is up to 10 feet and its high jump is up to 5 feet, with or without a running start."
      }
    ],
    "familiar": true
  },
  {
    "name": "Frost Giant",
    "size": "H",
    "type": "giant",
    "alignment": "Neutral Evil",
    "ac": "15 patchwork armor",
    "hp": 138,
    "speed": "Walk 40",
    "str": 23,
    "dex": 9,
    "con": 21,
    "int": 9,
    "wis": 10,
    "cha": 12,
    "save": "Con +8, Wis +3, Cha +4",
    "skill": "Athletics +9, Perception +3",
    "passive": 13,
    "immune": "cold",
    "languages": "Giant",
    "cr": "8",
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The giant makes two greataxe attacks."
      },
      {
        "Name": "Greataxe",
        "Text": "Melee Weapon 9 to hit, reach 10 ft., one target. Hit:25 (3d12 + 6) slashing damage."
      },
      {
        "Name": "Rock",
        "Text": "Ranged Weapon 9 to hit, range 60/240 ft., one target. Hit:28 (4d10 + 6) bludgeoning damage."
      }
    ],
    "environment": [
      "mountain",
      "arctic"
    ]
  },
  {
    "name": "Galeb Duhr",
    "size": "M",
    "type": "elemental",
    "alignment": "Neutral",
    "ac": "16 natural armor",
    "hp": 85,
    "speed": "Walk 15 (30 ft. when rolling, 60 ft. rolling downhill)",
    "str": 20,
    "dex": 14,
    "con": 20,
    "int": 11,
    "wis": 12,
    "cha": 11,
    "senses": "darkvision 60 ft., tremorsense 60 ft.",
    "passive": 11,
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
    "conditionImmune": "exhaustion, paralyzed, petrified, poisoned",
    "languages": "Terran",
    "cr": "6",
    "trait": [
      {
        "Name": "False Appearance",
        "Text": "While the galeb duhr remains motionless, it is indistinguishable from a normal boulder."
      },
      {
        "Name": "Rolling Charge",
        "Text": "If the galeb duhr rolls at least 20 feet straight toward a target and then hits it with a slam attack on the same turn, the target takes an extra 7 (2d6) bludgeoning damage. If the target is a creature, it must succeed on a 16 Strength saving throw or be knocked prone."
      }
    ],
    "action": [
      {
        "Name": "Slam",
        "Text": "Melee Weapon 8 to hit, reach 5 ft., one target. Hit:12 (2d6 + 5) bludgeoning damage."
      },
      {
        "Name": "Animate Boulders (1/Day)",
        "Text": "The galeb duhr magically animates up to two boulders it can see within 60 feet of it. A boulder has statistics like those of a galeb duhr, except it has Intelligence 1 and Charisma 1, it can't be charmed or frightened, and it lacks this action option. A boulder remains animated as long as the galeb duhr maintains concentration, up to 1 minute (as if concentrating on a spell)."
      }
    ],
    "environment": [
      "mountain",
      "hill"
    ]
  },
  {
    "name": "Gargoyle",
    "size": "M",
    "type": "elemental",
    "alignment": "Chaotic Evil",
    "ac": "15 natural armor",
    "hp": 52,
    "speed": "Walk 30, Fly 60",
    "str": 15,
    "dex": 11,
    "con": 16,
    "int": 6,
    "wis": 11,
    "cha": 7,
    "senses": "darkvision 60 ft.",
    "passive": 10,
    "resist": [
      {
        "resist": [
          "bludgeoning",
          "piercing",
          "slashing"
        ],
        "note": "from nonmagical attacks that aren't adamantine",
        "cond": true
      }
    ],
    "immune": "poison",
    "conditionImmune": "exhaustion, petrified, poisoned",
    "languages": "Terran",
    "cr": "2",
    "trait": [
      {
        "Name": "False Appearance",
        "Text": "While the gargoyle remains motionless, it is indistinguishable from an inanimate statue."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The gargoyle makes two attacks: one with its bite and one with its claws."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:5 (1d6 + 2) piercing damage."
      },
      {
        "Name": "Claws",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:5 (1d6 + 2) slashing damage."
      }
    ],
    "environment": [
      "underdark",
      "urban"
    ]
  },
  {
    "name": "Gas Spore",
    "size": "L",
    "type": "plant",
    "alignment": "Unaligned",
    "ac": 5,
    "hp": 1,
    "speed": "Walk 0, Fly 10 (hover)",
    "str": 5,
    "dex": 1,
    "con": 3,
    "int": 1,
    "wis": 1,
    "cha": 1,
    "senses": "blindsight 30 ft. (blind beyond this radius)",
    "passive": 5,
    "immune": "poison",
    "conditionImmune": "blinded, deafened, frightened, paralyzed, poisoned, prone",
    "cr": "1/2",
    "trait": [
      {
        "Name": "Death Burst",
        "Text": "The gas spore explodes when it drops to 0 hit points. Each creature within 20 feet of it must succeed on a 15 Constitution saving throw or take 10 (3d6) poison damage and become infected with a disease on a failed save. Creatures immune to the poisoned condition are immune to this disease.<br>Spores invade an infected creature's system, killing the creature in a number of hours equal to 1d12 + the creature's Constitution score, unless the disease is removed. In half that time, the creature becomes poisoned for the rest of the duration. After the creature dies, it sprouts 2d4 Tiny gas spores that grow to full size in 7 days."
      },
      {
        "Name": "Eerie Resemblance",
        "Text": "The gas spore resembles a beholder. A creature that can see the gas spore can discern its true nature with a successful 15 Intelligence (Nature) check."
      }
    ],
    "action": [
      {
        "Name": "Touch",
        "Text": "Melee Weapon 0 to hit, reach 5 ft., one creature. Hit:1 poison damage, and the creature must succeed on a 10 Constitution saving throw or become infected with the disease described in the Death Burst trait."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Gelatinous Cube",
    "size": "L",
    "type": "ooze",
    "alignment": "Unaligned",
    "ac": 6,
    "hp": 84,
    "speed": "Walk 15",
    "str": 14,
    "dex": 3,
    "con": 20,
    "int": 1,
    "wis": 6,
    "cha": 1,
    "senses": "blindsight 60 ft. (blind beyond this radius)",
    "passive": 8,
    "conditionImmune": "blinded, charmed, deafened, exhaustion, frightened, prone",
    "cr": "2",
    "trait": [
      {
        "Name": "Ooze Cube",
        "Text": "The cube takes up its entire space. Other creatures can enter the space, but a creature that does so is subjected to the cube's Engulf and has disadvantage on the saving throw.<br>Creatures inside the cube can be seen but have total cover.<br>A creature within 5 feet of the cube can take an action to pull a creature or object out of the cube. Doing so requires a successful 12 Strength check, and the creature making the attempt takes 10 (3d6) acid damage.<br>The cube can hold only one Large creature or up to four Medium or smaller creatures inside it at a time."
      },
      {
        "Name": "Transparent",
        "Text": "Even when the cube is in plain sight, it takes a successful 15 Wisdom (Perception) check to spot a cube that has neither moved nor attacked. A creature that tries to enter the cube's space while unaware of the cube is surprised by the cube."
      }
    ],
    "action": [
      {
        "Name": "Pseudopod",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one creature. Hit:10 (3d6) acid damage."
      },
      {
        "Name": "Engulf",
        "Text": "The cube moves up to its speed. While doing so, it can enter Large or smaller creatures' spaces. Whenever the cube enters a creature's space, the creature must make a 12 Dexterity saving throw."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Ghast",
    "size": "M",
    "type": "undead",
    "alignment": "Chaotic Evil",
    "ac": 13,
    "hp": 36,
    "speed": "Walk 30",
    "str": 16,
    "dex": 17,
    "con": 10,
    "int": 11,
    "wis": 10,
    "cha": 8,
    "senses": "darkvision 60 ft.",
    "passive": 10,
    "resist": [
      "necrotic"
    ],
    "immune": "poison",
    "conditionImmune": "charmed, exhaustion, poisoned",
    "languages": "Common",
    "cr": "2",
    "trait": [
      {
        "Name": "Stench",
        "Text": "Any creature that starts its turn within 5 feet of the ghast must succeed on a 10 Constitution saving throw or be poisoned until the start of its next turn. On a successful saving throw, the creature is immune to the ghast's Stench for 24 hours."
      },
      {
        "Name": "Turn Defiance",
        "Text": "The ghast and any ghouls within 30 feet of it have advantage on saving throws against effects that turn undead."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one creature. Hit:12 (2d8 + 3) piercing damage."
      },
      {
        "Name": "Claws",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:10 (2d6 + 3) slashing damage. If the target is a creature other than an undead, it must succeed on a 10 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      }
    ],
    "environment": [
      "underdark",
      "swamp",
      "urban"
    ],
    "altArt": [
      {
        "name": "Ghoul",
        "source": "RMBRE"
      }
    ]
  },
  {
    "name": "Ghost",
    "size": "M",
    "type": "undead",
    "alignment": "Any",
    "ac": 11,
    "hp": 45,
    "speed": "Walk 0, Fly 40 (hover)",
    "str": 7,
    "dex": 13,
    "con": 10,
    "int": 10,
    "wis": 12,
    "cha": 17,
    "senses": "darkvision 60 ft.",
    "passive": 11,
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
    "languages": "any languages it knew in life",
    "cr": "4",
    "trait": [
      {
        "Name": "Ethereal Sight",
        "Text": "The ghost can see 60 feet into the Ethereal Plane when it is on the Material Plane, and vice versa."
      },
      {
        "Name": "Incorporeal Movement",
        "Text": "The ghost can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object."
      }
    ],
    "action": [
      {
        "Name": "Withering Touch",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:17 (4d6 + 3) necrotic damage."
      },
      {
        "Name": "Etherealness",
        "Text": "The ghost enters the Ethereal Plane from the Material Plane, or vice versa. It is visible on the Material Plane while it is in the Border Ethereal, and vice versa, yet it can't affect or be affected by anything on the other plane."
      },
      {
        "Name": "Horrifying Visage",
        "Text": "Each non-undead creature within 60 feet of the ghost that can see it must succeed on a 13 Wisdom saving throw or be frightened for 1 minute. If the save fails by 5 or more, the target also ages 1d4 × 10 years. A frightened target can repeat the saving throw at the end of each of its turns, ending the frightened condition on itself on a success. If a target's saving throw is successful or the effect ends for it, the target is immune to this ghost's Horrifying Visage for the next 24 hours. The aging effect can be reversed with a greater restoration spell, but only within 24 hours of it occurring."
      },
      {
        "Name": "Possession (Recharge 6)",
        "Text": "One humanoid that the ghost can see within 5 feet of it must succeed on a 13 Charisma saving throw or be possessed by the ghost; the ghost then disappears, and the target is incapacitated and loses control of its body. The ghost now controls the body but doesn't deprive the target of awareness. The ghost can't be targeted by any attack, spell, or other effect, except ones that turn undead, and it retains its alignment, Intelligence, Wisdom, Charisma, and immunity to being charmed and frightened. It otherwise uses the possessed target's statistics, but doesn't gain access to the target's knowledge, class features, or proficiencies."
      }
    ],
    "environment": [
      "underdark",
      "urban"
    ]
  },
  {
    "name": "Ghoul",
    "size": "M",
    "type": "undead",
    "alignment": "Chaotic Evil",
    "ac": 12,
    "hp": 22,
    "speed": "Walk 30",
    "str": 13,
    "dex": 15,
    "con": 10,
    "int": 7,
    "wis": 10,
    "cha": 6,
    "senses": "darkvision 60 ft.",
    "passive": 10,
    "immune": "poison",
    "conditionImmune": "charmed, exhaustion, poisoned",
    "languages": "Common",
    "cr": "1",
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 2 to hit, reach 5 ft., one creature. Hit:9 (2d6 + 2) piercing damage."
      },
      {
        "Name": "Claws",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:7 (2d4 + 2) slashing damage. If the target is a creature other than an elf or undead, it must succeed on a 10 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      }
    ],
    "environment": [
      "underdark",
      "swamp",
      "urban"
    ],
    "altArt": [
      {
        "name": "Ghoul",
        "source": "DIP"
      }
    ]
  },
  {
    "name": "Giant Ape",
    "size": "H",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": 12,
    "hp": 157,
    "speed": "Walk 40, Climb 40",
    "str": 23,
    "dex": 14,
    "con": 18,
    "int": 7,
    "wis": 12,
    "cha": 7,
    "skill": "Athletics +9, Perception +4",
    "passive": 14,
    "cr": "7",
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The ape makes two fist attacks."
      },
      {
        "Name": "Fist",
        "Text": "Melee Weapon 9 to hit, reach 10 ft., one target. Hit:22 (3d10 + 6) bludgeoning damage."
      },
      {
        "Name": "Rock",
        "Text": "Ranged Weapon 9 to hit, range 50/100 ft., one target. Hit:30 (7d6 + 6) bludgeoning damage."
      }
    ],
    "environment": [
      "forest"
    ]
  },
  {
    "name": "Giant Badger",
    "size": "M",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": 10,
    "hp": 13,
    "speed": "Walk 30, Burrow 10",
    "str": 13,
    "dex": 10,
    "con": 15,
    "int": 2,
    "wis": 12,
    "cha": 5,
    "senses": "darkvision 30 ft.",
    "passive": 11,
    "cr": "1/4",
    "trait": [
      {
        "Name": "Keen Smell",
        "Text": "The badger has advantage on Wisdom (Perception) checks that rely on smell."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The badger makes two attacks: one with its bite and one with its claws."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one target. Hit:4 (1d6 + 1) piercing damage."
      },
      {
        "Name": "Claws",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one target. Hit:6 (2d4 + 1) slashing damage."
      }
    ],
    "environment": [
      "forest"
    ]
  },
  {
    "name": "Giant Bat",
    "size": "L",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": 13,
    "hp": 22,
    "speed": "Walk 10, Fly 60",
    "str": 15,
    "dex": 16,
    "con": 11,
    "int": 2,
    "wis": 12,
    "cha": 6,
    "senses": "blindsight 60 ft.",
    "passive": 11,
    "cr": "1/4",
    "trait": [
      {
        "Name": "Echolocation",
        "Text": "The bat can't use its blindsight while deafened."
      },
      {
        "Name": "Keen Hearing",
        "Text": "The bat has advantage on Wisdom (Perception) checks that rely on hearing."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one creature. Hit:5 (1d6 + 2) piercing damage."
      }
    ],
    "environment": [
      "underdark",
      "forest"
    ]
  },
  {
    "name": "Giant Boar",
    "size": "L",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": "12 natural armor",
    "hp": 42,
    "speed": "Walk 40",
    "str": 17,
    "dex": 10,
    "con": 16,
    "int": 2,
    "wis": 7,
    "cha": 5,
    "passive": 8,
    "cr": "2",
    "trait": [
      {
        "Name": "Charge",
        "Text": "If the boar moves at least 20 feet straight toward a target and then hits it with a tusk attack on the same turn, the target takes an extra 7 (2d6) slashing damage. If the target is a creature, it must succeed on a 13 Strength saving throw or be knocked prone."
      },
      {
        "Name": "Relentless (Recharges after a Short or Long Rest)",
        "Text": "If the boar takes 10 damage or less that would reduce it to 0 hit points, it is reduced to 1 hit point instead."
      }
    ],
    "action": [
      {
        "Name": "Tusk",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:10 (2d6 + 3) slashing damage."
      }
    ],
    "environment": [
      "grassland",
      "forest",
      "hill"
    ]
  },
  {
    "name": "Giant Centipede",
    "size": "S",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": "13 natural armor",
    "hp": 4,
    "speed": "Walk 30, Climb 30",
    "str": 5,
    "dex": 14,
    "con": 12,
    "int": 1,
    "wis": 7,
    "cha": 3,
    "senses": "blindsight 30 ft.",
    "passive": 8,
    "cr": "1/4",
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one creature. Hit:4 (1d4 + 2) piercing damage, and the target must succeed on a 11 Constitution saving throw or take 10 (3d6) poison damage. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way."
      }
    ],
    "environment": [
      "underdark",
      "urban"
    ]
  },
  {
    "name": "Giant Constrictor Snake",
    "size": "H",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": 12,
    "hp": 60,
    "speed": "Walk 30, Swim 30",
    "str": 19,
    "dex": 14,
    "con": 12,
    "int": 1,
    "wis": 10,
    "cha": 3,
    "skill": "Perception +2",
    "senses": "blindsight 10 ft.",
    "passive": 12,
    "cr": "2",
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 6 to hit, reach 10 ft., one creature. Hit:11 (2d6 + 4) piercing damage."
      },
      {
        "Name": "Constrict",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one creature. Hit:13 (2d8 + 4) bludgeoning damage, and the target is grappled (escape 16). Until this grapple ends, the creature is restrained, and the snake can't constrict another target."
      }
    ],
    "environment": [
      "underwater",
      "underdark",
      "forest",
      "swamp",
      "desert"
    ]
  },
  {
    "name": "Giant Crab",
    "size": "M",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": "15 natural armor",
    "hp": 13,
    "speed": "Walk 30, Swim 30",
    "str": 13,
    "dex": 15,
    "con": 11,
    "int": 1,
    "wis": 9,
    "cha": 3,
    "skill": "Stealth +4",
    "senses": "blindsight 30 ft.",
    "passive": 9,
    "cr": "1/8",
    "trait": [
      {
        "Name": "Amphibious",
        "Text": "The crab can breathe air and water."
      }
    ],
    "action": [
      {
        "Name": "Claw",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one target. Hit:4 (1d6 + 1) bludgeoning damage, and the target is grappled (escape 11). The crab has two claws, each of which can grapple only one target."
      }
    ],
    "environment": [
      "coastal"
    ]
  },
  {
    "name": "Giant Crocodile",
    "size": "H",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": "14 natural armor",
    "hp": 85,
    "speed": "Walk 30, Swim 50",
    "str": 21,
    "dex": 9,
    "con": 17,
    "int": 2,
    "wis": 10,
    "cha": 7,
    "skill": "Stealth +5",
    "passive": 10,
    "cr": "5",
    "trait": [
      {
        "Name": "Hold Breath",
        "Text": "The crocodile can hold its breath for 30 minutes."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The crocodile makes two attacks: one with its bite and one with its tail."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 8 to hit, reach 5 ft., one target. Hit:21 (3d10 + 5) piercing damage, and the target is grappled (escape 16). Until this grapple ends, the target is restrained, and the crocodile can't bite another target."
      },
      {
        "Name": "Tail",
        "Text": "Melee Weapon 8 to hit, reach 10 ft., one target not grappled by the crocodile. Hit:14 (2d8 + 5) bludgeoning damage. If the target is a creature, it must succeed on a 16 Strength saving throw or be knocked prone."
      }
    ],
    "environment": [
      "swamp"
    ]
  },
  {
    "name": "Giant Eagle",
    "size": "L",
    "type": "beast",
    "alignment": "Neutral Good",
    "ac": 13,
    "hp": 26,
    "speed": "Walk 10, Fly 80",
    "str": 16,
    "dex": 17,
    "con": 13,
    "int": 8,
    "wis": 14,
    "cha": 10,
    "skill": "Perception +4",
    "passive": 14,
    "languages": "Giant Eagle, understands Common and Auran but can't speak them",
    "cr": "1",
    "trait": [
      {
        "Name": "Keen Sight",
        "Text": "The eagle has advantage on Wisdom (Perception) checks that rely on sight."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The eagle makes two attacks: one with its beak and one with its talons."
      },
      {
        "Name": "Beak",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:6 (1d6 + 3) piercing damage."
      },
      {
        "Name": "Talons",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:10 (2d6 + 3) slashing damage."
      }
    ],
    "environment": [
      "mountain",
      "grassland",
      "hill",
      "coastal"
    ]
  },
  {
    "name": "Giant Elk",
    "size": "H",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": "14 natural armor",
    "hp": 42,
    "speed": "Walk 60",
    "str": 19,
    "dex": 16,
    "con": 14,
    "int": 7,
    "wis": 14,
    "cha": 10,
    "skill": "Perception +4",
    "passive": 14,
    "languages": "Giant Elk, understands Common, Elvish, Sylvan but can't speak them",
    "cr": "2",
    "trait": [
      {
        "Name": "Charge",
        "Text": "If the elk moves at least 20 feet straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 7 (2d6) damage. If the target is a creature, it must succeed on a 14 Strength saving throw or be knocked prone."
      }
    ],
    "action": [
      {
        "Name": "Ram",
        "Text": "Melee Weapon 6 to hit, reach 10 ft., one target. Hit:11 (2d6 + 4) bludgeoning damage."
      },
      {
        "Name": "Hooves",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one prone creature. Hit:22 (4d8 + 4) bludgeoning damage."
      }
    ],
    "environment": [
      "mountain",
      "grassland",
      "forest",
      "hill"
    ]
  },
  {
    "name": "Giant Fire Beetle",
    "size": "S",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": "13 natural armor",
    "hp": 4,
    "speed": "Walk 30",
    "str": 8,
    "dex": 10,
    "con": 12,
    "int": 1,
    "wis": 7,
    "cha": 3,
    "senses": "blindsight 30 ft.",
    "passive": 8,
    "cr": "0",
    "trait": [
      {
        "Name": "Illumination",
        "Text": "The beetle sheds bright light in a 10-foot radius and dim light for an additional 10 ft.."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 1 to hit, reach 5 ft., one target. Hit:2 (1d6 - 1) slashing damage."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Giant Frog",
    "size": "M",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": 11,
    "hp": 18,
    "speed": "Walk 30, Swim 30",
    "str": 12,
    "dex": 13,
    "con": 11,
    "int": 2,
    "wis": 10,
    "cha": 3,
    "skill": "Perception +2, Stealth +3",
    "senses": "darkvision 30 ft.",
    "passive": 12,
    "cr": "1/4",
    "trait": [
      {
        "Name": "Amphibious",
        "Text": "The frog can breathe air and water."
      },
      {
        "Name": "Standing Leap",
        "Text": "The frog's long jump is up to 20 feet and its high jump is up to 10 feet, with or without a running start."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one target. Hit:4 (1d6 + 1) piercing damage, and the target is grappled (escape 11). Until this grapple ends, the target is restrained, and the frog can't bite another target."
      },
      {
        "Name": "Swallow",
        "Text": "The frog makes one bite attack against a Small or smaller target it is grappling. If the attack hits, the target is swallowed, and the grapple ends. The swallowed target is blinded and restrained, it has total cover against attacks and other effects outside the frog, and it takes 5 (2d4) acid damage at the start of each of the frog's turns. The frog can have only one target swallowed at a time. If the frog dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 5 feet of movement, exiting prone."
      }
    ],
    "environment": [
      "forest",
      "swamp"
    ]
  },
  {
    "name": "Giant Goat",
    "size": "L",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": "11 natural armor",
    "hp": 19,
    "speed": "Walk 40",
    "str": 17,
    "dex": 11,
    "con": 12,
    "int": 3,
    "wis": 12,
    "cha": 6,
    "passive": 11,
    "cr": "1/2",
    "trait": [
      {
        "Name": "Charge",
        "Text": "If the goat moves at least 20 feet straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 5 (2d4) bludgeoning damage. If the target is a creature, it must succeed on a 13 Strength saving throw or be knocked prone."
      },
      {
        "Name": "Sure-Footed",
        "Text": "The goat has advantage on Strength and Dexterity saving throws made against effects that would knock it prone."
      }
    ],
    "action": [
      {
        "Name": "Ram",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:8 (2d4 + 3) bludgeoning damage."
      }
    ],
    "environment": [
      "mountain",
      "grassland",
      "hill"
    ]
  },
  {
    "name": "Giant Hyena",
    "size": "L",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": 12,
    "hp": 45,
    "speed": "Walk 50",
    "str": 16,
    "dex": 14,
    "con": 14,
    "int": 2,
    "wis": 12,
    "cha": 7,
    "skill": "Perception +3",
    "passive": 13,
    "cr": "1",
    "trait": [
      {
        "Name": "Rampage",
        "Text": "When the hyena reduces a creature to 0 hit points with a melee attack on its turn, the hyena can take a bonus action to move up to half its speed and make a bite attack."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:10 (2d6 + 3) piercing damage."
      }
    ],
    "environment": [
      "grassland",
      "forest",
      "hill",
      "desert"
    ]
  },
  {
    "name": "Giant Lizard",
    "size": "L",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": "12 natural armor",
    "hp": 19,
    "speed": "Walk 30, Climb 30",
    "str": 15,
    "dex": 12,
    "con": 13,
    "int": 2,
    "wis": 10,
    "cha": 5,
    "senses": "darkvision 30 ft.",
    "passive": 10,
    "cr": "1/4",
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:6 (1d8 + 2) piercing damage."
      }
    ],
    "environment": [
      "underdark",
      "forest",
      "swamp",
      "desert",
      "coastal"
    ]
  },
  {
    "name": "Giant Octopus",
    "size": "L",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": 11,
    "hp": 52,
    "speed": "Walk 10, Swim 60",
    "str": 17,
    "dex": 13,
    "con": 13,
    "int": 4,
    "wis": 10,
    "cha": 4,
    "skill": "Perception +4, Stealth +5",
    "senses": "darkvision 60 ft.",
    "passive": 14,
    "cr": "1",
    "trait": [
      {
        "Name": "Hold Breath",
        "Text": "While out of water, the octopus can hold its breath for 1 hour."
      },
      {
        "Name": "Underwater Camouflage",
        "Text": "The octopus has advantage on Dexterity (Stealth) checks made while underwater."
      },
      {
        "Name": "Water Breathing",
        "Text": "The octopus can breathe only underwater."
      }
    ],
    "action": [
      {
        "Name": "Tentacles",
        "Text": "Melee Weapon 5 to hit, reach 15 ft., one target. Hit:10 (2d6 + 3) bludgeoning damage. If the target is a creature, it is grappled (escape 16). Until this grapple ends, the target is restrained, and the octopus can't use its tentacles on another target."
      },
      {
        "Name": "Ink Cloud (Recharges after a Short or Long Rest)",
        "Text": "A 20-foot-radius cloud of ink extends all around the octopus if it is underwater. The area is heavily obscured for 1 minute, although a significant current can disperse the ink. After releasing the ink, the octopus can use the Dash action as a bonus action."
      }
    ],
    "environment": [
      "underwater"
    ]
  },
  {
    "name": "Giant Owl",
    "size": "L",
    "type": "beast",
    "alignment": "Neutral",
    "ac": 12,
    "hp": 19,
    "speed": "Walk 5, Fly 60",
    "str": 13,
    "dex": 15,
    "con": 12,
    "int": 8,
    "wis": 13,
    "cha": 10,
    "skill": "Perception +5, Stealth +4",
    "senses": "darkvision 120 ft.",
    "passive": 15,
    "languages": "Giant Owl, understands Common, Elvish, and Sylvan but can't speak them",
    "cr": "1/4",
    "trait": [
      {
        "Name": "Flyby",
        "Text": "The owl doesn't provoke opportunity attacks when it flies out of an enemy's reach."
      },
      {
        "Name": "Keen Hearing and Sight",
        "Text": "The owl has advantage on Wisdom (Perception) checks that rely on hearing or sight."
      }
    ],
    "action": [
      {
        "Name": "Talons",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one target. Hit:8 (2d6 + 1) slashing damage."
      }
    ],
    "environment": [
      "forest",
      "hill",
      "arctic"
    ]
  },
  {
    "name": "Giant Poisonous Snake",
    "size": "M",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": 14,
    "hp": 11,
    "speed": "Walk 30, Swim 30",
    "str": 10,
    "dex": 18,
    "con": 13,
    "int": 2,
    "wis": 10,
    "cha": 3,
    "skill": "Perception +2",
    "senses": "blindsight 10 ft.",
    "passive": 12,
    "cr": "1/4",
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 6 to hit, reach 10 ft., one target. Hit:6 (1d4 + 4) piercing damage, and the target must make a 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one."
      }
    ],
    "environment": [
      "underdark",
      "grassland",
      "forest",
      "swamp",
      "urban",
      "desert"
    ]
  },
  {
    "name": "Giant Rat",
    "size": "S",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": 12,
    "hp": 7,
    "speed": "Walk 30",
    "str": 7,
    "dex": 15,
    "con": 11,
    "int": 2,
    "wis": 10,
    "cha": 4,
    "senses": "darkvision 60 ft.",
    "passive": 10,
    "cr": "1/8",
    "trait": [
      {
        "Name": "Keen Smell",
        "Text": "The rat has advantage on Wisdom (Perception) checks that rely on smell."
      },
      {
        "Name": "Pack Tactics",
        "Text": "The rat has advantage on an attack roll against a creature if at least one of the rat's allies is within 5 feet of the creature and the ally isn't incapacitated."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:4 (1d4 + 2) piercing damage."
      }
    ],
    "environment": [
      "underdark",
      "forest",
      "swamp",
      "urban"
    ]
  },
  {
    "name": "Giant Scorpion",
    "size": "L",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": "15 natural armor",
    "hp": 52,
    "speed": "Walk 40",
    "str": 15,
    "dex": 13,
    "con": 15,
    "int": 1,
    "wis": 9,
    "cha": 3,
    "senses": "blindsight 60 ft.",
    "passive": 9,
    "cr": "3",
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The scorpion makes three attacks: two with its claws and one with its sting."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:6 (1d8 + 2) bludgeoning damage, and the target is grappled (escape 12). The scorpion has two claws, each of which can grapple only one target."
      },
      {
        "Name": "Sting",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one creature. Hit:7 (1d10 + 2) piercing damage, and the target must make a 12 Constitution saving throw, taking 22 (4d10) poison damage on a failed save, or half as much damage on a successful one."
      }
    ],
    "environment": [
      "desert"
    ]
  },
  {
    "name": "Giant Sea Horse",
    "size": "L",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": "13 natural armor",
    "hp": 16,
    "speed": "Walk 0, Swim 40",
    "str": 12,
    "dex": 15,
    "con": 11,
    "int": 2,
    "wis": 12,
    "cha": 5,
    "passive": 11,
    "cr": "1/2",
    "trait": [
      {
        "Name": "Charge",
        "Text": "If the sea horse moves at least 20 feet straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 7 (2d6) bludgeoning damage. If the target is a creature, it must succeed on a 11 Strength saving throw or be knocked prone."
      },
      {
        "Name": "Water Breathing",
        "Text": "The sea horse can breathe only underwater."
      }
    ],
    "action": [
      {
        "Name": "Ram",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one target. Hit:4 (1d6 + 1) bludgeoning damage."
      }
    ],
    "environment": [
      "underwater"
    ]
  },
  {
    "name": "Giant Shark",
    "size": "H",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": "13 natural armor",
    "hp": 126,
    "speed": "Swim 50",
    "str": 23,
    "dex": 11,
    "con": 21,
    "int": 1,
    "wis": 10,
    "cha": 5,
    "skill": "Perception +3",
    "senses": "blindsight 60 ft.",
    "passive": 13,
    "cr": "5",
    "trait": [
      {
        "Name": "Blood Frenzy",
        "Text": "The shark has advantage on melee attack rolls against any creature that doesn't have all its hit points."
      },
      {
        "Name": "Water Breathing",
        "Text": "The shark can breathe only underwater."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 9 to hit, reach 5 ft., one target. Hit:22 (3d10 + 6) piercing damage."
      }
    ],
    "environment": [
      "underwater"
    ]
  },
  {
    "name": "Giant Spider",
    "size": "L",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": "14 natural armor",
    "hp": 26,
    "speed": "Walk 30, Climb 30",
    "str": 14,
    "dex": 16,
    "con": 12,
    "int": 2,
    "wis": 11,
    "cha": 4,
    "skill": "Stealth +7",
    "senses": "blindsight 10 ft., darkvision 60 ft.",
    "passive": 10,
    "cr": "1",
    "trait": [
      {
        "Name": "Spider Climb",
        "Text": "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
      },
      {
        "Name": "Web Sense",
        "Text": "While in contact with a web, the spider knows the exact location of any other creature in contact with the same web."
      },
      {
        "Name": "Web Walker",
        "Text": "The spider ignores movement restrictions caused by webbing."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one creature. Hit:7 (1d8 + 3) piercing damage, and the target must make a 11 Constitution saving throw, taking 9 (2d8) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way."
      },
      {
        "Name": "Web (Recharge 5-6)",
        "Text": "Ranged Weapon 5 to hit, range 30/60 ft., one creature. Hit:The target is restrained by webbing. As an action, the restrained target can make a 12 Strength check, bursting the webbing on a success. The webbing can also be attacked and destroyed (AC 10; hp 5; vulnerability to fire damage; immunity to bludgeoning, poison, and psychic damage)."
      }
    ],
    "environment": [
      "underdark",
      "forest",
      "swamp",
      "urban",
      "desert"
    ]
  },
  {
    "name": "Giant Toad",
    "size": "L",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": 11,
    "hp": 39,
    "speed": "Walk 20, Swim 40",
    "str": 15,
    "dex": 13,
    "con": 13,
    "int": 2,
    "wis": 10,
    "cha": 3,
    "senses": "darkvision 30 ft.",
    "passive": 10,
    "cr": "1",
    "trait": [
      {
        "Name": "Amphibious",
        "Text": "The toad can breathe air and water."
      },
      {
        "Name": "Standing Leap",
        "Text": "The toad's long jump is up to 20 feet and its high jump is up to 10 feet, with or without a running start."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:7 (1d10 + 2) piercing damage plus 5 (1d10) poison damage, and the target is grappled (escape 13). Until this grapple ends, the target is restrained, and the toad can't bite another target."
      },
      {
        "Name": "Swallow",
        "Text": "The toad makes one bite attack against a Medium or smaller target it is grappling. If the attack hits, the target is swallowed, and the grapple ends. The swallowed target is blinded and restrained, it has total cover against attacks and other effects outside the toad, and it takes 10 (3d6) acid damage at the start of each of the toad's turns. The toad can have only one target swallowed at a time."
      }
    ],
    "environment": [
      "underdark",
      "forest",
      "swamp",
      "desert",
      "coastal"
    ]
  },
  {
    "name": "Giant Vulture",
    "size": "L",
    "type": "beast",
    "alignment": "Neutral Evil",
    "ac": 10,
    "hp": 22,
    "speed": "Walk 10, Fly 60",
    "str": 15,
    "dex": 10,
    "con": 15,
    "int": 6,
    "wis": 12,
    "cha": 7,
    "skill": "Perception +3",
    "passive": 13,
    "languages": "understands Common but can't speak",
    "cr": "1",
    "trait": [
      {
        "Name": "Keen Sight and Smell",
        "Text": "The vulture has advantage on Wisdom (Perception) checks that rely on sight or smell."
      },
      {
        "Name": "Pack Tactics",
        "Text": "The vulture has advantage on an attack roll against a creature if at least one of the vulture's allies is within 5 feet of the creature and the ally isn't incapacitated."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The vulture makes two attacks: one with its beak and one with its talons."
      },
      {
        "Name": "Beak",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:7 (2d4 + 2) piercing damage."
      },
      {
        "Name": "Talons",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:9 (2d6 + 2) slashing damage."
      }
    ],
    "environment": [
      "grassland",
      "desert"
    ]
  },
  {
    "name": "Giant Wasp",
    "size": "M",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": 12,
    "hp": 13,
    "speed": "Walk 10, Fly 50",
    "str": 10,
    "dex": 14,
    "con": 10,
    "int": 1,
    "wis": 10,
    "cha": 3,
    "passive": 10,
    "cr": "1/2",
    "action": [
      {
        "Name": "Sting",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one creature. Hit:5 (1d6 + 2) piercing damage, and the target must make a 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way."
      }
    ],
    "environment": [
      "grassland",
      "forest",
      "urban"
    ]
  },
  {
    "name": "Giant Weasel",
    "size": "M",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": 13,
    "hp": 9,
    "speed": "Walk 40",
    "str": 11,
    "dex": 16,
    "con": 10,
    "int": 4,
    "wis": 12,
    "cha": 5,
    "skill": "Perception +3, Stealth +5",
    "senses": "darkvision 60 ft.",
    "passive": 13,
    "cr": "1/8",
    "trait": [
      {
        "Name": "Keen Hearing and Smell",
        "Text": "The weasel has advantage on Wisdom (Perception) checks that rely on hearing or smell."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:5 (1d4 + 3) piercing damage."
      }
    ],
    "environment": [
      "grassland",
      "forest",
      "hill"
    ]
  },
  {
    "name": "Giant Wolf Spider",
    "size": "M",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": 13,
    "hp": 11,
    "speed": "Walk 40, Climb 40",
    "str": 12,
    "dex": 16,
    "con": 13,
    "int": 3,
    "wis": 12,
    "cha": 4,
    "skill": "Perception +3, Stealth +7",
    "senses": "blindsight 10 ft., darkvision 60 ft.",
    "passive": 13,
    "cr": "1/4",
    "trait": [
      {
        "Name": "Spider Climb",
        "Text": "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
      },
      {
        "Name": "Web Sense",
        "Text": "While in contact with a web, the spider knows the exact location of any other creature in contact with the same web."
      },
      {
        "Name": "Web Walker",
        "Text": "The spider ignores movement restrictions caused by webbing."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one creature. Hit:4 (1d6 + 1) piercing damage, and the target must make a 11 Constitution saving throw, taking 7 (2d6) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way."
      }
    ],
    "environment": [
      "grassland",
      "forest",
      "hill",
      "desert",
      "coastal"
    ]
  },
  {
    "name": "Gibbering Mouther",
    "size": "M",
    "type": "aberration",
    "alignment": "Neutral",
    "ac": 9,
    "hp": 67,
    "speed": "Walk 10, Swim 10",
    "str": 10,
    "dex": 8,
    "con": 16,
    "int": 3,
    "wis": 10,
    "cha": 6,
    "senses": "darkvision 60 ft.",
    "passive": 10,
    "conditionImmune": "prone",
    "cr": "2",
    "trait": [
      {
        "Name": "Aberrant Ground",
        "Text": "The ground in a 10-foot radius around the mouther is doughlike difficult terrain. Each creature that starts its turn in that area must succeed on a 10 Strength saving throw or have its speed reduced to 0 until the start of its next turn."
      },
      {
        "Name": "Gibbering",
        "Text": "The mouther babbles incoherently while it can see any creature and isn't incapacitated. Each creature that starts its turn within 20 feet of the mouther and can hear the gibbering must succeed on a 10 Wisdom saving throw. On a failure, the creature can't take reactions until the start of its next turn and rolls a d8 to determine what it does during its turn. On a 1 to 4, the creature does nothing. On a 5 or 6, the creature takes no action or bonus action and uses all its movement to move in a randomly determined direction. On a 7 or 8, the creature makes a melee attack against a randomly determined creature within its reach or does nothing if it can't make such an attack."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The gibbering mouther makes one bite attack and, if it can, uses its Blinding Spittle."
      },
      {
        "Name": "Bites",
        "Text": "Melee Weapon 2 to hit, reach 5 ft., one creature. Hit:17 (5d6) piercing damage. If the target is Medium or smaller, it must succeed on a 10 Strength saving throw or be knocked prone. If the target is killed by this damage, it is absorbed into the mouther."
      },
      {
        "Name": "Blinding Spittle (Recharge 5-6)",
        "Text": "The mouther spits a chemical glob at a point it can see within 15 feet of it. The glob explodes in a blinding flash of light on impact. Each creature within 5 feet of the flash must succeed on a 13 Dexterity saving throw or be blinded until the end of the mouther's next turn."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Githyanki Knight",
    "size": "M",
    "type": "humanoid (gith)",
    "alignment": "Lawful Evil",
    "ac": "18 plate armor",
    "hp": 91,
    "speed": "Walk 30",
    "str": 16,
    "dex": 14,
    "con": 15,
    "int": 14,
    "wis": 14,
    "cha": 15,
    "save": "Con +5, Int +5, Wis +5",
    "passive": 12,
    "languages": "Gith",
    "cr": "8",
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The githyanki makes two silver greatsword attacks."
      },
      {
        "Name": "Silver Greatsword",
        "Text": "Melee Weapon 9 to hit, reach 5 ft., one target. Hit:13 (2d6 + 6) slashing damage plus 10 (3d6) psychic damage. This is a magic weapon attack. On a critical hit against a target in an astral body (as with the astral projection spell), the githyanki can cut the silvery cord that tethers the target to its material body, instead of dealing damage."
      }
    ],
    "trait": [
      {
        "Name": "Innate Spellcasting (Psionics)",
        "Text": "<br>1/day each: <em>plane shift, telekinesis</em>"
      }
    ]
  },
  {
    "name": "Githyanki Warrior",
    "size": "M",
    "type": "humanoid (gith)",
    "alignment": "Lawful Evil",
    "ac": "17 half plate armor",
    "hp": 49,
    "speed": "Walk 30",
    "str": 15,
    "dex": 14,
    "con": 12,
    "int": 13,
    "wis": 13,
    "cha": 10,
    "save": "Con +3, Int +3, Wis +3",
    "passive": 11,
    "languages": "Gith",
    "cr": "3",
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The githyanki makes two greatsword attacks."
      },
      {
        "Name": "Greatsword",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:9 (2d6 + 2) slashing damage plus 7 (2d6) psychic damage."
      }
    ],
    "trait": [
      {
        "Name": "Innate Spellcasting (Psionics)",
        "Text": "<br>3/day each: <em>jump, misty step, nondetection (self only)</em>"
      }
    ]
  },
  {
    "name": "Githzerai Monk",
    "size": "M",
    "type": "humanoid (gith)",
    "alignment": "Lawful Neutral",
    "ac": 14,
    "hp": 38,
    "speed": "Walk 30",
    "str": 12,
    "dex": 15,
    "con": 12,
    "int": 13,
    "wis": 14,
    "cha": 10,
    "save": "Str +3, Dex +4, Int +3, Wis +4",
    "skill": "Insight +4, Perception +4",
    "passive": 14,
    "languages": "Gith",
    "cr": "2",
    "trait": [
      {
        "Name": "Psychic Defense",
        "Text": "While the githzerai is wearing no armor and wielding no shield, its AC includes its Wisdom modifier."
      },
      {
        "Name": "Innate Spellcasting (Psionics)",
        "Text": "<br>3/day each: <em>feather fall, jump, see invisibility, shield</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The githzerai makes two unarmed strikes."
      },
      {
        "Name": "Unarmed Strike",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:6 (1d8 + 2) bludgeoning damage plus 9 (2d8) psychic damage. This is a magic weapon attack."
      }
    ]
  },
  {
    "name": "Githzerai Zerth",
    "size": "M",
    "type": "humanoid (gith)",
    "alignment": "Lawful Neutral",
    "ac": 17,
    "hp": 84,
    "speed": "Walk 30",
    "str": 13,
    "dex": 18,
    "con": 15,
    "int": 16,
    "wis": 17,
    "cha": 12,
    "save": "Str +4, Dex +7, Int +6, Wis +6",
    "skill": "Arcana +6, Insight +6, Perception +6",
    "passive": 16,
    "languages": "Gith",
    "cr": "6",
    "trait": [
      {
        "Name": "Psychic Defense",
        "Text": "While the githzerai is wearing no armor and wielding no shield, its AC includes its Wisdom modifier."
      },
      {
        "Name": "Innate Spellcasting (Psionics)",
        "Text": "<br>1/day each: <em>phantasmal killer, plane shift</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The githzerai makes two unarmed strikes."
      },
      {
        "Name": "Unarmed Strike",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:11 (2d6 + 4) bludgeoning damage plus 13 (3d8) psychic damage. This is a magic weapon attack."
      }
    ]
  },
  {
    "name": "Glabrezu",
    "size": "L",
    "type": "fiend (demon)",
    "alignment": "Chaotic Evil",
    "ac": "17 natural armor",
    "hp": 157,
    "speed": "Walk 40",
    "str": 20,
    "dex": 15,
    "con": 21,
    "int": 19,
    "wis": 17,
    "cha": 16,
    "save": "Str +9, Con +9, Wis +7, Cha +7",
    "senses": "truesight 120 ft.",
    "passive": 13,
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
    "cr": "9",
    "trait": [
      {
        "Name": "Magic Resistance",
        "Text": "The glabrezu has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day each: <em>confusion, fly, power word stun</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The glabrezu makes four attacks: two with its pincers and two with its fists. Alternatively, it makes two attacks with its pincers and casts one spell."
      },
      {
        "Name": "Pincer",
        "Text": "Melee Weapon 9 to hit, reach 10 ft., one target. Hit:16 (2d10 + 5) bludgeoning damage. If the target is a Medium or smaller creature, it is grappled (escape 15). The glabrezu has two pincers, each of which can grapple only one target."
      },
      {
        "Name": "Fist",
        "Text": "Melee Weapon 9 to hit, reach 5 ft., one target. Hit:7 (2d4 + 2) bludgeoning damage."
      }
    ]
  },
  {
    "name": "Gladiator",
    "size": "M",
    "type": "humanoid (any race)",
    "alignment": "Any",
    "ac": "16 studded leather armor",
    "hp": 112,
    "speed": "Walk 30",
    "str": 18,
    "dex": 15,
    "con": 16,
    "int": 10,
    "wis": 12,
    "cha": 15,
    "save": "Str +7, Dex +5, Con +6",
    "skill": "Athletics +10, Intimidation +5",
    "passive": 11,
    "languages": "any one language (usually Common)",
    "cr": "5",
    "trait": [
      {
        "Name": "Brave",
        "Text": "The gladiator has advantage on saving throws against being frightened."
      },
      {
        "Name": "Brute",
        "Text": "A melee weapon deals one extra die of its damage when the gladiator hits with it (included in the attack)."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The gladiator makes three melee attacks or two ranged attacks."
      },
      {
        "Name": "Spear",
        "Text": "Melee or Ranged Weapon 7 to hit, reach 5 ft. and range 20/60 ft., one target. Hit:11 (2d6 + 4) piercing damage, or 13 (2d8 + 4) piercing damage if used with two hands to make a melee attack."
      },
      {
        "Name": "Shield Bash",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one creature. Hit:9 (2d4 + 4) bludgeoning damage. If the target is a Medium or smaller creature, it must succeed on a 15 Strength saving throw or be knocked prone."
      }
    ],
    "reaction": [
      {
        "Name": "Parry",
        "Text": "The gladiator adds 3 to its AC against one melee attack that would hit it. To do so, the gladiator must see the attacker and be wielding a melee weapon."
      }
    ]
  },
  {
    "name": "Gnoll",
    "size": "M",
    "type": "humanoid (gnoll)",
    "alignment": "Chaotic Evil",
    "ac": "15 hide armor",
    "hp": 22,
    "speed": "Walk 30",
    "str": 14,
    "dex": 12,
    "con": 11,
    "int": 6,
    "wis": 10,
    "cha": 7,
    "senses": "darkvision 60 ft.",
    "passive": 10,
    "languages": "Gnoll",
    "cr": "1/2",
    "trait": [
      {
        "Name": "Rampage",
        "Text": "When the gnoll reduces a creature to 0 hit points with a melee attack on its turn, the gnoll can take a bonus action to move up to half its speed and make a bite attack."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one creature. Hit:4 (1d4 + 2) piercing damage."
      },
      {
        "Name": "Spear",
        "Text": "Melee or Ranged Weapon 4 to hit, reach 5 ft. or range 20/60 ft., one target. Hit:5 (1d6 + 2) piercing damage, or 6 (1d8 + 2) piercing damage if used with two hands to make a melee attack."
      },
      {
        "Name": "Longbow",
        "Text": "Ranged Weapon 3 to hit, range 150/600 ft., one target. Hit:5 (1d8 + 1) piercing damage."
      }
    ],
    "environment": [
      "grassland",
      "forest",
      "hill",
      "desert"
    ]
  },
  {
    "name": "Gnoll Fang of Yeenoghu",
    "size": "M",
    "type": "fiend (gnoll)",
    "alignment": "Chaotic Evil",
    "ac": "14 hide armor",
    "hp": 65,
    "speed": "Walk 30",
    "str": 17,
    "dex": 15,
    "con": 15,
    "int": 10,
    "wis": 11,
    "cha": 13,
    "save": "Con +4, Wis +2, Cha +3",
    "senses": "darkvision 60 ft.",
    "passive": 10,
    "languages": "Abyssal, Gnoll",
    "cr": "4",
    "trait": [
      {
        "Name": "Rampage",
        "Text": "When the gnoll reduces a creature to 0 hit points with a melee attack on its turn, the gnoll can take a bonus action to move up to half its speed and make a bite attack."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The gnoll makes three attacks: one with its bite and two with its claws."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one creature. Hit:6 (1d6 + 3) piercing damage, and the target must succeed on a 12 Constitution saving throw or take 7 (2d6) poison damage."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:7 (1d8 + 3) slashing damage."
      }
    ],
    "environment": [
      "grassland",
      "forest",
      "hill",
      "desert"
    ]
  },
  {
    "name": "Gnoll Pack Lord",
    "size": "M",
    "type": "humanoid (gnoll)",
    "alignment": "Chaotic Evil",
    "ac": "15 chain shirt",
    "hp": 49,
    "speed": "Walk 30",
    "str": 16,
    "dex": 14,
    "con": 13,
    "int": 8,
    "wis": 11,
    "cha": 9,
    "senses": "darkvision 60 ft.",
    "passive": 10,
    "languages": "Gnoll",
    "cr": "2",
    "trait": [
      {
        "Name": "Rampage",
        "Text": "When the gnoll reduces a creature to 0 hit points with a melee attack on its turn, the gnoll can take a bonus action to move up to half its speed and make a bite attack."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The gnoll makes two attacks, either with its glaive or its longbow, and uses its Incite Rampage if it can."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one creature. Hit:5 (1d4 + 3) piercing damage."
      },
      {
        "Name": "Glaive",
        "Text": "Melee Weapon 5 to hit, reach 10 ft., one target. Hit:8 (1d10 + 3) slashing damage."
      },
      {
        "Name": "Longbow",
        "Text": "Ranged Weapon 4 to hit, range 150/600 ft., one target. Hit:6 (1d8 + 2) piercing damage."
      },
      {
        "Name": "Incite Rampage (Recharge 5-6)",
        "Text": "One creature the gnoll can see within 30 feet of it can use its reaction to make a melee attack if it can hear the gnoll and has the Rampage trait."
      }
    ],
    "environment": [
      "grassland",
      "forest",
      "hill",
      "desert"
    ]
  },
  {
    "name": "Goat",
    "size": "M",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": 10,
    "hp": 4,
    "speed": "Walk 40",
    "str": 12,
    "dex": 10,
    "con": 11,
    "int": 2,
    "wis": 10,
    "cha": 5,
    "passive": 10,
    "cr": "0",
    "trait": [
      {
        "Name": "Charge",
        "Text": "If the goat moves at least 20 feet straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 2 (1d4) bludgeoning damage. If the target is a creature, it must succeed on a 10 Strength saving throw or be knocked prone."
      },
      {
        "Name": "Sure-Footed",
        "Text": "The goat has advantage on Strength and Dexterity saving throws made against effects that would knock it prone."
      }
    ],
    "action": [
      {
        "Name": "Ram",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one target. Hit:3 (1d4 + 1) bludgeoning damage."
      }
    ],
    "environment": [
      "mountain",
      "grassland",
      "hill",
      "urban"
    ]
  },
  {
    "name": "Goblin",
    "size": "S",
    "type": "humanoid (goblinoid)",
    "alignment": "Neutral Evil",
    "ac": "15 leather armor",
    "hp": 7,
    "speed": "Walk 30",
    "str": 8,
    "dex": 14,
    "con": 10,
    "int": 10,
    "wis": 8,
    "cha": 8,
    "skill": "Stealth +6",
    "senses": "darkvision 60 ft.",
    "passive": 9,
    "languages": "Common, Goblin",
    "cr": "1/4",
    "trait": [
      {
        "Name": "Nimble Escape",
        "Text": "The goblin can take the Disengage or Hide action as a bonus action on each of its turns."
      }
    ],
    "action": [
      {
        "Name": "Scimitar",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:5 (1d6 + 2) slashing damage."
      },
      {
        "Name": "Shortbow",
        "Text": "Ranged Weapon 4 to hit, range 80/320 ft., one target. Hit:5 (1d6 + 2) piercing damage."
      }
    ],
    "environment": [
      "underdark",
      "grassland",
      "forest",
      "hill"
    ],
    "altArt": [
      {
        "name": "Goblin",
        "source": "RMBRE"
      }
    ]
  },
  {
    "name": "Goblin Boss",
    "size": "S",
    "type": "humanoid (goblinoid)",
    "alignment": "Neutral Evil",
    "ac": "17 chain shirt",
    "hp": 21,
    "speed": "Walk 30",
    "str": 10,
    "dex": 14,
    "con": 10,
    "int": 10,
    "wis": 8,
    "cha": 10,
    "skill": "Stealth +6",
    "senses": "darkvision 60 ft.",
    "passive": 9,
    "languages": "Common, Goblin",
    "cr": "1",
    "trait": [
      {
        "Name": "Nimble Escape",
        "Text": "The goblin can take the Disengage or Hide action as a bonus action on each of its turns."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The goblin makes two attacks with its scimitar. The second attack has disadvantage."
      },
      {
        "Name": "Scimitar",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:5 (1d6 + 2) slashing damage."
      },
      {
        "Name": "Javelin",
        "Text": "Melee or Ranged Weapon 2 to hit, reach 5 ft. or range 30/120 ft., one target. Hit:3 (1d6) piercing damage."
      }
    ],
    "reaction": [
      {
        "Name": "Redirect Attack",
        "Text": "When a creature the goblin can see targets it with an attack, the goblin chooses another goblin within 5 feet of it. The two goblins swap places, and the chosen goblin becomes the target instead."
      }
    ],
    "environment": [
      "underdark",
      "grassland",
      "forest",
      "hill"
    ]
  },
  {
    "name": "Gold Dragon Wyrmling",
    "size": "M",
    "type": "dragon",
    "alignment": "Lawful Good",
    "ac": "17 natural armor",
    "hp": 60,
    "speed": "Walk 30, Fly 60, Swim 30",
    "str": 19,
    "dex": 14,
    "con": 17,
    "int": 14,
    "wis": 11,
    "cha": 16,
    "save": "Dex +4, Con +5, Wis +2, Cha +5",
    "skill": "Perception +4, Stealth +4",
    "senses": "blindsight 10 ft., darkvision 60 ft.",
    "passive": 14,
    "immune": "fire",
    "languages": "Draconic",
    "cr": "3",
    "trait": [
      {
        "Name": "Amphibious",
        "Text": "The dragon can breathe air and water."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:9 (1d10 + 4) piercing damage."
      },
      {
        "Name": "Breath Weapons (Recharge 5-6)",
        "Text": "The dragon uses one of the following breath weapons."
      }
    ]
  },
  {
    "name": "Gorgon",
    "size": "L",
    "type": "monstrosity",
    "alignment": "Unaligned",
    "ac": "19 natural armor",
    "hp": 114,
    "speed": "Walk 40",
    "str": 20,
    "dex": 11,
    "con": 18,
    "int": 2,
    "wis": 12,
    "cha": 7,
    "skill": "Perception +4",
    "senses": "darkvision 60 ft.",
    "passive": 14,
    "conditionImmune": "petrified",
    "cr": "5",
    "trait": [
      {
        "Name": "Trampling Charge",
        "Text": "If the gorgon moves at least 20 feet straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a 16 Strength saving throw or be knocked prone. If the target is prone, the gorgon can make one attack with its hooves against it as a bonus action."
      }
    ],
    "action": [
      {
        "Name": "Gore",
        "Text": "Melee Weapon 8 to hit, reach 5 ft., one target. Hit:18 (2d12 + 5) piercing damage."
      },
      {
        "Name": "Hooves",
        "Text": "Melee Weapon 8 to hit, reach 5 ft., one target. Hit:16 (2d10 + 5) bludgeoning damage."
      },
      {
        "Name": "Petrifying Breath (Recharge 5-6)",
        "Text": "The gorgon exhales petrifying gas in a 30-foot cone. Each creature in that area must succeed on a 13 Constitution saving throw. On a failed save, a target begins to turn to stone and is restrained. The restrained target must repeat the saving throw at the end of its next turn. On a success, the effect ends on the target. On a failure, the target is petrified until freed by the greater restoration spell or other magic."
      }
    ],
    "environment": [
      "grassland",
      "forest",
      "hill"
    ]
  },
  {
    "name": "Goristro",
    "size": "H",
    "type": "fiend (demon)",
    "alignment": "Chaotic Evil",
    "ac": "19 natural armor",
    "hp": 310,
    "speed": "Walk 40",
    "str": 25,
    "dex": 11,
    "con": 25,
    "int": 6,
    "wis": 13,
    "cha": 14,
    "save": "Str +13, Dex +6, Con +13, Wis +7",
    "skill": "Perception +7",
    "senses": "darkvision 120 ft.",
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
    "languages": "Abyssal",
    "cr": "17",
    "trait": [
      {
        "Name": "Charge",
        "Text": "If the goristro moves at least 15 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 38 (7d10) piercing damage. If the target is a creature, it must succeed on a 21 Strength saving throw or be pushed up to 20 feet away and knocked prone."
      },
      {
        "Name": "Labyrinthine Recall",
        "Text": "The goristro can perfectly recall any path it has traveled."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The goristro has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Siege Monster",
        "Text": "The goristro deals double damage to objects and structures."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The goristro makes three attacks: two with its fists and one with its hoof."
      },
      {
        "Name": "Fist",
        "Text": "Melee Weapon 13 to hit, reach 10 ft., one target. Hit:20 (3d8 + 7) bludgeoning damage."
      },
      {
        "Name": "Hoof",
        "Text": "Melee Weapon 13 to hit, reach 5 ft., one target. Hit:23 (3d10 + 7) bludgeoning damage. If the target is a creature, it must succeed on a 21 Strength saving throw or be knocked prone."
      },
      {
        "Name": "Gore",
        "Text": "Melee Weapon 13 to hit, reach 10 ft., one target. Hit:45 (7d10 + 7) piercing damage."
      }
    ]
  },
  {
    "name": "Gray Ooze",
    "size": "M",
    "type": "ooze",
    "alignment": "Unaligned",
    "ac": 8,
    "hp": 22,
    "speed": "Walk 10, Climb 10",
    "str": 12,
    "dex": 6,
    "con": 16,
    "int": 1,
    "wis": 6,
    "cha": 2,
    "skill": "Stealth +2",
    "senses": "blindsight 60 ft. (blind beyond this radius)",
    "passive": 8,
    "resist": [
      "acid",
      "cold",
      "fire"
    ],
    "conditionImmune": "blinded, charmed, deafened, exhaustion, frightened, prone",
    "cr": "1/2",
    "trait": [
      {
        "Name": "Amorphous",
        "Text": "The ooze can move through a space as narrow as 1 inch wide without squeezing."
      },
      {
        "Name": "Corrode Metal",
        "Text": "Any nonmagical weapon made of metal that hits the ooze corrodes. After dealing damage, the weapon takes a permanent and cumulative −1 penalty to damage rolls. If its penalty drops to −5, the weapon is destroyed. Nonmagical ammunition made of metal that hits the ooze is destroyed after dealing damage."
      },
      {
        "Name": "False Appearance",
        "Text": "While the ooze remains motionless, it is indistinguishable from an oily pool or wet rock."
      }
    ],
    "action": [
      {
        "Name": "Pseudopod",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one target. Hit:4 (1d6 + 1) bludgeoning damage plus 7 (2d6) acid damage, and if the target is wearing nonmagical metal armor, its armor is partly corroded and takes a permanent and cumulative −1 penalty to the AC it offers. The armor is destroyed if the penalty reduces its AC to 10."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Gray Slaad",
    "size": "M",
    "type": "aberration (shapechanger)",
    "alignment": "Chaotic Neutral",
    "ac": "18 natural armor",
    "hp": 127,
    "speed": "Walk 30",
    "str": 17,
    "dex": 17,
    "con": 16,
    "int": 13,
    "wis": 8,
    "cha": 14,
    "skill": "Arcana +5, Perception +7",
    "senses": "blindsight 60 ft., darkvision 60 ft.",
    "passive": 17,
    "resist": [
      "acid",
      "cold",
      "fire",
      "lightning",
      "thunder"
    ],
    "languages": "Slaad, telepathy 60 ft.",
    "cr": "9",
    "trait": [
      {
        "Name": "Shapechanger",
        "Text": "The slaad can use its action to polymorph into a Small or Medium humanoid, or back into its true form. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The slaad has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Magic Weapons",
        "Text": "The slaad's weapon attacks are magical."
      },
      {
        "Name": "Regeneration",
        "Text": "The slaad regains 10 hit points at the start of its turn if it has at least 1 hit point."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day: <em>plane shift (self only)</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The slaad makes three attacks: one with its bite and two with its claws or greatsword."
      },
      {
        "Name": "Bite (Slaad Form Only)",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:6 (1d6 + 3) piercing damage."
      },
      {
        "Name": "Claws (Slaad Form Only)",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:8 (1d10 + 3) slashing damage."
      },
      {
        "Name": "Greatsword",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:10 (2d6 + 3) slashing damage."
      }
    ],
    "environment": [
      "urban"
    ]
  },
  {
    "name": "Green Dragon Wyrmling",
    "size": "M",
    "type": "dragon",
    "alignment": "Lawful Evil",
    "ac": "17 natural armor",
    "hp": 38,
    "speed": "Walk 30, Fly 60, Swim 30",
    "str": 15,
    "dex": 12,
    "con": 13,
    "int": 14,
    "wis": 11,
    "cha": 13,
    "save": "Dex +3, Con +3, Wis +2, Cha +3",
    "skill": "Perception +4, Stealth +3",
    "senses": "blindsight 10 ft., darkvision 60 ft.",
    "passive": 14,
    "immune": "poison",
    "conditionImmune": "poisoned",
    "languages": "Draconic",
    "cr": "2",
    "trait": [
      {
        "Name": "Amphibious",
        "Text": "The dragon can breathe air and water."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:7 (1d10 + 2) piercing damage plus 3 (1d6) poison damage."
      },
      {
        "Name": "Poison Breath (Recharge 5-6)",
        "Text": "The dragon exhales poisonous gas in a 15-foot cone. Each creature in that area must make a 11 Constitution saving throw, taking 21 (6d6) poison damage on a failed save, or half as much damage on a successful one."
      }
    ]
  },
  {
    "name": "Green Hag",
    "size": "M",
    "type": "fey",
    "alignment": "Neutral Evil",
    "ac": "17 natural armor",
    "hp": 82,
    "speed": "Walk 30",
    "str": 18,
    "dex": 12,
    "con": 16,
    "int": 13,
    "wis": 14,
    "cha": 14,
    "skill": "Arcana +3, Deception +4, Perception +4, Stealth +3",
    "senses": "darkvision 60 ft.",
    "passive": 14,
    "languages": "Common, Draconic, Sylvan",
    "cr": {
      "cr": "3",
      "coven": "5"
    },
    "trait": [
      {
        "Name": "Amphibious",
        "Text": "The hag can breathe air and water."
      },
      {
        "Name": "Mimicry",
        "Text": "The hag can mimic animal sounds and humanoid voices. A creature that hears the sounds can tell they are imitations with a successful 14 Wisdom (Insight) check."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "The hag's innate spellcasting ability is Charisma (spell save DC 12). She can innately cast the following spells, requiring no material components:<br>At will: <em>dancing lights, minor illusion, vicious mockery</em>"
      }
    ],
    "action": [
      {
        "Name": "Claws",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:13 (2d8 + 4) slashing damage."
      },
      {
        "Name": "Illusory Appearance",
        "Text": "The hag covers herself and anything she is wearing or carrying with a magical illusion that makes her look like another creature of her general size and humanoid shape. The illusion ends if the hag takes a bonus action to end it or if she dies."
      },
      {
        "Name": "Invisible Passage",
        "Text": "The hag magically turns invisible until she attacks or casts a spell, or until her concentration ends (as if concentrating on a spell). While invisible, she leaves no physical evidence of her passage, so she can be tracked only by magic. Any equipment she wears or carries is invisible with her."
      }
    ],
    "environment": [
      "forest",
      "swamp",
      "hill"
    ]
  },
  {
    "name": "Green Slaad",
    "size": "L",
    "type": "aberration (shapechanger)",
    "alignment": "Chaotic Neutral",
    "ac": "16 natural armor",
    "hp": 127,
    "speed": "Walk 30",
    "str": 18,
    "dex": 15,
    "con": 16,
    "int": 11,
    "wis": 8,
    "cha": 12,
    "skill": "Arcana +3, Perception +2",
    "senses": "blindsight 30 ft., darkvision 60 ft.",
    "passive": 12,
    "resist": [
      "acid",
      "cold",
      "fire",
      "lightning",
      "thunder"
    ],
    "languages": "Slaad, telepathy 60 ft.",
    "cr": "8",
    "trait": [
      {
        "Name": "Shapechanger",
        "Text": "The slaad can use its action to polymorph into a Small or Medium humanoid, or back into its true form. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The slaad has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Regeneration",
        "Text": "The slaad regains 10 hit points at the start of its turn if it has at least 1 hit point."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day: <em>fireball</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The slaad makes three attacks: one with its bite and two with its claws or staff. Alternatively, it uses its Hurl Flame twice."
      },
      {
        "Name": "Bite (Slaad Form Only)",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:11 (2d6 + 4) piercing damage."
      },
      {
        "Name": "Claw (Slaad Form Only)",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:7 (1d6 + 4) slashing damage."
      },
      {
        "Name": "Staff",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:11 (2d6 + 4) bludgeoning damage."
      },
      {
        "Name": "Hurl Flame",
        "Text": "Ranged Spell 4 to hit, range 60 ft., one target. Hit:10 (3d6) fire damage. The fire ignites flammable objects that aren't being worn or carried."
      }
    ]
  },
  {
    "name": "Grell",
    "size": "M",
    "type": "aberration",
    "alignment": "Neutral Evil",
    "ac": 12,
    "hp": 55,
    "speed": "Walk 10, Fly 30 (hover)",
    "str": 15,
    "dex": 14,
    "con": 13,
    "int": 12,
    "wis": 11,
    "cha": 9,
    "skill": "Perception +4, Stealth +6",
    "senses": "blindsight 60 ft. (blind beyond this radius)",
    "passive": 14,
    "immune": "lightning",
    "conditionImmune": "blinded, prone",
    "languages": "Grell",
    "cr": "3",
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The grell makes two attacks: one with its tentacles and one with its beak."
      },
      {
        "Name": "Tentacles",
        "Text": "Melee Weapon 4 to hit, reach 10 ft., one creature. Hit:7 (1d10 + 2) piercing damage, and the target must succeed on a 11 Constitution saving throw or be poisoned for 1 minute. The poisoned target is paralyzed, and it can repeat the saving throw at the end of each of its turns, ending the effect on a success."
      },
      {
        "Name": "Beak",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:7 (2d4 + 2) piercing damage."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Grick",
    "size": "M",
    "type": "monstrosity",
    "alignment": "Neutral",
    "ac": "14 natural armor",
    "hp": 27,
    "speed": "Walk 30, Climb 30",
    "str": 14,
    "dex": 14,
    "con": 11,
    "int": 3,
    "wis": 14,
    "cha": 5,
    "senses": "darkvision 60 ft.",
    "passive": 12,
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
    "cr": "2",
    "trait": [
      {
        "Name": "Stone Camouflage",
        "Text": "The grick has advantage on Dexterity (Stealth) checks made to hide in rocky terrain."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The grick makes one attack with its tentacles. If that attack hits, the grick can make one beak attack against the same target."
      },
      {
        "Name": "Tentacles",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:9 (2d6 + 2) slashing damage."
      },
      {
        "Name": "Beak",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:5 (1d6 + 2) piercing damage."
      }
    ],
    "environment": [
      "underdark",
      "forest"
    ]
  },
  {
    "name": "Grick Alpha",
    "size": "L",
    "type": "monstrosity",
    "alignment": "Neutral",
    "ac": "18 natural armor",
    "hp": 75,
    "speed": "Walk 30, Climb 30",
    "str": 18,
    "dex": 16,
    "con": 15,
    "int": 4,
    "wis": 14,
    "cha": 9,
    "senses": "darkvision 60 ft.",
    "passive": 12,
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
    "cr": "7",
    "trait": [
      {
        "Name": "Stone Camouflage",
        "Text": "The grick has advantage on Dexterity (Stealth) checks made to hide in rocky terrain."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The grick makes two attacks: one with its tail and one with its tentacles. If it hits with its tentacles, the grick can make one beak attack against the same target."
      },
      {
        "Name": "Tail",
        "Text": "Melee Weapon 7 to hit, reach 10 ft., one target. Hit:11 (2d6 + 4) bludgeoning damage."
      },
      {
        "Name": "Tentacles",
        "Text": "Melee Weapon 7 to hit, reach 10 ft., one target. Hit:22 (4d8 + 4) slashing damage."
      },
      {
        "Name": "Beak",
        "Text": "Melee Weapon 7 to hit, reach 10 ft., one target. Hit:13 (2d8 + 4) piercing damage."
      }
    ],
    "environment": [
      "underdark",
      "forest"
    ]
  },
  {
    "name": "Griffon",
    "size": "L",
    "type": "monstrosity",
    "alignment": "Unaligned",
    "ac": 12,
    "hp": 59,
    "speed": "Walk 30, Fly 80",
    "str": 18,
    "dex": 15,
    "con": 16,
    "int": 2,
    "wis": 13,
    "cha": 8,
    "skill": "Perception +5",
    "senses": "darkvision 60 ft.",
    "passive": 15,
    "cr": "2",
    "trait": [
      {
        "Name": "Keen Sight",
        "Text": "The griffon has advantage on Wisdom (Perception) checks that rely on sight."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The griffon makes two attacks: one with its beak and one with its claws."
      },
      {
        "Name": "Beak",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:8 (1d8 + 4) piercing damage."
      },
      {
        "Name": "Claws",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:11 (2d6 + 4) slashing damage."
      }
    ],
    "environment": [
      "mountain",
      "grassland",
      "hill",
      "coastal",
      "arctic"
    ]
  },
  {
    "name": "Grimlock",
    "size": "M",
    "type": "humanoid (grimlock)",
    "alignment": "Neutral Evil",
    "ac": 11,
    "hp": 11,
    "speed": "Walk 30",
    "str": 16,
    "dex": 12,
    "con": 12,
    "int": 9,
    "wis": 8,
    "cha": 6,
    "skill": "Athletics +5, Perception +3, Stealth +3",
    "senses": "blindsight 30 ft. or 10 ft. while deafened (blind beyond this radius)",
    "passive": 13,
    "conditionImmune": "blinded",
    "languages": "Undercommon",
    "cr": "1/4",
    "trait": [
      {
        "Name": "Blind Senses",
        "Text": "The grimlock can't use its blindsight while deafened and unable to smell."
      },
      {
        "Name": "Keen Hearing and Smell",
        "Text": "The grimlock has advantage on Wisdom (Perception) checks that rely on hearing or smell."
      },
      {
        "Name": "Stone Camouflage",
        "Text": "The grimlock has advantage on Dexterity (Stealth) checks made to hide in rocky terrain."
      }
    ],
    "action": [
      {
        "Name": "Spiked Bone Club",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:5 (1d4 + 3) bludgeoning damage plus 2 (1d4) piercing damage."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Guard",
    "size": "M",
    "type": "humanoid (any race)",
    "alignment": "Any",
    "ac": "16 chain shirt",
    "hp": 11,
    "speed": "Walk 30",
    "str": 13,
    "dex": 12,
    "con": 12,
    "int": 10,
    "wis": 11,
    "cha": 10,
    "skill": "Perception +2",
    "passive": 12,
    "languages": "any one language (usually Common)",
    "cr": "1/8",
    "action": [
      {
        "Name": "Spear",
        "Text": "Melee or Ranged Weapon 3 to hit, reach 5 ft. or range 20/60 ft., one target. Hit:4 (1d6 + 1) piercing damage, or 5 (1d8 + 1) piercing damage if used with two hands to make a melee attack."
      }
    ]
  },
  {
    "name": "Guardian Naga",
    "size": "L",
    "type": "monstrosity",
    "alignment": "Lawful Good",
    "ac": "18 natural armor",
    "hp": 127,
    "speed": "Walk 40",
    "str": 19,
    "dex": 18,
    "con": 16,
    "int": 16,
    "wis": 19,
    "cha": 18,
    "save": "Dex +8, Con +7, Int +7, Wis +8, Cha +8",
    "senses": "darkvision 60 ft.",
    "passive": 14,
    "immune": "poison",
    "conditionImmune": "charmed, poisoned",
    "languages": "Celestial, Common",
    "cr": "10",
    "trait": [
      {
        "Name": "Rejuvenation",
        "Text": "If it dies, the naga returns to life in 1d6 days and regains all its hit points. Only a wish spell can prevent this trait from functioning."
      },
      {
        "Name": "Spellcasting",
        "Text": "The naga is an 11th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 16, +8 to hit with spell attacks), and it needs only verbal components to cast its spells. It has the following cleric spells prepared:<br><br>Cantrips (at will): <em>mending, sacred flame, thaumaturgy</em><br>1st (1 slots): <em>command, cure wounds, shield of faith</em><br>2nd (2 slots): <em>calm emotions, hold person</em><br>3rd (3 slots): <em>bestow curse, clairvoyance</em><br>4th (4 slots): <em>banishment, freedom of movement</em><br>5th (5 slots): <em>flame strike, geas</em><br>6th (6 slots): <em>true seeing</em>"
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 8 to hit, reach 10 ft., one creature. Hit:8 (1d8 + 4) piercing damage, and the target must make a 15 Constitution saving throw, taking 45 (10d8) poison damage on a failed save, or half as much damage on a successful one."
      },
      {
        "Name": "Spit Poison",
        "Text": "Ranged Weapon 8 to hit, range 15/30 ft., one creature. Hit:The target must make a 15 Constitution saving throw, taking 45 (10d8) poison damage on a failed save, or half as much damage on a successful one."
      }
    ],
    "environment": [
      "forest",
      "desert"
    ]
  },
  {
    "name": "Gynosphinx",
    "size": "L",
    "type": "monstrosity",
    "alignment": "Lawful Neutral",
    "ac": "17 natural armor",
    "hp": 136,
    "speed": "Walk 40, Fly 60",
    "str": 18,
    "dex": 15,
    "con": 16,
    "int": 18,
    "wis": 18,
    "cha": 18,
    "skill": "Arcana +12, History +12, Perception +8, Religion +8",
    "senses": "truesight 120 ft.",
    "passive": 18,
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
    "immune": "psychic",
    "conditionImmune": "charmed, frightened",
    "languages": "Common, Sphinx",
    "cr": "11",
    "trait": [
      {
        "Name": "Inscrutable",
        "Text": "The sphinx is immune to any effect that would sense its emotions or read its thoughts, as well as any divination spell that it refuses. Wisdom (Insight) checks made to ascertain the sphinx's intentions or sincerity have disadvantage."
      },
      {
        "Name": "Magic Weapons",
        "Text": "The sphinx's weapon attacks are magical."
      },
      {
        "Name": "Spellcasting",
        "Text": "The sphinx is a 9th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 16, +8 to hit with spell attacks). It requires no material components to cast its spells. The sphinx has the following wizard spells prepared:<br><br>Cantrips (at will): <em>mage hand, minor illusion, prestidigitation</em><br>1st (1 slots): <em>detect magic, identify, shield</em><br>2nd (2 slots): <em>darkness, locate object, suggestion</em><br>3rd (3 slots): <em>dispel magic, remove curse, tongues</em><br>4th (4 slots): <em>banishment, greater invisibility</em><br>5th (5 slots): <em>legend lore</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The sphinx makes two claw attacks."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 8 to hit, reach 5 ft., one target. Hit:13 (2d8 + 4) slashing damage."
      }
    ],
    "legendary": [
      {
        "Name": "Claw Attack",
        "Text": "The sphinx makes one claw attack."
      },
      {
        "Name": "Teleport (Costs 2 Actions)",
        "Text": "The sphinx magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see."
      },
      {
        "Name": "Cast a Spell (Costs 3 Actions)",
        "Text": "The sphinx casts a spell from its list of prepared spells, using a spell slot as normal."
      }
    ],
    "environment": [
      "desert"
    ]
  },
  {
    "name": "Half-Ogre (Ogrillon)",
    "size": "L",
    "type": "giant",
    "alignment": "Chaotic Good Any Non-Lawful Evil",
    "ac": "12 hide armor",
    "hp": 30,
    "speed": "Walk 30",
    "str": 17,
    "dex": 10,
    "con": 14,
    "int": 7,
    "wis": 9,
    "cha": 10,
    "senses": "darkvision 60 ft.",
    "passive": 9,
    "languages": "Common, Giant",
    "cr": "1",
    "action": [
      {
        "Name": "Battleaxe",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:12 (2d8 + 3) slashing damage, or 14 (2d10 + 3) slashing damage if used with two hands."
      },
      {
        "Name": "Javelin",
        "Text": "Melee or Ranged Weapon 5 to hit, reach 5 ft. or range 30/120 ft., one target. Hit:10 (2d6 + 3) piercing damage."
      }
    ],
    "environment": [
      "underdark",
      "mountain",
      "forest",
      "hill",
      "urban",
      "desert",
      "arctic"
    ]
  },
  {
    "name": "Half-Red Dragon Veteran",
    "size": "M",
    "type": "humanoid (human)",
    "alignment": "Any",
    "ac": "18 plate armor",
    "hp": 65,
    "speed": "Walk 30",
    "str": 16,
    "dex": 13,
    "con": 14,
    "int": 10,
    "wis": 11,
    "cha": 10,
    "skill": "Athletics +6, Perception +3",
    "senses": "blindsight 10 ft., darkvision 60 ft.",
    "passive": 12,
    "resist": [
      "fire"
    ],
    "languages": "Common, Draconic",
    "cr": "5",
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The veteran makes two longsword attacks. If it has a shortsword drawn, it can also make a shortsword attack."
      },
      {
        "Name": "Longsword",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:7 (1d8 + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands."
      },
      {
        "Name": "Shortsword",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:6 (1d6 + 3) piercing damage."
      },
      {
        "Name": "Heavy Crossbow",
        "Text": "Ranged Weapon 3 to hit, range 100/400 ft., one target. Hit:6 (1d10 + 1) piercing damage."
      },
      {
        "Name": "Fire Breath (Recharge 5-6)",
        "Text": "The veteran exhales fire in a 15-foot cone. Each creature in that area must make a 15 Dexterity saving throw, taking 24 (7d6) fire damage on a failed save, or half as much damage on a successful one."
      }
    ]
  },
  {
    "name": "Harpy",
    "size": "M",
    "type": "monstrosity",
    "alignment": "Chaotic Evil",
    "ac": 11,
    "hp": 38,
    "speed": "Walk 20, Fly 40",
    "str": 12,
    "dex": 13,
    "con": 12,
    "int": 7,
    "wis": 10,
    "cha": 13,
    "passive": 10,
    "languages": "Common",
    "cr": "1",
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The harpy makes two attacks: one with its claws and one with its club."
      },
      {
        "Name": "Claws",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one target. Hit:6 (2d4 + 1) slashing damage."
      },
      {
        "Name": "Club",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one target. Hit:3 (1d4 + 1) bludgeoning damage."
      },
      {
        "Name": "Luring Song",
        "Text": "The harpy sings a magical melody. Every humanoid and giant within 300 feet of the harpy that can hear the song must succeed on a 11 Wisdom saving throw or be charmed until the song ends. The harpy must take a bonus action on its subsequent turns to continue singing. It can stop singing at any time. The song ends if the harpy is incapacitated."
      }
    ],
    "environment": [
      "mountain",
      "forest",
      "hill",
      "coastal"
    ]
  },
  {
    "name": "Hawk",
    "size": "T",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": 13,
    "hp": 1,
    "speed": "Walk 10, Fly 60",
    "str": 5,
    "dex": 16,
    "con": 8,
    "int": 2,
    "wis": 14,
    "cha": 6,
    "skill": "Perception +4",
    "passive": 14,
    "cr": "0",
    "trait": [
      {
        "Name": "Keen Sight",
        "Text": "The hawk has advantage on Wisdom (Perception) checks that rely on sight."
      }
    ],
    "action": [
      {
        "Name": "Talons",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:1 slashing damage."
      }
    ],
    "familiar": true
  },
  {
    "name": "Hell Hound",
    "size": "M",
    "type": "fiend",
    "alignment": "Lawful Evil",
    "ac": "15 natural armor",
    "hp": 45,
    "speed": "Walk 50",
    "str": 17,
    "dex": 12,
    "con": 14,
    "int": 6,
    "wis": 13,
    "cha": 6,
    "skill": "Perception +5",
    "senses": "darkvision 60 ft.",
    "passive": 15,
    "immune": "fire",
    "languages": "understands Infernal but can't speak it",
    "cr": "3",
    "trait": [
      {
        "Name": "Keen Hearing and Smell",
        "Text": "The hound has advantage on Wisdom (Perception) checks that rely on hearing or smell."
      },
      {
        "Name": "Pack Tactics",
        "Text": "The hound has advantage on an attack roll against a creature if at least one of the hound's allies is within 5 feet of the creature and the ally isn't incapacitated."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:7 (1d8 + 3) piercing damage plus 7 (2d6) fire damage."
      },
      {
        "Name": "Fire Breath (Recharge 5-6)",
        "Text": "The hound exhales fire in a 15-foot cone. Each creature in that area must make a 12 Dexterity saving throw, taking 21 (6d6) fire damage on a failed save, or half as much damage on a successful one."
      }
    ],
    "environment": [
      "underdark",
      "mountain"
    ]
  },
  {
    "name": "Helmed Horror",
    "size": "M",
    "type": "construct",
    "alignment": "Unaligned",
    "ac": "20 plate armor",
    "hp": 60,
    "speed": "Walk 30, Fly 30",
    "str": 18,
    "dex": 13,
    "con": 16,
    "int": 10,
    "wis": 10,
    "cha": 10,
    "skill": "Perception +4",
    "senses": "blindsight 60 ft. (blind beyond this radius)",
    "passive": 14,
    "resist": [
      {
        "resist": [
          "bludgeoning",
          "piercing",
          "slashing"
        ],
        "note": "from nonmagical attacks that aren't adamantine",
        "cond": true
      }
    ],
    "immune": "force, necrotic, poison",
    "conditionImmune": "blinded, charmed, deafened, frightened, paralyzed, petrified, poisoned, stunned",
    "languages": "understands the languages of its creator but can't speak",
    "cr": "4",
    "trait": [
      {
        "Name": "Magic Resistance",
        "Text": "The helmed horror has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Spell Immunity",
        "Text": "The helmed horror is immune to three spells chosen by its creator. Typical immunities include fireball, heat metal, and lightning bolt."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The helmed horror makes two longsword attacks."
      },
      {
        "Name": "Longsword",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:8 (1d8 + 4) slashing damage, or 9 (1d10 + 4) slashing damage if used with two hands."
      }
    ]
  },
  {
    "name": "Hezrou",
    "size": "L",
    "type": "fiend (demon)",
    "alignment": "Chaotic Evil",
    "ac": "16 natural armor",
    "hp": 136,
    "speed": "Walk 30",
    "str": 19,
    "dex": 17,
    "con": 20,
    "int": 5,
    "wis": 12,
    "cha": 13,
    "save": "Str +7, Con +8, Wis +4",
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
    "cr": "8",
    "trait": [
      {
        "Name": "Magic Resistance",
        "Text": "The hezrou has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Stench",
        "Text": "Any creature that starts its turn within 10 feet of the hezrou must succeed on a 14 Constitution saving throw or be poisoned until the start of its next turn. On a successful saving throw, the creature is immune to the hezrou's stench for 24 hours."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The hezrou makes three attacks: one with its bite and two with its claws."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:15 (2d10 + 4) piercing damage."
      },
      {
        "Name": "Claws",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:11 (2d6 + 4) slashing damage."
      }
    ]
  },
  {
    "name": "Hill Giant",
    "size": "H",
    "type": "giant",
    "alignment": "Chaotic Evil",
    "ac": "13 natural armor",
    "hp": 105,
    "speed": "Walk 40",
    "str": 21,
    "dex": 8,
    "con": 19,
    "int": 5,
    "wis": 9,
    "cha": 6,
    "skill": "Perception +2",
    "passive": 12,
    "languages": "Giant",
    "cr": "5",
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The giant makes two greatclub attacks."
      },
      {
        "Name": "Greatclub",
        "Text": "Melee Weapon 8 to hit, reach 10 ft., one target. Hit:18 (3d8 + 5) bludgeoning damage."
      },
      {
        "Name": "Rock",
        "Text": "Ranged Weapon 8 to hit, range 60/240 ft., one target. Hit:21 (3d10 + 5) bludgeoning damage."
      }
    ],
    "environment": [
      "hill"
    ]
  },
  {
    "name": "Hippogriff",
    "size": "L",
    "type": "monstrosity",
    "alignment": "Unaligned",
    "ac": 11,
    "hp": 19,
    "speed": "Walk 40, Fly 60",
    "str": 17,
    "dex": 13,
    "con": 13,
    "int": 2,
    "wis": 12,
    "cha": 8,
    "skill": "Perception +5",
    "passive": 15,
    "cr": "1",
    "trait": [
      {
        "Name": "Keen Sight",
        "Text": "The hippogriff has advantage on Wisdom (Perception) checks that rely on sight."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The hippogriff makes two attacks: one with its beak and one with its claws."
      },
      {
        "Name": "Beak",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:8 (1d10 + 3) piercing damage."
      },
      {
        "Name": "Claws",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:10 (2d6 + 3) slashing damage."
      }
    ],
    "environment": [
      "mountain",
      "grassland",
      "hill"
    ]
  },
  {
    "name": "Hobgoblin",
    "size": "M",
    "type": "humanoid (goblinoid)",
    "alignment": "Lawful Evil",
    "ac": "18 chain mail",
    "hp": 11,
    "speed": "Walk 30",
    "str": 13,
    "dex": 12,
    "con": 12,
    "int": 10,
    "wis": 10,
    "cha": 9,
    "senses": "darkvision 60 ft.",
    "passive": 10,
    "languages": "Common, Goblin",
    "cr": "1/2",
    "trait": [
      {
        "Name": "Martial Advantage",
        "Text": "Once per turn, the hobgoblin can deal an extra 7 (2d6) damage to a creature it hits with a weapon attack if that creature is within 5 feet of an ally of the hobgoblin that isn't incapacitated."
      }
    ],
    "action": [
      {
        "Name": "Longsword",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one target. Hit:5 (1d8 + 1) slashing damage, or 6 (1d10 + 1) slashing damage if used with two hands."
      },
      {
        "Name": "Longbow",
        "Text": "Ranged Weapon 3 to hit, range 150/600 ft., one target. Hit:5 (1d8 + 1) piercing damage."
      }
    ],
    "environment": [
      "underdark",
      "grassland",
      "forest",
      "hill",
      "desert"
    ]
  },
  {
    "name": "Hobgoblin Captain",
    "size": "M",
    "type": "humanoid (goblinoid)",
    "alignment": "Lawful Evil",
    "ac": "17 half plate armor",
    "hp": 39,
    "speed": "Walk 30",
    "str": 15,
    "dex": 14,
    "con": 14,
    "int": 12,
    "wis": 10,
    "cha": 13,
    "senses": "darkvision 60 ft.",
    "passive": 10,
    "languages": "Common, Goblin",
    "cr": "3",
    "trait": [
      {
        "Name": "Martial Advantage",
        "Text": "Once per turn, the hobgoblin can deal an extra 10 (3d6) damage to a creature it hits with a weapon attack if that creature is within 5 feet of an ally of the hobgoblin that isn't incapacitated."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The hobgoblin makes two greatsword attacks."
      },
      {
        "Name": "Greatsword",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:9 (2d6 + 2) slashing damage."
      },
      {
        "Name": "Javelin",
        "Text": "Melee or Ranged Weapon 4 to hit, reach 5 ft. or range 30/120 ft., one target. Hit:5 (1d6 + 2) piercing damage."
      },
      {
        "Name": "Leadership (Recharges after a Short or Long Rest)",
        "Text": "For 1 minute, the hobgoblin can utter a special command or warning whenever a nonhostile creature that it can see within 30 feet of it makes an attack roll or a saving throw. The creature can add a d4 to its roll provided it can hear and understand the hobgoblin. A creature can benefit from only one Leadership die at a time. This effect ends if the hobgoblin is incapacitated."
      }
    ],
    "environment": [
      "underdark",
      "grassland",
      "forest",
      "hill",
      "desert"
    ]
  },
  {
    "name": "Hobgoblin Warlord",
    "size": "M",
    "type": "humanoid (goblinoid)",
    "alignment": "Lawful Evil",
    "ac": "20 plate armor",
    "hp": 97,
    "speed": "Walk 30",
    "str": 16,
    "dex": 14,
    "con": 16,
    "int": 14,
    "wis": 11,
    "cha": 15,
    "save": "Int +5, Wis +3, Cha +5",
    "senses": "darkvision 60 ft.",
    "passive": 10,
    "languages": "Common, Goblin",
    "cr": "6",
    "trait": [
      {
        "Name": "Martial Advantage",
        "Text": "Once per turn, the hobgoblin can deal an extra 14 (4d6) damage to a creature it hits with a weapon attack if that creature is within 5 feet of an ally of the hobgoblin that isn't incapacitated."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The hobgoblin makes three melee attacks. Alternatively, it can make two ranged attacks with its javelins."
      },
      {
        "Name": "Longsword",
        "Text": "Melee Weapon 9 to hit, reach 5 ft., one target. Hit:7 (1d8 + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands."
      },
      {
        "Name": "Shield Bash",
        "Text": "Melee Weapon 9 to hit, reach 5 ft., one creature. Hit:5 (1d4 + 3) bludgeoning damage. If the target is Large or smaller, it must succeed on a 14 Strength saving throw or be knocked prone."
      },
      {
        "Name": "Javelin",
        "Text": "Melee or Ranged Weapon 9 to hit, reach 5 ft. or range 30/120 ft., one target. Hit:6 (1d6 + 3) piercing damage."
      },
      {
        "Name": "Leadership (Recharges after a Short or Long Rest)",
        "Text": "For 1 minute, the hobgoblin can utter a special command or warning whenever a nonhostile creature that it can see within 30 feet of it makes an attack roll or a saving throw. The creature can add a d4 to its roll provided it can hear and understand the hobgoblin. A creature can benefit from only one Leadership die at a time. This effect ends if the hobgoblin is incapacitated."
      }
    ],
    "reaction": [
      {
        "Name": "Parry",
        "Text": "The hobgoblin adds 3 to its AC against one melee attack that would hit it. To do so, the hobgoblin must see the attacker and be wielding a melee weapon."
      }
    ],
    "environment": [
      "underdark",
      "grassland",
      "forest",
      "hill",
      "desert"
    ]
  },
  {
    "name": "Homunculus",
    "size": "T",
    "type": "construct",
    "alignment": "Neutral",
    "ac": "13 natural armor",
    "hp": 5,
    "speed": "Walk 20, Fly 40",
    "str": 4,
    "dex": 15,
    "con": 11,
    "int": 10,
    "wis": 10,
    "cha": 7,
    "senses": "darkvision 60 ft.",
    "passive": 10,
    "immune": "poison",
    "conditionImmune": "charmed, poisoned",
    "languages": "understands the languages of its creator but can't speak",
    "cr": "0",
    "trait": [
      {
        "Name": "Telepathic Bond",
        "Text": "While the homunculus is on the same plane of existence as its master, it can magically convey what it senses to its master, and the two can communicate telepathically."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one creature. Hit:1 piercing damage, and the target must succeed on a 10 Constitution saving throw or be poisoned for 1 minute. If the saving throw fails by 5 or more, the target is instead poisoned for 5 (1d10) minutes and unconscious while poisoned in this way."
      }
    ]
  },
  {
    "name": "Hook Horror",
    "size": "L",
    "type": "monstrosity",
    "alignment": "Neutral",
    "ac": "15 natural armor",
    "hp": 75,
    "speed": "Walk 30, Climb 30",
    "str": 18,
    "dex": 10,
    "con": 15,
    "int": 6,
    "wis": 12,
    "cha": 7,
    "skill": "Perception +3",
    "senses": "blindsight 60 ft., darkvision 120 ft.",
    "passive": 13,
    "languages": "Hook Horror",
    "cr": "3",
    "trait": [
      {
        "Name": "Echolocation",
        "Text": "The hook horror can't use its blindsight while deafened."
      },
      {
        "Name": "Keen Hearing",
        "Text": "The hook horror has advantage on Wisdom (Perception) checks that rely on hearing."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The hook horror makes two hook attacks."
      },
      {
        "Name": "Hook",
        "Text": "Melee Weapon 6 to hit, reach 10 ft., one target. Hit:11 (2d6 + 4) piercing damage."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Horned Devil",
    "size": "L",
    "type": "fiend (devil)",
    "alignment": "Lawful Evil",
    "ac": "18 natural armor",
    "hp": 178,
    "speed": "Walk 20, Fly 60",
    "str": 22,
    "dex": 17,
    "con": 21,
    "int": 12,
    "wis": 16,
    "cha": 17,
    "save": "Str +10, Dex +7, Wis +7, Cha +7",
    "senses": "darkvision 120 ft.",
    "passive": 13,
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
    "languages": "Infernal, telepathy 120 ft.",
    "cr": "11",
    "trait": [
      {
        "Name": "Devil's Sight",
        "Text": "Magical darkness doesn't impede the devil's darkvision."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The devil has advantage on saving throws against spells and other magical effects."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The devil makes three melee attacks: two with its fork and one with its tail. It can use Hurl Flame in place of any melee attack."
      },
      {
        "Name": "Fork",
        "Text": "Melee Weapon 10 to hit, reach 10 ft., one target. Hit:15 (2d8 + 6) piercing damage."
      },
      {
        "Name": "Tail",
        "Text": "Melee Weapon 10 to hit, reach 10 ft., one target. Hit:10 (1d8 + 6) piercing damage. If the target is a creature other than an undead or a construct, it must succeed on a 17 Constitution saving throw or lose 10 (3d6) hit points at the start of each of its turns due to an infernal wound. Each time the devil hits the wounded target with this attack, the damage dealt by the wound increases by 10 (3d6). Any creature can take an action to stanch the wound with a successful 12 Wisdom (Medicine) check. The wound also closes if the target receives magical healing."
      },
      {
        "Name": "Hurl Flame",
        "Text": "Ranged Spell 7 to hit, range 150 ft., one target. Hit:14 (4d6) fire damage. If the target is a flammable object that isn't being worn or carried, it also catches fire."
      }
    ]
  },
  {
    "name": "Hunter Shark",
    "size": "L",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": "12 natural armor",
    "hp": 45,
    "speed": "Swim 40",
    "str": 18,
    "dex": 13,
    "con": 15,
    "int": 1,
    "wis": 10,
    "cha": 4,
    "skill": "Perception +2",
    "senses": "blindsight 30 ft.",
    "passive": 12,
    "cr": "2",
    "trait": [
      {
        "Name": "Blood Frenzy",
        "Text": "The shark has advantage on melee attack rolls against any creature that doesn't have all its hit points."
      },
      {
        "Name": "Water Breathing",
        "Text": "The shark can breathe only underwater."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:13 (2d8 + 4) piercing damage."
      }
    ],
    "environment": [
      "underwater"
    ]
  },
  {
    "name": "Hydra",
    "size": "H",
    "type": "monstrosity",
    "alignment": "Unaligned",
    "ac": "15 natural armor",
    "hp": 172,
    "speed": "Walk 30, Swim 30",
    "str": 20,
    "dex": 12,
    "con": 20,
    "int": 2,
    "wis": 10,
    "cha": 7,
    "skill": "Perception +6",
    "senses": "darkvision 60 ft.",
    "passive": 16,
    "cr": "8",
    "trait": [
      {
        "Name": "Hold Breath",
        "Text": "The hydra can hold its breath for 1 hour."
      },
      {
        "Name": "Multiple Heads",
        "Text": "The hydra has five heads. While it has more than one head, the hydra has advantage on saving throws against being blinded, charmed, deafened, frightened, stunned, and knocked unconscious."
      },
      {
        "Name": "Reactive Heads",
        "Text": "For each head the hydra has beyond one, it gets an extra reaction that can be used only for opportunity attacks."
      },
      {
        "Name": "Wakeful",
        "Text": "While the hydra sleeps, at least one of its heads is awake."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The hydra makes as many bite attacks as it has heads."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 8 to hit, reach 10 ft., one target. Hit:10 (1d10 + 5) piercing damage."
      }
    ],
    "environment": [
      "swamp"
    ]
  },
  {
    "name": "Hyena",
    "size": "M",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": 11,
    "hp": 5,
    "speed": "Walk 50",
    "str": 11,
    "dex": 13,
    "con": 12,
    "int": 2,
    "wis": 12,
    "cha": 5,
    "skill": "Perception +3",
    "passive": 13,
    "cr": "0",
    "trait": [
      {
        "Name": "Pack Tactics",
        "Text": "The hyena has advantage on an attack roll against a creature if at least one of the hyena's allies is within 5 feet of the creature and the ally isn't incapacitated."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 2 to hit, reach 5 ft., one target. Hit:3 (1d6) piercing damage."
      }
    ],
    "environment": [
      "grassland",
      "forest",
      "hill",
      "desert"
    ]
  },
  {
    "name": "Ice Devil",
    "size": "L",
    "type": "fiend (devil)",
    "alignment": "Lawful Evil",
    "ac": "18 natural armor",
    "hp": 180,
    "speed": "Walk 40",
    "str": 21,
    "dex": 14,
    "con": 18,
    "int": 18,
    "wis": 15,
    "cha": 18,
    "save": "Dex +7, Con +9, Wis +7, Cha +9",
    "senses": "blindsight 60 ft., darkvision 120 ft.",
    "passive": 12,
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
    "immune": "fire, poison, cold",
    "conditionImmune": "poisoned",
    "languages": "Infernal, telepathy 120 ft.",
    "cr": "14",
    "trait": [
      {
        "Name": "Devil's Sight",
        "Text": "Magical darkness doesn't impede the devil's darkvision."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The devil has advantage on saving throws against spells and other magical effects."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The devil makes three attacks: one with its bite, one with its claws, and one with its tail."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 10 to hit, reach 5 ft., one target. Hit:12 (2d6 + 5) piercing damage plus 10 (3d6) cold damage."
      },
      {
        "Name": "Claws",
        "Text": "Melee Weapon 10 to hit, reach 5 ft., one target. Hit:10 (2d4 + 5) slashing damage plus 10 (3d6) cold damage."
      },
      {
        "Name": "Tail",
        "Text": "Melee Weapon 10 to hit, reach 10 ft., one target. Hit:12 (2d6 + 5) bludgeoning damage plus 10 (3d6) cold damage."
      },
      {
        "Name": "Wall of Ice (Recharge 6)",
        "Text": "The devil magically forms an opaque wall of ice on a solid surface it can see within 60 feet of it. The wall is 1 foot thick and up to 30 feet long and 10 feet high, or it's a hemispherical dome up to 20 feet in diameter."
      }
    ]
  },
  {
    "name": "Ice Mephit",
    "size": "S",
    "type": "elemental",
    "alignment": "Neutral Evil",
    "ac": 11,
    "hp": 21,
    "speed": "Walk 30, Fly 30",
    "str": 7,
    "dex": 13,
    "con": 10,
    "int": 9,
    "wis": 11,
    "cha": 12,
    "skill": "Perception +2, Stealth +3",
    "senses": "darkvision 60 ft.",
    "passive": 12,
    "immune": "cold, poison",
    "vulnerable": [
      "bludgeoning",
      "fire"
    ],
    "conditionImmune": "poisoned",
    "languages": "Aquan, Auran",
    "cr": "1/2",
    "trait": [
      {
        "Name": "Death Burst",
        "Text": "When the mephit dies, it explodes in a burst of jagged ice. Each creature within 5 feet of it must make a 10 Dexterity saving throw, taking 4 (1d8) slashing damage on a failed save, or half as much damage on a successful one."
      },
      {
        "Name": "False Appearance",
        "Text": "While the mephit remains motionless, it is indistinguishable from an ordinary shard of ice."
      },
      {
        "Name": "Innate Spellcasting (1/Day)",
        "Text": "The mephit can innately cast fog cloud, requiring no material components. Its innate spellcasting ability is Charisma.<br>At will: <em>fog cloud</em>"
      }
    ],
    "action": [
      {
        "Name": "Claws",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one creature. Hit:3 (1d4 + 1) slashing damage plus 2 (1d4) cold damage."
      },
      {
        "Name": "Frost Breath (Recharge 6)",
        "Text": "The mephit exhales a 15-foot cone of cold air. Each creature in that area must succeed on a 10 Dexterity saving throw, taking 5 (2d4) cold damage on a failed save, or half as much damage on a successful one."
      }
    ],
    "environment": [
      "arctic"
    ]
  },
  {
    "name": "Imp",
    "size": "T",
    "type": "fiend (devil)",
    "alignment": "Lawful Evil",
    "ac": 13,
    "hp": 10,
    "speed": "Walk 20, Fly 40",
    "str": 6,
    "dex": 17,
    "con": 13,
    "int": 11,
    "wis": 12,
    "cha": 14,
    "skill": "Deception +4, Insight +3, Persuasion +4, Stealth +5",
    "senses": "darkvision 120 ft.",
    "passive": 11,
    "resist": [
      "cold",
      {
        "resist": [
          "bludgeoning",
          "piercing",
          "slashing"
        ],
        "note": "from nonmagical attacks not made with silvered weapons",
        "cond": true
      }
    ],
    "immune": "fire, poison",
    "conditionImmune": "poisoned",
    "languages": "Infernal, Common",
    "cr": "1",
    "trait": [
      {
        "Name": "Shapechanger",
        "Text": "The imp can use its action to polymorph into a beast form that resembles a rat (speed 20 ft.), a raven (20 ft., fly 60 ft.), or a spider (20 ft., climb 20 ft.), or back into its true form. Its statistics are the same in each form, except for the speed changes noted. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
      },
      {
        "Name": "Devil's Sight",
        "Text": "Magical darkness doesn't impede the imp's darkvision."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The imp has advantage on saving throws against spells and other magical effects."
      }
    ],
    "action": [
      {
        "Name": "Sting (Bite in Beast Form)",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:5 (1d4 + 3) piercing damage, and the target must make a 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one."
      },
      {
        "Name": "Invisibility",
        "Text": "The imp magically turns invisible until it attacks, or until its concentration ends (as if concentrating on a spell). Any equipment the imp wears or carries is invisible with it."
      }
    ],
    "familiar": true
  },
  {
    "name": "Incubus",
    "size": "M",
    "type": "fiend (shapechanger)",
    "alignment": "Neutral Evil",
    "ac": "15 natural armor",
    "hp": 66,
    "speed": "Walk 30, Fly 60",
    "str": 8,
    "dex": 17,
    "con": 13,
    "int": 15,
    "wis": 12,
    "cha": 20,
    "skill": "Deception +9, Insight +5, Perception +5, Persuasion +9, Stealth +7",
    "senses": "darkvision 60 ft.",
    "passive": 15,
    "resist": [
      "cold",
      "fire",
      "lightning",
      "poison",
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
    "languages": "Abyssal, Common, Infernal, telepathy 60 ft.",
    "cr": "4",
    "trait": [
      {
        "Name": "Telepathic Bond",
        "Text": "The fiend ignores the range restriction on its telepathy when communicating with a creature it has charmed. The two don't even need to be on the same plane of existence."
      },
      {
        "Name": "Shapechanger",
        "Text": "The fiend can use its action to polymorph into a Small or Medium humanoid, or back into its true form. Without wings, the fiend loses its flying speed. Other than its size and speed, its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
      }
    ],
    "action": [
      {
        "Name": "Claw (Fiend Form Only)",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:6 (1d6 + 3) slashing damage."
      },
      {
        "Name": "Charm",
        "Text": "One humanoid the fiend can see within 30 feet of it must succeed on a 15 Wisdom saving throw or be magically charmed for 1 day. The charmed target obeys the fiend's verbal or telepathic commands. If the target suffers any harm or receives a suicidal command, it can repeat the saving throw, ending the effect on a success. If the target successfully saves against the effect, or if the effect on it ends, the target is immune to this fiend's Charm for the next 24 hours."
      },
      {
        "Name": "Draining Kiss",
        "Text": "The fiend kisses a creature charmed by it or a willing creature. The target must make a 15 Constitution saving throw against this magic, taking 32 (5d10 + 5) psychic damage on a failed save, or half as much damage on a successful one. The target's hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0."
      },
      {
        "Name": "Etherealness",
        "Text": "The fiend magically enters the Ethereal Plane from the Material Plane, or vice versa."
      }
    ],
    "environment": [
      "urban"
    ]
  },
  {
    "name": "Intellect Devourer",
    "size": "T",
    "type": "aberration",
    "alignment": "Lawful Evil",
    "ac": 12,
    "hp": 21,
    "speed": "Walk 40",
    "str": 6,
    "dex": 14,
    "con": 13,
    "int": 12,
    "wis": 11,
    "cha": 10,
    "skill": "Perception +2, Stealth +4",
    "senses": "blindsight 60 ft. (blind beyond this radius)",
    "passive": 12,
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
    "conditionImmune": "blinded",
    "languages": "understands Deep Speech but can't speak, telepathy 60 ft.",
    "cr": "2",
    "trait": [
      {
        "Name": "Detect Sentience",
        "Text": "The intellect devourer can sense the presence and location of any creature within 300 feet of it that has an Intelligence of 3 or higher, regardless of interposing barriers, unless the creature is protected by a mind blank spell."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The intellect devourer makes one attack with its claws and uses Devour Intellect."
      },
      {
        "Name": "Claws",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:7 (2d4 + 2) slashing damage."
      },
      {
        "Name": "Devour Intellect",
        "Text": "The intellect devourer targets one creature it can see within 10 feet of it that has a brain. The target must succeed on a 12 Intelligence saving throw against this magic or take 11 (2d10) psychic damage. Also on a failure, roll 3d6: If the total equals or exceeds the target's Intelligence score, that score is reduced to 0. The target is stunned until it regains at least one point of Intelligence."
      },
      {
        "Name": "Body Thief",
        "Text": "The intellect devourer initiates an Intelligence contest with an incapacitated humanoid within 5 feet of it that isn't protected by protection from evil and good. If it wins the contest, the intellect devourer magically consumes the target's brain, teleports into the target's skull, and takes control of the target's body. While inside a creature, the intellect devourer has total cover against attacks and other effects originating outside its host. The intellect devourer retains its Intelligence, Wisdom, and Charisma scores, as well as its understanding of Deep Speech, its telepathy, and its traits. It otherwise adopts the target's statistics. It knows everything the creature knew, including spells and languages."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Invisible Stalker",
    "size": "M",
    "type": "elemental",
    "alignment": "Neutral",
    "ac": 14,
    "hp": 104,
    "speed": "Walk 50, Fly 50 (hover)",
    "str": 16,
    "dex": 19,
    "con": 14,
    "int": 10,
    "wis": 15,
    "cha": 11,
    "skill": "Perception +8, Stealth +10",
    "senses": "darkvision 60 ft.",
    "passive": 18,
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
    "conditionImmune": "exhaustion, grappled, paralyzed, petrified, poisoned, prone, restrained, unconscious",
    "languages": "Auran, understands Common but doesn't speak it",
    "cr": "6",
    "trait": [
      {
        "Name": "Invisibility",
        "Text": "The stalker is invisible."
      },
      {
        "Name": "Faultless Tracker",
        "Text": "The stalker is given a quarry by its summoner. The stalker knows the direction and distance to its quarry as long as the two of them are on the same plane of existence. The stalker also knows the location of its summoner."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The stalker makes two slam attacks."
      },
      {
        "Name": "Slam",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:10 (2d6 + 3) bludgeoning damage."
      }
    ],
    "environment": [
      "urban"
    ]
  },
  {
    "name": "Iron Golem",
    "size": "L",
    "type": "construct",
    "alignment": "Unaligned",
    "ac": "20 natural armor",
    "hp": 210,
    "speed": "Walk 30",
    "str": 24,
    "dex": 9,
    "con": 20,
    "int": 3,
    "wis": 11,
    "cha": 1,
    "senses": "darkvision 120 ft.",
    "passive": 10,
    "immune": "fire, poison, psychic, bludgeoning, piercing, slashing from nonmagical attacks that aren't adamantine",
    "conditionImmune": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned",
    "languages": "understands the languages of its creator but can't speak",
    "cr": "16",
    "trait": [
      {
        "Name": "Fire Absorption",
        "Text": "Whenever the golem is subjected to fire damage, it takes no damage and instead regains a number of hit points equal to the fire damage dealt."
      },
      {
        "Name": "Immutable Form",
        "Text": "The golem is immune to any spell or effect that would alter its form."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The golem has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Magic Weapons",
        "Text": "The golem's weapon attacks are magical."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The golem makes two melee attacks."
      },
      {
        "Name": "Slam",
        "Text": "Melee Weapon 13 to hit, reach 5 ft., one target. Hit:20 (3d8 + 7) bludgeoning damage."
      },
      {
        "Name": "Sword",
        "Text": "Melee Weapon 13 to hit, reach 10 ft., one target. Hit:23 (3d10 + 7) slashing damage."
      },
      {
        "Name": "Poison Breath (Recharge 5-6)",
        "Text": "The golem exhales poisonous gas in a 15-foot cone. Each creature in that area must make a 19 Constitution saving throw, taking 45 (10d8) poison damage on a failed save, or half as much damage on a successful one."
      }
    ]
  },
  {
    "name": "Jackal",
    "size": "S",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": 12,
    "hp": 3,
    "speed": "Walk 40",
    "str": 8,
    "dex": 15,
    "con": 11,
    "int": 3,
    "wis": 12,
    "cha": 6,
    "skill": "Perception +3",
    "passive": 13,
    "cr": "0",
    "trait": [
      {
        "Name": "Keen Hearing and Smell",
        "Text": "The jackal has advantage on Wisdom (Perception) checks that rely on hearing or smell."
      },
      {
        "Name": "Pack Tactics",
        "Text": "The jackal has advantage on an attack roll against a creature if at least one of the jackal's allies is within 5 feet of the creature and the ally isn't incapacitated."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 1 to hit, reach 5 ft., one target. Hit:1 (1d4 - 1) piercing damage."
      }
    ],
    "environment": [
      "grassland",
      "desert"
    ]
  },
  {
    "name": "Jackalwere",
    "size": "M",
    "type": "humanoid (shapechanger)",
    "alignment": "Chaotic Evil",
    "ac": 12,
    "hp": 18,
    "speed": "Walk 40",
    "str": 11,
    "dex": 15,
    "con": 11,
    "int": 13,
    "wis": 11,
    "cha": 10,
    "skill": "Deception +4, Perception +2, Stealth +4",
    "passive": 12,
    "immune": "bludgeoning, piercing, slashing from nonmagical attacks that aren't silvered",
    "languages": "Common (can't speak in jackal form)",
    "cr": "1/2",
    "trait": [
      {
        "Name": "Shapechanger",
        "Text": "The jackalwere can use its action to polymorph into a specific Medium human or a jackal-humanoid hybrid, or back into its true form (that of a Small jackal). Other than its size, its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
      },
      {
        "Name": "Keen Hearing and Smell",
        "Text": "The jackalwere has advantage on Wisdom (Perception) checks that rely on hearing or smell."
      },
      {
        "Name": "Pack Tactics",
        "Text": "The jackalwere has advantage on an attack roll against a creature if at least one of the jackalwere's allies is within 5 feet of the creature and the ally isn't incapacitated."
      }
    ],
    "action": [
      {
        "Name": "Bite (Jackal or Hybrid Form Only)",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:4 (1d4 + 2) piercing damage."
      },
      {
        "Name": "Scimitar (Human or Hybrid Form Only)",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:5 (1d6 + 2) slashing damage."
      },
      {
        "Name": "Sleep Gaze",
        "Text": "The jackalwere gazes at one creature it can see within 30 feet of it. The target must make a 10 Wisdom saving throw. On a failed save, the target succumbs to a magical slumber, falling unconscious for 10 minutes or until someone uses an action to shake the target awake. A creature that successfully saves against the effect is immune to this jackalwere's gaze for the next 24 hours. Undead and creatures immune to being charmed aren't affected by it."
      }
    ],
    "environment": [
      "grassland",
      "desert"
    ]
  },
  {
    "name": "Kenku",
    "size": "M",
    "type": "humanoid (kenku)",
    "alignment": "Chaotic Neutral",
    "ac": 13,
    "hp": 13,
    "speed": "Walk 30",
    "str": 10,
    "dex": 16,
    "con": 10,
    "int": 11,
    "wis": 10,
    "cha": 10,
    "skill": "Deception +4, Perception +2, Stealth +5",
    "passive": 12,
    "languages": "understands Auran and Common but speaks only through the use of its Mimicry trait",
    "cr": "1/4",
    "trait": [
      {
        "Name": "Ambusher",
        "Text": "In the first round of a combat, the kenku has advantage on attack rolls against any creature it surprised."
      },
      {
        "Name": "Mimicry",
        "Text": "The kenku can mimic any sounds it has heard, including voices. A creature that hears the sounds can tell they are imitations with a successful 14 Wisdom (Insight) check."
      }
    ],
    "action": [
      {
        "Name": "Shortsword",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:6 (1d6 + 3) piercing damage."
      },
      {
        "Name": "Shortbow",
        "Text": "Ranged Weapon 5 to hit, range 80/320 ft., one target. Hit:6 (1d6 + 3) piercing damage."
      }
    ],
    "environment": [
      "forest",
      "urban"
    ]
  },
  {
    "name": "Killer Whale",
    "size": "H",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": "12 natural armor",
    "hp": 90,
    "speed": "Swim 60",
    "str": 19,
    "dex": 10,
    "con": 13,
    "int": 3,
    "wis": 12,
    "cha": 7,
    "skill": "Perception +3",
    "senses": "blindsight 120 ft.",
    "passive": 13,
    "cr": "3",
    "trait": [
      {
        "Name": "Echolocation",
        "Text": "The whale can't use its blindsight while deafened."
      },
      {
        "Name": "Hold Breath",
        "Text": "The whale can hold its breath for 30 minutes."
      },
      {
        "Name": "Keen Hearing",
        "Text": "The whale has advantage on Wisdom (Perception) checks that rely on hearing."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:21 (5d6 + 4) piercing damage."
      }
    ],
    "environment": [
      "underwater"
    ]
  },
  {
    "name": "Knight",
    "size": "M",
    "type": "humanoid (any race)",
    "alignment": "Any",
    "ac": "18 plate armor",
    "hp": 52,
    "speed": "Walk 30",
    "str": 16,
    "dex": 11,
    "con": 14,
    "int": 11,
    "wis": 11,
    "cha": 15,
    "save": "Con +4, Wis +2",
    "passive": 10,
    "languages": "any one language (usually Common)",
    "cr": "3",
    "trait": [
      {
        "Name": "Brave",
        "Text": "The knight has advantage on saving throws against being frightened."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The knight makes two melee attacks."
      },
      {
        "Name": "Greatsword",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:10 (2d6 + 3) slashing damage."
      },
      {
        "Name": "Heavy Crossbow",
        "Text": "Ranged Weapon 2 to hit, range 100/400 ft., one target. Hit:5 (1d10) piercing damage."
      },
      {
        "Name": "Leadership (Recharges after a Short or Long Rest)",
        "Text": "For 1 minute, the knight can utter a special command or warning whenever a nonhostile creature that it can see within 30 feet of it makes an attack roll or a saving throw. The creature can add a d4 to its roll provided it can hear and understand the knight. A creature can benefit from only one Leadership die at a time. This effect ends if the knight is incapacitated."
      }
    ],
    "reaction": [
      {
        "Name": "Parry",
        "Text": "The knight adds 2 to its AC against one melee attack that would hit it. To do so, the knight must see the attacker and be wielding a melee weapon."
      }
    ]
  },
  {
    "name": "Kobold",
    "size": "S",
    "type": "humanoid (kobold)",
    "alignment": "Lawful Evil",
    "ac": 12,
    "hp": 5,
    "speed": "Walk 30",
    "str": 7,
    "dex": 15,
    "con": 9,
    "int": 8,
    "wis": 7,
    "cha": 8,
    "senses": "darkvision 60 ft.",
    "passive": 8,
    "languages": "Common, Draconic",
    "cr": "1/8",
    "trait": [
      {
        "Name": "Sunlight Sensitivity",
        "Text": "While in sunlight, the kobold has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
      },
      {
        "Name": "Pack Tactics",
        "Text": "The kobold has advantage on an attack roll against a creature if at least one of the kobold's allies is within 5 feet of the creature and the ally isn't incapacitated."
      }
    ],
    "action": [
      {
        "Name": "Dagger",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:4 (1d4 + 2) piercing damage."
      },
      {
        "Name": "Sling",
        "Text": "Ranged Weapon 4 to hit, range 30/120 ft., one target. Hit:4 (1d4 + 2) bludgeoning damage."
      }
    ],
    "environment": [
      "forest",
      "swamp",
      "hill",
      "urban",
      "desert",
      "coastal",
      "arctic",
      "mountain",
      "underdark"
    ]
  },
  {
    "name": "Kraken",
    "size": "G",
    "type": "monstrosity (titan)",
    "alignment": "Chaotic Evil",
    "ac": "18 natural armor",
    "hp": 472,
    "speed": "Walk 20, Swim 60",
    "str": 30,
    "dex": 11,
    "con": 25,
    "int": 22,
    "wis": 18,
    "cha": 20,
    "save": "Str +17, Dex +7, Con +14, Int +13, Wis +11",
    "senses": "truesight 120 ft.",
    "passive": 14,
    "immune": "lightning, bludgeoning, piercing, slashing from nonmagical attacks",
    "conditionImmune": "frightened, paralyzed",
    "languages": "Abyssal, Celestial, Infernal, Primordial, telepathy 120 ft. but can't speak",
    "cr": "23",
    "trait": [
      {
        "Name": "Amphibious",
        "Text": "The kraken can breathe air and water."
      },
      {
        "Name": "Freedom of Movement",
        "Text": "The kraken ignores difficult terrain, and magical effects can't reduce its speed or cause it to be restrained. It can spend 5 feet of movement to escape from nonmagical restraints or being grappled."
      },
      {
        "Name": "Siege Monster",
        "Text": "The kraken deals double damage to objects and structures."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The kraken makes three tentacle attacks, each of which it can replace with one use of Fling."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 17 to hit, reach 5 ft., one target. Hit:23 (3d8 + 10) piercing damage. If the target is a Large or smaller creature grappled by the kraken, that creature is swallowed, and the grapple ends. While swallowed, the creature is blinded and restrained, it has total cover against attacks and other effects outside the kraken, and it takes 42 (12d6) acid damage at the start of each of the kraken's turns. If the kraken takes 50 damage or more on a single turn from a creature inside it, the kraken must succeed on a 25 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet of the kraken. If the kraken dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 15 feet of movement, exiting prone."
      },
      {
        "Name": "Tentacle",
        "Text": "Melee Weapon 17 to hit, reach 30 ft., one target. Hit:20 (3d6 + 10) bludgeoning damage, and the target is grappled (escape 18). Until this grapple ends, the target is restrained. The kraken has ten tentacles, each of which can grapple one target."
      },
      {
        "Name": "Fling",
        "Text": "One Large or smaller object held or creature grappled by the kraken is thrown up to 60 feet in a random direction and knocked prone. If a thrown target strikes a solid surface, the target takes 3 (1d6) bludgeoning damage for every 10 feet it was thrown. If the target is thrown at another creature, that creature must succeed on a 18 Dexterity saving throw or take the same damage and be knocked prone."
      },
      {
        "Name": "Lightning Storm",
        "Text": "The kraken magically creates three bolts of lightning, each of which can strike a target the kraken can see within 120 feet of it. A target must make a 23 Dexterity saving throw, taking 22 (4d10) lightning damage on a failed save, or half as much damage on a successful one."
      }
    ],
    "legendary": [
      {
        "Name": "Tentacle Attack or Fling",
        "Text": "The kraken makes one tentacle attack or uses its Fling."
      },
      {
        "Name": "Lightning Storm (Costs 2 Actions)",
        "Text": "The kraken uses Lightning Storm."
      },
      {
        "Name": "Ink Cloud (Costs 3 Actions)",
        "Text": "While underwater, the kraken expels an ink cloud in a 60-foot radius. The cloud spreads around corners, and that area is heavily obscured to creatures other than the kraken. Each creature other than the kraken that ends its turn there must succeed on a 23 Constitution saving throw, taking 16 (3d10) poison damage on a failed save, or half as much damage on a successful one. A strong current disperses the cloud, which otherwise disappears at the end of the kraken's next turn."
      }
    ],
    "environment": [
      "underwater"
    ]
  },
  {
    "name": "Kuo-toa",
    "size": "M",
    "type": "humanoid (kuo-toa)",
    "alignment": "Neutral Evil",
    "ac": "13 natural armor, shield",
    "hp": 18,
    "speed": "Walk 30, Swim 30",
    "str": 13,
    "dex": 10,
    "con": 11,
    "int": 11,
    "wis": 10,
    "cha": 8,
    "skill": "Perception +4",
    "senses": "darkvision 120 ft.",
    "passive": 14,
    "languages": "Undercommon",
    "cr": "1/4",
    "trait": [
      {
        "Name": "Amphibious",
        "Text": "The kuo-toa can breathe air and water."
      },
      {
        "Name": "Otherworldly Perception",
        "Text": "The kuo-toa can sense the presence of any creature within 30 feet of it that is invisible or on the Ethereal Plane. It can pinpoint such a creature that is moving."
      },
      {
        "Name": "Slippery",
        "Text": "The kuo-toa has advantage on ability checks and saving throws made to escape a grapple."
      },
      {
        "Name": "Sunlight Sensitivity",
        "Text": "While in sunlight, the kuo-toa has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one target. Hit:3 (1d4 + 1) piercing damage."
      },
      {
        "Name": "Spear",
        "Text": "Melee or Ranged Weapon 3 to hit, reach 5 ft. or range 20/60 ft., one target. Hit:4 (1d6 + 1) piercing damage, or 5 (1d8 + 1) piercing damage if used with two hands to make a melee attack."
      },
      {
        "Name": "Net",
        "Text": "Ranged Weapon 3 to hit, range 5/15 ft., one Large or smaller creature. Hit:The target is restrained. A creature can use its action to make a 10 Strength check to free itself or another creature in a net, ending the effect on a success. Dealing 5 slashing damage to the net (AC 10) frees the target without harming it and destroys the net."
      }
    ],
    "reaction": [
      {
        "Name": "Sticky Shield",
        "Text": "When a creature misses the kuo-toa with a melee weapon attack, the kuo-toa uses its sticky shield to catch the weapon. The attacker must succeed on a 11 Strength saving throw, or the weapon becomes stuck to the kuo-toa's shield. If the weapon's wielder can't or won't let go of the weapon, the wielder is grappled while the weapon is stuck. While stuck, the weapon can't be used. A creature can pull the weapon free by taking an action to make a 11 Strength check and succeeding."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Kuo-toa Archpriest",
    "size": "M",
    "type": "humanoid (kuo-toa)",
    "alignment": "Neutral Evil",
    "ac": "13 natural armor",
    "hp": 97,
    "speed": "Walk 30, Swim 30",
    "str": 16,
    "dex": 14,
    "con": 16,
    "int": 13,
    "wis": 16,
    "cha": 14,
    "skill": "Perception +9, Religion +7",
    "senses": "darkvision 120 ft.",
    "passive": 19,
    "languages": "Undercommon",
    "cr": "6",
    "trait": [
      {
        "Name": "Amphibious",
        "Text": "The kuo-toa can breathe air and water."
      },
      {
        "Name": "Otherworldly Perception",
        "Text": "The kuo-toa can sense the presence of any creature within 30 feet of it that is invisible or on the Ethereal Plane. It can pinpoint such a creature that is moving."
      },
      {
        "Name": "Slippery",
        "Text": "The kuo-toa has advantage on ability checks and saving throws made to escape a grapple."
      },
      {
        "Name": "Sunlight Sensitivity",
        "Text": "While in sunlight, the kuo-toa has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
      },
      {
        "Name": "Spellcasting",
        "Text": "The kuo-toa is a 10th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 14, +6 to hit with spell attacks). The kuo-toa has the following cleric spells prepared:<br><br>Cantrips (at will): <em>guidance, sacred flame, thaumaturgy</em><br>1st (1 slots): <em>detect magic, sanctuary, shield of faith</em><br>2nd (2 slots): <em>hold person, spiritual weapon</em><br>3rd (3 slots): <em>spirit guardians, tongues</em><br>4th (4 slots): <em>control water, divination</em><br>5th (5 slots): <em>mass cure wounds, scrying</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The kuo-toa makes two melee attacks."
      },
      {
        "Name": "Scepter",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:6 (1d6 + 3) bludgeoning damage plus 14 (4d6) lightning damage."
      },
      {
        "Name": "Unarmed Strike",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:5 (1d4 + 3) bludgeoning damage."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Kuo-toa Monitor",
    "size": "M",
    "type": "humanoid (kuo-toa)",
    "alignment": "Neutral Evil",
    "ac": "13 natural armor, Unarmored Defense",
    "hp": 65,
    "speed": "Walk 30, Swim 30",
    "str": 14,
    "dex": 10,
    "con": 14,
    "int": 12,
    "wis": 14,
    "cha": 11,
    "skill": "Perception +6, Religion +5",
    "senses": "darkvision 120 ft.",
    "passive": 16,
    "languages": "Undercommon",
    "cr": "3",
    "trait": [
      {
        "Name": "Amphibious",
        "Text": "The kuo-toa can breathe air and water."
      },
      {
        "Name": "Otherworldly Perception",
        "Text": "The kuo-toa can sense the presence of any creature within 30 feet of it that is invisible or on the Ethereal Plane. It can pinpoint such a creature that is moving."
      },
      {
        "Name": "Slippery",
        "Text": "The kuo-toa has advantage on ability checks and saving throws made to escape a grapple."
      },
      {
        "Name": "Sunlight Sensitivity",
        "Text": "While in sunlight, the kuo-toa has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
      },
      {
        "Name": "Unarmored Defense",
        "Text": "The kuo-toa adds its Wisdom modifier to its armor class."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The kuo-toa makes one bite attack and two unarmed strikes."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:4 (1d4 + 2) piercing damage."
      },
      {
        "Name": "Unarmed Strike",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:5 (1d6 + 2) bludgeoning damage plus 3 (1d6) lightning damage, and the target can't take reactions until the end of the kuo-toa's next turn."
      }
    ]
  },
  {
    "name": "Kuo-toa Whip",
    "size": "M",
    "type": "humanoid (kuo-toa)",
    "alignment": "Neutral Evil",
    "ac": "11 natural armor",
    "hp": 65,
    "speed": "Walk 30, Swim 30",
    "str": 14,
    "dex": 10,
    "con": 14,
    "int": 12,
    "wis": 14,
    "cha": 11,
    "skill": "Perception +6, Religion +5",
    "senses": "darkvision 120 ft.",
    "passive": 16,
    "languages": "Undercommon",
    "cr": "1",
    "trait": [
      {
        "Name": "Amphibious",
        "Text": "The kuo-toa can breathe air and water."
      },
      {
        "Name": "Otherworldly Perception",
        "Text": "The kuo-toa can sense the presence of any creature within 30 feet of it that is invisible or on the Ethereal Plane. It can pinpoint such a creature that is moving."
      },
      {
        "Name": "Slippery",
        "Text": "The kuo-toa has advantage on ability checks and saving throws made to escape a grapple."
      },
      {
        "Name": "Sunlight Sensitivity",
        "Text": "While in sunlight, the kuo-toa has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
      },
      {
        "Name": "Spellcasting",
        "Text": "The kuo-toa is a 2nd-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 12, +4 to hit with spell attacks). The kuo-toa has the following cleric spells prepared:<br><br>Cantrips (at will): <em>sacred flame, thaumaturgy</em><br>1st (1 slots): <em>bane, shield of faith</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The kuo-toa makes two attacks: one with its bite and one with its pincer staff."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:4 (1d4 + 2) piercing damage."
      },
      {
        "Name": "Pincer Staff",
        "Text": "Melee Weapon 4 to hit, reach 10 ft., one target. Hit:5 (1d6 + 2) piercing damage. If the target is a Medium or smaller creature, it is grappled (escape 14). Until this grapple ends, the kuo-toa can't use its pincer staff on another target."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Lamia",
    "size": "L",
    "type": "monstrosity",
    "alignment": "Chaotic Evil",
    "ac": "13 natural armor",
    "hp": 97,
    "speed": "Walk 30",
    "str": 16,
    "dex": 13,
    "con": 15,
    "int": 14,
    "wis": 15,
    "cha": 16,
    "skill": "Deception +7, Insight +4, Stealth +3",
    "senses": "darkvision 60 ft.",
    "passive": 12,
    "languages": "Abyssal, Common",
    "cr": "4",
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The lamia makes two attacks: one with its claws and one with its dagger or Intoxicating Touch."
      },
      {
        "Name": "Claws",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:14 (2d10 + 3) slashing damage."
      },
      {
        "Name": "Dagger",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:5 (1d4 + 3) piercing damage."
      },
      {
        "Name": "Intoxicating Touch",
        "Text": "Melee Spell 5 to hit, reach 5 ft., one creature. Hit:The target is magically cursed for 1 hour. Until the curse ends, the target has disadvantage on Wisdom saving throws and all ability checks."
      }
    ],
    "environment": [
      "desert"
    ],
    "trait": [
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day: <em>geas</em>"
      }
    ]
  },
  {
    "name": "Lemure",
    "size": "M",
    "type": "fiend (devil)",
    "alignment": "Lawful Evil",
    "ac": 7,
    "hp": 13,
    "speed": "Walk 15",
    "str": 10,
    "dex": 5,
    "con": 11,
    "int": 1,
    "wis": 11,
    "cha": 3,
    "senses": "darkvision 120 ft.",
    "passive": 10,
    "resist": [
      "cold"
    ],
    "immune": "fire, poison",
    "conditionImmune": "charmed, frightened, poisoned",
    "languages": "understands Infernal but can't speak",
    "cr": "0",
    "trait": [
      {
        "Name": "Devil's Sight",
        "Text": "Magical darkness doesn't impede the lemure's darkvision."
      },
      {
        "Name": "Hellish Rejuvenation",
        "Text": "A lemure that dies in the Nine Hells comes back to life with all its hit points in 1d10 days unless it is killed by a good-aligned creature with a bless spell cast on that creature or its remains are sprinkled with holy water."
      }
    ],
    "action": [
      {
        "Name": "Fist",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one target. Hit:2 (1d4) bludgeoning damage"
      }
    ]
  },
  {
    "name": "Lich",
    "size": "M",
    "type": "undead",
    "alignment": "Lawful Any Non-Good Chaotic Evil",
    "ac": "17 natural armor",
    "hp": 135,
    "speed": "Walk 30",
    "str": 11,
    "dex": 16,
    "con": 16,
    "int": 20,
    "wis": 14,
    "cha": 16,
    "save": "Con +10, Int +12, Wis +9",
    "skill": "Arcana +19, History +12, Insight +9, Perception +9",
    "senses": "truesight 120 ft.",
    "passive": 19,
    "resist": [
      "cold",
      "lightning",
      "necrotic"
    ],
    "immune": "poison, bludgeoning, piercing, slashing from nonmagical attacks",
    "conditionImmune": "charmed, exhaustion, frightened, paralyzed, poisoned",
    "languages": "Common plus up to five other languages",
    "cr": {
      "cr": "21",
      "lair": "22"
    },
    "trait": [
      {
        "Name": "Legendary Resistance (3/Day)",
        "Text": "If the lich fails a saving throw, it can choose to succeed instead."
      },
      {
        "Name": "Rejuvenation",
        "Text": "If it has a phylactery, a destroyed lich gains a new body in 1d10 days, regaining all its hit points and becoming active again. The new body appears within 5 feet of the phylactery."
      },
      {
        "Name": "Turn Resistance",
        "Text": "The lich has advantage on saving throws against any effect that turns undead."
      },
      {
        "Name": "Spellcasting",
        "Text": "The lich is an 18th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 20, +12 to hit with spell attacks). The lich has the following wizard spells prepared:<br><br>Cantrips (at will): <em>mage hand, prestidigitation, ray of frost</em><br>1st (1 slots): <em>detect magic, magic missile, shield, thunderwave</em><br>2nd (2 slots): <em>detect thoughts, invisibility, Melf's acid arrow, mirror image</em><br>3rd (3 slots): <em>animate dead, counterspell, dispel magic, fireball</em><br>4th (4 slots): <em>blight, dimension door</em><br>5th (5 slots): <em>cloudkill, scrying</em><br>6th (6 slots): <em>disintegrate, globe of invulnerability</em><br>7th (7 slots): <em>finger of death, plane shift</em><br>8th (8 slots): <em>dominate monster, power word stun</em><br>9th (9 slots): <em>power word kill</em>"
      }
    ],
    "action": [
      {
        "Name": "Paralyzing Touch",
        "Text": "Melee Spell 12 to hit, reach 5 ft., one creature. Hit:10 (3d6) cold damage. The target must succeed on a 18 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      }
    ],
    "legendary": [
      {
        "Name": "Cantrip",
        "Text": "The lich casts a cantrip."
      },
      {
        "Name": "Paralyzing Touch (Costs 2 Actions)",
        "Text": "The lich uses its Paralyzing Touch."
      },
      {
        "Name": "Frightening Gaze (Costs 2 Actions)",
        "Text": "The lich fixes its gaze on one creature it can see within 10 feet of it. The target must succeed on a 18 Wisdom saving throw against this magic or become frightened for 1 minute. The frightened target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a target's saving throw is successful or the effect ends for it, the target is immune to the lich's gaze for the next 24 hours."
      },
      {
        "Name": "Disrupt Life (Costs 3 Actions)",
        "Text": "Each non-undead creature within 20 feet of the lich must make a 18 Constitution saving throw against this magic, taking 21 (6d6) necrotic damage on a failed save, or half as much damage on a successful one."
      }
    ]
  },
  {
    "name": "Lion",
    "size": "L",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": 12,
    "hp": 26,
    "speed": "Walk 50",
    "str": 17,
    "dex": 15,
    "con": 13,
    "int": 3,
    "wis": 12,
    "cha": 8,
    "skill": "Perception +3, Stealth +6",
    "passive": 13,
    "cr": "1",
    "trait": [
      {
        "Name": "Keen Smell",
        "Text": "The lion has advantage on Wisdom (Perception) checks that rely on smell."
      },
      {
        "Name": "Pack Tactics",
        "Text": "The lion has advantage on an attack roll against a creature if at least one of the lion's allies is within 5 feet of the creature and the ally isn't incapacitated."
      },
      {
        "Name": "Pounce",
        "Text": "If the lion moves at least 20 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a 13 Strength saving throw or be knocked prone. If the target is prone, the lion can make one bite attack against it as a bonus action."
      },
      {
        "Name": "Running Leap",
        "Text": "With a 10-foot running start, the lion can long jump up to 25 feet."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:7 (1d8 + 3) piercing damage."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:6 (1d6 + 3) slashing damage."
      }
    ],
    "environment": [
      "mountain",
      "grassland",
      "hill",
      "desert"
    ]
  },
  {
    "name": "Lizard",
    "size": "T",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": 10,
    "hp": 2,
    "speed": "Walk 20, Climb 20",
    "str": 2,
    "dex": 11,
    "con": 10,
    "int": 1,
    "wis": 8,
    "cha": 3,
    "senses": "darkvision 30 ft.",
    "passive": 9,
    "cr": "0",
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 0 to hit, reach 5 ft., one target. Hit:1 piercing damage."
      }
    ],
    "familiar": true
  },
  {
    "name": "Lizard King",
    "size": "M",
    "type": "humanoid (lizardfolk)",
    "alignment": "Chaotic Evil",
    "ac": "15 natural armor",
    "hp": 78,
    "speed": "Walk 30, Swim 30",
    "str": 17,
    "dex": 12,
    "con": 15,
    "int": 11,
    "wis": 11,
    "cha": 15,
    "save": "Con +4, Wis +2",
    "skill": "Perception +4, Stealth +5, Survival +4",
    "senses": "darkvision 60 ft.",
    "passive": 14,
    "conditionImmune": "frightened",
    "languages": "Abyssal, Draconic",
    "cr": "4",
    "trait": [
      {
        "Name": "Hold Breath",
        "Text": "The lizardfolk can hold its breath for 15 minutes."
      },
      {
        "Name": "Skewer",
        "Text": "Once per turn, when the lizardfolk makes a melee attack with its trident and hits, the target takes an extra 10 (3d6) damage, and the lizardfolk gains temporary hit points equal to the extra damage dealt."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The lizardfolk makes two attacks: one with its bite and one with its claws or trident or two melee attacks with its trident."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:6 (1d6 + 3) piercing damage."
      },
      {
        "Name": "Claws",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:5 (1d4 + 3) slashing damage."
      },
      {
        "Name": "Trident",
        "Text": "Melee or Ranged Weapon 5 to hit, reach 5 ft. or range 20/60 ft., one target. Hit:6 (1d6 + 3) piercing damage, or 7 (1d8 + 3) piercing damage if used with two hands to make a melee attack."
      }
    ],
    "environment": [
      "forest",
      "swamp"
    ]
  },
  {
    "name": "Lizard Queen",
    "size": "M",
    "type": "humanoid (lizardfolk)",
    "alignment": "Chaotic Evil",
    "ac": "15 natural armor",
    "hp": 78,
    "speed": "Walk 30, Swim 30",
    "str": 17,
    "dex": 12,
    "con": 15,
    "int": 11,
    "wis": 11,
    "cha": 15,
    "save": "Con +4, Wis +2",
    "skill": "Perception +4, Stealth +5, Survival +4",
    "senses": "darkvision 60 ft.",
    "passive": 14,
    "conditionImmune": "frightened",
    "languages": "Abyssal, Draconic",
    "cr": "4",
    "trait": [
      {
        "Name": "Hold Breath",
        "Text": "The lizardfolk can hold its breath for 15 minutes."
      },
      {
        "Name": "Skewer",
        "Text": "Once per turn, when the lizardfolk makes a melee attack with its trident and hits, the target takes an extra 10 (3d6) damage, and the lizardfolk gains temporary hit points equal to the extra damage dealt."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The lizardfolk makes two attacks: one with its bite and one with its claws or trident or two melee attacks with its trident."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:6 (1d6 + 3) piercing damage."
      },
      {
        "Name": "Claws",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:5 (1d4 + 3) slashing damage."
      },
      {
        "Name": "Trident",
        "Text": "Melee or Ranged Weapon 5 to hit, reach 5 ft. or range 20/60 ft., one target. Hit:6 (1d6 + 3) piercing damage, or 7 (1d8 + 3) piercing damage if used with two hands to make a melee attack."
      }
    ],
    "environment": [
      "forest",
      "swamp"
    ]
  },
  {
    "name": "Lizardfolk",
    "size": "M",
    "type": "humanoid (lizardfolk)",
    "alignment": "Neutral",
    "ac": "15 natural armor, shield",
    "hp": 22,
    "speed": "Walk 30, Swim 30",
    "str": 15,
    "dex": 10,
    "con": 13,
    "int": 7,
    "wis": 12,
    "cha": 7,
    "skill": "Perception +3, Stealth +4, Survival +5",
    "passive": 13,
    "languages": "Draconic",
    "cr": "1/2",
    "trait": [
      {
        "Name": "Hold Breath",
        "Text": "The lizardfolk can hold its breath for 15 minutes."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The lizardfolk makes two melee attacks, each one with a different weapon."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:5 (1d6 + 2) piercing damage."
      },
      {
        "Name": "Heavy Club",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:5 (1d6 + 2) bludgeoning damage."
      },
      {
        "Name": "Javelin",
        "Text": "Melee or Ranged Weapon 4 to hit, reach 5 ft. or range 30/120 ft., one target. Hit:5 (1d6 + 2) piercing damage."
      },
      {
        "Name": "Spiked Shield",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:5 (1d6 + 2) piercing damage."
      }
    ],
    "environment": [
      "forest",
      "swamp"
    ]
  },
  {
    "name": "Lizardfolk Shaman",
    "size": "M",
    "type": "humanoid (lizardfolk)",
    "alignment": "Neutral",
    "ac": "13 natural armor",
    "hp": 27,
    "speed": "Walk 30, Swim 30",
    "str": 15,
    "dex": 10,
    "con": 13,
    "int": 10,
    "wis": 15,
    "cha": 8,
    "skill": "Perception +4, Stealth +4, Survival +6",
    "passive": 14,
    "languages": "Draconic",
    "cr": "2",
    "trait": [
      {
        "Name": "Hold Breath",
        "Text": "The lizardfolk can hold its breath for 15 minutes."
      },
      {
        "Name": "Spellcasting (Lizardfolk Form Only)",
        "Text": "The lizardfolk is a 5th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 12, +4 to hit with spell attacks). The lizardfolk has the following druid spells prepared:<br><br>Cantrips (at will): <em>druidcraft, produce flame, thorn whip</em><br>1st (1 slots): <em>entangle, fog cloud</em><br>2nd (2 slots): <em>heat metal, spike growth</em><br>3rd (3 slots): <em>conjure animals (reptiles only), plant growth</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack (Lizardfolk Form Only)",
        "Text": "The lizardfolk makes two attacks: one with its bite and one with its claws."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:5 (1d6 + 2) piercing damage, or 7 (1d10 + 2) piercing damage in crocodile form. If the lizardfolk is in crocodile form and the target is a Large or smaller creature, the target is grappled (escape 12). Until this grapple ends, the target is restrained, and the lizardfolk can't bite another target. If the lizardfolk reverts to its true form, the grapple ends."
      },
      {
        "Name": "Claws (Lizardfolk Form Only)",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:4 (1d4 + 2) slashing damage."
      },
      {
        "Name": "Change Shape (Recharges after a Short or Long Rest)",
        "Text": "The lizardfolk magically polymorphs into a crocodile, remaining in that form for up to 1 hour. It can revert to its true form as a bonus action. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
      }
    ],
    "environment": [
      "forest",
      "swamp"
    ]
  },
  {
    "name": "Mage",
    "size": "M",
    "type": "humanoid (any race)",
    "alignment": "Any",
    "ac": 12,
    "hp": 40,
    "speed": "Walk 30",
    "str": 9,
    "dex": 14,
    "con": 11,
    "int": 17,
    "wis": 12,
    "cha": 11,
    "save": "Int +6, Wis +4",
    "skill": "Arcana +6, History +6",
    "passive": 11,
    "languages": "any four languages",
    "cr": "6",
    "action": [
      {
        "Name": "Dagger",
        "Text": "Melee or Ranged Weapon 5 to hit, reach 5 ft. or range 20/60 ft., one target. Hit:4 (1d4 + 2) piercing damage."
      }
    ],
    "trait": [
      {
        "Name": "Spellcasting",
        "Text": "The mage is a 9th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 14, +6 to hit with spell attacks). The mage has the following wizard spells prepared:<br><br>Cantrips (at will): <em>fire bolt, light, mage hand, prestidigitation</em><br>1st (1 slots): <em>detect magic, mage armor, magic missile, shield</em><br>2nd (2 slots): <em>misty step, suggestion</em><br>3rd (3 slots): <em>counterspell, fireball, fly</em><br>4th (4 slots): <em>greater invisibility, ice storm</em><br>5th (5 slots): <em>cone of cold</em>"
      }
    ]
  },
  {
    "name": "Magma Mephit",
    "size": "S",
    "type": "elemental",
    "alignment": "Neutral Evil",
    "ac": 11,
    "hp": 22,
    "speed": "Walk 30, Fly 30",
    "str": 8,
    "dex": 12,
    "con": 12,
    "int": 7,
    "wis": 10,
    "cha": 10,
    "skill": "Stealth +3",
    "senses": "darkvision 60 ft.",
    "passive": 10,
    "immune": "fire, poison",
    "vulnerable": [
      "cold"
    ],
    "conditionImmune": "poisoned",
    "languages": "Ignan, Terran",
    "cr": "1/2",
    "trait": [
      {
        "Name": "Death Burst",
        "Text": "When the mephit dies, it explodes in a burst of lava. Each creature within 5 feet of it must make a 11 Dexterity saving throw, taking 7 (2d6) fire damage on a failed save, or half as much damage on a successful one."
      },
      {
        "Name": "False Appearance",
        "Text": "While the mephit remains motionless, it is indistinguishable from an ordinary mound of magma."
      },
      {
        "Name": "Innate Spellcasting (1/Day)",
        "Text": "The mephit can innately cast heat metal (spell save DC 10), requiring no material components. Its innate spellcasting ability is Charisma.<br>At will: <em>heat metal</em>"
      }
    ],
    "action": [
      {
        "Name": "Claws",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one creature. Hit:3 (1d4 + 1) slashing damage plus 2 (1d4) fire damage."
      },
      {
        "Name": "Fire Breath (Recharge 6)",
        "Text": "The mephit exhales a 15-foot cone of fire. Each creature in that area must make a 11 Dexterity saving throw, taking 7 (2d6) fire damage on a failed save, or half as much damage on a successful one."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Magmin",
    "size": "S",
    "type": "elemental",
    "alignment": "Chaotic Neutral",
    "ac": "14 natural armor",
    "hp": 9,
    "speed": "Walk 30",
    "str": 7,
    "dex": 15,
    "con": 12,
    "int": 8,
    "wis": 11,
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
    "immune": "fire",
    "languages": "Ignan",
    "cr": "1/2",
    "trait": [
      {
        "Name": "Death Burst",
        "Text": "When the magmin dies, it explodes in a burst of fire and magma. Each creature within 10 feet of it must make a 11 Dexterity saving throw, taking 7 (2d6) fire damage on a failed save, or half as much damage on a successful one. Flammable objects that aren't being worn or carried in that area are ignited."
      },
      {
        "Name": "Ignited Illumination",
        "Text": "As a bonus action, the magmin can set itself ablaze or extinguish its flames. While ablaze, the magmin sheds bright light in a 10-foot radius and dim light for an additional 10 feet."
      }
    ],
    "action": [
      {
        "Name": "Touch",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:7 (2d6) fire damage. If the target is a creature or a flammable object, it ignites. Until a creature takes an action to douse the fire, the target takes 3 (1d6) fire damage at the end of each of its turns."
      }
    ]
  },
  {
    "name": "Mammoth",
    "size": "H",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": "13 natural armor",
    "hp": 126,
    "speed": "Walk 40",
    "str": 24,
    "dex": 9,
    "con": 21,
    "int": 3,
    "wis": 11,
    "cha": 6,
    "passive": 10,
    "cr": "6",
    "trait": [
      {
        "Name": "Trampling Charge",
        "Text": "If the mammoth moves at least 20 feet straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a 18 Strength saving throw or be knocked prone. If the target is prone, the mammoth can make one stomp attack against it as a bonus action."
      }
    ],
    "action": [
      {
        "Name": "Gore",
        "Text": "Melee Weapon 10 to hit, reach 10 ft., one target. Hit:25 (4d8 + 7) piercing damage."
      },
      {
        "Name": "Stomp",
        "Text": "Melee Weapon 10 to hit, reach 5 ft., one prone creature. Hit:29 (4d10 + 7) bludgeoning damage."
      }
    ],
    "environment": [
      "arctic"
    ]
  },
  {
    "name": "Manes",
    "size": "S",
    "type": "fiend (demon)",
    "alignment": "Chaotic Evil",
    "ac": "9 natural armor",
    "hp": 9,
    "speed": "Walk 20",
    "str": 10,
    "dex": 9,
    "con": 13,
    "int": 3,
    "wis": 8,
    "cha": 4,
    "senses": "darkvision 60 ft.",
    "passive": 9,
    "resist": [
      "cold",
      "fire",
      "lightning"
    ],
    "immune": "poison",
    "conditionImmune": "charmed, frightened, poisoned",
    "languages": "understands Abyssal but can't speak",
    "cr": "1/8",
    "action": [
      {
        "Name": "Claws",
        "Text": "Melee Weapon 2 to hit, reach 5 ft., one target. Hit:5 (2d4) slashing damage."
      }
    ]
  },
  {
    "name": "Manticore",
    "size": "L",
    "type": "monstrosity",
    "alignment": "Lawful Evil",
    "ac": "14 natural armor",
    "hp": 68,
    "speed": "Walk 30, Fly 50",
    "str": 17,
    "dex": 16,
    "con": 17,
    "int": 7,
    "wis": 12,
    "cha": 8,
    "senses": "darkvision 60 ft.",
    "passive": 11,
    "languages": "Common",
    "cr": "3",
    "trait": [
      {
        "Name": "Tail Spike Regrowth",
        "Text": "The manticore has twenty-four tail spikes. Used spikes regrow when the manticore finishes a long rest."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The manticore makes three attacks: one with its bite and two with its claws or three with its tail spikes."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:7 (1d8 + 3) piercing damage."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:6 (1d6 + 3) slashing damage."
      },
      {
        "Name": "Tail Spike",
        "Text": "Ranged Weapon 5 to hit, range 100/200 ft., one target. Hit:7 (1d8 + 3) piercing damage."
      }
    ],
    "environment": [
      "mountain",
      "grassland",
      "hill",
      "coastal",
      "arctic"
    ]
  },
  {
    "name": "Marid",
    "size": "L",
    "type": "elemental",
    "alignment": "Chaotic Neutral",
    "ac": "17 natural armor",
    "hp": 229,
    "speed": "Walk 30, Fly 60, Swim 90",
    "str": 22,
    "dex": 12,
    "con": 26,
    "int": 18,
    "wis": 17,
    "cha": 18,
    "save": "Dex +5, Wis +7, Cha +8",
    "senses": "blindsight 30 ft., darkvision 120 ft.",
    "passive": 13,
    "resist": [
      "acid",
      "cold",
      "lightning"
    ],
    "languages": "Aquan",
    "cr": "11",
    "trait": [
      {
        "Name": "Amphibious",
        "Text": "The marid can breathe air and water."
      },
      {
        "Name": "Elemental Demise",
        "Text": "If the marid dies, its body disintegrates into a burst of water and foam, leaving behind only equipment the marid was wearing or carrying."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day each: <em>conjure elemental (water elemental only), control water, gaseous form, invisibility, plane shift</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The marid makes two trident attacks."
      },
      {
        "Name": "Trident",
        "Text": "Melee or Ranged Weapon 10 to hit, reach 5 ft. or range 20/60 ft., one target. Hit:13 (2d6 + 6) piercing damage, or 15 (2d8 + 6) piercing damage if used with two hands to make a melee attack."
      },
      {
        "Name": "Water Jet",
        "Text": "The marid magically shoots water in a 60-foot line that is 5 feet wide. Each creature in that line must make a 16 Dexterity saving throw. On a failure, a target takes 21 (6d6) bludgeoning damage and, if it is Huge or smaller, is pushed up to 20 feet away from the marid and knocked prone. On a success, a target takes half the bludgeoning damage, but is neither pushed nor knocked prone."
      }
    ],
    "environment": [
      "underwater",
      "coastal"
    ]
  },
  {
    "name": "Marilith",
    "size": "L",
    "type": "fiend (demon)",
    "alignment": "Chaotic Evil",
    "ac": "18 natural armor",
    "hp": 189,
    "speed": "Walk 40",
    "str": 18,
    "dex": 20,
    "con": 20,
    "int": 18,
    "wis": 16,
    "cha": 20,
    "save": "Str +9, Con +10, Wis +8, Cha +10",
    "senses": "truesight 120 ft.",
    "passive": 13,
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
    "cr": "16",
    "trait": [
      {
        "Name": "Magic Resistance",
        "Text": "The marilith has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Magic Weapons",
        "Text": "The marilith's weapon attacks are magical."
      },
      {
        "Name": "Reactive",
        "Text": "The marilith can take one reaction on every turn in combat."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The marilith can make seven attacks: six with its longswords and one with its tail."
      },
      {
        "Name": "Longsword",
        "Text": "Melee Weapon 9 to hit, reach 5 ft., one target. Hit:13 (2d8 + 4) slashing damage."
      },
      {
        "Name": "Tail",
        "Text": "Melee Weapon 9 to hit, reach 10 ft., one creature. Hit:15 (2d10 + 4) bludgeoning damage. If the target is Medium or smaller, it is grappled (escape 19). Until this grapple ends, the target is restrained, the marilith can automatically hit the target with its tail, and the marilith can't make tail attacks against other targets."
      },
      {
        "Name": "Teleport",
        "Text": "The marilith magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see."
      }
    ],
    "reaction": [
      {
        "Name": "Parry",
        "Text": "The marilith adds 5 to its AC against one melee attack that would hit it. To do so, the marilith must see the attacker and be wielding a melee weapon."
      }
    ]
  },
  {
    "name": "Mastiff",
    "size": "M",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": 12,
    "hp": 5,
    "speed": "Walk 40",
    "str": 13,
    "dex": 14,
    "con": 12,
    "int": 3,
    "wis": 12,
    "cha": 7,
    "skill": "Perception +3",
    "passive": 13,
    "cr": "1/8",
    "trait": [
      {
        "Name": "Keen Hearing and Smell",
        "Text": "The mastiff has advantage on Wisdom (Perception) checks that rely on hearing or smell."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one target. Hit:4 (1d6 + 1) piercing damage. If the target is a creature, it must succeed on a 11 Strength saving throw or be knocked prone."
      }
    ],
    "environment": [
      "forest",
      "hill",
      "urban"
    ]
  },
  {
    "name": "Medusa",
    "size": "M",
    "type": "monstrosity",
    "alignment": "Lawful Evil",
    "ac": "15 natural armor",
    "hp": 127,
    "speed": "Walk 30",
    "str": 10,
    "dex": 15,
    "con": 16,
    "int": 12,
    "wis": 13,
    "cha": 15,
    "skill": "Deception +5, Insight +4, Perception +4, Stealth +5",
    "senses": "darkvision 60 ft.",
    "passive": 14,
    "languages": "Common",
    "cr": "6",
    "trait": [
      {
        "Name": "Petrifying Gaze",
        "Text": "When a creature that can see the medusa's eyes starts its turn within 30 feet of the medusa, the medusa can force it to make a 14 Constitution saving throw if the medusa isn't incapacitated and can see the creature. If the saving throw fails by 5 or more, the creature is instantly petrified. Otherwise, a creature that fails the save begins to turn to stone and is restrained. The restrained creature must repeat the saving throw at the end of its next turn, becoming petrified on a failure or ending the effect on a success. The petrification lasts until the creature is freed by the greater restoration spell or other magic.<br>Unless surprised, a creature can avert its eyes to avoid the saving throw at the start of its turn. If the creature does so, it can't see the medusa until the start of its next turn, when it can avert its eyes again. If the creature looks at the medusa in the meantime, it must immediately make the save.<br>If the medusa sees itself reflected on a polished surface within 30 feet of it and in an area of bright light, the medusa is, due to its curse, affected by its own gaze."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The medusa makes either three melee attacks—one with its snake hair and two with its shortsword—or two ranged attacks with its longbow."
      },
      {
        "Name": "Snake Hair",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one creature. Hit:4 (1d4 + 2) piercing damage plus 14 (4d6) poison damage."
      },
      {
        "Name": "Shortsword",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:5 (1d6 + 2) piercing damage."
      },
      {
        "Name": "Longbow",
        "Text": "Ranged Weapon 5 to hit, range 150/600 ft., one target. Hit:6 (1d8 + 2) piercing damage plus 7 (2d6) poison damage."
      }
    ],
    "environment": [
      "desert"
    ]
  },
  {
    "name": "Merfolk",
    "size": "M",
    "type": "humanoid (merfolk)",
    "alignment": "Neutral",
    "ac": 11,
    "hp": 11,
    "speed": "Walk 10, Swim 40",
    "str": 10,
    "dex": 13,
    "con": 12,
    "int": 11,
    "wis": 11,
    "cha": 12,
    "skill": "Perception +2",
    "passive": 12,
    "languages": "Aquan, Common",
    "cr": "1/8",
    "trait": [
      {
        "Name": "Amphibious",
        "Text": "The merfolk can breathe air and water."
      }
    ],
    "action": [
      {
        "Name": "Spear",
        "Text": "Melee or Ranged Weapon 2 to hit, reach 5 ft. or range 20/60 ft., one target. Hit:3 (1d6) piercing damage, or 4 (1d8) piercing damage if used with two hands to make a melee attack."
      }
    ],
    "environment": [
      "underwater",
      "coastal"
    ]
  },
  {
    "name": "Merrow",
    "size": "L",
    "type": "monstrosity",
    "alignment": "Chaotic Evil",
    "ac": "13 natural armor",
    "hp": 45,
    "speed": "Walk 10, Swim 40",
    "str": 18,
    "dex": 10,
    "con": 15,
    "int": 8,
    "wis": 10,
    "cha": 9,
    "senses": "darkvision 60 ft.",
    "passive": 10,
    "languages": "Abyssal, Aquan",
    "cr": "2",
    "trait": [
      {
        "Name": "Amphibious",
        "Text": "The merrow can breathe air and water."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The merrow makes two attacks: one with its bite and one with its claws or harpoon."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:8 (1d8 + 4) piercing damage."
      },
      {
        "Name": "Claws",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:9 (2d4 + 4) slashing damage."
      },
      {
        "Name": "Harpoon",
        "Text": "Melee or Ranged Weapon 6 to hit, reach 5 ft. or range 20/60 ft., one target. Hit:11 (2d6 + 4) piercing damage. If the target is a Huge or smaller creature, it must succeed on a Strength contest against the merrow or be pulled up to 20 feet toward the merrow."
      }
    ],
    "environment": [
      "underwater",
      "coastal"
    ]
  },
  {
    "name": "Mezzoloth",
    "size": "M",
    "type": "fiend (yugoloth)",
    "alignment": "Neutral Evil",
    "ac": "18 natural armor",
    "hp": 75,
    "speed": "Walk 40",
    "str": 18,
    "dex": 11,
    "con": 16,
    "int": 7,
    "wis": 10,
    "cha": 11,
    "skill": "Perception +3",
    "senses": "blindsight 60 ft., darkvision 60 ft.",
    "passive": 13,
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
    "cr": "5",
    "trait": [
      {
        "Name": "Magic Resistance",
        "Text": "The mezzoloth has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Magic Weapons",
        "Text": "The mezzoloth's weapon attacks are magical."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day: <em>cloudkill</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The mezzoloth makes two attacks: one with its claws and one with its trident."
      },
      {
        "Name": "Claws",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:9 (2d4 + 4) slashing damage."
      },
      {
        "Name": "Trident",
        "Text": "Melee or Ranged Weapon 7 to hit, reach 5 ft. or range 20/60 ft., one target. Hit:7 (1d6 + 4) piercing damage, or 8 (1d8 + 4) piercing damage when held with two claws and used to make a melee attack."
      },
      {
        "Name": "Teleport",
        "Text": "The mezzoloth magically teleports, along with any equipment it is wearing or carrying, up to 60 feet to an unoccupied space it can see."
      }
    ]
  },
  {
    "name": "Mimic",
    "size": "M",
    "type": "monstrosity (shapechanger)",
    "alignment": "Neutral",
    "ac": "12 natural armor",
    "hp": 58,
    "speed": "Walk 15",
    "str": 17,
    "dex": 12,
    "con": 15,
    "int": 5,
    "wis": 13,
    "cha": 8,
    "skill": "Stealth +5",
    "senses": "darkvision 60 ft.",
    "passive": 11,
    "immune": "acid",
    "conditionImmune": "prone",
    "cr": "2",
    "trait": [
      {
        "Name": "Shapechanger",
        "Text": "The mimic can use its action to polymorph into an object or back into its true, amorphous form. Its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
      },
      {
        "Name": "Adhesive (Object Form Only)",
        "Text": "The mimic adheres to anything that touches it. A Huge or smaller creature adhered to the mimic is also grappled by it (escape 13). Ability checks made to escape this grapple have disadvantage."
      },
      {
        "Name": "False Appearance (Object Form Only)",
        "Text": "While the mimic remains motionless, it is indistinguishable from an ordinary object."
      },
      {
        "Name": "Grappler",
        "Text": "The mimic has advantage on attack rolls against any creature grappled by it."
      }
    ],
    "action": [
      {
        "Name": "Pseudopod",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:7 (1d8 + 3) bludgeoning damage. If the mimic is in object form, the target is subjected to its Adhesive trait."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:7 (1d8 + 3) piercing damage plus 4 (1d8) acid damage."
      }
    ],
    "environment": [
      "underdark",
      "urban"
    ]
  },
  {
    "name": "Mind Flayer",
    "alias": [
      "Illithid"
    ],
    "size": "M",
    "type": "aberration",
    "alignment": "Lawful Evil",
    "ac": "15 breastplate",
    "hp": 71,
    "speed": "Walk 30",
    "str": 11,
    "dex": 12,
    "con": 12,
    "int": 19,
    "wis": 17,
    "cha": 17,
    "save": "Int +7, Wis +6, Cha +6",
    "skill": "Arcana +7, Deception +6, Insight +6, Perception +6, Persuasion +6, Stealth +4",
    "senses": "darkvision 120 ft.",
    "passive": 16,
    "languages": "Deep Speech, Undercommon, telepathy 120 ft.",
    "cr": "7",
    "trait": [
      {
        "Name": "Magic Resistance",
        "Text": "The mind flayer has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Innate Spellcasting (Psionics)",
        "Text": "<br>1/day each: <em>dominate monster, plane shift (self only)</em>"
      }
    ],
    "action": [
      {
        "Name": "Tentacles",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one creature. Hit:15 (2d10 + 4) psychic damage. If the target is Medium or smaller, it is grappled (escape 15) and must succeed on a 15 Intelligence saving throw or be stunned until this grapple ends."
      },
      {
        "Name": "Extract Brain",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one incapacitated humanoid grappled by the mind flayer. Hit:The target takes 55 (10d10) piercing damage. If this damage reduces the target to 0 hit points, the mind flayer kills the target by extracting and devouring its brain."
      },
      {
        "Name": "Mind Blast (Recharge 5-6)",
        "Text": "The mind flayer magically emits psychic energy in a 60-foot cone. Each creature in that area must succeed on a 15 Intelligence saving throw or take 22 (4d8 + 4) psychic damage and be stunned for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Mind Flayer Arcanist",
    "alias": [
      "Illithid Arcanist"
    ],
    "size": "M",
    "type": "aberration",
    "alignment": "Lawful Evil",
    "ac": "15 breastplate",
    "hp": 71,
    "speed": "Walk 30",
    "str": 11,
    "dex": 12,
    "con": 12,
    "int": 19,
    "wis": 17,
    "cha": 17,
    "save": "Int +7, Wis +6, Cha +6",
    "skill": "Arcana +7, Deception +6, Insight +6, Perception +6, Persuasion +6, Stealth +4",
    "senses": "darkvision 120 ft.",
    "passive": 16,
    "languages": "Deep Speech, Undercommon, telepathy 120 ft.",
    "cr": "8",
    "trait": [
      {
        "Name": "Magic Resistance",
        "Text": "The mind flayer has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Innate Spellcasting (Psionics)",
        "Text": "<br>1/day each: <em>dominate monster, plane shift (self only)</em>"
      },
      {
        "Name": "Spellcasting",
        "Text": "The mind flayer is a 10th-level spellcaster. Its spellcasting ability is Intelligence (save DC 15, +7 to hit with spell attacks). The mind flayer has the following wizard spells prepared:<br><br>Cantrips (at will): <em>blade ward, dancing lights, mage hand, shocking grasp</em><br>1st (1 slots): <em>detect magic, disguise self, shield, sleep</em><br>2nd (2 slots): <em>blur, invisibility, ray of enfeeblement</em><br>3rd (3 slots): <em>clairvoyance, lightning bolt, sending</em><br>4th (4 slots): <em>confusion, hallucinatory terrain</em><br>5th (5 slots): <em>telekinesis, wall of force</em>"
      }
    ],
    "action": [
      {
        "Name": "Tentacles",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one creature. Hit:15 (2d10 + 4) psychic damage. If the target is Medium or smaller, it is grappled (escape 15) and must succeed on a 15 Intelligence saving throw or be stunned until this grapple ends."
      },
      {
        "Name": "Extract Brain",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one incapacitated humanoid grappled by the mind flayer. Hit:The target takes 55 (10d10) piercing damage. If this damage reduces the target to 0 hit points, the mind flayer kills the target by extracting and devouring its brain."
      },
      {
        "Name": "Mind Blast (Recharge 5-6)",
        "Text": "The mind flayer magically emits psychic energy in a 60-foot cone. Each creature in that area must succeed on a 15 Intelligence saving throw or take 22 (4d8 + 4) psychic damage and be stunned for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Minotaur",
    "size": "L",
    "type": "monstrosity",
    "alignment": "Chaotic Evil",
    "ac": "14 natural armor",
    "hp": 76,
    "speed": "Walk 40",
    "str": 18,
    "dex": 11,
    "con": 16,
    "int": 6,
    "wis": 16,
    "cha": 9,
    "skill": "Perception +7",
    "senses": "darkvision 60 ft.",
    "passive": 17,
    "languages": "Abyssal",
    "cr": "3",
    "trait": [
      {
        "Name": "Charge",
        "Text": "If the minotaur moves at least 10 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 9 (2d8) piercing damage. If the target is a creature, it must succeed on a 14 Strength saving throw or be pushed up to 10 feet away and knocked prone."
      },
      {
        "Name": "Labyrinthine Recall",
        "Text": "The minotaur can perfectly recall any path it has traveled."
      },
      {
        "Name": "Reckless",
        "Text": "At the start of its turn, the minotaur can gain advantage on all melee weapon attack rolls it makes during that turn, but attack rolls against it have advantage until the start of its next turn."
      }
    ],
    "action": [
      {
        "Name": "Greataxe",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:17 (2d12 + 4) slashing damage."
      },
      {
        "Name": "Gore",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:13 (2d8 + 4) piercing damage."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Minotaur Skeleton",
    "size": "L",
    "type": "undead",
    "alignment": "Lawful Evil",
    "ac": "12 natural armor",
    "hp": 67,
    "speed": "Walk 40",
    "str": 18,
    "dex": 11,
    "con": 15,
    "int": 6,
    "wis": 8,
    "cha": 5,
    "senses": "darkvision 60 ft.",
    "passive": 9,
    "immune": "poison",
    "vulnerable": [
      "bludgeoning"
    ],
    "conditionImmune": "exhaustion, poisoned",
    "languages": "understands Abyssal but can't speak",
    "cr": "2",
    "trait": [
      {
        "Name": "Charge",
        "Text": "If the skeleton moves at least 10 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 9 (2d8) piercing damage. If the target is a creature, it must succeed on a 14 Strength saving throw or be pushed up to 10 feet away and knocked prone."
      }
    ],
    "action": [
      {
        "Name": "Greataxe",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:17 (2d12 + 4) slashing damage."
      },
      {
        "Name": "Gore",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:13 (2d8 + 4) piercing damage."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Monodrone",
    "size": "M",
    "type": "construct",
    "alignment": "Lawful Neutral",
    "ac": "15 natural armor",
    "hp": 5,
    "speed": "Walk 30, Fly 30",
    "str": 10,
    "dex": 13,
    "con": 12,
    "int": 4,
    "wis": 10,
    "cha": 5,
    "senses": "truesight 120 ft.",
    "passive": 10,
    "languages": "Modron",
    "cr": "1/8",
    "trait": [
      {
        "Name": "Axiomatic Mind",
        "Text": "The monodrone can't be compelled to act in a manner contrary to its nature or its instructions."
      },
      {
        "Name": "Disintegration",
        "Text": "If the monodrone dies, its body disintegrates into dust, leaving behind its weapons and anything else it was carrying."
      }
    ],
    "action": [
      {
        "Name": "Dagger",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one target. Hit:3 (1d4 + 1) piercing damage."
      },
      {
        "Name": "Javelin",
        "Text": "Melee or Ranged Weapon 2 to hit, reach 5 ft. or range 30/120 ft., one target. Hit:3 (1d6) piercing damage."
      }
    ]
  },
  {
    "name": "Mud Mephit",
    "size": "S",
    "type": "elemental",
    "alignment": "Neutral Evil",
    "ac": 11,
    "hp": 27,
    "speed": "Walk 20, Fly 20, Swim 20",
    "str": 8,
    "dex": 12,
    "con": 12,
    "int": 9,
    "wis": 11,
    "cha": 7,
    "skill": "Stealth +3",
    "senses": "darkvision 60 ft.",
    "passive": 10,
    "immune": "poison",
    "conditionImmune": "poisoned",
    "languages": "Aquan, Terran",
    "cr": "1/4",
    "trait": [
      {
        "Name": "Death Burst",
        "Text": "When the mephit dies, it explodes in a burst of sticky mud. Each Medium or smaller creature within 5 feet of it must succeed on a 11 Dexterity saving throw or be restrained until the end of the creature's next turn."
      },
      {
        "Name": "False Appearance",
        "Text": "While the mephit remains motionless, it is indistinguishable from an ordinary mound of mud."
      }
    ],
    "action": [
      {
        "Name": "Fists",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one creature. Hit:4 (1d6 + 1) bludgeoning damage."
      },
      {
        "Name": "Mud Breath (Recharge 6)",
        "Text": "The mephit belches viscid mud onto one creature within 5 feet of it. If the target is Medium or smaller, it must succeed on a 11 Dexterity saving throw or be restrained for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      }
    ],
    "environment": [
      "swamp"
    ]
  },
  {
    "name": "Mule",
    "size": "M",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": 10,
    "hp": 11,
    "speed": "Walk 40",
    "str": 14,
    "dex": 10,
    "con": 13,
    "int": 2,
    "wis": 10,
    "cha": 5,
    "passive": 10,
    "cr": "1/8",
    "trait": [
      {
        "Name": "Beast of Burden",
        "Text": "The mule is considered to be a Large animal for the purpose of determining its carrying capacity."
      },
      {
        "Name": "Sure-Footed",
        "Text": "The mule has advantage on Strength and Dexterity saving throws made against effects that would knock it prone."
      }
    ],
    "action": [
      {
        "Name": "Hooves",
        "Text": "Melee Weapon 2 to hit, reach 5 ft., one target. Hit:4 (1d4 + 2) bludgeoning damage."
      }
    ],
    "environment": [
      "hill",
      "urban",
      "desert"
    ]
  },
  {
    "name": "Mummy",
    "size": "M",
    "type": "undead",
    "alignment": "Lawful Evil",
    "ac": "11 natural armor",
    "hp": 58,
    "speed": "Walk 20",
    "str": 16,
    "dex": 8,
    "con": 15,
    "int": 6,
    "wis": 10,
    "cha": 12,
    "save": "Wis +2",
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
    "immune": "necrotic, poison",
    "vulnerable": [
      "fire"
    ],
    "conditionImmune": "charmed, exhaustion, frightened, paralyzed, poisoned",
    "languages": "the languages it knew in life",
    "cr": "3",
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The mummy can use its Dreadful Glare and makes one attack with its rotting fist."
      },
      {
        "Name": "Rotting Fist",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:10 (2d6 + 3) bludgeoning damage plus 10 (3d6) necrotic damage. If the target is a creature, it must succeed on a 12 Constitution saving throw or be cursed with mummy rot. The cursed target can't regain hit points, and its hit point maximum decreases by 10 (3d6) for every 24 hours that elapse. If the curse reduces the target's hit point maximum to 0, the target dies, and its body turns to dust. The curse lasts until removed by the remove curse spell or other magic."
      },
      {
        "Name": "Dreadful Glare",
        "Text": "The mummy targets one creature it can see within 60 feet of it. If the target can see the mummy, it must succeed on a 11 Wisdom saving throw against this magic or become frightened until the end of the mummy's next turn. If the target fails the saving throw by 5 or more, it is also paralyzed for the same duration. A target that succeeds on the saving throw is immune to the Dreadful Glare of all mummies (but not mummy lords) for the next 24 hours."
      }
    ],
    "environment": [
      "desert"
    ]
  },
  {
    "name": "Mummy Lord",
    "size": "M",
    "type": "undead",
    "alignment": "Lawful Evil",
    "ac": "17 natural armor",
    "hp": 97,
    "speed": "Walk 20",
    "str": 18,
    "dex": 10,
    "con": 17,
    "int": 11,
    "wis": 18,
    "cha": 16,
    "save": "Con +8, Int +5, Wis +9, Cha +8",
    "skill": "History +5, Religion +5",
    "senses": "darkvision 60 ft.",
    "passive": 14,
    "immune": "necrotic, poison, bludgeoning, piercing, slashing from nonmagical attacks",
    "vulnerable": [
      "fire"
    ],
    "conditionImmune": "charmed, exhaustion, frightened, paralyzed, poisoned",
    "languages": "the languages it knew in life",
    "cr": {
      "cr": "15",
      "lair": "16"
    },
    "trait": [
      {
        "Name": "Magic Resistance",
        "Text": "The mummy lord has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Rejuvenation",
        "Text": "A destroyed mummy lord gains a new body in 24 hours if its heart is intact, regaining all its hit points and becoming active again. The new body appears within 5 feet of the mummy lord's heart."
      },
      {
        "Name": "Spellcasting",
        "Text": "The mummy lord is a 10th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 17, +9 to hit with spell attacks). The mummy lord has the following cleric spells prepared:<br><br>Cantrips (at will): <em>sacred flame, thaumaturgy</em><br>1st (1 slots): <em>command, guiding bolt, shield of faith</em><br>2nd (2 slots): <em>hold person, silence, spiritual weapon</em><br>3rd (3 slots): <em>animate dead, dispel magic</em><br>4th (4 slots): <em>divination, guardian of faith</em><br>5th (5 slots): <em>contagion, insect plague</em><br>6th (6 slots): <em>harm</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The mummy can use its Dreadful Glare and makes one attack with its rotting fist."
      },
      {
        "Name": "Rotting Fist",
        "Text": "Melee Weapon 9 to hit, reach 5 ft., one target. Hit:14 (3d6 + 4) bludgeoning damage plus 21 (6d6) necrotic damage. If the target is a creature, it must succeed on a 16 Constitution saving throw or be cursed with mummy rot. The cursed target can't regain hit points, and its hit point maximum decreases by 10 (3d6) for every 24 hours that elapse. If the curse reduces the target's hit point maximum to 0, the target dies, and its body turns to dust. The curse lasts until removed by the remove curse spell or other magic."
      },
      {
        "Name": "Dreadful Glare",
        "Text": "The mummy lord targets one creature it can see within 60 feet of it. If the target can see the mummy lord, it must succeed on a 16 Wisdom saving throw against this magic or become frightened until the end of the mummy's next turn. If the target fails the saving throw by 5 or more, it is also paralyzed for the same duration. A target that succeeds on the saving throw is immune to the Dreadful Glare of all mummies and mummy lords for the next 24 hours."
      }
    ],
    "legendary": [
      {
        "Name": "Attack",
        "Text": "The mummy lord makes one attack with its rotting fist or uses its Dreadful Glare."
      },
      {
        "Name": "Blinding Dust",
        "Text": "Blinding dust and sand swirls magically around the mummy lord. Each creature within 5 feet of the mummy lord must succeed on a 16 Constitution saving throw or be blinded until the end of the creature's next turn."
      },
      {
        "Name": "Blasphemous Word (Costs 2 Actions)",
        "Text": "The mummy lord utters a blasphemous word. Each non-undead creature within 10 feet of the mummy lord that can hear the magical utterance must succeed on a 16 Constitution saving throw or be stunned until the end of the mummy lord's next turn."
      },
      {
        "Name": "Channel Negative Energy (Costs 2 Actions)",
        "Text": "The mummy lord magically unleashes negative energy. Creatures within 60 feet of the mummy lord, including ones behind barriers and around corners, can't regain hit points until the end of the mummy lord's next turn."
      },
      {
        "Name": "Whirlwind of Sand (Costs 2 Actions)",
        "Text": "The mummy lord magically transforms into a whirlwind of sand, moves up to 60 feet, and reverts to its normal form. While in whirlwind form, the mummy lord is immune to all damage, and it can't be grappled, petrified, knocked prone, restrained, or stunned. Equipment worn or carried by the mummy lord remain in its possession."
      }
    ],
    "environment": [
      "desert"
    ]
  },
  {
    "name": "Myconid Adult",
    "size": "M",
    "type": "plant",
    "alignment": "Lawful Neutral",
    "ac": "12 natural armor",
    "hp": 22,
    "speed": "Walk 20",
    "str": 10,
    "dex": 10,
    "con": 12,
    "int": 10,
    "wis": 13,
    "cha": 7,
    "senses": "darkvision 120 ft.",
    "passive": 11,
    "cr": "1/2",
    "trait": [
      {
        "Name": "Distress Spores",
        "Text": "When the myconid takes damage, all other myconids within 240 feet of it can sense its pain."
      },
      {
        "Name": "Sun Sickness",
        "Text": "While in sunlight, the myconid has disadvantage on ability checks, attack rolls, and saving throws. The myconid dies if it spends more than 1 hour in direct sunlight."
      }
    ],
    "action": [
      {
        "Name": "Fist",
        "Text": "Melee Weapon 2 to hit, reach 5 ft., one target. Hit:5 (2d4) bludgeoning damage plus 5 (2d4) poison damage."
      },
      {
        "Name": "Pacifying Spores (3/Day)",
        "Text": "The myconid ejects spores at one creature it can see within 5 feet of it. The target must succeed on a 11 Constitution saving throw or be stunned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      },
      {
        "Name": "Rapport Spores",
        "Text": "A 20-foot radius of spores extends from the myconid. These spores can go around corners and affect only creatures with an Intelligence of 2 or higher that aren't undead, constructs, or elementals. Affected creatures can communicate telepathically with one another while they are within 30 feet of each other. The effect lasts for 1 hour."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Myconid Sovereign",
    "size": "L",
    "type": "plant",
    "alignment": "Lawful Neutral",
    "ac": "13 natural armor",
    "hp": 60,
    "speed": "Walk 30",
    "str": 12,
    "dex": 10,
    "con": 14,
    "int": 13,
    "wis": 15,
    "cha": 10,
    "senses": "darkvision 120 ft.",
    "passive": 12,
    "cr": "2",
    "trait": [
      {
        "Name": "Distress Spores",
        "Text": "When the myconid takes damage, all other myconids within 240 feet of it can sense its pain."
      },
      {
        "Name": "Sun Sickness",
        "Text": "While in sunlight, the myconid has disadvantage on ability checks, attack rolls, and saving throws. The myconid dies if it spends more than 1 hour in direct sunlight."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The myconid uses either its Hallucination Spores or its Pacifying Spores, then makes a fist attack."
      },
      {
        "Name": "Fist",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one target. Hit:8 (3d4 + 1) bludgeoning damage plus 7 (3d4) poison damage."
      },
      {
        "Name": "Animating Spores (3/Day)",
        "Text": "The myconid targets one corpse of a humanoid or a Large or smaller beast within 5 feet of it and releases spores at the corpse. In 24 hours, the corpse rises as a spore servant. The corpse stays animated for 1d4 + 1 weeks or until destroyed, and it can't be animated again in this way."
      },
      {
        "Name": "Hallucination Spores",
        "Text": "The myconid ejects spores at one creature it can see within 5 feet of it. The target must succeed on a 12 Constitution saving throw or be poisoned for 1 minute. The poisoned target is incapacitated while it hallucinates. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      },
      {
        "Name": "Pacifying Spores",
        "Text": "The myconid ejects spores at one creature it can see within 5 feet of it. The target must succeed on a 12 Constitution saving throw or be stunned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      },
      {
        "Name": "Rapport Spores",
        "Text": "A 30-foot radius of spores extends from the myconid. These spores can go around corners and affect only creatures with an Intelligence of 2 or higher that aren't undead, constructs, or elementals. Affected creatures can communicate telepathically with one another while they are within 30 feet of each other. The effect lasts for 1 hour."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Myconid Sprout",
    "size": "S",
    "type": "plant",
    "alignment": "Lawful Neutral",
    "ac": 10,
    "hp": 7,
    "speed": "Walk 10",
    "str": 8,
    "dex": 10,
    "con": 10,
    "int": 8,
    "wis": 11,
    "cha": 5,
    "senses": "darkvision 120 ft.",
    "passive": 10,
    "cr": "0",
    "trait": [
      {
        "Name": "Distress Spores",
        "Text": "When the myconid takes damage, all other myconids within 240 feet of it can sense its pain."
      },
      {
        "Name": "Sun Sickness",
        "Text": "While in sunlight, the myconid has disadvantage on ability checks, attack rolls, and saving throws. The myconid dies if it spends more than 1 hour in direct sunlight."
      }
    ],
    "action": [
      {
        "Name": "Fist",
        "Text": "Melee Weapon 1 to hit, reach 5 ft., one target. Hit:1 (1d4 - 1) bludgeoning damage plus 2 (1d4) poison damage."
      },
      {
        "Name": "Rapport Spores (3/Day)",
        "Text": "A 10-foot radius of spores extends from the myconid. These spores can go around corners and affect only creatures with an Intelligence of 2 or higher that aren't undead, constructs, or elementals. Affected creatures can communicate telepathically with one another while they are within 30 feet of each other. The effect lasts for 1 hour."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Nalfeshnee",
    "size": "L",
    "type": "fiend (demon)",
    "alignment": "Chaotic Evil",
    "ac": "18 natural armor",
    "hp": 184,
    "speed": "Walk 20, Fly 30",
    "str": 21,
    "dex": 10,
    "con": 22,
    "int": 19,
    "wis": 12,
    "cha": 15,
    "save": "Con +11, Int +9, Wis +6, Cha +7",
    "senses": "truesight 120 ft.",
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
        "Name": "Magic Resistance",
        "Text": "The nalfeshnee has advantage on saving throws against spells and other magical effects."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The nalfeshnee uses Horror Nimbus if it can. It then makes three attacks: one with its bite and two with its claws."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 10 to hit, reach 5 ft., one target. Hit:32 (5d10 + 5) piercing damage."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 10 to hit, reach 10 ft., one target. Hit:15 (3d6 + 5) slashing damage."
      },
      {
        "Name": "Horror Nimbus (Recharge 5-6)",
        "Text": "The nalfeshnee magically emits scintillating, multicolored light. Each creature within 15 feet of the nalfeshnee that can see the light must succeed on a 15 Wisdom saving throw or be frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the nalfeshnee's Horror Nimbus for the next 24 hours."
      },
      {
        "Name": "Teleport",
        "Text": "The nalfeshnee magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see."
      }
    ]
  },
  {
    "name": "Needle Blight",
    "size": "M",
    "type": "plant",
    "alignment": "Neutral Evil",
    "ac": "12 natural armor",
    "hp": 11,
    "speed": "Walk 30",
    "str": 12,
    "dex": 12,
    "con": 13,
    "int": 4,
    "wis": 8,
    "cha": 3,
    "senses": "blindsight 60 ft. (blind beyond this radius)",
    "passive": 9,
    "conditionImmune": "blinded, deafened",
    "languages": "understands Common but can't speak",
    "cr": "1/4",
    "action": [
      {
        "Name": "Claws",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one target. Hit:6 (2d4 + 1) piercing damage."
      },
      {
        "Name": "Needles",
        "Text": "Ranged Weapon 3 to hit, range 30/60 ft., one target. Hit:8 (2d6 + 1) piercing damage."
      }
    ],
    "environment": [
      "forest"
    ],
    "altArt": [
      {
        "name": "Needle Blight",
        "source": "DIP"
      }
    ]
  },
  {
    "name": "Night Hag",
    "size": "M",
    "type": "fiend",
    "alignment": "Neutral Evil",
    "ac": "17 natural armor",
    "hp": 112,
    "speed": "Walk 30",
    "str": 18,
    "dex": 15,
    "con": 16,
    "int": 16,
    "wis": 14,
    "cha": 16,
    "skill": "Deception +7, Insight +6, Perception +6, Stealth +6",
    "senses": "darkvision 120 ft.",
    "passive": 16,
    "resist": [
      "cold",
      "fire",
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
    "conditionImmune": "charmed",
    "languages": "Abyssal, Common, Infernal, Primordial",
    "cr": {
      "cr": "5",
      "coven": "7"
    },
    "trait": [
      {
        "Name": "Magic Resistance",
        "Text": "The hag has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Night Hag Items",
        "Text": "A night hag carries two very rare magic items that she must craft for herself. If either object is lost, the night hag will go to great lengths to retrieve it, as creating a new tool takes time and effort."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>2/day each: <em>plane shift (self only), ray of enfeeblement, sleep</em>"
      }
    ],
    "action": [
      {
        "Name": "Claws (Hag Form Only)",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:13 (2d8 + 4) slashing damage."
      },
      {
        "Name": "Change Shape",
        "Text": "The hag magically polymorphs into a Small or Medium female humanoid, or back into her true form. Her statistics are the same in each form. Any equipment she is wearing or carrying isn't transformed. She reverts to her true form if she dies."
      },
      {
        "Name": "Etherealness",
        "Text": "The hag magically enters the Ethereal Plane from the Material Plane, or vice versa. To do so, the hag must have a heartstone in her possession."
      },
      {
        "Name": "Nightmare Haunting (1/Day)",
        "Text": "While on the Ethereal Plane, the hag magically touches a sleeping humanoid on the Material Plane. A protection from evil and good spell cast on the target prevents this contact, as does a magic circle. As long as the contact persists, the target has dreadful visions. If these visions last for at least 1 hour, the target gains no benefit from its rest, and its hit point maximum is reduced by 5 (1d10). If this effect reduces the target's hit point maximum to 0, the target dies, and if the target was evil, its soul is trapped in the hag's soul bag. The reduction to the target's hit point maximum lasts until removed by the greater restoration spell or similar magic."
      }
    ]
  },
  {
    "name": "Nightmare",
    "size": "L",
    "type": "fiend",
    "alignment": "Neutral Evil",
    "ac": "13 natural armor",
    "hp": 68,
    "speed": "Walk 60, Fly 90",
    "str": 18,
    "dex": 15,
    "con": 16,
    "int": 10,
    "wis": 13,
    "cha": 15,
    "passive": 11,
    "immune": "fire",
    "languages": "understands Abyssal, Common, and Infernal but can't speak ",
    "cr": "3",
    "trait": [
      {
        "Name": "Confer Fire Resistance",
        "Text": "The nightmare can grant resistance to fire damage to anyone riding it."
      },
      {
        "Name": "Illumination",
        "Text": "The nightmare sheds bright light in a 10-foot radius and dim light for an additional 10 feet."
      }
    ],
    "action": [
      {
        "Name": "Hooves",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:13 (2d8 + 4) bludgeoning damage plus 7 (2d6) fire damage."
      },
      {
        "Name": "Ethereal Stride",
        "Text": "The nightmare and up to three willing creatures within 5 feet of it magically enter the Ethereal Plane from the Material Plane, or vice versa."
      }
    ]
  },
  {
    "name": "Noble",
    "size": "M",
    "type": "humanoid (any race)",
    "alignment": "Any",
    "ac": "15 breastplate",
    "hp": 9,
    "speed": "Walk 30",
    "str": 11,
    "dex": 12,
    "con": 11,
    "int": 12,
    "wis": 14,
    "cha": 16,
    "skill": "Deception +5, Insight +4, Persuasion +5",
    "passive": 12,
    "languages": "any two languages",
    "cr": "1/8",
    "action": [
      {
        "Name": "Rapier",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one target. Hit:5 (1d8 + 1) piercing damage."
      }
    ],
    "reaction": [
      {
        "Name": "Parry",
        "Text": "The noble adds 2 to its AC against one melee attack that would hit it. To do so, the noble must see the attacker and be wielding a melee weapon."
      }
    ]
  },
  {
    "name": "Nothic",
    "size": "M",
    "type": "aberration",
    "alignment": "Neutral Evil",
    "ac": "15 natural armor",
    "hp": 45,
    "speed": "Walk 30",
    "str": 14,
    "dex": 16,
    "con": 16,
    "int": 13,
    "wis": 10,
    "cha": 8,
    "skill": "Arcana +3, Insight +4, Perception +2, Stealth +5",
    "senses": "truesight 120 ft.",
    "passive": 12,
    "languages": "Undercommon",
    "cr": "2",
    "trait": [
      {
        "Name": "Keen Sight",
        "Text": "The nothic has advantage on Wisdom (Perception) checks that rely on sight."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The nothic makes two claw attacks."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:6 (1d6 + 3) slashing damage."
      },
      {
        "Name": "Rotting Gaze",
        "Text": "The nothic targets one creature it can see within 30 feet of it. The target must succeed on a 12 Constitution saving throw against this magic or take 10 (3d6) necrotic damage."
      },
      {
        "Name": "Weird Insight",
        "Text": "The nothic targets one creature it can see within 30 feet of it. The target must contest its Charisma (Deception) check against the nothic's Wisdom (Insight) check. If the nothic wins, it magically learns one fact or secret about the target. The target automatically wins if it is immune to being charmed."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Nycaloth",
    "size": "L",
    "type": "fiend (yugoloth)",
    "alignment": "Neutral Evil",
    "ac": "18 natural armor",
    "hp": 123,
    "speed": "Walk 40, Fly 60",
    "str": 20,
    "dex": 11,
    "con": 19,
    "int": 12,
    "wis": 10,
    "cha": 15,
    "skill": "Intimidation +6, Perception +4, Stealth +4",
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
    "cr": "9",
    "trait": [
      {
        "Name": "Magic Resistance",
        "Text": "The nycaloth has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Magic Weapons",
        "Text": "The nycaloth's weapon attacks are magical."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "The nycaloth's innate spellcasting ability is Charisma. The nycaloth can innately cast the following spells, requiring no material components:<br>At will: <em>darkness, detect magic, dispel magic, invisibility (self only), mirror image</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The nycaloth makes two melee attacks, or it makes one melee attack and teleports before or after the attack."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 9 to hit, reach 5 ft., one target. Hit:12 (2d6 + 5) slashing damage. If the target is a creature, it must succeed on a 16 Constitution saving throw or take 5 (2d4) slashing damage at the start of each of its turns due to a fiendish wound. Each time the nycaloth hits the wounded target with this attack, the damage dealt by the wound increases by 5 (2d4). Any creature can take an action to stanch the wound with a successful 13 Wisdom (Medicine) check. The wound also closes if the target receives magical healing."
      },
      {
        "Name": "Greataxe",
        "Text": "Melee Weapon 9 to hit, reach 5 ft., one target. Hit:18 (2d12 + 5) slashing damage."
      },
      {
        "Name": "Teleport",
        "Text": "The nycaloth magically teleports, along with any equipment it is wearing or carrying, up to 60 feet to an unoccupied space it can see."
      }
    ]
  },
  {
    "name": "Ochre Jelly",
    "size": "L",
    "type": "ooze",
    "alignment": "Unaligned",
    "ac": 8,
    "hp": 45,
    "speed": "Walk 10, Climb 10",
    "str": 15,
    "dex": 6,
    "con": 14,
    "int": 2,
    "wis": 6,
    "cha": 1,
    "senses": "blindsight 60 ft. (blind beyond this radius)",
    "passive": 8,
    "resist": [
      "acid"
    ],
    "immune": "lightning, slashing",
    "conditionImmune": "blinded, charmed, deafened, exhaustion, frightened, prone",
    "cr": "2",
    "trait": [
      {
        "Name": "Amorphous",
        "Text": "The jelly can move through a space as narrow as 1 inch wide without squeezing."
      },
      {
        "Name": "Spider Climb",
        "Text": "The jelly can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
      }
    ],
    "action": [
      {
        "Name": "Pseudopod",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:9 (2d6 + 2) bludgeoning damage plus 3 (1d6) acid damage."
      }
    ],
    "reaction": [
      {
        "Name": "Split",
        "Text": "When a jelly that is Medium or larger is subjected to lightning or slashing damage, it splits into two new jellies if it has at least 10 hit points. Each new jelly has hit points equal to half the original jelly's, rounded down. New jellies are one size smaller than the original jelly."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Octopus",
    "size": "S",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": 12,
    "hp": 3,
    "speed": "Walk 5, Swim 30",
    "str": 4,
    "dex": 15,
    "con": 11,
    "int": 3,
    "wis": 10,
    "cha": 4,
    "skill": "Perception +2, Stealth +4",
    "senses": "darkvision 30 ft.",
    "passive": 12,
    "cr": "0",
    "trait": [
      {
        "Name": "Hold Breath",
        "Text": "While out of water, the octopus can hold its breath for 30 minutes."
      },
      {
        "Name": "Underwater Camouflage",
        "Text": "The octopus has advantage on Dexterity (Stealth) checks made while underwater."
      },
      {
        "Name": "Water Breathing",
        "Text": "The octopus can breathe only underwater."
      }
    ],
    "action": [
      {
        "Name": "Tentacles",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:1 bludgeoning damage, and the target is grappled (escape 10). Until this grapple ends, the octopus can't use its tentacles on another target."
      },
      {
        "Name": "Ink Cloud (Recharges after a Short or Long Rest)",
        "Text": "A 5-foot-radius cloud of ink extends all around the octopus if it is underwater. The area is heavily obscured for 1 minute, although a significant current can disperse the ink. After releasing the ink, the octopus can use the Dash action as a bonus action."
      }
    ],
    "familiar": true
  },
  {
    "name": "Ogre",
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
    "cr": "2",
    "action": [
      {
        "Name": "Greatclub",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:13 (2d8 + 4) bludgeoning damage."
      },
      {
        "Name": "Javelin",
        "Text": "Melee or Ranged Weapon 6 to hit, reach 5 ft. or range 30/120 ft., one target. Hit:11 (2d6 + 4) piercing damage."
      }
    ],
    "environment": [
      "grassland",
      "forest",
      "swamp",
      "hill",
      "desert",
      "coastal",
      "arctic",
      "underdark",
      "mountain"
    ]
  },
  {
    "name": "Ogre Zombie",
    "size": "L",
    "type": "undead",
    "alignment": "Neutral Evil",
    "ac": 8,
    "hp": 85,
    "speed": "Walk 30",
    "str": 19,
    "dex": 6,
    "con": 18,
    "int": 3,
    "wis": 6,
    "cha": 5,
    "save": "Wis +0",
    "senses": "darkvision 60 ft.",
    "passive": 8,
    "immune": "poison",
    "conditionImmune": "poisoned",
    "languages": "understands Common and Giant but can't speak",
    "cr": "2",
    "trait": [
      {
        "Name": "Undead Fortitude",
        "Text": "If damage reduces the zombie to 0 hit points, it must make a Constitution saving throw with a DC of 5 + the damage taken, unless the damage is radiant or from a critical hit. On a success, the zombie drops to 1 hit point instead."
      }
    ],
    "action": [
      {
        "Name": "Morningstar",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:13 (2d8 + 4) bludgeoning damage."
      }
    ]
  },
  {
    "name": "Oni",
    "size": "L",
    "type": "giant",
    "alignment": "Lawful Evil",
    "ac": "16 chain mail",
    "hp": 110,
    "speed": "Walk 30, Fly 30",
    "str": 19,
    "dex": 11,
    "con": 16,
    "int": 14,
    "wis": 12,
    "cha": 15,
    "save": "Dex +3, Con +6, Wis +4, Cha +5",
    "skill": "Arcana +5, Deception +8, Perception +4",
    "senses": "darkvision 60 ft.",
    "passive": 14,
    "languages": "Common, Giant",
    "cr": "7",
    "trait": [
      {
        "Name": "Magic Weapons",
        "Text": "The oni's weapon attacks are magical."
      },
      {
        "Name": "Regeneration",
        "Text": "The oni regains 10 hit points at the start of its turn if it has at least 1 hit point."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day each: <em>charm person, cone of cold, gaseous form, sleep</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The oni makes two attacks, either with its claws or its glaive."
      },
      {
        "Name": "Claw (Oni Form Only)",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:8 (1d8 + 4) slashing damage."
      },
      {
        "Name": "Glaive",
        "Text": "Melee Weapon 7 to hit, reach 10 ft., one target. Hit:15 (2d10 + 4) slashing damage, or 9 (1d10 + 4) slashing damage in Small or Medium form."
      },
      {
        "Name": "Change Shape",
        "Text": "The oni magically polymorphs into a Small or Medium humanoid, into a Large giant, or back into its true form. Other than its size, its statistics are the same in each form. The only equipment that is transformed is its glaive, which shrinks so that it can be wielded in humanoid form. If the oni dies, it reverts to its true form, and its glaive reverts to its normal size."
      }
    ],
    "environment": [
      "forest",
      "urban"
    ]
  },
  {
    "name": "Orc",
    "size": "M",
    "type": "humanoid (orc)",
    "alignment": "Chaotic Evil",
    "ac": "13 hide armor",
    "hp": 15,
    "speed": "Walk 30",
    "str": 16,
    "dex": 12,
    "con": 16,
    "int": 7,
    "wis": 11,
    "cha": 10,
    "skill": "Intimidation +2",
    "senses": "darkvision 60 ft.",
    "passive": 10,
    "languages": "Common, Orc",
    "cr": "1/2",
    "trait": [
      {
        "Name": "Aggressive",
        "Text": "As a bonus action, the orc can move up to its speed toward a hostile creature that it can see."
      }
    ],
    "action": [
      {
        "Name": "Greataxe",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:9 (1d12 + 3) slashing damage."
      },
      {
        "Name": "Javelin",
        "Text": "Melee or Ranged Weapon 5 to hit, reach 5 ft. or range 30/120 ft., one target. Hit:6 (1d6 + 3) piercing damage."
      }
    ],
    "environment": [
      "underdark",
      "mountain",
      "grassland",
      "forest",
      "swamp",
      "hill",
      "arctic"
    ],
    "altArt": [
      {
        "name": "Iceshield Orc",
        "source": "PotA"
      }
    ]
  },
  {
    "name": "Orc Eye of Gruumsh",
    "size": "M",
    "type": "humanoid (orc)",
    "alignment": "Chaotic Evil",
    "ac": "16 ring mail",
    "hp": 45,
    "speed": "Walk 30",
    "str": 16,
    "dex": 12,
    "con": 17,
    "int": 9,
    "wis": 13,
    "cha": 12,
    "skill": "Intimidation +3, Religion +1",
    "senses": "darkvision 60 ft.",
    "passive": 11,
    "languages": "Common, Orc",
    "cr": "2",
    "trait": [
      {
        "Name": "Aggressive",
        "Text": "As a bonus action, the orc can move up to its speed toward a hostile creature that it can see."
      },
      {
        "Name": "Gruumsh's Fury",
        "Text": "The orc deals an extra 4 (1d8) damage when it hits with a weapon attack (included in the attacks)."
      },
      {
        "Name": "Spellcasting",
        "Text": "The orc is a 3rd-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 11, +3 to hit with spell attacks). The orc has the following cleric spells prepared:<br><br>Cantrips (at will): <em>guidance, resistance, thaumaturgy</em><br>1st (1 slots): <em>bless, command</em><br>2nd (2 slots): <em>augury, spiritual weapon (spear)</em>"
      }
    ],
    "action": [
      {
        "Name": "Spear",
        "Text": "Melee or Ranged Weapon 5 to hit, reach 5 ft. or range 20/60 ft., one target. Hit:11 (1d6 + 3 plus 1d8) piercing damage, or 12 (2d8 + 3) piercing damage if used with two hands to make a melee attack."
      }
    ],
    "environment": [
      "underdark",
      "mountain",
      "grassland",
      "forest",
      "swamp",
      "hill",
      "arctic"
    ]
  },
  {
    "name": "Orc War Chief",
    "size": "M",
    "type": "humanoid (orc)",
    "alignment": "Chaotic Evil",
    "ac": "16 chain mail",
    "hp": 93,
    "speed": "Walk 30",
    "str": 18,
    "dex": 12,
    "con": 18,
    "int": 11,
    "wis": 11,
    "cha": 16,
    "save": "Str +6, Con +6, Wis +2",
    "skill": "Intimidation +5",
    "senses": "darkvision 60 ft.",
    "passive": 10,
    "languages": "Common, Orc",
    "cr": "4",
    "trait": [
      {
        "Name": "Aggressive",
        "Text": "As a bonus action, the orc can move up to its speed toward a hostile creature that it can see."
      },
      {
        "Name": "Gruumsh's Fury",
        "Text": "The orc deals an extra 4 (1d8) damage when it hits with a weapon attack (included in the attacks)."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The orc makes two attacks with its greataxe or its spear."
      },
      {
        "Name": "Greataxe",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:15 (1d12 + 4 plus 1d8) slashing damage."
      },
      {
        "Name": "Spear",
        "Text": "Melee or Ranged Weapon 6 to hit, reach 5 ft. or range 20/60 ft., one target. Hit:12 (1d6 + 4 plus 1d8) piercing damage, or 13 (2d8 + 4) piercing damage if used with two hands to make a melee attack."
      },
      {
        "Name": "Battle Cry (1/Day)",
        "Text": "Each creature of the war chief's choice that is within 30 feet of it, can hear it, and not already affected by Battle Cry gain advantage on attack rolls until the start of the war chief's next turn. The war chief can then make one attack as a bonus action."
      }
    ],
    "environment": [
      "underdark",
      "mountain",
      "grassland",
      "forest",
      "swamp",
      "hill",
      "arctic"
    ]
  },
  {
    "name": "Orog",
    "size": "M",
    "type": "humanoid (orc)",
    "alignment": "Chaotic Evil",
    "ac": "18 plate armor",
    "hp": 42,
    "speed": "Walk 30",
    "str": 18,
    "dex": 12,
    "con": 18,
    "int": 12,
    "wis": 11,
    "cha": 12,
    "skill": "Intimidation +5, Survival +2",
    "senses": "darkvision 60 ft.",
    "passive": 10,
    "languages": "Common, Orc",
    "cr": "2",
    "trait": [
      {
        "Name": "Aggressive",
        "Text": "As a bonus action, the orog can move up to its speed toward a hostile creature that it can see."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The orog makes two greataxe attacks."
      },
      {
        "Name": "Greataxe",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:10 (1d12 + 4) slashing damage."
      },
      {
        "Name": "Javelin",
        "Text": "Melee or Ranged Weapon 6 to hit, reach 5 ft. or range 30/120 ft., one target. Hit:7 (1d6 + 4) piercing damage."
      }
    ],
    "environment": [
      "underdark",
      "mountain",
      "grassland",
      "forest",
      "hill",
      "arctic"
    ]
  },
  {
    "name": "Otyugh",
    "size": "L",
    "type": "aberration",
    "alignment": "Neutral",
    "ac": "14 natural armor",
    "hp": 114,
    "speed": "Walk 30",
    "str": 16,
    "dex": 11,
    "con": 19,
    "int": 6,
    "wis": 13,
    "cha": 6,
    "save": "Con +7",
    "senses": "darkvision 120 ft.",
    "passive": 11,
    "languages": "Otyugh",
    "cr": "5",
    "trait": [
      {
        "Name": "Limited Telepathy",
        "Text": "The otyugh can magically transmit simple messages and images to any creature within 120 feet of it that can understand a language. This form of telepathy doesn't allow the receiving creature to telepathically respond."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The otyugh makes three attacks: one with its bite and two with its tentacles."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:12 (2d8 + 3) piercing damage. If the target is a creature, it must succeed on a 15 Constitution saving throw against disease or become poisoned until the disease is cured. Every 24 hours that elapse, the target must repeat the saving throw, reducing its hit point maximum by 5 (1d10) on a failure. The disease is cured on a success. The target dies if the disease reduces its hit point maximum to 0. This reduction to the target's hit point maximum lasts until the disease is cured."
      },
      {
        "Name": "Tentacle",
        "Text": "Melee Weapon 6 to hit, reach 10 ft., one target. Hit:7 (1d8 + 3) bludgeoning damage plus 4 (1d8) piercing damage. If the target is Medium or smaller, it is grappled (escape 13) and restrained until the grapple ends. The otyugh has two tentacles, each of which can grapple one target."
      },
      {
        "Name": "Tentacle Slam",
        "Text": "The otyugh slams creatures grappled by it into each other or a solid surface. Each creature must succeed on a 14 Constitution saving throw or take 10 (2d6 + 3) bludgeoning damage and be stunned until the end of the otyugh's next turn. On a successful save, the target takes half the bludgeoning damage and isn't stunned."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Owl",
    "size": "T",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": 11,
    "hp": 1,
    "speed": "Walk 5, Fly 60",
    "str": 3,
    "dex": 13,
    "con": 8,
    "int": 2,
    "wis": 12,
    "cha": 7,
    "skill": "Perception +3, Stealth +3",
    "senses": "darkvision 120 ft.",
    "passive": 13,
    "cr": "0",
    "trait": [
      {
        "Name": "Flyby",
        "Text": "The owl doesn't provoke opportunity attacks when it flies out of an enemy's reach."
      },
      {
        "Name": "Keen Hearing and Sight",
        "Text": "The owl has advantage on Wisdom (Perception) checks that rely on hearing or sight."
      }
    ],
    "action": [
      {
        "Name": "Talons",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one target. Hit:1 slashing damage."
      }
    ],
    "environment": [
      "forest",
      "arctic"
    ],
    "familiar": true
  },
  {
    "name": "Owlbear",
    "size": "L",
    "type": "monstrosity",
    "alignment": "Unaligned",
    "ac": "13 natural armor",
    "hp": 59,
    "speed": "Walk 40",
    "str": 20,
    "dex": 12,
    "con": 17,
    "int": 3,
    "wis": 12,
    "cha": 7,
    "skill": "Perception +3",
    "senses": "darkvision 60 ft.",
    "passive": 13,
    "cr": "3",
    "trait": [
      {
        "Name": "Keen Sight and Smell",
        "Text": "The owlbear has advantage on Wisdom (Perception) checks that rely on sight or smell."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The owlbear makes two attacks: one with its beak and one with its claws."
      },
      {
        "Name": "Beak",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one creature. Hit:10 (1d10 + 5) piercing damage."
      },
      {
        "Name": "Claws",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:14 (2d8 + 5) slashing damage."
      }
    ],
    "environment": [
      "forest"
    ],
    "altArt": [
      {
        "name": "Owlbear",
        "source": "RMBRE"
      }
    ]
  },
  {
    "name": "Panther",
    "size": "M",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": 12,
    "hp": 13,
    "speed": "Walk 50, Climb 40",
    "str": 14,
    "dex": 15,
    "con": 10,
    "int": 3,
    "wis": 14,
    "cha": 7,
    "skill": "Perception +4, Stealth +6",
    "passive": 14,
    "cr": "1/4",
    "trait": [
      {
        "Name": "Keen Smell",
        "Text": "The panther has advantage on Wisdom (Perception) checks that rely on smell."
      },
      {
        "Name": "Pounce",
        "Text": "If the panther moves at least 20 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a 12 Strength saving throw or be knocked prone. If the target is prone, the panther can make one bite attack against it as a bonus action."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:5 (1d6 + 2) piercing damage."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:4 (1d4 + 2) slashing damage."
      }
    ],
    "environment": [
      "grassland",
      "forest",
      "hill"
    ]
  },
  {
    "name": "Pegasus",
    "size": "L",
    "type": "celestial",
    "alignment": "Chaotic Good",
    "ac": 12,
    "hp": 59,
    "speed": "Walk 60, Fly 90",
    "str": 18,
    "dex": 15,
    "con": 16,
    "int": 10,
    "wis": 15,
    "cha": 13,
    "save": "Dex +4, Wis +4, Cha +3",
    "skill": "Perception +6",
    "passive": 16,
    "languages": "understands Celestial, Common, Elvish, and Sylvan but can't speak",
    "cr": "2",
    "action": [
      {
        "Name": "Hooves",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:11 (2d6 + 4) bludgeoning damage."
      }
    ],
    "environment": [
      "grassland",
      "forest",
      "hill"
    ]
  },
  {
    "name": "Pentadrone",
    "size": "L",
    "type": "construct",
    "alignment": "Lawful Neutral",
    "ac": "16 natural armor",
    "hp": 32,
    "speed": "Walk 40",
    "str": 15,
    "dex": 14,
    "con": 12,
    "int": 10,
    "wis": 10,
    "cha": 13,
    "skill": "Perception +4",
    "senses": "truesight 120 ft.",
    "passive": 14,
    "languages": "Modron",
    "cr": "2",
    "trait": [
      {
        "Name": "Axiomatic Mind",
        "Text": "The pentadrone can't be compelled to act in a manner contrary to its nature or its instructions."
      },
      {
        "Name": "Disintegration",
        "Text": "If the pentadrone dies, its body disintegrates into dust, leaving behind its weapons and anything else it was carrying."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The pentadrone makes five arm attacks."
      },
      {
        "Name": "Arm",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:5 (1d6 + 2) bludgeoning damage."
      },
      {
        "Name": "Paralysis Gas (Recharge 5-6)",
        "Text": "The pentadrone exhales a 30-foot cone of gas. Each creature in that area must succeed on a 11 Constitution saving throw or be paralyzed for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      }
    ]
  },
  {
    "name": "Peryton",
    "size": "M",
    "type": "monstrosity",
    "alignment": "Chaotic Evil",
    "ac": "13 natural armor",
    "hp": 33,
    "speed": "Walk 20, Fly 60",
    "str": 16,
    "dex": 12,
    "con": 13,
    "int": 9,
    "wis": 12,
    "cha": 10,
    "skill": "Perception +5",
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
    "languages": "understands Common and Elvish but can't speak",
    "cr": "2",
    "trait": [
      {
        "Name": "Dive Attack",
        "Text": "If the peryton is flying and dives at least 30 feet straight toward a target and then hits it with a melee weapon attack, the attack deals an extra 9 (2d8) damage to the target."
      },
      {
        "Name": "Flyby",
        "Text": "The peryton doesn't provoke an opportunity attack when it flies out of an enemy's reach."
      },
      {
        "Name": "Keen Sight and Smell",
        "Text": "The peryton has advantage on Wisdom (Perception) checks that rely on sight or smell."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The peryton makes one gore attack and one talon attack."
      },
      {
        "Name": "Gore",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:7 (1d8 + 3) piercing damage."
      },
      {
        "Name": "Talons",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:8 (2d4 + 3) piercing damage."
      }
    ],
    "environment": [
      "mountain",
      "hill"
    ]
  },
  {
    "name": "Phase Spider",
    "size": "L",
    "type": "monstrosity",
    "alignment": "Unaligned",
    "ac": "13 natural armor",
    "hp": 32,
    "speed": "Walk 30, Climb 30",
    "str": 15,
    "dex": 15,
    "con": 12,
    "int": 6,
    "wis": 10,
    "cha": 6,
    "skill": "Stealth +6",
    "senses": "darkvision 60 ft.",
    "passive": 10,
    "cr": "3",
    "trait": [
      {
        "Name": "Ethereal Jaunt",
        "Text": "As a bonus action, the spider can magically shift from the Material Plane to the Ethereal Plane, or vice versa."
      },
      {
        "Name": "Spider Climb",
        "Text": "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
      },
      {
        "Name": "Web Walker",
        "Text": "The spider ignores movement restrictions caused by webbing."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one creature. Hit:7 (1d10 + 2) piercing damage, and the target must make a 11 Constitution saving throw, taking 18 (4d8) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way."
      }
    ],
    "environment": [
      "underdark",
      "grassland",
      "forest",
      "hill",
      "urban",
      "desert"
    ]
  },
  {
    "name": "Piercer",
    "size": "M",
    "type": "monstrosity",
    "alignment": "Unaligned",
    "ac": "15 natural armor",
    "hp": 22,
    "speed": "Walk 5, Climb 5",
    "str": 10,
    "dex": 13,
    "con": 16,
    "int": 1,
    "wis": 7,
    "cha": 3,
    "skill": "Stealth +5",
    "senses": "blindsight 30 ft., darkvision 60 ft.",
    "passive": 8,
    "cr": "1/2",
    "trait": [
      {
        "Name": "False Appearance",
        "Text": "While the piercer remains motionless on the ceiling, it is indistinguishable from a normal stalactite."
      },
      {
        "Name": "Spider Climb",
        "Text": "The piercer can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
      }
    ],
    "action": [
      {
        "Name": "Drop",
        "Text": "Melee Weapon 3 to hit, one creature directly underneath the piercer. Hit:3 (1d6) piercing damage per 10 feet fallen, up to 21 (6d6). Miss: The piercer takes half the normal falling damage for the distance fallen."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Pit Fiend",
    "size": "L",
    "type": "fiend (devil)",
    "alignment": "Lawful Evil",
    "ac": "19 natural armor",
    "hp": 300,
    "speed": "Walk 30, Fly 60",
    "str": 26,
    "dex": 14,
    "con": 24,
    "int": 22,
    "wis": 18,
    "cha": 24,
    "save": "Dex +8, Con +13, Wis +10",
    "senses": "truesight 120 ft.",
    "passive": 14,
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
    "languages": "Infernal, telepathy 120 ft.",
    "cr": "20",
    "trait": [
      {
        "Name": "Fear Aura",
        "Text": "Any creature hostile to the pit fiend that starts its turn within 20 feet of the pit fiend must make a 21 Wisdom saving throw, unless the pit fiend is incapacitated. On a failed save, the creature is frightened until the start of its next turn. If a creature's saving throw is successful, the creature is immune to the pit fiend's Fear Aura for the next 24 hours."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The pit fiend has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Magic Weapons",
        "Text": "The pit fiend's weapon attacks are magical."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>3/day each: <em>hold monster, wall of fire</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The pit fiend makes four attacks: one with its bite, one with its claw, one with its mace, and one with its tail."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 14 to hit, reach 5 ft., one target. Hit:22 (4d6 + 8) piercing damage. The target must succeed on a 21 Constitution saving throw or become poisoned. While poisoned in this way, the target can't regain hit points, and it takes 21 (6d6) poison damage at the start of each of its turns. The poisoned target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 14 to hit, reach 10 ft., one target. Hit:17 (2d8 + 8) slashing damage."
      },
      {
        "Name": "Mace",
        "Text": "Melee Weapon 14 to hit, reach 10 ft., one target. Hit:15 (2d6 + 8) bludgeoning damage plus 21 (6d6) fire damage."
      },
      {
        "Name": "Tail",
        "Text": "Melee Weapon 14 to hit, reach 10 ft., one target. Hit:24 (3d10 + 8) bludgeoning damage."
      }
    ]
  },
  {
    "name": "Pixie",
    "size": "T",
    "type": "fey",
    "alignment": "Neutral Good",
    "ac": 15,
    "hp": 1,
    "speed": "Walk 10, Fly 30",
    "str": 2,
    "dex": 20,
    "con": 8,
    "int": 10,
    "wis": 14,
    "cha": 15,
    "skill": "Perception +4, Stealth +7",
    "passive": 14,
    "languages": "Sylvan",
    "cr": "1/4",
    "trait": [
      {
        "Name": "Magic Resistance",
        "Text": "The pixie has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day each: <em>confusion, dancing lights, detect evil and good, detect thoughts, dispel magic, entangle, fly, phantasmal force, polymorph, sleep</em>"
      }
    ],
    "action": [
      {
        "Name": "Superior Invisibility",
        "Text": "The pixie magically turns invisible until its concentration ends (as if concentrating on a spell). Any equipment the pixie wears or carries is invisible with it."
      }
    ],
    "environment": [
      "forest"
    ]
  },
  {
    "name": "Planetar",
    "size": "L",
    "type": "celestial",
    "alignment": "Lawful Good",
    "ac": "19 natural armor",
    "hp": 200,
    "speed": "Walk 40, Fly 120",
    "str": 24,
    "dex": 20,
    "con": 24,
    "int": 19,
    "wis": 22,
    "cha": 25,
    "save": "Con +12, Wis +11, Cha +12",
    "skill": "Perception +11",
    "senses": "truesight 120 ft.",
    "passive": 21,
    "resist": [
      "radiant",
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
    "conditionImmune": "charmed, exhaustion, frightened",
    "languages": "all, telepathy 120 ft.",
    "cr": "16",
    "trait": [
      {
        "Name": "Angelic Weapons",
        "Text": "The planetar's weapon attacks are magical. When the planetar hits with any weapon, the weapon deals an extra 5d8 radiant damage (included in the attack)."
      },
      {
        "Name": "Divine Awareness",
        "Text": "The planetar knows if it hears a lie."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The planetar has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day each: <em>commune, control weather, insect plague</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The planetar makes two melee attacks."
      },
      {
        "Name": "Greatsword",
        "Text": "Melee Weapon 12 to hit, reach 5 ft., one target. Hit:21 (4d6 + 7) slashing damage plus 22 (5d8) radiant damage."
      },
      {
        "Name": "Healing Touch (4/Day)",
        "Text": "The planetar touches another creature. The target magically regains 30 (6d8 + 3) hit points and is freed from any curse, disease, poison, blindness, or deafness."
      }
    ]
  },
  {
    "name": "Plesiosaurus",
    "size": "L",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": "13 natural armor",
    "hp": 68,
    "speed": "Walk 20, Swim 40",
    "str": 18,
    "dex": 15,
    "con": 16,
    "int": 2,
    "wis": 12,
    "cha": 5,
    "skill": "Perception +3, Stealth +4",
    "passive": 13,
    "cr": "2",
    "trait": [
      {
        "Name": "Hold Breath",
        "Text": "The plesiosaurus can hold its breath for 1 hour."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 6 to hit, reach 10 ft., one target. Hit:14 (3d6 + 4) piercing damage."
      }
    ],
    "environment": [
      "underwater",
      "coastal"
    ]
  },
  {
    "name": "Poisonous Snake",
    "size": "T",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": 13,
    "hp": 2,
    "speed": "Walk 30, Swim 30",
    "str": 2,
    "dex": 16,
    "con": 11,
    "int": 1,
    "wis": 10,
    "cha": 3,
    "senses": "blindsight 10 ft.",
    "passive": 10,
    "cr": "1/8",
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:1 piercing damage, and the target must make a 10 Constitution saving throw, taking 5 (2d4) poison damage on a failed save, or half as much damage on a successful one."
      }
    ],
    "environment": [
      "grassland",
      "forest",
      "swamp",
      "hill",
      "desert",
      "coastal"
    ],
    "familiar": true
  },
  {
    "name": "Polar Bear",
    "size": "L",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": "12 natural armor",
    "hp": 42,
    "speed": "Walk 40, Swim 30",
    "str": 20,
    "dex": 10,
    "con": 16,
    "int": 2,
    "wis": 13,
    "cha": 7,
    "skill": "Perception +3",
    "passive": 13,
    "cr": "2",
    "trait": [
      {
        "Name": "Keen Smell",
        "Text": "The bear has advantage on Wisdom (Perception) checks that rely on smell."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The bear makes two attacks: one with its bite and one with its claws."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:9 (1d8 + 5) piercing damage."
      },
      {
        "Name": "Claws",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:12 (2d6 + 5) slashing damage."
      }
    ],
    "environment": [
      "underdark",
      "arctic"
    ]
  },
  {
    "name": "Poltergeist",
    "size": "M",
    "type": "undead",
    "alignment": "Chaotic Evil",
    "ac": 12,
    "hp": 22,
    "speed": "Walk 0, Fly 50 (hover)",
    "str": 1,
    "dex": 14,
    "con": 11,
    "int": 10,
    "wis": 10,
    "cha": 11,
    "senses": "darkvision 60 ft.",
    "passive": 10,
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
    "conditionImmune": "charmed, exhaustion, grappled, paralyzed, petrified, poisoned, prone, restrained, unconscious",
    "languages": "understands all languages it knew in life but can't speak",
    "cr": "2",
    "trait": [
      {
        "Name": "Incorporeal Movement",
        "Text": "The poltergeist can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object."
      },
      {
        "Name": "Sunlight Sensitivity",
        "Text": "While in sunlight, the poltergeist has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
      },
      {
        "Name": "Invisibility",
        "Text": "The poltergeist is invisible."
      }
    ],
    "action": [
      {
        "Name": "Forceful Slam",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one creature. Hit:10 (3d6) force damage."
      },
      {
        "Name": "Telekinetic Thrust",
        "Text": "The poltergeist targets a creature or unattended object within 30 feet of it. A creature must be Medium or smaller to be affected by this magic, and an object can weigh up to 150 pounds."
      }
    ],
    "environment": [
      "underdark",
      "urban"
    ]
  },
  {
    "name": "Pony",
    "size": "M",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": 10,
    "hp": 11,
    "speed": "Walk 40",
    "str": 15,
    "dex": 10,
    "con": 13,
    "int": 2,
    "wis": 11,
    "cha": 7,
    "passive": 10,
    "cr": "1/8",
    "action": [
      {
        "Name": "Hooves",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:7 (2d4 + 2) bludgeoning damage."
      }
    ],
    "environment": [
      "urban"
    ]
  },
  {
    "name": "Priest",
    "size": "M",
    "type": "humanoid (any race)",
    "alignment": "Any",
    "ac": "13 chain shirt",
    "hp": 27,
    "speed": "Walk 30",
    "str": 10,
    "dex": 10,
    "con": 12,
    "int": 13,
    "wis": 16,
    "cha": 13,
    "skill": "Medicine +7, Persuasion +3, Religion +5",
    "passive": 13,
    "languages": "any two languages",
    "cr": "2",
    "trait": [
      {
        "Name": "Divine Eminence",
        "Text": "As a bonus action, the priest can expend a spell slot to cause its melee weapon attacks to magically deal an extra 10 (3d6) radiant damage to a target on a hit. This benefit lasts until the end of the turn. If the priest expends a spell slot of 2nd level or higher, the extra damage increases by 1d6 for each level above 1st."
      },
      {
        "Name": "Spellcasting",
        "Text": "The priest is a 5th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 13, +5 to hit with spell attacks). The priest has the following cleric spells prepared:<br><br>Cantrips (at will): <em>light, sacred flame, thaumaturgy</em><br>1st (1 slots): <em>cure wounds, guiding bolt, sanctuary</em><br>2nd (2 slots): <em>lesser restoration, spiritual weapon</em><br>3rd (3 slots): <em>dispel magic, spirit guardians</em>"
      }
    ],
    "action": [
      {
        "Name": "Mace",
        "Text": "Melee Weapon 2 to hit, reach 5 ft., one target. Hit:3 (1d6) bludgeoning damage."
      }
    ]
  },
  {
    "name": "Pseudodragon",
    "size": "T",
    "type": "dragon",
    "alignment": "Neutral Good",
    "ac": 13,
    "hp": 7,
    "speed": "Walk 15, Fly 60",
    "str": 6,
    "dex": 15,
    "con": 13,
    "int": 10,
    "wis": 12,
    "cha": 10,
    "skill": "Perception +3, Stealth +4",
    "senses": "blindsight 10 ft., darkvision 60 ft.",
    "passive": 13,
    "languages": "understands Common and Draconic but can't speak",
    "cr": "1/4",
    "trait": [
      {
        "Name": "Keen Senses",
        "Text": "The pseudodragon has advantage on Wisdom (Perception) checks that rely on sight, hearing, or smell."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The pseudodragon has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Limited Telepathy",
        "Text": "The pseudodragon can magically communicate simple ideas, emotions, and images telepathically with any creature within 100 feet of it that can understand a language."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:4 (1d4 + 2) piercing damage."
      },
      {
        "Name": "Sting",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one creature. Hit:4 (1d4 + 2) piercing damage, and the target must succeed on a 11 Constitution saving throw or become poisoned for 1 hour. If the saving throw fails by 5 or more, the target falls unconscious for the same duration, or until it takes damage or another creature uses an action to shake it awake."
      }
    ],
    "environment": [
      "mountain",
      "forest",
      "hill",
      "urban",
      "desert",
      "coastal"
    ],
    "familiar": true
  },
  {
    "name": "Pteranodon",
    "size": "M",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": "13 natural armor",
    "hp": 13,
    "speed": "Walk 10, Fly 60",
    "str": 12,
    "dex": 15,
    "con": 10,
    "int": 2,
    "wis": 9,
    "cha": 5,
    "skill": "Perception +1",
    "passive": 11,
    "cr": "1/4",
    "trait": [
      {
        "Name": "Flyby",
        "Text": "The pteranodon doesn't provoke opportunity attacks when it flies out of an enemy's reach."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one target. Hit:6 (2d4 + 1) piercing damage"
      }
    ],
    "environment": [
      "mountain",
      "grassland",
      "coastal"
    ]
  },
  {
    "name": "Purple Worm",
    "size": "G",
    "type": "monstrosity",
    "alignment": "Unaligned",
    "ac": "18 natural armor",
    "hp": 247,
    "speed": "Walk 50, Burrow 30",
    "str": 28,
    "dex": 7,
    "con": 22,
    "int": 1,
    "wis": 8,
    "cha": 4,
    "save": "Con +11, Wis +4",
    "senses": "blindsight 30 ft., tremorsense 60 ft.",
    "passive": 9,
    "cr": "15",
    "trait": [
      {
        "Name": "Tunneler",
        "Text": "The worm can burrow through solid rock at half its burrow speed and leaves a 10-foot-diameter tunnel in its wake."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The worm makes two attacks: one with its bite and one with its stinger."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 14 to hit, reach 10 ft., one target. Hit:22 (3d8 + 9) piercing damage. If the target is a Large or smaller creature, it must succeed on a 19 Dexterity saving throw or be swallowed by the worm. A swallowed creature is blinded and restrained, it has total cover against attacks and other effects outside the worm, and it takes 21 (6d6) acid damage at the start of each of the worm's turns."
      },
      {
        "Name": "Tail Stinger",
        "Text": "Melee Weapon 14 to hit, reach 10 ft., one creature. Hit:19 (3d6 + 9) piercing damage, and the target must make a 19 Constitution saving throw, taking 42 (12d6) poison damage on a failed save, or half as much damage on a successful one."
      }
    ],
    "environment": [
      "underdark",
      "desert"
    ]
  },
  {
    "name": "Quadrone",
    "size": "M",
    "type": "construct",
    "alignment": "Lawful Neutral",
    "ac": "16 natural armor",
    "hp": 22,
    "speed": "Walk 30, Fly 30",
    "str": 12,
    "dex": 14,
    "con": 12,
    "int": 10,
    "wis": 10,
    "cha": 11,
    "skill": "Perception +2",
    "senses": "truesight 120 ft.",
    "passive": 12,
    "languages": "Modron",
    "cr": "1",
    "trait": [
      {
        "Name": "Axiomatic Mind",
        "Text": "The quadrone can't be compelled to act in a manner contrary to its nature or its instructions."
      },
      {
        "Name": "Disintegration",
        "Text": "If the quadrone dies, its body disintegrates into dust, leaving behind its weapons and anything else it was carrying."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The quadrone makes two fist attacks or four shortbow attacks."
      },
      {
        "Name": "Fist",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one target. Hit:3 (1d4 + 1) bludgeoning damage."
      },
      {
        "Name": "Shortbow",
        "Text": "Ranged Weapon 4 to hit, range 80/320 ft., one target. Hit:5 (1d6 + 2) piercing damage."
      }
    ]
  },
  {
    "name": "Quaggoth",
    "size": "M",
    "type": "humanoid (quaggoth)",
    "alignment": "Chaotic Neutral",
    "ac": "13 natural armor",
    "hp": 45,
    "speed": "Walk 30, Climb 30",
    "str": 17,
    "dex": 12,
    "con": 16,
    "int": 6,
    "wis": 12,
    "cha": 7,
    "skill": "Athletics +5",
    "senses": "darkvision 120 ft.",
    "passive": 11,
    "immune": "poison",
    "conditionImmune": "poisoned",
    "languages": "Undercommon",
    "cr": "2",
    "trait": [
      {
        "Name": "Wounded Fury",
        "Text": "While it has 10 hit points or fewer, the quaggoth has advantage on attack rolls. In addition, it deals an extra 7 (2d6) damage to any target it hits with a melee attack."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The quaggoth makes two claw attacks."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:6 (1d6 + 3) slashing damage."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Quaggoth Spore Servant",
    "size": "M",
    "type": "plant",
    "alignment": "Unaligned",
    "ac": "13 natural armor",
    "hp": 45,
    "speed": "Walk 20, Climb 20",
    "str": 17,
    "dex": 12,
    "con": 16,
    "int": 2,
    "wis": 6,
    "cha": 1,
    "senses": "blindsight 30 ft. (blind beyond this radius)",
    "passive": 8,
    "immune": "poison",
    "conditionImmune": "blinded, charmed, frightened, paralyzed, poisoned",
    "cr": "1",
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The spore servant makes two claw attacks."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:6 (1d6 + 3) slashing damage."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Quaggoth Thonot",
    "size": "M",
    "type": "humanoid (quaggoth)",
    "alignment": "Chaotic Neutral",
    "ac": "13 natural armor",
    "hp": 45,
    "speed": "Walk 30, Climb 30",
    "str": 17,
    "dex": 12,
    "con": 16,
    "int": 6,
    "wis": 12,
    "cha": 7,
    "skill": "Athletics +5",
    "senses": "darkvision 120 ft.",
    "passive": 10,
    "immune": "poison",
    "conditionImmune": "poisoned",
    "languages": "Undercommon",
    "cr": "3",
    "trait": [
      {
        "Name": "Wounded Fury",
        "Text": "While it has 10 hit points or fewer, the quaggoth has advantage on attack rolls. In addition, it deals an extra 7 (2d6) damage to any target it hits with a melee attack."
      },
      {
        "Name": "Innate Spellcasting (Psionics)",
        "Text": "<br>1/day each: <em>cure wounds, enlarge/reduce, heat metal, mirror image</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The quaggoth makes two claw attacks."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:6 (1d6 + 3) slashing damage."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Quasit",
    "size": "T",
    "type": "fiend (demon)",
    "alignment": "Chaotic Evil",
    "ac": 13,
    "hp": 7,
    "speed": "Walk 40",
    "str": 5,
    "dex": 17,
    "con": 10,
    "int": 7,
    "wis": 10,
    "cha": 10,
    "skill": "Stealth +5",
    "senses": "darkvision 120 ft.",
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
    "immune": "poison",
    "conditionImmune": "poisoned",
    "languages": "Abyssal, Common",
    "cr": "1",
    "trait": [
      {
        "Name": "Shapechanger",
        "Text": "The quasit can use its action to polymorph into a beast form that resembles a bat (speed 10 feet fly 40 ft.), a centipede (40 ft., climb 40 ft.), or a toad (40 ft., swim 40 ft.), or back into its true form. Its statistics are the same in each form, except for the speed changes noted. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The quasit has advantage on saving throws against spells and other magical effects."
      }
    ],
    "action": [
      {
        "Name": "Claw (Bite in Beast Form)",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:5 (1d4 + 3) piercing damage, and the target must succeed on a 10 Constitution saving throw or take 5 (2d4) poison damage and become poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      },
      {
        "Name": "Scare (1/Day)",
        "Text": "One creature of the quasit's choice within 20 feet of it must succeed on a 10 Wisdom saving throw or be frightened for 1 minute. The target can repeat the saving throw at the end of each of its turns, with disadvantage if the quasit is within line of sight, ending the effect on itself on a success."
      },
      {
        "Name": "Invisibility",
        "Text": "The quasit magically turns invisible until it attacks or uses Scare, or until its concentration ends (as if concentrating on a spell). Any equipment the quasit wears or carries is invisible with it."
      }
    ],
    "familiar": true
  },
  {
    "name": "Quipper",
    "size": "T",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": 13,
    "hp": 1,
    "speed": "Swim 40",
    "str": 2,
    "dex": 16,
    "con": 9,
    "int": 1,
    "wis": 7,
    "cha": 2,
    "senses": "darkvision 60 ft.",
    "passive": 8,
    "cr": "0",
    "trait": [
      {
        "Name": "Blood Frenzy",
        "Text": "The quipper has advantage on melee attack rolls against any creature that doesn't have all its hit points."
      },
      {
        "Name": "Water Breathing",
        "Text": "The quipper can breathe only underwater."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:1 piercing damage."
      }
    ],
    "environment": [
      "underwater"
    ],
    "familiar": true
  },
  {
    "name": "Rakshasa",
    "size": "M",
    "type": "fiend",
    "alignment": "Lawful Evil",
    "ac": "16 natural armor",
    "hp": 110,
    "speed": "Walk 40",
    "str": 14,
    "dex": 17,
    "con": 18,
    "int": 13,
    "wis": 16,
    "cha": 20,
    "skill": "Deception +10, Insight +8",
    "senses": "darkvision 60 ft.",
    "passive": 13,
    "immune": "bludgeoning, piercing, slashing from nonmagical attacks",
    "vulnerable": [
      {
        "vulnerable": [
          "piercing"
        ],
        "note": "from magic weapons wielded by good creatures",
        "cond": true
      }
    ],
    "languages": "Common, Infernal",
    "cr": "13",
    "trait": [
      {
        "Name": "Limited Magic Immunity",
        "Text": "The rakshasa can't be affected or detected by spells of 6th level or lower unless it wishes to be. It has advantage on saving throws against all other spells and magical effects."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day each: <em>dominate person, fly, plane shift, true seeing</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The rakshasa makes two claw attacks."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:9 (2d6 + 2) slashing damage, and the target is cursed if it is a creature. The magical curse takes effect whenever the target takes a short or long rest, filling the target's thoughts with horrible images and dreams. The cursed target gains no benefit from finishing a short or long rest. The curse lasts until it is lifted by a remove curse spell or similar magic."
      }
    ],
    "environment": [
      "urban"
    ]
  },
  {
    "name": "Rat",
    "size": "T",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": 10,
    "hp": 1,
    "speed": "Walk 20",
    "str": 2,
    "dex": 11,
    "con": 9,
    "int": 2,
    "wis": 10,
    "cha": 4,
    "senses": "darkvision 30 ft.",
    "passive": 10,
    "cr": "0",
    "trait": [
      {
        "Name": "Keen Smell",
        "Text": "The rat has advantage on Wisdom (Perception) checks that rely on smell."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 0 to hit, reach 5 ft., one target. Hit:1 piercing damage."
      }
    ],
    "environment": [
      "swamp",
      "urban"
    ],
    "familiar": true
  },
  {
    "name": "Raven",
    "size": "T",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": 12,
    "hp": 1,
    "speed": "Walk 10, Fly 50",
    "str": 2,
    "dex": 14,
    "con": 8,
    "int": 2,
    "wis": 12,
    "cha": 6,
    "skill": "Perception +3",
    "passive": 13,
    "cr": "0",
    "trait": [
      {
        "Name": "Mimicry",
        "Text": "The raven can mimic simple sounds it has heard, such as a person whispering, a baby crying, or an animal chittering. A creature that hears the sounds can tell they are imitations with a successful 10 Wisdom (Insight) check."
      }
    ],
    "action": [
      {
        "Name": "Beak",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:1 piercing damage."
      }
    ],
    "environment": [
      "swamp",
      "hill",
      "urban"
    ],
    "familiar": true
  },
  {
    "name": "Red Dragon Wyrmling",
    "size": "M",
    "type": "dragon",
    "alignment": "Chaotic Evil",
    "ac": "17 natural armor",
    "hp": 75,
    "speed": "Walk 30, Climb 30, Fly 60",
    "str": 19,
    "dex": 10,
    "con": 17,
    "int": 12,
    "wis": 11,
    "cha": 15,
    "save": "Dex +2, Con +5, Wis +2, Cha +4",
    "skill": "Perception +4, Stealth +2",
    "senses": "blindsight 10 ft., darkvision 60 ft.",
    "passive": 14,
    "immune": "fire",
    "languages": "Draconic",
    "cr": "4",
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:9 (1d10 + 4) piercing damage plus 3 (1d6) fire damage."
      },
      {
        "Name": "Fire Breath (Recharge 5-6)",
        "Text": "The dragon exhales fire in a 15-foot cone. Each creature in that area must make a 13 Dexterity saving throw, taking 24 (7d6) fire damage on a failed save, or half as much damage on a successful one."
      }
    ]
  },
  {
    "name": "Red Slaad",
    "size": "L",
    "type": "aberration",
    "alignment": "Chaotic Neutral",
    "ac": "14 natural armor",
    "hp": 93,
    "speed": "Walk 30",
    "str": 16,
    "dex": 12,
    "con": 16,
    "int": 6,
    "wis": 6,
    "cha": 7,
    "skill": "Perception +1",
    "senses": "darkvision 60 ft.",
    "passive": 11,
    "resist": [
      "acid",
      "cold",
      "fire",
      "lightning",
      "thunder"
    ],
    "languages": "Slaad, telepathy 60 ft.",
    "cr": "5",
    "trait": [
      {
        "Name": "Magic Resistance",
        "Text": "The slaad has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Regeneration",
        "Text": "The slaad regains 10 hit points at the start of its turn if it has at least 1 hit point."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The slaad makes three attacks: one with its bite and two with its claws."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:8 (2d4 + 3) piercing damage."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:7 (1d8 + 3) piercing damage. If the target is a humanoid, it must succeed on a 14 Constitution saving throw or be infected with a disease—a minuscule slaad egg."
      }
    ]
  },
  {
    "name": "Reef Shark",
    "size": "M",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": "12 natural armor",
    "hp": 22,
    "speed": "Swim 40",
    "str": 14,
    "dex": 13,
    "con": 13,
    "int": 1,
    "wis": 10,
    "cha": 4,
    "skill": "Perception +2",
    "senses": "blindsight 30 ft.",
    "passive": 12,
    "cr": "1/2",
    "trait": [
      {
        "Name": "Pack Tactics",
        "Text": "The shark has advantage on an attack roll against a creature if at least one of the shark's allies is within 5 feet of the creature and the ally isn't incapacitated."
      },
      {
        "Name": "Water Breathing",
        "Text": "The shark can breathe only underwater."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:6 (1d8 + 2) piercing damage."
      }
    ],
    "environment": [
      "underwater"
    ]
  },
  {
    "name": "Remorhaz",
    "size": "H",
    "type": "monstrosity",
    "alignment": "Unaligned",
    "ac": "17 natural armor",
    "hp": 195,
    "speed": "Walk 30, Burrow 20",
    "str": 24,
    "dex": 13,
    "con": 21,
    "int": 4,
    "wis": 10,
    "cha": 5,
    "senses": "darkvision 60 ft., tremorsense 60 ft.",
    "passive": 10,
    "immune": "cold, fire",
    "cr": "11",
    "trait": [
      {
        "Name": "Heated Body",
        "Text": "A creature that touches the remorhaz or hits it with a melee attack while within 5 feet of it takes 10 (3d6) fire damage."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 11 to hit, reach 10 ft., one target. Hit:40 (6d10 + 7) piercing damage plus 10 (3d6) fire damage. If the target is a creature, it is grappled (escape 17). Until this grapple ends, the target is restrained, and the remorhaz can't bite another target."
      },
      {
        "Name": "Swallow",
        "Text": "The remorhaz makes one bite attack against a Medium or smaller creature it is grappling. If the attack hits, that creature takes the bite's damage and is swallowed, and the grapple ends. While swallowed, the creature is blinded and restrained, it has total cover against attacks and other effects outside the remorhaz, and it takes 21 (6d6) acid damage at the start of each of the remorhaz's turns."
      }
    ],
    "environment": [
      "arctic"
    ]
  },
  {
    "name": "Revenant",
    "size": "M",
    "type": "undead",
    "alignment": "Neutral",
    "ac": "13 leather armor",
    "hp": 136,
    "speed": "Walk 30",
    "str": 18,
    "dex": 14,
    "con": 18,
    "int": 13,
    "wis": 16,
    "cha": 18,
    "save": "Str +7, Con +7, Wis +6, Cha +7",
    "senses": "darkvision 60 ft.",
    "passive": 13,
    "resist": [
      "necrotic",
      "psychic"
    ],
    "immune": "poison",
    "conditionImmune": "charmed, exhaustion, frightened, paralyzed, poisoned, stunned",
    "languages": "the languages it knew in life",
    "cr": "5",
    "trait": [
      {
        "Name": "Regeneration",
        "Text": "The revenant regains 10 hit points at the start of its turn. If the revenant takes fire or radiant damage, this trait doesn't function at the start of the revenant's next turn. The revenant's body is destroyed only if it starts its turn with 0 hit points and doesn't regenerate."
      },
      {
        "Name": "Rejuvenation",
        "Text": "When the revenant's body is destroyed, its soul lingers. After 24 hours, the soul inhabits and animates another humanoid corpse on the same plane of existence and regains all its hit points. While the soul is bodiless, a wish spell can be used to force the soul to go to the afterlife and not return."
      },
      {
        "Name": "Turn Immunity",
        "Text": "The revenant is immune to effects that turn undead."
      },
      {
        "Name": "Vengeful Tracker",
        "Text": "The revenant knows the distance to and direction of any creature against which it seeks revenge, even if the creature and the revenant are on different planes of existence. If the creature being tracked by the revenant dies, the revenant knows."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The revenant makes two fist attacks."
      },
      {
        "Name": "Fist",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:11 (2d6 + 4) bludgeoning damage. If the target is a creature against which the revenant has sworn vengeance, the target takes an extra 14 (4d6) bludgeoning damage. Instead of dealing damage, the revenant can grapple the target (escape 14) provided the target is Large or smaller."
      },
      {
        "Name": "Vengeful Glare",
        "Text": "The revenant targets one creature it can see within 30 feet of it and against which it has sworn vengeance. The target must make a 15 Wisdom saving throw. On a failure, the target is paralyzed until the revenant deals damage to it, or until the end of the revenant's next turn. When the paralysis ends, the target is frightened of the revenant for 1 minute. The frightened target can repeat the saving throw at the end of each of its turns, with disadvantage if it can see the revenant, ending the frightened condition on itself on a success."
      }
    ],
    "environment": [
      "forest",
      "swamp",
      "hill",
      "urban",
      "desert",
      "arctic"
    ]
  },
  {
    "name": "Rhinoceros",
    "size": "L",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": "11 natural armor",
    "hp": 45,
    "speed": "Walk 40",
    "str": 21,
    "dex": 8,
    "con": 15,
    "int": 2,
    "wis": 12,
    "cha": 6,
    "passive": 11,
    "cr": "2",
    "trait": [
      {
        "Name": "Charge",
        "Text": "If the rhinoceros moves at least 20 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 9 (2d8) bludgeoning damage. If the target is a creature, it must succeed on a 15 Strength saving throw or be knocked prone."
      }
    ],
    "action": [
      {
        "Name": "Gore",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:14 (2d8 + 5) bludgeoning damage."
      }
    ],
    "environment": [
      "grassland"
    ]
  },
  {
    "name": "Riding Horse",
    "size": "L",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": 10,
    "hp": 13,
    "speed": "Walk 60",
    "str": 16,
    "dex": 10,
    "con": 12,
    "int": 2,
    "wis": 11,
    "cha": 7,
    "passive": 10,
    "cr": "1/4",
    "action": [
      {
        "Name": "Hooves",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:8 (2d4 + 3) bludgeoning damage."
      }
    ],
    "environment": [
      "grassland",
      "urban"
    ]
  },
  {
    "name": "Roc",
    "size": "G",
    "type": "monstrosity",
    "alignment": "Unaligned",
    "ac": "15 natural armor",
    "hp": 248,
    "speed": "Walk 20, Fly 120",
    "str": 28,
    "dex": 10,
    "con": 20,
    "int": 3,
    "wis": 10,
    "cha": 9,
    "save": "Dex +4, Con +9, Wis +4, Cha +3",
    "skill": "Perception +4",
    "passive": 14,
    "cr": "11",
    "trait": [
      {
        "Name": "Keen Sight",
        "Text": "The roc has advantage on Wisdom (Perception) checks that rely on sight."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The roc makes two attacks: one with its beak and one with its talons."
      },
      {
        "Name": "Beak",
        "Text": "Melee Weapon 13 to hit, reach 10 ft., one target. Hit:27 (4d8 + 9) piercing damage."
      },
      {
        "Name": "Talons",
        "Text": "Melee Weapon 13 to hit, reach 5 ft., one target. Hit:23 (4d6 + 9) slashing damage, and the target is grappled (escape 19). Until this grapple ends, the target is restrained, and the roc can't use its talons on another target."
      }
    ],
    "environment": [
      "mountain",
      "hill",
      "desert",
      "coastal",
      "arctic"
    ]
  },
  {
    "name": "Roper",
    "size": "L",
    "type": "monstrosity",
    "alignment": "Neutral Evil",
    "ac": "20 natural armor",
    "hp": 93,
    "speed": "Walk 10, Climb 10",
    "str": 18,
    "dex": 8,
    "con": 17,
    "int": 7,
    "wis": 16,
    "cha": 6,
    "skill": "Perception +6, Stealth +5",
    "senses": "darkvision 60 ft.",
    "passive": 16,
    "cr": "5",
    "trait": [
      {
        "Name": "False Appearance",
        "Text": "While the roper remains motionless, it is indistinguishable from a normal cave formation, such as a stalagmite."
      },
      {
        "Name": "Grasping Tendrils",
        "Text": "The roper can have up to six tendrils at a time. Each tendril can be attacked (AC 20; 10 hit points; immunity to poison and psychic damage). Destroying a tendril deals no damage to the roper, which can extrude a replacement tendril on its next turn. A tendril can also be broken if a creature takes an action and succeeds on a 15 Strength check against it."
      },
      {
        "Name": "Spider Climb",
        "Text": "The roper can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The roper makes four attacks with its tendrils, uses Reel, and makes one attack with its bite."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:22 (4d8 + 4) piercing damage."
      },
      {
        "Name": "Tendril",
        "Text": "Melee Weapon 7 to hit, reach 50 ft., one creature. Hit:The target is grappled (escape 15). Until the grapple ends, the target is restrained and has disadvantage on Strength checks and Strength saving throws, and the roper can't use the same tendril on another target."
      },
      {
        "Name": "Reel",
        "Text": "The roper pulls each creature grappled by it up to 25 feet straight toward it."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Rug of Smothering",
    "size": "L",
    "type": "construct",
    "alignment": "Unaligned",
    "ac": 12,
    "hp": 33,
    "speed": "Walk 10",
    "str": 17,
    "dex": 14,
    "con": 10,
    "int": 1,
    "wis": 3,
    "cha": 1,
    "senses": "blindsight 60 ft. (blind beyond this radius)",
    "passive": 6,
    "immune": "poison, psychic",
    "conditionImmune": "blinded, charmed, deafened, frightened, paralyzed, petrified, poisoned",
    "cr": "2",
    "trait": [
      {
        "Name": "Antimagic Susceptibility",
        "Text": "The rug is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the rug must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute."
      },
      {
        "Name": "Damage Transfer",
        "Text": "While it is grappling a creature, the rug takes only half the damage dealt to it, and the creature grappled by the rug takes the other half."
      },
      {
        "Name": "False Appearance",
        "Text": "While the rug remains motionless, it is indistinguishable from a normal rug."
      }
    ],
    "action": [
      {
        "Name": "Smother",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one Medium or smaller creature. Hit:The creature is grappled (escape 13). Until this grapple ends, the target is restrained, blinded, and at risk of suffocating, and the rug can't smother another target. In addition, at the start of each of the target's turns, the target takes 10 (2d6 + 3) bludgeoning damage."
      }
    ]
  },
  {
    "name": "Rust Monster",
    "size": "M",
    "type": "monstrosity",
    "alignment": "Unaligned",
    "ac": "14 natural armor",
    "hp": 27,
    "speed": "Walk 40",
    "str": 13,
    "dex": 12,
    "con": 13,
    "int": 2,
    "wis": 13,
    "cha": 6,
    "senses": "darkvision 60 ft.",
    "passive": 11,
    "cr": "1/2",
    "trait": [
      {
        "Name": "Iron Scent",
        "Text": "The rust monster can pinpoint, by scent, the location of ferrous metal within 30 feet of it."
      },
      {
        "Name": "Rust Metal",
        "Text": "Any nonmagical weapon made of metal that hits the rust monster corrodes. After dealing damage, the weapon takes a permanent and cumulative −1 penalty to damage rolls. If its penalty drops to −5, the weapon is destroyed. Non magical ammunition made of metal that hits the rust monster is destroyed after dealing damage."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one target. Hit:5 (1d8 + 1) piercing damage."
      },
      {
        "Name": "Antennae",
        "Text": "The rust monster corrodes a nonmagical ferrous metal object it can see within 5 feet of it. If the object isn't being worn or carried, the touch destroys a 1-foot cube of it. If the object is being worn or carried by a creature, the creature can make a 11 Dexterity saving throw to avoid the rust monster's touch."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Saber-Toothed Tiger",
    "size": "L",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": 12,
    "hp": 52,
    "speed": "Walk 40",
    "str": 18,
    "dex": 14,
    "con": 15,
    "int": 3,
    "wis": 12,
    "cha": 8,
    "skill": "Perception +3, Stealth +6",
    "passive": 13,
    "cr": "2",
    "trait": [
      {
        "Name": "Keen Smell",
        "Text": "The tiger has advantage on Wisdom (Perception) checks that rely on smell."
      },
      {
        "Name": "Pounce",
        "Text": "If the tiger moves at least 20 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a 14 Strength saving throw or be knocked prone. If the target is prone, the tiger can make one bite attack against it as a bonus action."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:10 (1d10 + 5) piercing damage."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:12 (2d6 + 5) slashing damage."
      }
    ],
    "environment": [
      "mountain",
      "arctic"
    ]
  },
  {
    "name": "Sahuagin",
    "size": "M",
    "type": "humanoid (sahuagin)",
    "alignment": "Lawful Evil",
    "ac": "12 natural armor",
    "hp": 22,
    "speed": "Walk 30, Swim 40",
    "str": 13,
    "dex": 11,
    "con": 12,
    "int": 12,
    "wis": 13,
    "cha": 9,
    "skill": "Perception +5",
    "senses": "darkvision 120 ft.",
    "passive": 15,
    "languages": "Sahuagin",
    "cr": "1/2",
    "trait": [
      {
        "Name": "Blood Frenzy",
        "Text": "The sahuagin has advantage on melee attack rolls against any creature that doesn't have all its hit points."
      },
      {
        "Name": "Limited Amphibiousness",
        "Text": "The sahuagin can breathe air and water, but it needs to be submerged at least once every 4 hours to avoid suffocating."
      },
      {
        "Name": "Shark Telepathy",
        "Text": "The sahuagin can magically command any shark within 120 feet of it, using a limited telepathy."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The sahuagin makes two melee attacks: one with its bite and one with its claws or spear."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one target. Hit:3 (1d4 + 1) piercing damage."
      },
      {
        "Name": "Claws",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one target. Hit:3 (1d4 + 1) slashing damage."
      },
      {
        "Name": "Spear",
        "Text": "Melee or Ranged Weapon 3 to hit, reach 5 ft. or range 20/60 ft., one target. Hit:4 (1d6 + 1) piercing damage, or 5 (1d8 + 1) piercing damage if used with two hands to make a melee attack."
      }
    ],
    "environment": [
      "underwater",
      "coastal"
    ]
  },
  {
    "name": "Sahuagin Baron",
    "size": "L",
    "type": "humanoid (sahuagin)",
    "alignment": "Lawful Evil",
    "ac": "16 breastplate",
    "hp": 76,
    "speed": "Walk 30, Swim 50",
    "str": 19,
    "dex": 15,
    "con": 16,
    "int": 14,
    "wis": 13,
    "cha": 17,
    "save": "Dex +5, Con +6, Int +5, Wis +4",
    "skill": "Perception +7",
    "senses": "darkvision 120 ft.",
    "passive": 17,
    "languages": "Sahuagin",
    "cr": "5",
    "trait": [
      {
        "Name": "Blood Frenzy",
        "Text": "The sahuagin has advantage on melee attack rolls against any creature that doesn't have all its hit points."
      },
      {
        "Name": "Limited Amphibiousness",
        "Text": "The sahuagin can breathe air and water, but it needs to be submerged at least once every 4 hours to avoid suffocating."
      },
      {
        "Name": "Shark Telepathy",
        "Text": "The sahuagin can magically command any shark within 120 feet of it, using a limited telepathy."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The sahuagin makes three attacks: one with his bite and two with his claws or trident."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:9 (2d4 + 4) piercing damage."
      },
      {
        "Name": "Claws",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:11 (2d6 + 4) slashing damage."
      },
      {
        "Name": "Trident",
        "Text": "Melee or Ranged Weapon 7 to hit, reach 5 ft. or range 20/60 ft., one target. Hit:11 (2d6 + 4) piercing damage, or 13 (2d8 + 4) piercing damage if used with two hands to make a melee attack."
      }
    ],
    "environment": [
      "underwater",
      "coastal"
    ]
  },
  {
    "name": "Sahuagin Priestess",
    "size": "M",
    "type": "humanoid (sahuagin)",
    "alignment": "Lawful Evil",
    "ac": "12 natural armor",
    "hp": 33,
    "speed": "Walk 30, Swim 40",
    "str": 13,
    "dex": 11,
    "con": 12,
    "int": 12,
    "wis": 14,
    "cha": 13,
    "skill": "Perception +6, Religion +3",
    "senses": "darkvision 120 ft.",
    "passive": 16,
    "languages": "Sahuagin",
    "cr": "2",
    "trait": [
      {
        "Name": "Blood Frenzy",
        "Text": "The sahuagin has advantage on melee attack rolls against any creature that doesn't have all its hit points."
      },
      {
        "Name": "Limited Amphibiousness",
        "Text": "The sahuagin can breathe air and water, but it needs to be submerged at least once every 4 hours to avoid suffocating."
      },
      {
        "Name": "Shark Telepathy",
        "Text": "The sahuagin can magically command any shark within 120 feet of it, using a limited telepathy."
      },
      {
        "Name": "Spellcasting",
        "Text": "The sahuagin is a 6th-level spellcaster. Her spellcasting ability is Wisdom (spell save DC 12, +4 to hit with spell attacks). She has the following cleric spells prepared:<br><br>Cantrips (at will): <em>guidance, thaumaturgy</em><br>1st (1 slots): <em>bless, detect magic, guiding bolt</em><br>2nd (2 slots): <em>hold person, spiritual weapon (trident)</em><br>3rd (3 slots): <em>mass healing word, tongues</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The sahuagin makes two melee attacks: one with her bite and one with her claws."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one target. Hit:3 (1d4 + 1) piercing damage."
      },
      {
        "Name": "Claws",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one target. Hit:3 (1d4 + 1) slashing damage."
      }
    ],
    "environment": [
      "underwater",
      "coastal"
    ]
  },
  {
    "name": "Salamander",
    "size": "L",
    "type": "elemental",
    "alignment": "Neutral Evil",
    "ac": "15 natural armor",
    "hp": 90,
    "speed": "Walk 30",
    "str": 18,
    "dex": 14,
    "con": 15,
    "int": 11,
    "wis": 10,
    "cha": 12,
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
    "immune": "fire",
    "vulnerable": [
      "cold"
    ],
    "languages": "Ignan",
    "cr": "5",
    "trait": [
      {
        "Name": "Heated Body",
        "Text": "A creature that touches the salamander or hits it with a melee attack while within 5 feet of it takes 7 (2d6) fire damage."
      },
      {
        "Name": "Heated Weapons",
        "Text": "Any metal melee weapon the salamander wields deals an extra 3 (1d6) fire damage on a hit (included in the attack)."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The salamander makes two attacks: one with its spear and one with its tail."
      },
      {
        "Name": "Spear",
        "Text": "Melee or Ranged Weapon 7 to hit, reach 5 ft. or range 20/60 ft., one target. Hit:11 (2d6 + 4) piercing damage, or 13 (2d8 + 4) piercing damage if used with two hands to make a melee attack, plus 3 (1d6) fire damage."
      },
      {
        "Name": "Tail",
        "Text": "Melee Weapon 7 to hit, reach 10 ft., one target. Hit:11 (2d6 + 4) bludgeoning damage plus 7 (2d6) fire damage, and the target is grappled (escape 14). Until this grapple ends, the target is restrained, the salamander can automatically hit the target with its tail, and the salamander can't make tail attacks against other targets."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Satyr",
    "size": "M",
    "type": "fey",
    "alignment": "Chaotic Neutral",
    "ac": "14 leather armor",
    "hp": 31,
    "speed": "Walk 40",
    "str": 12,
    "dex": 16,
    "con": 11,
    "int": 12,
    "wis": 10,
    "cha": 14,
    "skill": "Perception +2, Performance +6, Stealth +5",
    "passive": 12,
    "languages": "Common, Elvish, Sylvan",
    "cr": "1/2",
    "trait": [
      {
        "Name": "Magic Resistance",
        "Text": "The satyr has advantage on saving throws against spells and other magical effects."
      }
    ],
    "action": [
      {
        "Name": "Ram",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one target. Hit:6 (2d4 + 1) bludgeoning damage."
      },
      {
        "Name": "Shortsword",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:6 (1d6 + 3) piercing damage."
      },
      {
        "Name": "Shortbow",
        "Text": "Ranged Weapon 5 to hit, range 80/320 ft., one target. Hit:6 (1d6 + 3) piercing damage."
      }
    ],
    "environment": [
      "forest"
    ]
  },
  {
    "name": "Scarecrow",
    "size": "M",
    "type": "construct",
    "alignment": "Chaotic Evil",
    "ac": 11,
    "hp": 36,
    "speed": "Walk 30",
    "str": 11,
    "dex": 13,
    "con": 11,
    "int": 10,
    "wis": 10,
    "cha": 13,
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
    "vulnerable": [
      "fire"
    ],
    "conditionImmune": "charmed, exhaustion, frightened, paralyzed, poisoned, unconscious",
    "languages": "understands the languages of its creator but can't speak",
    "cr": "1",
    "trait": [
      {
        "Name": "False Appearance",
        "Text": "While the scarecrow remains motionless, it is indistinguishable from an ordinary, inanimate scarecrow."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The scarecrow makes two claw attacks."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one target. Hit:6 (2d4 + 1) slashing damage. If the target is a creature, it must succeed on a 11 Wisdom saving throw or be frightened until the end of the scarecrow's next turn."
      },
      {
        "Name": "Terrifying Glare",
        "Text": "The scarecrow targets one creature it can see within 30 feet of it. If the target can see the scarecrow, the target must succeed on a 11 Wisdom saving throw or be magically frightened until the end of the scarecrow's next turn. The frightened target is paralyzed."
      }
    ],
    "environment": [
      "grassland"
    ]
  },
  {
    "name": "Scorpion",
    "size": "T",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": "11 natural armor",
    "hp": 1,
    "speed": "Walk 10",
    "str": 2,
    "dex": 11,
    "con": 8,
    "int": 1,
    "wis": 8,
    "cha": 2,
    "senses": "blindsight 10 ft.",
    "passive": 9,
    "cr": "0",
    "action": [
      {
        "Name": "Sting",
        "Text": "Melee Weapon 2 to hit, reach 5 ft., one creature. Hit:1 piercing damage, and the target must make a 9 Constitution saving throw, taking 4 (1d8) poison damage on a failed save, or half as much damage on a successful one."
      }
    ],
    "environment": [
      "desert"
    ]
  },
  {
    "name": "Scout",
    "size": "M",
    "type": "humanoid (any race)",
    "alignment": "Any",
    "ac": "13 leather armor",
    "hp": 16,
    "speed": "Walk 30",
    "str": 11,
    "dex": 14,
    "con": 12,
    "int": 11,
    "wis": 13,
    "cha": 11,
    "skill": "Nature +4, Perception +5, Stealth +6, Survival +5",
    "passive": 15,
    "languages": "any one language (usually Common)",
    "cr": "1/2",
    "trait": [
      {
        "Name": "Keen Hearing and Sight",
        "Text": "The scout has advantage on Wisdom (Perception) checks that rely on hearing or sight."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The scout makes two melee attacks or two ranged attacks."
      },
      {
        "Name": "Shortsword",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:5 (1d6 + 2) piercing damage."
      },
      {
        "Name": "Longbow",
        "Text": "Ranged Weapon 4 to hit, ranged 150/600 ft., one target. Hit:6 (1d8 + 2) piercing damage."
      }
    ]
  },
  {
    "name": "Sea Hag",
    "size": "M",
    "type": "fey",
    "alignment": "Chaotic Evil",
    "ac": "14 natural armor",
    "hp": 52,
    "speed": "Walk 30, Swim 40",
    "str": 16,
    "dex": 13,
    "con": 16,
    "int": 12,
    "wis": 12,
    "cha": 13,
    "senses": "darkvision 60 ft.",
    "passive": 11,
    "languages": "Aquan, Common, Giant",
    "cr": {
      "cr": "2",
      "coven": "4"
    },
    "trait": [
      {
        "Name": "Amphibious",
        "Text": "The hag can breathe air and water."
      },
      {
        "Name": "Horrific Appearance",
        "Text": "Any humanoid that starts its turn within 30 feet of the hag and can see the hag's true form must make a 11 Wisdom saving throw. On a failed save, the creature is frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, with disadvantage if the hag is within line of sight, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the hag's Horrific Appearance for the next 24 hours."
      }
    ],
    "action": [
      {
        "Name": "Claws",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:10 (2d6 + 3) slashing damage."
      },
      {
        "Name": "Death Glare",
        "Text": "The hag targets one frightened creature she can see within 30 feet of her. If the target can see the hag, it must succeed on a 11 Wisdom saving throw against this magic or drop to 0 hit points."
      },
      {
        "Name": "Illusory Appearance",
        "Text": "The hag covers herself and anything she is wearing or carrying with a magical illusion that makes her look like an ugly creature of her general size and humanoid shape. The effect ends if the hag takes a bonus action to end it or if she dies."
      }
    ],
    "environment": [
      "underwater",
      "coastal"
    ]
  },
  {
    "name": "Sea Horse",
    "size": "T",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": 11,
    "hp": 1,
    "speed": "Swim 20",
    "str": 1,
    "dex": 12,
    "con": 8,
    "int": 1,
    "wis": 10,
    "cha": 2,
    "passive": 10,
    "cr": "0",
    "trait": [
      {
        "Name": "Water Breathing",
        "Text": "The sea horse can breathe only underwater."
      }
    ],
    "familiar": true
  },
  {
    "name": "Shadow",
    "size": "M",
    "type": "undead",
    "alignment": "Chaotic Evil",
    "ac": 12,
    "hp": 16,
    "speed": "Walk 40",
    "str": 6,
    "dex": 14,
    "con": 13,
    "int": 6,
    "wis": 10,
    "cha": 8,
    "skill": "Stealth +4",
    "senses": "darkvision 60 ft.",
    "passive": 10,
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
    "vulnerable": [
      "radiant"
    ],
    "conditionImmune": "exhaustion, frightened, grappled, paralyzed, petrified, poisoned, prone, restrained",
    "cr": "1/2",
    "trait": [
      {
        "Name": "Amorphous",
        "Text": "The shadow can move through a space as narrow as 1 inch wide without squeezing."
      },
      {
        "Name": "Shadow Stealth",
        "Text": "While in dim light or darkness, the shadow can take the Hide action as a bonus action. Its stealth bonus is also improved to +6."
      },
      {
        "Name": "Sunlight Weakness",
        "Text": "While in sunlight, the shadow has disadvantage on attack rolls, ability checks, and saving throws."
      }
    ],
    "action": [
      {
        "Name": "Strength Drain",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one creature. Hit:9 (2d6 + 2) necrotic damage, and the target's Strength score is reduced by 1d4. The target dies if this reduces its Strength to 0. Otherwise, the reduction lasts until the target finishes a short or long rest.<br>If a non-evil humanoid dies from this attack, a new shadow rises from the corpse 1d4 hours later."
      }
    ],
    "environment": [
      "underdark",
      "urban"
    ]
  },
  {
    "name": "Shadow Demon",
    "size": "M",
    "type": "fiend (demon)",
    "alignment": "Chaotic Evil",
    "ac": 13,
    "hp": 66,
    "speed": "Walk 30, Fly 30",
    "str": 1,
    "dex": 17,
    "con": 12,
    "int": 14,
    "wis": 13,
    "cha": 14,
    "save": "Dex +5, Cha +4",
    "skill": "Stealth +7",
    "senses": "darkvision 120 ft.",
    "passive": 11,
    "resist": [
      "acid",
      "fire",
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
    "immune": "cold, lightning, poison",
    "vulnerable": [
      "radiant"
    ],
    "conditionImmune": "exhaustion, grappled, paralyzed, petrified, poisoned, prone, restrained",
    "languages": "Abyssal, telepathy 120 ft.",
    "cr": "4",
    "trait": [
      {
        "Name": "Incorporeal Movement",
        "Text": "The demon can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object."
      },
      {
        "Name": "Light Sensitivity",
        "Text": "While in bright light, the demon has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
      },
      {
        "Name": "Shadow Stealth",
        "Text": "While in dim light or darkness, the demon can take the Hide action as a bonus action."
      }
    ],
    "action": [
      {
        "Name": "Claws",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one creature. Hit:10 (2d6 + 3) psychic damage or, if the demon had advantage on the attack roll, 17 (4d6 + 3) psychic damage."
      }
    ]
  },
  {
    "name": "Shambling Mound",
    "size": "L",
    "type": "plant",
    "alignment": "Unaligned",
    "ac": "15 natural armor",
    "hp": 136,
    "speed": "Walk 20, Swim 20",
    "str": 18,
    "dex": 8,
    "con": 16,
    "int": 5,
    "wis": 10,
    "cha": 5,
    "skill": "Stealth +2",
    "senses": "blindsight 60 ft. (blind beyond this radius)",
    "passive": 10,
    "resist": [
      "cold",
      "fire"
    ],
    "immune": "lightning",
    "conditionImmune": "blinded, deafened, exhaustion",
    "cr": "5",
    "trait": [
      {
        "Name": "Lightning Absorption",
        "Text": "Whenever the shambling mound is subjected to lightning damage, it takes no damage and regains a number of hit points equal to the lightning damage dealt."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The shambling mound makes two slam attacks. If both attacks hit a Medium or smaller target, the target is grappled (escape 14), and the shambling mound uses its Engulf on it."
      },
      {
        "Name": "Slam",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:13 (2d8 + 4) bludgeoning damage."
      },
      {
        "Name": "Engulf",
        "Text": "The shambling mound engulfs a Medium or smaller creature grappled by it. The engulfed target is blinded, restrained, and unable to breathe, and it must succeed on a 14 Constitution saving throw at the start of each of the mound's turns or take 13 (2d8 + 4) bludgeoning damage. If the mound moves, the engulfed target moves with it. The mound can have only one creature engulfed at a time."
      }
    ],
    "environment": [
      "forest",
      "swamp"
    ]
  },
  {
    "name": "Shield Guardian",
    "size": "L",
    "type": "construct",
    "alignment": "Unaligned",
    "ac": "17 natural armor",
    "hp": 142,
    "speed": "Walk 30",
    "str": 18,
    "dex": 8,
    "con": 18,
    "int": 7,
    "wis": 10,
    "cha": 3,
    "senses": "blindsight 10 ft., darkvision 60 ft.",
    "passive": 10,
    "immune": "poison",
    "conditionImmune": "charmed, exhaustion, frightened, paralyzed, poisoned",
    "languages": "understands commands given in any language but can't speak",
    "cr": "7",
    "trait": [
      {
        "Name": "Bound",
        "Text": "The shield guardian is magically bound to an amulet. As long as the guardian and its amulet are on the same plane of existence, the amulet's wearer can telepathically call the guardian to travel to it, and the guardian knows the distance and direction to the amulet. If the guardian is within 60 feet of the amulet's wearer, half of any damage the wearer takes (rounded up) is transferred to the guardian."
      },
      {
        "Name": "Regeneration",
        "Text": "The shield guardian regains 10 hit points at the start of its turn if it has at least 1 hit point."
      },
      {
        "Name": "Spell Storing",
        "Text": "A spellcaster who wears the shield guardian's amulet can cause the guardian to store one spell of 4th level or lower. To do so, the wearer must cast the spell on the guardian. The spell has no effect but is stored within the guardian. When commanded to do so by the wearer or when a situation arises that was predefined by the spellcaster, the guardian casts the stored spell with any parameters set by the original caster, requiring no components. When the spell is cast or a new spell is stored, any previously stored spell is lost."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The guardian makes two fist attacks."
      },
      {
        "Name": "Fist",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:11 (2d6 + 4) bludgeoning damage."
      }
    ],
    "reaction": [
      {
        "Name": "Shield",
        "Text": "When a creature makes an attack against the wearer of the guardian's amulet, the guardian grants a +2 bonus to the wearer's AC if the guardian is within 5 feet of the wearer."
      }
    ],
    "environment": [
      "urban"
    ]
  },
  {
    "name": "Shrieker",
    "size": "M",
    "type": "plant",
    "alignment": "Unaligned",
    "ac": 5,
    "hp": 13,
    "speed": "Walk 0",
    "str": 1,
    "dex": 1,
    "con": 10,
    "int": 1,
    "wis": 3,
    "cha": 1,
    "senses": "blindsight 30 ft. (blind beyond this radius)",
    "passive": 6,
    "conditionImmune": "blinded, deafened, frightened",
    "cr": "0",
    "trait": [
      {
        "Name": "False Appearance",
        "Text": "While the shrieker remains motionless, it is indistinguishable from an ordinary fungus."
      }
    ],
    "action": [
      {
        "Name": "Shriek",
        "Text": "When bright light or a creature is within 30 feet of the shrieker, it emits a shriek audible within 300 feet of it. The shrieker continues to shriek until the disturbance moves out of range and for 1d4 of the shrieker's turns afterward."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Silver Dragon Wyrmling",
    "size": "M",
    "type": "dragon",
    "alignment": "Lawful Good",
    "ac": "17 natural armor",
    "hp": 45,
    "speed": "Walk 30, Fly 60",
    "str": 19,
    "dex": 10,
    "con": 17,
    "int": 12,
    "wis": 11,
    "cha": 15,
    "save": "Dex +2, Con +5, Wis +2, Cha +4",
    "skill": "Perception +4, Stealth +2",
    "senses": "blindsight 10 ft., darkvision 60 ft.",
    "passive": 14,
    "immune": "cold",
    "languages": "Draconic",
    "cr": "2",
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:9 (1d10 + 4) piercing damage."
      },
      {
        "Name": "Breath Weapons (Recharge 5-6)",
        "Text": "The dragon uses one of the following breath weapons."
      }
    ]
  },
  {
    "name": "Skeleton",
    "size": "M",
    "type": "undead",
    "alignment": "Lawful Evil",
    "ac": "13 armor scraps",
    "hp": 13,
    "speed": "Walk 30",
    "str": 10,
    "dex": 14,
    "con": 15,
    "int": 6,
    "wis": 8,
    "cha": 5,
    "senses": "darkvision 60 ft.",
    "passive": 9,
    "immune": "poison",
    "vulnerable": [
      "bludgeoning"
    ],
    "conditionImmune": "exhaustion, poisoned",
    "languages": "understands all languages it spoke in life but can't speak",
    "cr": "1/4",
    "action": [
      {
        "Name": "Shortsword",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:5 (1d6 + 2) piercing damage."
      },
      {
        "Name": "Shortbow",
        "Text": "Ranged Weapon 4 to hit, range 80/320 ft., one target. Hit:5 (1d6 + 2) piercing damage."
      }
    ],
    "environment": [
      "urban"
    ]
  },
  {
    "name": "Slaad Tadpole",
    "size": "T",
    "type": "aberration",
    "alignment": "Chaotic Neutral",
    "ac": 12,
    "hp": 10,
    "speed": "Walk 30",
    "str": 7,
    "dex": 15,
    "con": 10,
    "int": 3,
    "wis": 5,
    "cha": 3,
    "skill": "Stealth +4",
    "senses": "darkvision 60 ft.",
    "passive": 7,
    "resist": [
      "acid",
      "cold",
      "fire",
      "lightning",
      "thunder"
    ],
    "languages": "understands Slaad but can't speak",
    "cr": "1/8",
    "trait": [
      {
        "Name": "Magic Resistance",
        "Text": "The slaad has advantage on saving throws against spells and other magical effects."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:4 (1d4 + 2) piercing damage."
      }
    ]
  },
  {
    "name": "Smoke Mephit",
    "size": "S",
    "type": "elemental",
    "alignment": "Neutral Evil",
    "ac": 12,
    "hp": 22,
    "speed": "Walk 30, Fly 30",
    "str": 6,
    "dex": 14,
    "con": 12,
    "int": 10,
    "wis": 10,
    "cha": 11,
    "skill": "Perception +2, Stealth +4",
    "senses": "darkvision 60 ft.",
    "passive": 12,
    "immune": "fire, poison",
    "conditionImmune": "poisoned",
    "languages": "Auran, Ignan",
    "cr": "1/4",
    "trait": [
      {
        "Name": "Death Burst",
        "Text": "When the mephit dies, it leaves behind a cloud of smoke that fills a 5-foot-radius sphere centered on its space. The sphere is heavily obscured. Wind disperses the cloud, which otherwise lasts for 1 minute."
      },
      {
        "Name": "Innate Spellcasting (1/Day)",
        "Text": "The mephit can innately cast dancing lights, requiring no material components. Its innate spellcasting ability is Charisma.<br>At will: <em>dancing lights</em>"
      }
    ],
    "action": [
      {
        "Name": "Claws",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one creature. Hit:4 (1d4 + 2) slashing damage."
      },
      {
        "Name": "Cinder Breath (Recharge 6)",
        "Text": "The mephit exhales a 15-foot cone of smoldering ash. Each creature in that area must succeed on a 10 Dexterity saving throw or be blinded until the end of the mephit's next turn."
      }
    ],
    "environment": [
      "urban"
    ]
  },
  {
    "name": "Solar",
    "size": "L",
    "type": "celestial",
    "alignment": "Lawful Good",
    "ac": "21 natural armor",
    "hp": 243,
    "speed": "Walk 50, Fly 150",
    "str": 26,
    "dex": 22,
    "con": 26,
    "int": 25,
    "wis": 25,
    "cha": 30,
    "save": "Int +14, Wis +14, Cha +17",
    "skill": "Perception +14",
    "senses": "truesight 120 ft.",
    "passive": 24,
    "resist": [
      "radiant",
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
    "conditionImmune": "charmed, exhaustion, frightened, poisoned",
    "languages": "all, telepathy 120 ft.",
    "cr": "21",
    "trait": [
      {
        "Name": "Angelic Weapons",
        "Text": "The solar's weapon attacks are magical. When the solar hits with any weapon, the weapon deals an extra 6d8 radiant damage (included in the attack)."
      },
      {
        "Name": "Divine Awareness",
        "Text": "The solar knows if it hears a lie."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The solar has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day each: <em>commune, control weather</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The solar makes two greatsword attacks."
      },
      {
        "Name": "Greatsword",
        "Text": "Melee Weapon 15 to hit, reach 5 ft., one target. Hit:22 (4d6 + 8) slashing damage plus 27 (6d8) radiant damage."
      },
      {
        "Name": "Slaying Longbow",
        "Text": "Ranged Weapon 13 to hit, range 150/600 ft., one target. Hit:15 (2d8 + 6) piercing damage plus 27 (6d8) radiant damage. If the target is a creature that has 100 hit points or fewer, it must succeed on a 15 Constitution saving throw or die."
      },
      {
        "Name": "Flying Sword",
        "Text": "The solar releases its greatsword to hover magically in an unoccupied space within 5 feet of it. If the solar can see the sword, the solar can mentally command it as a bonus action to fly up to 50 feet and either make one attack against a target or return to the solar's hands. If the hovering sword is targeted by any effect, the solar is considered to be holding it. The hovering sword falls if the solar dies."
      },
      {
        "Name": "Healing Touch (4/Day)",
        "Text": "The solar touches another creature. The target magically regains 40 (8d8 + 4) hit points and is freed from any curse, disease, poison, blindness, or deafness."
      }
    ],
    "legendary": [
      {
        "Name": "Teleport",
        "Text": "The solar magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see."
      },
      {
        "Name": "Searing Burst (Costs 2 Actions)",
        "Text": "The solar emits magical, divine energy. Each creature of its choice in a 10-foot radius must make a 23 Dexterity saving throw, taking 14 (4d6) fire damage plus 14 (4d6) radiant damage on a failed save, or half as much damage on a successful one."
      },
      {
        "Name": "Blinding Gaze (Costs 3 Actions)",
        "Text": "The solar targets one creature it can see within 30 feet of it. If the target can see it, the target must succeed on a 15 Constitution saving throw or be blinded until magic such as the lesser restoration spell removes the blindness."
      }
    ]
  },
  {
    "name": "Spectator",
    "size": "M",
    "type": "aberration",
    "alignment": "Lawful Neutral",
    "ac": "14 natural armor",
    "hp": 39,
    "speed": "Walk 0, Fly 30 (hover)",
    "str": 8,
    "dex": 14,
    "con": 14,
    "int": 13,
    "wis": 14,
    "cha": 11,
    "skill": "Perception +6",
    "senses": "darkvision 120 ft.",
    "passive": 16,
    "conditionImmune": "prone",
    "languages": "Deep Speech, Undercommon, telepathy 120 ft.",
    "cr": "3",
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 1 to hit, reach 5 ft., one target. Hit:2 (1d6 - 1) piercing damage."
      },
      {
        "Name": "Eye Rays",
        "Text": "The spectator shoots up to two of the following magical eye rays at one or two creatures it can see within 90 feet of it. It can use each ray only once on a turn."
      },
      {
        "Name": "Create Food and Water",
        "Text": "The spectator magically creates enough food and water to sustain itself for 24 hours."
      }
    ],
    "reaction": [
      {
        "Name": "Spell Reflection",
        "Text": "If the spectator makes a successful saving throw against a spell, or a spell attack misses it, the spectator can choose another creature (including the spellcaster) it can see within 30 feet of it. The spell targets the chosen creature instead of the spectator. If the spell forced a saving throw, the chosen creature makes its own save. If the spell was an attack, the attack roll is rerolled against the chosen creature."
      }
    ],
    "environment": [
      "underdark"
    ],
    "altArt": [
      {
        "name": "Spectator",
        "source": "RMBRE"
      }
    ]
  },
  {
    "name": "Specter",
    "size": "M",
    "type": "undead",
    "alignment": "Chaotic Evil",
    "ac": 12,
    "hp": 22,
    "speed": "Walk 0, Fly 50 (hover)",
    "str": 1,
    "dex": 14,
    "con": 11,
    "int": 10,
    "wis": 10,
    "cha": 11,
    "senses": "darkvision 60 ft.",
    "passive": 10,
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
    "conditionImmune": "charmed, exhaustion, grappled, paralyzed, petrified, poisoned, prone, restrained, unconscious",
    "languages": "understands all languages it knew in life but can't speak",
    "cr": "1",
    "trait": [
      {
        "Name": "Incorporeal Movement",
        "Text": "The specter can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object."
      },
      {
        "Name": "Sunlight Sensitivity",
        "Text": "While in sunlight, the specter has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
      }
    ],
    "action": [
      {
        "Name": "Life Drain",
        "Text": "Melee Spell 4 to hit, reach 5 ft., one creature. Hit:10 (3d6) necrotic damage. The target must succeed on a 10 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the creature finishes a long rest. The target dies if this effect reduces its hit point maximum to 0."
      }
    ],
    "environment": [
      "underdark",
      "urban"
    ]
  },
  {
    "name": "Spider",
    "size": "T",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": 12,
    "hp": 1,
    "speed": "Walk 20, Climb 20",
    "str": 2,
    "dex": 14,
    "con": 8,
    "int": 1,
    "wis": 10,
    "cha": 2,
    "skill": "Stealth +4",
    "senses": "darkvision 30 ft.",
    "passive": 10,
    "cr": "0",
    "trait": [
      {
        "Name": "Spider Climb",
        "Text": "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
      },
      {
        "Name": "Web Sense",
        "Text": "While in contact with a web, the spider knows the exact location of any other creature in contact with the same web."
      },
      {
        "Name": "Web Walker",
        "Text": "The spider ignores movement restrictions caused by webbing."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one creature. Hit:1 piercing damage, and the target must succeed on a 9 Constitution saving throw or take 2 (1d4) poison damage."
      }
    ],
    "familiar": true
  },
  {
    "name": "Spined Devil",
    "size": "S",
    "type": "fiend (devil)",
    "alignment": "Lawful Evil",
    "ac": "13 natural armor",
    "hp": 22,
    "speed": "Walk 20, Fly 40",
    "str": 10,
    "dex": 15,
    "con": 12,
    "int": 11,
    "wis": 14,
    "cha": 8,
    "senses": "darkvision 120 ft.",
    "passive": 12,
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
    "languages": "Infernal, telepathy 120 ft.",
    "cr": "2",
    "trait": [
      {
        "Name": "Devil's Sight",
        "Text": "Magical darkness doesn't impede the devil's darkvision."
      },
      {
        "Name": "Flyby",
        "Text": "The devil doesn't provoke an opportunity attack when it flies out of an enemy's reach."
      },
      {
        "Name": "Limited Spines",
        "Text": "The devil has twelve tail spines. Used spines regrow by the time the devil finishes a long rest."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The devil has advantage on saving throws against spells and other magical effects."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The devil makes two attacks: one with its bite and one with its fork or two with its tail spines."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 2 to hit, reach 5 ft., one target. Hit:5 (2d4) slashing damage."
      },
      {
        "Name": "Fork",
        "Text": "Melee Weapon 2 to hit, reach 5 ft., one target. Hit:3 (1d6) piercing damage."
      },
      {
        "Name": "Tail Spine",
        "Text": "Ranged Weapon 4 to hit, range 20/80 ft., one target. Hit:4 (1d4 + 2) piercing damage plus 3 (1d6) fire damage."
      }
    ]
  },
  {
    "name": "Spirit Naga",
    "size": "L",
    "type": "monstrosity",
    "alignment": "Chaotic Evil",
    "ac": "15 natural armor",
    "hp": 75,
    "speed": "Walk 40",
    "str": 18,
    "dex": 17,
    "con": 14,
    "int": 16,
    "wis": 15,
    "cha": 16,
    "save": "Dex +6, Con +5, Wis +5, Cha +6",
    "senses": "darkvision 60 ft.",
    "passive": 12,
    "immune": "poison",
    "conditionImmune": "charmed, poisoned",
    "languages": "Abyssal, Common",
    "cr": "8",
    "trait": [
      {
        "Name": "Rejuvenation",
        "Text": "If it dies, the naga returns to life in 1d6 days and regains all its hit points. Only a wish spell can prevent this trait from functioning."
      },
      {
        "Name": "Spellcasting",
        "Text": "The naga is a 10th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 14, +6 to hit with spell attacks), and it needs only verbal components to cast its spells. It has the following wizard spells prepared:<br><br>Cantrips (at will): <em>mage hand, minor illusion, ray of frost</em><br>1st (1 slots): <em>charm person, detect magic, sleep</em><br>2nd (2 slots): <em>detect thoughts, hold person</em><br>3rd (3 slots): <em>lightning bolt, water breathing</em><br>4th (4 slots): <em>blight, dimension door</em><br>5th (5 slots): <em>dominate person</em>"
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 7 to hit, reach 10 ft., one creature. Hit:7 (1d6 + 4) piercing damage, and the target must make a 13 Constitution saving throw, taking 31 (7d8) poison damage on a failed save, or half as much damage on a successful one."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Sprite",
    "size": "T",
    "type": "fey",
    "alignment": "Neutral Good",
    "ac": "15 leather armor",
    "hp": 2,
    "speed": "Walk 10, Fly 40",
    "str": 3,
    "dex": 18,
    "con": 10,
    "int": 14,
    "wis": 13,
    "cha": 11,
    "skill": "Perception +3, Stealth +8",
    "passive": 13,
    "languages": "Common, Elvish, Sylvan",
    "cr": "1/4",
    "action": [
      {
        "Name": "Longsword",
        "Text": "Melee Weapon 2 to hit, reach 5 ft., one target. Hit:1 slashing damage."
      },
      {
        "Name": "Shortbow",
        "Text": "Ranged Weapon 6 to hit, range 40/160 ft., one target. Hit:1 piercing damage, and the target must succeed on a 10 Constitution saving throw or become poisoned for 1 minute. If its saving throw result is 5 or lower, the poisoned target falls unconscious for the same duration, or until it takes damage or another creature takes an action to shake it awake."
      },
      {
        "Name": "Heart Sight",
        "Text": "The sprite touches a creature and magically knows the creature's current emotional state. If the target fails a 10 Charisma saving throw, the sprite also knows the creature's alignment. Celestials, fiends, and undead automatically fail the saving throw."
      },
      {
        "Name": "Invisibility",
        "Text": "The sprite magically turns invisible until it attacks or casts a spell, or until its concentration ends (as if concentrating on a spell). Any equipment the sprite wears or carries is invisible with it."
      }
    ],
    "environment": [
      "forest"
    ],
    "familiar": true
  },
  {
    "name": "Spy",
    "size": "M",
    "type": "humanoid (any race)",
    "alignment": "Any",
    "ac": 12,
    "hp": 27,
    "speed": "Walk 30",
    "str": 10,
    "dex": 15,
    "con": 10,
    "int": 12,
    "wis": 14,
    "cha": 16,
    "skill": "Deception +5, Insight +4, Investigation +5, Perception +6, Persuasion +5, Sleight of hand +4, Stealth +4",
    "passive": 16,
    "languages": "any two languages",
    "cr": "1",
    "trait": [
      {
        "Name": "Cunning Action",
        "Text": "On each of its turns, the spy can use a bonus action to take the Dash, Disengage, or Hide action."
      },
      {
        "Name": "Sneak Attack (1/Turn)",
        "Text": "The spy deals an extra 7 (2d6) damage when it hits a target with a weapon attack and has advantage on the attack roll, or when the target is within 5 feet of an ally of the spy that isn't incapacitated and the spy doesn't have disadvantage on the attack roll."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The spy makes two melee attacks."
      },
      {
        "Name": "Shortsword",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:5 (1d6 + 2) piercing damage."
      },
      {
        "Name": "Hand Crossbow",
        "Text": "Ranged Weapon 4 to hit, range 30/120 ft., one target. Hit:5 (1d6 + 2) piercing damage."
      }
    ]
  },
  {
    "name": "Steam Mephit",
    "size": "S",
    "type": "elemental",
    "alignment": "Neutral Evil",
    "ac": 10,
    "hp": 21,
    "speed": "Walk 30, Fly 30",
    "str": 5,
    "dex": 11,
    "con": 10,
    "int": 11,
    "wis": 10,
    "cha": 12,
    "senses": "darkvision 60 ft.",
    "passive": 10,
    "immune": "fire, poison",
    "conditionImmune": "poisoned",
    "languages": "Aquan, Ignan",
    "cr": "1/4",
    "trait": [
      {
        "Name": "Death Burst",
        "Text": "When the mephit dies, it explodes in a cloud of steam. Each creature within 5 feet of the mephit must succeed on a 10 Dexterity saving throw or take 4 (1d8) fire damage."
      },
      {
        "Name": "Innate Spellcasting (1/Day)",
        "Text": "The mephit can innately cast blur, requiring no material components. Its innate spellcasting ability is Charisma.<br>At will: <em>blur</em>"
      }
    ],
    "action": [
      {
        "Name": "Claws",
        "Text": "Melee Weapon 2 to hit, reach 5 ft., one creature. Hit:2 (1d4) slashing damage plus 2 (1d4) fire damage."
      },
      {
        "Name": "Steam Breath (Recharge 6)",
        "Text": "The mephit exhales a 15-foot cone of scalding steam. Each creature in that area must succeed on a 10 Dexterity saving throw, taking 4 (1d8) fire damage on a failed save, or half as much damage on a successful one."
      }
    ],
    "environment": [
      "underwater"
    ]
  },
  {
    "name": "Stirge",
    "size": "T",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": "14 natural armor",
    "hp": 2,
    "speed": "Walk 10, Fly 40",
    "str": 4,
    "dex": 16,
    "con": 11,
    "int": 2,
    "wis": 8,
    "cha": 6,
    "senses": "darkvision 60 ft.",
    "passive": 9,
    "cr": "1/8",
    "action": [
      {
        "Name": "Blood Drain",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one creature. Hit:5 (1d4 + 3) piercing damage, and the stirge attaches to the target. While attached, the stirge doesn't attack. Instead, at the start of each of the stirge's turns, the target loses 5 (1d4 + 3) hit points due to blood loss.<br>The stirge can detach itself by spending 5 feet of its movement. It does so after it drains 10 hit points of blood from the target or the target dies. A creature, including the target, can use its action to detach the stirge."
      }
    ],
    "environment": [
      "grassland",
      "forest",
      "swamp",
      "hill",
      "urban",
      "desert",
      "coastal",
      "mountain",
      "underdark"
    ]
  },
  {
    "name": "Stone Giant",
    "size": "H",
    "type": "giant",
    "alignment": "Neutral",
    "ac": "17 natural armor",
    "hp": 126,
    "speed": "Walk 40",
    "str": 23,
    "dex": 15,
    "con": 20,
    "int": 10,
    "wis": 12,
    "cha": 9,
    "save": "Dex +5, Con +8, Wis +4",
    "skill": "Athletics +12, Perception +4",
    "senses": "darkvision 60 ft.",
    "passive": 14,
    "languages": "Giant",
    "cr": "7",
    "trait": [
      {
        "Name": "Stone Camouflage",
        "Text": "The giant has advantage on Dexterity (Stealth) checks made to hide in rocky terrain."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The giant makes two greatclub attacks."
      },
      {
        "Name": "Greatclub",
        "Text": "Melee Weapon 9 to hit, reach 15 ft., one target. Hit:19 (3d8 + 6) bludgeoning damage."
      },
      {
        "Name": "Rock",
        "Text": "Ranged Weapon 9 to hit, range 60/240 ft., one target. Hit:28 (4d10 + 6) bludgeoning damage. If the target is a creature, it must succeed on a 17 Strength saving throw or be knocked prone."
      }
    ],
    "reaction": [
      {
        "Name": "Rock Catching",
        "Text": "If a rock or similar object is hurled at the giant, the giant can, with a successful 10 Dexterity saving throw, catch the missile and take no bludgeoning damage from it."
      }
    ],
    "environment": [
      "underdark",
      "mountain",
      "hill"
    ]
  },
  {
    "name": "Stone Golem",
    "size": "L",
    "type": "construct",
    "alignment": "Unaligned",
    "ac": "17 natural armor",
    "hp": 178,
    "speed": "Walk 30",
    "str": 22,
    "dex": 9,
    "con": 20,
    "int": 3,
    "wis": 11,
    "cha": 1,
    "senses": "darkvision 120 ft.",
    "passive": 10,
    "immune": "poison, psychic, bludgeoning, piercing, slashing from nonmagical attacks that aren't adamantine",
    "conditionImmune": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned",
    "languages": "understands the languages of its creator but can't speak",
    "cr": "10",
    "trait": [
      {
        "Name": "Immutable Form",
        "Text": "The golem is immune to any spell or effect that would alter its form."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The golem has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Magic Weapons",
        "Text": "The golem's weapon attacks are magical."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The golem makes two slam attacks."
      },
      {
        "Name": "Slam",
        "Text": "Melee Weapon 10 to hit, reach 5 ft., one target. Hit:19 (3d8 + 6) bludgeoning damage."
      },
      {
        "Name": "Slow (Recharge 5-6)",
        "Text": "The golem targets one or more creatures it can see within 10 feet of it. Each target must make a 17 Wisdom saving throw against this magic. On a failed save, a target can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the target can take either an action or a bonus action on its turn, not both. These effects last for 1 minute. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      }
    ]
  },
  {
    "name": "Storm Giant",
    "size": "H",
    "type": "giant",
    "alignment": "Chaotic Good",
    "ac": "16 scale mail",
    "hp": 230,
    "speed": "Walk 50, Swim 50",
    "str": 29,
    "dex": 14,
    "con": 20,
    "int": 16,
    "wis": 18,
    "cha": 18,
    "save": "Str +14, Con +10, Wis +9, Cha +9",
    "skill": "Arcana +8, Athletics +14, History +8, Perception +9",
    "passive": 19,
    "resist": [
      "cold"
    ],
    "immune": "lightning, thunder",
    "languages": "Common, Giant",
    "cr": "13",
    "trait": [
      {
        "Name": "Amphibious",
        "Text": "The giant can breathe air and water."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>3/day each: <em>control weather, water breathing</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The giant makes two greatsword attacks."
      },
      {
        "Name": "Greatsword",
        "Text": "Melee Weapon 14 to hit, reach 10 ft., one target. Hit:30 (6d6 + 9) slashing damage."
      },
      {
        "Name": "Rock",
        "Text": "Ranged Weapon 14 to hit, range 60/240 ft., one target. Hit:35 (4d12 + 9) bludgeoning damage."
      },
      {
        "Name": "Lightning Strike (Recharge 5-6)",
        "Text": "The giant hurls a magical lightning bolt at a point it can see within 500 feet of it. Each creature within 10 feet of that point must make a 17 Dexterity saving throw, taking 54 (12d8) lightning damage on a failed save, or half as much damage on a successful one."
      }
    ],
    "environment": [
      "coastal"
    ]
  },
  {
    "name": "Succubus",
    "size": "M",
    "type": "fiend (shapechanger)",
    "alignment": "Neutral Evil",
    "ac": "15 natural armor",
    "hp": 66,
    "speed": "Walk 30, Fly 60",
    "str": 8,
    "dex": 17,
    "con": 13,
    "int": 15,
    "wis": 12,
    "cha": 20,
    "skill": "Deception +9, Insight +5, Perception +5, Persuasion +9, Stealth +7",
    "senses": "darkvision 60 ft.",
    "passive": 15,
    "resist": [
      "cold",
      "fire",
      "lightning",
      "poison",
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
    "languages": "Abyssal, Common, Infernal, telepathy 60 ft.",
    "cr": "4",
    "trait": [
      {
        "Name": "Telepathic Bond",
        "Text": "The fiend ignores the range restriction on its telepathy when communicating with a creature it has charmed. The two don't even need to be on the same plane of existence."
      },
      {
        "Name": "Shapechanger",
        "Text": "The fiend can use its action to polymorph into a Small or Medium humanoid, or back into its true form. Without wings, the fiend loses its flying speed. Other than its size and speed, its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
      }
    ],
    "action": [
      {
        "Name": "Claw (Fiend Form Only)",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:6 (1d6 + 3) slashing damage."
      },
      {
        "Name": "Charm",
        "Text": "One humanoid the fiend can see within 30 feet of it must succeed on a 15 Wisdom saving throw or be magically charmed for 1 day. The charmed target obeys the fiend's verbal or telepathic commands. If the target suffers any harm or receives a suicidal command, it can repeat the saving throw, ending the effect on a success. If the target successfully saves against the effect, or if the effect on it ends, the target is immune to this fiend's Charm for the next 24 hours."
      },
      {
        "Name": "Draining Kiss",
        "Text": "The fiend kisses a creature charmed by it or a willing creature. The target must make a 15 Constitution saving throw against this magic, taking 32 (5d10 + 5) psychic damage on a failed save, or half as much damage on a successful one. The target's hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0."
      },
      {
        "Name": "Etherealness",
        "Text": "The fiend magically enters the Ethereal Plane from the Material Plane, or vice versa."
      }
    ],
    "environment": [
      "urban"
    ]
  },
  {
    "name": "Swarm of Bats",
    "size": "M",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": 12,
    "hp": 22,
    "speed": "Walk 0, Fly 30",
    "str": 5,
    "dex": 15,
    "con": 10,
    "int": 2,
    "wis": 12,
    "cha": 4,
    "senses": "blindsight 60 ft.",
    "passive": 11,
    "resist": [
      "bludgeoning",
      "piercing",
      "slashing"
    ],
    "conditionImmune": "charmed, frightened, grappled, paralyzed, petrified, prone, restrained, stunned",
    "cr": "1/4",
    "trait": [
      {
        "Name": "Echolocation",
        "Text": "The swarm can't use its blindsight while deafened."
      },
      {
        "Name": "Keen Hearing",
        "Text": "The swarm has advantage on Wisdom (Perception) checks that rely on hearing."
      },
      {
        "Name": "Swarm",
        "Text": "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny bat. The swarm can't regain hit points or gain temporary hit points."
      }
    ],
    "action": [
      {
        "Name": "Bites",
        "Text": "Melee Weapon 4 to hit, reach 0 ft., one creature in the swarm's space. Hit:5 (2d4) piercing damage, or 2 (1d4) piercing damage if the swarm has half of its hit points or fewer."
      }
    ],
    "environment": [
      "underdark",
      "mountain",
      "hill",
      "urban"
    ]
  },
  {
    "name": "Swarm of Beetles",
    "size": "M",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": "12 natural armor",
    "hp": 22,
    "speed": "Walk 20, Burrow 5, Climb 20",
    "str": 3,
    "dex": 13,
    "con": 10,
    "int": 1,
    "wis": 7,
    "cha": 1,
    "senses": "blindsight 10 ft.",
    "passive": 8,
    "resist": [
      "bludgeoning",
      "piercing",
      "slashing"
    ],
    "conditionImmune": "charmed, frightened, grappled, paralyzed, petrified, prone, restrained, stunned",
    "cr": "1/2",
    "trait": [
      {
        "Name": "Swarm",
        "Text": "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny insect. The swarm can't regain hit points or gain temporary hit points."
      }
    ],
    "action": [
      {
        "Name": "Bites",
        "Text": "Melee Weapon 3 to hit, reach 0 ft., one target in the swarm's space. Hit:10 (4d4) piercing damage, or 5 (2d4) piercing damage if the swarm has half of its hit points or fewer."
      }
    ],
    "environment": [
      "underdark",
      "grassland",
      "forest",
      "swamp",
      "hill",
      "urban",
      "desert"
    ]
  },
  {
    "name": "Swarm of Centipedes",
    "size": "M",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": "12 natural armor",
    "hp": 22,
    "speed": "Walk 20, Climb 20",
    "str": 3,
    "dex": 13,
    "con": 10,
    "int": 1,
    "wis": 7,
    "cha": 1,
    "senses": "blindsight 10 ft.",
    "passive": 8,
    "resist": [
      "bludgeoning",
      "piercing",
      "slashing"
    ],
    "conditionImmune": "charmed, frightened, grappled, paralyzed, petrified, prone, restrained, stunned",
    "cr": "1/2",
    "trait": [
      {
        "Name": "Swarm",
        "Text": "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny insect. The swarm can't regain hit points or gain temporary hit points."
      }
    ],
    "action": [
      {
        "Name": "Bites",
        "Text": "Melee Weapon 3 to hit, reach 0 ft., one target in the swarm's space. Hit:10 (4d4) piercing damage, or 5 (2d4) piercing damage if the swarm has half of its hit points or fewer.<br>A creature reduced to 0 hit points by a swarm of centipedes is stable but poisoned for 1 hour, even after regaining hit points, and paralyzed while poisoned in this way."
      }
    ],
    "environment": [
      "underdark",
      "grassland",
      "forest",
      "swamp",
      "hill",
      "urban",
      "desert"
    ]
  },
  {
    "name": "Swarm of Insects",
    "size": "M",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": "12 natural armor",
    "hp": 22,
    "speed": "Walk 20, Climb 20",
    "str": 3,
    "dex": 13,
    "con": 10,
    "int": 1,
    "wis": 7,
    "cha": 1,
    "senses": "blindsight 10 ft.",
    "passive": 8,
    "resist": [
      "bludgeoning",
      "piercing",
      "slashing"
    ],
    "conditionImmune": "charmed, frightened, grappled, paralyzed, petrified, prone, restrained, stunned",
    "cr": "1/2",
    "trait": [
      {
        "Name": "Swarm",
        "Text": "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny insect. The swarm can't regain hit points or gain temporary hit points."
      }
    ],
    "action": [
      {
        "Name": "Bites",
        "Text": "Melee Weapon 3 to hit, reach 0 ft., one target in the swarm's space. Hit:10 (4d4) piercing damage, or 5 (2d4) piercing damage if the swarm has half of its hit points or fewer."
      }
    ],
    "environment": [
      "underdark",
      "grassland",
      "forest",
      "swamp",
      "hill",
      "urban",
      "desert"
    ]
  },
  {
    "name": "Swarm of Poisonous Snakes",
    "size": "M",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": 14,
    "hp": 36,
    "speed": "Walk 30, Swim 30",
    "str": 8,
    "dex": 18,
    "con": 11,
    "int": 1,
    "wis": 10,
    "cha": 3,
    "senses": "blindsight 10 ft.",
    "passive": 10,
    "resist": [
      "bludgeoning",
      "piercing",
      "slashing"
    ],
    "conditionImmune": "charmed, frightened, grappled, paralyzed, petrified, prone, restrained, stunned",
    "cr": "2",
    "trait": [
      {
        "Name": "Swarm",
        "Text": "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny snake. The swarm can't regain hit points or gain temporary hit points."
      }
    ],
    "action": [
      {
        "Name": "Bites",
        "Text": "Melee Weapon 6 to hit, reach 0 ft., one creature in the swarm's space. Hit:7 (2d6) piercing damage, or 3 (1d6) piercing damage if the swarm has half of its hit points or fewer. The target must make a 10 Constitution saving throw, taking 14 (4d6) poison damage on a failed save, or half as much damage on a successful one."
      }
    ],
    "environment": [
      "forest",
      "swamp"
    ]
  },
  {
    "name": "Swarm of Quippers",
    "size": "M",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": 13,
    "hp": 28,
    "speed": "Walk 0, Swim 40",
    "str": 13,
    "dex": 16,
    "con": 9,
    "int": 1,
    "wis": 7,
    "cha": 2,
    "senses": "darkvision 60 ft.",
    "passive": 8,
    "resist": [
      "bludgeoning",
      "piercing",
      "slashing"
    ],
    "conditionImmune": "charmed, frightened, grappled, paralyzed, petrified, prone, restrained, stunned",
    "cr": "1",
    "trait": [
      {
        "Name": "Blood Frenzy",
        "Text": "The swarm has advantage on melee attack rolls against any creature that doesn't have all its hit points."
      },
      {
        "Name": "Swarm",
        "Text": "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny quipper. The swarm can't regain hit points or gain temporary hit points."
      },
      {
        "Name": "Water Breathing",
        "Text": "The swarm can breathe only underwater."
      }
    ],
    "action": [
      {
        "Name": "Bites",
        "Text": "Melee Weapon 5 to hit, reach 0 ft., one creature in the swarm's space. Hit:14 (4d6) piercing damage, or 7 (2d6) piercing damage if the swarm has half of its hit points or fewer."
      }
    ],
    "environment": [
      "underwater"
    ]
  },
  {
    "name": "Swarm of Rats",
    "size": "M",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": 10,
    "hp": 24,
    "speed": "Walk 30",
    "str": 9,
    "dex": 11,
    "con": 9,
    "int": 2,
    "wis": 10,
    "cha": 3,
    "senses": "darkvision 30 ft.",
    "passive": 10,
    "resist": [
      "bludgeoning",
      "piercing",
      "slashing"
    ],
    "conditionImmune": "charmed, frightened, grappled, paralyzed, petrified, prone, restrained, stunned",
    "cr": "1/4",
    "trait": [
      {
        "Name": "Keen Smell",
        "Text": "The swarm has advantage on Wisdom (Perception) checks that rely on smell."
      },
      {
        "Name": "Swarm",
        "Text": "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny rat. The swarm can't regain hit points or gain temporary hit points."
      }
    ],
    "action": [
      {
        "Name": "Bites",
        "Text": "Melee Weapon 2 to hit, reach 0 ft., one target in the swarm's space. Hit:7 (2d6) piercing damage, or 3 (1d6) piercing damage if the swarm has half of its hit points or fewer."
      }
    ],
    "environment": [
      "swamp",
      "urban"
    ]
  },
  {
    "name": "Swarm of Ravens",
    "size": "M",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": 12,
    "hp": 24,
    "speed": "Walk 10, Fly 50",
    "str": 6,
    "dex": 14,
    "con": 8,
    "int": 3,
    "wis": 12,
    "cha": 6,
    "skill": "Perception +5",
    "passive": 15,
    "resist": [
      "bludgeoning",
      "piercing",
      "slashing"
    ],
    "conditionImmune": "charmed, frightened, grappled, paralyzed, petrified, prone, restrained, stunned",
    "cr": "1/4",
    "trait": [
      {
        "Name": "Swarm",
        "Text": "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny raven. The swarm can't regain hit points or gain temporary hit points."
      }
    ],
    "action": [
      {
        "Name": "Beaks",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target in the swarm's space. Hit:7 (2d6) piercing damage, or 3 (1d6) piercing damage if the swarm has half of its hit points or fewer."
      }
    ],
    "environment": [
      "forest",
      "swamp",
      "hill",
      "urban"
    ]
  },
  {
    "name": "Swarm of Spiders",
    "size": "M",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": "12 natural armor",
    "hp": 22,
    "speed": "Walk 20, Climb 20",
    "str": 3,
    "dex": 13,
    "con": 10,
    "int": 1,
    "wis": 7,
    "cha": 1,
    "senses": "blindsight 10 ft.",
    "passive": 8,
    "resist": [
      "bludgeoning",
      "piercing",
      "slashing"
    ],
    "conditionImmune": "charmed, frightened, grappled, paralyzed, petrified, prone, restrained, stunned",
    "cr": "1/2",
    "trait": [
      {
        "Name": "Swarm",
        "Text": "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny insect. The swarm can't regain hit points or gain temporary hit points."
      },
      {
        "Name": "Spider Climb",
        "Text": "The swarm can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
      },
      {
        "Name": "Web Sense",
        "Text": "While in contact with a web, the swarm knows the exact location of any other creature in contact with the same web."
      },
      {
        "Name": "Web Walker",
        "Text": "The swarm ignores movement restrictions caused by webbing."
      }
    ],
    "action": [
      {
        "Name": "Bites",
        "Text": "Melee Weapon 3 to hit, reach 0 ft., one target in the swarm's space. Hit:10 (4d4) piercing damage, or 5 (2d4) piercing damage if the swarm has half of its hit points or fewer."
      }
    ],
    "environment": [
      "underdark",
      "grassland",
      "forest",
      "swamp",
      "hill",
      "urban",
      "desert"
    ]
  },
  {
    "name": "Swarm of Wasps",
    "size": "M",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": "12 natural armor",
    "hp": 22,
    "speed": "Walk 5, Fly 30",
    "str": 3,
    "dex": 13,
    "con": 10,
    "int": 1,
    "wis": 7,
    "cha": 1,
    "senses": "blindsight 10 ft.",
    "passive": 8,
    "resist": [
      "bludgeoning",
      "piercing",
      "slashing"
    ],
    "conditionImmune": "charmed, frightened, grappled, paralyzed, petrified, prone, restrained, stunned",
    "cr": "1/2",
    "trait": [
      {
        "Name": "Swarm",
        "Text": "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny insect. The swarm can't regain hit points or gain temporary hit points."
      }
    ],
    "action": [
      {
        "Name": "Bites",
        "Text": "Melee Weapon 3 to hit, reach 0 ft., one target in the swarm's space. Hit:10 (4d4) piercing damage, or 5 (2d4) piercing damage if the swarm has half of its hit points or fewer."
      }
    ],
    "environment": [
      "underdark",
      "grassland",
      "forest",
      "swamp",
      "hill",
      "urban",
      "desert"
    ]
  },
  {
    "name": "Tarrasque",
    "size": "G",
    "type": "monstrosity (titan)",
    "alignment": "Unaligned",
    "ac": "25 natural armor",
    "hp": 676,
    "speed": "Walk 40",
    "str": 30,
    "dex": 11,
    "con": 30,
    "int": 3,
    "wis": 11,
    "cha": 11,
    "save": "Int +5, Wis +9, Cha +9",
    "senses": "blindsight 120 ft.",
    "passive": 10,
    "immune": "fire, poison, bludgeoning, piercing, slashing from nonmagical attacks",
    "conditionImmune": "charmed, frightened, paralyzed, poisoned",
    "cr": "30",
    "trait": [
      {
        "Name": "Legendary Resistance (3/Day)",
        "Text": "If the tarrasque fails a saving throw, it can choose to succeed instead."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The tarrasque has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Reflective Carapace",
        "Text": "Any time the tarrasque is targeted by a magic missile spell, a line spell, or a spell that requires a ranged attack roll, roll a d6. On a 1 to 5, the tarrasque is unaffected. On a 6, the tarrasque is unaffected, and the effect is reflected back at the caster as though it originated from the tarrasque, turning the caster into the target."
      },
      {
        "Name": "Siege Monster",
        "Text": "The tarrasque deals double damage to objects and structures."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The tarrasque can use its Frightful Presence. It then makes five attacks: one with its bite, two with its claws, one with its horns, and one with its tail. It can use its Swallow instead of its bite."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 19 to hit, reach 10 ft., one target. Hit:36 (4d12 + 10) piercing damage. If the target is a creature, it is grappled (escape 20). Until this grapple ends, the target is restrained, and the tarrasque can't bite another target."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 19 to hit, reach 15 ft., one target. Hit:28 (4d8 + 10) slashing damage."
      },
      {
        "Name": "Horns",
        "Text": "Melee Weapon 19 to hit, reach 10 ft., one target. Hit:32 (4d10 + 10) piercing damage."
      },
      {
        "Name": "Tail",
        "Text": "Melee Weapon 19 to hit, reach 20 ft., one target. Hit:24 (4d6 + 10) bludgeoning damage. If the target is a creature, it must succeed on a 20 Strength saving throw or be knocked prone."
      },
      {
        "Name": "Frightful Presence",
        "Text": "Each creature of the tarrasque's choice within 120 feet of it and aware of it must succeed on a 17 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, with disadvantage if the tarrasque is within line of sight, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the tarrasque's Frightful Presence for the next 24 hours."
      },
      {
        "Name": "Swallow",
        "Text": "The tarrasque makes one bite attack against a Large or smaller creature it is grappling. If the attack hits, the target takes the bite's damage, the target is swallowed, and the grapple ends. While swallowed, the creature is blinded and restrained, it has total cover against attacks and other effects outside the tarrasque, and it takes 56 (16d6) acid damage at the start of each of the tarrasque's turns."
      }
    ],
    "legendary": [
      {
        "Name": "Attack",
        "Text": "The tarrasque makes one claw attack or tail attack."
      },
      {
        "Name": "Move",
        "Text": "The tarrasque moves up to half its speed."
      },
      {
        "Name": "Chomp (Costs 2 Actions)",
        "Text": "The tarrasque makes one bite attack or uses its Swallow."
      }
    ],
    "environment": [
      "urban"
    ]
  },
  {
    "name": "Thri-kreen",
    "size": "M",
    "type": "humanoid (thri-kreen)",
    "alignment": "Chaotic Neutral",
    "ac": "15 natural armor",
    "hp": 33,
    "speed": "Walk 40",
    "str": 12,
    "dex": 15,
    "con": 13,
    "int": 8,
    "wis": 12,
    "cha": 7,
    "skill": "Perception +3, Stealth +4, Survival +3",
    "senses": "darkvision 60 ft.",
    "passive": 13,
    "languages": "Thri-kreen",
    "cr": "1",
    "trait": [
      {
        "Name": "Chameleon Carapace",
        "Text": "The thri-kreen can change the color of its carapace to match the color and texture of its surroundings. As a result, it has advantage on Dexterity (Stealth) checks made to hide."
      },
      {
        "Name": "Standing Leap",
        "Text": "The thri-kreen's long jump is up to 30 feet and its high jump is up to 15 feet, with or without a running start."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The thri-kreen makes two attacks: one with its bite and one with its claws."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one creature. Hit:4 (1d6 + 1) piercing damage, and the target must succeed on a 11 Constitution saving throw or be poisoned for 1 minute. If the saving throw fails by 5 or more, the target is also paralyzed while poisoned in this way. The poisoned target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      },
      {
        "Name": "Claws",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one target. Hit:6 (2d4 + 1) slashing damage."
      }
    ],
    "environment": [
      "grassland",
      "desert"
    ]
  },
  {
    "name": "Thug",
    "size": "M",
    "type": "humanoid (any race)",
    "alignment": "Lawful Any Non-Good Chaotic Any Non-Lawful Evil",
    "ac": "11 leather armor",
    "hp": 32,
    "speed": "Walk 30",
    "str": 15,
    "dex": 11,
    "con": 14,
    "int": 10,
    "wis": 10,
    "cha": 11,
    "skill": "Intimidation +2",
    "passive": 10,
    "languages": "any one language (usually Common)",
    "cr": "1/2",
    "trait": [
      {
        "Name": "Pack Tactics",
        "Text": "The thug has advantage on an attack roll against a creature if at least one of the thug's allies is within 5 feet of the creature and the ally isn't incapacitated."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The thug makes two melee attacks."
      },
      {
        "Name": "Mace",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one creature. Hit:5 (1d6 + 2) bludgeoning damage."
      },
      {
        "Name": "Heavy Crossbow",
        "Text": "Ranged Weapon 2 to hit, range 100/400 ft., one target. Hit:5 (1d10) piercing damage."
      }
    ]
  },
  {
    "name": "Tiger",
    "size": "L",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": 12,
    "hp": 37,
    "speed": "Walk 40",
    "str": 17,
    "dex": 15,
    "con": 14,
    "int": 3,
    "wis": 12,
    "cha": 8,
    "skill": "Perception +3, Stealth +6",
    "senses": "darkvision 60 ft.",
    "passive": 13,
    "cr": "1",
    "trait": [
      {
        "Name": "Keen Smell",
        "Text": "The tiger has advantage on Wisdom (Perception) checks that rely on smell."
      },
      {
        "Name": "Pounce",
        "Text": "If the tiger moves at least 20 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a 13 Strength saving throw or be knocked prone. If the target is prone, the tiger can make one bite attack against it as a bonus action."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:8 (1d10 + 3) piercing damage."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:7 (1d8 + 3) slashing damage."
      }
    ],
    "environment": [
      "grassland",
      "forest"
    ]
  },
  {
    "name": "Treant",
    "size": "H",
    "type": "plant",
    "alignment": "Chaotic Good",
    "ac": "16 natural armor",
    "hp": 138,
    "speed": "Walk 30",
    "str": 23,
    "dex": 8,
    "con": 21,
    "int": 12,
    "wis": 16,
    "cha": 12,
    "passive": 13,
    "resist": [
      "bludgeoning",
      "piercing"
    ],
    "vulnerable": [
      "fire"
    ],
    "languages": "Common, Druidic, Elvish, Sylvan",
    "cr": "9",
    "trait": [
      {
        "Name": "False Appearance",
        "Text": "While the treant remains motionless, it is indistinguishable from a normal tree."
      },
      {
        "Name": "Siege Monster",
        "Text": "The treant deals double damage to objects and structures."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The treant makes two slam attacks."
      },
      {
        "Name": "Slam",
        "Text": "Melee Weapon 10 to hit, reach 5 ft., one target. Hit:16 (3d6 + 6) bludgeoning damage."
      },
      {
        "Name": "Rock",
        "Text": "Ranged Weapon 10 to hit, range 60/180 ft., one target. Hit:28 (4d10 + 6) bludgeoning damage."
      },
      {
        "Name": "Animate Trees (1/Day)",
        "Text": "The treant magically animates one or two trees it can see within 60 feet of it. These trees have the same statistics as a treant, except they have Intelligence and Charisma scores of 1, they can't speak, and they have only the Slam action option. An animated tree acts as an ally of the treant. The tree remains animate for 1 day or until it dies; until the treant dies or is more than 120 feet from the tree; or until the treant takes a bonus action to turn it back into an inanimate tree. The tree then takes root if possible."
      }
    ],
    "environment": [
      "forest"
    ]
  },
  {
    "name": "Tribal Warrior",
    "size": "M",
    "type": "humanoid (any race)",
    "alignment": "Any",
    "ac": "12 hide armor",
    "hp": 11,
    "speed": "Walk 30",
    "str": 13,
    "dex": 11,
    "con": 12,
    "int": 8,
    "wis": 11,
    "cha": 8,
    "passive": 10,
    "languages": "any one language",
    "cr": "1/8",
    "trait": [
      {
        "Name": "Pack Tactics",
        "Text": "The warrior has advantage on an attack roll against a creature if at least one of the warrior's allies is within 5 feet of the creature and the ally isn't incapacitated."
      }
    ],
    "action": [
      {
        "Name": "Spear",
        "Text": "Melee or Ranged Weapon 3 to hit, reach 5 ft. or range 20/60 ft., one target. Hit:4 (1d6 + 1) piercing damage, or 5 (1d8 + 1) piercing damage if used with two hands to make a melee attack."
      }
    ]
  },
  {
    "name": "Triceratops",
    "size": "H",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": "13 natural armor",
    "hp": 95,
    "speed": "Walk 50",
    "str": 22,
    "dex": 9,
    "con": 17,
    "int": 2,
    "wis": 11,
    "cha": 5,
    "passive": 10,
    "cr": "5",
    "trait": [
      {
        "Name": "Trampling Charge",
        "Text": "If the triceratops moves at least 20 feet straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a 13 Strength saving throw or be knocked prone. If the target is prone, the triceratops can make one stomp attack against it as a bonus action."
      }
    ],
    "action": [
      {
        "Name": "Gore",
        "Text": "Melee Weapon 9 to hit, reach 5 ft., one target. Hit:24 (4d8 + 6) piercing damage."
      },
      {
        "Name": "Stomp",
        "Text": "Melee Weapon 9 to hit, reach 5 ft., one prone creature. Hit:22 (3d10 + 6) bludgeoning damage"
      }
    ],
    "environment": [
      "grassland"
    ]
  },
  {
    "name": "Tridrone",
    "size": "M",
    "type": "construct",
    "alignment": "Lawful Neutral",
    "ac": "15 natural armor",
    "hp": 16,
    "speed": "Walk 30",
    "str": 12,
    "dex": 13,
    "con": 12,
    "int": 9,
    "wis": 10,
    "cha": 9,
    "senses": "truesight 120 ft.",
    "passive": 10,
    "languages": "Modron",
    "cr": "1/2",
    "trait": [
      {
        "Name": "Axiomatic Mind",
        "Text": "The tridrone can't be compelled to act in a manner contrary to its nature or its instructions."
      },
      {
        "Name": "Disintegration",
        "Text": "If the tridrone dies, its body disintegrates into dust, leaving behind its weapons and anything else it was carrying."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The tridrone makes three fist attacks or three javelin attacks."
      },
      {
        "Name": "Fist",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one target. Hit:3 (1d4 + 1) bludgeoning damage."
      },
      {
        "Name": "Javelin",
        "Text": "Melee or Ranged Weapon 3 to hit, reach 5 ft. or range 30/120 ft., one target. Hit:4 (1d6 + 1) piercing damage."
      }
    ]
  },
  {
    "name": "Troglodyte",
    "size": "M",
    "type": "humanoid (troglodyte)",
    "alignment": "Chaotic Evil",
    "ac": "11 natural armor",
    "hp": 13,
    "speed": "Walk 30",
    "str": 14,
    "dex": 10,
    "con": 14,
    "int": 6,
    "wis": 10,
    "cha": 6,
    "skill": "Stealth +2",
    "senses": "darkvision 60 ft.",
    "passive": 10,
    "languages": "Troglodyte",
    "cr": "1/4",
    "trait": [
      {
        "Name": "Chameleon Skin",
        "Text": "The troglodyte has advantage on Dexterity (Stealth) checks made to hide."
      },
      {
        "Name": "Stench",
        "Text": "Any creature other than a troglodyte that starts its turn within 5 feet of the troglodyte must succeed on a 12 Constitution saving throw or be poisoned until the start of the creature's next turn. On a successful saving throw, the creature is immune to the stench of all troglodytes for 1 hour."
      },
      {
        "Name": "Sunlight Sensitivity",
        "Text": "While in sunlight, the troglodyte has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The troglodyte makes three attacks: one with its bite and two with its claws."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:4 (1d4 + 2) piercing damage."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:4 (1d4 + 2) slashing damage."
      }
    ],
    "environment": [
      "underdark"
    ],
    "altArt": [
      {
        "name": "Warren Troglodyte",
        "source": "WDMM"
      },
      {
        "name": "Troglodyte",
        "source": "HftT"
      }
    ]
  },
  {
    "name": "Troll",
    "size": "L",
    "type": "giant",
    "alignment": "Chaotic Evil",
    "ac": "15 natural armor",
    "hp": 84,
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
    "languages": "Giant",
    "cr": "5",
    "trait": [
      {
        "Name": "Keen Smell",
        "Text": "The troll has advantage on Wisdom (Perception) checks that rely on smell."
      },
      {
        "Name": "Regeneration",
        "Text": "The troll regains 10 hit points at the start of its turn. If the troll takes acid or fire damage, this trait doesn't function at the start of the troll's next turn. The troll dies only if it starts its turn with 0 hit points and doesn't regenerate."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The troll makes three attacks: one with its bite and two with its claws."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:7 (1d6 + 4) piercing damage."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:11 (2d6 + 4) slashing damage."
      }
    ],
    "environment": [
      "underdark",
      "mountain",
      "forest",
      "swamp",
      "hill",
      "arctic"
    ]
  },
  {
    "name": "Twig Blight",
    "size": "S",
    "type": "plant",
    "alignment": "Neutral Evil",
    "ac": "13 natural armor",
    "hp": 4,
    "speed": "Walk 20",
    "str": 6,
    "dex": 13,
    "con": 12,
    "int": 4,
    "wis": 8,
    "cha": 3,
    "skill": "Stealth +3",
    "senses": "blindsight 60 ft. (blind beyond this radius)",
    "passive": 9,
    "vulnerable": [
      "fire"
    ],
    "conditionImmune": "blinded, deafened",
    "languages": "understands Common but can't speak",
    "cr": "1/8",
    "trait": [
      {
        "Name": "False Appearance",
        "Text": "While the blight remains motionless, it is indistinguishable from a dead shrub."
      }
    ],
    "action": [
      {
        "Name": "Claws",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one target. Hit:3 (1d4 + 1) piercing damage."
      }
    ],
    "environment": [
      "forest"
    ],
    "altArt": [
      {
        "name": "Twig Blight",
        "source": "DIP"
      }
    ]
  },
  {
    "name": "Tyrannosaurus Rex",
    "size": "H",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": "13 natural armor",
    "hp": 136,
    "speed": "Walk 50",
    "str": 25,
    "dex": 10,
    "con": 19,
    "int": 2,
    "wis": 12,
    "cha": 9,
    "skill": "Perception +4",
    "passive": 14,
    "cr": "8",
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The tyrannosaurus makes two attacks: one with its bite and one with its tail. It can't make both attacks against the same target."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 10 to hit, reach 10 ft., one target. Hit:33 (4d12 + 7) piercing damage. If the target is a Medium or smaller creature, it is grappled (escape 17). Until this grapple ends, the target is restrained, and the tyrannosaurus can't bite another target."
      },
      {
        "Name": "Tail",
        "Text": "Melee Weapon 10 to hit, reach 10 ft., one target. Hit:20 (3d8 + 7) bludgeoning damage."
      }
    ],
    "environment": [
      "grassland"
    ]
  },
  {
    "name": "Ultroloth",
    "size": "M",
    "type": "fiend (yugoloth)",
    "alignment": "Neutral Evil",
    "ac": "19 natural armor",
    "hp": 153,
    "speed": "Walk 30, Fly 60",
    "str": 16,
    "dex": 16,
    "con": 18,
    "int": 18,
    "wis": 15,
    "cha": 19,
    "skill": "Intimidation +9, Perception +7, Stealth +8",
    "senses": "truesight 120 ft.",
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
    "conditionImmune": "charmed, frightened, poisoned",
    "languages": "Abyssal, Infernal, telepathy 120 ft.",
    "cr": "13",
    "trait": [
      {
        "Name": "Magic Resistance",
        "Text": "The ultroloth has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Magic Weapons",
        "Text": "The ultroloth's weapon attacks are magical."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day each: <em>fire storm, mass suggestion</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The ultroloth can use its Hypnotic Gaze and makes three melee attacks."
      },
      {
        "Name": "Longsword",
        "Text": "Melee Weapon 8 to hit, reach 5 ft., one target. Hit:7 (1d8 + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands."
      },
      {
        "Name": "Hypnotic Gaze",
        "Text": "The ultroloth's eyes sparkle with opalescent light as it targets one creature it can see within 30 feet of it. If the target can see the ultroloth, the target must succeed on a 17 Wisdom saving throw against this magic or be charmed until the end of the ultroloth's next turn. The charmed target is stunned. If the target's saving throw is successful, the target is immune to the ultroloth's gaze for the next 24 hours."
      },
      {
        "Name": "Teleport",
        "Text": "The ultroloth magically teleports, along with any equipment it is wearing or carrying, up to 60 feet to an unoccupied space it can see."
      }
    ]
  },
  {
    "name": "Umber Hulk",
    "size": "L",
    "type": "monstrosity",
    "alignment": "Chaotic Evil",
    "ac": "18 natural armor",
    "hp": 93,
    "speed": "Walk 30, Burrow 20",
    "str": 20,
    "dex": 13,
    "con": 16,
    "int": 9,
    "wis": 10,
    "cha": 10,
    "senses": "darkvision 120 ft., tremorsense 60 ft.",
    "passive": 10,
    "languages": "Umber Hulk",
    "cr": "5",
    "trait": [
      {
        "Name": "Confusing Gaze",
        "Text": "When a creature starts its turn within 30 feet of the umber hulk and is able to see the umber hulk's eyes, the umber hulk can magically force it to make a 15 Charisma saving throw, unless the umber hulk is incapacitated.<br>On a failed saving throw, the creature can't take reactions until the start of its next turn and rolls a d8 to determine what it does during that turn. On a 1 to 4, the creature does nothing. On a 5 or 6, the creature takes no action but uses all its movement to move in a random direction. On a 7 or 8, the creature makes one melee attack against a random creature, or it does nothing if no creature is within reach.<br>Unless surprised, a creature can avert its eyes to avoid the saving throw at the start of its turn. If the creature does so, it can't see the umber hulk until the start of its next turn, when it can avert its eyes again. If the creature looks at the umber hulk in the meantime, it must immediately make the save."
      },
      {
        "Name": "Tunneler",
        "Text": "The umber hulk can burrow through solid rock at half its burrowing speed and leaves a 5 foot-wide, 8-foot-high tunnel in its wake."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The umber hulk makes three attacks: two with its claws and one with its mandibles."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 8 to hit, reach 5 ft., one target. Hit:9 (1d8 + 5) slashing damage."
      },
      {
        "Name": "Mandibles",
        "Text": "Melee Weapon 8 to hit, reach 5 ft., one target. Hit:14 (2d8 + 5) slashing damage."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Unicorn",
    "size": "L",
    "type": "celestial",
    "alignment": "Lawful Good",
    "ac": 12,
    "hp": 67,
    "speed": "Walk 50",
    "str": 18,
    "dex": 14,
    "con": 15,
    "int": 11,
    "wis": 17,
    "cha": 16,
    "senses": "darkvision 60 ft.",
    "passive": 13,
    "immune": "poison",
    "conditionImmune": "charmed, paralyzed, poisoned",
    "languages": "Celestial, Elvish, Sylvan, telepathy 60 ft.",
    "cr": "5",
    "trait": [
      {
        "Name": "Charge",
        "Text": "If the unicorn moves at least 20 feet straight toward a target and then hits it with a horn attack on the same turn, the target takes an extra 9 (2d8) piercing damage. If the target is a creature, it must succeed on a 15 Strength saving throw or be knocked prone."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The unicorn has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Magic Weapons",
        "Text": "The unicorn's weapon attacks are magical."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day each: <em>calm emotions, dispel evil and good, entangle</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The unicorn makes two attacks: one with its hooves and one with its horn."
      },
      {
        "Name": "Hooves",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:11 (2d6 + 4) bludgeoning damage."
      },
      {
        "Name": "Horn",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:8 (1d8 + 4) piercing damage."
      },
      {
        "Name": "Healing Touch (3/Day)",
        "Text": "The unicorn touches another creature with its horn. The target magically regains 11 (2d8 + 2) hit points. In addition, the touch removes all diseases and neutralizes all poisons afflicting the target."
      },
      {
        "Name": "Teleport (1/Day)",
        "Text": "The unicorn magically teleports itself and up to three willing creatures it can see within 5 feet of it, along with any equipment they are wearing or carrying, to a location the unicorn is familiar with, up to 1 mile away."
      }
    ],
    "legendary": [
      {
        "Name": "Hooves",
        "Text": "The unicorn makes one attack with its hooves."
      },
      {
        "Name": "Shimmering Shield (Costs 2 Actions)",
        "Text": "The unicorn creates a shimmering, magical field around itself or another creature it can see within 60 feet of it. The target gains a +2 bonus to AC until the end of the unicorn's next turn."
      },
      {
        "Name": "Heal Self (Costs 3 Actions)",
        "Text": "The unicorn magically regains 11 (2d8 + 2) hit points."
      }
    ],
    "environment": [
      "forest"
    ]
  },
  {
    "name": "Vampire",
    "size": "M",
    "type": "undead (shapechanger)",
    "alignment": "Lawful Evil",
    "ac": "16 natural armor",
    "hp": 144,
    "speed": "Walk 30",
    "str": 18,
    "dex": 18,
    "con": 18,
    "int": 17,
    "wis": 15,
    "cha": 18,
    "save": "Dex +9, Wis +7, Cha +9",
    "skill": "Perception +7, Stealth +9",
    "senses": "darkvision 120 ft.",
    "passive": 17,
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
    "languages": "the languages it knew in life",
    "cr": "13",
    "trait": [
      {
        "Name": "Shapechanger",
        "Text": "If the vampire isn't in sunlight or running water, it can use its action to polymorph into a Tiny bat or a Medium cloud of mist, or back into its true form.<br>While in bat form, the vampire can't speak, its walking speed is 5 feet, and it has a flying speed of 30 feet. Its statistics, other than its size and speed, are unchanged. Anything it is wearing transforms with it, but nothing it is carrying does. It reverts to its true form if it dies.<br>While in mist form, the vampire can't take any actions, speak, or manipulate objects. It is weightless, has a flying speed of 20 feet, can hover, and can enter a hostile creature's space and stop there. In addition, if air can pass through a space, the mist can do so without squeezing, and it can't pass through water. It has advantage on Strength, Dexterity, and Constitution saving throws, and it is immune to all nonmagical damage, except the damage it takes from sunlight."
      },
      {
        "Name": "Legendary Resistance (3/Day)",
        "Text": "If the vampire fails a saving throw, it can choose to succeed instead."
      },
      {
        "Name": "Misty Escape",
        "Text": "When it drops to 0 hit points outside its resting place, the vampire transforms into a cloud of mist (as in the Shapechanger trait) instead of falling unconscious, provided that it isn't in sunlight or running water. If it can't transform, it is destroyed."
      },
      {
        "Name": "Regeneration",
        "Text": "The vampire regains 20 hit points at the start of its turn if it has at least 1 hit point and isn't in sunlight or running water. If the vampire takes radiant damage or damage from holy water, this trait doesn't function at the start of the vampire's next turn."
      },
      {
        "Name": "Spider Climb",
        "Text": "The vampire can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
      },
      {
        "Name": "Vampire Weaknesses",
        "Text": "The vampire has the following flaws:"
      }
    ],
    "action": [
      {
        "Name": "Multiattack (Vampire Form Only)",
        "Text": "The vampire makes two attacks, only one of which can be a bite attack."
      },
      {
        "Name": "Unarmed Strike (Vampire Form Only)",
        "Text": "Melee Weapon 9 to hit, reach 5 ft., one creature. Hit:8 (1d8 + 4) bludgeoning damage. Instead of dealing damage, the vampire can grapple the target (escape 18)."
      },
      {
        "Name": "Bite (Bat or Vampire Form Only)",
        "Text": "Melee Weapon 9 to hit, reach 5 ft., one willing creature, or a creature that is grappled by the vampire, incapacitated, or restrained. Hit:7 (1d6 + 4) piercing damage plus 10 (3d6) necrotic damage. The target's hit point maximum is reduced by an amount equal to the necrotic damage taken, and the vampire regains hit points equal to that amount. The reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0. A humanoid slain in this way and then buried in the ground rises the following night as a vampire spawn under the vampire's control."
      },
      {
        "Name": "Charm",
        "Text": "The vampire targets one humanoid it can see within 30 feet of it. If the target can see the vampire, the target must succeed on a 17 Wisdom saving throw against this magic or be charmed by the vampire. The charmed target regards the vampire as a trusted friend to be heeded and protected. Although the target isn't under the vampire's control, it takes the vampire's requests or actions in the most favorable way it can, and it is a willing target for the vampire's bite attack."
      },
      {
        "Name": "Children of the Night (1/Day)",
        "Text": "The vampire magically calls 2d4 swarms of swarm of bats or swarm of rats, provided that the sun isn't up. While outdoors, the vampire can call 3d6 wolves instead. The called creatures arrive in 1d4 rounds, acting as allies of the vampire and obeying its spoken commands. The beasts remain for 1 hour, until the vampire dies, or until the vampire dismisses them as a bonus action."
      }
    ],
    "legendary": [
      {
        "Name": "Move",
        "Text": "The vampire moves up to its speed without provoking opportunity attacks."
      },
      {
        "Name": "Unarmed Strike",
        "Text": "The vampire makes one unarmed strike."
      },
      {
        "Name": "Bite (Costs 2 Actions)",
        "Text": "The vampire makes one bite attack."
      }
    ],
    "environment": [
      "urban"
    ]
  },
  {
    "name": "Vampire Spawn",
    "size": "M",
    "type": "undead",
    "alignment": "Neutral Evil",
    "ac": "15 natural armor",
    "hp": 82,
    "speed": "Walk 30",
    "str": 16,
    "dex": 16,
    "con": 16,
    "int": 11,
    "wis": 10,
    "cha": 12,
    "save": "Dex +6, Wis +3",
    "skill": "Perception +3, Stealth +6",
    "senses": "darkvision 60 ft.",
    "passive": 13,
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
    "languages": "the languages it knew in life",
    "cr": "5",
    "trait": [
      {
        "Name": "Regeneration",
        "Text": "The vampire regains 10 hit points at the start of its turn if it has at least 1 hit point and isn't in sunlight or running water. If the vampire takes radiant damage or damage from holy water, this trait doesn't function at the start of the vampire's next turn."
      },
      {
        "Name": "Spider Climb",
        "Text": "The vampire can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
      },
      {
        "Name": "Vampire Weaknesses",
        "Text": "The vampire has the following flaws:"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The vampire makes two attacks, only one of which can be a bite attack."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one willing creature, or a creature that is grappled by the vampire, incapacitated, or restrained. Hit:6 (1d6 + 3) piercing damage plus 7 (2d6) necrotic damage. The target's hit point maximum is reduced by an amount equal to the necrotic damage taken, and the vampire regains hit points equal to that amount. The reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0."
      },
      {
        "Name": "Claws",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one creature. Hit:8 (2d4 + 3) slashing damage. Instead of dealing damage, the vampire can grapple the target (escape 13)."
      }
    ],
    "environment": [
      "underdark",
      "urban"
    ]
  },
  {
    "name": "Vampire Spellcaster",
    "size": "M",
    "type": "undead (shapechanger)",
    "alignment": "Lawful Evil",
    "ac": "16 natural armor",
    "hp": 144,
    "speed": "Walk 30",
    "str": 18,
    "dex": 18,
    "con": 18,
    "int": 17,
    "wis": 15,
    "cha": 18,
    "save": "Dex +9, Wis +7, Cha +9",
    "skill": "Perception +7, Stealth +9",
    "senses": "darkvision 120 ft.",
    "passive": 17,
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
    "languages": "the languages it knew in life",
    "cr": "15",
    "trait": [
      {
        "Name": "Shapechanger",
        "Text": "If the vampire isn't in sunlight or running water, it can use its action to polymorph into a Tiny bat or a Medium cloud of mist, or back into its true form.<br>While in bat form, the vampire can't speak, its walking speed is 5 feet, and it has a flying speed of 30 feet. Its statistics, other than its size and speed, are unchanged. Anything it is wearing transforms with it, but nothing it is carrying does. It reverts to its true form if it dies.<br>While in mist form, the vampire can't take any actions, speak, or manipulate objects. It is weightless, has a flying speed of 20 feet, can hover, and can enter a hostile creature's space and stop there. In addition, if air can pass through a space, the mist can do so without squeezing, and it can't pass through water. It has advantage on Strength, Dexterity, and Constitution saving throws, and it is immune to all nonmagical damage, except the damage it takes from sunlight."
      },
      {
        "Name": "Legendary Resistance (3/Day)",
        "Text": "If the vampire fails a saving throw, it can choose to succeed instead."
      },
      {
        "Name": "Misty Escape",
        "Text": "When it drops to 0 hit points outside its resting place, the vampire transforms into a cloud of mist (as in the Shapechanger trait) instead of falling unconscious, provided that it isn't in sunlight or running water. If it can't transform, it is destroyed."
      },
      {
        "Name": "Regeneration",
        "Text": "The vampire regains 20 hit points at the start of its turn if it has at least 1 hit point and isn't in sunlight or running water. If the vampire takes radiant damage or damage from holy water, this trait doesn't function at the start of the vampire's next turn."
      },
      {
        "Name": "Spider Climb",
        "Text": "The vampire can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
      },
      {
        "Name": "Vampire Weaknesses",
        "Text": "The vampire has the following flaws:"
      },
      {
        "Name": "Spellcasting",
        "Text": "The vampire is a 9th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 16, +8 to hit with spell attacks). The vampire has the following wizard spells prepared:<br><br>Cantrips (at will): <em>mage hand, prestidigitation, ray of frost</em><br>1st (1 slots): <em>comprehend languages, fog cloud, sleep</em><br>2nd (2 slots): <em>detect thoughts, gust of wind, mirror image</em><br>3rd (3 slots): <em>animate dead, bestow curse, nondetection</em><br>4th (4 slots): <em>blight, greater invisibility</em><br>5th (5 slots): <em>dominate person</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack (Vampire Form Only)",
        "Text": "The vampire makes two attacks, only one of which can be a bite attack."
      },
      {
        "Name": "Unarmed Strike (Vampire Form Only)",
        "Text": "Melee Weapon 9 to hit, reach 5 ft., one creature. Hit:8 (1d8 + 4) bludgeoning damage. Instead of dealing damage, the vampire can grapple the target (escape 18)."
      },
      {
        "Name": "Bite (Bat or Vampire Form Only)",
        "Text": "Melee Weapon 9 to hit, reach 5 ft., one willing creature, or a creature that is grappled by the vampire, incapacitated, or restrained. Hit:7 (1d6 + 4) piercing damage plus 10 (3d6) necrotic damage. The target's hit point maximum is reduced by an amount equal to the necrotic damage taken, and the vampire regains hit points equal to that amount. The reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0. A humanoid slain in this way and then buried in the ground rises the following night as a vampire spawn under the vampire's control."
      },
      {
        "Name": "Charm",
        "Text": "The vampire targets one humanoid it can see within 30 feet of it. If the target can see the vampire, the target must succeed on a 17 Wisdom saving throw against this magic or be charmed by the vampire. The charmed target regards the vampire as a trusted friend to be heeded and protected. Although the target isn't under the vampire's control, it takes the vampire's requests or actions in the most favorable way it can, and it is a willing target for the vampire's bite attack."
      },
      {
        "Name": "Children of the Night (1/Day)",
        "Text": "The vampire magically calls 2d4 swarms of swarm of bats or swarm of rats, provided that the sun isn't up. While outdoors, the vampire can call 3d6 wolves instead. The called creatures arrive in 1d4 rounds, acting as allies of the vampire and obeying its spoken commands. The beasts remain for 1 hour, until the vampire dies, or until the vampire dismisses them as a bonus action."
      }
    ],
    "legendary": [
      {
        "Name": "Move",
        "Text": "The vampire moves up to its speed without provoking opportunity attacks."
      },
      {
        "Name": "Unarmed Strike",
        "Text": "The vampire makes one unarmed strike."
      },
      {
        "Name": "Bite (Costs 2 Actions)",
        "Text": "The vampire makes one bite attack."
      }
    ],
    "environment": [
      "urban"
    ]
  },
  {
    "name": "Vampire Warrior",
    "size": "M",
    "type": "undead (shapechanger)",
    "alignment": "Lawful Evil",
    "ac": "18 plate armor",
    "hp": 144,
    "speed": "Walk 30",
    "str": 18,
    "dex": 18,
    "con": 18,
    "int": 17,
    "wis": 15,
    "cha": 18,
    "save": "Dex +9, Wis +7, Cha +9",
    "skill": "Perception +7, Stealth +9",
    "senses": "darkvision 120 ft.",
    "passive": 17,
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
    "languages": "the languages it knew in life",
    "cr": "15",
    "trait": [
      {
        "Name": "Shapechanger",
        "Text": "If the vampire isn't in sunlight or running water, it can use its action to polymorph into a Tiny bat or a Medium cloud of mist, or back into its true form.<br>While in bat form, the vampire can't speak, its walking speed is 5 feet, and it has a flying speed of 30 feet. Its statistics, other than its size and speed, are unchanged. Anything it is wearing transforms with it, but nothing it is carrying does. It reverts to its true form if it dies.<br>While in mist form, the vampire can't take any actions, speak, or manipulate objects. It is weightless, has a flying speed of 20 feet, can hover, and can enter a hostile creature's space and stop there. In addition, if air can pass through a space, the mist can do so without squeezing, and it can't pass through water. It has advantage on Strength, Dexterity, and Constitution saving throws, and it is immune to all nonmagical damage, except the damage it takes from sunlight."
      },
      {
        "Name": "Legendary Resistance (3/Day)",
        "Text": "If the vampire fails a saving throw, it can choose to succeed instead."
      },
      {
        "Name": "Misty Escape",
        "Text": "When it drops to 0 hit points outside its resting place, the vampire transforms into a cloud of mist (as in the Shapechanger trait) instead of falling unconscious, provided that it isn't in sunlight or running water. If it can't transform, it is destroyed."
      },
      {
        "Name": "Regeneration",
        "Text": "The vampire regains 20 hit points at the start of its turn if it has at least 1 hit point and isn't in sunlight or running water. If the vampire takes radiant damage or damage from holy water, this trait doesn't function at the start of the vampire's next turn."
      },
      {
        "Name": "Spider Climb",
        "Text": "The vampire can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
      },
      {
        "Name": "Vampire Weaknesses",
        "Text": "The vampire has the following flaws:"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The vampire makes two greatsword attacks."
      },
      {
        "Name": "Multiattack (Vampire Form Only)",
        "Text": "The vampire makes two attacks, only one of which can be a bite attack."
      },
      {
        "Name": "Unarmed Strike (Vampire Form Only)",
        "Text": "Melee Weapon 9 to hit, reach 5 ft., one creature. Hit:8 (1d8 + 4) bludgeoning damage. Instead of dealing damage, the vampire can grapple the target (escape 18)."
      },
      {
        "Name": "Greatsword",
        "Text": "Melee Weapon 9 to hit, reach 5 ft., one creature. Hit:11 (2d6 + 4) slashing damage."
      },
      {
        "Name": "Bite (Bat or Vampire Form Only)",
        "Text": "Melee Weapon 9 to hit, reach 5 ft., one willing creature, or a creature that is grappled by the vampire, incapacitated, or restrained. Hit:7 (1d6 + 4) piercing damage plus 10 (3d6) necrotic damage. The target's hit point maximum is reduced by an amount equal to the necrotic damage taken, and the vampire regains hit points equal to that amount. The reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0. A humanoid slain in this way and then buried in the ground rises the following night as a vampire spawn under the vampire's control."
      },
      {
        "Name": "Charm",
        "Text": "The vampire targets one humanoid it can see within 30 feet of it. If the target can see the vampire, the target must succeed on a 17 Wisdom saving throw against this magic or be charmed by the vampire. The charmed target regards the vampire as a trusted friend to be heeded and protected. Although the target isn't under the vampire's control, it takes the vampire's requests or actions in the most favorable way it can, and it is a willing target for the vampire's bite attack."
      },
      {
        "Name": "Children of the Night (1/Day)",
        "Text": "The vampire magically calls 2d4 swarms of swarm of bats or swarm of rats, provided that the sun isn't up. While outdoors, the vampire can call 3d6 wolves instead. The called creatures arrive in 1d4 rounds, acting as allies of the vampire and obeying its spoken commands. The beasts remain for 1 hour, until the vampire dies, or until the vampire dismisses them as a bonus action."
      }
    ],
    "legendary": [
      {
        "Name": "Move",
        "Text": "The vampire moves up to its speed without provoking opportunity attacks."
      },
      {
        "Name": "Unarmed Strike",
        "Text": "The vampire makes one unarmed strike."
      },
      {
        "Name": "Bite (Costs 2 Actions)",
        "Text": "The vampire makes one bite attack."
      }
    ],
    "environment": [
      "urban"
    ]
  },
  {
    "name": "Veteran",
    "size": "M",
    "type": "humanoid (any race)",
    "alignment": "Any",
    "ac": "17 splint armor",
    "hp": 58,
    "speed": "Walk 30",
    "str": 16,
    "dex": 13,
    "con": 14,
    "int": 10,
    "wis": 11,
    "cha": 10,
    "skill": "Athletics +5, Perception +2",
    "passive": 12,
    "languages": "any one language (usually Common)",
    "cr": "3",
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The veteran makes two longsword attacks. If it has a shortsword drawn, it can also make a shortsword attack."
      },
      {
        "Name": "Longsword",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:7 (1d8 + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands."
      },
      {
        "Name": "Shortsword",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:6 (1d6 + 3) piercing damage."
      },
      {
        "Name": "Heavy Crossbow",
        "Text": "Ranged Weapon 3 to hit, range 100/400 ft., one target. Hit:6 (1d10 + 1) piercing damage."
      }
    ]
  },
  {
    "name": "Vine Blight",
    "size": "M",
    "type": "plant",
    "alignment": "Neutral Evil",
    "ac": "12 natural armor",
    "hp": 26,
    "speed": "Walk 10",
    "str": 15,
    "dex": 8,
    "con": 14,
    "int": 5,
    "wis": 10,
    "cha": 3,
    "skill": "Stealth +1",
    "senses": "blindsight 60 ft. (blind beyond this radius)",
    "passive": 10,
    "conditionImmune": "blinded, deafened",
    "languages": "Common",
    "cr": "1/2",
    "trait": [
      {
        "Name": "False Appearance",
        "Text": "While the blight remains motionless, it is indistinguishable from a tangle of vines."
      }
    ],
    "action": [
      {
        "Name": "Constrict",
        "Text": "Melee Weapon 4 to hit, reach 10 ft., one target. Hit:9 (2d6 + 2) bludgeoning damage, and a Large or smaller target is grappled (escape 12). Until this grapple ends, the target is restrained, and the blight can't constrict another target."
      },
      {
        "Name": "Entangling Plants (Recharge 5-6)",
        "Text": "Grasping roots and vines sprout in a 15-foot radius centered on the blight, withering away after 1 minute. For the duration, that area is difficult terrain for nonplant creatures. In addition, each creature of the blight's choice in that area when the plants appear must succeed on a 12 Strength saving throw or become restrained. A creature can use its action to make a 12 Strength check, freeing it self or another entangled creature within reach on a success."
      }
    ],
    "environment": [
      "forest"
    ],
    "altArt": [
      {
        "name": "Vine Blight",
        "source": "DIP"
      }
    ]
  },
  {
    "name": "Violet Fungus",
    "size": "M",
    "type": "plant",
    "alignment": "Unaligned",
    "ac": 5,
    "hp": 18,
    "speed": "Walk 5",
    "str": 3,
    "dex": 1,
    "con": 10,
    "int": 1,
    "wis": 3,
    "cha": 1,
    "senses": "blindsight 30 ft. (blind beyond this radius)",
    "passive": 6,
    "conditionImmune": "blinded, deafened, frightened",
    "cr": "1/4",
    "trait": [
      {
        "Name": "False Appearance",
        "Text": "While the violet fungus remains motionless, it is indistinguishable from an ordinary fungus."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The fungus makes 1d4 Rotting Touch attacks."
      },
      {
        "Name": "Rotting Touch",
        "Text": "Melee Weapon 2 to hit, reach 10 ft., one creature. Hit:4 (1d8) necrotic damage."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Vrock",
    "size": "L",
    "type": "fiend (demon)",
    "alignment": "Chaotic Evil",
    "ac": "15 natural armor",
    "hp": 104,
    "speed": "Walk 40, Fly 60",
    "str": 17,
    "dex": 15,
    "con": 18,
    "int": 8,
    "wis": 13,
    "cha": 8,
    "save": "Dex +5, Wis +4, Cha +2",
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
    "cr": "6",
    "trait": [
      {
        "Name": "Magic Resistance",
        "Text": "The vrock has advantage on saving throws against spells and other magical effects."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The vrock makes two attacks: one with its beak and one with its talons."
      },
      {
        "Name": "Beak",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:10 (2d6 + 3) piercing damage."
      },
      {
        "Name": "Talons",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:14 (2d10 + 3) slashing damage."
      },
      {
        "Name": "Spores (Recharge 6)",
        "Text": "A 15-foot-radius cloud of toxic spores extends out from the vrock. The spores spread around corners. Each creature in that area must succeed on a 14 Constitution saving throw or become poisoned. While poisoned in this way, a target takes 5 (1d10) poison damage at the start of each of its turns. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Emptying a vial of holy water on the target also ends the effect on it."
      },
      {
        "Name": "Stunning Screech (1/Day)",
        "Text": "The vrock emits a horrific screech. Each creature within 20 feet of it that can hear it and that isn't a demon must succeed on a 14 Constitution saving throw or be stunned until the end of the vrock's next turn."
      }
    ]
  },
  {
    "name": "Vulture",
    "size": "M",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": 10,
    "hp": 5,
    "speed": "Walk 10, Fly 50",
    "str": 7,
    "dex": 10,
    "con": 13,
    "int": 2,
    "wis": 12,
    "cha": 4,
    "skill": "Perception +3",
    "passive": 13,
    "cr": "0",
    "trait": [
      {
        "Name": "Keen Sight and Smell",
        "Text": "The vulture has advantage on Wisdom (Perception) checks that rely on sight or smell."
      },
      {
        "Name": "Pack Tactics",
        "Text": "The vulture has advantage on an attack roll against a creature if at least one of the vulture's allies is within 5 feet of the creature and the ally isn't incapacitated."
      }
    ],
    "action": [
      {
        "Name": "Beak",
        "Text": "Melee Weapon 2 to hit, reach 5 ft., one target. Hit:2 (1d4) piercing damage."
      }
    ],
    "environment": [
      "grassland",
      "hill",
      "desert"
    ]
  },
  {
    "name": "Warhorse",
    "size": "L",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": 11,
    "hp": 19,
    "speed": "Walk 60",
    "str": 18,
    "dex": 12,
    "con": 13,
    "int": 2,
    "wis": 12,
    "cha": 7,
    "passive": 11,
    "cr": "1/2",
    "trait": [
      {
        "Name": "Trampling Charge",
        "Text": "If the horse moves at least 20 feet straight toward a creature and then hits it with a hooves attack on the same turn, that target must succeed on a 14 Strength saving throw or be knocked prone. If the target is prone, the horse can make another attack with its hooves against it as a bonus action."
      }
    ],
    "action": [
      {
        "Name": "Hooves",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:11 (2d6 + 4) bludgeoning damage."
      }
    ],
    "environment": [
      "urban"
    ]
  },
  {
    "name": "Warhorse Skeleton",
    "size": "L",
    "type": "undead",
    "alignment": "Lawful Evil",
    "ac": "13 barding scraps",
    "hp": 22,
    "speed": "Walk 60",
    "str": 18,
    "dex": 12,
    "con": 15,
    "int": 2,
    "wis": 8,
    "cha": 5,
    "senses": "darkvision 60 ft.",
    "passive": 9,
    "immune": "poison",
    "vulnerable": [
      "bludgeoning"
    ],
    "conditionImmune": "exhaustion, poisoned",
    "cr": "1/2",
    "action": [
      {
        "Name": "Hooves",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:11 (2d6 + 4) bludgeoning damage."
      }
    ]
  },
  {
    "name": "Water Elemental",
    "size": "L",
    "type": "elemental",
    "alignment": "Neutral",
    "ac": "14 natural armor",
    "hp": 114,
    "speed": "Walk 30, Swim 90",
    "str": 18,
    "dex": 14,
    "con": 18,
    "int": 5,
    "wis": 10,
    "cha": 8,
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
    "conditionImmune": "exhaustion, grappled, paralyzed, petrified, poisoned, prone, restrained, unconscious",
    "languages": "Aquan",
    "cr": "5",
    "trait": [
      {
        "Name": "Water Form",
        "Text": "The elemental can enter a hostile creature's space and stop there. It can move through a space as narrow as 1 inch wide without squeezing."
      },
      {
        "Name": "Freeze",
        "Text": "If the elemental takes cold damage, it partially freezes; its speed is reduced by 20 feet until the end of its next turn."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The elemental makes two slam attacks."
      },
      {
        "Name": "Slam",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:13 (2d8 + 4) bludgeoning damage."
      },
      {
        "Name": "Whelm (Recharge 4-6)",
        "Text": "Each creature in the elemental's space must make a 15 Strength saving throw. On a failure, a target takes 13 (2d8 + 4) bludgeoning damage. If it is Large or smaller, it is also grappled (escape 14). Until this grapple ends, the target is restrained and unable to breathe unless it can breathe water. If the saving throw is successful, the target is pushed out of the elemental's space."
      }
    ],
    "environment": [
      "underwater",
      "swamp",
      "coastal"
    ]
  },
  {
    "name": "Water Weird",
    "size": "L",
    "type": "elemental",
    "alignment": "Neutral",
    "ac": 13,
    "hp": 58,
    "speed": "Walk 0, Swim 60",
    "str": 17,
    "dex": 16,
    "con": 13,
    "int": 11,
    "wis": 10,
    "cha": 10,
    "senses": "blindsight 30 ft.",
    "passive": 10,
    "resist": [
      "fire",
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
    "conditionImmune": "exhaustion, grappled, paralyzed, poisoned, restrained, prone, unconscious",
    "languages": "understands Aquan but doesn't speak",
    "cr": "3",
    "trait": [
      {
        "Name": "Invisible in Water",
        "Text": "The water weird is invisible while fully immersed in water."
      },
      {
        "Name": "Water Bound",
        "Text": "The water weird dies if it leaves the water to which it is bound or if that water is destroyed."
      }
    ],
    "action": [
      {
        "Name": "Constrict",
        "Text": "Melee Weapon 5 to hit, reach 10 ft., one creature. Hit:13 (3d6 + 3) bludgeoning damage. If the target is Medium or smaller, it is grappled (escape 13) and pulled 5 feet toward the water weird. Until this grapple ends, the target is restrained, the water weird tries to drown it, and the water weird can't constrict another target."
      }
    ],
    "environment": [
      "underdark",
      "urban"
    ]
  },
  {
    "name": "Weasel",
    "size": "T",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": 13,
    "hp": 1,
    "speed": "Walk 30",
    "str": 3,
    "dex": 16,
    "con": 8,
    "int": 2,
    "wis": 12,
    "cha": 3,
    "skill": "Perception +3, Stealth +5",
    "passive": 13,
    "cr": "0",
    "trait": [
      {
        "Name": "Keen Hearing and Smell",
        "Text": "The weasel has advantage on Wisdom (Perception) checks that rely on hearing or smell."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one creature. Hit:1 piercing damage."
      }
    ],
    "familiar": true
  },
  {
    "name": "Werebear",
    "size": "M",
    "type": "humanoid (human, shapechanger)",
    "alignment": "Neutral Good",
    "ac": 10,
    "hp": 135,
    "speed": "Walk 30 (40 ft., climb 30 ft. in bear or hybrid form)",
    "str": 19,
    "dex": 10,
    "con": 17,
    "int": 11,
    "wis": 12,
    "cha": 12,
    "skill": "Perception +7",
    "passive": 17,
    "immune": "bludgeoning, piercing, slashing from nonmagical attacks that aren't silvered",
    "languages": "Common (can't speak in bear form)",
    "cr": "5",
    "trait": [
      {
        "Name": "Shapechanger",
        "Text": "The werebear can use its action to polymorph into a Large bear-humanoid hybrid or into a Large bear, or back into its true form, which is humanoid. Its statistics, other than its size and AC, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
      },
      {
        "Name": "Keen Smell",
        "Text": "The werebear has advantage on Wisdom (Perception) checks that rely on smell."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "In bear form, the werebear makes two claw attacks. In humanoid form, it makes two greataxe attacks. In hybrid form, it can attack like a bear or a humanoid."
      },
      {
        "Name": "Bite (Bear or Hybrid Form Only)",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:15 (2d10 + 4) piercing damage. If the target is a humanoid, it must succeed on a 14 Constitution saving throw or be cursed with were bear lycanthropy."
      },
      {
        "Name": "Claw (Bear or Hybrid Form Only)",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:13 (2d8 + 4) slashing damage."
      },
      {
        "Name": "Greataxe (Humanoid or Hybrid Form Only)",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:10 (1d12 + 4) slashing damage."
      }
    ],
    "environment": [
      "forest",
      "hill",
      "arctic"
    ]
  },
  {
    "name": "Wereboar",
    "size": "M",
    "type": "humanoid (human, shapechanger)",
    "alignment": "Neutral Evil",
    "ac": 10,
    "hp": 78,
    "speed": "Walk 30 (40 ft. in boar form)",
    "str": 17,
    "dex": 10,
    "con": 15,
    "int": 10,
    "wis": 11,
    "cha": 8,
    "skill": "Perception +2",
    "passive": 12,
    "immune": "bludgeoning, piercing, slashing from nonmagical attacks that aren't silvered",
    "languages": "Common (can't speak in boar form)",
    "cr": "4",
    "trait": [
      {
        "Name": "Shapechanger",
        "Text": "The wereboar can use its action to polymorph into a boar-humanoid hybrid or into a boar, or back into its true form, which is humanoid. Its statistics, other than its AC, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
      },
      {
        "Name": "Charge (Boar or Hybrid Form Only)",
        "Text": "If the wereboar moves at least 15 feet straight toward a target and then hits it with its tusks on the same turn, the target takes an extra 7 (2d6) slashing damage. If the target is a creature, it must succeed on a 13 Strength saving throw or be knocked prone."
      },
      {
        "Name": "Relentless (Recharges after a Short or Long Rest)",
        "Text": "If the wereboar takes 14 damage or less that would reduce it to 0 hit points, it is reduced to 1 hit point instead."
      }
    ],
    "action": [
      {
        "Name": "Multiattack (Humanoid or Hybrid Form Only)",
        "Text": "The wereboar makes two attacks, only one of which can be with its tusks."
      },
      {
        "Name": "Maul (Humanoid or Hybrid Form Only)",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:10 (2d6 + 3) bludgeoning damage."
      },
      {
        "Name": "Tusks (Boar or Hybrid Form Only)",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:10 (2d6 + 3) slashing damage. If the target is a humanoid, it must succeed on a 12 Constitution saving throw or be cursed with wereboar lycanthropy."
      }
    ],
    "environment": [
      "grassland",
      "forest",
      "hill"
    ]
  },
  {
    "name": "Wererat",
    "size": "M",
    "type": "humanoid (human, shapechanger)",
    "alignment": "Lawful Evil",
    "ac": 12,
    "hp": 33,
    "speed": "Walk 30",
    "str": 10,
    "dex": 15,
    "con": 12,
    "int": 11,
    "wis": 10,
    "cha": 8,
    "skill": "Perception +2, Stealth +4",
    "senses": "darkvision 60 ft. (rat form only)",
    "passive": 12,
    "immune": "bludgeoning, piercing, slashing from nonmagical attacks that aren't silvered",
    "languages": "Common (can't speak in rat form)",
    "cr": "2",
    "trait": [
      {
        "Name": "Shapechanger",
        "Text": "The wererat can use its action to polymorph into a rat-humanoid hybrid or into a giant rat, or back into its true form, which is humanoid. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
      },
      {
        "Name": "Keen Smell",
        "Text": "The wererat has advantage on Wisdom (Perception) checks that rely on smell."
      }
    ],
    "action": [
      {
        "Name": "Multiattack (Humanoid or Hybrid Form Only)",
        "Text": "The wererat makes two attacks, only one of which can be a bite."
      },
      {
        "Name": "Bite (Rat or Hybrid Form Only)",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:4 (1d4 + 2) piercing damage. If the target is a humanoid, it must succeed on a 11 Constitution saving throw or be cursed with wererat lycanthropy."
      },
      {
        "Name": "Shortsword (Humanoid or Hybrid Form Only)",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:5 (1d6 + 2) piercing damage."
      },
      {
        "Name": "Hand Crossbow (Humanoid or Hybrid Form Only)",
        "Text": "Ranged Weapon 4 to hit, range 30/120 ft., one target. Hit:5 (1d6 + 2) piercing damage."
      }
    ],
    "environment": [
      "forest",
      "urban"
    ]
  },
  {
    "name": "Weretiger",
    "size": "M",
    "type": "humanoid (human, shapechanger)",
    "alignment": "Neutral",
    "ac": 12,
    "hp": 120,
    "speed": "Walk 30 (40 ft. in tiger form)",
    "str": 17,
    "dex": 15,
    "con": 16,
    "int": 10,
    "wis": 13,
    "cha": 11,
    "skill": "Perception +5, Stealth +4",
    "senses": "darkvision 60 ft.",
    "passive": 15,
    "immune": "bludgeoning, piercing, slashing from nonmagical attacks that aren't silvered",
    "languages": "Common (can't speak in tiger form)",
    "cr": "4",
    "trait": [
      {
        "Name": "Shapechanger",
        "Text": "The weretiger can use its action to polymorph into a tiger-humanoid hybrid or into a tiger, or back into its true form, which is humanoid. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
      },
      {
        "Name": "Keen Hearing and Smell",
        "Text": "The weretiger has advantage on Wisdom (Perception) checks that rely on hearing or smell."
      },
      {
        "Name": "Pounce (Tiger or Hybrid Form Only)",
        "Text": "If the weretiger moves at least 15 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a 14 Strength saving throw or be knocked prone. If the target is prone, the weretiger can make one bite attack against it as a bonus action."
      }
    ],
    "action": [
      {
        "Name": "Multiattack (Humanoid or Hybrid Form Only)",
        "Text": "In humanoid form, the weretiger makes two scimitar attacks or two longbow attacks. In hybrid form, it can attack like a humanoid or make two claw attacks."
      },
      {
        "Name": "Bite (Tiger or Hybrid Form Only)",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:8 (1d10 + 3) piercing damage. If the target is a humanoid, it must succeed on a 13 Constitution saving throw or be cursed with weretiger lycanthropy."
      },
      {
        "Name": "Claw (Tiger or Hybrid Form Only)",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:7 (1d8 + 3) slashing damage."
      },
      {
        "Name": "Scimitar (Humanoid or Hybrid Form Only)",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:6 (1d6 + 3) slashing damage."
      },
      {
        "Name": "Longbow (Humanoid or Hybrid Form Only)",
        "Text": "Ranged Weapon 4 to hit, range 150/600 ft., one target. Hit:6 (1d8 + 2) piercing damage."
      }
    ],
    "environment": [
      "grassland",
      "forest",
      "desert"
    ]
  },
  {
    "name": "Werewolf",
    "size": "M",
    "type": "humanoid (human, shapechanger)",
    "alignment": "Chaotic Evil",
    "ac": 11,
    "hp": 58,
    "speed": "Walk 30 (40 ft. in wolf form)",
    "str": 15,
    "dex": 13,
    "con": 14,
    "int": 10,
    "wis": 11,
    "cha": 10,
    "skill": "Perception +4",
    "passive": 14,
    "immune": "bludgeoning, piercing, slashing from nonmagical attacks that aren't silvered",
    "languages": "Common (can't speak in wolf form)",
    "cr": "3",
    "trait": [
      {
        "Name": "Shapechanger",
        "Text": "The werewolf can use its action to polymorph into a wolf-humanoid hybrid or into a wolf, or back into its true form, which is humanoid. Its statistics, other than its AC, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
      },
      {
        "Name": "Keen Hearing and Smell",
        "Text": "The werewolf has advantage on Wisdom (Perception) checks that rely on hearing or smell."
      }
    ],
    "action": [
      {
        "Name": "Multiattack (Humanoid or Hybrid Form Only)",
        "Text": "The werewolf makes two attacks: two with its spear (humanoid form) or one with its bite and one with its claws (hybrid form)."
      },
      {
        "Name": "Bite (Wolf or Hybrid Form Only)",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:6 (1d8 + 2) piercing damage. If the target is a humanoid, it must succeed on a 12 Constitution saving throw or be cursed with werewolf lycanthropy."
      },
      {
        "Name": "Claws (Hybrid Form Only)",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one creature. Hit:7 (2d4 + 2) slashing damage."
      },
      {
        "Name": "Spear (Humanoid Form Only)",
        "Text": "Melee or Ranged Weapon 4 to hit, reach 5 ft. or range 20/60 ft., one creature. Hit:5 (1d6 + 2) piercing damage, or 6 (1d8 + 2) piercing damage if used with two hands to make a melee attack."
      }
    ],
    "environment": [
      "forest",
      "hill"
    ]
  },
  {
    "name": "White Dragon Wyrmling",
    "size": "M",
    "type": "dragon",
    "alignment": "Chaotic Evil",
    "ac": "16 natural armor",
    "hp": 32,
    "speed": "Walk 30, Burrow 15, Fly 60, Swim 30",
    "str": 14,
    "dex": 10,
    "con": 14,
    "int": 5,
    "wis": 10,
    "cha": 11,
    "save": "Dex +2, Con +4, Wis +2, Cha +2",
    "skill": "Perception +4, Stealth +2",
    "senses": "blindsight 10 ft., darkvision 60 ft.",
    "passive": 14,
    "immune": "cold",
    "languages": "Draconic",
    "cr": "2",
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:7 (1d10 + 2) piercing damage plus 2 (1d4) cold damage."
      },
      {
        "Name": "Cold Breath (Recharge 5-6)",
        "Text": "The dragon exhales an icy blast of hail in a 15-foot cone. Each creature in that area must make a 12 Constitution saving throw, taking 22 (5d8) cold damage on a failed save, or half as much damage on a successful one."
      }
    ]
  },
  {
    "name": "Wight",
    "size": "M",
    "type": "undead",
    "alignment": "Neutral Evil",
    "ac": "14 studded leather armor",
    "hp": 45,
    "speed": "Walk 30",
    "str": 15,
    "dex": 14,
    "con": 16,
    "int": 10,
    "wis": 13,
    "cha": 15,
    "skill": "Perception +3, Stealth +4",
    "senses": "darkvision 60 ft.",
    "passive": 13,
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
    "cr": "3",
    "trait": [
      {
        "Name": "Sunlight Sensitivity",
        "Text": "While in sunlight, the wight has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The wight makes two longsword attacks or two longbow attacks. It can use its Life Drain in place of one longsword attack."
      },
      {
        "Name": "Life Drain",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one creature. Hit:5 (1d6 + 2) necrotic damage. The target must succeed on a 13 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0."
      },
      {
        "Name": "Longsword",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:6 (1d8 + 2) slashing damage, or 7 (1d10 + 2) slashing damage if used with two hands."
      },
      {
        "Name": "Longbow",
        "Text": "Ranged Weapon 4 to hit, range 150/600 ft., one target. Hit:6 (1d8 + 2) piercing damage."
      }
    ],
    "environment": [
      "underdark",
      "swamp",
      "urban",
      "desert"
    ]
  },
  {
    "name": "Will-o'-Wisp",
    "size": "T",
    "type": "undead",
    "alignment": "Chaotic Evil",
    "ac": 19,
    "hp": 22,
    "speed": "Walk 0, Fly 50 (hover)",
    "str": 1,
    "dex": 28,
    "con": 10,
    "int": 13,
    "wis": 14,
    "cha": 11,
    "senses": "darkvision 120 ft.",
    "passive": 12,
    "resist": [
      "acid",
      "cold",
      "fire",
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
    "immune": "lightning, poison",
    "conditionImmune": "exhaustion, grappled, paralyzed, poisoned, prone, restrained, unconscious",
    "languages": "the languages it knew in life",
    "cr": "2",
    "trait": [
      {
        "Name": "Consume Life",
        "Text": "As a bonus action, the will-o'-wisp can target one creature it can see within 5 feet of it that has 0 hit points and is still alive. The target must succeed on a 10 Constitution saving throw against this magic or die. If the target dies, the will-o'-wisp regains 10 (3d6) hit points."
      },
      {
        "Name": "Ephemeral",
        "Text": "The will-o'-wisp can't wear or carry anything."
      },
      {
        "Name": "Incorporeal Movement",
        "Text": "The will-o'-wisp can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object."
      },
      {
        "Name": "Variable Illumination",
        "Text": "The will-o'-wisp sheds bright light in a 5 to 20-foot radius and dim light for an additional number of ft. equal to the chosen radius. The will-o'-wisp can alter the radius as a bonus action."
      }
    ],
    "action": [
      {
        "Name": "Shock",
        "Text": "Melee Spell 4 to hit, reach 5 ft., one creature. Hit:9 (2d8) lightning damage."
      },
      {
        "Name": "Invisibility",
        "Text": "The will-o'-wisp and its light magically become invisible until it attacks or uses its Consume Life, or until its concentration ends (as if concentrating on a spell)."
      }
    ],
    "environment": [
      "forest",
      "swamp",
      "urban"
    ]
  },
  {
    "name": "Winged Kobold",
    "size": "S",
    "type": "humanoid (kobold)",
    "alignment": "Lawful Evil",
    "ac": 13,
    "hp": 7,
    "speed": "Walk 30, Fly 30",
    "str": 7,
    "dex": 16,
    "con": 9,
    "int": 8,
    "wis": 7,
    "cha": 8,
    "senses": "darkvision 60 ft.",
    "passive": 8,
    "languages": "Common, Draconic",
    "cr": "1/4",
    "trait": [
      {
        "Name": "Sunlight Sensitivity",
        "Text": "While in sunlight, the kobold has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
      },
      {
        "Name": "Pack Tactics",
        "Text": "The kobold has advantage on an attack roll against a creature if at least one of the kobold's allies is within 5 feet of the creature and the ally isn't incapacitated."
      }
    ],
    "action": [
      {
        "Name": "Dagger",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:5 (1d4 + 3) piercing damage."
      },
      {
        "Name": "Dropped Rock",
        "Text": "Ranged Weapon 5 to hit, one target directly below the kobold. Hit:6 (1d6 + 3) bludgeoning damage."
      }
    ],
    "environment": [
      "forest",
      "swamp",
      "hill",
      "urban",
      "desert",
      "coastal",
      "arctic",
      "mountain",
      "underdark"
    ]
  },
  {
    "name": "Winter Wolf",
    "size": "L",
    "type": "monstrosity",
    "alignment": "Neutral Evil",
    "ac": "13 natural armor",
    "hp": 75,
    "speed": "Walk 50",
    "str": 18,
    "dex": 13,
    "con": 14,
    "int": 7,
    "wis": 12,
    "cha": 8,
    "skill": "Perception +5, Stealth +3",
    "passive": 15,
    "immune": "cold",
    "languages": "Common, Giant, Winter Wolf",
    "cr": "3",
    "trait": [
      {
        "Name": "Keen Hearing and Smell",
        "Text": "The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell."
      },
      {
        "Name": "Pack Tactics",
        "Text": "The wolf has advantage on an attack roll against a creature if at least one of the wolf's allies is within 5 feet of the creature and the ally isn't incapacitated."
      },
      {
        "Name": "Snow Camouflage",
        "Text": "The wolf has advantage on Dexterity (Stealth) checks made to hide in snowy terrain."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:11 (2d6 + 4) piercing damage. If the target is a creature, it must succeed on a 14 Strength saving throw or be knocked prone."
      },
      {
        "Name": "Cold Breath (Recharge 5-6)",
        "Text": "The wolf exhales a blast of freezing wind in a 15-foot cone. Each creature in that area must make a 12 Dexterity saving throw, taking 18 (4d8) cold damage on a failed save, or half as much damage on a successful one."
      }
    ],
    "environment": [
      "arctic"
    ]
  },
  {
    "name": "Wolf",
    "size": "M",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": "13 natural armor",
    "hp": 11,
    "speed": "Walk 40",
    "str": 12,
    "dex": 15,
    "con": 12,
    "int": 3,
    "wis": 12,
    "cha": 6,
    "skill": "Perception +3, Stealth +4",
    "passive": 13,
    "cr": "1/4",
    "trait": [
      {
        "Name": "Keen Hearing and Smell",
        "Text": "The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell."
      },
      {
        "Name": "Pack Tactics",
        "Text": "The wolf has advantage on an attack roll against a creature if at least one of the wolf's allies is within 5 feet of the creature and the ally isn't incapacitated."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:7 (2d4 + 2) piercing damage. If the target is a creature, it must succeed on a 11 Strength saving throw or be knocked prone."
      }
    ],
    "environment": [
      "grassland",
      "forest",
      "hill"
    ]
  },
  {
    "name": "Worg",
    "size": "L",
    "type": "monstrosity",
    "alignment": "Neutral Evil",
    "ac": "13 natural armor",
    "hp": 26,
    "speed": "Walk 50",
    "str": 16,
    "dex": 13,
    "con": 13,
    "int": 7,
    "wis": 11,
    "cha": 8,
    "skill": "Perception +4",
    "senses": "darkvision 60 ft.",
    "passive": 14,
    "languages": "Goblin, Worg",
    "cr": "1/2",
    "trait": [
      {
        "Name": "Keen Hearing and Smell",
        "Text": "The worg has advantage on Wisdom (Perception) checks that rely on hearing or smell."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:10 (2d6 + 3) piercing damage. If the target is a creature, it must succeed on a 13 Strength saving throw or be knocked prone."
      }
    ],
    "environment": [
      "grassland",
      "forest",
      "hill"
    ]
  },
  {
    "name": "Wraith",
    "size": "M",
    "type": "undead",
    "alignment": "Neutral Evil",
    "ac": 13,
    "hp": 67,
    "speed": "Walk 0, Fly 60 (hover)",
    "str": 6,
    "dex": 16,
    "con": 16,
    "int": 12,
    "wis": 14,
    "cha": 15,
    "senses": "darkvision 60 ft.",
    "passive": 12,
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
        "note": "from nonmagical attacks that aren't silvered",
        "cond": true
      }
    ],
    "immune": "necrotic, poison",
    "conditionImmune": "charmed, exhaustion, grappled, paralyzed, petrified, poisoned, prone, restrained",
    "languages": "the languages it knew in life",
    "cr": "5",
    "trait": [
      {
        "Name": "Incorporeal Movement",
        "Text": "The wraith can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object."
      },
      {
        "Name": "Sunlight Sensitivity",
        "Text": "While in sunlight, the wraith has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
      }
    ],
    "action": [
      {
        "Name": "Life Drain",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one creature. Hit:21 (4d8 + 3) necrotic damage. The target must succeed on a 14 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0."
      },
      {
        "Name": "Create Specter",
        "Text": "The wraith targets a humanoid within 10 feet of it that has been dead for no longer than 1 minute and died violently. The target's spirit rises as a specter in the space of its corpse or in the nearest unoccupied space. The specter is under the wraith's control. The wraith can have no more than seven specters under its control at one time."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Wyvern",
    "size": "L",
    "type": "dragon",
    "alignment": "Unaligned",
    "ac": "13 natural armor",
    "hp": 110,
    "speed": "Walk 20, Fly 80",
    "str": 19,
    "dex": 10,
    "con": 16,
    "int": 5,
    "wis": 12,
    "cha": 6,
    "skill": "Perception +4",
    "senses": "darkvision 60 ft.",
    "passive": 14,
    "cr": "6",
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The wyvern makes two attacks: one with its bite and one with its stinger. While flying, it can use its claws in place of one other attack."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 7 to hit, reach 10 ft., one creature. Hit:11 (2d6 + 4) piercing damage."
      },
      {
        "Name": "Claws",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:13 (2d8 + 4) slashing damage."
      },
      {
        "Name": "Stinger",
        "Text": "Melee Weapon 7 to hit, reach 10 ft., one creature. Hit:11 (2d6 + 4) piercing damage. The target must make a 15 Constitution saving throw, taking 24 (7d6) poison damage on a failed save, or half as much damage on a successful one."
      }
    ],
    "environment": [
      "mountain",
      "hill"
    ]
  },
  {
    "name": "Xorn",
    "size": "M",
    "type": "elemental",
    "alignment": "Neutral",
    "ac": "19 natural armor",
    "hp": 73,
    "speed": "Walk 20, Burrow 20",
    "str": 17,
    "dex": 10,
    "con": 22,
    "int": 11,
    "wis": 10,
    "cha": 11,
    "skill": "Perception +6, Stealth +3",
    "senses": "darkvision 60 ft., tremorsense 60 ft.",
    "passive": 16,
    "resist": [
      {
        "resist": [
          "piercing",
          "slashing"
        ],
        "note": "from nonmagical attacks that aren't adamantine",
        "cond": true
      }
    ],
    "languages": "Terran",
    "cr": "5",
    "trait": [
      {
        "Name": "Earth Glide",
        "Text": "The xorn can burrow through nonmagical, unworked earth and stone. While doing so, the xorn doesn't disturb the material it moves through."
      },
      {
        "Name": "Stone Camouflage",
        "Text": "The xorn has advantage on Dexterity (Stealth) checks made to hide in rocky terrain."
      },
      {
        "Name": "Treasure Sense",
        "Text": "The xorn can pinpoint, by scent, the location of precious metals and stones, such as coins and gems, within 60 feet of it."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The xorn makes three claw attacks and one bite attack."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:13 (3d6 + 3) piercing damage."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:6 (1d6 + 3) slashing damage."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Yeti",
    "size": "L",
    "type": "monstrosity",
    "alignment": "Chaotic Evil",
    "ac": "12 natural armor",
    "hp": 51,
    "speed": "Walk 40, Climb 40",
    "str": 18,
    "dex": 13,
    "con": 16,
    "int": 8,
    "wis": 12,
    "cha": 7,
    "skill": "Perception +3, Stealth +3",
    "senses": "darkvision 60 ft.",
    "passive": 13,
    "immune": "cold",
    "languages": "Yeti",
    "cr": "3",
    "trait": [
      {
        "Name": "Fear of Fire",
        "Text": "If the yeti takes fire damage, it has disadvantage on attack rolls and ability checks until the end of its next turn."
      },
      {
        "Name": "Keen Smell",
        "Text": "The yeti has advantage on Wisdom (Perception) checks that rely on smell."
      },
      {
        "Name": "Snow Camouflage",
        "Text": "The yeti has advantage on Dexterity (Stealth) checks made to hide in snowy terrain."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The yeti can use its Chilling Gaze and makes two claw attacks."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:7 (1d6 + 4) slashing damage plus 3 (1d6) cold damage."
      },
      {
        "Name": "Chilling Gaze",
        "Text": "The yeti targets one creature it can see within 30 feet of it. If the target can see the yeti, the target must succeed on a 13 Constitution saving throw against this magic or take 10 (3d6) cold damage and then be paralyzed for 1 minute, unless it is immune to cold damage. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If the target's saving throw is successful, or if the effect ends on it, the target is immune to the Chilling Gaze of all yetis (but not abominable yetis) for 1 hour."
      }
    ],
    "environment": [
      "arctic"
    ]
  },
  {
    "name": "Yochlol",
    "size": "M",
    "type": "fiend (demon, shapechanger)",
    "alignment": "Chaotic Evil",
    "ac": "15 natural armor",
    "hp": 136,
    "speed": "Walk 30, Climb 30",
    "str": 15,
    "dex": 14,
    "con": 18,
    "int": 13,
    "wis": 15,
    "cha": 15,
    "save": "Dex +6, Int +5, Wis +6, Cha +6",
    "skill": "Deception +10, Insight +6",
    "senses": "darkvision 120 ft.",
    "passive": 12,
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
    "languages": "Abyssal, Elvish, Undercommon",
    "cr": "10",
    "trait": [
      {
        "Name": "Shapechanger",
        "Text": "The yochlol can use its action to polymorph into a form that resembles a female drow or giant spider, or back into its true form. Its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The yochlol has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Spider Climb",
        "Text": "The yochlol can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
      },
      {
        "Name": "Web Walker",
        "Text": "The yochlol ignores movement restrictions caused by webbing."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day: <em>dominate person</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The yochlol makes two melee attacks."
      },
      {
        "Name": "Slam (Bite in Spider Form)",
        "Text": "Melee Weapon 6 to hit, reach 5 ft. (10 feet in demon form), one target. Hit:5 (1d6 + 2) bludgeoning (piercing in spider form) damage plus 21 (6d6) poison damage."
      },
      {
        "Name": "Mist Form",
        "Text": "The yochlol transforms into toxic mist or reverts to its true form. Any equipment it is wearing or carrying is also transformed. It reverts to its true form if it dies."
      }
    ]
  },
  {
    "name": "Young Black Dragon",
    "size": "L",
    "type": "dragon",
    "alignment": "Chaotic Evil",
    "ac": "18 natural armor",
    "hp": 127,
    "speed": "Walk 40, Fly 80, Swim 40",
    "str": 19,
    "dex": 14,
    "con": 17,
    "int": 12,
    "wis": 11,
    "cha": 15,
    "save": "Dex +5, Con +6, Wis +3, Cha +5",
    "skill": "Perception +6, Stealth +5",
    "senses": "blindsight 30 ft., darkvision 120 ft.",
    "passive": 16,
    "immune": "acid",
    "languages": "Common, Draconic",
    "cr": "7",
    "trait": [
      {
        "Name": "Amphibious",
        "Text": "The dragon can breathe air and water."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The dragon makes three attacks: one with its bite and two with its claws."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 7 to hit, reach 10 ft., one target. Hit:15 (2d10 + 4) piercing damage plus 4 (1d8) acid damage."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:11 (2d6 + 4) slashing damage."
      },
      {
        "Name": "Acid Breath (Recharge 5-6)",
        "Text": "The dragon exhales acid in a 30-foot line that is 5 feet wide. Each creature in that line must make a 14 Dexterity saving throw, taking 49 (11d8) acid damage on a failed save, or half as much damage on a successful one."
      }
    ],
    "environment": [
      "swamp"
    ]
  },
  {
    "name": "Young Blue Dragon",
    "size": "L",
    "type": "dragon",
    "alignment": "Lawful Evil",
    "ac": "18 natural armor",
    "hp": 152,
    "speed": "Walk 40, Burrow 20, Fly 80",
    "str": 21,
    "dex": 10,
    "con": 19,
    "int": 14,
    "wis": 13,
    "cha": 17,
    "save": "Dex +4, Con +8, Wis +5, Cha +7",
    "skill": "Perception +9, Stealth +4",
    "senses": "blindsight 30 ft., darkvision 120 ft.",
    "passive": 19,
    "immune": "lightning",
    "languages": "Common, Draconic",
    "cr": "9",
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The dragon makes three attacks: one with its bite and two with its claws."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 9 to hit, reach 10 ft., one target. Hit:16 (2d10 + 5) piercing damage plus 5 (1d10) lightning damage."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 9 to hit, reach 5 ft., one target. Hit:12 (2d6 + 5) slashing damage."
      },
      {
        "Name": "Lightning Breath (Recharge 5-6)",
        "Text": "The dragon exhales lightning in a 60-foot line that is 5 feet wide. Each creature in that line must make a 16 Dexterity saving throw, taking 55 (10d10) lightning damage on a failed save, or half as much damage on a successful one."
      }
    ],
    "environment": [
      "desert",
      "coastal"
    ]
  },
  {
    "name": "Young Brass Dragon",
    "size": "L",
    "type": "dragon",
    "alignment": "Chaotic Good",
    "ac": "17 natural armor",
    "hp": 110,
    "speed": "Walk 40, Burrow 20, Fly 80",
    "str": 19,
    "dex": 10,
    "con": 17,
    "int": 12,
    "wis": 11,
    "cha": 15,
    "save": "Dex +3, Con +6, Wis +3, Cha +5",
    "skill": "Perception +6, Persuasion +5, Stealth +3",
    "senses": "blindsight 30 ft., darkvision 120 ft.",
    "passive": 16,
    "immune": "fire",
    "languages": "Common, Draconic",
    "cr": "6",
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The dragon makes three attacks: one with its bite and two with its claws."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 7 to hit, reach 10 ft., one target. Hit:15 (2d10 + 4) piercing damage."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:11 (2d6 + 4) slashing damage."
      },
      {
        "Name": "Breath Weapons (Recharge 5-6)",
        "Text": "The dragon uses one of the following breath weapons."
      }
    ],
    "environment": [
      "desert"
    ]
  },
  {
    "name": "Young Bronze Dragon",
    "size": "L",
    "type": "dragon",
    "alignment": "Lawful Good",
    "ac": "18 natural armor",
    "hp": 142,
    "speed": "Walk 40, Fly 80, Swim 40",
    "str": 21,
    "dex": 10,
    "con": 19,
    "int": 14,
    "wis": 13,
    "cha": 17,
    "save": "Dex +3, Con +7, Wis +4, Cha +6",
    "skill": "Insight +4, Perception +7, Stealth +3",
    "senses": "blindsight 30 ft., darkvision 120 ft.",
    "passive": 17,
    "immune": "lightning",
    "languages": "Common, Draconic",
    "cr": "8",
    "trait": [
      {
        "Name": "Amphibious",
        "Text": "The dragon can breathe air and water."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The dragon makes three attacks: one with its bite and two with its claws."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 8 to hit, reach 10 ft., one target. Hit:16 (2d10 + 5) piercing damage."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 8 to hit, reach 5 ft., one target. Hit:12 (2d6 + 5) slashing damage."
      },
      {
        "Name": "Breath Weapons (Recharge 5-6)",
        "Text": "The dragon uses one of the following breath weapons."
      }
    ],
    "environment": [
      "coastal"
    ]
  },
  {
    "name": "Young Copper Dragon",
    "size": "L",
    "type": "dragon",
    "alignment": "Chaotic Good",
    "ac": "17 natural armor",
    "hp": 119,
    "speed": "Walk 40, Climb 40, Fly 80",
    "str": 19,
    "dex": 12,
    "con": 17,
    "int": 16,
    "wis": 13,
    "cha": 15,
    "save": "Dex +4, Con +6, Wis +4, Cha +5",
    "skill": "Deception +5, Perception +7, Stealth +4",
    "senses": "blindsight 30 ft., darkvision 120 ft.",
    "passive": 17,
    "immune": "acid",
    "languages": "Common, Draconic",
    "cr": "7",
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The dragon makes three attacks: one with its bite and two with its claws."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 7 to hit, reach 10 ft., one target. Hit:15 (2d10 + 4) piercing damage."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:11 (2d6 + 4) slashing damage."
      },
      {
        "Name": "Breath Weapons (Recharge 5-6)",
        "Text": "The dragon uses one of the following breath weapons."
      }
    ],
    "environment": [
      "hill"
    ]
  },
  {
    "name": "Young Gold Dragon",
    "size": "L",
    "type": "dragon",
    "alignment": "Lawful Good",
    "ac": "18 natural armor",
    "hp": 178,
    "speed": "Walk 40, Fly 80, Swim 40",
    "str": 23,
    "dex": 14,
    "con": 21,
    "int": 16,
    "wis": 13,
    "cha": 20,
    "save": "Dex +6, Con +9, Wis +5, Cha +9",
    "skill": "Insight +5, Perception +9, Persuasion +9, Stealth +6",
    "senses": "blindsight 30 ft., darkvision 120 ft.",
    "passive": 19,
    "immune": "fire",
    "languages": "Common, Draconic",
    "cr": "10",
    "trait": [
      {
        "Name": "Amphibious",
        "Text": "The dragon can breathe air and water."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The dragon makes three attacks: one with its bite and two with its claws."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 10 to hit, reach 10 ft., one target. Hit:17 (2d10 + 6) piercing damage."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 10 to hit, reach 5 ft., one target. Hit:13 (2d6 + 6) slashing damage."
      },
      {
        "Name": "Breath Weapons (Recharge 5-6)",
        "Text": "The dragon uses one of the following breath weapons."
      }
    ],
    "environment": [
      "grassland",
      "forest"
    ]
  },
  {
    "name": "Young Green Dragon",
    "size": "L",
    "type": "dragon",
    "alignment": "Lawful Evil",
    "ac": "18 natural armor",
    "hp": 136,
    "speed": "Walk 40, Fly 80, Swim 40",
    "str": 19,
    "dex": 12,
    "con": 17,
    "int": 16,
    "wis": 13,
    "cha": 15,
    "save": "Dex +4, Con +6, Wis +4, Cha +5",
    "skill": "Deception +5, Perception +7, Stealth +4",
    "senses": "blindsight 30 ft., darkvision 120 ft.",
    "passive": 17,
    "immune": "poison",
    "conditionImmune": "poisoned",
    "languages": "Common, Draconic",
    "cr": "8",
    "trait": [
      {
        "Name": "Amphibious",
        "Text": "The dragon can breathe air and water."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The dragon makes three attacks: one with its bite and two with its claws."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 7 to hit, reach 10 ft., one target. Hit:15 (2d10 + 4) piercing damage plus 7 (2d6) poison damage."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:11 (2d6 + 4) slashing damage."
      },
      {
        "Name": "Poison Breath (Recharge 5-6)",
        "Text": "The dragon exhales poisonous gas in a 30-foot cone. Each creature in that area must make a 14 Constitution saving throw, taking 42 (12d6) poison damage on a failed save, or half as much damage on a successful one."
      }
    ],
    "environment": [
      "forest"
    ],
    "altArt": [
      {
        "name": "Young Green Dragon",
        "source": "RMBRE"
      }
    ]
  },
  {
    "name": "Young Red Dragon",
    "size": "L",
    "type": "dragon",
    "alignment": "Chaotic Evil",
    "ac": "18 natural armor",
    "hp": 178,
    "speed": "Walk 40, Climb 40, Fly 80",
    "str": 23,
    "dex": 10,
    "con": 21,
    "int": 14,
    "wis": 11,
    "cha": 19,
    "save": "Dex +4, Con +9, Wis +4, Cha +8",
    "skill": "Perception +8, Stealth +4",
    "senses": "blindsight 30 ft., darkvision 120 ft.",
    "passive": 18,
    "immune": "fire",
    "languages": "Common, Draconic",
    "cr": "10",
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The dragon makes three attacks: one with its bite and two with its claws."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 10 to hit, reach 10 ft., one target. Hit:17 (2d10 + 6) piercing damage plus 3 (1d6) fire damage."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 10 to hit, reach 5 ft., one target. Hit:13 (2d6 + 6) slashing damage."
      },
      {
        "Name": "Fire Breath (Recharge 5-6)",
        "Text": "The dragon exhales fire in a 30-foot cone. Each creature in that area must make a 17 Dexterity saving throw, taking 56 (16d6) fire damage on a failed save, or half as much damage on a successful one."
      }
    ],
    "environment": [
      "mountain",
      "hill"
    ]
  },
  {
    "name": "Young Red Shadow Dragon",
    "size": "L",
    "type": "dragon",
    "alignment": "Chaotic Evil",
    "ac": "18 natural armor",
    "hp": 178,
    "speed": "Walk 40, Climb 40, Fly 80",
    "str": 23,
    "dex": 10,
    "con": 21,
    "int": 14,
    "wis": 11,
    "cha": 19,
    "save": "Dex +5, Con +10, Wis +5, Cha +9",
    "skill": "Perception +10, Stealth +10",
    "senses": "blindsight 30 ft., darkvision 120 ft.",
    "passive": 18,
    "resist": [
      "necrotic"
    ],
    "immune": "fire",
    "languages": "Common, Draconic",
    "cr": "13",
    "trait": [
      {
        "Name": "Living Shadow",
        "Text": "While in dim light or darkness, the dragon has resistance to damage that isn't force, psychic, or radiant."
      },
      {
        "Name": "Shadow Stealth",
        "Text": "While in dim light or darkness, the dragon can take the Hide action as a bonus action."
      },
      {
        "Name": "Sunlight Sensitivity",
        "Text": "While in sunlight, the dragon has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The dragon makes three attacks: one with its bite and two with its claws."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 11 to hit, reach 10 ft., one target. Hit:17 (2d10 + 6) piercing damage plus 3 (1d6) necrotic damage."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 11 to hit, reach 5 ft., one target. Hit:13 (2d6 + 6) slashing damage."
      },
      {
        "Name": "Shadow Breath (Recharge 5-6)",
        "Text": "The dragon exhales shadowy fire in a 30-foot cone. Each creature in that area must make a 18 Dexterity saving throw, taking 56 (16d6) necrotic damage on a failed save, or half as much damage on a successful one. A humanoid reduced to 0 hit points by this damage dies, and an undead shadow rises from its corpse and acts immediately after the dragon in the initiative count. The shadow is under the dragon's control."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Young Remorhaz",
    "size": "L",
    "type": "monstrosity",
    "alignment": "Unaligned",
    "ac": "14 natural armor",
    "hp": 93,
    "speed": "Walk 30, Burrow 30",
    "str": 18,
    "dex": 13,
    "con": 17,
    "int": 3,
    "wis": 10,
    "cha": 4,
    "senses": "darkvision 60 ft., tremorsense 60 ft.",
    "passive": 10,
    "immune": "cold, fire",
    "cr": "5",
    "trait": [
      {
        "Name": "Heated Body",
        "Text": "A creature that touches the remorhaz or hits it with a melee attack while within 5 feet of it takes 7 (2d6) fire damage."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:20 (3d10 + 4) piercing damage plus 7 (2d6) fire damage."
      }
    ],
    "environment": [
      "arctic"
    ]
  },
  {
    "name": "Young Silver Dragon",
    "size": "L",
    "type": "dragon",
    "alignment": "Lawful Good",
    "ac": "18 natural armor",
    "hp": 168,
    "speed": "Walk 40, Fly 80",
    "str": 23,
    "dex": 10,
    "con": 21,
    "int": 14,
    "wis": 11,
    "cha": 19,
    "save": "Dex +4, Con +9, Wis +4, Cha +8",
    "skill": "Arcana +6, History +6, Perception +8, Stealth +4",
    "senses": "blindsight 30 ft., darkvision 120 ft.",
    "passive": 18,
    "immune": "cold",
    "languages": "Common, Draconic",
    "cr": "9",
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The dragon makes three attacks: one with its bite and two with its claws."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 10 to hit, reach 10 ft., one target. Hit:17 (2d10 + 6) piercing damage."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 10 to hit, reach 5 ft., one target. Hit:13 (2d6 + 6) slashing damage."
      },
      {
        "Name": "Breath Weapons (Recharge 5-6)",
        "Text": "The dragon uses one of the following breath weapons."
      }
    ],
    "environment": [
      "mountain",
      "urban"
    ]
  },
  {
    "name": "Young White Dragon",
    "size": "L",
    "type": "dragon",
    "alignment": "Chaotic Evil",
    "ac": "17 natural armor",
    "hp": 133,
    "speed": "Walk 40, Burrow 20, Fly 80, Swim 40",
    "str": 18,
    "dex": 10,
    "con": 18,
    "int": 6,
    "wis": 11,
    "cha": 12,
    "save": "Dex +3, Con +7, Wis +3, Cha +4",
    "skill": "Perception +6, Stealth +3",
    "senses": "blindsight 30 ft., darkvision 120 ft.",
    "passive": 16,
    "immune": "cold",
    "languages": "Common, Draconic",
    "cr": "6",
    "trait": [
      {
        "Name": "Ice Walk",
        "Text": "The dragon can move across and climb icy surfaces without needing to make an ability check. Additionally, difficult terrain composed of ice or snow doesn't cost it extra movement."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The dragon makes three attacks: one with its bite and two with its claws."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 7 to hit, reach 10 ft., one target. Hit:15 (2d10 + 4) piercing damage plus 4 (1d8) cold damage."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:11 (2d6 + 4) slashing damage."
      },
      {
        "Name": "Cold Breath (Recharge 5-6)",
        "Text": "The dragon exhales an icy blast in a 30-foot cone. Each creature in that area must make a 15 Constitution saving throw, taking 45 (10d8) cold damage on a failed save, or half as much damage on a successful one."
      }
    ],
    "environment": [
      "arctic"
    ]
  },
  {
    "name": "Yuan-ti Abomination",
    "size": "L",
    "type": "monstrosity (shapechanger, yuan-ti)",
    "alignment": "Neutral Evil",
    "ac": "15 natural armor",
    "hp": 127,
    "speed": "Walk 40",
    "str": 19,
    "dex": 16,
    "con": 17,
    "int": 17,
    "wis": 15,
    "cha": 18,
    "skill": "Perception +5, Stealth +6",
    "senses": "darkvision 60 ft.",
    "passive": 15,
    "immune": "poison",
    "conditionImmune": "poisoned",
    "languages": "Abyssal, Common, Draconic",
    "cr": "7",
    "trait": [
      {
        "Name": "Shapechanger",
        "Text": "The yuan-ti can use its action to polymorph into a Large snake, or back into its true form. Its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. It doesn't change form if it dies."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The yuan-ti has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Innate Spellcasting (Abomination Form Only)",
        "Text": "<br>1/day: <em>fear</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack (Abomination Form Only)",
        "Text": "The yuan-ti makes two ranged attacks or three melee attacks, but can use its bite and constrict attacks only once each."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one creature. Hit:7 (1d6 + 4) piercing damage plus 10 (3d6) poison damage."
      },
      {
        "Name": "Constrict",
        "Text": "Melee Weapon 7 to hit, reach 10 ft., one target. Hit:11 (2d6 + 4) bludgeoning damage, and the target is grappled (escape 14). Until this grapple ends, the target is restrained, and the yuan-ti can't constrict another target."
      },
      {
        "Name": "Scimitar (Abomination Form Only)",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:11 (2d6 + 4) slashing damage."
      },
      {
        "Name": "Longbow (Abomination Form Only)",
        "Text": "Ranged Weapon 6 to hit, range 150/600 ft., one target. Hit:12 (2d8 + 3) piercing damage plus 10 (3d6) poison damage."
      }
    ],
    "environment": [
      "forest",
      "swamp",
      "desert"
    ]
  },
  {
    "name": "Yuan-ti Malison (Type 1)",
    "size": "M",
    "type": "monstrosity (shapechanger, yuan-ti)",
    "alignment": "Neutral Evil",
    "ac": 12,
    "hp": 66,
    "speed": "Walk 30",
    "str": 16,
    "dex": 14,
    "con": 13,
    "int": 14,
    "wis": 12,
    "cha": 16,
    "skill": "Deception +5, Stealth +4",
    "senses": "darkvision 60 ft.",
    "passive": 11,
    "immune": "poison",
    "conditionImmune": "poisoned",
    "languages": "Abyssal, Common, Draconic",
    "cr": "3",
    "trait": [
      {
        "Name": "Shapechanger",
        "Text": "The yuan-ti can use its action to polymorph into a Medium snake, or back into its true form. Its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. It doesn't change form if it dies."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The yuan-ti has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Malison Type",
        "Text": "The yuan-ti has one of the following types:"
      },
      {
        "Name": "Innate Spellcasting (Yuan-ti Form Only)",
        "Text": "<br>3/day: <em>suggestion</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack (Yuan-ti Form Only)",
        "Text": "The yuan-ti makes two ranged attacks or two melee attacks, but can use its bite only once."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one creature. Hit:5 (1d4 + 3) piercing damage plus 7 (2d6) poison damage."
      },
      {
        "Name": "Scimitar (Yuan-ti Form Only)",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:6 (1d6 + 3) slashing damage."
      },
      {
        "Name": "Longbow (Yuan-ti Form Only)",
        "Text": "Ranged Weapon 4 to hit, range 150/600 ft., one target. Hit:6 (1d8 + 2) piercing damage plus 7 (2d6) poison damage."
      }
    ],
    "environment": [
      "forest",
      "swamp",
      "desert"
    ]
  },
  {
    "name": "Yuan-ti Malison (Type 2)",
    "size": "M",
    "type": "monstrosity (shapechanger, yuan-ti)",
    "alignment": "Neutral Evil",
    "ac": 12,
    "hp": 66,
    "speed": "Walk 30",
    "str": 16,
    "dex": 14,
    "con": 13,
    "int": 14,
    "wis": 12,
    "cha": 16,
    "skill": "Deception +5, Stealth +4",
    "senses": "darkvision 60 ft.",
    "passive": 11,
    "immune": "poison",
    "conditionImmune": "poisoned",
    "languages": "Abyssal, Common, Draconic",
    "cr": "3",
    "trait": [
      {
        "Name": "Shapechanger",
        "Text": "The yuan-ti can use its action to polymorph into a Medium snake, or back into its true form. Its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. It doesn't change form if it dies."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The yuan-ti has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Malison Type",
        "Text": "The yuan-ti has one of the following types:"
      },
      {
        "Name": "Innate Spellcasting (Yuan-ti Form Only)",
        "Text": "<br>3/day: <em>suggestion</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack (Yuan-ti Form Only)",
        "Text": "The yuan-ti makes two bite attacks using its snake arms."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one creature. Hit:5 (1d4 + 3) piercing damage plus 7 (2d6) poison damage."
      }
    ],
    "environment": [
      "forest",
      "swamp",
      "desert"
    ]
  },
  {
    "name": "Yuan-ti Malison (Type 3)",
    "size": "M",
    "type": "monstrosity (shapechanger, yuan-ti)",
    "alignment": "Neutral Evil",
    "ac": 12,
    "hp": 66,
    "speed": "Walk 30",
    "str": 16,
    "dex": 14,
    "con": 13,
    "int": 14,
    "wis": 12,
    "cha": 16,
    "skill": "Deception +5, Stealth +4",
    "senses": "darkvision 60 ft.",
    "passive": 11,
    "immune": "poison",
    "conditionImmune": "poisoned",
    "languages": "Abyssal, Common, Draconic",
    "cr": "3",
    "trait": [
      {
        "Name": "Shapechanger",
        "Text": "The yuan-ti can use its action to polymorph into a Medium snake, or back into its true form. Its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. It doesn't change form if it dies."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The yuan-ti has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Malison Type",
        "Text": "The yuan-ti has one of the following types:"
      },
      {
        "Name": "Innate Spellcasting (Yuan-ti Form Only)",
        "Text": "<br>3/day: <em>suggestion</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack (Yuan-ti Form Only)",
        "Text": "The yuan-ti makes two ranged attacks or two melee attacks, but can constrict only once."
      },
      {
        "Name": "Bite (Snake Form Only)",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one creature. Hit:5 (1d4 + 3) piercing damage plus 7 (2d6) poison damage."
      },
      {
        "Name": "Constrict",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:10 (2d6 + 3) bludgeoning damage, and the target is grappled (escape 13). Until this grapple ends, the target is restrained, and the yuan-ti can't constrict another target."
      },
      {
        "Name": "Scimitar (Yuan-ti Form Only)",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:6 (1d6 + 3) slashing damage."
      },
      {
        "Name": "Longbow (Yuan-ti Form Only)",
        "Text": "Ranged Weapon 4 to hit, range 150/600 ft., one target. Hit:6 (1d8 + 2) piercing damage."
      }
    ],
    "environment": [
      "forest",
      "swamp",
      "desert"
    ]
  },
  {
    "name": "Yuan-ti Pureblood",
    "size": "M",
    "type": "humanoid (yuan-ti)",
    "alignment": "Neutral Evil",
    "ac": 11,
    "hp": 40,
    "speed": "Walk 30",
    "str": 11,
    "dex": 12,
    "con": 11,
    "int": 13,
    "wis": 12,
    "cha": 14,
    "skill": "Deception +6, Perception +3, Stealth +3",
    "senses": "darkvision 60 ft.",
    "passive": 13,
    "immune": "poison",
    "conditionImmune": "poisoned",
    "languages": "Abyssal, Common, Draconic",
    "cr": "1",
    "trait": [
      {
        "Name": "Magic Resistance",
        "Text": "The yuan-ti has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>3/day each: <em>poison spray, suggestion</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The yuan-ti makes two melee attacks."
      },
      {
        "Name": "Scimitar",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one target. Hit:4 (1d6 + 1) slashing damage."
      },
      {
        "Name": "Shortbow",
        "Text": "Ranged Weapon 3 to hit, range 80/320 ft., one target. Hit:4 (1d6 + 1) piercing damage plus 7 (2d6) poison damage."
      }
    ],
    "environment": [
      "forest",
      "swamp",
      "urban",
      "desert"
    ]
  },
  {
    "name": "Zombie",
    "size": "M",
    "type": "undead",
    "alignment": "Neutral Evil",
    "ac": 8,
    "hp": 22,
    "speed": "Walk 20",
    "str": 13,
    "dex": 6,
    "con": 16,
    "int": 3,
    "wis": 6,
    "cha": 5,
    "save": "Wis +0",
    "senses": "darkvision 60 ft.",
    "passive": 8,
    "immune": "poison",
    "conditionImmune": "poisoned",
    "languages": "understands all languages it spoke in life but can't speak",
    "cr": "1/4",
    "trait": [
      {
        "Name": "Undead Fortitude",
        "Text": "If damage reduces the zombie to 0 hit points, it must make a Constitution saving throw with a DC of 5 + the damage taken, unless the damage is radiant or from a critical hit. On a success, the zombie drops to 1 hit point instead."
      }
    ],
    "action": [
      {
        "Name": "Slam",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one target. Hit:4 (1d6 + 1) bludgeoning damage."
      }
    ],
    "environment": [
      "urban"
    ]
  }
]
