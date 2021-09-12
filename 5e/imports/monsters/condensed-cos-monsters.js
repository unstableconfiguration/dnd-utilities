


export let strahd = [
  {
    "name": "Amber Golem",
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
    "name": "Anastrasya Karelova",
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
        "Text": "The vampire regains 10 hit points at the start of its turn if it has at least 1 hit point and isn't in sunlight or running water. If Anastrasya takes radiant damage or damage from holy water, this trait doesn't function at the start of the vampire's next turn."
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
    ],
    "isNpc": true
  },
  {
    "name": "Animated Halberd",
    "size": "S",
    "type": "construct",
    "alignment": "Unaligned",
    "ac": "15 natural armor",
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
        "Name": "Halberd",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one target. Hit:5 (1d10 + 1) slashing damage."
      }
    ]
  },
  {
    "name": "Arabelle",
    "size": "M",
    "type": "humanoid (human)",
    "alignment": "Lawful Neutral",
    "ac": 10,
    "hp": 2,
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
    ],
    "isNpc": true
  },
  {
    "name": "Armored Saber-Toothed Tiger",
    "size": "L",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": "17 half plate armor",
    "hp": 84,
    "speed": "Walk 40",
    "str": 18,
    "dex": 14,
    "con": 15,
    "int": 3,
    "wis": 12,
    "cha": 8,
    "skill": "Perception +3, Stealth +6",
    "passive": 13,
    "cr": "3",
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
    "name": "Arrigal",
    "size": "M",
    "type": "humanoid (human)",
    "alignment": "Neutral Evil",
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
        "Text": "During its first turn, Arrigal has advantage on attack rolls against any creature that hasn't taken a turn. Any hit the assassin scores against a surprised creature is a critical hit."
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
    ],
    "isNpc": true
  },
  {
    "name": "Baba Lysaga",
    "isNpc": true,
    "size": "M",
    "type": "humanoid (human, shapechanger)",
    "alignment": "Chaotic Evil",
    "ac": "15 natural armor",
    "hp": 120,
    "speed": "Walk 30",
    "str": 18,
    "dex": 10,
    "con": 16,
    "int": 20,
    "wis": 17,
    "cha": 13,
    "save": "Wis +7",
    "skill": "Arcana +13, Religion +13",
    "passive": 13,
    "languages": "Abyssal, Common, Draconic, Dwarvish, Giant",
    "cr": "11",
    "trait": [
      {
        "Name": "Shapechanger",
        "Text": "Baba Lysaga can use an action to polymorph into a swarm of insects (flies), or back into her true form. While in swarm form, she has a walking speed of 5 feet and a flying speed of 30 feet. Anything she is wearing transforms with her, but nothing she is carrying does."
      },
      {
        "Name": "Blessing of Mother Night",
        "Text": "Baba Lysaga is shielded against divination magic, as though protected by a nondetection spell."
      },
      {
        "Name": "Spellcasting",
        "Text": "Baba Lysaga is a 16th-level spellcaster. Her spellcasting ability is Intelligence (spell save DC 17, +9 to hit with spell attacks). Baba Lysaga has the following wizard spells prepared:<br><br>Cantrips (at will): <em>acid splash, fire bolt, light, mage hand, prestidigitation</em><br>1st (1 slots): <em>detect magic, magic missile, sleep, witch bolt</em><br>2nd (2 slots): <em>crown of madness, enlarge/reduce, misty step</em><br>3rd (3 slots): <em>dispel magic, fireball, lightning bolt</em><br>4th (4 slots): <em>blight, Evard's black tentacles, polymorph</em><br>5th (5 slots): <em>cloudkill, geas, scrying</em><br>6th (6 slots): <em>programmed illusion, true seeing</em><br>7th (7 slots): <em>finger of death, mirage arcane</em><br>8th (8 slots): <em>power word stun</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "Baba Lysaga makes three attacks with her quarterstaff."
      },
      {
        "Name": "Quarterstaff",
        "Text": "Melee Weapon 8 to hit, reach 5 ft., one target. Hit:7 (1d6 + 4) bludgeoning damage, or 8 (1d8 + 4) bludgeoning damage if wielded with two hands."
      },
      {
        "Name": "Summon Swarms of Insects (Recharges after a Short or Long Rest)",
        "Text": "Baba Lysaga summons 1d4 swarms of insects. A summoned swarm appears in an unoccupied space within 60 feet of Baba Lysaga and acts as her ally. It remains until it dies or until Baba Lysaga dismisses it as an action."
      }
    ]
  },
  {
    "name": "Baba Lysaga's Creeping Hut",
    "isNpc": true,
    "size": "G",
    "type": "construct",
    "alignment": "Unaligned",
    "ac": "16 natural armor",
    "hp": 263,
    "speed": "Walk 30",
    "str": 26,
    "dex": 7,
    "con": 20,
    "int": 1,
    "wis": 3,
    "cha": 3,
    "save": "Con +9, Wis +0, Cha +0",
    "senses": "blindsight 120 ft. (blind beyond this radius)",
    "passive": 6,
    "immune": "poison, psychic",
    "conditionImmune": "blinded, charmed, deafened, exhaustion, frightened, paralyzed, petrified, prone",
    "cr": "11",
    "trait": [
      {
        "Name": "Constructed Nature",
        "Text": "An animated object doesn't require air, food, drink, or sleep.<br>The magic that animates an object is dispelled when the construct drops to 0 hit points. An animated object reduced to 0 hit points becomes inanimate and is too damaged to be of much use or value to anyone."
      },
      {
        "Name": "Antimagic Susceptibility",
        "Text": "The hut is incapacitated while the magic gem that animates it is in the area of an antimagic field. If targeted by dispel magic, the hut must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute."
      },
      {
        "Name": "Siege Monster",
        "Text": "The hut deals double damage to objects and structures."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The hut makes three attacks with its roots. It can replace one of these attacks with a rock attack."
      },
      {
        "Name": "Root",
        "Text": "Melee Weapon 12 to hit, reach 60 ft., one target. Hit:30 (4d10 + 8) bludgeoning damage."
      },
      {
        "Name": "Rock",
        "Text": "Ranged Weapon 12 to hit, range 120 ft., one target. Hit:21 (3d8 + 8) bludgeoning damage."
      }
    ]
  },
  {
    "name": "Baron Vargas Vallakovich",
    "size": "M",
    "type": "humanoid (human)",
    "alignment": "Neutral Evil",
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
        "Text": "The noble adds 2 to its AC against one melee attack that would hit it. To do so, Vargas must see the attacker and be wielding a melee weapon."
      }
    ],
    "isNpc": true
  },
  {
    "name": "Barovian Commoner",
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
        "Name": "Pitchfork",
        "Text": "Melee Weapon 2 to hit, reach 5 ft., one target. Hit:3 (1d6) piercing damage."
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
    "name": "Barovian Scout",
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
        "Name": "Light Crossbows",
        "Text": "Ranged Weapon 4 to hit, ranged 80/320 ft., one target. Hit:6 (1d8 + 2) piercing damage."
      }
    ]
  },
  {
    "name": "Barovian Witch",
    "size": "M",
    "type": "humanoid (human)",
    "alignment": "Chaotic Evil",
    "ac": 10,
    "hp": 16,
    "speed": "Walk 30",
    "str": 7,
    "dex": 11,
    "con": 13,
    "int": 14,
    "wis": 11,
    "cha": 12,
    "skill": "Arcana +4, Perception +2",
    "senses": "darkvision 60 ft.",
    "passive": 12,
    "languages": "Common",
    "cr": "1/2",
    "action": [
      {
        "Name": "Claws (Requires Alter Self)",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one target. Hit:4 (1d6 + 1) slashing damage. This attack is magical."
      },
      {
        "Name": "Dagger",
        "Text": "Melee or Ranged Weapon 2 to hit, reach 5 ft. or range 20/60 ft., one target. Hit:2 (1d4) piercing damage."
      }
    ],
    "trait": [
      {
        "Name": "Spellcasting",
        "Text": "The witch is a 3rd-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 12, +4 to hit with spell attacks). The witch has the following wizard spells prepared:<br><br>Cantrips (at will): <em>mage hand, prestidigitation, ray of frost</em><br>1st (1 slots): <em>ray of sickness, sleep, Tasha's hideous laughter</em><br>2nd (2 slots): <em>alter self, invisibility</em>"
      }
    ]
  },
  {
    "name": "Beucephalus",
    "size": "L",
    "type": "fiend",
    "alignment": "Neutral Evil",
    "ac": "13 natural armor",
    "hp": 104,
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
    ],
    "isNpc": true
  },
  {
    "name": "Bluto Krogarov",
    "size": "M",
    "type": "humanoid (human)",
    "alignment": "Neutral Evil",
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
    ],
    "isNpc": true
  },
  {
    "name": "Broom of Animated Attack",
    "size": "S",
    "type": "construct",
    "alignment": "Unaligned",
    "ac": "15 natural armor",
    "hp": 17,
    "speed": "Walk 0, Fly 50 (hover)",
    "str": 10,
    "dex": 17,
    "con": 10,
    "int": 1,
    "wis": 5,
    "cha": 1,
    "senses": "blindsight 30 ft. (blind beyond this radius)",
    "passive": 7,
    "immune": "poison, psychic",
    "conditionImmune": "blinded, charmed, deafened, exhaustion, frightened, paralyzed, petrified, poisoned, prone",
    "cr": "1/4",
    "trait": [
      {
        "Name": "Constructed Nature",
        "Text": "An animated object doesn't require air, food, drink, or sleep.<br>The magic that animates an object is dispelled when the construct drops to 0 hit points. An animated object reduced to 0 hit points becomes inanimate and is too damaged to be of much use or value to anyone."
      },
      {
        "Name": "Antimagic Susceptibility",
        "Text": "The broom is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the broom must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute."
      },
      {
        "Name": "False Appearance",
        "Text": "While the broom remains motionless and isn't flying, it is indistinguishable from a normal broom."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The broom makes two melee attacks."
      },
      {
        "Name": "Broomstick",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:5 (1d4 + 3) bludgeoning damage."
      }
    ],
    "reaction": [
      {
        "Name": "Animated Attack",
        "Text": "If the broom is motionless and a creature grabs hold of it, the broom makes a Dexterity check contested by the creature's Strength check. If the broom wins the contest, it flies out of the creature's grasp and makes a melee attack against it with advantage on the attack roll."
      }
    ]
  },
  {
    "name": "Clovin Belview",
    "size": "M",
    "type": "humanoid (mongrelfolk)",
    "alignment": "Neutral Evil",
    "ac": "11 natural armor",
    "hp": 26,
    "speed": "Walk 20",
    "str": 12,
    "dex": 9,
    "con": 15,
    "int": 9,
    "wis": 10,
    "cha": 6,
    "skill": "Deception +2, Perception +2, Stealth +3",
    "passive": 12,
    "languages": "Common",
    "cr": "1/4",
    "trait": [
      {
        "Name": "Mimicry",
        "Text": "The mongrelfolk can mimic any sounds it has heard, including voices. A creature that hears the sounds can tell they are imitations with a successful 12 Wisdom (Insight) check."
      },
      {
        "Name": "Two-Headed",
        "Text": "The mongrelfolk has advantage on Wisdom (Perception) checks and on saving throws against being blinded, charmed, deafened, frightened, stunned, or knocked unconscious."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The mongrelfolk makes two attacks: one with its bite and one with its claw or dagger."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one target. Hit:3 (1d4 + 1) piercing damage."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one target. Hit:3 (1d4 + 1) slashing damage."
      },
      {
        "Name": "Dagger",
        "Text": "Melee or Ranged Weapon 3 to hit, reach 5 ft. or range 20/60 ft., one target. Hit:3 (1d4 + 1) piercing damage."
      }
    ],
    "isNpc": true
  },
  {
    "name": "Cyrus Belview",
    "size": "M",
    "type": "humanoid (mongrelfolk)",
    "alignment": "Any",
    "ac": "11 natural armor",
    "hp": 26,
    "speed": "Walk 20",
    "str": 12,
    "dex": 9,
    "con": 15,
    "int": 9,
    "wis": 10,
    "cha": 6,
    "skill": "Deception +2, Perception +2, Stealth +3",
    "passive": 12,
    "languages": "Common",
    "cr": "1/4",
    "trait": [
      {
        "Name": "Mimicry",
        "Text": "The mongrelfolk can mimic any sounds it has heard, including voices. A creature that hears the sounds can tell they are imitations with a successful 12 Wisdom (Insight) check."
      },
      {
        "Name": "Keen Hearing and Smell",
        "Text": "The mongrelfolk has advantage on Wisdom (Perception) checks that rely on hearing or smell."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The mongrelfolk makes two attacks: one with its bite and one with its claw or dagger."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one target. Hit:3 (1d4 + 1) piercing damage."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one target. Hit:3 (1d4 + 1) slashing damage."
      },
      {
        "Name": "Dagger",
        "Text": "Melee or Ranged Weapon 3 to hit, reach 5 ft. or range 20/60 ft., one target. Hit:3 (1d4 + 1) piercing damage."
      }
    ],
    "isNpc": true
  },
  {
    "name": "Davian Martikov",
    "size": "M",
    "type": "humanoid (human, shapechanger)",
    "alignment": "Lawful Good",
    "ac": 12,
    "hp": 31,
    "speed": "Walk 30 (fly 50 ft. in raven and hybrid forms)",
    "str": 10,
    "dex": 15,
    "con": 11,
    "int": 13,
    "wis": 15,
    "cha": 14,
    "skill": "Insight +4, Perception +6",
    "passive": 16,
    "languages": "Common (can't speak in raven form)",
    "cr": "2",
    "trait": [
      {
        "Name": "Shapechanger",
        "Text": "The wereraven can use its action to polymorph into a raven-humanoid hybrid or into a raven, or back into its human form. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its human form if it dies."
      },
      {
        "Name": "Mimicry",
        "Text": "The wereraven can mimic simple sounds it has heard, such as a person whispering, a baby crying, or an animal chittering. A creature that hears the sounds can tell they are imitations with a successful 10 Wisdom (Insight) check."
      },
      {
        "Name": "Regeneration",
        "Text": "The wereraven regains 10 hit points at the start of its turn. If Davian takes damage from a silvered weapon or a spell, this trait doesn't function at the start of the wereraven's next turn. The wereraven dies only if it starts its turn with 0 hit points and doesn't regenerate."
      }
    ],
    "action": [
      {
        "Name": "Multiattack (Human or Hybrid Form Only)",
        "Text": "The wereraven makes two weapon attacks, one of which can be with its hand crossbow."
      },
      {
        "Name": "Beak (Raven or Hybrid Form Only)",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:1 piercing damage in raven form, or 4 (1d4 + 2) piercing damage in hybrid form. If the target is humanoid, it must succeed on a 10 Constitution saving throw or be cursed with wereraven lycanthropy."
      },
      {
        "Name": "Shortsword (Human or Hybrid Form Only)",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:5 (1d6 + 2) piercing damage."
      },
      {
        "Name": "Hand Crossbow (Human or Hybrid Form Only)",
        "Text": "Ranged Weapon 4 to hit, range 30/120 ft., one target. Hit:5 (1d6 + 2) piercing damage."
      }
    ],
    "isNpc": true
  },
  {
    "name": "Distended Corpse",
    "size": "M",
    "type": "humanoid (any race)",
    "alignment": "Any",
    "ac": 10,
    "hp": 4,
    "speed": "Walk 20",
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
    ],
    "conditionImmune": "charmed, frightened",
    "trait": [
      {
        "Name": "Snake-Swollen",
        "Text": "When a corpse is reduced to 0 hit points, it splits open, disgorging a swarm of poisonous snakes. The snakes are hungry and fight until slain."
      }
    ]
  },
  {
    "name": "Donavich",
    "size": "M",
    "type": "humanoid (human)",
    "alignment": "Lawful Good",
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
    "isNpc": true,
    "trait": [
      {
        "Name": "Spellcasting",
        "Text": "The acolyte is a 1st-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 12, +4 to hit with spell attacks). The acolyte has following cleric spells prepared:<br><br>Cantrips (at will): <em>light, sacred flame, thaumaturgy</em><br>1st (1 slots): <em>bless, cure wounds, sanctuary</em>"
      }
    ]
  },
  {
    "name": "Doru",
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
        "Text": "The vampire regains 10 hit points at the start of its turn if it has at least 1 hit point and isn't in sunlight or running water. If Doru takes radiant damage or damage from holy water, this trait doesn't function at the start of the vampire's next turn."
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
    ],
    "isNpc": true
  },
  {
    "name": "Emil Toranescu",
    "size": "M",
    "type": "humanoid (human, shapechanger)",
    "alignment": "Chaotic Evil",
    "ac": 11,
    "hp": 72,
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
    ],
    "isNpc": true
  },
  {
    "name": "Escher",
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
        "Text": "The vampire regains 10 hit points at the start of its turn if it has at least 1 hit point and isn't in sunlight or running water. If Escher takes radiant damage or damage from holy water, this trait doesn't function at the start of the vampire's next turn."
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
    ],
    "isNpc": true
  },
  {
    "name": "Exethanter",
    "size": "M",
    "type": "undead",
    "alignment": "Lawful Any Non-Good Chaotic Evil",
    "ac": "17 natural armor",
    "hp": 99,
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
    "cr": "10",
    "trait": [
      {
        "Name": "Legendary Resistance (3/Day)",
        "Text": "If Exethanter fails a saving throw, it can choose to succeed instead."
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
        "Text": "The lich is an 18th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 20, +12 to hit with spell attacks). The lich has the following wizard spells prepared:<br><br>Cantrips (at will): <em>mage hand, prestidigitation, ray of frost</em>"
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
    ],
    "isNpc": true
  },
  {
    "name": "Ezmerelda d'Avenir",
    "isNpc": true,
    "size": "M",
    "type": "humanoid (human)",
    "alignment": "Chaotic Good",
    "ac": "17 {@item +1 studded leather armor}",
    "hp": 82,
    "speed": "Walk 30",
    "str": 14,
    "dex": 19,
    "con": 16,
    "int": 16,
    "wis": 11,
    "cha": 17,
    "save": "Wis +3",
    "skill": "Acrobatics +7, Arcana +6, Deception +9, Insight +3, Medicine +3, Perception +6, Performance +6, Sleight of hand +7, Stealth +7, Survival +6",
    "passive": 16,
    "languages": "Common, Elvish",
    "cr": "8",
    "trait": [
      {
        "Name": "Special Equipment",
        "Text": "In addition to her magic armor and weapons, Ezmerelda has two potion of greater potions of greater healing, six holy water (flask)|phb|vials of holy water, and three wooden stakes."
      },
      {
        "Name": "Spellcasting",
        "Text": "Ezmerelda is a 7th-level spellcaster. Her spellcasting ability is Intelligence (spell save DC 14, +6 to hit with spell attacks). Ezmerelda has the following wizard spells prepared:<br><br>Cantrips (at will): <em>fire bolt, light, mage hand, prestidigitation</em><br>1st (1 slots): <em>protection from evil and good, magic missile, shield</em><br>2nd (2 slots): <em>darkvision, knock, mirror image</em><br>3rd (3 slots): <em>clairvoyance, lightning bolt, magic circle</em><br>4th (4 slots): <em>greater invisibility</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "Ezmerelda makes three attacks: two with her +1 rapier and one with her +1 handaxe or her silvered shortsword."
      },
      {
        "Name": "Rapier +1",
        "Text": "Melee Weapon 8 to hit, reach 5 ft., one target. Hit:9 (1d8 + 5) piercing damage."
      },
      {
        "Name": "Handaxe +1",
        "Text": "Melee or Ranged Weapon 6 to hit, reach 5 ft. or range 20/60 ft., one target. Hit:6 (1d6 + 3) slashing damage."
      },
      {
        "Name": "Silvered Shortsword",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:7 (1d6 + 4) piercing damage."
      },
      {
        "Name": "Curse (Recharges after a Long Rest)",
        "Text": "Ezmerelda targets one creature that she can see within 30 feet of her. The target must succeed on a 14 Wisdom saving throw or be cursed. While cursed, the target has vulnerability to one type of damage of Ezmerelda's choice. The curse lasts until ended with a greater restoration spell, a remove curse spell, or similar magic. When the curse ends, Ezmerelda takes 3d6 psychic damage."
      },
      {
        "Name": "Evil Eye (Recharges after a Short or Long Rest)",
        "Text": "Ezmerelda targets one creature that she can see within 10 feet of her and casts one of the following spells on the target (save 14), requiring neither somatic nor material components to do so: animal friendship, charm person, or hold person. If the target succeeds on the initial saving throw, Ezmerelda is blinded until the end of her next turn. Once a target succeeds on a saving throw against this effect, it is immune to the Evil Eye power of all Vistani for 24 hours."
      }
    ]
  },
  {
    "name": "Gadof Blinsky",
    "size": "M",
    "type": "humanoid (human)",
    "alignment": "Chaotic Good",
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
    ],
    "isNpc": true
  },
  {
    "name": "Gertruda",
    "size": "M",
    "type": "humanoid (human)",
    "alignment": "Neutral Good",
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
    ],
    "isNpc": true
  },
  {
    "name": "Guardian Portrait",
    "size": "M",
    "type": "construct",
    "alignment": "Unaligned",
    "ac": "5 natural armor",
    "hp": 22,
    "speed": "Walk 0",
    "str": 1,
    "dex": 1,
    "con": 10,
    "int": 14,
    "wis": 10,
    "cha": 10,
    "senses": "darkvision 60 ft.",
    "passive": 10,
    "immune": "poison",
    "conditionImmune": "charmed, exhaustion, frightened, grappled, paralyzed, petrified, poisoned, prone, restrained",
    "languages": "Common, plus up to two other languages",
    "cr": "1",
    "trait": [
      {
        "Name": "Constructed Nature",
        "Text": "An animated object doesn't require air, food, drink, or sleep.<br>The magic that animates an object is dispelled when the construct drops to 0 hit points. An animated object reduced to 0 hit points becomes inanimate and is too damaged to be of much use or value to anyone."
      },
      {
        "Name": "Antimagic Susceptibility",
        "Text": "The portrait is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the portrait must succeed on a Constitution saving throw against the caster's spell save DC or become unconscious for 1 minute."
      },
      {
        "Name": "False Appearance",
        "Text": "While the figure in the portrait remains motionless, the portrait is indistinguishable from a normal painting."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>3/day each: <em>counterspell, crown of madness, hypnotic pattern, telekinesis</em>"
      }
    ]
  },
  {
    "name": "Helga Ruvak",
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
        "Text": "The vampire regains 10 hit points at the start of its turn if it has at least 1 hit point and isn't in sunlight or running water. If Helga takes radiant damage or damage from holy water, this trait doesn't function at the start of the vampire's next turn."
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
    ],
    "isNpc": true
  },
  {
    "name": "Henrik van der Voort",
    "size": "M",
    "type": "humanoid (human)",
    "alignment": "Lawful Evil",
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
    ],
    "isNpc": true
  },
  {
    "name": "Ireena Kolyana",
    "size": "M",
    "type": "humanoid (human)",
    "alignment": "Lawful Good",
    "ac": "15 breastplate",
    "hp": 14,
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
        "Text": "The noble adds 2 to its AC against one melee attack that would hit it. To do so, Ireena must see the attacker and be wielding a melee weapon."
      }
    ],
    "isNpc": true
  },
  {
    "name": "Ismark Kolyanovich",
    "size": "M",
    "type": "humanoid (human)",
    "alignment": "Lawful Good",
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
    ],
    "isNpc": true
  },
  {
    "name": "Izek Strazni",
    "isNpc": true,
    "size": "M",
    "type": "humanoid (human)",
    "alignment": "Neutral Evil",
    "ac": "14 studded leather armor",
    "hp": 112,
    "speed": "Walk 30",
    "str": 18,
    "dex": 15,
    "con": 16,
    "int": 10,
    "wis": 9,
    "cha": 15,
    "skill": "Intimidation +8, Perception +2",
    "passive": 12,
    "languages": "Common",
    "cr": "5",
    "trait": [
      {
        "Name": "Brute",
        "Text": "A melee weapon deals one extra die of its damage when Izek hits with it (included in the attack)."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "Izek makes two attacks with his battleaxe."
      },
      {
        "Name": "Battleaxe",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:13 (2d8 + 4) slashing damage, or 15 (2d10 + 4) when used with two hands."
      },
      {
        "Name": "Hurl Flame",
        "Text": "Ranged Spell 5 to hit, range 60 ft., one target. Hit:10 (3d6) fire damage. If the target is a flammable object that isn't being worn or carried, it catches fire."
      }
    ]
  },
  {
    "name": "Kasimir Velikov",
    "size": "M",
    "type": "humanoid (dusk elf)",
    "alignment": "Neutral",
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
    "isNpc": true,
    "senses": "darkvision 60 ft.",
    "trait": [
      {
        "Name": "Fey Ancestry",
        "Text": "Kasimir has advantage on saving throws against being charmed, and magic can't put the him to sleep."
      },
      {
        "Name": "Special Equipment",
        "Text": "Kasimir wears a ring of warmth and carries a spellbook containing all the spells he has prepared plus the following spells: arcane lock, comprehend languages, hold person, identify, locate object, nondetection, polymorph, protection from evil and good, and wall of stone."
      },
      {
        "Name": "Spellcasting",
        "Text": "Kasimir is a 9th-level spellcaster. His spellcasting ability is Intelligence (spell save DC 14, +6 to hit with spell attacks). Kasimir has the following wizard spells prepared:<br><br>Cantrips (at will): <em>fire bolt, light, mage hand, prestidigitation</em><br>1st (1 slots): <em>detect magic, mage armor, magic missile, shield</em><br>2nd (2 slots): <em>misty step, suggestion</em><br>3rd (3 slots): <em>counterspell, fireball, fly</em><br>4th (4 slots): <em>greater invisibility, ice storm</em><br>5th (5 slots): <em>cone of cold</em>"
      }
    ]
  },
  {
    "name": "Kiril Stoyanovich",
    "size": "M",
    "type": "humanoid (human, shapechanger)",
    "alignment": "Chaotic Evil",
    "ac": 11,
    "hp": 90,
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
    ],
    "isNpc": true
  },
  {
    "name": "Knight of the Order",
    "size": "M",
    "type": "undead",
    "alignment": "Lawful Evil",
    "ac": "13 broken chainmail",
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
        "Text": "The knight regains 10 hit points at the start of its turn. If the revenant takes fire or radiant damage, this trait doesn't function at the start of the revenant's next turn. The revenant's body is destroyed only if it starts its turn with 0 hit points and doesn't regenerate."
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
        "Name": "Fist",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:11 (2d6 + 4) bludgeoning damage. If the target is a creature against which the revenant has sworn vengeance, the target takes an extra 14 (4d6) bludgeoning damage. Instead of dealing damage, the revenant can grapple the target (escape 14) provided the target is Large or smaller."
      },
      {
        "Name": "Vengeful Glare",
        "Text": "The revenant targets one creature it can see within 30 feet of it and against which it has sworn vengeance. The target must make a 15 Wisdom saving throw. On a failure, the target is paralyzed until the revenant deals damage to it, or until the end of the revenant's next turn. When the paralysis ends, the target is frightened of the revenant for 1 minute. The frightened target can repeat the saving throw at the end of each of its turns, with disadvantage if it can see the revenant, ending the frightened condition on itself on a success."
      },
      {
        "Name": "Multiattack",
        "Text": "The knight makes two longsword attacks or two fist attacks."
      },
      {
        "Name": "Longsword",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:15 (2d10 + 4) slashing damage. If the target is a creature against which the knight has sworn vengeance, the target takes an extra 14 (4d6) slashing damage."
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
    "name": "Lady Fiona Wachter",
    "size": "M",
    "type": "humanoid (human)",
    "alignment": "Lawful Evil",
    "ac": 10,
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
        "Text": "As a bonus action, Fiona can expend a spell slot to cause its melee weapon attacks to magically deal an extra 10 (3d6) radiant damage to a target on a hit. This benefit lasts until the end of the turn. If the priest expends a spell slot of 2nd level or higher, the extra damage increases by 1d6 for each level above 1st."
      },
      {
        "Name": "Spellcasting",
        "Text": "Fiona is a 5th-level spellcaster. Her spellcasting ability is Wisdom (spell save DC 13, +5 to hit with spell attacks). Fiona has the following cleric spells prepared:<br><br>Cantrips (at will): <em>light, mending, thaumaturgy</em><br>1st (1 slots): <em>command, purify food and drink, sanctuary</em><br>2nd (2 slots): <em>augury, gentle repose, hold person</em><br>3rd (3 slots): <em>animate dead, create food and water</em>"
      }
    ],
    "action": [
      {
        "Name": "Mace",
        "Text": "Melee Weapon 2 to hit, reach 5 ft., one target. Hit:3 (1d6) bludgeoning damage."
      }
    ],
    "isNpc": true
  },
  {
    "name": "Lady Lydia Petrovna",
    "size": "M",
    "type": "humanoid (human)",
    "alignment": "Lawful Good",
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
    ],
    "isNpc": true
  },
  {
    "name": "Lief Lipsiege",
    "size": "M",
    "type": "humanoid (human)",
    "alignment": "Chaotic Evil",
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
    ],
    "isNpc": true
  },
  {
    "name": "Ludmilla Vilisevic",
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
        "Text": "The vampire regains 10 hit points at the start of its turn if it has at least 1 hit point and isn't in sunlight or running water. If Ludmilla takes radiant damage or damage from holy water, this trait doesn't function at the start of the vampire's next turn."
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
    ],
    "isNpc": true
  },
  {
    "name": "Luvash",
    "size": "M",
    "type": "humanoid (human)",
    "alignment": "Chaotic Evil",
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
        "Text": "The captain makes three melee attacks: two with its scimitar and one with its dagger. Or Luvash makes two ranged attacks with its daggers."
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
    ],
    "isNpc": true
  },
  {
    "name": "Mad Mary",
    "size": "M",
    "type": "humanoid (human)",
    "alignment": "Chaotic Neutral",
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
    ],
    "isNpc": true
  },
  {
    "name": "Madam Eva",
    "isNpc": true,
    "size": "M",
    "type": "humanoid (human)",
    "alignment": "Chaotic Neutral",
    "ac": 10,
    "hp": 88,
    "speed": "Walk 20",
    "str": 8,
    "dex": 11,
    "con": 12,
    "int": 17,
    "wis": 20,
    "cha": 18,
    "save": "Con +5",
    "skill": "Arcana +7, Deception +8, Insight +13, Intimidation +8, Perception +9, Religion +7",
    "passive": 19,
    "languages": "Abyssal, Common, Elvish, Infernal",
    "cr": "10",
    "action": [
      {
        "Name": "Dagger",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:2 (1d4) piercing damage."
      },
      {
        "Name": "Curse (Recharges after a Long Rest)",
        "Text": "Madam Eva targets one creature that she can see within 30 feet of her. The target must succeed on a 17 Wisdom saving throw or be cursed. While cursed, the target is blinded and deafened. The curse lasts until ended with a greater restoration spell, a remove curse spell, or similar magic. When the curse ends, Madam Eva takes 5d6 psychic damage."
      },
      {
        "Name": "Evil Eye (Recharges after a Short or Long Rest)",
        "Text": "Madam Eva targets one creature that she can see within 10 feet of her and casts one of the following spells on the target (save 17), requiring neither somatic nor material components to do so: animal friendship, charm person, or hold person. If the target succeeds on the initial saving throw, Madam Eva is blinded until the end of her next turn. Once a target succeeds on a saving throw against this effect, it is immune to the Evil Eye power of all Vistani for 24 hours."
      }
    ],
    "trait": [
      {
        "Name": "Spellcasting",
        "Text": "Madam Eva is a 16th-level spellcaster. Her spellcasting ability is Wisdom (spell save DC 17, +9 to hit with spell attacks). Madam Eva has the following cleric spells prepared:<br><br>Cantrips (at will): <em>light, mending, sacred flame, thaumaturgy</em><br>1st (1 slots): <em>bane, command, detect evil and good, protection from evil and good</em><br>2nd (2 slots): <em>lesser restoration, protection from poison, spiritual weapon</em><br>3rd (3 slots): <em>create food and water, speak with dead, spirit guardians</em><br>4th (4 slots): <em>divination, freedom of movement, guardian of faith</em><br>5th (5 slots): <em>greater restoration, raise dead</em><br>6th (6 slots): <em>find the path, harm, true seeing</em><br>7th (7 slots): <em>fire storm, regenerate</em><br>8th (8 slots): <em>earthquake</em>"
      }
    ]
  },
  {
    "name": "Majesto",
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
        "Text": "Magical darkness doesn't impede Majesto's darkvision."
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
    "familiar": true,
    "isNpc": true
  },
  {
    "name": "Marzena Belview",
    "size": "M",
    "type": "humanoid (mongrelfolk)",
    "alignment": "Any",
    "ac": "11 natural armor",
    "hp": 26,
    "speed": "Walk 20, Fly 40",
    "str": 12,
    "dex": 9,
    "con": 15,
    "int": 9,
    "wis": 10,
    "cha": 6,
    "skill": "Deception +2, Perception +2, Stealth +3",
    "passive": 12,
    "languages": "Common",
    "cr": "1/4",
    "trait": [
      {
        "Name": "Mimicry",
        "Text": "The mongrelfolk can mimic any sounds it has heard, including voices. A creature that hears the sounds can tell they are imitations with a successful 12 Wisdom (Insight) check."
      },
      {
        "Name": "Flight",
        "Text": "The mongrelfolk has leathery wings and a flying speed of 40 feet."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The mongrelfolk makes two attacks: one with its bite and one with its claw or dagger."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one target. Hit:3 (1d4 + 1) piercing damage."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one target. Hit:3 (1d4 + 1) slashing damage."
      },
      {
        "Name": "Dagger",
        "Text": "Melee or Ranged Weapon 3 to hit, reach 5 ft. or range 20/60 ft., one target. Hit:3 (1d4 + 1) piercing damage."
      }
    ],
    "isNpc": true
  },
  {
    "name": "Milivoj",
    "size": "M",
    "type": "humanoid (human)",
    "alignment": "Neutral",
    "ac": 10,
    "hp": 4,
    "speed": "Walk 30",
    "str": 15,
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
        "Name": "Shovel",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:4 (1d4 + 2) bludgeoning damage."
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
    ],
    "isNpc": true
  },
  {
    "name": "Mishka Belview",
    "size": "M",
    "type": "humanoid (mongrelfolk)",
    "alignment": "Chaotic Evil",
    "ac": "11 natural armor",
    "hp": 26,
    "speed": "Walk 20",
    "str": 12,
    "dex": 9,
    "con": 15,
    "int": 9,
    "wis": 10,
    "cha": 6,
    "skill": "Deception +2, Perception +2, Stealth +3",
    "passive": 12,
    "languages": "Common",
    "cr": "1/4",
    "trait": [
      {
        "Name": "Mimicry",
        "Text": "The mongrelfolk can mimic any sounds it has heard, including voices. A creature that hears the sounds can tell they are imitations with a successful 12 Wisdom (Insight) check."
      },
      {
        "Name": "Spider Climb",
        "Text": "The mongrelfolk can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The mongrelfolk makes two attacks: one with its bite and one with its claw or dagger."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one target. Hit:3 (1d4 + 1) piercing damage."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one target. Hit:3 (1d4 + 1) slashing damage."
      },
      {
        "Name": "Dagger",
        "Text": "Melee or Ranged Weapon 3 to hit, reach 5 ft. or range 20/60 ft., one target. Hit:3 (1d4 + 1) piercing damage."
      }
    ],
    "isNpc": true
  },
  {
    "name": "Mongrelfolk",
    "size": "M",
    "type": "humanoid (mongrelfolk)",
    "alignment": "Any",
    "ac": "11 natural armor",
    "hp": 26,
    "speed": "Walk 20",
    "str": 12,
    "dex": 9,
    "con": 15,
    "int": 9,
    "wis": 10,
    "cha": 6,
    "skill": "Deception +2, Perception +2, Stealth +3",
    "passive": 12,
    "languages": "Common",
    "cr": "1/4",
    "trait": [
      {
        "Name": "Extraordinary Feature",
        "Text": "The mongrelfolk has one of the following extraordinary features, determined randomly by rolling a d20 or chosen by the DM:<br>1–3: Amphibious. The mongrelfolk can breathe air and water.<br>4–9: Darkvision. The mongrelfolk has darkvision out to a range of 60 feet.<br>10: Flight. The mongrelfolk has leathery wings and a flying speed of 40 feet.<br>11–15: Keen Hearing and Smell. The mongrelfolk has advantage on Wisdom (Perception) checks that rely on hearing or smell.<br>16–17: Spider Climb. The mongrelfolk can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.<br>18–19: Standing Leap. The mongrelfolk's long jump is up to 20 feet and its high jump up to 10 feet, with or without a running start.<br>20: Two-Headed. The mongrelfolk has advantage on Wisdom (Perception) checks and on saving throws against being blinded, charmed, deafened, frightened, stunned, or knocked unconscious."
      },
      {
        "Name": "Mimicry",
        "Text": "The mongrelfolk can mimic any sounds it has heard, including voices. A creature that hears the sounds can tell they are imitations with a successful 12 Wisdom (Insight) check."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The mongrelfolk makes two attacks: one with its bite and one with its claw or dagger."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one target. Hit:3 (1d4 + 1) piercing damage."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one target. Hit:3 (1d4 + 1) slashing damage."
      },
      {
        "Name": "Dagger",
        "Text": "Melee or Ranged Weapon 3 to hit, reach 5 ft. or range 20/60 ft., one target. Hit:3 (1d4 + 1) piercing damage."
      }
    ]
  },
  {
    "name": "Morgantha",
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
    ],
    "isNpc": true
  },
  {
    "name": "Nikolai Wachter",
    "size": "M",
    "type": "humanoid (human)",
    "alignment": "Lawful Neutral",
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
        "Text": "The noble adds 2 to its AC against one melee attack that would hit it. To do so, Nikolai must see the attacker and be wielding a melee weapon."
      }
    ],
    "isNpc": true
  },
  {
    "name": "Otto Belview",
    "size": "M",
    "type": "humanoid (mongrelfolk)",
    "alignment": "Any",
    "ac": "11 natural armor",
    "hp": 26,
    "speed": "Walk 20",
    "str": 12,
    "dex": 9,
    "con": 15,
    "int": 9,
    "wis": 10,
    "cha": 6,
    "skill": "Deception +2, Perception +2, Stealth +3",
    "passive": 12,
    "languages": "Common",
    "cr": "1/4",
    "trait": [
      {
        "Name": "Mimicry",
        "Text": "The mongrelfolk can mimic any sounds it has heard, including voices. A creature that hears the sounds can tell they are imitations with a successful 12 Wisdom (Insight) check."
      },
      {
        "Name": "Standing Leap",
        "Text": "The mongrelfolk's long jump is up to 20 feet and its high jump up to 10 feet, with or without a running start."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The mongrelfolk makes two attacks: one with its bite and one with its claw or dagger."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one target. Hit:3 (1d4 + 1) piercing damage."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one target. Hit:3 (1d4 + 1) slashing damage."
      },
      {
        "Name": "Dagger",
        "Text": "Melee or Ranged Weapon 3 to hit, reach 5 ft. or range 20/60 ft., one target. Hit:3 (1d4 + 1) piercing damage."
      }
    ],
    "isNpc": true
  },
  {
    "name": "Parriwimple",
    "size": "M",
    "type": "humanoid (human)",
    "alignment": "Lawful Good",
    "ac": "14 studded leather armor",
    "hp": 112,
    "speed": "Walk 30",
    "str": 18,
    "dex": 15,
    "con": 16,
    "int": 6,
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
        "Text": "A melee weapon deals one extra die of its damage when Parriwimple hits with it (included in the attack)."
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
    ],
    "isNpc": true
  },
  {
    "name": "Patrina Velikovna",
    "size": "M",
    "type": "humanoid (dusk elf)",
    "alignment": "Neutral Evil",
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
    ],
    "isNpc": true
  },
  {
    "name": "Phantom Warrior",
    "size": "M",
    "type": "undead",
    "alignment": "Any",
    "ac": 16,
    "hp": 45,
    "speed": "Walk 30",
    "str": 16,
    "dex": 11,
    "con": 16,
    "int": 8,
    "wis": 10,
    "cha": 15,
    "skill": "Perception +2, Stealth +4",
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
    "immune": "cold, necrotic, poison",
    "conditionImmune": "charmed, exhaustion, frightened, grappled, paralyzed, petrified, poisoned, prone, restrained",
    "languages": "any languages it knew in life",
    "cr": "3",
    "trait": [
      {
        "Name": "Ethereal Sight",
        "Text": "The phantom warrior can see 60 feet into the Ethereal Plane when it is on the Material Plane, and vice versa."
      },
      {
        "Name": "Incorporeal Movement",
        "Text": "The phantom warrior can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object."
      },
      {
        "Name": "Spectral Armor and Shield",
        "Text": "The phantom warrior's AC accounts for its spectral armor and shield."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The phantom warrior makes two attacks with its spectral longsword."
      },
      {
        "Name": "Spectral Longsword",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:7 (1d8 + 3) force damage."
      },
      {
        "Name": "Etherealness",
        "Text": "The phantom warrior enters the Ethereal Plane from the Material Plane, or vice versa. It is visible on the Material Plane while it is in the Border Ethereal, and vice versa, yet it can't affect or be affected by anything on the other plane."
      }
    ]
  },
  {
    "name": "Piccolo",
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
        "Text": "The baboon has advantage on an attack roll against a creature if at least one of Piccolo's allies is within 5 feet of the creature and the ally isn't incapacitated."
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
    ],
    "isNpc": true
  },
  {
    "name": "Pidlwick II",
    "isNpc": true,
    "size": "S",
    "type": "construct",
    "alignment": "Neutral Evil",
    "ac": "14 natural armor",
    "hp": 10,
    "speed": "Walk 30",
    "str": 10,
    "dex": 14,
    "con": 11,
    "int": 8,
    "wis": 13,
    "cha": 10,
    "skill": "Performance +2",
    "passive": 11,
    "immune": "poison",
    "conditionImmune": "paralyzed, petrified, poisoned",
    "languages": "understands Common but doesn't speak and can't read or write",
    "cr": "1/4",
    "trait": [
      {
        "Name": "Ambusher",
        "Text": "During the first round of combat, Pidlwick II has advantage on attack rolls against any creature that hasn't had a turn yet."
      }
    ],
    "action": [
      {
        "Name": "Club",
        "Text": "Melee Weapon 2 to hit, reach 5 ft., one target. Hit:2 (1d4) bludgeoning damage."
      },
      {
        "Name": "Dart",
        "Text": "Ranged Weapon 4 to hit, range 20/60 ft., one target. Hit:4 (1d4 + 2) piercing damage."
      }
    ]
  },
  {
    "name": "Rahadin",
    "isNpc": true,
    "size": "M",
    "type": "humanoid (elf)",
    "alignment": "Lawful Evil",
    "ac": "18 studded leather armor",
    "hp": 135,
    "speed": "Walk 35",
    "str": 14,
    "dex": 22,
    "con": 17,
    "int": 15,
    "wis": 16,
    "cha": 18,
    "save": "Con +7, Wis +7",
    "skill": "Deception +8, Insight +7, Intimidation +12, Perception +11, Stealth +14",
    "senses": "darkvision 60 ft.",
    "passive": 21,
    "languages": "Common, Elvish",
    "cr": "10",
    "trait": [
      {
        "Name": "Deathly Choir",
        "Text": "Any creature within 10 feet of Rahadin that isn't protected by a mind blank spell hears in its mind the screams of the thousands of people Rahadin has killed. As a bonus action, Rahadin can force all creatures that can hear the screams to make a 16 Wisdom saving throw. Each creature takes 16 (3d10) psychic damage on a failed save, or half as much damage on a successful one."
      },
      {
        "Name": "Fey Ancestry",
        "Text": "Rahadin has advantage on saving throws against being charmed, and magic can't put him to sleep."
      },
      {
        "Name": "Mask of the Wild",
        "Text": "Rahadin can attempt to hide even when he is only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day: <em>magic weapon, nondetection</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "Rahadin attacks three times with his scimitar, or twice with his poisoned darts."
      },
      {
        "Name": "Scimitar",
        "Text": "Melee Weapon 10 to hit, reach 5 ft., one target. Hit:9 (1d6 + 6) slashing damage."
      },
      {
        "Name": "Poisoned Dart",
        "Text": "Ranged Weapon 10 to hit, range 20/60 ft., one target. Hit:8 (1d4 + 6) piercing damage plus 5 (2d4) poison damage."
      }
    ]
  },
  {
    "name": "Rictavio",
    "alias": [
      "Rudolph van Richten"
    ],
    "isNpc": true,
    "size": "M",
    "type": "humanoid (human)",
    "alignment": "Lawful Good",
    "ac": "12 leather armor",
    "hp": 77,
    "speed": "Walk 30",
    "str": 9,
    "dex": 12,
    "con": 13,
    "int": 16,
    "wis": 18,
    "cha": 16,
    "save": "Con +4, Wis +7",
    "skill": "Arcana +9, Insight +7, Medicine +7, Perception +7, Religion +6, Sleight of hand +4",
    "passive": 17,
    "languages": "Abyssal, Common, Elvish, Infernal",
    "cr": "5",
    "trait": [
      {
        "Name": "Special Equipment",
        "Text": "In addition to his sword cane, Rictavio wears a hat of disguise and a ring of mind shielding, and he carries a spell scroll (5th level)||spell scroll of raise dead."
      },
      {
        "Name": "Undead Slayer",
        "Text": "When Rictavio hits an undead with a weapon attack, the undead takes an extra 10 (3d6) damage of the weapon's type."
      },
      {
        "Name": "Spellcasting",
        "Text": "Rictavio is a 9th-level spellcaster. His spellcasting ability is Wisdom (spell save DC 15, +7 to hit with spell attacks). Rictavio has the following cleric spells prepared:<br><br>Cantrips (at will): <em>guidance, light, mending, thaumaturgy</em><br>1st (1 slots): <em>cure wounds, detect evil and good, protection from evil and good, sanctuary</em><br>2nd (2 slots): <em>augury, lesser restoration, protection from poison</em><br>3rd (3 slots): <em>magic circle, remove curse, speak with dead</em><br>4th (4 slots): <em>death ward, freedom of movement</em><br>5th (5 slots): <em>dispel evil and good</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "Rictavio makes two attacks with his sword cane."
      },
      {
        "Name": "Sword Cane",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:4 (1d6 + 1) bludgeoning damage (wooden cane) or piercing damage (silvered sword)."
      }
    ]
  },
  {
    "name": "Rosavalda \"Rose\" Durst",
    "size": "S",
    "type": "undead",
    "alignment": "Lawful Good",
    "ac": 11,
    "hp": 35,
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
    "languages": "Common",
    "cr": "3",
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
        "Text": "Each non-undead creature within 60 feet of Rose that can see it must succeed on a 13 Wisdom saving throw or be frightened for 1 minute. If the save fails by 5 or more, the target also ages 1d4 × 10 years. A frightened target can repeat the saving throw at the end of each of its turns, ending the frightened condition on itself on a success. If a target's saving throw is successful or the effect ends for it, the target is immune to this ghost's Horrifying Visage for the next 24 hours. The aging effect can be reversed with a greater restoration spell, but only within 24 hours of it occurring."
      },
      {
        "Name": "Possession (Recharge 6)",
        "Text": "One humanoid that the ghost can see within 5 feet of it must succeed on a 13 Charisma saving throw or be possessed by the ghost; the ghost then disappears, and the target is incapacitated and loses control of its body. The ghost now controls the body but doesn't deprive the target of awareness. The ghost can't be targeted by any attack, spell, or other effect, except ones that turn undead, and it retains its alignment, Intelligence, Wisdom, Charisma, and immunity to being charmed and frightened. It otherwise uses the possessed target's statistics, but doesn't gain access to the target's knowledge, class features, or proficiencies."
      }
    ],
    "environment": [
      "underdark",
      "urban"
    ],
    "isNpc": true
  },
  {
    "name": "Sangzor",
    "size": "L",
    "type": "beast",
    "alignment": "Chaotic Evil",
    "ac": "11 natural armor",
    "hp": 33,
    "speed": "Walk 40",
    "str": 17,
    "dex": 11,
    "con": 12,
    "int": 6,
    "wis": 12,
    "cha": 6,
    "passive": 11,
    "cr": "1",
    "trait": [
      {
        "Name": "Charge",
        "Text": "If Sangzor moves at least 20 feet straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 5 (2d4) bludgeoning damage. If the target is a creature, it must succeed on a 13 Strength saving throw or be knocked prone."
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
    ],
    "isNpc": true,
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
    ]
  },
  {
    "name": "Savid",
    "size": "M",
    "type": "humanoid (dusk elf)",
    "alignment": "Neutral",
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
    ],
    "isNpc": true
  },
  {
    "name": "Sir Godfrey Gwilym",
    "size": "M",
    "type": "undead",
    "alignment": "Lawful Evil",
    "ac": "13 broken chainmail",
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
    "cr": "6",
    "trait": [
      {
        "Name": "Regeneration",
        "Text": "The knight regains 10 hit points at the start of its turn. If Sir Godfrey takes fire or radiant damage, this trait doesn't function at the start of the revenant's next turn. The revenant's body is destroyed only if it starts its turn with 0 hit points and doesn't regenerate."
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
      },
      {
        "Name": "Spellcasting",
        "Text": "Sir Godfrey is a 16th-level spellcaster. His spellcasting ability is Wisdom (spell save DC 14, +6 to hit with spell attacks). He has the following paladin spells prepared:<br><br>1st (1 slots): <em>command, divine favor, thunderous smite</em><br>2nd (2 slots): <em>branding smite, magic weapon</em><br>3rd (3 slots): <em>blinding smite, dispel magic</em><br>4th (4 slots): <em>staggering smite</em>"
      }
    ],
    "action": [
      {
        "Name": "Fist",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:11 (2d6 + 4) bludgeoning damage. If the target is a creature against which the revenant has sworn vengeance, the target takes an extra 14 (4d6) bludgeoning damage. Instead of dealing damage, the revenant can grapple the target (escape 14) provided the target is Large or smaller."
      },
      {
        "Name": "Vengeful Glare",
        "Text": "The revenant targets one creature it can see within 30 feet of it and against which it has sworn vengeance. The target must make a 15 Wisdom saving throw. On a failure, the target is paralyzed until the revenant deals damage to it, or until the end of the revenant's next turn. When the paralysis ends, the target is frightened of the revenant for 1 minute. The frightened target can repeat the saving throw at the end of each of its turns, with disadvantage if it can see the revenant, ending the frightened condition on itself on a success."
      },
      {
        "Name": "Multiattack",
        "Text": "The knight makes two longsword attacks or two fist attacks."
      },
      {
        "Name": "Longsword",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:15 (2d10 + 4) slashing damage. If the target is a creature against which the knight has sworn vengeance, the target takes an extra 14 (4d6) slashing damage."
      }
    ],
    "environment": [
      "forest",
      "swamp",
      "hill",
      "urban",
      "desert",
      "arctic"
    ],
    "isNpc": true
  },
  {
    "name": "Snow Maiden",
    "size": "M",
    "type": "undead",
    "alignment": "Neutral",
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
        "Text": "Melee Spell 4 to hit, reach 5 ft., one creature. Hit:10 (3d6) cold damage. The target must succeed on a DC 10 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the creature finishes a long rest. The target dies if this effect reduces its hit point maximum to 0."
      }
    ],
    "environment": [
      "underdark",
      "urban"
    ]
  },
  {
    "name": "Stanimir",
    "size": "M",
    "type": "humanoid (human)",
    "alignment": "Chaotic Neutral",
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
    "isNpc": true,
    "trait": [
      {
        "Name": "Spellcasting",
        "Text": "The mage is a 9th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 14, +6 to hit with spell attacks). The mage has the following wizard spells prepared:<br><br>Cantrips (at will): <em>friends, light, mage hand, prestidigitation</em><br>1st (1 slots): <em>charm person, mage armor, shield, sleep</em><br>2nd (2 slots): <em>misty step, suggestion</em><br>3rd (3 slots): <em>bestow curse, phantom steed, vampiric touch</em><br>4th (4 slots): <em>greater invisibility, stoneskin</em><br>5th (5 slots): <em>dominate person</em>"
      }
    ]
  },
  {
    "name": "Stella Wachter",
    "size": "M",
    "type": "humanoid (human)",
    "alignment": "Chaotic Good",
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
    ],
    "isNpc": true
  },
  {
    "name": "Strahd von Zarovich",
    "isNpc": true,
    "isNamedCreature": true,
    "size": "M",
    "type": "undead (shapechanger)",
    "alignment": "Lawful Evil",
    "ac": "16 natural armor",
    "hp": 144,
    "speed": "Walk 30",
    "str": 18,
    "dex": 18,
    "con": 18,
    "int": 20,
    "wis": 15,
    "cha": 18,
    "save": "Dex +9, Wis +7, Cha +9",
    "skill": "Arcana +15, Perception +12, Religion +10, Stealth +14",
    "senses": "darkvision 120 ft.",
    "passive": 22,
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
    "languages": "Abyssal, Common, Draconic, Elvish, Giant, Infernal",
    "cr": "15",
    "trait": [
      {
        "Name": "Shapechanger",
        "Text": "If Strahd isn't in running water or sunlight, he can use his action to polymorph into a Tiny bat, a Medium wolf, or a Medium cloud of mist, or back into his true form.<br>While in bat or wolf form, Strahd can't speak. In bat form, his walking speed is 5 feet, and he has a flying speed of 30 feet. In wolf form, his walking speed is 40 feet. His statistics, other than his size and speed, are unchanged. Anything he is wearing transforms with him, but nothing he is carrying does. He reverts to his true form if he dies.<br>While in mist form, Strahd can't take any actions, speak, or manipulate objects. He is weightless, has a flying speed of 20 feet, can hover, and can enter a hostile creature's space and stop there. In addition, if air can pass through a space, the mist can do so without squeezing, and he can't pass through water. He has advantage on Strength, Dexterity, and Constitution saving throws, and he is immune to all nonmagical damage, except the damage he takes from sunlight."
      },
      {
        "Name": "Legendary Resistance (3/Day)",
        "Text": "If Strahd fails a saving throw, he can choose to succeed instead."
      },
      {
        "Name": "Misty Escape",
        "Text": "When Strahd drops to 0 hit points outside his coffin, he transforms into a cloud of mist (as in the Shapechanger trait) instead of falling unconscious, provided that he isn't in running water or sunlight. If he can't transform, he is destroyed."
      },
      {
        "Name": "Regeneration",
        "Text": "Strahd regains 20 hit points at the start of his turn if he has at least 1 hit point and isn't in running water or sunlight. If he takes radiant damage or damage from holy water, this trait doesn't function at the start of his next turn."
      },
      {
        "Name": "Spider Climb",
        "Text": "Strahd can climb difficult surfaces, including upside down on ceilings, without having to make an ability check."
      },
      {
        "Name": "Vampire Weaknesses",
        "Text": "Strahd has the following flaws:"
      },
      {
        "Name": "Spellcasting",
        "Text": "Strahd is a 9th-level spellcaster. His spellcasting ability is Intelligence (spell save DC 18, +10 to hit with spell attacks). He has the following wizard spells prepared:<br><br>Cantrips (at will): <em>mage hand, prestidigitation, ray of frost</em><br>1st (1 slots): <em>comprehend languages, fog cloud, sleep</em><br>2nd (2 slots): <em>detect thoughts, gust of wind, mirror image</em><br>3rd (3 slots): <em>animate dead, fireball, nondetection</em><br>4th (4 slots): <em>blight, greater invisibility, polymorph</em><br>5th (5 slots): <em>animate objects, scrying</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack (Vampire Form Only)",
        "Text": "Strahd makes two attacks, only one of which can be a bite attack."
      },
      {
        "Name": "Unarmed Strike (Vampire or Wolf Form Only)",
        "Text": "Melee Weapon 9 to hit, reach 5 ft., one target. Hit:8 (1d8 + 4) slashing damage, plus 14 (4d6) necrotic damage. If the target is a creature, Strahd can grapple it (escape 18) instead of dealing the slashing damage."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 9 to hit, reach 5 ft., one willing creature, or a creature that is grappled by Strahd, incapacitated, or restrained. Hit:7 (1d6 + 4) piercing damage plus 10 (3d6) necrotic damage. The target's hit point maximum is reduced by an amount equal to the necrotic damage taken, and Strahd regains hit points equal to that amount. The reduction lasts until the target finishes a long rest. The target dies if its hit point maximum is reduced to 0. A humanoid slain in this way and then buried in the ground rises the following night as a vampire spawn under Strahd's control."
      },
      {
        "Name": "Charm",
        "Text": "Strahd targets one humanoid he can see within 30 feet of him. If the target can see Strahd, the target must succeed on a 17 Wisdom saving throw against this magic or be charmed. The charmed target regards Strahd as a trusted friend to be heeded and protected. The target isn't under Strahd's control, but it takes Strahd's requests and actions in the most favorable way and lets Strahd bite it."
      },
      {
        "Name": "Children of the Night (1/Day)",
        "Text": "Strahd magically calls 2d4 swarm of swarms of bats or swarm of swarms of rats, provided that the sun isn't up. While outdoors, Strahd can call 3d6 wolves instead. The called creatures arrive in 1d4 rounds, acting as allies of Strahd and obeying his spoken commands. The beasts remain for 1 hour, until Strahd dies, or until he dismisses them as a bonus action."
      }
    ],
    "legendary": [
      {
        "Name": "Move",
        "Text": "Strahd moves up to his speed without provoking opportunity attacks."
      },
      {
        "Name": "Unarmed Strike",
        "Text": "Strahd makes one unarmed strike."
      },
      {
        "Name": "Bite (Costs 2 Actions)",
        "Text": "Strahd makes one bite attack."
      }
    ]
  },
  {
    "name": "Strahd Zombie",
    "size": "M",
    "type": "undead",
    "alignment": "Unaligned",
    "ac": 8,
    "hp": 30,
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
    "languages": "understands the languages it knew in life but can't speak",
    "cr": "1",
    "trait": [
      {
        "Name": "Loathsome Limbs",
        "Text": "Whenever the zombie takes at least 5 bludgeoning or slashing damage at one time, roll a d20 to determine what else happens to it:<br>1–8: One leg is severed from the zombie if it has any legs left.<br>9–16: One arm is severed from the zombie if it has any arms left.<br>17–20: The zombie is decapitated.<br>If the zombie is reduced to 0 hit points, all parts of it die. Until then, a severed part acts on the zombie's initiative and has its own action and movement. A severed part has AC 8. Any damage it takes is subtracted from the zombie's hit points.<br>A severed leg is unable to attack and has a speed of 5 feet.<br>A severed arm has a speed of 5 feet and can make one claw attack on its turn, with disadvantage on the attack roll. Each time the zombie loses an arm, it loses a claw attack.<br>If its head is severed, the zombie loses its bite attack and its body is blinded unless the head can see it. The severed head has a speed of 0 feet. It can make a bite attack, but only against a target in its space.<br>The zombie's speed is halved if it's missing a leg. If it loses both legs, it falls prone. If it has both arms, it can crawl. With only one arm, it can still crawl, but its speed is halved. With no arms or legs, its speed is 0 feet, and it can't benefit from bonuses to speed."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The zombie makes three attacks: one with its bite and two with its claws."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one target. Hit:3 (1d4 + 1) piercing damage."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one target. Hit:4 (1d6 + 1) slashing damage."
      }
    ]
  },
  {
    "name": "Strahd's Animated Armor",
    "isNpc": true,
    "size": "M",
    "type": "construct",
    "alignment": "Lawful Evil",
    "ac": "21 natural armor",
    "hp": 112,
    "speed": "Walk 30",
    "str": 17,
    "dex": 13,
    "con": 16,
    "int": 9,
    "wis": 10,
    "cha": 9,
    "skill": "Perception +3",
    "senses": "blindsight 60 ft. (blind beyond this radius)",
    "passive": 13,
    "resist": [
      "cold",
      "fire"
    ],
    "immune": "lightning, poison",
    "conditionImmune": "blinded, charmed, deafened, exhaustion, frightened, paralyzed, petrified, poisoned",
    "languages": "understands Common but can't speak",
    "cr": "6",
    "trait": [
      {
        "Name": "Constructed Nature",
        "Text": "An animated object doesn't require air, food, drink, or sleep.<br>The magic that animates an object is dispelled when the construct drops to 0 hit points. An animated object reduced to 0 hit points becomes inanimate and is too damaged to be of much use or value to anyone."
      },
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
        "Text": "The armor makes two melee attacks or uses Shocking Bolt twice."
      },
      {
        "Name": "Greatsword",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:10 (2d6 + 3) slashing damage plus 3 (1d6) lightning damage."
      },
      {
        "Name": "Shocking Bolt",
        "Text": "Ranged Spell 4 to hit (with advantage on the attack roll if the target is wearing armor made of metal), range 60 ft., one target. Hit:10 (3d6) lightning damage."
      }
    ]
  },
  {
    "name": "Szoldar Szoldarovich",
    "size": "M",
    "type": "humanoid (human)",
    "alignment": "Neutral",
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
    ],
    "isNpc": true
  },
  {
    "name": "The Abbot",
    "size": "M",
    "type": "celestial",
    "alignment": "Lawful Evil",
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
        "Text": "The deva's weapon attacks are magical. When The Abbot hits with any weapon, the weapon deals an extra 4d8 radiant damage (included in the attack)."
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
    ],
    "isNpc": true
  },
  {
    "name": "The Mad Mage of Mount Baratok",
    "size": "M",
    "type": "humanoid (human)",
    "alignment": "Chaotic Neutral",
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
        "Text": "The mad mage is an 18th-level spellcaster. His spellcasting ability is Intelligence (spell save DC 17, +9 to hit with spell attacks). He can cast disguise self and invisibility at will and has the following wizard spells prepared:<br>At will: <em>disguise self, invisibility</em><br><br>Cantrips (at will): <em>fire bolt, light, mage hand, prestidigitation, shocking grasp</em><br>1st (1 slots): <em>detect magic, mage armor, magic missile, shield</em><br>2nd (2 slots): <em>mirror image, misty step, web</em><br>3rd (3 slots): <em>counterspell, fly, lightning bolt</em><br>4th (4 slots): <em>Mordenkainen's faithful hound, polymorph, stoneskin</em><br>5th (5 slots): <em>Bigby's hand, cone of cold, scrying</em><br>6th (6 slots): <em>true seeing</em><br>7th (7 slots): <em>Mordenkainen's magnificent mansion</em><br>8th (8 slots): <em>mind blank</em><br>9th (9 slots): <em>time stop</em>"
      }
    ],
    "action": [
      {
        "Name": "Dagger",
        "Text": "Melee or Ranged Weapon 6 to hit, reach 5 ft. or range 20/60 ft., one target. Hit:4 (1d4 + 2) piercing damage."
      }
    ],
    "isNpc": true
  },
  {
    "name": "Thornboldt \"Thorn\" Durst",
    "size": "S",
    "type": "undead",
    "alignment": "Lawful Good",
    "ac": 11,
    "hp": 35,
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
    "languages": "Common",
    "cr": "3",
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
        "Text": "Each non-undead creature within 60 feet of Thorn that can see it must succeed on a 13 Wisdom saving throw or be frightened for 1 minute. If the save fails by 5 or more, the target also ages 1d4 × 10 years. A frightened target can repeat the saving throw at the end of each of its turns, ending the frightened condition on itself on a success. If a target's saving throw is successful or the effect ends for it, the target is immune to this ghost's Horrifying Visage for the next 24 hours. The aging effect can be reversed with a greater restoration spell, but only within 24 hours of it occurring."
      },
      {
        "Name": "Possession (Recharge 6)",
        "Text": "One humanoid that the ghost can see within 5 feet of it must succeed on a 13 Charisma saving throw or be possessed by the ghost; the ghost then disappears, and the target is incapacitated and loses control of its body. The ghost now controls the body but doesn't deprive the target of awareness. The ghost can't be targeted by any attack, spell, or other effect, except ones that turn undead, and it retains its alignment, Intelligence, Wisdom, Charisma, and immunity to being charmed and frightened. It otherwise uses the possessed target's statistics, but doesn't gain access to the target's knowledge, class features, or proficiencies."
      }
    ],
    "environment": [
      "underdark",
      "urban"
    ],
    "isNpc": true
  },
  {
    "name": "Tree Blight",
    "size": "H",
    "type": "plant",
    "alignment": "Neutral Evil",
    "ac": "15 natural armor",
    "hp": 149,
    "speed": "Walk 30",
    "str": 23,
    "dex": 10,
    "con": 20,
    "int": 6,
    "wis": 10,
    "cha": 3,
    "senses": "blindsight 60 ft. (blind beyond this radius)",
    "passive": 10,
    "conditionImmune": "blinded, deafened",
    "languages": "understands Common and Druidic but doesn't speak",
    "cr": "7",
    "trait": [
      {
        "Name": "False Appearance",
        "Text": "While the blight remains motionless, it is indistinguishable from a dead tree."
      },
      {
        "Name": "Siege Monster",
        "Text": "The blight deals double damage to objects and structures."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The blight makes four attacks: two with its branches and two with its grasping roots. If it has a target grappled, the blight can also make a bite attack against that target as a bonus action."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 9 to hit, reach 5 ft., one target. Hit:19 (3d8 + 6) piercing damage."
      },
      {
        "Name": "Branch",
        "Text": "Melee Weapon 9 to hit, reach 15 ft., one target. Hit:16 (3d6 + 6) bludgeoning damage."
      },
      {
        "Name": "Grasping Root",
        "Text": "Melee Weapon 9 to hit, reach 15 ft., one creature not grappled by the blight. Hit:The target is grappled (escape 15). Until the grapple ends, the target takes 9 (1d6 + 6) bludgeoning damage at the start of each of its turns. The root has AC 15 and can be severed by dealing 6 slashing damage or more to it at once. Cutting the root doesn't hurt the blight, but ends the grapple."
      }
    ]
  },
  {
    "name": "Vasilka",
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
        "Text": "Whenever Vasilka starts its turn with 40 hit points or fewer, roll a d6. On a 6, the golem goes berserk. On each of its turns while berserk, the golem attacks the nearest creature it can see. If no creature is near enough to move to and attack, the golem attacks an object, with preference for an object smaller than itself. Once the golem goes berserk, it continues to do so until it is destroyed or regains all its hit points.<br>The golem's creator, if within 60 feet of the berserk golem, can try to calm it by speaking firmly and persuasively. The golem must be able to hear its creator, who must take an action to make a 15 Charisma (Persuasion) check. If the check succeeds, the golem ceases being berserk. If it takes damage while still at 40 hit points or fewer, the golem might go berserk again."
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
    ],
    "isNpc": true
  },
  {
    "name": "Victor Vallakovich",
    "size": "M",
    "type": "humanoid (human)",
    "alignment": "Neutral Evil",
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
    "isNpc": true,
    "trait": [
      {
        "Name": "Spellcasting",
        "Text": "The mage is a 9th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 14, +6 to hit with spell attacks). The mage has the following wizard spells prepared:<br><br>Cantrips (at will): <em>fire bolt, light, mage hand, prestidigitation</em><br>1st (1 slots): <em>detect magic, mage armor, magic missile, shield</em><br>2nd (2 slots): <em>misty step, suggestion</em><br>3rd (3 slots): <em>counterspell, fireball, fly</em><br>4th (4 slots): <em>greater invisibility, ice storm</em><br>5th (5 slots): <em>cone of cold</em>"
      }
    ]
  },
  {
    "name": "Vilnius",
    "size": "M",
    "type": "humanoid (human)",
    "alignment": "Neutral Evil",
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
    "isNpc": true,
    "trait": [
      {
        "Name": "Spellcasting",
        "Text": "The mage is a 9th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 14, +6 to hit with spell attacks). The mage has the following wizard spells prepared:<br><br>Cantrips (at will): <em>fire bolt, light, mage hand, prestidigitation</em><br>1st (1 slots): <em>detect magic, mage armor, magic missile, shield</em><br>2nd (2 slots): <em>misty step, suggestion</em><br>3rd (3 slots): <em>counterspell, fireball, fly</em><br>4th (4 slots): <em>greater invisibility, ice storm</em><br>5th (5 slots): <em>cone of cold</em>"
      }
    ]
  },
  {
    "name": "Vistana Assassin",
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
    "name": "Vistana Bandit",
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
    "name": "Vistana Bandit Captain",
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
    "name": "Vistana Commoner",
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
    "name": "Vistana Guard",
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
    "name": "Vistana Spy",
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
    "name": "Vistana Thug",
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
    "name": "Vladimir Horngaard",
    "isNpc": true,
    "size": "M",
    "type": "undead",
    "alignment": "Lawful Evil",
    "ac": "17 half plate armor",
    "hp": 192,
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
    "languages": "Common, Draconic",
    "cr": "7",
    "trait": [
      {
        "Name": "Regeneration",
        "Text": "Vladimir regains 10 hit points at the start of his turn. If he takes fire or radiant damage, this trait doesn't function at the start of his next turn. Vladimir's body is destroyed only if he starts his turn with 0 hit points and doesn't regenerate."
      },
      {
        "Name": "Rejuvenation",
        "Text": "When Vladimir's body is destroyed, his soul lingers. After 24 hours, the soul inhabits and animates another corpse on the same plane of existence and regains all its hit points. While the soul is bodiless, a wish spell can be used to force the soul to go to the afterlife and not return."
      },
      {
        "Name": "Special Equipment",
        "Text": "Vladimir wields a +2 greatsword with a hilt sculpted to resemble silver dragon wings and a pommel shaped like a silver dragon's head clutching a black opal between its teeth. "
      },
      {
        "Name": "Turn Immunity",
        "Text": "Vladimir is immune to effects that turn undead."
      },
      {
        "Name": "Vengeful Tracker",
        "Text": "Vladimir knows the distance to and direction of Strahd, even if Strahd and Vladimir are on different planes of existence. If Strahd is destroyed, Vladimir knows."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "Vladimir makes two fist attacks or two attacks with his +2 Greatsword."
      },
      {
        "Name": "Fist",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:11 (2d6 + 4) bludgeoning damage. Strahd, the target of Vladimir's sworn vengeance, takes an extra 14 (4d6) bludgeoning damage. Instead of dealing damage, Vladimir can grapple the target (escape 14) provided the target is Large or smaller."
      },
      {
        "Name": "Greatsword +2",
        "Text": "Melee Weapon 9 to hit, reach 5 ft., one target. Hit:20 (4d6 + 6) slashing damage. Against Strahd, Vladimir deals an extra 14 (4d6) slashing damage with this weapon."
      },
      {
        "Name": "Vengeful Glare",
        "Text": "Vladimir can target Strahd within 30 feet provided he can see Strahd. Strahd must make a 15 Wisdom saving throw. One a failure, Strahd is paralyzed until Vladimir deals damage to him, or until the end of Vladimir's next turn. When the paralysis ends, Strahd is frightened of Vladimir for 1 minute. Strahd can repeat the saving throw at the end of each of his turns, with disadvantage if he can see Vladimir, ending the frightened condition on itself on a success."
      }
    ]
  },
  {
    "name": "Volenta Popofsky",
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
        "Text": "The vampire regains 10 hit points at the start of its turn if it has at least 1 hit point and isn't in sunlight or running water. If Volenta takes radiant damage or damage from holy water, this trait doesn't function at the start of the vampire's next turn."
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
    ],
    "isNpc": true
  },
  {
    "name": "Walking Corpse",
    "size": "M",
    "type": "humanoid (any race)",
    "alignment": "Any",
    "ac": 10,
    "hp": 4,
    "speed": "Walk 20",
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
    ],
    "conditionImmune": "charmed, frightened",
    "trait": [
      {
        "Name": "Violent Death",
        "Text": "When a corpse is reduced to 0 hit points, it splits open, disgorging a swarm of poisonous snakes. The snakes are hungry and fight until slain."
      }
    ]
  },
  {
    "name": "Wereraven",
    "size": "M",
    "type": "humanoid (human, shapechanger)",
    "alignment": "Lawful Good",
    "ac": 12,
    "hp": 31,
    "speed": "Walk 30 (fly 50 ft. in raven and hybrid forms)",
    "str": 10,
    "dex": 15,
    "con": 11,
    "int": 13,
    "wis": 15,
    "cha": 14,
    "skill": "Insight +4, Perception +6",
    "passive": 16,
    "languages": "Common (can't speak in raven form)",
    "cr": "2",
    "trait": [
      {
        "Name": "Shapechanger",
        "Text": "The wereraven can use its action to polymorph into a raven-humanoid hybrid or into a raven, or back into its human form. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its human form if it dies."
      },
      {
        "Name": "Mimicry",
        "Text": "The wereraven can mimic simple sounds it has heard, such as a person whispering, a baby crying, or an animal chittering. A creature that hears the sounds can tell they are imitations with a successful 10 Wisdom (Insight) check."
      },
      {
        "Name": "Regeneration",
        "Text": "The wereraven regains 10 hit points at the start of its turn. If the wereraven takes damage from a silvered weapon or a spell, this trait doesn't function at the start of the wereraven's next turn. The wereraven dies only if it starts its turn with 0 hit points and doesn't regenerate."
      }
    ],
    "action": [
      {
        "Name": "Multiattack (Human or Hybrid Form Only)",
        "Text": "The wereraven makes two weapon attacks, one of which can be with its hand crossbow."
      },
      {
        "Name": "Beak (Raven or Hybrid Form Only)",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:1 piercing damage in raven form, or 4 (1d4 + 2) piercing damage in hybrid form. If the target is humanoid, it must succeed on a 10 Constitution saving throw or be cursed with wereraven lycanthropy."
      },
      {
        "Name": "Shortsword (Human or Hybrid Form Only)",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:5 (1d6 + 2) piercing damage."
      },
      {
        "Name": "Hand Crossbow (Human or Hybrid Form Only)",
        "Text": "Ranged Weapon 4 to hit, range 30/120 ft., one target. Hit:5 (1d6 + 2) piercing damage."
      }
    ]
  },
  {
    "name": "Yevgeni Krushkin",
    "size": "M",
    "type": "humanoid (human)",
    "alignment": "Neutral",
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
    ],
    "isNpc": true
  },
  {
    "name": "Zuleika Toranescu",
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
    ],
    "isNpc": true
  },
  {
    "name": "Zygfrek Belview",
    "size": "M",
    "type": "humanoid (mongrelfolk)",
    "alignment": "Any",
    "ac": "11 natural armor",
    "hp": 26,
    "speed": "Walk 20",
    "str": 12,
    "dex": 9,
    "con": 15,
    "int": 9,
    "wis": 10,
    "cha": 6,
    "skill": "Deception +2, Perception +2, Stealth +3",
    "passive": 12,
    "languages": "Common",
    "cr": "1/4",
    "trait": [
      {
        "Name": "Mimicry",
        "Text": "The mongrelfolk can mimic any sounds it has heard, including voices. A creature that hears the sounds can tell they are imitations with a successful 12 Wisdom (Insight) check."
      },
      {
        "Name": "Darkvision",
        "Text": "The mongrelfolk has darkvision out to a range of 60 feet."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The mongrelfolk makes two attacks: one with its bite and one with its claw or dagger."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one target. Hit:3 (1d4 + 1) piercing damage."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one target. Hit:3 (1d4 + 1) slashing damage."
      },
      {
        "Name": "Dagger",
        "Text": "Melee or Ranged Weapon 3 to hit, reach 5 ft. or range 20/60 ft., one target. Hit:3 (1d4 + 1) piercing damage."
      }
    ],
    "isNpc": true,
    "senses": "darkvision 60 ft."
  }
]

