export let mordenkainens = [
		{
			"name": "Abyssal Wretch",
			"source": "MTF",
			"page": 136,
			"otherSources": [
				{
					"source": "BGDIA"
				}
			],
			"size": "M",
			"type": {
				"type": "fiend",
				"tags": [
					"demon"
				]
			},
			"alignment": [
				"C",
				"E"
			],
			"ac": [
				11
			],
			"hp": {
				"average": 18,
				"formula": "4d8"
			},
			"speed": {
				"walk": 20
			},
			"str": 9,
			"dex": 12,
			"con": 11,
			"int": 5,
			"wis": 8,
			"cha": 5,
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 9,
			"resist": [
				"cold",
				"fire",
				"lightning"
			],
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"charmed",
				"frightened",
				"poisoned"
			],
			"languages": [
				"understands Abyssal but can't speak"
			],
			"cr": "1/4",
			"action": [
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 3} to hit, reach 5 ft., one target. {@h}5 ({@damage 1d8 + 1}) slashing damage."
					]
				}
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/abyssal-wretch.mp3"
			},
			"senseTags": [
				"SD"
			],
			"languageTags": [
				"AB",
				"CS"
			],
			"damageTags": [
				"S"
			],
			"miscTags": [
				"MW"
			]
		},
		{
			"name": "Adult Kruthik",
			"source": "MTF",
			"page": 212,
			"size": "M",
			"type": "monstrosity",
			"alignment": [
				"U"
			],
			"ac": [
				{
					"ac": 18,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 39,
				"formula": "6d8 + 12"
			},
			"speed": {
				"walk": 40,
				"burrow": 20,
				"climb": 40
			},
			"str": 15,
			"dex": 16,
			"con": 15,
			"int": 7,
			"wis": 12,
			"cha": 8,
			"senses": [
				"darkvision 60 ft.",
				"tremorsense 60 ft."
			],
			"passive": 11,
			"languages": [
				"Kruthik"
			],
			"cr": "2",
			"trait": [
				{
					"name": "Keen Smell",
					"entries": [
						"The kruthik has advantage on Wisdom ({@skill Perception}) checks that rely on smell."
					]
				},
				{
					"name": "Pack Tactics",
					"entries": [
						"The kruthik has advantage on an attack roll against a creature if at least one of the kruthik's allies is within 5 feet of the creature and the ally isn't {@condition incapacitated}."
					]
				},
				{
					"name": "Tunneler",
					"entries": [
						"The kruthik can burrow through solid rock at half its burrowing speed and leaves a 5-foot-diameter tunnel in its wake."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The kruthik makes two stab attacks or two spike attacks."
					]
				},
				{
					"name": "Stab",
					"entries": [
						"{@atk mw} {@hit 5} to hit, reach 5 ft., one target. {@h}6 ({@damage 1d6 + 3}) piercing damage."
					]
				},
				{
					"name": "Spike",
					"entries": [
						"{@atk rw} {@hit 5} to hit, range 20/60 ft., one target. {@h}5 ({@damage 1d4 + 3}) piercing damage."
					]
				}
			],
			"environment": [
				"desert",
				"mountain",
				"underdark"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/adult-kruthik.mp3"
			},
			"traitTags": [
				"Keen Senses",
				"Pack Tactics"
			],
			"senseTags": [
				"D",
				"T"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"OTH"
			],
			"damageTags": [
				"P"
			],
			"miscTags": [
				"MW",
				"RW"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Adult Oblex",
			"source": "MTF",
			"page": 218,
			"otherSources": [
				{
					"source": "IMR"
				}
			],
			"size": "M",
			"type": "ooze",
			"alignment": [
				"L",
				"E"
			],
			"ac": [
				14
			],
			"hp": {
				"average": 75,
				"formula": "10d8 + 30"
			},
			"speed": {
				"walk": 20
			},
			"str": 8,
			"dex": 19,
			"con": 16,
			"int": 19,
			"wis": 12,
			"cha": 15,
			"save": {
				"int": "+7",
				"cha": "+5"
			},
			"skill": {
				"deception": "+5",
				"perception": "+4",
				"other": [
					{
						"oneOf": {
							"arcana": "+7",
							"history": "+7",
							"nature": "+7",
							"religion": "+7"
						}
					}
				]
			},
			"senses": [
				"blindsight 60 ft. (blind beyond this distance)"
			],
			"passive": 14,
			"conditionImmune": [
				"blinded",
				"charmed",
				"deafened",
				"exhaustion",
				"prone"
			],
			"languages": [
				"Common plus two more languages"
			],
			"cr": "5",
			"spellcasting": [
				{
					"name": "Innate Spellcasting",
					"headerEntries": [
						"The oblex's innate spellcasting ability is Intelligence (spell save {@dc 15}). It can innately cast the following spells, requiring no components:"
					],
					"daily": {
						"3e": [
							"{@spell charm person} (as 5th-level spell)",
							"{@spell color spray}",
							"{@spell detect thoughts}",
							"{@spell hold person} (as 3rd-level spell)"
						]
					},
					"ability": "int"
				}
			],
			"trait": [
				{
					"name": "Amorphous",
					"entries": [
						"The oblex can move through a space as narrow as 1 inch wide without squeezing."
					]
				},
				{
					"name": "Aversion to Fire",
					"entries": [
						"If the oblex takes fire damage, it has disadvantage on attack rolls and ability checks until the end of its next turn."
					]
				},
				{
					"name": "Sulfurous Impersonation",
					"entries": [
						"As a bonus action, the oblex can extrude a piece of itself that assumes the appearance of one Medium or smaller creature whose memories it has stolen. This simulacrum appears, feels, and sounds exactly like the creature it impersonates, though it smells faintly of sulfur. The oblex can impersonate {@dice 1d4 + 1} different creatures, each one tethered to its body by a strand of slime that can extend up to 120 feet away. For all practical purposes, the simulacrum is the oblex, meaning that the oblex occupies its space and the simulacrum's space simultaneously. The slimy tether is immune to damage, but it is severed if there is no opening at least 1 inch wide between the oblex's main body and the simulacrum. The simulacrum disappears if the tether is severed."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The oblex makes one pseudopod attack and uses Eat Memories."
					]
				},
				{
					"name": "Pseudopod",
					"entries": [
						"{@atk mw} {@hit 7} to hit, reach 5 ft., one target. {@h}7 ({@damage 1d6 + 4}) bludgeoning damage plus 5 ({@damage 2d4}) psychic damage."
					]
				},
				{
					"name": "Eat Memories",
					"entries": [
						"The oblex targets one creature it can see within 5 feet of it. The target must succeed on a {@dc 15} Wisdom saving throw or take 18 ({@damage 4d8}) psychic damage and become memory drained until it finishes a short or long rest or until it benefits from the {@spell greater restoration} or {@spell heal} spell. Constructs, oozes, plants, and undead succeed on the save automatically.",
						"While memory drained, the target must roll a {@dice d4} and subtract the number rolled from any ability check or attack roll it makes. Each time the target is memory drained beyond the first, the die size increases by one: the {@dice d4} becomes a {@dice d6}, the {@dice d6} becomes a {@dice d8}, and so on until the die becomes a {@dice d20}, at which point the target becomes {@condition unconscious} for 1 hour. The effect then ends.",
						"When an oblex causes a target to become memory drained, the oblex learns all the languages the target knows and gains all its proficiencies, except for any saving throw proficiencies."
					]
				}
			],
			"environment": [
				"swamp",
				"underdark",
				"urban"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/oblex-adult.mp3"
			},
			"traitTags": [
				"Amorphous"
			],
			"senseTags": [
				"B"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C",
				"X"
			],
			"damageTags": [
				"B",
				"Y"
			],
			"spellcastingTags": [
				"I"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"unconscious"
			],
			"conditionInflictSpell": [
				"blinded",
				"charmed",
				"paralyzed"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Air Elemental Myrmidon",
			"source": "MTF",
			"page": 202,
			"otherSources": [
				{
					"source": "DC"
				},
				{
					"source": "DIP"
				},
				{
					"source": "SLW"
				},
				{
					"source": "PotA",
					"page": 212
				}
			],
			"size": "M",
			"type": "elemental",
			"alignment": [
				"N"
			],
			"ac": [
				{
					"ac": 18,
					"from": [
						"{@item plate armor|phb}"
					]
				}
			],
			"hp": {
				"average": 117,
				"formula": "18d8 + 36"
			},
			"speed": {
				"walk": 30,
				"fly": {
					"number": 30,
					"condition": "(hover)"
				},
				"canHover": true
			},
			"str": 18,
			"dex": 14,
			"con": 14,
			"int": 9,
			"wis": 10,
			"cha": 10,
			"senses": [
				"darkvision 60 ft."
			],
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
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"paralyzed",
				"petrified",
				"poisoned",
				"prone"
			],
			"languages": [
				"Auran",
				"one language of its creator's choice"
			],
			"cr": "7",
			"trait": [
				{
					"name": "Magic Weapons",
					"entries": [
						"The myrmidon's weapon attacks are magical."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The myrmidon makes three flail attacks."
					]
				},
				{
					"name": "Flail",
					"entries": [
						"{@atk mw} {@hit 7} to hit, reach 5 ft., one target. {@h}8 ({@damage 1d8 + 4}) bludgeoning damage."
					]
				},
				{
					"name": "Lightning Strike {@recharge}",
					"entries": [
						"The myrmidon makes one flail attack. On a hit, the target takes an extra 18 ({@damage 4d8}) lightning damage, and the target must succeed on a {@dc 13} Constitution saving throw or be {@condition stunned} until the end of the myrmidon's next turn."
					]
				}
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/air-elemental-myrmidon.mp3"
			},
			"traitTags": [
				"Magic Weapons"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"AU"
			],
			"damageTags": [
				"B",
				"L"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"stunned"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Alkilith",
			"source": "MTF",
			"page": 130,
			"otherSources": [
				{
					"source": "DIP"
				},
				{
					"source": "SDW"
				}
			],
			"size": "M",
			"type": {
				"type": "fiend",
				"tags": [
					"demon"
				]
			},
			"alignment": [
				"C",
				"E"
			],
			"ac": [
				{
					"ac": 17,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 157,
				"formula": "15d8 + 90"
			},
			"speed": {
				"walk": 40
			},
			"str": 12,
			"dex": 19,
			"con": 22,
			"int": 6,
			"wis": 11,
			"cha": 7,
			"save": {
				"dex": "+8",
				"con": "+10"
			},
			"skill": {
				"stealth": "+8"
			},
			"senses": [
				"darkvision 120 ft."
			],
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
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"charmed",
				"frightened",
				"poisoned"
			],
			"languages": [
				"understands Abyssal but can't speak"
			],
			"cr": "11",
			"trait": [
				{
					"name": "Amorphous",
					"entries": [
						"The alkilith can move through a space as narrow as 1 inch wide without squeezing."
					]
				},
				{
					"name": "False Appearance",
					"entries": [
						"While the alkilith is motionless, it is indistinguishable from an ordinary slime or fungus."
					]
				},
				{
					"name": "Foment Madness",
					"entries": [
						"Any creature that isn't a demon that starts its turn within 30 feet of the alkilith must succeed on a {@dc 18} Wisdom saving throw, or it hears a faint buzzing in its head for a moment and has disadvantage on its next attack roll, saving throw, or ability check.",
						"If the saving throw against Foment Madness fails by 5 or more, the creature is instead subjected to the {@spell confusion} spell for 1 minute (no concentration required by the alkilith). While under the effect of that confusion, the creature is immune to Foment Madness."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"The alkilith has advantage on saving throws against spells and other magical effects."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The alkilith makes three tentacle attacks."
					]
				},
				{
					"name": "Tentacle",
					"entries": [
						"{@atk mw} {@hit 8} to hit, reach 15 ft., one target. {@h}18 ({@damage 4d6 + 4}) acid damage."
					]
				}
			],
			"environment": [
				"underdark",
				"urban"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/alkilith.mp3"
			},
			"traitTags": [
				"Amorphous",
				"False Appearance",
				"Magic Resistance"
			],
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Multiattack",
				"Tentacles"
			],
			"languageTags": [
				"AB",
				"CS"
			],
			"damageTags": [
				"A"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Allip",
			"source": "MTF",
			"page": 116,
			"otherSources": [
				{
					"source": "DIP"
				},
				{
					"source": "SLW"
				}
			],
			"size": "M",
			"type": "undead",
			"alignment": [
				"L",
				"E"
			],
			"ac": [
				13
			],
			"hp": {
				"average": 40,
				"formula": "9d8"
			},
			"speed": {
				"walk": 0,
				"fly": {
					"number": 40,
					"condition": "(hover)"
				},
				"canHover": true
			},
			"str": 6,
			"dex": 17,
			"con": 10,
			"int": 17,
			"wis": 15,
			"cha": 16,
			"save": {
				"int": "+6",
				"wis": "+5"
			},
			"skill": {
				"perception": "+5",
				"stealth": "+6"
			},
			"senses": [
				"darkvision 60 ft."
			],
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
			"immune": [
				"cold",
				"necrotic",
				"poison"
			],
			"conditionImmune": [
				"charmed",
				"exhaustion",
				"frightened",
				"grappled",
				"paralyzed",
				"petrified",
				"poisoned",
				"prone",
				"restrained"
			],
			"languages": [
				"the languages it knew in life"
			],
			"cr": "5",
			"trait": [
				{
					"name": "Incorporeal Movement",
					"entries": [
						"The allip can move through other creatures and objects as if they were difficult terrain. It takes 5 ({@damage 1d10}) force damage if it ends its turn inside an object."
					]
				}
			],
			"action": [
				{
					"name": "Maddening Touch",
					"entries": [
						"{@atk ms} {@hit 6} to hit, reach 5 ft., one target. {@h}17 ({@damage 4d6 + 3}) psychic damage."
					]
				},
				{
					"name": "Whispers of Madness",
					"entries": [
						"The allip chooses up to three creatures it can see within 60 feet of it. Each target must succeed on a {@dc 14} Wisdom saving throw, or it takes 7 ({@damage 1d8 + 3}) psychic damage and must use its reaction to make a melee weapon attack against one creature of the allip's choice that the allip can see. Constructs and undead are immune to this effect."
					]
				},
				{
					"name": "Howling Babble {@recharge}",
					"entries": [
						"Each creature within 30 feet of the allip that can hear it must make a {@dc 14} Wisdom saving throw. On a failed save, a target takes 12 ({@damage 2d8 + 3}) psychic damage, and it is {@condition stunned} until the end of its next turn. On a successful save, it takes half as much damage and isn't {@condition stunned}. Constructs and undead are immune to this effect."
					]
				}
			],
			"environment": [
				"swamp",
				"urban"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/allip.mp3"
			},
			"traitTags": [
				"Incorporeal Movement"
			],
			"senseTags": [
				"D"
			],
			"languageTags": [
				"LF"
			],
			"damageTags": [
				"O",
				"Y"
			],
			"conditionInflict": [
				"stunned"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Amnizu",
			"source": "MTF",
			"page": 164,
			"otherSources": [
				{
					"source": "BGDIA"
				}
			],
			"size": "M",
			"type": {
				"type": "fiend",
				"tags": [
					"devil"
				]
			},
			"alignment": [
				"L",
				"E"
			],
			"ac": [
				{
					"ac": 21,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 202,
				"formula": "27d8 + 81"
			},
			"speed": {
				"walk": 30,
				"fly": 40
			},
			"str": 11,
			"dex": 13,
			"con": 16,
			"int": 20,
			"wis": 12,
			"cha": 18,
			"save": {
				"dex": "+7",
				"con": "+9",
				"wis": "+7",
				"cha": "+10"
			},
			"skill": {
				"perception": "+7"
			},
			"senses": [
				"darkvision 120 ft."
			],
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
			"immune": [
				"fire",
				"poison"
			],
			"conditionImmune": [
				"charmed",
				"poisoned"
			],
			"languages": [
				"Common",
				"Infernal",
				"telepathy 1,000 ft."
			],
			"cr": "18",
			"spellcasting": [
				{
					"name": "Innate Spellcasting",
					"headerEntries": [
						"The amnizu's innate spellcasting ability is Intelligence (spell save {@dc 19}, {@hit 11} to hit with spell attacks). The amnizu can innately cast the following spells, requiring no material components:"
					],
					"will": [
						"{@spell charm person}",
						"{@spell command}"
					],
					"daily": {
						"3e": [
							"{@spell dominate person}",
							"{@spell fireball}"
						],
						"1e": [
							"{@spell dominate monster}",
							"{@spell feeblemind}"
						]
					},
					"ability": "int"
				}
			],
			"trait": [
				{
					"name": "Devil's Sight",
					"entries": [
						"Magical darkness doesn't impede the amnizu's darkvision."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"The amnizu has advantage on saving throws against spells and other magical effects."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The amnizu uses Poison Mind. It also makes two attacks: one with its whip and one with its Disruptive Touch."
					]
				},
				{
					"name": "Taskmaster Whip",
					"entries": [
						"{@atk mw} {@hit 11} to hit, reach 10 ft., one target. {@h}10 ({@damage 2d4 + 5}) slashing damage plus 33 ({@damage 6d10}) force damage."
					]
				},
				{
					"name": "Disruptive Touch",
					"entries": [
						"{@atk ms} {@hit 11} to hit, reach 5 ft., one target. {@h}44 ({@damage 8d10}) necrotic damage."
					]
				},
				{
					"name": "Poison Mind",
					"entries": [
						"The amnizu targets one or two creatures that it can see within 60 feet of it. Each target must succeed on a {@dc 19} Wisdom saving throw or take 26 ({@damage 4d12}) necrotic damage and is {@condition blinded} until the start of the amnizu's next turn."
					]
				},
				{
					"name": "Forgetfulness {@recharge}",
					"entries": [
						"The amnizu targets one creature it can see within 60 feet of it. That creature must make a {@dc 18} Intelligence saving throw and on a failure the target is {@condition stunned} for 1 minute. A {@condition stunned} creature repeats the saving throw at the end of each of its turns, ending the effect on itself on a success. If the target remains {@condition stunned} for the full minute, it forgets everything it sensed, experienced, and learned during the last 5 hours."
					]
				}
			],
			"reaction": [
				{
					"name": "Instinctive Charm",
					"entries": [
						"When a creature within 60 feet of the amnizu makes an attack roll against it, and another creature is within the attack's range, the attacker must make a {@dc 19} Wisdom saving throw. On a failed save, the attacker must target the creature that is closest to it, not including the amnizu or itself. If multiple creatures are closest, the attacker chooses which one to target. If the saving throw is successful, the attacker is immune to the amnizu's Instinctive Charm for 24 hours."
					]
				}
			],
			"variant": [
				{
					"type": "variant",
					"name": "Devil Summoning",
					"entries": [
						"Some amnizus have an action that allows them to summon other devils.",
						{
							"name": "Summon Devil (1/Day)",
							"type": "entries",
							"entries": [
								"The amnizu summons {@dice 2d4} bearded devils or {@dice 1d4} barbed devils. A summoned devil appears in an unoccupied space within 60 feet of the amnizu, acts as an ally of the amnizu, and can't summon other devils. It remains for 1 minute, until the amnizu dies, or until its summoner dismisses it as an action"
							]
						}
					]
				}
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/amnizu.mp3"
			},
			"traitTags": [
				"Devil's Sight",
				"Magic Resistance"
			],
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C",
				"I",
				"TP"
			],
			"damageTags": [
				"N",
				"O",
				"S"
			],
			"spellcastingTags": [
				"I"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"blinded",
				"stunned"
			],
			"conditionInflictSpell": [
				"charmed",
				"prone"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Armanite",
			"source": "MTF",
			"page": 131,
			"size": "L",
			"type": {
				"type": "fiend",
				"tags": [
					"demon"
				]
			},
			"alignment": [
				"C",
				"E"
			],
			"ac": [
				{
					"ac": 16,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 84,
				"formula": "8d10 + 40"
			},
			"speed": {
				"walk": 60
			},
			"str": 21,
			"dex": 18,
			"con": 21,
			"int": 8,
			"wis": 12,
			"cha": 13,
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 11,
			"resist": [
				"cold",
				"fire",
				"lightning"
			],
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"poisoned"
			],
			"languages": [
				"Abyssal",
				"telepathy 120 ft."
			],
			"cr": "7",
			"trait": [
				{
					"name": "Magic Resistance",
					"entries": [
						"The armanite has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Magic Weapons",
					"entries": [
						"The armanite's weapon attacks are magical."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The armanite makes three attacks: one with its hooves, one with its claws, and one with its serrated tail."
					]
				},
				{
					"name": "Hooves",
					"entries": [
						"{@atk mw} {@hit 8} to hit, reach 5 ft., one target. {@h}12 ({@damage 2d6 + 5}) bludgeoning damage."
					]
				},
				{
					"name": "Claws",
					"entries": [
						"{@atk mw} {@hit 8} to hit, reach 5 ft., one target. {@h}10 ({@damage 2d4 + 5}) slashing damage."
					]
				},
				{
					"name": "Serrated Tail",
					"entries": [
						"{@atk mw} {@hit 8} to hit, reach 10 ft., one target. {@h}16 ({@damage 2d10 + 5}) slashing damage."
					]
				},
				{
					"name": "Lightning Lance {@recharge 5}",
					"entries": [
						"The armanite looses a bolt of lightning in a line 60 feet long and 10 feet wide. Each creature in the line must make a {@dc 15} Dexterity saving throw, taking 27 ({@damage 6d8}) lightning damage on a failed save, or half as much damage on a successful one."
					]
				}
			],
			"environment": [
				"underdark"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/armanite.mp3"
			},
			"traitTags": [
				"Magic Resistance",
				"Magic Weapons"
			],
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"AB",
				"TP"
			],
			"damageTags": [
				"B",
				"L",
				"S"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Astral Dreadnought",
			"source": "MTF",
			"page": 117,
			"size": "G",
			"type": {
				"type": "monstrosity",
				"tags": [
					"titan"
				]
			},
			"alignment": [
				"U"
			],
			"ac": [
				{
					"ac": 20,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 297,
				"formula": "17d20 + 119"
			},
			"speed": {
				"walk": 15,
				"fly": {
					"number": 80,
					"condition": "(hover)"
				},
				"canHover": true
			},
			"str": 28,
			"dex": 7,
			"con": 25,
			"int": 5,
			"wis": 14,
			"cha": 18,
			"save": {
				"dex": "+5",
				"wis": "+9"
			},
			"skill": {
				"perception": "+9"
			},
			"senses": [
				"darkvision 120 ft."
			],
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
			"conditionImmune": [
				"charmed",
				"exhaustion",
				"frightened",
				"paralyzed",
				"petrified",
				"poisoned",
				"prone",
				"stunned"
			],
			"cr": "21",
			"trait": [
				{
					"name": "Antimagic Cone",
					"entries": [
						"The astral dreadnought's opened eye creates an area of antimagic, as in the {@spell antimagic field} spell, in a 150-foot cone. At the start of each of its turns, the dreadnought decides which way the cone faces. The cone doesn't function while the dreadnought's eye is closed or while the dreadnought is {@condition blinded}."
					]
				},
				{
					"name": "Astral Entity",
					"entries": [
						"The astral dreadnought can't leave the Astral Plane, nor can it be banished or otherwise transported out of the Astral Plane."
					]
				},
				{
					"name": "Demiplanar Donjon",
					"entries": [
						"Any creature or object that the astral dreadnought swallows is transported to a demiplane that can be entered by no other means except a {@spell wish} spell or this creature's Donjon Visit ability. A creature can leave the demiplane only by using magic that enables planar travel, such as the {@spell plane shift} spell. The demiplane resembles a stone cave roughly 1,000 feet in diameter with a ceiling 100 feet high. Like a stomach, it contains the remains of the dreadnought's past meals.",
						"The dreadnought can't be harmed from within the demiplane. If the dreadnought dies, the demiplane disappears, and everything inside it appears around the corpse. The demiplane is otherwise indestructible."
					]
				},
				{
					"name": "Legendary Resistance (3/Day)",
					"entries": [
						"If the astral dreadnought fails a saving throw, it can choose to succeed instead."
					]
				},
				{
					"name": "Magic Weapons",
					"entries": [
						"An astral dreadnought's weapon attacks are magical."
					]
				},
				{
					"name": "Sever Silver Cord",
					"entries": [
						"If the astral dreadnought scores a critical hit against a creature traveling through the Astral Plane by means of the {@spell astral projection} spell, the dreadnought can cut the target's silver cord instead of dealing damage."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The astral dreadnought makes three attacks: one with its bite and two with its claws."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 16} to hit, reach 10 ft., one target. {@h}36 ({@damage 5d10 + 9}) piercing damage. If the target is a creature of Huge size or smaller and this damage reduces it to 0 hit points or it is {@condition incapacitated}, the astral dreadnought swallows it. The swallowed target, along with everything it is wearing and carrying, appears in an unoccupied space on the floor of the astral dreadnought's Demiplanar Donjon."
					]
				},
				{
					"name": "Claw",
					"entries": [
						"{@atk mw} {@hit 16} to hit, reach 20 ft., one target. {@h}19 ({@damage 3d6 + 9}) slashing damage."
					]
				}
			],
			"legendary": [
				{
					"name": "Claw",
					"entries": [
						"The astral dreadnought makes one claw attack."
					]
				},
				{
					"name": "Donjon Visit (Costs 2 Actions)",
					"entries": [
						"One creature that is Huge or smaller that the astral dreadnought can see within 60 feet of it must succeed on a {@dc 19} Charisma saving throw or be magically teleported to an unoccupied space on the floor of the astral dreadnought's Demiplanar Donjon. At the end of the target's next turn, the target reappears in the space it left or in the nearest unoccupied space if that space is occupied."
					]
				},
				{
					"name": "Psychic Projection (Costs 3 Actions)",
					"entries": [
						"Each creature within 60 feet of the astral dreadnought must make a {@dc 19} Wisdom saving throw, taking 15 ({@damage 2d10 + 4}) psychic damage on a failed save, or half as much damage on a successful one."
					]
				}
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/astral-dreadnought.mp3"
			},
			"traitTags": [
				"Legendary Resistances",
				"Magic Weapons"
			],
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Multiattack",
				"Swallow"
			],
			"damageTags": [
				"P",
				"S",
				"Y"
			],
			"miscTags": [
				"AOE",
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"incapacitated"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Autumn Eladrin",
			"source": "MTF",
			"page": 195,
			"size": "M",
			"type": {
				"type": "fey",
				"tags": [
					"elf"
				]
			},
			"alignment": [
				"C",
				"N"
			],
			"ac": [
				{
					"ac": 19,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 127,
				"formula": "17d8 + 51"
			},
			"speed": {
				"walk": 30
			},
			"str": 12,
			"dex": 16,
			"con": 16,
			"int": 14,
			"wis": 17,
			"cha": 18,
			"skill": {
				"insight": "+7",
				"medicine": "+7"
			},
			"senses": [
				"darkvision 60 ft."
			],
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
			"languages": [
				"Common",
				"Elvish",
				"Sylvan"
			],
			"cr": "10",
			"spellcasting": [
				{
					"name": "Innate Spellcasting",
					"headerEntries": [
						"The eladrin's innate spellcasting ability is Charisma (spell save {@dc 16}). It can innately cast the following spells, requiring no material components:"
					],
					"will": [
						"{@spell calm emotions}",
						"{@spell sleep}"
					],
					"daily": {
						"3e": [
							"{@spell cure wounds} (as a 5th-level spell)",
							"{@spell lesser restoration}"
						],
						"1e": [
							"{@spell greater restoration}",
							"{@spell heal}",
							"{@spell raise dead}"
						]
					},
					"ability": "cha"
				}
			],
			"trait": [
				{
					"name": "Enchanting Presence",
					"entries": [
						"Any non-eladrin creature that starts its turn within 60 feet of the eladrin must make a {@dc 16} Wisdom saving throw. On a failed save, the creature is {@condition charmed} by the eladrin for 1 minute. On a successful save, the creature becomes immune to any eladrin's Enchanting Presence for 24 hours.",
						"Whenever the eladrin deals damage to the {@condition charmed} creature, the creature can repeat the saving throw, ending the effect on itself on a success."
					]
				},
				{
					"name": "Fey Step {@recharge 4}",
					"entries": [
						"As a bonus action, the eladrin can teleport up to 30 feet to an unoccupied space it can see."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"The eladrin has advantage on saving throws against spells and other magical effects."
					]
				}
			],
			"action": [
				{
					"name": "Longsword",
					"entries": [
						"{@atk mw} {@hit 5} to hit, reach 5 ft., one target. {@h}5 ({@damage 1d8 + 1}) slashing damage plus 18 ({@damage 4d8}) psychic damage, or 6 ({@damage 1d10 + 1}) slashing damage plus 18 ({@damage 4d8}) psychic damage if used with two hands."
					]
				},
				{
					"name": "Longbow",
					"entries": [
						"{@atk rw} {@hit 7} to hit, range 150/600 ft., one target. {@h}7 ({@damage 1d8 + 3}) piercing damage plus 18 ({@damage 4d8}) psychic damage."
					]
				}
			],
			"reaction": [
				{
					"name": "Foster Peace",
					"entries": [
						"If a creature {@condition charmed} by the eladrin hits with an attack roll while within 60 feet of the eladrin, the eladrin magically causes the attack to miss, provided the eladrin can see the attacker."
					]
				}
			],
			"environment": [
				"forest"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/autumn-eladrin.mp3"
			},
			"traitTags": [
				"Magic Resistance"
			],
			"senseTags": [
				"D"
			],
			"languageTags": [
				"C",
				"E",
				"S"
			],
			"damageTags": [
				"P",
				"S",
				"Y"
			],
			"spellcastingTags": [
				"I"
			],
			"miscTags": [
				"MW",
				"RNG",
				"RW"
			],
			"conditionInflict": [
				"charmed"
			],
			"conditionInflictSpell": [
				"unconscious"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Bael",
			"isNamedCreature": true,
			"source": "MTF",
			"page": 170,
			"size": "L",
			"type": {
				"type": "fiend",
				"tags": [
					"devil"
				]
			},
			"alignment": [
				"L",
				"E"
			],
			"ac": [
				{
					"ac": 18,
					"from": [
						"{@item plate armor|phb}"
					]
				}
			],
			"hp": {
				"average": 189,
				"formula": "18d10 + 90"
			},
			"speed": {
				"walk": 30
			},
			"str": 24,
			"dex": 17,
			"con": 20,
			"int": 21,
			"wis": 24,
			"cha": 24,
			"save": {
				"dex": "+9",
				"con": "+11",
				"int": "+11",
				"cha": "+13"
			},
			"skill": {
				"intimidation": "+13",
				"perception": "+13",
				"persuasion": "+13"
			},
			"senses": [
				"truesight 120 ft."
			],
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
			"immune": [
				"fire",
				"poison"
			],
			"conditionImmune": [
				"charmed",
				"exhaustion",
				"frightened",
				"poisoned"
			],
			"languages": [
				"all",
				"telepathy 120 ft."
			],
			"cr": "19",
			"spellcasting": [
				{
					"name": "Innate Spellcasting",
					"headerEntries": [
						"Bael's innate spellcasting ability is Charisma (spell save {@dc 21}, {@hit 13} to hit with spell attacks). He can innately cast the following spells, requiring no material components:"
					],
					"will": [
						"{@spell alter self} (can become Medium when changing his appearance)",
						"{@spell animate dead}",
						"{@spell charm person}",
						"{@spell detect magic}",
						"{@spell inflict wounds} (as an 8th-level spell)",
						"{@spell invisibility} (self only)",
						"{@spell major image}"
					],
					"daily": {
						"3e": [
							"{@spell counterspell}",
							"{@spell dispel magic}",
							"{@spell fly}",
							"{@spell suggestion}",
							"{@spell wall of fire}"
						],
						"1e": [
							"{@spell dominate monster}",
							"{@spell symbol} (stunning only)"
						]
					},
					"ability": "cha"
				}
			],
			"trait": [
				{
					"name": "Dreadful",
					"entries": [
						"Bael can use a bonus action to appear dreadful until the start of his next turn. Each creature, other than a devil, that starts its turn within 10 feet of Bael must succeed on a {@dc 22} Wisdom saving throw or be {@condition frightened} until the start of the creature's next turn."
					]
				},
				{
					"name": "Legendary Resistance (3/Day)",
					"entries": [
						"If Bael fails a saving throw, he can choose to succeed instead."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"Bael has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Magic Weapons",
					"entries": [
						"Bael's weapon attacks are magical."
					]
				},
				{
					"name": "Regeneration",
					"entries": [
						"Bael regains 20 hit points at the start of his turn. If he takes cold or radiant damage, this trait doesn't function at the start of his next turn. Bael dies only if he starts his turn with 0 hit points and doesn't regenerate."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"Bael makes two melee attacks."
					]
				},
				{
					"name": "Hellish Morningstar",
					"entries": [
						"{@atk mw} {@hit 13} to hit, reach 20 ft., one target. {@h}16 ({@damage 2d8 + 7}) piercing damage plus 13 ({@damage 3d8}) necrotic damage."
					]
				},
				{
					"name": "Infernal Command",
					"entries": [
						"Each ally of Bael's within 60 feet of him can't be {@condition charmed} or {@condition frightened} until the end of his next turn."
					]
				},
				{
					"name": "Teleport",
					"entries": [
						"Bael magically teleports, along with any equipment he is wearing and carrying, up to 120 feet to an unoccupied space he can see."
					]
				}
			],
			"legendary": [
				{
					"name": "Attack (Cost 2 Actions)",
					"entries": [
						"Bael attacks once with his hellish morningstar."
					]
				},
				{
					"name": "Awaken Greed",
					"entries": [
						"Bael casts charm person or major image."
					]
				},
				{
					"name": "Infernal Command",
					"entries": [
						"Bael uses his Infernal Command action."
					]
				},
				{
					"name": "Teleport",
					"entries": [
						"Bael uses his Teleport action."
					]
				}
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/bael.mp3"
			},
			"traitTags": [
				"Legendary Resistances",
				"Magic Resistance",
				"Magic Weapons",
				"Regeneration"
			],
			"senseTags": [
				"U"
			],
			"actionTags": [
				"Multiattack",
				"Teleport"
			],
			"languageTags": [
				"TP",
				"XX"
			],
			"damageTags": [
				"N",
				"P"
			],
			"spellcastingTags": [
				"I"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflictSpell": [
				"charmed",
				"frightened",
				"incapacitated",
				"invisible",
				"stunned",
				"unconscious"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Balhannoth",
			"source": "MTF",
			"page": 119,
			"size": "L",
			"type": "aberration",
			"alignment": [
				"C",
				"E"
			],
			"ac": [
				{
					"ac": 17,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 114,
				"formula": "12d10 + 48"
			},
			"speed": {
				"walk": 25,
				"climb": 25
			},
			"str": 17,
			"dex": 8,
			"con": 18,
			"int": 6,
			"wis": 15,
			"cha": 8,
			"save": {
				"con": "+8"
			},
			"skill": {
				"perception": "+6"
			},
			"senses": [
				"blindsight 500 ft. (blind beyond this radius)"
			],
			"passive": 16,
			"conditionImmune": [
				"blinded"
			],
			"languages": [
				"understands Deep Speech",
				"telepathy 1 mile"
			],
			"cr": "11",
			"trait": [
				{
					"name": "Legendary Resistance (2/Day)",
					"entries": [
						"If the balhannoth fails a saving throw, it can choose to succeed instead."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The balhannoth makes a bite attack and up to two tentacle attacks, or it makes up to four tentacle attacks."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 7} to hit, reach 5 ft., one target. {@h}25 ({@damage 4d10 + 3}) piercing damage."
					]
				},
				{
					"name": "Tentacle",
					"entries": [
						"{@atk mw} {@hit 7} to hit, reach 10 ft., one target. {@h}10 ({@damage 2d6 + 3}) bludgeoning damage, and the target is {@condition grappled} (escape {@dc 15}) and is moved up to 5 feet toward the balhannoth. Until this grapple ends, the target is {@condition restrained}, and the balhannoth can't use this tentacle against other targets. The balhannoth has four tentacles."
					]
				}
			],
			"legendary": [
				{
					"name": "Bite Attack",
					"entries": [
						"The balhannoth makes one bite attack against one creature it has {@condition grappled}."
					]
				},
				{
					"name": "Teleport",
					"entries": [
						"The balhannoth magically teleports, along with any equipment it is wearing or carrying and any creatures it has {@condition grappled}, up to 60 feet to an unoccupied space it can see."
					]
				},
				{
					"name": "Vanish",
					"entries": [
						"The balhannoth magically becomes {@condition invisible} for up to 10 minutes or until immediately after it makes an attack roll."
					]
				}
			],
			"legendaryGroup": {
				"name": "Balhannoth",
				"source": "MTF"
			},
			"environment": [
				"coastal",
				"mountain",
				"underdark"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/balhannoth.mp3"
			},
			"traitTags": [
				"Legendary Resistances"
			],
			"senseTags": [
				"B"
			],
			"actionTags": [
				"Multiattack",
				"Tentacles"
			],
			"languageTags": [
				"DS",
				"TP"
			],
			"damageTags": [
				"B",
				"P"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"grappled",
				"restrained"
			],
			"conditionInflictLegendary": [
				"invisible"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Baphomet",
			"isNamedCreature": true,
			"source": "MTF",
			"page": 143,
			"otherSources": [
				{
					"source": "OotA",
					"page": 235
				},
				{
					"source": "BGDIA"
				}
			],
			"size": "H",
			"type": {
				"type": "fiend",
				"tags": [
					"demon"
				]
			},
			"alignment": [
				"C",
				"E"
			],
			"ac": [
				{
					"ac": 22,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 275,
				"formula": "19d12 + 152"
			},
			"speed": {
				"walk": 40
			},
			"str": 30,
			"dex": 14,
			"con": 26,
			"int": 18,
			"wis": 24,
			"cha": 16,
			"save": {
				"dex": "+9",
				"con": "+15",
				"wis": "+14"
			},
			"skill": {
				"intimidation": "+17",
				"perception": "+14"
			},
			"senses": [
				"truesight 120 ft."
			],
			"passive": 24,
			"resist": [
				"cold",
				"fire",
				"lightning"
			],
			"immune": [
				"poison",
				{
					"immune": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks",
					"cond": true
				}
			],
			"conditionImmune": [
				"charmed",
				"exhaustion",
				"frightened",
				"poisoned"
			],
			"languages": [
				"all",
				"telepathy 120 ft."
			],
			"cr": "23",
			"spellcasting": [
				{
					"name": "Innate Spellcasting",
					"headerEntries": [
						"Baphomet's spellcasting ability is Charisma (spell save {@dc 18}). He can innately cast the following spells, requiring no material components:"
					],
					"will": [
						"{@spell detect magic}"
					],
					"daily": {
						"1": [
							"{@spell teleport}"
						],
						"3e": [
							"{@spell dispel magic}",
							"{@spell dominate beast}",
							"{@spell hunter's mark}",
							"{@spell maze}",
							"{@spell wall of stone}"
						]
					},
					"ability": "cha"
				}
			],
			"trait": [
				{
					"name": "Charge",
					"entries": [
						"If Baphomet moves at least 10 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 16 ({@damage 3d10}) piercing damage. If the target is a creature, it must succeed on a {@dc 25} Strength saving throw or be pushed up to 10 feet away and knocked {@condition prone}."
					]
				},
				{
					"name": "Labyrinthine Recall",
					"entries": [
						"Baphomet can perfectly recall any path he has traveled, and he is immune to the maze spell."
					]
				},
				{
					"name": "Legendary Resistance (3/Day)",
					"entries": [
						"If Baphomet fails a saving throw, he can choose to succeed instead."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"Baphomet has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Magic Weapons",
					"entries": [
						"Baphomet's weapon attacks are magical."
					]
				},
				{
					"name": "Reckless",
					"entries": [
						"At the start of his turn, Baphomet can gain advantage on all melee weapon attack rolls during that turn, but attack rolls against him have advantage until the start of his next turn."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"Baphomet makes three attacks: one with Heartcleaver, one with his bite, and one with his gore attack."
					]
				},
				{
					"name": "Heartcleaver",
					"entries": [
						"{@atk mw} {@hit 17} to hit, reach 15 ft., one target. {@h}21 ({@damage 2d10 + 10}) slashing damage."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 17} to hit, reach 10 ft., one target. {@h}19 ({@damage 2d8 + 10}) piercing damage."
					]
				},
				{
					"name": "Gore",
					"entries": [
						"{@atk mw} {@hit 17} to hit, reach 10 ft., one target. {@h}17 ({@damage 2d6 + 10}) piercing damage."
					]
				},
				{
					"name": "Frightful Presence",
					"entries": [
						"Each creature of Baphomet's choice within 120 feet of him and aware of him must succeed on a {@dc 18} Wisdom saving throw or become {@condition frightened} for 1 minute. A {@condition frightened} creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. These later saves have disadvantage if Baphomet is within line of sight of the creature.",
						"If a creature succeeds on any of these saves or the effect ends on it, the creature is immune to Baphomet's Frightful Presence for the next 24 hours."
					]
				}
			],
			"legendary": [
				{
					"name": "Heartcleaver Attack",
					"entries": [
						"Baphomet makes a melee attack with Heartcleaver."
					]
				},
				{
					"name": "Charge (Costs 2 Actions)",
					"entries": [
						"Baphomet moves up to his speed, then makes a gore attack."
					]
				}
			],
			"legendaryGroup": {
				"name": "Baphomet",
				"source": "MTF"
			},
			"hasToken": true,
			"traitTags": [
				"Charge",
				"Legendary Resistances",
				"Magic Resistance",
				"Magic Weapons",
				"Reckless"
			],
			"senseTags": [
				"U"
			],
			"actionTags": [
				"Frightful Presence",
				"Multiattack"
			],
			"languageTags": [
				"TP",
				"XX"
			],
			"damageTags": [
				"P",
				"S"
			],
			"spellcastingTags": [
				"I"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"frightened",
				"prone"
			],
			"conditionInflictSpell": [
				"charmed"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Berbalang",
			"source": "MTF",
			"page": 120,
			"size": "M",
			"type": "aberration",
			"alignment": [
				"N",
				"E"
			],
			"ac": [
				{
					"ac": 14,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 38,
				"formula": "11d8 - 11"
			},
			"speed": {
				"walk": 30,
				"fly": 40
			},
			"str": 9,
			"dex": 16,
			"con": 9,
			"int": 17,
			"wis": 11,
			"cha": 10,
			"save": {
				"dex": "+5",
				"int": "+5"
			},
			"skill": {
				"arcana": "+5",
				"history": "+5",
				"insight": "+2",
				"perception": "+2",
				"religion": "+5"
			},
			"senses": [
				"truesight 120 ft."
			],
			"passive": 12,
			"languages": [
				"all but rarely speaks"
			],
			"cr": "2",
			"spellcasting": [
				{
					"name": "Innate Spellcasting",
					"headerEntries": [
						"The berbalang's innate spellcasting ability is Intelligence (spell save {@dc 13}). The berbalang can innately cast the following spells, requiring no material components:"
					],
					"will": [
						"{@spell speak with dead}"
					],
					"daily": {
						"1": [
							"{@spell plane shift} (self only)"
						]
					},
					"ability": "int"
				}
			],
			"trait": [
				{
					"name": "Spectral Duplicate (Recharges after a Short or Long Rest)",
					"entries": [
						"As a bonus action, the berbalang creates one spectral duplicate of itself in an unoccupied space it can see within 60 feet of it. While the duplicate exists, the berbalang is {@condition unconscious}. A berbalang can have only one duplicate at a time. The duplicate disappears when it or the berbalang drops to 0 hit points or when the berbalang dismisses it (no action required).",
						"The duplicate has the same statistics and knowledge as the berbalang, and everything experienced by the duplicate is known by the berbalang. All damage dealt by the duplicate's attacks is psychic damage."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The berbalang makes two attacks: one with its bite and one with its claws."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 5} to hit, reach 5 ft., one target. {@h}8 ({@damage 1d10 + 3}) piercing damage."
					]
				},
				{
					"name": "Claws",
					"entries": [
						"{@atk mw} {@hit 5} to hit, reach 5 ft., one target. {@h}8 ({@damage 2d4 + 3}) slashing damage."
					]
				}
			],
			"environment": [
				"desert"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/berbalang.mp3"
			},
			"senseTags": [
				"U"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"XX"
			],
			"damageTags": [
				"P",
				"S"
			],
			"spellcastingTags": [
				"I"
			],
			"miscTags": [
				"MW"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Black Abishai",
			"source": "MTF",
			"page": 160,
			"size": "M",
			"type": {
				"type": "fiend",
				"tags": [
					"devil"
				]
			},
			"alignment": [
				"L",
				"E"
			],
			"ac": [
				{
					"ac": 15,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 58,
				"formula": "9d8 + 18"
			},
			"speed": {
				"walk": 30,
				"fly": 40
			},
			"str": 14,
			"dex": 17,
			"con": 14,
			"int": 13,
			"wis": 16,
			"cha": 11,
			"save": {
				"dex": "+6",
				"wis": "+6"
			},
			"skill": {
				"perception": "+6",
				"stealth": "+6"
			},
			"senses": [
				"darkvision 120 ft."
			],
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
			"immune": [
				"acid",
				"fire",
				"poison"
			],
			"conditionImmune": [
				"poisoned"
			],
			"languages": [
				"Draconic",
				"Infernal",
				"telepathy 120 ft."
			],
			"cr": "7",
			"trait": [
				{
					"name": "Devil's Sight",
					"entries": [
						"Magical darkness doesn't impede the abishai's darkvision."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"The abishai has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Magic Weapons",
					"entries": [
						"The abishai's weapon attacks are magical."
					]
				},
				{
					"name": "Shadow Stealth",
					"entries": [
						"While in dim light or darkness, the abishai can take the Hide action as a bonus action."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The abishai makes three attacks: two with its scimitar and one with its bite."
					]
				},
				{
					"name": "Scimitar",
					"entries": [
						"{@atk mw} {@hit 6} to hit, reach 5 ft., one target. {@h}6 ({@damage 1d6 + 3}) slashing damage."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 6} to hit, reach 5 ft., one target. {@h}8 ({@damage 1d10 + 3}) piercing damage plus 9 ({@damage 2d8}) acid damage."
					]
				},
				{
					"name": "Creeping Darkness {@recharge}",
					"entries": [
						"The abishai casts {@spell darkness} at a point within 120 feet of it, requiring no components. Wisdom is its spellcasting ability for this spell. While the spell persists, the abishai can move the area of darkness up to 60 feet as a bonus action."
					]
				}
			],
			"environment": [
				"urban"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/black-abishai.mp3"
			},
			"traitTags": [
				"Devil's Sight",
				"Magic Resistance",
				"Magic Weapons"
			],
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"DR",
				"I",
				"TP"
			],
			"damageTags": [
				"A",
				"P",
				"S"
			],
			"miscTags": [
				"MW"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Blue Abishai",
			"source": "MTF",
			"page": 161,
			"size": "M",
			"type": {
				"type": "fiend",
				"tags": [
					"devil"
				]
			},
			"alignment": [
				"L",
				"E"
			],
			"ac": [
				{
					"ac": 19,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 195,
				"formula": "26d8 + 78"
			},
			"speed": {
				"walk": 30,
				"fly": 50
			},
			"str": 15,
			"dex": 14,
			"con": 17,
			"int": 22,
			"wis": 23,
			"cha": 18,
			"save": {
				"int": "+12",
				"wis": "+12"
			},
			"skill": {
				"arcana": "+12"
			},
			"senses": [
				"darkvision 120 ft."
			],
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
			"immune": [
				"fire",
				"lightning",
				"poison"
			],
			"conditionImmune": [
				"poisoned"
			],
			"languages": [
				"Draconic",
				"Infernal",
				"telepathy 120 ft."
			],
			"cr": "17",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The abishai is a 13th-level spellcaster. Its spellcasting ability is Intelligence (spell save {@dc 20}, {@hit 12} to hit with spell attacks). The abishai has the following wizard spells prepared:"
					],
					"spells": {
						"0": {
							"spells": [
								"{@spell friends}",
								"{@spell mage hand}",
								"{@spell message}",
								"{@spell minor illusion}",
								"{@spell shocking grasp}"
							]
						},
						"1": {
							"slots": 4,
							"spells": [
								"{@spell chromatic orb}",
								"{@spell disguise self}",
								"{@spell expeditious retreat}",
								"{@spell magic missile}",
								"{@spell charm person}",
								"{@spell thunderwave}"
							]
						},
						"2": {
							"slots": 3,
							"spells": [
								"{@spell darkness}",
								"{@spell mirror image}",
								"{@spell misty step}"
							]
						},
						"3": {
							"slots": 3,
							"spells": [
								"{@spell dispel magic}",
								"{@spell fear}",
								"{@spell lightning bolt}"
							]
						},
						"4": {
							"slots": 3,
							"spells": [
								"{@spell dimension door}",
								"{@spell greater invisibility}",
								"{@spell ice storm}"
							]
						},
						"5": {
							"slots": 2,
							"spells": [
								"{@spell cone of cold}",
								"{@spell wall of force}"
							]
						},
						"6": {
							"slots": 1,
							"spells": [
								"{@spell chain lightning}"
							]
						},
						"7": {
							"slots": 1,
							"spells": [
								"{@spell teleport}"
							]
						}
					},
					"ability": "int"
				}
			],
			"trait": [
				{
					"name": "Devil's Sight",
					"entries": [
						"Magical darkness doesn't impede the abishai's darkvision."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"The abishai has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Magic Weapons",
					"entries": [
						"The abishai's weapon attacks are magical."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The abishai makes two attacks: one with its quarterstaff and one with its bite."
					]
				},
				{
					"name": "Quarterstaff",
					"entries": [
						"{@atk mw} {@hit 8} to hit, reach 5 ft., one target. {@h}5 ({@damage 1d6 + 2}) bludgeoning damage, or 6 ({@damage 1d8 + 2}) bludgeoning damage if used with two hands."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 8} to hit, reach 5 ft., one target. {@h}13 ({@damage 2d10 + 2}) piercing damage plus 14 ({@damage 4d6}) lightning damage."
					]
				}
			],
			"environment": [
				"coastal",
				"urban"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/blue-abishai.mp3"
			},
			"traitTags": [
				"Devil's Sight",
				"Magic Resistance",
				"Magic Weapons"
			],
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"DR",
				"I",
				"TP"
			],
			"damageTags": [
				"B",
				"L",
				"P"
			],
			"spellcastingTags": [
				"CW"
			],
			"miscTags": [
				"MW"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Boneclaw",
			"source": "MTF",
			"page": 121,
			"otherSources": [
				{
					"source": "DC"
				},
				{
					"source": "DIP"
				}
			],
			"size": "L",
			"type": "undead",
			"alignment": [
				"C",
				"E"
			],
			"ac": [
				{
					"ac": 16,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 127,
				"formula": "17d10 + 34"
			},
			"speed": {
				"walk": 40
			},
			"str": 19,
			"dex": 16,
			"con": 15,
			"int": 13,
			"wis": 15,
			"cha": 9,
			"save": {
				"dex": "+7",
				"con": "+6",
				"wis": "+6"
			},
			"skill": {
				"perception": "+6",
				"stealth": "+7"
			},
			"senses": [
				"darkvision 60 ft."
			],
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
			"conditionImmune": [
				"charmed",
				"exhaustion",
				"frightened",
				"paralyzed",
				"poisoned"
			],
			"languages": [
				"Common plus the main language of its master"
			],
			"cr": "12",
			"trait": [
				{
					"name": "Rejuvenation",
					"entries": [
						"While its master lives, a destroyed boneclaw gains a new body in {@dice 1d10} hours, with all its hit points. The new body appears within 1 mile of the boneclaw's master."
					]
				},
				{
					"name": "Shadow Stealth",
					"entries": [
						"While in dim light or darkness, the boneclaw can take the Hide action as a bonus action."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The boneclaw makes two claw attacks."
					]
				},
				{
					"name": "Piercing Claw",
					"entries": [
						"{@atk mw} {@hit 8} to hit, reach 15 ft., one target. {@h}20 ({@damage 3d10 + 4}) piercing damage. If the target is a creature, the boneclaw can pull the target up to 10 feet toward itself, and the target is {@condition grappled} (escape {@dc 14}). The boneclaw has two claws. While a claw grapples a target, the claw can attack only that target."
					]
				},
				{
					"name": "Shadow Jump",
					"entries": [
						"If the boneclaw is in dim light or darkness, each creature of the boneclaw's choice within 5 feet of it must succeed on a {@dc 14} Constitution saving throw or take 34 ({@damage 5d12 + 2}) necrotic damage.",
						"The boneclaw then magically teleports up to 60 feet to an unoccupied space it can see. It can bring one creature it's grappling, teleporting that creature to an unoccupied space it can see within 5 feet of its destination. The destination spaces of this teleportation must be in dim light or darkness."
					]
				}
			],
			"reaction": [
				{
					"name": "Deadly Reach",
					"entries": [
						"In response to a visible enemy moving into its reach, the boneclaw makes one claw attack against that enemy. If the attack hits, the boneclaw can make a second claw attack against the target."
					]
				}
			],
			"environment": [
				"arctic",
				"desert",
				"urban"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/boneclaw.mp3"
			},
			"traitTags": [
				"Rejuvenation"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C"
			],
			"damageTags": [
				"N",
				"P"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"grappled"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Bronze Scout",
			"source": "MTF",
			"page": 125,
			"size": "M",
			"type": "construct",
			"alignment": [
				"U"
			],
			"ac": [
				13
			],
			"hp": {
				"average": 18,
				"formula": "4d8"
			},
			"speed": {
				"walk": 30,
				"burrow": 30
			},
			"str": 10,
			"dex": 16,
			"con": 11,
			"int": 3,
			"wis": 14,
			"cha": 1,
			"skill": {
				"perception": "+6",
				"stealth": "+7"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 16,
			"immune": [
				"poison",
				{
					"immune": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks that aren't adamantine",
					"cond": true
				}
			],
			"conditionImmune": [
				"charmed",
				"exhaustion",
				"frightened",
				"paralyzed",
				"petrified",
				"poisoned"
			],
			"languages": [
				"understands one language of its creator but can't speak"
			],
			"cr": "1",
			"trait": [
				{
					"name": "Earth Armor",
					"entries": [
						"The bronze scout doesn't provoke opportunity attacks when it burrows."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"The bronze scout has advantage on saving throws against spells and other magical effects."
					]
				}
			],
			"action": [
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 5} to hit, reach 5 ft., one target. {@h}5 ({@damage 1d4 + 3}) piercing damage plus 3 ({@damage 1d6}) lightning damage."
					]
				},
				{
					"name": "Lightning Flare (Recharges after a Short or Long Rest)",
					"entries": [
						"Each creature in contact with the ground within 15 feet of the bronze scout must make a {@dc 13} Dexterity saving throw, taking 14 ({@damage 4d6}) lightning damage on a failed save, or half as much damage on a successful one."
					]
				}
			],
			"environment": [
				"forest",
				"grassland",
				"hill",
				"mountain"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/bronze-scout.mp3"
			},
			"traitTags": [
				"Magic Resistance"
			],
			"senseTags": [
				"D"
			],
			"languageTags": [
				"CS"
			],
			"damageTags": [
				"L",
				"P"
			],
			"miscTags": [
				"MW"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Bulezau",
			"source": "MTF",
			"page": 131,
			"otherSources": [
				{
					"source": "BGDIA"
				}
			],
			"size": "M",
			"type": {
				"type": "fiend",
				"tags": [
					"demon"
				]
			},
			"alignment": [
				"C",
				"E"
			],
			"ac": [
				{
					"ac": 14,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 52,
				"formula": "7d8 + 21"
			},
			"speed": {
				"walk": 40
			},
			"str": 15,
			"dex": 14,
			"con": 17,
			"int": 8,
			"wis": 9,
			"cha": 6,
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 9,
			"resist": [
				"cold",
				"fire",
				"lightning"
			],
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"charmed",
				"frightened",
				"poisoned"
			],
			"languages": [
				"Abyssal",
				"telepathy 60 ft."
			],
			"cr": "3",
			"trait": [
				{
					"name": "Rotting Presence",
					"entries": [
						"When any creature that isn't a demon starts its turn within 30 feet one or more bulezaus, that creature must succeed on a {@dc 13} Constitution saving throw or take {@dice 1d6} necrotic damage plus 1 necrotic damage for each bulezau within 30 feet of it."
					]
				},
				{
					"name": "Standing Leap",
					"entries": [
						"The bulezau's long jump is up to 20 feet and its high jump is up to 10 feet, with or without a running start."
					]
				},
				{
					"name": "Sure-Footed",
					"entries": [
						"The bulezau has advantage on Strength and Dexterity saving throws made against effects that would knock it {@condition prone}."
					]
				}
			],
			"action": [
				{
					"name": "Barbed Tail",
					"entries": [
						"{@atk mw} {@hit 4} to hit, reach 5 ft., one target. {@h}8 ({@damage 1d12 + 2}) piercing damage. If the target is a creature, it must succeed on a {@dc 13} Constitution saving throw against disease or become {@condition poisoned} until the disease ends. While {@condition poisoned} in this way, the target sports festering boils, coughs up flies, and sheds rotting skin, and the target must repeat the saving throw after every 24 hours that elapse. On a successful save, the disease ends. On a failed save, the target's hit point maximum is reduced by 4 ({@dice 1d8}). The target dies if its hit point maximum is reduced to 0."
					]
				}
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/bulezau.mp3"
			},
			"senseTags": [
				"SD"
			],
			"languageTags": [
				"AB",
				"TP"
			],
			"damageTags": [
				"N",
				"P"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"poisoned"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Cadaver Collector",
			"source": "MTF",
			"page": 122,
			"size": "L",
			"type": "construct",
			"alignment": [
				"L",
				"E"
			],
			"ac": [
				{
					"ac": 17,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 189,
				"formula": "18d10 + 90"
			},
			"speed": {
				"walk": 30
			},
			"str": 21,
			"dex": 14,
			"con": 20,
			"int": 5,
			"wis": 11,
			"cha": 8,
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 10,
			"immune": [
				"necrotic",
				"poison",
				"psychic",
				{
					"immune": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks that aren't adamantine",
					"cond": true
				}
			],
			"conditionImmune": [
				"charmed",
				"exhaustion",
				"frightened",
				"paralyzed",
				"petrified",
				"poisoned"
			],
			"languages": [
				"understands all languages but can't speak"
			],
			"cr": "14",
			"trait": [
				{
					"name": "Magic Resistance",
					"entries": [
						"The cadaver collector has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Summon Specters (Recharges after a Short or Long Rest)",
					"entries": [
						"As a bonus action, the cadaver collector calls up the enslaved spirits of those it has slain; {@dice 1d6} {@creature specter||specters} (without Sunlight Sensitivity) arise in unoccupied spaces within 15 feet of the cadaver collector. The specters act right after the cadaver collector on the same initiative count and fight until they're destroyed. They disappear when the cadaver collector is destroyed."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The cadaver collector makes two slam attacks."
					]
				},
				{
					"name": "Slam",
					"entries": [
						"{@atk mw} {@hit 10} to hit, reach 5 ft., one target. {@h}18 ({@damage 3d8 + 5}) bludgeoning damage plus 16 ({@damage 3d10}) necrotic damage."
					]
				},
				{
					"name": "Paralyzing Breath {@recharge 5}",
					"entries": [
						"The cadaver collector releases paralyzing gas in a 30-foot cone. Each creature in that area must make a successful {@dc 18} Constitution saving throw or be {@condition paralyzed} for 1 minute. A {@condition paralyzed} creature repeats the saving throw at the end of each of its turns, ending the effect on itself with a success."
					]
				}
			],
			"environment": [
				"grassland"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/cadaver-collector.mp3"
			},
			"traitTags": [
				"Magic Resistance"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"CS",
				"XX"
			],
			"damageTags": [
				"B",
				"N"
			],
			"miscTags": [
				"AOE",
				"MW"
			],
			"conditionInflict": [
				"paralyzed"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Canoloth",
			"source": "MTF",
			"page": 247,
			"size": "M",
			"type": {
				"type": "fiend",
				"tags": [
					"yugoloth"
				]
			},
			"alignment": [
				"N",
				"E"
			],
			"ac": [
				{
					"ac": 16,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 120,
				"formula": "16d8 + 48"
			},
			"speed": {
				"walk": 50
			},
			"str": 18,
			"dex": 10,
			"con": 17,
			"int": 5,
			"wis": 17,
			"cha": 12,
			"skill": {
				"investigation": "+3",
				"perception": "+9"
			},
			"senses": [
				"darkvision 60 ft.",
				"truesight 120 ft."
			],
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
			"immune": [
				"acid",
				"poison"
			],
			"conditionImmune": [
				"poisoned"
			],
			"languages": [
				"Abyssal",
				"Infernal",
				"telepathy 60 ft."
			],
			"cr": "8",
			"trait": [
				{
					"name": "Dimensional Lock",
					"entries": [
						"Other creatures can't teleport to or from a space within 60 feet of the canoloth. Any attempt to do so is wasted."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"The canoloth has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Magic Weapons",
					"entries": [
						"The canoloth's weapon attacks are magical."
					]
				},
				{
					"name": "Uncanny Senses",
					"entries": [
						"The canoloth can't be surprised while it isn't {@condition incapacitated}."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The canoloth makes two attacks: one with its tongue or its bite and one with its claws."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 7} to hit, reach 5 ft., one target. {@h}25 ({@damage 6d6 + 4}) piercing damage."
					]
				},
				{
					"name": "Claws",
					"entries": [
						"{@atk mw} {@hit 7} to hit, reach 5 ft., one target. {@h}15 ({@damage 2d10 + 4}) slashing damage."
					]
				},
				{
					"name": "Tongue",
					"entries": [
						"{@atk rw} {@hit 7} to hit, range 30 ft., one target. {@h}17 ({@damage 2d12 + 4}) piercing damage. If the target is Medium or smaller, it is {@condition grappled} (escape {@dc 15}), pulled up to 30 feet toward the canoloth, and is {@condition restrained} until the grapple ends. The canoloth can grapple one target at a time with its tongue."
					]
				}
			],
			"environment": [
				"coastal",
				"underdark",
				"urban"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/canoloth.mp3"
			},
			"traitTags": [
				"Magic Resistance",
				"Magic Weapons"
			],
			"senseTags": [
				"D",
				"U"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"AB",
				"I",
				"TP"
			],
			"damageTags": [
				"P",
				"S"
			],
			"miscTags": [
				"MW",
				"RW"
			],
			"conditionInflict": [
				"grappled",
				"restrained"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Choker",
			"source": "MTF",
			"page": 123,
			"otherSources": [
				{
					"source": "TftYP",
					"page": 232
				}
			],
			"size": "S",
			"type": "aberration",
			"alignment": [
				"C",
				"E"
			],
			"ac": [
				{
					"ac": 16,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 13,
				"formula": "3d6 + 3"
			},
			"speed": {
				"walk": 30
			},
			"str": 16,
			"dex": 14,
			"con": 13,
			"int": 4,
			"wis": 12,
			"cha": 7,
			"skill": {
				"stealth": "+6"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 11,
			"languages": [
				"Deep Speech"
			],
			"cr": "1",
			"trait": [
				{
					"name": "Aberrant Quickness (Recharges after a Short or Long Rest)",
					"entries": [
						"The choker can take an extra action on its turn."
					]
				},
				{
					"name": "Boneless",
					"entries": [
						"The choker can move through and occupy a space as narrow as 4 inches wide without squeezing."
					]
				},
				{
					"name": "Spider Climb",
					"entries": [
						"The choker can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The choker makes two tentacle attacks."
					]
				},
				{
					"name": "Tentacle",
					"entries": [
						"{@atk mw} {@hit 5} to hit, reach 10 ft., one target. {@h}5 ({@damage 1d4 + 3}) bludgeoning damage plus 3 ({@damage 1d6}) piercing damage. If the target is a Large or smaller creature, it is {@condition grappled} (escape {@dc 15}). Until this grapple ends, the target is {@condition restrained}, and the choker can't use this tentacle on another target. The choker has two tentacles. If this attack is a critical hit, the target also can't breathe or speak until the grapple ends."
					]
				}
			],
			"environment": [
				"forest",
				"mountain",
				"underdark"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/choker.mp3"
			},
			"altArt": [
				{
					"name": "Choker (Alt)",
					"source": "TftYP"
				}
			],
			"traitTags": [
				"Spider Climb"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack",
				"Tentacles"
			],
			"languageTags": [
				"DS"
			],
			"damageTags": [
				"B",
				"P"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"grappled",
				"restrained"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Corpse Flower",
			"source": "MTF",
			"page": 127,
			"size": "L",
			"type": "plant",
			"alignment": [
				"C",
				"E"
			],
			"ac": [
				12
			],
			"hp": {
				"average": 127,
				"formula": "15d10 + 45"
			},
			"speed": {
				"walk": 20,
				"climb": 20
			},
			"str": 14,
			"dex": 14,
			"con": 16,
			"int": 7,
			"wis": 15,
			"cha": 3,
			"senses": [
				"blindsight 120 ft. (blind beyond this radius)"
			],
			"passive": 12,
			"conditionImmune": [
				"blinded",
				"deafened"
			],
			"cr": "8",
			"trait": [
				{
					"name": "Corpses",
					"entries": [
						"When first encountered, a corpse flower contains the corpses of {@dice 1d6 + 3} humanoids. A corpse flower can hold the remains of up to nine dead humanoids. These remains have total cover against attacks and other effects outside the corpse flower. If the corpse flower dies, the corpses within it can be pulled free.",
						"While it has at least one humanoid corpse in its body, the corpse flower can use a bonus action to do one of the following:",
						{
							"type": "list",
							"items": [
								"The corpse flower digests one humanoid corpse in its body and instantly regains 11 ({@dice 2d10}) hit points. Nothing of the digested body remains. Any equipment on the corpse is expelled from the corpse flower in its space.",
								"The corpse flower animates one dead humanoid in its body, turning it into a zombie. The zombie appears in an unoccupied space within 5 feet of the corpse flower and acts immediately after it in the initiative order. The zombie acts as an ally of the corpse flower but isn't under its control, and the flower's stench clings to it (see the Stench of Death trait)."
							]
						}
					]
				},
				{
					"name": "Spider Climb",
					"entries": [
						"The corpse flower can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
					]
				},
				{
					"name": "Stench of Death",
					"entries": [
						"Each creature that starts its turn within 10 feet of the corpse flower or one of its zombies must make a {@dc 14} Constitution saving throw, unless the creature is a construct or undead. On a failed save, the creature is {@condition incapacitated} until the end of the turn. Creatures that are immune to poison damage or the {@condition poisoned} condition automatically succeed on this saving throw. On a successful save, the creature is immune to the stench of all corpse flowers for 24 hours."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The corpse flower makes three tentacle attacks."
					]
				},
				{
					"name": "Tentacle",
					"entries": [
						"{@atk mw} {@hit 5} to hit, reach 10 ft., one target. {@h}9 ({@damage 2d6 + 2}) bludgeoning damage, and the target must succeed on a {@dc 14} Constitution saving throw or take 14 ({@damage 4d6}) poison damage."
					]
				},
				{
					"name": "Harvest the Dead",
					"entries": [
						"The corpse flower grabs one unsecured dead humanoid within 10 feet of it and stuffs the corpse into itself, along with any equipment the corpse is wearing or carrying. The remains can be used with the Corpses trait."
					]
				}
			],
			"environment": [
				"forest",
				"swamp",
				"urban"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/corpse-flower.mp3"
			},
			"traitTags": [
				"Spider Climb"
			],
			"senseTags": [
				"B"
			],
			"actionTags": [
				"Multiattack",
				"Tentacles"
			],
			"damageTags": [
				"B",
				"I"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"incapacitated"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Deathlock",
			"source": "MTF",
			"page": 128,
			"size": "M",
			"type": "undead",
			"alignment": [
				"L",
				"E"
			],
			"ac": [
				12,
				{
					"ac": 15,
					"condition": "with {@spell mage armor}",
					"braces": true
				}
			],
			"hp": {
				"average": 36,
				"formula": "8d8"
			},
			"speed": {
				"walk": 30
			},
			"str": 11,
			"dex": 15,
			"con": 10,
			"int": 14,
			"wis": 12,
			"cha": 16,
			"save": {
				"int": "+4",
				"cha": "+5"
			},
			"skill": {
				"arcana": "+4",
				"history": "+4"
			},
			"senses": [
				"darkvision 60 ft."
			],
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
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"exhaustion",
				"poisoned"
			],
			"languages": [
				"the languages it knew in life"
			],
			"cr": "4",
			"spellcasting": [
				{
					"name": "Innate Spellcasting",
					"headerEntries": [
						"The deathlock's innate spellcasting ability is Charisma (spell save {@dc 13}). It can innately cast the following spells, requiring no material components:"
					],
					"will": [
						"{@spell detect magic}",
						"{@spell disguise self}",
						"{@spell mage armor}"
					],
					"ability": "cha"
				},
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The deathlock is a 5th-level spellcaster. Its spellcasting ability is Charisma (spell save {@dc 13}, {@hit 5} to hit with spell attacks). It regains its expended spell slots when it finishes a short or long rest. It knows the following warlock spells:"
					],
					"spells": {
						"0": {
							"spells": [
								"{@spell chill touch}",
								"{@spell eldritch blast}",
								"{@spell mage hand}"
							]
						},
						"3": {
							"lower": 1,
							"slots": 2,
							"spells": [
								"{@spell arms of Hadar}",
								"{@spell dispel magic}",
								"{@spell hold person}",
								"{@spell hunger of Hadar}",
								"{@spell invisibility}",
								"{@spell spider climb}"
							]
						}
					},
					"ability": "cha"
				}
			],
			"trait": [
				{
					"name": "Turn Resistance",
					"entries": [
						"The deathlock has advantage on saving throws against any effect that turns undead."
					]
				}
			],
			"action": [
				{
					"name": "Deathly Claw",
					"entries": [
						"{@atk mw} {@hit 4} to hit, reach 5 ft., one target. {@h}9 ({@damage 2d6 + 2}) necrotic damage."
					]
				}
			],
			"variant": [
				{
					"type": "inset",
					"name": "Patron-Specific Spells",
					"entries": [
						"You can customize a deathlock by replacing some or all of the spells in its Spellcasting trait with spells specific to its patron. Here are examples.",
						{
							"type": "list",
							"style": "list-hang-notitle",
							"items": [
								"Archfey patron: {@spell blink}, {@spell faerie fire}, {@spell hunger of Hadar}, {@spell hypnotic pattern}, {@spell phantasmal force}, {@spell sleep}",
								"Fiend patron: {@spell blindness/deafness}, {@spell burning hands}, {@spell command}, {@spell fireball}, {@spell hellish rebuke}, {@spell scorching ray}",
								"Great Old One patron: {@spell armor of Agathys}, {@spell detect thoughts}, {@spell dissonant whispers}, {@spell hunger of Hadar}, {@spell Tasha's hideous laughter}, {@spell phantasmal force}"
							]
						}
					]
				}
			],
			"environment": [
				"urban"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/deathlock.mp3"
			},
			"traitTags": [
				"Turn Resistance"
			],
			"senseTags": [
				"D"
			],
			"languageTags": [
				"LF"
			],
			"damageTags": [
				"N"
			],
			"spellcastingTags": [
				"CL",
				"I"
			],
			"miscTags": [
				"MW"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Deathlock Mastermind",
			"source": "MTF",
			"page": 129,
			"otherSources": [
				{
					"source": "SDW"
				}
			],
			"size": "M",
			"type": "undead",
			"alignment": [
				"L",
				"E"
			],
			"ac": [
				13,
				{
					"ac": 16,
					"condition": "with {@spell mage armor}",
					"braces": true
				}
			],
			"hp": {
				"average": 110,
				"formula": "20d8 + 20"
			},
			"speed": {
				"walk": 30
			},
			"str": 11,
			"dex": 16,
			"con": 12,
			"int": 15,
			"wis": 12,
			"cha": 17,
			"save": {
				"int": "+5",
				"cha": "+6"
			},
			"skill": {
				"arcana": "+5",
				"history": "+5",
				"perception": "+4"
			},
			"senses": [
				"darkvision 120 ft. (including magical darkness)"
			],
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
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"exhaustion",
				"poisoned"
			],
			"languages": [
				"the languages it knew in life"
			],
			"cr": "8",
			"spellcasting": [
				{
					"name": "Innate Spellcasting",
					"headerEntries": [
						"The deathlock's innate spellcasting ability is Charisma (spell save {@dc 14}). It can innately cast the following spells, requiring no material components:"
					],
					"will": [
						"{@spell detect magic}",
						"{@spell disguise self}",
						"{@spell mage armor}"
					],
					"ability": "cha"
				},
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The deathlock is a 10th-level spellcaster. Its spellcasting ability is Charisma (spell save {@dc 14}, {@hit 6} to hit with spell attacks). It regains its expended spell slots when it finishes a short or long rest. It knows the following warlock spells:"
					],
					"spells": {
						"0": {
							"spells": [
								"{@spell chill touch}",
								"{@spell mage hand}",
								"{@spell minor illusion}",
								"{@spell poison spray}"
							]
						},
						"5": {
							"lower": 1,
							"slots": 2,
							"spells": [
								"{@spell arms of Hadar}",
								"{@spell blight}",
								"{@spell counterspell}",
								"{@spell crown of madness}",
								"{@spell darkness}",
								"{@spell dimension door}",
								"{@spell dispel magic}",
								"{@spell fly}",
								"{@spell hold monster}",
								"{@spell invisibility}"
							]
						}
					},
					"ability": "cha"
				}
			],
			"trait": [
				{
					"name": "Turn Resistance",
					"entries": [
						"The deathlock has advantage on saving throws against any effect that turns undead."
					]
				}
			],
			"action": [
				{
					"name": "Deathly Claw",
					"entries": [
						"{@atk mw} {@hit 6} to hit, reach 5 ft., one target. {@h}13 ({@damage 3d6 + 3}) necrotic damage)."
					]
				},
				{
					"name": "Grave Bolts",
					"entries": [
						"{@atk rs} {@hit 6} to hit, range 120 ft., one or two targets. {@h}18 ({@damage 4d8}) necrotic damage. If the target is Large or smaller, it must succeed on a {@dc 16} Strength saving throw or become {@condition restrained} as shadowy tendrils wrap around it for 1 minute. A {@condition restrained} target can use its action to repeat the saving throw, ending the effect on itself on a success."
					]
				}
			],
			"variant": [
				{
					"type": "inset",
					"name": "Patron-Specific Spells",
					"entries": [
						"You can customize a deathlock by replacing some or all of the spells in its Spellcasting trait with spells specific to its patron. Here are examples.",
						{
							"type": "list",
							"style": "list-hang-notitle",
							"items": [
								"Archfey patron: {@spell blink}, {@spell dominate beast}, {@spell dominate person}, {@spell faerie fire}, {@spell greater invisibility}, {@spell hunger of Hadar}, {@spell hypnotic pattern}, {@spell phantasmal force}, {@spell seeming}, {@spell sleep}",
								"Fiend patron: {@spell blindness/deafness}, {@spell burning hands}, {@spell command}, {@spell fire shield}, {@spell fireball}, {@spell flame strike}, {@spell hellish rebuke}, {@spell scorching ray}, {@spell stinking cloud}, {@spell wall of fire}",
								"Great Old One patron: {@spell clairvoyance}, {@spell detect thoughts}, {@spell dissonant whispers}, {@spell dominate person}, {@spell Evard's black tentacles}, {@spell hunger of Hadar}, {@spell phantasmal force}, {@spell sending}, {@spell Tasha's hideous laughter}, {@spell telekinesis}"
							]
						}
					]
				}
			],
			"environment": [
				"urban"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/deathlock-mastermind.mp3"
			},
			"traitTags": [
				"Turn Resistance"
			],
			"senseTags": [
				"SD"
			],
			"languageTags": [
				"LF"
			],
			"damageTags": [
				"N"
			],
			"spellcastingTags": [
				"CL",
				"I"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"restrained"
			],
			"conditionInflictSpell": [
				"charmed",
				"invisible",
				"paralyzed"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Deathlock Wight",
			"source": "MTF",
			"page": 129,
			"otherSources": [
				{
					"source": "TftYP",
					"page": 233
				}
			],
			"size": "M",
			"type": "undead",
			"alignment": [
				"L",
				"E"
			],
			"ac": [
				12,
				{
					"ac": 15,
					"condition": "with {@spell mage armor}",
					"braces": true
				}
			],
			"hp": {
				"average": 37,
				"formula": "5d8 + 15"
			},
			"speed": {
				"walk": 30
			},
			"str": 11,
			"dex": 14,
			"con": 16,
			"int": 12,
			"wis": 14,
			"cha": 16,
			"save": {
				"wis": "+4"
			},
			"skill": {
				"arcana": "+3",
				"perception": "+4"
			},
			"senses": [
				"darkvision 60 ft."
			],
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
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"exhaustion",
				"poisoned"
			],
			"languages": [
				"the languages it knew in life"
			],
			"cr": "3",
			"spellcasting": [
				{
					"name": "Innate Spellcasting",
					"headerEntries": [
						"The wight's innate spellcasting ability is Charisma (spell save {@dc 13}). It can innately cast the following spells, requiring no verbal or material components:"
					],
					"will": [
						"{@spell detect magic}",
						"{@spell disguise self}",
						"{@spell mage armor}"
					],
					"daily": {
						"1e": [
							"{@spell fear}",
							"{@spell hold person}",
							"{@spell misty step}"
						]
					},
					"ability": "cha"
				}
			],
			"trait": [
				{
					"name": "Sunlight Sensitivity",
					"entries": [
						"While in sunlight, the wight has disadvantage on attack rolls, as well as on Wisdom ({@skill Perception}) checks that rely on sight."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The wight attacks twice with Grave Bolt."
					]
				},
				{
					"name": "Grave Bolt",
					"entries": [
						"{@atk rs} {@hit 5} to hit, range 120 ft., one target. {@h}7 ({@damage 1d8 + 3}) necrotic damage."
					]
				},
				{
					"name": "Life Drain",
					"entries": [
						"{@atk mw} {@hit 4} to hit, reach 5 ft., one creature. {@h}9 ({@damage 2d6 + 2}) necrotic damage. The target must succeed on a {@dc 13} Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0.",
						"A humanoid slain by this attack rises 24 hours later as a {@creature zombie} under the wight's control, unless the humanoid is restored to life or its body is destroyed. The wight can have no more than twelve {@creature zombie||zombies} under its control at one time."
					]
				}
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/deathlock-wight.mp3"
			},
			"altArt": [
				{
					"name": "Deathlock Wight (Alt)",
					"source": "TftYP"
				}
			],
			"traitTags": [
				"Sunlight Sensitivity"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"LF"
			],
			"damageTags": [
				"N"
			],
			"spellcastingTags": [
				"I"
			],
			"miscTags": [
				"MW"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Demogorgon",
			"isNamedCreature": true,
			"source": "MTF",
			"page": 144,
			"otherSources": [
				{
					"source": "OotA",
					"page": 236
				}
			],
			"size": "H",
			"type": {
				"type": "fiend",
				"tags": [
					"demon"
				]
			},
			"alignment": [
				"C",
				"E"
			],
			"ac": [
				{
					"ac": 22,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 406,
				"formula": "28d12 + 224"
			},
			"speed": {
				"walk": 50,
				"swim": 50
			},
			"str": 29,
			"dex": 14,
			"con": 26,
			"int": 20,
			"wis": 17,
			"cha": 25,
			"save": {
				"dex": "+10",
				"con": "+16",
				"wis": "+11",
				"cha": "+15"
			},
			"skill": {
				"insight": "+11",
				"perception": "+19"
			},
			"senses": [
				"truesight 120 ft."
			],
			"passive": 29,
			"resist": [
				"cold",
				"fire",
				"lightning"
			],
			"immune": [
				"poison",
				{
					"immune": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks",
					"cond": true
				}
			],
			"conditionImmune": [
				"charmed",
				"exhaustion",
				"frightened",
				"poisoned"
			],
			"languages": [
				"all",
				"telepathy 120 ft."
			],
			"cr": "26",
			"spellcasting": [
				{
					"name": "Innate Spellcasting",
					"headerEntries": [
						"Demogorgon's spellcasting ability is Charisma (spell save {@dc 23}). Demogorgon can innately cast the following spells, requiring no material components:"
					],
					"will": [
						"{@spell detect magic}",
						"{@spell major image}"
					],
					"daily": {
						"3e": [
							"{@spell dispel magic}",
							"{@spell fear}",
							"{@spell telekinesis}"
						],
						"1e": [
							"{@spell feeblemind}",
							"{@spell project image}"
						]
					},
					"ability": "cha"
				}
			],
			"trait": [
				{
					"name": "Legendary Resistance (3/Day)",
					"entries": [
						"If Demogorgon fails a saving throw, he can choose to succeed instead."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"Demogorgon has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Magic Weapons",
					"entries": [
						"Demogorgon's weapon attacks are magical."
					]
				},
				{
					"name": "Two Heads",
					"entries": [
						"Demogorgon has advantage on saving throws against being {@condition blinded}, {@condition deafened}, {@condition stunned}, or knocked {@condition unconscious}."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"Demogorgon makes two tentacle attacks."
					]
				},
				{
					"name": "Tentacle",
					"entries": [
						"{@atk mw} {@hit 17} to hit, reach 10 ft., one target. {@h}28 ({@damage 3d12 + 9}) bludgeoning damage. If the target is a creature, it must succeed on a {@dc 23} Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if its hit point maximum is reduced to 0."
					]
				},
				{
					"name": "Gaze",
					"entries": [
						"Demogorgon turns his magical gaze toward one creature that he can see within 120 feet of him. That target must make a {@dc 23} Wisdom saving throw. Unless the target is {@condition incapacitated}, it can avert its eyes to avoid the gaze and to automatically succeed on the save. If the target does so, it can't see Demogorgon until the start of his next turn. If the target looks at him in the meantime, it must immediately make the save.",
						"If the target fails the save, the target suffers one of the following effects of Demogorgon's choice or at random:",
						"1. Beguiling Gaze. The target is {@condition stunned} until the start of Demogorgon's next turn or until Demogorgon is no longer within line of sight.",
						"2. Hypnotic Gaze. The target is {@condition charmed} by Demogorgon until the start of Demogorgon's next turn. Demogorgon chooses how the {@condition charmed} target uses its actions, reactions, and movement. Because this gaze requires Demogorgon to focus both heads on the target, he can't use his Maddening Gaze legendary action until the start of his next turn.",
						"3. Insanity Gaze. The target suffers the effect of the {@spell confusion} spell without making a saving throw. The effect lasts until the start of Demogorgon's next turn. Demogorgon doesn't need to concentrate on the spell."
					]
				}
			],
			"legendaryActions": 2,
			"legendary": [
				{
					"name": "Tail",
					"entries": [
						"{@atk mw} {@hit 17} to hit, reach 15 ft., one target. {@h}20 ({@damage 2d10 + 9}) bludgeoning damage plus 11 ({@damage 2d10}) necrotic damage."
					]
				},
				{
					"name": "Maddening Gaze",
					"entries": [
						"Demogorgon uses his Gaze action, and must choose either the Beguiling Gaze or the Insanity Gaze effect."
					]
				}
			],
			"legendaryGroup": {
				"name": "Demogorgon",
				"source": "MTF"
			},
			"hasToken": true,
			"traitTags": [
				"Legendary Resistances",
				"Magic Resistance",
				"Magic Weapons"
			],
			"senseTags": [
				"U"
			],
			"actionTags": [
				"Multiattack",
				"Tentacles"
			],
			"languageTags": [
				"TP",
				"XX"
			],
			"damageTags": [
				"B",
				"N"
			],
			"spellcastingTags": [
				"I"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"charmed",
				"stunned"
			],
			"conditionInflictSpell": [
				"blinded",
				"deafened",
				"frightened",
				"restrained"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Derro",
			"source": "MTF",
			"page": 158,
			"otherSources": [
				{
					"source": "OotA",
					"page": 224
				}
			],
			"size": "S",
			"type": {
				"type": "humanoid",
				"tags": [
					"derro"
				]
			},
			"alignment": [
				"C",
				"E"
			],
			"ac": [
				{
					"ac": 13,
					"from": [
						"{@item leather armor|phb}"
					]
				}
			],
			"hp": {
				"average": 13,
				"formula": "3d6 + 3"
			},
			"speed": {
				"walk": 30
			},
			"str": 10,
			"dex": 14,
			"con": 12,
			"int": 11,
			"wis": 5,
			"cha": 9,
			"skill": {
				"stealth": "+4"
			},
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 7,
			"languages": [
				"Dwarvish",
				"Undercommon"
			],
			"cr": "1/4",
			"trait": [
				{
					"name": "Magic Resistance",
					"entries": [
						"The derro has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Sunlight Sensitivity",
					"entries": [
						"While in sunlight, the derro has disadvantage on attack rolls, as well as on Wisdom ({@skill Perception}) checks that rely on sight."
					]
				}
			],
			"action": [
				{
					"name": "Hooked Spear",
					"entries": [
						"{@atk mw} {@hit 2} to hit, reach 5 ft., one target. {@h}3 ({@damage 1d6}) piercing damage. If the target is Medium or smaller, the derro can choose to deal no damage and knock it {@condition prone}."
					]
				},
				{
					"name": "Light Crossbow",
					"entries": [
						"{@atk rw} {@hit 4} to hit, range 80/320 ft., one target. {@h}6 ({@damage 1d8 + 2}) piercing damage."
					]
				}
			],
			"environment": [
				"mountain",
				"underdark"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/derro.mp3"
			},
			"traitTags": [
				"Magic Resistance",
				"Sunlight Sensitivity"
			],
			"senseTags": [
				"SD"
			],
			"languageTags": [
				"D",
				"U"
			],
			"damageTags": [
				"P"
			],
			"miscTags": [
				"MW",
				"RNG",
				"RW"
			],
			"conditionInflict": [
				"prone"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Derro Savant",
			"source": "MTF",
			"page": 159,
			"otherSources": [
				{
					"source": "OotA",
					"page": 225
				}
			],
			"size": "S",
			"type": {
				"type": "humanoid",
				"tags": [
					"derro"
				]
			},
			"alignment": [
				"C",
				"E"
			],
			"ac": [
				{
					"ac": 13,
					"from": [
						"{@item leather armor|phb}"
					]
				}
			],
			"hp": {
				"average": 36,
				"formula": "8d6 + 8"
			},
			"speed": {
				"walk": 30
			},
			"str": 9,
			"dex": 14,
			"con": 12,
			"int": 11,
			"wis": 5,
			"cha": 14,
			"skill": {
				"stealth": "+4"
			},
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 7,
			"languages": [
				"Dwarvish",
				"Undercommon"
			],
			"cr": "3",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The derro savant is a 5th-level spellcaster. Its spellcasting ability is Charisma (spell save {@dc 12}, {@hit 4} to hit with spell attacks). The derro knows the following sorcerer spells:"
					],
					"spells": {
						"0": {
							"spells": [
								"{@spell acid splash}",
								"{@spell mage hand}",
								"{@spell message}",
								"{@spell prestidigitation}",
								"{@spell ray of frost}"
							]
						},
						"1": {
							"slots": 4,
							"spells": [
								"{@spell burning hands}",
								"{@spell chromatic orb}",
								"{@spell sleep}"
							]
						},
						"2": {
							"slots": 3,
							"spells": [
								"{@spell invisibility}",
								"{@spell spider climb}"
							]
						},
						"3": {
							"slots": 2,
							"spells": [
								"{@spell lightning bolt}"
							]
						}
					},
					"ability": "cha"
				}
			],
			"trait": [
				{
					"name": "Magic Resistance",
					"entries": [
						"The derro savant has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Sunlight Sensitivity",
					"entries": [
						"While in sunlight, the derro savant has disadvantage on attack rolls, as well as on Wisdom ({@skill Perception}) checks that rely on sight."
					]
				}
			],
			"action": [
				{
					"name": "Quarterstaff",
					"entries": [
						"{@atk mw} {@hit 1} to hit, reach 5 ft., one target. {@h}2 ({@damage 1d6 - 1}) bludgeoning damage."
					]
				}
			],
			"environment": [
				"underdark"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/derro-savant.mp3"
			},
			"traitTags": [
				"Magic Resistance",
				"Sunlight Sensitivity"
			],
			"senseTags": [
				"SD"
			],
			"languageTags": [
				"D",
				"U"
			],
			"damageTags": [
				"B"
			],
			"spellcastingTags": [
				"CS"
			],
			"miscTags": [
				"MW"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Dhergoloth",
			"source": "MTF",
			"page": 248,
			"size": "M",
			"type": {
				"type": "fiend",
				"tags": [
					"yugoloth"
				]
			},
			"alignment": [
				"N",
				"E"
			],
			"ac": [
				{
					"ac": 15,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 119,
				"formula": "14d8 + 56"
			},
			"speed": {
				"walk": 30
			},
			"str": 17,
			"dex": 10,
			"con": 19,
			"int": 7,
			"wis": 10,
			"cha": 9,
			"save": {
				"str": "+6"
			},
			"senses": [
				"blindsight 60 ft.",
				"darkvision 60 ft."
			],
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
			"immune": [
				"acid",
				"poison"
			],
			"conditionImmune": [
				"poisoned"
			],
			"languages": [
				"Abyssal",
				"Infernal",
				"telepathy 60 ft."
			],
			"cr": "7",
			"spellcasting": [
				{
					"name": "Innate Spellcasting",
					"headerEntries": [
						"The dhergoloth's innate spellcasting ability is Charisma (spell save {@dc 10}). It can innately cast the following spells, requiring no material components:"
					],
					"will": [
						"{@spell darkness}",
						"{@spell fear}"
					],
					"daily": {
						"3": [
							"{@spell sleep}"
						]
					},
					"ability": "cha"
				}
			],
			"trait": [
				{
					"name": "Magic Resistance",
					"entries": [
						"The dhergoloth has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Magic Weapons",
					"entries": [
						"The dhergoloth's weapon attacks are magical."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The dhergoloth makes two claw attacks."
					]
				},
				{
					"name": "Claw",
					"entries": [
						"{@atk mw} {@hit 6} to hit, reach 5 ft., one target. {@h}12 ({@damage 2d8 + 3}) slashing damage."
					]
				},
				{
					"name": "Flailing Claws {@recharge 5}",
					"entries": [
						"The dhergoloth moves up to its walking speed in a straight line and targets each creature within 5 feet of it during its movement. Each target must succeed on a {@dc 14} Dexterity saving throw or take 22 ({@damage 3d12 + 3}) slashing damage."
					]
				},
				{
					"name": "Teleport",
					"entries": [
						"The dhergoloth magically teleports, along with any equipment it is wearing or carrying, up to 60 feet to an unoccupied space it can see."
					]
				}
			],
			"environment": [
				"underdark"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/dhergoloth.mp3"
			},
			"traitTags": [
				"Magic Resistance",
				"Magic Weapons"
			],
			"senseTags": [
				"B",
				"D"
			],
			"actionTags": [
				"Multiattack",
				"Teleport"
			],
			"languageTags": [
				"AB",
				"I",
				"TP"
			],
			"damageTags": [
				"S"
			],
			"spellcastingTags": [
				"I"
			],
			"miscTags": [
				"MW"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Dire Troll",
			"source": "MTF",
			"page": 243,
			"size": "H",
			"type": "giant",
			"alignment": [
				"C",
				"E"
			],
			"ac": [
				{
					"ac": 15,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 172,
				"formula": "15d12 + 75"
			},
			"speed": {
				"walk": 40
			},
			"str": 22,
			"dex": 15,
			"con": 21,
			"int": 9,
			"wis": 11,
			"cha": 5,
			"save": {
				"wis": "+5",
				"cha": "+2"
			},
			"skill": {
				"perception": "+5"
			},
			"senses": [
				"darkvision 60 ft."
			],
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
			"conditionImmune": [
				"frightened",
				"poisoned"
			],
			"languages": [
				"Giant"
			],
			"cr": "13",
			"trait": [
				{
					"name": "Keen Senses",
					"entries": [
						"The troll has advantage on Wisdom ({@skill Perception}) checks that rely on smell or sight."
					]
				},
				{
					"name": "Regeneration",
					"entries": [
						"The troll regains 10 hit points at the start of its turn. If the troll takes acid or fire damage, it regains only 5 hit points at the start of its next turn. The troll dies only if it is hit by an attack that deals 10 or more acid or fire damage while the troll has 0 hit points."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The troll makes five attacks: one with its bite and four with its claws."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 11} to hit, reach 10 ft., one target. {@h}10 ({@damage 1d8 + 6}) piercing damage plus 5 ({@damage 1d10}) poison damage."
					]
				},
				{
					"name": "Claws",
					"entries": [
						"{@atk mw} {@hit 11} to hit, reach 10 ft., one target. {@h}16 ({@damage 3d6 + 6}) slashing damage."
					]
				},
				{
					"name": "Whirlwind of Claws {@recharge 5}",
					"entries": [
						"Each creature within 10 feet of the troll must make a {@dc 19} Dexterity saving throw, taking 44 ({@damage 8d10}) slashing damage on a failed save, or half as much damage on a successful one."
					]
				}
			],
			"environment": [
				"arctic",
				"forest",
				"hill",
				"mountain",
				"underdark"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/dire-troll.mp3"
			},
			"traitTags": [
				"Keen Senses",
				"Regeneration"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"GI"
			],
			"damageTags": [
				"I",
				"P",
				"S"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Drow Arachnomancer",
			"source": "MTF",
			"page": 182,
			"size": "M",
			"type": {
				"type": "humanoid",
				"tags": [
					"elf"
				]
			},
			"alignment": [
				"C",
				"E"
			],
			"ac": [
				{
					"ac": 15,
					"from": [
						"{@item studded leather armor|phb}"
					]
				}
			],
			"hp": {
				"average": 162,
				"formula": "25d8 + 50"
			},
			"speed": {
				"walk": 30,
				"climb": 30
			},
			"str": 11,
			"dex": 17,
			"con": 14,
			"int": 19,
			"wis": 14,
			"cha": 16,
			"save": {
				"con": "+7",
				"int": "+9",
				"cha": "+8"
			},
			"skill": {
				"arcana": "+9",
				"nature": "+9",
				"perception": "+7",
				"stealth": "+8"
			},
			"senses": [
				"blindsight 10 ft.",
				"darkvision 120 ft."
			],
			"passive": 17,
			"resist": [
				"poison"
			],
			"languages": [
				"Elvish",
				"Undercommon",
				"can speak with spiders"
			],
			"cr": "13",
			"spellcasting": [
				{
					"name": "Innate Spellcasting",
					"headerEntries": [
						"The drow's innate spellcasting ability is Charisma (spell save {@dc 16}). It can innately cast the following spells, requiring no material components:"
					],
					"will": [
						"{@spell dancing lights}"
					],
					"daily": {
						"1e": [
							"{@spell darkness}",
							"{@spell faerie fire}",
							"{@spell levitate} (self only)"
						]
					},
					"ability": "cha"
				},
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The drow is a 16th-level spellcaster. Its spellcasting ability is Charisma (spell save {@dc 16}, {@hit 8} to hit with spell attacks). It regains its expended spell slots when it finishes a short or long rest. It knows the following warlock spells:"
					],
					"spells": {
						"0": {
							"spells": [
								"{@spell chill touch}",
								"{@spell eldritch blast}",
								"{@spell mage hand}",
								"{@spell poison spray}"
							]
						},
						"5": {
							"lower": 1,
							"slots": 3,
							"spells": [
								"{@spell conjure animals} (spiders only)",
								"{@spell crown of madness}",
								"{@spell dimension door}",
								"{@spell dispel magic}",
								"{@spell fear}",
								"{@spell fly}",
								"{@spell giant insect}",
								"{@spell hold monster}",
								"{@spell insect plague}",
								"{@spell invisibility}",
								"{@spell vampiric touch}",
								"{@spell web}",
								"{@spell witch bolt}"
							]
						}
					},
					"daily": {
						"1": [
							"{@spell eyebite}",
							"{@spell etherealness}",
							"{@spell dominate monster}"
						]
					},
					"ability": "cha"
				}
			],
			"trait": [
				{
					"name": "Change Shape (Recharges after a Short or Long Rest)",
					"entries": [
						"The drow can use a bonus action to magically polymorph into a {@creature giant spider}, remaining in that form for up to 1 hour. It can revert to its true form as a bonus action. Its statistics, other than its size, are the same in each form. It can speak and cast spells while in giant spider form. Any equipment it is wearing or carrying in humanoid form melds into the giant spider form. It can't activate, use, wield, or otherwise benefit from any of its equipment. It reverts to its humanoid form if it dies."
					]
				},
				{
					"name": "Fey Ancestry",
					"entries": [
						"The drow has advantage on saving throws against being {@condition charmed}, and magic can't put the drow to sleep."
					]
				},
				{
					"name": "Spider Climb",
					"entries": [
						"The drow can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
					]
				},
				{
					"name": "Sunlight Sensitivity",
					"entries": [
						"While in sunlight, the drow has disadvantage on attack rolls, as well as on Wisdom ({@skill Perception}) checks that rely on sight."
					]
				},
				{
					"name": "Web Walker",
					"entries": [
						"The drow ignores movement restrictions caused by webbing."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The drow makes two poisonous touch attacks or two bite attacks. The first of these attacks that hits each round deals an extra 26 ({@damage 4d12}) poison damage to the target."
					]
				},
				{
					"name": "Poisonous Touch (Humanoid Form Only)",
					"entries": [
						"{@atk mw} {@hit 8} to hit, reach 5 ft., one target. {@h}28 ({@damage 8d6}) poison damage."
					]
				},
				{
					"name": "Bite (Giant Spider Form Only)",
					"entries": [
						"{@atk mw} {@hit 7} to hit, reach 5 ft., one target. {@h}12 ({@damage 2d8 + 3}) piercing damage, and the target must make a {@dc 15} Constitution saving throw, taking 26 ({@damage 4d12}) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but {@condition poisoned} for 1 hour, even after regaining hit points, and is {@condition paralyzed} while {@condition poisoned} in this way."
					]
				},
				{
					"name": "Web (Giant Spider Form Only Recharge 5\u20136)",
					"entries": [
						"{@atk rw} {@hit 8} to hit, range 30/60 ft., one target. {@h}The target is {@condition restrained} by webbing. As an action, the {@condition restrained} target can make a {@dc 15} Strength check, bursting the webbing on a success. The webbing can also be attacked and destroyed (AC 10; hp 5; vulnerability to fire damage; immunity to bludgeoning, poison, and psychic damage)."
					]
				}
			],
			"environment": [
				"underdark"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/drow-arachnomancer.mp3"
			},
			"traitTags": [
				"Fey Ancestry",
				"Spider Climb",
				"Sunlight Sensitivity",
				"Web Walker"
			],
			"senseTags": [
				"B",
				"SD"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"E",
				"U"
			],
			"damageTags": [
				"I",
				"P"
			],
			"spellcastingTags": [
				"CL",
				"I"
			],
			"miscTags": [
				"MW",
				"RW"
			],
			"conditionInflict": [
				"paralyzed",
				"poisoned",
				"restrained"
			],
			"conditionInflictSpell": [
				"charmed",
				"frightened",
				"invisible",
				"paralyzed",
				"restrained",
				"unconscious"
			],
			"hasFluff": true
		},
		{
			"name": "Drow Favored Consort",
			"source": "MTF",
			"page": 183,
			"size": "M",
			"type": {
				"type": "humanoid",
				"tags": [
					"elf"
				]
			},
			"alignment": [
				"N",
				"E"
			],
			"ac": [
				15,
				{
					"ac": 18,
					"condition": "with {@spell mage armor}",
					"braces": true
				}
			],
			"hp": {
				"average": 225,
				"formula": "30d8 + 90"
			},
			"speed": {
				"walk": 30
			},
			"str": 15,
			"dex": 20,
			"con": 16,
			"int": 18,
			"wis": 15,
			"cha": 18,
			"save": {
				"dex": "+11",
				"con": "+9",
				"cha": "+10"
			},
			"skill": {
				"acrobatics": "+11",
				"athletics": "+8",
				"perception": "+8",
				"stealth": "+11"
			},
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 18,
			"languages": [
				"Elvish",
				"Undercommon"
			],
			"cr": "18",
			"spellcasting": [
				{
					"name": "Innate Spellcasting",
					"headerEntries": [
						"The drow's innate spellcasting ability is Charisma (spell save {@dc 18}). It can innately cast the following spells, requiring no material components:"
					],
					"will": [
						"{@spell dancing lights}"
					],
					"daily": {
						"1e": [
							"{@spell darkness}",
							"{@spell faerie fire}",
							"{@spell levitate} (self only)"
						]
					},
					"ability": "cha"
				},
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The drow is a 11th-level spellcaster. Its spellcasting ability is Intelligence (spell save {@dc 18}, {@hit 10} to hit with spell attacks). It has the following wizard spells prepared:"
					],
					"spells": {
						"0": {
							"spells": [
								"{@spell mage hand}",
								"{@spell message}",
								"{@spell poison spray}",
								"{@spell shocking grasp}",
								"{@spell ray of frost}"
							]
						},
						"1": {
							"slots": 4,
							"spells": [
								"{@spell burning hands}",
								"{@spell mage armor}",
								"{@spell magic missile}",
								"{@spell shield}"
							]
						},
						"2": {
							"slots": 3,
							"spells": [
								"{@spell gust of wind}",
								"{@spell invisibility}",
								"{@spell misty step}",
								"{@spell shatter}"
							]
						},
						"3": {
							"slots": 3,
							"spells": [
								"{@spell counterspell}",
								"{@spell fireball}",
								"{@spell haste}"
							]
						},
						"4": {
							"slots": 3,
							"spells": [
								"{@spell dimension door}",
								"{@spell Otiluke's resilient sphere}"
							]
						},
						"5": {
							"slots": 2,
							"spells": [
								"{@spell cone of cold}"
							]
						},
						"6": {
							"slots": 1,
							"spells": [
								"{@spell chain lightning}"
							]
						}
					},
					"ability": "int"
				}
			],
			"trait": [
				{
					"name": "Fey Ancestry",
					"entries": [
						"The drow has advantage on saving throws against being {@condition charmed}, and magic can't put the drow to sleep."
					]
				},
				{
					"name": "Sunlight Sensitivity",
					"entries": [
						"While in sunlight, the drow has disadvantage on attack rolls, as well as on Wisdom ({@skill Perception}) checks that rely on sight."
					]
				},
				{
					"name": "War Magic",
					"entries": [
						"When the drow uses its action to cast a spell, it can make one weapon attack as a bonus action."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The drow makes three scimitar attacks."
					]
				},
				{
					"name": "Scimitar",
					"entries": [
						"{@atk mw} {@hit 11} to hit, reach 5 ft., one target. {@h}8 ({@damage 1d6 + 5}) slashing damage plus 18 ({@damage 4d8}) poison damage. In addition, the target has disadvantage on the next saving throw it makes against a spell the drow casts before the end of the drow's next turn."
					]
				},
				{
					"name": "Hand Crossbow",
					"entries": [
						"{@atk rw} {@hit 11} to hit, range 30/120 ft., one target. {@h}8 ({@damage 1d6 + 5}) piercing damage, and the target must succeed on a {@dc 13} Constitution saving throw or be {@condition poisoned} for 1 hour. If the saving throw fails by 5 or more, the target is also {@condition unconscious} while {@condition poisoned} in this way. The target regains consciousness if it takes damage or if another creature takes an action to shake it."
					]
				}
			],
			"environment": [
				"underdark"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/drow-favored-consort.mp3"
			},
			"traitTags": [
				"Fey Ancestry",
				"Sunlight Sensitivity"
			],
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"E",
				"U"
			],
			"damageTags": [
				"I",
				"P",
				"S"
			],
			"spellcastingTags": [
				"CW",
				"I"
			],
			"miscTags": [
				"MW",
				"RNG",
				"RW"
			],
			"conditionInflict": [
				"poisoned",
				"unconscious"
			],
			"conditionInflictSpell": [
				"invisible"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Drow House Captain",
			"source": "MTF",
			"page": 184,
			"size": "M",
			"type": {
				"type": "humanoid",
				"tags": [
					"elf"
				]
			},
			"alignment": [
				"N",
				"E"
			],
			"ac": [
				{
					"ac": 16,
					"from": [
						"{@item chain mail|phb}"
					]
				}
			],
			"hp": {
				"average": 162,
				"formula": "25d8 + 50"
			},
			"speed": {
				"walk": 30
			},
			"str": 14,
			"dex": 19,
			"con": 15,
			"int": 12,
			"wis": 14,
			"cha": 13,
			"save": {
				"dex": "+8",
				"con": "+6",
				"wis": "+6"
			},
			"skill": {
				"perception": "+6",
				"stealth": "+8"
			},
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 16,
			"languages": [
				"Elvish",
				"Undercommon"
			],
			"cr": "9",
			"spellcasting": [
				{
					"name": "Innate Spellcasting",
					"headerEntries": [
						"The drow's innate spellcasting ability is Charisma (spell save {@dc 13}). He can innately cast the following spells, requiring no material components:"
					],
					"will": [
						"{@spell dancing lights}"
					],
					"daily": {
						"1e": [
							"{@spell darkness}",
							"{@spell faerie fire}",
							"{@spell levitate} (self only)"
						]
					},
					"ability": "cha"
				}
			],
			"trait": [
				{
					"name": "Battle Command",
					"entries": [
						"As a bonus action, the drow targets one ally he can see within 30 feet of him. If the target can see or hear the drow, the target can use its reaction to make one melee attack or to take the Dodge or Hide action."
					]
				},
				{
					"name": "Fey Ancestry",
					"entries": [
						"The drow has advantage on saving throws against being {@condition charmed}, and magic can't put the drow to sleep."
					]
				},
				{
					"name": "Sunlight Sensitivity",
					"entries": [
						"While in sunlight, the drow has disadvantage on attack rolls, as well as on Wisdom ({@skill Perception}) checks that rely on sight."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The drow makes three attacks: two with his scimitar and one with his whip or his hand crossbow."
					]
				},
				{
					"name": "Scimitar",
					"entries": [
						"{@atk mw} {@hit 8} to hit, reach 5 ft., one target. {@h}7 ({@damage 1d6 + 4}) slashing damage plus 14 ({@damage 4d6}) poison damage."
					]
				},
				{
					"name": "Whip",
					"entries": [
						"{@atk mw} {@hit 8} to hit, reach 10 ft., one target. {@h}6 ({@damage 1d4 + 4}) slashing damage. If the target is an ally, it has advantage on attack rolls until the end of its next turn."
					]
				},
				{
					"name": "Hand Crossbow",
					"entries": [
						"{@atk rw} {@hit 8} to hit, range 30/120 ft., one target. {@h}7 ({@damage 1d6 + 4}) piercing damage, and the target must succeed on a {@dc 13} Constitution saving throw or be {@condition poisoned} for 1 hour. If the saving throw fails by 5 or more, the target is also {@condition unconscious} while {@condition poisoned} in this way. The target regains consciousness if it takes damage or if another creature takes an action to shake it."
					]
				}
			],
			"reaction": [
				{
					"name": "Parry",
					"entries": [
						"The drow adds 3 to his AC against one melee attack that would hit him. To do so, the drow must see the attacker and be wielding a melee weapon."
					]
				}
			],
			"environment": [
				"underdark"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/drow-house-captain.mp3"
			},
			"traitTags": [
				"Fey Ancestry",
				"Sunlight Sensitivity"
			],
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Multiattack",
				"Parry"
			],
			"languageTags": [
				"E",
				"U"
			],
			"damageTags": [
				"I",
				"P",
				"S"
			],
			"spellcastingTags": [
				"I"
			],
			"miscTags": [
				"MW",
				"RCH",
				"RNG",
				"RW"
			],
			"hasFluff": true
		},
		{
			"name": "Drow Inquisitor",
			"source": "MTF",
			"page": 184,
			"size": "M",
			"type": {
				"type": "humanoid",
				"tags": [
					"elf"
				]
			},
			"alignment": [
				"N",
				"E"
			],
			"ac": [
				{
					"ac": 16,
					"from": [
						"{@item breastplate|phb}"
					]
				}
			],
			"hp": {
				"average": 143,
				"formula": "22d8 + 44"
			},
			"speed": {
				"walk": 30
			},
			"str": 11,
			"dex": 15,
			"con": 14,
			"int": 16,
			"wis": 21,
			"cha": 20,
			"save": {
				"con": "+7",
				"wis": "+10",
				"cha": "+10"
			},
			"skill": {
				"insight": "+10",
				"perception": "+10",
				"religion": "+8",
				"stealth": "+7"
			},
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 20,
			"conditionImmune": [
				"frightened"
			],
			"languages": [
				"Elvish",
				"Undercommon"
			],
			"cr": "14",
			"spellcasting": [
				{
					"name": "Innate Spellcasting",
					"headerEntries": [
						"The drow's innate spellcasting ability is Charisma (spell save {@dc 18}). She can innately cast the following spells, requiring no material components:"
					],
					"will": [
						"{@spell dancing lights}",
						"{@spell detect magic}"
					],
					"daily": {
						"1e": [
							"{@spell clairvoyance}",
							"{@spell darkness}",
							"{@spell detect thoughts}",
							"{@spell dispel magic}",
							"{@spell faerie fire}",
							"{@spell levitate} (self only)",
							"{@spell suggestion}"
						]
					},
					"ability": "cha"
				},
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The drow is a 12th-level spellcaster. Her spellcasting ability is Wisdom (spell save {@dc 18}, {@hit 10} to hit with spell attacks). She has the following cleric spells prepared:"
					],
					"spells": {
						"0": {
							"spells": [
								"{@spell guidance}",
								"{@spell message}",
								"{@spell poison spray}",
								"{@spell resistance}",
								"{@spell thaumaturgy}"
							]
						},
						"1": {
							"slots": 4,
							"spells": [
								"{@spell bane}",
								"{@spell cure wounds}",
								"{@spell inflict wounds}"
							]
						},
						"2": {
							"slots": 3,
							"spells": [
								"{@spell blindness/deafness}",
								"{@spell silence}",
								"{@spell spiritual weapon}"
							]
						},
						"3": {
							"slots": 3,
							"spells": [
								"{@spell bestow curse}",
								"{@spell dispel magic}",
								"{@spell magic circle}"
							]
						},
						"4": {
							"slots": 3,
							"spells": [
								"{@spell banishment}",
								"{@spell divination}",
								"{@spell freedom of movement}"
							]
						},
						"5": {
							"slots": 2,
							"spells": [
								"{@spell contagion}",
								"{@spell dispel evil and good}",
								"{@spell insect plague}"
							]
						},
						"6": {
							"slots": 1,
							"spells": [
								"{@spell harm}",
								"{@spell true seeing}"
							]
						}
					},
					"ability": "wis"
				}
			],
			"trait": [
				{
					"name": "Discern Lie",
					"entries": [
						"The drow knows when she hears a creature speak a lie in a language she knows."
					]
				},
				{
					"name": "Fey Ancestry",
					"entries": [
						"The drow has advantage on saving throws against being {@condition charmed}, and magic can't put the drow to sleep."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"The drow has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Sunlight Sensitivity",
					"entries": [
						"While in sunlight, the drow has disadvantage on attack rolls, as well as on Wisdom ({@skill Perception}) checks that rely on sight."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The drow makes three death lance attacks."
					]
				},
				{
					"name": "Death Lance",
					"entries": [
						"{@atk mw} {@hit 10} to hit, reach 5 ft., one target. {@h}8 ({@damage 1d6 + 5}) piercing damage plus 18 ({@damage 4d8}) necrotic damage. The target's hit point maximum is reduced by an amount equal to the necrotic damage it takes. This reduction lasts until the target finishes a long rest. The target dies if its hit point maximum is reduced to 0."
					]
				}
			],
			"variant": [
				{
					"type": "variant",
					"name": "Demon Summoning",
					"entries": [
						"Some drow inquisitors have an action that allows them to summon a demon.",
						{
							"name": "Summon Demon (1/Day)",
							"type": "entries",
							"entries": [
								"The drow attempts to magically summon a yochlol, with a {@chance 50|50 percent} chance of success. If the attempt fails, the drow takes 5 ({@damage 1d10}) psychic damage. Otherwise, the summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 10 minutes, until it or its summoner dies, or until its summoner dismisses it as an action. (see notes for link)"
							]
						}
					]
				}
			],
			"environment": [
				"underdark"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/drow-inquisitor.mp3"
			},
			"traitTags": [
				"Fey Ancestry",
				"Magic Resistance",
				"Sunlight Sensitivity"
			],
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"E",
				"U"
			],
			"damageTags": [
				"N",
				"P",
				"Y"
			],
			"spellcastingTags": [
				"CC",
				"I"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflictSpell": [
				"blinded",
				"deafened",
				"incapacitated",
				"poisoned",
				"stunned"
			],
			"hasFluff": true
		},
		{
			"name": "Drow Matron Mother",
			"source": "MTF",
			"page": 186,
			"size": "M",
			"type": {
				"type": "humanoid",
				"tags": [
					"elf"
				]
			},
			"alignment": [
				"N",
				"E"
			],
			"ac": [
				{
					"ac": 17,
					"from": [
						"{@item half plate armor|phb}"
					]
				}
			],
			"hp": {
				"average": 262,
				"formula": "35d8 + 105"
			},
			"speed": {
				"walk": 30
			},
			"str": 12,
			"dex": 18,
			"con": 16,
			"int": 17,
			"wis": 21,
			"cha": 22,
			"save": {
				"con": "+9",
				"wis": "+11",
				"cha": "+12"
			},
			"skill": {
				"insight": "+11",
				"perception": "+11",
				"religion": "+9",
				"stealth": "+10"
			},
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 21,
			"conditionImmune": [
				"charmed",
				"frightened",
				"poisoned"
			],
			"languages": [
				"Elvish",
				"Undercommon"
			],
			"cr": "20",
			"spellcasting": [
				{
					"name": "Innate Spellcasting",
					"headerEntries": [
						"The drow's innate spellcasting ability is Charisma (spell save {@dc 20}). She can innately cast the following spells, requiring no material components:"
					],
					"will": [
						"{@spell dancing lights}",
						"{@spell detect magic}"
					],
					"daily": {
						"1e": [
							"{@spell clairvoyance}",
							"{@spell darkness}",
							"{@spell detect thoughts}",
							"{@spell dispel magic}",
							"{@spell faerie fire}",
							"{@spell levitate} (self only)",
							"{@spell suggestion}"
						]
					},
					"ability": "cha"
				},
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The drow is a 20th-level spellcaster. Her spellcasting ability is Wisdom (spell save {@dc 19}, {@hit 11} to hit with spell attacks). The drow has the following cleric spells prepared:"
					],
					"spells": {
						"0": {
							"spells": [
								"{@spell guidance}",
								"{@spell mending}",
								"{@spell resistance}",
								"{@spell sacred flame}",
								"{@spell thaumaturgy}"
							]
						},
						"1": {
							"slots": 4,
							"spells": [
								"{@spell bane}",
								"{@spell command}",
								"{@spell cure wounds}",
								"{@spell guiding bolt}"
							]
						},
						"2": {
							"slots": 3,
							"spells": [
								"{@spell hold person}",
								"{@spell silence}",
								"{@spell spiritual weapon}"
							]
						},
						"3": {
							"slots": 3,
							"spells": [
								"{@spell bestow curse}",
								"{@spell clairvoyance}",
								"{@spell dispel magic}",
								"{@spell spirit guardians}"
							]
						},
						"4": {
							"slots": 3,
							"spells": [
								"{@spell banishment}",
								"{@spell death ward}",
								"{@spell freedom of movement}",
								"{@spell guardian of faith}"
							]
						},
						"5": {
							"slots": 3,
							"spells": [
								"{@spell contagion}",
								"{@spell flame strike}",
								"{@spell geas}",
								"{@spell mass cure wounds}"
							]
						},
						"6": {
							"slots": 2,
							"spells": [
								"{@spell blade barrier}",
								"{@spell harm}"
							]
						},
						"7": {
							"slots": 2,
							"spells": [
								"{@spell divine word}",
								"{@spell plane shift}"
							]
						},
						"8": {
							"slots": 1,
							"spells": [
								"{@spell holy aura}"
							]
						},
						"9": {
							"slots": 1,
							"spells": [
								"{@spell gate}"
							]
						}
					},
					"ability": "wis"
				}
			],
			"trait": [
				{
					"name": "Fey Ancestry",
					"entries": [
						"The drow has advantage on saving throws against being {@condition charmed}, and magic can't put the drow to sleep."
					]
				},
				{
					"name": "Lolth's Fickle Favor",
					"entries": [
						"As a bonus action, the matron can bestow the Spider Queen's blessing on one ally she can see within 30 feet of her. The ally takes 7 ({@damage 2d6}) psychic damage but has advantage on the next attack roll it makes until the end of its next turn."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"The drow has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Sunlight Sensitivity",
					"entries": [
						"While in sunlight, the drow has disadvantage on attack rolls, as well as on Wisdom ({@skill Perception}) checks that rely on sight."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The matron mother makes two demon staff attacks or three tentacle rod attacks."
					]
				},
				{
					"name": "Demon Staff",
					"entries": [
						"{@atk mw} {@hit 10} to hit, reach 5 ft., one target. {@h}7 ({@damage 1d6 + 4}) bludgeoning damage, or 8 ({@damage 1d8 + 4}) bludgeoning damage if used with two hands, plus 14 ({@damage 4d6}) psychic damage. In addition, the target must succeed on a DC19 Wisdom saving throw or become {@condition frightened} of the drow for 1 minute. The {@condition frightened} target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
					]
				},
				{
					"name": "Tentacle Rod",
					"entries": [
						"{@atk mw} {@hit 9} to hit, reach 15 ft., one target. {@h}3 ({@damage 1d6}) bludgeoning damage. If the target is hit three times by the rod on one turn, the target must succeed on a {@dc 15} Constitution saving throw or suffer the following effects for 1 minute: the target's speed is halved, it has disadvantage on Dexterity saving throws, and it can't use reactions. Moreover, on each of its turns, it can take either an action or a bonus action, but not both. At the end of each of its turns, it can repeat the saving throw, ending the effect on itself on a success."
					]
				},
				{
					"name": "Summon Servant (1/Day)",
					"entries": [
						"The drow magically summons a {@creature retriever|mtf} or a {@creature yochlol}. The summoned creature appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 10 minutes, until it or its summoner dies, or until its summoner dismisses it as an action."
					]
				}
			],
			"legendary": [
				{
					"name": "Demon Staff",
					"entries": [
						"The drow makes one attack with her demon staff."
					]
				},
				{
					"name": "Compel Demon (Costs 2 Actions)",
					"entries": [
						"An allied demon within 30 feet of the drow uses its reaction to make one attack against a target of the drow's choice that she can see."
					]
				},
				{
					"name": "Cast a Spell (Costs 1\u20133 Actions)",
					"entries": [
						"The drow expends a spell slot to cast a 1st-, 2nd-, or 3rd-level spell that she has prepared. Doing so costs 1 legendary action per level of the spell."
					]
				}
			],
			"environment": [
				"underdark"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/drow-matron-mother.mp3"
			},
			"traitTags": [
				"Fey Ancestry",
				"Magic Resistance",
				"Sunlight Sensitivity"
			],
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"E",
				"U"
			],
			"damageTags": [
				"B",
				"Y"
			],
			"spellcastingTags": [
				"CC",
				"I"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"frightened"
			],
			"conditionInflictSpell": [
				"blinded",
				"charmed",
				"deafened",
				"incapacitated",
				"paralyzed",
				"poisoned",
				"prone",
				"stunned"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Drow Shadowblade",
			"source": "MTF",
			"page": 187,
			"size": "M",
			"type": {
				"type": "humanoid",
				"tags": [
					"elf"
				]
			},
			"alignment": [
				"N",
				"E"
			],
			"ac": [
				{
					"ac": 17,
					"from": [
						"{@item studded leather armor|phb}"
					]
				}
			],
			"hp": {
				"average": 150,
				"formula": "20d8 + 60"
			},
			"speed": {
				"walk": 30
			},
			"str": 14,
			"dex": 21,
			"con": 16,
			"int": 12,
			"wis": 14,
			"cha": 13,
			"save": {
				"dex": "+9",
				"con": "+7",
				"wis": "+6"
			},
			"skill": {
				"perception": "+6",
				"stealth": "+9"
			},
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 16,
			"languages": [
				"Elvish",
				"Undercommon"
			],
			"cr": "11",
			"spellcasting": [
				{
					"name": "Innate Spellcasting",
					"headerEntries": [
						"The drow's innate spellcasting ability is Charisma (spell save {@dc 13}). It can innately cast the following spells, requiring no material components:"
					],
					"will": [
						"{@spell dancing lights}"
					],
					"daily": {
						"1e": [
							"{@spell darkness}",
							"{@spell faerie fire}",
							"{@spell levitate} (self only)"
						]
					},
					"ability": "cha"
				}
			],
			"trait": [
				{
					"name": "Fey Ancestry",
					"entries": [
						"The drow has advantage on saving throws against being {@condition charmed}, and magic can't put the drow to sleep."
					]
				},
				{
					"name": "Shadow Step",
					"entries": [
						"While in dim light or darkness, the drow can teleport as a bonus action up to 60 feet to an unoccupied space it can see that is also in dim light or darkness. It then has advantage on the first melee attack it makes before the end of the turn."
					]
				},
				{
					"name": "Sunlight Sensitivity",
					"entries": [
						"While in sunlight, the drow has disadvantage on attack rolls, as well as on Wisdom ({@skill Perception}) checks that rely on sight."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The drow makes two attacks with its shadow sword. If either attack hits and the target is within 10 feet of a 5-foot cube of darkness created by the shadow sword on a previous turn, the drow can dismiss that darkness and cause the target to take 21 ({@damage 6d6}) necrotic damage. The drow can dismiss darkness in this way no more than once per turn."
					]
				},
				{
					"name": "Shadow Sword",
					"entries": [
						"{@atk mw} {@hit 9} to hit, reach 5 ft., one target. {@h}8 ({@damage 1d6 + 5}) piercing damage plus 10 ({@damage 3d6}) necrotic damage and 10 ({@damage 3d6}) poison damage. The drow can then fill an unoccupied 5-foot cube within 5 feet of the target with magical darkness, which remains for 1 minute."
					]
				},
				{
					"name": "Hand Crossbow",
					"entries": [
						"{@atk rw} {@hit 9} to hit, range 30/120 ft., one target. {@h}8 ({@damage 1d6 + 5}) piercing damage, and the target must succeed on a {@dc 13} Constitution saving throw or be {@condition poisoned} for 1 hour. If the saving throw fails by 5 or more, the target is also {@condition unconscious} while {@condition poisoned} in this way. The target regains consciousness if it takes damage or if another creature takes an action to shake it."
					]
				}
			],
			"variant": [
				{
					"type": "variant",
					"name": "Shadow Demon Summoning",
					"entries": [
						"Some drow shadowblades have an action that allows them to summon a demon.",
						{
							"name": "Summon Shadow Demon (1/Day)",
							"type": "entries",
							"entries": [
								"The drow attempts to magically summon a shadow demon with a {@chance 50|50 percent} chance of success. If the attempt fails, the drow takes 5 ({@damage 1d10}) psychic damage. Otherwise, the summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 10 minutes, until it or its summoner dies, or until its summoner dismisses it as an action."
							]
						}
					]
				}
			],
			"environment": [
				"underdark"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/drow-shadowblade.mp3"
			},
			"traitTags": [
				"Fey Ancestry",
				"Sunlight Sensitivity"
			],
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"E",
				"U"
			],
			"damageTags": [
				"I",
				"N",
				"P",
				"Y"
			],
			"spellcastingTags": [
				"I"
			],
			"miscTags": [
				"AOE",
				"MW",
				"RNG",
				"RW"
			],
			"hasFluff": true
		},
		{
			"name": "Duergar Despot",
			"source": "MTF",
			"page": 188,
			"size": "M",
			"type": {
				"type": "humanoid",
				"tags": [
					"dwarf"
				]
			},
			"alignment": [
				"L",
				"E"
			],
			"ac": [
				{
					"ac": 21,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 119,
				"formula": "14d8 + 56"
			},
			"speed": {
				"walk": 25
			},
			"str": 20,
			"dex": 5,
			"con": 19,
			"int": 15,
			"wis": 14,
			"cha": 13,
			"save": {
				"con": "+8",
				"wis": "+6"
			},
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 12,
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"charmed",
				"exhaustion",
				"frightened",
				"paralyzed",
				"poisoned"
			],
			"languages": [
				"Dwarvish",
				"Undercommon"
			],
			"cr": "12",
			"spellcasting": [
				{
					"name": "Innate Spellcasting (Psionics)",
					"headerEntries": [
						"The duergar despot's innate spellcasting ability is Intelligence (spell save {@dc 12}). It can cast the following spells, requiring no components:"
					],
					"will": [
						"{@spell mage hand}",
						"{@spell minor illusion}"
					],
					"daily": {
						"1e": [
							"{@spell counterspell}",
							"{@spell misty step}",
							"{@spell stinking cloud}"
						]
					},
					"ability": "int"
				}
			],
			"trait": [
				{
					"name": "Magic Resistance",
					"entries": [
						"The duergar has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Psychic Engine",
					"entries": [
						"When the duergar despot suffers a critical hit or is reduced to 0 hit points, psychic energy erupts from its frame to deal 14 ({@damage 4d6}) psychic damage to each creature within 5 feet of it."
					]
				},
				{
					"name": "Sunlight Sensitivity",
					"entries": [
						"While in sunlight, the duergar despot has disadvantage on attack rolls, as well as on Wisdom ({@skill Perception}) checks that rely on sight."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The despot makes two iron fist attacks and two stomping foot attacks. It can replace up to four of these attacks with uses of its Flame Jet."
					]
				},
				{
					"name": "Iron Fist",
					"entries": [
						"{@atk mw} {@hit 9} to hit, reach 5 ft., one target. {@h}14 ({@damage 2d8 + 5}) bludgeoning damage. If the target is a Large or smaller creature, it must make a successful {@dc 17} Strength saving throw or be thrown up to 30 feet away in a straight line. The target is knocked {@condition prone} and then takes 10 ({@damage 3d6}) bludgeoning damage."
					]
				},
				{
					"name": "Stomping Foot",
					"entries": [
						"{@atk mw} {@hit 9} to hit, reach 5 ft., one target. {@h}9 ({@damage 1d8 + 5}) bludgeoning damage, or 18 ({@damage 3d8 + 5}) bludgeoning damage to a {@condition prone} target."
					]
				},
				{
					"name": "Flame Jet",
					"entries": [
						"The duergar spews flames in a line 100 feet long and 5 feet wide. Each creature in the line must make a {@dc 16} Dexterity saving throw, taking 18 ({@damage 4d8}) fire damage on a failed save, or half as much damage on a successful one."
					]
				}
			],
			"environment": [
				"mountain",
				"underdark"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/duergar-despot.mp3"
			},
			"traitTags": [
				"Magic Resistance",
				"Sunlight Sensitivity"
			],
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"D",
				"U"
			],
			"damageTags": [
				"B",
				"F",
				"Y"
			],
			"spellcastingTags": [
				"I",
				"P"
			],
			"miscTags": [
				"MW"
			],
			"hasFluff": true
		},
		{
			"name": "Duergar Hammerer",
			"source": "MTF",
			"page": 188,
			"otherSources": [
				{
					"source": "IDRotF"
				}
			],
			"size": "M",
			"type": "construct",
			"alignment": [
				"L",
				"E"
			],
			"ac": [
				{
					"ac": 17,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 33,
				"formula": "6d8 + 6"
			},
			"speed": {
				"walk": 20
			},
			"str": 17,
			"dex": 7,
			"con": 12,
			"int": 5,
			"wis": 5,
			"cha": 5,
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 7,
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"charmed",
				"exhaustion",
				"frightened",
				"paralyzed",
				"petrified",
				"poisoned"
			],
			"languages": [
				"understands Dwarvish but can't speak"
			],
			"cr": "2",
			"trait": [
				{
					"name": "Engine of Pain",
					"entries": [
						"Once per turn, a creature that attacks the hammerer can target the duergar trapped in it. The attacker has disadvantage on the attack roll. On a hit, the attack deals an extra 5 ({@dice 1d10}) damage to the hammerer, and the hammerer can respond by using its Multiattack with its reaction."
					]
				},
				{
					"name": "Siege Monster",
					"entries": [
						"The hammerer deals double damage to objects and structures."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The hammerer makes two attacks: one with its claw and one with its hammer."
					]
				},
				{
					"name": "Claw",
					"entries": [
						"{@atk mw} {@hit 5} to hit, reach 5 ft., one target. {@h}6 ({@damage 1d6 + 3}) bludgeoning damage."
					]
				},
				{
					"name": "Hammer",
					"entries": [
						"{@atk mw} {@hit 5} to hit, reach 5 ft., one target. {@h}10 ({@damage 2d6 + 3}) bludgeoning damage."
					]
				}
			],
			"environment": [
				"mountain",
				"underdark"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/duergar-hammerer.mp3"
			},
			"traitTags": [
				"Siege Monster"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"CS",
				"D"
			],
			"damageTags": [
				"B"
			],
			"miscTags": [
				"MW"
			],
			"hasFluff": true
		},
		{
			"name": "Duergar Kavalrachni",
			"source": "MTF",
			"page": 189,
			"otherSources": [
				{
					"source": "OotA",
					"page": 226
				}
			],
			"size": "M",
			"type": {
				"type": "humanoid",
				"tags": [
					"dwarf"
				]
			},
			"alignment": [
				"L",
				"E"
			],
			"ac": [
				{
					"ac": 16,
					"from": [
						"{@item scale mail|phb}",
						"{@item shield|phb}"
					]
				}
			],
			"hp": {
				"average": 26,
				"formula": "4d8 + 8"
			},
			"speed": {
				"walk": 25
			},
			"str": 14,
			"dex": 11,
			"con": 14,
			"int": 11,
			"wis": 10,
			"cha": 9,
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 10,
			"resist": [
				"poison"
			],
			"languages": [
				"Dwarvish",
				"Undercommon"
			],
			"cr": "2",
			"trait": [
				{
					"name": "Cavalry Training",
					"entries": [
						"When the duergar hits a target with a melee attack while mounted on a female steeder, the steeder can make one melee attack against the same target as a reaction."
					]
				},
				{
					"name": "Duergar Resilience",
					"entries": [
						"The duergar has advantage on saving throws against poison, spells, and illusions, as well as to resist being {@condition charmed} or {@condition paralyzed}."
					]
				},
				{
					"name": "Sunlight Sensitivity",
					"entries": [
						"While in sunlight, the duergar has disadvantage on attack rolls, as well as on Wisdom ({@skill Perception}) checks that rely on sight."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The duergar makes two war pick attacks."
					]
				},
				{
					"name": "War Pick",
					"entries": [
						"{@atk mw} {@hit 4} to hit, reach 5 ft., one target. {@h}6 ({@damage 1d8 + 2}) piercing damage plus 5 ({@damage 2d4}) poison damage."
					]
				},
				{
					"name": "Heavy Crossbow",
					"entries": [
						"{@atk rw} {@hit 2} to hit, range 100/400 ft., one target. {@h}5 ({@damage 1d10}) piercing damage."
					]
				},
				{
					"name": "Shared Invisibility (Recharges after a Short or Long Rest)",
					"entries": [
						"The duergar magically turns {@condition invisible} for up to 1 hour or until it attacks, it casts a spell, or its concentration is broken (as if concentrating on a spell). Any equipment the duergar wears or carries is {@condition invisible} with it. While the {@condition invisible} duergar is mounted on a female steeder, the steeder is {@condition invisible} as well. The invisibility ends early on the steeder immediately after it attacks."
					]
				}
			],
			"environment": [
				"mountain",
				"underdark"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/duergar-kavalrachni.mp3"
			},
			"traitTags": [
				"Sunlight Sensitivity"
			],
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"D",
				"U"
			],
			"damageTags": [
				"I",
				"P"
			],
			"miscTags": [
				"MW",
				"RNG",
				"RW"
			],
			"hasFluff": true
		},
		{
			"name": "Duergar Mind Master",
			"source": "MTF",
			"page": 189,
			"otherSources": [
				{
					"source": "IDRotF"
				}
			],
			"size": "M",
			"type": {
				"type": "humanoid",
				"tags": [
					"dwarf"
				]
			},
			"alignment": [
				"L",
				"E"
			],
			"ac": [
				{
					"ac": 14,
					"from": [
						"{@item leather armor|phb}"
					]
				},
				{
					"ac": 19,
					"condition": "while reduced"
				}
			],
			"hp": {
				"average": 39,
				"formula": "6d8 + 12"
			},
			"speed": {
				"walk": 25
			},
			"str": 11,
			"dex": 17,
			"con": 14,
			"int": 15,
			"wis": 10,
			"cha": 12,
			"save": {
				"wis": "+2"
			},
			"skill": {
				"perception": "+2",
				"stealth": "+5"
			},
			"senses": [
				"darkvision 120 ft.",
				"truesight 30 ft."
			],
			"passive": 12,
			"resist": [
				"poison"
			],
			"languages": [
				"Dwarvish",
				"Undercommon"
			],
			"cr": "2",
			"trait": [
				{
					"name": "Duergar Resilience",
					"entries": [
						"The duergar has advantage on saving throws against poison, spells, and illusions, as well as to resist being {@condition charmed} or {@condition paralyzed}."
					]
				},
				{
					"name": "Sunlight Sensitivity",
					"entries": [
						"While in sunlight, the duergar has disadvantage on attack rolls, as well as on Wisdom ({@skill Perception}) checks that rely on sight."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The duergar makes two melee attacks. It can replace one of those attacks with a use of Mind Mastery."
					]
				},
				{
					"name": "Mind-Poison Dagger",
					"entries": [
						"{@atk mw} {@hit 5} to hit, reach 5 ft., one target. {@h}5 ({@damage 1d4 + 3}) piercing damage and 10 ({@damage 3d6}) psychic damage, or 1 piercing damage and 14 ({@damage 4d6}) psychic damage while reduced."
					]
				},
				{
					"name": "Invisibility {@recharge 4}",
					"entries": [
						"The duergar magically turns {@condition invisible} for up to 1 hour or until it attacks, it casts a spell, it uses its Reduce, or its concentration is broken (as if concentrating on a spell). Any equipment the duergar wears or carries is {@condition invisible} with it."
					]
				},
				{
					"name": "Mind Mastery",
					"entries": [
						"The duergar targets one creature it can see within 60 feet of it. The target must succeed on a {@dc 12} Intelligence saving throw, or the duergar causes it to use its reaction either to make one weapon attack against another creature the duergar can see or to move up to 10 feet in a direction of the duergar's choice. Creatures that can't be {@condition charmed} are immune to this effect."
					]
				},
				{
					"name": "Reduce (Recharges after a Short or Long Rest)",
					"entries": [
						"For 1 minute, the duergar magically decreases in size, along with anything it is wearing or carrying. While reduced, the duergar is Tiny, reduces its weapon damage to 1, and makes attacks, checks, and saving throws with disadvantage if they use Strength. It gains a +5 bonus to all Dexterity ({@skill Stealth}) checks and a +5 bonus to its AC. It can also take a bonus action on each of its turns to take the Hide action."
					]
				}
			],
			"environment": [
				"mountain",
				"underdark"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/duergar-mind-master.mp3"
			},
			"traitTags": [
				"Sunlight Sensitivity"
			],
			"senseTags": [
				"SD",
				"U"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"D",
				"U"
			],
			"damageTags": [
				"P",
				"Y"
			],
			"miscTags": [
				"MW"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Duergar Screamer",
			"source": "MTF",
			"page": 190,
			"size": "M",
			"type": "construct",
			"alignment": [
				"L",
				"E"
			],
			"ac": [
				{
					"ac": 15,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 38,
				"formula": "7d8 + 7"
			},
			"speed": {
				"walk": 20
			},
			"str": 18,
			"dex": 7,
			"con": 12,
			"int": 5,
			"wis": 5,
			"cha": 5,
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 7,
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"charmed",
				"exhaustion",
				"frightened",
				"paralyzed",
				"petrified",
				"poisoned"
			],
			"languages": [
				"understands Dwarvish but can't speak"
			],
			"cr": "3",
			"trait": [
				{
					"name": "Engine of Pain",
					"entries": [
						"Once per turn, a creature that attacks the screamer can target the duergar trapped in it. The attacker has disadvantage on the attack roll. On a hit, the attack deals an extra 11 ({@dice 2d10}) damage to the screamer, and the screamer can respond by using its Multiattack with its reaction."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The screamer makes one drill attack and uses its Sonic Scream."
					]
				},
				{
					"name": "Drill",
					"entries": [
						"{@atk mw} {@hit 6} to hit, reach 5 ft., one target. {@h}10 ({@damage 1d12 + 4}) piercing damage."
					]
				},
				{
					"name": "Sonic Scream",
					"entries": [
						"The screamer emits destructive energy in a 15-foot cube. Each creature in that area must succeed on a {@dc 11} Strength saving throw or take 7 ({@damage 2d6}) thunder damage and be knocked {@condition prone}."
					]
				}
			],
			"environment": [
				"underdark"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/duergar-screamer.mp3"
			},
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"CS",
				"D"
			],
			"damageTags": [
				"P",
				"T"
			],
			"miscTags": [
				"AOE",
				"MW"
			],
			"conditionInflict": [
				"prone"
			],
			"hasFluff": true
		},
		{
			"name": "Duergar Soulblade",
			"source": "MTF",
			"page": 190,
			"otherSources": [
				{
					"source": "OotA",
					"page": 227
				}
			],
			"size": "M",
			"type": {
				"type": "humanoid",
				"tags": [
					"dwarf"
				]
			},
			"alignment": [
				"L",
				"E"
			],
			"ac": [
				{
					"ac": 14,
					"from": [
						"{@item leather armor|phb}"
					]
				}
			],
			"hp": {
				"average": 18,
				"formula": "4d8"
			},
			"speed": {
				"walk": 25
			},
			"str": 11,
			"dex": 16,
			"con": 10,
			"int": 11,
			"wis": 10,
			"cha": 12,
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 10,
			"resist": [
				"poison"
			],
			"languages": [
				"Dwarvish",
				"Undercommon"
			],
			"cr": "1",
			"spellcasting": [
				{
					"name": "Innate Spellcasting (Psionics)",
					"headerEntries": [
						"The duergar's innate spellcasting ability is Wisdom (spell save {@dc 12}, {@hit 4} to hit with spell attacks). It can innately cast the following spells, requiring no components:"
					],
					"will": [
						"{@spell blade ward}",
						"{@spell true strike}"
					],
					"daily": {
						"3e": [
							"{@spell jump}",
							"{@spell hunter's mark}"
						]
					},
					"ability": "wis"
				}
			],
			"trait": [
				{
					"name": "Duergar Resilience",
					"entries": [
						"The duergar has advantage on saving throws against poison, spells, and illusions, as well as to resist being {@condition charmed} or {@condition paralyzed}."
					]
				},
				{
					"name": "Create Soulblade",
					"entries": [
						"As a bonus action, the duergar can create a shortsword-sized, visible blade of psionic energy. The weapon appears in the duergar's hand and vanishes if it leaves the duergar's grip, or if the duergar dies or is {@condition incapacitated}."
					]
				},
				{
					"name": "Sunlight Sensitivity",
					"entries": [
						"While in sunlight, the duergar has disadvantage on attack rolls, as well as on Wisdom ({@skill Perception}) checks that rely on sight."
					]
				}
			],
			"action": [
				{
					"name": "Soulblade",
					"entries": [
						"{@atk mw} {@hit 5} to hit, reach 5 ft., one target. {@h}6 ({@damage 1d6 + 3}) force damage, or 10 ({@damage 2d6 + 3}) force damage while enlarged. If the soulblade has advantage on the attack roll, the attack deals an extra 3 ({@damage 1d6}) force damage."
					]
				},
				{
					"name": "Enlarge (Recharges after a Short or Long Rest)",
					"entries": [
						"For 1 minute, the duergar magically increases in size, along with anything it is wearing or carrying. While enlarged, the duergar is Large, doubles its damage dice on Strength-based weapon attacks (included in the attacks), and makes Strength checks and Strength saving throws with advantage. If the duergar lacks the room to become Large, it attains the maximum size possible in the space available."
					]
				},
				{
					"name": "Invisibility (Recharges after a Short or Long Rest)",
					"entries": [
						"The duergar magically turns {@condition invisible} for up to 1 hour or until it attacks, it casts a spell, it uses its Enlarge, or its concentration is broken (as if concentrating on a spell). Any equipment the duergar wears or carries is {@condition invisible} with it."
					]
				}
			],
			"environment": [
				"mountain",
				"underdark"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/duergar-soulblade.mp3"
			},
			"traitTags": [
				"Sunlight Sensitivity"
			],
			"senseTags": [
				"SD"
			],
			"languageTags": [
				"D",
				"U"
			],
			"damageTags": [
				"O"
			],
			"spellcastingTags": [
				"I",
				"P"
			],
			"miscTags": [
				"MW"
			],
			"hasFluff": true
		},
		{
			"name": "Duergar Stone Guard",
			"source": "MTF",
			"page": 191,
			"otherSources": [
				{
					"source": "OotA",
					"page": 227
				}
			],
			"size": "M",
			"type": {
				"type": "humanoid",
				"tags": [
					"dwarf"
				]
			},
			"alignment": [
				"L",
				"E"
			],
			"ac": [
				{
					"ac": 18,
					"from": [
						"{@item chain mail|phb}",
						"{@item shield|phb}"
					]
				}
			],
			"hp": {
				"average": 39,
				"formula": "6d8 + 12"
			},
			"speed": {
				"walk": 25
			},
			"str": 18,
			"dex": 11,
			"con": 14,
			"int": 11,
			"wis": 10,
			"cha": 9,
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 10,
			"resist": [
				"poison"
			],
			"languages": [
				"Dwarvish",
				"Undercommon"
			],
			"cr": "2",
			"trait": [
				{
					"name": "Duergar Resilience",
					"entries": [
						"The duergar has advantage on saving throws against poison, spells, and illusions, as well as to resist being {@condition charmed} or {@condition paralyzed}."
					]
				},
				{
					"name": "Phalanx Formation",
					"entries": [
						"The duergar has advantage on attack rolls and Dexterity saving throws while standing within 5 feet of a duergar ally wielding a shield."
					]
				},
				{
					"name": "Sunlight Sensitivity",
					"entries": [
						"While in sunlight, the duergar has disadvantage on attack rolls, as well as on Wisdom ({@skill Perception}) checks that rely on sight."
					]
				}
			],
			"action": [
				{
					"name": "King's Knife (Shortsword)",
					"entries": [
						"{@atk mw} {@hit 6} to hit, reach 5 ft., one target. {@h}7 ({@damage 1d6 + 4}) piercing damage, or 11 ({@damage 2d6 + 4}) piercing damage while enlarged."
					]
				},
				{
					"name": "Javelin",
					"entries": [
						"{@atk mw,rw} {@hit 6} to hit, reach 5 ft. or range 30/120 ft., one target. {@h}7 ({@damage 1d6 + 4}) piercing damage, or 11 ({@damage 2d6 + 4}) piercing damage while enlarged."
					]
				},
				{
					"name": "Enlarge (Recharges after a Short or Long Rest)",
					"entries": [
						"For 1 minute, the duergar magically increases in size, along with anything it is wearing or carrying. While enlarged, the duergar is Large, doubles its damage dice on Strength-based weapon attacks (included in the attacks), and makes Strength checks and Strength saving throws with advantage. If the duergar lacks the room to become Large, it attains the maximum size possible in the space available."
					]
				},
				{
					"name": "Invisibility (Recharges after a Short or Long Rest)",
					"entries": [
						"The duergar magically turns {@condition invisible} for up to 1 hour or until it attacks, it casts a spell, it uses its Enlarge, or its concentration is broken (as if concentrating on a spell). Any equipment the duergar wears or carries is {@condition invisible} with it."
					]
				}
			],
			"environment": [
				"mountain",
				"underdark"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/duergar-stone-guard.mp3"
			},
			"traitTags": [
				"Sunlight Sensitivity"
			],
			"senseTags": [
				"SD"
			],
			"languageTags": [
				"D",
				"U"
			],
			"damageTags": [
				"P"
			],
			"miscTags": [
				"MW",
				"RW",
				"THW"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Duergar Warlord",
			"source": "MTF",
			"page": 192,
			"size": "M",
			"type": {
				"type": "humanoid",
				"tags": [
					"dwarf"
				]
			},
			"alignment": [
				"L",
				"E"
			],
			"ac": [
				{
					"ac": 20,
					"from": [
						"{@item plate armor|phb}",
						"{@item shield|phb}"
					]
				}
			],
			"hp": {
				"average": 75,
				"formula": "10d8 + 30"
			},
			"speed": {
				"walk": 25
			},
			"str": 18,
			"dex": 11,
			"con": 17,
			"int": 12,
			"wis": 12,
			"cha": 14,
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 11,
			"resist": [
				"poison"
			],
			"languages": [
				"Dwarvish",
				"Undercommon"
			],
			"cr": "6",
			"trait": [
				{
					"name": "Duergar Resilience",
					"entries": [
						"The duergar has advantage on saving throws against poison, spells, and illusions, as well as to resist being {@condition charmed} or {@condition paralyzed}."
					]
				},
				{
					"name": "Sunlight Sensitivity",
					"entries": [
						"While in sunlight, the duergar has disadvantage on attack rolls, as well as on Wisdom ({@skill Perception}) checks that rely on sight."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The duergar makes three hammer or javelin attacks and uses Call to Attack, or Enlarge if it is available."
					]
				},
				{
					"name": "Psychic-Attuned Hammer",
					"entries": [
						"{@atk mw} {@hit 7} to hit, reach 5 ft., one target. {@h}9 ({@damage 1d10 + 4}) bludgeoning damage plus 5 ({@damage 1d10}) psychic damage, or 15 ({@damage 2d10 + 4}) bludgeoning damage plus 5 ({@damage 1d10}) psychic damage while enlarged,"
					]
				},
				{
					"name": "Javelin",
					"entries": [
						"{@atk mw,rw} {@hit 7} to hit, reach 5 ft. or range 30/120 ft., one target. {@h}7 ({@damage 1d6 + 4}) piercing damage, or 11 ({@damage 2d6 + 4}) piercing damage while enlarged."
					]
				},
				{
					"name": "Call to Attack",
					"entries": [
						"Up to three allied duergar within 120 feet of this duergar that can hear it can each use their reaction to make one weapon attack."
					]
				},
				{
					"name": "Enlarge (Recharges after a Short or Long Rest)",
					"entries": [
						"For 1 minute, the duergar magically increases in size, along with anything it is wearing or carrying. While enlarged, the duergar is Large, doubles its damage dice on Strength-based weapon attacks (included in the attacks), and makes Strength checks and Strength saving throws with advantage. If the duergar lacks the room to become Large, it attains the maximum size possible in the space available."
					]
				},
				{
					"name": "Invisibility {@recharge 4}",
					"entries": [
						"The duergar magically turns {@condition invisible} for up to 1 hour or until it attacks, it casts a spell, it uses its Enlarge, or its concentration is broken (as if concentrating on a spell). Any equipment the duergar wears or carries is {@condition invisible} with it."
					]
				}
			],
			"reaction": [
				{
					"name": "Scouring Instruction",
					"entries": [
						"When an ally that the duergar can see makes a {@dice d20} roll, the duergar can roll a {@dice 1d6} and the ally can add the number rolled to the {@dice d20} roll by taking 3 ({@damage 1d6}) psychic damage. A creature immune to psychic damage can't be affected by Scouring Instruction."
					]
				}
			],
			"environment": [
				"mountain",
				"underdark"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/duergar-warlord.mp3"
			},
			"traitTags": [
				"Sunlight Sensitivity"
			],
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"D",
				"U"
			],
			"damageTags": [
				"B",
				"P",
				"Y"
			],
			"miscTags": [
				"MW",
				"RW",
				"THW"
			],
			"hasFluff": true
		},
		{
			"name": "Duergar Xarrorn",
			"source": "MTF",
			"page": 193,
			"otherSources": [
				{
					"source": "OotA",
					"page": 226
				}
			],
			"size": "M",
			"type": {
				"type": "humanoid",
				"tags": [
					"dwarf"
				]
			},
			"alignment": [
				"L",
				"E"
			],
			"ac": [
				{
					"ac": 18,
					"from": [
						"{@item plate armor|phb}"
					]
				}
			],
			"hp": {
				"average": 26,
				"formula": "4d8 + 8"
			},
			"speed": {
				"walk": 25
			},
			"str": 16,
			"dex": 11,
			"con": 14,
			"int": 11,
			"wis": 10,
			"cha": 9,
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 10,
			"resist": [
				"poison"
			],
			"languages": [
				"Dwarvish",
				"Undercommon"
			],
			"cr": "2",
			"trait": [
				{
					"name": "Duergar Resilience",
					"entries": [
						"The duergar has advantage on saving throws against poison, spells, and illusions, as well as to resist being {@condition charmed} or {@condition paralyzed}."
					]
				},
				{
					"name": "Sunlight Sensitivity",
					"entries": [
						"While in sunlight, the duergar has disadvantage on attack rolls, as well as on Wisdom ({@skill Perception}) checks that rely on sight."
					]
				}
			],
			"action": [
				{
					"name": "Fire Lance",
					"entries": [
						"{@atk mw} {@hit 5} to hit (with disadvantage if the target is within 5 feet of the duergar), reach 10 ft., one target. {@h}9 ({@damage 1d12 + 3}) piercing damage plus 3 ({@damage 1d6}) fire damage, or 16 ({@damage 2d12 + 3}) piercing damage plus 3 ({@damage 1d6}) fire damage while enlarged."
					]
				},
				{
					"name": "Fire Spray {@recharge 5}",
					"entries": [
						"From its fire lance, the duergar shoots a 15-foot cone of fire or a line of fire 30 feet long and 5 feet wide. Each creature in that area must make a {@dc 12} Dexterity saving throw, taking 10 ({@damage 3d6}) fire damage on a failed save, or half as much damage on a successful one."
					]
				},
				{
					"name": "Enlarge (Recharges after a Short or Long Rest)",
					"entries": [
						"For 1 minute, the duergar magically increases in size, along with anything it is wearing or carrying. While enlarged, the duergar is Large, doubles its damage dice on Strength-based weapon attacks (included in the attacks), and makes Strength checks and Strength saving throws with advantage. If the duergar lacks the room to become Large, it attains the maximum size possible in the space available."
					]
				},
				{
					"name": "Invisibility (Recharges after a Short or Long Rest)",
					"entries": [
						"The duergar magically turns {@condition invisible} for up to 1 hour or until it attacks, it casts a spell, it uses its Enlarge, or its concentration is broken (as if concentrating on a spell). Any equipment the duergar wears or carries is {@condition invisible} with it."
					]
				}
			],
			"environment": [
				"mountain",
				"underdark"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/duergar-xarrorn.mp3"
			},
			"traitTags": [
				"Sunlight Sensitivity"
			],
			"senseTags": [
				"SD"
			],
			"languageTags": [
				"D",
				"U"
			],
			"damageTags": [
				"F",
				"P"
			],
			"miscTags": [
				"AOE",
				"MW",
				"RCH"
			],
			"hasFluff": true
		},
		{
			"name": "Dybbuk",
			"source": "MTF",
			"page": 132,
			"size": "M",
			"type": {
				"type": "fiend",
				"tags": [
					"demon"
				]
			},
			"alignment": [
				"C",
				"E"
			],
			"ac": [
				14
			],
			"hp": {
				"average": 37,
				"formula": "5d8 + 15"
			},
			"speed": {
				"walk": 0,
				"fly": {
					"number": 40,
					"condition": "(hover)"
				},
				"canHover": true
			},
			"str": 6,
			"dex": 19,
			"con": 16,
			"int": 16,
			"wis": 15,
			"cha": 14,
			"skill": {
				"deception": "+6",
				"intimidation": "+4",
				"perception": "+4"
			},
			"senses": [
				"darkvision 120 ft."
			],
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
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"charmed",
				"exhaustion",
				"frightened",
				"grappled",
				"paralyzed",
				"petrified",
				"poisoned",
				"prone",
				"restrained"
			],
			"languages": [
				"Abyssal",
				"Common",
				"telepathy 120 ft."
			],
			"cr": "4",
			"spellcasting": [
				{
					"name": "Innate Spellcasting",
					"headerEntries": [
						"The dybbuk's innate spellcasting ability is Charisma (spell save {@dc 12}). It can innately cast the following spells, requiring no material components:"
					],
					"will": [
						"{@spell dimension door}"
					],
					"daily": {
						"3e": [
							"{@spell fear}",
							"{@spell phantasmal force}"
						]
					},
					"ability": "cha"
				}
			],
			"trait": [
				{
					"name": "Incorporeal Movement",
					"entries": [
						"The dybbuk can move through other creatures and objects as if they were difficult terrain. It takes 5 ({@damage 1d10}) force damage if it ends its turn inside an object."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"The dybbuk has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Violate Corpse",
					"entries": [
						"The dybbuk can use a bonus action while it is possessing a corpse to make it do something unnatural, such as vomit blood, twist its head all the way around, or cause a quadruped to move as a biped. Any beast or humanoid that sees this behavior must succeed on a {@dc 12} Wisdom saving throw or become {@condition frightened} for 1 minute. The {@condition frightened} creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. A creature that succeeds on a saving throw against this ability is immune to Violate Corpse for 24 hours."
					]
				}
			],
			"action": [
				{
					"name": "Tendril",
					"entries": [
						"{@atk mw} {@hit 6} to hit, reach 5 ft., one target. {@h}13 ({@damage 2d8 + 4}) necrotic damage. If the target is a creature, its hit point maximum is also reduced by 3 ({@dice 1d6}). This reduction lasts until the target finishes a short or long rest. The target dies if this effect reduces its hit point maximum to 0."
					]
				},
				{
					"name": "Possess Corpse {@recharge}",
					"entries": [
						"The dybbuk disappears into an intact corpse it can see within 5 feet of it. The corpse must be Large or smaller and be that of a beast or a humanoid. The dybbuk is now effectively the possessed creature. Its type becomes undead, though it now looks alive, and it gains a number of temporary hit points equal to the corpse's hit point maximum in life.",
						"While possessing the corpse, the dybbuk retains its hit points, alignment, Intelligence, Wisdom, Charisma, telepathy, and immunity to poison damage, {@condition exhaustion}, and being {@condition charmed} and {@condition frightened}. It otherwise uses the possessed target's game statistics, gaining access to its knowledge and proficiencies but not its class features, if any.",
						"The possession lasts until the temporary hit points are lost (at which point the body becomes a corpse once more) or the dybbuk ends its possession using a bonus action. When the possession ends, the dybbuk reappears in an unoccupied space within 5 feet of the corpse."
					]
				}
			],
			"environment": [
				"desert",
				"urban"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/dybbuk.mp3"
			},
			"traitTags": [
				"Incorporeal Movement",
				"Magic Resistance"
			],
			"senseTags": [
				"SD"
			],
			"languageTags": [
				"AB",
				"C",
				"TP"
			],
			"damageTags": [
				"N",
				"O"
			],
			"spellcastingTags": [
				"I"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"frightened"
			],
			"conditionInflictSpell": [
				"frightened"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Earth Elemental Myrmidon",
			"source": "MTF",
			"page": 202,
			"otherSources": [
				{
					"source": "PotA",
					"page": 212
				}
			],
			"size": "M",
			"type": "elemental",
			"alignment": [
				"N"
			],
			"ac": [
				{
					"ac": 18,
					"from": [
						"{@item plate armor|phb}"
					]
				}
			],
			"hp": {
				"average": 127,
				"formula": "17d8 + 51"
			},
			"speed": {
				"walk": 30
			},
			"str": 18,
			"dex": 10,
			"con": 17,
			"int": 8,
			"wis": 10,
			"cha": 10,
			"senses": [
				"darkvision 60 ft."
			],
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
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"paralyzed",
				"petrified",
				"poisoned",
				"prone"
			],
			"languages": [
				"Terran",
				"one language of its creator's choice"
			],
			"cr": "7",
			"trait": [
				{
					"name": "Magic Weapons",
					"entries": [
						"The myrmidon's weapon attacks are magical."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The myrmidon makes two maul attacks."
					]
				},
				{
					"name": "Maul",
					"entries": [
						"{@atk mw} {@hit 7} to hit, reach 5 ft., one target. {@h}11 ({@damage 2d6 + 4}) bludgeoning damage."
					]
				},
				{
					"name": "Thunderous Strike {@recharge}",
					"entries": [
						"The myrmidon makes one maul attack. On a hit, the target takes an extra 16 ({@damage 3d10}) thunder damage, and the target must succeed on a {@dc 14} Strength saving throw or be knocked {@condition prone}."
					]
				}
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/earth-elemental-myrmidon.mp3"
			},
			"traitTags": [
				"Magic Weapons"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"T"
			],
			"damageTags": [
				"B",
				"T"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"prone"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Eidolon",
			"source": "MTF",
			"page": 194,
			"otherSources": [
				{
					"source": "DC"
				},
				{
					"source": "DIP"
				},
				{
					"source": "IMR"
				}
			],
			"size": "M",
			"type": "undead",
			"alignment": [
				"A"
			],
			"ac": [
				9
			],
			"hp": {
				"average": 63,
				"formula": "18d8 - 18"
			},
			"speed": {
				"walk": 0,
				"fly": {
					"number": 40,
					"condition": "(hover)"
				},
				"canHover": true
			},
			"str": 7,
			"dex": 8,
			"con": 9,
			"int": 14,
			"wis": 19,
			"cha": 16,
			"save": {
				"wis": "+8"
			},
			"skill": {
				"perception": "+8"
			},
			"senses": [
				"darkvision 60 ft."
			],
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
			"immune": [
				"cold",
				"necrotic",
				"poison"
			],
			"conditionImmune": [
				"charmed",
				"exhaustion",
				"frightened",
				"grappled",
				"paralyzed",
				"petrified",
				"poisoned",
				"prone",
				"restrained"
			],
			"languages": [
				"the languages it knew in life"
			],
			"cr": "12",
			"trait": [
				{
					"name": "Incorporeal Movement",
					"entries": [
						"The eidolon can move through other creatures and objects as if they were difficult terrain. It takes 5 ({@damage 1d10}) force damage if it ends its turn inside an object other than a sacred statue."
					]
				},
				{
					"name": "Sacred Animation {@recharge 5}",
					"entries": [
						"When the eidolon moves into a space occupied by a sacred statue, the eidolon can disappear, causing the statue to become a creature under the eidolon's control. The eidolon uses the {@creature sacred statue|mtf}'s statistics in place of its own."
					]
				},
				{
					"name": "Turn Resistance",
					"entries": [
						"The eidolon has advantage on saving throws against any effect that turns undead."
					]
				}
			],
			"action": [
				{
					"name": "Divine Dread",
					"entries": [
						"Each creature within 60 feet of the eidolon that can see it must succeed on a {@dc 15} Wisdom saving throw or be {@condition frightened} for 1 minute. While {@condition frightened} in this way, the creature must take the Dash action and move away from the eidolon by the safest available route at the start of each of its turns, unless there is nowhere for it to move, in which case the creature also becomes {@condition stunned} until it can move again. A {@condition frightened} target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a target's saving throw is successful or the effect ends for it, the target is immune to any eidolon's Divine Dread for the next 24 hours."
					]
				}
			],
			"environment": [
				"coastal",
				"desert",
				"forest",
				"grassland",
				"mountain",
				"urban"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/eidolon.mp3"
			},
			"traitTags": [
				"Incorporeal Movement",
				"Turn Resistance"
			],
			"senseTags": [
				"D"
			],
			"languageTags": [
				"LF"
			],
			"damageTags": [
				"O"
			],
			"conditionInflict": [
				"frightened",
				"stunned"
			],
			"hasFluff": true
		},
		{
			"name": "Elder Oblex",
			"source": "MTF",
			"page": 219,
			"size": "H",
			"type": "ooze",
			"alignment": [
				"L",
				"E"
			],
			"ac": [
				16
			],
			"hp": {
				"average": 115,
				"formula": "10d12 + 50"
			},
			"speed": {
				"walk": 20
			},
			"str": 15,
			"dex": 16,
			"con": 21,
			"int": 22,
			"wis": 13,
			"cha": 18,
			"save": {
				"int": "+10",
				"cha": "+8"
			},
			"skill": {
				"arcana": "+10",
				"deception": "+8",
				"history": "+10",
				"nature": "+10",
				"perception": "+5",
				"religion": "+10"
			},
			"senses": [
				"blindsight 60 ft. (blind beyond this distance)"
			],
			"passive": 15,
			"conditionImmune": [
				"blinded",
				"charmed",
				"deafened",
				"exhaustion",
				"prone"
			],
			"languages": [
				"Common plus six more"
			],
			"cr": "10",
			"spellcasting": [
				{
					"name": "Innate Spellcasting",
					"headerEntries": [
						"The oblex's innate spellcasting ability is Intelligence (spell save {@dc 18}). It can innately cast the following spells, requiring no material components:"
					],
					"will": [
						"{@spell charm person} (as 5th-level spell)",
						"{@spell detect thoughts}",
						"{@spell hold person}"
					],
					"daily": {
						"3e": [
							"{@spell confusion}",
							"{@spell dimension door}",
							"{@spell dominate person}",
							"{@spell fear}",
							"{@spell hallucinatory terrain}",
							"{@spell hold monster}",
							"{@spell hypnotic pattern}",
							"{@spell telekinesis}"
						]
					},
					"ability": "int"
				}
			],
			"trait": [
				{
					"name": "Amorphous",
					"entries": [
						"The oblex can move through a space as narrow as 1 inch wide without squeezing."
					]
				},
				{
					"name": "Aversion to Fire",
					"entries": [
						"If the oblex takes fire damage, it has disadvantage on attack rolls and ability checks until the end of its next turn."
					]
				},
				{
					"name": "Sulfurous Impersonation",
					"entries": [
						"As a bonus action, the oblex can extrude a piece of itself that assumes the appearance of one Medium or smaller creature whose memories it has stolen. This simulacrum appears, feels, and sounds exactly like the creature it impersonates, though it smells faintly of sulfur. The oblex can impersonate {@dice 2d6 + 1} different creatures, each one tethered to its body by a strand of slime that can extend up to 120 feet away. For all practical purposes, the simulacrum is the oblex, meaning the oblex occupies its space and the simulacrum's space simultaneously. The slimy tether is immune to damage, but it is severed if there is no opening at least 1 inch wide between the oblex's main body and the simulacrum. The simulacrum disappears if the tether is severed."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The elder oblex makes two pseudopod attacks and uses Eat Memories."
					]
				},
				{
					"name": "Pseudopod",
					"entries": [
						"{@atk mw} {@hit 7} to hit, reach 10 ft., one target. {@h}17 ({@damage 4d6 + 3}) bludgeoning damage plus 7 ({@damage 2d6}) psychic damage."
					]
				},
				{
					"name": "Eat Memories",
					"entries": [
						"The oblex targets one creature it can see within 5 feet of it. The target must succeed on a {@dc 18} Wisdom saving throw or take 44 ({@damage 8d10}) psychic damage and become memory drained until it finishes a short or long rest or until it benefits from the {@spell greater restoration} or {@spell heal} spell. Constructs, oozes, plants, and undead succeed on the save automatically.",
						"While memory drained, the target must roll a {@dice d4} and subtract the number rolled from any ability check or attack roll it makes. Each time the target is memory drained beyond the first, the die size increases by one: the {@dice d4} becomes a {@dice d6}, the {@dice d6} becomes a {@dice d8}, and so on until the die becomes a {@dice d20}, at which point the target becomes {@condition unconscious} for 1 hour. The effect then ends.",
						"When an oblex causes a target to become memory drained, the oblex learns all the languages the target knows and gains all its proficiencies, except any saving throw proficiencies."
					]
				}
			],
			"environment": [
				"swamp",
				"underdark",
				"urban"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/elder-oblex.mp3"
			},
			"traitTags": [
				"Amorphous"
			],
			"senseTags": [
				"B"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C",
				"X"
			],
			"damageTags": [
				"B",
				"Y"
			],
			"spellcastingTags": [
				"I"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"unconscious"
			],
			"conditionInflictSpell": [
				"charmed",
				"frightened",
				"incapacitated",
				"paralyzed",
				"restrained"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Elder Tempest",
			"source": "MTF",
			"page": 200,
			"size": "G",
			"type": "elemental",
			"alignment": [
				"N"
			],
			"ac": [
				19
			],
			"hp": {
				"average": 264,
				"formula": "16d20 + 96"
			},
			"speed": {
				"walk": 0,
				"fly": {
					"number": 120,
					"condition": "(hover)"
				},
				"canHover": true
			},
			"str": 23,
			"dex": 28,
			"con": 23,
			"int": 2,
			"wis": 21,
			"cha": 18,
			"save": {
				"wis": "+12",
				"cha": "+11"
			},
			"senses": [
				"darkvision 60 ft."
			],
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
			"immune": [
				"lightning",
				"poison",
				"thunder"
			],
			"conditionImmune": [
				"exhaustion",
				"grappled",
				"paralyzed",
				"petrified",
				"poisoned",
				"prone",
				"restrained",
				"stunned"
			],
			"cr": "23",
			"trait": [
				{
					"name": "Air Form",
					"entries": [
						"The tempest can enter a hostile creature's space and stop there. It can move through a space as narrow as 1 inch wide without squeezing."
					]
				},
				{
					"name": "Flyby",
					"entries": [
						"The tempest doesn't provoke opportunity attacks when it flies out of an enemy's reach."
					]
				},
				{
					"name": "Legendary Resistance (3/Day)",
					"entries": [
						"If the tempest fails a saving throw, it can choose to succeed instead."
					]
				},
				{
					"name": "Living Storm",
					"entries": [
						"The tempest is always at the center of a storm {@dice 1d6 + 4} miles in diameter. Heavy precipitation in the form of either rain or snow falls there, causing the area to be lightly obscured. Heavy rain also extinguishes open flames and imposes disadvantage on Wisdom ({@skill Perception}) checks that rely on hearing.",
						"In addition, strong winds swirl in the area covered by the storm. The winds impose disadvantage on ranged attack rolls. The winds extinguish open flames and disperse fog."
					]
				},
				{
					"name": "Siege Monster",
					"entries": [
						"The tempest deals double damage to objects and structures."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The tempest makes two attacks with its thunderous slam."
					]
				},
				{
					"name": "Thunderous Slam",
					"entries": [
						"{@atk mw} {@hit 16} to hit, reach 20 ft., one target. {@h}23 ({@damage 4d6 + 9}) thunder damage."
					]
				},
				{
					"name": "Lightning Storm {@recharge}",
					"entries": [
						"All other creatures within 120 feet of the tempest must each make a {@dc 20} Dexterity saving throw, taking 27 ({@damage 6d8}) lightning damage on a failed save, or half as much damage on a successful one. If a target's saving throw fails by 5 or more, the creature is also {@condition stunned} until the end of its next turn."
					]
				}
			],
			"legendary": [
				{
					"name": "Move",
					"entries": [
						"The tempest moves up to its speed."
					]
				},
				{
					"name": "Lightning Strike (Costs 2 Actions)",
					"entries": [
						"The tempest can cause a bolt of lightning to strike a point on the ground anywhere under its storm. Each creature within 5 feet of that point must make a {@dc 20} Dexterity saving throw, taking 16 ({@damage 3d10}) lightning damage on a failed save, or half as much damage on a successful one."
					]
				},
				{
					"name": "Screaming Gale (Costs 3 Actions)",
					"entries": [
						"The tempest releases a blast of thunder and wind in a line that is 1 mile long and 20 feet wide. Objects in that area take 22 ({@damage 4d10}) thunder damage. Each creature there must succeed on a {@dc 21} Dexterity saving throw or take 22 ({@damage 4d10}) thunder damage and be flung up to 60 feet in a direction away from the line. If a thrown target collides with an immovable object, such as a wall or floor, the target takes 3 ({@damage 1d6}) bludgeoning damage for every 10 feet it was thrown before impact. If the target would collide with another creature instead, that other creature must succeed on a {@dc 19} Dexterity saving throw or take the same damage and be knocked {@condition prone}."
					]
				}
			],
			"environment": [
				"arctic",
				"coastal",
				"grassland",
				"hill",
				"mountain"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/elder-tempest.mp3"
			},
			"traitTags": [
				"Flyby",
				"Legendary Resistances",
				"Siege Monster"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"damageTags": [
				"B",
				"L",
				"T"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"prone",
				"stunned"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Female Steeder",
			"source": "MTF",
			"page": 238,
			"otherSources": [
				{
					"source": "OotA",
					"page": 231
				}
			],
			"size": "L",
			"type": "monstrosity",
			"alignment": [
				"U"
			],
			"ac": [
				{
					"ac": 14,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 30,
				"formula": "4d10 + 8"
			},
			"speed": {
				"walk": 30,
				"climb": 30
			},
			"str": 15,
			"dex": 16,
			"con": 14,
			"int": 2,
			"wis": 10,
			"cha": 3,
			"skill": {
				"stealth": "+7",
				"perception": "+4"
			},
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 14,
			"cr": "1",
			"trait": [
				{
					"name": "Spider Climb",
					"entries": [
						"The steeder can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
					]
				},
				{
					"name": "Extraordinary Leap",
					"entries": [
						"The distance of the steeder's long jumps is tripled; every foot of its walking speed that it spends on the jump allows it to move 3 feet."
					]
				}
			],
			"action": [
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 5} to hit, reach 5 ft., one target. {@h}7 ({@damage 1d8 + 3}) piercing damage plus 9 ({@damage 2d8}) poison damage."
					]
				},
				{
					"name": "Sticky Leg",
					"entries": [
						"{@atk mw} {@hit 5} to hit, reach 5 ft., one Medium or smaller creature. {@h}The target is stuck to the steeder's leg and is {@condition grappled} until it escapes (escape {@dc 12}). The steeder can have only one creature {@condition grappled} at a time."
					]
				}
			],
			"environment": [
				"underdark"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/female-steeder.mp3"
			},
			"traitTags": [
				"Spider Climb"
			],
			"senseTags": [
				"SD"
			],
			"damageTags": [
				"I",
				"P"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"grappled"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Fire Elemental Myrmidon",
			"source": "MTF",
			"page": 203,
			"otherSources": [
				{
					"source": "PotA",
					"page": 213
				}
			],
			"size": "M",
			"type": "elemental",
			"alignment": [
				"N"
			],
			"ac": [
				{
					"ac": 18,
					"from": [
						"{@item plate armor|phb}"
					]
				}
			],
			"hp": {
				"average": 123,
				"formula": "19d8 + 38"
			},
			"speed": {
				"walk": 40
			},
			"str": 13,
			"dex": 18,
			"con": 15,
			"int": 9,
			"wis": 10,
			"cha": 10,
			"senses": [
				"darkvision 60 ft."
			],
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
			"immune": [
				"fire",
				"poison"
			],
			"conditionImmune": [
				"paralyzed",
				"petrified",
				"poisoned",
				"prone"
			],
			"languages": [
				"Ignan",
				"one language of its creator's choice"
			],
			"cr": "7",
			"trait": [
				{
					"name": "Illumination",
					"entries": [
						"The myrmidon sheds bright light in a 20-foot radius and dim light in a 40-foot radius."
					]
				},
				{
					"name": "Magic Weapons",
					"entries": [
						"The myrmidon's weapon attacks are magical."
					]
				},
				{
					"name": "Water Susceptibility",
					"entries": [
						"For every 5 feet the myrmidon moves in 1 foot or more of water, it takes 2 ({@damage 1d4}) cold damage."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The myrmidon makes three scimitar attacks."
					]
				},
				{
					"name": "Scimitar",
					"entries": [
						"{@atk mw} {@hit 7} to hit, reach 5 ft., one target. {@h}7 ({@damage 1d6 + 4}) slashing damage."
					]
				},
				{
					"name": "Fiery Strikes {@recharge}",
					"entries": [
						"The myrmidon uses Multiattack. Each attack that hits deals an extra 5 ({@damage 1d10}) fire damage."
					]
				}
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/fire-elemental-myrmidon.mp3"
			},
			"traitTags": [
				"Illumination",
				"Magic Weapons"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"IG"
			],
			"damageTags": [
				"C",
				"F",
				"S"
			],
			"miscTags": [
				"AOE",
				"MW"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Fraz-Urb'luu",
			"isNamedCreature": true,
			"source": "MTF",
			"page": 146,
			"otherSources": [
				{
					"source": "OotA",
					"page": 238
				}
			],
			"size": "L",
			"type": {
				"type": "fiend",
				"tags": [
					"demon"
				]
			},
			"alignment": [
				"C",
				"E"
			],
			"ac": [
				{
					"ac": 18,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 337,
				"formula": "27d10 + 189"
			},
			"speed": {
				"walk": 40,
				"fly": 40
			},
			"str": 29,
			"dex": 12,
			"con": 25,
			"int": 26,
			"wis": 24,
			"cha": 26,
			"save": {
				"dex": "+8",
				"con": "+14",
				"int": "+15",
				"wis": "+14"
			},
			"skill": {
				"deception": "+15",
				"perception": "+14",
				"stealth": "+8"
			},
			"senses": [
				"truesight 120 ft."
			],
			"passive": 24,
			"resist": [
				"cold",
				"fire",
				"lightning"
			],
			"immune": [
				"poison",
				{
					"immune": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks",
					"cond": true
				}
			],
			"conditionImmune": [
				"charmed",
				"exhaustion",
				"frightened",
				"poisoned"
			],
			"languages": [
				"all",
				"telepathy 120 ft."
			],
			"cr": {
				"cr": "23",
				"lair": "24"
			},
			"spellcasting": [
				{
					"name": "Innate Spellcasting",
					"headerEntries": [
						"Fraz-Urb'luu's spellcasting ability is Charisma (spell save {@dc 23}). Fraz-Urb'luu can innately cast the following spells, requiring no material components:"
					],
					"will": [
						"{@spell alter self} (can become Medium when changing his appearance)",
						"{@spell detect magic}",
						"{@spell dispel magic}",
						"{@spell phantasmal force}"
					],
					"daily": {
						"3e": [
							"{@spell confusion}",
							"{@spell dream}",
							"{@spell mislead}",
							"{@spell programmed illusion}",
							"{@spell seeming}"
						],
						"1e": [
							"{@spell mirage arcane}",
							"{@spell modify memory}",
							"{@spell project image}"
						]
					},
					"ability": "cha"
				}
			],
			"trait": [
				{
					"name": "Legendary Resistance (3/Day)",
					"entries": [
						"If Fraz-Urb'luu fails a saving throw, he can choose to succeed instead."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"Fraz-Urb'luu has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Magic Weapons",
					"entries": [
						"Fraz-Urb'luu's weapon attacks are magical."
					]
				},
				{
					"name": "Undetectable",
					"entries": [
						"Fraz-Urb'luu can't be targeted by divination magic, perceived through magical scrying sensors, or detected by abilities that sense demons or fiends."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"Fraz-Urb'luu makes three attacks: one with his bite and two with his fists."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 16} to hit, reach 10 ft., one target. {@h}19 ({@damage 3d6 + 9}) piercing damage."
					]
				},
				{
					"name": "Fist",
					"entries": [
						"{@atk mw} {@hit 16} to hit, reach 10 ft., one target. {@h}22 ({@damage 3d8 + 9}) bludgeoning damage."
					]
				}
			],
			"legendary": [
				{
					"name": "Tail",
					"entries": [
						"{@atk mw} {@hit 16} to hit, reach 15 ft., one target. {@h}20 ({@damage 2d10 + 9}) bludgeoning damage. If the target is a Large or smaller creature, it is also {@condition grappled} (escape {@dc 24}). The {@condition grappled} target is also {@condition restrained}. Fraz-Urb'luu can grapple only one creature with his tail at a time."
					]
				},
				{
					"name": "Phantasmal Killer (Costs 2 Actions)",
					"entries": [
						"Fraz-Urb'luu casts {@spell phantasmal killer}, no concentration required."
					]
				}
			],
			"legendaryGroup": {
				"name": "Fraz-Urb'luu",
				"source": "MTF"
			},
			"hasToken": true,
			"traitTags": [
				"Legendary Resistances",
				"Magic Resistance",
				"Magic Weapons"
			],
			"senseTags": [
				"U"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"TP",
				"XX"
			],
			"damageTags": [
				"B",
				"P"
			],
			"spellcastingTags": [
				"I"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"grappled",
				"restrained"
			],
			"conditionInflictSpell": [
				"blinded",
				"charmed",
				"deafened",
				"incapacitated",
				"invisible"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Frost Salamander",
			"source": "MTF",
			"page": 223,
			"size": "H",
			"type": "elemental",
			"alignment": [
				"U"
			],
			"ac": [
				{
					"ac": 17,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 168,
				"formula": "16d12 + 64"
			},
			"speed": {
				"walk": 60,
				"burrow": 40,
				"climb": 40
			},
			"str": 20,
			"dex": 12,
			"con": 18,
			"int": 7,
			"wis": 11,
			"cha": 7,
			"save": {
				"con": "+8",
				"wis": "+4"
			},
			"skill": {
				"perception": "+4"
			},
			"senses": [
				"darkvision 60 ft.",
				"tremorsense 60 ft."
			],
			"passive": 14,
			"immune": [
				"cold"
			],
			"vulnerable": [
				"fire"
			],
			"languages": [
				"Primordial"
			],
			"cr": "9",
			"trait": [
				{
					"name": "Burning Fury",
					"entries": [
						"When the salamander takes fire damage, its Freezing Breath automatically recharges."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The salamander makes five attacks: four with its claws and one with its bite."
					]
				},
				{
					"name": "Claws",
					"entries": [
						"{@atk mw} {@hit 9} to hit, reach 10 ft., one target. {@h}8 ({@damage 1d6 + 5}) piercing damage."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 9} to hit, reach 15 ft., one target. {@h}9 ({@damage 1d8 + 5}) piercing damage and 5 ({@damage 1d10}) cold damage."
					]
				},
				{
					"name": "Freezing Breath {@recharge}",
					"entries": [
						"The salamander exhales chill wind in a 60-foot cone. Each creature in that area must make a {@dc 17} Constitution saving throw, taking 44 ({@damage 8d10}) cold damage on a failed save, or half as much damage on a successful one."
					]
				}
			],
			"environment": [
				"arctic"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/frost-salamander.mp3"
			},
			"senseTags": [
				"D",
				"T"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"P"
			],
			"damageTags": [
				"C",
				"P"
			],
			"miscTags": [
				"AOE",
				"MW",
				"RCH"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Geryon",
			"isNamedCreature": true,
			"source": "MTF",
			"page": 173,
			"size": "H",
			"type": {
				"type": "fiend",
				"tags": [
					"devil"
				]
			},
			"alignment": [
				"L",
				"E"
			],
			"ac": [
				{
					"ac": 19,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 300,
				"formula": "24d12 + 144"
			},
			"speed": {
				"walk": 30,
				"fly": 50
			},
			"str": 29,
			"dex": 17,
			"con": 22,
			"int": 19,
			"wis": 16,
			"cha": 23,
			"save": {
				"dex": "+10",
				"con": "+13",
				"wis": "+10",
				"cha": "+13"
			},
			"skill": {
				"deception": "+13",
				"intimidation": "+13",
				"perception": "+10"
			},
			"senses": [
				"truesight 120 ft."
			],
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
			"immune": [
				"cold",
				"fire",
				"poison"
			],
			"conditionImmune": [
				"charmed",
				"exhaustion",
				"frightened",
				"poisoned"
			],
			"languages": [
				"all",
				"telepathy 120 ft."
			],
			"cr": "22",
			"spellcasting": [
				{
					"name": "Innate Spellcasting",
					"headerEntries": [
						"Geryon's innate spellcasting ability is Charisma (spell save {@dc 21}). He can innately cast the following spells, requiring no material components:"
					],
					"will": [
						"{@spell alter self} (can become Medium when changing his appearance)",
						"{@spell detect magic}",
						"{@spell geas}",
						"{@spell ice storm}",
						"{@spell invisibility} (self only)",
						"{@spell locate object}",
						"{@spell suggestion}",
						"{@spell wall of ice}"
					],
					"daily": {
						"1e": [
							"{@spell divine word}",
							"{@spell symbol} (pain only)"
						]
					},
					"ability": "cha"
				}
			],
			"trait": [
				{
					"name": "Legendary Resistance (3/Day)",
					"entries": [
						"If Geryon fails a saving throw, he can choose to succeed instead."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"Geryon has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Magic Weapons",
					"entries": [
						"Geryon's weapon attacks are magical."
					]
				},
				{
					"name": "Regeneration",
					"entries": [
						"Geryon regains 20 hit points at the start of his turn. If he takes radiant damage, this trait doesn't function at the start of his next turn. Geryon dies only if he starts his turn with 0 hit points and doesn't regenerate."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"Geryon makes two attacks: one with his claws and one with his stinger."
					]
				},
				{
					"name": "Claws",
					"entries": [
						"{@atk mw} {@hit 16} to hit, reach 15 ft., one target. {@h}23 ({@damage 4d6 + 9}) slashing damage. If the target is Large or smaller, it is {@condition grappled} ({@dc 24}) and is {@condition restrained} until the grapple ends. Geryon can grapple one creature at a time. If the target is already {@condition grappled} by Geryon, the target takes an extra 27 ({@damage 6d8}) slashing damage."
					]
				},
				{
					"name": "Stinger",
					"entries": [
						"{@atk mw} {@hit 16} to hit, reach 20 ft., one creature. {@h}14 ({@damage 2d4 + 9}) piercing damage, and the target must succeed on a {@dc 21} Constitution saving throw or take 13 ({@damage 2d12}) poison damage and become {@condition poisoned} until it finishes a short or long rest. The target's hit point maximum is reduced by an amount equal to half the poison damage it takes. If its hit point maximum drops to 0, it dies. This reduction lasts until the {@condition poisoned} condition is removed."
					]
				},
				{
					"name": "Teleport",
					"entries": [
						"Geryon magically teleports, along with any equipment he is wearing and carrying, up to 120 feet to an unoccupied space he can see."
					]
				}
			],
			"legendary": [
				{
					"name": "Infernal Glare",
					"entries": [
						"Geryon targets one creature he can see within 60 feet of him. If the target can see Geryon, the target must succeed on a {@dc 23} Wisdom saving throw or become {@condition frightened} of Geryon until the end of its next turn."
					]
				},
				{
					"name": "Swift Sting (Costs 2 Actions)",
					"entries": [
						"Geryon attacks with his stinger."
					]
				},
				{
					"name": "Teleport",
					"entries": [
						"Geryon uses his Teleport action."
					]
				}
			],
			"legendaryGroup": {
				"name": "Geryon",
				"source": "MTF"
			},
			"variant": [
				{
					"type": "variant",
					"name": "Sound the Horn",
					"entries": [
						"Geryon can have an action that allows him to summon enslaved minotaurs.",
						{
							"name": "Sound the Horn (1/Day)",
							"type": "entries",
							"entries": [
								"Geryon blows his horn, which causes {@dice 5d4} minotaurs to appear in unoccupied spaces of his choice within 600 feet of him. The minotaurs roll initiative when they appear. They remain until they die or Geryon uses an action to dismiss any or all of them."
							]
						}
					]
				}
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/geryon.mp3"
			},
			"traitTags": [
				"Legendary Resistances",
				"Magic Resistance",
				"Magic Weapons",
				"Regeneration"
			],
			"senseTags": [
				"U"
			],
			"actionTags": [
				"Multiattack",
				"Teleport"
			],
			"languageTags": [
				"TP",
				"XX"
			],
			"damageTags": [
				"I",
				"P",
				"S"
			],
			"spellcastingTags": [
				"I"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"frightened",
				"grappled",
				"poisoned",
				"restrained"
			],
			"conditionInflictLegendary": [
				"restrained"
			],
			"conditionInflictSpell": [
				"blinded",
				"charmed",
				"deafened",
				"frightened",
				"incapacitated",
				"invisible",
				"stunned",
				"unconscious"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Giff",
			"source": "MTF",
			"page": 204,
			"size": "M",
			"type": "humanoid",
			"alignment": [
				"L",
				"N"
			],
			"ac": [
				{
					"ac": 16,
					"from": [
						"{@item breastplate|phb}"
					]
				}
			],
			"hp": {
				"average": 60,
				"formula": "8d8 + 24"
			},
			"speed": {
				"walk": 30
			},
			"str": 18,
			"dex": 14,
			"con": 17,
			"int": 11,
			"wis": 12,
			"cha": 12,
			"passive": 11,
			"languages": [
				"Common"
			],
			"cr": "3",
			"trait": [
				{
					"name": "Headfirst Charge",
					"entries": [
						"The giff can try to knock a creature over; if the giff moves at least 20 feet in a straight line that ends within 5 feet of a Large or smaller creature, that creature must succeed on a {@dc 14} Strength saving throw or take 7 ({@damage 2d6}) bludgeoning damage and be knocked {@condition prone}."
					]
				},
				{
					"name": "Firearms Knowledge",
					"entries": [
						"The giff's mastery of its weapons enables it to ignore the loading property of muskets and pistols."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The giff makes two pistol attacks."
					]
				},
				{
					"name": "Longsword",
					"entries": [
						"{@atk mw} {@hit 6} to hit, reach 5 ft., one target. {@h}8 ({@damage 1d8 + 4}) slashing damage, or 9 ({@damage 1d10 + 4}) slashing damage if used with two hands."
					]
				},
				{
					"name": "Musket",
					"entries": [
						"{@atk rw} {@hit 4} to hit, range 40/120 ft., one target. {@h}8 ({@damage 1d12 + 2}) piercing damage."
					]
				},
				{
					"name": "Pistol",
					"entries": [
						"{@atk rw} {@hit 4} to hit, range 30/90 ft., one target. {@h}7 ({@damage 1d10 + 2}) piercing damage."
					]
				},
				{
					"name": "Fragmentation Grenade (1/Day)",
					"entries": [
						"The giff throws a grenade up to 60 feet. Each creature within 20 feet of the grenade's detonation must make a {@dc 15} Dexterity saving throw, taking 17 ({@damage 5d6}) piercing damage on a failed save, or half as much damage on a successful one."
					]
				}
			],
			"environment": [
				"urban"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/giff.mp3"
			},
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C"
			],
			"damageTags": [
				"B",
				"P",
				"S"
			],
			"miscTags": [
				"MW",
				"RW"
			],
			"conditionInflict": [
				"prone"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Githyanki Gish",
			"source": "MTF",
			"page": 205,
			"otherSources": [
				{
					"source": "WDMM"
				}
			],
			"size": "M",
			"type": {
				"type": "humanoid",
				"tags": [
					"gith"
				]
			},
			"alignment": [
				"L",
				"E"
			],
			"ac": [
				{
					"ac": 17,
					"from": [
						"{@item half plate armor|phb}"
					]
				}
			],
			"hp": {
				"average": 123,
				"formula": "19d8 + 38"
			},
			"speed": {
				"walk": 30
			},
			"str": 17,
			"dex": 15,
			"con": 14,
			"int": 16,
			"wis": 15,
			"cha": 16,
			"save": {
				"con": "+6",
				"int": "+7",
				"wis": "+6"
			},
			"skill": {
				"insight": "+6",
				"perception": "+6",
				"stealth": "+6"
			},
			"passive": 16,
			"languages": [
				"Gith"
			],
			"cr": "10",
			"spellcasting": [
				{
					"name": "Innate Spellcasting (Psionics)",
					"headerEntries": [
						"The githyanki's innate spellcasting ability is Intelligence (spell save {@dc 15}, {@hit 7} to hit with spell attacks). It can innately cast the following spells, requiring no components:"
					],
					"will": [
						"{@spell mage hand} (the hand is invisible)"
					],
					"daily": {
						"3e": [
							"{@spell jump}",
							"{@spell misty step}",
							"{@spell nondetection} (self only)"
						],
						"1e": [
							"{@spell plane shift}",
							"{@spell telekinesis}"
						]
					},
					"ability": "int"
				},
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The githyanki is an 8th-level spellcaster. Its spellcasting ability is Intelligence (spell save {@dc 15}, {@hit 7} to hit with spell attacks). The githyanki has the following wizard spells prepared:"
					],
					"spells": {
						"0": {
							"spells": [
								"{@spell blade ward}",
								"{@spell light}",
								"{@spell message}",
								"{@spell true strike}"
							]
						},
						"1": {
							"slots": 4,
							"spells": [
								"{@spell expeditious retreat}",
								"{@spell magic missile}",
								"{@spell sleep}",
								"{@spell thunderwave}"
							]
						},
						"2": {
							"slots": 3,
							"spells": [
								"{@spell blur}",
								"{@spell invisibility}",
								"{@spell levitate}"
							]
						},
						"3": {
							"slots": 3,
							"spells": [
								"{@spell counterspell}",
								"{@spell fireball}",
								"{@spell haste}"
							]
						},
						"4": {
							"slots": 2,
							"spells": [
								"{@spell dimension door}"
							]
						}
					},
					"ability": "int"
				}
			],
			"trait": [
				{
					"name": "War Magic",
					"entries": [
						"When the githyanki uses its action to cast a spell, it can make one weapon attack as a bonus action."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The githyanki makes two longsword attacks."
					]
				},
				{
					"name": "Longsword",
					"entries": [
						"{@atk mw} {@hit 7} to hit, reach 5 ft., one target. {@h}7 ({@damage 1d8 + 3}) slashing damage plus 18 ({@damage 4d8}) psychic damage, or 8 ({@damage 1d10 + 3}) slashing damage plus 18 ({@damage 4d8}) psychic damage if used with two hands."
					]
				}
			],
			"environment": [
				"desert",
				"mountain",
				"urban"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/githyanki-gish.mp3"
			},
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"GTH"
			],
			"damageTags": [
				"S",
				"Y"
			],
			"spellcastingTags": [
				"CW",
				"I",
				"P"
			],
			"miscTags": [
				"MW"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Githyanki Kith'rak",
			"source": "MTF",
			"page": 205,
			"size": "M",
			"type": {
				"type": "humanoid",
				"tags": [
					"gith"
				]
			},
			"alignment": [
				"L",
				"E"
			],
			"ac": [
				{
					"ac": 18,
					"from": [
						"{@item plate armor|phb}"
					]
				}
			],
			"hp": {
				"average": 180,
				"formula": "24d8 + 72"
			},
			"speed": {
				"walk": 30
			},
			"str": 18,
			"dex": 16,
			"con": 17,
			"int": 16,
			"wis": 15,
			"cha": 17,
			"save": {
				"con": "+7",
				"int": "+7",
				"wis": "+6"
			},
			"skill": {
				"intimidation": "+7",
				"perception": "+6"
			},
			"passive": 16,
			"languages": [
				"Gith"
			],
			"cr": "12",
			"spellcasting": [
				{
					"name": "Innate Spellcasting (Psionics)",
					"headerEntries": [
						"The githyanki's innate spellcasting ability is Intelligence (spell save {@dc 15}, {@hit 7} to hit with spell attacks). It can innately cast the following spells, requiring no components:"
					],
					"will": [
						"{@spell mage hand} (the hand is invisible)"
					],
					"daily": {
						"3e": [
							"{@spell blur}",
							"{@spell jump}",
							"{@spell misty step}",
							"{@spell nondetection} (self only)"
						],
						"1e": [
							"{@spell plane shift}",
							"{@spell telekinesis}"
						]
					},
					"ability": "int"
				}
			],
			"trait": [
				{
					"name": "Rally the Troops",
					"entries": [
						"As a bonus action, the githyanki can magically end the {@condition charmed} and {@condition frightened} conditions on itself and each creature of its choice that it can see within 30 feet of it."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The githyanki makes three greatsword attacks."
					]
				},
				{
					"name": "Greatsword",
					"entries": [
						"{@atk mw} {@hit 8} to hit, reach 5 ft., one target. {@h}11 ({@damage 2d6 + 4}) slashing damage plus 17 ({@damage 5d6}) psychic damage."
					]
				}
			],
			"reaction": [
				{
					"name": "Parry",
					"entries": [
						"The githyanki adds 4 to its AC against one melee attack that would hit it. To do so, the githyanki must see the attacker and be wielding a melee weapon."
					]
				}
			],
			"environment": [
				"desert",
				"mountain",
				"urban"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/githyanki-kith_rak.mp3"
			},
			"actionTags": [
				"Multiattack",
				"Parry"
			],
			"languageTags": [
				"GTH"
			],
			"damageTags": [
				"S",
				"Y"
			],
			"spellcastingTags": [
				"I",
				"P"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflictSpell": [
				"restrained"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Githyanki Supreme Commander",
			"source": "MTF",
			"page": 206,
			"size": "M",
			"type": {
				"type": "humanoid",
				"tags": [
					"gith"
				]
			},
			"alignment": [
				"L",
				"E"
			],
			"ac": [
				{
					"ac": 18,
					"from": [
						"{@item plate armor|phb}"
					]
				}
			],
			"hp": {
				"average": 187,
				"formula": "22d8 + 88"
			},
			"speed": {
				"walk": 30
			},
			"str": 19,
			"dex": 17,
			"con": 18,
			"int": 16,
			"wis": 16,
			"cha": 18,
			"save": {
				"con": "+9",
				"int": "+8",
				"wis": "+8"
			},
			"skill": {
				"insight": "+8",
				"intimidation": "+9",
				"perception": "+8"
			},
			"passive": 18,
			"languages": [
				"Gith"
			],
			"cr": "14",
			"spellcasting": [
				{
					"name": "Innate Spellcasting (Psionics)",
					"headerEntries": [
						"The githyanki's innate spellcasting ability is Intelligence (spell save {@dc 16}, {@hit 8} to hit with spell attacks). It can innately cast the following spells, requiring no components:"
					],
					"will": [
						"{@spell mage hand} (the hand is invisible)"
					],
					"daily": {
						"3e": [
							"{@spell jump}",
							"{@spell levitate} (self only)",
							"{@spell misty step}",
							"{@spell nondetection} (self only)"
						],
						"1e": [
							"{@spell Bigby's hand}",
							"{@spell mass suggestion}",
							"{@spell plane shift}",
							"{@spell telekinesis}"
						]
					},
					"ability": "int"
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The githyanki makes two greatsword attacks."
					]
				},
				{
					"name": "Silver Greatsword",
					"entries": [
						"{@atk mw} {@hit 12} to hit, reach 5 ft., one target. {@h}14 ({@damage 2d6 + 7}) slashing damage plus 17 ({@damage 5d6}) psychic damage. On a critical hit against a target in an astral body (as with the {@spell astral projection} spell), the githyanki can cut the silvery cord that tethers the target to its material body, instead of dealing damage."
					]
				}
			],
			"reaction": [
				{
					"name": "Parry",
					"entries": [
						"The githyanki adds 5 to its AC against one melee attack that would hit it. To do so, the githyanki must see the attacker and be wielding a melee weapon."
					]
				}
			],
			"legendary": [
				{
					"name": "Attack (2 Actions)",
					"entries": [
						"The githyanki makes a greatsword attack."
					]
				},
				{
					"name": "Command Ally",
					"entries": [
						"The githyanki targets one ally it can see within 30 feet of it. If the target can see or hear the githyanki, the target can make one melee weapon attack using its reaction and has advantage on the attack roll."
					]
				},
				{
					"name": "Teleport",
					"entries": [
						"The githyanki magically teleports, along with any equipment it is wearing and carrying, to an unoccupied space it can see within 30 feet of it. It also becomes insubstantial until the start of its next turn. While insubstantial, it can move through other creatures and objects as if they were difficult terrain. If it ends its turn inside an object, it takes 16 ({@damage 3d10}) force damage and is moved to the nearest unoccupied space."
					]
				}
			],
			"environment": [
				"desert",
				"mountain",
				"urban"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/githyanki-supreme-commander.mp3"
			},
			"actionTags": [
				"Multiattack",
				"Parry"
			],
			"languageTags": [
				"GTH"
			],
			"damageTags": [
				"O",
				"S",
				"Y"
			],
			"spellcastingTags": [
				"I",
				"P"
			],
			"miscTags": [
				"MW"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Githzerai Anarch",
			"source": "MTF",
			"page": 207,
			"size": "M",
			"type": {
				"type": "humanoid",
				"tags": [
					"gith"
				]
			},
			"alignment": [
				"L",
				"N"
			],
			"ac": [
				20
			],
			"hp": {
				"average": 144,
				"formula": "17d8 + 68"
			},
			"speed": {
				"walk": 30,
				"fly": {
					"number": 40,
					"condition": "(hover)"
				},
				"canHover": true
			},
			"str": 16,
			"dex": 21,
			"con": 18,
			"int": 18,
			"wis": 20,
			"cha": 14,
			"save": {
				"str": "+8",
				"dex": "+10",
				"int": "+9",
				"wis": "+10"
			},
			"skill": {
				"arcana": "+9",
				"insight": "+10",
				"perception": "+10"
			},
			"passive": 20,
			"languages": [
				"Gith"
			],
			"cr": "16",
			"spellcasting": [
				{
					"name": "Innate Spellcasting (Psionics)",
					"headerEntries": [
						"The anarch's innate spellcasting ability is Wisdom (spell save {@dc 18}, {@hit 10} to hit with spell attacks). It can innately cast the following spells, requiring no components:"
					],
					"will": [
						"{@spell mage hand} (the hand is invisible)"
					],
					"daily": {
						"3e": [
							"{@spell feather fall}",
							"{@spell jump}",
							"{@spell see invisibility}",
							"{@spell shield}",
							"{@spell telekinesis}"
						],
						"1e": [
							"{@spell globe of invulnerability}",
							"{@spell plane shift}",
							"{@spell teleportation circle}",
							"{@spell wall of force}"
						]
					},
					"ability": "wis"
				}
			],
			"trait": [
				{
					"name": "Psychic Defense",
					"entries": [
						"While the anarch is wearing no armor and wielding no shield, its AC includes its Wisdom modifier."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The anarch makes three unarmed strikes."
					]
				},
				{
					"name": "Unarmed Strike",
					"entries": [
						"{@atk mw} {@hit 10} to hit, reach 5 ft., one target. {@h}14 ({@damage 2d8 + 5}) bludgeoning damage plus 18 ({@damage 4d8}) psychic damage."
					]
				}
			],
			"legendary": [
				{
					"name": "Strike",
					"entries": [
						"The anarch makes one unarmed strike."
					]
				},
				{
					"name": "Teleport",
					"entries": [
						"The anarch magically teleports, along with any equipment it is wearing and carrying, to an unoccupied space it can see within 30 feet of it."
					]
				},
				{
					"name": "Change Gravity (Costs 3 Actions)",
					"entries": [
						"The anarch casts the {@spell reverse gravity} spell. The spell has the normal effect, except that the anarch can orient the area in any direction and creatures and objects fall toward the end of the area."
					]
				}
			],
			"legendaryGroup": {
				"name": "Githzerai Anarch",
				"source": "MTF"
			},
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/githzerai-anarch.mp3"
			},
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"GTH"
			],
			"damageTags": [
				"B",
				"Y"
			],
			"spellcastingTags": [
				"I",
				"P"
			],
			"miscTags": [
				"MW"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Githzerai Enlightened",
			"source": "MTF",
			"page": 208,
			"size": "M",
			"type": {
				"type": "humanoid",
				"tags": [
					"gith"
				]
			},
			"alignment": [
				"L",
				"N"
			],
			"ac": [
				18
			],
			"hp": {
				"average": 112,
				"formula": "15d8 + 45"
			},
			"speed": {
				"walk": 30
			},
			"str": 14,
			"dex": 19,
			"con": 16,
			"int": 17,
			"wis": 19,
			"cha": 13,
			"save": {
				"str": "+6",
				"dex": "+8",
				"int": "+7",
				"wis": "+8"
			},
			"skill": {
				"arcana": "+7",
				"insight": "+8",
				"perception": "+8"
			},
			"passive": 18,
			"languages": [
				"Gith"
			],
			"cr": "10",
			"spellcasting": [
				{
					"name": "Innate Spellcasting (Psionics)",
					"headerEntries": [
						"The githzerai's innate spellcasting ability is Wisdom (spell save {@dc 16}, {@hit 8} to hit with spell attacks). It can innately cast the following spells, requiring no components:"
					],
					"will": [
						"{@spell mage hand} (the hand is invisible)"
					],
					"daily": {
						"3e": [
							"{@spell blur}",
							"{@spell expeditious retreat}",
							"{@spell feather fall}",
							"{@spell jump}",
							"{@spell see invisibility}",
							"{@spell shield}"
						],
						"1e": [
							"{@spell haste}",
							"{@spell plane shift}",
							"{@spell teleport}"
						]
					},
					"ability": "wis"
				}
			],
			"trait": [
				{
					"name": "Psychic Defense",
					"entries": [
						"While the githzerai is wearing no armor and wielding no shield, its AC includes its Wisdom modifier."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The githzerai makes three unarmed strikes."
					]
				},
				{
					"name": "Unarmed Strike",
					"entries": [
						"{@atk mw} {@hit 8} to hit, reach 5 ft., one target. {@h}13 ({@damage 2d8 + 4}) bludgeoning damage plus 13 ({@damage 3d8}) psychic damage."
					]
				},
				{
					"name": "Temporal Strike {@recharge}",
					"entries": [
						"{@atk mw} {@hit 8} to hit, reach 5 ft., one creature. {@h}13 ({@damage 2d8 + 4}) bludgeoning damage plus 52 ({@damage 8d12}) psychic damage. The target must succeed on a {@dc 16} Wisdom saving throw or move 1 round forward in time. A target moved forward in time vanishes for the duration. When the effect ends, the target reappears in the space it left or in an unoccupied space nearest to that space if it's occupied."
					]
				}
			],
			"environment": [
				"desert",
				"mountain",
				"urban"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/githzerai-enlightened.mp3"
			},
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"GTH"
			],
			"damageTags": [
				"B",
				"Y"
			],
			"spellcastingTags": [
				"I",
				"P"
			],
			"miscTags": [
				"MW"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Gloom Weaver",
			"source": "MTF",
			"page": 224,
			"size": "M",
			"type": {
				"type": "humanoid",
				"tags": [
					"elf"
				]
			},
			"alignment": [
				"N"
			],
			"ac": [
				14,
				{
					"ac": 17,
					"condition": "with {@spell mage armor}",
					"braces": true
				}
			],
			"hp": {
				"average": 104,
				"formula": "16d8 + 32"
			},
			"speed": {
				"walk": 30
			},
			"str": 11,
			"dex": 18,
			"con": 14,
			"int": 15,
			"wis": 12,
			"cha": 18,
			"save": {
				"dex": "+8",
				"con": "+6"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 11,
			"immune": [
				"necrotic"
			],
			"conditionImmune": [
				"charmed",
				"exhaustion"
			],
			"languages": [
				"Common",
				"Elvish"
			],
			"cr": "9",
			"spellcasting": [
				{
					"name": "Innate Spellcasting",
					"headerEntries": [
						"The gloom weaver's innate spellcasting ability is Charisma (spell save {@dc 16}, {@hit 8} to hit with spell attacks). It can innately cast the following spells, requiring no material components:"
					],
					"will": [
						"{@spell arcane eye}",
						"{@spell mage armor}",
						"{@spell speak with dead}"
					],
					"daily": {
						"1e": [
							"{@spell arcane gate}",
							"{@spell bane}",
							"{@spell compulsion}",
							"{@spell confusion}",
							"{@spell true seeing}"
						]
					},
					"ability": "cha"
				},
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The gloom weaver is a 12th-level spellcaster. Its spellcasting ability is Charisma (spell save {@dc 16}, {@hit 8} to hit with spell attacks). It regains its expended spell slots when it finishes a short or long rest. It knows the following warlock spells:"
					],
					"spells": {
						"0": {
							"spells": [
								"{@spell minor illusion}",
								"{@spell prestidigitation}",
								"{@spell chill touch}",
								"{@spell eldritch blast}*"
							]
						},
						"5": {
							"lower": 1,
							"slots": 3,
							"spells": [
								"{@spell armor of Agathys}",
								"{@spell blight}",
								"{@spell darkness}",
								"{@spell dream}",
								"{@spell invisibility}",
								"{@spell fear}",
								"{@spell hypnotic pattern}",
								"{@spell major image}",
								"{@spell contact other plane}",
								"{@spell vampiric touch}",
								"{@spell witch bolt}"
							]
						}
					},
					"footerEntries": [
						"*3 beams +4 bonus to each damage roll"
					],
					"ability": "cha"
				}
			],
			"trait": [
				{
					"name": "Burden of Time",
					"entries": [
						"Beasts and humanoids, other than shadar-kai, have disadvantage on saving throws while within 10 feet of the gloom weaver."
					]
				},
				{
					"name": "Fey Ancestry",
					"entries": [
						"The gloom weaver has advantage on saving throws against being {@condition charmed}, and magic can't put it to sleep."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The gloom weaver makes two spear attacks and casts one spell that takes 1 action to cast."
					]
				},
				{
					"name": "Shadow Spear",
					"entries": [
						"{@atk mw} {@hit 8} to hit, reach 5 ft., one target. {@h}7 ({@damage 1d6 + 4}) piercing damage plus 26 ({@damage 4d12}) necrotic damage, or 8 ({@damage 1d8 + 4}) piercing damage plus 26 ({@damage 4d12}) necrotic damage if used with two hands."
					]
				}
			],
			"reaction": [
				{
					"name": "Misty Escape (Recharges after a Short or Long Rest)",
					"entries": [
						"When the gloom weaver takes damage, it turns {@condition invisible} and teleports up to 60 feet to an unoccupied space it can see. It remains {@condition invisible} until the start of its next turn or until it attacks or casts a spell."
					]
				}
			],
			"environment": [
				"underdark",
				"urban"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/gloom-weaver.mp3"
			},
			"traitTags": [
				"Fey Ancestry"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C",
				"E"
			],
			"damageTags": [
				"N",
				"P"
			],
			"spellcastingTags": [
				"CL",
				"I"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflictSpell": [
				"charmed",
				"frightened",
				"incapacitated",
				"invisible"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Gray Render",
			"source": "MTF",
			"page": 209,
			"size": "L",
			"type": "monstrosity",
			"alignment": [
				"C",
				"N"
			],
			"ac": [
				{
					"ac": 19,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 189,
				"formula": "18d10 + 90"
			},
			"speed": {
				"walk": 30
			},
			"str": 19,
			"dex": 13,
			"con": 20,
			"int": 3,
			"wis": 6,
			"cha": 8,
			"save": {
				"str": "+8",
				"con": "+9"
			},
			"skill": {
				"perception": "+2"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 12,
			"cr": "12",
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The gray render makes three attacks: one with its bite and two with its claws."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 8} to hit, reach 5 ft., one target. {@h}17 ({@damage 2d12 + 4}) piercing damage. If the target is Medium or smaller, the target must succeed on a {@dc 16} Strength saving throw or be knocked {@condition prone}."
					]
				},
				{
					"name": "Claws",
					"entries": [
						"{@atk mw} {@hit 8} to hit, reach 10 ft., one target. {@h}13 ({@damage 2d8 + 4}) slashing damage. If the target is {@condition prone} an additional 7 ({@damage 2d6}) bludgeoning damage is dealt to the target."
					]
				}
			],
			"reaction": [
				{
					"name": "Bloody Rampage",
					"entries": [
						"When the gray render takes damage, it makes one attack with its claws against a random creature within its reach, other than its master."
					]
				}
			],
			"environment": [
				"forest",
				"hill"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/gray-render.mp3"
			},
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"damageTags": [
				"B",
				"P",
				"S"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"prone"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Graz'zt",
			"isNamedCreature": true,
			"source": "MTF",
			"page": 149,
			"otherSources": [
				{
					"source": "OotA",
					"page": 241
				}
			],
			"size": "L",
			"type": {
				"type": "fiend",
				"tags": [
					"demon",
					"shapechanger"
				]
			},
			"alignment": [
				"C",
				"E"
			],
			"ac": [
				{
					"ac": 20,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 346,
				"formula": "33d10 + 165"
			},
			"speed": {
				"walk": 40
			},
			"str": 22,
			"dex": 15,
			"con": 21,
			"int": 23,
			"wis": 21,
			"cha": 26,
			"save": {
				"dex": "+9",
				"con": "+12",
				"wis": "+12"
			},
			"skill": {
				"deception": "+15",
				"insight": "+12",
				"perception": "+12",
				"persuasion": "+15"
			},
			"senses": [
				"truesight 120 ft."
			],
			"passive": 22,
			"resist": [
				"cold",
				"fire",
				"lightning"
			],
			"immune": [
				"poison",
				{
					"immune": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks",
					"cond": true
				}
			],
			"conditionImmune": [
				"charmed",
				"exhaustion",
				"frightened",
				"poisoned"
			],
			"languages": [
				"all",
				"telepathy 120 ft."
			],
			"cr": "24",
			"spellcasting": [
				{
					"name": "Innate Spellcasting",
					"headerEntries": [
						"Graz'zt's spellcasting ability is Charisma (spell save {@dc 23}). He can innately cast the following spells, requiring no material components:"
					],
					"will": [
						"{@spell charm person}",
						"{@spell crown of madness}",
						"{@spell detect magic}",
						"{@spell dispel magic}",
						"{@spell dissonant whispers}"
					],
					"daily": {
						"3e": [
							"{@spell counterspell}",
							"{@spell darkness}",
							"{@spell dominate person}",
							"{@spell sanctuary}",
							"{@spell telekinesis}",
							"{@spell teleport}"
						],
						"1e": [
							"{@spell dominate monster}",
							"{@spell greater invisibility}"
						]
					},
					"ability": "cha"
				}
			],
			"trait": [
				{
					"name": "Shapechanger",
					"entries": [
						"Graz'zt can use his action to polymorph into a form that resembles a Medium humanoid, or back into his true form. Aside from his size, his statistics are the same in each form. Any equipment he is wearing or carrying isn't transformed."
					]
				},
				{
					"name": "Legendary Resistance (3/Day)",
					"entries": [
						"If Graz'zt fails a saving throw, he can choose to succeed instead."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"Graz'zt has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Magic Weapons",
					"entries": [
						"Graz'zt's weapon attacks are magical."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"Graz'zt attacks twice with Wave of Sorrow."
					]
				},
				{
					"name": "Wave of Sorrow (Greatsword)",
					"entries": [
						"{@atk mw} {@hit 13} to hit, reach 10 ft., one target. {@h}20 ({@damage 4d6 + 6}) slashing damage plus 10 ({@damage 3d6}) acid damage."
					]
				},
				{
					"name": "Teleport",
					"entries": [
						"Graz'zt magically teleports, along with any equipment he is wearing or carrying, up to 120 feet to an unoccupied space he can see."
					]
				}
			],
			"legendary": [
				{
					"name": "Attack",
					"entries": [
						"Graz'zt attacks once with Wave of Sorrow."
					]
				},
				{
					"name": "Dance, My Puppet",
					"entries": [
						"One creature {@condition charmed} by Graz'zt that Graz'zt can see must use its reaction to move up to its speed as Graz'zt directs."
					]
				},
				{
					"name": "Sow Discord",
					"entries": [
						"Graz'zt casts crown of madness or dissonant whispers."
					]
				},
				{
					"name": "Teleport",
					"entries": [
						"Graz'zt uses his Teleport action."
					]
				}
			],
			"legendaryGroup": {
				"name": "Graz'zt",
				"source": "MTF"
			},
			"hasToken": true,
			"traitTags": [
				"Legendary Resistances",
				"Magic Resistance",
				"Magic Weapons",
				"Shapechanger"
			],
			"senseTags": [
				"U"
			],
			"actionTags": [
				"Multiattack",
				"Teleport"
			],
			"languageTags": [
				"TP",
				"XX"
			],
			"damageTags": [
				"A",
				"S"
			],
			"spellcastingTags": [
				"I"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflictSpell": [
				"charmed",
				"invisible",
				"restrained"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Green Abishai",
			"source": "MTF",
			"page": 162,
			"size": "M",
			"type": {
				"type": "fiend",
				"tags": [
					"devil"
				]
			},
			"alignment": [
				"L",
				"E"
			],
			"ac": [
				{
					"ac": 18,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 187,
				"formula": "25d8 + 75"
			},
			"speed": {
				"walk": 30,
				"fly": 40
			},
			"str": 12,
			"dex": 17,
			"con": 16,
			"int": 17,
			"wis": 12,
			"cha": 19,
			"save": {
				"int": "+8",
				"cha": "+9"
			},
			"skill": {
				"deception": "+9",
				"insight": "+6",
				"perception": "+6",
				"persuasion": "+9"
			},
			"senses": [
				"darkvision 120 ft."
			],
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
			"immune": [
				"fire",
				"poison"
			],
			"conditionImmune": [
				"poisoned"
			],
			"languages": [
				"Draconic",
				"Infernal",
				"telepathy 120 ft."
			],
			"cr": "15",
			"spellcasting": [
				{
					"name": "Innate Spellcasting",
					"headerEntries": [
						"The abishai's innate spellcasting ability is Charisma (spell save {@dc 17}). It can innately cast the following spells, requiring no material components:"
					],
					"will": [
						"{@spell alter self}",
						"{@spell major image}"
					],
					"daily": {
						"3e": [
							"{@spell charm person}",
							"{@spell detect thoughts}",
							"{@spell fear}"
						],
						"1e": [
							"{@spell confusion}",
							"{@spell dominate person}",
							"{@spell mass suggestion}"
						]
					},
					"ability": "cha"
				}
			],
			"trait": [
				{
					"name": "Devil's Sight",
					"entries": [
						"Magical darkness doesn't impede the abishai's darkvision."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"The abishai has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Magic Weapons",
					"entries": [
						"The abishai's weapon attacks are magical."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The abishai makes two attacks, one with its claws and one with its longsword, or it casts one spell from its Innate Spellcasting trait and makes one claw attack."
					]
				},
				{
					"name": "Longsword",
					"entries": [
						"{@atk mw} {@hit 6} to hit, reach 5 ft., one target. {@h}5 ({@damage 1d8 + 1}) slashing damage, or 6 ({@damage 1d10 + 1}) slashing damage if used with two hands."
					]
				},
				{
					"name": "Claws",
					"entries": [
						"{@atk mw} {@hit 8} to hit, reach 5 ft., one target. {@h}12 ({@damage 2d8 + 3}) piercing damage. If the target is a creature, it must succeed on a {@dc 16} Constitution saving throw or take 11 ({@damage 2d10}) poison damage and become {@condition poisoned} for 1 minute. The {@condition poisoned} target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
					]
				}
			],
			"environment": [
				"urban"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/green-abishai.mp3"
			},
			"traitTags": [
				"Devil's Sight",
				"Magic Resistance",
				"Magic Weapons"
			],
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"DR",
				"I",
				"TP"
			],
			"damageTags": [
				"I",
				"P",
				"S"
			],
			"spellcastingTags": [
				"I"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"poisoned"
			],
			"conditionInflictSpell": [
				"charmed",
				"frightened"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Hellfire Engine",
			"source": "MTF",
			"page": 165,
			"size": "H",
			"type": "construct",
			"alignment": [
				"L",
				"E"
			],
			"ac": [
				{
					"ac": 18,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 216,
				"formula": "16d12 + 112"
			},
			"speed": {
				"walk": 40
			},
			"str": 20,
			"dex": 16,
			"con": 24,
			"int": 2,
			"wis": 10,
			"cha": 1,
			"save": {
				"dex": "+8",
				"wis": "+5",
				"cha": "+0"
			},
			"senses": [
				"darkvision 120 ft."
			],
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
			"immune": [
				"fire",
				"poison"
			],
			"conditionImmune": [
				"charmed",
				"deafened",
				"exhaustion",
				"frightened",
				"paralyzed",
				"poisoned",
				"unconscious"
			],
			"languages": [
				"understands Infernal but can't speak"
			],
			"cr": "16",
			"trait": [
				{
					"name": "Immutable Form",
					"entries": [
						"The hellfire engine is immune to any spell or effect that would alter its form."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"The hellfire engine has advantage on saving throws against spells and other magical effects."
					]
				}
			],
			"action": [
				{
					"name": "Flesh-Crushing Stride",
					"entries": [
						"The hellfire engine moves up to its speed in a straight line. During this move, it can enter Large or smaller creatures' spaces. A creature whose space the hellfire engine enters must make a {@dc 18} Dexterity saving throw. On a successful save, the creature is pushed to the nearest space out of the hellfire engine's path. On a failed save, the creature falls {@condition prone} and takes 28 ({@damage 8d6}) bludgeoning damage.",
						"If the hellfire engine remains in the {@condition prone} creature's space, the creature is also {@condition restrained} until it's no longer in the same space as the hellfire engine. While {@condition restrained} in this way, the creature, or another creature within 5 feet of it, can make a {@dc 18} Strength check. On a success, the creature is shunted to an unoccupied space of its choice within 5 feet of the hellfire engine and is no longer {@condition restrained}."
					]
				},
				{
					"name": "Hellfire Weapons",
					"entries": [
						"The hellfire engine uses one of the following options:",
						{
							"type": "list",
							"items": [
								{
									"type": "item",
									"name": "Bonemelt Sprayer",
									"entry": "The hellfire engine spews acidic flame in a 60-foot cone. Each creature in the cone must make a {@dc 20} Dexterity saving throw, taking 11 ({@damage 2d10}) fire damage plus 18 ({@damage 4d8}) acid damage on a failed save, or half as much damage on a successful one. Creatures that fail the saving throw are drenched in burning acid and take 5 ({@damage 1d10}) fire damage plus 9 ({@damage 2d8}) acid damage at the end of their turns. An affected creature or another creature within 5 feet of it can take an action to scrape off the burning fuel."
								},
								{
									"type": "item",
									"name": "Lightning Flail",
									"entry": "{@atk mw} {@hit 11} to hit, reach 15 ft., one creature. {@h}18 ({@damage 3d8 + 5}) bludgeoning damage plus 22 ({@damage 5d8}) lightning damage. Up to three other creatures of the hellfire engine's choice that it can see within 30 feet of the target must each make a {@dc 20} Dexterity saving throw, taking 22 ({@damage 5d8}) lightning damage on a failed save, or half as much damage on a successful one."
								},
								{
									"type": "item",
									"name": "Thunder Cannon",
									"entry": "The hellfire engine targets a point within 120 feet of it that it can see. Each creature within 30 feet of that point must make a {@dc 20} Dexterity saving throw, taking 27 ({@damage 5d10}) bludgeoning damage plus 13 ({@damage 2d12}) thunder damage on a failed save, or half as much damage on a successful one."
								}
							]
						},
						"If the chosen option kills a creature, the creature's soul rises from the River Styx as a lemure in Avernus in {@dice 1d4} hours. If the creature isn't revived before then, only a {@spell wish} spell or killing the lemure and casting true resurrection on the creature's original body can restore it to life. Constructs and devils are immune to this effect."
					]
				}
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/hellfire-engine.mp3"
			},
			"traitTags": [
				"Immutable Form",
				"Magic Resistance"
			],
			"senseTags": [
				"SD"
			],
			"languageTags": [
				"CS",
				"I"
			],
			"damageTags": [
				"A",
				"B",
				"F",
				"L",
				"T"
			],
			"miscTags": [
				"AOE",
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"prone",
				"restrained"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Howler",
			"source": "MTF",
			"page": 210,
			"size": "L",
			"type": "fiend",
			"alignment": [
				"C",
				"E"
			],
			"ac": [
				{
					"ac": 16,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 90,
				"formula": "12d10 + 24"
			},
			"speed": {
				"walk": 40
			},
			"str": 17,
			"dex": 16,
			"con": 15,
			"int": 5,
			"wis": 20,
			"cha": 6,
			"skill": {
				"perception": "+8"
			},
			"senses": [
				"darkvision 60 ft."
			],
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
			"conditionImmune": [
				"frightened"
			],
			"languages": [
				"understands Abyssal but can't speak"
			],
			"cr": "8",
			"trait": [
				{
					"name": "Pack Tactics",
					"entries": [
						"A howler has advantage on attack rolls against a creature if at least one of the howler's allies is within 5 feet of the creature and the ally isn't {@condition incapacitated}."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The howler makes two bite attacks."
					]
				},
				{
					"name": "Rending Bite",
					"entries": [
						"{@atk mw} {@hit 6} to hit, reach 5 ft., one target. {@h}10 ({@damage 2d6 + 3}) piercing damage. If the target is {@condition frightened} it takes an additional 22 ({@damage 4d10}) psychic damage. This attack ignores damage resistance."
					]
				},
				{
					"name": "Mind-Breaking Howl {@recharge}",
					"entries": [
						"The howler emits a keening howl in a 60-foot cone. Each creature in that area that isn't {@condition deafened} must succeed on a {@dc 16} Wisdom saving throw or be {@condition frightened} until the end of the howler's next turn. While a creature is {@condition frightened} in this way, its speed is halved, and it is {@condition incapacitated}. A target that successfully saves is immune to the Mind-Breaking Howl of all howlers for the next 24 hours."
					]
				}
			],
			"environment": [
				"desert",
				"grassland",
				"hill",
				"underdark"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/howler.mp3"
			},
			"traitTags": [
				"Pack Tactics"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"AB",
				"CS"
			],
			"damageTags": [
				"P",
				"Y"
			],
			"miscTags": [
				"AOE",
				"MW"
			],
			"conditionInflict": [
				"frightened"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Hutijin",
			"isNamedCreature": true,
			"source": "MTF",
			"page": 175,
			"size": "L",
			"type": {
				"type": "fiend",
				"tags": [
					"devil"
				]
			},
			"alignment": [
				"L",
				"E"
			],
			"ac": [
				{
					"ac": 19,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 200,
				"formula": "16d10 + 112"
			},
			"speed": {
				"walk": 30,
				"fly": 60
			},
			"str": 27,
			"dex": 15,
			"con": 25,
			"int": 23,
			"wis": 19,
			"cha": 25,
			"save": {
				"dex": "+9",
				"con": "+14",
				"wis": "+11"
			},
			"skill": {
				"intimidation": "+14",
				"perception": "+11"
			},
			"senses": [
				"truesight 120 ft."
			],
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
			"immune": [
				"fire",
				"poison"
			],
			"conditionImmune": [
				"charmed",
				"exhaustion",
				"frightened",
				"poisoned"
			],
			"languages": [
				"all",
				"telepathy 120 ft."
			],
			"cr": "21",
			"spellcasting": [
				{
					"name": "Innate Spellcasting",
					"headerEntries": [
						"Hutijin's innate spellcasting ability is Charisma (spell save {@dc 22}). He can innately cast the following spells, requiring no material components:"
					],
					"will": [
						"{@spell alter self} (can become Medium when changing his appearance)",
						"{@spell animate dead}",
						"{@spell detect magic}",
						"{@spell hold monster}",
						"{@spell invisibility} (self only)",
						"{@spell lightning bolt}",
						"{@spell suggestion}",
						"{@spell wall of fire}"
					],
					"daily": {
						"3": [
							"{@spell dispel magic}"
						],
						"1e": [
							"{@spell heal}",
							"{@spell symbol} (hopelessness only)"
						]
					},
					"ability": "cha"
				}
			],
			"trait": [
				{
					"name": "Infernal Despair",
					"entries": [
						"Each creature within 15 feet of Hutijin that isn't a devil makes saving throws with disadvantage."
					]
				},
				{
					"name": "Legendary Resistance (3/Day)",
					"entries": [
						"If Hutijin fails a saving throw, he can choose to succeed instead."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"Hutijin has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Magic Weapons",
					"entries": [
						"Hutijin's weapon attacks are magical."
					]
				},
				{
					"name": "Regeneration",
					"entries": [
						"Hutijin regains 20 hit points at the start of his turn. If he takes radiant damage, this trait doesn't function at the start of his next turn. Hutijin dies only if he starts his turn with 0 hit points and doesn't regenerate."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"Hutijin makes four attacks: one with his bite, one with his claw, one with his mace, and one with his tail."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 15} to hit, reach 5 ft., one target. {@h}15 ({@damage 2d6 + 8}) piercing damage. The target must succeed on a {@dc 22} Constitution saving throw or become {@condition poisoned}. While {@condition poisoned} in this way, the target can't regain hit points, and it takes 10 ({@damage 3d6}) poison damage at the start of each of its turns. The {@condition poisoned} target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
					]
				},
				{
					"name": "Claw",
					"entries": [
						"{@atk mw} {@hit 15} to hit, reach 10 ft., one target. {@h}17 ({@damage 2d8 + 8}) slashing damage."
					]
				},
				{
					"name": "Mace",
					"entries": [
						"{@atk mw} {@hit 15} to hit, reach 5 ft., one target. {@h}15 ({@damage 2d6 + 8}) bludgeoning damage."
					]
				},
				{
					"name": "Tail",
					"entries": [
						"{@atk mw} {@hit 15} to hit, reach 10 ft., one target. {@h}19 ({@damage 2d10 + 8}) bludgeoning damage."
					]
				},
				{
					"name": "Teleport",
					"entries": [
						"Hutijin magically teleports, along with any equipment he is wearing and carrying, up to 120 feet to an unoccupied space he can see."
					]
				}
			],
			"reaction": [
				{
					"name": "Fearful Voice {@recharge 5}",
					"entries": [
						"In response to taking damage, Hutijin utters a dreadful word of power. Each creature within 30 feet of him that isn't a devil must succeed on a {@dc 22} Wisdom saving throw or become {@condition frightened} of him for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. A creature that saves against this effect is immune to Hutijin's Fearful Voice for 24 hours."
					]
				}
			],
			"legendary": [
				{
					"name": "Attack",
					"entries": [
						"Hutijin attacks once with his mace."
					]
				},
				{
					"name": "Lightning Storm (Costs 2 Actions)",
					"entries": [
						"Hutijin releases lightning in a 20-foot radius. All other creatures in that area must each make a {@dc 22} Dexterity saving throw, taking 18 ({@damage 4d8}) lightning damage on a failed save, or half as much damage on a successful one."
					]
				},
				{
					"name": "Teleport",
					"entries": [
						"Hutijin uses his Teleport action."
					]
				}
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/hutijin.mp3"
			},
			"traitTags": [
				"Legendary Resistances",
				"Magic Resistance",
				"Magic Weapons",
				"Regeneration"
			],
			"senseTags": [
				"U"
			],
			"actionTags": [
				"Multiattack",
				"Teleport"
			],
			"languageTags": [
				"TP",
				"XX"
			],
			"damageTags": [
				"B",
				"I",
				"L",
				"P",
				"S"
			],
			"spellcastingTags": [
				"I"
			],
			"miscTags": [
				"AOE",
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"frightened",
				"poisoned"
			],
			"conditionInflictSpell": [
				"frightened",
				"incapacitated",
				"invisible",
				"paralyzed",
				"stunned",
				"unconscious"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Hydroloth",
			"source": "MTF",
			"page": 249,
			"size": "M",
			"type": {
				"type": "fiend",
				"tags": [
					"yugoloth"
				]
			},
			"alignment": [
				"N",
				"E"
			],
			"ac": [
				15
			],
			"hp": {
				"average": 135,
				"formula": "18d8 + 54"
			},
			"speed": {
				"walk": 20,
				"swim": 40
			},
			"str": 12,
			"dex": 21,
			"con": 16,
			"int": 19,
			"wis": 10,
			"cha": 14,
			"skill": {
				"insight": "+4",
				"perception": "+4"
			},
			"senses": [
				"blindsight 60 ft.",
				"darkvision 60 ft."
			],
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
			"immune": [
				"acid",
				"poison"
			],
			"vulnerable": [
				"fire"
			],
			"conditionImmune": [
				"poisoned"
			],
			"languages": [
				"Abyssal",
				"Infernal",
				"telepathy 60 ft."
			],
			"cr": "9",
			"spellcasting": [
				{
					"name": "Innate Spellcasting",
					"headerEntries": [
						"The hydroloth's innate spellcasting ability is Intelligence (spell save {@dc 16}). It can innately cast the following spells, requiring no material components:"
					],
					"will": [
						"{@spell darkness}",
						"{@spell detect magic}",
						"{@spell dispel magic}",
						"{@spell invisibility} (self only)",
						"{@spell water walk}"
					],
					"daily": {
						"3e": [
							"{@spell control water}",
							"{@spell crown of madness}",
							"{@spell fear}",
							"{@spell phantasmal killer}",
							"{@spell suggestion}"
						]
					},
					"ability": "int"
				}
			],
			"trait": [
				{
					"name": "Amphibious",
					"entries": [
						"The hydroloth can breathe air and water."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"The hydroloth has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Magic Weapons",
					"entries": [
						"The hydroloth's weapon attacks are magical."
					]
				},
				{
					"name": "Secure Memory",
					"entries": [
						"The hydroloth is immune to the waters of the River Styx as well as any effect that would steal or modify its memories or detect or read its thoughts."
					]
				},
				{
					"name": "Watery Advantage",
					"entries": [
						"While submerged in liquid, the hydroloth has advantage on attack rolls."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The hydroloth makes two melee attacks. In place of one of these attacks, it can cast one spell that takes 1 action to cast."
					]
				},
				{
					"name": "Claws",
					"entries": [
						"{@atk mw} {@hit 9} to hit, reach 5 ft., one target. {@h}14 ({@damage 2d8 + 5}) slashing damage."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 9} to hit, reach 5 ft., one target. {@h}16 ({@damage 2d10 + 5}) piercing damage."
					]
				},
				{
					"name": "Steal Memory (1/Day)",
					"entries": [
						"The hydroloth targets one creature it can see within 60 feet of it. The target takes {@dice 4d6} psychic damage, and it must make a {@dc 16} Intelligence saving throw. On a successful save, the target becomes immune to this hydroloth's Steal Memory for 24 hours. On a failed save, the target loses all proficiencies, it can't cast spells, it can't understand language, and if its Intelligence and Charisma scores are higher than 5, they become 5. Each time the target finishes a long rest, it can repeat the saving throw, ending the effect on itself on a success. A {@spell greater restoration} or {@spell remove curse} spell cast on the target ends this effect early."
					]
				},
				{
					"name": "Teleport",
					"entries": [
						"The hydroloth magically teleports, along with any equipment it is wearing or carrying, up to 60 feet to an unoccupied space it can see."
					]
				}
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/hydroloth.mp3"
			},
			"traitTags": [
				"Amphibious",
				"Magic Resistance",
				"Magic Weapons"
			],
			"senseTags": [
				"B",
				"D"
			],
			"actionTags": [
				"Multiattack",
				"Teleport"
			],
			"languageTags": [
				"AB",
				"I",
				"TP"
			],
			"damageTags": [
				"P",
				"S",
				"Y"
			],
			"spellcastingTags": [
				"I"
			],
			"miscTags": [
				"MW"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Iron Cobra",
			"source": "MTF",
			"page": 125,
			"otherSources": [
				{
					"source": "GoS"
				}
			],
			"size": "M",
			"type": "construct",
			"alignment": [
				"U"
			],
			"ac": [
				13
			],
			"hp": {
				"average": 45,
				"formula": "7d8 + 14"
			},
			"speed": {
				"walk": 30
			},
			"str": 12,
			"dex": 16,
			"con": 14,
			"int": 3,
			"wis": 10,
			"cha": 1,
			"skill": {
				"stealth": "+7"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 10,
			"immune": [
				"poison",
				{
					"immune": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks that aren't adamantine",
					"cond": true
				}
			],
			"conditionImmune": [
				"charmed",
				"exhaustion",
				"frightened",
				"paralyzed",
				"petrified",
				"poisoned"
			],
			"languages": [
				"understands one language of its creator but can't speak"
			],
			"cr": "4",
			"trait": [
				{
					"name": "Magic Resistance",
					"entries": [
						"The iron cobra has advantage on saving throws against spells and other magical effects."
					]
				}
			],
			"action": [
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 5} to hit, reach 5 ft., one target. {@h}6 ({@damage 1d6 + 3}) piercing damage. If the target is a creature, it must succeed on a {@dc 13} Constitution saving throw or suffer one random poison effect:",
						"1. Poison Damage: The target takes 13 ({@damage 3d8}) poison damage.",
						"2. Confusion: On its next turn, the target must use its action to make one weapon attack against a random creature it can see within 30 feet of it, using whatever weapon it has in hand and moving beforehand if necessary to get in range. If it's holding no weapon, it makes an unarmed strike. If no creature is visible within 30 feet, it takes the Dash action, moving toward the nearest creature.",
						"3. Paralysis: The target is {@condition paralyzed} until the end of its next turn."
					]
				}
			],
			"environment": [
				"forest",
				"grassland",
				"hill",
				"mountain"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/iron-cobra.mp3"
			},
			"traitTags": [
				"Magic Resistance"
			],
			"senseTags": [
				"D"
			],
			"languageTags": [
				"CS"
			],
			"damageTags": [
				"I",
				"P"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"paralyzed"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Juiblex",
			"isNamedCreature": true,
			"source": "MTF",
			"page": 151,
			"otherSources": [
				{
					"source": "OotA",
					"page": 243
				}
			],
			"size": "H",
			"type": {
				"type": "fiend",
				"tags": [
					"demon"
				]
			},
			"alignment": [
				"C",
				"E"
			],
			"ac": [
				{
					"ac": 18,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 350,
				"formula": "28d12 + 168"
			},
			"speed": {
				"walk": 30
			},
			"str": 24,
			"dex": 10,
			"con": 23,
			"int": 20,
			"wis": 20,
			"cha": 16,
			"save": {
				"dex": "+7",
				"con": "+13",
				"wis": "+12"
			},
			"skill": {
				"perception": "+12"
			},
			"senses": [
				"truesight 120 ft."
			],
			"passive": 22,
			"resist": [
				"cold",
				"fire",
				"lightning"
			],
			"immune": [
				"poison",
				{
					"immune": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks",
					"cond": true
				}
			],
			"conditionImmune": [
				"blinded",
				"charmed",
				"deafened",
				"exhaustion",
				"frightened",
				"grappled",
				"paralyzed",
				"petrified",
				"poisoned",
				"prone",
				"restrained",
				"stunned",
				"unconscious"
			],
			"languages": [
				"all",
				"telepathy 120 ft."
			],
			"cr": "23",
			"spellcasting": [
				{
					"name": "Innate Spellcasting",
					"headerEntries": [
						"Juiblex's spellcasting ability is Charisma (spell save {@dc 18}, {@hit 10} to hit with spell attacks). Juiblex can innately cast the following spells, requiring no material components:"
					],
					"will": [
						"{@spell acid splash} (17th level)",
						"{@spell detect magic}"
					],
					"daily": {
						"3e": [
							"{@spell blight}",
							"{@spell contagion}",
							"{@spell gaseous form}"
						]
					},
					"ability": "cha"
				}
			],
			"trait": [
				{
					"name": "Foul",
					"entries": [
						"Any creature, other than an ooze, that starts its turn within 10 feet of Juiblex must succeed on a {@dc 21} Constitution saving throw or be {@condition poisoned} until the start of the creature's next turn."
					]
				},
				{
					"name": "Legendary Resistance (3/Day)",
					"entries": [
						"If Juiblex fails a saving throw, it can choose to succeed instead."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"Juiblex has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Magic Weapons",
					"entries": [
						"Juiblex's weapon attacks are magical."
					]
				},
				{
					"name": "Regeneration",
					"entries": [
						"Juiblex regains 20 hit points at the start of its turn. If it takes fire or radiant damage, this trait doesn't function at the start of its next turn. Juiblex dies only if it starts its turn with 0 hit points and doesn't regenerate."
					]
				},
				{
					"name": "Spider Climb",
					"entries": [
						"Juiblex can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"Juiblex makes three acid lash attacks."
					]
				},
				{
					"name": "Acid Lash",
					"entries": [
						"{@atk mw} {@hit 14} to hit, reach 10 ft., one target. {@h}21 ({@damage 4d6 + 7}) acid damage. Any creature killed by this attack is drawn into Juiblex's body, and the corpse is obliterated after 1 minute."
					]
				},
				{
					"name": "Eject Slime {@recharge 5}",
					"entries": [
						"Juiblex spews out a corrosive slime, targeting one creature that it can see within 60 feet of it. The target must make a {@dc 21} Dexterity saving throw. On a failure, the target takes 55 ({@damage 10d10}) acid damage. Unless the target avoids taking any of this damage, any metal armor worn by the target takes a permanent \u22121 penalty to the AC it offers, and any metal weapon it is carrying or wearing takes a permanent \u22121 penalty to damage rolls. The penalty worsens each time a target is subjected to this effect. If the penalty on an object drops to \u22125, the object is destroyed."
					]
				}
			],
			"legendary": [
				{
					"name": "Acid Splash",
					"entries": [
						"Juiblex casts acid splash."
					]
				},
				{
					"name": "Attack",
					"entries": [
						"Juiblex makes one acid lash attack."
					]
				},
				{
					"name": "Corrupting Touch (Costs 2 Actions)",
					"entries": [
						"{@atk mw} {@hit 14} to hit, reach 10 ft., one creature. {@h}21 ({@damage 4d6 + 7}) poison damage, and the target is slimed. Until the slime is scraped off with an action, the target is {@condition poisoned}, and any creature, other than an ooze, is {@condition poisoned} while within 10 feet of the target."
					]
				}
			],
			"legendaryGroup": {
				"name": "Juiblex",
				"source": "MTF"
			},
			"hasToken": true,
			"traitTags": [
				"Legendary Resistances",
				"Magic Resistance",
				"Magic Weapons",
				"Regeneration",
				"Spider Climb"
			],
			"senseTags": [
				"U"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"TP",
				"XX"
			],
			"damageTags": [
				"A",
				"I"
			],
			"spellcastingTags": [
				"I"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"poisoned"
			],
			"conditionInflictLegendary": [
				"prone",
				"restrained"
			],
			"conditionInflictSpell": [
				"blinded",
				"poisoned",
				"stunned"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Kruthik Hive Lord",
			"source": "MTF",
			"page": 212,
			"size": "L",
			"type": "monstrosity",
			"alignment": [
				"U"
			],
			"ac": [
				{
					"ac": 20,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 102,
				"formula": "12d10 + 36"
			},
			"speed": {
				"walk": 40,
				"burrow": 20,
				"climb": 40
			},
			"str": 19,
			"dex": 16,
			"con": 17,
			"int": 10,
			"wis": 14,
			"cha": 10,
			"senses": [
				"darkvision 60 ft.",
				"tremorsense 60 ft."
			],
			"passive": 12,
			"languages": [
				"Kruthik"
			],
			"cr": "5",
			"trait": [
				{
					"name": "Keen Smell",
					"entries": [
						"The kruthik has advantage on Wisdom ({@skill Perception}) checks that rely on smell."
					]
				},
				{
					"name": "Pack Tactics",
					"entries": [
						"The kruthik has advantage on an attack roll against a creature if at least one of the kruthik's allies is within 5 feet of the creature and the ally isn't {@condition incapacitated}."
					]
				},
				{
					"name": "Tunneler",
					"entries": [
						"The kruthik can burrow through solid rock at half its burrowing speed and leaves a 10-foot-diameter tunnel in its wake."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The kruthik makes two stab attacks or two spike attacks."
					]
				},
				{
					"name": "Stab",
					"entries": [
						"{@atk mw} {@hit 7} to hit, reach 10 ft., one target. {@h}9 ({@damage 1d10 + 4}) piercing damage."
					]
				},
				{
					"name": "Spike",
					"entries": [
						"{@atk rw} {@hit 6} to hit, range 30/120 ft., one target. {@h}7 ({@damage 1d6 + 4}) piercing damage."
					]
				},
				{
					"name": "Acid Spray {@recharge 5}",
					"entries": [
						"The kruthik sprays acid in a 15-foot cone. Each creature in that area must make a {@dc 14} Dexterity saving throw, taking 22 ({@damage 4d10}) acid damage on a failed save, or half as much damage on a successful one."
					]
				}
			],
			"environment": [
				"desert",
				"mountain",
				"underdark"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/kruthik-hive-lord.mp3"
			},
			"traitTags": [
				"Keen Senses",
				"Pack Tactics"
			],
			"senseTags": [
				"D",
				"T"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"OTH"
			],
			"damageTags": [
				"A",
				"P"
			],
			"miscTags": [
				"AOE",
				"MW",
				"RCH",
				"RW"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Leviathan",
			"source": "MTF",
			"page": 198,
			"size": "G",
			"type": "elemental",
			"alignment": [
				"N"
			],
			"ac": [
				17
			],
			"hp": {
				"average": 328,
				"formula": "16d20 + 160"
			},
			"speed": {
				"walk": 40,
				"swim": 120
			},
			"str": 30,
			"dex": 24,
			"con": 30,
			"int": 2,
			"wis": 18,
			"cha": 17,
			"save": {
				"wis": "+10",
				"cha": "+9"
			},
			"senses": [
				"darkvision 60 ft."
			],
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
			"immune": [
				"acid",
				"poison"
			],
			"conditionImmune": [
				"exhaustion",
				"grappled",
				"paralyzed",
				"petrified",
				"poisoned",
				"prone",
				"restrained",
				"stunned"
			],
			"cr": "20",
			"trait": [
				{
					"name": "Legendary Resistance (3/Day)",
					"entries": [
						"If the leviathan fails a saving throw, it can choose to succeed instead."
					]
				},
				{
					"name": "Partial Freeze",
					"entries": [
						"If the leviathan takes 50 cold damage or more during a single turn, the leviathan partially freezes; until the end of its next turn, its speeds are reduced to 20 feet, and it makes attack rolls with disadvantage."
					]
				},
				{
					"name": "Siege Monster",
					"entries": [
						"The leviathan deals double damage to objects and structures (included in Tidal Wave)."
					]
				},
				{
					"name": "Water Form",
					"entries": [
						"The leviathan can enter a hostile creature's space and stop there. It can move through a space as narrow as 1 inch wide without squeezing."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The leviathan makes two attacks: one with its slam and one with its tail."
					]
				},
				{
					"name": "Slam",
					"entries": [
						"{@atk mw} {@hit 16} to hit, reach 20 ft., one target. {@h}15 ({@damage 1d10 + 10}) bludgeoning damage plus 5 ({@damage 1d10}) acid damage."
					]
				},
				{
					"name": "Tail",
					"entries": [
						"{@atk mw} {@hit 16} to hit, reach 20 ft., one target. {@h}16 ({@damage 1d12 + 10}) bludgeoning damage plus 6 ({@damage 1d12}) acid damage."
					]
				},
				{
					"name": "Tidal Wave {@recharge}",
					"entries": [
						"While submerged, the leviathan magically creates a wall of water centered on itself. The wall is up 250 feet long, up to 250 feet high, and up to 50 feet thick. When the wall appears, all other creatures within its area must each make a {@dc 24} Strength saving throw. A creature takes 33 ({@damage 6d10}) bludgeoning damage on failed save, or half as much damage on a successful one.",
						"At the start of each of the leviathan's turns after the wall appears, the wall, along with any other creatures in it, moves 50 feet away from the leviathan. Any Huge or smaller creature inside the wall or whose space the wall enters when it moves must succeed on a {@dc 24} Strength saving throw or take 27 ({@damage 5d10}) bludgeoning damage. A creature takes this damage no more than once on a turn. At the end of each turn the wall moves, the wall's height is reduced by 50 feet, and the damage creatures take from the wall on subsequent rounds is reduced by {@dice 1d10}. When the wall reaches 0 feet in height, the effect ends.",
						"A creature caught in the wall can move by swimming. Because of the force of the wave, though, the creature must make a successful {@dc 24} Strength (Athletics) check to swim at all during that turn."
					]
				}
			],
			"legendary": [
				{
					"name": "Slam (Costs 2 Actions)",
					"entries": [
						"The leviathan makes one slam attack."
					]
				},
				{
					"name": "Move",
					"entries": [
						"The leviathan moves up to its speed."
					]
				}
			],
			"environment": [
				"coastal",
				"underwater"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/leviathan.mp3"
			},
			"traitTags": [
				"Legendary Resistances",
				"Siege Monster"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"damageTags": [
				"A",
				"B",
				"C"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Male Steeder",
			"source": "MTF",
			"page": 238,
			"otherSources": [
				{
					"source": "OotA",
					"page": 231
				}
			],
			"size": "M",
			"type": "monstrosity",
			"alignment": [
				"U"
			],
			"ac": [
				{
					"ac": 12,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 13,
				"formula": "2d8 + 4"
			},
			"speed": {
				"walk": 30,
				"climb": 30
			},
			"str": 15,
			"dex": 12,
			"con": 14,
			"int": 2,
			"wis": 10,
			"cha": 3,
			"skill": {
				"stealth": "+5",
				"perception": "+4"
			},
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 14,
			"cr": "1/4",
			"trait": [
				{
					"name": "Spider Climb",
					"entries": [
						"The steeder can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
					]
				},
				{
					"name": "Extraordinary Leap",
					"entries": [
						"The distance of the steeder's long jumps is tripled; every foot of its walking speed that it spends on the jump allows it to jump 3 feet."
					]
				}
			],
			"action": [
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 4} to hit, reach 5 ft., one target. {@h}6 ({@damage 1d8 + 2}) piercing damage plus 4 ({@damage 1d8}) poison damage."
					]
				},
				{
					"name": "Sticky Leg",
					"entries": [
						"{@atk mw} {@hit 4} to hit, reach 5 ft., one Small or Tiny creature. {@h}The target is stuck to the steeder's leg and is {@condition grappled} until it escapes (escape {@dc 12}). The steeder can have only one creature {@condition grappled} at a time."
					]
				}
			],
			"environment": [
				"underdark"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/male-steeder.mp3"
			},
			"traitTags": [
				"Spider Climb"
			],
			"senseTags": [
				"SD"
			],
			"damageTags": [
				"I",
				"P"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"grappled"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Marut",
			"source": "MTF",
			"page": 213,
			"size": "L",
			"type": {
				"type": "construct",
				"tags": [
					"inevitable"
				]
			},
			"alignment": [
				"L",
				"N"
			],
			"ac": [
				{
					"ac": 22,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 432,
				"formula": "32d10 + 256"
			},
			"speed": {
				"walk": 40,
				"fly": {
					"number": 30,
					"condition": "(hover)"
				},
				"canHover": true
			},
			"str": 28,
			"dex": 12,
			"con": 26,
			"int": 19,
			"wis": 15,
			"cha": 18,
			"save": {
				"int": "+12",
				"wis": "+10",
				"cha": "+12"
			},
			"skill": {
				"insight": "+10",
				"intimidation": "+12",
				"perception": "+10"
			},
			"senses": [
				"darkvision 60 ft."
			],
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
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"charmed",
				"frightened",
				"paralyzed",
				"poisoned",
				"unconscious"
			],
			"languages": [
				"all but rarely speaks"
			],
			"cr": "25",
			"spellcasting": [
				{
					"name": "Innate Spellcasting",
					"headerEntries": [
						"The marut's innate spellcasting ability is Intelligence (spell save {@dc 20}). The marut can innately cast the following spell, requiring no material components."
					],
					"will": [
						"{@spell plane shift} (self only)"
					],
					"ability": "int"
				}
			],
			"trait": [
				{
					"name": "Immutable Form",
					"entries": [
						"The marut is immune to any spell or effect that would alter its form."
					]
				},
				{
					"name": "Legendary Resistance (3/Day)",
					"entries": [
						"If the marut fails a saving throw, it can choose to succeed instead."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"The marut has advantage on saving throws against spells and other magical effects."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The marut makes two slam attacks."
					]
				},
				{
					"name": "Unerring Slam",
					"entries": [
						"{@atk mw} automatic hit, reach 5 ft., one target. {@h}60 force damage, and the target is pushed up to 5 feet away from the marut if it is Huge or smaller."
					]
				},
				{
					"name": "Blazing Edict {@recharge 5}",
					"entries": [
						"Arcane energy emanates from the marut's chest in a 60-foot cube. Every creature in that area takes 45 radiant damage. Each creature that takes any of this damage must succeed on a {@dc 20} Wisdom saving throw or be {@condition stunned} until the end of the marut's next turn."
					]
				},
				{
					"name": "Justify",
					"entries": [
						"The marut targets up to two creatures it can see within 60 feet of it. Each target must succeed on a {@dc 20} Charisma saving throw or be teleported to a teleportation circle in the Hall of Concordance in Sigil. A target fails automatically if it is {@condition incapacitated}. If either target is teleported in this way, the marut teleports with it to the circle.",
						"After teleporting in this way, the marut can't use this action again until it finishes a short or long rest."
					]
				}
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/marut.mp3"
			},
			"traitTags": [
				"Immutable Form",
				"Legendary Resistances",
				"Magic Resistance"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"XX"
			],
			"damageTags": [
				"O",
				"R"
			],
			"spellcastingTags": [
				"I"
			],
			"miscTags": [
				"AOE",
				"MW"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Maurezhi",
			"source": "MTF",
			"page": 133,
			"size": "M",
			"type": {
				"type": "fiend",
				"tags": [
					"demon"
				]
			},
			"alignment": [
				"C",
				"E"
			],
			"ac": [
				{
					"ac": 15,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 88,
				"formula": "16d8 + 16"
			},
			"speed": {
				"walk": 30
			},
			"str": 14,
			"dex": 17,
			"con": 12,
			"int": 11,
			"wis": 12,
			"cha": 15,
			"skill": {
				"deception": "+5"
			},
			"senses": [
				"darkvision 120 ft."
			],
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
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"charmed",
				"exhaustion",
				"poisoned"
			],
			"languages": [
				"Abyssal",
				"Elvish",
				"telepathy 120 ft."
			],
			"cr": "7",
			"trait": [
				{
					"name": "Assume Form",
					"entries": [
						"The maurezhi can assume the appearance of any Medium humanoid it has eaten. It remains in this form for {@dice 1d6} days, during which time the form gradually decays until, when the effect ends, the form sloughs from the demon's body."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"The maurezhi has advantage on saving throws against spells and other magical effects."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The maurezhi makes two attacks: one with its bite and one with its claws."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 6} to hit, reach 5 ft., one target. {@h}14 ({@damage 2d10 + 3}) piercing damage. If the target is a humanoid, its Charisma score is reduced by {@dice 1d4}. This reduction lasts until the target finishes a short or long rest. The target dies if this reduces its Charisma to 0. It rises 24 hours later as a ghoul, unless it has been revived or its corpse has been destroyed."
					]
				},
				{
					"name": "Claws",
					"entries": [
						"{@atk mw} {@hit 6} to hit, reach 5 ft., one target. {@h}12 ({@damage 2d8 + 3}) slashing damage. If the target is a creature other than an undead, it must succeed on a {@dc 12} Constitution saving throw or be {@condition paralyzed} for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
					]
				},
				{
					"name": "Raise Ghoul {@recharge 5}",
					"entries": [
						"The maurezhi targets one dead ghoul or ghast it can see within 30 feet of it. The target is revived with all its hit points."
					]
				}
			],
			"environment": [
				"swamp",
				"urban"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/maurezhi.mp3"
			},
			"traitTags": [
				"Magic Resistance"
			],
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"AB",
				"E",
				"TP"
			],
			"damageTags": [
				"P",
				"S"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"paralyzed"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Meazel",
			"source": "MTF",
			"page": 214,
			"size": "M",
			"type": {
				"type": "humanoid",
				"tags": [
					"meazel"
				]
			},
			"alignment": [
				"L",
				"E"
			],
			"ac": [
				13
			],
			"hp": {
				"average": 35,
				"formula": "10d8 - 10"
			},
			"speed": {
				"walk": 30
			},
			"str": 8,
			"dex": 17,
			"con": 9,
			"int": 14,
			"wis": 13,
			"cha": 10,
			"skill": {
				"perception": "+3",
				"stealth": "+5"
			},
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 13,
			"languages": [
				"Common"
			],
			"cr": "1",
			"trait": [
				{
					"name": "Shadow Stealth",
					"entries": [
						"While in dim light or darkness, the meazel can take the Hide action as a bonus action."
					]
				}
			],
			"action": [
				{
					"name": "Garrote",
					"entries": [
						"{@atk mw} {@hit 5} to hit, reach 5 ft., one target of the meazel's size or smaller. {@h}6 ({@damage 1d6 + 3}) bludgeoning damage, and the target is {@condition grappled} (escape {@dc 13} with disadvantage). Until the grapple ends, the target takes 10 ({@damage 2d6 + 3}) bludgeoning damage at the start of each of the meazel's turns. The meazel can't make weapon attacks while grappling a creature in this way."
					]
				},
				{
					"name": "Shortsword",
					"entries": [
						"{@atk mw} {@hit 5} to hit, reach 5 ft., one target. {@h}6 ({@damage 1d6 + 3}) piercing damage, plus 3 ({@damage 1d6}) necrotic damage."
					]
				},
				{
					"name": "Shadow Teleport {@recharge 5}",
					"entries": [
						"The meazel, any equipment it is wearing or carrying, and any creature it is grappling teleport to an unoccupied space within 500 feet of it, provided that the starting space and the destination are in dim light or darkness. The destination must be a place the meazel has seen before, but it need not be within line of sight. If the destination space is occupied, the teleportation leads to the nearest unoccupied space.",
						"Any other creature the meazel teleports becomes cursed by shadow for 1 hour. Until this curse ends, every undead and every creature native to the Shadowfell within 300 feet of the cursed creature can sense it, which prevents that creature from hiding from them."
					]
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
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/meazel.mp3"
			},
			"senseTags": [
				"SD"
			],
			"languageTags": [
				"C"
			],
			"damageTags": [
				"B",
				"N",
				"P"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"grappled"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Merregon",
			"source": "MTF",
			"page": 166,
			"otherSources": [
				{
					"source": "BGDIA"
				}
			],
			"size": "M",
			"type": {
				"type": "fiend",
				"tags": [
					"devil"
				]
			},
			"alignment": [
				"L",
				"E"
			],
			"ac": [
				{
					"ac": 16,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 45,
				"formula": "6d8 + 18"
			},
			"speed": {
				"walk": 30
			},
			"str": 18,
			"dex": 14,
			"con": 17,
			"int": 6,
			"wis": 12,
			"cha": 8,
			"senses": [
				"darkvision 60 ft."
			],
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
			"immune": [
				"fire",
				"poison"
			],
			"conditionImmune": [
				"frightened",
				"poisoned"
			],
			"languages": [
				"understands Infernal but can't speak",
				"telepathy 120 ft."
			],
			"cr": "4",
			"trait": [
				{
					"name": "Devil's Sight",
					"entries": [
						"Magical darkness doesn't impede the merregon's darkvision."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"The merregon has advantage on saving throws against spells and other magical effects."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The merregon makes two halberd attacks, or if an allied fiend of challenge rating 6 or higher is within 60 feet of it, the merregon makes three halberd attacks."
					]
				},
				{
					"name": "Halberd",
					"entries": [
						"{@atk mw} {@hit 6} to hit, reach 10 ft., one target. {@h}9 ({@damage 1d10 + 4}) slashing damage."
					]
				},
				{
					"name": "Heavy Crossbow",
					"entries": [
						"{@atk rw} {@hit 4} to hit, range 100/400 ft., one target. {@h}7 ({@damage 1d10 + 2}) piercing damage."
					]
				}
			],
			"reaction": [
				{
					"name": "Loyal Bodyguard",
					"entries": [
						"When another fiend within 5 feet of the merregon is hit by an attack, the merregon causes itself to be hit instead."
					]
				}
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/merregon.mp3"
			},
			"traitTags": [
				"Devil's Sight",
				"Magic Resistance"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"CS",
				"I",
				"TP"
			],
			"damageTags": [
				"P",
				"S"
			],
			"miscTags": [
				"MW",
				"RCH",
				"RNG",
				"RW"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Merrenoloth",
			"source": "MTF",
			"page": 250,
			"size": "M",
			"type": {
				"type": "fiend",
				"tags": [
					"yugoloth"
				]
			},
			"alignment": [
				"N",
				"E"
			],
			"ac": [
				13
			],
			"hp": {
				"average": 40,
				"formula": "9d8"
			},
			"speed": {
				"walk": 30,
				"swim": 40
			},
			"str": 8,
			"dex": 17,
			"con": 10,
			"int": 17,
			"wis": 14,
			"cha": 11,
			"save": {
				"dex": "+5",
				"int": "+5"
			},
			"skill": {
				"history": "+5",
				"nature": "+5",
				"perception": "+4",
				"survival": "+4"
			},
			"senses": [
				"blindsight 60 ft.",
				"darkvision 60 ft."
			],
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
			"immune": [
				"acid",
				"poison"
			],
			"conditionImmune": [
				"poisoned"
			],
			"languages": [
				"Abyssal",
				"Infernal",
				"telepathy 60 ft."
			],
			"cr": "3",
			"spellcasting": [
				{
					"name": "Innate Spellcasting",
					"headerEntries": [
						"The merrenoloth's innate spellcasting ability is Intelligence (spell save {@dc 13}). It can innately cast the following spells, requiring no material components:"
					],
					"will": [
						"{@spell charm person}",
						"{@spell darkness}",
						"{@spell detect magic}",
						"{@spell dispel magic}",
						"{@spell gust of wind}"
					],
					"daily": {
						"1": [
							"{@spell control weather}"
						],
						"3": [
							"{@spell control water}"
						]
					},
					"ability": "int"
				}
			],
			"trait": [
				{
					"name": "Magic Resistance",
					"entries": [
						"The merrenoloth has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Magic Weapons",
					"entries": [
						"The merrenoloth's weapon attacks are magical."
					]
				},
				{
					"name": "Teleport",
					"entries": [
						"As a bonus action, the merrenoloth magically teleports, along with any equipment it is wearing or carrying, up to 60 feet to an unoccupied space it can see."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The merrenoloth uses Fear Gaze once and makes one oar attack."
					]
				},
				{
					"name": "Oar",
					"entries": [
						"{@atk mw} {@hit 5} to hit, reach 5 ft., one target. {@h}8 ({@damage 2d4 + 3}) slashing damage."
					]
				},
				{
					"name": "Fear Gaze",
					"entries": [
						"The merrenoloth targets one creature it can see within 60 feet of it. The target must succeed on a {@dc 13} Wisdom saving throw or become {@condition frightened} for 1 minute. The {@condition frightened} target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
					]
				}
			],
			"legendaryGroup": {
				"name": "Merrenoloth",
				"source": "MTF"
			},
			"environment": [
				"coastal"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/merrenoloth.mp3"
			},
			"traitTags": [
				"Magic Resistance",
				"Magic Weapons"
			],
			"senseTags": [
				"B",
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"AB",
				"I",
				"TP"
			],
			"damageTags": [
				"S"
			],
			"spellcastingTags": [
				"I"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"frightened"
			],
			"conditionInflictLegendary": [
				"prone"
			],
			"conditionInflictSpell": [
				"charmed"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Moloch",
			"isNamedCreature": true,
			"source": "MTF",
			"page": 177,
			"size": "L",
			"type": {
				"type": "fiend",
				"tags": [
					"devil"
				]
			},
			"alignment": [
				"L",
				"E"
			],
			"ac": [
				{
					"ac": 19,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 253,
				"formula": "22d10 + 132"
			},
			"speed": {
				"walk": 30
			},
			"str": 26,
			"dex": 19,
			"con": 22,
			"int": 21,
			"wis": 18,
			"cha": 23,
			"save": {
				"dex": "+11",
				"con": "+13",
				"wis": "+11",
				"cha": "+13"
			},
			"skill": {
				"deception": "+13",
				"intimidation": "+13",
				"perception": "+11"
			},
			"senses": [
				"darkvision 120 ft."
			],
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
			"immune": [
				"fire",
				"poison"
			],
			"conditionImmune": [
				"charmed",
				"exhaustion",
				"frightened",
				"poisoned"
			],
			"languages": [
				"all",
				"telepathy 120 ft."
			],
			"cr": "21",
			"spellcasting": [
				{
					"name": "Innate Spellcasting",
					"headerEntries": [
						"Moloch's innate spellcasting ability is Charisma (spell save {@dc 21}). He can innately cast the following spells, requiring no material components:"
					],
					"will": [
						"{@spell alter self} (can become Medium when changing his appearance)",
						"{@spell animate dead}",
						"{@spell burning hands} (as a 7th-level spell)",
						"{@spell confusion}",
						"{@spell detect magic}",
						"{@spell fly}",
						"{@spell geas}",
						"{@spell major image}",
						"{@spell stinking cloud}",
						"{@spell suggestion}",
						"{@spell wall of fire}"
					],
					"daily": {
						"1e": [
							"{@spell flame strike}",
							"{@spell symbol} (stunning only)"
						]
					},
					"ability": "cha"
				}
			],
			"trait": [
				{
					"name": "Legendary Resistance (3/Day)",
					"entries": [
						"If Moloch fails a saving throw, he can choose to succeed instead."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"Moloch has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Magic Weapons",
					"entries": [
						"Moloch's weapon attacks are magical."
					]
				},
				{
					"name": "Regeneration",
					"entries": [
						"Moloch regains 20 hit points at the start of his turn. If he takes radiant damage, this trait doesn't function at the start of his next turn. Moloch dies only if he starts his turn with 0 hit points and doesn't regenerate."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"Moloch makes three attacks: one with his bite, one with his claw, and one with his whip."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 15} to hit, reach 5 ft., one target. {@h}26 ({@damage 4d8 + 8}) piercing damage."
					]
				},
				{
					"name": "Claw",
					"entries": [
						"{@atk mw} {@hit 15} to hit, reach 10 ft., one target. {@h}17 ({@damage 2d8 + 8}) slashing damage."
					]
				},
				{
					"name": "Many-Tailed Whip",
					"entries": [
						"{@atk mw} {@hit 15} to hit, reach 30 ft., one target. {@h}13 ({@damage 2d4 + 8}) slashing damage plus 11 ({@damage 2d10}) lightning damage. If the target is a creature, it must succeed on a {@dc 24} Strength saving throw or be pulled up to 30 feet in a straight line toward Moloch."
					]
				},
				{
					"name": "Breath of Despair {@recharge 5}",
					"entries": [
						"Moloch exhales in a 30-foot cube. Each creature in that area must succeed on a {@dc 21} Wisdom saving throw or take 27 ({@damage 5d10}) psychic damage, drop whatever it is holding, and become {@condition frightened} for 1 minute. While {@condition frightened} in this way, a creature must take the Dash action and move away from Moloch by the safest available route on each of its turns, unless there is nowhere to move, in which case it needn't take the Dash action. If the creature ends its turn in a location where it doesn't have line of sight to Moloch, the creature can repeat the saving throw. On a success, the effect ends."
					]
				},
				{
					"name": "Teleport",
					"entries": [
						"Moloch magically teleports, along with any equipment he is wearing and carrying, up to 120 feet to an unoccupied space he can see."
					]
				}
			],
			"legendary": [
				{
					"name": "Stinking Cloud",
					"entries": [
						"Moloch casts stinking cloud."
					]
				},
				{
					"name": "Teleport",
					"entries": [
						"Moloch uses his Teleport action."
					]
				},
				{
					"name": "Whip",
					"entries": [
						"Moloch makes one attack with his whip."
					]
				}
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/moloch.mp3"
			},
			"traitTags": [
				"Legendary Resistances",
				"Magic Resistance",
				"Magic Weapons",
				"Regeneration"
			],
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Multiattack",
				"Teleport"
			],
			"languageTags": [
				"TP",
				"XX"
			],
			"damageTags": [
				"L",
				"P",
				"S",
				"Y"
			],
			"spellcastingTags": [
				"I"
			],
			"miscTags": [
				"AOE",
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"frightened"
			],
			"conditionInflictSpell": [
				"charmed",
				"frightened",
				"incapacitated",
				"stunned",
				"unconscious"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Molydeus",
			"source": "MTF",
			"page": 134,
			"size": "H",
			"type": {
				"type": "fiend",
				"tags": [
					"demon"
				]
			},
			"alignment": [
				"C",
				"E"
			],
			"ac": [
				{
					"ac": 19,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 216,
				"formula": "16d12 + 112"
			},
			"speed": {
				"walk": 40
			},
			"str": 28,
			"dex": 22,
			"con": 25,
			"int": 21,
			"wis": 24,
			"cha": 24,
			"save": {
				"str": "+16",
				"con": "+14",
				"wis": "+14",
				"cha": "+14"
			},
			"skill": {
				"perception": "+21"
			},
			"senses": [
				"truesight 120 ft."
			],
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
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"blinded",
				"charmed",
				"deafened",
				"frightened",
				"poisoned",
				"stunned"
			],
			"languages": [
				"Abyssal",
				"telepathy 120 ft."
			],
			"cr": "21",
			"spellcasting": [
				{
					"name": "Innate Spellcasting",
					"headerEntries": [
						"The molydeus's innate spellcasting ability is Charisma (spell save {@dc 22}). It can innately cast the following spells, requiring no material components:"
					],
					"will": [
						"{@spell dispel magic}",
						"{@spell polymorph}",
						"{@spell telekinesis}",
						"{@spell teleport}"
					],
					"daily": {
						"1": [
							"{@spell imprisonment}"
						],
						"3": [
							"{@spell lightning bolt}"
						]
					},
					"ability": "cha"
				}
			],
			"trait": [
				{
					"name": "Legendary Resistance (3/Day)",
					"entries": [
						"If the molydeus fails a saving throw, it can choose to succeed instead."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"The molydeus has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Magic Weapons",
					"entries": [
						"The molydeus's weapon attacks are magical."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The molydeus makes three attacks: one with its weapon, one with its wolf bite, and one with its snakebite."
					]
				},
				{
					"name": "Demonic Weapon",
					"entries": [
						"{@atk mw} {@hit 16} to hit, reach 15 ft., one target. {@h}20 ({@damage 2d10 + 9}) slashing damage. If the target has at least one head and the molydeus rolled a 20 on the attack roll, the target is decapitated and dies if it can't survive without that head. A target is immune to this effect if it takes none of the damage, has legendary actions, or is Huge or larger. Such a creature takes an extra {@dice 6d8} slashing damage from the hit."
					]
				},
				{
					"name": "Wolf Bite",
					"entries": [
						"{@atk mw} {@hit 16} to hit, reach 10 ft., one target. {@h}16 ({@damage 2d6 + 9}) piercing damage."
					]
				},
				{
					"name": "Snakebite",
					"entries": [
						"{@atk mw} {@hit 16} to hit, reach 15 ft., one creature. {@h}12 ({@damage 1d6 + 9}) piercing damage, and the target must succeed on a {@dc 22} Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target transforms into a {@creature manes} if this reduces its hit point maximum to 0. This transformation can be ended only by a {@spell wish} spell."
					]
				}
			],
			"legendary": [
				{
					"name": "Attack",
					"entries": [
						"The molydeus makes one attack, either with its demonic weapon or with its snakebite."
					]
				},
				{
					"name": "Move",
					"entries": [
						"The molydeus moves without provoking opportunity attacks."
					]
				},
				{
					"name": "Cast a Spell",
					"entries": [
						"The molydeus casts one spell from its Innate Spellcasting trait."
					]
				}
			],
			"variant": [
				{
					"type": "variant",
					"name": "Demon Summoning",
					"entries": [
						"You can give a molydeus the ability to summon other demons.",
						{
							"name": "Summon Demon (1/Day)",
							"type": "entries",
							"entries": [
								"As an action, the molydeus has a {@chance 50|50 percent} chance of summoning its choice of {@dice 1d6} babaus, {@dice 1d4} {@creature chasme||chasmes}, or one {@creature marilith}. A summoned demon appears in an unoccupied space within 60 feet of the molydeus, acts as an ally of the molydeus, and can't summon other demons. It remains for 1 minute, until it or the molydeus dies, or until the molydeus dismisses it as an action."
							]
						}
					]
				}
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/molydeus.mp3"
			},
			"traitTags": [
				"Legendary Resistances",
				"Magic Resistance",
				"Magic Weapons"
			],
			"senseTags": [
				"U"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"AB",
				"TP"
			],
			"damageTags": [
				"P",
				"S"
			],
			"spellcastingTags": [
				"I"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"hasFluff": true
		},
		{
			"name": "Nabassu",
			"source": "MTF",
			"page": 135,
			"size": "M",
			"type": {
				"type": "fiend",
				"tags": [
					"demon"
				]
			},
			"alignment": [
				"C",
				"E"
			],
			"ac": [
				{
					"ac": 18,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 190,
				"formula": "20d8 + 100"
			},
			"speed": {
				"walk": 40,
				"fly": 60
			},
			"str": 22,
			"dex": 14,
			"con": 21,
			"int": 14,
			"wis": 15,
			"cha": 17,
			"save": {
				"str": "+11",
				"dex": "+7"
			},
			"skill": {
				"perception": "+7"
			},
			"senses": [
				"darkvision 60 ft."
			],
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
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"poisoned"
			],
			"languages": [
				"Abyssal",
				"telepathy 120 ft."
			],
			"cr": "15",
			"trait": [
				{
					"name": "Demonic Shadows",
					"entries": [
						"The nabassu darkens the area around its body in a 10-foot radius. Nonmagical light can't illuminate this area of dim light."
					]
				},
				{
					"name": "Devour Soul",
					"entries": [
						"A nabassu can eat the soul of a creature it has killed within the last hour, provided that creature is neither a construct nor an undead. The devouring requires the nabassu to be within 5 feet of the corpse for at least 10 minutes, after which it gains a number of Hit Dice ({@dice d8}s) equal to half the creature's number of Hit Dice. Roll those dice, and increase the nabassu's hit points by the numbers rolled. For every 4 Hit Dice the nabassu gains in this way, its attacks deal an extra 3 ({@dice 1d6}) damage on a hit. The nabassu retains these benefits for 6 days. A creature devoured by a nabassu can be restored to life only by a {@spell wish} spell."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"The nabassu has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Magic Weapons",
					"entries": [
						"The nabassu's weapon attacks are magical."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The nabassu uses its Soul-Stealing Gaze and makes two attacks: one with its claws and one with its bite."
					]
				},
				{
					"name": "Claws",
					"entries": [
						"{@atk mw} {@hit 11} to hit, reach 5 ft., one target. {@h}17 ({@damage 2d10 + 6}) slashing damage."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 11} to hit, reach 5 ft., one target. {@h}32 ({@damage 4d12 + 6}) piercing damage."
					]
				},
				{
					"name": "Soul-Stealing Gaze",
					"entries": [
						"The nabassu targets one creature it can see within 30 feet of it. If the target can see the nabassu and isn't a construct or an undead, it must succeed on a {@dc 16} Charisma saving throw or reduce its hit point maximum by 13 ({@dice 2d12}) damage and give the nabassu an equal number of temporary hit points. This reduction lasts until the target finishes a short or long rest. The target dies if its hit point maximum is reduced to 0, and if the target is a humanoid, it immediately rises as a {@creature ghoul} under the nabassu's control."
					]
				}
			],
			"environment": [
				"swamp",
				"underdark",
				"urban"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/nabassu.mp3"
			},
			"traitTags": [
				"Magic Resistance",
				"Magic Weapons"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"AB",
				"TP"
			],
			"damageTags": [
				"P",
				"S"
			],
			"miscTags": [
				"AOE",
				"MW"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Nagpa",
			"source": "MTF",
			"page": 215,
			"size": "M",
			"type": {
				"type": "humanoid",
				"tags": [
					"nagpa"
				]
			},
			"alignment": [
				"L",
				"E"
			],
			"ac": [
				{
					"ac": 19,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 187,
				"formula": "34d8 + 34"
			},
			"speed": {
				"walk": 30
			},
			"str": 9,
			"dex": 15,
			"con": 12,
			"int": 23,
			"wis": 18,
			"cha": 21,
			"save": {
				"int": "+12",
				"wis": "+10",
				"cha": "+11"
			},
			"skill": {
				"arcana": "+12",
				"deception": "+11",
				"history": "+12",
				"insight": "+10",
				"perception": "+10"
			},
			"senses": [
				"truesight 120 ft."
			],
			"passive": 20,
			"languages": [
				"Common plus up to five other languages"
			],
			"cr": "17",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The nagpa is a 15th-level spellcaster. Its spellcasting ability is Intelligence (spell save {@dc 20}, {@hit 12} to hit with spell attacks). A nagpa has the following wizard spells prepared:"
					],
					"spells": {
						"0": {
							"spells": [
								"{@spell chill touch}",
								"{@spell fire bolt}",
								"{@spell mage hand}",
								"{@spell message}",
								"{@spell minor illusion}"
							]
						},
						"1": {
							"slots": 4,
							"spells": [
								"{@spell charm person}",
								"{@spell detect magic}",
								"{@spell protection from evil and good}",
								"{@spell witch bolt}"
							]
						},
						"2": {
							"slots": 3,
							"spells": [
								"{@spell hold person}",
								"{@spell ray of enfeeblement}",
								"{@spell suggestion}"
							]
						},
						"3": {
							"slots": 3,
							"spells": [
								"{@spell counterspell}",
								"{@spell fireball}",
								"{@spell fly}"
							]
						},
						"4": {
							"slots": 3,
							"spells": [
								"{@spell confusion}",
								"{@spell hallucinatory terrain}",
								"{@spell wall of fire}"
							]
						},
						"5": {
							"slots": 2,
							"spells": [
								"{@spell dominate person}",
								"{@spell dream}",
								"{@spell geas}"
							]
						},
						"6": {
							"slots": 1,
							"spells": [
								"{@spell circle of death}",
								"{@spell disintegrate}"
							]
						},
						"7": {
							"slots": 1,
							"spells": [
								"{@spell etherealness}",
								"{@spell prismatic spray}"
							]
						},
						"8": {
							"slots": 1,
							"spells": [
								"{@spell feeblemind}"
							]
						}
					},
					"ability": "int"
				}
			],
			"trait": [
				{
					"name": "Corruption",
					"entries": [
						"As a bonus action, the nagpa targets one creature it can see within 90 feet of it. The target must make a {@dc 20} Charisma saving throw. An evil creature makes the save with disadvantage. On a failed save, the target is {@condition charmed} by the nagpa until the start of the nagpa's next turn. On a successful save, the target becomes immune to the nagpa's Corruption for the next 24 hours."
					]
				},
				{
					"name": "Paralysis {@recharge}",
					"entries": [
						"As a bonus action, the nagpa forces each creature within 30 feet of it to succeed on a {@dc 20} Wisdom saving throw or be {@condition paralyzed} for 1 minute. A {@condition paralyzed} target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Undead and constructs are immune to this effect."
					]
				}
			],
			"action": [
				{
					"name": "Staff",
					"entries": [
						"{@atk mw} {@hit 8} to hit, reach 5 ft., one target. {@h}9 ({@damage 2d6 + 2}) bludgeoning damage."
					]
				}
			],
			"environment": [
				"coastal",
				"desert",
				"forest",
				"swamp",
				"underdark",
				"urban"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/nagpa.mp3"
			},
			"senseTags": [
				"U"
			],
			"languageTags": [
				"C",
				"X"
			],
			"damageTags": [
				"B"
			],
			"spellcastingTags": [
				"CW"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"charmed",
				"paralyzed"
			],
			"conditionInflictSpell": [
				"blinded",
				"charmed",
				"paralyzed",
				"petrified",
				"restrained"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Narzugon",
			"source": "MTF",
			"page": 167,
			"otherSources": [
				{
					"source": "BGDIA"
				}
			],
			"size": "M",
			"type": {
				"type": "fiend",
				"tags": [
					"devil"
				]
			},
			"alignment": [
				"L",
				"E"
			],
			"ac": [
				{
					"ac": 20,
					"from": [
						"{@item plate armor|phb}",
						"{@item shield|phb}"
					]
				}
			],
			"hp": {
				"average": 112,
				"formula": "15d8 + 45"
			},
			"speed": {
				"walk": 30
			},
			"str": 20,
			"dex": 10,
			"con": 17,
			"int": 16,
			"wis": 14,
			"cha": 19,
			"save": {
				"dex": "+5",
				"con": "+8",
				"cha": "+9"
			},
			"skill": {
				"perception": "+7"
			},
			"senses": [
				"darkvision 120 ft."
			],
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
			"immune": [
				"fire",
				"poison"
			],
			"conditionImmune": [
				"charmed",
				"frightened",
				"poisoned"
			],
			"languages": [
				"Common",
				"Infernal",
				"telepathy 120 ft."
			],
			"cr": "13",
			"trait": [
				{
					"name": "Diabolical Sense",
					"entries": [
						"The narzugon has advantage on Wisdom (Perception) checks made to perceive good-aligned creatures."
					]
				},
				{
					"name": "Infernal Tack",
					"entries": [
						"The narzugon wears spurs that are part of infernal tack, which allow it to summon its {@creature nightmare} companion."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"The narzugon has advantage on saving throws against spells and other magical effects."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The narzugon uses its Infernal Command or Terrifying Command. It also makes three hellfire lance attacks."
					]
				},
				{
					"name": "Hellfire Lance",
					"entries": [
						"{@atk mw} {@hit 10} to hit, reach 10 ft., one target. {@h}11 ({@damage 1d12 + 5}) piercing damage plus 16 ({@damage 3d10}) fire damage. If this damage kills a creature, the creature's soul rises from the River Styx as a lemure in Avernus in {@dice 1d4} hours.",
						"If the creature isn't revived before then, only a {@spell wish} spell or killing the lemure and casting true resurrection on the creature's original body can restore it to life. Constructs and devils are immune to this effect."
					]
				},
				{
					"name": "Infernal Command",
					"entries": [
						"Each ally of the narzugon within 60 feet of it can't be {@condition charmed} or {@condition frightened} until the end of the narzugon's next turn."
					]
				},
				{
					"name": "Terrifying Command",
					"entries": [
						"Each creature that isn't a fiend within 60 feet of the narzugon that can hear it must succeed on a {@dc 17} Charisma saving throw or become {@condition frightened} of it for 1 minute.",
						"A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. A creature that makes a successful saving throw is immune to this narzugon's Terrifying Command for 24 hours."
					]
				},
				{
					"name": "Healing (1/Day)",
					"entries": [
						"The narzugon, or one creature it touches, regains up to 100 hit points."
					]
				}
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/narzugon.mp3"
			},
			"traitTags": [
				"Magic Resistance"
			],
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C",
				"I",
				"TP"
			],
			"damageTags": [
				"F",
				"P"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"frightened"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Nightwalker",
			"source": "MTF",
			"page": 216,
			"size": "H",
			"type": "undead",
			"alignment": [
				"C",
				"E"
			],
			"ac": [
				14
			],
			"hp": {
				"average": 297,
				"formula": "22d12 + 154"
			},
			"speed": {
				"walk": 40,
				"fly": 40
			},
			"str": 22,
			"dex": 19,
			"con": 24,
			"int": 6,
			"wis": 9,
			"cha": 8,
			"save": {
				"con": "+13"
			},
			"senses": [
				"darkvision 120 ft."
			],
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
			"immune": [
				"necrotic",
				"poison"
			],
			"conditionImmune": [
				"exhaustion",
				"frightened",
				"grappled",
				"paralyzed",
				"petrified",
				"poisoned",
				"prone",
				"restrained"
			],
			"cr": "20",
			"trait": [
				{
					"name": "Annihilating Aura",
					"entries": [
						"Any creature that starts its turn within 30 feet of the nightwalker must succeed on a {@dc 21} Constitution saving throw or take 14 ({@damage 4d6}) necrotic damage and grant the nightwalker advantage on attack rolls against it until the start of the creature's next turn. Undead are immune to this aura."
					]
				},
				{
					"name": "Life Eater",
					"entries": [
						"A creature reduced to 0 hit points from damage dealt by the nightwalker dies and can't be revived by any means short of a {@spell wish} spell."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The nightwalker uses Enervating Focus twice, or it uses Enervating Focus and Finger of Doom, if available."
					]
				},
				{
					"name": "Enervating Focus",
					"entries": [
						"{@atk mw} {@hit 12} to hit, reach 15 ft., one target. {@h}28 ({@damage 5d8 + 6}) necrotic damage. The target must succeed on a {@dc 21} Constitution saving throw or its hit point maximum is reduced by an amount equal to the necrotic damage taken. This reduction lasts until the target finishes a long rest."
					]
				},
				{
					"name": "Finger of Doom {@recharge}",
					"entries": [
						"The nightwalker points at one creature it can see within 300 feet of it. The target must succeed on a {@dc 21} Wisdom saving throw or take 26 ({@damage 4d12}) necrotic damage and become {@condition frightened} until the end of the nightwalker's next turn. While {@condition frightened} in this way, the creature is also {@condition paralyzed}. If a target's saving throw is successful, the target is immune to the nightwalker's Finger of Doom for the next 24 hours."
					]
				}
			],
			"environment": [
				"arctic",
				"desert",
				"swamp",
				"underdark"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/nightwalker.mp3"
			},
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Multiattack"
			],
			"damageTags": [
				"N"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"frightened",
				"paralyzed"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Nupperibo",
			"source": "MTF",
			"page": 168,
			"otherSources": [
				{
					"source": "BGDIA"
				}
			],
			"size": "M",
			"type": {
				"type": "fiend",
				"tags": [
					"devil"
				]
			},
			"alignment": [
				"L",
				"E"
			],
			"ac": [
				{
					"ac": 13,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 11,
				"formula": "2d8 + 2"
			},
			"speed": {
				"walk": 20
			},
			"str": 16,
			"dex": 11,
			"con": 13,
			"int": 3,
			"wis": 8,
			"cha": 1,
			"skill": {
				"perception": "+1"
			},
			"senses": [
				"blindsight 10 ft. (blind beyond this radius)"
			],
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
			"immune": [
				"fire",
				"poison"
			],
			"conditionImmune": [
				"blinded",
				"charmed",
				"frightened",
				"poisoned"
			],
			"languages": [
				"understands Infernal but can't speak"
			],
			"cr": "1/2",
			"trait": [
				{
					"name": "Cloud of Vermin",
					"entries": [
						"Any creature, other than a devil, that starts its turn within 20 feet of the nupperibo must make a {@dc 11} Constitution saving throw. A creature within the areas of two or more nupperibos makes the saving throw with disadvantage. On a failure, the creature takes 2 ({@damage 1d4}) piercing damage."
					]
				},
				{
					"name": "Hunger-Driven",
					"entries": [
						"In the Nine Hells, the nupperibos can flawlessly track any creature that has taken damage from any nupperibo's Cloud of Vermin within the previous 24 hours."
					]
				}
			],
			"action": [
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 5} to hit, reach 5 ft., one target. {@h}6 ({@damage 1d6 + 3}) piercing damage."
					]
				}
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/nupperibo.mp3"
			},
			"senseTags": [
				"B"
			],
			"languageTags": [
				"CS",
				"I"
			],
			"damageTags": [
				"P"
			],
			"miscTags": [
				"MW"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Oaken Bolter",
			"source": "MTF",
			"page": 126,
			"size": "M",
			"type": "construct",
			"alignment": [
				"U"
			],
			"ac": [
				{
					"ac": 16,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 58,
				"formula": "9d8 + 18"
			},
			"speed": {
				"walk": 30
			},
			"str": 12,
			"dex": 18,
			"con": 15,
			"int": 3,
			"wis": 10,
			"cha": 1,
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 10,
			"immune": [
				"poison",
				{
					"immune": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks that aren't adamantine",
					"cond": true
				}
			],
			"conditionImmune": [
				"charmed",
				"exhaustion",
				"frightened",
				"paralyzed",
				"petrified",
				"poisoned"
			],
			"languages": [
				"understands one language of its creator but can't speak"
			],
			"cr": "5",
			"trait": [
				{
					"name": "Magic Resistance",
					"entries": [
						"The oaken bolter has advantage on saving throws against spells and other magical effects."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The oaken bolter makes two lancing bolt attacks or one lancing bolt attack and one harpoon attack."
					]
				},
				{
					"name": "Lancing Bolt",
					"entries": [
						"{@atk mw,rw} {@hit 7} to hit, reach 5 ft. or range 100/400 ft., one target. {@h}15 ({@damage 2d10 + 4}) piercing damage."
					]
				},
				{
					"name": "Harpoon",
					"entries": [
						"{@atk rw} {@hit 7} to hit, range 50/200 ft., one target. {@h}9 ({@damage 1d10 + 4}) piercing damage, and the target is {@condition grappled} (escape {@dc 12}). While {@condition grappled} in this way, a creature's speed isn't reduced, but it can move only in directions that bring it closer to the oaken bolter. A creature takes 5 ({@damage 1d10}) slashing damage if it escapes from the grapple or if it tries and fails. As a bonus action, the oaken bolter can pull a creature {@condition grappled} by it 20 feet closer. The oaken bolter can grapple only one creature at a time."
					]
				},
				{
					"name": "Explosive Bolt {@recharge 5}",
					"entries": [
						"The oaken bolter launches an explosive charge at a point within 120 feet. Each creature within 20 feet of that point must make a {@dc 15} Dexterity saving throw, taking 17 ({@damage 5d6}) fire damage on a failed save, or half as much damage on a successful one."
					]
				}
			],
			"environment": [
				"forest",
				"grassland",
				"hill",
				"mountain"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/oaken-bolter.mp3"
			},
			"traitTags": [
				"Magic Resistance"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"CS"
			],
			"damageTags": [
				"F",
				"P",
				"S"
			],
			"miscTags": [
				"MW",
				"RW"
			],
			"conditionInflict": [
				"grappled"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Oblex Spawn",
			"source": "MTF",
			"page": 217,
			"size": "T",
			"type": "ooze",
			"alignment": [
				"L",
				"E"
			],
			"ac": [
				13
			],
			"hp": {
				"average": 18,
				"formula": "4d4 + 8"
			},
			"speed": {
				"walk": 20
			},
			"str": 8,
			"dex": 16,
			"con": 15,
			"int": 14,
			"wis": 11,
			"cha": 10,
			"save": {
				"int": "+4",
				"cha": "+2"
			},
			"senses": [
				"blindsight 60 ft. (blind beyond this distance)"
			],
			"passive": 12,
			"conditionImmune": [
				"blinded",
				"charmed",
				"deafened",
				"exhaustion",
				"prone"
			],
			"cr": "1/4",
			"trait": [
				{
					"name": "Amorphous",
					"entries": [
						"The oblex can move through a space as narrow as 1 inch wide without squeezing."
					]
				},
				{
					"name": "Aversion to Fire",
					"entries": [
						"If the oblex takes fire damage, it has disadvantage on attack rolls and ability checks until the end of its next turn."
					]
				}
			],
			"action": [
				{
					"name": "Pseudopod",
					"entries": [
						"{@atk mw} {@hit 5} to hit, reach 5 ft., one target. {@h}5 ({@damage 1d4 + 3}) bludgeoning damage plus 2 ({@damage 1d4}) psychic damage."
					]
				}
			],
			"environment": [
				"swamp",
				"underdark",
				"urban"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/oblex-spawn.mp3"
			},
			"traitTags": [
				"Amorphous"
			],
			"senseTags": [
				"B"
			],
			"damageTags": [
				"B",
				"Y"
			],
			"miscTags": [
				"MW"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Ogre Battering Ram",
			"source": "MTF",
			"page": 220,
			"size": "L",
			"type": "giant",
			"alignment": [
				"C",
				"E"
			],
			"ac": [
				{
					"ac": 14,
					"from": [
						"{@item ring mail|phb}"
					]
				}
			],
			"hp": {
				"average": 59,
				"formula": "7d10 + 21"
			},
			"speed": {
				"walk": 40
			},
			"str": 19,
			"dex": 8,
			"con": 16,
			"int": 5,
			"wis": 7,
			"cha": 7,
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 8,
			"languages": [
				"Common",
				"Giant"
			],
			"cr": "4",
			"trait": [
				{
					"name": "Siege Monster",
					"entries": [
						"The ogre deals double damage to objects and structures."
					]
				}
			],
			"action": [
				{
					"name": "Bash",
					"entries": [
						"{@atk mw} {@hit 6} to hit, reach 5 ft., one target. {@h}15 ({@damage 2d10 + 4}) bludgeoning damage, and the ogre can push the target 5 feet away if the target is Huge or smaller."
					]
				},
				{
					"name": "Block the Path",
					"entries": [
						"Until the start of the ogre's next turn, attack rolls against the ogre have disadvantage, it has advantage on the attack roll it makes for an opportunity attack, and that attack deals an extra 16 ({@damage 3d10}) bludgeoning damage on a hit. Also, each enemy that tries to move out of the ogre's reach without teleporting must succeed on a {@dc 14} Strength saving throw or have its speed reduced to 0 until the start of the ogre's next turn."
					]
				}
			],
			"environment": [
				"grassland",
				"hill",
				"mountain"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/ogre-battering-ram.mp3"
			},
			"traitTags": [
				"Siege Monster"
			],
			"senseTags": [
				"D"
			],
			"languageTags": [
				"C",
				"GI"
			],
			"damageTags": [
				"B"
			],
			"miscTags": [
				"MW"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Ogre Bolt Launcher",
			"source": "MTF",
			"page": 220,
			"size": "L",
			"type": "giant",
			"alignment": [
				"C",
				"E"
			],
			"ac": [
				{
					"ac": 13,
					"from": [
						"{@item hide armor|phb}"
					]
				}
			],
			"hp": {
				"average": 59,
				"formula": "7d10 + 21"
			},
			"speed": {
				"walk": 40
			},
			"str": 19,
			"dex": 12,
			"con": 16,
			"int": 5,
			"wis": 7,
			"cha": 7,
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 8,
			"languages": [
				"Common",
				"Giant"
			],
			"cr": "2",
			"action": [
				{
					"name": "Fist",
					"entries": [
						"{@atk mw} {@hit 6} to hit, reach 5 ft., one target. {@h}9 ({@damage 2d4 + 4}) bludgeoning damage."
					]
				},
				{
					"name": "Bolt Launcher",
					"entries": [
						"{@atk rw} {@hit 3} to hit, range 120/480 ft., one target. {@h}17 ({@damage 3d10 + 1}) piercing damage."
					]
				}
			],
			"environment": [
				"grassland",
				"hill",
				"mountain"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/ogre-bolt-launcher.mp3"
			},
			"senseTags": [
				"D"
			],
			"languageTags": [
				"C",
				"GI"
			],
			"damageTags": [
				"B",
				"P"
			],
			"miscTags": [
				"MW",
				"RW"
			],
			"hasFluff": true
		},
		{
			"name": "Ogre Chain Brute",
			"source": "MTF",
			"page": 221,
			"size": "L",
			"type": "giant",
			"alignment": [
				"C",
				"E"
			],
			"ac": [
				{
					"ac": 11,
					"from": [
						"{@item hide armor|phb}"
					]
				}
			],
			"hp": {
				"average": 59,
				"formula": "7d10 + 21"
			},
			"speed": {
				"walk": 40
			},
			"str": 19,
			"dex": 8,
			"con": 16,
			"int": 5,
			"wis": 7,
			"cha": 7,
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 8,
			"languages": [
				"Common",
				"Giant"
			],
			"cr": "3",
			"action": [
				{
					"name": "Fist",
					"entries": [
						"{@atk mw} {@hit 6} to hit, reach 5 ft., one target. {@h}9 ({@damage 2d4 + 4}) bludgeoning damage."
					]
				},
				{
					"name": "Chain Sweep",
					"entries": [
						"The ogre swings its chain, and every creature within 10 feet of it must make a {@dc 14} Dexterity saving throw. On a failed saving throw, a creature takes 8 ({@damage 1d8 + 4}) bludgeoning damage and is knocked {@condition prone}. On a successful save, the creature takes half as much damage and isn't knocked {@condition prone}."
					]
				},
				{
					"name": "Chain Smash {@recharge}",
					"entries": [
						"{@atk mw} {@hit 6} to hit, reach 10 ft., one target. {@h}13 ({@damage 2d8 + 4}) bludgeoning damage, and the target must make a {@dc 14} Constitution saving throw. On a failure the target is {@condition unconscious} for 1 minute. The {@condition unconscious} target repeats the saving throw if it takes damage and at the end of each of its turns, ending the effect on itself on a success."
					]
				}
			],
			"environment": [
				"grassland",
				"hill",
				"mountain"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/ogre-chain-brute.mp3"
			},
			"senseTags": [
				"D"
			],
			"languageTags": [
				"C",
				"GI"
			],
			"damageTags": [
				"B"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"prone",
				"unconscious"
			],
			"hasFluff": true
		},
		{
			"name": "Ogre Howdah",
			"source": "MTF",
			"page": 221,
			"size": "L",
			"type": "giant",
			"alignment": [
				"C",
				"E"
			],
			"ac": [
				{
					"ac": 13,
					"from": [
						"{@item breastplate|phb}"
					]
				}
			],
			"hp": {
				"average": 59,
				"formula": "7d10 + 21"
			},
			"speed": {
				"walk": 40
			},
			"str": 19,
			"dex": 8,
			"con": 16,
			"int": 5,
			"wis": 7,
			"cha": 7,
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 8,
			"languages": [
				"Common",
				"Giant"
			],
			"cr": "2",
			"trait": [
				{
					"name": "Howdah",
					"entries": [
						"The ogre carries a compact fort on its back. Up to four Small creatures can ride in the fort without squeezing. To make a melee attack against a target within 5 feet of the ogre, they must use spears or weapons with reach. Creatures in the fort have three-quarters cover against attacks and effects from outside it. If the ogre dies, creatures in the fort are placed in unoccupied spaces within 5 feet of the ogre."
					]
				}
			],
			"action": [
				{
					"name": "Mace",
					"entries": [
						"{@atk mw} {@hit 6} to hit, reach 5 ft., one target. {@h}11 ({@damage 2d6 + 4}) bludgeoning damage."
					]
				}
			],
			"environment": [
				"grassland",
				"hill"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/ogre-howdah.mp3"
			},
			"senseTags": [
				"D"
			],
			"languageTags": [
				"C",
				"GI"
			],
			"damageTags": [
				"B"
			],
			"miscTags": [
				"MW"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Oinoloth",
			"source": "MTF",
			"page": 251,
			"size": "M",
			"type": {
				"type": "fiend",
				"tags": [
					"yugoloth"
				]
			},
			"alignment": [
				"N",
				"E"
			],
			"ac": [
				{
					"ac": 17,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 126,
				"formula": "12d10 + 60"
			},
			"speed": {
				"walk": 40
			},
			"str": 19,
			"dex": 17,
			"con": 18,
			"int": 17,
			"wis": 16,
			"cha": 19,
			"save": {
				"con": "+8",
				"wis": "+7"
			},
			"skill": {
				"deception": "+8",
				"intimidation": "+8",
				"perception": "+7"
			},
			"senses": [
				"blindsight 60 ft.",
				"darkvision 60 ft."
			],
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
			"immune": [
				"acid",
				"poison"
			],
			"conditionImmune": [
				"poisoned"
			],
			"languages": [
				"Abyssal",
				"Infernal",
				"telepathy 60 ft."
			],
			"cr": "12",
			"spellcasting": [
				{
					"name": "Innate Spellcasting",
					"headerEntries": [
						"The oinoloth's innate spellcasting ability is Charisma (spell save {@dc 16}). It can innately cast the following spells, requiring no material components:"
					],
					"will": [
						"{@spell darkness}",
						"{@spell detect magic}",
						"{@spell dispel magic}",
						"{@spell invisibility} (self only)"
					],
					"daily": {
						"1e": [
							"{@spell feeblemind}",
							"{@spell globe of invulnerability}",
							"{@spell wall of fire}",
							"{@spell wall of ice}"
						]
					},
					"ability": "cha"
				}
			],
			"trait": [
				{
					"name": "Bringer of Plagues {@recharge 5}",
					"entries": [
						"As a bonus action, the oinoloth blights the area within 30 feet of it. The blight lasts for 24 hours. While blighted, all normal plants in the area wither and die, and the number of hit points restored by a spell to a creature in that area is halved.",
						"Furthermore, when a creature moves into the blighted area or starts its turn there, that creature must make a {@dc 16} Constitution saving throw. On a successful save, the creature is immune to the oinoloth's Bringer of Plagues for the next 24 hours. On a failed save, the creature takes 14 ({@damage 4d6}) necrotic damage and is {@condition poisoned}.",
						"The {@condition poisoned} creature can't regain hit points. After every 24 hours that elapse, the {@condition poisoned} creature can repeat the saving throw. On a failed save, the creature's hit point maximum is reduced by 5 ({@dice 1d10}). This reduction lasts until the poison ends, and the target dies if its hit point maximum is reduced to 0. The poison ends after the creature successfully saves against it three times."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"The oinoloth has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Magic Weapons",
					"entries": [
						"The oinoloth's weapon attacks are magical."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The oinoloth uses its Transfixing Gaze and makes two claw attacks."
					]
				},
				{
					"name": "Claw",
					"entries": [
						"{@atk mw} {@hit 8} to hit, reach 5 ft., one target. {@h}14 ({@damage 3d6 + 4}) slashing damage plus 22 ({@damage 4d10}) necrotic damage."
					]
				},
				{
					"name": "Corrupted Healing {@recharge}",
					"entries": [
						"The oinoloth touches one willing creature within 5 feet of it. The target regains all its hit points. In addition, the oinoloth can end one disease on the target or remove one of the following conditions from it: {@condition blinded}, {@condition deafened}, {@condition paralyzed}, or {@condition poisoned}. The target then gains 1 level of {@condition exhaustion}, and its hit point maximum is reduced by 7 ({@dice 2d6}). This reduction can be removed only by a {@spell wish} spell or by casting {@spell greater restoration} on the target three times within the same hour. The target dies if its hit point maximum is reduced to 0."
					]
				},
				{
					"name": "Teleport",
					"entries": [
						"The oinoloth magically teleports, along with any equipment it is wearing or carrying, up to 60 feet to an unoccupied space it can see."
					]
				},
				{
					"name": "Transfixing Gaze",
					"entries": [
						"The oinoloth targets one creature it can see within 30 feet of it. The target must succeed on a {@dc 16} Wisdom saving throw against this magic or be {@condition charmed} until the end of the oinoloth's next turn. While {@condition charmed} in this way, the target is {@condition restrained}. If the target's saving throw is successful, the target is immune to the oinoloth's gaze for the next 24 hours."
					]
				}
			],
			"environment": [
				"desert",
				"underdark"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/oinoloth.mp3"
			},
			"traitTags": [
				"Magic Resistance",
				"Magic Weapons"
			],
			"senseTags": [
				"B",
				"D"
			],
			"actionTags": [
				"Multiattack",
				"Teleport"
			],
			"languageTags": [
				"AB",
				"I",
				"TP"
			],
			"damageTags": [
				"N",
				"S"
			],
			"spellcastingTags": [
				"I"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"charmed",
				"exhaustion",
				"poisoned",
				"restrained"
			],
			"conditionInflictSpell": [
				"invisible"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Orcus",
			"isNamedCreature": true,
			"source": "MTF",
			"page": 153,
			"otherSources": [
				{
					"source": "OotA",
					"page": 245
				}
			],
			"size": "H",
			"type": {
				"type": "fiend",
				"tags": [
					"demon"
				]
			},
			"alignment": [
				"C",
				"E"
			],
			"ac": [
				{
					"ac": 17,
					"from": [
						"natural armor"
					]
				},
				{
					"ac": 20,
					"condition": "with the {@item Wand of Orcus}"
				}
			],
			"hp": {
				"average": 405,
				"formula": "30d12 + 210"
			},
			"speed": {
				"walk": 40,
				"fly": 40
			},
			"str": 27,
			"dex": 14,
			"con": 25,
			"int": 20,
			"wis": 20,
			"cha": 25,
			"save": {
				"dex": "+10",
				"con": "+15",
				"wis": "+13"
			},
			"skill": {
				"arcana": "+13",
				"perception": "+13"
			},
			"senses": [
				"truesight 120 ft."
			],
			"passive": 22,
			"resist": [
				"cold",
				"fire",
				"lightning"
			],
			"immune": [
				"necrotic",
				"poison",
				{
					"immune": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks",
					"cond": true
				}
			],
			"conditionImmune": [
				"charmed",
				"exhaustion",
				"frightened",
				"poisoned"
			],
			"languages": [
				"all",
				"telepathy 120 ft."
			],
			"cr": "26",
			"spellcasting": [
				{
					"name": "Innate Spellcasting",
					"headerEntries": [
						"Orcus's spellcasting ability is Charisma (spell save {@dc 23}, {@hit 15} to hit with spell attacks). He can innately cast the following spells, requiring no material components:"
					],
					"will": [
						"{@spell chill touch} (17th level)",
						"{@spell detect magic}"
					],
					"daily": {
						"1": [
							"{@spell time stop}"
						],
						"3e": [
							"{@spell create undead}",
							"{@spell dispel magic}"
						]
					},
					"ability": "cha"
				}
			],
			"trait": [
				{
					"name": "Wand of Orcus",
					"entries": [
						"The wand has 7 charges, and any of its properties that require a saving throw have a save DC of 18. While holding it, Orcus can use an action to cast {@spell animate dead}, {@spell blight}, or {@spell speak with dead}. Alternatively, he can expend 1 or more of the wand's charges to cast one of the following spells from it: {@spell circle of death} (1 charge), {@spell finger of death} (1 charge), or {@spell power word kill} (2 charges). The wand regains {@dice 1d4 + 3} charges daily at dawn.",
						"While holding the wand, Orcus can use an action to conjure undead creatures whose combined average hit points don't exceed 500. These undead magically rise up from the ground or otherwise form in unoccupied spaces within 300 feet of Orcus and obey his commands until they are destroyed or until he dismisses them as an action. Once this property of the wand is used, the property can't be used again until the next dawn."
					]
				},
				{
					"name": "Legendary Resistance (3/Day)",
					"entries": [
						"If Orcus fails a saving throw, he can choose to succeed instead."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"Orcus has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Magic Weapons",
					"entries": [
						"Orcus's weapon attacks are magical."
					]
				},
				{
					"name": "Master of Undeath",
					"entries": [
						"When Orcus casts {@spell animate dead} or {@spell create undead}, he chooses the level at which the spell is cast, and the creatures created by the spells remain under his control indefinitely. Additionally, he can cast create undead even when it isn't night."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"Orcus makes two Wand of Orcus attacks."
					]
				},
				{
					"name": "Wand of Orcus",
					"entries": [
						"{@atk mw} {@hit 19} to hit, reach 10 ft., one target. {@h}21 ({@damage 3d8 + 8}) bludgeoning damage plus 13 ({@damage 2d12}) necrotic damage."
					]
				},
				{
					"name": "Tail",
					"entries": [
						"{@atk mw} {@hit 16} to hit, reach 10 ft., one target. {@h}21 ({@damage 3d8 + 8}) piercing damage plus 9 ({@damage 2d8}) poison damage."
					]
				}
			],
			"legendary": [
				{
					"name": "Tail",
					"entries": [
						"Orcus makes one tail attack."
					]
				},
				{
					"name": "A Taste of Undeath",
					"entries": [
						"Orcus casts chill touch (17th level)."
					]
				},
				{
					"name": "Creeping Death (Costs 2 Actions)",
					"entries": [
						"Orcus chooses a point on the ground that he can see within 100 feet of him. A cylinder of swirling necrotic energy 60 feet tall and with a 10-foot radius rises from that point and lasts until the end of Orcus's next turn. Creatures in that area have vulnerability to necrotic damage."
					]
				}
			],
			"legendaryGroup": {
				"name": "Orcus",
				"source": "MTF"
			},
			"hasToken": true,
			"traitTags": [
				"Legendary Resistances",
				"Magic Resistance",
				"Magic Weapons"
			],
			"senseTags": [
				"U"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"TP",
				"XX"
			],
			"damageTags": [
				"B",
				"I",
				"N",
				"P"
			],
			"spellcastingTags": [
				"I"
			],
			"miscTags": [
				"AOE",
				"MW",
				"RCH"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Orthon",
			"source": "MTF",
			"page": 169,
			"otherSources": [
				{
					"source": "BGDIA"
				}
			],
			"size": "L",
			"type": {
				"type": "fiend",
				"tags": [
					"devil"
				]
			},
			"alignment": [
				"L",
				"E"
			],
			"ac": [
				{
					"ac": 17,
					"from": [
						"{@item half plate armor|phb}"
					]
				}
			],
			"hp": {
				"average": 105,
				"formula": "10d10 + 50"
			},
			"speed": {
				"walk": 30,
				"climb": 30
			},
			"str": 22,
			"dex": 16,
			"con": 21,
			"int": 15,
			"wis": 15,
			"cha": 16,
			"save": {
				"dex": "+7",
				"con": "+9",
				"wis": "+6"
			},
			"skill": {
				"perception": "+10",
				"stealth": "+11",
				"survival": "+10"
			},
			"senses": [
				"darkvision 120 ft.",
				"truesight 30 ft."
			],
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
			"immune": [
				"fire",
				"poison"
			],
			"conditionImmune": [
				"charmed",
				"exhaustion",
				"poisoned"
			],
			"languages": [
				"Common",
				"Infernal",
				"telepathy 120 ft."
			],
			"cr": "10",
			"trait": [
				{
					"name": "Invisibility Field",
					"entries": [
						"The orthon can use a bonus action to become {@condition invisible}. Any equipment the orthon wears or carries is also {@condition invisible} as long as the equipment is on its person. This invisibility ends immediately after the orthon makes an attack roll or is hit by an attack."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"The orthon has advantage on saving throws against spells and other magical effects."
					]
				}
			],
			"action": [
				{
					"name": "Infernal Dagger",
					"entries": [
						"{@atk mw} {@hit 10} to hit, reach 5 ft., one target. {@h}11 ({@damage 2d4 + 6}) slashing damage, and the target must make a {@dc 17} Constitution saving throw, taking 22 ({@damage 4d10}) poison damage on a failed save, or half as much damage on a successful one. On a failure, the target is {@condition poisoned} for 1 minute. The {@condition poisoned} target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
					]
				},
				{
					"name": "Brass Crossbow",
					"entries": [
						"{@atk rw} {@hit 7} to hit, range 100/400 ft., one target. {@h}14 ({@damage 2d10 + 3}) piercing damage, plus one of the following effects:",
						{
							"type": "list",
							"style": "list-hang-notitle",
							"items": [
								{
									"type": "item",
									"name": "1. Acid",
									"entry": "The target must make a {@dc 17} Constitution saving throw, taking an additional 17 ({@damage 5d6}) acid damage on a failed save, or half as much damage on a successful one."
								},
								{
									"type": "item",
									"name": "2. Blindness (1/Day)",
									"entry": "The target takes 5 ({@damage 1d10}) radiant damage. In addition, the target and all other creatures within 20 feet of it must each make a successful {@dc 17} Dexterity saving throw or be {@condition blinded} until the end of the orthon's next turn."
								},
								{
									"type": "item",
									"name": "3. Concussion",
									"entry": "The target and each creature within 20 feet of it must make a {@dc 17} Constitution saving throw, taking 13 ({@damage 2d12}) thunder damage on a failed save, or half as much damage on a successful one."
								},
								{
									"type": "item",
									"name": "4. Entanglement",
									"entry": "The target must make a successful {@dc 17} Dexterity saving throw or be {@condition restrained} for 1 hour by strands of sticky webbing. A {@condition restrained} creature can escape by using an action to make a successful {@dc 17} Dexterity or Strength check. Any creature other than an orthon that touches the {@condition restrained} creature must make a successful {@dc 17} Dexterity saving throw or become similarly {@condition restrained}."
								},
								{
									"type": "item",
									"name": "5. Paralysis (1/Day)",
									"entry": "The target takes 22 ({@damage 4d10}) lightning damage and must make a successful {@dc 17} Constitution saving throw or be {@condition paralyzed} for 1 minute. The {@condition paralyzed} target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
								},
								{
									"type": "item",
									"name": "6. Tracking",
									"entry": "For the next 24 hours, the orthon knows the direction and distance to the target, as long as it's on the same plane of existence. If the target is on a different plane, the orthon knows which one, but not the exact location there."
								}
							]
						}
					]
				}
			],
			"reaction": [
				{
					"name": "Explosive Retribution",
					"entries": [
						"When it is reduced to 15 hit points or fewer, the orthon causes itself to explode. All other creatures within 30 feet of it must each make a {@dc 17} Dexterity saving throw, taking 9 ({@damage 2d8}) fire damage plus 9 ({@damage 2d8}) thunder damage on a failed save, or half as much damage on a successful one. This explosion destroys the orthon, its infernal dagger, and its brass crossbow."
					]
				}
			],
			"environment": [
				"desert",
				"underdark",
				"urban"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/orthon.mp3"
			},
			"traitTags": [
				"Magic Resistance"
			],
			"senseTags": [
				"SD",
				"U"
			],
			"languageTags": [
				"C",
				"I",
				"TP"
			],
			"damageTags": [
				"A",
				"F",
				"I",
				"L",
				"P",
				"R",
				"S",
				"T"
			],
			"miscTags": [
				"MW",
				"RW"
			],
			"conditionInflict": [
				"blinded",
				"paralyzed",
				"poisoned",
				"restrained"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Phoenix",
			"source": "MTF",
			"page": 199,
			"otherSources": [
				{
					"source": "MOT"
				}
			],
			"size": "G",
			"type": "elemental",
			"alignment": [
				"N"
			],
			"ac": [
				18
			],
			"hp": {
				"average": 175,
				"formula": "10d20 + 70"
			},
			"speed": {
				"walk": 20,
				"fly": 120
			},
			"str": 19,
			"dex": 26,
			"con": 25,
			"int": 2,
			"wis": 21,
			"cha": 18,
			"save": {
				"wis": "+10",
				"cha": "+9"
			},
			"senses": [
				"darkvision 60 ft."
			],
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
			"immune": [
				"fire",
				"poison"
			],
			"conditionImmune": [
				"exhaustion",
				"grappled",
				"paralyzed",
				"petrified",
				"poisoned",
				"prone",
				"restrained",
				"stunned"
			],
			"cr": "16",
			"trait": [
				{
					"name": "Fiery Death and Rebirth",
					"entries": [
						"When the phoenix dies, it explodes. Each creature within 60-feet of it must make a {@dc 20} Dexterity saving throw, taking 22 ({@damage 4d10}) fire damage on a failed save, or half as much damage on a successful one. The fire ignites flammable objects in the area that aren't worn or carried.",
						"The explosion destroys the phoenix's body and leaves behind an egg-shaped cinder that weighs 5 pounds. The cinder is blazing hot, dealing 21 ({@damage 6d6}) fire damage to any creature that touches it, though no more than once per round. The cinder is immune to all damage, and after {@dice 1d6} days, it hatches a new phoenix."
					]
				},
				{
					"name": "Fire Form",
					"entries": [
						"The phoenix can move through a space as narrow as 1 inch wide without squeezing. Any creature that touches the phoenix or hits it with a melee attack while within 5 feet of it takes 5 ({@damage 1d10}) fire damage. In addition, the phoenix can enter a hostile creature's space and stop there. The first time it enters a creature's space on a turn, that creature takes 5 ({@damage 1d10}) fire damage. With a touch, the phoenix can also ignite flammable objects that aren't worn or carried (no action required)."
					]
				},
				{
					"name": "Flyby",
					"entries": [
						"The phoenix doesn't provoke opportunity attacks when it flies out of an enemy's reach."
					]
				},
				{
					"name": "Illumination",
					"entries": [
						"The phoenix sheds bright light in a 60-foot radius and dim light for an additional 30 feet."
					]
				},
				{
					"name": "Legendary Resistance (3/Day)",
					"entries": [
						"If the phoenix fails a saving throw, it can choose to succeed instead."
					]
				},
				{
					"name": "Siege Monster",
					"entries": [
						"The phoenix deals double damage to objects and structures."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The phoenix makes two attacks: one with its beak and one with its fiery talons."
					]
				},
				{
					"name": "Beak",
					"entries": [
						"{@atk mw} {@hit 13} to hit, reach 15 ft., one target. {@h}15 ({@damage 2d6 + 8}) fire damage. If the target is a creature or a flammable object, it ignites. Until a creature takes an action to douse the fire, the target takes 5 ({@damage 1d10}) fire damage at the start of each of its turns."
					]
				},
				{
					"name": "Fiery Talons",
					"entries": [
						"{@atk mw} {@hit 13} to hit, reach 15 ft., one target. {@h}17 ({@damage 2d8 + 8}) fire damage."
					]
				}
			],
			"legendary": [
				{
					"name": "Peck",
					"entries": [
						"The phoenix makes one beak attack."
					]
				},
				{
					"name": "Move",
					"entries": [
						"The phoenix moves up to its speed."
					]
				},
				{
					"name": "Swoop (Costs 2 Actions)",
					"entries": [
						"The phoenix moves up to its speed and attacks with its fiery talons."
					]
				}
			],
			"environment": [
				"desert",
				"mountain"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/phoenix.mp3"
			},
			"traitTags": [
				"Flyby",
				"Illumination",
				"Legendary Resistances",
				"Siege Monster"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"damageTags": [
				"F"
			],
			"miscTags": [
				"AOE",
				"MW",
				"RCH"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Red Abishai",
			"source": "MTF",
			"page": 160,
			"size": "M",
			"type": {
				"type": "fiend",
				"tags": [
					"devil"
				]
			},
			"alignment": [
				"L",
				"E"
			],
			"ac": [
				{
					"ac": 22,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 255,
				"formula": "30d8 + 120"
			},
			"speed": {
				"walk": 30,
				"fly": 50
			},
			"str": 23,
			"dex": 16,
			"con": 19,
			"int": 14,
			"wis": 15,
			"cha": 19,
			"save": {
				"str": "+12",
				"con": "+10",
				"wis": "+8"
			},
			"skill": {
				"intimidation": "+10",
				"perception": "+8"
			},
			"senses": [
				"darkvision 120 ft."
			],
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
			"immune": [
				"fire",
				"poison"
			],
			"conditionImmune": [
				"poisoned"
			],
			"languages": [
				"Draconic",
				"Infernal",
				"telepathy 120 ft."
			],
			"cr": "19",
			"trait": [
				{
					"name": "Devil's Sight",
					"entries": [
						"Magical darkness doesn't impede the abishai's darkvision."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"The abishai has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Magic Weapons",
					"entries": [
						"The abishai's weapon attacks are magical."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The abishai can use its Frightful Presence. It also makes three attacks: one with its morningstar, one with its claw, and one with its bite."
					]
				},
				{
					"name": "Morningstar",
					"entries": [
						"{@atk mw} {@hit 12} to hit, reach 5 ft., one target. {@h}10 ({@damage 1d8 + 6}) piercing damage."
					]
				},
				{
					"name": "Claw",
					"entries": [
						"{@atk mw} {@hit 12} to hit, reach 5 ft., one target. {@h}17 ({@damage 2d10 + 6}) slashing damage."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 12} to hit, reach 5 ft., one target. {@h}22 ({@damage 3d10 + 6}) piercing damage plus 38 ({@damage 7d10}) fire damage."
					]
				},
				{
					"name": "Frightful Presence",
					"entries": [
						"Each creature of the abishai's choice that is within 120 feet and aware of it must succeed on a {@dc 18} Wisdom saving throw or become {@condition frightened} for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the abishai's Frightful Presence for the next 24 hours."
					]
				},
				{
					"name": "Incite Fanaticism",
					"entries": [
						"The abishai chooses up to four of its allies within 60 feet of it that can see it. For 1 minute, each of those allies makes attack rolls with advantage and can't be {@condition frightened}."
					]
				},
				{
					"name": "Power of the Dragon Queen",
					"entries": [
						"The abishai targets one dragon it can see within 120 feet of it. The dragon must make a {@dc 18} Charisma saving throw. A chromatic dragon makes this save with disadvantage. On a successful save, the target is immune to the abishai's Power of the Dragon Queen for 1 hour. On a failed save, the target is {@condition charmed} by the abishai for 1 hour. While {@condition charmed} in this way, the target regards the abishai as a trusted friend to be heeded and protected. This effect ends if the abishai or its companions deal damage to the target."
					]
				}
			],
			"environment": [
				"mountain",
				"urban"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/red-abishai.mp3"
			},
			"traitTags": [
				"Devil's Sight",
				"Magic Resistance",
				"Magic Weapons"
			],
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Frightful Presence",
				"Multiattack"
			],
			"languageTags": [
				"DR",
				"I",
				"TP"
			],
			"damageTags": [
				"F",
				"P",
				"S"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"charmed",
				"frightened"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Retriever",
			"source": "MTF",
			"page": 222,
			"size": "L",
			"type": "construct",
			"alignment": [
				"L",
				"E"
			],
			"ac": [
				{
					"ac": 19,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 210,
				"formula": "20d10 + 100"
			},
			"speed": {
				"walk": 40,
				"climb": 40
			},
			"str": 22,
			"dex": 16,
			"con": 20,
			"int": 3,
			"wis": 11,
			"cha": 4,
			"save": {
				"dex": "+8",
				"con": "+10",
				"wis": "+5"
			},
			"skill": {
				"perception": "+5",
				"stealth": "+8"
			},
			"senses": [
				"blindsight 30 ft.",
				"darkvision 60 ft."
			],
			"passive": 15,
			"immune": [
				"necrotic",
				"poison",
				"psychic",
				{
					"immune": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks that aren't adamantine",
					"cond": true
				}
			],
			"conditionImmune": [
				"charmed",
				"exhaustion",
				"frightened",
				"paralyzed",
				"poisoned"
			],
			"languages": [
				"understands Abyssal",
				"Elvish",
				"and Undercommon but can't speak"
			],
			"cr": "14",
			"spellcasting": [
				{
					"name": "Innate Spellcasting",
					"headerEntries": [
						"The retriever's innate spellcasting ability is Wisdom (spell save {@dc 13}). The retriever can innately cast the following spells, requiring no material components."
					],
					"daily": {
						"3e": [
							"{@spell plane shift} (only self and up to one incapacitated creature which is considered willing for the spell)",
							"{@spell web}"
						]
					},
					"ability": "wis"
				}
			],
			"trait": [
				{
					"name": "Faultless Tracker",
					"entries": [
						"The retriever is given a quarry by its master. The quarry can be a specific creature or object the master is personally acquainted with, or it can be a general type of creature or object the master has seen before. The retriever knows the direction and distance to its quarry as long as the two of them are on the same plane of existence. The retriever can have only one such quarry at a time. The retriever also always knows the location of its master."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The retriever makes two foreleg attacks and uses its force or paralyzing beam once, if available."
					]
				},
				{
					"name": "Foreleg",
					"entries": [
						"{@atk mw} {@hit 11} to hit, reach 10 ft., one target. {@h}15 ({@damage 2d8 + 6}) slashing damage."
					]
				},
				{
					"name": "Force Beam",
					"entries": [
						"The retriever targets one creature it can see within 60 feet of it. The target must make a {@dc 16} Dexterity saving throw, taking 27 ({@damage 5d10}) force damage on a failed save, or half as much damage on a successful one."
					]
				},
				{
					"name": "Paralyzing Beam {@recharge 5}",
					"entries": [
						"The retriever targets one creature it can see within 60 feet of it. The target must succeed on a {@dc 18} Constitution saving throw or be {@condition paralyzed} for 1 minute. The {@condition paralyzed} target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
						"If the {@condition paralyzed} creature is Medium or smaller, the retriever can pick it up as part of the retriever's move and walk or climb with it at full speed."
					]
				}
			],
			"environment": [
				"desert",
				"forest",
				"underdark"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/retriever.mp3"
			},
			"senseTags": [
				"B",
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"AB",
				"CS",
				"E",
				"U"
			],
			"damageTags": [
				"O",
				"S"
			],
			"spellcastingTags": [
				"I"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"paralyzed"
			],
			"conditionInflictSpell": [
				"restrained"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Rot Troll",
			"source": "MTF",
			"page": 244,
			"otherSources": [
				{
					"source": "DIP"
				},
				{
					"source": "SLW"
				}
			],
			"size": "L",
			"type": "giant",
			"alignment": [
				"C",
				"E"
			],
			"ac": [
				{
					"ac": 16,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 138,
				"formula": "12d10 + 72"
			},
			"speed": {
				"walk": 30
			},
			"str": 18,
			"dex": 13,
			"con": 22,
			"int": 5,
			"wis": 8,
			"cha": 4,
			"skill": {
				"perception": "+3"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 13,
			"immune": [
				"necrotic"
			],
			"languages": [
				"Giant"
			],
			"cr": "9",
			"trait": [
				{
					"name": "Rancid Degeneration",
					"entries": [
						"At the end of each of the troll's turns, each creature within 5 feet of it takes 11 ({@damage 2d10}) necrotic damage, unless the troll has taken acid or fire damage since the end of its last turn."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The troll makes three attacks: one with its bite and two with its claws."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 8} to hit, reach 5 ft., one target. {@h}7 ({@damage 1d6 + 4}) piercing damage plus 16 ({@damage 3d10}) necrotic damage."
					]
				},
				{
					"name": "Claws",
					"entries": [
						"{@atk mw} {@hit 8} to hit, reach 5 ft., one target. {@h}11 ({@damage 2d6 + 4}) slashing damage plus 5 ({@damage 1d10}) necrotic damage."
					]
				}
			],
			"environment": [
				"desert",
				"forest",
				"swamp",
				"underdark"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/rot-troll.mp3"
			},
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"GI"
			],
			"damageTags": [
				"N",
				"P",
				"S"
			],
			"miscTags": [
				"MW"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Rutterkin",
			"source": "MTF",
			"page": 136,
			"size": "M",
			"type": {
				"type": "fiend",
				"tags": [
					"demon"
				]
			},
			"alignment": [
				"C",
				"E"
			],
			"ac": [
				12
			],
			"hp": {
				"average": 37,
				"formula": "5d8 + 15"
			},
			"speed": {
				"walk": 20
			},
			"str": 14,
			"dex": 15,
			"con": 17,
			"int": 5,
			"wis": 12,
			"cha": 6,
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 11,
			"resist": [
				"cold",
				"fire",
				"lightning"
			],
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"charmed",
				"frightened",
				"poisoned"
			],
			"languages": [
				"understands Abyssal but can't speak"
			],
			"cr": "2",
			"trait": [
				{
					"name": "Crippling Fear",
					"entries": [
						"When a creature that isn't a demon starts its turn within 30 feet of three or more rutterkins, it must make a {@dc 11} Wisdom saving throw. The creature has disadvantage on the save if it's within 30 feet of six or more rutterkins. On a successful save, the creature is immune to the Crippling Fear of all rutterkins for 24 hours. On a failed save, the creature becomes {@condition frightened} for 1 minute. While {@condition frightened} in this way, the creature is {@condition restrained}. At the end of each of the {@condition frightened} creature's turns, it can repeat the saving throw, ending the effect on itself on a success."
					]
				}
			],
			"action": [
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 4} to hit, reach 5 ft., one target. {@h}12 ({@damage 3d6 + 2}) piercing damage. If the target is a creature, it must succeed on a {@dc 13} Constitution saving throw against disease or become {@condition poisoned}. At the end of each long rest, the {@condition poisoned} target can repeat the saving throw, ending the effect on itself on a success. If the target is reduced to 0 hit points while {@condition poisoned} in this way, it dies and instantly transforms into a living {@creature abyssal wretch|mtf}. The transformation of the body can be undone only by a {@spell wish} spell. (See notes)"
					]
				}
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/rutterkin.mp3"
			},
			"senseTags": [
				"SD"
			],
			"languageTags": [
				"AB",
				"CS"
			],
			"damageTags": [
				"P"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"frightened",
				"poisoned",
				"restrained"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Sacred Statue",
			"source": "MTF",
			"page": 194,
			"otherSources": [
				{
					"source": "DC"
				},
				{
					"source": "DIP"
				},
				{
					"source": "IMR"
				}
			],
			"size": "L",
			"type": "construct",
			"alignment": [
				{
					"special": "as the eidolon's alignment"
				}
			],
			"ac": [
				{
					"ac": 19,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 95,
				"formula": "10d10 + 40"
			},
			"speed": {
				"walk": 25
			},
			"str": 19,
			"dex": 8,
			"con": 19,
			"int": 14,
			"wis": 19,
			"cha": 16,
			"save": {
				"wis": "+8"
			},
			"senses": [
				"darkvision 60 ft."
			],
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
			"immune": [
				"cold",
				"necrotic",
				"poison"
			],
			"conditionImmune": [
				"charmed",
				"exhaustion",
				"frightened",
				"paralyzed",
				"petrified",
				"poisoned"
			],
			"languages": [
				"the languages the eidolon knew in life"
			],
			"trait": [
				{
					"name": "False Appearance",
					"entries": [
						"While the statue remains motionless, it is indistinguishable from a normal statue."
					]
				},
				{
					"name": "Ghostly Inhabitant",
					"entries": [
						"The {@creature eidolon|MTF} that enters the sacred statue remains inside it until the statue drops to 0 hit points, the eidolon uses a bonus action to move out of the statue, or the eidolon is turned or forced out by an effect such as the {@spell dispel evil and good} spell. When the eidolon leaves the statue, it appears in an unoccupied space within 5 feet of the statue."
					]
				},
				{
					"name": "Inert",
					"entries": [
						"When not inhabited by an {@creature eidolon|MTF}, the statue is an object."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The statue makes two slam attacks."
					]
				},
				{
					"name": "Slam",
					"entries": [
						"{@atk mw} {@hit 8} to hit, reach 10 ft., one target. {@h}43 ({@damage 6d12 + 4}) bludgeoning damage."
					]
				},
				{
					"name": "Rock",
					"entries": [
						"{@atk rw} {@hit 8} to hit, range 60/240 ft., one target. {@h}37 ({@damage 6d10 + 4}) bludgeoning damage."
					]
				}
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/sacred-statue.mp3"
			},
			"traitTags": [
				"False Appearance"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"LF"
			],
			"damageTags": [
				"B"
			],
			"miscTags": [
				"MW",
				"RCH",
				"RW"
			],
			"hasFluff": true
		},
		{
			"name": "Shadow Dancer",
			"source": "MTF",
			"page": 225,
			"size": "M",
			"type": {
				"type": "humanoid",
				"tags": [
					"elf"
				]
			},
			"alignment": [
				"N"
			],
			"ac": [
				{
					"ac": 15,
					"from": [
						"{@item studded leather armor|phb}"
					]
				}
			],
			"hp": {
				"average": 71,
				"formula": "13d8 + 13"
			},
			"speed": {
				"walk": 30
			},
			"str": 12,
			"dex": 16,
			"con": 13,
			"int": 11,
			"wis": 12,
			"cha": 12,
			"save": {
				"dex": "+6",
				"cha": "+4"
			},
			"skill": {
				"stealth": "+6"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 11,
			"resist": [
				"necrotic"
			],
			"conditionImmune": [
				"charmed",
				"exhaustion"
			],
			"languages": [
				"Common",
				"Elvish"
			],
			"cr": "7",
			"trait": [
				{
					"name": "Fey Ancestry",
					"entries": [
						"The shadow dancer has advantage on saving throws against being {@condition charmed}, and magic can't put it to sleep."
					]
				},
				{
					"name": "Shadow Jump",
					"entries": [
						"As a bonus action, the shadow dancer can teleport up to 30 feet to an unoccupied space it can see. Both the space it teleports from and the space it teleports to must be in dim light or darkness. The shadow dancer can use this ability between the weapon attacks of another action it takes."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The shadow dancer makes three spiked chain attacks."
					]
				},
				{
					"name": "Spiked Chain",
					"entries": [
						"{@atk mw} {@hit 6} to hit, reach 10 ft., one target. {@h}10 ({@damage 2d6 + 3}) piercing damage, and the target must succeed on a {@dc 14} Dexterity saving throw or suffer one additional effect of the shadow dancer's choice:",
						{
							"type": "list",
							"items": [
								"The target is {@condition grappled} (escape {@dc 14}) if it is a Medium or smaller creature. Until the grapple ends, the target is {@condition restrained}, and the shadow dancer can't grapple another target.",
								"The target is knocked {@condition prone}.",
								"The target takes 22 ({@damage 4d10}) necrotic damage."
							]
						}
					]
				}
			],
			"environment": [
				"forest",
				"underdark",
				"urban"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/shadow-dancer.mp3"
			},
			"traitTags": [
				"Fey Ancestry"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C",
				"E"
			],
			"damageTags": [
				"N",
				"P"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"grappled",
				"prone",
				"restrained"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Sibriex",
			"source": "MTF",
			"page": 137,
			"otherSources": [
				{
					"source": "BGDIA"
				}
			],
			"size": "H",
			"type": {
				"type": "fiend",
				"tags": [
					"demon"
				]
			},
			"alignment": [
				"C",
				"E"
			],
			"ac": [
				{
					"ac": 19,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 150,
				"formula": "12d12 + 72"
			},
			"speed": {
				"walk": 0,
				"fly": {
					"number": 20,
					"condition": "(hover)"
				},
				"canHover": true
			},
			"str": 10,
			"dex": 3,
			"con": 23,
			"int": 25,
			"wis": 24,
			"cha": 25,
			"save": {
				"int": "+13",
				"cha": "+13"
			},
			"skill": {
				"arcana": "+13",
				"history": "+13",
				"perception": "+13"
			},
			"senses": [
				"truesight 120 ft."
			],
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
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"poisoned"
			],
			"languages": [
				"all",
				"telepathy 120 ft."
			],
			"cr": "18",
			"spellcasting": [
				{
					"name": "Innate Spellcasting",
					"headerEntries": [
						"The sibriex's innate spellcasting ability is Charisma (spell save {@dc 21}). It can innately cast the following spells, requiring no material components:"
					],
					"will": [
						"{@spell charm person}",
						"{@spell command}",
						"{@spell dispel magic}",
						"{@spell hold monster}"
					],
					"daily": {
						"3": [
							"{@spell feeblemind}"
						]
					},
					"ability": "cha"
				}
			],
			"trait": [
				{
					"name": "Contamination",
					"entries": [
						"The sibriex emits an aura of corruption 30 feet in every direction. Plants that aren't creatures wither in the aura, and the ground in it is difficult terrain for other creatures. Any creature that starts its turn in the aura must succeed on a {@dc 20} Constitution saving throw or take 14 ({@damage 4d6}) poison damage. A creature that succeeds on the save is immune to this sibriex's Contamination for 24 hours."
					]
				},
				{
					"name": "Legendary Resistance (3/Day)",
					"entries": [
						"If the sibriex fails a saving throw, it can choose to succeed instead."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"The sibriex has advantage on saving throws against spells and other magical effects."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The sibriex uses Squirt Bile once and makes three attacks using its chain, bite, or both."
					]
				},
				{
					"name": "Chain",
					"entries": [
						"{@atk mw} {@hit 6} to hit, reach 15 ft., one target. {@h}20 ({@damage 2d12 + 7}) piercing damage."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 6} to hit, reach 5 ft., one target. {@h}9 ({@damage 2d8}) piercing damage plus 9 ({@damage 2d8}) acid damage."
					]
				},
				{
					"name": "Squirt Bile",
					"entries": [
						"The sibriex targets one creature it can see within 120 feet of it. The target must succeed on a {@dc 20} Dexterity saving throw or take 35 ({@damage 10d6}) acid damage."
					]
				},
				{
					"name": "Warp Creature",
					"entries": [
						"The sibriex targets up to three creatures it can see within 120 feet of it. Each target must make a {@dc 20} Constitution saving throw. On a successful save, a creature becomes immune to this sibriex's Warp Creature. On a failed save, the target is {@condition poisoned}, which causes it to also gain 1 level of {@condition exhaustion}. While {@condition poisoned} in this way, the target must repeat the saving throw at the start of each of its turns. Three successful saves against the poison end it, and ending the poison removes any levels of {@condition exhaustion} caused by it. Each failed save causes the target to suffer another level of {@condition exhaustion}. Once the target reaches 6 levels of {@condition exhaustion}, it dies and instantly transforms into a living {@creature abyssal wretch|mtf} under the sibriex's control. The transformation of the body can be undone only by a {@spell wish} spell."
					]
				}
			],
			"legendary": [
				{
					"name": "Cast a Spell",
					"entries": [
						"The sibriex casts a spell."
					]
				},
				{
					"name": "Spray Bile",
					"entries": [
						"The sibriex uses Squirt Bile."
					]
				},
				{
					"name": "Warp (Costs 2 Actions)",
					"entries": [
						"The sibriex uses Warp Creature."
					]
				}
			],
			"variant": [
				{
					"type": "variant",
					"name": "Flesh Warping",
					"entries": [
						"Creatures that encounter a sibriex can be twisted beyond recognition. Whenever a creature fails a saving throw against the sibriex's Warp Creature effect, you can roll percentile dice and consult the Flesh Warping table to determine an additional effect, which vanishes when Warp Creature ends on the creature. If the creature transforms into an abyssal wretch, the effect becomes a permanent feature of that body.",
						"A creature can willingly submit to flesh warping, an agonizing process that takes at least 1 hour while the creature stays within 30 feet of the sibriex. At the end of the process, roll once on the table (or choose one effect) to determine how the creature is transformed permanently.",
						{
							"type": "table",
							"caption": "Flesh Warping",
							"colLabels": [
								"{@dice d100}",
								"Effect"
							],
							"colStyles": [
								"col-2 text-center",
								"col-10"
							],
							"rows": [
								[
									"01-05",
									"The color of the target's hair, eyes, and skin becomes blue, red, yellow, or patterned."
								],
								[
									"06-10",
									"The target's eyes push out of its head at the end of stalks."
								],
								[
									"11-15",
									"The target's hands grow claws, which can be used as daggers."
								],
								[
									"16-20",
									"One of the target's legs grows longer than the other, reducing its walking speed by 10 feet."
								],
								[
									"21-25",
									"The target's eyes become beacons, filling a 15-foot cone with dim light when they are open."
								],
								[
									"26-30",
									"A pair of wings, either feathered or leathery, sprout from the target's back, granting it a flying speed of 30 feet."
								],
								[
									"31-35",
									"The target's ears tear free from its head and scurry away; the target is {@condition deafened}."
								],
								[
									"36-40",
									"Two of the target's teeth turn into tusks."
								],
								[
									"41-45",
									"The target's skin becomes scabby, granting it a +1 bonus to AC but reducing its Charisma by 2 (to a minimum of 1)."
								],
								[
									"46-50",
									"The target's arms and legs switch places, preventing the target from moving unless it crawls."
								],
								[
									"51-55",
									"The target's arms become tentacles with fingers on the ends, increasing its reach by 5 feet."
								],
								[
									"56-60",
									"The target's legs grow incredibly long and springy, increasing its walking speed by 10 feet."
								],
								[
									"61-65",
									"The target grows a whiplike tail, which it can use as a {@item whip|phb}."
								],
								[
									"66-70",
									"The target's eyes turn black, and it gains darkvision out to a range of 120 feet."
								],
								[
									"71-75",
									"The target swells, tripling its weight."
								],
								[
									"76-80",
									"The target becomes thin and skeletal, halving its weight."
								],
								[
									"81-85",
									"The target's head doubles in size."
								],
								[
									"86-90",
									"The target's ears become wings, giving it a flying speed of 5 feet."
								],
								[
									"91-95",
									"The target's body becomes unusually brittle, causing the target to have vulnerability to bludgeoning, piercing, and slashing damage."
								],
								[
									"96-00",
									"The target grows another head, causing it to have advantage on saving throws against being {@condition charmed}, {@condition frightened}, or {@condition stunned}."
								]
							]
						}
					]
				}
			],
			"environment": [
				"underdark"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/sibriex.mp3"
			},
			"traitTags": [
				"Legendary Resistances",
				"Magic Resistance"
			],
			"senseTags": [
				"U"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"TP",
				"XX"
			],
			"damageTags": [
				"A",
				"I",
				"P"
			],
			"spellcastingTags": [
				"I"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"deafened",
				"exhaustion",
				"poisoned"
			],
			"conditionInflictSpell": [
				"charmed",
				"paralyzed",
				"prone"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Skulk",
			"source": "MTF",
			"page": 227,
			"size": "M",
			"type": "humanoid",
			"alignment": [
				"C",
				"N"
			],
			"ac": [
				14
			],
			"hp": {
				"average": 18,
				"formula": "4d8"
			},
			"speed": {
				"walk": 30
			},
			"str": 6,
			"dex": 19,
			"con": 10,
			"int": 10,
			"wis": 7,
			"cha": 1,
			"save": {
				"con": "+2"
			},
			"skill": {
				"stealth": "+8"
			},
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 8,
			"immune": [
				"radiant"
			],
			"conditionImmune": [
				"blinded"
			],
			"languages": [
				"understands Common but can't speak"
			],
			"cr": "1/2",
			"trait": [
				{
					"name": "Fallible Invisibility",
					"entries": [
						"The skulk is {@condition invisible}. This invisibility can be circumvented by three things:",
						{
							"type": "list",
							"items": [
								"The skulk appears as a drab, smooth-skinned humanoid if its reflection can be seen in a mirror or on another surface.",
								"The skulk appears as a dim, translucent form in the light of a candle made of fat rendered from a corpse whose identity is unknown.",
								"Humanoid children, aged 10 and under, can see through this invisibility."
							]
						}
					]
				},
				{
					"name": "Trackless",
					"entries": [
						"The skulk leaves no tracks to indicate where it has been or where it's headed."
					]
				}
			],
			"action": [
				{
					"name": "Claws",
					"entries": [
						"{@atk mw} {@hit 6} to hit, reach 5 ft., one target. {@h}6 ({@damage 1d4 + 4}) slashing damage. If the skulk has advantage on the attack roll, the target also takes 7 ({@damage 2d6}) necrotic damage."
					]
				}
			],
			"environment": [
				"coastal",
				"forest",
				"swamp",
				"underdark",
				"urban"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/skulk.mp3"
			},
			"senseTags": [
				"SD"
			],
			"languageTags": [
				"C",
				"CS"
			],
			"damageTags": [
				"N",
				"S"
			],
			"miscTags": [
				"MW"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Skull Lord",
			"source": "MTF",
			"page": 230,
			"size": "M",
			"type": "undead",
			"alignment": [
				"L",
				"E"
			],
			"ac": [
				{
					"ac": 18,
					"from": [
						"{@item plate armor|phb}"
					]
				}
			],
			"hp": {
				"average": 105,
				"formula": "14d8 + 42"
			},
			"speed": {
				"walk": 30
			},
			"str": 14,
			"dex": 16,
			"con": 17,
			"int": 16,
			"wis": 15,
			"cha": 21,
			"skill": {
				"athletics": "+7",
				"history": "+8",
				"perception": "+12",
				"stealth": "+8"
			},
			"senses": [
				"darkvision 60 ft."
			],
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
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"blinded",
				"charmed",
				"deafened",
				"exhaustion",
				"frightened",
				"poisoned",
				"stunned",
				"unconscious"
			],
			"languages": [
				"all the languages it knew in life"
			],
			"cr": "15",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The skull lord is a 13th-level spellcaster. Its spellcasting ability is Charisma (spell save {@dc 18}, {@hit 10} to hit with spell attacks). The skull lord knows the following sorcerer spells:"
					],
					"spells": {
						"0": {
							"spells": [
								"{@spell chill touch}",
								"{@spell fire bolt}",
								"{@spell mage hand}",
								"{@spell poison spray}",
								"{@spell ray of frost}",
								"{@spell shocking grasp}"
							]
						},
						"1": {
							"slots": 4,
							"spells": [
								"{@spell magic missile}",
								"{@spell expeditious retreat}",
								"{@spell thunderwave}"
							]
						},
						"2": {
							"slots": 3,
							"spells": [
								"{@spell mirror image}",
								"{@spell scorching ray}"
							]
						},
						"3": {
							"slots": 3,
							"spells": [
								"{@spell fear}",
								"{@spell haste}"
							]
						},
						"4": {
							"slots": 3,
							"spells": [
								"{@spell dimension door}",
								"{@spell ice storm}"
							]
						},
						"5": {
							"slots": 2,
							"spells": [
								"{@spell cloudkill}",
								"{@spell cone of cold}"
							]
						},
						"6": {
							"slots": 1,
							"spells": [
								"{@spell eyebite}"
							]
						},
						"7": {
							"slots": 1,
							"spells": [
								"{@spell finger of death}"
							]
						}
					},
					"ability": "cha"
				}
			],
			"trait": [
				{
					"name": "Legendary Resistance (3/Day)",
					"entries": [
						"If the skull lord fails a saving throw, it can choose to succeed instead."
					]
				},
				{
					"name": "Master of the Grave",
					"entries": [
						"While within 30 feet of the skull lord, any undead ally of the skull lord makes saving throws with advantage, and that ally regains {@dice 1d6} hit points whenever it starts its turn there."
					]
				},
				{
					"name": "Evasion",
					"entries": [
						"If the skull lord is subjected to an effect that allows it to make a Dexterity saving throw to take only half the damage, the skull lord instead takes no damage if it succeeds on the saving throw, and only half damage if it fails."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The skull lord makes three bone staff attacks."
					]
				},
				{
					"name": "Bone Staff",
					"entries": [
						"{@atk mw} {@hit 8} to hit, reach 5 ft., one target. {@h}7 ({@damage 1d8 + 3}) bludgeoning damage plus 14 ({@damage 4d6}) necrotic damage."
					]
				}
			],
			"legendary": [
				{
					"name": "Bone Staff (Costs 2 Actions)",
					"entries": [
						"The skull lord makes a bone staff attack."
					]
				},
				{
					"name": "Cantrip",
					"entries": [
						"The skull lord casts a cantrip."
					]
				},
				{
					"name": "Move",
					"entries": [
						"The skull lord moves up to its speed without provoking opportunity attacks."
					]
				},
				{
					"name": "Summon Undead (Costs 3 Actions)",
					"entries": [
						"Up to five {@creature skeleton||skeletons} or {@creature zombie||zombies} appear in unoccupied spaces within 30 feet of the skull lord and remain until destroyed. Undead summoned in this way roll initiative and act in the next available turn. The skull lord can have up to five undead summoned by this ability at a time."
					]
				}
			],
			"environment": [
				"desert",
				"swamp",
				"underdark"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/skull-lord.mp3"
			},
			"traitTags": [
				"Legendary Resistances"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"LF"
			],
			"damageTags": [
				"B",
				"N"
			],
			"spellcastingTags": [
				"CS"
			],
			"miscTags": [
				"MW"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Soul Monger",
			"source": "MTF",
			"page": 226,
			"size": "M",
			"type": {
				"type": "humanoid",
				"tags": [
					"elf"
				]
			},
			"alignment": [
				"N"
			],
			"ac": [
				{
					"ac": 15,
					"from": [
						"{@item studded leather armor|phb}"
					]
				}
			],
			"hp": {
				"average": 123,
				"formula": "19d8 + 38"
			},
			"speed": {
				"walk": 30
			},
			"str": 8,
			"dex": 17,
			"con": 14,
			"int": 19,
			"wis": 15,
			"cha": 13,
			"save": {
				"dex": "+7",
				"wis": "+6",
				"cha": "+5"
			},
			"skill": {
				"perception": "+6"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 17,
			"immune": [
				"necrotic",
				"psychic"
			],
			"conditionImmune": [
				"charmed",
				"exhaustion",
				"frightened"
			],
			"languages": [
				"Common",
				"Elvish"
			],
			"cr": "11",
			"spellcasting": [
				{
					"name": "Innate Spellcasting",
					"headerEntries": [
						"The soul monger's innate spellcasting ability is Intelligence (spell save {@dc 16}, {@hit 8} to hit with spell attacks). It can innately cast the following spells, requiring no material components:"
					],
					"will": [
						"{@spell chill touch}",
						"{@spell poison spray}"
					],
					"daily": {
						"1e": [
							"{@spell bestow curse}",
							"{@spell chain lightning}",
							"{@spell finger of death}",
							"{@spell gaseous form}",
							"{@spell phantasmal killer}",
							"{@spell seeming}"
						]
					},
					"ability": "int"
				}
			],
			"trait": [
				{
					"name": "Fey Ancestry",
					"entries": [
						"The soul monger has advantage on saving throws against being {@condition charmed}, and magic can't put it to sleep."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"The soul monger has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Soul Thirst",
					"entries": [
						"When the soul monger reduces a creature to 0 hit points, the soul monger can gain temporary hit points equal to half the creature's hit point maximum. While the soul monger has temporary hit points from this ability, it has advantage on attack rolls."
					]
				},
				{
					"name": "Weight of Ages",
					"entries": [
						"Any beast or humanoid, other than a shadar-kai, that starts its turn within 5 feet of the soul monger has its speed reduced by 20 feet until the start of that creature's next turn."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The soul monger makes two phantasmal dagger attacks."
					]
				},
				{
					"name": "Phantasmal Dagger",
					"entries": [
						"{@atk mw} {@hit 7} to hit, reach 5 ft., one target. {@h}13 ({@damage 4d4 + 3}) piercing damage plus 19 ({@damage 3d12}) necrotic damage, and the target has disadvantage on saving throws until the start of the soul monger's next turn."
					]
				},
				{
					"name": "Wave of Weariness {@recharge 4}",
					"entries": [
						"The soul monger emits weariness in a 60-foot cube. Each creature in that area must make a {@dc 16} Constitution saving throw. On a failed save, a creature takes 45 ({@damage 10d8}) psychic damage and suffers 1 level of {@condition exhaustion}. On a successful save, it takes 22 ({@damage 5d8}) psychic damage."
					]
				}
			],
			"environment": [
				"underdark",
				"urban"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/soul-monger.mp3"
			},
			"traitTags": [
				"Fey Ancestry",
				"Magic Resistance"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C",
				"E"
			],
			"damageTags": [
				"N",
				"P",
				"Y"
			],
			"spellcastingTags": [
				"I"
			],
			"miscTags": [
				"AOE",
				"MW"
			],
			"conditionInflict": [
				"exhaustion"
			],
			"conditionInflictSpell": [
				"frightened"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Spirit Troll",
			"source": "MTF",
			"page": 244,
			"size": "L",
			"type": "giant",
			"alignment": [
				"C",
				"E"
			],
			"ac": [
				{
					"ac": 17,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 97,
				"formula": "15d10 + 15"
			},
			"speed": {
				"walk": 30
			},
			"str": 1,
			"dex": 17,
			"con": 13,
			"int": 8,
			"wis": 9,
			"cha": 16,
			"skill": {
				"perception": "+3"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 13,
			"resist": [
				"acid",
				"cold",
				"fire",
				"lightning",
				"thunder"
			],
			"immune": [
				{
					"immune": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks",
					"cond": true
				}
			],
			"conditionImmune": [
				"exhaustion",
				"grappled",
				"paralyzed",
				"petrified",
				"prone",
				"restrained",
				"unconscious"
			],
			"languages": [
				"Giant"
			],
			"cr": "11",
			"trait": [
				{
					"name": "Incorporeal Movement",
					"entries": [
						"The troll can move through other creatures and objects as if they were difficult terrain. It takes 5 ({@damage 1d10}) force damage if it ends its turn inside an object."
					]
				},
				{
					"name": "Regeneration",
					"entries": [
						"The troll regains 10 hit points at the start of each of its turns. If the troll takes psychic or force damage, this trait doesn't function at the start of the troll's next turn. The troll dies only if it starts its turn with 0 hit points and doesn't regenerate."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The troll makes three attacks: one with its bite and two with its claws."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 7} to hit, reach 5 ft., one creature. {@h}19 ({@damage 3d10 + 3}) psychic damage, and the target must succeed on a {@dc 15} Wisdom saving throw or be {@condition stunned} for 1 minute. The {@condition stunned} target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
					]
				},
				{
					"name": "Claws",
					"entries": [
						"{@atk mw} {@hit 7} to hit, reach 5 ft., one creature. {@h}14 ({@damage 2d10 + 3}) psychic damage."
					]
				}
			],
			"environment": [
				"coastal",
				"forest",
				"swamp",
				"underdark"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/spirit-troll.mp3"
			},
			"traitTags": [
				"Incorporeal Movement",
				"Regeneration"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"GI"
			],
			"damageTags": [
				"O",
				"Y"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"stunned"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Spring Eladrin",
			"source": "MTF",
			"page": 196,
			"size": "M",
			"type": {
				"type": "fey",
				"tags": [
					"elf"
				]
			},
			"alignment": [
				"C",
				"N"
			],
			"ac": [
				{
					"ac": 19,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 127,
				"formula": "17d8 + 51"
			},
			"speed": {
				"walk": 30
			},
			"str": 14,
			"dex": 16,
			"con": 16,
			"int": 18,
			"wis": 11,
			"cha": 18,
			"skill": {
				"deception": "+8",
				"persuasion": "+8"
			},
			"senses": [
				"darkvision 60 ft."
			],
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
			"languages": [
				"Common",
				"Elvish",
				"Sylvan"
			],
			"cr": "10",
			"spellcasting": [
				{
					"name": "Innate Spellcasting",
					"headerEntries": [
						"The eladrin's innate spellcasting ability is Charisma (spell save {@dc 16}). It can innately cast the following spells, requiring no material components:"
					],
					"will": [
						"{@spell charm person}",
						"{@spell Tasha's hideous laughter}"
					],
					"daily": {
						"3e": [
							"{@spell confusion}",
							"{@spell enthrall}",
							"{@spell suggestion}"
						],
						"1e": [
							"{@spell hallucinatory terrain}",
							"{@spell Otto's irresistible dance}"
						]
					},
					"ability": "cha"
				}
			],
			"trait": [
				{
					"name": "Fey Step {@recharge 4}",
					"entries": [
						"As a bonus action, the eladrin can teleport up to 30 feet to an unoccupied space it can see."
					]
				},
				{
					"name": "Joyful Presence",
					"entries": [
						"Any non-eladrin creature that starts its turn within 60 feet of the eladrin must make a {@dc 16} Wisdom saving throw. On a failed save, the creature is {@condition charmed} for 1 minute. On a successful save, the creature becomes immune to any eladrin's Joyful Presence for 24 hours.",
						"Whenever the eladrin deals damage to the {@condition charmed} creature, it can repeat the saving throw, ending the effect on itself on a success."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"The eladrin has advantage on saving throws against spells and other magical effects."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The eladrin makes two weapon attacks. The eladrin can cast one spell in place of one of these attacks."
					]
				},
				{
					"name": "Longsword",
					"entries": [
						"{@atk mw} {@hit 6} to hit, reach 5 ft., one target. {@h}6 ({@damage 1d8 + 2}) slashing damage plus 4 ({@damage 1d8}) psychic damage, or 7 ({@damage 1d10 + 2}) slashing damage plus 4 ({@damage 1d8}) psychic damage if used with two hands."
					]
				},
				{
					"name": "Longbow",
					"entries": [
						"{@atk rw} {@hit 7} to hit, range 150/600 ft., one target. {@h}7 ({@damage 1d8 + 3}) piercing damage plus 4 ({@damage 1d8}) psychic damage."
					]
				}
			],
			"environment": [
				"forest",
				"grassland"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/spring-eladrin.mp3"
			},
			"traitTags": [
				"Magic Resistance"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C",
				"E",
				"S"
			],
			"damageTags": [
				"P",
				"S",
				"Y"
			],
			"spellcastingTags": [
				"I"
			],
			"miscTags": [
				"MW",
				"RNG",
				"RW"
			],
			"conditionInflict": [
				"charmed"
			],
			"conditionInflictSpell": [
				"charmed",
				"incapacitated",
				"prone"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Star Spawn Grue",
			"source": "MTF",
			"page": 234,
			"size": "S",
			"type": "aberration",
			"alignment": [
				"L",
				"E"
			],
			"ac": [
				11
			],
			"hp": {
				"average": 17,
				"formula": "5d6"
			},
			"speed": {
				"walk": 30
			},
			"str": 6,
			"dex": 13,
			"con": 10,
			"int": 9,
			"wis": 11,
			"cha": 6,
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 10,
			"immune": [
				"psychic"
			],
			"languages": [
				"Deep Speech"
			],
			"cr": "1/4",
			"trait": [
				{
					"name": "Aura of Madness",
					"entries": [
						"Creatures within 20 feet of the grue that aren't aberrations have disadvantage on saving throws, as well as on attack rolls against creatures other than a star spawn grue."
					]
				}
			],
			"action": [
				{
					"name": "Confounding Bite",
					"entries": [
						"{@atk mw} {@hit 3} to hit, reach 5 ft., one target. {@h}6 ({@damage 2d4 + 1}) piercing damage, and the target must succeed on a {@dc 10} Wisdom saving throw or attack rolls against it have advantage until the start of the grue's next turn."
					]
				}
			],
			"environment": [
				"mountain",
				"swamp"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/star-spawn-grue.mp3"
			},
			"senseTags": [
				"D"
			],
			"languageTags": [
				"DS"
			],
			"damageTags": [
				"P"
			],
			"miscTags": [
				"MW"
			],
			"hasFluff": true
		},
		{
			"name": "Star Spawn Hulk",
			"source": "MTF",
			"page": 234,
			"size": "L",
			"type": "aberration",
			"alignment": [
				"C",
				"E"
			],
			"ac": [
				{
					"ac": 16,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 136,
				"formula": "13d10 + 65"
			},
			"speed": {
				"walk": 30
			},
			"str": 20,
			"dex": 8,
			"con": 21,
			"int": 7,
			"wis": 12,
			"cha": 9,
			"save": {
				"dex": "+3",
				"wis": "+5"
			},
			"skill": {
				"perception": "+5"
			},
			"senses": [
				"darkvision 60 ft."
			],
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
			"conditionImmune": [
				"charmed",
				"frightened"
			],
			"languages": [
				"Deep Speech"
			],
			"cr": "10",
			"trait": [
				{
					"name": "Psychic Mirror",
					"entries": [
						"If the hulk takes psychic damage, each creature within 10 feet of the hulk takes that damage instead; the hulk takes none of the damage. In addition, the hulk's thoughts and location can't be discerned by magic."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The hulk makes two slam attacks. If both attacks hit the same target, the target also takes 9 ({@damage 2d8}) psychic damage and must succeed on a {@dc 17} Constitution saving throw or be {@condition stunned} until the end of the target's next turn."
					]
				},
				{
					"name": "Slam",
					"entries": [
						"{@atk mw} {@hit 9} to hit, reach 10 ft., one target. {@h}14 ({@damage 2d8 + 5}) bludgeoning damage."
					]
				},
				{
					"name": "Reaping Arms {@recharge 5}",
					"entries": [
						"The hulk makes a separate slam attack against each creature within 10 feet of it. Each creature that is hit must also succeed on a {@dc 17} Dexterity saving throw or be knocked {@condition prone}."
					]
				}
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/star-spawn-hulk.mp3"
			},
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"DS"
			],
			"damageTags": [
				"B",
				"Y"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"prone",
				"stunned"
			],
			"hasFluff": true
		},
		{
			"name": "Star Spawn Larva Mage",
			"source": "MTF",
			"page": 235,
			"otherSources": [
				{
					"source": "WDMM"
				}
			],
			"size": "M",
			"type": "aberration",
			"alignment": [
				"C",
				"E"
			],
			"ac": [
				{
					"ac": 16,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 168,
				"formula": "16d8 + 96"
			},
			"speed": {
				"walk": 30
			},
			"str": 17,
			"dex": 12,
			"con": 23,
			"int": 18,
			"wis": 12,
			"cha": 16,
			"save": {
				"dex": "+6",
				"wis": "+6",
				"cha": "+8"
			},
			"skill": {
				"perception": "+6"
			},
			"senses": [
				"darkvision 60 ft."
			],
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
			"immune": [
				"psychic"
			],
			"conditionImmune": [
				"charmed",
				"frightened",
				"paralyzed",
				"petrified",
				"poisoned",
				"restrained"
			],
			"languages": [
				"Deep Speech"
			],
			"cr": "16",
			"spellcasting": [
				{
					"name": "Innate Spellcasting",
					"headerEntries": [
						"The larva mage's innate spellcasting ability is Charisma (spell save {@dc 16}, {@hit 8} to hit with spell attacks). It can innately cast the following spells, requiring no material components:"
					],
					"will": [
						"{@spell eldritch blast}*",
						"{@spell minor illusion}"
					],
					"daily": {
						"1": [
							"{@spell circle of death}"
						],
						"3": [
							"{@spell dominate monster}"
						]
					},
					"footerEntries": [
						"*3 beams, +3 bonus to each damage roll"
					],
					"ability": "cha"
				}
			],
			"trait": [
				{
					"name": "Return to Worms",
					"entries": [
						"When the larva mage is reduced to 0 hit points, it breaks apart into a {@creature swarm of insects} in the same space. Unless the swarm is destroyed, the larva mage reforms from it 24 hours later."
					]
				}
			],
			"action": [
				{
					"name": "Slam",
					"entries": [
						"{@atk mw} {@hit 8} to hit, reach 10 ft., one target. {@h}7 ({@damage 1d8 + 3}) bludgeoning damage, and the target must succeed on a {@dc 19} Constitution saving throw or be {@condition poisoned} until the end of its next turn."
					]
				},
				{
					"name": "Plague of Worms {@recharge}",
					"entries": [
						"Each creature other than a star spawn within 10 feet of the larva mage must make a {@dc 19} Dexterity saving throw. On a failure the target takes 22 ({@damage 5d8}) necrotic damage and is {@condition blinded} and {@condition restrained} by masses of swarming worms. The affected creature takes 22 ({@damage 5d8}) necrotic damage at the start of each of the larva mage's turns. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
					]
				}
			],
			"reaction": [
				{
					"name": "Feed on Weakness",
					"entries": [
						"When a creature within 20 feet of the larva mage fails a saving throw, the larva mage gains 10 temporary hit points."
					]
				}
			],
			"legendary": [
				{
					"name": "Cantrip (Costs 2 Actions)",
					"entries": [
						"The larva mage casts one cantrip."
					]
				},
				{
					"name": "Slam (Costs 2 Actions)",
					"entries": [
						"The larva mage makes one slam attack."
					]
				},
				{
					"name": "Feed (Costs 3 Actions)",
					"entries": [
						"Each creature {@condition restrained} by the larva mage's Plague of Worms takes 13 ({@damage 3d8}) necrotic damage, and the larva mage gains 6 temporary hit points."
					]
				}
			],
			"environment": [
				"mountain"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/star-spawn-larva-mage.mp3"
			},
			"senseTags": [
				"D"
			],
			"languageTags": [
				"DS"
			],
			"damageTags": [
				"B",
				"N"
			],
			"spellcastingTags": [
				"I"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"blinded",
				"poisoned",
				"restrained"
			],
			"conditionInflictSpell": [
				"charmed"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Star Spawn Mangler",
			"source": "MTF",
			"page": 236,
			"otherSources": [
				{
					"source": "DC"
				},
				{
					"source": "DIP"
				},
				{
					"source": "SLW"
				}
			],
			"size": "M",
			"type": "aberration",
			"alignment": [
				"C",
				"E"
			],
			"ac": [
				14
			],
			"hp": {
				"average": 71,
				"formula": "13d8 + 13"
			},
			"speed": {
				"walk": 40,
				"climb": 40
			},
			"str": 8,
			"dex": 18,
			"con": 12,
			"int": 11,
			"wis": 12,
			"cha": 7,
			"save": {
				"dex": "+7",
				"con": "+4"
			},
			"skill": {
				"stealth": "+7"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 11,
			"resist": [
				"cold"
			],
			"immune": [
				"psychic"
			],
			"conditionImmune": [
				"charmed",
				"frightened",
				"prone"
			],
			"languages": [
				"Deep Speech"
			],
			"cr": "5",
			"trait": [
				{
					"name": "Ambush",
					"entries": [
						"On the first round of each combat, the mangler has advantage on attack rolls against a creature that hasn't taken a turn yet."
					]
				},
				{
					"name": "Shadow Stealth",
					"entries": [
						"While in dim light or darkness, the mangler can take the Hide action as a bonus action."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The mangler makes two claw attacks."
					]
				},
				{
					"name": "Claw",
					"entries": [
						"{@atk mw} {@hit 7} to hit, reach 5 ft., one target. {@h}8 ({@damage 1d8 + 4}) slashing damage. If the attack roll has advantage, the target also takes 7 ({@damage 2d6}) psychic damage."
					]
				},
				{
					"name": "Flurry of Claws {@recharge 4}",
					"entries": [
						"The mangler makes six claw attacks against one target. Either before or after these attacks, it can move up to its speed as a bonus action without provoking opportunity attacks."
					]
				}
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/star-spawn-mangler.mp3"
			},
			"traitTags": [
				"Ambusher"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"DS"
			],
			"damageTags": [
				"S",
				"Y"
			],
			"miscTags": [
				"MW"
			],
			"hasFluff": true
		},
		{
			"name": "Star Spawn Seer",
			"source": "MTF",
			"page": 236,
			"size": "M",
			"type": "aberration",
			"alignment": [
				"L",
				"E"
			],
			"ac": [
				{
					"ac": 17,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 153,
				"formula": "18d8 + 72"
			},
			"speed": {
				"walk": 30
			},
			"str": 14,
			"dex": 12,
			"con": 18,
			"int": 22,
			"wis": 19,
			"cha": 16,
			"save": {
				"dex": "+6",
				"int": "+11",
				"wis": "+9",
				"cha": "+8"
			},
			"skill": {
				"perception": "+9"
			},
			"senses": [
				"darkvision 60 ft."
			],
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
			"immune": [
				"psychic"
			],
			"conditionImmune": [
				"charmed",
				"frightened"
			],
			"languages": [
				"Common",
				"Deep Speech",
				"Undercommon"
			],
			"cr": "13",
			"trait": [
				{
					"name": "Out-of-Phase Movement",
					"entries": [
						"The seer can move through other creatures and objects as if they were difficult terrain. Each creature it moves through takes 5 ({@damage 1d10}) psychic damage; no creature can take this damage more than once per turn. The seer takes 5 ({@damage 1d10}) force damage if it ends its turn inside an object."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The seer makes two comet staff attacks or uses Psychic Orb twice."
					]
				},
				{
					"name": "Comet Staff",
					"entries": [
						"{@atk mw} {@hit 11} to hit, reach 5 ft., one target. {@h}9 ({@damage 1d6 + 6}) bludgeoning damage plus 18 ({@damage 4d8}) psychic damage, or 10 ({@damage 1d8 + 6}) bludgeoning damage plus 18 ({@damage 4d8}) psychic damage, if used with two hands, and the target must succeed on a {@dc 19} Constitution saving throw or be {@condition incapacitated} until the end of its next turn."
					]
				},
				{
					"name": "Psychic Orb",
					"entries": [
						"{@atk rs} {@hit 11} to hit, range 120 feet, one target. {@h}27 ({@damage 5d10}) psychic damage."
					]
				},
				{
					"name": "Collapse Distance {@recharge}",
					"entries": [
						"The seer warps space around a creature it can see within 30 feet of it. That creature must make a {@dc 19} Wisdom saving throw. On a failed save, the target, along with any equipment it is wearing or carrying, is magically teleported up to 60 feet to an unoccupied space the seer can see, and all other creatures within 10 feet of the target's original space each takes 39 ({@damage 6d12}) psychic damage. On a successful save, the target takes 19 ({@damage 3d12}) psychic damage."
					]
				}
			],
			"reaction": [
				{
					"name": "Bend Space",
					"entries": [
						"When the seer would be hit by an attack, it teleports, exchanging positions with another star spawn it can see within 60 feet of it. The other star spawn is hit by the attack instead."
					]
				}
			],
			"environment": [
				"mountain",
				"swamp",
				"urban"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/star-spawn-seer.mp3"
			},
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C",
				"DS",
				"U"
			],
			"damageTags": [
				"B",
				"O",
				"Y"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"incapacitated"
			],
			"hasFluff": true
		},
		{
			"name": "Steel Predator",
			"source": "MTF",
			"page": 239,
			"size": "L",
			"type": "construct",
			"alignment": [
				"L",
				"E"
			],
			"ac": [
				{
					"ac": 20,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 207,
				"formula": "18d10 + 108"
			},
			"speed": {
				"walk": 40
			},
			"str": 24,
			"dex": 17,
			"con": 22,
			"int": 4,
			"wis": 14,
			"cha": 6,
			"skill": {
				"perception": "+7",
				"stealth": "+8",
				"survival": "+7"
			},
			"senses": [
				"blindsight 30 ft.",
				"darkvision 60 ft."
			],
			"passive": 17,
			"resist": [
				"cold",
				"lightning",
				"necrotic",
				"thunder"
			],
			"immune": [
				"poison",
				"psychic",
				{
					"immune": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks",
					"cond": true
				}
			],
			"conditionImmune": [
				"charmed",
				"exhaustion",
				"frightened",
				"paralyzed",
				"petrified",
				"poisoned",
				"stunned"
			],
			"languages": [
				"understands Modron and the language of its owner but can't speak"
			],
			"cr": "16",
			"spellcasting": [
				{
					"name": "Innate Spellcasting",
					"headerEntries": [
						"The steel predator's innate spellcasting ability is Wisdom. The steel predator can innately cast the following spells, requiring no components:"
					],
					"daily": {
						"3e": [
							"{@spell dimension door} (self only)",
							"{@spell plane shift} (self only)"
						]
					},
					"ability": "wis"
				}
			],
			"trait": [
				{
					"name": "Magic Resistance",
					"entries": [
						"The steel predator has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Magic Weapons",
					"entries": [
						"The steel predator's weapon attacks are magical."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The steel predator makes three attacks: one with its bite and two with its claw."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 12} to hit, reach 5 ft., one target. {@h}14 ({@damage 2d6 + 7}) piercing damage."
					]
				},
				{
					"name": "Claw",
					"entries": [
						"{@atk mw} {@hit 12} to hit, reach 5 ft., one target. {@h}16 ({@damage 2d8 + 7}) slashing damage."
					]
				},
				{
					"name": "Stunning Roar {@recharge 5}",
					"entries": [
						"The steel predator emits a roar in a 60-foot cone. Each creature in that area must make a {@dc 19} Constitution saving throw. On a failed save, a creature takes 27 ({@damage 5d10}) thunder damage, drops everything it's holding, and is {@condition stunned} for 1 minute. On a successful save, a creature takes half as much damage. The {@condition stunned} creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
					]
				}
			],
			"environment": [
				"urban"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/steel-predator.mp3"
			},
			"traitTags": [
				"Magic Resistance",
				"Magic Weapons"
			],
			"senseTags": [
				"B",
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"CS",
				"OTH"
			],
			"damageTags": [
				"P",
				"S",
				"T"
			],
			"spellcastingTags": [
				"I"
			],
			"miscTags": [
				"AOE",
				"MW"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Stone Cursed",
			"source": "MTF",
			"page": 240,
			"size": "M",
			"type": "construct",
			"alignment": [
				"L",
				"E"
			],
			"ac": [
				{
					"ac": 17,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 19,
				"formula": "3d8 + 4"
			},
			"speed": {
				"walk": 10
			},
			"str": 16,
			"dex": 5,
			"con": 14,
			"int": 5,
			"wis": 8,
			"cha": 7,
			"passive": 9,
			"immune": [
				"poison"
			],
			"vulnerable": [
				"bludgeoning"
			],
			"conditionImmune": [
				"charmed",
				"exhaustion",
				"frightened",
				"petrified",
				"poisoned"
			],
			"languages": [
				"the languages it knew in life"
			],
			"cr": "1",
			"trait": [
				{
					"name": "Cunning Opportunist",
					"entries": [
						"The stone cursed has advantage on the attack rolls of opportunity attacks."
					]
				},
				{
					"name": "False Appearance",
					"entries": [
						"While the stone cursed remains motionless, it is indistinguishable from a normal statue."
					]
				}
			],
			"action": [
				{
					"name": "Petrifying Claws",
					"entries": [
						"{@atk mw} {@hit 5} to hit, reach 5 ft., one target. {@h}8 ({@damage 1d10 + 3}) slashing damage, or 14 ({@damage 2d10 + 3}) slashing damage if the attack roll had advantage. If the target is a creature, it must succeed on a {@dc 12} Constitution saving throw, or it begins to turn to stone and is {@condition restrained} until the end of its next turn, when it must repeat the saving throw. The effect ends if the second save is successful; otherwise the target is {@condition petrified} for 24 hours."
					]
				}
			],
			"environment": [
				"desert",
				"mountain",
				"urban"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/stone-cursed.mp3"
			},
			"traitTags": [
				"False Appearance"
			],
			"languageTags": [
				"LF"
			],
			"damageTags": [
				"S"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"petrified",
				"restrained"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Stone Defender",
			"source": "MTF",
			"page": 126,
			"size": "M",
			"type": "construct",
			"alignment": [
				"U"
			],
			"ac": [
				{
					"ac": 16,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 52,
				"formula": "7d8 + 21"
			},
			"speed": {
				"walk": 30
			},
			"str": 19,
			"dex": 10,
			"con": 17,
			"int": 3,
			"wis": 10,
			"cha": 1,
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 10,
			"immune": [
				"poison",
				{
					"immune": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks that aren't adamantine",
					"cond": true
				}
			],
			"conditionImmune": [
				"charmed",
				"exhaustion",
				"frightened",
				"paralyzed",
				"petrified",
				"poisoned"
			],
			"languages": [
				"understands one language of its creator but can't speak"
			],
			"cr": "4",
			"trait": [
				{
					"name": "False Appearance",
					"entries": [
						"While the stone defender remains motionless against an uneven earthen or stone surface, it is indistinguishable from that surface."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"The stone defender has advantage on saving throws against spells and other magical effects."
					]
				}
			],
			"action": [
				{
					"name": "Slam",
					"entries": [
						"{@atk mw} {@hit 6} to hit, reach 5 ft., one target. {@h}11 ({@damage 2d6 + 4}) bludgeoning damage, and if the target is Large or smaller, it is knocked {@condition prone}."
					]
				}
			],
			"reaction": [
				{
					"name": "Intercept Attack",
					"entries": [
						"In response to another creature within 5 feet of it being hit by an attack roll, the stone defender gives that creature a +5 bonus to its AC against that attack, potentially causing a miss. To use this ability, the stone defender must be able to see the creature and the attacker."
					]
				}
			],
			"environment": [
				"forest",
				"grassland",
				"hill",
				"mountain"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/stone-defender.mp3"
			},
			"traitTags": [
				"False Appearance",
				"Magic Resistance"
			],
			"senseTags": [
				"D"
			],
			"languageTags": [
				"CS"
			],
			"damageTags": [
				"B"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"prone"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Summer Eladrin",
			"source": "MTF",
			"page": 196,
			"size": "M",
			"type": {
				"type": "fey",
				"tags": [
					"elf"
				]
			},
			"alignment": [
				"C",
				"N"
			],
			"ac": [
				{
					"ac": 19,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 127,
				"formula": "17d8 + 51"
			},
			"speed": {
				"walk": 50
			},
			"str": 19,
			"dex": 21,
			"con": 16,
			"int": 14,
			"wis": 12,
			"cha": 18,
			"skill": {
				"athletics": "+8",
				"intimidation": "+8"
			},
			"senses": [
				"darkvision 60 ft."
			],
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
			"languages": [
				"Common",
				"Elvish",
				"Sylvan"
			],
			"cr": "10",
			"trait": [
				{
					"name": "Fearsome Presence",
					"entries": [
						"Any non-eladrin creature that starts its turn within 60 feet of the eladrin must make a {@dc 16} Wisdom saving throw. On a failed save, the creature becomes {@condition frightened} for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to any eladrin's Fearsome Presence for the next 24 hours."
					]
				},
				{
					"name": "Fey Step {@recharge 4}",
					"entries": [
						"As a bonus action, the eladrin can teleport up to 30 feet to an unoccupied space it can see."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"The eladrin has advantage on saving throws against spells and other magical effects."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The eladrin makes two weapon attacks."
					]
				},
				{
					"name": "Longsword",
					"entries": [
						"{@atk mw} {@hit 8} to hit, reach 5 ft., one target. {@h}13 ({@damage 2d8 + 4}) slashing damage plus 4 ({@damage 1d8}) fire damage, or 15 ({@damage 2d10 + 4}) slashing damage plus 4 ({@damage 1d8}) fire damage if used with two hands."
					]
				},
				{
					"name": "Longbow",
					"entries": [
						"{@atk rw} {@hit 9} to hit, range 150/600 ft., one target. {@h}14 ({@damage 2d8 + 5}) piercing damage plus 4 ({@damage 1d8}) fire damage."
					]
				}
			],
			"reaction": [
				{
					"name": "Parry",
					"entries": [
						"The eladrin adds 3 to its AC against one melee attack that would hit it. To do so, the eladrin must see the attacker and be wielding a melee weapon."
					]
				}
			],
			"environment": [
				"desert",
				"forest"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/summer-eladrin.mp3"
			},
			"traitTags": [
				"Magic Resistance"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack",
				"Parry"
			],
			"languageTags": [
				"C",
				"E",
				"S"
			],
			"damageTags": [
				"F",
				"P",
				"S"
			],
			"miscTags": [
				"MW",
				"RNG",
				"RW"
			],
			"conditionInflict": [
				"frightened"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Sword Wraith Commander",
			"source": "MTF",
			"page": 241,
			"otherSources": [
				{
					"source": "DC"
				},
				{
					"source": "DIP"
				},
				{
					"source": "SDW"
				}
			],
			"size": "M",
			"type": "undead",
			"alignment": [
				"L",
				"E"
			],
			"ac": [
				{
					"ac": 18,
					"from": [
						"{@item breastplate|phb}",
						"{@item shield|phb}"
					]
				}
			],
			"hp": {
				"average": 127,
				"formula": "15d8 + 60"
			},
			"speed": {
				"walk": 30
			},
			"str": 18,
			"dex": 14,
			"con": 18,
			"int": 11,
			"wis": 12,
			"cha": 14,
			"skill": {
				"perception": "+4"
			},
			"senses": [
				"darkvision 60 ft."
			],
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
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"exhaustion",
				"frightened",
				"poisoned",
				"unconscious"
			],
			"languages": [
				"the languages it knew in life"
			],
			"cr": "8",
			"trait": [
				{
					"name": "Martial Fury",
					"entries": [
						"As a bonus action, the sword wraith can make one weapon attack, which deals an extra 9 ({@damage 2d8}) necrotic damage on a hit. If it does so, attack rolls against it have advantage until the start of its next turn."
					]
				},
				{
					"name": "Turning Defiance",
					"entries": [
						"The sword wraith and any other sword wraiths within 30 feet of it have advantage on saving throws against effects that turn undead."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The sword wraith makes two weapon attacks."
					]
				},
				{
					"name": "Longsword",
					"entries": [
						"{@atk mw} {@hit 7} to hit, reach 5 ft., one target. {@h}8 ({@damage 1d8 + 4}) slashing damage, or 9 ({@damage 1d10 + 4}) slashing damage if used with two hands."
					]
				},
				{
					"name": "Longbow",
					"entries": [
						"{@atk rw} {@hit 5} to hit, range 150/600 ft., one target. {@h}6 ({@damage 1d8 + 2}) piercing damage."
					]
				},
				{
					"name": "Call to Honor (1/Day)",
					"entries": [
						"To use this action, the sword wraith must have taken damage during the current combat. If the sword wraith can use this action, it gives itself advantage on attack rolls until the end of its next turn, and {@dice 1d4 + 1} {@creature sword wraith warrior|mtf|sword wraith warriors} appear in unoccupied spaces within 30 feet of it. The warriors last until they drop to 0 hit points, and they take their turns immediately after the commander's turn on the same initiative count."
					]
				}
			],
			"environment": [
				"grassland",
				"swamp"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/sword-wraith-commander.mp3"
			},
			"traitTags": [
				"Turn Resistance"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"LF"
			],
			"damageTags": [
				"N",
				"P",
				"S"
			],
			"miscTags": [
				"MW",
				"RNG",
				"RW"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Sword Wraith Warrior",
			"source": "MTF",
			"page": 241,
			"otherSources": [
				{
					"source": "DC"
				},
				{
					"source": "DIP"
				},
				{
					"source": "SDW"
				}
			],
			"size": "M",
			"type": "undead",
			"alignment": [
				"L",
				"E"
			],
			"ac": [
				{
					"ac": 16,
					"from": [
						"{@item chain shirt|phb}",
						"{@item shield|phb}"
					]
				}
			],
			"hp": {
				"average": 45,
				"formula": "6d8 + 18"
			},
			"speed": {
				"walk": 30
			},
			"str": 18,
			"dex": 12,
			"con": 17,
			"int": 6,
			"wis": 9,
			"cha": 10,
			"senses": [
				"darkvision 60 ft."
			],
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
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"exhaustion",
				"frightened",
				"poisoned",
				"unconscious"
			],
			"languages": [
				"the languages it knew in life"
			],
			"cr": "3",
			"trait": [
				{
					"name": "Martial Fury",
					"entries": [
						"As a bonus action, the sword wraith can make one weapon attack. If it does so, attack rolls against it have advantage until the start of its next turn."
					]
				}
			],
			"action": [
				{
					"name": "Longsword",
					"entries": [
						"{@atk mw} {@hit 6} to hit, reach 5 ft., one target. {@h}8 ({@damage 1d8 + 4}) slashing damage, or 9 ({@damage 1d10 + 4}) slashing damage if used with two hands."
					]
				},
				{
					"name": "Longbow",
					"entries": [
						"{@atk rw} {@hit 3} to hit, range 150/600 ft., one target. {@h}5 ({@damage 1d8 + 1}) piercing damage."
					]
				}
			],
			"environment": [
				"grassland",
				"swamp"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/sword-wraith-warrior.mp3"
			},
			"senseTags": [
				"D"
			],
			"languageTags": [
				"LF"
			],
			"damageTags": [
				"P",
				"S"
			],
			"miscTags": [
				"MW",
				"RNG",
				"RW"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "The Angry",
			"source": "MTF",
			"page": 231,
			"size": "M",
			"type": "monstrosity",
			"alignment": [
				"L",
				"E"
			],
			"ac": [
				{
					"ac": 18,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 255,
				"formula": "30d8 + 120"
			},
			"speed": {
				"walk": 30
			},
			"str": 17,
			"dex": 10,
			"con": 19,
			"int": 8,
			"wis": 13,
			"cha": 6,
			"skill": {
				"perception": "+6"
			},
			"senses": [
				"darkvision 60 ft."
			],
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
			"languages": [
				"Common"
			],
			"cr": "13",
			"trait": [
				{
					"name": "Two Heads",
					"entries": [
						"The Angry has advantage on Wisdom ({@skill Perception}) checks and on saving throws against being {@condition blinded}, {@condition charmed}, {@condition deafened}, {@condition frightened}, {@condition stunned}, or knocked {@condition unconscious}."
					]
				},
				{
					"name": "Rising Anger",
					"entries": [
						"If another creature deals damage to the Angry, the Angry's attack rolls have advantage until the end of its next turn, and the first time it hits with a hook attack on its next turn, the attack's target takes an extra 19 ({@damage 3d12}) psychic damage.",
						"On its turn, the Angry has disadvantage on attack rolls if no other creature has dealt damage to it since the end of its last turn."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The Angry makes two hook attacks."
					]
				},
				{
					"name": "Hook",
					"entries": [
						"{@atk mw} {@hit 8} to hit, reach 5 ft., one target. {@h}16 ({@damage 2d12 + 3}) piercing damage."
					]
				}
			],
			"environment": [
				"underdark",
				"urban"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/the-angry.mp3"
			},
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C"
			],
			"damageTags": [
				"P",
				"Y"
			],
			"miscTags": [
				"MW"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "The Hungry",
			"source": "MTF",
			"page": 232,
			"size": "M",
			"type": "monstrosity",
			"alignment": [
				"L",
				"E"
			],
			"ac": [
				{
					"ac": 17,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 225,
				"formula": "30d8 + 90"
			},
			"speed": {
				"walk": 30
			},
			"str": 19,
			"dex": 10,
			"con": 17,
			"int": 6,
			"wis": 11,
			"cha": 6,
			"senses": [
				"darkvision 60 ft."
			],
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
			"languages": [
				"Common"
			],
			"cr": "11",
			"trait": [
				{
					"name": "Life Hunger",
					"entries": [
						"If a creature the Hungry can see regains hit points, the Hungry gains two benefits until the end of its next turn: it has advantage on attack rolls, and its bite deals an extra 22 ({@damage 4d10}) necrotic damage on a hit."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The Hungry makes two attacks: one with its bite and one with its claws."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 8} to hit, reach 5 ft., one target. {@h}8 ({@damage 1d8 + 4}) piercing damage plus 13 ({@damage 3d8}) necrotic damage."
					]
				},
				{
					"name": "Claws",
					"entries": [
						"{@atk mw} {@hit 8} to hit, reach 10 ft., one target. {@h}18 ({@damage 4d6 + 4}) slashing damage. If the target is Medium or smaller, it is {@condition grappled} (escape {@dc 16}) and is {@condition restrained} until the grapple ends. While grappling a creature, the Hungry can't attack with its claws."
					]
				}
			],
			"environment": [
				"forest",
				"underdark",
				"urban"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/the-hungry.mp3"
			},
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C"
			],
			"damageTags": [
				"N",
				"P",
				"S"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"grappled",
				"restrained"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "The Lonely",
			"source": "MTF",
			"page": 232,
			"size": "M",
			"type": "monstrosity",
			"alignment": [
				"L",
				"E"
			],
			"ac": [
				{
					"ac": 16,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 112,
				"formula": "15d8 + 45"
			},
			"speed": {
				"walk": 30
			},
			"str": 16,
			"dex": 12,
			"con": 17,
			"int": 6,
			"wis": 11,
			"cha": 6,
			"senses": [
				"darkvision 60 ft."
			],
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
			"languages": [
				"Common"
			],
			"cr": "9",
			"trait": [
				{
					"name": "Psychic Leech",
					"entries": [
						"At the start of each of the Lonely's turns, each creature within 5 feet of it must succeed on a {@dc 15} Wisdom saving throw or take 10 ({@damage 3d6}) psychic damage."
					]
				},
				{
					"name": "Thrives on Company",
					"entries": [
						"The Lonely has advantage on attack rolls while it is within 30 feet of at least two other creatures. It otherwise has disadvantage on attack rolls."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The Lonely makes one harpoon arm attack and uses Sorrowful Embrace."
					]
				},
				{
					"name": "Harpoon Arm",
					"entries": [
						"{@atk mw} {@hit 7} to hit, reach 60 ft., one target. {@h}21 ({@damage 4d8 + 3}) piercing damage, and the target is {@condition grappled} (escape {@dc 15}) if it is a Large or smaller creature.",
						"The Lonely has two harpoon arms and can grapple up to two creatures at once."
					]
				},
				{
					"name": "Sorrowful Embrace",
					"entries": [
						"Each creature {@condition grappled} by the Lonely must make a {@dc 15} Wisdom saving throw. A creature takes 18 ({@damage 4d8}) psychic damage on a failed save, or half as much damage on a successful one. In either case, the Lonely pulls each creature {@condition grappled} by it up to 30 feet straight toward it."
					]
				}
			],
			"environment": [
				"coastal",
				"desert",
				"mountain",
				"underdark",
				"urban"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/the-lonely.mp3"
			},
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C"
			],
			"damageTags": [
				"P",
				"Y"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"grappled"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "The Lost",
			"source": "MTF",
			"page": 233,
			"size": "M",
			"type": "monstrosity",
			"alignment": [
				"L",
				"E"
			],
			"ac": [
				{
					"ac": 15,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 78,
				"formula": "12d8 + 24"
			},
			"speed": {
				"walk": 30
			},
			"str": 17,
			"dex": 12,
			"con": 15,
			"int": 6,
			"wis": 7,
			"cha": 5,
			"skill": {
				"athletics": "+6"
			},
			"senses": [
				"darkvision 60 ft."
			],
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
			"languages": [
				"Common"
			],
			"cr": "7",
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The Lost makes two arm spike attacks."
					]
				},
				{
					"name": "Arm Spike",
					"entries": [
						"{@atk mw} {@hit 6} to hit, reach 5 ft., one target. {@h}14 ({@damage 2d10 + 3}) piercing damage."
					]
				},
				{
					"name": "Embrace",
					"entries": [
						"{@atk mw} {@hit 6} to hit, reach 5 ft., one target. {@h}25 ({@damage 4d10 + 3}) piercing damage, and the target is {@condition grappled} (escape {@dc 14}) if it is a Medium or smaller creature. Until the grapple ends, the target is {@condition frightened}, and it takes 27 ({@damage 6d8}) psychic damage at the end of each of its turns. The Lost can embrace only one creature at a time."
					]
				}
			],
			"reaction": [
				{
					"name": "Tightening Embrace",
					"entries": [
						"If the Lost takes damage while it has a creature {@condition grappled}, that creature takes 18 ({@damage 4d8}) psychic damage."
					]
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
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/the-lost.mp3"
			},
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C"
			],
			"damageTags": [
				"P",
				"Y"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"frightened",
				"grappled"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "The Wretched",
			"source": "MTF",
			"page": 233,
			"size": "S",
			"type": "monstrosity",
			"alignment": [
				"L",
				"E"
			],
			"ac": [
				{
					"ac": 15,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 10,
				"formula": "4d6 - 4"
			},
			"speed": {
				"walk": 40
			},
			"str": 7,
			"dex": 12,
			"con": 9,
			"int": 5,
			"wis": 6,
			"cha": 5,
			"senses": [
				"darkvision 60 ft."
			],
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
					"name": "Wretched Pack Tactics",
					"entries": [
						"The Wretched has advantage on an attack roll against a creature if at least one of the Wretched's allies is within 5 feet of the creature and the ally isn't {@condition incapacitated}. The Wretched otherwise has disadvantage on attack rolls."
					]
				}
			],
			"action": [
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 3} to hit, reach 5 ft., one target. {@h}6 ({@damage 1d10 + 1}) piercing damage, and the Wretched attaches to the target. While attached, the Wretched can't attack, and at the start of each of the Wretched's turns, the target takes 6 ({@damage 1d10 + 1}) necrotic damage.",
						"The attached Wretched moves with the target whenever the target moves, requiring none of the Wretched's movement. The Wretched can detach itself by spending 5 feet of its movement on its turn. A creature, including the target, can use its action to detach a Wretched."
					]
				}
			],
			"environment": [
				"swamp",
				"underdark",
				"urban"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/the-wretched.mp3"
			},
			"senseTags": [
				"D"
			],
			"damageTags": [
				"N",
				"P"
			],
			"miscTags": [
				"MW"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Titivilus",
			"isNamedCreature": true,
			"source": "MTF",
			"page": 179,
			"size": "M",
			"type": {
				"type": "fiend",
				"tags": [
					"devil"
				]
			},
			"alignment": [
				"L",
				"E"
			],
			"ac": [
				{
					"ac": 20,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 127,
				"formula": "17d8 + 51"
			},
			"speed": {
				"walk": 40,
				"fly": 60
			},
			"str": 19,
			"dex": 22,
			"con": 17,
			"int": 24,
			"wis": 22,
			"cha": 26,
			"save": {
				"dex": "+11",
				"con": "+8",
				"wis": "+11",
				"cha": "+13"
			},
			"skill": {
				"deception": "+13",
				"insight": "+11",
				"intimidation": "+13",
				"persuasion": "+13"
			},
			"senses": [
				"darkvision 120 ft."
			],
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
			"immune": [
				"fire",
				"poison"
			],
			"conditionImmune": [
				"charmed",
				"exhaustion",
				"frightened",
				"poisoned"
			],
			"languages": [
				"all",
				"telepathy 120 ft."
			],
			"cr": "16",
			"spellcasting": [
				{
					"name": "Innate Spellcasting",
					"headerEntries": [
						"Titivilus's innate spellcasting ability is Charisma (spell save {@dc 21}). He can innately cast the following spells, requiring no material components:"
					],
					"will": [
						"{@spell alter self}",
						"{@spell animate dead}",
						"{@spell bestow curse}",
						"{@spell confusion}",
						"{@spell major image}",
						"{@spell modify memory}",
						"{@spell nondetection}",
						"{@spell sending}",
						"{@spell suggestion}"
					],
					"daily": {
						"3e": [
							"{@spell greater invisibility} (self only)",
							"{@spell mislead}"
						],
						"1e": [
							"{@spell feeblemind}",
							"{@spell symbol} (discord or sleep only)"
						]
					},
					"ability": "cha"
				}
			],
			"trait": [
				{
					"name": "Legendary Resistance (3/Day)",
					"entries": [
						"If Titivilus fails a saving throw, he can choose to succeed instead."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"Titivilus has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Magic Weapons",
					"entries": [
						"Titivilus's weapon attacks are magical."
					]
				},
				{
					"name": "Regeneration",
					"entries": [
						"Titivilus regains 10 hit points at the start of his turn. If he takes cold or radiant damage, this trait doesn't function at the start of his next turn. Titivilus dies only if he starts his turn with 0 hit points and doesn't regenerate."
					]
				},
				{
					"name": "Ventriloquism",
					"entries": [
						"Whenever Titivilus speaks, he can choose a point within 60 feet; his voice emanates from that point."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"Titivilus makes one sword attack and uses his Frightful Word once."
					]
				},
				{
					"name": "Silver Sword",
					"entries": [
						"{@atk mw} {@hit 9} to hit, reach 5 ft., one target. {@h}8 ({@damage 1d8 + 4}) slashing damage plus 16 ({@damage 3d10}) necrotic damage, or 9 ({@damage 1d10 + 4}) slashing damage plus 16 ({@damage 3d10}) necrotic damage if used with two hands. If the target is a creature, its hit point maximum is reduced by an amount equal to half the necrotic damage it takes."
					]
				},
				{
					"name": "Frightful Word",
					"entries": [
						"Titivilus targets one creature he can see within 10 feet of him. The target must succeed on a {@dc 21} Wisdom saving throw or become {@condition frightened} for 1 minute. While {@condition frightened} in this way, the target must take the Dash action and move away from Titivilus by the safest available route on each of its turns, unless there is nowhere to move, in which case it needn't take the Dash action. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
					]
				},
				{
					"name": "Teleport",
					"entries": [
						"Titivilus magically teleports, along with any equipment he is wearing and carrying, up to 120 feet to an unoccupied space he can see."
					]
				},
				{
					"name": "Twisting Words",
					"entries": [
						"Titivilus targets one creature he can see within 60 feet of him. The target must make a {@dc 21} Charisma saving throw. On a failure the target is {@condition charmed} for 1 minute. The {@condition charmed} target can repeat the saving throw if Titivilus deals any damage to it. A creature that succeeds on the saving throw is immune to Titivilus's Twisting Words for 24 hours."
					]
				}
			],
			"legendary": [
				{
					"name": "Assault (Costs 2 Actions)",
					"entries": [
						"Titivilus attacks with his silver sword or uses his Frightful Word."
					]
				},
				{
					"name": "Corrupting Guidance",
					"entries": [
						"Titivilus uses Twisting Words. Alternatively, he targets one creature {@condition charmed} by him that is within 60 feet of him; that {@condition charmed} target must make a {@dc 21} Charisma saving throw. On a failure, Titivilus decides how the target acts during its next turn."
					]
				},
				{
					"name": "Teleport",
					"entries": [
						"Titivilus uses his Teleport action."
					]
				}
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/titivilus.mp3"
			},
			"traitTags": [
				"Legendary Resistances",
				"Magic Resistance",
				"Magic Weapons",
				"Regeneration"
			],
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Multiattack",
				"Teleport"
			],
			"languageTags": [
				"TP",
				"XX"
			],
			"damageTags": [
				"N",
				"S"
			],
			"spellcastingTags": [
				"I"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"charmed",
				"frightened"
			],
			"conditionInflictSpell": [
				"blinded",
				"charmed",
				"deafened",
				"frightened",
				"incapacitated",
				"invisible",
				"stunned",
				"unconscious"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Tortle",
			"source": "MTF",
			"page": 242,
			"otherSources": [
				{
					"source": "TTP",
					"page": 23
				}
			],
			"size": "M",
			"type": {
				"type": "humanoid",
				"tags": [
					"tortle"
				]
			},
			"alignment": [
				"L",
				"G"
			],
			"ac": [
				{
					"ac": 17,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 22,
				"formula": "4d8 + 4"
			},
			"speed": {
				"walk": 30
			},
			"str": 15,
			"dex": 10,
			"con": 12,
			"int": 11,
			"wis": 13,
			"cha": 12,
			"skill": {
				"athletics": "+4",
				"survival": "+3"
			},
			"passive": 11,
			"languages": [
				"Aquan",
				"Common"
			],
			"cr": "1/4",
			"trait": [
				{
					"name": "Hold Breath",
					"entries": [
						"The tortle can hold its breath for 1 hour."
					]
				}
			],
			"action": [
				{
					"name": "Claws",
					"entries": [
						"{@atk mw} {@hit 4} to hit, reach 5 ft., one target. {@h}4 ({@damage 1d4 + 2}) slashing damage."
					]
				},
				{
					"name": "Quarterstaff",
					"entries": [
						"{@atk mw} {@hit 4} to hit, reach 5 ft., one target. {@h}5 ({@damage 1d6 + 2}) bludgeoning damage, or 6 ({@damage 1d8 + 2}) bludgeoning damage if used with two hands."
					]
				},
				{
					"name": "Light Crossbow",
					"entries": [
						"{@atk rw} {@hit 2} to hit, range 80/320 ft., one target. {@h}4 ({@damage 1d8}) piercing damage."
					]
				},
				{
					"name": "Shell Defense",
					"entries": [
						"The tortle withdraws into its shell. Until it emerges, it gains a +4 bonus to AC and has advantage on Strength and Constitution saving throws. While in its shell, the tortle is {@condition prone}, its speed is 0 and can't increase, it has disadvantage on Dexterity saving throws, it can't take reactions, and the only action it can take is a bonus action to emerge."
					]
				}
			],
			"environment": [
				"coastal"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/tortle.mp3"
			},
			"traitTags": [
				"Hold Breath"
			],
			"languageTags": [
				"AQ",
				"C"
			],
			"damageTags": [
				"B",
				"P",
				"S"
			],
			"miscTags": [
				"MW",
				"RNG",
				"RW"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Tortle Druid",
			"source": "MTF",
			"page": 242,
			"otherSources": [
				{
					"source": "TTP",
					"page": 23
				}
			],
			"size": "M",
			"type": {
				"type": "humanoid",
				"tags": [
					"tortle"
				]
			},
			"alignment": [
				"L",
				"N"
			],
			"ac": [
				{
					"ac": 17,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 33,
				"formula": "6d8 + 6"
			},
			"speed": {
				"walk": 30
			},
			"str": 14,
			"dex": 10,
			"con": 12,
			"int": 11,
			"wis": 15,
			"cha": 12,
			"skill": {
				"animal handling": "+4",
				"nature": "+2",
				"survival": "+4"
			},
			"passive": 12,
			"languages": [
				"Aquan",
				"Common"
			],
			"cr": "2",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The tortle is a 4th-level spellcaster. Its spellcasting ability is Wisdom (spell save {@dc 12}, {@hit 4} to hit with spell attacks). It has the following druid spells prepared:"
					],
					"spells": {
						"0": {
							"spells": [
								"{@spell druidcraft}",
								"{@spell guidance}",
								"{@spell produce flame}"
							]
						},
						"1": {
							"slots": 4,
							"spells": [
								"{@spell animal friendship}",
								"{@spell cure wounds}",
								"{@spell speak with animals}",
								"{@spell thunderwave}"
							]
						},
						"2": {
							"slots": 3,
							"spells": [
								"{@spell darkvision}",
								"{@spell hold person}"
							]
						}
					},
					"ability": "wis"
				}
			],
			"trait": [
				{
					"name": "Hold Breath",
					"entries": [
						"The tortle can hold its breath for 1 hour."
					]
				}
			],
			"action": [
				{
					"name": "Claws",
					"entries": [
						"{@atk mw} {@hit 4} to hit, reach 5 ft., one target. {@h}4 ({@damage 1d4 + 2}) slashing damage."
					]
				},
				{
					"name": "Quarterstaff",
					"entries": [
						"{@atk mw} {@hit 4} to hit, reach 5 ft., one target. {@h}5 ({@damage 1d6 + 2}) bludgeoning damage, or 6 ({@damage 1d8 + 2}) bludgeoning damage if used with two hands."
					]
				},
				{
					"name": "Shell Defense",
					"entries": [
						"The tortle withdraws into its shell. Until it emerges, it gains a +4 bonus to AC and has advantage on Strength and Constitution saving throws. While in its shell, the tortle is {@condition prone}, its speed is 0 and can't increase, it has disadvantage on Dexterity saving throws, it can't take reactions, and the only action it can take is a bonus action to emerge."
					]
				}
			],
			"environment": [
				"coastal"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/tortle-druid.mp3"
			},
			"traitTags": [
				"Hold Breath"
			],
			"languageTags": [
				"AQ",
				"C"
			],
			"damageTags": [
				"B",
				"S"
			],
			"spellcastingTags": [
				"CD"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflictSpell": [
				"charmed",
				"paralyzed"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Vampiric Mist",
			"source": "MTF",
			"page": 246,
			"otherSources": [
				{
					"source": "TftYP",
					"page": 247
				}
			],
			"size": "M",
			"type": "undead",
			"alignment": [
				"C",
				"E"
			],
			"ac": [
				13
			],
			"hp": {
				"average": 30,
				"formula": "4d8 + 12"
			},
			"speed": {
				"walk": 0,
				"fly": {
					"number": 30,
					"condition": "(hover)"
				},
				"canHover": true
			},
			"str": 6,
			"dex": 16,
			"con": 16,
			"int": 6,
			"wis": 12,
			"cha": 7,
			"save": {
				"wis": "+3"
			},
			"senses": [
				"darkvision 60 ft."
			],
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
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"charmed",
				"exhaustion",
				"grappled",
				"paralyzed",
				"petrified",
				"poisoned",
				"prone",
				"restrained"
			],
			"cr": "3",
			"trait": [
				{
					"name": "Life Sense",
					"entries": [
						"The mist can sense the location of any creature within 60 feet of it, unless that creature's type is construct or undead."
					]
				},
				{
					"name": "Forbiddance",
					"entries": [
						"The mist can't enter a residence without an invitation from one of the occupants."
					]
				},
				{
					"name": "Misty Form",
					"entries": [
						"The mist can occupy another creature's space and vice versa. In addition, if air can pass through a space, the mist can pass through it without squeezing. Each foot of movement in water costs it 2 extra feet, rather than 1 extra foot. The mist can't manipulate objects in any way that requires fingers or manual dexterity."
					]
				},
				{
					"name": "Sunlight Hypersensitivity",
					"entries": [
						"The mist takes 10 radiant damage whenever it starts its turn in sunlight. While in sunlight, the mist has disadvantage on attack rolls and ability checks."
					]
				}
			],
			"action": [
				{
					"name": "Life Drain",
					"entries": [
						"The mist touches one creature in its space. The target must succeed on a {@dc 13} Constitution saving throw (undead and constructs automatically succeed), or it takes 10 ({@damage 2d6 + 3}) necrotic damage, the mist regains 10 hit points, and the target's hit point maximum is reduced by an amount equal to the necrotic damage taken. This reduction lasts until the target finishes a long rest. The target dies if its hit point maximum is reduced to 0."
					]
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
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/vampiric-mist.mp3"
			},
			"altArt": [
				{
					"name": "Vampiric Mist (Alt)",
					"source": "TftYP"
				}
			],
			"traitTags": [
				"Sunlight Sensitivity"
			],
			"senseTags": [
				"D"
			],
			"damageTags": [
				"N",
				"R"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Venom Troll",
			"source": "MTF",
			"page": 245,
			"size": "L",
			"type": "giant",
			"alignment": [
				"C",
				"E"
			],
			"ac": [
				{
					"ac": 15,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 94,
				"formula": "9d10 + 45"
			},
			"speed": {
				"walk": 30
			},
			"str": 18,
			"dex": 13,
			"con": 20,
			"int": 7,
			"wis": 9,
			"cha": 7,
			"skill": {
				"perception": "+2"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 12,
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"poisoned"
			],
			"languages": [
				"Giant"
			],
			"cr": "7",
			"trait": [
				{
					"name": "Keen Smell",
					"entries": [
						"The troll has advantage on Wisdom ({@skill Perception}) checks that rely on smell."
					]
				},
				{
					"name": "Poison Splash",
					"entries": [
						"When the troll takes damage of any type but psychic, each creature within 5 feet of the troll takes 9 ({@damage 2d8}) poison damage."
					]
				},
				{
					"name": "Regeneration",
					"entries": [
						"The troll regains 10 hit points at the start of each of its turns. If the troll takes acid or fire damage, this trait doesn't function at the start of the troll's next turn. The troll dies only if it starts its turn with 0 hit points and doesn't regenerate."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The troll makes three attacks: one with its bite and two with its claws."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 7} to hit, reach 5 ft., one target. {@h}7 ({@damage 1d6 + 4}) piercing damage plus 4 ({@damage 1d8}) poison damage, and the creature is {@condition poisoned} until the start of the troll's next turn."
					]
				},
				{
					"name": "Claws",
					"entries": [
						"{@atk mw} {@hit 7} to hit, reach 5 ft., one target. {@h}11 ({@damage 2d6 + 4}) slashing damage plus 4 ({@damage 1d8}) poison damage."
					]
				},
				{
					"name": "Venom Spray {@recharge}",
					"entries": [
						"The troll slices itself with a claw, releasing a spray of poison in a 15-foot cube. The troll takes 7 ({@damage 2d6}) slashing damage (this damage can't be reduced in any way). Each creature in the area must make a {@dc 16} Constitution saving throw. On a failed save, a creature takes 18 ({@damage 4d8}) poison damage and is {@condition poisoned} for 1 minute. On a successful save, the creature takes half as much damage and isn't {@condition poisoned}. A {@condition poisoned} creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
					]
				}
			],
			"environment": [
				"forest",
				"swamp",
				"underdark"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/venom-troll.mp3"
			},
			"traitTags": [
				"Keen Senses",
				"Regeneration"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"GI"
			],
			"damageTags": [
				"I",
				"P",
				"S"
			],
			"miscTags": [
				"AOE",
				"MW"
			],
			"conditionInflict": [
				"poisoned"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Wastrilith",
			"source": "MTF",
			"page": 139,
			"size": "L",
			"type": {
				"type": "fiend",
				"tags": [
					"demon"
				]
			},
			"alignment": [
				"C",
				"E"
			],
			"ac": [
				{
					"ac": 18,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 157,
				"formula": "15d10 + 75"
			},
			"speed": {
				"walk": 30,
				"swim": 80
			},
			"str": 19,
			"dex": 18,
			"con": 21,
			"int": 19,
			"wis": 12,
			"cha": 14,
			"save": {
				"str": "+9",
				"con": "+10"
			},
			"senses": [
				"darkvision 120 ft."
			],
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
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"poisoned"
			],
			"languages": [
				"Abyssal",
				"telepathy 120 ft."
			],
			"cr": "13",
			"trait": [
				{
					"name": "Amphibious",
					"entries": [
						"The wastrilith can breathe air and water."
					]
				},
				{
					"name": "Corrupt Water",
					"entries": [
						"At the start of each of the wastrilith's turns, exposed water within 30 feet of it is befouled. Underwater, this effect lightly obscures the area until a current clears it away. Water in containers remains corrupted until it evaporates.",
						"A creature that consumes this foul water or swims in it must make a {@dc 18} Constitution saving throw. On a successful save, the creature is immune to the foul water for 24 hours. On a failed save, the creature takes 14 ({@damage 4d6}) poison damage and is {@condition poisoned} for 1 minute. At the end of this time, the {@condition poisoned} creature must repeat the saving throw. On a failure, the creature takes 18 ({@damage 4d8}) poison damage and is {@condition poisoned} until it finishes a long rest.",
						"If another demon drinks the foul water as an action, it gains 11 ({@dice 2d10}) temporary hit points."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"The wastrilith has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Undertow",
					"entries": [
						"As a bonus action when the wastrilith is underwater, it can cause all water within 60 feet of it to be difficult terrain for other creatures until the start of its next turn."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The wastrilith uses Grasping Spout and makes three attacks: one with its bite and two with its claws."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 9} to hit, reach 10 ft., one target. {@h}30 ({@damage 4d12 + 4}) piercing damage."
					]
				},
				{
					"name": "Claws",
					"entries": [
						"{@atk mw} {@hit 9} to hit, reach 10 ft., one target. {@h}18 ({@damage 4d6 + 4}) slashing damage."
					]
				},
				{
					"name": "Grasping Spout",
					"entries": [
						"The wastrilith magically launches a spout of water at one creature it can see within 60 feet of it. The target must make a {@dc 17} Strength saving throw, and it has disadvantage if it's underwater. On a failed save, it takes 22 ({@damage 4d8 + 4}) acid damage and is pulled up to 60 feet toward the wastrilith. On a successful save, it takes half as much damage and isn't pulled."
					]
				}
			],
			"environment": [
				"coastal",
				"swamp",
				"underdark",
				"underwater"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/wastrilith.mp3"
			},
			"traitTags": [
				"Amphibious",
				"Magic Resistance"
			],
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"AB",
				"TP"
			],
			"damageTags": [
				"A",
				"I",
				"P",
				"S"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"poisoned"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Water Elemental Myrmidon",
			"source": "MTF",
			"page": 203,
			"otherSources": [
				{
					"source": "LR"
				},
				{
					"source": "PotA",
					"page": 213
				}
			],
			"size": "M",
			"type": "elemental",
			"alignment": [
				"N"
			],
			"ac": [
				{
					"ac": 18,
					"from": [
						"{@item plate armor|phb}"
					]
				}
			],
			"hp": {
				"average": 127,
				"formula": "17d8 + 51"
			},
			"speed": {
				"walk": 40,
				"swim": 40
			},
			"str": 18,
			"dex": 14,
			"con": 15,
			"int": 8,
			"wis": 10,
			"cha": 10,
			"senses": [
				"darkvision 60 ft."
			],
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
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"paralyzed",
				"petrified",
				"poisoned",
				"prone"
			],
			"languages": [
				"Aquan",
				"one language of its creator's choice"
			],
			"cr": "7",
			"trait": [
				{
					"name": "Magic Weapons",
					"entries": [
						"The myrmidon's weapon attacks are magical."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The myrmidon makes three trident attacks."
					]
				},
				{
					"name": "Trident",
					"entries": [
						"{@atk mw,rw} {@hit 7} to hit, reach 5 ft. or range 20/60 ft., one target. {@h}7 ({@damage 1d6 + 4}) piercing damage, or 8 ({@damage 1d8 + 4}) piercing damage if used with two hands to make a melee attack."
					]
				},
				{
					"name": "Freezing Strikes {@recharge}",
					"entries": [
						"The myrmidon uses Multiattack. Each attack that hits deals an extra 5 ({@damage 1d10}) cold damage. A target that is hit by one or more of these attacks has its speed reduced by 10 feet until the end of the myrmidon's next turn."
					]
				}
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/water-elemental-myrmidon.mp3"
			},
			"traitTags": [
				"Magic Weapons"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"AQ"
			],
			"damageTags": [
				"C",
				"P"
			],
			"miscTags": [
				"MW",
				"RW",
				"THW"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "White Abishai",
			"source": "MTF",
			"page": 163,
			"otherSources": [
				{
					"source": "BGDIA"
				}
			],
			"size": "M",
			"type": {
				"type": "fiend",
				"tags": [
					"devil"
				]
			},
			"alignment": [
				"L",
				"E"
			],
			"ac": [
				{
					"ac": 15,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 68,
				"formula": "8d8 + 32"
			},
			"speed": {
				"walk": 30,
				"fly": 40
			},
			"str": 16,
			"dex": 11,
			"con": 18,
			"int": 11,
			"wis": 12,
			"cha": 13,
			"save": {
				"str": "+6",
				"con": "+7"
			},
			"senses": [
				"darkvision 120 ft."
			],
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
			"immune": [
				"cold",
				"fire",
				"poison"
			],
			"conditionImmune": [
				"poisoned"
			],
			"languages": [
				"Draconic",
				"Infernal",
				"telepathy 120 ft."
			],
			"cr": "6",
			"trait": [
				{
					"name": "Devil's Sight",
					"entries": [
						"Magical darkness doesn't impede the abishai's darkvision."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"The abishai has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Magic Weapons",
					"entries": [
						"The abishai's weapon attacks are magical."
					]
				},
				{
					"name": "Reckless",
					"entries": [
						"At the start of its turn, the abishai can gain advantage on all melee weapon attack rolls during that turn, but attack rolls against it have advantage until the start of its next turn."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The abishai makes two attacks: one with its longsword and one with its claw."
					]
				},
				{
					"name": "Longsword",
					"entries": [
						"{@atk mw} {@hit 6} to hit, reach 5 ft., one target. {@h}7 ({@damage 1d8 + 3}) slashing damage, or 8 ({@damage 1d10 + 3}) slashing damage if used with two hands."
					]
				},
				{
					"name": "Claw",
					"entries": [
						"{@atk mw} {@hit 6} to hit, reach 5 ft., one target. {@h}8 ({@damage 1d10 + 3}) slashing damage."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 6} to hit, reach 5 ft., one target. {@h}5 ({@damage 1d4 + 3}) piercing damage plus 3 ({@damage 1d6}) cold damage."
					]
				}
			],
			"reaction": [
				{
					"name": "Vicious Reprisal",
					"entries": [
						"In response to taking damage, the abishai makes a bite attack against a random creature within 5 feet of it. If no creature is within reach, the abishai moves up to half its speed toward an enemy it can see, without provoking opportunity attacks."
					]
				}
			],
			"environment": [
				"urban"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/white-abishai.mp3"
			},
			"traitTags": [
				"Devil's Sight",
				"Magic Resistance",
				"Magic Weapons",
				"Reckless"
			],
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"DR",
				"I",
				"TP"
			],
			"damageTags": [
				"C",
				"P",
				"S"
			],
			"miscTags": [
				"MW"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Winter Eladrin",
			"source": "MTF",
			"page": 197,
			"size": "M",
			"type": {
				"type": "fey",
				"tags": [
					"elf"
				]
			},
			"alignment": [
				"C",
				"N"
			],
			"ac": [
				{
					"ac": 19,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 127,
				"formula": "17d8 + 51"
			},
			"speed": {
				"walk": 30
			},
			"str": 11,
			"dex": 10,
			"con": 16,
			"int": 18,
			"wis": 17,
			"cha": 13,
			"senses": [
				"darkvision 60 ft."
			],
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
			"languages": [
				"Common",
				"Elvish",
				"Sylvan"
			],
			"cr": "10",
			"spellcasting": [
				{
					"name": "Innate Spellcasting",
					"headerEntries": [
						"The eladrin's innate spellcasting ability is Intelligence (spell save {@dc 16}). It can innately cast the following spells, requiring no material components:"
					],
					"will": [
						"{@spell fog cloud}",
						"{@spell gust of wind}"
					],
					"daily": {
						"1e": [
							"{@spell cone of cold}",
							"{@spell ice storm}"
						]
					},
					"ability": "int"
				}
			],
			"trait": [
				{
					"name": "Fey Step {@recharge 4}",
					"entries": [
						"As a bonus action, the eladrin can teleport up to 30 feet to an unoccupied space it can see."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"The eladrin has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Sorrowful Presence",
					"entries": [
						"Any non-eladrin creature that starts its turn within 60 feet of the eladrin must make a {@dc 13} Wisdom saving throw. On a failed save, the creature is {@condition charmed} for 1 minute. While {@condition charmed} in this way, the creature has disadvantage on ability checks and saving throws. The {@condition charmed} creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to any eladrin's Sorrowful Presence for the next 24 hours.",
						"Whenever the eladrin deals damage to the {@condition charmed} creature, it can repeat the saving throw, ending the effect on itself on a success."
					]
				}
			],
			"action": [
				{
					"name": "Longsword",
					"entries": [
						"{@atk mw} {@hit 4} to hit, reach 5 ft., one target. {@h}4 ({@damage 1d8}) slashing damage, or 5 ({@damage 1d10}) slashing damage if used with two hands."
					]
				},
				{
					"name": "Longbow",
					"entries": [
						"{@atk rw} {@hit 4} to hit, range 150/600 ft., one target. {@h}4 ({@damage 1d8}) piercing damage."
					]
				}
			],
			"reaction": [
				{
					"name": "Frigid Rebuke",
					"entries": [
						"When the eladrin takes damage from a creature the eladrin can see within 60 feet of it, the eladrin can force that creature to succeed on a {@dc 16} Constitution saving throw or take 11 ({@damage 2d10}) cold damage."
					]
				}
			],
			"environment": [
				"arctic",
				"forest"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/winter-eladrin.mp3"
			},
			"traitTags": [
				"Magic Resistance"
			],
			"senseTags": [
				"D"
			],
			"languageTags": [
				"C",
				"E",
				"S"
			],
			"damageTags": [
				"C",
				"P",
				"S"
			],
			"spellcastingTags": [
				"I"
			],
			"miscTags": [
				"MW",
				"RNG",
				"RW"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Yagnoloth",
			"source": "MTF",
			"page": 252,
			"size": "L",
			"type": {
				"type": "fiend",
				"tags": [
					"yugoloth"
				]
			},
			"alignment": [
				"N",
				"E"
			],
			"ac": [
				{
					"ac": 17,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 147,
				"formula": "14d10 + 70"
			},
			"speed": {
				"walk": 40
			},
			"str": 19,
			"dex": 14,
			"con": 21,
			"int": 16,
			"wis": 15,
			"cha": 18,
			"save": {
				"dex": "+6",
				"int": "+7",
				"wis": "+6",
				"cha": "+8"
			},
			"skill": {
				"deception": "+8",
				"insight": "+6",
				"perception": "+6",
				"persuasion": "+8"
			},
			"senses": [
				"blindsight 60 ft.",
				"darkvision 60 ft."
			],
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
			"immune": [
				"acid",
				"poison"
			],
			"conditionImmune": [
				"poisoned"
			],
			"languages": [
				"Abyssal",
				"Infernal",
				"telepathy 60 ft."
			],
			"cr": "11",
			"spellcasting": [
				{
					"name": "Innate Spellcasting",
					"headerEntries": [
						"The yagnoloth's innate spellcasting ability is Charisma (spell save {@dc 16}). It can innately cast the following spells, requiring no material components:"
					],
					"will": [
						"{@spell darkness}",
						"{@spell detect magic}",
						"{@spell dispel magic}",
						"{@spell invisibility} (self only)",
						"{@spell suggestion}"
					],
					"daily": {
						"3": [
							"{@spell lightning bolt}"
						]
					},
					"ability": "cha"
				}
			],
			"trait": [
				{
					"name": "Magic Resistance",
					"entries": [
						"The yagnoloth has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Magic Weapons",
					"entries": [
						"The yagnoloth's weapon attacks are magical."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The yagnoloth makes one massive arm attack and one electrified touch attack, or it makes one massive arm attack and teleports before or after the attack."
					]
				},
				{
					"name": "Electrified Touch",
					"entries": [
						"{@atk mw} {@hit 8} to hit, reach 5 ft., one target. {@h}27 ({@damage 6d8}) lightning damage."
					]
				},
				{
					"name": "Massive Arm",
					"entries": [
						"{@atk mw} {@hit 8} to hit, reach 15 ft., one target. {@h}23 ({@damage 3d12 + 4}) bludgeoning damage. If the target is a creature, it must succeed on a {@dc 16} Constitution saving throw or is {@condition stunned} until the end of the yagnoloth's next turn."
					]
				},
				{
					"name": "Life Leech",
					"entries": [
						"The yagnoloth touches one {@condition incapacitated} creature within 15 feet of it. The target takes 36 ({@damage 7d8 + 4}) necrotic damage, and the yagnoloth gains temporary hit points equal to half the damage dealt. The target must succeed on a {@dc 16} Constitution saving throw, or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest, and the target dies if its hit point maximum is reduced to 0."
					]
				},
				{
					"name": "Battlefield Cunning {@recharge 4}",
					"entries": [
						"Up to two allied yugoloths within 60 feet of the yagnoloth that can hear it can use their reactions to make one melee attack each."
					]
				},
				{
					"name": "Teleport",
					"entries": [
						"The yagnoloth magically teleports, along with any equipment it is wearing or carrying, up to 60 feet to an unoccupied space it can see."
					]
				}
			],
			"environment": [
				"urban"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/yagnoloth.mp3"
			},
			"traitTags": [
				"Magic Resistance",
				"Magic Weapons"
			],
			"senseTags": [
				"B",
				"D"
			],
			"actionTags": [
				"Multiattack",
				"Teleport"
			],
			"languageTags": [
				"AB",
				"I",
				"TP"
			],
			"damageTags": [
				"B",
				"L",
				"N"
			],
			"spellcastingTags": [
				"I"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"stunned"
			],
			"conditionInflictSpell": [
				"invisible"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Yeenoghu",
			"isNamedCreature": true,
			"source": "MTF",
			"page": 155,
			"otherSources": [
				{
					"source": "OotA",
					"page": 247
				},
				{
					"source": "BGDIA"
				}
			],
			"size": "H",
			"type": {
				"type": "fiend",
				"tags": [
					"demon"
				]
			},
			"alignment": [
				"C",
				"E"
			],
			"ac": [
				{
					"ac": 20,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 333,
				"formula": "23d12 + 184"
			},
			"speed": {
				"walk": 50
			},
			"str": 29,
			"dex": 16,
			"con": 26,
			"int": 15,
			"wis": 24,
			"cha": 15,
			"save": {
				"dex": "+10",
				"con": "+15",
				"wis": "+14"
			},
			"skill": {
				"intimidation": "+9",
				"perception": "+14"
			},
			"senses": [
				"truesight 120 ft."
			],
			"passive": 24,
			"resist": [
				"cold",
				"fire",
				"lightning"
			],
			"immune": [
				"poison",
				{
					"immune": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks",
					"cond": true
				}
			],
			"conditionImmune": [
				"charmed",
				"exhaustion",
				"frightened",
				"poisoned"
			],
			"languages": [
				"all",
				"telepathy 120 ft."
			],
			"cr": "24",
			"spellcasting": [
				{
					"name": "Innate Spellcasting",
					"headerEntries": [
						"Yeenoghu's spellcasting ability is Charisma (spell save {@dc 17}, {@hit 9} to hit with spell attacks). He can innately cast the following spells, requiring no material components:"
					],
					"will": [
						"{@spell detect magic}"
					],
					"daily": {
						"1": [
							"{@spell teleport}"
						],
						"3e": [
							"{@spell dispel magic}",
							"{@spell fear}",
							"{@spell invisibility}"
						]
					},
					"ability": "cha"
				}
			],
			"trait": [
				{
					"name": "Legendary Resistance (3/Day)",
					"entries": [
						"If Yeenoghu fails a saving throw, he can choose to succeed instead."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"Yeenoghu has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Magic Weapons",
					"entries": [
						"Yeenoghu's weapon attacks are magical."
					]
				},
				{
					"name": "Rampage",
					"entries": [
						"When Yeenoghu reduces a creature to 0 hit points with a melee attack on his turn, Yeenoghu can take a bonus action to move up to half his speed and make a bite attack."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"Yeenoghu makes three flail attacks. If an attack hits, he can cause it to create an additional effect of his choice or at random (each effect can be used only once per Multiattack):",
						"1. The attack deals an extra 13 ({@damage 2d12}) bludgeoning damage.",
						"2. The target must succeed on a {@dc 17} Constitution saving throw or be {@condition paralyzed} until the start of Yeenoghu's next turn.",
						"3. The target must succeed on a {@dc 17} Wisdom saving throw or be affected by the {@spell confusion} spell until the start of Yeenoghu's next turn."
					]
				},
				{
					"name": "Flail",
					"entries": [
						"{@atk mw} {@hit 16} to hit, reach 15 ft., one target. {@h}15 ({@damage 1d12 + 9}) bludgeoning damage."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 16} to hit, reach 10 ft., one target. {@h}14 ({@damage 1d10 + 9}) piercing damage."
					]
				}
			],
			"legendary": [
				{
					"name": "Charge",
					"entries": [
						"Yeenoghu moves up to his speed."
					]
				},
				{
					"name": "Swat Away",
					"entries": [
						"Yeenoghu makes a flail attack. If the attack hits, the target must succeed on a {@dc 24} Strength saving throw or be pushed 15 feet in a straight line away from Yeenoghu. If the saving throw fails by 5 or more, the target falls {@condition prone}."
					]
				},
				{
					"name": "Savage (Costs 2 Actions)",
					"entries": [
						"Yeenoghu makes a bite attack against each creature within 10 feet of him."
					]
				}
			],
			"legendaryGroup": {
				"name": "Yeenoghu",
				"source": "MTF"
			},
			"hasToken": true,
			"traitTags": [
				"Legendary Resistances",
				"Magic Resistance",
				"Magic Weapons",
				"Rampage"
			],
			"senseTags": [
				"U"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"TP",
				"XX"
			],
			"damageTags": [
				"B",
				"P"
			],
			"spellcastingTags": [
				"I"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"paralyzed",
				"prone"
			],
			"conditionInflictLegendary": [
				"restrained"
			],
			"conditionInflictSpell": [
				"frightened",
				"invisible"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Young Kruthik",
			"source": "MTF",
			"page": 211,
			"size": "S",
			"type": "monstrosity",
			"alignment": [
				"U"
			],
			"ac": [
				{
					"ac": 16,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 9,
				"formula": "2d6 + 2"
			},
			"speed": {
				"walk": 30,
				"burrow": 10,
				"climb": 30
			},
			"str": 13,
			"dex": 16,
			"con": 13,
			"int": 4,
			"wis": 10,
			"cha": 6,
			"senses": [
				"darkvision 30 ft.",
				"tremorsense 60 ft."
			],
			"passive": 10,
			"languages": [
				"Kruthik"
			],
			"cr": "1/8",
			"trait": [
				{
					"name": "Keen Smell",
					"entries": [
						"The kruthik has advantage on Wisdom ({@skill Perception}) checks that rely on smell."
					]
				},
				{
					"name": "Pack Tactics",
					"entries": [
						"The kruthik has advantage on an attack roll against a creature if at least one of the kruthik's allies is within 5 feet of the creature and the ally isn't {@condition incapacitated}."
					]
				},
				{
					"name": "Tunneler",
					"entries": [
						"The kruthik can burrow through solid rock at half its burrowing speed and leaves a 2 1/2-foot-diameter tunnel in its wake."
					]
				}
			],
			"action": [
				{
					"name": "Stab",
					"entries": [
						"{@atk mw} {@hit 5} to hit, reach 5 ft., one target. {@h}5 ({@damage 1d4 + 3}) piercing damage."
					]
				}
			],
			"environment": [
				"desert",
				"mountain",
				"underdark"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/young-kruthik.mp3"
			},
			"traitTags": [
				"Keen Senses",
				"Pack Tactics"
			],
			"senseTags": [
				"D",
				"T"
			],
			"languageTags": [
				"OTH"
			],
			"damageTags": [
				"P"
			],
			"miscTags": [
				"MW"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Zaratan",
			"source": "MTF",
			"page": 201,
			"size": "G",
			"type": "elemental",
			"alignment": [
				"N"
			],
			"ac": [
				{
					"ac": 21,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 307,
				"formula": "15d20 + 150"
			},
			"speed": {
				"walk": 40,
				"swim": 40
			},
			"str": 30,
			"dex": 10,
			"con": 30,
			"int": 2,
			"wis": 21,
			"cha": 18,
			"save": {
				"wis": "+12",
				"cha": "+11"
			},
			"senses": [
				"darkvision 60 ft.",
				"tremorsense 60 ft."
			],
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
			"immune": [
				"poison"
			],
			"vulnerable": [
				"thunder"
			],
			"conditionImmune": [
				"exhaustion",
				"paralyzed",
				"petrified",
				"poisoned",
				"stunned"
			],
			"cr": "22",
			"trait": [
				{
					"name": "Earth-Shaking Movement",
					"entries": [
						"As a bonus action after moving at least 10 feet on the ground, the zaratan can send a shock wave through the ground in a 120-foot-radius circle centered on itself. That area becomes difficult terrain for 1 minute. Each creature on the ground that is concentrating must succeed on a {@dc 25} Constitution saving throw or the creature's concentration is broken.",
						"The shock wave deals 100 thunder damage to all structures in contact with the ground in the area. If a creature is near a structure that collapses, the creature might be buried; a creature within half the distance of the structure's height must make a {@dc 25} Dexterity saving throw. On a failed save, the creature takes 17 ({@damage 5d6}) bludgeoning damage, is knocked {@condition prone}, and is trapped in the rubble. A trapped creature is {@condition restrained}, requiring a successful {@dc 20} Strength (Athletics) check as an action to escape. Another creature within 5 feet of the buried creature can use its action to clear rubble and grant advantage on the check. If three creatures use their actions in this way, the check is an automatic success. On a successful save, the creature takes half as much damage and doesn't fall {@condition prone} or become trapped."
					]
				},
				{
					"name": "Legendary Resistance (3/Day)",
					"entries": [
						"If the zaratan fails a saving throw, it can choose to succeed instead."
					]
				},
				{
					"name": "Magic Weapons",
					"entries": [
						"The zaratan's weapon attacks are magical."
					]
				},
				{
					"name": "Siege Monster",
					"entries": [
						"The elemental deals double damage to objects and structures (included in Earth-Shaking Movement)."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The zaratan makes two attacks: one with its bite and one with its stomp."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 17} to hit, reach 20 ft., one target. {@h}28 ({@damage 4d8 + 10}) piercing damage."
					]
				},
				{
					"name": "Stomp",
					"entries": [
						"{@atk mw} {@hit 17} to hit, reach 20 ft., one target. {@h}26 ({@damage 3d10 + 10}) bludgeoning damage."
					]
				},
				{
					"name": "Spit Rock",
					"entries": [
						"{@atk rw} {@hit 17} to hit, range 120/240 ft., one target. {@h}31 ({@damage 6d8 + 10}) bludgeoning damage."
					]
				},
				{
					"name": "Spew Debris {@recharge 5}",
					"entries": [
						"The zaratan exhales rocky debris in a 90-foot cube. Each creature in that area must make a {@dc 25} Dexterity saving throw. A creature takes 33 ({@damage 6d10}) bludgeoning damage on a failed save, or half as much damage on a successful one. A creature that fails the save by 5 or more is knocked {@condition prone}."
					]
				}
			],
			"legendary": [
				{
					"name": "Stomp",
					"entries": [
						"The zaratan makes one stomp attack."
					]
				},
				{
					"name": "Move",
					"entries": [
						"The zaratan moves up to its speed."
					]
				},
				{
					"name": "Spit (Costs 2 Actions)",
					"entries": [
						"The zaratan uses Spit Rock."
					]
				},
				{
					"name": "Retract (Costs 2 Actions)",
					"entries": [
						"The zaratan retracts into its shell. Until it takes its Emerge action, it has resistance to all damage, and it is {@condition restrained}. The next time it takes a legendary action, it must take its Revitalize or Emerge action."
					]
				},
				{
					"name": "Revitalize (Costs 2 Actions)",
					"entries": [
						"The zaratan can use this option only if it is retracted in its shell. It regains 52 ({@dice 5d20}) hit points. The next time it takes a legendary action, it must take its Emerge action."
					]
				},
				{
					"name": "Emerge (Costs 2 Actions)",
					"entries": [
						"The zaratan emerges from its shell and uses Spit Rock. It can use this option only if it is retracted in its shell."
					]
				}
			],
			"environment": [
				"desert",
				"forest",
				"grassland",
				"hill",
				"mountain",
				"underdark"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/zaratan.mp3"
			},
			"traitTags": [
				"Legendary Resistances",
				"Magic Weapons",
				"Siege Monster"
			],
			"senseTags": [
				"D",
				"T"
			],
			"actionTags": [
				"Multiattack"
			],
			"damageTags": [
				"B",
				"P",
				"T"
			],
			"miscTags": [
				"AOE",
				"MW",
				"RCH",
				"RW"
			],
			"conditionInflict": [
				"prone",
				"restrained"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Zariel",
			"isNamedCreature": true,
			"source": "MTF",
			"page": 180,
			"size": "L",
			"type": {
				"type": "fiend",
				"tags": [
					"devil"
				]
			},
			"alignment": [
				"L",
				"E"
			],
			"ac": [
				{
					"ac": 21,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 580,
				"formula": "40d10 + 360"
			},
			"speed": {
				"walk": 50,
				"fly": 150
			},
			"str": 27,
			"dex": 24,
			"con": 28,
			"int": 26,
			"wis": 27,
			"cha": 30,
			"save": {
				"int": "+16",
				"wis": "+16",
				"cha": "+18"
			},
			"skill": {
				"intimidation": "+18",
				"perception": "+16"
			},
			"senses": [
				"darkvision 120 ft."
			],
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
			"immune": [
				"necrotic",
				"poison"
			],
			"conditionImmune": [
				"charmed",
				"exhaustion",
				"frightened",
				"poisoned"
			],
			"languages": [
				"all",
				"telepathy 120 ft."
			],
			"cr": "26",
			"spellcasting": [
				{
					"name": "Innate Spellcasting",
					"headerEntries": [
						"Zariel's innate spellcasting ability is Charisma (spell save {@dc 26}). She can innately cast the following spells, requiring no material components:"
					],
					"will": [
						"{@spell alter self} (can become Medium when changing her appearance)",
						"{@spell detect evil and good}",
						"{@spell fireball}",
						"{@spell invisibility} (self only)",
						"{@spell wall of fire}"
					],
					"daily": {
						"3e": [
							"{@spell blade barrier}",
							"{@spell dispel evil and good}",
							"{@spell finger of death}"
						]
					},
					"ability": "cha"
				}
			],
			"trait": [
				{
					"name": "Devil's Sight",
					"entries": [
						"Magical darkness doesn't impede Zariel's darkvision."
					]
				},
				{
					"name": "Magic Weapons",
					"entries": [
						"Zariel's weapon attacks are magical. When she hits with any weapon, the weapon deals an extra 36 ({@damage 8d8}) fire damage (included in the weapon attacks below)."
					]
				},
				{
					"name": "Legendary Resistance (3/Day)",
					"entries": [
						"If Zariel fails a saving throw, she can choose to succeed instead."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"Zariel has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Regeneration",
					"entries": [
						"Zariel regains 20 hit points at the start of her turn. If she takes radiant damage, this trait doesn't function at the start of her next turn. Zariel dies only if she starts her turn with 0 hit points and doesn't regenerate."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"Zariel attacks twice with her longsword or with her javelins. She can substitute Horrid Touch for one of these attacks."
					]
				},
				{
					"name": "Longsword",
					"entries": [
						"{@atk mw} {@hit 16} to hit, reach 10 ft., one target. {@h}17 ({@damage 2d8 + 8}) slashing damage plus 36 ({@damage 8d8}) fire damage, or 19 ({@damage 2d10 + 8}) slashing damage plus 36 ({@damage 8d8}) fire damage if used with two hands."
					]
				},
				{
					"name": "Javelin",
					"entries": [
						"{@atk mw,rw} {@hit 16} to hit, reach 10 ft. or range 30/120 ft., one target. {@h}15 ({@damage 2d6 + 8}) piercing damage plus 36 ({@damage 8d8}) fire damage."
					]
				},
				{
					"name": "Horrid Touch {@recharge 5}",
					"entries": [
						"Zariel touches one creature within 10 feet of her. The target must succeed on a DC 26 Constitution saving throw or take 44 ({@damage 8d10}) necrotic damage and be {@condition poisoned} for 1 minute. While {@condition poisoned} in this way, the target is also {@condition blinded} and {@condition deafened}. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
					]
				},
				{
					"name": "Teleport",
					"entries": [
						"Zariel magically teleports, along with any equipment she is wearing and carrying, up to 120 feet to an unoccupied space she can see."
					]
				}
			],
			"legendary": [
				{
					"name": "Immolating Gaze (Costs 2 Actions)",
					"entries": [
						"Zariel turns her magical gaze toward one creature she can see within 120 feet of her and commands it to combust. The target must succeed on a {@dc 26} Wisdom saving throw or take 22 ({@damage 4d10}) fire damage."
					]
				},
				{
					"name": "Teleport",
					"entries": [
						"Zariel uses her Teleport action."
					]
				}
			],
			"legendaryGroup": {
				"name": "Zariel",
				"source": "MTF"
			},
			"hasToken": true,
			"traitTags": [
				"Devil's Sight",
				"Legendary Resistances",
				"Magic Resistance",
				"Magic Weapons",
				"Regeneration"
			],
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Multiattack",
				"Teleport"
			],
			"languageTags": [
				"TP",
				"XX"
			],
			"damageTags": [
				"F",
				"N",
				"P",
				"S"
			],
			"spellcastingTags": [
				"I"
			],
			"miscTags": [
				"MW",
				"RCH",
				"RW",
				"THW"
			],
			"conditionInflict": [
				"blinded",
				"deafened",
				"poisoned"
			],
			"conditionInflictLegendary": [
				"frightened"
			],
			"conditionInflictSpell": [
				"invisible"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Zuggtmoy",
			"isNamedCreature": true,
			"source": "MTF",
			"page": 157,
			"otherSources": [
				{
					"source": "OotA",
					"page": 249
				}
			],
			"size": "L",
			"type": {
				"type": "fiend",
				"tags": [
					"demon"
				]
			},
			"alignment": [
				"C",
				"E"
			],
			"ac": [
				{
					"ac": 18,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 304,
				"formula": "32d10 + 128"
			},
			"speed": {
				"walk": 30
			},
			"str": 22,
			"dex": 15,
			"con": 18,
			"int": 20,
			"wis": 19,
			"cha": 24,
			"save": {
				"dex": "+9",
				"con": "+11",
				"wis": "+11"
			},
			"skill": {
				"perception": "+11"
			},
			"senses": [
				"truesight 120 ft."
			],
			"passive": 21,
			"resist": [
				"cold",
				"fire",
				"lightning"
			],
			"immune": [
				"poison",
				{
					"immune": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks",
					"cond": true
				}
			],
			"conditionImmune": [
				"charmed",
				"exhaustion",
				"frightened",
				"poisoned"
			],
			"languages": [
				"all",
				"telepathy 120 ft."
			],
			"cr": "23",
			"spellcasting": [
				{
					"name": "Innate Spellcasting",
					"headerEntries": [
						"Zuggtmoy's spellcasting ability is Charisma (spell save {@dc 22}). She can innately cast the following spells, requiring no material components:"
					],
					"will": [
						"{@spell detect magic}",
						"{@spell locate animals or plants}",
						"{@spell ray of sickness}"
					],
					"daily": {
						"3e": [
							"{@spell dispel magic}",
							"{@spell ensnaring strike}",
							"{@spell entangle}",
							"{@spell plant growth}"
						],
						"1e": [
							"{@spell etherealness}",
							"{@spell teleport}"
						]
					},
					"ability": "cha"
				}
			],
			"trait": [
				{
					"name": "Legendary Resistance (3/Day)",
					"entries": [
						"If Zuggtmoy fails a saving throw, she can choose to succeed instead."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"Zuggtmoy has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Magic Weapons",
					"entries": [
						"Zuggtmoy's weapon attacks are magical."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"Zuggtmoy makes three pseudopod attacks."
					]
				},
				{
					"name": "Pseudopod",
					"entries": [
						"{@atk mw} {@hit 13} to hit, reach 10 ft., one target. {@h}15 ({@damage 2d8 + 6}) bludgeoning damage plus 9 ({@damage 2d8}) poison damage."
					]
				},
				{
					"name": "Infestation Spores (3/Day)",
					"entries": [
						"Zuggtmoy releases spores that burst out in a cloud that fills a 20-foot-radius sphere centered on her, and it lingers for 1 minute. Any flesh-and-blood creature in the cloud when it appears, or that enters it later, must make a {@dc 19} Constitution saving throw. On a successful save, the creature can't be infected by these spores for 24 hours. On a failed save, the creature is infected with a disease called the spores of Zuggtmoy and also gains a random form of madness (determined by rolling on the Madness of Zuggtmoy table) that lasts until the creature is cured of the disease or dies. While infected in this way, the creature can't be reinfected, and it must repeat the saving throw at the end of every 24 hours, ending the infection on a success. On a failure, the infected creature's body is slowly taken over by fungal growth, and after three such failed saves, the creature dies and is reanimated as a spore servant if it's a type of creature that can be (see the \"Myconids\" entry in the Monster Manual)."
					]
				},
				{
					"name": "Mind Control Spores {@recharge 5}",
					"entries": [
						"Zuggtmoy releases spores that burst out in a cloud that fills a 20-foot-radius sphere centered on her, and it lingers for 1 minute. Humanoids and beasts in the cloud when it appears, or that enter it later, must make a {@dc 19} Wisdom saving throw. On a successful save, the creature can't be infected by these spores for 24 hours. On a failed save, the creature is infected with a disease called the influence of Zuggtmoy for 24 hours. While infected in this way, the creature is {@condition charmed} by her and can't be reinfected by these spores."
					]
				}
			],
			"reaction": [
				{
					"name": "Protective Thrall",
					"entries": [
						"When Zuggtmoy is hit by an attack, one creature within 5 feet of Zuggtmoy that is {@condition charmed} by her must use its reaction to be hit by the attack instead."
					]
				}
			],
			"legendary": [
				{
					"name": "Attack",
					"entries": [
						"Zuggtmoy makes one pseudopod attack."
					]
				},
				{
					"name": "Exert Will",
					"entries": [
						"One creature {@condition charmed} by Zuggtmoy that she can see must use its reaction to move up to its speed as she directs or to make a weapon attack against a target that she designates."
					]
				}
			],
			"legendaryGroup": {
				"name": "Zuggtmoy",
				"source": "MTF"
			},
			"hasToken": true,
			"traitTags": [
				"Legendary Resistances",
				"Magic Resistance",
				"Magic Weapons"
			],
			"senseTags": [
				"U"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"TP",
				"XX"
			],
			"damageTags": [
				"B",
				"I"
			],
			"spellcastingTags": [
				"I"
			],
			"miscTags": [
				"AOE",
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"charmed"
			],
			"conditionInflictSpell": [
				"poisoned",
				"restrained"
			],
			"hasFluff": true,
			"hasFluffImages": true
		}
	]
}
