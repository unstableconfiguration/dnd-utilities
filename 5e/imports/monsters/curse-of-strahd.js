/* Credit to the makers of 5etools */
export let curseOfStrahd = [
		{
			"name": "Amber Golem",
			"source": "CoS",
			"page": 186,
			"_copy": {
				"name": "Stone Golem",
				"source": "MM"
			},
			"hasToken": true,
			"hasFluffImages": true
		},
		{
			"name": "Anastrasya Karelova",
			"isNpc": true,
			"source": "CoS",
			"page": 93,
			"_copy": {
				"name": "Vampire Spawn",
				"source": "MM",
				"_mod": {
					"*": {
						"mode": "replaceTxt",
						"replace": "the vampire",
						"with": "Anastrasya",
						"flags": "i"
					}
				}
			},
			"hasToken": true
		},
		{
			"name": "Animated Halberd",
			"source": "CoS",
			"page": 59,
			"_copy": {
				"name": "Flying Sword",
				"source": "MM"
			},
			"ac": [
				{
					"ac": 15,
					"from": [
						"natural armor"
					]
				}
			],
			"action": [
				{
					"name": "Halberd",
					"entries": [
						"{@atk mw} {@hit 3} to hit, reach 5 ft., one target. {@h}5 ({@damage 1d10 + 1}) slashing damage."
					]
				}
			],
			"hasToken": true
		},
		{
			"name": "Arabelle",
			"isNpc": true,
			"source": "CoS",
			"page": 38,
			"_copy": {
				"name": "Commoner",
				"source": "MM",
				"_mod": {
					"action": "remove"
				}
			},
			"type": {
				"type": "humanoid",
				"tags": [
					"human"
				]
			},
			"alignment": [
				"L",
				"N"
			],
			"hp": {
				"average": 2,
				"formula": "1d8"
			},
			"hasToken": true,
			"miscTags": []
		},
		{
			"name": "Armored Saber-Toothed Tiger",
			"source": "CoS",
			"page": 115,
			"_copy": {
				"name": "Saber-Toothed Tiger",
				"source": "MM"
			},
			"ac": [
				{
					"ac": 17,
					"from": [
						"{@item half plate armor|phb}"
					]
				}
			],
			"hp": {
				"average": 84,
				"formula": "7d10 + 14"
			},
			"cr": "3",
			"hasToken": true
		},
		{
			"name": "Arrigal",
			"isNpc": true,
			"source": "CoS",
			"page": 121,
			"_copy": {
				"name": "Vistana Assassin",
				"source": "CoS",
				"_mod": {
					"*": {
						"mode": "replaceTxt",
						"replace": "the assassin",
						"with": "Arrigal",
						"flags": "i"
					}
				}
			},
			"type": {
				"type": "humanoid",
				"tags": [
					"human"
				]
			},
			"alignment": [
				"N",
				"E"
			],
			"hasToken": true
		},
		{
			"name": "Baba Lysaga",
			"group": "Hags",
			"isNpc": true,
			"source": "CoS",
			"page": 228,
			"size": "M",
			"type": {
				"type": "humanoid",
				"tags": [
					"human",
					"shapechanger"
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
				"average": 120,
				"formula": "16d8 + 48"
			},
			"speed": {
				"walk": 30
			},
			"str": 18,
			"dex": 10,
			"con": 16,
			"int": 20,
			"wis": 17,
			"cha": 13,
			"save": {
				"wis": "+7"
			},
			"skill": {
				"arcana": "+13",
				"religion": "+13"
			},
			"passive": 13,
			"languages": [
				"Abyssal",
				"Common",
				"Draconic",
				"Dwarvish",
				"Giant"
			],
			"cr": "11",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"Baba Lysaga is a 16th-level spellcaster. Her spellcasting ability is Intelligence (spell save {@dc 17}, {@hit 9} to hit with spell attacks). Baba Lysaga has the following wizard spells prepared:"
					],
					"spells": {
						"0": {
							"spells": [
								"{@spell acid splash}",
								"{@spell fire bolt}",
								"{@spell light}",
								"{@spell mage hand}",
								"{@spell prestidigitation}"
							]
						},
						"1": {
							"slots": 4,
							"spells": [
								"{@spell detect magic}",
								"{@spell magic missile}",
								"{@spell sleep}",
								"{@spell witch bolt}"
							]
						},
						"2": {
							"slots": 3,
							"spells": [
								"{@spell crown of madness}",
								"{@spell enlarge/reduce}",
								"{@spell misty step}"
							]
						},
						"3": {
							"slots": 3,
							"spells": [
								"{@spell dispel magic}",
								"{@spell fireball}",
								"{@spell lightning bolt}"
							]
						},
						"4": {
							"slots": 3,
							"spells": [
								"{@spell blight}",
								"{@spell Evard's black tentacles}",
								"{@spell polymorph}"
							]
						},
						"5": {
							"slots": 2,
							"spells": [
								"{@spell cloudkill}",
								"{@spell geas}",
								"{@spell scrying}"
							]
						},
						"6": {
							"slots": 1,
							"spells": [
								"{@spell programmed illusion}",
								"{@spell true seeing}"
							]
						},
						"7": {
							"slots": 1,
							"spells": [
								"{@spell finger of death}",
								"{@spell mirage arcane}"
							]
						},
						"8": {
							"slots": 1,
							"spells": [
								"{@spell power word stun}"
							]
						}
					},
					"ability": "int"
				}
			],
			"trait": [
				{
					"name": "Shapechanger",
					"entries": [
						"Baba Lysaga can use an action to polymorph into a {@creature swarm of insects} (flies), or back into her true form. While in swarm form, she has a walking speed of 5 feet and a flying speed of 30 feet. Anything she is wearing transforms with her, but nothing she is carrying does."
					]
				},
				{
					"name": "Blessing of Mother Night",
					"entries": [
						"Baba Lysaga is shielded against divination magic, as though protected by a {@spell nondetection} spell."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"Baba Lysaga makes three attacks with her quarterstaff."
					]
				},
				{
					"name": "Quarterstaff",
					"entries": [
						"{@atk mw} {@hit 8} to hit, reach 5 ft., one target. {@h}7 ({@damage 1d6 + 4}) bludgeoning damage, or 8 ({@damage 1d8 + 4}) bludgeoning damage if wielded with two hands."
					]
				},
				{
					"name": "Summon Swarms of Insects (Recharges after a Short or Long Rest)",
					"entries": [
						"Baba Lysaga summons {@dice 1d4} swarms of insects. A summoned swarm appears in an unoccupied space within 60 feet of Baba Lysaga and acts as her ally. It remains until it dies or until Baba Lysaga dismisses it as an action."
					]
				}
			],
			"hasToken": true,
			"traitTags": [
				"Shapechanger"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"AB",
				"C",
				"D",
				"DR",
				"GI"
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
			"hasFluff": true
		},
		{
			"name": "Baba Lysaga's Creeping Hut",
			"isNpc": true,
			"source": "CoS",
			"page": 226,
			"size": "G",
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
				"average": 263,
				"formula": "17d20 + 85"
			},
			"speed": {
				"walk": 30
			},
			"str": 26,
			"dex": 7,
			"con": 20,
			"int": 1,
			"wis": 3,
			"cha": 3,
			"save": {
				"con": "+9",
				"wis": "+0",
				"cha": "+0"
			},
			"senses": [
				"blindsight 120 ft. (blind beyond this radius)"
			],
			"passive": 6,
			"immune": [
				"poison",
				"psychic"
			],
			"conditionImmune": [
				"blinded",
				"charmed",
				"deafened",
				"exhaustion",
				"frightened",
				"paralyzed",
				"petrified",
				"prone"
			],
			"cr": "11",
			"trait": [
				{
					"name": "Constructed Nature",
					"entries": [
						"An animated object doesn't require air, food, drink, or sleep.",
						"The magic that animates an object is dispelled when the construct drops to 0 hit points. An animated object reduced to 0 hit points becomes inanimate and is too damaged to be of much use or value to anyone."
					]
				},
				{
					"name": "Antimagic Susceptibility",
					"entries": [
						"The hut is {@condition incapacitated} while the magic gem that animates it is in the area of an antimagic field. If targeted by dispel magic, the hut must succeed on a Constitution saving throw against the caster's spell save DC or fall {@condition unconscious} for 1 minute."
					]
				},
				{
					"name": "Siege Monster",
					"entries": [
						"The hut deals double damage to objects and structures."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The hut makes three attacks with its roots. It can replace one of these attacks with a rock attack."
					]
				},
				{
					"name": "Root",
					"entries": [
						"{@atk mw} {@hit 12} to hit, reach 60 ft., one target. {@h}30 ({@damage 4d10 + 8}) bludgeoning damage."
					]
				},
				{
					"name": "Rock",
					"entries": [
						"{@atk rw} {@hit 12} to hit, range 120 ft., one target. {@h}21 ({@damage 3d8 + 8}) bludgeoning damage."
					]
				}
			],
			"hasToken": true,
			"traitTags": [
				"Antimagic Susceptibility",
				"Siege Monster"
			],
			"senseTags": [
				"B"
			],
			"actionTags": [
				"Multiattack"
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
			"name": "Baron Vargas Vallakovich",
			"isNpc": true,
			"source": "CoS",
			"page": 105,
			"_copy": {
				"name": "Noble",
				"source": "MM",
				"_mod": {
					"*": {
						"mode": "replaceTxt",
						"replace": "the noble",
						"with": "Vargas",
						"flags": "i"
					}
				}
			},
			"type": {
				"type": "humanoid",
				"tags": [
					"human"
				]
			},
			"alignment": [
				"N",
				"E"
			],
			"hasToken": true
		},
		{
			"name": "Barovian Commoner",
			"source": "CoS",
			"page": 29,
			"_copy": {
				"name": "Commoner",
				"source": "MM"
			},
			"action": [
				{
					"name": "Pitchfork",
					"entries": [
						"{@atk mw} {@hit 2} to hit, reach 5 ft., one target. {@h}3 ({@damage 1d6}) piercing damage."
					]
				}
			],
			"hasToken": true,
			"damageTags": [
				"P"
			]
		},
		{
			"name": "Barovian Scout",
			"source": "CoS",
			"page": 29,
			"_copy": {
				"name": "Scout",
				"source": "MM",
				"_mod": {
					"action": {
						"mode": "replaceArr",
						"replace": "Longbow",
						"items": {
							"name": "Light Crossbows",
							"entries": [
								"{@atk rw} {@hit 4} to hit, ranged 80/320 ft., one target. {@h}6 ({@damage 1d8 + 2}) piercing damage."
							]
						}
					}
				}
			},
			"hasToken": true,
			"miscTags": [
				"MW",
				"RW"
			]
		},
		{
			"name": "Barovian Witch",
			"source": "CoS",
			"page": 229,
			"size": "M",
			"type": {
				"type": "humanoid",
				"tags": [
					"human"
				]
			},
			"alignment": [
				"C",
				"E"
			],
			"ac": [
				10
			],
			"hp": {
				"average": 16,
				"formula": "3d8 + 3"
			},
			"speed": {
				"walk": 30
			},
			"str": 7,
			"dex": 11,
			"con": 13,
			"int": 14,
			"wis": 11,
			"cha": 12,
			"skill": {
				"arcana": "+4",
				"perception": "+2"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 12,
			"languages": [
				"Common"
			],
			"cr": "1/2",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The witch is a 3rd-level spellcaster. Its spellcasting ability is Intelligence (spell save {@dc 12}, {@hit 4} to hit with spell attacks). The witch has the following wizard spells prepared:"
					],
					"spells": {
						"0": {
							"spells": [
								"{@spell mage hand}",
								"{@spell prestidigitation}",
								"{@spell ray of frost}"
							]
						},
						"1": {
							"slots": 4,
							"spells": [
								"{@spell ray of sickness}",
								"{@spell sleep}",
								"{@spell Tasha's hideous laughter}"
							]
						},
						"2": {
							"slots": 2,
							"spells": [
								"{@spell alter self}",
								"{@spell invisibility}"
							]
						}
					},
					"ability": "int"
				}
			],
			"action": [
				{
					"name": "Claws (Requires Alter Self)",
					"entries": [
						"{@atk mw} {@hit 3} to hit, reach 5 ft., one target. {@h}4 ({@damage 1d6 + 1}) slashing damage. This attack is magical."
					]
				},
				{
					"name": "Dagger",
					"entries": [
						"{@atk mw,rw} {@hit 2} to hit, reach 5 ft. or range 20/60 ft., one target. {@h}2 ({@damage 1d4}) piercing damage."
					]
				}
			],
			"hasToken": true,
			"senseTags": [
				"D"
			],
			"languageTags": [
				"C"
			],
			"damageTags": [
				"P",
				"S"
			],
			"spellcastingTags": [
				"CW"
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
			"name": "Beucephalus",
			"isNpc": true,
			"source": "CoS",
			"page": 93,
			"_copy": {
				"name": "Nightmare",
				"source": "MM",
				"_mod": {
					"*": {
						"mode": "replaceTxt",
						"replace": "the nightmare",
						"with": "Beucephalus",
						"flags": "i"
					}
				}
			},
			"hp": {
				"average": 104,
				"formula": "8d10 + 24"
			},
			"hasToken": true
		},
		{
			"name": "Bluto Krogarov",
			"isNpc": true,
			"source": "CoS",
			"page": 38,
			"_copy": {
				"name": "Commoner",
				"source": "MM"
			},
			"type": {
				"type": "humanoid",
				"tags": [
					"human"
				]
			},
			"alignment": [
				"N",
				"E"
			],
			"hasToken": true
		},
		{
			"name": "Broom of Animated Attack",
			"source": "CoS",
			"page": 226,
			"size": "S",
			"type": "construct",
			"alignment": [
				"U"
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
				"average": 17,
				"formula": "5d6"
			},
			"speed": {
				"walk": 0,
				"fly": {
					"number": 50,
					"condition": "(hover)"
				},
				"canHover": true
			},
			"str": 10,
			"dex": 17,
			"con": 10,
			"int": 1,
			"wis": 5,
			"cha": 1,
			"senses": [
				"blindsight 30 ft. (blind beyond this radius)"
			],
			"passive": 7,
			"immune": [
				"poison",
				"psychic"
			],
			"conditionImmune": [
				"blinded",
				"charmed",
				"deafened",
				"exhaustion",
				"frightened",
				"paralyzed",
				"petrified",
				"poisoned",
				"prone"
			],
			"cr": "1/4",
			"trait": [
				{
					"name": "Constructed Nature",
					"entries": [
						"An animated object doesn't require air, food, drink, or sleep.",
						"The magic that animates an object is dispelled when the construct drops to 0 hit points. An animated object reduced to 0 hit points becomes inanimate and is too damaged to be of much use or value to anyone."
					]
				},
				{
					"name": "Antimagic Susceptibility",
					"entries": [
						"The broom is {@condition incapacitated} while in the area of an antimagic field. If targeted by dispel magic, the broom must succeed on a Constitution saving throw against the caster's spell save DC or fall {@condition unconscious} for 1 minute."
					]
				},
				{
					"name": "False Appearance",
					"entries": [
						"While the broom remains motionless and isn't flying, it is indistinguishable from a normal broom."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The broom makes two melee attacks."
					]
				},
				{
					"name": "Broomstick",
					"entries": [
						"{@atk mw} {@hit 5} to hit, reach 5 ft., one target. {@h}5 ({@damage 1d4 + 3}) bludgeoning damage."
					]
				}
			],
			"reaction": [
				{
					"name": "Animated Attack",
					"entries": [
						"If the broom is motionless and a creature grabs hold of it, the broom makes a Dexterity check contested by the creature's Strength check. If the broom wins the contest, it flies out of the creature's grasp and makes a melee attack against it with advantage on the attack roll."
					]
				}
			],
			"hasToken": true,
			"traitTags": [
				"Antimagic Susceptibility",
				"False Appearance"
			],
			"senseTags": [
				"B"
			],
			"actionTags": [
				"Multiattack"
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
			"name": "Clovin Belview",
			"isNpc": true,
			"source": "CoS",
			"page": 147,
			"_copy": {
				"name": "Mongrelfolk",
				"source": "CoS",
				"_mod": {
					"*": {
						"mode": "replaceTxt",
						"replace": "the mongrelfolk",
						"with": "Clovin",
						"flags": "i"
					},
					"trait": {
						"mode": "replaceArr",
						"replace": "Extraordinary Feature",
						"items": {
							"name": "Two-Headed",
							"entries": [
								"The mongrelfolk has advantage on Wisdom ({@skill Perception}) checks and on saving throws against being {@condition blinded}, {@condition charmed}, {@condition deafened}, {@condition frightened}, {@condition stunned}, or knocked {@condition unconscious}."
							]
						}
					}
				}
			},
			"alignment": [
				"N",
				"E"
			],
			"hasToken": true
		},
		{
			"name": "Cyrus Belview",
			"isNpc": true,
			"source": "CoS",
			"page": 77,
			"_copy": {
				"name": "Mongrelfolk",
				"source": "CoS",
				"_mod": {
					"*": {
						"mode": "replaceTxt",
						"replace": "the mongrelfolk",
						"with": "Cyrus",
						"flags": "i"
					},
					"trait": {
						"mode": "replaceArr",
						"replace": "Extraordinary Feature",
						"items": {
							"name": "Keen Hearing and Smell",
							"entries": [
								"The mongrelfolk has advantage on Wisdom ({@skill Perception}) checks that rely on hearing or smell."
							]
						}
					}
				}
			},
			"hasToken": true,
			"traitTags": [
				"Keen Senses"
			]
		},
		{
			"name": "Davian Martikov",
			"isNpc": true,
			"source": "CoS",
			"page": 173,
			"_copy": {
				"name": "Wereraven",
				"source": "CoS",
				"_mod": {
					"*": {
						"mode": "replaceTxt",
						"replace": "the wereraven",
						"with": "Davian",
						"flags": "i"
					}
				}
			},
			"hasToken": true
		},
		{
			"name": "Distended Corpse",
			"source": "CoS",
			"page": 165,
			"_copy": {
				"name": "Commoner",
				"source": "MM"
			},
			"speed": {
				"walk": 20
			},
			"conditionImmune": [
				"charmed",
				"frightened"
			],
			"trait": [
				{
					"name": "Snake-Swollen",
					"entries": [
						"When a corpse is reduced to 0 hit points, it splits open, disgorging a {@creature swarm of poisonous snakes}. The snakes are hungry and fight until slain."
					]
				}
			],
			"hasToken": true
		},
		{
			"name": "Donavich",
			"isNpc": true,
			"source": "CoS",
			"page": 46,
			"_copy": {
				"name": "Acolyte",
				"source": "MM",
				"_mod": {
					"*": {
						"mode": "replaceTxt",
						"replace": "the acolyte",
						"with": "Donavich",
						"flags": "i"
					}
				}
			},
			"type": {
				"type": "humanoid",
				"tags": [
					"human"
				]
			},
			"alignment": [
				"L",
				"G"
			],
			"hasToken": true
		},
		{
			"name": "Doru",
			"isNpc": true,
			"source": "CoS",
			"page": 47,
			"_copy": {
				"name": "Vampire Spawn",
				"source": "MM",
				"_mod": {
					"*": {
						"mode": "replaceTxt",
						"replace": "the vampire",
						"with": "Doru",
						"flags": "i"
					}
				}
			},
			"hasToken": true
		},
		{
			"name": "Emil Toranescu",
			"isNpc": true,
			"source": "CoS",
			"page": 81,
			"_copy": {
				"name": "Werewolf",
				"source": "MM",
				"_mod": {
					"*": {
						"mode": "replaceTxt",
						"replace": "the werewolf",
						"with": "Emil",
						"flags": "i"
					}
				}
			},
			"hp": {
				"average": 72,
				"formula": "9d8 + 18"
			},
			"hasToken": true
		},
		{
			"name": "Escher",
			"isNpc": true,
			"source": "CoS",
			"page": 70,
			"_copy": {
				"name": "Vampire Spawn",
				"source": "MM",
				"_mod": {
					"*": {
						"mode": "replaceTxt",
						"replace": "the vampire",
						"with": "Escher",
						"flags": "i"
					}
				}
			},
			"hasToken": true
		},
		{
			"name": "Exethanter",
			"isNpc": true,
			"source": "CoS",
			"page": 189,
			"_copy": {
				"name": "Lich",
				"source": "MM",
				"_mod": {
					"*": {
						"mode": "replaceTxt",
						"replace": "the lich",
						"with": "Exethanter",
						"flags": "i"
					}
				}
			},
			"hp": {
				"average": 99,
				"formula": "18d8 + 54"
			},
			"cr": "10",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The lich is an 18th-level spellcaster. Its spellcasting ability is Intelligence (spell save {@dc 20}, {@hit 12} to hit with spell attacks). The lich has the following wizard spells prepared:"
					],
					"spells": {
						"0": {
							"spells": [
								"{@spell mage hand}",
								"{@spell prestidigitation}",
								"{@spell ray of frost}"
							]
						}
					},
					"ability": "int"
				}
			],
			"hasToken": true
		},
		{
			"name": "Ezmerelda d'Avenir",
			"isNpc": true,
			"source": "CoS",
			"page": 231,
			"size": "M",
			"type": {
				"type": "humanoid",
				"tags": [
					"human"
				]
			},
			"alignment": [
				"C",
				"G"
			],
			"ac": [
				{
					"ac": 17,
					"from": [
						"{@item +1 studded leather armor}"
					]
				}
			],
			"hp": {
				"average": 82,
				"formula": "11d8 + 33"
			},
			"speed": {
				"walk": 30
			},
			"str": 14,
			"dex": 19,
			"con": 16,
			"int": 16,
			"wis": 11,
			"cha": 17,
			"save": {
				"wis": "+3"
			},
			"skill": {
				"acrobatics": "+7",
				"arcana": "+6",
				"deception": "+9",
				"insight": "+3",
				"medicine": "+3",
				"perception": "+6",
				"performance": "+6",
				"sleight of hand": "+7",
				"stealth": "+7",
				"survival": "+6"
			},
			"passive": 16,
			"languages": [
				"Common",
				"Elvish"
			],
			"cr": "8",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"Ezmerelda is a 7th-level spellcaster. Her spellcasting ability is Intelligence (spell save {@dc 14}, {@hit 6} to hit with spell attacks). Ezmerelda has the following wizard spells prepared:"
					],
					"spells": {
						"0": {
							"spells": [
								"{@spell fire bolt}",
								"{@spell light}",
								"{@spell mage hand}",
								"{@spell prestidigitation}"
							]
						},
						"1": {
							"slots": 4,
							"spells": [
								"{@spell protection from evil and good}",
								"{@spell magic missile}",
								"{@spell shield}"
							]
						},
						"2": {
							"slots": 3,
							"spells": [
								"{@spell darkvision}",
								"{@spell knock}",
								"{@spell mirror image}"
							]
						},
						"3": {
							"slots": 3,
							"spells": [
								"{@spell clairvoyance}",
								"{@spell lightning bolt}",
								"{@spell magic circle}"
							]
						},
						"4": {
							"slots": 1,
							"spells": [
								"{@spell greater invisibility}"
							]
						}
					},
					"ability": "int"
				}
			],
			"trait": [
				{
					"name": "Special Equipment",
					"entries": [
						"In addition to her magic armor and weapons, Ezmerelda has two {@item potion of greater healing||potions of greater healing}, six {@item holy water (flask)|phb|vials of holy water}, and three wooden stakes."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"Ezmerelda makes three attacks: two with her +1 rapier and one with her +1 handaxe or her silvered shortsword."
					]
				},
				{
					"name": "Rapier +1",
					"entries": [
						"{@atk mw} {@hit 8} to hit, reach 5 ft., one target. {@h}9 ({@damage 1d8 + 5}) piercing damage."
					]
				},
				{
					"name": "Handaxe +1",
					"entries": [
						"{@atk mw,rw} {@hit 6} to hit, reach 5 ft. or range 20/60 ft., one target. {@h}6 ({@damage 1d6 + 3}) slashing damage."
					]
				},
				{
					"name": "Silvered Shortsword",
					"entries": [
						"{@atk mw} {@hit 7} to hit, reach 5 ft., one target. {@h}7 ({@damage 1d6 + 4}) piercing damage."
					]
				},
				{
					"name": "Curse (Recharges after a Long Rest)",
					"entries": [
						"Ezmerelda targets one creature that she can see within 30 feet of her. The target must succeed on a {@dc 14} Wisdom saving throw or be cursed. While cursed, the target has vulnerability to one type of damage of Ezmerelda's choice. The curse lasts until ended with a {@spell greater restoration} spell, a {@spell remove curse} spell, or similar magic. When the curse ends, Ezmerelda takes {@dice 3d6} psychic damage."
					]
				},
				{
					"name": "Evil Eye (Recharges after a Short or Long Rest)",
					"entries": [
						"Ezmerelda targets one creature that she can see within 10 feet of her and casts one of the following spells on the target (save {@dc 14}), requiring neither somatic nor material components to do so: animal friendship, charm person, or hold person. If the target succeeds on the initial saving throw, Ezmerelda is {@condition blinded} until the end of her next turn. Once a target succeeds on a saving throw against this effect, it is immune to the Evil Eye power of all Vistani for 24 hours."
					]
				}
			],
			"hasToken": true,
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C",
				"E"
			],
			"damageTags": [
				"P",
				"S"
			],
			"spellcastingTags": [
				"CW"
			],
			"miscTags": [
				"MW",
				"RW",
				"THW"
			],
			"conditionInflictSpell": [
				"invisible"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Gadof Blinsky",
			"isNpc": true,
			"source": "CoS",
			"page": 118,
			"_copy": {
				"name": "Commoner",
				"source": "MM"
			},
			"type": {
				"type": "humanoid",
				"tags": [
					"human"
				]
			},
			"alignment": [
				"C",
				"G"
			],
			"hasToken": true
		},
		{
			"name": "Gertruda",
			"isNpc": true,
			"source": "CoS",
			"page": 68,
			"_copy": {
				"name": "Commoner",
				"source": "MM"
			},
			"type": {
				"type": "humanoid",
				"tags": [
					"human"
				]
			},
			"alignment": [
				"N",
				"G"
			],
			"hasToken": true
		},
		{
			"name": "Guardian Portrait",
			"source": "CoS",
			"page": 227,
			"size": "M",
			"type": "construct",
			"alignment": [
				"U"
			],
			"ac": [
				{
					"ac": 5,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 22,
				"formula": "5d8"
			},
			"speed": {
				"walk": 0
			},
			"str": 1,
			"dex": 1,
			"con": 10,
			"int": 14,
			"wis": 10,
			"cha": 10,
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 10,
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
				"Common",
				"plus up to two other languages"
			],
			"cr": "1",
			"spellcasting": [
				{
					"name": "Innate Spellcasting",
					"headerEntries": [
						"The portrait's innate spellcasting ability is Intelligence (spell save {@dc 12}). The portrait can innately cast the following spells, requiring no material components:"
					],
					"daily": {
						"3e": [
							"{@spell counterspell}",
							"{@spell crown of madness}",
							"{@spell hypnotic pattern}",
							"{@spell telekinesis}"
						]
					},
					"ability": "int"
				}
			],
			"trait": [
				{
					"name": "Constructed Nature",
					"entries": [
						"An animated object doesn't require air, food, drink, or sleep.",
						"The magic that animates an object is dispelled when the construct drops to 0 hit points. An animated object reduced to 0 hit points becomes inanimate and is too damaged to be of much use or value to anyone."
					]
				},
				{
					"name": "Antimagic Susceptibility",
					"entries": [
						"The portrait is {@condition incapacitated} while in the area of an antimagic field. If targeted by dispel magic, the portrait must succeed on a Constitution saving throw against the caster's spell save DC or become {@condition unconscious} for 1 minute."
					]
				},
				{
					"name": "False Appearance",
					"entries": [
						"While the figure in the portrait remains motionless, the portrait is indistinguishable from a normal painting."
					]
				}
			],
			"hasToken": true,
			"traitTags": [
				"Antimagic Susceptibility",
				"False Appearance"
			],
			"senseTags": [
				"D"
			],
			"languageTags": [
				"C",
				"X"
			],
			"spellcastingTags": [
				"I"
			],
			"conditionInflictSpell": [
				"charmed",
				"restrained"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Helga Ruvak",
			"isNpc": true,
			"source": "CoS",
			"page": 64,
			"_copy": {
				"name": "Vampire Spawn",
				"source": "MM",
				"_mod": {
					"*": {
						"mode": "replaceTxt",
						"replace": "the vampire",
						"with": "Helga",
						"flags": "i"
					}
				}
			},
			"hasToken": true
		},
		{
			"name": "Henrik van der Voort",
			"isNpc": true,
			"source": "CoS",
			"page": 116,
			"_copy": {
				"name": "Commoner",
				"source": "MM"
			},
			"type": {
				"type": "humanoid",
				"tags": [
					"human"
				]
			},
			"alignment": [
				"L",
				"E"
			],
			"hasToken": true
		},
		{
			"name": "Ireena Kolyana",
			"isNpc": true,
			"source": "CoS",
			"page": 44,
			"_copy": {
				"name": "Noble",
				"source": "MM",
				"_mod": {
					"*": {
						"mode": "replaceTxt",
						"replace": "the noble",
						"with": "Ireena",
						"flags": "i"
					}
				}
			},
			"type": {
				"type": "humanoid",
				"tags": [
					"human"
				]
			},
			"alignment": [
				"L",
				"G"
			],
			"hp": {
				"average": 14,
				"formula": "2d8"
			},
			"hasToken": true
		},
		{
			"name": "Ismark Kolyanovich",
			"isNpc": true,
			"source": "CoS",
			"page": 43,
			"_copy": {
				"name": "Veteran",
				"source": "MM",
				"_mod": {
					"*": {
						"mode": "replaceTxt",
						"replace": "the veteran",
						"with": "Ismark",
						"flags": "i"
					}
				}
			},
			"type": {
				"type": "humanoid",
				"tags": [
					"human"
				]
			},
			"alignment": [
				"L",
				"G"
			],
			"hasToken": true
		},
		{
			"name": "Izek Strazni",
			"isNpc": true,
			"source": "CoS",
			"page": 232,
			"size": "M",
			"type": {
				"type": "humanoid",
				"tags": [
					"human"
				]
			},
			"alignment": [
				"N",
				"E"
			],
			"ac": [
				{
					"ac": 14,
					"from": [
						"{@item studded leather armor|phb}"
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
			"str": 18,
			"dex": 15,
			"con": 16,
			"int": 10,
			"wis": 9,
			"cha": 15,
			"skill": {
				"intimidation": "+8",
				"perception": "+2"
			},
			"passive": 12,
			"languages": [
				"Common"
			],
			"cr": "5",
			"trait": [
				{
					"name": "Brute",
					"entries": [
						"A melee weapon deals one extra die of its damage when Izek hits with it (included in the attack)."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"Izek makes two attacks with his battleaxe."
					]
				},
				{
					"name": "Battleaxe",
					"entries": [
						"{@atk mw} {@hit 7} to hit, reach 5 ft., one target. {@h}13 ({@damage 2d8 + 4}) slashing damage, or 15 ({@dice 2d10 + 4}) when used with two hands."
					]
				},
				{
					"name": "Hurl Flame",
					"entries": [
						"{@atk rs} {@hit 5} to hit, range 60 ft., one target. {@h}10 ({@damage 3d6}) fire damage. If the target is a flammable object that isn't being worn or carried, it catches fire."
					]
				}
			],
			"hasToken": true,
			"traitTags": [
				"Brute"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C"
			],
			"damageTags": [
				"F",
				"S"
			],
			"miscTags": [
				"MW"
			],
			"hasFluff": true
		},
		{
			"name": "Kasimir Velikov",
			"isNpc": true,
			"source": "CoS",
			"page": 233,
			"_copy": {
				"name": "Mage",
				"source": "MM",
				"_mod": {
					"*": {
						"mode": "replaceTxt",
						"replace": "the mage",
						"with": "Kasimir",
						"flags": "i"
					},
					"trait": {
						"mode": "appendArr",
						"items": [
							{
								"name": "Fey Ancestry",
								"entries": [
									"Kasimir has advantage on saving throws against being {@condition charmed}, and magic can't put the him to sleep."
								]
							},
							{
								"name": "Special Equipment",
								"entries": [
									"Kasimir wears a {@item ring of warmth} and carries a spellbook containing all the spells he has prepared plus the following spells: {@spell arcane lock}, {@spell comprehend languages}, {@spell hold person}, {@spell identify}, {@spell locate object}, {@spell nondetection}, {@spell polymorph}, {@spell protection from evil and good}, and {@spell wall of stone}."
								]
							}
						]
					}
				}
			},
			"type": {
				"type": "humanoid",
				"tags": [
					"dusk elf"
				]
			},
			"alignment": [
				"N"
			],
			"senses": [
				"darkvision 60 ft."
			],
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"Kasimir is a 9th-level spellcaster. His spellcasting ability is Intelligence (spell save {@dc 14}, {@hit 6} to hit with spell attacks). Kasimir has the following wizard spells prepared:"
					],
					"spells": {
						"0": {
							"spells": [
								"{@spell fire bolt}",
								"{@spell light}",
								"{@spell mage hand}",
								"{@spell prestidigitation}"
							]
						},
						"1": {
							"slots": 4,
							"spells": [
								"{@spell detect magic}",
								"{@spell mage armor}",
								"{@spell magic missile}",
								"{@spell shield}"
							]
						},
						"2": {
							"slots": 3,
							"spells": [
								"{@spell misty step}",
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
								"{@spell greater invisibility}",
								"{@spell ice storm}"
							]
						},
						"5": {
							"slots": 1,
							"spells": [
								"{@spell cone of cold}"
							]
						}
					},
					"ability": "int"
				}
			],
			"hasToken": true,
			"traitTags": [
				"Fey Ancestry"
			],
			"senseTags": [
				"D"
			]
		},
		{
			"name": "Kiril Stoyanovich",
			"isNpc": true,
			"source": "CoS",
			"page": 203,
			"_copy": {
				"name": "Werewolf",
				"source": "MM",
				"_mod": {
					"*": {
						"mode": "replaceTxt",
						"replace": "the werewolf",
						"with": "Kiril",
						"flags": "i"
					}
				}
			},
			"hp": {
				"average": 90,
				"formula": "9d8 + 18"
			},
			"hasToken": true
		},
		{
			"name": "Knight of the Order",
			"source": "CoS",
			"page": 139,
			"_copy": {
				"name": "Revenant",
				"source": "MM",
				"_mod": {
					"*": {
						"mode": "replaceTxt",
						"replace": "revenant",
						"with": "knight"
					},
					"action": [
						{
							"mode": "replaceArr",
							"replace": "Multiattack",
							"items": {
								"name": "Multiattack",
								"entries": [
									"The knight makes two longsword attacks or two fist attacks."
								]
							}
						},
						{
							"mode": "insertArr",
							"index": 1,
							"items": {
								"name": "Longsword",
								"entries": [
									"{@atk mw} {@hit 7} to hit, reach 5 ft., one target. {@h}15 ({@damage 2d10 + 4}) slashing damage. If the target is a creature against which the knight has sworn vengeance, the target takes an extra 14 ({@damage 4d6}) slashing damage."
								]
							}
						}
					]
				}
			},
			"alignment": [
				"L",
				"E"
			],
			"ac": [
				{
					"ac": 13,
					"from": [
						"broken chainmail"
					]
				}
			],
			"damageTags": [
				"B",
				"S"
			]
		},
		{
			"name": "Lady Fiona Wachter",
			"isNpc": true,
			"source": "CoS",
			"page": 110,
			"_copy": {
				"name": "Priest",
				"source": "MM",
				"_mod": {
					"*": {
						"mode": "replaceTxt",
						"replace": "the priest",
						"with": "Fiona",
						"flags": "i"
					}
				}
			},
			"type": {
				"type": "humanoid",
				"tags": [
					"human"
				]
			},
			"alignment": [
				"L",
				"E"
			],
			"ac": [
				10
			],
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"Fiona is a 5th-level spellcaster. Her spellcasting ability is Wisdom (spell save {@dc 13}, {@hit 5} to hit with spell attacks). Fiona has the following cleric spells prepared:"
					],
					"spells": {
						"0": {
							"spells": [
								"{@spell light}",
								"{@spell mending}",
								"{@spell thaumaturgy}"
							]
						},
						"1": {
							"slots": 4,
							"spells": [
								"{@spell command}",
								"{@spell purify food and drink}",
								"{@spell sanctuary}"
							]
						},
						"2": {
							"slots": 3,
							"spells": [
								"{@spell augury}",
								"{@spell gentle repose}",
								"{@spell hold person}"
							]
						},
						"3": {
							"slots": 2,
							"spells": [
								"{@spell animate dead}",
								"{@spell create food and water}"
							]
						}
					},
					"ability": "wis"
				}
			],
			"hasToken": true
		},
		{
			"name": "Lady Lydia Petrovna",
			"isNpc": true,
			"source": "CoS",
			"page": 105,
			"_copy": {
				"name": "Commoner",
				"source": "MM"
			},
			"type": {
				"type": "humanoid",
				"tags": [
					"human"
				]
			},
			"alignment": [
				"L",
				"G"
			],
			"hasToken": true
		},
		{
			"name": "Lief Lipsiege",
			"isNpc": true,
			"source": "CoS",
			"page": 62,
			"_copy": {
				"name": "Commoner",
				"source": "MM"
			},
			"type": {
				"type": "humanoid",
				"tags": [
					"human"
				]
			},
			"alignment": [
				"C",
				"E"
			],
			"hasToken": true
		},
		{
			"name": "Ludmilla Vilisevic",
			"isNpc": true,
			"source": "CoS",
			"page": 93,
			"_copy": {
				"name": "Vampire Spawn",
				"source": "MM",
				"_mod": {
					"*": {
						"mode": "replaceTxt",
						"replace": "the vampire",
						"with": "Ludmilla",
						"flags": "i"
					}
				}
			},
			"hasToken": true
		},
		{
			"name": "Luvash",
			"isNpc": true,
			"source": "CoS",
			"page": 121,
			"_copy": {
				"name": "Bandit Captain",
				"source": "MM",
				"_mod": {
					"*": {
						"mode": "replaceTxt",
						"replace": "the captain",
						"with": "Luvash",
						"flags": "i"
					}
				}
			},
			"type": {
				"type": "humanoid",
				"tags": [
					"human"
				]
			},
			"alignment": [
				"C",
				"E"
			],
			"hasToken": true
		},
		{
			"name": "Mad Mary",
			"isNpc": true,
			"source": "CoS",
			"page": 44,
			"_copy": {
				"name": "Commoner",
				"source": "MM"
			},
			"type": {
				"type": "humanoid",
				"tags": [
					"human"
				]
			},
			"alignment": [
				"C",
				"N"
			],
			"hasToken": true
		},
		{
			"name": "Madam Eva",
			"isNpc": true,
			"source": "CoS",
			"page": 233,
			"size": "M",
			"type": {
				"type": "humanoid",
				"tags": [
					"human"
				]
			},
			"alignment": [
				"C",
				"N"
			],
			"ac": [
				10
			],
			"hp": {
				"average": 88,
				"formula": "16d8 + 16"
			},
			"speed": {
				"walk": 20
			},
			"str": 8,
			"dex": 11,
			"con": 12,
			"int": 17,
			"wis": 20,
			"cha": 18,
			"save": {
				"con": "+5"
			},
			"skill": {
				"arcana": "+7",
				"deception": "+8",
				"insight": "+13",
				"intimidation": "+8",
				"perception": "+9",
				"religion": "+7"
			},
			"passive": 19,
			"languages": [
				"Abyssal",
				"Common",
				"Elvish",
				"Infernal"
			],
			"cr": "10",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"Madam Eva is a 16th-level spellcaster. Her spellcasting ability is Wisdom (spell save {@dc 17}, {@hit 9} to hit with spell attacks). Madam Eva has the following cleric spells prepared:"
					],
					"spells": {
						"0": {
							"spells": [
								"{@spell light}",
								"{@spell mending}",
								"{@spell sacred flame}",
								"{@spell thaumaturgy}"
							]
						},
						"1": {
							"slots": 4,
							"spells": [
								"{@spell bane}",
								"{@spell command}",
								"{@spell detect evil and good}",
								"{@spell protection from evil and good}"
							]
						},
						"2": {
							"slots": 3,
							"spells": [
								"{@spell lesser restoration}",
								"{@spell protection from poison}",
								"{@spell spiritual weapon}"
							]
						},
						"3": {
							"slots": 3,
							"spells": [
								"{@spell create food and water}",
								"{@spell speak with dead}",
								"{@spell spirit guardians}"
							]
						},
						"4": {
							"slots": 3,
							"spells": [
								"{@spell divination}",
								"{@spell freedom of movement}",
								"{@spell guardian of faith}"
							]
						},
						"5": {
							"slots": 2,
							"spells": [
								"{@spell greater restoration}",
								"{@spell raise dead}"
							]
						},
						"6": {
							"slots": 1,
							"spells": [
								"{@spell find the path}",
								"{@spell harm}",
								"{@spell true seeing}"
							]
						},
						"7": {
							"slots": 1,
							"spells": [
								"{@spell fire storm}",
								"{@spell regenerate}"
							]
						},
						"8": {
							"slots": 1,
							"spells": [
								"{@spell earthquake}"
							]
						}
					},
					"ability": "wis"
				}
			],
			"action": [
				{
					"name": "Dagger",
					"entries": [
						"{@atk mw} {@hit 4} to hit, reach 5 ft., one target. {@h}2 ({@damage 1d4}) piercing damage."
					]
				},
				{
					"name": "Curse (Recharges after a Long Rest)",
					"entries": [
						"Madam Eva targets one creature that she can see within 30 feet of her. The target must succeed on a {@dc 17} Wisdom saving throw or be cursed. While cursed, the target is {@condition blinded} and {@condition deafened}. The curse lasts until ended with a greater restoration spell, a {@spell remove curse} spell, or similar magic. When the curse ends, Madam Eva takes {@dice 5d6} psychic damage."
					]
				},
				{
					"name": "Evil Eye (Recharges after a Short or Long Rest)",
					"entries": [
						"Madam Eva targets one creature that she can see within 10 feet of her and casts one of the following spells on the target (save {@dc 17}), requiring neither somatic nor material components to do so: {@spell animal friendship}, {@spell charm person}, or {@spell hold person}. If the target succeeds on the initial saving throw, Madam Eva is {@condition blinded} until the end of her next turn. Once a target succeeds on a saving throw against this effect, it is immune to the Evil Eye power of all Vistani for 24 hours."
					]
				}
			],
			"hasToken": true,
			"languageTags": [
				"AB",
				"C",
				"E",
				"I"
			],
			"damageTags": [
				"P"
			],
			"spellcastingTags": [
				"CC"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"blinded",
				"deafened"
			],
			"conditionInflictSpell": [
				"prone"
			],
			"hasFluff": true
		},
		{
			"name": "Majesto",
			"isNpc": true,
			"source": "CoS",
			"page": 115,
			"_copy": {
				"name": "Imp",
				"source": "MM",
				"_mod": {
					"*": {
						"mode": "replaceTxt",
						"replace": "the imp",
						"with": "Majesto",
						"flags": "i"
					}
				}
			},
			"hasToken": true
		},
		{
			"name": "Marzena Belview",
			"isNpc": true,
			"source": "CoS",
			"page": 150,
			"_copy": {
				"name": "Mongrelfolk",
				"source": "CoS",
				"_mod": {
					"*": {
						"mode": "replaceTxt",
						"replace": "the mongrelfolk",
						"with": "Marzena",
						"flags": "i"
					},
					"trait": {
						"mode": "replaceArr",
						"replace": "Extraordinary Feature",
						"items": {
							"name": "Flight",
							"entries": [
								"The mongrelfolk has leathery wings and a flying speed of 40 feet."
							]
						}
					}
				}
			},
			"speed": {
				"walk": 20,
				"fly": 40
			},
			"hasToken": true
		},
		{
			"name": "Milivoj",
			"isNpc": true,
			"source": "CoS",
			"page": 97,
			"_copy": {
				"name": "Commoner",
				"source": "MM"
			},
			"type": {
				"type": "humanoid",
				"tags": [
					"human"
				]
			},
			"alignment": [
				"N"
			],
			"str": 15,
			"action": [
				{
					"name": "Shovel",
					"entries": [
						"{@atk mw} {@hit 4} to hit, reach 5 ft., one target. {@h}4 ({@damage 1d4 + 2}) bludgeoning damage."
					]
				}
			],
			"hasToken": true
		},
		{
			"name": "Mishka Belview",
			"isNpc": true,
			"source": "CoS",
			"page": 150,
			"_copy": {
				"name": "Mongrelfolk",
				"source": "CoS",
				"_mod": {
					"*": {
						"mode": "replaceTxt",
						"replace": "the mongrelfolk",
						"with": "Mishka",
						"flags": "i"
					},
					"trait": {
						"mode": "replaceArr",
						"replace": "Extraordinary Feature",
						"items": {
							"name": "Spider Climb",
							"entries": [
								"The mongrelfolk can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
							]
						}
					}
				}
			},
			"alignment": [
				"C",
				"E"
			],
			"hasToken": true,
			"traitTags": [
				"Spider Climb"
			]
		},
		{
			"name": "Mongrelfolk",
			"source": "CoS",
			"page": 234,
			"size": "M",
			"type": {
				"type": "humanoid",
				"tags": [
					"mongrelfolk"
				]
			},
			"alignment": [
				"A"
			],
			"ac": [
				{
					"ac": 11,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 26,
				"formula": "4d8 + 8"
			},
			"speed": {
				"walk": 20
			},
			"str": 12,
			"dex": 9,
			"con": 15,
			"int": 9,
			"wis": 10,
			"cha": 6,
			"skill": {
				"deception": "+2",
				"perception": "+2",
				"stealth": "+3"
			},
			"passive": 12,
			"languages": [
				"Common"
			],
			"cr": "1/4",
			"trait": [
				{
					"name": "Extraordinary Feature",
					"entries": [
						"The mongrelfolk has one of the following extraordinary features, determined randomly by rolling a {@dice d20} or chosen by the DM:",
						"1\u20133: Amphibious. The mongrelfolk can breathe air and water.",
						"4\u20139: Darkvision. The mongrelfolk has darkvision out to a range of 60 feet.",
						"10: Flight. The mongrelfolk has leathery wings and a flying speed of 40 feet.",
						"11\u201315: Keen Hearing and Smell. The mongrelfolk has advantage on Wisdom ({@skill Perception}) checks that rely on hearing or smell.",
						"16\u201317: Spider Climb. The mongrelfolk can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
						"18\u201319: Standing Leap. The mongrelfolk's long jump is up to 20 feet and its high jump up to 10 feet, with or without a running start.",
						"20: Two-Headed. The mongrelfolk has advantage on Wisdom ({@skill Perception}) checks and on saving throws against being {@condition blinded}, {@condition charmed}, {@condition deafened}, {@condition frightened}, {@condition stunned}, or knocked {@condition unconscious}."
					]
				},
				{
					"name": "Mimicry",
					"entries": [
						"The mongrelfolk can mimic any sounds it has heard, including voices. A creature that hears the sounds can tell they are imitations with a successful {@dc 12} Wisdom (Insight) check."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The mongrelfolk makes two attacks: one with its bite and one with its claw or dagger."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 3} to hit, reach 5 ft., one target. {@h}3 ({@damage 1d4 + 1}) piercing damage."
					]
				},
				{
					"name": "Claw",
					"entries": [
						"{@atk mw} {@hit 3} to hit, reach 5 ft., one target. {@h}3 ({@damage 1d4 + 1}) slashing damage."
					]
				},
				{
					"name": "Dagger",
					"entries": [
						"{@atk mw,rw} {@hit 3} to hit, reach 5 ft. or range 20/60 ft., one target. {@h}3 ({@damage 1d4 + 1}) piercing damage."
					]
				}
			],
			"hasToken": true,
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C"
			],
			"damageTags": [
				"P",
				"S"
			],
			"miscTags": [
				"MW",
				"RW",
				"THW"
			],
			"hasFluff": true
		},
		{
			"name": "Morgantha",
			"isNpc": true,
			"source": "CoS",
			"page": 48,
			"_copy": {
				"name": "Night Hag",
				"source": "MM",
				"_mod": {
					"*": {
						"mode": "replaceTxt",
						"replace": "the hag",
						"with": "Morgantha",
						"flags": "i"
					}
				}
			},
			"hasToken": true
		},
		{
			"name": "Nikolai Wachter",
			"isNpc": true,
			"source": "CoS",
			"page": 110,
			"_copy": {
				"name": "Noble",
				"source": "MM",
				"_mod": {
					"*": {
						"mode": "replaceTxt",
						"replace": "the noble",
						"with": "Nikolai",
						"flags": "i"
					}
				}
			},
			"type": {
				"type": "humanoid",
				"tags": [
					"human"
				]
			},
			"alignment": [
				"L",
				"N"
			],
			"hasToken": true
		},
		{
			"name": "Otto Belview",
			"isNpc": true,
			"source": "CoS",
			"page": 147,
			"_copy": {
				"name": "Mongrelfolk",
				"source": "CoS",
				"_mod": {
					"*": {
						"mode": "replaceTxt",
						"replace": "the mongrelfolk",
						"with": "Otto",
						"flags": "i"
					},
					"trait": {
						"mode": "replaceArr",
						"replace": "Extraordinary Feature",
						"items": {
							"name": "Standing Leap",
							"entries": [
								"The mongrelfolk's long jump is up to 20 feet and its high jump up to 10 feet, with or without a running start."
							]
						}
					}
				}
			},
			"hasToken": true
		},
		{
			"name": "Parriwimple",
			"isNpc": true,
			"source": "CoS",
			"page": 43,
			"_copy": {
				"name": "Gladiator",
				"source": "MM",
				"_mod": {
					"*": {
						"mode": "replaceTxt",
						"replace": "the gladiator",
						"with": "Parriwimple",
						"flags": "i"
					}
				}
			},
			"type": {
				"type": "humanoid",
				"tags": [
					"human"
				]
			},
			"alignment": [
				"L",
				"G"
			],
			"ac": [
				{
					"ac": 14,
					"from": [
						"{@item studded leather armor|phb}"
					]
				}
			],
			"int": 6,
			"hasToken": true
		},
		{
			"name": "Patrina Velikovna",
			"isNpc": true,
			"source": "CoS",
			"page": 89,
			"_copy": {
				"name": "Archmage",
				"source": "MM",
				"_mod": {
					"*": {
						"mode": "replaceTxt",
						"replace": "the archmage",
						"with": "Patrina",
						"flags": "i"
					}
				}
			},
			"type": {
				"type": "humanoid",
				"tags": [
					"dusk elf"
				]
			},
			"alignment": [
				"N",
				"E"
			],
			"hasToken": true
		},
		{
			"name": "Phantom Warrior",
			"source": "CoS",
			"page": 235,
			"size": "M",
			"type": "undead",
			"alignment": [
				"A"
			],
			"ac": [
				16
			],
			"hp": {
				"average": 45,
				"formula": "6d8 + 18"
			},
			"speed": {
				"walk": 30
			},
			"str": 16,
			"dex": 11,
			"con": 16,
			"int": 8,
			"wis": 10,
			"cha": 15,
			"skill": {
				"perception": "+2",
				"stealth": "+4"
			},
			"senses": [
				"darkvision 60 ft."
			],
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
				"any languages it knew in life"
			],
			"cr": "3",
			"trait": [
				{
					"name": "Ethereal Sight",
					"entries": [
						"The phantom warrior can see 60 feet into the Ethereal Plane when it is on the Material Plane, and vice versa."
					]
				},
				{
					"name": "Incorporeal Movement",
					"entries": [
						"The phantom warrior can move through other creatures and objects as if they were difficult terrain. It takes 5 ({@damage 1d10}) force damage if it ends its turn inside an object."
					]
				},
				{
					"name": "Spectral Armor and Shield",
					"entries": [
						"The phantom warrior's AC accounts for its spectral armor and shield."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The phantom warrior makes two attacks with its spectral longsword."
					]
				},
				{
					"name": "Spectral Longsword",
					"entries": [
						"{@atk mw} {@hit 5} to hit, reach 5 ft., one target. {@h}7 ({@damage 1d8 + 3}) force damage."
					]
				},
				{
					"name": "Etherealness",
					"entries": [
						"The phantom warrior enters the Ethereal Plane from the Material Plane, or vice versa. It is visible on the Material Plane while it is in the Border Ethereal, and vice versa, yet it can't affect or be affected by anything on the other plane."
					]
				}
			],
			"hasToken": true,
			"traitTags": [
				"Incorporeal Movement"
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
				"O"
			],
			"miscTags": [
				"MW"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Piccolo",
			"isNpc": true,
			"source": "CoS",
			"page": 118,
			"_copy": {
				"name": "Baboon",
				"source": "MM",
				"_mod": {
					"*": {
						"mode": "replaceTxt",
						"replace": "the baboon",
						"with": "Piccolo",
						"flags": "i"
					}
				}
			},
			"hasToken": true
		},
		{
			"name": "Pidlwick II",
			"isNpc": true,
			"source": "CoS",
			"page": 236,
			"size": "S",
			"type": "construct",
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
				"average": 10,
				"formula": "3d6"
			},
			"speed": {
				"walk": 30
			},
			"str": 10,
			"dex": 14,
			"con": 11,
			"int": 8,
			"wis": 13,
			"cha": 10,
			"skill": {
				"performance": "+2"
			},
			"passive": 11,
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"paralyzed",
				"petrified",
				"poisoned"
			],
			"languages": [
				"understands Common but doesn't speak and can't read or write"
			],
			"cr": "1/4",
			"trait": [
				{
					"name": "Ambusher",
					"entries": [
						"During the first round of combat, Pidlwick II has advantage on attack rolls against any creature that hasn't had a turn yet."
					]
				}
			],
			"action": [
				{
					"name": "Club",
					"entries": [
						"{@atk mw} {@hit 2} to hit, reach 5 ft., one target. {@h}2 ({@damage 1d4}) bludgeoning damage."
					]
				},
				{
					"name": "Dart",
					"entries": [
						"{@atk rw} {@hit 4} to hit, range 20/60 ft., one target. {@h}4 ({@damage 1d4 + 2}) piercing damage."
					]
				}
			],
			"hasToken": true,
			"traitTags": [
				"Ambusher"
			],
			"languageTags": [
				"C"
			],
			"damageTags": [
				"B",
				"P"
			],
			"miscTags": [
				"MW",
				"RW",
				"THW"
			],
			"hasFluff": true
		},
		{
			"name": "Rahadin",
			"isNpc": true,
			"source": "CoS",
			"page": 237,
			"size": "M",
			"type": {
				"type": "humanoid",
				"tags": [
					"elf"
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
						"{@item studded leather armor|phb}"
					]
				}
			],
			"hp": {
				"average": 135,
				"formula": "18d8 + 54"
			},
			"speed": {
				"walk": 35
			},
			"str": 14,
			"dex": 22,
			"con": 17,
			"int": 15,
			"wis": 16,
			"cha": 18,
			"save": {
				"con": "+7",
				"wis": "+7"
			},
			"skill": {
				"deception": "+8",
				"insight": "+7",
				"intimidation": "+12",
				"perception": "+11",
				"stealth": "+14"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 21,
			"languages": [
				"Common",
				"Elvish"
			],
			"cr": "10",
			"spellcasting": [
				{
					"name": "Innate Spellcasting",
					"headerEntries": [
						"Rahadin's innate spellcasting ability is Intelligence. He can innately cast the following spells, requiring no components:"
					],
					"daily": {
						"1": [
							"{@spell magic weapon}",
							"{@spell nondetection}"
						],
						"3": [
							"{@spell misty step}",
							"{@spell phantom steed}"
						]
					},
					"ability": "int"
				}
			],
			"trait": [
				{
					"name": "Deathly Choir",
					"entries": [
						"Any creature within 10 feet of Rahadin that isn't protected by a {@spell mind blank} spell hears in its mind the screams of the thousands of people Rahadin has killed. As a bonus action, Rahadin can force all creatures that can hear the screams to make a {@dc 16} Wisdom saving throw. Each creature takes 16 ({@damage 3d10}) psychic damage on a failed save, or half as much damage on a successful one."
					]
				},
				{
					"name": "Fey Ancestry",
					"entries": [
						"Rahadin has advantage on saving throws against being {@condition charmed}, and magic can't put him to sleep."
					]
				},
				{
					"name": "Mask of the Wild",
					"entries": [
						"Rahadin can attempt to hide even when he is only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"Rahadin attacks three times with his scimitar, or twice with his {@condition poisoned} darts."
					]
				},
				{
					"name": "Scimitar",
					"entries": [
						"{@atk mw} {@hit 10} to hit, reach 5 ft., one target. {@h}9 ({@damage 1d6 + 6}) slashing damage."
					]
				},
				{
					"name": "Poisoned Dart",
					"entries": [
						"{@atk rw} {@hit 10} to hit, range 20/60 ft., one target. {@h}8 ({@damage 1d4 + 6}) piercing damage plus 5 ({@damage 2d4}) poison damage."
					]
				}
			],
			"hasToken": true,
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
				"I",
				"P",
				"S",
				"Y"
			],
			"spellcastingTags": [
				"I"
			],
			"miscTags": [
				"MW",
				"RW",
				"THW"
			],
			"hasFluff": true
		},
		{
			"name": "Rictavio",
			"alias": [
				"Rudolph van Richten"
			],
			"isNpc": true,
			"source": "CoS",
			"page": 238,
			"size": "M",
			"type": {
				"type": "humanoid",
				"tags": [
					"human"
				]
			},
			"alignment": [
				"L",
				"G"
			],
			"ac": [
				{
					"ac": 12,
					"from": [
						"{@item leather armor|phb}"
					]
				}
			],
			"hp": {
				"average": 77,
				"formula": "14d8 + 14"
			},
			"speed": {
				"walk": 30
			},
			"str": 9,
			"dex": 12,
			"con": 13,
			"int": 16,
			"wis": 18,
			"cha": 16,
			"save": {
				"con": "+4",
				"wis": "+7"
			},
			"skill": {
				"arcana": "+9",
				"insight": "+7",
				"medicine": "+7",
				"perception": "+7",
				"religion": "+6",
				"sleight of hand": "+4"
			},
			"passive": 17,
			"languages": [
				"Abyssal",
				"Common",
				"Elvish",
				"Infernal"
			],
			"cr": "5",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"Rictavio is a 9th-level spellcaster. His spellcasting ability is Wisdom (spell save {@dc 15}, {@hit 7} to hit with spell attacks). Rictavio has the following cleric spells prepared:"
					],
					"spells": {
						"0": {
							"spells": [
								"{@spell guidance}",
								"{@spell light}",
								"{@spell mending}",
								"{@spell thaumaturgy}"
							]
						},
						"1": {
							"slots": 4,
							"spells": [
								"{@spell cure wounds}",
								"{@spell detect evil and good}",
								"{@spell protection from evil and good}",
								"{@spell sanctuary}"
							]
						},
						"2": {
							"slots": 3,
							"spells": [
								"{@spell augury}",
								"{@spell lesser restoration}",
								"{@spell protection from poison}"
							]
						},
						"3": {
							"slots": 3,
							"spells": [
								"{@spell magic circle}",
								"{@spell remove curse}",
								"{@spell speak with dead}"
							]
						},
						"4": {
							"slots": 3,
							"spells": [
								"{@spell death ward}",
								"{@spell freedom of movement}"
							]
						},
						"5": {
							"slots": 1,
							"spells": [
								"{@spell dispel evil and good}"
							]
						}
					},
					"ability": "wis"
				}
			],
			"trait": [
				{
					"name": "Special Equipment",
					"entries": [
						"In addition to his sword cane, Rictavio wears a {@item hat of disguise} and a {@item ring of mind shielding}, and he carries a {@item spell scroll (5th level)||spell scroll} of {@spell raise dead}."
					]
				},
				{
					"name": "Undead Slayer",
					"entries": [
						"When Rictavio hits an undead with a weapon attack, the undead takes an extra 10 ({@dice 3d6}) damage of the weapon's type."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"Rictavio makes two attacks with his sword cane."
					]
				},
				{
					"name": "Sword Cane",
					"entries": [
						"{@atk mw} {@hit 4} to hit, reach 5 ft., one target. {@h}4 ({@damage 1d6 + 1}) bludgeoning damage (wooden cane) or piercing damage (silvered sword)."
					]
				}
			],
			"hasToken": true,
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"AB",
				"C",
				"E",
				"I"
			],
			"damageTags": [
				"B"
			],
			"spellcastingTags": [
				"CC"
			],
			"miscTags": [
				"MW"
			],
			"hasFluff": true
		},
		{
			"name": "Rosavalda \"Rose\" Durst",
			"isNpc": true,
			"source": "CoS",
			"page": 217,
			"_copy": {
				"name": "Ghost",
				"source": "MM",
				"_mod": {
					"*": {
						"mode": "replaceTxt",
						"replace": "the ghost",
						"with": "Rose",
						"flags": "i"
					},
					"action": {
						"mode": "removeArr",
						"names": "Horrifying Visage"
					}
				}
			},
			"size": "S",
			"alignment": [
				"L",
				"G"
			],
			"hp": {
				"average": 35,
				"formula": "10d6"
			},
			"languages": [
				"Common"
			],
			"cr": "3",
			"hasToken": true,
			"languageTags": [
				"C"
			]
		},
		{
			"name": "Sangzor",
			"isNpc": true,
			"source": "CoS",
			"page": 160,
			"_copy": {
				"name": "Giant Goat",
				"source": "MM",
				"_mod": {
					"*": {
						"mode": "replaceTxt",
						"replace": "the goat",
						"with": "Sangzor",
						"flags": "i"
					}
				}
			},
			"alignment": [
				"C",
				"E"
			],
			"hp": {
				"average": 33,
				"formula": "3d10 + 3"
			},
			"int": 6,
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
			"cr": "1",
			"hasToken": true
		},
		{
			"name": "Savid",
			"isNpc": true,
			"source": "CoS",
			"page": 133,
			"_copy": {
				"name": "Scout",
				"source": "MM",
				"_mod": {
					"*": {
						"mode": "replaceTxt",
						"replace": "the scout",
						"with": "Savid",
						"flags": "i"
					}
				}
			},
			"type": {
				"type": "humanoid",
				"tags": [
					"dusk elf"
				]
			},
			"alignment": [
				"N"
			],
			"hasToken": true
		},
		{
			"name": "Sir Godfrey Gwilym",
			"isNpc": true,
			"source": "CoS",
			"page": 139,
			"_copy": {
				"name": "Knight of the Order",
				"source": "CoS",
				"_mod": {
					"*": {
						"mode": "replaceTxt",
						"replace": "the revenant",
						"with": "Sir Godfrey",
						"flags": "i"
					}
				}
			},
			"cr": "6",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"Sir Godfrey is a 16th-level spellcaster. His spellcasting ability is Wisdom (spell save {@dc 14}, {@hit 6} to hit with spell attacks). He has the following paladin spells prepared:"
					],
					"spells": {
						"1": {
							"slots": 4,
							"spells": [
								"{@spell command}",
								"{@spell divine favor}",
								"{@spell thunderous smite}"
							]
						},
						"2": {
							"slots": 3,
							"spells": [
								"{@spell branding smite}",
								"{@spell magic weapon}"
							]
						},
						"3": {
							"slots": 3,
							"spells": [
								"{@spell blinding smite}",
								"{@spell dispel magic}"
							]
						},
						"4": {
							"slots": 2,
							"spells": [
								"{@spell staggering smite}"
							]
						}
					},
					"ability": "wis"
				}
			],
			"hasToken": true,
			"spellcastingTags": [
				"CP"
			]
		},
		{
			"name": "Snow Maiden",
			"source": "CoS",
			"page": 159,
			"_copy": {
				"name": "Specter",
				"source": "MM",
				"_mod": {
					"resist": {
						"mode": "removeArr",
						"items": "cold"
					},
					"action": {
						"mode": "replaceArr",
						"replace": "Life Drain",
						"items": {
							"name": "Life Drain",
							"entries": [
								"{@atk ms} {@hit 4} to hit, reach 5 ft., one creature. {@h}10 ({@damage 3d6}) cold damage. The target must succeed on a DC 10 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the creature finishes a long rest. The target dies if this effect reduces its hit point maximum to 0."
							]
						}
					}
				}
			},
			"alignment": [
				"N"
			],
			"immune": [
				"cold",
				"necrotic",
				"poison"
			],
			"hasToken": true,
			"damageTags": [
				"C",
				"O"
			]
		},
		{
			"name": "Stanimir",
			"isNpc": true,
			"source": "CoS",
			"page": 20,
			"_copy": {
				"name": "Mage",
				"source": "MM",
				"_mod": {
					"*": {
						"mode": "replaceTxt",
						"replace": "the mage",
						"with": "Stanimir",
						"flags": "i"
					}
				}
			},
			"type": {
				"type": "humanoid",
				"tags": [
					"human"
				]
			},
			"alignment": [
				"C",
				"N"
			],
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The mage is a 9th-level spellcaster. Its spellcasting ability is Intelligence (spell save {@dc 14}, {@hit 6} to hit with spell attacks). The mage has the following wizard spells prepared:"
					],
					"spells": {
						"0": {
							"spells": [
								"{@spell friends}",
								"{@spell light}",
								"{@spell mage hand}",
								"{@spell prestidigitation}"
							]
						},
						"1": {
							"slots": 4,
							"spells": [
								"{@spell charm person}",
								"{@spell mage armor}",
								"{@spell shield}",
								"{@spell sleep}"
							]
						},
						"2": {
							"slots": 3,
							"spells": [
								"{@spell misty step}",
								"{@spell suggestion}"
							]
						},
						"3": {
							"slots": 3,
							"spells": [
								"{@spell bestow curse}",
								"{@spell phantom steed}",
								"{@spell vampiric touch}"
							]
						},
						"4": {
							"slots": 3,
							"spells": [
								"{@spell greater invisibility}",
								"{@spell stoneskin}"
							]
						},
						"5": {
							"slots": 1,
							"spells": [
								"{@spell dominate person}"
							]
						}
					},
					"ability": "int"
				}
			],
			"hasToken": true
		},
		{
			"name": "Stella Wachter",
			"isNpc": true,
			"source": "CoS",
			"page": 113,
			"_copy": {
				"name": "Commoner",
				"source": "MM"
			},
			"type": {
				"type": "humanoid",
				"tags": [
					"human"
				]
			},
			"alignment": [
				"C",
				"G"
			],
			"hasToken": true
		},
		{
			"name": "Strahd von Zarovich",
			"isNpc": true,
			"isNamedCreature": true,
			"source": "CoS",
			"page": 240,
			"size": "M",
			"type": {
				"type": "undead",
				"tags": [
					"shapechanger"
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
				"average": 144,
				"formula": "17d8 + 68"
			},
			"speed": {
				"walk": 30
			},
			"str": 18,
			"dex": 18,
			"con": 18,
			"int": 20,
			"wis": 15,
			"cha": 18,
			"save": {
				"dex": "+9",
				"wis": "+7",
				"cha": "+9"
			},
			"skill": {
				"arcana": "+15",
				"perception": "+12",
				"religion": "+10",
				"stealth": "+14"
			},
			"senses": [
				"darkvision 120 ft."
			],
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
			"languages": [
				"Abyssal",
				"Common",
				"Draconic",
				"Elvish",
				"Giant",
				"Infernal"
			],
			"cr": "15",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"Strahd is a 9th-level spellcaster. His spellcasting ability is Intelligence (spell save {@dc 18}, {@hit 10} to hit with spell attacks). He has the following wizard spells prepared:"
					],
					"spells": {
						"0": {
							"spells": [
								"{@spell mage hand}",
								"{@spell prestidigitation}",
								"{@spell ray of frost}"
							]
						},
						"1": {
							"slots": 4,
							"spells": [
								"{@spell comprehend languages}",
								"{@spell fog cloud}",
								"{@spell sleep}"
							]
						},
						"2": {
							"slots": 3,
							"spells": [
								"{@spell detect thoughts}",
								"{@spell gust of wind}",
								"{@spell mirror image}"
							]
						},
						"3": {
							"slots": 3,
							"spells": [
								"{@spell animate dead}",
								"{@spell fireball}",
								"{@spell nondetection}"
							]
						},
						"4": {
							"slots": 3,
							"spells": [
								"{@spell blight}",
								"{@spell greater invisibility}",
								"{@spell polymorph}"
							]
						},
						"5": {
							"slots": 1,
							"spells": [
								"{@spell animate objects}",
								"{@spell scrying}"
							]
						}
					},
					"ability": "int"
				}
			],
			"trait": [
				{
					"name": "Shapechanger",
					"entries": [
						"If Strahd isn't in running water or sunlight, he can use his action to polymorph into a Tiny bat, a Medium wolf, or a Medium cloud of mist, or back into his true form.",
						"While in bat or wolf form, Strahd can't speak. In bat form, his walking speed is 5 feet, and he has a flying speed of 30 feet. In wolf form, his walking speed is 40 feet. His statistics, other than his size and speed, are unchanged. Anything he is wearing transforms with him, but nothing he is carrying does. He reverts to his true form if he dies.",
						"While in mist form, Strahd can't take any actions, speak, or manipulate objects. He is weightless, has a flying speed of 20 feet, can hover, and can enter a hostile creature's space and stop there. In addition, if air can pass through a space, the mist can do so without squeezing, and he can't pass through water. He has advantage on Strength, Dexterity, and Constitution saving throws, and he is immune to all nonmagical damage, except the damage he takes from sunlight."
					]
				},
				{
					"name": "Legendary Resistance (3/Day)",
					"entries": [
						"If Strahd fails a saving throw, he can choose to succeed instead."
					]
				},
				{
					"name": "Misty Escape",
					"entries": [
						"When Strahd drops to 0 hit points outside his coffin, he transforms into a cloud of mist (as in the Shapechanger trait) instead of falling {@condition unconscious}, provided that he isn't in running water or sunlight. If he can't transform, he is destroyed.",
						"While he has 0 hit points in mist form, he can't revert to his vampire form, and he must reach his coffin within 2 hours or be destroyed. Once in his coffin, he reverts to his vampire form. He is then {@condition paralyzed} until he regains at least 1 hit point. After 1 hour in his coffin with 0 hit points, he regains 1 hit point."
					]
				},
				{
					"name": "Regeneration",
					"entries": [
						"Strahd regains 20 hit points at the start of his turn if he has at least 1 hit point and isn't in running water or sunlight. If he takes radiant damage or damage from holy water, this trait doesn't function at the start of his next turn."
					]
				},
				{
					"name": "Spider Climb",
					"entries": [
						"Strahd can climb difficult surfaces, including upside down on ceilings, without having to make an ability check."
					]
				},
				{
					"name": "Vampire Weaknesses",
					"entries": [
						"Strahd has the following flaws:",
						"{@i Forbiddance.} He can't enter a residence without an invitation from one of the occupants.",
						"{@i Harmed by Running Water.} He takes 20 acid damage if he ends his turn in running water.",
						"{@i Stake to the Heart.} If a piercing weapon made of wood is driven into his heart while he is {@condition incapacitated} in his coffin, he is {@condition paralyzed} until the stake is removed.",
						"{@i Sunlight Hypersensitivity.} While in sunlight, Strahd takes 20 radiant damage at the start of his turn, and he has disadvantage on attack rolls and ability checks."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack (Vampire Form Only)",
					"entries": [
						"Strahd makes two attacks, only one of which can be a bite attack."
					]
				},
				{
					"name": "Unarmed Strike (Vampire or Wolf Form Only)",
					"entries": [
						"{@atk mw} {@hit 9} to hit, reach 5 ft., one target. {@h}8 ({@damage 1d8 + 4}) slashing damage, plus 14 ({@damage 4d6}) necrotic damage. If the target is a creature, Strahd can grapple it (escape {@dc 18}) instead of dealing the slashing damage."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 9} to hit, reach 5 ft., one willing creature, or a creature that is {@condition grappled} by Strahd, {@condition incapacitated}, or {@condition restrained}. {@h}7 ({@damage 1d6 + 4}) piercing damage plus 10 ({@damage 3d6}) necrotic damage. The target's hit point maximum is reduced by an amount equal to the necrotic damage taken, and Strahd regains hit points equal to that amount. The reduction lasts until the target finishes a long rest. The target dies if its hit point maximum is reduced to 0. A humanoid slain in this way and then buried in the ground rises the following night as a {@creature vampire spawn} under Strahd's control."
					]
				},
				{
					"name": "Charm",
					"entries": [
						"Strahd targets one humanoid he can see within 30 feet of him. If the target can see Strahd, the target must succeed on a {@dc 17} Wisdom saving throw against this magic or be {@condition charmed}. The {@condition charmed} target regards Strahd as a trusted friend to be heeded and protected. The target isn't under Strahd's control, but it takes Strahd's requests and actions in the most favorable way and lets Strahd bite it.",
						"Each time Strahd or his companions do anything harmful to the target, it can repeat the saving throw, ending the effect on itself on a success. Otherwise, the effect lasts 24 hours or until Strahd is destroyed, is on a different plane of existence than the target, or takes a bonus action to end the effect."
					]
				},
				{
					"name": "Children of the Night (1/Day)",
					"entries": [
						"Strahd magically calls {@dice 2d4} {@creature swarm of bats||swarms of bats} or {@creature swarm of rats||swarms of rats}, provided that the sun isn't up. While outdoors, Strahd can call {@dice 3d6} {@creature wolf||wolves} instead. The called creatures arrive in {@dice 1d4} rounds, acting as allies of Strahd and obeying his spoken commands. The beasts remain for 1 hour, until Strahd dies, or until he dismisses them as a bonus action."
					]
				}
			],
			"legendary": [
				{
					"name": "Move",
					"entries": [
						"Strahd moves up to his speed without provoking opportunity attacks."
					]
				},
				{
					"name": "Unarmed Strike",
					"entries": [
						"Strahd makes one unarmed strike."
					]
				},
				{
					"name": "Bite (Costs 2 Actions)",
					"entries": [
						"Strahd makes one bite attack."
					]
				}
			],
			"legendaryGroup": {
				"name": "Strahd von Zarovich",
				"source": "CoS"
			},
			"hasToken": true,
			"traitTags": [
				"Legendary Resistances",
				"Regeneration",
				"Shapechanger",
				"Spider Climb",
				"Sunlight Sensitivity"
			],
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"AB",
				"C",
				"DR",
				"E",
				"GI",
				"I"
			],
			"damageTags": [
				"N",
				"P",
				"S"
			],
			"spellcastingTags": [
				"CW"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"charmed"
			],
			"conditionInflictSpell": [
				"invisible",
				"unconscious"
			],
			"hasFluff": true
		},
		{
			"name": "Strahd Zombie",
			"source": "CoS",
			"page": 241,
			"size": "M",
			"type": "undead",
			"alignment": [
				"U"
			],
			"ac": [
				8
			],
			"hp": {
				"average": 30,
				"formula": "4d8 + 12"
			},
			"speed": {
				"walk": 20
			},
			"str": 13,
			"dex": 6,
			"con": 16,
			"int": 3,
			"wis": 6,
			"cha": 5,
			"save": {
				"wis": "+0"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 8,
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"poisoned"
			],
			"languages": [
				"understands the languages it knew in life but can't speak"
			],
			"cr": "1",
			"trait": [
				{
					"name": "Loathsome Limbs",
					"entries": [
						"Whenever the zombie takes at least 5 bludgeoning or slashing damage at one time, roll a {@dice d20} to determine what else happens to it:",
						"1\u20138: One leg is severed from the zombie if it has any legs left.",
						"9\u201316: One arm is severed from the zombie if it has any arms left.",
						"17\u201320: The zombie is decapitated.",
						"If the zombie is reduced to 0 hit points, all parts of it die. Until then, a severed part acts on the zombie's initiative and has its own action and movement. A severed part has AC 8. Any damage it takes is subtracted from the zombie's hit points.",
						"A severed leg is unable to attack and has a speed of 5 feet.",
						"A severed arm has a speed of 5 feet and can make one claw attack on its turn, with disadvantage on the attack roll. Each time the zombie loses an arm, it loses a claw attack.",
						"If its head is severed, the zombie loses its bite attack and its body is {@condition blinded} unless the head can see it. The severed head has a speed of 0 feet. It can make a bite attack, but only against a target in its space.",
						"The zombie's speed is halved if it's missing a leg. If it loses both legs, it falls {@condition prone}. If it has both arms, it can crawl. With only one arm, it can still crawl, but its speed is halved. With no arms or legs, its speed is 0 feet, and it can't benefit from bonuses to speed."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The zombie makes three attacks: one with its bite and two with its claws."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 3} to hit, reach 5 ft., one target. {@h}3 ({@damage 1d4 + 1}) piercing damage."
					]
				},
				{
					"name": "Claw",
					"entries": [
						"{@atk mw} {@hit 3} to hit, reach 5 ft., one target. {@h}4 ({@damage 1d6 + 1}) slashing damage."
					]
				}
			],
			"hasToken": true,
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"CS",
				"LF"
			],
			"damageTags": [
				"P",
				"S"
			],
			"miscTags": [
				"MW"
			],
			"hasFluff": true
		},
		{
			"name": "Strahd's Animated Armor",
			"isNpc": true,
			"source": "CoS",
			"page": 227,
			"size": "M",
			"type": "construct",
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
				"average": 112,
				"formula": "15d8 + 45"
			},
			"speed": {
				"walk": 30
			},
			"str": 17,
			"dex": 13,
			"con": 16,
			"int": 9,
			"wis": 10,
			"cha": 9,
			"skill": {
				"perception": "+3"
			},
			"senses": [
				"blindsight 60 ft. (blind beyond this radius)"
			],
			"passive": 13,
			"resist": [
				"cold",
				"fire"
			],
			"immune": [
				"lightning",
				"poison"
			],
			"conditionImmune": [
				"blinded",
				"charmed",
				"deafened",
				"exhaustion",
				"frightened",
				"paralyzed",
				"petrified",
				"poisoned"
			],
			"languages": [
				"understands Common but can't speak"
			],
			"cr": "6",
			"trait": [
				{
					"name": "Constructed Nature",
					"entries": [
						"An animated object doesn't require air, food, drink, or sleep.",
						"The magic that animates an object is dispelled when the construct drops to 0 hit points. An animated object reduced to 0 hit points becomes inanimate and is too damaged to be of much use or value to anyone."
					]
				},
				{
					"name": "Antimagic Susceptibility",
					"entries": [
						"The armor is {@condition incapacitated} while in the area of an antimagic field. If targeted by dispel magic, the armor must succeed on a Constitution saving throw against the caster's spell save DC or fall {@condition unconscious} for 1 minute."
					]
				},
				{
					"name": "False Appearance",
					"entries": [
						"While the armor remains motionless, it is indistinguishable from a normal suit of armor."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The armor makes two melee attacks or uses Shocking Bolt twice."
					]
				},
				{
					"name": "Greatsword",
					"entries": [
						"{@atk mw} {@hit 6} to hit, reach 5 ft., one target. {@h}10 ({@damage 2d6 + 3}) slashing damage plus 3 ({@damage 1d6}) lightning damage."
					]
				},
				{
					"name": "Shocking Bolt",
					"entries": [
						"{@atk rs} {@hit 4} to hit (with advantage on the attack roll if the target is wearing armor made of metal), range 60 ft., one target. {@h}10 ({@damage 3d6}) lightning damage."
					]
				}
			],
			"hasToken": true,
			"traitTags": [
				"Antimagic Susceptibility",
				"False Appearance"
			],
			"senseTags": [
				"B"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C",
				"CS"
			],
			"damageTags": [
				"L",
				"S"
			],
			"miscTags": [
				"MW"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Szoldar Szoldarovich",
			"isNpc": true,
			"source": "CoS",
			"page": 100,
			"_copy": {
				"name": "Scout",
				"source": "MM",
				"_mod": {
					"*": {
						"mode": "replaceTxt",
						"replace": "the scout",
						"with": "Szoldar",
						"flags": "i"
					}
				}
			},
			"type": {
				"type": "humanoid",
				"tags": [
					"human"
				]
			},
			"alignment": [
				"N"
			],
			"hasToken": true
		},
		{
			"name": "The Abbot",
			"isNpc": true,
			"source": "CoS",
			"page": 151,
			"_copy": {
				"name": "Deva",
				"source": "MM",
				"_mod": {
					"*": {
						"mode": "replaceTxt",
						"replace": "the deva",
						"with": "The Abbot",
						"flags": "i"
					}
				}
			},
			"alignment": [
				"L",
				"E"
			],
			"hasToken": true
		},
		{
			"name": "The Mad Mage of Mount Baratok",
			"isNpc": true,
			"source": "CoS",
			"page": 39,
			"_copy": {
				"name": "Archmage",
				"source": "MM",
				"_mod": {
					"*": {
						"mode": "replaceTxt",
						"replace": "the archmage",
						"with": "The Mad Mage",
						"flags": "i"
					}
				}
			},
			"type": {
				"type": "humanoid",
				"tags": [
					"human"
				]
			},
			"alignment": [
				"C",
				"N"
			],
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The mad mage is an 18th-level spellcaster. His spellcasting ability is Intelligence (spell save {@dc 17}, {@hit 9} to hit with spell attacks). He can cast {@spell disguise self} and {@spell invisibility} at will and has the following wizard spells prepared:"
					],
					"spells": {
						"0": {
							"spells": [
								"{@spell fire bolt}",
								"{@spell light}",
								"{@spell mage hand}",
								"{@spell prestidigitation}",
								"{@spell shocking grasp}"
							]
						},
						"1": {
							"slots": 4,
							"spells": [
								"{@spell detect magic}",
								"{@spell mage armor}",
								"{@spell magic missile}",
								"{@spell shield}"
							]
						},
						"2": {
							"slots": 3,
							"spells": [
								"{@spell mirror image}",
								"{@spell misty step}",
								"{@spell web}"
							]
						},
						"3": {
							"slots": 3,
							"spells": [
								"{@spell counterspell}",
								"{@spell fly}",
								"{@spell lightning bolt}"
							]
						},
						"4": {
							"slots": 3,
							"spells": [
								"{@spell Mordenkainen's faithful hound}",
								"{@spell polymorph}",
								"{@spell stoneskin}"
							]
						},
						"5": {
							"slots": 3,
							"spells": [
								"{@spell Bigby's hand}",
								"{@spell cone of cold}",
								"{@spell scrying}"
							]
						},
						"6": {
							"slots": 1,
							"spells": [
								"{@spell true seeing}"
							]
						},
						"7": {
							"slots": 1,
							"spells": [
								"{@spell Mordenkainen's magnificent mansion}"
							]
						},
						"8": {
							"slots": 1,
							"spells": [
								"{@spell mind blank}"
							]
						},
						"9": {
							"slots": 1,
							"spells": [
								"{@spell time stop}"
							]
						}
					},
					"will": [
						"{@spell disguise self}",
						"{@spell invisibility}"
					],
					"hidden": [
						"will"
					],
					"ability": "int"
				}
			],
			"hasToken": true
		},
		{
			"name": "Thornboldt \"Thorn\" Durst",
			"isNpc": true,
			"source": "CoS",
			"page": 217,
			"_copy": {
				"name": "Ghost",
				"source": "MM",
				"_mod": {
					"*": {
						"mode": "replaceTxt",
						"replace": "the ghost",
						"with": "Thorn",
						"flags": "i"
					},
					"action": {
						"mode": "removeArr",
						"names": "Horrifying Visage"
					}
				}
			},
			"size": "S",
			"alignment": [
				"L",
				"G"
			],
			"hp": {
				"average": 35,
				"formula": "10d6"
			},
			"languages": [
				"Common"
			],
			"cr": "3",
			"hasToken": true,
			"languageTags": [
				"C"
			]
		},
		{
			"name": "Tree Blight",
			"source": "CoS",
			"page": 230,
			"size": "H",
			"type": "plant",
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
				"average": 149,
				"formula": "13d12 + 65"
			},
			"speed": {
				"walk": 30
			},
			"str": 23,
			"dex": 10,
			"con": 20,
			"int": 6,
			"wis": 10,
			"cha": 3,
			"senses": [
				"blindsight 60 ft. (blind beyond this radius)"
			],
			"passive": 10,
			"conditionImmune": [
				"blinded",
				"deafened"
			],
			"languages": [
				"understands Common and Druidic but doesn't speak"
			],
			"cr": "7",
			"trait": [
				{
					"name": "False Appearance",
					"entries": [
						"While the blight remains motionless, it is indistinguishable from a dead tree."
					]
				},
				{
					"name": "Siege Monster",
					"entries": [
						"The blight deals double damage to objects and structures."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The blight makes four attacks: two with its branches and two with its grasping roots. If it has a target {@condition grappled}, the blight can also make a bite attack against that target as a bonus action."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 9} to hit, reach 5 ft., one target. {@h}19 ({@damage 3d8 + 6}) piercing damage."
					]
				},
				{
					"name": "Branch",
					"entries": [
						"{@atk mw} {@hit 9} to hit, reach 15 ft., one target. {@h}16 ({@damage 3d6 + 6}) bludgeoning damage."
					]
				},
				{
					"name": "Grasping Root",
					"entries": [
						"{@atk mw} {@hit 9} to hit, reach 15 ft., one creature not {@condition grappled} by the blight. {@h}The target is {@condition grappled} (escape {@dc 15}). Until the grapple ends, the target takes 9 ({@damage 1d6 + 6}) bludgeoning damage at the start of each of its turns. The root has AC 15 and can be severed by dealing 6 slashing damage or more to it at once. Cutting the root doesn't hurt the blight, but ends the grapple."
					]
				}
			],
			"hasToken": true,
			"traitTags": [
				"False Appearance",
				"Siege Monster"
			],
			"senseTags": [
				"B"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C",
				"DU"
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
				"grappled"
			],
			"hasFluff": true
		},
		{
			"name": "Vasilka",
			"isNpc": true,
			"source": "CoS",
			"page": 151,
			"_copy": {
				"name": "Flesh Golem",
				"source": "MM",
				"_mod": {
					"*": {
						"mode": "replaceTxt",
						"replace": "the golem",
						"with": "Vasilka",
						"flags": "i"
					}
				}
			},
			"hasToken": true
		},
		{
			"name": "Victor Vallakovich",
			"isNpc": true,
			"source": "CoS",
			"page": 105,
			"_copy": {
				"name": "Mage",
				"source": "MM",
				"_mod": {
					"*": {
						"mode": "replaceTxt",
						"replace": "the mage",
						"with": "Victor",
						"flags": "i"
					}
				}
			},
			"type": {
				"type": "humanoid",
				"tags": [
					"human"
				]
			},
			"alignment": [
				"N",
				"E"
			],
			"hasToken": true
		},
		{
			"name": "Vilnius",
			"isNpc": true,
			"source": "CoS",
			"page": 185,
			"_copy": {
				"name": "Mage",
				"source": "MM",
				"_mod": {
					"*": {
						"mode": "replaceTxt",
						"replace": "the mage",
						"with": "Vilnius",
						"flags": "i"
					}
				}
			},
			"type": {
				"type": "humanoid",
				"tags": [
					"human"
				]
			},
			"alignment": [
				"N",
				"E"
			],
			"hasToken": true
		},
		{
			"name": "Vistana Assassin",
			"source": "CoS",
			"page": 28,
			"_copy": {
				"name": "Assassin",
				"source": "MM",
				"_trait": {
					"name": "Vistana",
					"source": "CoS"
				}
			},
			"hasToken": true
		},
		{
			"name": "Vistana Bandit",
			"source": "CoS",
			"page": 28,
			"_copy": {
				"name": "Bandit",
				"source": "MM",
				"_trait": {
					"name": "Vistana",
					"source": "CoS"
				}
			},
			"hasToken": true
		},
		{
			"name": "Vistana Bandit Captain",
			"source": "CoS",
			"page": 28,
			"_copy": {
				"name": "Bandit Captain",
				"source": "MM",
				"_trait": {
					"name": "Vistana",
					"source": "CoS"
				}
			},
			"hasToken": true
		},
		{
			"name": "Vistana Commoner",
			"source": "CoS",
			"page": 28,
			"_copy": {
				"name": "Commoner",
				"source": "MM",
				"_trait": {
					"name": "Vistana",
					"source": "CoS"
				}
			},
			"hasToken": true
		},
		{
			"name": "Vistana Guard",
			"source": "CoS",
			"page": 28,
			"_copy": {
				"name": "Guard",
				"source": "MM",
				"_trait": {
					"name": "Vistana",
					"source": "CoS"
				}
			},
			"hasToken": true
		},
		{
			"name": "Vistana Spy",
			"source": "CoS",
			"page": 28,
			"_copy": {
				"name": "Spy",
				"source": "MM",
				"_trait": {
					"name": "Vistana",
					"source": "CoS"
				}
			},
			"hasToken": true
		},
		{
			"name": "Vistana Thug",
			"source": "CoS",
			"page": 28,
			"_copy": {
				"name": "Thug",
				"source": "MM",
				"_trait": {
					"name": "Vistana",
					"source": "CoS"
				}
			},
			"hasToken": true
		},
		{
			"name": "Vladimir Horngaard",
			"isNpc": true,
			"source": "CoS",
			"page": 241,
			"size": "M",
			"type": "undead",
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
				"average": 192,
				"formula": "16d8 + 64"
			},
			"speed": {
				"walk": 30
			},
			"str": 18,
			"dex": 14,
			"con": 18,
			"int": 13,
			"wis": 16,
			"cha": 18,
			"save": {
				"str": "+7",
				"con": "+7",
				"wis": "+6",
				"cha": "+7"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 13,
			"resist": [
				"necrotic",
				"psychic"
			],
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"charmed",
				"exhaustion",
				"frightened",
				"paralyzed",
				"poisoned",
				"stunned"
			],
			"languages": [
				"Common",
				"Draconic"
			],
			"cr": "7",
			"trait": [
				{
					"name": "Regeneration",
					"entries": [
						"Vladimir regains 10 hit points at the start of his turn. If he takes fire or radiant damage, this trait doesn't function at the start of his next turn. Vladimir's body is destroyed only if he starts his turn with 0 hit points and doesn't regenerate."
					]
				},
				{
					"name": "Rejuvenation",
					"entries": [
						"When Vladimir's body is destroyed, his soul lingers. After 24 hours, the soul inhabits and animates another corpse on the same plane of existence and regains all its hit points. While the soul is bodiless, a {@spell wish} spell can be used to force the soul to go to the afterlife and not return."
					]
				},
				{
					"name": "Special Equipment",
					"entries": [
						"Vladimir wields a +2 greatsword with a hilt sculpted to resemble silver dragon wings and a pommel shaped like a silver dragon's head clutching a black opal between its teeth. "
					]
				},
				{
					"name": "Turn Immunity",
					"entries": [
						"Vladimir is immune to effects that turn undead."
					]
				},
				{
					"name": "Vengeful Tracker",
					"entries": [
						"Vladimir knows the distance to and direction of Strahd, even if Strahd and Vladimir are on different planes of existence. If Strahd is destroyed, Vladimir knows."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"Vladimir makes two fist attacks or two attacks with his +2 Greatsword."
					]
				},
				{
					"name": "Fist",
					"entries": [
						"{@atk mw} {@hit 7} to hit, reach 5 ft., one target. {@h}11 ({@damage 2d6 + 4}) bludgeoning damage. Strahd, the target of Vladimir's sworn vengeance, takes an extra 14 ({@damage 4d6}) bludgeoning damage. Instead of dealing damage, Vladimir can grapple the target (escape {@dc 14}) provided the target is Large or smaller."
					]
				},
				{
					"name": "Greatsword +2",
					"entries": [
						"{@atk mw} {@hit 9} to hit, reach 5 ft., one target. {@h}20 ({@damage 4d6 + 6}) slashing damage. Against Strahd, Vladimir deals an extra 14 ({@damage 4d6}) slashing damage with this weapon."
					]
				},
				{
					"name": "Vengeful Glare",
					"entries": [
						"Vladimir can target Strahd within 30 feet provided he can see Strahd. Strahd must make a {@dc 15} Wisdom saving throw. One a failure, Strahd is {@condition paralyzed} until Vladimir deals damage to him, or until the end of Vladimir's next turn. When the paralysis ends, Strahd is {@condition frightened} of Vladimir for 1 minute. Strahd can repeat the saving throw at the end of each of his turns, with disadvantage if he can see Vladimir, ending the {@condition frightened} condition on itself on a success."
					]
				}
			],
			"hasToken": true,
			"traitTags": [
				"Regeneration",
				"Rejuvenation",
				"Turn Immunity"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C",
				"DR"
			],
			"damageTags": [
				"B",
				"S"
			],
			"miscTags": [
				"MW"
			],
			"hasFluff": true
		},
		{
			"name": "Volenta Popofsky",
			"isNpc": true,
			"source": "CoS",
			"page": 93,
			"_copy": {
				"name": "Vampire Spawn",
				"source": "MM",
				"_mod": {
					"*": {
						"mode": "replaceTxt",
						"replace": "the vampire",
						"with": "Volenta",
						"flags": "i"
					}
				}
			},
			"hasToken": true
		},
		{
			"name": "Walking Corpse",
			"source": "CoS",
			"page": 165,
			"_copy": {
				"name": "Commoner",
				"source": "MM",
				"_mod": {
					"trait": {
						"mode": "appendArr",
						"items": [
							{
								"name": "Violent Death",
								"entries": [
									"When a corpse is reduced to 0 hit points, it splits open, disgorging a {@creature swarm of poisonous snakes}. The snakes are hungry and fight until slain."
								]
							}
						]
					}
				}
			},
			"speed": {
				"walk": 20
			},
			"conditionImmune": [
				"charmed",
				"frightened"
			]
		},
		{
			"name": "Wereraven",
			"group": "Lycanthropes",
			"source": "CoS",
			"page": 242,
			"otherSources": [
				{
					"source": "CM"
				},
				{
					"source": "VRGR"
				}
			],
			"size": "M",
			"type": {
				"type": "humanoid",
				"tags": [
					"human",
					"shapechanger"
				]
			},
			"alignment": [
				"L",
				"G"
			],
			"ac": [
				12
			],
			"hp": {
				"average": 31,
				"formula": "7d8"
			},
			"speed": {
				"walk": {
					"number": 30,
					"condition": "(fly 50 ft. in raven and hybrid forms)"
				}
			},
			"str": 10,
			"dex": 15,
			"con": 11,
			"int": 13,
			"wis": 15,
			"cha": 14,
			"skill": {
				"insight": "+4",
				"perception": "+6"
			},
			"passive": 16,
			"languages": [
				"Common (can't speak in raven form)"
			],
			"cr": "2",
			"trait": [
				{
					"name": "Shapechanger",
					"entries": [
						"The wereraven can use its action to polymorph into a raven-humanoid hybrid or into a raven, or back into its human form. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its human form if it dies."
					]
				},
				{
					"name": "Mimicry",
					"entries": [
						"The wereraven can mimic simple sounds it has heard, such as a person whispering, a baby crying, or an animal chittering. A creature that hears the sounds can tell they are imitations with a successful {@dc 10} Wisdom (Insight) check."
					]
				},
				{
					"name": "Regeneration",
					"entries": [
						"The wereraven regains 10 hit points at the start of its turn. If the wereraven takes damage from a silvered weapon or a spell, this trait doesn't function at the start of the wereraven's next turn. The wereraven dies only if it starts its turn with 0 hit points and doesn't regenerate."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack (Human or Hybrid Form Only)",
					"entries": [
						"The wereraven makes two weapon attacks, one of which can be with its hand crossbow."
					]
				},
				{
					"name": "Beak (Raven or Hybrid Form Only)",
					"entries": [
						"{@atk mw} {@hit 4} to hit, reach 5 ft., one target. {@h}1 piercing damage in raven form, or 4 ({@damage 1d4 + 2}) piercing damage in hybrid form. If the target is humanoid, it must succeed on a {@dc 10} Constitution saving throw or be cursed with wereraven lycanthropy."
					]
				},
				{
					"name": "Shortsword (Human or Hybrid Form Only)",
					"entries": [
						"{@atk mw} {@hit 4} to hit, reach 5 ft., one target. {@h}5 ({@damage 1d6 + 2}) piercing damage."
					]
				},
				{
					"name": "Hand Crossbow (Human or Hybrid Form Only)",
					"entries": [
						"{@atk rw} {@hit 4} to hit, range 30/120 ft., one target. {@h}5 ({@damage 1d6 + 2}) piercing damage."
					]
				}
			],
			"hasToken": true,
			"traitTags": [
				"Regeneration",
				"Shapechanger"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C",
				"CS"
			],
			"damageTags": [
				"P"
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
			"name": "Yevgeni Krushkin",
			"isNpc": true,
			"source": "CoS",
			"page": 100,
			"_copy": {
				"name": "Scout",
				"source": "MM",
				"_mod": {
					"*": {
						"mode": "replaceTxt",
						"replace": "the scout",
						"with": "Yevgeni",
						"flags": "i"
					}
				}
			},
			"type": {
				"type": "humanoid",
				"tags": [
					"human"
				]
			},
			"alignment": [
				"N"
			],
			"hasToken": true
		},
		{
			"name": "Zuleika Toranescu",
			"isNpc": true,
			"source": "CoS",
			"page": 204,
			"_copy": {
				"name": "Werewolf",
				"source": "MM",
				"_mod": {
					"*": {
						"mode": "replaceTxt",
						"replace": "the werewolf",
						"with": "Zuleika",
						"flags": "i"
					}
				}
			},
			"hasToken": true
		},
		{
			"name": "Zygfrek Belview",
			"isNpc": true,
			"source": "CoS",
			"page": 148,
			"_copy": {
				"name": "Mongrelfolk",
				"source": "CoS",
				"_mod": {
					"*": {
						"mode": "replaceTxt",
						"replace": "the mongrelfolk",
						"with": "Zygfrek",
						"flags": "i"
					},
					"trait": {
						"mode": "replaceArr",
						"replace": "Extraordinary Feature",
						"items": {
							"name": "Darkvision",
							"entries": [
								"The mongrelfolk has darkvision out to a range of 60 feet."
							]
						}
					}
				}
			},
			"senses": [
				"darkvision 60 ft."
			],
			"hasToken": true,
			"senseTags": [
				"D"
			]
		}
	]
}
