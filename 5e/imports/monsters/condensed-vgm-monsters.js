
export let volos = [
  {
    "name": "Abjurer",
    "size": "M",
    "type": "humanoid (any race)",
    "alignment": "Any",
    "ac": 12,
    "hp": 84,
    "speed": "Walk 30",
    "str": 9,
    "dex": 14,
    "con": 14,
    "int": 18,
    "wis": 12,
    "cha": 11,
    "save": "Int +8, Wis +5",
    "skill": "Arcana +8, History +8",
    "passive": 11,
    "languages": "any four languages",
    "cr": "9",
    "trait": [
      {
        "Name": "Arcane Ward",
        "Text": "The abjurer has a magical ward that has 30 hit points. Whenever the abjurer takes damage, the ward takes the damage instead. If the ward is reduced to 0 hit points, the abjurer takes any remaining damage. When the abjurer casts an abjuration spell of 1st level or higher, the ward regains a number of hit points equal to twice the level of the spell."
      },
      {
        "Name": "Spellcasting",
        "Text": "The abjurer is a 13th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 16, +8 to hit with spell attacks). The abjurer has the following wizard spells prepared:<br><br>Cantrips (at will): <em>blade ward, dancing lights, mending, message, ray of frost</em><br>1st (1 slots): <em>alarm*, mage armor, magic missile, shield*</em><br>2nd (2 slots): <em>arcane lock*, invisibility</em><br>3rd (3 slots): <em>counterspell*, dispel magic*, fireball</em><br>4th (4 slots): <em>banishment*, stoneskin*</em><br>5th (5 slots): <em>cone of cold, wall of force</em><br>6th (6 slots): <em>flesh to stone, globe of invulnerability*</em><br>7th (7 slots): <em>symbol*, teleport</em>"
      }
    ],
    "action": [
      {
        "Name": "Quarterstaff",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one target. Hit:2 (1d6 - 1) bludgeoning damage, or 3 (1d8 - 1) bludgeoning damage if used with two hands."
      }
    ],
    "environment": [
      "urban"
    ]
  },
  {
    "name": "Alhoon",
    "size": "M",
    "type": "undead",
    "alignment": "Lawful Any Non-Good Chaotic Evil",
    "ac": "15 natural armor",
    "hp": 120,
    "speed": "Walk 30",
    "str": 11,
    "dex": 12,
    "con": 16,
    "int": 19,
    "wis": 17,
    "cha": 17,
    "save": "Con +7, Int +8, Wis +7, Cha +7",
    "skill": "Arcana +8, Deception +7, History +8, Insight +7, Perception +7, Stealth +5",
    "senses": "truesight 120 ft.",
    "passive": 17,
    "resist": [
      "cold",
      "lightning",
      "necrotic"
    ],
    "immune": "poison, bludgeoning, piercing, slashing from nonmagical attacks",
    "conditionImmune": "charmed, exhaustion, frightened, paralyzed, poisoned",
    "languages": "Deep Speech, Undercommon, telepathy 120 ft.",
    "cr": "10",
    "trait": [
      {
        "Name": "Magic Resistance",
        "Text": "The alhoon has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Turn Resistance",
        "Text": "The alhoon has advantage on saving throws against any effect that turns undead."
      },
      {
        "Name": "Innate Spellcasting (Psionics)",
        "Text": "<br>1/day each: <em>dominate monster, plane shift (self only)</em>"
      },
      {
        "Name": "Spellcasting",
        "Text": "The alhoon is a 12th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 16, +8 to hit with spell attacks). The alhoon has the following wizard spells prepared:<br><br>Cantrips (at will): <em>chill touch, dancing lights, mage hand, prestidigitation, shocking grasp</em><br>1st (1 slots): <em>detect magic, disguise self, magic missile, shield</em><br>2nd (2 slots): <em>invisibility, mirror image, scorching ray</em><br>3rd (3 slots): <em>counterspell, fly, lightning bolt</em><br>4th (4 slots): <em>confusion, Evard's black tentacles, phantasmal killer</em><br>5th (5 slots): <em>modify memory, wall of force</em><br>6th (6 slots): <em>disintegrate, globe of invulnerability</em>"
      }
    ],
    "action": [
      {
        "Name": "Chilling Grasp",
        "Text": "Melee Spell 8 to hit, reach 5 ft., one target. Hit:10 (3d6) cold damage."
      },
      {
        "Name": "Mind Blast (Recharge 5-6)",
        "Text": "The alhoon magically emits psychic energy in a 60-foot cone. Each creature in that area must succeed on a 16 Intelligence saving throw or take 22 (4d8 + 4) psychic damage and be stunned for 1 minute. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Annis Hag",
    "size": "L",
    "type": "fey",
    "alignment": "Chaotic Evil",
    "ac": "17 natural armor",
    "hp": 75,
    "speed": "Walk 40",
    "str": 21,
    "dex": 12,
    "con": 14,
    "int": 13,
    "wis": 14,
    "cha": 15,
    "save": "Con +5",
    "skill": "Deception +5, Perception +5",
    "senses": "darkvision 60 ft.",
    "passive": 15,
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
    "languages": "Common, Giant, Sylvan",
    "cr": {
      "cr": "6",
      "coven": "8"
    },
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The annis makes three attacks: one with her bite and two with her claws."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 8 to hit, reach 5 ft., one target. Hit:15 (3d6 + 5) piercing damage."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 8 to hit, reach 5 ft., one target. Hit:15 (3d6 + 5) slashing damage."
      },
      {
        "Name": "Crushing Hug",
        "Text": "Melee Weapon 8 to hit, reach 5 ft., one target. Hit:36 (9d6 + 5) bludgeoning damage, and the target is grappled (escape 15) if it is a Large or smaller creature. Until the grapple ends, the target takes 36 (9d6 + 5) bludgeoning damage at the start of each of the hag's turns. The hag can't make attacks while grappling a creature in this way."
      }
    ],
    "environment": [
      "mountain",
      "hill"
    ],
    "trait": [
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>3/day each: <em>disguise self (including the form of a Medium humanoid), fog cloud</em>"
      }
    ]
  },
  {
    "name": "Apprentice Wizard",
    "size": "M",
    "type": "humanoid (any race)",
    "alignment": "Any",
    "ac": 10,
    "hp": 9,
    "speed": "Walk 30",
    "str": 10,
    "dex": 10,
    "con": 10,
    "int": 14,
    "wis": 10,
    "cha": 11,
    "skill": "Arcana +4, History +4",
    "passive": 10,
    "languages": "any one language (usually Common)",
    "cr": "1/4",
    "action": [
      {
        "Name": "Dagger",
        "Text": "Melee or Ranged Weapon 2 to hit, reach 5 ft. or range 20/60 ft., one target. Hit:2 (1d4) piercing damage."
      }
    ],
    "environment": [
      "urban"
    ],
    "trait": [
      {
        "Name": "Spellcasting",
        "Text": "The apprentice is a 1st-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 12, +4 to hit with spell attacks). It has the following wizard spells prepared:<br><br>Cantrips (at will): <em>fire bolt, mending, prestidigitation</em><br>1st (1 slots): <em>burning hands, disguise self, shield</em>"
      }
    ]
  },
  {
    "name": "Archdruid",
    "size": "M",
    "type": "humanoid (any race)",
    "alignment": "Any",
    "ac": "16 hide armor",
    "hp": 132,
    "speed": "Walk 30",
    "str": 10,
    "dex": 14,
    "con": 12,
    "int": 12,
    "wis": 20,
    "cha": 11,
    "save": "Int +5, Wis +9",
    "skill": "Medicine +9, Nature +5, Perception +9",
    "passive": 19,
    "languages": "Druidic plus any two languages",
    "cr": "12",
    "action": [
      {
        "Name": "Scimitar",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:5 (1d6 + 2) slashing damage."
      },
      {
        "Name": "Change Shape (2/Day)",
        "Text": "The archdruid magically polymorphs into a beast or elemental with a challenge rating of 6 or less, and can remain in this form for up to 9 hours. The archdruid can choose whether its equipment falls to the ground, melds with its new form, or is worn by the new form. The archdruid reverts to its true form if it dies or falls unconscious. The archdruid can revert to its true form using a bonus action on its turn."
      }
    ],
    "environment": [
      "forest",
      "mountain",
      "swamp"
    ],
    "trait": [
      {
        "Name": "Spellcasting",
        "Text": "The archdruid is an 18th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 17, +9 to hit with spell attacks). It has the following druid spells prepared:<br><br>Cantrips (at will): <em>druidcraft, mending, poison spray, produce flame</em><br>1st (1 slots): <em>cure wounds, entangle, faerie fire, speak with animals</em><br>2nd (2 slots): <em>animal messenger, beast sense, hold person</em><br>3rd (3 slots): <em>conjure animals, meld into stone, water breathing</em><br>4th (4 slots): <em>dominate beast, locate creature, stoneskin, wall of fire</em><br>5th (5 slots): <em>commune with nature, mass cure wounds, tree stride</em><br>6th (6 slots): <em>heal, heroes' feast, sunbeam</em><br>7th (7 slots): <em>fire storm</em><br>8th (8 slots): <em>animal shapes</em><br>9th (9 slots): <em>foresight</em>"
      }
    ]
  },
  {
    "name": "Archer",
    "size": "M",
    "type": "humanoid (any race)",
    "alignment": "Any",
    "ac": "16 studded leather armor",
    "hp": 75,
    "speed": "Walk 30",
    "str": 11,
    "dex": 18,
    "con": 16,
    "int": 11,
    "wis": 13,
    "cha": 10,
    "skill": "Acrobatics +6, Perception +5",
    "passive": 15,
    "languages": "any one language (usually Common)",
    "cr": "3",
    "trait": [
      {
        "Name": "Archer's Eye (3/Day)",
        "Text": "As a bonus action, the archer can add 1d10 to its next attack or damage roll with a longbow or shortbow."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The archer makes two attacks with its longbow."
      },
      {
        "Name": "Shortsword",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:7 (1d6 + 4) piercing damage."
      },
      {
        "Name": "Longbow",
        "Text": "Ranged Weapon 6 to hit, range 150/600 ft., one target. Hit:8 (1d8 + 4) piercing damage."
      }
    ],
    "environment": [
      "forest",
      "urban"
    ]
  },
  {
    "name": "Aurochs",
    "size": "L",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": "11 natural armor",
    "hp": 38,
    "speed": "Walk 50",
    "str": 20,
    "dex": 10,
    "con": 19,
    "int": 2,
    "wis": 12,
    "cha": 5,
    "passive": 11,
    "cr": "2",
    "trait": [
      {
        "Name": "Charge",
        "Text": "If the aurochs moves at least 20 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 9 (2d8) piercing damage. If the target is a creature, it must succeed on a 15 Strength saving throw or be knocked prone."
      }
    ],
    "action": [
      {
        "Name": "Gore",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:14 (2d8 + 5) piercing damage."
      }
    ],
    "environment": [
      "mountain",
      "grassland",
      "hill"
    ]
  },
  {
    "name": "Babau",
    "size": "M",
    "type": "fiend (demon)",
    "alignment": "Chaotic Evil",
    "ac": "16 natural armor",
    "hp": 82,
    "speed": "Walk 40",
    "str": 19,
    "dex": 16,
    "con": 16,
    "int": 11,
    "wis": 12,
    "cha": 13,
    "skill": "Perception +5, Stealth +5",
    "senses": "darkvision 120 ft.",
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
    "conditionImmune": "poisoned",
    "languages": "Abyssal",
    "cr": "4",
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The babau makes two melee attacks. It can also use Weakening Gaze before or after making these attacks."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:8 (1d8 + 4) slashing damage."
      },
      {
        "Name": "Spear",
        "Text": "Melee or Ranged Weapon 6 to hit, reach 5 ft. or range 20/60 ft., one target. Hit:7 (1d6 + 4) piercing damage, or 8 (1d8 + 4) piercing damage when used with two hands to make a melee attack."
      },
      {
        "Name": "Weakening Gaze",
        "Text": "The babau targets one creature that it can see within 20 feet of it. The target must make a 13 Constitution saving throw. On a failed save, the target deals only half damage with weapon attacks that use Strength for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      }
    ],
    "environment": [
      "underdark",
      "urban"
    ],
    "trait": [
      {
        "Name": "Innate Spellcasting",
        "Text": "The babau's innate spellcasting ability is Wisdom (spell save DC 11). The babau can innately cast the following spells, requiring no material components:<br>At will: <em>darkness, dispel magic, fear, heat metal, levitate</em>"
      }
    ]
  },
  {
    "name": "Banderhobb",
    "size": "L",
    "type": "monstrosity",
    "alignment": "Neutral Evil",
    "ac": "15 natural armor",
    "hp": 84,
    "speed": "Walk 30",
    "str": 20,
    "dex": 12,
    "con": 20,
    "int": 11,
    "wis": 14,
    "cha": 8,
    "skill": "Athletics +8, Stealth +7",
    "senses": "darkvision 120 ft.",
    "passive": 12,
    "conditionImmune": "charmed, frightened",
    "languages": "Common and the languages of its creator but can't speak",
    "cr": "5",
    "trait": [
      {
        "Name": "Resonant Connection",
        "Text": "If the banderhobb has even a tiny piece of a creature or an object in its possession, such as a lock of hair or a splinter of wood, it knows the most direct route to that creature or object if it is within 1 mile of the banderhobb."
      },
      {
        "Name": "Shadow Stealth",
        "Text": "While in dim light or darkness, the banderhobb can take the Hide action as a bonus action."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 8 to hit, reach 5 ft., one target. Hit:22 (5d6 + 5) piercing damage, and the target is grappled (escape 15) if it is a Large or smaller creature. Until this grapple ends, the target is restrained, and the banderhobb can't use its bite attack or tongue attack on another target."
      },
      {
        "Name": "Tongue",
        "Text": "Melee Weapon 8 to hit, reach 15 ft., one target. Hit:10 (3d6) necrotic damage, and the target must make a 15 Strength saving throw. On a failed save, the target is pulled to a space within 5 feet of the banderhobb, which can use a bonus action to make a bite attack against the target."
      },
      {
        "Name": "Swallow",
        "Text": "The banderhobb makes a bite attack against a Medium or smaller creature it is grappling. If the attack hits, the target is swallowed, and the grapple ends. The swallowed creature is blinded and restrained, it has total cover against attacks and other effects outside the banderhobb and it takes 10 (3d6) necrotic damage at the start of each of the banderhobb's turns. A creature reduced to 0 hit points in this way stops taking necrotic damage and becomes stable."
      },
      {
        "Name": "Shadow Step",
        "Text": "The banderhobb magically teleports up to 30 feet to an unoccupied space of dim light or darkness that it can see. Before or after teleporting, it can make a bite or tongue attack."
      }
    ],
    "environment": [
      "urban"
    ]
  },
  {
    "name": "Bard",
    "size": "M",
    "type": "humanoid (any race)",
    "alignment": "Any",
    "ac": "15 chain shirt",
    "hp": 44,
    "speed": "Walk 30",
    "str": 11,
    "dex": 14,
    "con": 12,
    "int": 10,
    "wis": 13,
    "cha": 14,
    "save": "Dex +4, Wis +3",
    "skill": "Acrobatics +4, Perception +5, Performance +6",
    "passive": 15,
    "languages": "any two languages",
    "cr": "2",
    "trait": [
      {
        "Name": "Song of Rest",
        "Text": "The bard can perform a song while taking a short rest. Any ally who hears the song regains an extra 1d6 hit points if it spends any Hit Dice to regain hit points at the end of that rest. The bard can confer this benefit on itself as well."
      },
      {
        "Name": "Taunt (2/Day)",
        "Text": "The bard can use a bonus action on its turn to target one creature within 30 feet of it. If the target can hear the bard, the target must succeed on a 12 Charisma saving throw or have disadvantage on ability checks, attack rolls, and saving throws until the start of the bard's next turn."
      },
      {
        "Name": "Spellcasting",
        "Text": "The bard is a 4th-level spellcaster. Its spellcasting ability is Charisma (spell save DC 12, +4 to hit with spell attacks). It has the following bard spells prepared:<br><br>Cantrips (at will): <em>friends, mage hand, vicious mockery</em><br>1st (1 slots): <em>charm person, healing word, heroism, sleep, thunderwave</em><br>2nd (2 slots): <em>invisibility, shatter</em>"
      }
    ],
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
    "name": "Barghest",
    "size": "L",
    "type": "fiend (shapechanger)",
    "alignment": "Neutral Evil",
    "ac": "17 natural armor",
    "hp": 90,
    "speed": "Walk 60 (30 ft. in goblin form)",
    "str": 19,
    "dex": 15,
    "con": 14,
    "int": 13,
    "wis": 12,
    "cha": 14,
    "skill": "Deception +4, Intimidation +4, Perception +5, Stealth +4",
    "senses": "blindsight 60 ft., darkvision 60 ft.",
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
    "immune": "acid, poison",
    "conditionImmune": "poisoned",
    "languages": "Abyssal, Common, Goblin, Infernal, telepathy 60 ft.",
    "cr": "4",
    "trait": [
      {
        "Name": "Shapechanger",
        "Text": "The barghest can use its action to polymorph into a Small goblin or back into its true form. Other than its size and speed, its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. The barghest reverts to its true form if it dies."
      },
      {
        "Name": "Fire Banishment",
        "Text": "When the barghest starts its turn engulfed in flames that are at least 10 feet high or wide, it must succeed on a 15 Charisma saving throw or be instantly banished to Gehenna. Instantaneous bursts of flame (such as a red dragon's breath or a fireball spell) don't have this effect on the barghest."
      },
      {
        "Name": "Keen Smell",
        "Text": "The barghest has advantage on Wisdom (Perception) checks that rely on smell."
      },
      {
        "Name": "Soul Feeding",
        "Text": "A barghest can feed on the corpse of a humanoid that it killed that has been dead for less than 10 minutes, devouring both flesh and soul in doing so. This feeding takes at least 1 minute, and it destroys the victim's body. The victim's soul is trapped in the barghest for 24 hours, after which time it is digested. If the barghest dies before the soul is digested, the soul is released."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day each: <em>charm person, dimension door, suggestion</em>"
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:13 (2d8 + 4) piercing damage."
      },
      {
        "Name": "Claws",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:8 (1d8 + 4) slashing damage."
      }
    ],
    "environment": [
      "underdark",
      "mountain",
      "grassland",
      "forest",
      "hill"
    ]
  },
  {
    "name": "Bheur Hag",
    "size": "M",
    "type": "fey",
    "alignment": "Chaotic Evil",
    "ac": "17 natural armor",
    "hp": 91,
    "speed": "Walk 30",
    "str": 13,
    "dex": 16,
    "con": 14,
    "int": 12,
    "wis": 13,
    "cha": 16,
    "save": "Wis +4",
    "skill": "Nature +4, Perception +4, Stealth +6, Survival +4",
    "senses": "darkvision 60 ft.",
    "passive": 14,
    "immune": "cold",
    "languages": "Auran, Common, Giant",
    "cr": {
      "cr": "7",
      "coven": "9"
    },
    "trait": [
      {
        "Name": "Graystaff Magic",
        "Text": "The hag carries a graystaff, a length of gray wood that is a focus for her inner power. She can ride the staff as if it were a broom of flying. While holding the staff, she can cast additional spells with her Innate Spellcasting trait (these spells are marked with an asterisk). If the staff is lost or destroyed, the hag must craft another, which takes a year and a day. Only a bheur hag can use a graystaff."
      },
      {
        "Name": "Ice Walk",
        "Text": "The hag can move across and climb icy surfaces without needing to make an ability check. Additionally, difficult terrain composed of ice or snow doesn't cost her extra moment."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day each: <em>control weather</em>"
      }
    ],
    "action": [
      {
        "Name": "Slam",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:10 (2d8 + 1) bludgeoning damage plus 3 (1d6) cold damage."
      },
      {
        "Name": "Maddening Feast",
        "Text": "The hag feasts on the corpse of one enemy within 5 feet of her that died within the past minute. Each creature of the hag's choice that is within 60 feet of her and able to see her must succeed on a 15 Wisdom saving throw or be frightened of her for 1 minute. While frightened in this way, a creature is incapacitated, can't understand what others say, can't read, and speaks only in gibberish; the DM controls the creature's movement, which is erratic. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the hag's Maddening Feast for the next 24 hours."
      }
    ],
    "environment": [
      "arctic"
    ]
  },
  {
    "name": "Black Guard Drake",
    "size": "M",
    "type": "dragon",
    "alignment": "Unaligned",
    "ac": "14 natural armor",
    "hp": 52,
    "speed": "Walk 30, Swim 30",
    "str": 16,
    "dex": 11,
    "con": 16,
    "int": 4,
    "wis": 10,
    "cha": 7,
    "skill": "Perception +2",
    "senses": "darkvision 60 ft.",
    "passive": 12,
    "resist": [
      "acid"
    ],
    "languages": "understands Draconic but can't speak it",
    "cr": "2",
    "trait": [
      {
        "Name": "Amphibious",
        "Text": "The guard drake can breathe air and water."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The drake attacks twice, once with its bite and once with its tail."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:7 (1d8 + 3) piercing damage."
      },
      {
        "Name": "Tail",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:6 (1d6 + 3) bludgeoning damage."
      }
    ],
    "environment": [
      "swamp",
      "urban"
    ]
  },
  {
    "name": "Blackguard",
    "size": "M",
    "type": "humanoid (any race)",
    "alignment": "Lawful Any Non-Good Chaotic Any Non-Lawful Evil",
    "ac": "18 plate armor",
    "hp": 153,
    "speed": "Walk 30",
    "str": 18,
    "dex": 11,
    "con": 18,
    "int": 11,
    "wis": 14,
    "cha": 15,
    "save": "Wis +5, Cha +5",
    "skill": "Athletics +7, Deception +5, Intimidation +5",
    "passive": 12,
    "languages": "any one language (usually Common)",
    "cr": "8",
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The blackguard makes three attacks with its glaive or its shortbow."
      },
      {
        "Name": "Glaive",
        "Text": "Melee Weapon 7 to hit, reach 10 ft., one target. Hit:9 (1d10 + 4) slashing damage."
      },
      {
        "Name": "Shortbow",
        "Text": "Ranged Weapon 3 to hit, range 80/320 ft., one target. Hit:5 (1d6 + 2) piercing damage."
      },
      {
        "Name": "Dreadful Aspect (Recharges after a Short or Long Rest)",
        "Text": "The blackguard exudes magical menace. Each enemy within 30 feet of the blackguard must succeed on a 13 Wisdom saving throw or be frightened for 1 minute. If a frightened target ends its turn more than 30 feet away from the blackguard, the target can repeat the saving throw, ending the effect on itself on a success."
      }
    ],
    "environment": [
      "underdark",
      "urban"
    ],
    "trait": [
      {
        "Name": "Spellcasting",
        "Text": "The blackguard is a 10th-level spellcaster. Its spellcasting ability is Charisma (spell save DC 13, +5 to hit with spell attacks). It has the following paladin spells prepared:<br><br>1st (1 slots): <em>command, protection from evil and good, thunderous smite</em><br>2nd (2 slots): <em>branding smite, find steed</em><br>3rd (3 slots): <em>blinding smite, dispel magic</em>"
      }
    ]
  },
  {
    "name": "Blue Guard Drake",
    "size": "M",
    "type": "dragon",
    "alignment": "Unaligned",
    "ac": "14 natural armor",
    "hp": 52,
    "speed": "Walk 30, Burrow 20",
    "str": 16,
    "dex": 11,
    "con": 16,
    "int": 4,
    "wis": 10,
    "cha": 7,
    "skill": "Perception +2",
    "senses": "darkvision 60 ft.",
    "passive": 12,
    "resist": [
      "lightning"
    ],
    "languages": "understands Draconic but can't speak it",
    "cr": "2",
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The drake attacks twice, once with its bite and once with its tail."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:7 (1d8 + 3) piercing damage."
      },
      {
        "Name": "Tail",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:6 (1d6 + 3) bludgeoning damage."
      }
    ],
    "environment": [
      "desert",
      "urban"
    ]
  },
  {
    "name": "Bodak",
    "size": "M",
    "type": "undead",
    "alignment": "Chaotic Evil",
    "ac": "15 natural armor",
    "hp": 58,
    "speed": "Walk 30",
    "str": 15,
    "dex": 16,
    "con": 15,
    "int": 7,
    "wis": 12,
    "cha": 12,
    "skill": "Perception +4, Stealth +6",
    "senses": "darkvision 120 ft.",
    "passive": 14,
    "resist": [
      "cold",
      "fire",
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
    "immune": "lightning, poison",
    "conditionImmune": "charmed, frightened, poisoned",
    "languages": "Abyssal, the languages it knew in life",
    "cr": "6",
    "trait": [
      {
        "Name": "Aura of Annihilation",
        "Text": "The bodak can activate or deactivate this feature as a bonus action. While active, the aura deals 5 necrotic damage to any creature that ends its turn within 30 feet of the bodak. Undead and fiends ignore this effect."
      },
      {
        "Name": "Death Gaze",
        "Text": "When a creature that can see the bodak's eyes starts its turn within 30 feet of the bodak, the bodak can force it to make a 13 Constitution saving throw if the bodak isn't incapacitated and can see the creature. If the saving throw fails by 5 or more, the creature is reduced to 0 hit points, unless it is immune to the frightened condition. Otherwise, a creature takes 16 (3d10) psychic damage on a failed save."
      },
      {
        "Name": "Sunlight Hypersensitivity",
        "Text": "The bodak takes 5 radiant damage when it starts its turn in sunlight. While in sunlight, it has disadvantage on attack rolls and ability checks."
      }
    ],
    "action": [
      {
        "Name": "Fist",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:4 (1d4 + 2) bludgeoning damage plus 9 (2d8) necrotic damage."
      },
      {
        "Name": "Withering Gaze",
        "Text": "One creature that the bodak can see within 60 feet of it must make a 13 Constitution saving throw, taking 22 (4d10) necrotic damage on a failed save, or half as much damage on a successful one."
      }
    ],
    "environment": [
      "underdark",
      "swamp",
      "urban"
    ]
  },
  {
    "name": "Boggle",
    "size": "S",
    "type": "fey",
    "alignment": "Chaotic Neutral",
    "ac": 14,
    "hp": 18,
    "speed": "Walk 30, Climb 30",
    "str": 8,
    "dex": 18,
    "con": 13,
    "int": 6,
    "wis": 12,
    "cha": 7,
    "skill": "Perception +3, Sleight of hand +6, Stealth +6",
    "senses": "darkvision 60 ft.",
    "passive": 13,
    "resist": [
      "fire"
    ],
    "languages": "Sylvan",
    "cr": "1/8",
    "trait": [
      {
        "Name": "Boggle Oil",
        "Text": "The boggle excretes nonflammable oil from its pores. The boggle chooses whether the oil is slippery or sticky and can change the oil on its skin from one consistency to another as a bonus action.<br>Slippery Oil: While coated in slippery oil, the boggle gains advantage on Dexterity (Acrobatics) checks made to escape bonds, squeeze through narrow spaces, and end grapples.<br>Sticky Oil: While coated in sticky oil, the boggle gains advantage on Strength (Athletics) checks made to grapple and any ability check made to maintain a hold on another creature, a surface, or an object. The boggle can also climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
      },
      {
        "Name": "Dimensional Rift",
        "Text": "As a bonus action, the boggle can create an invisible and immobile rift within an opening or frame it can see within 5 feet of it, provided that the space is no bigger than 10 feet on any side. The dimensional rift bridges the distance between that space and any point within 30 feet of it that the boggle can see or specify by distance and direction (such as \"30 feet straight up\"). While next to the rift, the boggle can see through it and is considered to be next to the destination as well, and anything the boggle puts through the rift (including a portion of its body) emerges at the destination. Only the boggle can use the rift, and it lasts until the end of the boggle's next turn."
      },
      {
        "Name": "Uncanny Smell",
        "Text": "The boggle has advantage on Wisdom (Perception) checks that rely on smell."
      }
    ],
    "action": [
      {
        "Name": "Pummel",
        "Text": "Melee Weapon 1 to hit, reach 5 ft., one target. Hit:2 (1d6 - 1) bludgeoning damage."
      },
      {
        "Name": "Oil Puddle",
        "Text": "The boggle creates a puddle of oil that is either slippery or sticky (boggle's choice). The puddle is 1 inch deep and covers the ground in the boggle's space. The puddle is difficult terrain For all creatures except boggles and lasts for 1 hour."
      }
    ],
    "environment": [
      "underdark",
      "forest",
      "hill",
      "urban"
    ]
  },
  {
    "name": "Booyahg Booyahg Booyahg",
    "shortName": "Goblin",
    "_copy": {
      "name": "Mage",
      "source": "MM",
      "_trait": {
        "name": "Goblin",
        "source": "DMG"
      },
      "_mod": {
        "*": {
          "mode": "replaceTxt",
          "replace": "(^| )mage",
          "with": "$1goblin"
        },
        "trait": {
          "mode": "appendArr",
          "items": {
            "name": "Wild Magic",
            "entries": [
              "Each time the goblin casts a spell (including cantrips), there is an accompanying surge of wild magic; roll on the {@table Wild Magic Surge|PHB} table in the {@book Player's Handbook|PHB} to determine the wild magic effect."
            ]
          }
        }
      }
    }
  },
  {
    "name": "Booyahg Caster",
    "_copy": {
      "name": "Goblin",
      "source": "MM"
    },
    "spellcasting": [
      {
        "name": "Spellcasting",
        "headerEntries": [
          "The goblin can cast a randomly determined {@filter 1st-level wizard spell|spells|level=1|class=wizard} once per day. Intelligence is its spellcasting ability (spell save {@dc 10}, {@hit 2} to hit with spell attacks)."
        ],
        "ability": "int"
      }
    ]
  },
  {
    "name": "Booyahg Slave of the Archfey",
    "shortName": "Goblin",
    "_copy": {
      "name": "Warlock of the Archfey",
      "source": "VGM",
      "_trait": {
        "name": "Goblin",
        "source": "DMG"
      },
      "_mod": {
        "*": [
          {
            "mode": "replaceTxt",
            "replace": "The warlock",
            "with": "The goblin"
          },
          {
            "mode": "replaceTxt",
            "replace": "the warlock",
            "with": "the goblin"
          }
        ]
      }
    }
  },
  {
    "name": "Booyahg Slave of the Fiend",
    "shortName": "Goblin",
    "_copy": {
      "name": "Warlock of the Fiend",
      "source": "VGM",
      "_trait": {
        "name": "Goblin",
        "source": "DMG"
      },
      "_mod": {
        "*": [
          {
            "mode": "replaceTxt",
            "replace": "The warlock",
            "with": "The goblin"
          },
          {
            "mode": "replaceTxt",
            "replace": "the warlock",
            "with": "the goblin"
          }
        ]
      }
    }
  },
  {
    "name": "Booyahg Slave of the Great Old One",
    "shortName": "Goblin",
    "_copy": {
      "name": "Warlock of the Great Old One",
      "source": "VGM",
      "_trait": {
        "name": "Goblin",
        "source": "DMG"
      },
      "_mod": {
        "*": [
          {
            "mode": "replaceTxt",
            "replace": "The warlock",
            "with": "The goblin"
          },
          {
            "mode": "replaceTxt",
            "replace": "the warlock",
            "with": "the goblin"
          }
        ]
      }
    }
  },
  {
    "name": "Booyahg Whip",
    "_copy": {
      "name": "Goblin",
      "source": "MM",
      "_mod": {
        "trait": {
          "mode": "appendArr",
          "items": {
            "name": "Khurgorbaeyag's Gift",
            "entries": [
              "Khurgorbaeyag saw fit to gift this goblin with powers that enable it to dominate others. The goblin has {@dice 1d3} other {@creature goblin||goblins} that slavishly obey its orders."
            ]
          }
        }
      }
    }
  },
  {
    "name": "Booyahg Wielder",
    "_copy": {
      "name": "Goblin",
      "source": "MM",
      "_mod": {
        "trait": {
          "mode": "appendArr",
          "items": {
            "name": "Special Equipment",
            "entries": [
              "The goblin found a magic item (a {@item necklace of fireballs}, a {@item circlet of blasting}, or the like) and learned how to use it."
            ]
          }
        }
      }
    }
  },
  {
    "name": "Brontosaurus",
    "size": "G",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": "15 natural armor",
    "hp": 121,
    "speed": "Walk 30",
    "str": 21,
    "dex": 9,
    "con": 17,
    "int": 2,
    "wis": 10,
    "cha": 7,
    "save": "Con +6",
    "passive": 10,
    "cr": "5",
    "action": [
      {
        "Name": "Stomp",
        "Text": "Melee Weapon 8 to hit, reach 20 ft., one target. Hit:27 (5d8 + 5) bludgeoning damage, and the target must succeed on a 14 Strength saving throw or be knocked prone."
      },
      {
        "Name": "Tail",
        "Text": "Melee Weapon 8 to hit, reach 20 ft., one target. Hit:32 (6d8 + 5) bludgeoning damage."
      }
    ],
    "environment": [
      "grassland",
      "forest"
    ]
  },
  {
    "name": "Catoblepas",
    "size": "L",
    "type": "monstrosity",
    "alignment": "Unaligned",
    "ac": "14 natural armor",
    "hp": 84,
    "speed": "Walk 30",
    "str": 19,
    "dex": 12,
    "con": 21,
    "int": 3,
    "wis": 14,
    "cha": 8,
    "senses": "darkvision 60 ft.",
    "passive": 12,
    "cr": "5",
    "trait": [
      {
        "Name": "Keen Smell",
        "Text": "The catoblepas has advantage on Wisdom (Perception) checks that rely on smell."
      },
      {
        "Name": "Stench",
        "Text": "Any creature other than a catoblepas that starts its turn within 10 feet of the catoblepas must succeed on a 16 Constitution saving throw or be poisoned until the start of the creature's next turn. On a successful saving throw, the creature is immune to the stench of any catoblepas for 1 hour."
      }
    ],
    "action": [
      {
        "Name": "Tail",
        "Text": "Melee Weapon 7 to hit, reach 10 ft., one target. Hit:21 (5d6 + 4) bludgeoning damage, and the target must succeed on a 16 Constitution saving throw or be stunned until the start of the catoblepas's next turn."
      },
      {
        "Name": "Death Ray (Recharge 5-6)",
        "Text": "The catoblepas targets a creature that it can see within 30 feet of it. The target must make a 16 Constitution saving throw, taking 36 (8d8) necrotic damage on a failed save, or half as much damage on a successful one. If the saving throw fails by 5 or more, the target instead takes 64 necrotic damage. The target dies if reduced to 0 hit points by this ray."
      }
    ],
    "environment": [
      "swamp"
    ]
  },
  {
    "name": "Cave Fisher",
    "size": "M",
    "type": "monstrosity",
    "alignment": "Unaligned",
    "ac": "16 natural armor",
    "hp": 58,
    "speed": "Walk 20, Climb 20",
    "str": 16,
    "dex": 13,
    "con": 14,
    "int": 3,
    "wis": 10,
    "cha": 3,
    "skill": "Perception +2, Stealth +5",
    "senses": "blindsight 60 ft.",
    "passive": 12,
    "cr": "3",
    "trait": [
      {
        "Name": "Adhesive Filament",
        "Text": "The cave fisher can use its action to extend a sticky filament up to 60 feet, and the filament adheres to anything that touches it. A creature adhered to the filament is grappled by the cave fisher (escape 13), and ability checks made to escape this grapple have disadvantage. The filament can be attacked (AC 15; 5 hit points; immunity to poison and psychic damage), but a weapon that fails to sever it becomes stuck to it, requiring an action and a successful 13 Strength check to pull free. Destroying the filament causes no damage to the cave fisher, which can extrude a replacement filament on its next turn"
      },
      {
        "Name": "Flammable Blood",
        "Text": "If the cave fisher drops to half its hit points or fewer, it gains vulnerability to fire damage."
      },
      {
        "Name": "Spider Climb",
        "Text": "The cave fisher can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The cave fisher makes two attacks with its claws."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:10 (2d6 + 3) slashing damage."
      },
      {
        "Name": "Filament",
        "Text": "One creature grappled by the cave fisher's adhesive filament must make a 13 Strength saving throw, provided that the target weighs 200 pounds or less. On a failure, the target is pulled into an unoccupied space within 5 feet of the cave fisher, and the cave fisher makes a claw attack against it as a bonus action. Reeling up the target releases anyone else who was attached to the filament. Until the grapple ends on the target, the cave fisher can't extrude another filament."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Champion",
    "size": "M",
    "type": "humanoid (any race)",
    "alignment": "Any",
    "ac": "18 plate armor",
    "hp": 143,
    "speed": "Walk 30",
    "str": 20,
    "dex": 15,
    "con": 14,
    "int": 10,
    "wis": 14,
    "cha": 12,
    "save": "Str +9, Con +6",
    "skill": "Athletics +9, Intimidation +5, Perception +6",
    "passive": 16,
    "languages": "any one language (usually Common)",
    "cr": "9",
    "trait": [
      {
        "Name": "Indomitable (2/Day)",
        "Text": "The champion rerolls a failed saving throw."
      },
      {
        "Name": "Second Wind (Recharges after a Short or Long Rest)",
        "Text": "As a bonus action, the champion can regain 20 hit points."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The champion makes three attacks with its greatsword or its shortbow."
      },
      {
        "Name": "Greatsword",
        "Text": "Melee Weapon 9 to hit, reach 5 ft., one target. Hit:12 (2d6 + 5) slashing damage, plus 7 (2d6) slashing damage if the champion has more than half of its total hit points remaining."
      },
      {
        "Name": "Shortbow",
        "Text": "Ranged Weapon 6 to hit, range 80/320 ft., one target. Hit:5 (1d6 + 2) piercing damage, plus 7 (2d6) piercing damage if the champion has more than half of its total hit points remaining."
      }
    ],
    "environment": [
      "desert",
      "urban"
    ]
  },
  {
    "name": "Chitine",
    "size": "S",
    "type": "monstrosity",
    "alignment": "Chaotic Evil",
    "ac": "14 hide armor",
    "hp": 18,
    "speed": "Walk 30, Climb 30",
    "str": 10,
    "dex": 14,
    "con": 12,
    "int": 10,
    "wis": 10,
    "cha": 7,
    "skill": "Athletics +4, Stealth +4",
    "senses": "darkvision 60 ft.",
    "passive": 10,
    "languages": "Undercommon",
    "cr": "1/2",
    "trait": [
      {
        "Name": "Fey Ancestry",
        "Text": "The chitine has advantage on saving throws against being charmed, and magic can't put the chitine to sleep."
      },
      {
        "Name": "Sunlight Sensitivity",
        "Text": "While in sunlight, the chitine has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
      },
      {
        "Name": "Web Sense",
        "Text": "While in contact with a web, the chitine knows the exact location of any other creature in contact with the same web."
      },
      {
        "Name": "Web Walker",
        "Text": "The chitine ignores movement restrictions caused by webbing."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The chitine makes three attacks with its daggers."
      },
      {
        "Name": "Dagger",
        "Text": "Melee or Ranged Weapon 4 to hit, reach 5 ft. or range 20/60 ft., one target. Hit:4 (1d4 + 2) piercing damage."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Choldrith",
    "size": "M",
    "type": "monstrosity",
    "alignment": "Chaotic Evil",
    "ac": "15 studded leather armor",
    "hp": 66,
    "speed": "Walk 30, Climb 30",
    "str": 12,
    "dex": 16,
    "con": 12,
    "int": 11,
    "wis": 14,
    "cha": 10,
    "skill": "Athletics +5, Religion +2, Stealth +5",
    "senses": "darkvision 60 ft.",
    "passive": 12,
    "languages": "Undercommon",
    "cr": "3",
    "trait": [
      {
        "Name": "Fey Ancestry",
        "Text": "The choldrith has advantage on saving throws against being charmed, and magic can't put the choldrith to sleep."
      },
      {
        "Name": "Spider Climb",
        "Text": "The choldrith can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
      },
      {
        "Name": "Sunlight Sensitivity",
        "Text": "While in sunlight, the choldrith has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
      },
      {
        "Name": "Web Sense",
        "Text": "While in contact with a web, the choldrith knows the exact location of any other creature in contact with the same web."
      },
      {
        "Name": "Web Walker",
        "Text": "The choldrith ignores movement restrictions caused by webbing."
      },
      {
        "Name": "Spellcasting",
        "Text": "The choldrith is a 4th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 12, +4 to hit with spell attacks). The choldrith has the following cleric spells prepared:<br><br>Cantrips (at will): <em>guidance, mending, resistance, thaumaturgy</em><br>1st (1 slots): <em>bane, healing word, sanctuary, shield of faith</em><br>2nd (2 slots): <em>hold person, spiritual weapon (dagger)</em>"
      }
    ],
    "action": [
      {
        "Name": "Dagger",
        "Text": "Melee or Ranged Weapon 5 to hit, reach 5 ft. or range 20/60 ft., one target. Hit:5 (1d4 + 3) piercing damage plus 10 (3d6) poison damage."
      },
      {
        "Name": "Web (Recharge 5-6)",
        "Text": "Ranged Weapon 5 to hit, range 30/60 ft., one Large or smaller creature. Hit:The target is restrained by webbing. As an action, the restrained target can make a 11 Strength check, bursting the webbing on a success. The webbing can also be attacked and destroyed (AC 10; 5 hit points; vulnerability to fire damage; immunity to bludgeoning, poison, and psychic damage)."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Cloud Giant Smiling One",
    "size": "H",
    "type": "giant (cloud giant)",
    "alignment": "Chaotic Neutral",
    "ac": "15 natural armor",
    "hp": 262,
    "speed": "Walk 40",
    "str": 26,
    "dex": 12,
    "con": 22,
    "int": 15,
    "wis": 16,
    "cha": 17,
    "save": "Con +10, Int +6, Wis +7",
    "skill": "Deception +11, Insight +7, Perception +7, Sleight of hand +9",
    "passive": 17,
    "languages": "Common, Giant",
    "cr": "11",
    "trait": [
      {
        "Name": "Keen Smell",
        "Text": "The giant has advantage on Wisdom (Perception) checks that rely on smell."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day each: <em>control weather, gaseous form</em>"
      },
      {
        "Name": "Spellcasting",
        "Text": "The giant is a 5th-level spellcaster. Its spellcasting ability is Charisma (spell save DC 15, +7 to hit with spell attacks). The giant has the following bard spells prepared:<br><br>Cantrips (at will): <em>minor illusion, prestidigitation, vicious mockery</em><br>1st (1 slots): <em>cure wounds, disguise self, silent image, Tasha's hideous laughter</em><br>2nd (2 slots): <em>invisibility, suggestion</em><br>3rd (3 slots): <em>major image, tongues</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The giant makes two attacks with its morningstar."
      },
      {
        "Name": "Morningstar",
        "Text": "Melee Weapon 12 to hit, reach 10 ft., one target. Hit:21 (3d8 + 8) bludgeoning damage. The attack deals an extra 14 (4d6) damage if the giant has advantage on the attack roll."
      },
      {
        "Name": "Rock",
        "Text": "Ranged Weapon 12 to hit, range 60/240 ft., one target. Hit:30 (4d10 + 8) bludgeoning damage. The attack deals an extra 14 (4d6) damage if the giant has advantage on the attack roll."
      },
      {
        "Name": "Change Shape",
        "Text": "The giant magically polymorphs into a beast or humanoid it has seen, or back into its true form. Any equipment the giant is wearing or carrying is absorbed by the new form. Its statistics, other than its size, are the same in each form. It reverts to its true form if it dies."
      }
    ],
    "environment": [
      "mountain"
    ]
  },
  {
    "name": "Conjurer",
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
    "trait": [
      {
        "Name": "Benign Transportation (Recharges after the Conjurer Casts a Conjuration Spell of 1st Level or Higher)",
        "Text": "As a bonus action, the conjurer teleports up to 30 feet to an unoccupied space that it can see. If it instead chooses a space within range that is occupied by a willing Small or Medium creature, they both teleport, swapping places."
      },
      {
        "Name": "Spellcasting",
        "Text": "The conjurer is a 9th-level spellcaster. Its spellcasting ability is intelligence (spell save DC 14, +6 to hit with spell attacks). The conjurer has the following wizard spells prepared:<br><br>Cantrips (at will): <em>acid splash, mage hand, poison spray, prestidigitation</em><br>1st (1 slots): <em>mage armor, magic missile, unseen servant*</em><br>2nd (2 slots): <em>cloud of daggers*, misty step*, web*</em><br>3rd (3 slots): <em>fireball, stinking cloud*</em><br>4th (4 slots): <em>Evard's black tentacles*, stoneskin</em><br>5th (5 slots): <em>cloudkill*, conjure elemental*</em>"
      }
    ],
    "action": [
      {
        "Name": "Dagger",
        "Text": "Melee or Ranged Weapon 5 to hit, reach 5 ft. or range 20/60 ft., one target. Hit:4 (1d4 + 2) piercing damage."
      }
    ],
    "environment": [
      "urban"
    ]
  },
  {
    "name": "Cow",
    "size": "L",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": 10,
    "hp": 15,
    "speed": "Walk 30",
    "str": 18,
    "dex": 10,
    "con": 14,
    "int": 2,
    "wis": 10,
    "cha": 4,
    "passive": 10,
    "cr": "1/4",
    "trait": [
      {
        "Name": "Charge",
        "Text": "If the cow moves at least 20 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 7 (2d6) piercing damage."
      }
    ],
    "action": [
      {
        "Name": "Gore",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:7 (1d6 + 4) piercing damage."
      }
    ],
    "environment": [
      "grassland"
    ]
  },
  {
    "name": "Cranium Rat",
    "size": "T",
    "type": "beast",
    "alignment": "Lawful Evil",
    "ac": 12,
    "hp": 2,
    "speed": "Walk 30",
    "str": 2,
    "dex": 14,
    "con": 10,
    "int": 4,
    "wis": 11,
    "cha": 8,
    "senses": "darkvision 30 ft.",
    "passive": 10,
    "languages": "telepathy 30 ft.",
    "cr": "0",
    "trait": [
      {
        "Name": "Illumination",
        "Text": "As a bonus action, the cranium rat can shed dim light from its brain in a 5-foot radius or extinguish the light."
      },
      {
        "Name": "Telepathic Shroud",
        "Text": "The cranium rat is immune to any effect that would sense its emotions or read its thoughts, as well as to all divination spells."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:1 piercing damage."
      }
    ],
    "environment": [
      "underdark",
      "urban"
    ]
  },
  {
    "name": "Darkling",
    "size": "S",
    "type": "fey",
    "alignment": "Chaotic Neutral",
    "ac": "14 leather armor",
    "hp": 13,
    "speed": "Walk 30",
    "str": 9,
    "dex": 16,
    "con": 12,
    "int": 10,
    "wis": 12,
    "cha": 10,
    "skill": "Acrobatics +5, Deception +2, Perception +5, Stealth +7",
    "senses": "blindsight 30 ft., darkvision 120 ft.",
    "passive": 15,
    "languages": "Elvish, Sylvan",
    "cr": "1/2",
    "trait": [
      {
        "Name": "Death Flash",
        "Text": "When the darkling dies, nonmagical light flashes out from it in a 10-foot radius as its body and possessions, other than metal or magic objects, burn to ash. Any creature in that area and able to see the bright light must succeed on a 10 Constitution saving throw or be blinded until the end of the creature's next turn."
      },
      {
        "Name": "Light Sensitivity",
        "Text": "While in bright light, the darkling has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
      }
    ],
    "action": [
      {
        "Name": "Dagger",
        "Text": "Melee or Ranged Weapon 5 to hit, reach 5 ft. or range 20/60 ft., one target. Hit:5 (1d4 + 3) piercing damage. If the darkling has advantage on the attack roll, the attack deals an extra 7 (2d6) piercing damage."
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
    "name": "Darkling Elder",
    "size": "M",
    "type": "fey",
    "alignment": "Chaotic Neutral",
    "ac": "15 studded leather armor",
    "hp": 27,
    "speed": "Walk 30",
    "str": 13,
    "dex": 17,
    "con": 12,
    "int": 10,
    "wis": 14,
    "cha": 13,
    "skill": "Acrobatics +5, Deception +3, Perception +6, Stealth +7",
    "senses": "blindsight 30 ft., darkvision 120 ft.",
    "passive": 16,
    "languages": "Elvish, Sylvan",
    "cr": "2",
    "trait": [
      {
        "Name": "Death Burn",
        "Text": "When the darkling elder dies, magical light flashes out from it in a 10-foot radius as its body and possessions, other than metal or magic objects, burn to ash. Any creature in that area must make a 11 Constitution saving throw. On a failure, the creature takes 7 (2d6) radiant damage and, if the creature can see the light, is blinded until the end of its next turn. If the saving throw is successful, the creature takes half the damage and isn't blinded."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The darkling elder makes two melee attacks."
      },
      {
        "Name": "Shortsword",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:6 (1d6 + 3) piercing damage. If the darkling elder had advantage on the attack roll, the attack deals as: extra 10 (3d6) piercing damage."
      },
      {
        "Name": "Darkness (Recharges after a Short or Long Rest)",
        "Text": "The darkling elder casts darkness without any components. Wisdom is its spellcasting ability."
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
    "name": "Death Kiss",
    "size": "L",
    "type": "aberration",
    "alignment": "Neutral Evil",
    "ac": "16 natural armor",
    "hp": 161,
    "speed": "Walk 0, Fly 30 (hover)",
    "str": 18,
    "dex": 14,
    "con": 18,
    "int": 10,
    "wis": 12,
    "cha": 10,
    "save": "Con +8, Wis +5",
    "skill": "Perception +5",
    "senses": "darkvision 120 ft.",
    "passive": 15,
    "immune": "lightning",
    "conditionImmune": "prone",
    "languages": "Deep Speech, Undercommon",
    "cr": "10",
    "trait": [
      {
        "Name": "Lightning Blood",
        "Text": "A creature within 5 feet of the death kiss takes 5 (1d10) lightning damage whenever it hits the death kiss with a melee attack that deals piercing or slashing damage."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The death kiss makes three tentacle attacks. Up to three of these attacks can be replaced by Blood Drain, one replacement per tentacle grappling a creature"
      },
      {
        "Name": "Tentacle",
        "Text": "Melee Weapon 8 to hit, reach 20 ft., one target. Hit:14 (3d6 + 4) piercing damage, and the target is grappled (escape 14) if it is a Huge or smaller creature. Until this grapple ends, the target is restrained, and the death kiss can't use the same tentacle on another target. The death kiss has ten tentacles."
      },
      {
        "Name": "Blood Drain",
        "Text": "One creature grappled by a tentacle of the death kiss must make a 16 Constitution saving throw. On a failed save, the target takes 22 (4d10) lightning damage, and the death kiss regains half as many hit points."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Deep Rothé",
    "size": "M",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": 10,
    "hp": 13,
    "speed": "Walk 30",
    "str": 18,
    "dex": 10,
    "con": 14,
    "int": 2,
    "wis": 10,
    "cha": 4,
    "senses": "darkvision 60 ft.",
    "passive": 10,
    "cr": "1/4",
    "trait": [
      {
        "Name": "Charge",
        "Text": "If the rothé moves at least 20 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 7 (2d6) piercing damage."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "The deep rothé's spellcasting ability is Charisma. It can innately cast dancing lights at will, requiring no components.<br>At will: <em>dancing lights</em>"
      }
    ],
    "action": [
      {
        "Name": "Gore",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:7 (1d6 + 4) piercing damage."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Deep Scion",
    "size": "M",
    "type": "humanoid (shapechanger)",
    "alignment": "Neutral Evil",
    "ac": 11,
    "hp": 67,
    "speed": "Walk 30 (20 ft. and swim 40 ft. in hybrid form)",
    "str": 18,
    "dex": 13,
    "con": 16,
    "int": 10,
    "wis": 12,
    "cha": 14,
    "save": "Wis +3, Cha +4",
    "skill": "Deception +6, Insight +3, Sleight of hand +3, Stealth +3",
    "senses": "darkvision 120 ft.",
    "passive": 11,
    "languages": "Aquan, Common, Thieves' cant",
    "cr": "3",
    "trait": [
      {
        "Name": "Shapechanger",
        "Text": "The deep scion can use its action to polymorph into a humanoid-piscine hybrid form, or back into its true form. Its statistics, other than its speed, are the same in each form. Any equipment it is wearing or carrying isn't transformed. The deep scion reverts to its true form if it dies."
      },
      {
        "Name": "Amphibious (Hybrid Form Only)",
        "Text": "The deep scion can breathe air and water."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "In humanoid form, the deep scion makes two melee attacks. In hybrid form, the deep scion makes three attacks: one with its bite and two with its claws."
      },
      {
        "Name": "Battleaxe (Humanoid Form Only)",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:8 (1d8 + 4) slashing damage, or 9 (1d10 + 4) slashing damage if used with two hands."
      },
      {
        "Name": "Bite (Hybrid Form Only)",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one creature. Hit:6 (1d4 + 4) piercing damage."
      },
      {
        "Name": "Claw (Hybrid Form Only)",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:7 (1d6 + 4) slashing damage."
      },
      {
        "Name": "Psychic Screech (Hybrid Form Only; Recharges after a Short or Long Rest)",
        "Text": "The deep scion emits a terrible scream audible within 300 feet. Creatures within 30 feet of the deep scion must succeed on a 13 Wisdom saving throw or be stunned until the end of the deep scion's next turn. In water, the psychic screech also telepathically transmits the deep scion's memories of the last 24 hours to its master, regardless of distance, so long as it and its master are in the same body of water."
      }
    ],
    "environment": [
      "underwater",
      "coastal"
    ]
  },
  {
    "name": "Deinonychus",
    "size": "M",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": "13 natural armor",
    "hp": 26,
    "speed": "Walk 40",
    "str": 15,
    "dex": 15,
    "con": 14,
    "int": 4,
    "wis": 12,
    "cha": 6,
    "skill": "Perception +3",
    "passive": 13,
    "cr": "1",
    "trait": [
      {
        "Name": "Pounce",
        "Text": "If the deinonychus moves at least 20 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a 12 Strength saving throw or be knocked prone. If the target is prone, the deinonychus can make one bite attack against it as a bonus action."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The deinonychus makes three attacks: one with its bite and two with its claws."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:6 (1d8 + 2) piercing damage."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:6 (1d8 + 2) slashing damage."
      }
    ],
    "environment": [
      "grassland",
      "forest",
      "hill"
    ]
  },
  {
    "name": "Devourer",
    "size": "L",
    "type": "fiend",
    "alignment": "Chaotic Evil",
    "ac": "16 natural armor",
    "hp": 178,
    "speed": "Walk 30",
    "str": 20,
    "dex": 12,
    "con": 20,
    "int": 13,
    "wis": 10,
    "cha": 16,
    "senses": "darkvision 120 ft.",
    "passive": 10,
    "resist": [
      "cold",
      "fire",
      "lightning"
    ],
    "immune": "poison",
    "conditionImmune": "poisoned",
    "languages": "Abyssal, telepathy 120 ft.",
    "cr": "13",
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The devourer makes two claw attacks and can use either Imprison Soul or Soul Rend."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 10 to hit, reach 5 ft., one target. Hit:12 (2d6 + 5) slashing damage plus 21 (6d6) necrotic damage."
      },
      {
        "Name": "Imprison Soul",
        "Text": "The devourer chooses a living humanoid with 0 hit points that it can see within 30 feet of it. That creature is teleported inside the devourer's ribcage and imprisoned there. A creature imprisoned in this manner has disadvantage on death saving throws. If it dies while imprisoned, the devourer regains 25 hit points, immediately recharges Soul Rend, and gains an additional action on its next turn. Additionally, at the start of its next turn, the devourer regurgitates the slain creature as a bonus action, and the creature becomes an undead. If the victim had 2 or fewer Hit Dice, it becomes a zombie. if it had 3 to 5 Hit Dice, it becomes a ghoul. Otherwise, it becomes a wight. A devourer can imprison only one creature at a time."
      },
      {
        "Name": "Soul Rend (Recharge 6)",
        "Text": "The devourer creates a vortex of life-draining energy in a 20-foot radius centered on itself. Each humanoid in that area must make a 18 Constitution saving throw, taking 44 (8d10) necrotic damage on a failed save, or half as much damage on a successful one. Increase the damage by 10 for each living humanoid with 0 hit points in that area."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Dimetrodon",
    "size": "M",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": "12 natural armor",
    "hp": 19,
    "speed": "Walk 30, Swim 20",
    "str": 14,
    "dex": 10,
    "con": 15,
    "int": 2,
    "wis": 10,
    "cha": 5,
    "skill": "Perception +2",
    "passive": 12,
    "cr": "1/4",
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:9 (2d6 + 2) piercing damage."
      }
    ],
    "environment": [
      "swamp",
      "coastal"
    ]
  },
  {
    "name": "Diviner",
    "size": "M",
    "type": "humanoid (any race)",
    "alignment": "Any",
    "ac": 12,
    "hp": 67,
    "speed": "Walk 30",
    "str": 9,
    "dex": 14,
    "con": 11,
    "int": 18,
    "wis": 12,
    "cha": 11,
    "save": "Int +7, Wis +4",
    "skill": "Arcana +7, History +7",
    "passive": 11,
    "languages": "any four languages",
    "cr": "8",
    "trait": [
      {
        "Name": "Portent (Recharges after the Diviner Casts a Divination Spell of 1st Level or Higher)",
        "Text": "When the diviner or a creature it can see makes an attack roll, a saving throw, or an ability check, the diviner can roll a d20 and choose to use this roll in place of the attack roll, saving throw, or ability check."
      },
      {
        "Name": "Spellcasting",
        "Text": "The diviner is a 15th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 15, +7 to hit with spell attacks). The diviner has the following wizard spells prepared:<br><br>Cantrips (at will): <em>fire bolt, light, mage hand, message, true strike</em><br>1st (1 slots): <em>detect magic*, feather fall, mage armor</em><br>2nd (2 slots): <em>detect thoughts*, locate object*, scorching ray</em><br>3rd (3 slots): <em>clairvoyance*, fly, fireball</em><br>4th (4 slots): <em>arcane eye*, ice storm, stoneskin</em><br>5th (5 slots): <em>Rary's telepathic bond*, seeming</em><br>6th (6 slots): <em>mass suggestion, true seeing*</em><br>7th (7 slots): <em>delayed blast fireball, teleport</em><br>8th (8 slots): <em>maze</em>"
      }
    ],
    "action": [
      {
        "Name": "Quarterstaff",
        "Text": "Melee Weapon 2 to hit, reach 5 ft., one target. Hit:2 (1d6 - 1) bludgeoning damage, or 3 (1d8 - 1) bludgeoning damage if used with two hands."
      }
    ],
    "environment": [
      "urban"
    ]
  },
  {
    "name": "Dolphin",
    "size": "M",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": "12 natural armor",
    "hp": 11,
    "speed": "Walk 0, Swim 60",
    "str": 14,
    "dex": 13,
    "con": 13,
    "int": 6,
    "wis": 12,
    "cha": 7,
    "skill": "Perception +3",
    "senses": "blindsight 60 ft.",
    "passive": 13,
    "cr": "1/8",
    "trait": [
      {
        "Name": "Charge",
        "Text": "If the dolphin moves at least 30 feet straight toward a target and then hits it with a slam attack on the same turn, the target takes an extra 3 (1d6) bludgeoning damage."
      },
      {
        "Name": "Hold Breath",
        "Text": "The dolphin can hold its breath for 20 minutes."
      }
    ],
    "action": [
      {
        "Name": "Slam",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:5 (1d6 + 2) bludgeoning damage."
      }
    ],
    "environment": [
      "underwater",
      "coastal"
    ]
  },
  {
    "name": "Draegloth",
    "size": "L",
    "type": "fiend (demon)",
    "alignment": "Chaotic Evil",
    "ac": "15 natural armor",
    "hp": 123,
    "speed": "Walk 30",
    "str": 20,
    "dex": 15,
    "con": 18,
    "int": 13,
    "wis": 11,
    "cha": 11,
    "skill": "Perception +3, Stealth +5",
    "senses": "darkvision 120 ft.",
    "passive": 13,
    "resist": [
      "cold",
      "fire",
      "lightning"
    ],
    "immune": "poison",
    "conditionImmune": "poisoned",
    "languages": "Abyssal, Elvish, Undercommon",
    "cr": "7",
    "trait": [
      {
        "Name": "Fey Ancestry",
        "Text": "The draegloth has advantage on saving throws against being charmed, and magic can't put it to sleep."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day each: <em>confusion, dancing lights, faerie fire</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The draegloth makes three attacks: one with its bite and two with its claws."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 8 to hit, reach 5 ft., one creature. Hit:16 (2d10 + 5) piercing damage."
      },
      {
        "Name": "Claws",
        "Text": "Melee Weapon 8 to hit, reach 10 ft., one target. Hit:16 (2d10 + 5) slashing damage."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Elder Brain",
    "size": "L",
    "type": "aberration",
    "alignment": "Lawful Evil",
    "ac": 10,
    "hp": 210,
    "speed": "Walk 5, Swim 10",
    "str": 15,
    "dex": 10,
    "con": 20,
    "int": 21,
    "wis": 19,
    "cha": 24,
    "save": "Int +10, Wis +9, Cha +12",
    "skill": "Arcana +10, Deception +12, Insight +14, Intimidation +12, Persuasion +12",
    "senses": "blindsight 120 ft.",
    "passive": 14,
    "languages": "understands Common, Deep Speech, and Undercommon but can't speak, telepathy 5 miles",
    "cr": "14",
    "trait": [
      {
        "Name": "Creature Sense",
        "Text": "The elder brain is aware of the presence of creatures within 5 miles of it that have an Intelligence score of 4 or higher. It knows the distance and direction to each creature, as well as each one's intelligence score, but can't sense anything else about it. A creature protected by a mind blank spell, a nondetection spell, or similar magic can't be perceived in this manner."
      },
      {
        "Name": "Legendary Resistance (3/Day)",
        "Text": "If the elder brain fails a saving throw, it can choose to succeed instead."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The elder brain has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Telepathic Hub",
        "Text": "The elder brain can use its telepathy to initiate and maintain telepathic conversations with up to ten creatures at a time. The elder brain can let those creatures telepathically hear each other while connected in this way."
      },
      {
        "Name": "Innate Spellcasting (Psionics)",
        "Text": "<br>1/day each: <em>dominate monster, plane shift (self only)</em>"
      }
    ],
    "action": [
      {
        "Name": "Tentacle",
        "Text": "Melee Weapon 7 to hit, reach 30 ft., one target. Hit:20 (4d8 + 2) bludgeoning damage. If the target is a Huge or smaller creature, it is grappled (escape 15) and takes 9 (1d8 + 5) psychic damage at the start of each of its turns until the grapple ends. The elder brain can have up to four targets grappled at a time."
      },
      {
        "Name": "Mind Blast (Recharge 5-6)",
        "Text": "The elder brain magically emits psychic energy. Creatures of the elder brain's choice within 60 feet of it must succeed on a 18 Intelligence saving throw or take 32 (5d10 + 5) psychic damage and be stunned for 1 minute. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      },
      {
        "Name": "Psychic Link",
        "Text": "The elder brain targets one incapacitated creature it can perceive with its Creature Sense trait and establishes a psychic link with that creature. Until the psychic link ends, the elder brain can perceive everything the target senses. The target becomes aware that something is linked to its mind once it is no longer incapacitated, and the elder brain can terminate the link at any time (no action required). The target can use an action on its turn to attempt to break the psychic link, doing so with a successful 18 Charisma saving throw. On a successful save, the target takes 10 (3d6) psychic damage. The psychic link also ends if the target and the elder brain are more than 5 miles apart, with no consequences to the target. The elder brain can form psychic links with up to ten creatures at a time."
      },
      {
        "Name": "Sense Thoughts",
        "Text": "The elder brain targets a creature with which it has a psychic link. The elder brain gains insight into the target's reasoning, its emotional state, and thoughts that loom large in its mind (including things the target worries about, loves, or hates). The elder brain can also make a Charisma (Deception) check with advantage to deceive the target's mind into thinking it believes one idea or feels a particular emotion. The target contests this attempt with a Wisdom (Insight) check. If the elder brain succeeds, the mind believes the deception for 1 hour or until evidence of the lie is presented to the target."
      }
    ],
    "legendary": [
      {
        "Name": "Tentacle",
        "Text": "The elder brain makes a tentacle attack."
      },
      {
        "Name": "Break Concentration",
        "Text": "The elder brain targets a creature within 120 feet of it with which it has a psychic link. The elder brain breaks the creature's concentration on a spell it has cast. The creature also takes 1d4 psychic damage per level of the spell."
      },
      {
        "Name": "Psychic Pulse",
        "Text": "The elder brain targets a creature within 120 feet of it with which it has a psychic link. Enemies of the elder brain within 10 feet of that creature take 10 (3d6) psychic damage."
      },
      {
        "Name": "Sever Psychic Link",
        "Text": "The elder brain targets a creature within 120 feet of it with which it has a psychic link. The elder brain ends the link, causing the creature to have disadvantage on all ability checks, attack rolls, and saving throws until the end of the creature's next turn."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Enchanter",
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
    "cr": "5",
    "action": [
      {
        "Name": "Quarterstaff",
        "Text": "Melee Weapon 2 to hit, reach 5 ft., one target. Hit:2 (1d6 - 1) bludgeoning damage, or 3 (1d8 - 1) bludgeoning damage if used with two hands."
      }
    ],
    "reaction": [
      {
        "Name": "Instinctive Charm (Recharges after the Enchanter Casts an Enchantment Spell of 1st level or Higher)",
        "Text": "The enchanter tries to magically divert an attack made against it, provided that the attacker is within 30 feet of it and visible to it. The enchanter must decide to do so before the attack hits or misses.<br>The attacker must make a 14 Wisdom saving throw. On a failed save, the attacker targets the creature closest to it, other than the enchanter or itself. If multiple creatures are closest, the attacker chooses which one to target."
      }
    ],
    "environment": [
      "urban"
    ],
    "trait": [
      {
        "Name": "Spellcasting",
        "Text": "The enchanter is a 9th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 14, +6 to hit with spell attacks). The enchanter has the following wizard spells prepared:<br><br>Cantrips (at will): <em>friends, mage hand, mending, message</em><br>1st (1 slots): <em>charm person*, mage armor, magic missile</em><br>2nd (2 slots): <em>hold person*, invisibility, suggestion*</em><br>3rd (3 slots): <em>fireball, haste, tongues</em><br>4th (4 slots): <em>dominate beast*, stoneskin</em><br>5th (5 slots): <em>hold monster*</em>"
      }
    ]
  },
  {
    "name": "Evoker",
    "size": "M",
    "type": "humanoid (any race)",
    "alignment": "Any",
    "ac": 12,
    "hp": 66,
    "speed": "Walk 30",
    "str": 9,
    "dex": 14,
    "con": 12,
    "int": 17,
    "wis": 12,
    "cha": 11,
    "save": "Int +7, Wis +5",
    "skill": "Arcana +7, History +7",
    "passive": 11,
    "languages": "any four languages",
    "cr": "9",
    "trait": [
      {
        "Name": "Sculpt Spells",
        "Text": "When the evoker casts an evocation spell that forces other creatures it can see to make a saving throw, it can choose a number of them equal to 1 + the spell's level. These creatures automatically succeed on their saving throws against the spell. If a successful save means a chosen creature would take half damage from the spell, it instead takes no damage from it."
      },
      {
        "Name": "Spellcasting",
        "Text": "The evoker is a 12th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 15, +7 to hit with spell attacks). The evoker has the following wizard spells prepared:<br><br>Cantrips (at will): <em>fire bolt*, light*, prestidigitation, ray of frost*</em><br>1st (1 slots): <em>burning hands*, mage armor, magic missile*</em><br>2nd (2 slots): <em>mirror image, misty step, shatter*</em><br>3rd (3 slots): <em>counterspell, fireball*, lightning bolt*</em><br>4th (4 slots): <em>ice storm*, stoneskin</em><br>5th (5 slots): <em>Bigby's hand*, cone of cold*</em><br>6th (6 slots): <em>chain lightning*, wall of ice*</em>"
      }
    ],
    "action": [
      {
        "Name": "Quarterstaff",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one target. Hit:2 (1d6 - 1) bludgeoning damage, or 3 (1d8 - 1) bludgeoning damage if used with two hands."
      }
    ],
    "environment": [
      "urban"
    ]
  },
  {
    "name": "Fire Giant Dreadnought",
    "size": "H",
    "type": "giant (fire giant)",
    "alignment": "Lawful Evil",
    "ac": "21 plate armor",
    "hp": 187,
    "speed": "Walk 30",
    "str": 27,
    "dex": 9,
    "con": 23,
    "int": 8,
    "wis": 10,
    "cha": 11,
    "save": "Dex +4, Con +11, Cha +5",
    "skill": "Athletics +13, Perception +5",
    "passive": 15,
    "immune": "fire",
    "languages": "Giant",
    "cr": "14",
    "trait": [
      {
        "Name": "Dual Shields",
        "Text": "The giant carries two shields, each of which is accounted for in the giant's AC. The giant must stow or drop one of its shields to hurl rocks."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The giant makes two fireshield attacks."
      },
      {
        "Name": "Fireshield",
        "Text": "Melee Weapon 13 to hit, reach 5 ft., one target. Hit:22 (4d6 + 8) bludgeoning damage plus 7 (2d6) fire damage plus 7 (2d6) piercing damage."
      },
      {
        "Name": "Rock",
        "Text": "Ranged Weapon 13 to hit, range 60/240 ft., one target. Hit:30 (4d10 + 8) bludgeoning damage."
      },
      {
        "Name": "Shield Charge",
        "Text": "The giant moves up to 30 feet in a straight line and can move through the space of any creature smaller than Huge. The first time it enters a creature's space during this move, it makes a fireshield attack against that creature. If the attack hits, the target must also succeed on a 21 Strength saving throw or be pushed ahead of the giant for the rest of this move. If a creature fails the save by 5 or more, it is also knocked prone and takes 18 (3d6 + 8) bludgeoning damage, or 29 (6d6 + 8) bludgeoning damage if it was already prone."
      }
    ],
    "environment": [
      "underdark",
      "mountain"
    ]
  },
  {
    "name": "Firenewt Warlock of Imix",
    "size": "M",
    "type": "humanoid (firenewt)",
    "alignment": "Neutral Evil",
    "ac": 10,
    "hp": 33,
    "speed": "Walk 30",
    "str": 13,
    "dex": 11,
    "con": 12,
    "int": 9,
    "wis": 11,
    "cha": 14,
    "senses": "darkvision 120 ft. (penetrates magical darkness)",
    "passive": 10,
    "immune": "fire",
    "languages": "Draconic, Ignan",
    "cr": "1",
    "trait": [
      {
        "Name": "Amphibious",
        "Text": "The firenewt can breathe air and water."
      },
      {
        "Name": "Imix's Blessing",
        "Text": "When the firenewt reduces an enemy to 0 hit points, the firenewt gains 5 temporary hit points."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "The firenewt's innate spellcasting ability is Charisma. It can innately cast mage armor (self only) at will, requiring no material components.<br>At will: <em>mage armor</em>"
      },
      {
        "Name": "Spellcasting",
        "Text": "The firenewt is a 3rd-level spellcaster. Its spellcasting ability is Charisma (spell save DC 12, +4 to hit with spell attacks). It regains its expended spell slots when it finishes a short or long rest. It knows the following warlock spells:<br><br>Cantrips (at will): <em>fire bolt, guidance, light, mage hand, prestidigitation</em><br>2nd (2 slots): <em>burning hands, flaming sphere, hellish rebuke, scorching ray</em>"
      }
    ],
    "action": [
      {
        "Name": "Morningstar",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one target. Hit:5 (1d8 + 1) piercing damage."
      }
    ],
    "environment": [
      "underdark",
      "mountain",
      "hill",
      "desert"
    ]
  },
  {
    "name": "Firenewt Warrior",
    "size": "M",
    "type": "humanoid (firenewt)",
    "alignment": "Neutral Evil",
    "ac": "16 chain shirt",
    "hp": 22,
    "speed": "Walk 30",
    "str": 10,
    "dex": 13,
    "con": 12,
    "int": 7,
    "wis": 11,
    "cha": 8,
    "passive": 10,
    "immune": "fire",
    "languages": "Draconic, Ignan",
    "cr": "1/2",
    "trait": [
      {
        "Name": "Amphibious",
        "Text": "The firenewt can breathe air and water."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The firenewt makes two attacks with its scimitar."
      },
      {
        "Name": "Scimitar",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one target. Hit:4 (1d6 + 1) slashing damage."
      },
      {
        "Name": "Spit Fire (Recharges after a Short or Long Rest)",
        "Text": "The firenewt spits fire at a creature within 10 feet of it. The creature must make a 11 Dexterity saving throw, taking 9 (2d8) fire damage on a failed save, or half as much damage on a successful one"
      }
    ],
    "environment": [
      "underdark",
      "mountain",
      "hill",
      "desert"
    ]
  },
  {
    "name": "Flail Snail",
    "size": "L",
    "type": "elemental",
    "alignment": "Unaligned",
    "ac": "16 natural armor",
    "hp": 52,
    "speed": "Walk 10",
    "str": 17,
    "dex": 5,
    "con": 20,
    "int": 3,
    "wis": 10,
    "cha": 5,
    "senses": "darkvision 60 ft., tremorsense 60 ft.",
    "passive": 10,
    "immune": "fire, poison",
    "conditionImmune": "poisoned",
    "cr": "3",
    "trait": [
      {
        "Name": "Antimagic Shell",
        "Text": "The snail has advantage on saving throws against spells, and any creature making a spell attack against the snail has disadvantage on the attack roll. If the snail succeeds on its saving throw against a spell or a spell attack misses it, an additional effect might occur, as determined by rolling a d6:<br>[object Object]"
      },
      {
        "Name": "Flail Tentacles",
        "Text": "The flail snail has five flail tentacles. Whenever the snail takes 10 damage or more on a single turn, one of its tentacles dies. If even one tentacle remains, the snail regrows all dead ones within 1d4 days. If all its tentacles die, the snail retracts into its shell, gaining total cover, and it begins wailing, a sound that can be heard for 600 feet, stopping only when it dies 5d6 minutes later. Healing magic that restores limbs, such as the regenerate spell, can halt this dying process."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The flail snail makes as many flail tentacle attacks as it has flail tentacles, all against the same target."
      },
      {
        "Name": "Flail Tentacle",
        "Text": "Melee Weapon 5 to hit, reach 10 ft., one target. Hit:6 (1d6 + 3) bludgeoning damage."
      },
      {
        "Name": "Scintillating Shell (Recharges after a Short or Long Rest)",
        "Text": "The snail's shell emits dazzling, colored light until the end of the snail's next turn. During this time, the shell sheds bright light in a 30-foot radius and dim light for an additional 30 feet, and creatures that can see the snail have disadvantage on attack rolls against it. In addition, any creature within the bright light and able to see the snail when this power is activated must succeed on a 15 Wisdom saving throw or be stunned until the light ends."
      },
      {
        "Name": "Shell Defense",
        "Text": "The flail snail withdraws into its shell, gaining a +4 bonus to AC until it emerges. It can emerge from its shell as a bonus action on its turn."
      }
    ],
    "environment": [
      "underdark",
      "forest",
      "swamp"
    ]
  },
  {
    "name": "Flind",
    "size": "M",
    "type": "humanoid (gnoll)",
    "alignment": "Chaotic Evil",
    "ac": "16 chain mail",
    "hp": 127,
    "speed": "Walk 30",
    "str": 20,
    "dex": 10,
    "con": 19,
    "int": 11,
    "wis": 13,
    "cha": 12,
    "save": "Con +8, Wis +5",
    "skill": "Intimidation +5, Perception +5",
    "senses": "darkvision 60 ft.",
    "passive": 15,
    "languages": "Abyssal, Gnoll",
    "cr": "9",
    "trait": [
      {
        "Name": "Aura of Blood Thirst",
        "Text": "If the flind isn't incapacitated, any creature with the Rampage trait can make a bite attack as a bonus action while within 10 feet of the flind."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The flind makes three attacks: one with each of its different flail attacks or three with its longbow."
      },
      {
        "Name": "Flail of Madness",
        "Text": "Melee Weapon 9 to hit, reach 5 ft., one target. Hit:10 (1d10 + 5) bludgeoning damage, and the target must make a 16 Wisdom saving throw. On a failed save, the target must make a melee attack against a random target within its reach on its next turn. If it has no targets within its reach even after moving, it loses its action on that turn."
      },
      {
        "Name": "Flail of Pain",
        "Text": "Melee Weapon 9 to hit, reach 5 ft., one target. Hit:10 (1d10 + 5) bludgeoning damage plus 22 (4d10) psychic damage."
      },
      {
        "Name": "Flail of Paralysis",
        "Text": "Melee Weapon 9 to hit, reach 5 ft., one target. Hit:10 (1d10 + 5) bludgeoning damage, and the target must succeed on a 16 Constitution saving throw or be paralyzed until the end of its next turn."
      },
      {
        "Name": "Longbow",
        "Text": "Ranged Weapon 4 to hit, range 150/600 ft., one target. Hit:4 (1d8) piercing damage."
      }
    ],
    "environment": [
      "grassland",
      "forest",
      "hill",
      "arctic"
    ]
  },
  {
    "name": "Froghemoth",
    "size": "H",
    "type": "monstrosity",
    "alignment": "Unaligned",
    "ac": "14 natural armor",
    "hp": 184,
    "speed": "Walk 30, Swim 30",
    "str": 23,
    "dex": 13,
    "con": 20,
    "int": 2,
    "wis": 12,
    "cha": 5,
    "save": "Con +9, Wis +5",
    "skill": "Perception +9, Stealth +5",
    "senses": "darkvision 60 ft.",
    "passive": 19,
    "resist": [
      "fire",
      "lightning"
    ],
    "cr": "10",
    "trait": [
      {
        "Name": "Amphibious",
        "Text": "The froghemoth can breathe air and water."
      },
      {
        "Name": "Shock Susceptibility",
        "Text": "If the froghemoth takes lightning damage, it suffers several effects until the end of its next turn: its speed is halved, it takes a −2 penalty to AC and Dexterity saving throws, it can't use reactions or Multiattack, and on its turn, it can use either an action or a bonus action, not both."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The froghemoth makes two attacks with its tentacles. It can also use its tongue or bite."
      },
      {
        "Name": "Tentacle",
        "Text": "Melee Weapon 10 to hit, reach 20 ft., one target. Hit:19 (3d8 + 6) bludgeoning damage, and the target is grappled (escape 16) if it is a Huge or smaller creature. Until the grapple ends, the froghemoth can't use this tentacle on another target. The froghemoth has four tentacles."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 10 to hit, reach 5 ft., one target. Hit:22 (3d10 + 6) piercing damage, and the target is swallowed if it is a Medium or smaller creature. A swallowed creature is blinded and restrained, has total cover against attacks and other effects outside the froghemoth, and takes 10 (3d6) acid damage at the start of each of the froghemoth's turns."
      },
      {
        "Name": "Tongue",
        "Text": "The Froghemoth targets one Medium or smaller creature that it can see within 20 feet of it. The target must make a 18 Strength saving throw. On a failed save, the target is pulled into an unoccupied space within 5 feet of the froghemoth, and the froghemoth can make a bite attack against it as a bonus action."
      }
    ],
    "environment": [
      "underdark",
      "swamp"
    ]
  },
  {
    "name": "Frost Giant Everlasting One",
    "size": "H",
    "type": "giant (frost giant)",
    "alignment": "Chaotic Evil",
    "ac": "15 patchwork armor",
    "hp": 189,
    "speed": "Walk 40",
    "str": 25,
    "dex": 9,
    "con": 24,
    "int": 9,
    "wis": 10,
    "cha": 12,
    "save": "Str +11, Con +11, Wis +4",
    "skill": "Athletics +11, Perception +4",
    "senses": "darkvision 60 ft.",
    "passive": 14,
    "immune": "cold",
    "languages": "Giant",
    "cr": "12",
    "trait": [
      {
        "Name": "Extra Heads",
        "Text": "The giant has a 25 percent chance of having more than one head. If it has more than one, it has advantage on Wisdom (Perception) checks and on saving throws against being blinded, charmed, deafened, frightened, stunned, or knocked unconscious."
      },
      {
        "Name": "Regeneration",
        "Text": "The giant regains 10 hit points at the start of its turn. If the giant takes acid or fire damage, this trait doesn't function at the start of its next turn. The giant dies only if it starts its turn with 0 hit points and doesn't regenerate."
      },
      {
        "Name": "Vaprak's Rage (Recharges after a Short or Long Rest)",
        "Text": "As a bonus action, the giant can enter a rage at the start of its turn. The rage lasts for 1 minute or until the giant is incapacitated. While raging, the giant gains the following benefits:"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The giant makes two attacks with its greataxe."
      },
      {
        "Name": "Greataxe",
        "Text": "Melee Weapon 11 to hit, reach 10 ft., one target. Hit:26 (3d12 + 7) slashing damage, or 30 (3d12 + 11) slashing damage while raging."
      },
      {
        "Name": "Rock",
        "Text": "Ranged Weapon 11 to hit, range 60/240 ft., one target. Hit:29 (4d10 + 7) bludgeoning damage."
      }
    ],
    "environment": [
      "coastal",
      "arctic"
    ]
  },
  {
    "name": "Gauth",
    "size": "M",
    "type": "aberration",
    "alignment": "Lawful Evil",
    "ac": "15 natural armor",
    "hp": 67,
    "speed": "Walk 0, Fly 20 (hover)",
    "str": 10,
    "dex": 14,
    "con": 16,
    "int": 15,
    "wis": 15,
    "cha": 13,
    "save": "Int +5, Wis +5, Cha +4",
    "skill": "Perception +5",
    "senses": "darkvision 120 ft.",
    "passive": 15,
    "conditionImmune": "prone",
    "languages": "Deep Speech, Undercommon",
    "cr": "6",
    "trait": [
      {
        "Name": "Stunning Gaze",
        "Text": "When a creature that can see the gauth's central eye starts its turn within 30 feet of the gauth, the gauth can force it to make a 14 Wisdom saving throw if the gauth isn't incapacitated and can see the creature. A creature that fails the save is stunned until the start of its next turn, when it can avert its eyes again. If the creature looks at the gauth in the meantime, it must immediately make the save."
      },
      {
        "Name": "Death Throes",
        "Text": "When the gauth dies, the magical energy within it explodes, and each creature within 10 feet of it must make a 14 Dexterity saving throw, taking 13 (3d8) force damage on a failed save, or half as much damage on a successful one."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 8 to hit, reach 5 ft., one target. Hit:9 (2d8) piercing damage."
      },
      {
        "Name": "Eye Rays",
        "Text": "The gauth shoots three of the following magical eye rays at random (reroll duplicates), choosing one to three targets it can see within 120 feet of it:"
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Gazer",
    "size": "T",
    "type": "aberration",
    "alignment": "Neutral Evil",
    "ac": 13,
    "hp": 13,
    "speed": "Walk 0, Fly 30 (hover)",
    "str": 3,
    "dex": 17,
    "con": 14,
    "int": 3,
    "wis": 10,
    "cha": 7,
    "save": "Wis +2",
    "skill": "Perception +4, Stealth +5",
    "senses": "darkvision 60 ft.",
    "passive": 14,
    "conditionImmune": "prone",
    "cr": "1/2",
    "trait": [
      {
        "Name": "Aggressive",
        "Text": "As a bonus action, the gazer can move up to its speed toward a hostile creature that it can see."
      },
      {
        "Name": "Mimicry",
        "Text": "The gazer can mimic simple sounds of speech it has heard, in any language. A creature that hears the sounds can tell they are imitations with a successful 10 Wisdom (Insight) check."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:1 piercing damage."
      },
      {
        "Name": "Eye Rays",
        "Text": "The gazer shoots two of the following magical eye rays at random (reroll duplicates), choosing one or two targets it can see within 60 feet of it:"
      }
    ],
    "environment": [
      "underdark"
    ],
    "familiar": true
  },
  {
    "name": "Giant Strider",
    "size": "L",
    "type": "monstrosity",
    "alignment": "Neutral Evil",
    "ac": "14 natural armor",
    "hp": 22,
    "speed": "Walk 50",
    "str": 18,
    "dex": 13,
    "con": 14,
    "int": 4,
    "wis": 12,
    "cha": 6,
    "passive": 11,
    "immune": "fire",
    "cr": "1",
    "trait": [
      {
        "Name": "Fire Absorption",
        "Text": "Whenever the giant strider is subjected to fire damage, it takes no damage and regains a number of hit points equal to half the fire damage dealt."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:8 (1d8 + 4) piercing damage."
      },
      {
        "Name": "Fire Burst (Recharge 5-6)",
        "Text": "The giant strider hurls a gout of flame at a point it can see within 60 feet of it. Each creature in a 10-foot-radius sphere centered on that point must make a 12 Dexterity saving throw, taking 14 (4d6) fire damage on a failed save, or half as much damage on a successful one. The fire spreads around corners, and it ignites flammable objects in that area that aren't being worn or carried."
      }
    ],
    "environment": [
      "underdark",
      "mountain",
      "hill"
    ]
  },
  {
    "name": "Girallon",
    "size": "L",
    "type": "monstrosity",
    "alignment": "Unaligned",
    "ac": 13,
    "hp": 59,
    "speed": "Walk 40, Climb 40",
    "str": 18,
    "dex": 16,
    "con": 16,
    "int": 5,
    "wis": 12,
    "cha": 7,
    "skill": "Perception +3, Stealth +5",
    "senses": "darkvision 60 ft.",
    "passive": 13,
    "cr": "4",
    "trait": [
      {
        "Name": "Aggressive",
        "Text": "As a bonus action, the girallon can move up to its speed toward a hostile creature that it can see."
      },
      {
        "Name": "Keen Smell",
        "Text": "The girallon has advantage on Wisdom (Perception) checks that rely on smell."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The girallon makes five attacks: one with its bite and four with its claws."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one creature. Hit:7 (1d6 + 4) piercing damage."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 6 to hit. reach 10 ft., one target. Hit:7 (1d6 + 4) slashing damage."
      }
    ],
    "environment": [
      "forest"
    ]
  },
  {
    "name": "Gnoll Flesh Gnawer",
    "size": "M",
    "type": "humanoid (gnoll)",
    "alignment": "Chaotic Evil",
    "ac": "14 studded leather armor",
    "hp": 22,
    "speed": "Walk 30",
    "str": 12,
    "dex": 14,
    "con": 12,
    "int": 8,
    "wis": 10,
    "cha": 8,
    "save": "Dex +4",
    "senses": "darkvision 60 ft.",
    "passive": 10,
    "languages": "Gnoll",
    "cr": "1",
    "trait": [
      {
        "Name": "Rampage",
        "Text": "When the gnoll reduces a creature to 0 hit points with a melee attack on its turn, the gnoll can take a bonus action to move up to half its speed and make a bite attack."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The gnoll makes three attacks: one with its bite and two with its shortsword."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:4 (1d4 + 2) piercing damage."
      },
      {
        "Name": "Shortsword",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:5 (1d6 + 2) piercing damage."
      },
      {
        "Name": "Sudden Rush",
        "Text": "Until the end of the turn, the gnoll's speed increases by 60 feet and it doesn't provoke opportunity attacks."
      }
    ],
    "environment": [
      "grassland",
      "forest",
      "hill",
      "arctic"
    ]
  },
  {
    "name": "Gnoll Hunter",
    "size": "M",
    "type": "humanoid (gnoll)",
    "alignment": "Chaotic Evil",
    "ac": "13 leather armor",
    "hp": 22,
    "speed": "Walk 30",
    "str": 14,
    "dex": 14,
    "con": 12,
    "int": 8,
    "wis": 12,
    "cha": 8,
    "skill": "Perception +3, Stealth +4",
    "senses": "darkvision 60 ft.",
    "passive": 13,
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
        "Name": "Multiattack",
        "Text": "The gnoll makes two melee attacks with its spear or two ranged attacks with its longbow."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:4 (1d4 + 2) piercing damage."
      },
      {
        "Name": "Spear",
        "Text": "Melee or Ranged Weapon 4 to hit, reach 5 ft. or range 20/60 ft., one target. Hit:5 (1d6 + 2) piercing damage, or 6 (1d8 + 2) piercing damage when used with two hands to make a melee attack."
      },
      {
        "Name": "Longbow",
        "Text": "Ranged Weapon 4 to hit, range 150/600 ft., one target. Hit:6 (1d8 + 2) piercing damage, and the target's speed is reduced by 10 feet until the end of its next turn."
      }
    ],
    "environment": [
      "grassland",
      "forest",
      "hill",
      "arctic"
    ]
  },
  {
    "name": "Gnoll Witherling",
    "size": "M",
    "type": "undead",
    "alignment": "Chaotic Evil",
    "ac": "12 natural armor",
    "hp": 11,
    "speed": "Walk 30",
    "str": 14,
    "dex": 8,
    "con": 12,
    "int": 5,
    "wis": 5,
    "cha": 5,
    "senses": "darkvision 60 ft.",
    "passive": 7,
    "immune": "poison",
    "conditionImmune": "exhaustion, poisoned",
    "languages": "understands Gnoll but can't speak",
    "cr": "1/4",
    "trait": [
      {
        "Name": "Rampage",
        "Text": "When the witherling reduces a creature to 0 hit points with a melee attack on its turn, it can take a bonus action to move up to half its speed and make a bite attack."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The witherling makes two attacks: one with its bite and one with its club, or two with its club."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:4 (1d4 + 2) piercing damage."
      },
      {
        "Name": "Club",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:4 (1d4 + 2) bludgeoning damage."
      }
    ],
    "reaction": [
      {
        "Name": "Vengeful Strike",
        "Text": "In response to a gnoll being reduced to 0 hit points within 30 feet of the witherling, the witherling makes a melee attack."
      }
    ],
    "environment": [
      "grassland",
      "forest",
      "hill",
      "arctic"
    ]
  },
  {
    "name": "Green Guard Drake",
    "size": "M",
    "type": "dragon",
    "alignment": "Unaligned",
    "ac": "14 natural armor",
    "hp": 52,
    "speed": "Walk 30, Swim 30",
    "str": 16,
    "dex": 11,
    "con": 16,
    "int": 4,
    "wis": 10,
    "cha": 7,
    "skill": "Perception +2",
    "senses": "darkvision 60 ft.",
    "passive": 12,
    "resist": [
      "poison"
    ],
    "languages": "understands Draconic but can't speak it",
    "cr": "2",
    "trait": [
      {
        "Name": "Amphibious",
        "Text": "The guard drake can breathe air and water."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The drake attacks twice, once with its bite and once with its tail."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:7 (1d8 + 3) piercing damage."
      },
      {
        "Name": "Tail",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:6 (1d6 + 3) bludgeoning damage."
      }
    ],
    "environment": [
      "forest",
      "urban"
    ]
  },
  {
    "name": "Grung",
    "size": "S",
    "type": "humanoid (grung)",
    "alignment": "Lawful Evil",
    "ac": 12,
    "hp": 11,
    "speed": "Walk 25, Climb 25",
    "str": 7,
    "dex": 14,
    "con": 15,
    "int": 10,
    "wis": 11,
    "cha": 10,
    "save": "Dex +4",
    "skill": "Athletics +2, Perception +2, Stealth +4, Survival +2",
    "passive": 12,
    "immune": "poison",
    "conditionImmune": "poisoned",
    "languages": "Grung",
    "cr": "1/4",
    "trait": [
      {
        "Name": "Amphibious",
        "Text": "The grung can breathe air and water."
      },
      {
        "Name": "Poisonous Skin",
        "Text": "Any creature that grapples the grung or otherwise comes into direct contact with the grung's skin must succeed on a 12 Constitution saving throw or become poisoned for 1 minute. A poisoned creature no longer in direct contact with the grung can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      },
      {
        "Name": "Standing Leap",
        "Text": "The grung's long jump is up to 25 feet and its high jump is up to 15 feet, with or without a running start."
      }
    ],
    "action": [
      {
        "Name": "Dagger",
        "Text": "Melee or Ranged Weapon 4 to hit, reach 5 ft. or range 20/60 ft., one target. Hit:4 (1d4 + 2) piercing damage, and the target must succeed on a 12 Constitution saving throw or take 5 (2d4) poison damage."
      }
    ],
    "environment": [
      "forest"
    ]
  },
  {
    "name": "Grung Elite Warrior",
    "size": "S",
    "type": "humanoid (grung)",
    "alignment": "Lawful Evil",
    "ac": 13,
    "hp": 49,
    "speed": "Walk 25, Climb 25",
    "str": 7,
    "dex": 16,
    "con": 15,
    "int": 10,
    "wis": 11,
    "cha": 12,
    "save": "Dex +5",
    "skill": "Athletics +2, Perception +2, Stealth +5, Survival +2",
    "passive": 12,
    "immune": "poison",
    "conditionImmune": "poisoned",
    "languages": "Grung",
    "cr": "2",
    "trait": [
      {
        "Name": "Amphibious",
        "Text": "The grung can breathe air and water."
      },
      {
        "Name": "Poisonous Skin",
        "Text": "Any creature that grapples the grung or otherwise comes into direct contact with the grung's skin must succeed on a 12 Constitution saving throw or become poisoned for 1 minute. A poisoned creature no longer in direct contact with the grung can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      },
      {
        "Name": "Standing Leap",
        "Text": "The grung's long jump is up to 25 feet and its high jump is up to 15 feet, with or without a running start."
      }
    ],
    "action": [
      {
        "Name": "Dagger",
        "Text": "Melee or Ranged Weapon 5 to hit, reach 5 ft. or range 20/60 ft., one target. Hit:5 (1d4 + 3) piercing damage, and the target must succeed on a 12 Constitution saving throw or take 5 (2d4) poison damage."
      },
      {
        "Name": "Shortbow",
        "Text": "Ranged Weapon 5 to hit, range 80/320 ft., one target. Hit:6 (1d6 + 3) piercing damage, and the target must succeed on a 12 Constitution saving throw or take 5 (2d4) poison damage."
      },
      {
        "Name": "Mesmerizing Chirr (Recharge 6)",
        "Text": "The grung makes a chirring noise to which grungs are immune. Each humanoid or beast that is within 15 feet of the grung and able to hear it must succeed on a 12 Wisdom saving throw or be stunned until the end of the grung's next turn."
      }
    ],
    "environment": [
      "forest"
    ]
  },
  {
    "name": "Grung Wildling",
    "size": "S",
    "type": "humanoid (grung)",
    "alignment": "Lawful Evil",
    "ac": 13,
    "hp": 27,
    "speed": "Walk 25, Climb 25",
    "str": 7,
    "dex": 16,
    "con": 15,
    "int": 10,
    "wis": 15,
    "cha": 11,
    "save": "Dex +5",
    "skill": "Athletics +2, Perception +4, Stealth +5, Survival +4",
    "passive": 14,
    "immune": "poison",
    "conditionImmune": "poisoned",
    "languages": "Grung",
    "cr": "1",
    "trait": [
      {
        "Name": "Amphibious",
        "Text": "The grung can breathe air and water."
      },
      {
        "Name": "Poisonous Skin",
        "Text": "Any creature that grapples the grung or otherwise comes into direct contact with the grung's skin must succeed on a 12 Constitution saving throw or become poisoned for 1 minute. A poisoned creature no longer in direct contact with the grung can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      },
      {
        "Name": "Standing Leap",
        "Text": "The grung's long jump is up to 25 feet and its high jump is up to 15 feet, with or without a running start."
      },
      {
        "Name": "Spellcasting",
        "Text": "The grung is a 9th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 12, +4 to hit with spell attacks). It knows the following ranger spells:<br><br>1st (1 slots): <em>cure wounds, jump</em><br>2nd (2 slots): <em>barkskin, spike growth</em><br>3rd (3 slots): <em>plant growth</em>"
      }
    ],
    "action": [
      {
        "Name": "Dagger",
        "Text": "Melee or Ranged Weapon 5 to hit, reach 5 ft. or range 20/60 ft., one target. Hit:5 (1d4 + 3) piercing damage, and the target must succeed on a 12 Constitution saving throw or take 5 (2d4) poison damage."
      },
      {
        "Name": "Shortbow",
        "Text": "Ranged Weapon 5 to hit, range 80/320 ft., one target. Hit:6 (1d6 + 3) piercing damage, and the target must succeed on a 12 Constitution saving throw or take 5 (2d4) poison damage."
      }
    ],
    "environment": [
      "forest"
    ]
  },
  {
    "name": "Hadrosaurus",
    "size": "L",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": "11 natural armor",
    "hp": 19,
    "speed": "Walk 40",
    "str": 15,
    "dex": 10,
    "con": 13,
    "int": 2,
    "wis": 10,
    "cha": 5,
    "skill": "Perception +2",
    "passive": 12,
    "cr": "1/4",
    "action": [
      {
        "Name": "Tail",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:7 (1d10 + 2) bludgeoning damage."
      }
    ],
    "environment": [
      "grassland",
      "swamp"
    ]
  },
  {
    "name": "Hobgoblin Devastator",
    "size": "M",
    "type": "humanoid (goblinoid)",
    "alignment": "Lawful Evil",
    "ac": "13 studded leather armor",
    "hp": 45,
    "speed": "Walk 30",
    "str": 13,
    "dex": 12,
    "con": 14,
    "int": 16,
    "wis": 13,
    "cha": 11,
    "skill": "Arcana +5",
    "senses": "darkvision 60 ft.",
    "passive": 11,
    "languages": "Common, Goblin",
    "cr": "4",
    "trait": [
      {
        "Name": "Arcane Advantage",
        "Text": "Once per turn, the hobgoblin can deal an extra 7 (2d6) damage to a creature it hits with a damaging spell attack if that target is within 5 feet of an ally of the hobgoblin and that ally isn't incapacitated."
      },
      {
        "Name": "Army Arcana",
        "Text": "When the hobgoblin casts a spell that causes damage or that forces other creatures to make a saving throw, it can choose itself and any number of allies to be immune to the damage caused by the spell and to succeed on the required saving throw."
      },
      {
        "Name": "Spellcasting",
        "Text": "The hobgoblin is a 7th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 13, +5 to hit with spell attacks). It has the following wizard spells prepared:<br><br>Cantrips (at will): <em>acid splash, fire bolt, ray of frost, shocking grasp</em><br>1st (1 slots): <em>fog cloud, magic missile, thunderwave</em><br>2nd (2 slots): <em>gust of wind, Melf's acid arrow, scorching ray</em><br>3rd (3 slots): <em>fireball, fly, lightning bolt</em><br>4th (4 slots): <em>ice storm</em>"
      }
    ],
    "action": [
      {
        "Name": "Quarterstaff",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one target. Hit:4 (1d6 + 1) bludgeoning damage, or 5 (1d8 + 1) bludgeoning damage if used with two hands."
      }
    ],
    "environment": [
      "grassland",
      "forest",
      "hill"
    ]
  },
  {
    "name": "Hobgoblin Iron Shadow",
    "size": "M",
    "type": "humanoid (goblinoid)",
    "alignment": "Lawful Evil",
    "ac": 15,
    "hp": 32,
    "speed": "Walk 40",
    "str": 14,
    "dex": 16,
    "con": 15,
    "int": 14,
    "wis": 15,
    "cha": 11,
    "skill": "Acrobatics +5, Athletics +4, Stealth +5",
    "senses": "darkvision 60 ft.",
    "passive": 12,
    "languages": "Common, Goblin",
    "cr": "2",
    "trait": [
      {
        "Name": "Unarmored Defense",
        "Text": "While the hobgoblin is wearing no armor and wielding no shield, its AC includes its Wisdom modifier."
      },
      {
        "Name": "Spellcasting",
        "Text": "The hobgoblin is a 2nd-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 12, +4 to hit with spell attacks). It has the following wizard spells prepared:<br><br>Cantrips (at will): <em>minor illusion, prestidigitation, true strike</em><br>1st (1 slots): <em>charm person, disguise self, expeditious retreat, silent image</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The hobgoblin makes four attacks, each of which can be an unarmed strike or a dart attack. It can also use Shadow Jaunt once, either before or after one of the attacks."
      },
      {
        "Name": "Unarmed Strike",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:5 (1d4 + 3) bludgeoning damage."
      },
      {
        "Name": "Dart",
        "Text": "Ranged Weapon 5 to hit, range 20/60 ft., one target. Hit:5 (1d4 + 3) piercing damage."
      },
      {
        "Name": "Shadow Jaunt",
        "Text": "The hobgoblin magically teleports, along with any equipment it is wearing or carrying, up to 30 feet to an unoccupied space it can see. Both the space it is leaving and its destination must be in dim light or darkness."
      }
    ],
    "environment": [
      "grassland",
      "forest",
      "hill"
    ]
  },
  {
    "name": "Illithilich",
    "alias": [
      "Mind Flayer Lich"
    ],
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
    "languages": "Deep Speech, Undercommon, telepathy 120 ft.",
    "cr": "22",
    "trait": [
      {
        "Name": "Legendary Resistance (3/Day)",
        "Text": "If the illithilich fails a saving throw, it can choose to succeed instead."
      },
      {
        "Name": "Rejuvenation",
        "Text": "If it has a phylactery, a destroyed illithilich gains a new body in 1d10 days, regaining all its hit points and becoming active again. The new body appears within 5 feet of the phylactery."
      },
      {
        "Name": "Turn Resistance",
        "Text": "The illithilich has advantage on saving throws against any effect that turns undead."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The illithilich has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Innate Spellcasting (Psionics)",
        "Text": "<br>1/day each: <em>dominate monster, plane shift (self only)</em>"
      },
      {
        "Name": "Spellcasting",
        "Text": "The illithilich is an 18th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 20, +12 to hit with spell attacks). The lich has the following wizard spells prepared:<br><br>Cantrips (at will): <em>mage hand, prestidigitation, ray of frost</em><br>1st (1 slots): <em>detect magic, magic missile, shield, thunderwave</em><br>2nd (2 slots): <em>detect thoughts, invisibility, Melf's acid arrow, mirror image</em><br>3rd (3 slots): <em>animate dead, counterspell, dispel magic, fireball</em><br>4th (4 slots): <em>blight, dimension door</em><br>5th (5 slots): <em>cloudkill, scrying</em><br>6th (6 slots): <em>disintegrate, globe of invulnerability</em><br>7th (7 slots): <em>finger of death, plane shift</em><br>8th (8 slots): <em>dominate monster, power word stun</em><br>9th (9 slots): <em>power word kill</em>"
      }
    ],
    "action": [
      {
        "Name": "Paralyzing Touch",
        "Text": "Melee Spell 12 to hit, reach 5 ft., one creature. Hit:10 (3d6) cold damage. The target must succeed on a 18 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      },
      {
        "Name": "Tentacles",
        "Text": "Melee Weapon 12 to hit, reach 5 ft., one creature. Hit:21 (3d10 + 5) psychic damage. If the target is Large or smaller, it is grappled (escape 15) and must succeed on a 20 Intelligence saving throw or be stunned until this grapple ends."
      },
      {
        "Name": "Extract Brain",
        "Text": "Melee Weapon 12 to hit, reach 5 ft., one incapacitated humanoid grappled by the lich. Hit:55 (10d10) piercing damage. If this damage reduces the target to 0 hit points, the lich kills the target by extracting and devouring its brain."
      },
      {
        "Name": "Mind Blast (Recharge 5-6)",
        "Text": "The illithilich magically emits psychic energy in a 60-foot cone. Each creature in that area must succeed on a 18 Intelligence saving throw or take 27 (5d8 + 5) psychic damage and be stunned for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      }
    ],
    "legendary": [
      {
        "Name": "Tentacles",
        "Text": "The illithilich makes one attack with its tentacles."
      },
      {
        "Name": "Extract Brain (Costs 2 Actions)",
        "Text": "The illithilich uses Extract Brain."
      },
      {
        "Name": "Mind Blast (Costs 3 Actions)",
        "Text": "The illithilich recharges its Mind Blast and uses it."
      },
      {
        "Name": "Cast Spell (Costs 1–3 Actions)",
        "Text": "The illithilich uses a spell slot to cast a 1st-, 2nd-, or 3rd-level spell that it has prepared. Doing so costs 1 legendary action per level of the spell."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Illusionist",
    "size": "M",
    "type": "humanoid (any race)",
    "alignment": "Any",
    "ac": 12,
    "hp": 38,
    "speed": "Walk 30",
    "str": 9,
    "dex": 14,
    "con": 13,
    "int": 16,
    "wis": 11,
    "cha": 12,
    "save": "Int +5, Wis +2",
    "skill": "Arcana +5, History +5",
    "passive": 10,
    "languages": "any four languages",
    "cr": "3",
    "trait": [
      {
        "Name": "Displacement (Recharges after the Illusionist Casts an Illusion Spell of 1st Level or Higher)",
        "Text": "As a bonus action, the illusionist projects an illusion that makes the illusionist appear to be standing in a place a few inches from its actual location, causing any creature to have disadvantage on attack rolls against the illusionist. The effect ends if the illusionist takes damage, it is incapacitated, or its speed becomes 0."
      },
      {
        "Name": "Spellcasting",
        "Text": "The illusionist is a 7th-level spellcaster. its spellcasting ability is Intelligence (spell save DC 13, +5 to hit with spell attacks). The illusionist has the following wizard spells prepared:<br><br>Cantrips (at will): <em>dancing lights, mage hand, minor illusion, poison spray</em><br>1st (1 slots): <em>color spray*, disguise self*, mage armor, magic missile</em><br>2nd (2 slots): <em>invisibility*, mirror image*, phantasmal force*</em><br>3rd (3 slots): <em>major image*, phantom steed*</em><br>4th (4 slots): <em>phantasmal killer*</em>"
      }
    ],
    "action": [
      {
        "Name": "Quarterstaff",
        "Text": "Melee Weapon 1 to hit, reach 5 ft., one target. Hit:2 (1d6 - 1) bludgeoning damage, or 3 (1d8 - 1) bludgeoning damage if used with two hands."
      }
    ],
    "environment": [
      "urban"
    ]
  },
  {
    "name": "Ki-rin",
    "size": "H",
    "type": "celestial",
    "alignment": "Lawful Good",
    "ac": "20 natural armor",
    "hp": 152,
    "speed": "Walk 60, Fly 120 (hover)",
    "str": 21,
    "dex": 16,
    "con": 16,
    "int": 19,
    "wis": 20,
    "cha": 20,
    "skill": "Insight +9, Perception +9, Religion +8",
    "senses": "blindsight 30 ft., darkvision 120 ft.",
    "passive": 19,
    "immune": "poison",
    "conditionImmune": "poisoned",
    "languages": "all, telepathy 120 ft.",
    "cr": "12",
    "trait": [
      {
        "Name": "Legendary Resistance (3/Day)",
        "Text": "If the ki-rin fails a saving throw, it can choose to succeed instead."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The ki-rin has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Magic Weapons",
        "Text": "The ki-rin's weapon attacks are magical."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day: <em>create food and water</em>"
      },
      {
        "Name": "Spellcasting",
        "Text": "The ki-rin is a 18th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 17, +9 to hit with spell attacks). It has the following cleric spells prepared:<br><br>Cantrips (at will): <em>light, mending, sacred flame, spare the dying, thaumaturgy</em><br>1st (1 slots): <em>command, cure wounds, detect evil and good, protection from evil and good, sanctuary</em><br>2nd (2 slots): <em>calm emotions, lesser restoration, silence</em><br>3rd (3 slots): <em>dispel magic, remove curse, sending</em><br>4th (4 slots): <em>banishment, freedom of movement, guardian of faith</em><br>5th (5 slots): <em>greater restoration, mass cure wounds, scrying</em><br>6th (6 slots): <em>heroes' feast, true seeing</em><br>7th (7 slots): <em>etherealness, plane shift</em><br>8th (8 slots): <em>control weather</em><br>9th (9 slots): <em>true resurrection</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The ki-rin makes three attacks: two with its hooves and one with its horn."
      },
      {
        "Name": "Hoof",
        "Text": "Melee Weapon 9 to hit, reach 15 ft., one target. Hit:10 (2d4 + 5) bludgeoning damage."
      },
      {
        "Name": "Horn",
        "Text": "Melee Weapon 9 to hit, reach 5 ft., one target. Hit:14 (2d8 + 5) piercing damage."
      }
    ],
    "legendary": [
      {
        "Name": "Detect",
        "Text": "The ki-rin makes a Wisdom (Perception) check or a Wisdom (Insight) check."
      },
      {
        "Name": "Smite",
        "Text": "The ki-rin makes a hoof attack or casts sacred flame."
      },
      {
        "Name": "Move",
        "Text": "The ki-rin moves up to its half its speed without provoking opportunity attacks."
      }
    ],
    "environment": [
      "mountain",
      "grassland",
      "desert",
      "coastal"
    ]
  },
  {
    "name": "Kobold Dragonshield",
    "size": "S",
    "type": "humanoid (kobold)",
    "alignment": "Lawful Evil",
    "ac": "15 leather armor",
    "hp": 44,
    "speed": "Walk 20",
    "str": 12,
    "dex": 15,
    "con": 14,
    "int": 8,
    "wis": 9,
    "cha": 10,
    "skill": "Perception +1",
    "senses": "darkvision 60 ft.",
    "passive": 11,
    "languages": "Common, Draconic",
    "cr": "1",
    "trait": [
      {
        "Name": "Dragon's Resistance",
        "Text": "The kobold has resistance to a type of damage based on the color of dragon that invested it with power (choose or roll a d10): 1–2, acid (black); 3–4, cold (white); 5–6, fire (red); 7–8, lightning (blue); 9–10, poison (green)."
      },
      {
        "Name": "Heart of the Dragon",
        "Text": "If the kobold is frightened or paralyzed by an effect that allows a saving throw, it can repeat the save at the start of its turn to end the effect on itself and all kobolds within 30 feet of it. Any kobold that benefits from this trait (including the dragonshield) has advantage on its next attack roll."
      },
      {
        "Name": "Pack Tactics",
        "Text": "The kobold has advantage on an attack roll against a creature if at least one of the kobold's allies is within 5 feet of the creature and the ally isn't incapacitated."
      },
      {
        "Name": "Sunlight Sensitivity",
        "Text": "While in sunlight, the kobold has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The kobold makes two melee attacks."
      },
      {
        "Name": "Spear",
        "Text": "Melee or Ranged Weapon 3 to hit, reach 5 ft. or range 20/60 ft., one target. Hit:4 (1d6 + 1) piercing damage, or 5 (1d8 + 1) piercing damage if used with two hands to make a melee attack."
      }
    ],
    "environment": [
      "underdark",
      "mountain",
      "forest",
      "hill"
    ]
  },
  {
    "name": "Kobold Inventor",
    "size": "S",
    "type": "humanoid (kobold)",
    "alignment": "Lawful Evil",
    "ac": 12,
    "hp": 13,
    "speed": "Walk 30",
    "str": 7,
    "dex": 15,
    "con": 12,
    "int": 8,
    "wis": 7,
    "cha": 8,
    "skill": "Perception +0",
    "senses": "darkvision 60 ft.",
    "passive": 10,
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
        "Text": "Melee or Ranged Weapon 4 to hit, reach 5 ft. or range 20/60 ft., one target. Hit:4 (1d4 + 2) piercing damage."
      },
      {
        "Name": "Sling",
        "Text": "Ranged Weapon 4 to hit, range 30/120 ft., one target. Hit:4 (1d4 + 2) bludgeoning damage."
      },
      {
        "Name": "Weapon Invention",
        "Text": "The kobold uses one of the following options (roll a d8 or choose one); the kobold can use each one no more than once per day:"
      }
    ],
    "environment": [
      "underdark",
      "mountain",
      "forest",
      "hill",
      "urban"
    ]
  },
  {
    "name": "Kobold Scale Sorcerer",
    "size": "S",
    "type": "humanoid (kobold)",
    "alignment": "Lawful Evil",
    "ac": "15 natural armor",
    "hp": 27,
    "speed": "Walk 30",
    "str": 7,
    "dex": 15,
    "con": 14,
    "int": 10,
    "wis": 9,
    "cha": 14,
    "skill": "Arcana +2, Medicine +1",
    "senses": "darkvision 60 ft.",
    "passive": 9,
    "languages": "Common, Draconic",
    "cr": "1",
    "trait": [
      {
        "Name": "Sorcery Points",
        "Text": "The kobold has 3 sorcery points. It regains all its spent sorcery points when it finishes a long rest. It can spend its sorcery points on the following options:<br>Heightened Spell: When it casts a spell that forces a creature to a saving throw to resist the spell's effects, the kobold can spend 3 sorcery points to give one target of the spell disadvantage on its first saving throw against the spell.<br>Subtle Spell: When the kobold casts a spell, it can spend 1 sorcery point to cast the spell without any somatic or verbal components."
      },
      {
        "Name": "Pack Tactics",
        "Text": "The kobold has advantage on an attack roll against a creature it at least one of the kobold's allies is within 5 feet of the creature and the ally isn't incapacitated."
      },
      {
        "Name": "Sunlight Sensitivity",
        "Text": "While in sunlight, the kobold has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
      },
      {
        "Name": "Spellcasting",
        "Text": "The kobold is a 3rd-level spellcaster. Its spellcasting ability is Charisma (spell save DC 12, +4 to hit with spell attacks). It has the following sorcerer spells prepared:<br><br>Cantrips (at will): <em>fire bolt, mage hand, mending, poison spray</em><br>1st (1 slots): <em>charm person, chromatic orb, expeditious retreat</em><br>2nd (2 slots): <em>scorching ray</em>"
      }
    ],
    "action": [
      {
        "Name": "Dagger",
        "Text": "Melee or Ranged Weapon 4 to hit, reach 5 ft. or range 20/60 ft., one target. Hit:4 (1d4 + 2) piercing damage."
      }
    ],
    "environment": [
      "underdark",
      "mountain",
      "forest",
      "hill",
      "urban"
    ]
  },
  {
    "name": "Korred",
    "size": "S",
    "type": "fey",
    "alignment": "Chaotic Neutral",
    "ac": "17 natural armor",
    "hp": 102,
    "speed": "Walk 30, Burrow 30",
    "str": 23,
    "dex": 14,
    "con": 20,
    "int": 10,
    "wis": 15,
    "cha": 9,
    "skill": "Athletics +9, Perception +5, Stealth +5",
    "senses": "darkvision 120 ft., tremorsense 120 ft.",
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
    "languages": "Dwarvish, Gnomish, Sylvan, Terran, Undercommon",
    "cr": "7",
    "trait": [
      {
        "Name": "Command Hair",
        "Text": "The korred has at least one 50-foot-long rope woven out of its hair. As a bonus action, the korred commands one such rope within 30 feet of it to move up to 20 feet and entangle a Large or smaller creature that the korred can see. The target must succeed on a 13 Dexterity saving throw or become grappled by the rope (escape 13). Until this grapple ends. the target is restrained. The korred can use a bonus action to release the target, which is also freed if the korred dies or becomes incapacitated.<br>A rope of korred hair has AC 20 and 20 hit points. It regains 1 hit point at the start of each of the korred's turns while it has at least 1 hit point and the korred is alive. If the rope drops to 0 hit points, it is destroyed."
      },
      {
        "Name": "Stone Camouflage",
        "Text": "The korred has advantage on Dexterity (Stealth) checks made to hide in rocky terrain."
      },
      {
        "Name": "Stone's Strength",
        "Text": "While on the ground, the korred deals 2 extra dice of damage with any weapon attack (included in its attacks)."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day each: <em>conjure elemental (as 6th-level spell; {@creature galeb duhr}, {@creature gargoyle}, {@creature earth elemental}, or {@creature xorn} only), Otto's irresistible dance</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The korred makes two attacks with its greatclub or hurls two rocks."
      },
      {
        "Name": "Greatclub",
        "Text": "Melee Weapon 9 to hit, reach 5 ft., one target. Hit:10 (1d8 + 6) bludgeoning damage, or 19 (3d8 + 6) bludgeoning damage if the korred is on the ground."
      },
      {
        "Name": "Rock",
        "Text": "Ranged Weapon 9 to hit, range 60/120 ft., one target. Hit:15 (2d8 + 6) bludgeoning damage, or 24 (4d8 + 6) bludgeoning damage if the korred is on the ground."
      }
    ],
    "environment": [
      "forest"
    ]
  },
  {
    "name": "Kraken Priest",
    "size": "M",
    "type": "humanoid (any race)",
    "alignment": "Lawful Any Non-Good Chaotic Evil",
    "ac": 10,
    "hp": 75,
    "speed": "Walk 30, Swim 30",
    "str": 12,
    "dex": 10,
    "con": 16,
    "int": 10,
    "wis": 15,
    "cha": 14,
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
    "languages": "any two languages",
    "cr": "5",
    "trait": [
      {
        "Name": "Amphibious",
        "Text": "The priest can breathe air and water."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day each: <em>call lightning, Evard's black tentacles</em>"
      }
    ],
    "action": [
      {
        "Name": "Thunderous Touch",
        "Text": "Melee Spell 5 to hit, reach 5 ft., one creature. Hit:27 (5d10) thunder damage."
      },
      {
        "Name": "Voice of the Kraken (Recharges after a Short or Long Rest)",
        "Text": "A kraken speaks through the priest with a thunderous voice audible within 300 feet. Creatures of the priest's choice that can hear the kraken's words (which are spoken in Abyssal, Infernal, or Primordial) must succeed on a 14 Charisma saving throw or be frightened for 1 minute. A frightened target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      }
    ],
    "environment": [
      "coastal",
      "underwater"
    ]
  },
  {
    "name": "Leucrotta",
    "size": "L",
    "type": "monstrosity",
    "alignment": "Chaotic Evil",
    "ac": "14 natural armor",
    "hp": 67,
    "speed": "Walk 50",
    "str": 18,
    "dex": 14,
    "con": 15,
    "int": 9,
    "wis": 12,
    "cha": 6,
    "skill": "Deception +2, Perception +3",
    "senses": "darkvision 60 ft.",
    "passive": 13,
    "languages": "Abyssal, Gnoll",
    "cr": "3",
    "trait": [
      {
        "Name": "Keen Smell",
        "Text": "The leucrotta has advantage on Wisdom (Perception) checks that rely on smell."
      },
      {
        "Name": "Kicking Retreat",
        "Text": "If the leucrotta attacks with its hooves, it can take the Disengage action as a bonus action."
      },
      {
        "Name": "Mimicry",
        "Text": "The leucrotta can mimic animal sounds and humanoid voices. A creature that hears the sounds can tell they are imitations with a successful 14 Wisdom (Insight) check."
      },
      {
        "Name": "Rampage",
        "Text": "When the leucrotta reduces a creature to 0 hit points with a melee attack on its turn, it can take a bonus action to move up to half its speed and make an attack with its hooves."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The leucrotta makes two attacks: one with its bite and one with its hooves."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:8 (1d8 + 4) piercing damage. If the leucrotta scores a critical hit, it rolls the damage dice three times, instead of twice."
      },
      {
        "Name": "Hooves",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:11 (2d6 + 4) bludgeoning damage."
      }
    ],
    "environment": [
      "grassland",
      "desert"
    ]
  },
  {
    "name": "Martial Arts Adept",
    "size": "M",
    "type": "humanoid (any race)",
    "alignment": "Any",
    "ac": 16,
    "hp": 60,
    "speed": "Walk 40",
    "str": 11,
    "dex": 17,
    "con": 13,
    "int": 11,
    "wis": 16,
    "cha": 10,
    "skill": "Acrobatics +5, Insight +5, Stealth +5",
    "passive": 13,
    "languages": "any one language (usually Common)",
    "cr": "3",
    "trait": [
      {
        "Name": "Unarmored Defense",
        "Text": "While the adept is wearing no armor and wielding no shield, its AC includes its Wisdom modifier."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The adept makes three unarmed strikes or three dart attacks."
      },
      {
        "Name": "Unarmed Strike",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:7 (1d8 + 3) bludgeoning damage. If the target is a creature, the adept can choose one of the following additional effects:"
      },
      {
        "Name": "Dart",
        "Text": "Ranged Weapon 5 to hit, range 20/60 ft., one target. Hit:5 (1d4 + 3) piercing damage."
      }
    ],
    "reaction": [
      {
        "Name": "Deflect Missile",
        "Text": "In response to being hit by a ranged weapon attack, the adept deflects the missile. The damage it takes from the attack is reduced by 1d10 + 3. If the damage is reduced to 0, the adept catches the missile if it's small enough to hold in one hand and the adept has a hand free."
      }
    ],
    "environment": [
      "urban"
    ]
  },
  {
    "name": "Master Thief",
    "size": "M",
    "type": "humanoid (any race)",
    "alignment": "Any",
    "ac": "16 studded leather armor",
    "hp": 83,
    "speed": "Walk 30",
    "str": 11,
    "dex": 18,
    "con": 14,
    "int": 11,
    "wis": 11,
    "cha": 12,
    "save": "Dex +7, Int +3",
    "skill": "Acrobatics +7, Athletics +3, Perception +3, Sleight of hand +7, Stealth +7",
    "passive": 13,
    "languages": "any one language (usually Common) plus Thieves' cant",
    "cr": "5",
    "trait": [
      {
        "Name": "Cunning Action",
        "Text": "On each of its turns, the thief can use a bonus action to take the Dash, Disengage, or Hide action."
      },
      {
        "Name": "Evasion",
        "Text": "If the thief is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, the thief instead takes no damage if it succeeds on the saving throw, and only half damage if it fails."
      },
      {
        "Name": "Sneak Attack (1/Turn)",
        "Text": "The thief deals an extra 14 (4d6) damage when it hits a target with a weapon attack and has advantage on the attack roll, or when the target is within 5 feet of an ally of the thief that isn't incapacitated and the thief doesn't have disadvantage on the attack roll."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The thief makes three attacks with its shortsword."
      },
      {
        "Name": "Shortsword",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:7 (1d6 + 4) piercing damage."
      },
      {
        "Name": "Light Crossbow",
        "Text": "Ranged Weapon 7 to hit, range 80/320 ft., one target. Hit:8 (1d8 + 4) piercing damage."
      }
    ],
    "reaction": [
      {
        "Name": "Uncanny Dodge",
        "Text": "The thief halves the damage that it takes from an attack that hits it. The thief must be able to see the attacker."
      }
    ],
    "environment": [
      "urban"
    ]
  },
  {
    "name": "Maw Demon",
    "size": "M",
    "type": "fiend (demon)",
    "alignment": "Chaotic Evil",
    "ac": "13 natural armor",
    "hp": 33,
    "speed": "Walk 30",
    "str": 14,
    "dex": 8,
    "con": 13,
    "int": 5,
    "wis": 8,
    "cha": 5,
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
    "cr": "1",
    "trait": [
      {
        "Name": "Rampage",
        "Text": "When it reduces a creature to 0 hit points with a melee attack on its turn, the maw demon can take a bonus action to move up to half its speed and make a bite attack."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:11 (2d8 + 2) piercing damage."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Meenlock",
    "size": "S",
    "type": "fey",
    "alignment": "Neutral Evil",
    "ac": "15 natural armor",
    "hp": 31,
    "speed": "Walk 30",
    "str": 7,
    "dex": 15,
    "con": 12,
    "int": 11,
    "wis": 10,
    "cha": 8,
    "skill": "Perception +4, Stealth +6, Survival +2",
    "senses": "darkvision 120 ft.",
    "passive": 14,
    "conditionImmune": "frightened",
    "languages": "telepathy 120 ft.",
    "cr": "2",
    "trait": [
      {
        "Name": "Fear Aura",
        "Text": "Any beast or humanoid that starts its turn within 10 feet of the meenlock must succeed on a 11 Wisdom saving throw or be frightened until the start of the creature's next turn."
      },
      {
        "Name": "Light Sensitivity",
        "Text": "While in bright light, the meenlock has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
      },
      {
        "Name": "Shadow Teleport (Recharge 5-6)",
        "Text": "As a bonus action, the meenlock can teleport to an unoccupied space within 30 feet of it, provided that both the space it's teleporting from and its destination are in dim light or darkness. The destination need not be within line of sight."
      }
    ],
    "action": [
      {
        "Name": "Claws",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:7 (2d4 + 2) slashing damage, and the target must succeed on a 11 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      }
    ],
    "environment": [
      "forest",
      "swamp",
      "urban"
    ]
  },
  {
    "name": "Mind Flayer Psion",
    "alias": [
      "Illithid Psion"
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
        "Text": "The mind flayer is a 10th-level spellcaster. Its innate spellcasting ability is Intelligence (spell save DC 15; +7 to hit with spell attacks). It can innately cast the following spells, requiring no components:<br>At will: <em>guidance, mage hand, vicious mockery, true strike</em><br><br>1st (1 slots): <em>charm person, command, comprehend languages, sanctuary</em><br>2nd (2 slots): <em>crown of madness, phantasmal force, see invisibility</em><br>3rd (3 slots): <em>clairvoyance, fear, meld into stone</em><br>4th (4 slots): <em>confusion, stone shape</em><br>5th (5 slots): <em>scrying, telekinesis</em>"
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
    "name": "Mindwitness",
    "size": "L",
    "type": "aberration",
    "alignment": "Lawful Evil",
    "ac": "15 natural armor",
    "hp": 75,
    "speed": "Walk 0, Fly 20 (hover)",
    "str": 10,
    "dex": 14,
    "con": 14,
    "int": 15,
    "wis": 15,
    "cha": 10,
    "save": "Int +5, Wis +5",
    "skill": "Perception +8",
    "senses": "darkvision 120 ft.",
    "passive": 18,
    "conditionImmune": "prone",
    "languages": "Deep Speech, Undercommon, telepathy 600 ft.",
    "cr": "5",
    "trait": [
      {
        "Name": "Telepathic Hub",
        "Text": "When the mindwitness receives a telepathic message, it can telepathically share that message with up to seven other creatures within 600 feet of it that it can see."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The mindwitness makes two attacks: one with its tentacles and one with its bite."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one creature. Hit:16 (4d6 + 2) piercing damage."
      },
      {
        "Name": "Tentacles",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one creature. Hit:20 (4d8 + 2) psychic damage. if the target is Large or smaller, it is grappled (escape 13) and must succeed on a 13 Intelligence saving throw or be stunned until this grapple ends."
      },
      {
        "Name": "Eye Rays",
        "Text": "The mindwitness shoots three of the following magical eye rays at random (reroll duplicates), choosing one to three targets it can see within 120 feet of it:"
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Morkoth",
    "size": "M",
    "type": "aberration",
    "alignment": "Chaotic Evil",
    "ac": "17 natural armor",
    "hp": 130,
    "speed": "Walk 25, Swim 50",
    "str": 14,
    "dex": 14,
    "con": 14,
    "int": 20,
    "wis": 15,
    "cha": 13,
    "save": "Dex +6, Int +9, Wis +6",
    "skill": "Arcana +9, History +9, Perception +10, Stealth +6",
    "senses": "blindsight 30 ft., darkvision 120 ft.",
    "passive": 20,
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
    "languages": "telepathy 120 ft.",
    "cr": {
      "cr": "11",
      "lair": "12"
    },
    "trait": [
      {
        "Name": "Amphibious",
        "Text": "The morkoth can breathe air and water."
      },
      {
        "Name": "Spellcasting",
        "Text": "The morkoth is an 11th-level spellcaster. Its spellcasting ability is Intelligence (save DC 17, +9 to hit with spell attacks). The morkoth has the following wizard spells prepared:<br><br>Cantrips (at will): <em>acid splash, mage hand, mending, ray of frost, shocking grasp</em><br>1st (1 slots): <em>detect magic, identify, shield, witch bolt</em><br>2nd (2 slots): <em>darkness, detect thoughts, shatter</em><br>3rd (3 slots): <em>dispel magic, lightning bolt, sending</em><br>4th (4 slots): <em>dimension door, Evard's black tentacles</em><br>5th (5 slots): <em>geas, scrying</em><br>6th (6 slots): <em>chain lightning</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The morkoth makes three attacks: two with its bite and one with its tentacles or three with its bite."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:9 (2d6 + 2) slashing damage."
      },
      {
        "Name": "Tentacles",
        "Text": "Melee Weapon 6 to hit, reach 15 ft., one target. Hit:15 (3d8 + 2) bludgeoning damage, and the target is grappled (escape 14) if it is a Large or smaller creature. Until this grapple ends. the target is restrained and takes 15 (3d8 + 2) bludgeoning damage at the start of each of the morkoth's turns. and the morkoth can't use its tentacles on another target."
      },
      {
        "Name": "Hypnosis",
        "Text": "The morkoth projects a 30-foot cone of magical energy. Each creature in that area must make a 17 Wisdom saving throw. On a failed save, the creature is charmed by the morkoth for 1 minute. While charmed in this way, the target tries to get as close to the morkoth as possible, using its actions to Dash until it is within 5 feet of the morkoth. A charmed target can repeat the saving throw at the end of each of its turns and whenever it takes damage, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature has advantage on saving throws against the morkoth's Hypnosis for 24 hours."
      }
    ],
    "reaction": [
      {
        "Name": "Spell Reflection",
        "Text": "If the morkoth makes a successful saving throw against a spell, or a spell attack misses it, the morkoth can choose another creature (including the spellcaster) it can see within 120 feet of it. The spell targets the chosen creature instead of the morkoth. If the spell forced a saving throw, the chosen creature makes its own save. If the spell was an attack, the attack roll is rerolled against the chosen creature."
      }
    ],
    "environment": [
      "underwater",
      "coastal"
    ]
  },
  {
    "name": "Mouth of Grolantor",
    "size": "H",
    "type": "giant (hill giant)",
    "alignment": "Chaotic Evil",
    "ac": "14 natural armor",
    "hp": 105,
    "speed": "Walk 50",
    "str": 21,
    "dex": 10,
    "con": 18,
    "int": 5,
    "wis": 7,
    "cha": 5,
    "skill": "Perception +1",
    "passive": 11,
    "conditionImmune": "frightened",
    "languages": "Giant",
    "cr": "6",
    "trait": [
      {
        "Name": "Mouth of Madness",
        "Text": "The giant is immune to confusion spells and similar magic.<br>On each of its turns, the giant uses all its movement to move toward the nearest creature or whatever else it might perceive as food. Roll a d10 at the start of each of the giant's turns to determine its action for that turn:<br>1–3. The giant makes three attacks with its fists against one random target within its reach. If no other creatures are within its reach, the giant flies into a rage and gains advantage on all attack rolls until the end of its next turn.<br>4–5. The giant makes one attack with its fist against every creature within its reach. If no other creatures are within its reach, the giant makes one fist attack against itself.<br>6–7. The giant makes one attack with its bite against one random target within its reach. If no other creatures are within its reach, its eyes glaze over and it becomes stunned until the start of its next turn.<br>8–10. The giant makes three attacks against one random target within its reach: one attack with its bite and two with its fists. If no other creatures are within its reach, the giant flies into a rage and gains advantage on all attack rolls until the end of its next turn."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 8 to hit, reach 5 ft., one creature. Hit:15 (3d6 + 5) piercing damage, and the giant magically regains hit points equal to the damage dealt."
      },
      {
        "Name": "Fist",
        "Text": "Melee Weapon 8 to hit, reach 10 ft., one target. Hit:18 (3d8 + 5) bludgeoning damage."
      }
    ],
    "environment": [
      "grassland",
      "hill"
    ]
  },
  {
    "name": "Necromancer",
    "size": "M",
    "type": "humanoid (any race)",
    "alignment": "Any",
    "ac": 12,
    "hp": 66,
    "speed": "Walk 30",
    "str": 9,
    "dex": 14,
    "con": 12,
    "int": 17,
    "wis": 12,
    "cha": 11,
    "save": "Int +7, Wis +5",
    "skill": "Arcana +7, History +7",
    "passive": 11,
    "resist": [
      "necrotic"
    ],
    "languages": "any four languages",
    "cr": "9",
    "trait": [
      {
        "Name": "Grim Harvest (1/Turn)",
        "Text": "When necromancer kills a creature that is neither a construct nor undead with a spell of 1st level or higher, the necromancer regains hit points equal to twice the spell's level, or three times if it is a necromancy spell."
      },
      {
        "Name": "Spellcasting",
        "Text": "The necromancer is a 12th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 15, +7 to hit with spell attacks). The necromancer has the following wizard spells prepared:<br><br>Cantrips (at will): <em>chill touch, dancing lights, mage hand, mending</em><br>1st (1 slots): <em>false life*, mage armor, ray of sickness*</em><br>2nd (2 slots): <em>blindness/deafness*, ray of enfeeblement*, web</em><br>3rd (3 slots): <em>animate dead*, bestow curse*, vampiric touch*</em><br>4th (4 slots): <em>blight*, dimension door, stoneskin</em><br>5th (5 slots): <em>Bigby's hand, cloudkill</em><br>6th (6 slots): <em>circle of death*</em>"
      }
    ],
    "action": [
      {
        "Name": "Withering Touch",
        "Text": "Melee Spell 7 to hit, reach 5 ft., one creature. Hit:5 (2d4) necrotic damage."
      }
    ],
    "environment": [
      "desert",
      "urban"
    ]
  },
  {
    "name": "Neogi",
    "size": "S",
    "type": "aberration",
    "alignment": "Lawful Evil",
    "ac": "15 natural armor",
    "hp": 33,
    "speed": "Walk 30, Climb 30",
    "str": 6,
    "dex": 16,
    "con": 14,
    "int": 13,
    "wis": 12,
    "cha": 15,
    "skill": "Intimidation +4, Perception +3",
    "senses": "darkvision 60 ft.",
    "passive": 13,
    "languages": "Common, Deep Speech, Undercommon",
    "cr": "3",
    "trait": [
      {
        "Name": "Mental Fortitude",
        "Text": "The neogi has advantage on saving throws against being charmed or frightened, and magic can't put the neogi to sleep."
      },
      {
        "Name": "Spider Climb",
        "Text": "The neogi can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The neogi makes two attacks: one with its bite and one with its claws."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:6 (1d6 + 3) piercing damage plus 14 (4d6) poison damage, and the target must succeed on a 12 Constitution saving throw or become poisoned for 1 minute. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      },
      {
        "Name": "Claws",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:8 (2d4 + 3) slashing damage."
      },
      {
        "Name": "Enslave (Recharges after a Short or Long Rest)",
        "Text": "The neogi targets one creature it can see within 30 feet of it. The target must succeed on a 14 Wisdom saving throw or be magically charmed by the neogi for 1 day, or until the neogi dies or is more than 1 mile from the target. The charmed target obeys the neogi's commands and can't take reactions, and the neogi and the target can communicate telepathically with each other at a distance of up to 1 mile. Whenever the charmed target takes damage, it can repeat the saving throw, ending the effect on itself on a success."
      }
    ],
    "environment": [
      "underdark",
      "hill"
    ]
  },
  {
    "name": "Neogi Hatchling",
    "size": "T",
    "type": "aberration",
    "alignment": "Lawful Evil",
    "ac": 11,
    "hp": 7,
    "speed": "Walk 20, Climb 20",
    "str": 3,
    "dex": 13,
    "con": 10,
    "int": 6,
    "wis": 10,
    "cha": 9,
    "senses": "darkvision 60 ft.",
    "passive": 10,
    "cr": "1/8",
    "trait": [
      {
        "Name": "Mental Fortitude",
        "Text": "The hatchling has advantage on saving throws against being charmed or frightened, and magic can't put the hatchling to sleep."
      },
      {
        "Name": "Spider Climb",
        "Text": "The hatchling can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one target. Hit:3 (1d4 + 1) piercing damage plus 7 (2d6) poison damage, and the target must succeed on a 10 Constitution saving throw or become poisoned for 1 minute. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      }
    ],
    "environment": [
      "underdark",
      "hill"
    ]
  },
  {
    "name": "Neogi Master",
    "size": "M",
    "type": "aberration",
    "alignment": "Lawful Evil",
    "ac": "15 natural armor",
    "hp": 71,
    "speed": "Walk 30, Climb 30",
    "str": 6,
    "dex": 16,
    "con": 14,
    "int": 16,
    "wis": 12,
    "cha": 18,
    "save": "Wis +3",
    "skill": "Arcana +5, Deception +6, Intimidation +6, Perception +3, Persuasion +6",
    "senses": "darkvision 120 ft. (penetrates magical darkness)",
    "passive": 13,
    "languages": "Common, Deep Speech, Undercommon, telepathy 30 ft.",
    "cr": "4",
    "trait": [
      {
        "Name": "Mental Fortitude",
        "Text": "The neogi has advantage on saving throws against being charmed or frightened, and magic can't put the neogi to sleep."
      },
      {
        "Name": "Spider Climb",
        "Text": "The neogi can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
      },
      {
        "Name": "Spellcasting",
        "Text": "The neogi is a 7th-level spellcaster. Its spellcasting ability is Charisma (spell save DC 14, +6 to hit with spell attacks). It regains its expended spell slots when it finishes a short or long rest. It knows the following warlock spells:<br><br>Cantrips (at will): <em>eldritch blast (range 300 ft., +4 bonus to each damage roll), guidance, mage hand, minor illusion, prestidigitation, vicious mockery</em><br>4th (4 slots): <em>arms of Hadar, counterspell, dimension door, fear, hold person, hunger of Hadar, invisibility, unseen servant</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The neogi makes two attacks: one with its bite and one with its claws."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:6 (1d6 + 3) piercing damage plus 14 (4d6) poison damage, and the target must succeed on a 12 Constitution saving throw or become poisoned for 1 minute. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      },
      {
        "Name": "Claws",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:8 (2d4 + 3) slashing damage."
      },
      {
        "Name": "Enslave (Recharges after a Short or Long Rest)",
        "Text": "The neogi targets one creature it can see within 30 feet of it. The target must succeed on a 14 Wisdom saving throw or be magically charmed by the neogi for 1 day, or until the neogi dies or is more than 1 mile from the target. The charmed target obeys the neogi's commands and can't take reactions, and the neogi and the target can communicate telepathically with each other at a distance of up to 1 mile. Whenever the charmed target takes damage, it can repeat the saving throw, ending the effect on itself on a success."
      }
    ],
    "environment": [
      "underdark",
      "hill"
    ]
  },
  {
    "name": "Neothelid",
    "size": "G",
    "type": "aberration",
    "alignment": "Chaotic Evil",
    "ac": "16 natural armor",
    "hp": 325,
    "speed": "Walk 30",
    "str": 27,
    "dex": 7,
    "con": 21,
    "int": 3,
    "wis": 16,
    "cha": 12,
    "save": "Int +1, Wis +8, Cha +6",
    "senses": "blindsight 120 ft.",
    "passive": 13,
    "cr": "13",
    "trait": [
      {
        "Name": "Creature Sense",
        "Text": "The neothelid is aware of the presence of creatures within 1 mile of it that have an Intelligence score of 4 or higher. It knows the distance and direction to each creature, as well as each creature's Intelligence score, but can't sense anything else about it. A creature protected by a mind blank spell, a nondetection spell, or similar magic can't be perceived in this manner."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The neothelid has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Innate Spellcasting (Psionics)",
        "Text": "<br>1/day each: <em>confusion, feeblemind, telekinesis</em>"
      }
    ],
    "action": [
      {
        "Name": "Tentacles",
        "Text": "Melee Weapon 13 to hit, reach 15 ft., one target. Hit:21 (3d8 + 8) bludgeoning damage plus 13 (3d8) psychic damage. If the target is a Large or smaller creature, it must succeed on a 18 Strength saving throw or be swallowed by the neothelid. A swallowed creature is blinded and restrained, it has total cover against attacks and other effects outside the neothelid, and it takes 35 (10d6) acid damage at the start of each of the neothelid's turns.<br>If the neothelid takes 30 damage or more on a single turn from a creature inside it, the neothelid must succeed on a 18 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet of the neothelid. If the neothelid dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 20 feet of movement, exiting prone."
      },
      {
        "Name": "Acid Breath (Recharge 5-6)",
        "Text": "The neothelid exhales acid in a 60-foot cone. Each creature in that area must make a 18 Dexterity saving throw, taking 35 (10d6) acid damage on a failed save, or half as much damage on a successful one."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Nilbog",
    "size": "S",
    "type": "humanoid (goblinoid)",
    "alignment": "Chaotic Evil",
    "ac": "13 leather armor",
    "hp": 7,
    "speed": "Walk 30",
    "str": 8,
    "dex": 14,
    "con": 10,
    "int": 10,
    "wis": 8,
    "cha": 15,
    "skill": "Stealth +6",
    "senses": "darkvision 60 ft.",
    "passive": 9,
    "languages": "Common, Goblin",
    "cr": "1",
    "trait": [
      {
        "Name": "Nilbogism",
        "Text": "Any creature that attempts to damage the nilbog must first succeed on a 12 Charisma saving throw or be charmed until the end of the creature's next turn. A creature charmed in this way must use its action praising the nilbog. The nilbog can't regain hit points, including through magical healing, except through its Reversal of Fortune reaction."
      },
      {
        "Name": "Nimble Escape",
        "Text": "The nilbog can take the Disengage or Hide action as a bonus action on each of its turns."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day: <em>confusion</em>"
      }
    ],
    "action": [
      {
        "Name": "Fool's Scepter",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:5 (1d6 + 2) bludgeoning damage."
      },
      {
        "Name": "Shortbow",
        "Text": "Ranged Weapon 4 to hit, range 80/320 ft., one target. Hit:5 (1d6 + 2) piercing damage."
      }
    ],
    "reaction": [
      {
        "Name": "Reversal of Fortune",
        "Text": "In response to another creature dealing damage to the nilbog, the nilbog reduces the damage to 0 and regains 1d6 hit points."
      }
    ],
    "environment": [
      "underdark",
      "forest",
      "hill"
    ]
  },
  {
    "name": "Orc Blade of Ilneval",
    "size": "M",
    "type": "humanoid (orc)",
    "alignment": "Chaotic Evil",
    "ac": "18 chain mail",
    "hp": 60,
    "speed": "Walk 30",
    "str": 17,
    "dex": 11,
    "con": 17,
    "int": 10,
    "wis": 12,
    "cha": 14,
    "save": "Wis +3",
    "skill": "Insight +3, Intimidation +4, Perception +3",
    "senses": "darkvision 60 ft.",
    "passive": 13,
    "languages": "Common, Orc",
    "cr": "4",
    "trait": [
      {
        "Name": "Aggressive",
        "Text": "As a bonus action, the orc can move up to its speed toward a hostile creature that it can see."
      },
      {
        "Name": "Foe Smiter of Ilneval",
        "Text": "The orc deals an extra die of damage when it hits with a longsword attack (included in the attack)."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The orc makes two melee attacks with its longsword or two ranged attacks with its javelins. If Ilneval's Command is available to use, the orc can use it after these attacks."
      },
      {
        "Name": "Longsword",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:12 (2d8 + 3) slashing damage, or 14 (2d10 + 3) slashing damage when used with two hands."
      },
      {
        "Name": "Javelin",
        "Text": "Melee or Ranged Weapon 5 to hit, reach 5 ft. or range 30/120 ft., one target. Hit:6 (1d6 + 3) piercing damage."
      },
      {
        "Name": "Ilneval's Command (Recharges 4–6)",
        "Text": "Up to three allied orcs within 120 feet of this orc that can hear it can use their reactions to each make one weapon attack."
      }
    ],
    "environment": [
      "underdark",
      "mountain",
      "grassland",
      "forest",
      "hill"
    ]
  },
  {
    "name": "Orc Claw of Luthic",
    "size": "M",
    "type": "humanoid (orc)",
    "alignment": "Chaotic Evil",
    "ac": "14 hide armor",
    "hp": 45,
    "speed": "Walk 30",
    "str": 14,
    "dex": 15,
    "con": 16,
    "int": 10,
    "wis": 15,
    "cha": 11,
    "skill": "Intimidation +2, Medicine +4, Survival +4",
    "senses": "darkvision 60 ft.",
    "passive": 12,
    "languages": "Common, Orc",
    "cr": "2",
    "trait": [
      {
        "Name": "Aggressive",
        "Text": "As a bonus action, the orc can move up to its speed toward a hostile creature that it can see."
      },
      {
        "Name": "Spellcasting",
        "Text": "The orc is a 5th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 12, +4 to hit with spell attacks). The orc has the following cleric spells prepared:<br><br>Cantrips (at will): <em>guidance, mending, resistance, thaumaturgy</em><br>1st (1 slots): <em>bane, cure wounds, guiding bolt</em><br>2nd (2 slots): <em>augury, warding bond</em><br>3rd (3 slots): <em>bestow curse, create food and water</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The orc makes two claw attacks, or four claw attacks if it has fewer than half of its hit points remaining."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:6 (1d8 + 2) slashing damage."
      }
    ],
    "environment": [
      "underdark",
      "mountain"
    ]
  },
  {
    "name": "Orc Hand of Yurtrus",
    "size": "M",
    "type": "humanoid (orc)",
    "alignment": "Chaotic Evil",
    "ac": "12 hide armor",
    "hp": 30,
    "speed": "Walk 30",
    "str": 12,
    "dex": 11,
    "con": 16,
    "int": 11,
    "wis": 14,
    "cha": 9,
    "skill": "Arcana +2, Intimidation +1, Medicine +4, Religion +2",
    "senses": "darkvision 60 ft.",
    "passive": 12,
    "languages": "understands Common and Orc but can't speak",
    "cr": "2",
    "trait": [
      {
        "Name": "Aggressive",
        "Text": "As a bonus action, the orc can move up to its speed toward a hostile creature that it can see."
      },
      {
        "Name": "Spellcasting",
        "Text": "The orc is a 4th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 12, +4 to hit with spell attacks). It requires no verbal components to cast its spells. The orc has the following cleric spells prepared:<br><br>Cantrips (at will): <em>guidance, mending, resistance, thaumaturgy</em><br>1st (1 slots): <em>bane, detect magic, inflict wounds, protection from evil and good</em><br>2nd (2 slots): <em>blindness/deafness, silence</em>"
      }
    ],
    "action": [
      {
        "Name": "Touch of the White Hand",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one target. Hit:9 (2d8) necrotic damage."
      }
    ],
    "environment": [
      "underdark",
      "mountain",
      "grassland",
      "forest",
      "hill"
    ]
  },
  {
    "name": "Orc Nurtured One of Yurtrus",
    "size": "M",
    "type": "humanoid (orc)",
    "alignment": "Chaotic Evil",
    "ac": 9,
    "hp": 30,
    "speed": "Walk 30",
    "str": 15,
    "dex": 8,
    "con": 16,
    "int": 7,
    "wis": 11,
    "cha": 7,
    "senses": "darkvision 60 ft.",
    "passive": 10,
    "languages": "Common, Orc",
    "cr": "1/2",
    "trait": [
      {
        "Name": "Aggressive",
        "Text": "As a bonus action, the orc can move up to its speed toward a hostile creature that it can see."
      },
      {
        "Name": "Corrupted Carrier",
        "Text": "When the orc is reduced to 0 hit points, it explodes, and any creature within 10 feet of it must make a 13 Constitution saving throw. On a failed save, the creature takes 14 (4d6) poison damage and becomes poisoned. On a success, the creature takes half as much damage and isn't poisoned. A creature poisoned by this effect can repeat the save at the end of each of its turn, ending the effect on itself on a success. While poisoned by this effect, a creature can't regain hit points."
      },
      {
        "Name": "Nurtured One of Yurtrus",
        "Text": "The orc has advantage on saving throws against poison and disease."
      }
    ],
    "action": [
      {
        "Name": "Claws",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:4 (1d4 + 2) slashing damage plus 2 (1d4) necrotic damage."
      },
      {
        "Name": "Corrupted Vengeance",
        "Text": "The orc reduces itself to 0 hit points, triggering its Corrupted Carrier trait."
      }
    ],
    "environment": [
      "underdark",
      "mountain",
      "grassland",
      "forest",
      "hill"
    ]
  },
  {
    "name": "Orc Red Fang of Shargaas",
    "size": "M",
    "type": "humanoid (orc)",
    "alignment": "Chaotic Evil",
    "ac": "15 studded leather armor",
    "hp": 52,
    "speed": "Walk 30",
    "str": 11,
    "dex": 16,
    "con": 15,
    "int": 9,
    "wis": 11,
    "cha": 9,
    "skill": "Intimidation +1, Perception +2, Stealth +5",
    "senses": "darkvision 60 ft.",
    "passive": 12,
    "languages": "Common, Orc",
    "cr": "3",
    "trait": [
      {
        "Name": "Cunning Action",
        "Text": "On each of its turns, the orc can use a bonus action to take the Dash, Disengage, or Hide action."
      },
      {
        "Name": "Hand of Shargaas",
        "Text": "The orc deals 2 extra dice of damage when it hits a target with a weapon attack (included in its attacks)."
      },
      {
        "Name": "Shargaas's Sight",
        "Text": "Magical darkness doesn't impede the orc's darkvision."
      },
      {
        "Name": "Slayer",
        "Text": "In the first round of a combat, the orc has advantage on attack rolls against any creature that hasn't taken a turn yet. If the orc hits a creature that round who was surprised, the hit is automatically a critical hit."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The orc makes two scimitar or dart attacks."
      },
      {
        "Name": "Scimitar",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:13 (3d6 + 3) slashing damage."
      },
      {
        "Name": "Dart",
        "Text": "Ranged Weapon 5 to hit, range 20/60 ft., one target. Hit:10 (3d4 + 3) piercing damage."
      },
      {
        "Name": "Veil of Shargaas (Recharges after a Short or Long Rest)",
        "Text": "The orc casts darkness without any components. Wisdom is its spellcasting ability."
      }
    ],
    "environment": [
      "underdark",
      "mountain",
      "forest",
      "hill",
      "urban"
    ]
  },
  {
    "name": "Ox",
    "size": "L",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": 10,
    "hp": 15,
    "speed": "Walk 30",
    "str": 18,
    "dex": 10,
    "con": 14,
    "int": 2,
    "wis": 10,
    "cha": 4,
    "passive": 10,
    "cr": "1/4",
    "trait": [
      {
        "Name": "Charge",
        "Text": "If the ox moves at least 20 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 7 (2d6) piercing damage."
      },
      {
        "Name": "Beast of Burden",
        "Text": "The oxen is considered to be a Huge animal for the purposes of determining its carrying capacity."
      }
    ],
    "action": [
      {
        "Name": "Gore",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:7 (1d6 + 4) piercing damage."
      }
    ],
    "environment": [
      "grassland"
    ]
  },
  {
    "name": "Quetzalcoatlus",
    "size": "H",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": "13 natural armor",
    "hp": 30,
    "speed": "Walk 10, Fly 80",
    "str": 15,
    "dex": 13,
    "con": 13,
    "int": 2,
    "wis": 10,
    "cha": 5,
    "skill": "Perception +2",
    "passive": 12,
    "cr": "2",
    "trait": [
      {
        "Name": "Dive Attack",
        "Text": "If the quetzalcoatlus is flying and dives at least 30 feet toward a target and then hits with a bite attack, the attack deals an extra 10 (3d6) damage to the target."
      },
      {
        "Name": "Flyby",
        "Text": "The quetzalcoatlus doesn't provoke an opportunity attack when it flies out of an enemy's reach."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 4 to hit, reach 10 ft., one creature. Hit:12 (3d6 + 2) piercing damage."
      }
    ],
    "environment": [
      "mountain",
      "hill",
      "coastal"
    ]
  },
  {
    "name": "Quickling",
    "size": "T",
    "type": "fey",
    "alignment": "Chaotic Evil",
    "ac": 16,
    "hp": 10,
    "speed": "Walk 120",
    "str": 4,
    "dex": 23,
    "con": 13,
    "int": 10,
    "wis": 12,
    "cha": 7,
    "skill": "Acrobatics +8, Perception +5, Sleight of hand +8, Stealth +8",
    "senses": "darkvision 60 ft.",
    "passive": 15,
    "languages": "Common, Sylvan",
    "cr": "1",
    "trait": [
      {
        "Name": "Blurred Movement",
        "Text": "Attack rolls against the quickling have disadvantage unless the quickling is incapacitated or restrained."
      },
      {
        "Name": "Evasion",
        "Text": "If the quickling is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The quickling makes three dagger attacks."
      },
      {
        "Name": "Dagger",
        "Text": "Melee or Ranged Weapon 8 to hit, reach 5 ft. or range 20/60 ft., one target. Hit:8 (1d4 + 6) piercing damage."
      }
    ],
    "environment": [
      "forest"
    ]
  },
  {
    "name": "Red Guard Drake",
    "size": "M",
    "type": "dragon",
    "alignment": "Unaligned",
    "ac": "14 natural armor",
    "hp": 52,
    "speed": "Walk 30, Climb 30",
    "str": 16,
    "dex": 11,
    "con": 16,
    "int": 4,
    "wis": 10,
    "cha": 7,
    "skill": "Perception +2",
    "senses": "darkvision 60 ft.",
    "passive": 12,
    "resist": [
      "fire"
    ],
    "languages": "understands Draconic but can't speak it",
    "cr": "2",
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The drake attacks twice, once with its bite and once with its tail."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:7 (1d8 + 3) piercing damage."
      },
      {
        "Name": "Tail",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:6 (1d6 + 3) bludgeoning damage."
      }
    ],
    "environment": [
      "mountain",
      "underdark",
      "urban"
    ]
  },
  {
    "name": "Redcap",
    "size": "S",
    "type": "fey",
    "alignment": "Chaotic Evil",
    "ac": "13 natural armor",
    "hp": 45,
    "speed": "Walk 25",
    "str": 18,
    "dex": 13,
    "con": 18,
    "int": 10,
    "wis": 12,
    "cha": 9,
    "skill": "Athletics +6, Perception +3",
    "senses": "darkvision 60 ft.",
    "passive": 13,
    "languages": "Common, Sylvan",
    "cr": "3",
    "trait": [
      {
        "Name": "Iron Boots",
        "Text": "While moving, the redcap has disadvantage on Dexterity (Stealth) checks."
      },
      {
        "Name": "Outsize Strength",
        "Text": "While grappling, the redcap is considered to be Medium. Also, wielding a heavy weapon doesn't impose disadvantage on its attack rolls."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The redcap makes three attacks with its wicked sickle."
      },
      {
        "Name": "Wicked Sickle",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:9 (2d4 + 4) slashing damage."
      },
      {
        "Name": "Ironbound Pursuit",
        "Text": "The redcap moves up to its speed to a creature it can see and kicks with its iron boots. The target must succeed on a 14 Dexterity saving throw or take 20 (3d10 + 4) bludgeoning damage and be knocked prone."
      }
    ],
    "environment": [
      "forest",
      "swamp",
      "hill"
    ],
    "altArt": [
      {
        "name": "Madcap",
        "source": "BGDIA"
      }
    ]
  },
  {
    "name": "Rothé",
    "size": "L",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": 10,
    "hp": 15,
    "speed": "Walk 30",
    "str": 18,
    "dex": 10,
    "con": 14,
    "int": 2,
    "wis": 10,
    "cha": 4,
    "senses": "darkvision 30 ft.",
    "passive": 10,
    "cr": "1/4",
    "trait": [
      {
        "Name": "Charge",
        "Text": "If the rothé moves at least 20 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 7 (2d6) piercing damage."
      }
    ],
    "action": [
      {
        "Name": "Gore",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:7 (1d6 + 4) piercing damage."
      }
    ],
    "environment": [
      "grassland"
    ]
  },
  {
    "name": "Sea Spawn",
    "size": "M",
    "type": "humanoid",
    "alignment": "Neutral Evil",
    "ac": "11 natural armor",
    "hp": 32,
    "speed": "Walk 20, Swim 30",
    "str": 15,
    "dex": 8,
    "con": 15,
    "int": 6,
    "wis": 10,
    "cha": 8,
    "senses": "darkvision 120 ft.",
    "passive": 10,
    "languages": "understands Aquan and Common but can't speak",
    "cr": "1",
    "trait": [
      {
        "Name": "Limited Amphibiousness",
        "Text": "The sea spawn can breathe air and water, but needs to be submerged in the sea at least once a day for 1 minute to avoid suffocating."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The sea spawn makes three attacks: two unarmed strikes and one with its Piscine Anatomy."
      },
      {
        "Name": "Unarmed Strike",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:4 (1d4 + 2) bludgeoning damage."
      },
      {
        "Name": "Piscine Anatomy",
        "Text": "The sea spawn has one or more of the following attack options, provided it has the appropriate anatomy:"
      }
    ],
    "environment": [
      "underwater",
      "coastal"
    ]
  },
  {
    "name": "Shadow Mastiff",
    "size": "M",
    "type": "monstrosity",
    "alignment": "Neutral Evil",
    "ac": 12,
    "hp": 33,
    "speed": "Walk 40",
    "str": 16,
    "dex": 14,
    "con": 13,
    "int": 5,
    "wis": 12,
    "cha": 5,
    "skill": "Perception +3, Stealth +6",
    "senses": "darkvision 60 ft.",
    "passive": 13,
    "resist": [
      {
        "resist": [
          "bludgeoning",
          "piercing",
          "slashing"
        ],
        "note": "from nonmagical attacks while in dim light or darkness",
        "cond": true
      }
    ],
    "cr": "2",
    "trait": [
      {
        "Name": "Ethereal Awareness",
        "Text": "The shadow mastiff can see ethereal creatures and objects."
      },
      {
        "Name": "Keen Hearing and Smell",
        "Text": "The shadow mastiff has advantage on Wisdom (Perception) checks that rely on hearing or smell."
      },
      {
        "Name": "Shadow Blend",
        "Text": "While in dim light or darkness, the shadow mastiff can use a bonus action to become invisible, along with anything it is wearing or carrying. The invisibility lasts until the shadow mastiff uses a bonus action to end it or until the shadow mastiff attacks, is in bright light, or is incapacitated."
      },
      {
        "Name": "Sunlight Weakness",
        "Text": "While in bright light created by sunlight, the shadow mastiff has disadvantage on attack rolls, ability checks, and saving throws."
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
      "swamp",
      "hill"
    ]
  },
  {
    "name": "Shoosuva",
    "size": "L",
    "type": "fiend (demon)",
    "alignment": "Chaotic Evil",
    "ac": "14 natural armor",
    "hp": 110,
    "speed": "Walk 40",
    "str": 18,
    "dex": 13,
    "con": 17,
    "int": 7,
    "wis": 14,
    "cha": 9,
    "save": "Dex +4, Con +6, Wis +5",
    "senses": "darkvision 60 ft.",
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
    "conditionImmune": "charmed, frightened, poisoned",
    "languages": "Abyssal, Gnoll, telepathy 120 ft.",
    "cr": "8",
    "trait": [
      {
        "Name": "Rampage",
        "Text": "When it reduces a creature to 0 hit points with a melee attack on its turn, the shoosuva can take a bonus action to move up to half its speed and make a bite attack."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The shoosuva makes two attacks: one with its bite and one with its tail stinger."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:26 (4d10 + 4) piercing damage."
      },
      {
        "Name": "Tail Stinger",
        "Text": "Melee Weapon 7 to hit, reach 15 ft., one creature. Hit:13 (2d8 + 4) piercing damage, and the target must succeed on a 14 Constitution saving throw or become poisoned. While poisoned, the target is also paralyzed. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      }
    ],
    "environment": [
      "grassland",
      "forest",
      "hill",
      "arctic"
    ]
  },
  {
    "name": "Slithering Tracker",
    "size": "M",
    "type": "ooze",
    "alignment": "Chaotic Evil",
    "ac": 14,
    "hp": 32,
    "speed": "Walk 30, Climb 30, Swim 30",
    "str": 16,
    "dex": 19,
    "con": 15,
    "int": 10,
    "wis": 14,
    "cha": 11,
    "skill": "Stealth +8",
    "senses": "blindsight 120 ft.",
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
    "vulnerable": [
      "cold",
      "fire"
    ],
    "conditionImmune": "blinded, deafened, exhaustion, grappled, paralyzed, petrified, prone, restrained, unconscious",
    "languages": "understands languages it knew in its previous form but can't speak",
    "cr": "3",
    "trait": [
      {
        "Name": "Ambusher",
        "Text": "In the first round of a combat, the slithering tracker has advantage on attack rolls against any creature it surprised."
      },
      {
        "Name": "Damage Transfer",
        "Text": "While grappling a creature, the slithering tracker takes only haIf the damage dealt to it, and the creature it is grappling takes the other half."
      },
      {
        "Name": "False Appearance",
        "Text": "While the slithering tracker remains motionless, it is indistinguishable from a puddle, unless an observer succeeds on a 18 Intelligence (Investigation) check."
      },
      {
        "Name": "Keen Tracker",
        "Text": "The slithering tracker has advantage on Wisdom checks to track prey."
      },
      {
        "Name": "Liquid Form",
        "Text": "The slithering tracker can enter an enemy's space and stop there. It can also move through a space as narrow as 1 inch wide without squeezing."
      },
      {
        "Name": "Spider Climb",
        "Text": "The slithering tracker can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
      },
      {
        "Name": "Watery Stealth",
        "Text": "While underwater, the slithering tracker has advantage on Dexterity (Stealth) checks made to hide, and it can take the Hide action as a bonus action."
      }
    ],
    "action": [
      {
        "Name": "Slam",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:8 (1d10 + 3) bludgeoning damage."
      },
      {
        "Name": "Life Leech",
        "Text": "One Large or smaller creature that the slithering tracker can see within 5 feet of it must succeed on a 13 Dexterity saving throw or be grappled (escape 13). Until this grapple ends, the target is restrained and unable to breathe unless it can breathe water. In addition, the grappled target takes 16 (3d10) necrotic damage at the start of each of its turns. The slithering tracker can grapple only one target at a time."
      }
    ],
    "environment": [
      "underdark",
      "urban"
    ]
  },
  {
    "name": "Spawn of Kyuss",
    "size": "M",
    "type": "undead",
    "alignment": "Chaotic Evil",
    "ac": 10,
    "hp": 76,
    "speed": "Walk 30",
    "str": 16,
    "dex": 11,
    "con": 18,
    "int": 5,
    "wis": 7,
    "cha": 3,
    "save": "Wis +1",
    "senses": "darkvision 60 ft.",
    "passive": 8,
    "immune": "poison",
    "conditionImmune": "exhaustion, poisoned",
    "languages": "understands the languages it knew in life but can't speak",
    "cr": "5",
    "trait": [
      {
        "Name": "Regeneration",
        "Text": "The spawn of Kyuss regains 10 hit points at the start of its turn if it has at least 1 hit point and isn't in sunlight or a body of running water. If the spawn takes acid, fire, or radiant damage, this trait doesn't function at the start of the spawn's next turn. The spawn is destroyed only if it starts its turn with 0 hit points and doesn't regenerate."
      },
      {
        "Name": "Worms",
        "Text": "If the spawn of Kyuss is targeted by an effect that cures disease or removes a curse, all the worms infesting it wither away, and it loses its Burrowing Worm action."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The spawn of Kyuss makes two attacks with its claws and uses Burrowing Worm."
      },
      {
        "Name": "Burrowing Worm",
        "Text": "A worm launches from the spawn of Kyuss at one humanoid that the spawn can see within 10 feet of it. The worm latches onto the target's skin unless the target succeeds on a 11 Dexterity saving throw. The worm is a Tiny undead with AC 6, 1 hit point, a 2 (-4) in every ability score, and a speed of 1 foot. While on the target's skin, the worm can be killed by normal means or scraped off using an action (the spawn can use this action to launch a scraped-off worm at a humanoid it can see within 10 feet of the worm). Otherwise, the worm burrows under the target's skin at the end of the target's next turn, dealing 1 piercing damage to it. At the end of each of its turns thereafter, the target takes 7 (2d6) necrotic damage per worm infesting it (maximum of 10d6). A worm-infested target dies if it drops to 0 hit points, then rises 10 minutes later as a spawn of Kyuss. If a worm-infested creature is targeted by an effect that cures disease or removes a curse, all the worms infesting it wither away."
      },
      {
        "Name": "Claw",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:6 (1d6 + 3) slashing damage plus 7 (2d6) necrotic damage."
      }
    ],
    "environment": [
      "underdark",
      "desert"
    ]
  },
  {
    "name": "Stegosaurus",
    "size": "H",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": "13 natural armor",
    "hp": 76,
    "speed": "Walk 40",
    "str": 20,
    "dex": 9,
    "con": 17,
    "int": 2,
    "wis": 11,
    "cha": 5,
    "passive": 10,
    "cr": "4",
    "action": [
      {
        "Name": "Tail",
        "Text": "Melee Weapon 7 to hit, reach 10 ft., one target. Hit:26 (6d6 + 5) piercing damage."
      }
    ],
    "environment": [
      "grassland",
      "forest"
    ]
  },
  {
    "name": "Stench Kow",
    "size": "L",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": 10,
    "hp": 15,
    "speed": "Walk 30",
    "str": 18,
    "dex": 10,
    "con": 14,
    "int": 2,
    "wis": 10,
    "cha": 4,
    "senses": "darkvision 60 ft.",
    "passive": 10,
    "resist": [
      "cold",
      "fire",
      "poison"
    ],
    "cr": "1/4",
    "trait": [
      {
        "Name": "Charge",
        "Text": "If the kow moves at least 20 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 7 (2d6) piercing damage."
      },
      {
        "Name": "Stench",
        "Text": "Any creature other than a stench kow that starts its turn within 5 feet of the stench kow must succeed on a 12 Constitution saving throw or be poisoned until the start of the creature's next turn. On a successful saving throw, the creature is immune to the stench of all stench kows for 1 hour."
      }
    ],
    "action": [
      {
        "Name": "Gore",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:7 (1d6 + 4) piercing damage."
      }
    ]
  },
  {
    "name": "Stone Giant Dreamwalker",
    "size": "H",
    "type": "giant (stone giant)",
    "alignment": "Chaotic Neutral",
    "ac": "18 natural armor",
    "hp": 161,
    "speed": "Walk 40",
    "str": 23,
    "dex": 14,
    "con": 21,
    "int": 10,
    "wis": 8,
    "cha": 12,
    "save": "Dex +6, Con +9, Wis +3",
    "skill": "Athletics +14, Perception +3",
    "senses": "darkvision 60 ft.",
    "passive": 13,
    "conditionImmune": "charmed, frightened",
    "languages": "Common, Giant",
    "cr": "10",
    "trait": [
      {
        "Name": "Dreamwalker's Charm",
        "Text": "An enemy that starts its turn within 30 feet of the giant must make a 13 Charisma saving throw, provided that the giant isn't incapacitated. On a failed save, the creature is charmed by the giant. A creature charmed in this way can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Once it succeeds on the saving throw, the creature is immune to this giant's Dreamwalker's Charm for 24 hours."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The giant makes two attacks with its greatclub."
      },
      {
        "Name": "Greatclub",
        "Text": "Melee Weapon 10 to hit, reach 15 ft., one target. Hit:19 (3d8 + 6) bludgeoning damage."
      },
      {
        "Name": "Petrifying Touch",
        "Text": "The giant touches one Medium or smaller creature within 10 feet of it that is charmed by it. The target must make a 17 Constitution saving throw. On a failed save, the target becomes petrified, and the giant can adhere the target to its stony body. Greater restoration spells and other magic that can undo petrification have no effect on a petrified creature on the giant unless the giant is dead, in which case the magic works normally, freeing the petrified creature as well as ending the petrified condition on it."
      },
      {
        "Name": "Rock",
        "Text": "Ranged Weapon 10 to hit, range 60/240 ft., one target. Hit:28 (4d10 + 6) bludgeoning damage. If the target is a creature, it must succeed on a 17 Strength saving throw or be knocked prone."
      }
    ],
    "environment": [
      "mountain",
      "hill",
      "coastal"
    ]
  },
  {
    "name": "Storm Giant Quintessent",
    "size": "H",
    "type": "giant (storm giant)",
    "alignment": "Chaotic Good",
    "ac": 12,
    "hp": 230,
    "speed": "Walk 50, Fly 50 (hover), Swim 50",
    "str": 29,
    "dex": 14,
    "con": 20,
    "int": 17,
    "wis": 20,
    "cha": 19,
    "save": "Str +14, Con +10, Wis +10, Cha +9",
    "skill": "Arcana +8, History +8",
    "senses": "truesight 60 ft.",
    "passive": 20,
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
    "immune": "lightning, thunder",
    "languages": "Common, Giant",
    "cr": "16",
    "trait": [
      {
        "Name": "Amphibious",
        "Text": "The giant can breathe air and water."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The giant makes two Lightning Sword attacks or uses Wind Javelin twice."
      },
      {
        "Name": "Lightning Sword",
        "Text": "Melee Weapon 14 to hit, reach 15 ft., one target. Hit:40 (9d6 + 9) lightning damage."
      },
      {
        "Name": "Windjavelin",
        "Text": "The giant coalesces wind into a javelin-like form and hurls it at a creature it can see within 600 feet of it. The javelin is considered a magic weapon and deals 19 (3d6 + 9) piercing damage to the target, striking unerringly. The javelin disappears after it hits."
      }
    ],
    "legendary": [
      {
        "Name": "Gust",
        "Text": "The giant targets a creature it can see within 60 feet of it and creates a magical gust of wind around it. The target must succeed on a 18 Strength saving throw or be pushed up to 20 feet in any horizontal direction the giant chooses."
      },
      {
        "Name": "Thunderbolt (2 Actions)",
        "Text": "The giant hurls a thunderbolt at a creature it can see within 600 feet of it. The target must make a 18 Dexterity saving throw, taking 22 (4d10) thunder damage on a failed save, or half as much damage on a successful one."
      },
      {
        "Name": "One with the Storm (3 Actions)",
        "Text": "The giant vanishes, dispersing itself into the storm surrounding its lair. The giant can end this effect at the start of any of its turns, becoming a giant once more and appearing in any location it chooses within its lair. While dispersed, the giant can't take any actions other than lair actions, and it can't be targeted by attacks, spells, or other effects. The giant can't use this ability outside its lair, nor can it use this ability if another creature is using a control weather spell or similar magic to quell the storm."
      }
    ],
    "environment": [
      "underwater",
      "mountain",
      "desert",
      "coastal",
      "arctic"
    ]
  },
  {
    "name": "Swarm of Cranium Rats",
    "size": "M",
    "type": "beast",
    "alignment": "Lawful Evil",
    "ac": 12,
    "hp": 36,
    "speed": "Walk 30",
    "str": 9,
    "dex": 14,
    "con": 10,
    "int": 15,
    "wis": 11,
    "cha": 14,
    "senses": "darkvision 30 ft.",
    "passive": 10,
    "resist": [
      "bludgeoning",
      "piercing",
      "slashing"
    ],
    "conditionImmune": "charmed, frightened, grappled, paralyzed, petrified, prone, restrained, stunned",
    "languages": "telepathy 30 ft.",
    "cr": "5",
    "trait": [
      {
        "Name": "Illumination",
        "Text": "As a bonus action, the swarm can shed dim light from its brains in a 5-foot radius, increase the illumination to bright light in a 5 to 20-foot radius (and dim light for an additional number of feet equal to the chosen radius), or extinguish the light."
      },
      {
        "Name": "Swarm",
        "Text": "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny rat. The swarm can't regain hit points or gain temporary hit points."
      },
      {
        "Name": "Telepathic Shroud",
        "Text": "The swarm is immune to any effect that would sense its emotions or read its thoughts. as well as to all divination spells."
      },
      {
        "Name": "Innate Spellcasting (Psionics)",
        "Text": "<br>1/day each: <em>confusion, dominate monster</em>"
      }
    ],
    "action": [
      {
        "Name": "Bites",
        "Text": "Melee Weapon 5 to hit, reach 0 ft., one target in the swarm's space. Hit:14 (4d6) piercing damage, or 7 (2d6) piercing damage if the swarm has half of its hit points or fewer."
      }
    ],
    "environment": [
      "underdark",
      "urban"
    ]
  },
  {
    "name": "Swarm of Rot Grubs",
    "size": "M",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": 8,
    "hp": 22,
    "speed": "Walk 5, Climb 5",
    "str": 2,
    "dex": 7,
    "con": 10,
    "int": 1,
    "wis": 2,
    "cha": 1,
    "senses": "blindsight 10 ft.",
    "passive": 6,
    "resist": [
      "piercing",
      "slashing"
    ],
    "conditionImmune": "charmed, frightened, grappled, paralyzed, petrified, prone, restrained",
    "cr": "1/2",
    "trait": [
      {
        "Name": "Swarm",
        "Text": "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny maggot. The swarm can't regain hit points or gain temporary hit points."
      }
    ],
    "action": [
      {
        "Name": "Bites",
        "Text": "Melee Weapon 0 to hit, reach 0 ft., one creature in the swarm's space. Hit:The target is infested by 1d4 rot grubs. At the start of each of the target's turns, the target takes 1d6 piercing damage per rot grub infesting it. Applying fire to the bite wound before the end of the target's next turn deals 1 fire damage to the target and kills these rot grubs. After this time, these rot grubs are too far under the skin to be burned. If a target infested by rot grubs ends its turn with 0 hit points, it dies as the rot grubs burrow into its heart and kill it. Any effect that cures disease kills all rot grubs infesting the target."
      }
    ],
    "environment": [
      "underdark",
      "swamp"
    ]
  },
  {
    "name": "Swashbuckler",
    "size": "M",
    "type": "humanoid (any race)",
    "alignment": "Any Non-Good Chaotic Good Any Non-Lawful Evil",
    "ac": "17 leather armor",
    "hp": 66,
    "speed": "Walk 30",
    "str": 12,
    "dex": 18,
    "con": 12,
    "int": 14,
    "wis": 11,
    "cha": 15,
    "skill": "Acrobatics +8, Athletics +5, Persuasion +6",
    "passive": 10,
    "languages": "any one language (usually Common)",
    "cr": "3",
    "trait": [
      {
        "Name": "Lightfooted",
        "Text": "The swashbuckler can take the Dash or Disengage action as a bonus action on each of its turns."
      },
      {
        "Name": "Suave Defense",
        "Text": "While the swashbuckler is wearing light or no armor and wielding no shield, its AC includes its Charisma modifier."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The swashbuckler makes three attacks: one with a dagger and two with its rapier."
      },
      {
        "Name": "Dagger",
        "Text": "Melee or Ranged Weapon 6 to hit, reach 5 ft. or range 20/60 ft., one target. Hit:6 (1d4 + 4) piercing damage."
      },
      {
        "Name": "Rapier",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:8 (1d8 + 4) piercing damage."
      }
    ],
    "environment": [
      "coastal",
      "urban"
    ]
  },
  {
    "name": "Tanarukk",
    "size": "M",
    "type": "fiend (demon, orc)",
    "alignment": "Chaotic Evil",
    "ac": "14 natural armor",
    "hp": 95,
    "speed": "Walk 30",
    "str": 18,
    "dex": 13,
    "con": 20,
    "int": 9,
    "wis": 9,
    "cha": 9,
    "skill": "Intimidation +2, Perception +2",
    "senses": "darkvision 60 ft.",
    "passive": 12,
    "resist": [
      "fire",
      "poison"
    ],
    "languages": "Abyssal, Common, Orc",
    "cr": "5",
    "trait": [
      {
        "Name": "Aggressive",
        "Text": "As a bonus action, the tanarukk can move up to its speed toward a hostile creature that it can see."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The tanarukk has advantage on saving throws against spells and other magical effects."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The tanarukk makes two attacks: one with its bite and one with its greatsword."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:8 (1d8 + 4) piercing damage."
      },
      {
        "Name": "Greatsword",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:11 (2d6 + 4) slashing damage."
      }
    ],
    "reaction": [
      {
        "Name": "Unbridled Fury",
        "Text": "In response to being hit by a melee attack, the tanarukk can make one melee weapon attack with advantage against the attacker."
      }
    ],
    "environment": [
      "underdark",
      "mountain",
      "hill"
    ]
  },
  {
    "name": "Thorny",
    "size": "M",
    "type": "plant",
    "alignment": "Neutral",
    "ac": "14 natural armor",
    "hp": 27,
    "speed": "Walk 30",
    "str": 13,
    "dex": 12,
    "con": 13,
    "int": 2,
    "wis": 10,
    "cha": 6,
    "skill": "Perception +4, Stealth +3",
    "senses": "darkvision 60 ft.",
    "passive": 14,
    "resist": [
      "lightning",
      "piercing"
    ],
    "cr": "1",
    "trait": [
      {
        "Name": "Plant Camouflage",
        "Text": "The thorny has advantage on Dexterity (Stealth) checks it makes in any terrain with ample obscuring plant life."
      },
      {
        "Name": "Regeneration",
        "Text": "The thorny regains 5 hit points at the start of its turn. If it takes cold, fire, or necrotic damage, this trait doesn't function at the start of the thorny's next turn. The thorny dies only if it starts its turn with 0 hit points and doesn't regenerate."
      },
      {
        "Name": "Thorny Body",
        "Text": "At the start of its turn, the thorny deals 2 (1d4) piercing damage to any creature grappling it."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one target. Hit:8 (2d6 + 1) piercing damage."
      }
    ],
    "environment": [
      "forest",
      "swamp"
    ]
  },
  {
    "name": "Tlincalli",
    "size": "L",
    "type": "monstrosity",
    "alignment": "Neutral Evil",
    "ac": "15 natural armor",
    "hp": 85,
    "speed": "Walk 40",
    "str": 16,
    "dex": 13,
    "con": 16,
    "int": 8,
    "wis": 12,
    "cha": 8,
    "skill": "Perception +4, Stealth +4, Survival +4",
    "senses": "darkvision 60 ft.",
    "passive": 14,
    "languages": "Tlincalli",
    "cr": "5",
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The tlincalli makes two attacks: one with its longsword or spiked chain, and one with its sting."
      },
      {
        "Name": "Longsword",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:7 (1d8 + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands."
      },
      {
        "Name": "Spiked Chain",
        "Text": "Melee Weapon 6 to hit, reach 10 ft., one target. Hit:6 (1d6 + 3) piercing damage, and the target is grappled (escape 11) if it is a Large or smaller creature. Until this grapple ends, the target is restrained, and the tlincalli can't use the spiked chain against another target."
      },
      {
        "Name": "Sting",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one creature. Hit:6 (1d6 + 3) piercing damage plus 14 (4d6) poison damage, and the target must succeed on a 14 Constitution saving throw or be poisoned for 1 minute. If it fails the saving throw by 5 or more, the target is also paralyzed while poisoned. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      }
    ],
    "environment": [
      "desert"
    ]
  },
  {
    "name": "Transmuter",
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
    "cr": "5",
    "trait": [
      {
        "Name": "Transmuter's Stone",
        "Text": "The transmuter carries a magic stone it crafted that grants its bearer one of the following effects:<br>Darkvision out to a range of 60 feet<br>An extra 10 feet of speed while the bearer is unencumbered<br>Proficiency with Constitution saving throws<br>Resistance to acid, cold, fire, lightning, or thunder damage (transmuter's choice whenever the transmuter chooses this benefit)<br>If the transmuter has the stone and casts a transmutation spell of 1st level or higher, it can change the effect of the stone."
      },
      {
        "Name": "Spellcasting",
        "Text": "The transmuter is a 9th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 14, +6 to hit with spell attacks). The transmuter has the following wizard spells prepared:<br><br>Cantrips (at will): <em>light, mending, prestidigitation, ray of frost</em><br>1st (1 slots): <em>chromatic orb, expeditious retreat*, mage armor</em><br>2nd (2 slots): <em>alter self*, hold person, knock*</em><br>3rd (3 slots): <em>blink*, fireball, slow*</em><br>4th (4 slots): <em>polymorph*, stoneskin</em><br>5th (5 slots): <em>telekinesis*</em>"
      }
    ],
    "action": [
      {
        "Name": "Quarterstaff",
        "Text": "Melee Weapon 2 to hit, reach 5 ft., one target. Hit:2 (1d6 - 1) bludgeoning damage, or 3 (1d8 - 1) bludgeoning damage if used with two hands."
      }
    ],
    "environment": [
      "urban"
    ]
  },
  {
    "name": "Trapper",
    "size": "L",
    "type": "monstrosity",
    "alignment": "Unaligned",
    "ac": "13 natural armor",
    "hp": 85,
    "speed": "Walk 10, Climb 10",
    "str": 17,
    "dex": 10,
    "con": 17,
    "int": 2,
    "wis": 13,
    "cha": 4,
    "skill": "Stealth +2",
    "senses": "blindsight 30 ft., darkvision 60 ft.",
    "passive": 11,
    "cr": "3",
    "trait": [
      {
        "Name": "False Appearance",
        "Text": "While the trapper is attached to a ceiling, floor, or wall and remains motionless, it is almost indistinguishable from an ordinary section of ceiling, floor, or wall. A creature that can see it and succeeds on a 20 Intelligence (Investigation) or Intelligence (Nature) check can discern its presence."
      },
      {
        "Name": "Spider Climb",
        "Text": "The trapper can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
      }
    ],
    "action": [
      {
        "Name": "Smother",
        "Text": "One Large or smaller creature within 5 feet of the trapper must succeed on a 14 Dexterity saving throw or be grappled (escape 14). Until the grapple ends, the target takes 17 (4d6 + 3) bludgeoning damage plus 3 (1d6) acid damage at the start of each of its turns. While grappled in this way, the target is restrained, blinded, and at risk of suffocating. The trapper can smother only one creature at a time."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Ulitharid",
    "size": "L",
    "type": "aberration",
    "alignment": "Lawful Evil",
    "ac": "15 breastplate",
    "hp": 127,
    "speed": "Walk 30",
    "str": 15,
    "dex": 12,
    "con": 15,
    "int": 21,
    "wis": 19,
    "cha": 21,
    "save": "Int +9, Wis +8, Cha +9",
    "skill": "Arcana +9, Insight +8, Perception +8, Stealth +5",
    "senses": "darkvision 120 ft.",
    "passive": 18,
    "languages": "Deep Speech, Undercommon, telepathy 2 miles",
    "cr": "9",
    "trait": [
      {
        "Name": "Creature Sense",
        "Text": "The ulitharid is aware of the presence of creatures within 2 miles of it that have an Intelligence score of 4 or higher. It knows the distance and direction to each creature, as well as each creature's intelligence score, but can't sense anything else about it. A creature protected by a mind blank spell, a nondetection spell, or similar magic can't be perceived in this manner."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The ulitharid has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Psionic Hub",
        "Text": "If an elder brain establishes a psychic link with the ulitharid, the elder brain can form a psychic link with any other creature the ulitharid can detect using its Creature Sense. Any such link ends if the creature falls outside the telepathy ranges of both the ulitharid and the elder brain. The ulitharid can maintain its psychic link with the elder brain regardless of the distance between them, so long as they are both on the same plane of existence. If the ulitharid is more than 5 miles away from the elder brain, it can end the psychic link at any time (no action required)."
      },
      {
        "Name": "Innate Spellcasting (Psionics)",
        "Text": "<br>1/day each: <em>confusion, dominate monster, eyebite, feeblemind, mass suggestion, plane shift (self only), project image, scrying, telekinesis</em>"
      }
    ],
    "action": [
      {
        "Name": "Tentacles",
        "Text": "Melee Weapon 9 to hit, reach 10 ft., one creature. Hit:27 (4d10 + 5) psychic damage. If the target is Large or smaller, it is grappled (escape 14) and must succeed on a 17 Intelligence saving throw or be stunned until this grapple ends."
      },
      {
        "Name": "Extract Brain",
        "Text": "Melee Weapon 9 to hit, reach 5 ft., one incapacitated humanoid grappled by the ulitharid. Hit:55 (10d10) piercing damage. If this damage reduces the target to 0 hit points, the ulitharid kills the target by extracting and devouring its brain."
      },
      {
        "Name": "Mind Blast (Recharge 5-6)",
        "Text": "The ulitharid magically emits psychic energy in a 60-foot cone. Each creature in that area must succeed on a 17 Intelligence saving throw or take 31 (4d12 + 5) psychic damage and be stunned for 1 minute. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      }
    ],
    "environment": [
      "underdark"
    ]
  },
  {
    "name": "Vargouille",
    "size": "T",
    "type": "fiend",
    "alignment": "Chaotic Evil",
    "ac": 12,
    "hp": 13,
    "speed": "Walk 5, Fly 40",
    "str": 6,
    "dex": 14,
    "con": 14,
    "int": 4,
    "wis": 7,
    "cha": 2,
    "senses": "darkvision 60 ft.",
    "passive": 8,
    "resist": [
      "cold",
      "fire",
      "lightning"
    ],
    "immune": "poison",
    "conditionImmune": "poisoned",
    "languages": "understands Abyssal, Infernal, and any languages it knew before becoming a vargouille but can't speak",
    "cr": "1",
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:5 (1d6 + 2) piercing damage plus 10 (3d6) poison damage."
      },
      {
        "Name": "Kiss",
        "Text": "The vargouille kisses one incapacitated humanoid within 5 feet of it. The target must succeed on a 12 Charisma saving throw or become cursed. The cursed target loses 1 point of Charisma after each hour, as its head takes on fiendish aspects. The curse doesn't advance while the target is in sunlight or the area of a daylight spell; don't count that time. When the cursed target's Charisma becomes 2, it dies, and its head tears from its body and becomes a new vargouille. Casting remove curse, greater restoration, or a similar spell on the target before the transformation is complete can end the curse. Doing so undoes the changes made to the target by the curse."
      },
      {
        "Name": "Stunning Shriek",
        "Text": "The vargouille shrieks. Each humanoid and beast within 30 feet of the vargouille and able to hear it must succeed on a 12 Wisdom saving throw or be frightened until the end of the vargouille's next turn. While frightened in this way, a target is stunned. If a target's saving throw is successful or the effect ends for it, the target is immune to the Stunning Shriek of all vargouilles for 1 hour."
      }
    ],
    "environment": [
      "underdark",
      "swamp",
      "desert"
    ]
  },
  {
    "name": "Vegepygmy",
    "size": "S",
    "type": "plant",
    "alignment": "Neutral",
    "ac": "13 natural armor",
    "hp": 9,
    "speed": "Walk 30",
    "str": 7,
    "dex": 14,
    "con": 13,
    "int": 6,
    "wis": 11,
    "cha": 7,
    "skill": "Perception +2, Stealth +4",
    "senses": "darkvision 60 ft.",
    "passive": 12,
    "resist": [
      "lightning",
      "piercing"
    ],
    "languages": "Vegepygmy",
    "cr": "1/4",
    "trait": [
      {
        "Name": "Plant Camouflage",
        "Text": "The vegepygmy has advantage on Dexterity (Stealth) checks it makes in any terrain with ample obscuring plant life."
      },
      {
        "Name": "Regeneration",
        "Text": "The vegepygmy regains 3 hit points at the start of its turn. If it takes cold, fire, or necrotic damage, this trait doesn't function at the start of the vegepygmy's next turn. The vegepygmy dies only if it starts its turn with 0 hit points and doesn't regenerate."
      }
    ],
    "action": [
      {
        "Name": "Claws",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:5 (1d6 + 2) slashing damage."
      },
      {
        "Name": "Sling",
        "Text": "Ranged Weapon 4 to hit, range 30/120 ft., one target. Hit:4 (1d4 + 2) bludgeoning damage."
      }
    ],
    "environment": [
      "forest",
      "swamp"
    ]
  },
  {
    "name": "Vegepygmy Chief",
    "size": "S",
    "type": "plant",
    "alignment": "Neutral",
    "ac": "14 natural armor",
    "hp": 33,
    "speed": "Walk 30",
    "str": 14,
    "dex": 14,
    "con": 14,
    "int": 7,
    "wis": 12,
    "cha": 9,
    "skill": "Perception +3, Stealth +4",
    "senses": "darkvision 60 ft.",
    "passive": 13,
    "resist": [
      "lightning",
      "piercing"
    ],
    "languages": "Vegepygmy",
    "cr": "2",
    "trait": [
      {
        "Name": "Plant Camouflage",
        "Text": "The vegepygmy has advantage on Dexterity (Stealth) checks it makes in any terrain with ample obscuring plant life."
      },
      {
        "Name": "Regeneration",
        "Text": "The vegepygmy regains 5 hit points at the start of its turn. If it takes cold, fire, or necrotic damage, this trait doesn't function at the start of the vegepygmy's next turn. The vegepygmy dies only if it starts its turn with 0 hit points and doesn't regenerate."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The vegepygmy makes two attacks with its claws or two melee attacks with its spear."
      },
      {
        "Name": "Claws",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:5 (1d6 + 2) slashing damage."
      },
      {
        "Name": "Spear",
        "Text": "Melee or Ranged Weapon 4 to hit, reach 5 ft. or range 20/60 ft., one target. Hit:5 (1d6 + 2) piercing damage, or 6 (1d8 + 2) piercing damage if used with two hands to make a melee attack."
      },
      {
        "Name": "Spores (1/Day)",
        "Text": "A 15-foot-radius cloud of toxic spores extends out from the vegepygmy. The spores spread around corners. Each creature in that area that isn't a plant must succeed on a 12 Constitution saving throw or be poisoned. While poisoned in this way, a target takes 9 (2d8) poison damage at the start of each of its turns. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      }
    ],
    "environment": [
      "forest",
      "swamp"
    ]
  },
  {
    "name": "Velociraptor",
    "size": "T",
    "type": "beast",
    "alignment": "Unaligned",
    "ac": "13 natural armor",
    "hp": 10,
    "speed": "Walk 30",
    "str": 6,
    "dex": 14,
    "con": 13,
    "int": 4,
    "wis": 12,
    "cha": 6,
    "skill": "Perception +3",
    "passive": 13,
    "cr": "1/4",
    "trait": [
      {
        "Name": "Pack Tactics",
        "Text": "The velociraptor has advantage on an attack roll against a creature if at least one of the velociraptor's allies is within 5 feet of the creature and the ally isn't incapacitated."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The velociraptor makes two attacks: one with its bite and one with its claws."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one creature. Hit:5 (1d6 + 2) piercing damage."
      },
      {
        "Name": "Claws",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:4 (1d4 + 2) slashing damage."
      }
    ],
    "environment": [
      "grassland",
      "forest"
    ]
  },
  {
    "name": "War Priest",
    "size": "M",
    "type": "humanoid (any race)",
    "alignment": "Any",
    "ac": "18 plate armor",
    "hp": 117,
    "speed": "Walk 30",
    "str": 16,
    "dex": 10,
    "con": 14,
    "int": 11,
    "wis": 17,
    "cha": 13,
    "save": "Con +6, Wis +7",
    "skill": "Intimidation +5, Religion +4",
    "passive": 13,
    "languages": "any two languages",
    "cr": "9",
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The priest makes two melee attacks."
      },
      {
        "Name": "Maul",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:10 (2d6 + 3) bludgeoning damage."
      }
    ],
    "reaction": [
      {
        "Name": "Guided Strike (Recharges after a Short or Long Rest)",
        "Text": "The priest grants a +10 bonus to an attack roll made by itself or another creature within 30 feet of it. The priest can make this choice after the roll is made but before it hits or misses."
      }
    ],
    "environment": [
      "desert",
      "urban"
    ],
    "trait": [
      {
        "Name": "Spellcasting",
        "Text": "The priest is a 9th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 15, +7 to hit with spell attacks). It has the following cleric spells prepared:<br><br>Cantrips (at will): <em>light, mending, sacred flame, spare the dying</em><br>1st (1 slots): <em>divine favor, guiding bolt, healing word, shield of faith</em><br>2nd (2 slots): <em>lesser restoration, magic weapon, prayer of healing, silence, spiritual weapon</em><br>3rd (3 slots): <em>beacon of hope, crusader's mantle, dispel magic, revivify, spirit guardians, water walk</em><br>4th (4 slots): <em>banishment, freedom of movement, guardian of faith, stoneskin</em><br>5th (5 slots): <em>flame strike, mass cure wounds, hold monster</em>"
      }
    ]
  },
  {
    "name": "Warlock of the Archfey",
    "size": "M",
    "type": "humanoid (any race)",
    "alignment": "Any",
    "ac": 11,
    "hp": 49,
    "speed": "Walk 30",
    "str": 9,
    "dex": 13,
    "con": 11,
    "int": 11,
    "wis": 12,
    "cha": 18,
    "save": "Wis +3, Cha +6",
    "skill": "Arcana +2, Deception +6, Nature +2, Persuasion +6",
    "passive": 11,
    "conditionImmune": "charmed",
    "languages": "any two languages (usually Sylvan)",
    "cr": "4",
    "action": [
      {
        "Name": "Dagger",
        "Text": "Melee or Ranged Weapon 3 to hit, reach 5 ft. or range 20/60 ft., one target. Hit:4 (1d4 + 2) piercing damage."
      }
    ],
    "reaction": [
      {
        "Name": "Misty Escape (Recharges after a Short or Long Rest)",
        "Text": "In response to taking damage, the warlock turns invisible and teleports up to 60 feet to an unoccupied space it can see. It remains invisible until the start of its next turn or until it attacks, makes a damage roll, or casts a spell."
      }
    ],
    "environment": [
      "arctic",
      "forest",
      "mountain",
      "swamp",
      "urban"
    ],
    "trait": [
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day: <em>conjure fey</em>"
      },
      {
        "Name": "Spellcasting",
        "Text": "The warlock is an 11th-level spellcaster. Its spellcasting ability is Charisma (spell save DC 14, +6 to hit with spell attacks). It regains its expended spell slots when it finishes a short or long rest. It knows the following warlock spells:<br><br>Cantrips (at will): <em>dancing lights, eldritch blast, friends, mage hand, minor illusion, prestidigitation, vicious mockery</em><br>5th (5 slots): <em>blink, charm person, dimension door, dominate beast, faerie fire, fear, hold monster, misty step, phantasmal force, seeming, sleep</em>"
      }
    ]
  },
  {
    "name": "Warlock of the Fiend",
    "size": "M",
    "type": "humanoid (any race)",
    "alignment": "Any",
    "ac": 12,
    "hp": 78,
    "speed": "Walk 30",
    "str": 10,
    "dex": 14,
    "con": 15,
    "int": 12,
    "wis": 12,
    "cha": 18,
    "save": "Wis +4, Cha +7",
    "skill": "Arcana +4, Deception +7, Persuasion +7, Religion +4",
    "senses": "darkvision 60 ft.",
    "passive": 11,
    "resist": [
      {
        "resist": [
          "slashing"
        ],
        "note": "from nonmagical attacks not made with silvered weapons",
        "cond": true
      }
    ],
    "languages": "any two languages (usually Abyssal or Infernal)",
    "cr": "7",
    "trait": [
      {
        "Name": "Dark One's Own Luck (Recharges after a Short or Long Rest)",
        "Text": "When the warlock makes an ability check or saving throw, it can add a d10 to the roll. It can do this after the roll is made but before any of the roll's effects occur."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day each: <em>feeblemind, finger of death, plane shift</em>"
      },
      {
        "Name": "Spellcasting",
        "Text": "The warlock is a 17th-level spellcaster. Its spellcasting ability is Charisma (spell save DC 15, +7 to hit with spell attacks). It regains its expended spell slots when it finishes a short or long rest. It knows the following warlock spells:<br><br>Cantrips (at will): <em>eldritch blast, fire bolt, friends, mage hand, minor illusion, prestidigitation, shocking grasp</em><br>5th (5 slots): <em>banishment, burning hands, flame strike, hellish rebuke, magic circle, scorching ray, scrying, stinking cloud, suggestion, wall of fire</em>"
      }
    ],
    "action": [
      {
        "Name": "Mace",
        "Text": "Melee Weapon 3 to hit, reach 5 ft., one target. Hit:3 (1d6) bludgeoning damage plus 10 (3d6) fire damage."
      }
    ],
    "environment": [
      "arctic",
      "desert",
      "underdark",
      "urban"
    ]
  },
  {
    "name": "Warlock of the Great Old One",
    "size": "M",
    "type": "humanoid (any race)",
    "alignment": "Any",
    "ac": 12,
    "hp": 91,
    "speed": "Walk 30",
    "str": 9,
    "dex": 14,
    "con": 15,
    "int": 12,
    "wis": 12,
    "cha": 18,
    "save": "Wis +4, Cha +7",
    "skill": "Arcana +4, History +4",
    "senses": "darkvision 60 ft.",
    "passive": 11,
    "resist": [
      "psychic"
    ],
    "languages": "any two languages, telepathy 30 ft.",
    "cr": "6",
    "trait": [
      {
        "Name": "Whispering Aura",
        "Text": "At the start of each of the warlock's turns, each creature of its choice within 5 feet of it must succeed on a 15 Wisdom saving throw or take 10 (3d6) psychic damage, provided that the warlock isn't incapacitated."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "<br>1/day each: <em>arcane gate, true seeing</em>"
      },
      {
        "Name": "Spellcasting",
        "Text": "The warlock is a 14th-level spellcaster. Its spellcasting ability is Charisma (spell save DC 15, +7 to hit with spell attacks). It regains its expended spell slots when it finishes a short or long rest. It knows the following warlock spells:<br><br>Cantrips (at will): <em>chill touch, eldritch blast, guidance, mage hand, minor illusion, prestidigitation, shocking grasp</em><br>5th (5 slots): <em>armor of Agathys, arms of Hadar, crown of madness, clairvoyance, contact other plane, detect thoughts, dimension door, dissonant whispers, dominate beast, telekinesis, vampiric touch</em>"
      }
    ],
    "action": [
      {
        "Name": "Dagger",
        "Text": "Melee or Ranged Weapon 5 to hit, reach 5 ft. or range 20/60 ft., one target. Hit:4 (1d4 + 2) piercing damage."
      }
    ],
    "environment": [
      "desert",
      "hill",
      "mountain",
      "underdark",
      "urban"
    ]
  },
  {
    "name": "Warlord",
    "size": "M",
    "type": "humanoid (any race)",
    "alignment": "Any",
    "ac": "18 plate armor",
    "hp": 229,
    "speed": "Walk 30",
    "str": 20,
    "dex": 16,
    "con": 18,
    "int": 12,
    "wis": 12,
    "cha": 18,
    "save": "Str +9, Dex +7, Con +8",
    "skill": "Athletics +9, Intimidation +8, Perception +5, Persuasion +8",
    "passive": 15,
    "languages": "any two languages",
    "cr": "12",
    "trait": [
      {
        "Name": "Indomitable (3/Day)",
        "Text": "The warlord can reroll a saving throw it fails. It must use the new roll."
      },
      {
        "Name": "Survivor",
        "Text": "The warlord regains 10 hit points at the start of its turn if it has at least 1 hit point but fewer hit points than half its hit point maximum."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The warlord makes two weapon attacks."
      },
      {
        "Name": "Greatsword",
        "Text": "Melee Weapon 9 to hit, reach 5 ft., one target. Hit:12 (2d6 + 5) slashing damage."
      },
      {
        "Name": "Shortbow",
        "Text": "Ranged Weapon 7 to hit, range 80/320 ft., one target. Hit:6 (1d6 + 3) piercing damage."
      }
    ],
    "legendary": [
      {
        "Name": "Weapon Attack",
        "Text": "The warlord makes a weapon attack."
      },
      {
        "Name": "Command Ally",
        "Text": "The warlord targets one ally it can see within 30 feet of it. if the target can see and hear the warlord, the target can make one weapon attack as a reaction and gains advantage on the attack roll."
      },
      {
        "Name": "Frighten Foe (Costs 2 Actions)",
        "Text": "The warlord targets one enemy it can see within 30 feet of it. If the target can see and hear it, the target must succeed on a 16 Wisdom saving throw or be frightened until the end of warlord's next turn."
      }
    ],
    "environment": [
      "urban"
    ]
  },
  {
    "name": "White Guard Drake",
    "size": "M",
    "type": "dragon",
    "alignment": "Unaligned",
    "ac": "14 natural armor",
    "hp": 52,
    "speed": "Walk 30, Burrow 20, Climb 30",
    "str": 16,
    "dex": 11,
    "con": 16,
    "int": 4,
    "wis": 10,
    "cha": 7,
    "skill": "Perception +2",
    "senses": "darkvision 60 ft.",
    "passive": 12,
    "resist": [
      "cold"
    ],
    "languages": "understands Draconic but can't speak it",
    "cr": "2",
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The drake attacks twice, once with its bite and once with its tail."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:7 (1d8 + 3) piercing damage."
      },
      {
        "Name": "Tail",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:6 (1d6 + 3) bludgeoning damage."
      }
    ],
    "environment": [
      "arctic",
      "urban"
    ]
  },
  {
    "name": "Wood Woad",
    "size": "M",
    "type": "plant",
    "alignment": "Lawful Neutral",
    "ac": "18 natural armor, shield",
    "hp": 75,
    "speed": "Walk 30, Climb 30",
    "str": 18,
    "dex": 12,
    "con": 16,
    "int": 10,
    "wis": 13,
    "cha": 8,
    "skill": "Athletics +7, Perception +4, Stealth +4",
    "senses": "darkvision 60 ft.",
    "passive": 14,
    "resist": [
      "bludgeoning",
      "piercing"
    ],
    "vulnerable": [
      "fire"
    ],
    "conditionImmune": "charmed, frightened",
    "languages": "Sylvan",
    "cr": "5",
    "trait": [
      {
        "Name": "Magic Club",
        "Text": "In the wood woad's hand, its club is magical and deals 7 (3d4) extra damage (included in its attacks)."
      },
      {
        "Name": "Plant Camouflage",
        "Text": "The wood woad has advantage on Dexterity (Stealth) checks it makes in any terrain with ample obscuring plant life."
      },
      {
        "Name": "Regeneration",
        "Text": "The wood woad regains 10 hit points at the start of its turn if it is in contact with the ground. If the wood woad takes fire damage, this trait doesn't function at the start of the wood woad's next turn. The wood woad dies only if it starts its turn with 0 hit points and doesn't regenerate."
      },
      {
        "Name": "Tree Stride",
        "Text": "Once on each of its turns, the wood woad can use 10 feet of its movement to step magically into one living tree within 5 feet of it and emerge from a second living tree within 60 feet of it that it can see, appearing in an unoccupied space within 5 feet of the second tree. Both trees must be Large or bigger."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The wood woad makes two attacks with its club."
      },
      {
        "Name": "Club",
        "Text": "Melee Weapon 7 to hit, reach 5 ft., one target. Hit:14 (4d4 + 4) bludgeoning damage."
      }
    ],
    "environment": [
      "forest"
    ]
  },
  {
    "name": "Xvart",
    "size": "S",
    "type": "humanoid (xvart)",
    "alignment": "Chaotic Evil",
    "ac": "13 leather armor",
    "hp": 7,
    "speed": "Walk 30",
    "str": 8,
    "dex": 14,
    "con": 10,
    "int": 8,
    "wis": 7,
    "cha": 7,
    "skill": "Stealth +4",
    "senses": "darkvision 30 ft.",
    "passive": 8,
    "languages": "Abyssal",
    "cr": "1/8",
    "trait": [
      {
        "Name": "Low Cunning",
        "Text": "The xvart can take the Disengage action as a bonus action on each of its turns."
      },
      {
        "Name": "Overbearing Pack",
        "Text": "The xvart has advantage on Strength (Athletics) checks to shove a creature if at least one of the xvart's allies is within 5 feet of the target and the ally isn't incapacitated."
      },
      {
        "Name": "Raxivort's Tongue",
        "Text": "The xvart can communicate with ordinary bats and rats, as well as giant bats and giant rats."
      }
    ],
    "action": [
      {
        "Name": "Shortsword",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:5 (1d6 + 2) piercing damage."
      },
      {
        "Name": "Sling",
        "Text": "Ranged Weapon 4 to hit, range 30/120 ft., one target. Hit:4 (1d4 + 2) bludgeoning damage."
      }
    ],
    "environment": [
      "underdark",
      "hill"
    ]
  },
  {
    "name": "Xvart Speaker",
    "size": "S",
    "type": "humanoid (xvart)",
    "alignment": "Chaotic Evil",
    "ac": "13 leather armor",
    "hp": 7,
    "speed": "Walk 30",
    "str": 8,
    "dex": 14,
    "con": 10,
    "int": 13,
    "wis": 7,
    "cha": 7,
    "skill": "Stealth +4",
    "senses": "darkvision 30 ft.",
    "passive": 8,
    "languages": "Abyssal and one additional language (usually Common or Goblin)",
    "cr": "1/8",
    "trait": [
      {
        "Name": "Low Cunning",
        "Text": "The xvart can take the Disengage action as a bonus action on each of its turns."
      },
      {
        "Name": "Overbearing Pack",
        "Text": "The xvart has advantage on Strength (Athletics) checks to shove a creature if at least one of the xvart's allies is within 5 feet of the target and the ally isn't incapacitated."
      },
      {
        "Name": "Raxivort's Tongue",
        "Text": "The xvart can communicate with ordinary bats and rats, as well as giant bats and giant rats."
      }
    ],
    "action": [
      {
        "Name": "Shortsword",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:5 (1d6 + 2) piercing damage."
      },
      {
        "Name": "Sling",
        "Text": "Ranged Weapon 4 to hit, range 30/120 ft., one target. Hit:4 (1d4 + 2) bludgeoning damage."
      }
    ],
    "environment": [
      "underdark",
      "hill"
    ]
  },
  {
    "name": "Xvart Warlock of Raxivort",
    "size": "S",
    "type": "humanoid (xvart)",
    "alignment": "Chaotic Evil",
    "ac": 12,
    "hp": 22,
    "speed": "Walk 30",
    "str": 8,
    "dex": 14,
    "con": 12,
    "int": 8,
    "wis": 11,
    "cha": 12,
    "skill": "Stealth +4",
    "senses": "darkvision 30 ft.",
    "passive": 10,
    "languages": "Abyssal",
    "cr": "1",
    "trait": [
      {
        "Name": "Low Cunning",
        "Text": "The xvart can take the Disengage action as a bonus action on each of its turns."
      },
      {
        "Name": "Overbearing Pack",
        "Text": "The xvart has advantage on Strength (Athletics) checks to shove a creature if at least one of the xvart's allies is within 5 feet of the target and the ally isn't incapacitated."
      },
      {
        "Name": "Raxivort's Tongue",
        "Text": "The xvart can communicate with ordinary bats and rats, as well as giant bats and giant rats."
      },
      {
        "Name": "Innate Spellcasting",
        "Text": "The xvart's innate spellcasting ability is Charisma. it can innately cast the following spells, requiring no material components:<br>At will: <em>detect magic, mage armor (self only)</em>"
      },
      {
        "Name": "Spellcasting",
        "Text": "The xvart is a 3rd-level spellcaster. Its spellcasting ability is Charisma (spell save DC 11, +3 to hit with spell attacks). It regains its expended spell slots when it finishes a short or long rest. It knows the following warlock spells:<br><br>Cantrips (at will): <em>eldritch blast, mage hand, minor illusion, poison spray, prestidigitation</em><br>2nd (2 slots): <em>burning hands, expeditious retreat, invisibility, scorching ray</em>"
      }
    ],
    "action": [
      {
        "Name": "Scimitar",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:5 (1d6 + 2) slashing damage."
      }
    ],
    "environment": [
      "underdark",
      "hill"
    ]
  },
  {
    "name": "Yeth Hound",
    "size": "L",
    "type": "fey",
    "alignment": "Neutral Evil",
    "ac": "14 natural armor",
    "hp": 51,
    "speed": "Walk 40, Fly 40 (hover)",
    "str": 18,
    "dex": 17,
    "con": 16,
    "int": 5,
    "wis": 12,
    "cha": 7,
    "senses": "darkvision 60 ft.",
    "passive": 11,
    "immune": "bludgeoning, piercing, slashing from nonmagical attacks not made with silvered weapons",
    "conditionImmune": "charmed, exhaustion, frightened",
    "languages": "understands Common, Elvish, and Sylvan but can't speak",
    "cr": "4",
    "trait": [
      {
        "Name": "Keen Hearing and Smell",
        "Text": "The yeth hound has advantage on Wisdom (Perception) checks that rely on hearing or smell."
      },
      {
        "Name": "Sunlight Banishment",
        "Text": "If the yeth hound starts its turn in sunlight, it is transported to the Ethereal Plane. While sunlight shines on the spot from which it vanished, the hound must remain in the Deep Ethereal. After sunset, it returns to the Border Ethereal at the same spot, whereupon it typically sets out to find its pack or its master. The hound is visible on the Material Plane while it is in the Border Ethereal, and vice versa, but it can't affect or be affected by anything on the other plane. Once it is adjacent to its master or a pack mate that is on the Material Plane, a yeth hound in the Border Ethereal can return to the Material Plane as an action."
      },
      {
        "Name": "Telepathic Bond",
        "Text": "While the yeth hound is on the same plane of existence as its master, it can magically convey what it senses to its master, and the two can communicate telepathically with each other."
      }
    ],
    "action": [
      {
        "Name": "Bite",
        "Text": "Melee Weapon 6 to hit, reach 5 ft., one target. Hit:11 (2d6 + 4) piercing damage, plus 14 (4d6) psychic damage if the target is frightened."
      },
      {
        "Name": "Baleful Baying",
        "Text": "The yeth hound bays magically. Every enemy within 300 feet of the hound that can hear it must succeed on a 13 Wisdom saving throw or be frightened until the end of the hound's next turn or until the hound is incapacitated. A frightened target that starts its turn within 30 feet of the hound must use all its movement on that turn to get as far from the hound as possible, must finish the move before taking an action, and must take the most direct route, even if hazards lie that way. A target that successfully saves is immune to the baying of all yeth hounds for the next 24 hours."
      }
    ],
    "environment": [
      "grassland",
      "forest",
      "hill"
    ]
  },
  {
    "name": "Yuan-ti Anathema",
    "size": "H",
    "type": "monstrosity (shapechanger, yuan-ti)",
    "alignment": "Neutral Evil",
    "ac": "16 natural armor",
    "hp": 189,
    "speed": "Walk 40, Climb 30, Swim 30",
    "str": 23,
    "dex": 13,
    "con": 19,
    "int": 19,
    "wis": 17,
    "cha": 20,
    "skill": "Perception +7, Stealth +5",
    "senses": "darkvision 60 ft., blindsight 30 ft.",
    "passive": 17,
    "resist": [
      "acid",
      "fire",
      "lightning"
    ],
    "immune": "poison",
    "conditionImmune": "poisoned",
    "languages": "Abyssal, Common, Draconic",
    "cr": "12",
    "trait": [
      {
        "Name": "Magic Resistance",
        "Text": "The anathema has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Ophidiophobia Aura",
        "Text": "Any creature of the anathema's choice, other than a snake or a yuan-ti, that starts its turn within 30 feet of the anathema and can see or hear it must succeed on a 17 Wisdom saving throw or become frightened of snakes and yuan-ti. A frightened target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a target's saving throw is successful or the effect ends for it, the target is immune to this aura for the next 24 hours."
      },
      {
        "Name": "Shapechanger",
        "Text": "The anathema can use its action to polymorph into a Huge giant constrictor snake, or back into its true form. its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed."
      },
      {
        "Name": "Six Heads",
        "Text": "The anathema has advantage on Wisdom (Perception) checks and on saving throws against being blinded. charmed, deafened, frightened, stunned, or knocked unconscious."
      },
      {
        "Name": "Innate Spellcasting (Anathema Form Only)",
        "Text": "<br>1/day: <em>divine word</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack (Anathema Form Only)",
        "Text": "The anathema makes two claw attacks, one constrict attack, and one Flurry of Bites attack."
      },
      {
        "Name": "Claw (Anathema Form Only)",
        "Text": "Melee Weapon 10 to hit, reach 10 ft., one target. Hit:13 (2d6 + 6) slashing damage."
      },
      {
        "Name": "Constrict",
        "Text": "Melee Weapon 10 to hit, reach 15 ft., one Large or smaller creature. Hit:16 (3d6 + 6) bludgeoning damage plus 7 (2d6) acid damage, and the target is grappled (escape 16). Until this grapple ends, the target is restrained and takes 16 (3d6 + 6) bludgeoning damage plus 7 (2d6) acid damage at the start of each of its turns, and the anathema can't constrict another target."
      },
      {
        "Name": "Flurry of Bites",
        "Text": "Melee Weapon 10 to hit, reach 10 ft., one creature. Hit:27 (6d6 + 6) piercing damage plus 14 (4d6) poison damage."
      }
    ],
    "environment": [
      "underdark",
      "forest",
      "desert"
    ]
  },
  {
    "name": "Yuan-ti Broodguard",
    "size": "M",
    "type": "humanoid (yuan-ti)",
    "alignment": "Neutral Evil",
    "ac": "14 natural armor",
    "hp": 45,
    "speed": "Walk 30",
    "str": 15,
    "dex": 14,
    "con": 14,
    "int": 6,
    "wis": 11,
    "cha": 4,
    "save": "Str +4, Dex +4, Wis +2",
    "skill": "Perception +2",
    "senses": "darkvision 60 ft.",
    "passive": 12,
    "immune": "poison",
    "conditionImmune": "poisoned",
    "languages": "Abyssal, Common, Draconic",
    "cr": "2",
    "trait": [
      {
        "Name": "Mental Resistance",
        "Text": "The broodguard has advantage on saving throws against being charmed, and magic can't paralyze it."
      },
      {
        "Name": "Reckless",
        "Text": "At the start of its turn, the broodguard can gain advantage on all melee weapon attack rolls it makes during that turn, but attack rolls against it have advantage until the start of its next turn."
      }
    ],
    "action": [
      {
        "Name": "Multiattack",
        "Text": "The broodguard makes three attacks: one with its bite and two with its claws."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:6 (1d8 + 2) piercing damage."
      },
      {
        "Name": "Claws",
        "Text": "Melee Weapon 4 to hit, reach 5 ft., one target. Hit:5 (1d6 + 2) slashing damage."
      }
    ],
    "environment": [
      "underdark",
      "forest",
      "desert"
    ]
  },
  {
    "name": "Yuan-ti Malison (Type 4)",
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
        "Text": "The yuan-ti makes two ranged attacks or two melee attacks."
      },
      {
        "Name": "Bite (Snake Form Only)",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one creature. Hit:5 (1d4 + 3) piercing damage plus 7 (2d6) poison damage."
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
    "name": "Yuan-ti Malison (Type 5)",
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
        "Text": "The yuan-ti makes two ranged attacks or two melee attacks."
      },
      {
        "Name": "Bite (Snake Form Only)",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one creature. Hit:5 (1d4 + 3) piercing damage plus 7 (2d6) poison damage."
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
    "name": "Yuan-ti Mind Whisperer",
    "size": "M",
    "type": "monstrosity (shapechanger, yuan-ti)",
    "alignment": "Neutral Evil",
    "ac": "14 natural armor",
    "hp": 71,
    "speed": "Walk 30",
    "str": 16,
    "dex": 14,
    "con": 13,
    "int": 14,
    "wis": 14,
    "cha": 16,
    "save": "Wis +4, Cha +5",
    "skill": "Deception +5, Stealth +4",
    "senses": "darkvision 120 ft. (penetrates magical darkness)",
    "passive": 12,
    "immune": "poison",
    "conditionImmune": "poisoned",
    "languages": "Abyssal, Common, Draconic",
    "cr": "4",
    "trait": [
      {
        "Name": "Shapechanger",
        "Text": "The yuan-ti can use its action to polymorph into a Medium snake or back into its true form. Its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. If it dies, it stays in its current form."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The yuan-ti has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Mind Fangs (2/Day)",
        "Text": "The first time the yuan-ti hits with a melee attack on its turn, it can deal an extra 16 (3d10) psychic damage to the target."
      },
      {
        "Name": "Sseth's Blessing",
        "Text": "When the yuan-ti reduces an enemy to 0 hit points, the yuan-ti gains 9 temporary hit points."
      },
      {
        "Name": "Innate Spellcasting (Yuan-ti Form Only)",
        "Text": "<br>3/day: <em>suggestion</em>"
      },
      {
        "Name": "Spellcasting (Yuan-ti Form Only)",
        "Text": "The yuan-ti is a 6th-level spellcaster. Its spellcasting ability is Charisma (spell save DC 13, +5 to hit with spell attacks). It regains its expended spell slots when it finishes a short or long rest. It knows the following warlock spells:<br><br>Cantrips (at will): <em>eldritch blast (range 300 ft., +3 bonus to each damage roll), friends, message, minor illusion, poison spray, prestidigitation</em><br>3rd (3 slots): <em>charm person, crown of madness, detect thoughts, expeditious retreat, fly, hypnotic pattern, illusory script</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack (Yuan-ti Form Only)",
        "Text": "The yuan-ti makes one bite attack and one scimitar attack."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:5 (1d4 + 3) piercing damage plus 7 (2d6) poison damage."
      },
      {
        "Name": "Scimitar (Yuan-ti Form Only)",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:6 (1d6 + 3) slashing damage."
      }
    ],
    "environment": [
      "underdark",
      "forest",
      "desert"
    ]
  },
  {
    "name": "Yuan-ti Nightmare Speaker",
    "size": "M",
    "type": "monstrosity (shapechanger, yuan-ti)",
    "alignment": "Neutral Evil",
    "ac": "14 natural armor",
    "hp": 71,
    "speed": "Walk 30",
    "str": 16,
    "dex": 14,
    "con": 13,
    "int": 14,
    "wis": 12,
    "cha": 16,
    "save": "Wis +3, Cha +5",
    "skill": "Deception +5, Stealth +4",
    "senses": "darkvision 120 ft. (penetrates magical darkness)",
    "passive": 11,
    "immune": "poison",
    "conditionImmune": "poisoned",
    "languages": "Abyssal, Common, Draconic",
    "cr": "4",
    "trait": [
      {
        "Name": "Shapechanger",
        "Text": "The yuan-ti can use its action to polymorph into a Medium snake or back into its true form. Its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. If it dies, it stays in its current form."
      },
      {
        "Name": "Death Fangs (2/Day)",
        "Text": "The first time the yuan-ti hits with a melee attack on its turn, it can deal an extra 16 (3d10) necrotic damage to the target."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The yuan-ti has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Innate Spellcasting (Yuan-ti Form Only)",
        "Text": "<br>3/day: <em>suggestion</em>"
      },
      {
        "Name": "Spellcasting (Yuan-ti Form Only)",
        "Text": "The yuan-ti is a 6th-level spellcaster. Its spellcasting ability is Charisma (spell save DC 13, +5 to hit with spell attacks). It regains its expended spell slots when it finishes a short or long rest. It knows the following warlock spells:<br><br>Cantrips (at will): <em>chill touch, eldritch blast (range 300 ft., +3 bonus to each damage roll), mage hand, message, poison spray, prestidigitation</em><br>3rd (3 slots): <em>arms of Hadar, darkness, fear, hex, hold person, hunger of Hadar, witch bolt</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack (Yuan-ti Form Only)",
        "Text": "The yuan-ti makes one constrict attack and one scimitar attack."
      },
      {
        "Name": "Constrict",
        "Text": "Melee Weapon 5 to hit, reach 10 ft., one target. Hit:10 (2d6 + 3) bludgeoning damage, and the target is grappled (escape 14) if it is a Large or smaller creature. Until this grapple ends, the target is restrained, and the yuan-ti can't constrict another target."
      },
      {
        "Name": "Scimitar (Yuan-ti Form Only)",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:6 (1d6 + 3) slashing damage."
      },
      {
        "Name": "Invoke Nightmare (Recharges after a Short or Long Rest)",
        "Text": "The yuan-ti taps into the nightmares of a creature it can see within 60 feet of it and creates an illusory, immobile manifestation of the creature's deepest fears, visible only to that creature. The target must make a 13 Intelligence saving throw. On a failed save, the target takes 11 (2d10) psychic damage and is frightened of the manifestation, believing it to be real. The yuan-ti must concentrate to maintain the illusion (as if concentrating on a spell), which lasts for up to 1 minute and can't be harmed. The target can repeat the saving throw at the end of each of its turns, ending the illusion on a success, or taking 11 (2d10) psychic damage on a failure."
      }
    ],
    "environment": [
      "underdark",
      "forest",
      "desert"
    ]
  },
  {
    "name": "Yuan-ti Pit Master",
    "size": "M",
    "type": "monstrosity (shapechanger, yuan-ti)",
    "alignment": "Neutral Evil",
    "ac": "14 natural armor",
    "hp": 88,
    "speed": "Walk 30",
    "str": 16,
    "dex": 14,
    "con": 13,
    "int": 14,
    "wis": 12,
    "cha": 16,
    "save": "Wis +4, Cha +6",
    "skill": "Deception +6, Stealth +5",
    "senses": "darkvision 120 ft. (penetrates magical darkness)",
    "passive": 11,
    "immune": "poison",
    "conditionImmune": "poisoned",
    "languages": "Abyssal, Common, Draconic",
    "cr": "5",
    "trait": [
      {
        "Name": "Shapechanger",
        "Text": "The yuan-ti can use its action to polymorph into a Medium snake or back into its true form. Its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. It doesn't change form if it dies."
      },
      {
        "Name": "Magic Resistance",
        "Text": "The yuan-ti has advantage on saving throws against spells and other magical effects."
      },
      {
        "Name": "Poison's Disciple (2/Day)",
        "Text": "The first time the yuan-ti hits with a melee attack on its turn, it can deal an extra 16 (3d10) poison damage to the target."
      },
      {
        "Name": "Innate Spellcasting (Yuan-ti Form Only)",
        "Text": "<br>3/day: <em>suggestion</em>"
      },
      {
        "Name": "Spellcasting (Yuan-ti Form Only)",
        "Text": "The yuan-ti is a 6th-level spellcaster. Its spellcasting ability is Charisma (spell save DC 13, +5 to hit with spell attacks). It regains its expended spell slots when it finishes a short or long rest. It knows the following warlock spells:<br><br>Cantrips (at will): <em>eldritch blast (range 300 ft., +3 bonus to each damage roll), friends, guidance, mage hand, message, poison spray</em><br>3rd (3 slots): <em>command, counterspell, hellish rebuke, invisibility, misty step, unseen servant, vampiric touch</em>"
      }
    ],
    "action": [
      {
        "Name": "Multiattack (Yuan-ti Form Only)",
        "Text": "The yuan-ti makes two bite attacks using its snake arms."
      },
      {
        "Name": "Bite",
        "Text": "Melee Weapon 5 to hit, reach 5 ft., one target. Hit:5 (1d4 + 3) piercing damage plus 7 (2d6) poison damage."
      },
      {
        "Name": "Merrshaulk's Slumber (1/Day)",
        "Text": "The yuan-ti targets up to five creatures that it can see within 60 feet of it. Each target must succeed on a 13 Constitution saving throw or fall into a magical sleep and be unconscious for 10 minutes. A sleeping target awakens if it takes damage or if someone uses an action to shake or slap it awake. This magical sleep has no effect on a creature immune to being charmed."
      }
    ],
    "environment": [
      "underdark",
      "forest",
      "desert"
    ]
  }
]
