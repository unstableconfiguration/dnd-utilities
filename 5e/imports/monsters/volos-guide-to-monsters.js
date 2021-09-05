/* Credit to the makers of 5etools */
export let volos =  [
		{
			"name": "Abjurer",
			"source": "VGM",
			"page": 209,
			"size": "M",
			"type": {
				"type": "humanoid",
				"tags": [
					"any race"
				]
			},
			"alignment": [
				"A"
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
				"average": 84,
				"formula": "13d8 + 26"
			},
			"speed": {
				"walk": 30
			},
			"str": 9,
			"dex": 14,
			"con": 14,
			"int": 18,
			"wis": 12,
			"cha": 11,
			"save": {
				"int": "+8",
				"wis": "+5"
			},
			"skill": {
				"arcana": "+8",
				"history": "+8"
			},
			"passive": 11,
			"languages": [
				"any four languages"
			],
			"cr": "9",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The abjurer is a 13th-level spellcaster. Its spellcasting ability is Intelligence (spell save {@dc 16}, {@hit 8} to hit with spell attacks). The abjurer has the following wizard spells prepared:"
					],
					"spells": {
						"0": {
							"spells": [
								"{@spell blade ward}",
								"{@spell dancing lights}",
								"{@spell mending}",
								"{@spell message}",
								"{@spell ray of frost}"
							]
						},
						"1": {
							"slots": 4,
							"spells": [
								"{@spell alarm}*",
								"{@spell mage armor}",
								"{@spell magic missile}",
								"{@spell shield}*"
							]
						},
						"2": {
							"slots": 3,
							"spells": [
								"{@spell arcane lock}*",
								"{@spell invisibility}"
							]
						},
						"3": {
							"slots": 3,
							"spells": [
								"{@spell counterspell}*",
								"{@spell dispel magic}*",
								"{@spell fireball}"
							]
						},
						"4": {
							"slots": 3,
							"spells": [
								"{@spell banishment}*",
								"{@spell stoneskin}*"
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
								"{@spell flesh to stone}",
								"{@spell globe of invulnerability}*"
							]
						},
						"7": {
							"slots": 1,
							"spells": [
								"{@spell symbol}*",
								"{@spell teleport}"
							]
						}
					},
					"footerEntries": [
						"*Abjuration spell of 1st level or higher"
					],
					"ability": "int"
				}
			],
			"trait": [
				{
					"name": "Arcane Ward",
					"entries": [
						"The abjurer has a magical ward that has 30 hit points. Whenever the abjurer takes damage, the ward takes the damage instead. If the ward is reduced to 0 hit points, the abjurer takes any remaining damage. When the abjurer casts an abjuration spell of 1st level or higher, the ward regains a number of hit points equal to twice the level of the spell."
					]
				}
			],
			"action": [
				{
					"name": "Quarterstaff",
					"entries": [
						"{@atk mw} {@hit 3} to hit, reach 5 ft., one target. {@h}2 ({@damage 1d6 - 1}) bludgeoning damage, or 3 ({@damage 1d8 - 1}) bludgeoning damage if used with two hands."
					]
				}
			],
			"environment": [
				"urban"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/abjurer.mp3"
			},
			"languageTags": [
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
			"hasFluff": true
		},
		{
			"name": "Alhoon",
			"source": "VGM",
			"page": 172,
			"size": "M",
			"type": "undead",
			"alignment": [
				"L",
				"NX",
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
			"str": 11,
			"dex": 12,
			"con": 16,
			"int": 19,
			"wis": 17,
			"cha": 17,
			"save": {
				"con": "+7",
				"int": "+8",
				"wis": "+7",
				"cha": "+7"
			},
			"skill": {
				"arcana": "+8",
				"deception": "+7",
				"history": "+8",
				"insight": "+7",
				"perception": "+7",
				"stealth": "+5"
			},
			"senses": [
				"truesight 120 ft."
			],
			"passive": 17,
			"resist": [
				"cold",
				"lightning",
				"necrotic"
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
				"paralyzed",
				"poisoned"
			],
			"languages": [
				"Deep Speech",
				"Undercommon",
				"telepathy 120 ft."
			],
			"cr": "10",
			"spellcasting": [
				{
					"name": "Innate Spellcasting (Psionics)",
					"headerEntries": [
						"The alhoon's innate spellcasting ability is Intelligence (spell save {@dc 16}). It can innately cast the following spells, requiring no components:"
					],
					"will": [
						"{@spell detect thoughts}",
						"{@spell levitate}"
					],
					"daily": {
						"1e": [
							"{@spell dominate monster}",
							"{@spell plane shift} (self only)"
						]
					},
					"ability": "int"
				},
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The alhoon is a 12th-level spellcaster. Its spellcasting ability is Intelligence (spell save {@dc 16}, {@hit 8} to hit with spell attacks). The alhoon has the following wizard spells prepared:"
					],
					"spells": {
						"0": {
							"spells": [
								"{@spell chill touch}",
								"{@spell dancing lights}",
								"{@spell mage hand}",
								"{@spell prestidigitation}",
								"{@spell shocking grasp}"
							]
						},
						"1": {
							"slots": 4,
							"spells": [
								"{@spell detect magic}",
								"{@spell disguise self}",
								"{@spell magic missile}",
								"{@spell shield}"
							]
						},
						"2": {
							"slots": 3,
							"spells": [
								"{@spell invisibility}",
								"{@spell mirror image}",
								"{@spell scorching ray}"
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
								"{@spell confusion}",
								"{@spell Evard's black tentacles}",
								"{@spell phantasmal killer}"
							]
						},
						"5": {
							"slots": 2,
							"spells": [
								"{@spell modify memory}",
								"{@spell wall of force}"
							]
						},
						"6": {
							"slots": 1,
							"spells": [
								"{@spell disintegrate}",
								"{@spell globe of invulnerability}"
							]
						}
					},
					"ability": "int"
				}
			],
			"trait": [
				{
					"name": "Magic Resistance",
					"entries": [
						"The alhoon has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Turn Resistance",
					"entries": [
						"The alhoon has advantage on saving throws against any effect that turns undead."
					]
				}
			],
			"action": [
				{
					"name": "Chilling Grasp",
					"entries": [
						"{@atk ms} {@hit 8} to hit, reach 5 ft., one target. {@h}10 ({@damage 3d6}) cold damage."
					]
				},
				{
					"name": "Mind Blast {@recharge 5}",
					"entries": [
						"The alhoon magically emits psychic energy in a 60-foot cone. Each creature in that area must succeed on a {@dc 16} Intelligence saving throw or take 22 ({@damage 4d8 + 4}) psychic damage and be {@condition stunned} for 1 minute. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
					]
				}
			],
			"environment": [
				"underdark"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/alhoon.mp3"
			},
			"traitTags": [
				"Magic Resistance",
				"Turn Resistance"
			],
			"senseTags": [
				"U"
			],
			"languageTags": [
				"DS",
				"TP",
				"U"
			],
			"damageTags": [
				"C",
				"Y"
			],
			"spellcastingTags": [
				"CW",
				"I",
				"P"
			],
			"miscTags": [
				"AOE"
			],
			"conditionInflict": [
				"stunned"
			],
			"conditionInflictSpell": [
				"charmed",
				"frightened",
				"incapacitated",
				"invisible",
				"restrained"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Annis Hag",
			"source": "VGM",
			"page": 159,
			"otherSources": [
				{
					"source": "MOT"
				}
			],
			"size": "L",
			"type": "fey",
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
				"average": 75,
				"formula": "10d10 + 20"
			},
			"speed": {
				"walk": 40
			},
			"str": 21,
			"dex": 12,
			"con": 14,
			"int": 13,
			"wis": 14,
			"cha": 15,
			"save": {
				"con": "+5"
			},
			"skill": {
				"deception": "+5",
				"perception": "+5"
			},
			"senses": [
				"darkvision 60 ft."
			],
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
			"languages": [
				"Common",
				"Giant",
				"Sylvan"
			],
			"cr": {
				"cr": "6",
				"coven": "8"
			},
			"spellcasting": [
				{
					"name": "Innate Spellcasting",
					"headerEntries": [
						"The hag's innate spellcasting ability is Charisma (spell save {@dc 13}). She can innately cast the following spells:"
					],
					"daily": {
						"3e": [
							"{@spell disguise self} (including the form of a Medium humanoid)",
							"{@spell fog cloud}"
						]
					},
					"ability": "cha"
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The annis makes three attacks: one with her bite and two with her claws."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 8} to hit, reach 5 ft., one target. {@h}15 ({@damage 3d6 + 5}) piercing damage."
					]
				},
				{
					"name": "Claw",
					"entries": [
						"{@atk mw} {@hit 8} to hit, reach 5 ft., one target. {@h}15 ({@damage 3d6 + 5}) slashing damage."
					]
				},
				{
					"name": "Crushing Hug",
					"entries": [
						"{@atk mw} {@hit 8} to hit, reach 5 ft., one target. {@h}36 ({@damage 9d6 + 5}) bludgeoning damage, and the target is {@condition grappled} (escape {@dc 15}) if it is a Large or smaller creature. Until the grapple ends, the target takes 36 ({@damage 9d6 + 5}) bludgeoning damage at the start of each of the hag's turns. The hag can't make attacks while grappling a creature in this way."
					]
				}
			],
			"legendaryGroup": {
				"name": "Annis Hag",
				"source": "VGM"
			},
			"variant": [
				{
					"type": "inset",
					"name": "Hag Covens",
					"entries": [
						"When hags must work together, they form covens, in spite of their selfish natures. A coven is made up of hags of any type, all of whom are equals within the group. However, each of the hags continues to desire more personal power.",
						"A coven consists of three hags so that any arguments between two hags can be settled by the third. If more than three hags ever come together, as might happen if two covens come into conflict, the result is usually chaos.",
						{
							"type": "spellcasting",
							"name": "Shared Spellcasting (Coven Only)",
							"headerEntries": [
								"While all three members of a hag coven are within 30 feet of one another, they can each cast the following spells from the wizard's spell list but must share the spell slots among themselves:"
							],
							"spells": {
								"1": {
									"slots": 4,
									"spells": [
										"{@spell identify}",
										"{@spell ray of sickness}"
									]
								},
								"2": {
									"slots": 3,
									"spells": [
										"{@spell hold person}",
										"{@spell locate object}"
									]
								},
								"3": {
									"slots": 3,
									"spells": [
										"{@spell bestow curse}",
										"{@spell counterspell}",
										"{@spell lightning bolt}"
									]
								},
								"4": {
									"slots": 3,
									"spells": [
										"{@spell phantasmal killer}",
										"{@spell polymorph}"
									]
								},
								"5": {
									"slots": 2,
									"spells": [
										"{@spell contact other plane}",
										"{@spell scrying}"
									]
								},
								"6": {
									"slots": 1,
									"spells": [
										"{@spell eyebite}"
									]
								}
							},
							"footerEntries": [
								"For casting these spells, each hag is a 12th-level spellcaster that uses Intelligence as her spellcasting ability. The spell save DC is 12 + the hag's Intelligence modifier, and the spell attack bonus is 4 + the hag's Intelligence modifier."
							]
						},
						{
							"type": "entries",
							"name": "Hag Eye",
							"entries": [
								"A hag coven can craft a magic item called a hag eye, which is made from a real eye coated in varnish and often fitted to a pendant or other wearable item. The hag eye is usually entrusted to a minion for safekeeping and transport. A hag in the coven can take an action to see what the hag eye sees if the hag eye is on the same plane of existence. A hag eye has AC 10, 1 hit point, and darkvision with a radius of 60 feet. If it is destroyed, each coven member takes {@dice 3d10} psychic damage and is {@condition blinded} for 24 hours.",
								"A hag coven can have only one hag eye at a time, and creating a new one requires all three members of the coven to perform a ritual. The ritual takes 1 hour, and the hags can't perform it while {@condition blinded}. During the ritual, if the hags take any action other than performing the ritual, they must start over."
							]
						}
					]
				},
				{
					"type": "variant",
					"name": "Death Coven",
					"entries": [
						{
							"type": "spellcasting",
							"name": "Shared Spellcasting (Coven Only)",
							"headerEntries": [
								"For a death coven, replace the spell list of the hags' Shared Spellcasting trait with the following spells:"
							],
							"spells": {
								"1": {
									"slots": 4,
									"spells": [
										"{@spell false life}",
										"{@spell inflict wounds}"
									]
								},
								"2": {
									"slots": 3,
									"spells": [
										"{@spell gentle repose}",
										"{@spell ray of enfeeblement}"
									]
								},
								"3": {
									"slots": 3,
									"spells": [
										"{@spell animate dead}",
										"{@spell revivify}",
										"{@spell speak with dead}"
									]
								},
								"4": {
									"slots": 3,
									"spells": [
										"{@spell blight}",
										"{@spell death ward}"
									]
								},
								"5": {
									"slots": 2,
									"spells": [
										"{@spell contagion}",
										"{@spell raise dead}"
									]
								},
								"6": {
									"slots": 1,
									"spells": [
										"{@spell circle of death}"
									]
								}
							}
						}
					]
				},
				{
					"type": "variant",
					"name": "Nature Coven",
					"entries": [
						{
							"type": "spellcasting",
							"name": "Shared Spellcasting (Coven Only)",
							"headerEntries": [
								"For a nature coven, replace the spell list of the hags' Shared Spellcasting trait with the following spells:"
							],
							"spells": {
								"1": {
									"slots": 4,
									"spells": [
										"{@spell entangle}",
										"{@spell speak with animals}"
									]
								},
								"2": {
									"slots": 3,
									"spells": [
										"{@spell flaming sphere}",
										"{@spell moonbeam}",
										"{@spell spike growth}"
									]
								},
								"3": {
									"slots": 3,
									"spells": [
										"{@spell call lightning}",
										"{@spell plant growth}"
									]
								},
								"4": {
									"slots": 3,
									"spells": [
										"{@spell dominate beast}",
										"{@spell grasping vine}"
									]
								},
								"5": {
									"slots": 2,
									"spells": [
										"{@spell insect plague}",
										"{@spell tree stride}"
									]
								},
								"6": {
									"slots": 1,
									"spells": [
										"{@spell wall of thorns}"
									]
								}
							}
						}
					]
				},
				{
					"type": "variant",
					"name": "Prophecy Coven",
					"entries": [
						{
							"type": "spellcasting",
							"name": "Shared Spellcasting (Coven Only)",
							"headerEntries": [
								"For a prophecy coven, replace the spell list of the hags' Shared Spellcasting trait with the following spells:"
							],
							"spells": {
								"1": {
									"slots": 4,
									"spells": [
										"{@spell bane}",
										"{@spell bless}"
									]
								},
								"2": {
									"slots": 3,
									"spells": [
										"{@spell augury}",
										"{@spell detect thoughts}"
									]
								},
								"3": {
									"slots": 3,
									"spells": [
										"{@spell clairvoyance}",
										"{@spell dispel magic}",
										"{@spell nondetection}"
									]
								},
								"4": {
									"slots": 3,
									"spells": [
										"{@spell arcane eye}",
										"{@spell locate creature}"
									]
								},
								"5": {
									"slots": 2,
									"spells": [
										"{@spell geas}",
										"{@spell legend lore}"
									]
								},
								"6": {
									"slots": 1,
									"spells": [
										"{@spell true seeing}"
									]
								}
							}
						}
					]
				}
			],
			"environment": [
				"mountain",
				"hill"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/annis-hag.mp3"
			},
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C",
				"GI",
				"S"
			],
			"damageTags": [
				"B",
				"P",
				"S"
			],
			"spellcastingTags": [
				"CW",
				"I",
				"S"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"grappled"
			],
			"conditionInflictSpell": [
				"blinded",
				"charmed",
				"frightened",
				"paralyzed",
				"poisoned",
				"restrained",
				"stunned",
				"unconscious"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Apprentice Wizard",
			"source": "VGM",
			"page": 209,
			"otherSources": [
				{
					"source": "WDH"
				},
				{
					"source": "ToA"
				},
				{
					"source": "DIP"
				},
				{
					"source": "SLW"
				},
				{
					"source": "ERLW"
				}
			],
			"size": "M",
			"type": {
				"type": "humanoid",
				"tags": [
					"any race"
				]
			},
			"alignment": [
				"A"
			],
			"ac": [
				10
			],
			"hp": {
				"average": 9,
				"formula": "2d8"
			},
			"speed": {
				"walk": 30
			},
			"str": 10,
			"dex": 10,
			"con": 10,
			"int": 14,
			"wis": 10,
			"cha": 11,
			"skill": {
				"arcana": "+4",
				"history": "+4"
			},
			"passive": 10,
			"languages": [
				"any one language (usually Common)"
			],
			"cr": "1/4",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The apprentice is a 1st-level spellcaster. Its spellcasting ability is Intelligence (spell save {@dc 12}, {@hit 4} to hit with spell attacks). It has the following wizard spells prepared:"
					],
					"spells": {
						"0": {
							"spells": [
								"{@spell fire bolt}",
								"{@spell mending}",
								"{@spell prestidigitation}"
							]
						},
						"1": {
							"slots": 2,
							"spells": [
								"{@spell burning hands}",
								"{@spell disguise self}",
								"{@spell shield}"
							]
						}
					},
					"ability": "int"
				}
			],
			"action": [
				{
					"name": "Dagger",
					"entries": [
						"{@atk mw,rw} {@hit 2} to hit, reach 5 ft. or range 20/60 ft., one target. {@h}2 ({@damage 1d4}) piercing damage."
					]
				}
			],
			"environment": [
				"urban"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/apprentice-wizard.mp3"
			},
			"languageTags": [
				"C",
				"X"
			],
			"damageTags": [
				"P"
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
			"name": "Archdruid",
			"source": "VGM",
			"page": 210,
			"otherSources": [
				{
					"source": "WDMM"
				},
				{
					"source": "GoS"
				},
				{
					"source": "MOT"
				}
			],
			"size": "M",
			"type": {
				"type": "humanoid",
				"tags": [
					"any race"
				]
			},
			"alignment": [
				"A"
			],
			"ac": [
				{
					"ac": 16,
					"from": [
						"{@item hide armor|phb}",
						"{@item shield|phb}"
					]
				}
			],
			"hp": {
				"average": 132,
				"formula": "24d8 + 24"
			},
			"speed": {
				"walk": 30
			},
			"str": 10,
			"dex": 14,
			"con": 12,
			"int": 12,
			"wis": 20,
			"cha": 11,
			"save": {
				"int": "+5",
				"wis": "+9"
			},
			"skill": {
				"medicine": "+9",
				"nature": "+5",
				"perception": "+9"
			},
			"passive": 19,
			"languages": [
				"Druidic plus any two languages"
			],
			"cr": "12",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The archdruid is an 18th-level spellcaster. Its spellcasting ability is Wisdom (spell save {@dc 17}, {@hit 9} to hit with spell attacks). It has the following druid spells prepared:"
					],
					"spells": {
						"0": {
							"spells": [
								"{@spell druidcraft}",
								"{@spell mending}",
								"{@spell poison spray}",
								"{@spell produce flame}"
							]
						},
						"1": {
							"slots": 4,
							"spells": [
								"{@spell cure wounds}",
								"{@spell entangle}",
								"{@spell faerie fire}",
								"{@spell speak with animals}"
							]
						},
						"2": {
							"slots": 3,
							"spells": [
								"{@spell animal messenger}",
								"{@spell beast sense}",
								"{@spell hold person}"
							]
						},
						"3": {
							"slots": 3,
							"spells": [
								"{@spell conjure animals}",
								"{@spell meld into stone}",
								"{@spell water breathing}"
							]
						},
						"4": {
							"slots": 3,
							"spells": [
								"{@spell dominate beast}",
								"{@spell locate creature}",
								"{@spell stoneskin}",
								"{@spell wall of fire}"
							]
						},
						"5": {
							"slots": 3,
							"spells": [
								"{@spell commune with nature}",
								"{@spell mass cure wounds}",
								"{@spell tree stride}"
							]
						},
						"6": {
							"slots": 1,
							"spells": [
								"{@spell heal}",
								"{@spell heroes' feast}",
								"{@spell sunbeam}"
							]
						},
						"7": {
							"slots": 1,
							"spells": [
								"{@spell fire storm}"
							]
						},
						"8": {
							"slots": 1,
							"spells": [
								"{@spell animal shapes}"
							]
						},
						"9": {
							"slots": 1,
							"spells": [
								"{@spell foresight}"
							]
						}
					},
					"ability": "wis"
				}
			],
			"action": [
				{
					"name": "Scimitar",
					"entries": [
						"{@atk mw} {@hit 6} to hit, reach 5 ft., one target. {@h}5 ({@damage 1d6 + 2}) slashing damage."
					]
				},
				{
					"name": "Change Shape (2/Day)",
					"entries": [
						"The archdruid magically polymorphs into a beast or elemental with a challenge rating of 6 or less, and can remain in this form for up to 9 hours. The archdruid can choose whether its equipment falls to the ground, melds with its new form, or is worn by the new form. The archdruid reverts to its true form if it dies or falls {@condition unconscious}. The archdruid can revert to its true form using a bonus action on its turn.",
						"While in a new form, the archdruid retains its game statistics and ability to speak, but its AC, movement modes, Strength, and Dexterity are replaced by those of the new form, and it gains any special senses, proficiencies, traits, actions, and reactions (except class features, legendary actions, and lair actions) that the new form has but that it lacks. It can cast its spells with verbal or somatic components in its new form.",
						"The new form's attacks count as magical for the purpose of overcoming resistances and immunity to nonmagical attacks."
					]
				}
			],
			"environment": [
				"forest",
				"mountain",
				"swamp"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/archdruid.mp3"
			},
			"languageTags": [
				"DU",
				"X"
			],
			"damageTags": [
				"S"
			],
			"spellcastingTags": [
				"CD"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflictSpell": [
				"blinded",
				"charmed",
				"paralyzed",
				"prone",
				"restrained"
			],
			"hasFluff": true
		},
		{
			"name": "Archer",
			"source": "VGM",
			"page": 210,
			"otherSources": [
				{
					"source": "DIP"
				},
				{
					"source": "SLW"
				},
				{
					"source": "MOT"
				}
			],
			"size": "M",
			"type": {
				"type": "humanoid",
				"tags": [
					"any race"
				]
			},
			"alignment": [
				"A"
			],
			"ac": [
				{
					"ac": 16,
					"from": [
						"{@item studded leather armor|phb}"
					]
				}
			],
			"hp": {
				"average": 75,
				"formula": "10d8 + 30"
			},
			"speed": {
				"walk": 30
			},
			"str": 11,
			"dex": 18,
			"con": 16,
			"int": 11,
			"wis": 13,
			"cha": 10,
			"skill": {
				"acrobatics": "+6",
				"perception": "+5"
			},
			"passive": 15,
			"languages": [
				"any one language (usually Common)"
			],
			"cr": "3",
			"trait": [
				{
					"name": "Archer's Eye (3/Day)",
					"entries": [
						"As a bonus action, the archer can add {@dice 1d10} to its next attack or damage roll with a longbow or shortbow."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The archer makes two attacks with its longbow."
					]
				},
				{
					"name": "Shortsword",
					"entries": [
						"{@atk mw} {@hit 6} to hit, reach 5 ft., one target. {@h}7 ({@damage 1d6 + 4}) piercing damage."
					]
				},
				{
					"name": "Longbow",
					"entries": [
						"{@atk rw} {@hit 6} to hit, range 150/600 ft., one target. {@h}8 ({@damage 1d8 + 4}) piercing damage."
					]
				}
			],
			"environment": [
				"forest",
				"urban"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/archer.mp3"
			},
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C",
				"X"
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
			"name": "Aurochs",
			"source": "VGM",
			"page": 207,
			"size": "L",
			"type": "beast",
			"alignment": [
				"U"
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
				"average": 38,
				"formula": "4d10 + 16"
			},
			"speed": {
				"walk": 50
			},
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
					"name": "Charge",
					"entries": [
						"If the aurochs moves at least 20 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 9 ({@damage 2d8}) piercing damage. If the target is a creature, it must succeed on a {@dc 15} Strength saving throw or be knocked {@condition prone}."
					]
				}
			],
			"action": [
				{
					"name": "Gore",
					"entries": [
						"{@atk mw} {@hit 7} to hit, reach 5 ft., one target. {@h}14 ({@damage 2d8 + 5}) piercing damage."
					]
				}
			],
			"environment": [
				"mountain",
				"grassland",
				"hill"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/aurochs.mp3"
			},
			"traitTags": [
				"Charge"
			],
			"damageTags": [
				"P"
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
			"name": "Babau",
			"source": "VGM",
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
				{
					"ac": 16,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 82,
				"formula": "11d8 + 33"
			},
			"speed": {
				"walk": 40
			},
			"str": 19,
			"dex": 16,
			"con": 16,
			"int": 11,
			"wis": 12,
			"cha": 13,
			"skill": {
				"perception": "+5",
				"stealth": "+5"
			},
			"senses": [
				"darkvision 120 ft."
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
			"conditionImmune": [
				"poisoned"
			],
			"languages": [
				"Abyssal"
			],
			"cr": "4",
			"spellcasting": [
				{
					"name": "Innate Spellcasting",
					"headerEntries": [
						"The babau's innate spellcasting ability is Wisdom (spell save {@dc 11}). The babau can innately cast the following spells, requiring no material components:"
					],
					"will": [
						"{@spell darkness}",
						"{@spell dispel magic}",
						"{@spell fear}",
						"{@spell heat metal}",
						"{@spell levitate}"
					],
					"ability": "wis"
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The babau makes two melee attacks. It can also use Weakening Gaze before or after making these attacks."
					]
				},
				{
					"name": "Claw",
					"entries": [
						"{@atk mw} {@hit 6} to hit, reach 5 ft., one target. {@h}8 ({@damage 1d8 + 4}) slashing damage."
					]
				},
				{
					"name": "Spear",
					"entries": [
						"{@atk mw,rw} {@hit 6} to hit, reach 5 ft. or range 20/60 ft., one target. {@h}7 ({@damage 1d6 + 4}) piercing damage, or 8 ({@damage 1d8 + 4}) piercing damage when used with two hands to make a melee attack."
					]
				},
				{
					"name": "Weakening Gaze",
					"entries": [
						"The babau targets one creature that it can see within 20 feet of it. The target must make a {@dc 13} Constitution saving throw. On a failed save, the target deals only half damage with weapon attacks that use Strength for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
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
				"path": "bestiary/babau.mp3"
			},
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"AB"
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
				"RW",
				"THW"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Banderhobb",
			"source": "VGM",
			"page": 122,
			"size": "L",
			"type": "monstrosity",
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
				"average": 84,
				"formula": "8d10 + 40"
			},
			"speed": {
				"walk": 30
			},
			"str": 20,
			"dex": 12,
			"con": 20,
			"int": 11,
			"wis": 14,
			"cha": 8,
			"skill": {
				"athletics": "+8",
				"stealth": "+7"
			},
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 12,
			"conditionImmune": [
				"charmed",
				"frightened"
			],
			"languages": [
				"Common and the languages of its creator but can't speak"
			],
			"cr": "5",
			"trait": [
				{
					"name": "Resonant Connection",
					"entries": [
						"If the banderhobb has even a tiny piece of a creature or an object in its possession, such as a lock of hair or a splinter of wood, it knows the most direct route to that creature or object if it is within 1 mile of the banderhobb."
					]
				},
				{
					"name": "Shadow Stealth",
					"entries": [
						"While in dim light or darkness, the banderhobb can take the Hide action as a bonus action."
					]
				}
			],
			"action": [
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 8} to hit, reach 5 ft., one target. {@h}22 ({@damage 5d6 + 5}) piercing damage, and the target is {@condition grappled} (escape {@dc 15}) if it is a Large or smaller creature. Until this grapple ends, the target is {@condition restrained}, and the banderhobb can't use its bite attack or tongue attack on another target."
					]
				},
				{
					"name": "Tongue",
					"entries": [
						"{@atk mw} {@hit 8} to hit, reach 15 ft., one target. {@h}10 ({@damage 3d6}) necrotic damage, and the target must make a {@dc 15} Strength saving throw. On a failed save, the target is pulled to a space within 5 feet of the banderhobb, which can use a bonus action to make a bite attack against the target."
					]
				},
				{
					"name": "Swallow",
					"entries": [
						"The banderhobb makes a bite attack against a Medium or smaller creature it is grappling. If the attack hits, the target is swallowed, and the grapple ends. The swallowed creature is {@condition blinded} and {@condition restrained}, it has total cover against attacks and other effects outside the banderhobb and it takes 10 ({@damage 3d6}) necrotic damage at the start of each of the banderhobb's turns. A creature reduced to 0 hit points in this way stops taking necrotic damage and becomes stable.",
						"The banderhobb can have only one target swallowed at a time. While the banderhobb isn't {@condition incapacitated}, it can regurgitate the creature at any time (no action required) in a space within 5 feet of it. The creature exits {@condition prone}. If the banderhobb dies, it likewise regurgitates a swallowed creature."
					]
				},
				{
					"name": "Shadow Step",
					"entries": [
						"The banderhobb magically teleports up to 30 feet to an unoccupied space of dim light or darkness that it can see. Before or after teleporting, it can make a bite or tongue attack."
					]
				}
			],
			"environment": [
				"urban"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/banderhobb.mp3"
			},
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Swallow"
			],
			"languageTags": [
				"CS"
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
				"blinded",
				"grappled",
				"restrained"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Bard",
			"source": "VGM",
			"page": 211,
			"otherSources": [
				{
					"source": "WDH"
				},
				{
					"source": "GoS"
				},
				{
					"source": "SDW"
				}
			],
			"size": "M",
			"type": {
				"type": "humanoid",
				"tags": [
					"any race"
				]
			},
			"alignment": [
				"A"
			],
			"ac": [
				{
					"ac": 15,
					"from": [
						"{@item chain shirt|phb}"
					]
				}
			],
			"hp": {
				"average": 44,
				"formula": "8d8 + 8"
			},
			"speed": {
				"walk": 30
			},
			"str": 11,
			"dex": 14,
			"con": 12,
			"int": 10,
			"wis": 13,
			"cha": 14,
			"save": {
				"dex": "+4",
				"wis": "+3"
			},
			"skill": {
				"acrobatics": "+4",
				"perception": "+5",
				"performance": "+6"
			},
			"passive": 15,
			"languages": [
				"any two languages"
			],
			"cr": "2",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The bard is a 4th-level spellcaster. Its spellcasting ability is Charisma (spell save {@dc 12}, {@hit 4} to hit with spell attacks). It has the following bard spells prepared:"
					],
					"spells": {
						"0": {
							"spells": [
								"{@spell friends}",
								"{@spell mage hand}",
								"{@spell vicious mockery}"
							]
						},
						"1": {
							"slots": 4,
							"spells": [
								"{@spell charm person}",
								"{@spell healing word}",
								"{@spell heroism}",
								"{@spell sleep}",
								"{@spell thunderwave}"
							]
						},
						"2": {
							"slots": 3,
							"spells": [
								"{@spell invisibility}",
								"{@spell shatter}"
							]
						}
					},
					"ability": "cha"
				}
			],
			"trait": [
				{
					"name": "Song of Rest",
					"entries": [
						"The bard can perform a song while taking a short rest. Any ally who hears the song regains an extra {@dice 1d6} hit points if it spends any Hit Dice to regain hit points at the end of that rest. The bard can confer this benefit on itself as well."
					]
				},
				{
					"name": "Taunt (2/Day)",
					"entries": [
						"The bard can use a bonus action on its turn to target one creature within 30 feet of it. If the target can hear the bard, the target must succeed on a {@dc 12} Charisma saving throw or have disadvantage on ability checks, attack rolls, and saving throws until the start of the bard's next turn."
					]
				}
			],
			"action": [
				{
					"name": "Shortsword",
					"entries": [
						"{@atk mw} {@hit 4} to hit, reach 5 ft., one target. {@h}5 ({@damage 1d6 + 2}) piercing damage."
					]
				},
				{
					"name": "Shortbow",
					"entries": [
						"{@atk rw} {@hit 4} to hit, range 80/320 ft., one target. {@h}5 ({@damage 1d6 + 2}) piercing damage."
					]
				}
			],
			"environment": [
				"urban"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/bard.mp3"
			},
			"languageTags": [
				"X"
			],
			"damageTags": [
				"P"
			],
			"spellcastingTags": [
				"CB"
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
			"name": "Barghest",
			"source": "VGM",
			"page": 123,
			"otherSources": [
				{
					"source": "TftYP"
				}
			],
			"size": "L",
			"type": {
				"type": "fiend",
				"tags": [
					"shapechanger"
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
				"average": 90,
				"formula": "12d10 + 24"
			},
			"speed": {
				"walk": {
					"number": 60,
					"condition": "(30 ft. in goblin form)"
				}
			},
			"str": 19,
			"dex": 15,
			"con": 14,
			"int": 13,
			"wis": 12,
			"cha": 14,
			"skill": {
				"deception": "+4",
				"intimidation": "+4",
				"perception": "+5",
				"stealth": "+4"
			},
			"senses": [
				"blindsight 60 ft.",
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
			"immune": [
				"acid",
				"poison"
			],
			"conditionImmune": [
				"poisoned"
			],
			"languages": [
				"Abyssal",
				"Common",
				"Goblin",
				"Infernal",
				"telepathy 60 ft."
			],
			"cr": "4",
			"spellcasting": [
				{
					"name": "Innate Spellcasting",
					"headerEntries": [
						"The barghest's innate spellcasting ability is Charisma (spell save {@dc 12}). It can innately cast the following spells, requiring no material components:"
					],
					"will": [
						"{@spell levitate}",
						"{@spell minor illusion}",
						"{@spell pass without trace}"
					],
					"daily": {
						"1e": [
							"{@spell charm person}",
							"{@spell dimension door}",
							"{@spell suggestion}"
						]
					},
					"ability": "cha"
				}
			],
			"trait": [
				{
					"name": "Shapechanger",
					"entries": [
						"The barghest can use its action to polymorph into a Small goblin or back into its true form. Other than its size and speed, its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. The barghest reverts to its true form if it dies."
					]
				},
				{
					"name": "Fire Banishment",
					"entries": [
						"When the barghest starts its turn engulfed in flames that are at least 10 feet high or wide, it must succeed on a {@dc 15} Charisma saving throw or be instantly banished to Gehenna. Instantaneous bursts of flame (such as a red dragon's breath or a fireball spell) don't have this effect on the barghest."
					]
				},
				{
					"name": "Keen Smell",
					"entries": [
						"The barghest has advantage on Wisdom ({@skill Perception}) checks that rely on smell."
					]
				},
				{
					"name": "Soul Feeding",
					"entries": [
						"A barghest can feed on the corpse of a humanoid that it killed that has been dead for less than 10 minutes, devouring both flesh and soul in doing so. This feeding takes at least 1 minute, and it destroys the victim's body. The victim's soul is trapped in the barghest for 24 hours, after which time it is digested. If the barghest dies before the soul is digested, the soul is released.",
						"While a humanoid's soul is trapped in a barghest, any form of revival that could work has only a {@chance 50|50 percent} chance of doing so, freeing the soul from the barghest if it is successful. Once a creature's soul is digested, however, no mortal magic can return that humanoid to life."
					]
				}
			],
			"action": [
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 6} to hit, reach 5 ft., one target. {@h}13 ({@damage 2d8 + 4}) piercing damage."
					]
				},
				{
					"name": "Claws",
					"entries": [
						"{@atk mw} {@hit 6} to hit, reach 5 ft., one target. {@h}8 ({@damage 1d8 + 4}) slashing damage."
					]
				}
			],
			"environment": [
				"underdark",
				"mountain",
				"grassland",
				"forest",
				"hill"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/barghest.mp3"
			},
			"traitTags": [
				"Keen Senses",
				"Shapechanger"
			],
			"senseTags": [
				"B",
				"D"
			],
			"languageTags": [
				"AB",
				"C",
				"GO",
				"I",
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
				"MW"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Bheur Hag",
			"source": "VGM",
			"page": 160,
			"size": "M",
			"type": "fey",
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
				"average": 91,
				"formula": "14d8 + 28"
			},
			"speed": {
				"walk": 30
			},
			"str": 13,
			"dex": 16,
			"con": 14,
			"int": 12,
			"wis": 13,
			"cha": 16,
			"save": {
				"wis": "+4"
			},
			"skill": {
				"nature": "+4",
				"perception": "+4",
				"stealth": "+6",
				"survival": "+4"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 14,
			"immune": [
				"cold"
			],
			"languages": [
				"Auran",
				"Common",
				"Giant"
			],
			"cr": {
				"cr": "7",
				"coven": "9"
			},
			"spellcasting": [
				{
					"name": "Innate Spellcasting",
					"headerEntries": [
						"The hag's innate spellcasting ability is Charisma (spell save {@dc 14}, {@hit 6} to hit with spell attacks). She can innately cast the following spells, requiring no material components:"
					],
					"will": [
						"{@spell hold person}*",
						"{@spell ray of frost}"
					],
					"daily": {
						"3e": [
							"{@spell cone of cold}*",
							"{@spell ice storm}*",
							"{@spell wall of ice}*"
						],
						"1e": [
							"{@spell control weather}"
						]
					},
					"ability": "cha"
				}
			],
			"trait": [
				{
					"name": "Graystaff Magic",
					"entries": [
						"The hag carries a graystaff, a length of gray wood that is a focus for her inner power. She can ride the staff as if it were a {@item broom of flying}. While holding the staff, she can cast additional spells with her Innate Spellcasting trait (these spells are marked with an asterisk). If the staff is lost or destroyed, the hag must craft another, which takes a year and a day. Only a bheur hag can use a graystaff."
					]
				},
				{
					"name": "Ice Walk",
					"entries": [
						"The hag can move across and climb icy surfaces without needing to make an ability check. Additionally, difficult terrain composed of ice or snow doesn't cost her extra moment."
					]
				}
			],
			"action": [
				{
					"name": "Slam",
					"entries": [
						"{@atk mw} {@hit 4} to hit, reach 5 ft., one target. {@h}10 ({@damage 2d8 + 1}) bludgeoning damage plus 3 ({@damage 1d6}) cold damage."
					]
				},
				{
					"name": "Maddening Feast",
					"entries": [
						"The hag feasts on the corpse of one enemy within 5 feet of her that died within the past minute. Each creature of the hag's choice that is within 60 feet of her and able to see her must succeed on a {@dc 15} Wisdom saving throw or be {@condition frightened} of her for 1 minute. While {@condition frightened} in this way, a creature is {@condition incapacitated}, can't understand what others say, can't read, and speaks only in gibberish; the DM controls the creature's movement, which is erratic. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the hag's Maddening Feast for the next 24 hours."
					]
				}
			],
			"legendaryGroup": {
				"name": "Bheur Hag",
				"source": "VGM"
			},
			"variant": [
				{
					"type": "inset",
					"name": "Hag Covens",
					"entries": [
						"When hags must work together, they form covens, in spite of their selfish natures. A coven is made up of hags of any type, all of whom are equals within the group. However, each of the hags continues to desire more personal power.",
						"A coven consists of three hags so that any arguments between two hags can be settled by the third. If more than three hags ever come together, as might happen if two covens come into conflict, the result is usually chaos.",
						{
							"type": "spellcasting",
							"name": "Shared Spellcasting (Coven Only)",
							"headerEntries": [
								"While all three members of a hag coven are within 30 feet of one another, they can each cast the following spells from the wizard's spell list but must share the spell slots among themselves:"
							],
							"spells": {
								"1": {
									"slots": 4,
									"spells": [
										"{@spell identify}",
										"{@spell ray of sickness}"
									]
								},
								"2": {
									"slots": 3,
									"spells": [
										"{@spell hold person}",
										"{@spell locate object}"
									]
								},
								"3": {
									"slots": 3,
									"spells": [
										"{@spell bestow curse}",
										"{@spell counterspell}",
										"{@spell lightning bolt}"
									]
								},
								"4": {
									"slots": 3,
									"spells": [
										"{@spell phantasmal killer}",
										"{@spell polymorph}"
									]
								},
								"5": {
									"slots": 2,
									"spells": [
										"{@spell contact other plane}",
										"{@spell scrying}"
									]
								},
								"6": {
									"slots": 1,
									"spells": [
										"{@spell eyebite}"
									]
								}
							},
							"footerEntries": [
								"For casting these spells, each hag is a 12th-level spellcaster that uses Intelligence as her spellcasting ability. The spell save DC is 12 + the hag's Intelligence modifier, and the spell attack bonus is 4 + the hag's Intelligence modifier."
							]
						},
						{
							"type": "entries",
							"name": "Hag Eye",
							"entries": [
								"A hag coven can craft a magic item called a hag eye, which is made from a real eye coated in varnish and often fitted to a pendant or other wearable item. The hag eye is usually entrusted to a minion for safekeeping and transport. A hag in the coven can take an action to see what the hag eye sees if the hag eye is on the same plane of existence. A hag eye has AC 10, 1 hit point, and darkvision with a radius of 60 feet. If it is destroyed, each coven member takes {@dice 3d10} psychic damage and is {@condition blinded} for 24 hours.",
								"A hag coven can have only one hag eye at a time, and creating a new one requires all three members of the coven to perform a ritual. The ritual takes 1 hour, and the hags can't perform it while {@condition blinded}. During the ritual, if the hags take any action other than performing the ritual, they must start over."
							]
						}
					]
				},
				{
					"type": "variant",
					"name": "Death Coven",
					"entries": [
						{
							"type": "spellcasting",
							"name": "Shared Spellcasting (Coven Only)",
							"headerEntries": [
								"For a death coven, replace the spell list of the hags' Shared Spellcasting trait with the following spells:"
							],
							"spells": {
								"1": {
									"slots": 4,
									"spells": [
										"{@spell false life}",
										"{@spell inflict wounds}"
									]
								},
								"2": {
									"slots": 3,
									"spells": [
										"{@spell gentle repose}",
										"{@spell ray of enfeeblement}"
									]
								},
								"3": {
									"slots": 3,
									"spells": [
										"{@spell animate dead}",
										"{@spell revivify}",
										"{@spell speak with dead}"
									]
								},
								"4": {
									"slots": 3,
									"spells": [
										"{@spell blight}",
										"{@spell death ward}"
									]
								},
								"5": {
									"slots": 2,
									"spells": [
										"{@spell contagion}",
										"{@spell raise dead}"
									]
								},
								"6": {
									"slots": 1,
									"spells": [
										"{@spell circle of death}"
									]
								}
							}
						}
					]
				},
				{
					"type": "variant",
					"name": "Nature Coven",
					"entries": [
						{
							"type": "spellcasting",
							"name": "Shared Spellcasting (Coven Only)",
							"headerEntries": [
								"For a nature coven, replace the spell list of the hags' Shared Spellcasting trait with the following spells:"
							],
							"spells": {
								"1": {
									"slots": 4,
									"spells": [
										"{@spell entangle}",
										"{@spell speak with animals}"
									]
								},
								"2": {
									"slots": 3,
									"spells": [
										"{@spell flaming sphere}",
										"{@spell moonbeam}",
										"{@spell spike growth}"
									]
								},
								"3": {
									"slots": 3,
									"spells": [
										"{@spell call lightning}",
										"{@spell plant growth}"
									]
								},
								"4": {
									"slots": 3,
									"spells": [
										"{@spell dominate beast}",
										"{@spell grasping vine}"
									]
								},
								"5": {
									"slots": 2,
									"spells": [
										"{@spell insect plague}",
										"{@spell tree stride}"
									]
								},
								"6": {
									"slots": 1,
									"spells": [
										"{@spell wall of thorns}"
									]
								}
							}
						}
					]
				},
				{
					"type": "variant",
					"name": "Prophecy Coven",
					"entries": [
						{
							"type": "spellcasting",
							"name": "Shared Spellcasting (Coven Only)",
							"headerEntries": [
								"For a prophecy coven, replace the spell list of the hags' Shared Spellcasting trait with the following spells:"
							],
							"spells": {
								"1": {
									"slots": 4,
									"spells": [
										"{@spell bane}",
										"{@spell bless}"
									]
								},
								"2": {
									"slots": 3,
									"spells": [
										"{@spell augury}",
										"{@spell detect thoughts}"
									]
								},
								"3": {
									"slots": 3,
									"spells": [
										"{@spell clairvoyance}",
										"{@spell dispel magic}",
										"{@spell nondetection}"
									]
								},
								"4": {
									"slots": 3,
									"spells": [
										"{@spell arcane eye}",
										"{@spell locate creature}"
									]
								},
								"5": {
									"slots": 2,
									"spells": [
										"{@spell geas}",
										"{@spell legend lore}"
									]
								},
								"6": {
									"slots": 1,
									"spells": [
										"{@spell true seeing}"
									]
								}
							}
						}
					]
				}
			],
			"environment": [
				"arctic"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/bheur-hag.mp3"
			},
			"senseTags": [
				"D"
			],
			"languageTags": [
				"AU",
				"C",
				"GI"
			],
			"damageTags": [
				"B",
				"C"
			],
			"spellcastingTags": [
				"CW",
				"I",
				"S"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"frightened",
				"incapacitated"
			],
			"conditionInflictSpell": [
				"blinded",
				"charmed",
				"frightened",
				"paralyzed",
				"poisoned",
				"restrained",
				"stunned",
				"unconscious"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Black Guard Drake",
			"source": "VGM",
			"page": 158,
			"size": "M",
			"type": "dragon",
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
				"average": 52,
				"formula": "7d8 + 21"
			},
			"speed": {
				"walk": 30,
				"swim": 30
			},
			"str": 16,
			"dex": 11,
			"con": 16,
			"int": 4,
			"wis": 10,
			"cha": 7,
			"skill": {
				"perception": "+2"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 12,
			"resist": [
				"acid"
			],
			"languages": [
				"understands Draconic but can't speak it"
			],
			"cr": "2",
			"trait": [
				{
					"name": "Amphibious",
					"entries": [
						"The guard drake can breathe air and water."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The drake attacks twice, once with its bite and once with its tail."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 5} to hit, reach 5 ft., one target. {@h}7 ({@damage 1d8 + 3}) piercing damage."
					]
				},
				{
					"name": "Tail",
					"entries": [
						"{@atk mw} {@hit 5} to hit, reach 5 ft., one target. {@h}6 ({@damage 1d6 + 3}) bludgeoning damage."
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
				"path": "bestiary/guard-drake.mp3"
			},
			"traitTags": [
				"Amphibious"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"CS",
				"DR"
			],
			"damageTags": [
				"B",
				"P"
			],
			"miscTags": [
				"MW"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Blackguard",
			"source": "VGM",
			"page": 211,
			"otherSources": [
				{
					"source": "DC"
				},
				{
					"source": "DIP"
				},
				{
					"source": "SDW"
				},
				{
					"source": "MOT"
				}
			],
			"size": "M",
			"type": {
				"type": "humanoid",
				"tags": [
					"any race"
				]
			},
			"alignment": [
				"L",
				"NX",
				"C",
				"NY",
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
				"average": 153,
				"formula": "18d8 + 72"
			},
			"speed": {
				"walk": 30
			},
			"str": 18,
			"dex": 11,
			"con": 18,
			"int": 11,
			"wis": 14,
			"cha": 15,
			"save": {
				"wis": "+5",
				"cha": "+5"
			},
			"skill": {
				"athletics": "+7",
				"deception": "+5",
				"intimidation": "+5"
			},
			"passive": 12,
			"languages": [
				"any one language (usually Common)"
			],
			"cr": "8",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The blackguard is a 10th-level spellcaster. Its spellcasting ability is Charisma (spell save {@dc 13}, {@hit 5} to hit with spell attacks). It has the following paladin spells prepared:"
					],
					"spells": {
						"1": {
							"slots": 4,
							"spells": [
								"{@spell command}",
								"{@spell protection from evil and good}",
								"{@spell thunderous smite}"
							]
						},
						"2": {
							"slots": 3,
							"spells": [
								"{@spell branding smite}",
								"{@spell find steed}"
							]
						},
						"3": {
							"slots": 2,
							"spells": [
								"{@spell blinding smite}",
								"{@spell dispel magic}"
							]
						}
					},
					"ability": "cha"
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The blackguard makes three attacks with its glaive or its shortbow."
					]
				},
				{
					"name": "Glaive",
					"entries": [
						"{@atk mw} {@hit 7} to hit, reach 10 ft., one target. {@h}9 ({@damage 1d10 + 4}) slashing damage."
					]
				},
				{
					"name": "Shortbow",
					"entries": [
						"{@atk rw} {@hit 3} to hit, range 80/320 ft., one target. {@h}5 ({@damage 1d6 + 2}) piercing damage."
					]
				},
				{
					"name": "Dreadful Aspect (Recharges after a Short or Long Rest)",
					"entries": [
						"The blackguard exudes magical menace. Each enemy within 30 feet of the blackguard must succeed on a {@dc 13} Wisdom saving throw or be {@condition frightened} for 1 minute. If a {@condition frightened} target ends its turn more than 30 feet away from the blackguard, the target can repeat the saving throw, ending the effect on itself on a success."
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
				"path": "bestiary/blackguard.mp3"
			},
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C",
				"X"
			],
			"damageTags": [
				"P",
				"S"
			],
			"spellcastingTags": [
				"CP"
			],
			"miscTags": [
				"MW",
				"RCH",
				"RNG",
				"RW"
			],
			"conditionInflict": [
				"frightened"
			],
			"conditionInflictSpell": [
				"blinded",
				"prone"
			],
			"hasFluff": true
		},
		{
			"name": "Blue Guard Drake",
			"source": "VGM",
			"page": 158,
			"size": "M",
			"type": "dragon",
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
				"average": 52,
				"formula": "7d8 + 21"
			},
			"speed": {
				"walk": 30,
				"burrow": 20
			},
			"str": 16,
			"dex": 11,
			"con": 16,
			"int": 4,
			"wis": 10,
			"cha": 7,
			"skill": {
				"perception": "+2"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 12,
			"resist": [
				"lightning"
			],
			"languages": [
				"understands Draconic but can't speak it"
			],
			"cr": "2",
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The drake attacks twice, once with its bite and once with its tail."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 5} to hit, reach 5 ft., one target. {@h}7 ({@damage 1d8 + 3}) piercing damage."
					]
				},
				{
					"name": "Tail",
					"entries": [
						"{@atk mw} {@hit 5} to hit, reach 5 ft., one target. {@h}6 ({@damage 1d6 + 3}) bludgeoning damage."
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
				"path": "bestiary/guard-drake.mp3"
			},
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"CS",
				"DR"
			],
			"damageTags": [
				"B",
				"P"
			],
			"miscTags": [
				"MW"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Bodak",
			"source": "VGM",
			"page": 127,
			"otherSources": [
				{
					"source": "ToA"
				},
				{
					"source": "GoS"
				}
			],
			"size": "M",
			"type": "undead",
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
				"average": 58,
				"formula": "9d8 + 18"
			},
			"speed": {
				"walk": 30
			},
			"str": 15,
			"dex": 16,
			"con": 15,
			"int": 7,
			"wis": 12,
			"cha": 12,
			"skill": {
				"perception": "+4",
				"stealth": "+6"
			},
			"senses": [
				"darkvision 120 ft."
			],
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
			"immune": [
				"lightning",
				"poison"
			],
			"conditionImmune": [
				"charmed",
				"frightened",
				"poisoned"
			],
			"languages": [
				"Abyssal",
				"the languages it knew in life"
			],
			"cr": "6",
			"trait": [
				{
					"name": "Aura of Annihilation",
					"entries": [
						"The bodak can activate or deactivate this feature as a bonus action. While active, the aura deals 5 necrotic damage to any creature that ends its turn within 30 feet of the bodak. Undead and fiends ignore this effect."
					]
				},
				{
					"name": "Death Gaze",
					"entries": [
						"When a creature that can see the bodak's eyes starts its turn within 30 feet of the bodak, the bodak can force it to make a {@dc 13} Constitution saving throw if the bodak isn't {@condition incapacitated} and can see the creature. If the saving throw fails by 5 or more, the creature is reduced to 0 hit points, unless it is immune to the {@condition frightened} condition. Otherwise, a creature takes 16 ({@damage 3d10}) psychic damage on a failed save.",
						"Unless surprised, a creature can avert its eyes to avoid the saving throw at the start of its turn. If the creature does so, it has disadvantage on attack rolls against the bodak until the start of its next turn. If the creature looks at the bodak in the meantime, it must immediately make the saving throw."
					]
				},
				{
					"name": "Sunlight Hypersensitivity",
					"entries": [
						"The bodak takes 5 radiant damage when it starts its turn in sunlight. While in sunlight, it has disadvantage on attack rolls and ability checks."
					]
				}
			],
			"action": [
				{
					"name": "Fist",
					"entries": [
						"{@atk mw} {@hit 5} to hit, reach 5 ft., one target. {@h}4 ({@damage 1d4 + 2}) bludgeoning damage plus 9 ({@damage 2d8}) necrotic damage."
					]
				},
				{
					"name": "Withering Gaze",
					"entries": [
						"One creature that the bodak can see within 60 feet of it must make a {@dc 13} Constitution saving throw, taking 22 ({@damage 4d10}) necrotic damage on a failed save, or half as much damage on a successful one."
					]
				}
			],
			"environment": [
				"underdark",
				"swamp",
				"urban"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/bodak.mp3"
			},
			"traitTags": [
				"Sunlight Sensitivity"
			],
			"senseTags": [
				"SD"
			],
			"languageTags": [
				"AB",
				"LF"
			],
			"damageTags": [
				"B",
				"N",
				"R",
				"Y"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"frightened"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Boggle",
			"source": "VGM",
			"page": 128,
			"otherSources": [
				{
					"source": "IMR"
				}
			],
			"size": "S",
			"type": "fey",
			"alignment": [
				"C",
				"N"
			],
			"ac": [
				14
			],
			"hp": {
				"average": 18,
				"formula": "4d6 + 4"
			},
			"speed": {
				"walk": 30,
				"climb": 30
			},
			"str": 8,
			"dex": 18,
			"con": 13,
			"int": 6,
			"wis": 12,
			"cha": 7,
			"skill": {
				"perception": "+3",
				"sleight of hand": "+6",
				"stealth": "+6"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 13,
			"resist": [
				"fire"
			],
			"languages": [
				"Sylvan"
			],
			"cr": "1/8",
			"trait": [
				{
					"name": "Boggle Oil",
					"entries": [
						"The boggle excretes nonflammable oil from its pores. The boggle chooses whether the oil is slippery or sticky and can change the oil on its skin from one consistency to another as a bonus action.",
						"Slippery Oil: While coated in slippery oil, the boggle gains advantage on Dexterity (Acrobatics) checks made to escape bonds, squeeze through narrow spaces, and end grapples.",
						"Sticky Oil: While coated in sticky oil, the boggle gains advantage on Strength (Athletics) checks made to grapple and any ability check made to maintain a hold on another creature, a surface, or an object. The boggle can also climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
					]
				},
				{
					"name": "Dimensional Rift",
					"entries": [
						"As a bonus action, the boggle can create an {@condition invisible} and immobile rift within an opening or frame it can see within 5 feet of it, provided that the space is no bigger than 10 feet on any side. The dimensional rift bridges the distance between that space and any point within 30 feet of it that the boggle can see or specify by distance and direction (such as \"30 feet straight up\"). While next to the rift, the boggle can see through it and is considered to be next to the destination as well, and anything the boggle puts through the rift (including a portion of its body) emerges at the destination. Only the boggle can use the rift, and it lasts until the end of the boggle's next turn."
					]
				},
				{
					"name": "Uncanny Smell",
					"entries": [
						"The boggle has advantage on Wisdom ({@skill Perception}) checks that rely on smell."
					]
				}
			],
			"action": [
				{
					"name": "Pummel",
					"entries": [
						"{@atk mw} {@hit 1} to hit, reach 5 ft., one target. {@h}2 ({@damage 1d6 - 1}) bludgeoning damage."
					]
				},
				{
					"name": "Oil Puddle",
					"entries": [
						"The boggle creates a puddle of oil that is either slippery or sticky (boggle's choice). The puddle is 1 inch deep and covers the ground in the boggle's space. The puddle is difficult terrain For all creatures except boggles and lasts for 1 hour.",
						"If the oil is slippery, any creature that enters the puddle's area or starts its turn there must succeed on a {@dc 11} Dexterity saving throw or fall {@condition prone}.",
						"If the oil is sticky, any creature that enters the puddle's area or starts its turn there must succeed on a {@dc 11} Strength saving throw or be {@condition restrained}. On its turn. a creature can use an action to try to extricate itself from the sticky puddle, ending the effect and moving into the nearest safe unoccupied space with a successful {@dc 11} Strength check."
					]
				}
			],
			"environment": [
				"underdark",
				"forest",
				"hill",
				"urban"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/boggle.mp3"
			},
			"senseTags": [
				"D"
			],
			"languageTags": [
				"S"
			],
			"damageTags": [
				"B"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"prone",
				"restrained"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Booyahg Booyahg Booyahg",
			"shortName": "Goblin",
			"source": "VGM",
			"page": 43,
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
			},
			"hasFluff": true
		},
		{
			"name": "Booyahg Caster",
			"source": "VGM",
			"page": 42,
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
			],
			"spellcastingTags": [
				"CW"
			],
			"hasFluff": true
		},
		{
			"name": "Booyahg Slave of the Archfey",
			"shortName": "Goblin",
			"source": "VGM",
			"page": 42,
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
			},
			"hasFluff": true
		},
		{
			"name": "Booyahg Slave of the Fiend",
			"shortName": "Goblin",
			"source": "VGM",
			"page": 42,
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
			},
			"hasFluff": true
		},
		{
			"name": "Booyahg Slave of the Great Old One",
			"shortName": "Goblin",
			"source": "VGM",
			"page": 42,
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
			},
			"hasFluff": true
		},
		{
			"name": "Booyahg Whip",
			"source": "VGM",
			"page": 42,
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
			},
			"hasFluff": true
		},
		{
			"name": "Booyahg Wielder",
			"source": "VGM",
			"page": 42,
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
			},
			"hasFluff": true
		},
		{
			"name": "Brontosaurus",
			"group": "Dinosaurs",
			"source": "VGM",
			"page": 139,
			"otherSources": [
				{
					"source": "ToA"
				}
			],
			"size": "G",
			"type": "beast",
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
				"average": 121,
				"formula": "9d20 + 27"
			},
			"speed": {
				"walk": 30
			},
			"str": 21,
			"dex": 9,
			"con": 17,
			"int": 2,
			"wis": 10,
			"cha": 7,
			"save": {
				"con": "+6"
			},
			"passive": 10,
			"cr": "5",
			"action": [
				{
					"name": "Stomp",
					"entries": [
						"{@atk mw} {@hit 8} to hit, reach 20 ft., one target. {@h}27 ({@damage 5d8 + 5}) bludgeoning damage, and the target must succeed on a {@dc 14} Strength saving throw or be knocked {@condition prone}."
					]
				},
				{
					"name": "Tail",
					"entries": [
						"{@atk mw} {@hit 8} to hit, reach 20 ft., one target. {@h}32 ({@damage 6d8 + 5}) bludgeoning damage."
					]
				}
			],
			"environment": [
				"grassland",
				"forest"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/brontosaurus.mp3"
			},
			"damageTags": [
				"B"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"prone"
			],
			"hasFluff": true
		},
		{
			"name": "Catoblepas",
			"source": "VGM",
			"page": 129,
			"otherSources": [
				{
					"source": "MOT"
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
				"average": 84,
				"formula": "8d10 + 40"
			},
			"speed": {
				"walk": 30
			},
			"str": 19,
			"dex": 12,
			"con": 21,
			"int": 3,
			"wis": 14,
			"cha": 8,
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 12,
			"cr": "5",
			"trait": [
				{
					"name": "Keen Smell",
					"entries": [
						"The catoblepas has advantage on Wisdom ({@skill Perception}) checks that rely on smell."
					]
				},
				{
					"name": "Stench",
					"entries": [
						"Any creature other than a catoblepas that starts its turn within 10 feet of the catoblepas must succeed on a {@dc 16} Constitution saving throw or be {@condition poisoned} until the start of the creature's next turn. On a successful saving throw, the creature is immune to the stench of any catoblepas for 1 hour."
					]
				}
			],
			"action": [
				{
					"name": "Tail",
					"entries": [
						"{@atk mw} {@hit 7} to hit, reach 10 ft., one target. {@h}21 ({@damage 5d6 + 4}) bludgeoning damage, and the target must succeed on a {@dc 16} Constitution saving throw or be {@condition stunned} until the start of the catoblepas's next turn."
					]
				},
				{
					"name": "Death Ray {@recharge 5}",
					"entries": [
						"The catoblepas targets a creature that it can see within 30 feet of it. The target must make a {@dc 16} Constitution saving throw, taking 36 ({@damage 8d8}) necrotic damage on a failed save, or half as much damage on a successful one. If the saving throw fails by 5 or more, the target instead takes 64 necrotic damage. The target dies if reduced to 0 hit points by this ray."
					]
				}
			],
			"environment": [
				"swamp"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/catoblepas.mp3"
			},
			"traitTags": [
				"Keen Senses"
			],
			"senseTags": [
				"D"
			],
			"damageTags": [
				"B",
				"N"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"poisoned",
				"stunned"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Cave Fisher",
			"source": "VGM",
			"page": 130,
			"size": "M",
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
				"average": 58,
				"formula": "9d8 + 18"
			},
			"speed": {
				"walk": 20,
				"climb": 20
			},
			"str": 16,
			"dex": 13,
			"con": 14,
			"int": 3,
			"wis": 10,
			"cha": 3,
			"skill": {
				"perception": "+2",
				"stealth": "+5"
			},
			"senses": [
				"blindsight 60 ft."
			],
			"passive": 12,
			"cr": "3",
			"trait": [
				{
					"name": "Adhesive Filament",
					"entries": [
						"The cave fisher can use its action to extend a sticky filament up to 60 feet, and the filament adheres to anything that touches it. A creature adhered to the filament is {@condition grappled} by the cave fisher (escape {@dc 13}), and ability checks made to escape this grapple have disadvantage. The filament can be attacked (AC 15; 5 hit points; immunity to poison and psychic damage), but a weapon that fails to sever it becomes stuck to it, requiring an action and a successful {@dc 13} Strength check to pull free. Destroying the filament causes no damage to the cave fisher, which can extrude a replacement filament on its next turn"
					]
				},
				{
					"name": "Flammable Blood",
					"entries": [
						"If the cave fisher drops to half its hit points or fewer, it gains vulnerability to fire damage."
					]
				},
				{
					"name": "Spider Climb",
					"entries": [
						"The cave fisher can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The cave fisher makes two attacks with its claws."
					]
				},
				{
					"name": "Claw",
					"entries": [
						"{@atk mw} {@hit 5} to hit, reach 5 ft., one target. {@h}10 ({@damage 2d6 + 3}) slashing damage."
					]
				},
				{
					"name": "Filament",
					"entries": [
						"One creature {@condition grappled} by the cave fisher's adhesive filament must make a {@dc 13} Strength saving throw, provided that the target weighs 200 pounds or less. On a failure, the target is pulled into an unoccupied space within 5 feet of the cave fisher, and the cave fisher makes a claw attack against it as a bonus action. Reeling up the target releases anyone else who was attached to the filament. Until the grapple ends on the target, the cave fisher can't extrude another filament."
					]
				}
			],
			"environment": [
				"underdark"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/cave-fisher.mp3"
			},
			"traitTags": [
				"Spider Climb"
			],
			"senseTags": [
				"B"
			],
			"actionTags": [
				"Multiattack"
			],
			"damageTags": [
				"S"
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
			"name": "Champion",
			"source": "VGM",
			"page": 212,
			"otherSources": [
				{
					"source": "WDMM"
				},
				{
					"source": "TftYP"
				},
				{
					"source": "ToA"
				}
			],
			"size": "M",
			"type": {
				"type": "humanoid",
				"tags": [
					"any race"
				]
			},
			"alignment": [
				"A"
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
				"average": 143,
				"formula": "22d8 + 44"
			},
			"speed": {
				"walk": 30
			},
			"str": 20,
			"dex": 15,
			"con": 14,
			"int": 10,
			"wis": 14,
			"cha": 12,
			"save": {
				"str": "+9",
				"con": "+6"
			},
			"skill": {
				"athletics": "+9",
				"intimidation": "+5",
				"perception": "+6"
			},
			"passive": 16,
			"languages": [
				"any one language (usually Common)"
			],
			"cr": "9",
			"trait": [
				{
					"name": "Indomitable (2/Day)",
					"entries": [
						"The champion rerolls a failed saving throw."
					]
				},
				{
					"name": "Second Wind (Recharges after a Short or Long Rest)",
					"entries": [
						"As a bonus action, the champion can regain 20 hit points."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The champion makes three attacks with its greatsword or its shortbow."
					]
				},
				{
					"name": "Greatsword",
					"entries": [
						"{@atk mw} {@hit 9} to hit, reach 5 ft., one target. {@h}12 ({@damage 2d6 + 5}) slashing damage, plus 7 ({@damage 2d6}) slashing damage if the champion has more than half of its total hit points remaining."
					]
				},
				{
					"name": "Shortbow",
					"entries": [
						"{@atk rw} {@hit 6} to hit, range 80/320 ft., one target. {@h}5 ({@damage 1d6 + 2}) piercing damage, plus 7 ({@damage 2d6}) piercing damage if the champion has more than half of its total hit points remaining."
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
				"path": "bestiary/champion.mp3"
			},
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C",
				"X"
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
			"name": "Chitine",
			"source": "VGM",
			"page": 131,
			"size": "S",
			"type": "monstrosity",
			"alignment": [
				"C",
				"E"
			],
			"ac": [
				{
					"ac": 14,
					"from": [
						"{@item hide armor|phb}"
					]
				}
			],
			"hp": {
				"average": 18,
				"formula": "4d6 + 4"
			},
			"speed": {
				"walk": 30,
				"climb": 30
			},
			"str": 10,
			"dex": 14,
			"con": 12,
			"int": 10,
			"wis": 10,
			"cha": 7,
			"skill": {
				"athletics": "+4",
				"stealth": "+4"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 10,
			"languages": [
				"Undercommon"
			],
			"cr": "1/2",
			"trait": [
				{
					"name": "Fey Ancestry",
					"entries": [
						"The chitine has advantage on saving throws against being {@condition charmed}, and magic can't put the chitine to sleep."
					]
				},
				{
					"name": "Sunlight Sensitivity",
					"entries": [
						"While in sunlight, the chitine has disadvantage on attack rolls, as well as on Wisdom ({@skill Perception}) checks that rely on sight."
					]
				},
				{
					"name": "Web Sense",
					"entries": [
						"While in contact with a web, the chitine knows the exact location of any other creature in contact with the same web."
					]
				},
				{
					"name": "Web Walker",
					"entries": [
						"The chitine ignores movement restrictions caused by webbing."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The chitine makes three attacks with its daggers."
					]
				},
				{
					"name": "Dagger",
					"entries": [
						"{@atk mw,rw} {@hit 4} to hit, reach 5 ft. or range 20/60 ft., one target. {@h}4 ({@damage 1d4 + 2}) piercing damage."
					]
				}
			],
			"environment": [
				"underdark"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/chitine.mp3"
			},
			"traitTags": [
				"Fey Ancestry",
				"Sunlight Sensitivity",
				"Web Sense",
				"Web Walker"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
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
			"name": "Choldrith",
			"source": "VGM",
			"page": 132,
			"size": "M",
			"type": "monstrosity",
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
				"average": 66,
				"formula": "12d8 + 12"
			},
			"speed": {
				"walk": 30,
				"climb": 30
			},
			"str": 12,
			"dex": 16,
			"con": 12,
			"int": 11,
			"wis": 14,
			"cha": 10,
			"skill": {
				"athletics": "+5",
				"religion": "+2",
				"stealth": "+5"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 12,
			"languages": [
				"Undercommon"
			],
			"cr": "3",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The choldrith is a 4th-level spellcaster. Its spellcasting ability is Wisdom (spell save {@dc 12}, {@hit 4} to hit with spell attacks). The choldrith has the following cleric spells prepared:"
					],
					"spells": {
						"0": {
							"spells": [
								"{@spell guidance}",
								"{@spell mending}",
								"{@spell resistance}",
								"{@spell thaumaturgy}"
							]
						},
						"1": {
							"slots": 4,
							"spells": [
								"{@spell bane}",
								"{@spell healing word}",
								"{@spell sanctuary}",
								"{@spell shield of faith}"
							]
						},
						"2": {
							"slots": 3,
							"spells": [
								"{@spell hold person}",
								"{@spell spiritual weapon} (dagger)"
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
						"The choldrith has advantage on saving throws against being {@condition charmed}, and magic can't put the choldrith to sleep."
					]
				},
				{
					"name": "Spider Climb",
					"entries": [
						"The choldrith can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
					]
				},
				{
					"name": "Sunlight Sensitivity",
					"entries": [
						"While in sunlight, the choldrith has disadvantage on attack rolls, as well as on Wisdom ({@skill Perception}) checks that rely on sight."
					]
				},
				{
					"name": "Web Sense",
					"entries": [
						"While in contact with a web, the choldrith knows the exact location of any other creature in contact with the same web."
					]
				},
				{
					"name": "Web Walker",
					"entries": [
						"The choldrith ignores movement restrictions caused by webbing."
					]
				}
			],
			"action": [
				{
					"name": "Dagger",
					"entries": [
						"{@atk mw,rw} {@hit 5} to hit, reach 5 ft. or range 20/60 ft., one target. {@h}5 ({@damage 1d4 + 3}) piercing damage plus 10 ({@damage 3d6}) poison damage."
					]
				},
				{
					"name": "Web {@recharge 5}",
					"entries": [
						"{@atk rw} {@hit 5} to hit, range 30/60 ft., one Large or smaller creature. {@h}The target is {@condition restrained} by webbing. As an action, the {@condition restrained} target can make a {@dc 11} Strength check, bursting the webbing on a success. The webbing can also be attacked and destroyed (AC 10; 5 hit points; vulnerability to fire damage; immunity to bludgeoning, poison, and psychic damage)."
					]
				}
			],
			"environment": [
				"underdark"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/choldrith.mp3"
			},
			"traitTags": [
				"Fey Ancestry",
				"Spider Climb",
				"Sunlight Sensitivity",
				"Web Sense",
				"Web Walker"
			],
			"senseTags": [
				"D"
			],
			"languageTags": [
				"U"
			],
			"damageTags": [
				"I",
				"P"
			],
			"spellcastingTags": [
				"CC"
			],
			"miscTags": [
				"MW",
				"RW",
				"THW"
			],
			"conditionInflict": [
				"restrained"
			],
			"conditionInflictSpell": [
				"paralyzed"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Cloud Giant Smiling One",
			"source": "VGM",
			"page": 146,
			"size": "H",
			"type": {
				"type": "giant",
				"tags": [
					"cloud giant"
				]
			},
			"alignment": [
				"C",
				"N"
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
				"average": 262,
				"formula": "21d12 + 128"
			},
			"speed": {
				"walk": 40
			},
			"str": 26,
			"dex": 12,
			"con": 22,
			"int": 15,
			"wis": 16,
			"cha": 17,
			"save": {
				"con": "+10",
				"int": "+6",
				"wis": "+7"
			},
			"skill": {
				"deception": "+11",
				"insight": "+7",
				"perception": "+7",
				"sleight of hand": "+9"
			},
			"passive": 17,
			"languages": [
				"Common",
				"Giant"
			],
			"cr": "11",
			"spellcasting": [
				{
					"name": "Innate Spellcasting",
					"headerEntries": [
						"The giant's innate spellcasting ability is Charisma (spell save {@dc 15}). It can innately cast the following spells, requiring no material components:"
					],
					"will": [
						"{@spell detect magic}",
						"{@spell fog cloud}",
						"{@spell light}"
					],
					"daily": {
						"3e": [
							"{@spell feather fall}",
							"{@spell fly}",
							"{@spell misty step}",
							"{@spell telekinesis}"
						],
						"1e": [
							"{@spell control weather}",
							"{@spell gaseous form}"
						]
					},
					"ability": "cha"
				},
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The giant is a 5th-level spellcaster. Its spellcasting ability is Charisma (spell save {@dc 15}, {@hit 7} to hit with spell attacks). The giant has the following bard spells prepared:"
					],
					"spells": {
						"0": {
							"spells": [
								"{@spell minor illusion}",
								"{@spell prestidigitation}",
								"{@spell vicious mockery}"
							]
						},
						"1": {
							"slots": 4,
							"spells": [
								"{@spell cure wounds}",
								"{@spell disguise self}",
								"{@spell silent image}",
								"{@spell Tasha's hideous laughter}"
							]
						},
						"2": {
							"slots": 3,
							"spells": [
								"{@spell invisibility}",
								"{@spell suggestion}"
							]
						},
						"3": {
							"slots": 2,
							"spells": [
								"{@spell major image}",
								"{@spell tongues}"
							]
						}
					},
					"ability": "cha"
				}
			],
			"trait": [
				{
					"name": "Keen Smell",
					"entries": [
						"The giant has advantage on Wisdom ({@skill Perception}) checks that rely on smell."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The giant makes two attacks with its morningstar."
					]
				},
				{
					"name": "Morningstar",
					"entries": [
						"{@atk mw} {@hit 12} to hit, reach 10 ft., one target. {@h}21 ({@damage 3d8 + 8}) bludgeoning damage. The attack deals an extra 14 ({@dice 4d6}) damage if the giant has advantage on the attack roll."
					]
				},
				{
					"name": "Rock",
					"entries": [
						"{@atk rw} {@hit 12} to hit, range 60/240 ft., one target. {@h}30 ({@damage 4d10 + 8}) bludgeoning damage. The attack deals an extra 14 ({@dice 4d6}) damage if the giant has advantage on the attack roll."
					]
				},
				{
					"name": "Change Shape",
					"entries": [
						"The giant magically polymorphs into a beast or humanoid it has seen, or back into its true form. Any equipment the giant is wearing or carrying is absorbed by the new form. Its statistics, other than its size, are the same in each form. It reverts to its true form if it dies."
					]
				}
			],
			"environment": [
				"mountain"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/cloud-giant-smiling-one.mp3"
			},
			"traitTags": [
				"Keen Senses"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C",
				"GI"
			],
			"damageTags": [
				"B"
			],
			"spellcastingTags": [
				"CB",
				"I"
			],
			"miscTags": [
				"MW",
				"RCH",
				"RW"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Conjurer",
			"source": "VGM",
			"page": 212,
			"otherSources": [
				{
					"source": "TftYP"
				}
			],
			"size": "M",
			"type": {
				"type": "humanoid",
				"tags": [
					"any race"
				]
			},
			"alignment": [
				"A"
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
				"average": 40,
				"formula": "9d8"
			},
			"speed": {
				"walk": 30
			},
			"str": 9,
			"dex": 14,
			"con": 11,
			"int": 17,
			"wis": 12,
			"cha": 11,
			"save": {
				"int": "+6",
				"wis": "+4"
			},
			"skill": {
				"arcana": "+6",
				"history": "+6"
			},
			"passive": 11,
			"languages": [
				"any four languages"
			],
			"cr": "6",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The conjurer is a 9th-level spellcaster. Its spellcasting ability is intelligence (spell save {@dc 14}, {@hit 6} to hit with spell attacks). The conjurer has the following wizard spells prepared:"
					],
					"spells": {
						"0": {
							"spells": [
								"{@spell acid splash}",
								"{@spell mage hand}",
								"{@spell poison spray}",
								"{@spell prestidigitation}"
							]
						},
						"1": {
							"slots": 4,
							"spells": [
								"{@spell mage armor}",
								"{@spell magic missile}",
								"{@spell unseen servant}*"
							]
						},
						"2": {
							"slots": 3,
							"spells": [
								"{@spell cloud of daggers}*",
								"{@spell misty step}*",
								"{@spell web}*"
							]
						},
						"3": {
							"slots": 3,
							"spells": [
								"{@spell fireball}",
								"{@spell stinking cloud}*"
							]
						},
						"4": {
							"slots": 3,
							"spells": [
								"{@spell Evard's black tentacles}*",
								"{@spell stoneskin}"
							]
						},
						"5": {
							"slots": 2,
							"spells": [
								"{@spell cloudkill}*",
								"{@spell conjure elemental}*"
							]
						}
					},
					"footerEntries": [
						"*Conjuration spell of 1st level or higher"
					],
					"ability": "int"
				}
			],
			"trait": [
				{
					"name": "Benign Transportation (Recharges after the Conjurer Casts a Conjuration Spell of 1st Level or Higher)",
					"entries": [
						"As a bonus action, the conjurer teleports up to 30 feet to an unoccupied space that it can see. If it instead chooses a space within range that is occupied by a willing Small or Medium creature, they both teleport, swapping places."
					]
				}
			],
			"action": [
				{
					"name": "Dagger",
					"entries": [
						"{@atk mw,rw} {@hit 5} to hit, reach 5 ft. or range 20/60 ft., one target. {@h}4 ({@damage 1d4 + 2}) piercing damage."
					]
				}
			],
			"environment": [
				"urban"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/conjurer.mp3"
			},
			"languageTags": [
				"X"
			],
			"damageTags": [
				"P"
			],
			"spellcastingTags": [
				"CW"
			],
			"miscTags": [
				"MW",
				"RW",
				"THW"
			],
			"hasFluff": true
		},
		{
			"name": "Cow",
			"source": "VGM",
			"page": 207,
			"otherSources": [
				{
					"source": "DIP"
				}
			],
			"size": "L",
			"type": "beast",
			"alignment": [
				"U"
			],
			"ac": [
				10
			],
			"hp": {
				"average": 15,
				"formula": "2d10 + 4"
			},
			"speed": {
				"walk": 30
			},
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
					"name": "Charge",
					"entries": [
						"If the cow moves at least 20 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 7 ({@damage 2d6}) piercing damage."
					]
				}
			],
			"action": [
				{
					"name": "Gore",
					"entries": [
						"{@atk mw} {@hit 6} to hit, reach 5 ft., one target. {@h}7 ({@damage 1d6 + 4}) piercing damage."
					]
				}
			],
			"environment": [
				"grassland"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/cow.mp3"
			},
			"traitTags": [
				"Charge"
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
			"name": "Cranium Rat",
			"source": "VGM",
			"page": 133,
			"size": "T",
			"type": "beast",
			"alignment": [
				"L",
				"E"
			],
			"ac": [
				12
			],
			"hp": {
				"average": 2,
				"formula": "1d4"
			},
			"speed": {
				"walk": 30
			},
			"str": 2,
			"dex": 14,
			"con": 10,
			"int": 4,
			"wis": 11,
			"cha": 8,
			"senses": [
				"darkvision 30 ft."
			],
			"passive": 10,
			"languages": [
				"telepathy 30 ft."
			],
			"cr": "0",
			"trait": [
				{
					"name": "Illumination",
					"entries": [
						"As a bonus action, the cranium rat can shed dim light from its brain in a 5-foot radius or extinguish the light."
					]
				},
				{
					"name": "Telepathic Shroud",
					"entries": [
						"The cranium rat is immune to any effect that would sense its emotions or read its thoughts, as well as to all divination spells."
					]
				}
			],
			"action": [
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 4} to hit, reach 5 ft., one target. {@h}1 piercing damage."
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
				"path": "bestiary/cranium-rat.mp3"
			},
			"traitTags": [
				"Illumination"
			],
			"senseTags": [
				"D"
			],
			"languageTags": [
				"TP"
			],
			"damageTags": [
				"P"
			],
			"miscTags": [
				"AOE",
				"MW"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Darkling",
			"source": "VGM",
			"page": 134,
			"size": "S",
			"type": "fey",
			"alignment": [
				"C",
				"N"
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
				"average": 13,
				"formula": "3d6 + 3"
			},
			"speed": {
				"walk": 30
			},
			"str": 9,
			"dex": 16,
			"con": 12,
			"int": 10,
			"wis": 12,
			"cha": 10,
			"skill": {
				"acrobatics": "+5",
				"deception": "+2",
				"perception": "+5",
				"stealth": "+7"
			},
			"senses": [
				"blindsight 30 ft.",
				"darkvision 120 ft."
			],
			"passive": 15,
			"languages": [
				"Elvish",
				"Sylvan"
			],
			"cr": "1/2",
			"trait": [
				{
					"name": "Death Flash",
					"entries": [
						"When the darkling dies, nonmagical light flashes out from it in a 10-foot radius as its body and possessions, other than metal or magic objects, burn to ash. Any creature in that area and able to see the bright light must succeed on a {@dc 10} Constitution saving throw or be {@condition blinded} until the end of the creature's next turn."
					]
				},
				{
					"name": "Light Sensitivity",
					"entries": [
						"While in bright light, the darkling has disadvantage on attack rolls, as well as on Wisdom ({@skill Perception}) checks that rely on sight."
					]
				}
			],
			"action": [
				{
					"name": "Dagger",
					"entries": [
						"{@atk mw,rw} {@hit 5} to hit, reach 5 ft. or range 20/60 ft., one target. {@h}5 ({@damage 1d4 + 3}) piercing damage. If the darkling has advantage on the attack roll, the attack deals an extra 7 ({@damage 2d6}) piercing damage."
					]
				}
			],
			"environment": [
				"underdark",
				"forest",
				"swamp",
				"urban"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/darkling.mp3"
			},
			"traitTags": [
				"Light Sensitivity"
			],
			"senseTags": [
				"B",
				"SD"
			],
			"languageTags": [
				"E",
				"S"
			],
			"damageTags": [
				"P"
			],
			"miscTags": [
				"AOE",
				"MW",
				"RW",
				"THW"
			],
			"conditionInflict": [
				"blinded"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Darkling Elder",
			"source": "VGM",
			"page": 134,
			"size": "M",
			"type": "fey",
			"alignment": [
				"C",
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
				"average": 27,
				"formula": "5d8 + 5"
			},
			"speed": {
				"walk": 30
			},
			"str": 13,
			"dex": 17,
			"con": 12,
			"int": 10,
			"wis": 14,
			"cha": 13,
			"skill": {
				"acrobatics": "+5",
				"deception": "+3",
				"perception": "+6",
				"stealth": "+7"
			},
			"senses": [
				"blindsight 30 ft.",
				"darkvision 120 ft."
			],
			"passive": 16,
			"languages": [
				"Elvish",
				"Sylvan"
			],
			"cr": "2",
			"trait": [
				{
					"name": "Death Burn",
					"entries": [
						"When the darkling elder dies, magical light flashes out from it in a 10-foot radius as its body and possessions, other than metal or magic objects, burn to ash. Any creature in that area must make a {@dc 11} Constitution saving throw. On a failure, the creature takes 7 ({@damage 2d6}) radiant damage and, if the creature can see the light, is {@condition blinded} until the end of its next turn. If the saving throw is successful, the creature takes half the damage and isn't {@condition blinded}."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The darkling elder makes two melee attacks."
					]
				},
				{
					"name": "Shortsword",
					"entries": [
						"{@atk mw} {@hit 5} to hit, reach 5 ft., one target. {@h}6 ({@damage 1d6 + 3}) piercing damage. If the darkling elder had advantage on the attack roll, the attack deals as: extra 10 ({@damage 3d6}) piercing damage."
					]
				},
				{
					"name": "Darkness (Recharges after a Short or Long Rest)",
					"entries": [
						"The darkling elder casts {@spell darkness} without any components. Wisdom is its spellcasting ability."
					]
				}
			],
			"environment": [
				"underdark",
				"forest",
				"swamp",
				"urban"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/darkling-elder.mp3"
			},
			"senseTags": [
				"B",
				"SD"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"E",
				"S"
			],
			"damageTags": [
				"P",
				"R"
			],
			"miscTags": [
				"AOE",
				"MW"
			],
			"conditionInflict": [
				"blinded"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Death Kiss",
			"group": "Beholders",
			"source": "VGM",
			"page": 124,
			"size": "L",
			"type": "aberration",
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
				"average": 161,
				"formula": "17d10 + 68"
			},
			"speed": {
				"walk": 0,
				"fly": {
					"number": 30,
					"condition": "(hover)"
				},
				"canHover": true
			},
			"str": 18,
			"dex": 14,
			"con": 18,
			"int": 10,
			"wis": 12,
			"cha": 10,
			"save": {
				"con": "+8",
				"wis": "+5"
			},
			"skill": {
				"perception": "+5"
			},
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 15,
			"immune": [
				"lightning"
			],
			"conditionImmune": [
				"prone"
			],
			"languages": [
				"Deep Speech",
				"Undercommon"
			],
			"cr": "10",
			"trait": [
				{
					"name": "Lightning Blood",
					"entries": [
						"A creature within 5 feet of the death kiss takes 5 ({@damage 1d10}) lightning damage whenever it hits the death kiss with a melee attack that deals piercing or slashing damage."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The death kiss makes three tentacle attacks. Up to three of these attacks can be replaced by Blood Drain, one replacement per tentacle grappling a creature"
					]
				},
				{
					"name": "Tentacle",
					"entries": [
						"{@atk mw} {@hit 8} to hit, reach 20 ft., one target. {@h}14 ({@damage 3d6 + 4}) piercing damage, and the target is {@condition grappled} (escape {@dc 14}) if it is a Huge or smaller creature. Until this grapple ends, the target is {@condition restrained}, and the death kiss can't use the same tentacle on another target. The death kiss has ten tentacles."
					]
				},
				{
					"name": "Blood Drain",
					"entries": [
						"One creature {@condition grappled} by a tentacle of the death kiss must make a {@dc 16} Constitution saving throw. On a failed save, the target takes 22 ({@damage 4d10}) lightning damage, and the death kiss regains half as many hit points."
					]
				}
			],
			"environment": [
				"underdark"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/death-kiss.mp3"
			},
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Multiattack",
				"Tentacles"
			],
			"languageTags": [
				"DS",
				"U"
			],
			"damageTags": [
				"L",
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
			"name": "Deep Rothé",
			"source": "VGM",
			"page": 208,
			"size": "M",
			"type": "beast",
			"alignment": [
				"U"
			],
			"ac": [
				10
			],
			"hp": {
				"average": 13,
				"formula": "2d8 + 4"
			},
			"speed": {
				"walk": 30
			},
			"str": 18,
			"dex": 10,
			"con": 14,
			"int": 2,
			"wis": 10,
			"cha": 4,
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 10,
			"cr": "1/4",
			"spellcasting": [
				{
					"name": "Innate Spellcasting",
					"headerEntries": [
						"The deep rothé's spellcasting ability is Charisma. It can innately cast {@spell dancing lights} at will, requiring no components."
					],
					"will": [
						"{@spell dancing lights}"
					],
					"hidden": [
						"will"
					],
					"ability": "cha"
				}
			],
			"trait": [
				{
					"name": "Charge",
					"entries": [
						"If the rothé moves at least 20 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 7 ({@damage 2d6}) piercing damage."
					]
				}
			],
			"action": [
				{
					"name": "Gore",
					"entries": [
						"{@atk mw} {@hit 6} to hit, reach 5 ft., one target. {@h}7 ({@damage 1d6 + 4}) piercing damage."
					]
				}
			],
			"environment": [
				"underdark"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/rothe.mp3"
			},
			"traitTags": [
				"Charge"
			],
			"senseTags": [
				"D"
			],
			"damageTags": [
				"P"
			],
			"spellcastingTags": [
				"I"
			],
			"miscTags": [
				"MW"
			],
			"hasFluff": true
		},
		{
			"name": "Deep Scion",
			"source": "VGM",
			"page": 135,
			"otherSources": [
				{
					"source": "GoS"
				}
			],
			"size": "M",
			"type": {
				"type": "humanoid",
				"tags": [
					"shapechanger"
				]
			},
			"alignment": [
				"N",
				"E"
			],
			"ac": [
				11
			],
			"hp": {
				"average": 67,
				"formula": "9d8 + 27"
			},
			"speed": {
				"walk": {
					"number": 30,
					"condition": "(20 ft. and swim 40 ft. in hybrid form)"
				}
			},
			"str": 18,
			"dex": 13,
			"con": 16,
			"int": 10,
			"wis": 12,
			"cha": 14,
			"save": {
				"wis": "+3",
				"cha": "+4"
			},
			"skill": {
				"deception": "+6",
				"insight": "+3",
				"sleight of hand": "+3",
				"stealth": "+3"
			},
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 11,
			"languages": [
				"Aquan",
				"Common",
				"Thieves' cant"
			],
			"cr": "3",
			"trait": [
				{
					"name": "Shapechanger",
					"entries": [
						"The deep scion can use its action to polymorph into a humanoid-piscine hybrid form, or back into its true form. Its statistics, other than its speed, are the same in each form. Any equipment it is wearing or carrying isn't transformed. The deep scion reverts to its true form if it dies."
					]
				},
				{
					"name": "Amphibious (Hybrid Form Only)",
					"entries": [
						"The deep scion can breathe air and water."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"In humanoid form, the deep scion makes two melee attacks. In hybrid form, the deep scion makes three attacks: one with its bite and two with its claws."
					]
				},
				{
					"name": "Battleaxe (Humanoid Form Only)",
					"entries": [
						"{@atk mw} {@hit 6} to hit, reach 5 ft., one target. {@h}8 ({@damage 1d8 + 4}) slashing damage, or 9 ({@damage 1d10 + 4}) slashing damage if used with two hands."
					]
				},
				{
					"name": "Bite (Hybrid Form Only)",
					"entries": [
						"{@atk mw} {@hit 6} to hit, reach 5 ft., one creature. {@h}6 ({@damage 1d4 + 4}) piercing damage."
					]
				},
				{
					"name": "Claw (Hybrid Form Only)",
					"entries": [
						"{@atk mw} {@hit 6} to hit, reach 5 ft., one target. {@h}7 ({@damage 1d6 + 4}) slashing damage."
					]
				},
				{
					"name": "Psychic Screech (Hybrid Form Only; Recharges after a Short or Long Rest)",
					"entries": [
						"The deep scion emits a terrible scream audible within 300 feet. Creatures within 30 feet of the deep scion must succeed on a {@dc 13} Wisdom saving throw or be {@condition stunned} until the end of the deep scion's next turn. In water, the psychic screech also telepathically transmits the deep scion's memories of the last 24 hours to its master, regardless of distance, so long as it and its master are in the same body of water."
					]
				}
			],
			"environment": [
				"underwater",
				"coastal"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/deep-scion.mp3"
			},
			"traitTags": [
				"Amphibious",
				"Shapechanger"
			],
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"AQ",
				"C",
				"TC"
			],
			"damageTags": [
				"P",
				"S"
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
			"name": "Deinonychus",
			"group": "Dinosaurs",
			"source": "VGM",
			"page": 139,
			"otherSources": [
				{
					"source": "ToA"
				}
			],
			"size": "M",
			"type": "beast",
			"alignment": [
				"U"
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
				"average": 26,
				"formula": "4d8 + 8"
			},
			"speed": {
				"walk": 40
			},
			"str": 15,
			"dex": 15,
			"con": 14,
			"int": 4,
			"wis": 12,
			"cha": 6,
			"skill": {
				"perception": "+3"
			},
			"passive": 13,
			"cr": "1",
			"trait": [
				{
					"name": "Pounce",
					"entries": [
						"If the deinonychus moves at least 20 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a {@dc 12} Strength saving throw or be knocked {@condition prone}. If the target is {@condition prone}, the deinonychus can make one bite attack against it as a bonus action."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The deinonychus makes three attacks: one with its bite and two with its claws."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 4} to hit, reach 5 ft., one target. {@h}6 ({@damage 1d8 + 2}) piercing damage."
					]
				},
				{
					"name": "Claw",
					"entries": [
						"{@atk mw} {@hit 4} to hit, reach 5 ft., one target. {@h}6 ({@damage 1d8 + 2}) slashing damage."
					]
				}
			],
			"environment": [
				"grassland",
				"forest",
				"hill"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/deinonychus.mp3"
			},
			"traitTags": [
				"Pounce"
			],
			"actionTags": [
				"Multiattack"
			],
			"damageTags": [
				"P",
				"S"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"prone"
			],
			"hasFluff": true
		},
		{
			"name": "Devourer",
			"source": "VGM",
			"page": 138,
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
				"average": 178,
				"formula": "17d10 + 85"
			},
			"speed": {
				"walk": 30
			},
			"str": 20,
			"dex": 12,
			"con": 20,
			"int": 13,
			"wis": 10,
			"cha": 16,
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 10,
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
			"cr": "13",
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The devourer makes two claw attacks and can use either Imprison Soul or Soul Rend."
					]
				},
				{
					"name": "Claw",
					"entries": [
						"{@atk mw} {@hit 10} to hit, reach 5 ft., one target. {@h}12 ({@damage 2d6 + 5}) slashing damage plus 21 ({@damage 6d6}) necrotic damage."
					]
				},
				{
					"name": "Imprison Soul",
					"entries": [
						"The devourer chooses a living humanoid with 0 hit points that it can see within 30 feet of it. That creature is teleported inside the devourer's ribcage and imprisoned there. A creature imprisoned in this manner has disadvantage on death saving throws. If it dies while imprisoned, the devourer regains 25 hit points, immediately recharges Soul Rend, and gains an additional action on its next turn. Additionally, at the start of its next turn, the devourer regurgitates the slain creature as a bonus action, and the creature becomes an undead. If the victim had 2 or fewer Hit Dice, it becomes a zombie. if it had 3 to 5 Hit Dice, it becomes a ghoul. Otherwise, it becomes a wight. A devourer can imprison only one creature at a time."
					]
				},
				{
					"name": "Soul Rend {@recharge}",
					"entries": [
						"The devourer creates a vortex of life-draining energy in a 20-foot radius centered on itself. Each humanoid in that area must make a {@dc 18} Constitution saving throw, taking 44 ({@damage 8d10}) necrotic damage on a failed save, or half as much damage on a successful one. Increase the damage by 10 for each living humanoid with 0 hit points in that area."
					]
				}
			],
			"environment": [
				"underdark"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/devourer.mp3"
			},
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
				"N",
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
			"name": "Dimetrodon",
			"group": "Dinosaurs",
			"source": "VGM",
			"page": 139,
			"otherSources": [
				{
					"source": "ToA"
				}
			],
			"size": "M",
			"type": "beast",
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
				"average": 19,
				"formula": "3d8 + 6"
			},
			"speed": {
				"walk": 30,
				"swim": 20
			},
			"str": 14,
			"dex": 10,
			"con": 15,
			"int": 2,
			"wis": 10,
			"cha": 5,
			"skill": {
				"perception": "+2"
			},
			"passive": 12,
			"cr": "1/4",
			"action": [
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 4} to hit, reach 5 ft., one target. {@h}9 ({@damage 2d6 + 2}) piercing damage."
					]
				}
			],
			"environment": [
				"swamp",
				"coastal"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/dimetrodon.mp3"
			},
			"damageTags": [
				"P"
			],
			"miscTags": [
				"MW"
			],
			"hasFluff": true
		},
		{
			"name": "Diviner",
			"source": "VGM",
			"page": 213,
			"size": "M",
			"type": {
				"type": "humanoid",
				"tags": [
					"any race"
				]
			},
			"alignment": [
				"A"
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
				"average": 67,
				"formula": "15d8"
			},
			"speed": {
				"walk": 30
			},
			"str": 9,
			"dex": 14,
			"con": 11,
			"int": 18,
			"wis": 12,
			"cha": 11,
			"save": {
				"int": "+7",
				"wis": "+4"
			},
			"skill": {
				"arcana": "+7",
				"history": "+7"
			},
			"passive": 11,
			"languages": [
				"any four languages"
			],
			"cr": "8",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The diviner is a 15th-level spellcaster. Its spellcasting ability is Intelligence (spell save {@dc 15}, {@hit 7} to hit with spell attacks). The diviner has the following wizard spells prepared:"
					],
					"spells": {
						"0": {
							"spells": [
								"{@spell fire bolt}",
								"{@spell light}",
								"{@spell mage hand}",
								"{@spell message}",
								"{@spell true strike}"
							]
						},
						"1": {
							"slots": 4,
							"spells": [
								"{@spell detect magic}*",
								"{@spell feather fall}",
								"{@spell mage armor}"
							]
						},
						"2": {
							"slots": 3,
							"spells": [
								"{@spell detect thoughts}*",
								"{@spell locate object}*",
								"{@spell scorching ray}"
							]
						},
						"3": {
							"slots": 3,
							"spells": [
								"{@spell clairvoyance}*",
								"{@spell fly}",
								"{@spell fireball}"
							]
						},
						"4": {
							"slots": 3,
							"spells": [
								"{@spell arcane eye}*",
								"{@spell ice storm}",
								"{@spell stoneskin}"
							]
						},
						"5": {
							"slots": 2,
							"spells": [
								"{@spell Rary's telepathic bond}*",
								"{@spell seeming}"
							]
						},
						"6": {
							"slots": 1,
							"spells": [
								"{@spell mass suggestion}",
								"{@spell true seeing}*"
							]
						},
						"7": {
							"slots": 1,
							"spells": [
								"{@spell delayed blast fireball}",
								"{@spell teleport}"
							]
						},
						"8": {
							"slots": 1,
							"spells": [
								"{@spell maze}"
							]
						}
					},
					"footerEntries": [
						"* Divination spell of 1st level or higher"
					],
					"ability": "int"
				}
			],
			"trait": [
				{
					"name": "Portent (Recharges after the Diviner Casts a Divination Spell of 1st Level or Higher)",
					"entries": [
						"When the diviner or a creature it can see makes an attack roll, a saving throw, or an ability check, the diviner can roll a {@dice d20} and choose to use this roll in place of the attack roll, saving throw, or ability check."
					]
				}
			],
			"action": [
				{
					"name": "Quarterstaff",
					"entries": [
						"{@atk mw} {@hit 2} to hit, reach 5 ft., one target. {@h}2 ({@damage 1d6 - 1}) bludgeoning damage, or 3 ({@damage 1d8 - 1}) bludgeoning damage if used with two hands."
					]
				}
			],
			"environment": [
				"urban"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/diviner.mp3"
			},
			"languageTags": [
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
			"hasFluff": true
		},
		{
			"name": "Dolphin",
			"source": "VGM",
			"page": 208,
			"otherSources": [
				{
					"source": "GoS"
				}
			],
			"size": "M",
			"type": "beast",
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
				"average": 11,
				"formula": "2d8 + 2"
			},
			"speed": {
				"walk": 0,
				"swim": 60
			},
			"str": 14,
			"dex": 13,
			"con": 13,
			"int": 6,
			"wis": 12,
			"cha": 7,
			"skill": {
				"perception": "+3"
			},
			"senses": [
				"blindsight 60 ft."
			],
			"passive": 13,
			"cr": "1/8",
			"trait": [
				{
					"name": "Charge",
					"entries": [
						"If the dolphin moves at least 30 feet straight toward a target and then hits it with a slam attack on the same turn, the target takes an extra 3 ({@damage 1d6}) bludgeoning damage."
					]
				},
				{
					"name": "Hold Breath",
					"entries": [
						"The dolphin can hold its breath for 20 minutes."
					]
				}
			],
			"action": [
				{
					"name": "Slam",
					"entries": [
						"{@atk mw} {@hit 4} to hit, reach 5 ft., one target. {@h}5 ({@damage 1d6 + 2}) bludgeoning damage."
					]
				}
			],
			"environment": [
				"underwater",
				"coastal"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/dolphin.mp3"
			},
			"traitTags": [
				"Charge",
				"Hold Breath"
			],
			"senseTags": [
				"B"
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
			"name": "Draegloth",
			"source": "VGM",
			"page": 141,
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
					"ac": 15,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 123,
				"formula": "13d10 + 52"
			},
			"speed": {
				"walk": 30
			},
			"str": 20,
			"dex": 15,
			"con": 18,
			"int": 13,
			"wis": 11,
			"cha": 11,
			"skill": {
				"perception": "+3",
				"stealth": "+5"
			},
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 13,
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
				"Elvish",
				"Undercommon"
			],
			"cr": "7",
			"spellcasting": [
				{
					"name": "Innate Spellcasting",
					"headerEntries": [
						"The draegloth's innate spellcasting ability is Charisma (spell save {@dc 11}). The draegloth can innately cast the following spells, requiring no material components:"
					],
					"will": [
						"{@spell darkness}"
					],
					"daily": {
						"1e": [
							"{@spell confusion}",
							"{@spell dancing lights}",
							"{@spell faerie fire}"
						]
					},
					"ability": "cha"
				}
			],
			"trait": [
				{
					"name": "Fey Ancestry",
					"entries": [
						"The draegloth has advantage on saving throws against being {@condition charmed}, and magic can't put it to sleep."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The draegloth makes three attacks: one with its bite and two with its claws."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 8} to hit, reach 5 ft., one creature. {@h}16 ({@damage 2d10 + 5}) piercing damage."
					]
				},
				{
					"name": "Claws",
					"entries": [
						"{@atk mw} {@hit 8} to hit, reach 10 ft., one target. {@h}16 ({@damage 2d10 + 5}) slashing damage."
					]
				}
			],
			"environment": [
				"underdark"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/draegloth.mp3"
			},
			"traitTags": [
				"Fey Ancestry"
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
				"U"
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
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Elder Brain",
			"source": "VGM",
			"page": 173,
			"size": "L",
			"type": "aberration",
			"alignment": [
				"L",
				"E"
			],
			"ac": [
				10
			],
			"hp": {
				"average": 210,
				"formula": "20d10 + 100"
			},
			"speed": {
				"walk": 5,
				"swim": 10
			},
			"str": 15,
			"dex": 10,
			"con": 20,
			"int": 21,
			"wis": 19,
			"cha": 24,
			"save": {
				"int": "+10",
				"wis": "+9",
				"cha": "+12"
			},
			"skill": {
				"arcana": "+10",
				"deception": "+12",
				"insight": "+14",
				"intimidation": "+12",
				"persuasion": "+12"
			},
			"senses": [
				"blindsight 120 ft."
			],
			"passive": 14,
			"languages": [
				"understands Common",
				"Deep Speech",
				"and Undercommon but can't speak",
				"telepathy 5 miles"
			],
			"cr": "14",
			"spellcasting": [
				{
					"name": "Innate Spellcasting (Psionics)",
					"headerEntries": [
						"The elder brain's innate spellcasting ability is Intelligence (spell save {@dc 18}). It can innately cast the following spells, requiring no components:"
					],
					"will": [
						"{@spell detect thoughts}",
						"{@spell levitate}"
					],
					"daily": {
						"1e": [
							"{@spell dominate monster}",
							"{@spell plane shift} (self only)"
						]
					},
					"ability": "int"
				}
			],
			"trait": [
				{
					"name": "Creature Sense",
					"entries": [
						"The elder brain is aware of the presence of creatures within 5 miles of it that have an Intelligence score of 4 or higher. It knows the distance and direction to each creature, as well as each one's intelligence score, but can't sense anything else about it. A creature protected by a {@spell mind blank} spell, a {@spell nondetection} spell, or similar magic can't be perceived in this manner."
					]
				},
				{
					"name": "Legendary Resistance (3/Day)",
					"entries": [
						"If the elder brain fails a saving throw, it can choose to succeed instead."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"The elder brain has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Telepathic Hub",
					"entries": [
						"The elder brain can use its telepathy to initiate and maintain telepathic conversations with up to ten creatures at a time. The elder brain can let those creatures telepathically hear each other while connected in this way."
					]
				}
			],
			"action": [
				{
					"name": "Tentacle",
					"entries": [
						"{@atk mw} {@hit 7} to hit, reach 30 ft., one target. {@h}20 ({@damage 4d8 + 2}) bludgeoning damage. If the target is a Huge or smaller creature, it is {@condition grappled} (escape {@dc 15}) and takes 9 ({@damage 1d8 + 5}) psychic damage at the start of each of its turns until the grapple ends. The elder brain can have up to four targets {@condition grappled} at a time."
					]
				},
				{
					"name": "Mind Blast {@recharge 5}",
					"entries": [
						"The elder brain magically emits psychic energy. Creatures of the elder brain's choice within 60 feet of it must succeed on a {@dc 18} Intelligence saving throw or take 32 ({@damage 5d10 + 5}) psychic damage and be {@condition stunned} for 1 minute. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
					]
				},
				{
					"name": "Psychic Link",
					"entries": [
						"The elder brain targets one {@condition incapacitated} creature it can perceive with its Creature Sense trait and establishes a psychic link with that creature. Until the psychic link ends, the elder brain can perceive everything the target senses. The target becomes aware that something is linked to its mind once it is no longer {@condition incapacitated}, and the elder brain can terminate the link at any time (no action required). The target can use an action on its turn to attempt to break the psychic link, doing so with a successful {@dc 18} Charisma saving throw. On a successful save, the target takes 10 ({@damage 3d6}) psychic damage. The psychic link also ends if the target and the elder brain are more than 5 miles apart, with no consequences to the target. The elder brain can form psychic links with up to ten creatures at a time."
					]
				},
				{
					"name": "Sense Thoughts",
					"entries": [
						"The elder brain targets a creature with which it has a psychic link. The elder brain gains insight into the target's reasoning, its emotional state, and thoughts that loom large in its mind (including things the target worries about, loves, or hates). The elder brain can also make a Charisma (Deception) check with advantage to deceive the target's mind into thinking it believes one idea or feels a particular emotion. The target contests this attempt with a Wisdom (Insight) check. If the elder brain succeeds, the mind believes the deception for 1 hour or until evidence of the lie is presented to the target."
					]
				}
			],
			"legendary": [
				{
					"name": "Tentacle",
					"entries": [
						"The elder brain makes a tentacle attack."
					]
				},
				{
					"name": "Break Concentration",
					"entries": [
						"The elder brain targets a creature within 120 feet of it with which it has a psychic link. The elder brain breaks the creature's concentration on a spell it has cast. The creature also takes {@dice 1d4} psychic damage per level of the spell."
					]
				},
				{
					"name": "Psychic Pulse",
					"entries": [
						"The elder brain targets a creature within 120 feet of it with which it has a psychic link. Enemies of the elder brain within 10 feet of that creature take 10 ({@damage 3d6}) psychic damage."
					]
				},
				{
					"name": "Sever Psychic Link",
					"entries": [
						"The elder brain targets a creature within 120 feet of it with which it has a psychic link. The elder brain ends the link, causing the creature to have disadvantage on all ability checks, attack rolls, and saving throws until the end of the creature's next turn."
					]
				}
			],
			"legendaryGroup": {
				"name": "Elder Brain",
				"source": "VGM"
			},
			"environment": [
				"underdark"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/elder-brain.mp3"
			},
			"traitTags": [
				"Legendary Resistances",
				"Magic Resistance"
			],
			"senseTags": [
				"B"
			],
			"actionTags": [
				"Tentacles"
			],
			"languageTags": [
				"C",
				"CS",
				"DS",
				"TP",
				"U"
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
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"grappled",
				"stunned"
			],
			"conditionInflictSpell": [
				"charmed"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Enchanter",
			"source": "VGM",
			"page": 213,
			"otherSources": [
				{
					"source": "TftYP"
				}
			],
			"size": "M",
			"type": {
				"type": "humanoid",
				"tags": [
					"any race"
				]
			},
			"alignment": [
				"A"
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
				"average": 40,
				"formula": "9d8"
			},
			"speed": {
				"walk": 30
			},
			"str": 9,
			"dex": 14,
			"con": 11,
			"int": 17,
			"wis": 12,
			"cha": 11,
			"save": {
				"int": "+6",
				"wis": "+4"
			},
			"skill": {
				"arcana": "+6",
				"history": "+6"
			},
			"passive": 11,
			"languages": [
				"any four languages"
			],
			"cr": "5",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The enchanter is a 9th-level spellcaster. Its spellcasting ability is Intelligence (spell save {@dc 14}, {@hit 6} to hit with spell attacks). The enchanter has the following wizard spells prepared:"
					],
					"spells": {
						"0": {
							"spells": [
								"{@spell friends}",
								"{@spell mage hand}",
								"{@spell mending}",
								"{@spell message}"
							]
						},
						"1": {
							"slots": 4,
							"spells": [
								"{@spell charm person}*",
								"{@spell mage armor}",
								"{@spell magic missile}"
							]
						},
						"2": {
							"slots": 3,
							"spells": [
								"{@spell hold person}*",
								"{@spell invisibility}",
								"{@spell suggestion}*"
							]
						},
						"3": {
							"slots": 3,
							"spells": [
								"{@spell fireball}",
								"{@spell haste}",
								"{@spell tongues}"
							]
						},
						"4": {
							"slots": 3,
							"spells": [
								"{@spell dominate beast}*",
								"{@spell stoneskin}"
							]
						},
						"5": {
							"slots": 2,
							"spells": [
								"{@spell hold monster}*"
							]
						}
					},
					"footerEntries": [
						"*Enchantment spell of 1st level or higher"
					],
					"ability": "int"
				}
			],
			"action": [
				{
					"name": "Quarterstaff",
					"entries": [
						"{@atk mw} {@hit 2} to hit, reach 5 ft., one target. {@h}2 ({@damage 1d6 - 1}) bludgeoning damage, or 3 ({@damage 1d8 - 1}) bludgeoning damage if used with two hands."
					]
				}
			],
			"reaction": [
				{
					"name": "Instinctive Charm (Recharges after the Enchanter Casts an Enchantment Spell of 1st level or Higher)",
					"entries": [
						"The enchanter tries to magically divert an attack made against it, provided that the attacker is within 30 feet of it and visible to it. The enchanter must decide to do so before the attack hits or misses.",
						"The attacker must make a {@dc 14} Wisdom saving throw. On a failed save, the attacker targets the creature closest to it, other than the enchanter or itself. If multiple creatures are closest, the attacker chooses which one to target."
					]
				}
			],
			"environment": [
				"urban"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/enchanter.mp3"
			},
			"languageTags": [
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
			"hasFluff": true
		},
		{
			"name": "Evoker",
			"source": "VGM",
			"page": 214,
			"otherSources": [
				{
					"source": "TftYP"
				},
				{
					"source": "DIP"
				},
				{
					"source": "SLW"
				},
				{
					"source": "ERLW"
				}
			],
			"size": "M",
			"type": {
				"type": "humanoid",
				"tags": [
					"any race"
				]
			},
			"alignment": [
				"A"
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
				"average": 66,
				"formula": "12d8 + 12"
			},
			"speed": {
				"walk": 30
			},
			"str": 9,
			"dex": 14,
			"con": 12,
			"int": 17,
			"wis": 12,
			"cha": 11,
			"save": {
				"int": "+7",
				"wis": "+5"
			},
			"skill": {
				"arcana": "+7",
				"history": "+7"
			},
			"passive": 11,
			"languages": [
				"any four languages"
			],
			"cr": "9",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The evoker is a 12th-level spellcaster. Its spellcasting ability is Intelligence (spell save {@dc 15}, {@hit 7} to hit with spell attacks). The evoker has the following wizard spells prepared:"
					],
					"spells": {
						"0": {
							"spells": [
								"{@spell fire bolt}*",
								"{@spell light}*",
								"{@spell prestidigitation}",
								"{@spell ray of frost}*"
							]
						},
						"1": {
							"slots": 4,
							"spells": [
								"{@spell burning hands}*",
								"{@spell mage armor}",
								"{@spell magic missile}*"
							]
						},
						"2": {
							"slots": 3,
							"spells": [
								"{@spell mirror image}",
								"{@spell misty step}",
								"{@spell shatter}*"
							]
						},
						"3": {
							"slots": 3,
							"spells": [
								"{@spell counterspell}",
								"{@spell fireball}*",
								"{@spell lightning bolt}*"
							]
						},
						"4": {
							"slots": 3,
							"spells": [
								"{@spell ice storm}*",
								"{@spell stoneskin}"
							]
						},
						"5": {
							"slots": 2,
							"spells": [
								"{@spell Bigby's hand}*",
								"{@spell cone of cold}*"
							]
						},
						"6": {
							"slots": 1,
							"spells": [
								"{@spell chain lightning}*",
								"{@spell wall of ice}*"
							]
						}
					},
					"footerEntries": [
						"*Evocation spell"
					],
					"ability": "int"
				}
			],
			"trait": [
				{
					"name": "Sculpt Spells",
					"entries": [
						"When the evoker casts an evocation spell that forces other creatures it can see to make a saving throw, it can choose a number of them equal to 1 + the spell's level. These creatures automatically succeed on their saving throws against the spell. If a successful save means a chosen creature would take half damage from the spell, it instead takes no damage from it."
					]
				}
			],
			"action": [
				{
					"name": "Quarterstaff",
					"entries": [
						"{@atk mw} {@hit 3} to hit, reach 5 ft., one target. {@h}2 ({@damage 1d6 - 1}) bludgeoning damage, or 3 ({@damage 1d8 - 1}) bludgeoning damage if used with two hands."
					]
				}
			],
			"environment": [
				"urban"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/evoker.mp3"
			},
			"languageTags": [
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
			"hasFluff": true
		},
		{
			"name": "Fire Giant Dreadnought",
			"source": "VGM",
			"page": 147,
			"size": "H",
			"type": {
				"type": "giant",
				"tags": [
					"fire giant"
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
						"{@item plate armor|phb}",
						"{@item shield|phb|shields}"
					]
				}
			],
			"hp": {
				"average": 187,
				"formula": "15d12 + 90"
			},
			"speed": {
				"walk": 30
			},
			"str": 27,
			"dex": 9,
			"con": 23,
			"int": 8,
			"wis": 10,
			"cha": 11,
			"save": {
				"dex": "+4",
				"con": "+11",
				"cha": "+5"
			},
			"skill": {
				"athletics": "+13",
				"perception": "+5"
			},
			"passive": 15,
			"immune": [
				"fire"
			],
			"languages": [
				"Giant"
			],
			"cr": "14",
			"trait": [
				{
					"name": "Dual Shields",
					"entries": [
						"The giant carries two shields, each of which is accounted for in the giant's AC. The giant must stow or drop one of its shields to hurl rocks."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The giant makes two fireshield attacks."
					]
				},
				{
					"name": "Fireshield",
					"entries": [
						"{@atk mw} {@hit 13} to hit, reach 5 ft., one target. {@h}22 ({@damage 4d6 + 8}) bludgeoning damage plus 7 ({@damage 2d6}) fire damage plus 7 ({@damage 2d6}) piercing damage."
					]
				},
				{
					"name": "Rock",
					"entries": [
						"{@atk rw} {@hit 13} to hit, range 60/240 ft., one target. {@h}30 ({@damage 4d10 + 8}) bludgeoning damage."
					]
				},
				{
					"name": "Shield Charge",
					"entries": [
						"The giant moves up to 30 feet in a straight line and can move through the space of any creature smaller than Huge. The first time it enters a creature's space during this move, it makes a fireshield attack against that creature. If the attack hits, the target must also succeed on a {@dc 21} Strength saving throw or be pushed ahead of the giant for the rest of this move. If a creature fails the save by 5 or more, it is also knocked {@condition prone} and takes 18 ({@damage 3d6 + 8}) bludgeoning damage, or 29 ({@damage 6d6 + 8}) bludgeoning damage if it was already {@condition prone}."
					]
				}
			],
			"environment": [
				"underdark",
				"mountain"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/fire-giant-dreadnought.mp3"
			},
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"GI"
			],
			"damageTags": [
				"B",
				"F",
				"P"
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
			"name": "Firenewt Warlock of Imix",
			"source": "VGM",
			"page": 143,
			"otherSources": [
				{
					"source": "ToA"
				}
			],
			"size": "M",
			"type": {
				"type": "humanoid",
				"tags": [
					"firenewt"
				]
			},
			"alignment": [
				"N",
				"E"
			],
			"ac": [
				10,
				{
					"ac": 13,
					"condition": "with {@spell mage armor}",
					"braces": true
				}
			],
			"hp": {
				"average": 33,
				"formula": "6d8 + 6"
			},
			"speed": {
				"walk": 30
			},
			"str": 13,
			"dex": 11,
			"con": 12,
			"int": 9,
			"wis": 11,
			"cha": 14,
			"senses": [
				"darkvision 120 ft. (penetrates magical darkness)"
			],
			"passive": 10,
			"immune": [
				"fire"
			],
			"languages": [
				"Draconic",
				"Ignan"
			],
			"cr": "1",
			"spellcasting": [
				{
					"name": "Innate Spellcasting",
					"headerEntries": [
						"The firenewt's innate spellcasting ability is Charisma. It can innately cast {@spell mage armor} (self only) at will, requiring no material components."
					],
					"will": [
						"{@spell mage armor}"
					],
					"hidden": [
						"will"
					],
					"ability": "cha"
				},
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The firenewt is a 3rd-level spellcaster. Its spellcasting ability is Charisma (spell save {@dc 12}, {@hit 4} to hit with spell attacks). It regains its expended spell slots when it finishes a short or long rest. It knows the following warlock spells:"
					],
					"spells": {
						"0": {
							"spells": [
								"{@spell fire bolt}",
								"{@spell guidance}",
								"{@spell light}",
								"{@spell mage hand}",
								"{@spell prestidigitation}"
							]
						},
						"2": {
							"lower": 1,
							"slots": 2,
							"spells": [
								"{@spell burning hands}",
								"{@spell flaming sphere}",
								"{@spell hellish rebuke}",
								"{@spell scorching ray}"
							]
						}
					},
					"ability": "cha"
				}
			],
			"trait": [
				{
					"name": "Amphibious",
					"entries": [
						"The firenewt can breathe air and water."
					]
				},
				{
					"name": "Imix's Blessing",
					"entries": [
						"When the firenewt reduces an enemy to 0 hit points, the firenewt gains 5 temporary hit points."
					]
				}
			],
			"action": [
				{
					"name": "Morningstar",
					"entries": [
						"{@atk mw} {@hit 3} to hit, reach 5 ft., one target. {@h}5 ({@damage 1d8 + 1}) piercing damage."
					]
				}
			],
			"environment": [
				"underdark",
				"mountain",
				"hill",
				"desert"
			],
			"hasToken": true,
			"traitTags": [
				"Amphibious"
			],
			"senseTags": [
				"SD"
			],
			"languageTags": [
				"DR",
				"IG"
			],
			"damageTags": [
				"P"
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
			"name": "Firenewt Warrior",
			"source": "VGM",
			"page": 142,
			"otherSources": [
				{
					"source": "ToA"
				}
			],
			"size": "M",
			"type": {
				"type": "humanoid",
				"tags": [
					"firenewt"
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
						"{@item chain shirt|phb}",
						"{@item shield|phb}"
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
			"str": 10,
			"dex": 13,
			"con": 12,
			"int": 7,
			"wis": 11,
			"cha": 8,
			"passive": 10,
			"immune": [
				"fire"
			],
			"languages": [
				"Draconic",
				"Ignan"
			],
			"cr": "1/2",
			"trait": [
				{
					"name": "Amphibious",
					"entries": [
						"The firenewt can breathe air and water."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The firenewt makes two attacks with its scimitar."
					]
				},
				{
					"name": "Scimitar",
					"entries": [
						"{@atk mw} {@hit 3} to hit, reach 5 ft., one target. {@h}4 ({@damage 1d6 + 1}) slashing damage."
					]
				},
				{
					"name": "Spit Fire (Recharges after a Short or Long Rest)",
					"entries": [
						"The firenewt spits fire at a creature within 10 feet of it. The creature must make a {@dc 11} Dexterity saving throw, taking 9 ({@damage 2d8}) fire damage on a failed save, or half as much damage on a successful one"
					]
				}
			],
			"environment": [
				"underdark",
				"mountain",
				"hill",
				"desert"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/firenewt-warrior.mp3"
			},
			"traitTags": [
				"Amphibious"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"DR",
				"IG"
			],
			"damageTags": [
				"F",
				"S"
			],
			"miscTags": [
				"MW"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Flail Snail",
			"source": "VGM",
			"page": 144,
			"otherSources": [
				{
					"source": "ToA"
				},
				{
					"source": "DIP"
				},
				{
					"source": "SLW"
				}
			],
			"size": "L",
			"type": "elemental",
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
				"formula": "5d10 + 25"
			},
			"speed": {
				"walk": 10
			},
			"str": 17,
			"dex": 5,
			"con": 20,
			"int": 3,
			"wis": 10,
			"cha": 5,
			"senses": [
				"darkvision 60 ft.",
				"tremorsense 60 ft."
			],
			"passive": 10,
			"immune": [
				"fire",
				"poison"
			],
			"conditionImmune": [
				"poisoned"
			],
			"cr": "3",
			"trait": [
				{
					"name": "Antimagic Shell",
					"entries": [
						"The snail has advantage on saving throws against spells, and any creature making a spell attack against the snail has disadvantage on the attack roll. If the snail succeeds on its saving throw against a spell or a spell attack misses it, an additional effect might occur, as determined by rolling a {@dice d6}:",
						{
							"type": "list",
							"style": "list-hang-notitle",
							"items": [
								{
									"type": "item",
									"name": "1\u20132.",
									"style": "italic",
									"entry": "If the spell affects an area or has multiple targets, it fails and has no effect. If the spell targets only the snail, it has no effect on the snail and is reflected back at the caster, using the spell slot level, spell save DC, attack bonus, and spellcasting ability of the caster."
								},
								{
									"type": "item",
									"name": "3\u20134.",
									"style": "italic",
									"entry": "No additional effect."
								},
								{
									"type": "item",
									"name": "5\u20136.",
									"style": "italic",
									"entry": "The snail's shell converts some of the spell's energy into a burst of destructive force. Each creature within 30 feet of the snail must make a {@dc 15} Constitution saving throw, taking {@dice 1d6} force damage per level of the spell on a failed save, or half as much damage on a successful one."
								}
							]
						}
					]
				},
				{
					"name": "Flail Tentacles",
					"entries": [
						"The flail snail has five flail tentacles. Whenever the snail takes 10 damage or more on a single turn, one of its tentacles dies. If even one tentacle remains, the snail regrows all dead ones within {@dice 1d4} days. If all its tentacles die, the snail retracts into its shell, gaining total cover, and it begins wailing, a sound that can be heard for 600 feet, stopping only when it dies {@dice 5d6} minutes later. Healing magic that restores limbs, such as the regenerate spell, can halt this dying process."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The flail snail makes as many flail tentacle attacks as it has flail tentacles, all against the same target."
					]
				},
				{
					"name": "Flail Tentacle",
					"entries": [
						"{@atk mw} {@hit 5} to hit, reach 10 ft., one target. {@h}6 ({@damage 1d6 + 3}) bludgeoning damage."
					]
				},
				{
					"name": "Scintillating Shell (Recharges after a Short or Long Rest)",
					"entries": [
						"The snail's shell emits dazzling, colored light until the end of the snail's next turn. During this time, the shell sheds bright light in a 30-foot radius and dim light for an additional 30 feet, and creatures that can see the snail have disadvantage on attack rolls against it. In addition, any creature within the bright light and able to see the snail when this power is activated must succeed on a {@dc 15} Wisdom saving throw or be {@condition stunned} until the light ends."
					]
				},
				{
					"name": "Shell Defense",
					"entries": [
						"The flail snail withdraws into its shell, gaining a +4 bonus to AC until it emerges. It can emerge from its shell as a bonus action on its turn."
					]
				}
			],
			"environment": [
				"underdark",
				"forest",
				"swamp"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/flail-snail.mp3"
			},
			"senseTags": [
				"D",
				"T"
			],
			"actionTags": [
				"Multiattack"
			],
			"damageTags": [
				"B"
			],
			"miscTags": [
				"AOE",
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"stunned"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Flind",
			"source": "VGM",
			"page": 153,
			"size": "M",
			"type": {
				"type": "humanoid",
				"tags": [
					"gnoll"
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
						"{@item chain mail|phb}"
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
			"str": 20,
			"dex": 10,
			"con": 19,
			"int": 11,
			"wis": 13,
			"cha": 12,
			"save": {
				"con": "+8",
				"wis": "+5"
			},
			"skill": {
				"intimidation": "+5",
				"perception": "+5"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 15,
			"languages": [
				"Abyssal",
				"Gnoll"
			],
			"cr": "9",
			"trait": [
				{
					"name": "Aura of Blood Thirst",
					"entries": [
						"If the flind isn't {@condition incapacitated}, any creature with the Rampage trait can make a bite attack as a bonus action while within 10 feet of the flind."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The flind makes three attacks: one with each of its different flail attacks or three with its longbow."
					]
				},
				{
					"name": "Flail of Madness",
					"entries": [
						"{@atk mw} {@hit 9} to hit, reach 5 ft., one target. {@h}10 ({@damage 1d10 + 5}) bludgeoning damage, and the target must make a {@dc 16} Wisdom saving throw. On a failed save, the target must make a melee attack against a random target within its reach on its next turn. If it has no targets within its reach even after moving, it loses its action on that turn."
					]
				},
				{
					"name": "Flail of Pain",
					"entries": [
						"{@atk mw} {@hit 9} to hit, reach 5 ft., one target. {@h}10 ({@damage 1d10 + 5}) bludgeoning damage plus 22 ({@damage 4d10}) psychic damage."
					]
				},
				{
					"name": "Flail of Paralysis",
					"entries": [
						"{@atk mw} {@hit 9} to hit, reach 5 ft., one target. {@h}10 ({@damage 1d10 + 5}) bludgeoning damage, and the target must succeed on a {@dc 16} Constitution saving throw or be {@condition paralyzed} until the end of its next turn."
					]
				},
				{
					"name": "Longbow",
					"entries": [
						"{@atk rw} {@hit 4} to hit, range 150/600 ft., one target. {@h}4 ({@damage 1d8}) piercing damage."
					]
				}
			],
			"environment": [
				"grassland",
				"forest",
				"hill",
				"arctic"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/flind.mp3"
			},
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"AB",
				"OTH"
			],
			"damageTags": [
				"B",
				"P",
				"Y"
			],
			"miscTags": [
				"MW",
				"RNG",
				"RW"
			],
			"conditionInflict": [
				"paralyzed"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Froghemoth",
			"source": "VGM",
			"page": 145,
			"otherSources": [
				{
					"source": "ToA"
				}
			],
			"size": "H",
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
				"average": 184,
				"formula": "16d12 + 80"
			},
			"speed": {
				"walk": 30,
				"swim": 30
			},
			"str": 23,
			"dex": 13,
			"con": 20,
			"int": 2,
			"wis": 12,
			"cha": 5,
			"save": {
				"con": "+9",
				"wis": "+5"
			},
			"skill": {
				"perception": "+9",
				"stealth": "+5"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 19,
			"resist": [
				"fire",
				"lightning"
			],
			"cr": "10",
			"trait": [
				{
					"name": "Amphibious",
					"entries": [
						"The froghemoth can breathe air and water."
					]
				},
				{
					"name": "Shock Susceptibility",
					"entries": [
						"If the froghemoth takes lightning damage, it suffers several effects until the end of its next turn: its speed is halved, it takes a \u22122 penalty to AC and Dexterity saving throws, it can't use reactions or Multiattack, and on its turn, it can use either an action or a bonus action, not both."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The froghemoth makes two attacks with its tentacles. It can also use its tongue or bite."
					]
				},
				{
					"name": "Tentacle",
					"entries": [
						"{@atk mw} {@hit 10} to hit, reach 20 ft., one target. {@h}19 ({@damage 3d8 + 6}) bludgeoning damage, and the target is {@condition grappled} (escape {@dc 16}) if it is a Huge or smaller creature. Until the grapple ends, the froghemoth can't use this tentacle on another target. The froghemoth has four tentacles."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 10} to hit, reach 5 ft., one target. {@h}22 ({@damage 3d10 + 6}) piercing damage, and the target is swallowed if it is a Medium or smaller creature. A swallowed creature is {@condition blinded} and {@condition restrained}, has total cover against attacks and other effects outside the froghemoth, and takes 10 ({@damage 3d6}) acid damage at the start of each of the froghemoth's turns.",
						"The froghemoth's gullet can hold up to two creatures at a time. If the Froghemoth takes 20 damage or more on a single turn from a creature inside it, the Froghemoth must succeed on a {@dc 20} Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, each of which falls {@condition prone} in a space within 10 feet of the froghemoth. If the froghemoth dies, a swallowed creature is no longer {@condition restrained} by it and can escape from the corpse using 10 feet of movement, exiting {@condition prone}."
					]
				},
				{
					"name": "Tongue",
					"entries": [
						"The Froghemoth targets one Medium or smaller creature that it can see within 20 feet of it. The target must make a {@dc 18} Strength saving throw. On a failed save, the target is pulled into an unoccupied space within 5 feet of the froghemoth, and the froghemoth can make a bite attack against it as a bonus action."
					]
				}
			],
			"environment": [
				"underdark",
				"swamp"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/froghemoth.mp3"
			},
			"traitTags": [
				"Amphibious"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack",
				"Swallow",
				"Tentacles"
			],
			"damageTags": [
				"A",
				"B",
				"P"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"blinded",
				"grappled",
				"restrained"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Frost Giant Everlasting One",
			"source": "VGM",
			"page": 148,
			"size": "H",
			"type": {
				"type": "giant",
				"tags": [
					"frost giant"
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
						"patchwork armor"
					]
				}
			],
			"hp": {
				"average": 189,
				"formula": "14d12 + 98"
			},
			"speed": {
				"walk": 40
			},
			"str": 25,
			"dex": 9,
			"con": 24,
			"int": 9,
			"wis": 10,
			"cha": 12,
			"save": {
				"str": "+11",
				"con": "+11",
				"wis": "+4"
			},
			"skill": {
				"athletics": "+11",
				"perception": "+4"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 14,
			"immune": [
				"cold"
			],
			"languages": [
				"Giant"
			],
			"cr": "12",
			"trait": [
				{
					"name": "Extra Heads",
					"entries": [
						"The giant has a {@chance 25|25 percent} chance of having more than one head. If it has more than one, it has advantage on Wisdom ({@skill Perception}) checks and on saving throws against being {@condition blinded}, {@condition charmed}, {@condition deafened}, {@condition frightened}, {@condition stunned}, or knocked {@condition unconscious}."
					]
				},
				{
					"name": "Regeneration",
					"entries": [
						"The giant regains 10 hit points at the start of its turn. If the giant takes acid or fire damage, this trait doesn't function at the start of its next turn. The giant dies only if it starts its turn with 0 hit points and doesn't regenerate."
					]
				},
				{
					"name": "Vaprak's Rage (Recharges after a Short or Long Rest)",
					"entries": [
						"As a bonus action, the giant can enter a rage at the start of its turn. The rage lasts for 1 minute or until the giant is {@condition incapacitated}. While raging, the giant gains the following benefits:",
						"- The giant has advantage on Strength checks and Strength saving throws",
						"- When it makes a melee weapon attack, the giant gains a +4 bonus to the damage roll.",
						"- The giant has resistance to bludgeoning, piercing, and slashing damage."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The giant makes two attacks with its greataxe."
					]
				},
				{
					"name": "Greataxe",
					"entries": [
						"{@atk mw} {@hit 11} to hit, reach 10 ft., one target. {@h}26 ({@damage 3d12 + 7}) slashing damage, or 30 ({@damage 3d12 + 11}) slashing damage while raging."
					]
				},
				{
					"name": "Rock",
					"entries": [
						"{@atk rw} {@hit 11} to hit, range 60/240 ft., one target. {@h}29 ({@damage 4d10 + 7}) bludgeoning damage."
					]
				}
			],
			"environment": [
				"coastal",
				"arctic"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/frost-giant-everlasting-one.mp3"
			},
			"traitTags": [
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
				"B",
				"S"
			],
			"miscTags": [
				"MW",
				"RCH",
				"RW"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Gauth",
			"group": "Beholders",
			"source": "VGM",
			"page": 125,
			"size": "M",
			"type": "aberration",
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
				"average": 67,
				"formula": "9d8 + 27"
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
			"dex": 14,
			"con": 16,
			"int": 15,
			"wis": 15,
			"cha": 13,
			"save": {
				"int": "+5",
				"wis": "+5",
				"cha": "+4"
			},
			"skill": {
				"perception": "+5"
			},
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 15,
			"conditionImmune": [
				"prone"
			],
			"languages": [
				"Deep Speech",
				"Undercommon"
			],
			"cr": "6",
			"trait": [
				{
					"name": "Stunning Gaze",
					"entries": [
						"When a creature that can see the gauth's central eye starts its turn within 30 feet of the gauth, the gauth can force it to make a {@dc 14} Wisdom saving throw if the gauth isn't {@condition incapacitated} and can see the creature. A creature that fails the save is {@condition stunned} until the start of its next turn, when it can avert its eyes again. If the creature looks at the gauth in the meantime, it must immediately make the save."
					]
				},
				{
					"name": "Death Throes",
					"entries": [
						"When the gauth dies, the magical energy within it explodes, and each creature within 10 feet of it must make a {@dc 14} Dexterity saving throw, taking 13 ({@damage 3d8}) force damage on a failed save, or half as much damage on a successful one."
					]
				}
			],
			"action": [
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 8} to hit, reach 5 ft., one target. {@h}9 ({@damage 2d8}) piercing damage."
					]
				},
				{
					"name": "Eye Rays",
					"entries": [
						"The gauth shoots three of the following magical eye rays at random (reroll duplicates), choosing one to three targets it can see within 120 feet of it:",
						{
							"type": "list",
							"style": "list-hang-notitle",
							"items": [
								{
									"type": "item",
									"name": "1. Devour Magic Ray.",
									"style": "italic",
									"entry": "The targeted creature must succeed on a {@dc 14} Dexterity saving throw or have one of its magic items lose all magical properties until the start of the gauth's next turn. If the object is a charged item, it also loses {@dice 1d4} charges. Determine the affected item randomly, ignoring single-use items such as potions and scrolls."
								},
								{
									"type": "item",
									"name": "2. Enervation Ray.",
									"style": "italic",
									"entry": "The targeted creature must make a {@dc 14} Constitution saving throw, taking 18 ({@damage 4d8}) necrotic damage on a failed save, or half as much damage on a successful one."
								},
								{
									"type": "item",
									"name": "3. Pushing Ray.",
									"style": "italic",
									"entry": "The targeted creature must succeed on a {@dc 14} Strength saving throw or be pushed up to 15 feet directly away from the gauth and have its speed halved until the start of the gauth's next turn."
								},
								{
									"type": "item",
									"name": "4. Fire Ray.",
									"style": "italic",
									"entry": "The targeted creature must succeed on a {@dc 14} Dexterity saving throw or take 22 ({@damage 4d10}) fire damage."
								},
								{
									"type": "item",
									"name": "5. Paralyzing Ray.",
									"style": "italic",
									"entry": "The targeted creature must succeed on a {@dc 14} Constitution saving throw or be {@condition paralyzed} for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
								},
								{
									"type": "item",
									"name": "6. Sleep Ray.",
									"style": "italic",
									"entry": "The targeted creature must succeed on a {@dc 14} Wisdom saving throw or fall asleep and remain {@condition unconscious} for 1 minute. The target awakens if it takes damage or another creature takes an action to wake it. This ray has no effect on constructs and undead."
								}
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
				"path": "bestiary/gauth.mp3"
			},
			"traitTags": [
				"Death Burst"
			],
			"senseTags": [
				"SD"
			],
			"languageTags": [
				"DS",
				"U"
			],
			"damageTags": [
				"F",
				"N",
				"O",
				"P"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"paralyzed",
				"stunned",
				"unconscious"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Gazer",
			"group": "Beholders",
			"source": "VGM",
			"page": 126,
			"otherSources": [
				{
					"source": "WDH"
				}
			],
			"size": "T",
			"type": "aberration",
			"alignment": [
				"N",
				"E"
			],
			"ac": [
				13
			],
			"hp": {
				"average": 13,
				"formula": "3d4 + 6"
			},
			"speed": {
				"walk": 0,
				"fly": {
					"number": 30,
					"condition": "(hover)"
				},
				"canHover": true
			},
			"str": 3,
			"dex": 17,
			"con": 14,
			"int": 3,
			"wis": 10,
			"cha": 7,
			"save": {
				"wis": "+2"
			},
			"skill": {
				"perception": "+4",
				"stealth": "+5"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 14,
			"conditionImmune": [
				"prone"
			],
			"cr": "1/2",
			"trait": [
				{
					"name": "Aggressive",
					"entries": [
						"As a bonus action, the gazer can move up to its speed toward a hostile creature that it can see."
					]
				},
				{
					"name": "Mimicry",
					"entries": [
						"The gazer can mimic simple sounds of speech it has heard, in any language. A creature that hears the sounds can tell they are imitations with a successful {@dc 10} Wisdom (Insight) check."
					]
				}
			],
			"action": [
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 5} to hit, reach 5 ft., one target. {@h}1 piercing damage."
					]
				},
				{
					"name": "Eye Rays",
					"entries": [
						"The gazer shoots two of the following magical eye rays at random (reroll duplicates), choosing one or two targets it can see within 60 feet of it:",
						{
							"type": "list",
							"style": "list-hang-notitle",
							"items": [
								{
									"type": "item",
									"name": "1. Dazing Ray.",
									"style": "italic",
									"entry": "The targeted creature must succeed on a {@dc 12} Wisdom saving throw or be {@condition charmed} until the start of the gazer's next turn. While the target is {@condition charmed} in this way, its speed is halved, and it has disadvantage on attack rolls."
								},
								{
									"type": "item",
									"name": "2. Fear Ray.",
									"style": "italic",
									"entry": "The targeted creature must succeed on a {@dc 12} Wisdom saving throw or be {@condition frightened} until the start of the gazer's next turn."
								},
								{
									"type": "item",
									"name": "3. Frost Ray.",
									"style": "italic",
									"entry": "The targeted creature must succeed on a {@dc 12} Dexterity saving throw or take 10 ({@damage 3d6}) cold damage."
								},
								{
									"type": "item",
									"name": "4. Telekinetic Ray.",
									"style": "italic",
									"entries": [
										"If the target is a creature that is Medium or smaller, it must succeed on a {@dc 12} Strength saving throw or be moved up to 30 feet directly away from the gazer.",
										"If the target is an object weighing 10 pounds or less that isn't being worn or carried, the gazer moves it up to 30 feet in any direction. The gazer can also exert fine control on objects with this ray, such as manipulating a simple tool or opening a container."
									]
								}
							]
						}
					]
				}
			],
			"variant": [
				{
					"type": "variant",
					"name": "Gazer Familiar",
					"entries": [
						"Spellcasters who are interested in unusual familiars find that gazers are eager to serve someone who has magical power, especially those who make a point of bullying and harassing others. The gazer behaves aggressively toward creatures smaller than itself, and it tends to randomly attack house pets, farm animals, and even children in town unless its master is very strict. A gazer serving as a familiar has the following trait.",
						{
							"type": "entries",
							"name": "Familiar",
							"entries": [
								"The gazer can serve another creature as a familiar, forming a telepathic bond with its willing master, provided that the master is at least a 3rd-level spellcaster. While the two are bonded, the master can sense what the gazer senses as long as they are within 1 mile of each other. If its master causes it physical harm, the gazer will end its service as a familiar, breaking the telepathic bond."
							]
						}
					]
				}
			],
			"environment": [
				"underdark"
			],
			"familiar": true,
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/gazer.mp3"
			},
			"traitTags": [
				"Aggressive"
			],
			"senseTags": [
				"D"
			],
			"damageTags": [
				"C",
				"P"
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
			"name": "Giant Strider",
			"source": "VGM",
			"page": 143,
			"otherSources": [
				{
					"source": "ToA"
				}
			],
			"size": "L",
			"type": "monstrosity",
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
				"average": 22,
				"formula": "3d10 + 6"
			},
			"speed": {
				"walk": 50
			},
			"str": 18,
			"dex": 13,
			"con": 14,
			"int": 4,
			"wis": 12,
			"cha": 6,
			"passive": 11,
			"immune": [
				"fire"
			],
			"cr": "1",
			"trait": [
				{
					"name": "Fire Absorption",
					"entries": [
						"Whenever the giant strider is subjected to fire damage, it takes no damage and regains a number of hit points equal to half the fire damage dealt."
					]
				}
			],
			"action": [
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 6} to hit, reach 5 ft., one target. {@h}8 ({@damage 1d8 + 4}) piercing damage."
					]
				},
				{
					"name": "Fire Burst {@recharge 5}",
					"entries": [
						"The giant strider hurls a gout of flame at a point it can see within 60 feet of it. Each creature in a 10-foot-radius sphere centered on that point must make a {@dc 12} Dexterity saving throw, taking 14 ({@damage 4d6}) fire damage on a failed save, or half as much damage on a successful one. The fire spreads around corners, and it ignites flammable objects in that area that aren't being worn or carried."
					]
				}
			],
			"environment": [
				"underdark",
				"mountain",
				"hill"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/giant-stider.mp3"
			},
			"traitTags": [
				"Damage Absorption"
			],
			"damageTags": [
				"F",
				"P"
			],
			"miscTags": [
				"AOE",
				"MW"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Girallon",
			"source": "VGM",
			"page": 152,
			"otherSources": [
				{
					"source": "ToA"
				},
				{
					"source": "IMR"
				}
			],
			"size": "L",
			"type": "monstrosity",
			"alignment": [
				"U"
			],
			"ac": [
				13
			],
			"hp": {
				"average": 59,
				"formula": "7d10 + 21"
			},
			"speed": {
				"walk": 40,
				"climb": 40
			},
			"str": 18,
			"dex": 16,
			"con": 16,
			"int": 5,
			"wis": 12,
			"cha": 7,
			"skill": {
				"perception": "+3",
				"stealth": "+5"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 13,
			"cr": "4",
			"trait": [
				{
					"name": "Aggressive",
					"entries": [
						"As a bonus action, the girallon can move up to its speed toward a hostile creature that it can see."
					]
				},
				{
					"name": "Keen Smell",
					"entries": [
						"The girallon has advantage on Wisdom (Perception) checks that rely on smell."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The girallon makes five attacks: one with its bite and four with its claws."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 6} to hit, reach 5 ft., one creature. {@h}7 ({@damage 1d6 + 4}) piercing damage."
					]
				},
				{
					"name": "Claw",
					"entries": [
						"{@atk mw} {@hit 6} to hit. reach 10 ft., one target. {@h}7 ({@damage 1d6 + 4}) slashing damage."
					]
				}
			],
			"environment": [
				"forest"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/girallon.mp3"
			},
			"traitTags": [
				"Aggressive",
				"Keen Senses"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"damageTags": [
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
			"name": "Gnoll Flesh Gnawer",
			"source": "VGM",
			"page": 154,
			"size": "M",
			"type": {
				"type": "humanoid",
				"tags": [
					"gnoll"
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
						"{@item studded leather armor|phb}"
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
			"str": 12,
			"dex": 14,
			"con": 12,
			"int": 8,
			"wis": 10,
			"cha": 8,
			"save": {
				"dex": "+4"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 10,
			"languages": [
				"Gnoll"
			],
			"cr": "1",
			"trait": [
				{
					"name": "Rampage",
					"entries": [
						"When the gnoll reduces a creature to 0 hit points with a melee attack on its turn, the gnoll can take a bonus action to move up to half its speed and make a bite attack."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The gnoll makes three attacks: one with its bite and two with its shortsword."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 4} to hit, reach 5 ft., one target. {@h}4 ({@damage 1d4 + 2}) piercing damage."
					]
				},
				{
					"name": "Shortsword",
					"entries": [
						"{@atk mw} {@hit 4} to hit, reach 5 ft., one target. {@h}5 ({@damage 1d6 + 2}) piercing damage."
					]
				},
				{
					"name": "Sudden Rush",
					"entries": [
						"Until the end of the turn, the gnoll's speed increases by 60 feet and it doesn't provoke opportunity attacks."
					]
				}
			],
			"environment": [
				"grassland",
				"forest",
				"hill",
				"arctic"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/gnoll-flesh-gnawer.mp3"
			},
			"traitTags": [
				"Rampage"
			],
			"senseTags": [
				"D"
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
				"MW"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Gnoll Hunter",
			"source": "VGM",
			"page": 154,
			"size": "M",
			"type": {
				"type": "humanoid",
				"tags": [
					"gnoll"
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
				"average": 22,
				"formula": "4d8 + 4"
			},
			"speed": {
				"walk": 30
			},
			"str": 14,
			"dex": 14,
			"con": 12,
			"int": 8,
			"wis": 12,
			"cha": 8,
			"skill": {
				"perception": "+3",
				"stealth": "+4"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 13,
			"languages": [
				"Gnoll"
			],
			"cr": "1/2",
			"trait": [
				{
					"name": "Rampage",
					"entries": [
						"When the gnoll reduces a creature to 0 hit points with a melee attack on its turn, the gnoll can take a bonus action to move up to half its speed and make a bite attack."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The gnoll makes two melee attacks with its spear or two ranged attacks with its longbow."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 4} to hit, reach 5 ft., one target. {@h}4 ({@damage 1d4 + 2}) piercing damage."
					]
				},
				{
					"name": "Spear",
					"entries": [
						"{@atk mw,rw} {@hit 4} to hit, reach 5 ft. or range 20/60 ft., one target. {@h}5 ({@damage 1d6 + 2}) piercing damage, or 6 ({@damage 1d8 + 2}) piercing damage when used with two hands to make a melee attack."
					]
				},
				{
					"name": "Longbow",
					"entries": [
						"{@atk rw} {@hit 4} to hit, range 150/600 ft., one target. {@h}6 ({@damage 1d8 + 2}) piercing damage, and the target's speed is reduced by 10 feet until the end of its next turn."
					]
				}
			],
			"environment": [
				"grassland",
				"forest",
				"hill",
				"arctic"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/gnoll-hunter.mp3"
			},
			"traitTags": [
				"Rampage"
			],
			"senseTags": [
				"D"
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
				"RNG",
				"RW",
				"THW"
			],
			"hasFluff": true
		},
		{
			"name": "Gnoll Witherling",
			"source": "VGM",
			"page": 155,
			"size": "M",
			"type": "undead",
			"alignment": [
				"C",
				"E"
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
				"average": 11,
				"formula": "2d8 + 2"
			},
			"speed": {
				"walk": 30
			},
			"str": 14,
			"dex": 8,
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
				"exhaustion",
				"poisoned"
			],
			"languages": [
				"understands Gnoll but can't speak"
			],
			"cr": "1/4",
			"trait": [
				{
					"name": "Rampage",
					"entries": [
						"When the witherling reduces a creature to 0 hit points with a melee attack on its turn, it can take a bonus action to move up to half its speed and make a bite attack."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The witherling makes two attacks: one with its bite and one with its club, or two with its club."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 4} to hit, reach 5 ft., one target. {@h}4 ({@damage 1d4 + 2}) piercing damage."
					]
				},
				{
					"name": "Club",
					"entries": [
						"{@atk mw} {@hit 4} to hit, reach 5 ft., one target. {@h}4 ({@damage 1d4 + 2}) bludgeoning damage."
					]
				}
			],
			"reaction": [
				{
					"name": "Vengeful Strike",
					"entries": [
						"In response to a gnoll being reduced to 0 hit points within 30 feet of the witherling, the witherling makes a melee attack."
					]
				}
			],
			"environment": [
				"grassland",
				"forest",
				"hill",
				"arctic"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/gnoll-witherling.mp3"
			},
			"traitTags": [
				"Rampage"
			],
			"senseTags": [
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
				"B",
				"P"
			],
			"miscTags": [
				"MW"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Green Guard Drake",
			"source": "VGM",
			"page": 158,
			"size": "M",
			"type": "dragon",
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
				"average": 52,
				"formula": "7d8 + 21"
			},
			"speed": {
				"walk": 30,
				"swim": 30
			},
			"str": 16,
			"dex": 11,
			"con": 16,
			"int": 4,
			"wis": 10,
			"cha": 7,
			"skill": {
				"perception": "+2"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 12,
			"resist": [
				"poison"
			],
			"languages": [
				"understands Draconic but can't speak it"
			],
			"cr": "2",
			"trait": [
				{
					"name": "Amphibious",
					"entries": [
						"The guard drake can breathe air and water."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The drake attacks twice, once with its bite and once with its tail."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 5} to hit, reach 5 ft., one target. {@h}7 ({@damage 1d8 + 3}) piercing damage."
					]
				},
				{
					"name": "Tail",
					"entries": [
						"{@atk mw} {@hit 5} to hit, reach 5 ft., one target. {@h}6 ({@damage 1d6 + 3}) bludgeoning damage."
					]
				}
			],
			"environment": [
				"forest",
				"urban"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/guard-drake.mp3"
			},
			"traitTags": [
				"Amphibious"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"CS",
				"DR"
			],
			"damageTags": [
				"B",
				"P"
			],
			"miscTags": [
				"MW"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Grung",
			"source": "VGM",
			"page": 156,
			"otherSources": [
				{
					"source": "ToA"
				}
			],
			"size": "S",
			"type": {
				"type": "humanoid",
				"tags": [
					"grung"
				]
			},
			"alignment": [
				"L",
				"E"
			],
			"ac": [
				12
			],
			"hp": {
				"average": 11,
				"formula": "2d6 + 4"
			},
			"speed": {
				"walk": 25,
				"climb": 25
			},
			"str": 7,
			"dex": 14,
			"con": 15,
			"int": 10,
			"wis": 11,
			"cha": 10,
			"save": {
				"dex": "+4"
			},
			"skill": {
				"athletics": "+2",
				"perception": "+2",
				"stealth": "+4",
				"survival": "+2"
			},
			"passive": 12,
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"poisoned"
			],
			"languages": [
				"Grung"
			],
			"cr": "1/4",
			"trait": [
				{
					"name": "Amphibious",
					"entries": [
						"The grung can breathe air and water."
					]
				},
				{
					"name": "Poisonous Skin",
					"entries": [
						"Any creature that grapples the grung or otherwise comes into direct contact with the grung's skin must succeed on a {@dc 12} Constitution saving throw or become {@condition poisoned} for 1 minute. A {@condition poisoned} creature no longer in direct contact with the grung can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
					]
				},
				{
					"name": "Standing Leap",
					"entries": [
						"The grung's long jump is up to 25 feet and its high jump is up to 15 feet, with or without a running start."
					]
				}
			],
			"action": [
				{
					"name": "Dagger",
					"entries": [
						"{@atk mw,rw} {@hit 4} to hit, reach 5 ft. or range 20/60 ft., one target. {@h}4 ({@damage 1d4 + 2}) piercing damage, and the target must succeed on a {@dc 12} Constitution saving throw or take 5 ({@damage 2d4}) poison damage."
					]
				}
			],
			"variant": [
				{
					"type": "variant",
					"name": "Grung Poison",
					"entries": [
						"Grung poison loses its potency 1 minute after being removed from a grung. A similar breakdown occurs if the grung dies. A creature {@condition poisoned} by a grung can suffer an additional effect that varies depending on the grung's skin color. This effect lasts until the creature is no longer {@condition poisoned} by the grung.",
						{
							"type": "entries",
							"name": "Green",
							"entries": [
								"The {@condition poisoned} creature can't move except to climb or make standing jumps. If the creature is flying, it can't take any actions or reactions unless it lands."
							]
						},
						{
							"type": "entries",
							"name": "Blue",
							"entries": [
								"The {@condition poisoned} creature must shout loudly or otherwise make a loud noise at the start and end of its turn."
							]
						},
						{
							"type": "entries",
							"name": "Purple",
							"entries": [
								"The {@condition poisoned} creature feels a desperate need to soak itself in liquid or mud. It can't take actions or move except to do so or to reach a body of liquid or mud."
							]
						},
						{
							"type": "entries",
							"name": "Red",
							"entries": [
								"The {@condition poisoned} creature must use its action to eat if food is within reach."
							]
						},
						{
							"type": "entries",
							"name": "Orange",
							"entries": [
								"The {@condition poisoned} creature is {@condition frightened} of its allies."
							]
						},
						{
							"type": "entries",
							"name": "Gold",
							"entries": [
								"The {@condition poisoned} creature is {@condition charmed} and can speak Grung."
							]
						}
					]
				}
			],
			"environment": [
				"forest"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/grung.mp3"
			},
			"traitTags": [
				"Amphibious"
			],
			"languageTags": [
				"OTH"
			],
			"damageTags": [
				"I",
				"P"
			],
			"miscTags": [
				"MW",
				"RW",
				"THW"
			],
			"conditionInflict": [
				"charmed",
				"frightened",
				"poisoned"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Grung Elite Warrior",
			"source": "VGM",
			"page": 157,
			"otherSources": [
				{
					"source": "ToA"
				}
			],
			"size": "S",
			"type": {
				"type": "humanoid",
				"tags": [
					"grung"
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
				"average": 49,
				"formula": "9d6 + 18"
			},
			"speed": {
				"walk": 25,
				"climb": 25
			},
			"str": 7,
			"dex": 16,
			"con": 15,
			"int": 10,
			"wis": 11,
			"cha": 12,
			"save": {
				"dex": "+5"
			},
			"skill": {
				"athletics": "+2",
				"perception": "+2",
				"stealth": "+5",
				"survival": "+2"
			},
			"passive": 12,
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"poisoned"
			],
			"languages": [
				"Grung"
			],
			"cr": "2",
			"trait": [
				{
					"name": "Amphibious",
					"entries": [
						"The grung can breathe air and water."
					]
				},
				{
					"name": "Poisonous Skin",
					"entries": [
						"Any creature that grapples the grung or otherwise comes into direct contact with the grung's skin must succeed on a {@dc 12} Constitution saving throw or become {@condition poisoned} for 1 minute. A {@condition poisoned} creature no longer in direct contact with the grung can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
					]
				},
				{
					"name": "Standing Leap",
					"entries": [
						"The grung's long jump is up to 25 feet and its high jump is up to 15 feet, with or without a running start."
					]
				}
			],
			"action": [
				{
					"name": "Dagger",
					"entries": [
						"{@atk mw,rw} {@hit 5} to hit, reach 5 ft. or range 20/60 ft., one target. {@h}5 ({@damage 1d4 + 3}) piercing damage, and the target must succeed on a {@dc 12} Constitution saving throw or take 5 ({@damage 2d4}) poison damage."
					]
				},
				{
					"name": "Shortbow",
					"entries": [
						"{@atk rw} {@hit 5} to hit, range 80/320 ft., one target. {@h}6 ({@damage 1d6 + 3}) piercing damage, and the target must succeed on a {@dc 12} Constitution saving throw or take 5 ({@damage 2d4}) poison damage."
					]
				},
				{
					"name": "Mesmerizing Chirr {@recharge}",
					"entries": [
						"The grung makes a chirring noise to which grungs are immune. Each humanoid or beast that is within 15 feet of the grung and able to hear it must succeed on a {@dc 12} Wisdom saving throw or be {@condition stunned} until the end of the grung's next turn."
					]
				}
			],
			"variant": [
				{
					"type": "variant",
					"name": "Grung Poison",
					"entries": [
						"Grung poison loses its potency 1 minute after being removed from a grung. A similar breakdown occurs if the grung dies. A creature {@condition poisoned} by a grung can suffer an additional effect that varies depending on the grung's skin color. This effect lasts until the creature is no longer {@condition poisoned} by the grung.",
						{
							"type": "entries",
							"name": "Green",
							"entries": [
								"The {@condition poisoned} creature can't move except to climb or make standing jumps. If the creature is flying, it can't take any actions or reactions unless it lands."
							]
						},
						{
							"type": "entries",
							"name": "Blue",
							"entries": [
								"The {@condition poisoned} creature must shout loudly or otherwise make a loud noise at the start and end of its turn."
							]
						},
						{
							"type": "entries",
							"name": "Purple",
							"entries": [
								"The {@condition poisoned} creature feels a desperate need to soak itself in liquid or mud. It can't take actions or move except to do so or to reach a body of liquid or mud."
							]
						},
						{
							"type": "entries",
							"name": "Red",
							"entries": [
								"The {@condition poisoned} creature must use its action to eat if food is within reach."
							]
						},
						{
							"type": "entries",
							"name": "Orange",
							"entries": [
								"The {@condition poisoned} creature is {@condition frightened} of its allies."
							]
						},
						{
							"type": "entries",
							"name": "Gold",
							"entries": [
								"The {@condition poisoned} creature is {@condition charmed} and can speak Grung."
							]
						}
					]
				}
			],
			"environment": [
				"forest"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/grung-elite-warrior.mp3"
			},
			"traitTags": [
				"Amphibious"
			],
			"languageTags": [
				"OTH"
			],
			"damageTags": [
				"I",
				"P"
			],
			"miscTags": [
				"MW",
				"RNG",
				"RW",
				"THW"
			],
			"conditionInflict": [
				"charmed",
				"frightened",
				"poisoned",
				"stunned"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Grung Wildling",
			"source": "VGM",
			"page": 157,
			"otherSources": [
				{
					"source": "ToA"
				}
			],
			"size": "S",
			"type": {
				"type": "humanoid",
				"tags": [
					"grung"
				]
			},
			"alignment": [
				"L",
				"E"
			],
			"ac": [
				13,
				{
					"ac": 16,
					"condition": "with {@spell barkskin}",
					"braces": true
				}
			],
			"hp": {
				"average": 27,
				"formula": "5d6 + 10"
			},
			"speed": {
				"walk": 25,
				"climb": 25
			},
			"str": 7,
			"dex": 16,
			"con": 15,
			"int": 10,
			"wis": 15,
			"cha": 11,
			"save": {
				"dex": "+5"
			},
			"skill": {
				"athletics": "+2",
				"perception": "+4",
				"stealth": "+5",
				"survival": "+4"
			},
			"passive": 14,
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"poisoned"
			],
			"languages": [
				"Grung"
			],
			"cr": "1",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The grung is a 9th-level spellcaster. Its spellcasting ability is Wisdom (spell save {@dc 12}, {@hit 4} to hit with spell attacks). It knows the following ranger spells:"
					],
					"spells": {
						"1": {
							"slots": 4,
							"spells": [
								"{@spell cure wounds}",
								"{@spell jump}"
							]
						},
						"2": {
							"slots": 3,
							"spells": [
								"{@spell barkskin}",
								"{@spell spike growth}"
							]
						},
						"3": {
							"slots": 2,
							"spells": [
								"{@spell plant growth}"
							]
						}
					},
					"ability": "wis"
				}
			],
			"trait": [
				{
					"name": "Amphibious",
					"entries": [
						"The grung can breathe air and water."
					]
				},
				{
					"name": "Poisonous Skin",
					"entries": [
						"Any creature that grapples the grung or otherwise comes into direct contact with the grung's skin must succeed on a {@dc 12} Constitution saving throw or become {@condition poisoned} for 1 minute. A {@condition poisoned} creature no longer in direct contact with the grung can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
					]
				},
				{
					"name": "Standing Leap",
					"entries": [
						"The grung's long jump is up to 25 feet and its high jump is up to 15 feet, with or without a running start."
					]
				}
			],
			"action": [
				{
					"name": "Dagger",
					"entries": [
						"{@atk mw,rw} {@hit 5} to hit, reach 5 ft. or range 20/60 ft., one target. {@h}5 ({@damage 1d4 + 3}) piercing damage, and the target must succeed on a {@dc 12} Constitution saving throw or take 5 ({@damage 2d4}) poison damage."
					]
				},
				{
					"name": "Shortbow",
					"entries": [
						"{@atk rw} {@hit 5} to hit, range 80/320 ft., one target. {@h}6 ({@damage 1d6 + 3}) piercing damage, and the target must succeed on a {@dc 12} Constitution saving throw or take 5 ({@damage 2d4}) poison damage."
					]
				}
			],
			"variant": [
				{
					"type": "variant",
					"name": "Grung Poison",
					"entries": [
						"Grung poison loses its potency 1 minute after being removed from a grung. A similar breakdown occurs if the grung dies. A creature {@condition poisoned} by a grung can suffer an additional effect that varies depending on the grung's skin color. This effect lasts until the creature is no longer {@condition poisoned} by the grung.",
						{
							"type": "entries",
							"name": "Green",
							"entries": [
								"The {@condition poisoned} creature can't move except to climb or make standing jumps. If the creature is flying, it can't take any actions or reactions unless it lands."
							]
						},
						{
							"type": "entries",
							"name": "Blue",
							"entries": [
								"The {@condition poisoned} creature must shout loudly or otherwise make a loud noise at the start and end of its turn."
							]
						},
						{
							"type": "entries",
							"name": "Purple",
							"entries": [
								"The {@condition poisoned} creature feels a desperate need to soak itself in liquid or mud. It can't take actions or move except to do so or to reach a body of liquid or mud."
							]
						},
						{
							"type": "entries",
							"name": "Red",
							"entries": [
								"The {@condition poisoned} creature must use its action to eat if food is within reach."
							]
						},
						{
							"type": "entries",
							"name": "Orange",
							"entries": [
								"The {@condition poisoned} creature is {@condition frightened} of its allies."
							]
						},
						{
							"type": "entries",
							"name": "Gold",
							"entries": [
								"The {@condition poisoned} creature is {@condition charmed} and can speak Grung."
							]
						}
					]
				}
			],
			"environment": [
				"forest"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/grung-wildling.mp3"
			},
			"traitTags": [
				"Amphibious"
			],
			"languageTags": [
				"OTH"
			],
			"damageTags": [
				"I",
				"P"
			],
			"spellcastingTags": [
				"CR"
			],
			"miscTags": [
				"MW",
				"RNG",
				"RW",
				"THW"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Hadrosaurus",
			"group": "Dinosaurs",
			"source": "VGM",
			"page": 140,
			"otherSources": [
				{
					"source": "ToA"
				}
			],
			"size": "L",
			"type": "beast",
			"alignment": [
				"U"
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
				"average": 19,
				"formula": "3d10 + 3"
			},
			"speed": {
				"walk": 40
			},
			"str": 15,
			"dex": 10,
			"con": 13,
			"int": 2,
			"wis": 10,
			"cha": 5,
			"skill": {
				"perception": "+2"
			},
			"passive": 12,
			"cr": "1/4",
			"action": [
				{
					"name": "Tail",
					"entries": [
						"{@atk mw} {@hit 4} to hit, reach 5 ft., one target. {@h}7 ({@damage 1d10 + 2}) bludgeoning damage."
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
				"path": "bestiary/hadrosaurus.mp3"
			},
			"damageTags": [
				"B"
			],
			"miscTags": [
				"MW"
			],
			"hasFluff": true
		},
		{
			"name": "Hobgoblin Devastator",
			"source": "VGM",
			"page": 161,
			"size": "M",
			"type": {
				"type": "humanoid",
				"tags": [
					"goblinoid"
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
						"{@item studded leather armor|phb}"
					]
				}
			],
			"hp": {
				"average": 45,
				"formula": "7d8 + 14"
			},
			"speed": {
				"walk": 30
			},
			"str": 13,
			"dex": 12,
			"con": 14,
			"int": 16,
			"wis": 13,
			"cha": 11,
			"skill": {
				"arcana": "+5"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 11,
			"languages": [
				"Common",
				"Goblin"
			],
			"cr": "4",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The hobgoblin is a 7th-level spellcaster. Its spellcasting ability is Intelligence (spell save {@dc 13}, {@hit 5} to hit with spell attacks). It has the following wizard spells prepared:"
					],
					"spells": {
						"0": {
							"spells": [
								"{@spell acid splash}",
								"{@spell fire bolt}",
								"{@spell ray of frost}",
								"{@spell shocking grasp}"
							]
						},
						"1": {
							"slots": 4,
							"spells": [
								"{@spell fog cloud}",
								"{@spell magic missile}",
								"{@spell thunderwave}"
							]
						},
						"2": {
							"slots": 3,
							"spells": [
								"{@spell gust of wind}",
								"{@spell Melf's acid arrow}",
								"{@spell scorching ray}"
							]
						},
						"3": {
							"slots": 3,
							"spells": [
								"{@spell fireball}",
								"{@spell fly}",
								"{@spell lightning bolt}"
							]
						},
						"4": {
							"slots": 1,
							"spells": [
								"{@spell ice storm}"
							]
						}
					},
					"ability": "int"
				}
			],
			"trait": [
				{
					"name": "Arcane Advantage",
					"entries": [
						"Once per turn, the hobgoblin can deal an extra 7 ({@dice 2d6}) damage to a creature it hits with a damaging spell attack if that target is within 5 feet of an ally of the hobgoblin and that ally isn't {@condition incapacitated}."
					]
				},
				{
					"name": "Army Arcana",
					"entries": [
						"When the hobgoblin casts a spell that causes damage or that forces other creatures to make a saving throw, it can choose itself and any number of allies to be immune to the damage caused by the spell and to succeed on the required saving throw."
					]
				}
			],
			"action": [
				{
					"name": "Quarterstaff",
					"entries": [
						"{@atk mw} {@hit 3} to hit, reach 5 ft., one target. {@h}4 ({@damage 1d6 + 1}) bludgeoning damage, or 5 ({@damage 1d8 + 1}) bludgeoning damage if used with two hands."
					]
				}
			],
			"environment": [
				"grassland",
				"forest",
				"hill"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/hobgoblin-devastator.mp3"
			},
			"senseTags": [
				"D"
			],
			"languageTags": [
				"C",
				"GO"
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
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Hobgoblin Iron Shadow",
			"source": "VGM",
			"page": 162,
			"size": "M",
			"type": {
				"type": "humanoid",
				"tags": [
					"goblinoid"
				]
			},
			"alignment": [
				"L",
				"E"
			],
			"ac": [
				15
			],
			"hp": {
				"average": 32,
				"formula": "5d8 + 10"
			},
			"speed": {
				"walk": 40
			},
			"str": 14,
			"dex": 16,
			"con": 15,
			"int": 14,
			"wis": 15,
			"cha": 11,
			"skill": {
				"acrobatics": "+5",
				"athletics": "+4",
				"stealth": "+5"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 12,
			"languages": [
				"Common",
				"Goblin"
			],
			"cr": "2",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The hobgoblin is a 2nd-level spellcaster. Its spellcasting ability is Intelligence (spell save {@dc 12}, {@hit 4} to hit with spell attacks). It has the following wizard spells prepared:"
					],
					"spells": {
						"0": {
							"spells": [
								"{@spell minor illusion}",
								"{@spell prestidigitation}",
								"{@spell true strike}"
							]
						},
						"1": {
							"slots": 3,
							"spells": [
								"{@spell charm person}",
								"{@spell disguise self}",
								"{@spell expeditious retreat}",
								"{@spell silent image}"
							]
						}
					},
					"ability": "int"
				}
			],
			"trait": [
				{
					"name": "Unarmored Defense",
					"entries": [
						"While the hobgoblin is wearing no armor and wielding no shield, its AC includes its Wisdom modifier."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The hobgoblin makes four attacks, each of which can be an unarmed strike or a dart attack. It can also use Shadow Jaunt once, either before or after one of the attacks."
					]
				},
				{
					"name": "Unarmed Strike",
					"entries": [
						"{@atk mw} {@hit 5} to hit, reach 5 ft., one target. {@h}5 ({@damage 1d4 + 3}) bludgeoning damage."
					]
				},
				{
					"name": "Dart",
					"entries": [
						"{@atk rw} {@hit 5} to hit, range 20/60 ft., one target. {@h}5 ({@damage 1d4 + 3}) piercing damage."
					]
				},
				{
					"name": "Shadow Jaunt",
					"entries": [
						"The hobgoblin magically teleports, along with any equipment it is wearing or carrying, up to 30 feet to an unoccupied space it can see. Both the space it is leaving and its destination must be in dim light or darkness."
					]
				}
			],
			"environment": [
				"grassland",
				"forest",
				"hill"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/hobgoblin-iron-shadow.mp3"
			},
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C",
				"GO"
			],
			"damageTags": [
				"B",
				"P"
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
			"name": "Illithilich",
			"alias": [
				"Mind Flayer Lich"
			],
			"source": "VGM",
			"page": 172,
			"size": "M",
			"type": "undead",
			"alignment": [
				"L",
				"NX",
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
				"average": 135,
				"formula": "18d8 + 54"
			},
			"speed": {
				"walk": 30
			},
			"str": 11,
			"dex": 16,
			"con": 16,
			"int": 20,
			"wis": 14,
			"cha": 16,
			"save": {
				"con": "+10",
				"int": "+12",
				"wis": "+9"
			},
			"skill": {
				"arcana": "+19",
				"history": "+12",
				"insight": "+9",
				"perception": "+9"
			},
			"senses": [
				"truesight 120 ft."
			],
			"passive": 19,
			"resist": [
				"cold",
				"lightning",
				"necrotic"
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
				"paralyzed",
				"poisoned"
			],
			"languages": [
				"Deep Speech",
				"Undercommon",
				"telepathy 120 ft."
			],
			"cr": "22",
			"spellcasting": [
				{
					"name": "Innate Spellcasting (Psionics)",
					"headerEntries": [
						"The illithilich's innate spellcasting ability is Intelligence (spell save {@dc 20}). It can innately cast the following spells, requiring no components."
					],
					"will": [
						"{@spell detect thoughts}",
						"{@spell levitate}"
					],
					"daily": {
						"1e": [
							"{@spell dominate monster}",
							"{@spell plane shift} (self only)"
						]
					},
					"ability": "int"
				},
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The illithilich is an 18th-level spellcaster. Its spellcasting ability is Intelligence (spell save {@dc 20}, {@hit 12} to hit with spell attacks). The lich has the following wizard spells prepared:"
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
								"{@spell detect magic}",
								"{@spell magic missile}",
								"{@spell shield}",
								"{@spell thunderwave}"
							]
						},
						"2": {
							"slots": 3,
							"spells": [
								"{@spell detect thoughts}",
								"{@spell invisibility}",
								"{@spell Melf's acid arrow}",
								"{@spell mirror image}"
							]
						},
						"3": {
							"slots": 3,
							"spells": [
								"{@spell animate dead}",
								"{@spell counterspell}",
								"{@spell dispel magic}",
								"{@spell fireball}"
							]
						},
						"4": {
							"slots": 3,
							"spells": [
								"{@spell blight}",
								"{@spell dimension door}"
							]
						},
						"5": {
							"slots": 3,
							"spells": [
								"{@spell cloudkill}",
								"{@spell scrying}"
							]
						},
						"6": {
							"slots": 1,
							"spells": [
								"{@spell disintegrate}",
								"{@spell globe of invulnerability}"
							]
						},
						"7": {
							"slots": 1,
							"spells": [
								"{@spell finger of death}",
								"{@spell plane shift}"
							]
						},
						"8": {
							"slots": 1,
							"spells": [
								"{@spell dominate monster}",
								"{@spell power word stun}"
							]
						},
						"9": {
							"slots": 1,
							"spells": [
								"{@spell power word kill}"
							]
						}
					},
					"ability": "int"
				}
			],
			"trait": [
				{
					"name": "Legendary Resistance (3/Day)",
					"entries": [
						"If the illithilich fails a saving throw, it can choose to succeed instead."
					]
				},
				{
					"name": "Rejuvenation",
					"entries": [
						"If it has a phylactery, a destroyed illithilich gains a new body in {@dice 1d10} days, regaining all its hit points and becoming active again. The new body appears within 5 feet of the phylactery."
					]
				},
				{
					"name": "Turn Resistance",
					"entries": [
						"The illithilich has advantage on saving throws against any effect that turns undead."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"The illithilich has advantage on saving throws against spells and other magical effects."
					]
				}
			],
			"action": [
				{
					"name": "Paralyzing Touch",
					"entries": [
						"{@atk ms} {@hit 12} to hit, reach 5 ft., one creature. {@h}10 ({@damage 3d6}) cold damage. The target must succeed on a {@dc 18} Constitution saving throw or be {@condition paralyzed} for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
					]
				},
				{
					"name": "Tentacles",
					"entries": [
						"{@atk mw} {@hit 12} to hit, reach 5 ft., one creature. {@h}21 ({@damage 3d10 + 5}) psychic damage. If the target is Large or smaller, it is {@condition grappled} (escape {@dc 15}) and must succeed on a {@dc 20} Intelligence saving throw or be {@condition stunned} until this grapple ends."
					]
				},
				{
					"name": "Extract Brain",
					"entries": [
						"{@atk mw} {@hit 12} to hit, reach 5 ft., one {@condition incapacitated} humanoid {@condition grappled} by the lich. {@h}55 ({@damage 10d10}) piercing damage. If this damage reduces the target to 0 hit points, the lich kills the target by extracting and devouring its brain."
					]
				},
				{
					"name": "Mind Blast {@recharge 5}",
					"entries": [
						"The illithilich magically emits psychic energy in a 60-foot cone. Each creature in that area must succeed on a {@dc 18} Intelligence saving throw or take 27 ({@damage 5d8 + 5}) psychic damage and be {@condition stunned} for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
					]
				}
			],
			"legendary": [
				{
					"name": "Tentacles",
					"entries": [
						"The illithilich makes one attack with its tentacles."
					]
				},
				{
					"name": "Extract Brain (Costs 2 Actions)",
					"entries": [
						"The illithilich uses Extract Brain."
					]
				},
				{
					"name": "Mind Blast (Costs 3 Actions)",
					"entries": [
						"The illithilich recharges its Mind Blast and uses it."
					]
				},
				{
					"name": "Cast Spell (Costs 1\u20133 Actions)",
					"entries": [
						"The illithilich uses a spell slot to cast a 1st-, 2nd-, or 3rd-level spell that it has prepared. Doing so costs 1 legendary action per level of the spell."
					]
				}
			],
			"legendaryGroup": {
				"name": "Illithilich",
				"source": "VGM"
			},
			"environment": [
				"underdark"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/mind-flayer-lich-illithilich.mp3"
			},
			"traitTags": [
				"Legendary Resistances",
				"Magic Resistance",
				"Rejuvenation",
				"Turn Resistance"
			],
			"senseTags": [
				"U"
			],
			"actionTags": [
				"Tentacles"
			],
			"languageTags": [
				"DS",
				"TP",
				"U"
			],
			"damageTags": [
				"C",
				"P",
				"Y"
			],
			"spellcastingTags": [
				"CW",
				"I",
				"P"
			],
			"miscTags": [
				"AOE",
				"MW"
			],
			"conditionInflict": [
				"grappled",
				"paralyzed",
				"stunned"
			],
			"conditionInflictSpell": [
				"charmed",
				"invisible",
				"stunned"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Illusionist",
			"source": "VGM",
			"page": 214,
			"otherSources": [
				{
					"source": "TftYP"
				}
			],
			"size": "M",
			"type": {
				"type": "humanoid",
				"tags": [
					"any race"
				]
			},
			"alignment": [
				"A"
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
				"average": 38,
				"formula": "7d8 + 7"
			},
			"speed": {
				"walk": 30
			},
			"str": 9,
			"dex": 14,
			"con": 13,
			"int": 16,
			"wis": 11,
			"cha": 12,
			"save": {
				"int": "+5",
				"wis": "+2"
			},
			"skill": {
				"arcana": "+5",
				"history": "+5"
			},
			"passive": 10,
			"languages": [
				"any four languages"
			],
			"cr": "3",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The illusionist is a 7th-level spellcaster. its spellcasting ability is Intelligence (spell save {@dc 13}, {@hit 5} to hit with spell attacks). The illusionist has the following wizard spells prepared:"
					],
					"spells": {
						"0": {
							"spells": [
								"{@spell dancing lights}",
								"{@spell mage hand}",
								"{@spell minor illusion}",
								"{@spell poison spray}"
							]
						},
						"1": {
							"slots": 4,
							"spells": [
								"{@spell color spray}*",
								"{@spell disguise self}*",
								"{@spell mage armor}",
								"{@spell magic missile}"
							]
						},
						"2": {
							"slots": 3,
							"spells": [
								"{@spell invisibility}*",
								"{@spell mirror image}*",
								"{@spell phantasmal force}*"
							]
						},
						"3": {
							"slots": 3,
							"spells": [
								"{@spell major image}*",
								"{@spell phantom steed}*"
							]
						},
						"4": {
							"slots": 1,
							"spells": [
								"{@spell phantasmal killer}*"
							]
						}
					},
					"footerEntries": [
						"*Illusion spell of 1st level or higher"
					],
					"ability": "int"
				}
			],
			"trait": [
				{
					"name": "Displacement (Recharges after the Illusionist Casts an Illusion Spell of 1st Level or Higher)",
					"entries": [
						"As a bonus action, the illusionist projects an illusion that makes the illusionist appear to be standing in a place a few inches from its actual location, causing any creature to have disadvantage on attack rolls against the illusionist. The effect ends if the illusionist takes damage, it is {@condition incapacitated}, or its speed becomes 0."
					]
				}
			],
			"action": [
				{
					"name": "Quarterstaff",
					"entries": [
						"{@atk mw} {@hit 1} to hit, reach 5 ft., one target. {@h}2 ({@damage 1d6 - 1}) bludgeoning damage, or 3 ({@damage 1d8 - 1}) bludgeoning damage if used with two hands."
					]
				}
			],
			"environment": [
				"urban"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/illusionist.mp3"
			},
			"languageTags": [
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
			"conditionInflictSpell": [
				"blinded",
				"frightened",
				"invisible"
			],
			"hasFluff": true
		},
		{
			"name": "Ki-rin",
			"source": "VGM",
			"page": 163,
			"size": "H",
			"type": "celestial",
			"alignment": [
				"L",
				"G"
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
				"average": 152,
				"formula": "16d12 + 48"
			},
			"speed": {
				"walk": 60,
				"fly": {
					"number": 120,
					"condition": "(hover)"
				},
				"canHover": true
			},
			"str": 21,
			"dex": 16,
			"con": 16,
			"int": 19,
			"wis": 20,
			"cha": 20,
			"skill": {
				"insight": "+9",
				"perception": "+9",
				"religion": "+8"
			},
			"senses": [
				"blindsight 30 ft.",
				"darkvision 120 ft."
			],
			"passive": 19,
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
			"cr": "12",
			"spellcasting": [
				{
					"name": "Innate Spellcasting",
					"headerEntries": [
						"The ki-rin's innate spellcasting ability is Charisma (spell save {@dc 17}). The ki-rin can innately cast the following spells, requiring no material components:"
					],
					"will": [
						"{@spell gaseous form}",
						"{@spell major image} (6th-level version)",
						"{@spell wind walk}"
					],
					"daily": {
						"1": [
							"{@spell create food and water}"
						]
					},
					"ability": "cha"
				},
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The ki-rin is a 18th-level spellcaster. Its spellcasting ability is Wisdom (spell save {@dc 17}, {@hit 9} to hit with spell attacks). It has the following cleric spells prepared:"
					],
					"spells": {
						"0": {
							"spells": [
								"{@spell light}",
								"{@spell mending}",
								"{@spell sacred flame}",
								"{@spell spare the dying}",
								"{@spell thaumaturgy}"
							]
						},
						"1": {
							"slots": 4,
							"spells": [
								"{@spell command}",
								"{@spell cure wounds}",
								"{@spell detect evil and good}",
								"{@spell protection from evil and good}",
								"{@spell sanctuary}"
							]
						},
						"2": {
							"slots": 3,
							"spells": [
								"{@spell calm emotions}",
								"{@spell lesser restoration}",
								"{@spell silence}"
							]
						},
						"3": {
							"slots": 3,
							"spells": [
								"{@spell dispel magic}",
								"{@spell remove curse}",
								"{@spell sending}"
							]
						},
						"4": {
							"slots": 3,
							"spells": [
								"{@spell banishment}",
								"{@spell freedom of movement}",
								"{@spell guardian of faith}"
							]
						},
						"5": {
							"slots": 3,
							"spells": [
								"{@spell greater restoration}",
								"{@spell mass cure wounds}",
								"{@spell scrying}"
							]
						},
						"6": {
							"slots": 1,
							"spells": [
								"{@spell heroes' feast}",
								"{@spell true seeing}"
							]
						},
						"7": {
							"slots": 1,
							"spells": [
								"{@spell etherealness}",
								"{@spell plane shift}"
							]
						},
						"8": {
							"slots": 1,
							"spells": [
								"{@spell control weather}"
							]
						},
						"9": {
							"slots": 1,
							"spells": [
								"{@spell true resurrection}"
							]
						}
					},
					"ability": "wis"
				}
			],
			"trait": [
				{
					"name": "Legendary Resistance (3/Day)",
					"entries": [
						"If the ki-rin fails a saving throw, it can choose to succeed instead."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"The ki-rin has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Magic Weapons",
					"entries": [
						"The ki-rin's weapon attacks are magical."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The ki-rin makes three attacks: two with its hooves and one with its horn."
					]
				},
				{
					"name": "Hoof",
					"entries": [
						"{@atk mw} {@hit 9} to hit, reach 15 ft., one target. {@h}10 ({@damage 2d4 + 5}) bludgeoning damage."
					]
				},
				{
					"name": "Horn",
					"entries": [
						"{@atk mw} {@hit 9} to hit, reach 5 ft., one target. {@h}14 ({@damage 2d8 + 5}) piercing damage."
					]
				}
			],
			"legendary": [
				{
					"name": "Detect",
					"entries": [
						"The ki-rin makes a Wisdom ({@skill Perception}) check or a Wisdom ({@skill Insight}) check."
					]
				},
				{
					"name": "Smite",
					"entries": [
						"The ki-rin makes a hoof attack or casts sacred flame."
					]
				},
				{
					"name": "Move",
					"entries": [
						"The ki-rin moves up to its half its speed without provoking opportunity attacks."
					]
				}
			],
			"legendaryGroup": {
				"name": "Ki-rin",
				"source": "VGM"
			},
			"environment": [
				"mountain",
				"grassland",
				"desert",
				"coastal"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/ki-rin.mp3"
			},
			"traitTags": [
				"Legendary Resistances",
				"Magic Resistance",
				"Magic Weapons"
			],
			"senseTags": [
				"B",
				"SD"
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
				"CC",
				"I"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Kobold Dragonshield",
			"source": "VGM",
			"page": 165,
			"otherSources": [
				{
					"source": "DIP"
				},
				{
					"source": "SLW"
				}
			],
			"size": "S",
			"type": {
				"type": "humanoid",
				"tags": [
					"kobold"
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
						"{@item leather armor|phb}",
						"{@item shield|phb}"
					]
				}
			],
			"hp": {
				"average": 44,
				"formula": "8d6 + 16"
			},
			"speed": {
				"walk": 20
			},
			"str": 12,
			"dex": 15,
			"con": 14,
			"int": 8,
			"wis": 9,
			"cha": 10,
			"skill": {
				"perception": "+1"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 11,
			"languages": [
				"Common",
				"Draconic"
			],
			"cr": "1",
			"trait": [
				{
					"name": "Dragon's Resistance",
					"entries": [
						"The kobold has resistance to a type of damage based on the color of dragon that invested it with power (choose or roll a {@dice d10}): 1\u20132, acid (black); 3\u20134, cold (white); 5\u20136, fire (red); 7\u20138, lightning (blue); 9\u201310, poison (green)."
					]
				},
				{
					"name": "Heart of the Dragon",
					"entries": [
						"If the kobold is {@condition frightened} or {@condition paralyzed} by an effect that allows a saving throw, it can repeat the save at the start of its turn to end the effect on itself and all kobolds within 30 feet of it. Any kobold that benefits from this trait (including the dragonshield) has advantage on its next attack roll."
					]
				},
				{
					"name": "Pack Tactics",
					"entries": [
						"The kobold has advantage on an attack roll against a creature if at least one of the kobold's allies is within 5 feet of the creature and the ally isn't {@condition incapacitated}."
					]
				},
				{
					"name": "Sunlight Sensitivity",
					"entries": [
						"While in sunlight, the kobold has disadvantage on attack rolls, as well as on Wisdom ({@skill Perception}) checks that rely on sight."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The kobold makes two melee attacks."
					]
				},
				{
					"name": "Spear",
					"entries": [
						"{@atk mw,rw} {@hit 3} to hit, reach 5 ft. or range 20/60 ft., one target. {@h}4 ({@damage 1d6 + 1}) piercing damage, or 5 ({@damage 1d8 + 1}) piercing damage if used with two hands to make a melee attack."
					]
				}
			],
			"environment": [
				"underdark",
				"mountain",
				"forest",
				"hill"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/kobold-dragonshield.mp3"
			},
			"traitTags": [
				"Pack Tactics",
				"Sunlight Sensitivity"
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
			"name": "Kobold Inventor",
			"source": "VGM",
			"page": 166,
			"otherSources": [
				{
					"source": "ToA"
				}
			],
			"size": "S",
			"type": {
				"type": "humanoid",
				"tags": [
					"kobold"
				]
			},
			"alignment": [
				"L",
				"E"
			],
			"ac": [
				12
			],
			"hp": {
				"average": 13,
				"formula": "3d6 + 3"
			},
			"speed": {
				"walk": 30
			},
			"str": 7,
			"dex": 15,
			"con": 12,
			"int": 8,
			"wis": 7,
			"cha": 8,
			"skill": {
				"perception": "+0"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 10,
			"languages": [
				"Common",
				"Draconic"
			],
			"cr": "1/4",
			"trait": [
				{
					"name": "Sunlight Sensitivity",
					"entries": [
						"While in sunlight, the kobold has disadvantage on attack rolls, as well as on Wisdom ({@skill Perception}) checks that rely on sight."
					]
				},
				{
					"name": "Pack Tactics",
					"entries": [
						"The kobold has advantage on an attack roll against a creature if at least one of the kobold's allies is within 5 feet of the creature and the ally isn't {@condition incapacitated}."
					]
				}
			],
			"action": [
				{
					"name": "Dagger",
					"entries": [
						"{@atk mw,rw} {@hit 4} to hit, reach 5 ft. or range 20/60 ft., one target. {@h}4 ({@damage 1d4 + 2}) piercing damage."
					]
				},
				{
					"name": "Sling",
					"entries": [
						"{@atk rw} {@hit 4} to hit, range 30/120 ft., one target. {@h}4 ({@damage 1d4 + 2}) bludgeoning damage."
					]
				},
				{
					"name": "Weapon Invention",
					"entries": [
						"The kobold uses one of the following options (roll a {@dice d8} or choose one); the kobold can use each one no more than once per day:",
						{
							"type": "list",
							"style": "list-hang-notitle",
							"items": [
								{
									"type": "item",
									"name": "1. Acid.",
									"style": "italic",
									"entry": "The kobold hurls a flask of {@item Acid (vial)|phb|acid}. {@atk rw} {@hit 4} to hit, range 5/20 ft., one target. {@h}7 ({@damage 2d6}) acid damage."
								},
								{
									"type": "item",
									"name": "2. Alchemist's fire.",
									"style": "italic",
									"entry": "The kobold throws a flask of {@item Alchemist's Fire (flask)|phb|alchemist's fire}. {@atk rw} {@hit 4} to hit, range 5/20 ft., one target. {@h}2 ({@damage 1d4}) fire damage at the start of each of the target's turns. A creature can end this damage by using its action to make a {@dc 10} Dexterity check to extinguish the flames."
								},
								{
									"type": "item",
									"name": "3. Basket of Centipedes.",
									"style": "italic",
									"entry": "The kobold throws a small basket into a 5-foot-square space within 20 feet of it. A {@creature swarm of centipedes||swarm of insects (centipedes)} with 11 hit points emerges from the basket and rolls initiative. At the end of each of the swarm's turns, there's a {@chance 50} chance that the swarm disperses."
								},
								{
									"type": "item",
									"name": "4. Green Slime Pot.",
									"style": "italic",
									"entry": "The kobold throws a clay pot full of green slime at the target, and it breaks open on impact. {@atk rw} {@hit 4} to hit, range 5/20 ft., one target. {@h}The target is covered in a patch of {@hazard green slime} (see chapter 5 of the Dungeon Master's Guide). Miss: A patch of green slime covers a randomly determined 5-foot-square section of wall or floor within 5 feet of the target."
								},
								{
									"type": "item",
									"name": "5. Rot Grub Pot.",
									"style": "italic",
									"entry": "The kobold throws a clay pot into a 5-foot-square space within 20 feet of it, and it breaks open on impact. A {@creature Swarm of Rot Grubs|vgm|swarm of rot grubs} (see appendix A) emerges from the shattered pot and remains a hazard in that square."
								},
								{
									"type": "item",
									"name": "6. Scorpion on a Stick.",
									"style": "italic",
									"entry": "The kobold makes a melee attack with a scorpion tied to the end of a 5-foot-long pole. {@atk mw} {@hit 4} to hit, reach 5 ft., one target. {@h}1 piercing damage, and the target must make a {@dc 9} Constitution saving throw, taking 4 ({@damage 1d8}) poison damage on a failed save, or half as much damage on a successful one."
								},
								{
									"type": "item",
									"name": "7. Skunk in a Cage.",
									"style": "italic",
									"entry": "The kobold releases a skunk into an unoccupied space within 5 feet of it. The skunk has a walking speed of 20 feet, AC 10, 1 hit point, and no effective attacks. It rolls initiative and, on its turn, uses its action to spray musk at a random creature within 5 feet of it. The target must make a {@dc 9} Constitution saving throw. On a failed save, the target retches and can't take actions for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. A creature that doesn't need to breathe or is immune to poison automatically succeeds on the saving throw. Once the skunk has sprayed its musk, it can't do so again until it finishes a short or long rest."
								},
								{
									"type": "item",
									"name": "8. Wasp Nest in a Bag.",
									"style": "italic",
									"entry": "The kobold throws a small bag into a 5-foot-square space within 20 feet of it. A {@creature swarm of wasps||swarm of insects (wasps)} with 11 hit points emerges from the bag and rolls initiative. At the end of each of the swarm's turns, there's a {@chance 50} chance that the swarm disperses."
								}
							]
						}
					]
				}
			],
			"environment": [
				"underdark",
				"mountain",
				"forest",
				"hill",
				"urban"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/kobold-inventor.mp3"
			},
			"traitTags": [
				"Pack Tactics",
				"Sunlight Sensitivity"
			],
			"senseTags": [
				"D"
			],
			"languageTags": [
				"C",
				"DR"
			],
			"damageTags": [
				"A",
				"B",
				"F",
				"I",
				"P"
			],
			"miscTags": [
				"MW",
				"RNG",
				"RW",
				"THW"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Kobold Scale Sorcerer",
			"source": "VGM",
			"page": 167,
			"otherSources": [
				{
					"source": "ToA"
				}
			],
			"size": "S",
			"type": {
				"type": "humanoid",
				"tags": [
					"kobold"
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
				"average": 27,
				"formula": "5d6 + 10"
			},
			"speed": {
				"walk": 30
			},
			"str": 7,
			"dex": 15,
			"con": 14,
			"int": 10,
			"wis": 9,
			"cha": 14,
			"skill": {
				"arcana": "+2",
				"medicine": "+1"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 9,
			"languages": [
				"Common",
				"Draconic"
			],
			"cr": "1",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The kobold is a 3rd-level spellcaster. Its spellcasting ability is Charisma (spell save {@dc 12}, {@hit 4} to hit with spell attacks). It has the following sorcerer spells prepared:"
					],
					"spells": {
						"0": {
							"spells": [
								"{@spell fire bolt}",
								"{@spell mage hand}",
								"{@spell mending}",
								"{@spell poison spray}"
							]
						},
						"1": {
							"slots": 4,
							"spells": [
								"{@spell charm person}",
								"{@spell chromatic orb}",
								"{@spell expeditious retreat}"
							]
						},
						"2": {
							"slots": 2,
							"spells": [
								"{@spell scorching ray}"
							]
						}
					},
					"ability": "cha"
				}
			],
			"trait": [
				{
					"name": "Sorcery Points",
					"entries": [
						"The kobold has 3 sorcery points. It regains all its spent sorcery points when it finishes a long rest. It can spend its sorcery points on the following options:",
						"Heightened Spell: When it casts a spell that forces a creature to a saving throw to resist the spell's effects, the kobold can spend 3 sorcery points to give one target of the spell disadvantage on its first saving throw against the spell.",
						"Subtle Spell: When the kobold casts a spell, it can spend 1 sorcery point to cast the spell without any somatic or verbal components."
					]
				},
				{
					"name": "Pack Tactics",
					"entries": [
						"The kobold has advantage on an attack roll against a creature it at least one of the kobold's allies is within 5 feet of the creature and the ally isn't {@condition incapacitated}."
					]
				},
				{
					"name": "Sunlight Sensitivity",
					"entries": [
						"While in sunlight, the kobold has disadvantage on attack rolls, as well as on Wisdom ({@skill Perception}) checks that rely on sight."
					]
				}
			],
			"action": [
				{
					"name": "Dagger",
					"entries": [
						"{@atk mw,rw} {@hit 4} to hit, reach 5 ft. or range 20/60 ft., one target. {@h}4 ({@damage 1d4 + 2}) piercing damage."
					]
				}
			],
			"environment": [
				"underdark",
				"mountain",
				"forest",
				"hill",
				"urban"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/kobold-scale-sorcerer.mp3"
			},
			"traitTags": [
				"Pack Tactics",
				"Sunlight Sensitivity"
			],
			"senseTags": [
				"D"
			],
			"languageTags": [
				"C",
				"DR"
			],
			"damageTags": [
				"P"
			],
			"spellcastingTags": [
				"CS"
			],
			"miscTags": [
				"MW",
				"RW",
				"THW"
			],
			"conditionInflictSpell": [
				"charmed"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Korred",
			"source": "VGM",
			"page": 168,
			"size": "S",
			"type": "fey",
			"alignment": [
				"C",
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
				"average": 102,
				"formula": "12d6 + 60"
			},
			"speed": {
				"walk": 30,
				"burrow": 30
			},
			"str": 23,
			"dex": 14,
			"con": 20,
			"int": 10,
			"wis": 15,
			"cha": 9,
			"skill": {
				"athletics": "+9",
				"perception": "+5",
				"stealth": "+5"
			},
			"senses": [
				"darkvision 120 ft.",
				"tremorsense 120 ft."
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
			"languages": [
				"Dwarvish",
				"Gnomish",
				"Sylvan",
				"Terran",
				"Undercommon"
			],
			"cr": "7",
			"spellcasting": [
				{
					"name": "Innate Spellcasting",
					"headerEntries": [
						"The korred's innate spellcasting ability is Wisdom (save {@dc 13}). It can innately cast the following spells, requiring no components:"
					],
					"will": [
						"{@spell commune with nature}",
						"{@spell meld into stone}",
						"{@spell stone shape}"
					],
					"daily": {
						"1e": [
							"{@spell conjure elemental} (as 6th-level spell; {@creature galeb duhr}, {@creature gargoyle}, {@creature earth elemental}, or {@creature xorn} only)",
							"{@spell Otto's irresistible dance}"
						]
					},
					"ability": "wis"
				}
			],
			"trait": [
				{
					"name": "Command Hair",
					"entries": [
						"The korred has at least one 50-foot-long rope woven out of its hair. As a bonus action, the korred commands one such rope within 30 feet of it to move up to 20 feet and entangle a Large or smaller creature that the korred can see. The target must succeed on a {@dc 13} Dexterity saving throw or become {@condition grappled} by the rope (escape {@dc 13}). Until this grapple ends. the target is {@condition restrained}. The korred can use a bonus action to release the target, which is also freed if the korred dies or becomes {@condition incapacitated}.",
						"A rope of korred hair has AC 20 and 20 hit points. It regains 1 hit point at the start of each of the korred's turns while it has at least 1 hit point and the korred is alive. If the rope drops to 0 hit points, it is destroyed."
					]
				},
				{
					"name": "Stone Camouflage",
					"entries": [
						"The korred has advantage on Dexterity (Stealth) checks made to hide in rocky terrain."
					]
				},
				{
					"name": "Stone's Strength",
					"entries": [
						"While on the ground, the korred deals 2 extra dice of damage with any weapon attack (included in its attacks)."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The korred makes two attacks with its greatclub or hurls two rocks."
					]
				},
				{
					"name": "Greatclub",
					"entries": [
						"{@atk mw} {@hit 9} to hit, reach 5 ft., one target. {@h}10 ({@damage 1d8 + 6}) bludgeoning damage, or 19 ({@damage 3d8 + 6}) bludgeoning damage if the korred is on the ground."
					]
				},
				{
					"name": "Rock",
					"entries": [
						"{@atk rw} {@hit 9} to hit, range 60/120 ft., one target. {@h}15 ({@damage 2d8 + 6}) bludgeoning damage, or 24 ({@damage 4d8 + 6}) bludgeoning damage if the korred is on the ground."
					]
				}
			],
			"environment": [
				"forest"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/korred.mp3"
			},
			"senseTags": [
				"SD",
				"T"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"D",
				"G",
				"S",
				"T",
				"U"
			],
			"damageTags": [
				"B"
			],
			"spellcastingTags": [
				"I"
			],
			"miscTags": [
				"MW",
				"RW"
			],
			"conditionInflict": [
				"grappled",
				"restrained"
			],
			"conditionInflictSpell": [
				"prone"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Kraken Priest",
			"source": "VGM",
			"page": 215,
			"otherSources": [
				{
					"source": "GoS"
				},
				{
					"source": "DIP"
				},
				{
					"source": "SLW"
				},
				{
					"source": "LR"
				}
			],
			"size": "M",
			"type": {
				"type": "humanoid",
				"tags": [
					"any race"
				]
			},
			"alignment": [
				"L",
				"NX",
				"C",
				"E"
			],
			"ac": [
				10
			],
			"hp": {
				"average": 75,
				"formula": "10d8 + 30"
			},
			"speed": {
				"walk": 30,
				"swim": 30
			},
			"str": 12,
			"dex": 10,
			"con": 16,
			"int": 10,
			"wis": 15,
			"cha": 14,
			"skill": {
				"perception": "+5"
			},
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
			"languages": [
				"any two languages"
			],
			"cr": "5",
			"spellcasting": [
				{
					"name": "Innate Spellcasting",
					"headerEntries": [
						"The priest's spellcasting ability is Wisdom (spell save {@dc 13}, {@hit 5} to hit with spell attacks). It can innately cast the following spells, requiring no material components:"
					],
					"will": [
						"{@spell command}",
						"{@spell create or destroy water}"
					],
					"daily": {
						"3e": [
							"{@spell control water}",
							"{@spell darkness}",
							"{@spell water breathing}",
							"{@spell water walk}"
						],
						"1e": [
							"{@spell call lightning}",
							"{@spell Evard's black tentacles}"
						]
					},
					"ability": "wis"
				}
			],
			"trait": [
				{
					"name": "Amphibious",
					"entries": [
						"The priest can breathe air and water."
					]
				}
			],
			"action": [
				{
					"name": "Thunderous Touch",
					"entries": [
						"{@atk ms} {@hit 5} to hit, reach 5 ft., one creature. {@h}27 ({@damage 5d10}) thunder damage."
					]
				},
				{
					"name": "Voice of the Kraken (Recharges after a Short or Long Rest)",
					"entries": [
						"A kraken speaks through the priest with a thunderous voice audible within 300 feet. Creatures of the priest's choice that can hear the kraken's words (which are spoken in Abyssal, Infernal, or Primordial) must succeed on a {@dc 14} Charisma saving throw or be {@condition frightened} for 1 minute. A {@condition frightened} target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
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
				"path": "bestiary/kraken-priest.mp3"
			},
			"traitTags": [
				"Amphibious"
			],
			"languageTags": [
				"X"
			],
			"damageTags": [
				"T"
			],
			"spellcastingTags": [
				"I"
			],
			"conditionInflict": [
				"frightened"
			],
			"conditionInflictSpell": [
				"prone",
				"restrained"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Leucrotta",
			"source": "VGM",
			"page": 169,
			"otherSources": [
				{
					"source": "TftYP"
				},
				{
					"source": "MOT"
				}
			],
			"size": "L",
			"type": "monstrosity",
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
				"average": 67,
				"formula": "9d10 + 18"
			},
			"speed": {
				"walk": 50
			},
			"str": 18,
			"dex": 14,
			"con": 15,
			"int": 9,
			"wis": 12,
			"cha": 6,
			"skill": {
				"deception": "+2",
				"perception": "+3"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 13,
			"languages": [
				"Abyssal",
				"Gnoll"
			],
			"cr": "3",
			"trait": [
				{
					"name": "Keen Smell",
					"entries": [
						"The leucrotta has advantage on Wisdom ({@skill Perception}) checks that rely on smell."
					]
				},
				{
					"name": "Kicking Retreat",
					"entries": [
						"If the leucrotta attacks with its hooves, it can take the Disengage action as a bonus action."
					]
				},
				{
					"name": "Mimicry",
					"entries": [
						"The leucrotta can mimic animal sounds and humanoid voices. A creature that hears the sounds can tell they are imitations with a successful {@dc 14} Wisdom (Insight) check."
					]
				},
				{
					"name": "Rampage",
					"entries": [
						"When the leucrotta reduces a creature to 0 hit points with a melee attack on its turn, it can take a bonus action to move up to half its speed and make an attack with its hooves."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The leucrotta makes two attacks: one with its bite and one with its hooves."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 6} to hit, reach 5 ft., one target. {@h}8 ({@damage 1d8 + 4}) piercing damage. If the leucrotta scores a critical hit, it rolls the damage dice three times, instead of twice."
					]
				},
				{
					"name": "Hooves",
					"entries": [
						"{@atk mw} {@hit 6} to hit, reach 5 ft., one target. {@h}11 ({@damage 2d6 + 4}) bludgeoning damage."
					]
				}
			],
			"environment": [
				"grassland",
				"desert"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/leucrotta.mp3"
			},
			"traitTags": [
				"Keen Senses",
				"Rampage"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"AB",
				"OTH"
			],
			"damageTags": [
				"B",
				"P"
			],
			"miscTags": [
				"MW"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Martial Arts Adept",
			"source": "VGM",
			"page": 216,
			"otherSources": [
				{
					"source": "WDH"
				},
				{
					"source": "TftYP"
				},
				{
					"source": "ToA"
				}
			],
			"size": "M",
			"type": {
				"type": "humanoid",
				"tags": [
					"any race"
				]
			},
			"alignment": [
				"A"
			],
			"ac": [
				16
			],
			"hp": {
				"average": 60,
				"formula": "11d8 + 11"
			},
			"speed": {
				"walk": 40
			},
			"str": 11,
			"dex": 17,
			"con": 13,
			"int": 11,
			"wis": 16,
			"cha": 10,
			"skill": {
				"acrobatics": "+5",
				"insight": "+5",
				"stealth": "+5"
			},
			"passive": 13,
			"languages": [
				"any one language (usually Common)"
			],
			"cr": "3",
			"trait": [
				{
					"name": "Unarmored Defense",
					"entries": [
						"While the adept is wearing no armor and wielding no shield, its AC includes its Wisdom modifier."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The adept makes three unarmed strikes or three dart attacks."
					]
				},
				{
					"name": "Unarmed Strike",
					"entries": [
						"{@atk mw} {@hit 5} to hit, reach 5 ft., one target. {@h}7 ({@damage 1d8 + 3}) bludgeoning damage. If the target is a creature, the adept can choose one of the following additional effects:",
						{
							"type": "list",
							"items": [
								"The target must succeed on a {@dc 13} Strength saving throw or drop one item it is holding (adept's choice).",
								"The target must succeed on a {@dc 13} Dexterity saving throw or be knocked {@condition prone}.",
								"The target must succeed on a {@dc 13} Constitution saving throw or be {@condition stunned} until the end of the adept's next turn."
							]
						}
					]
				},
				{
					"name": "Dart",
					"entries": [
						"{@atk rw} {@hit 5} to hit, range 20/60 ft., one target. {@h}5 ({@damage 1d4 + 3}) piercing damage."
					]
				}
			],
			"reaction": [
				{
					"name": "Deflect Missile",
					"entries": [
						"In response to being hit by a ranged weapon attack, the adept deflects the missile. The damage it takes from the attack is reduced by {@dice 1d10 + 3}. If the damage is reduced to 0, the adept catches the missile if it's small enough to hold in one hand and the adept has a hand free."
					]
				}
			],
			"environment": [
				"urban"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/martial-arts-adept.mp3"
			},
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C",
				"X"
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
			"conditionInflict": [
				"prone",
				"stunned"
			],
			"hasFluff": true
		},
		{
			"name": "Master Thief",
			"source": "VGM",
			"page": 216,
			"otherSources": [
				{
					"source": "DIP"
				},
				{
					"source": "SLW"
				},
				{
					"source": "SDW"
				},
				{
					"source": "IMR",
					"page": 216
				},
				{
					"source": "MOT"
				}
			],
			"size": "M",
			"type": {
				"type": "humanoid",
				"tags": [
					"any race"
				]
			},
			"alignment": [
				"A"
			],
			"ac": [
				{
					"ac": 16,
					"from": [
						"{@item studded leather armor|phb}"
					]
				}
			],
			"hp": {
				"average": 83,
				"formula": "13d8 + 26"
			},
			"speed": {
				"walk": 30
			},
			"str": 11,
			"dex": 18,
			"con": 14,
			"int": 11,
			"wis": 11,
			"cha": 12,
			"save": {
				"dex": "+7",
				"int": "+3"
			},
			"skill": {
				"acrobatics": "+7",
				"athletics": "+3",
				"perception": "+3",
				"sleight of hand": "+7",
				"stealth": "+7"
			},
			"passive": 13,
			"languages": [
				"any one language (usually Common) plus Thieves' cant"
			],
			"cr": "5",
			"trait": [
				{
					"name": "Cunning Action",
					"entries": [
						"On each of its turns, the thief can use a bonus action to take the Dash, Disengage, or Hide action."
					]
				},
				{
					"name": "Evasion",
					"entries": [
						"If the thief is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, the thief instead takes no damage if it succeeds on the saving throw, and only half damage if it fails."
					]
				},
				{
					"name": "Sneak Attack (1/Turn)",
					"entries": [
						"The thief deals an extra 14 ({@dice 4d6}) damage when it hits a target with a weapon attack and has advantage on the attack roll, or when the target is within 5 feet of an ally of the thief that isn't {@condition incapacitated} and the thief doesn't have disadvantage on the attack roll."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The thief makes three attacks with its shortsword."
					]
				},
				{
					"name": "Shortsword",
					"entries": [
						"{@atk mw} {@hit 7} to hit, reach 5 ft., one target. {@h}7 ({@damage 1d6 + 4}) piercing damage."
					]
				},
				{
					"name": "Light Crossbow",
					"entries": [
						"{@atk rw} {@hit 7} to hit, range 80/320 ft., one target. {@h}8 ({@damage 1d8 + 4}) piercing damage."
					]
				}
			],
			"reaction": [
				{
					"name": "Uncanny Dodge",
					"entries": [
						"The thief halves the damage that it takes from an attack that hits it. The thief must be able to see the attacker."
					]
				}
			],
			"environment": [
				"urban"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/master-thief.mp3"
			},
			"traitTags": [
				"Sneak Attack"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C",
				"TC",
				"X"
			],
			"damageTags": [
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
			"name": "Maw Demon",
			"source": "VGM",
			"page": 137,
			"otherSources": [
				{
					"source": "GoS"
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
					"ac": 13,
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
			"dex": 8,
			"con": 13,
			"int": 5,
			"wis": 8,
			"cha": 5,
			"senses": [
				"darkvision 60 ft."
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
			"cr": "1",
			"trait": [
				{
					"name": "Rampage",
					"entries": [
						"When it reduces a creature to 0 hit points with a melee attack on its turn, the maw demon can take a bonus action to move up to half its speed and make a bite attack."
					]
				}
			],
			"action": [
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 4} to hit, reach 5 ft., one target. {@h}11 ({@damage 2d8 + 2}) piercing damage."
					]
				}
			],
			"environment": [
				"underdark"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/maw-demon.mp3"
			},
			"traitTags": [
				"Rampage"
			],
			"senseTags": [
				"D"
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
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Meenlock",
			"source": "VGM",
			"page": 170,
			"otherSources": [
				{
					"source": "CM"
				}
			],
			"size": "S",
			"type": "fey",
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
				"average": 31,
				"formula": "7d6 + 7"
			},
			"speed": {
				"walk": 30
			},
			"str": 7,
			"dex": 15,
			"con": 12,
			"int": 11,
			"wis": 10,
			"cha": 8,
			"skill": {
				"perception": "+4",
				"stealth": "+6",
				"survival": "+2"
			},
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 14,
			"conditionImmune": [
				"frightened"
			],
			"languages": [
				"telepathy 120 ft."
			],
			"cr": "2",
			"trait": [
				{
					"name": "Fear Aura",
					"entries": [
						"Any beast or humanoid that starts its turn within 10 feet of the meenlock must succeed on a {@dc 11} Wisdom saving throw or be {@condition frightened} until the start of the creature's next turn."
					]
				},
				{
					"name": "Light Sensitivity",
					"entries": [
						"While in bright light, the meenlock has disadvantage on attack rolls, as well as on Wisdom ({@skill Perception}) checks that rely on sight."
					]
				},
				{
					"name": "Shadow Teleport {@recharge 5}",
					"entries": [
						"As a bonus action, the meenlock can teleport to an unoccupied space within 30 feet of it, provided that both the space it's teleporting from and its destination are in dim light or darkness. The destination need not be within line of sight."
					]
				}
			],
			"action": [
				{
					"name": "Claws",
					"entries": [
						"{@atk mw} {@hit 4} to hit, reach 5 ft., one target. {@h}7 ({@damage 2d4 + 2}) slashing damage, and the target must succeed on a {@dc 11} Constitution saving throw or be {@condition paralyzed} for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
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
				"path": "bestiary/meenlock.mp3"
			},
			"traitTags": [
				"Light Sensitivity"
			],
			"senseTags": [
				"SD"
			],
			"languageTags": [
				"TP"
			],
			"damageTags": [
				"S"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"frightened",
				"paralyzed"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Mind Flayer Psion",
			"alias": [
				"Illithid Psion"
			],
			"source": "VGM",
			"page": 71,
			"size": "M",
			"type": "aberration",
			"alignment": [
				"L",
				"E"
			],
			"ac": [
				{
					"ac": 15,
					"from": [
						"{@item breastplate|phb}"
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
			"str": 11,
			"dex": 12,
			"con": 12,
			"int": 19,
			"wis": 17,
			"cha": 17,
			"save": {
				"int": "+7",
				"wis": "+6",
				"cha": "+6"
			},
			"skill": {
				"arcana": "+7",
				"deception": "+6",
				"insight": "+6",
				"perception": "+6",
				"persuasion": "+6",
				"stealth": "+4"
			},
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 16,
			"languages": [
				"Deep Speech",
				"Undercommon",
				"telepathy 120 ft."
			],
			"cr": "8",
			"spellcasting": [
				{
					"name": "Innate Spellcasting (Psionics)",
					"headerEntries": [
						"The mind flayer is a 10th-level spellcaster. Its innate spellcasting ability is Intelligence (spell save {@dc 15}; {@hit 7} to hit with spell attacks). It can innately cast the following spells, requiring no components:"
					],
					"will": [
						"{@spell guidance}",
						"{@spell mage hand}",
						"{@spell vicious mockery}",
						"{@spell true strike}"
					],
					"spells": {
						"1": {
							"slots": 4,
							"spells": [
								"{@spell charm person}",
								"{@spell command}",
								"{@spell comprehend languages}",
								"{@spell sanctuary}"
							]
						},
						"2": {
							"slots": 3,
							"spells": [
								"{@spell crown of madness}",
								"{@spell phantasmal force}",
								"{@spell see invisibility}"
							]
						},
						"3": {
							"slots": 3,
							"spells": [
								"{@spell clairvoyance}",
								"{@spell fear}",
								"{@spell meld into stone}"
							]
						},
						"4": {
							"slots": 3,
							"spells": [
								"{@spell confusion}",
								"{@spell stone shape}"
							]
						},
						"5": {
							"slots": 2,
							"spells": [
								"{@spell scrying}",
								"{@spell telekinesis}"
							]
						}
					},
					"ability": "int"
				}
			],
			"trait": [
				{
					"name": "Magic Resistance",
					"entries": [
						"The mind flayer has advantage on saving throws against spells and other magical effects."
					]
				}
			],
			"action": [
				{
					"name": "Tentacles",
					"entries": [
						"{@atk mw} {@hit 7} to hit, reach 5 ft., one creature. {@h}15 ({@damage 2d10 + 4}) psychic damage. If the target is Medium or smaller, it is {@condition grappled} (escape {@dc 15}) and must succeed on a {@dc 15} Intelligence saving throw or be {@condition stunned} until this grapple ends."
					]
				},
				{
					"name": "Extract Brain",
					"entries": [
						"{@atk mw} {@hit 7} to hit, reach 5 ft., one {@condition incapacitated} humanoid {@condition grappled} by the mind flayer. {@h}The target takes 55 ({@damage 10d10}) piercing damage. If this damage reduces the target to 0 hit points, the mind flayer kills the target by extracting and devouring its brain."
					]
				},
				{
					"name": "Mind Blast {@recharge 5}",
					"entries": [
						"The mind flayer magically emits psychic energy in a 60-foot cone. Each creature in that area must succeed on a {@dc 15} Intelligence saving throw or take 22 ({@damage 4d8 + 4}) psychic damage and be {@condition stunned} for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
					]
				}
			],
			"environment": [
				"underdark"
			],
			"hasToken": true,
			"traitTags": [
				"Magic Resistance"
			],
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Tentacles"
			],
			"languageTags": [
				"DS",
				"TP",
				"U"
			],
			"damageTags": [
				"P",
				"Y"
			],
			"spellcastingTags": [
				"I",
				"P"
			],
			"miscTags": [
				"AOE",
				"MW"
			],
			"conditionInflict": [
				"grappled",
				"stunned"
			],
			"conditionInflictSpell": [
				"charmed",
				"frightened",
				"prone",
				"restrained"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Mindwitness",
			"source": "VGM",
			"page": 176,
			"size": "L",
			"type": "aberration",
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
				"average": 75,
				"formula": "10d10 + 20"
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
			"dex": 14,
			"con": 14,
			"int": 15,
			"wis": 15,
			"cha": 10,
			"save": {
				"int": "+5",
				"wis": "+5"
			},
			"skill": {
				"perception": "+8"
			},
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 18,
			"conditionImmune": [
				"prone"
			],
			"languages": [
				"Deep Speech",
				"Undercommon",
				"telepathy 600 ft."
			],
			"cr": "5",
			"trait": [
				{
					"name": "Telepathic Hub",
					"entries": [
						"When the mindwitness receives a telepathic message, it can telepathically share that message with up to seven other creatures within 600 feet of it that it can see."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The mindwitness makes two attacks: one with its tentacles and one with its bite."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 5} to hit, reach 5 ft., one creature. {@h}16 ({@damage 4d6 + 2}) piercing damage."
					]
				},
				{
					"name": "Tentacles",
					"entries": [
						"{@atk mw} {@hit 5} to hit, reach 5 ft., one creature. {@h}20 ({@damage 4d8 + 2}) psychic damage. if the target is Large or smaller, it is {@condition grappled} (escape {@dc 13}) and must succeed on a {@dc 13} Intelligence saving throw or be {@condition stunned} until this grapple ends."
					]
				},
				{
					"name": "Eye Rays",
					"entries": [
						"The mindwitness shoots three of the following magical eye rays at random (reroll duplicates), choosing one to three targets it can see within 120 feet of it:",
						{
							"type": "list",
							"style": "list-hang-notitle",
							"items": [
								{
									"type": "item",
									"name": "1. Aversion Ray.",
									"style": "italic",
									"entry": "The targeted creature must make a {@dc 13} Charisma saving throw. On a failed save, the target has disadvantage on attack rolls for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
								},
								{
									"type": "item",
									"name": "2. Fear Ray.",
									"style": "italic",
									"entry": "The targeted creature must succeed on a {@dc 13} Wisdom saving throw or be {@condition frightened} for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
								},
								{
									"type": "item",
									"name": "3. Psychic Ray.",
									"style": "italic",
									"entry": "The target must succeed on a {@dc 13} Intelligence saving throw or take 27 ({@damage 6d8}) psychic damage."
								},
								{
									"type": "item",
									"name": "4. Slowing Ray.",
									"style": "italic",
									"entry": "The targeted creature must make a {@dc 13} Dexterity saving throw. On a failed save, the target's speed is halved for 1 minute. In addition, the creature can't take reactions, and it can take either an action or a bonus action on its turn but not both. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
								},
								{
									"type": "item",
									"name": "5. Stunning Ray.",
									"style": "italic",
									"entry": "The targeted creature must succeed on a {@dc 13} Constitution saving throw or be {@condition stunned} for 1 minute. The target can repeat the saving throw at the start of each of its turns, ending the effect on itself on a success."
								},
								{
									"type": "item",
									"name": "6. Telekinetic Ray.",
									"style": "italic",
									"entries": [
										"If the target is a creature, it must make a {@dc 13} Strength saving throw. On a failed save, the mindwitness moves it up to 30 feet in any direction, and it is {@condition restrained} by the ray's telekinetic grip until the start of the mindwitness's next turn or until the mindwitness is {@condition incapacitated}.",
										"If the target is an object weighing 300 pounds or less that isn't being worn or carried, it is telekinetically moved up to 30 feet in any direction. The mindwitness can also exert fine control on objects with this ray, such as manipulating a simple tool or opening a door or a container."
									]
								}
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
				"path": "bestiary/mindwitness.mp3"
			},
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Multiattack",
				"Tentacles"
			],
			"languageTags": [
				"DS",
				"TP",
				"U"
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
				"grappled",
				"restrained",
				"stunned"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Morkoth",
			"source": "VGM",
			"page": 177,
			"size": "M",
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
				"average": 130,
				"formula": "20d8 + 40"
			},
			"speed": {
				"walk": 25,
				"swim": 50
			},
			"str": 14,
			"dex": 14,
			"con": 14,
			"int": 20,
			"wis": 15,
			"cha": 13,
			"save": {
				"dex": "+6",
				"int": "+9",
				"wis": "+6"
			},
			"skill": {
				"arcana": "+9",
				"history": "+9",
				"perception": "+10",
				"stealth": "+6"
			},
			"senses": [
				"blindsight 30 ft.",
				"darkvision 120 ft."
			],
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
			"languages": [
				"telepathy 120 ft."
			],
			"cr": {
				"cr": "11",
				"lair": "12"
			},
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The morkoth is an 11th-level spellcaster. Its spellcasting ability is Intelligence (save {@dc 17}, {@hit 9} to hit with spell attacks). The morkoth has the following wizard spells prepared:"
					],
					"spells": {
						"0": {
							"spells": [
								"{@spell acid splash}",
								"{@spell mage hand}",
								"{@spell mending}",
								"{@spell ray of frost}",
								"{@spell shocking grasp}"
							]
						},
						"1": {
							"slots": 4,
							"spells": [
								"{@spell detect magic}",
								"{@spell identify}",
								"{@spell shield}",
								"{@spell witch bolt}"
							]
						},
						"2": {
							"slots": 3,
							"spells": [
								"{@spell darkness}",
								"{@spell detect thoughts}",
								"{@spell shatter}"
							]
						},
						"3": {
							"slots": 3,
							"spells": [
								"{@spell dispel magic}",
								"{@spell lightning bolt}",
								"{@spell sending}"
							]
						},
						"4": {
							"slots": 3,
							"spells": [
								"{@spell dimension door}",
								"{@spell Evard's black tentacles}"
							]
						},
						"5": {
							"slots": 3,
							"spells": [
								"{@spell geas}",
								"{@spell scrying}"
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
					"name": "Amphibious",
					"entries": [
						"The morkoth can breathe air and water."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The morkoth makes three attacks: two with its bite and one with its tentacles or three with its bite."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 6} to hit, reach 5 ft., one target. {@h}9 ({@damage 2d6 + 2}) slashing damage."
					]
				},
				{
					"name": "Tentacles",
					"entries": [
						"{@atk mw} {@hit 6} to hit, reach 15 ft., one target. {@h}15 ({@damage 3d8 + 2}) bludgeoning damage, and the target is {@condition grappled} (escape {@dc 14}) if it is a Large or smaller creature. Until this grapple ends. the target is {@condition restrained} and takes 15 ({@damage 3d8 + 2}) bludgeoning damage at the start of each of the morkoth's turns. and the morkoth can't use its tentacles on another target."
					]
				},
				{
					"name": "Hypnosis",
					"entries": [
						"The morkoth projects a 30-foot cone of magical energy. Each creature in that area must make a {@dc 17} Wisdom saving throw. On a failed save, the creature is {@condition charmed} by the morkoth for 1 minute. While {@condition charmed} in this way, the target tries to get as close to the morkoth as possible, using its actions to Dash until it is within 5 feet of the morkoth. A {@condition charmed} target can repeat the saving throw at the end of each of its turns and whenever it takes damage, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature has advantage on saving throws against the morkoth's Hypnosis for 24 hours."
					]
				}
			],
			"reaction": [
				{
					"name": "Spell Reflection",
					"entries": [
						"If the morkoth makes a successful saving throw against a spell, or a spell attack misses it, the morkoth can choose another creature (including the spellcaster) it can see within 120 feet of it. The spell targets the chosen creature instead of the morkoth. If the spell forced a saving throw, the chosen creature makes its own save. If the spell was an attack, the attack roll is rerolled against the chosen creature."
					]
				}
			],
			"legendaryGroup": {
				"name": "Morkoth",
				"source": "VGM"
			},
			"environment": [
				"underwater",
				"coastal"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/morkoth.mp3"
			},
			"traitTags": [
				"Amphibious"
			],
			"senseTags": [
				"B",
				"SD"
			],
			"actionTags": [
				"Multiattack",
				"Tentacles"
			],
			"languageTags": [
				"TP"
			],
			"damageTags": [
				"B",
				"S"
			],
			"spellcastingTags": [
				"CW"
			],
			"miscTags": [
				"AOE",
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"charmed",
				"grappled",
				"restrained"
			],
			"conditionInflictSpell": [
				"charmed",
				"restrained"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Mouth of Grolantor",
			"source": "VGM",
			"page": 149,
			"size": "H",
			"type": {
				"type": "giant",
				"tags": [
					"hill giant"
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
				"average": 105,
				"formula": "10d12 + 40"
			},
			"speed": {
				"walk": 50
			},
			"str": 21,
			"dex": 10,
			"con": 18,
			"int": 5,
			"wis": 7,
			"cha": 5,
			"skill": {
				"perception": "+1"
			},
			"passive": 11,
			"conditionImmune": [
				"frightened"
			],
			"languages": [
				"Giant"
			],
			"cr": "6",
			"trait": [
				{
					"name": "Mouth of Madness",
					"entries": [
						"The giant is immune to {@spell confusion} spells and similar magic.",
						"On each of its turns, the giant uses all its movement to move toward the nearest creature or whatever else it might perceive as food. Roll a {@dice d10} at the start of each of the giant's turns to determine its action for that turn:",
						"1\u20133. The giant makes three attacks with its fists against one random target within its reach. If no other creatures are within its reach, the giant flies into a rage and gains advantage on all attack rolls until the end of its next turn.",
						"4\u20135. The giant makes one attack with its fist against every creature within its reach. If no other creatures are within its reach, the giant makes one fist attack against itself.",
						"6\u20137. The giant makes one attack with its bite against one random target within its reach. If no other creatures are within its reach, its eyes glaze over and it becomes {@condition stunned} until the start of its next turn.",
						"8\u201310. The giant makes three attacks against one random target within its reach: one attack with its bite and two with its fists. If no other creatures are within its reach, the giant flies into a rage and gains advantage on all attack rolls until the end of its next turn."
					]
				}
			],
			"action": [
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 8} to hit, reach 5 ft., one creature. {@h}15 ({@damage 3d6 + 5}) piercing damage, and the giant magically regains hit points equal to the damage dealt."
					]
				},
				{
					"name": "Fist",
					"entries": [
						"{@atk mw} {@hit 8} to hit, reach 10 ft., one target. {@h}18 ({@damage 3d8 + 5}) bludgeoning damage."
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
				"path": "bestiary/mouth-of-grolantor.mp3"
			},
			"languageTags": [
				"GI"
			],
			"damageTags": [
				"B",
				"P"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Necromancer",
			"source": "VGM",
			"page": 217,
			"otherSources": [
				{
					"source": "TftYP"
				},
				{
					"source": "DC"
				},
				{
					"source": "DIP"
				}
			],
			"size": "M",
			"type": {
				"type": "humanoid",
				"tags": [
					"any race"
				]
			},
			"alignment": [
				"A"
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
				"average": 66,
				"formula": "12d8 + 12"
			},
			"speed": {
				"walk": 30
			},
			"str": 9,
			"dex": 14,
			"con": 12,
			"int": 17,
			"wis": 12,
			"cha": 11,
			"save": {
				"int": "+7",
				"wis": "+5"
			},
			"skill": {
				"arcana": "+7",
				"history": "+7"
			},
			"passive": 11,
			"resist": [
				"necrotic"
			],
			"languages": [
				"any four languages"
			],
			"cr": "9",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The necromancer is a 12th-level spellcaster. Its spellcasting ability is Intelligence (spell save {@dc 15}, {@hit 7} to hit with spell attacks). The necromancer has the following wizard spells prepared:"
					],
					"spells": {
						"0": {
							"spells": [
								"{@spell chill touch}",
								"{@spell dancing lights}",
								"{@spell mage hand}",
								"{@spell mending}"
							]
						},
						"1": {
							"slots": 4,
							"spells": [
								"{@spell false life}*",
								"{@spell mage armor}",
								"{@spell ray of sickness}*"
							]
						},
						"2": {
							"slots": 3,
							"spells": [
								"{@spell blindness/deafness}*",
								"{@spell ray of enfeeblement}*",
								"{@spell web}"
							]
						},
						"3": {
							"slots": 3,
							"spells": [
								"{@spell animate dead}*",
								"{@spell bestow curse}*",
								"{@spell vampiric touch}*"
							]
						},
						"4": {
							"slots": 3,
							"spells": [
								"{@spell blight}*",
								"{@spell dimension door}",
								"{@spell stoneskin}"
							]
						},
						"5": {
							"slots": 2,
							"spells": [
								"{@spell Bigby's hand}",
								"{@spell cloudkill}"
							]
						},
						"6": {
							"slots": 1,
							"spells": [
								"{@spell circle of death}*"
							]
						}
					},
					"footerEntries": [
						"*Necromancy spell of 1st level or higher"
					],
					"ability": "int"
				}
			],
			"trait": [
				{
					"name": "Grim Harvest (1/Turn)",
					"entries": [
						"When necromancer kills a creature that is neither a construct nor undead with a spell of 1st level or higher, the necromancer regains hit points equal to twice the spell's level, or three times if it is a necromancy spell."
					]
				}
			],
			"action": [
				{
					"name": "Withering Touch",
					"entries": [
						"{@atk ms} {@hit 7} to hit, reach 5 ft., one creature. {@h}5 ({@damage 2d4}) necrotic damage."
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
				"path": "bestiary/necromancer.mp3"
			},
			"languageTags": [
				"X"
			],
			"damageTags": [
				"N"
			],
			"spellcastingTags": [
				"CW"
			],
			"hasFluff": true
		},
		{
			"name": "Neogi",
			"source": "VGM",
			"page": 180,
			"size": "S",
			"type": "aberration",
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
				"average": 33,
				"formula": "6d6 + 12"
			},
			"speed": {
				"walk": 30,
				"climb": 30
			},
			"str": 6,
			"dex": 16,
			"con": 14,
			"int": 13,
			"wis": 12,
			"cha": 15,
			"skill": {
				"intimidation": "+4",
				"perception": "+3"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 13,
			"languages": [
				"Common",
				"Deep Speech",
				"Undercommon"
			],
			"cr": "3",
			"trait": [
				{
					"name": "Mental Fortitude",
					"entries": [
						"The neogi has advantage on saving throws against being {@condition charmed} or {@condition frightened}, and magic can't put the neogi to sleep."
					]
				},
				{
					"name": "Spider Climb",
					"entries": [
						"The neogi can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The neogi makes two attacks: one with its bite and one with its claws."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 5} to hit, reach 5 ft., one target. {@h}6 ({@damage 1d6 + 3}) piercing damage plus 14 ({@damage 4d6}) poison damage, and the target must succeed on a {@dc 12} Constitution saving throw or become {@condition poisoned} for 1 minute. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
					]
				},
				{
					"name": "Claws",
					"entries": [
						"{@atk mw} {@hit 5} to hit, reach 5 ft., one target. {@h}8 ({@damage 2d4 + 3}) slashing damage."
					]
				},
				{
					"name": "Enslave (Recharges after a Short or Long Rest)",
					"entries": [
						"The neogi targets one creature it can see within 30 feet of it. The target must succeed on a {@dc 14} Wisdom saving throw or be magically {@condition charmed} by the neogi for 1 day, or until the neogi dies or is more than 1 mile from the target. The {@condition charmed} target obeys the neogi's commands and can't take reactions, and the neogi and the target can communicate telepathically with each other at a distance of up to 1 mile. Whenever the {@condition charmed} target takes damage, it can repeat the saving throw, ending the effect on itself on a success."
					]
				}
			],
			"environment": [
				"underdark",
				"hill"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/neogi.mp3"
			},
			"traitTags": [
				"Spider Climb"
			],
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
				"I",
				"P",
				"S"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"charmed",
				"poisoned"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Neogi Hatchling",
			"source": "VGM",
			"page": 179,
			"size": "T",
			"type": "aberration",
			"alignment": [
				"L",
				"E"
			],
			"ac": [
				11
			],
			"hp": {
				"average": 7,
				"formula": "3d4"
			},
			"speed": {
				"walk": 20,
				"climb": 20
			},
			"str": 3,
			"dex": 13,
			"con": 10,
			"int": 6,
			"wis": 10,
			"cha": 9,
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 10,
			"cr": "1/8",
			"trait": [
				{
					"name": "Mental Fortitude",
					"entries": [
						"The hatchling has advantage on saving throws against being {@condition charmed} or {@condition frightened}, and magic can't put the hatchling to sleep."
					]
				},
				{
					"name": "Spider Climb",
					"entries": [
						"The hatchling can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
					]
				}
			],
			"action": [
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 3} to hit, reach 5 ft., one target. {@h}3 ({@damage 1d4 + 1}) piercing damage plus 7 ({@damage 2d6}) poison damage, and the target must succeed on a {@dc 10} Constitution saving throw or become {@condition poisoned} for 1 minute. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
					]
				}
			],
			"environment": [
				"underdark",
				"hill"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/neogi-hatchling.mp3"
			},
			"traitTags": [
				"Spider Climb"
			],
			"senseTags": [
				"D"
			],
			"damageTags": [
				"I",
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
			"name": "Neogi Master",
			"source": "VGM",
			"page": 180,
			"size": "M",
			"type": "aberration",
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
				"average": 71,
				"formula": "11d8 + 22"
			},
			"speed": {
				"walk": 30,
				"climb": 30
			},
			"str": 6,
			"dex": 16,
			"con": 14,
			"int": 16,
			"wis": 12,
			"cha": 18,
			"save": {
				"wis": "+3"
			},
			"skill": {
				"arcana": "+5",
				"deception": "+6",
				"intimidation": "+6",
				"perception": "+3",
				"persuasion": "+6"
			},
			"senses": [
				"darkvision 120 ft. (penetrates magical darkness)"
			],
			"passive": 13,
			"languages": [
				"Common",
				"Deep Speech",
				"Undercommon",
				"telepathy 30 ft."
			],
			"cr": "4",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The neogi is a 7th-level spellcaster. Its spellcasting ability is Charisma (spell save {@dc 14}, {@hit 6} to hit with spell attacks). It regains its expended spell slots when it finishes a short or long rest. It knows the following warlock spells:"
					],
					"spells": {
						"0": {
							"spells": [
								"{@spell eldritch blast} (range 300 ft., +4 bonus to each damage roll)",
								"{@spell guidance}",
								"{@spell mage hand}",
								"{@spell minor illusion}",
								"{@spell prestidigitation}",
								"{@spell vicious mockery}"
							]
						},
						"4": {
							"lower": 1,
							"slots": 2,
							"spells": [
								"{@spell arms of Hadar}",
								"{@spell counterspell}",
								"{@spell dimension door}",
								"{@spell fear}",
								"{@spell hold person}",
								"{@spell hunger of Hadar}",
								"{@spell invisibility}",
								"{@spell unseen servant}"
							]
						}
					},
					"ability": "cha"
				}
			],
			"trait": [
				{
					"name": "Mental Fortitude",
					"entries": [
						"The neogi has advantage on saving throws against being {@condition charmed} or {@condition frightened}, and magic can't put the neogi to sleep."
					]
				},
				{
					"name": "Spider Climb",
					"entries": [
						"The neogi can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The neogi makes two attacks: one with its bite and one with its claws."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 5} to hit, reach 5 ft., one target. {@h}6 ({@damage 1d6 + 3}) piercing damage plus 14 ({@damage 4d6}) poison damage, and the target must succeed on a {@dc 12} Constitution saving throw or become {@condition poisoned} for 1 minute. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
					]
				},
				{
					"name": "Claws",
					"entries": [
						"{@atk mw} {@hit 5} to hit, reach 5 ft., one target. {@h}8 ({@damage 2d4 + 3}) slashing damage."
					]
				},
				{
					"name": "Enslave (Recharges after a Short or Long Rest)",
					"entries": [
						"The neogi targets one creature it can see within 30 feet of it. The target must succeed on a {@dc 14} Wisdom saving throw or be magically {@condition charmed} by the neogi for 1 day, or until the neogi dies or is more than 1 mile from the target. The {@condition charmed} target obeys the neogi's commands and can't take reactions, and the neogi and the target can communicate telepathically with each other at a distance of up to 1 mile. Whenever the {@condition charmed} target takes damage, it can repeat the saving throw, ending the effect on itself on a success."
					]
				}
			],
			"environment": [
				"underdark",
				"hill"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/neogi-master.mp3"
			},
			"traitTags": [
				"Spider Climb"
			],
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C",
				"DS",
				"TP",
				"U"
			],
			"damageTags": [
				"I",
				"P",
				"S"
			],
			"spellcastingTags": [
				"CL"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"charmed",
				"poisoned"
			],
			"conditionInflictSpell": [
				"blinded",
				"frightened",
				"invisible",
				"paralyzed"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Neothelid",
			"source": "VGM",
			"page": 181,
			"otherSources": [
				{
					"source": "WDMM"
				}
			],
			"size": "G",
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
				"average": 325,
				"formula": "21d20 + 105"
			},
			"speed": {
				"walk": 30
			},
			"str": 27,
			"dex": 7,
			"con": 21,
			"int": 3,
			"wis": 16,
			"cha": 12,
			"save": {
				"int": "+1",
				"wis": "+8",
				"cha": "+6"
			},
			"senses": [
				"blindsight 120 ft."
			],
			"passive": 13,
			"cr": "13",
			"spellcasting": [
				{
					"name": "Innate Spellcasting (Psionics)",
					"headerEntries": [
						"The neothelid's innate spellcasting ability is Wisdom (spell save {@dc 16}). It can innately cast the following spells, requiring no components:"
					],
					"will": [
						"{@spell levitate}"
					],
					"daily": {
						"1e": [
							"{@spell confusion}",
							"{@spell feeblemind}",
							"{@spell telekinesis}"
						]
					},
					"ability": "wis"
				}
			],
			"trait": [
				{
					"name": "Creature Sense",
					"entries": [
						"The neothelid is aware of the presence of creatures within 1 mile of it that have an Intelligence score of 4 or higher. It knows the distance and direction to each creature, as well as each creature's Intelligence score, but can't sense anything else about it. A creature protected by a mind blank spell, a nondetection spell, or similar magic can't be perceived in this manner."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"The neothelid has advantage on saving throws against spells and other magical effects."
					]
				}
			],
			"action": [
				{
					"name": "Tentacles",
					"entries": [
						"{@atk mw} {@hit 13} to hit, reach 15 ft., one target. {@h}21 ({@damage 3d8 + 8}) bludgeoning damage plus 13 ({@damage 3d8}) psychic damage. If the target is a Large or smaller creature, it must succeed on a {@dc 18} Strength saving throw or be swallowed by the neothelid. A swallowed creature is {@condition blinded} and {@condition restrained}, it has total cover against attacks and other effects outside the neothelid, and it takes 35 ({@damage 10d6}) acid damage at the start of each of the neothelid's turns.",
						"If the neothelid takes 30 damage or more on a single turn from a creature inside it, the neothelid must succeed on a {@dc 18} Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall {@condition prone} in a space within 10 feet of the neothelid. If the neothelid dies, a swallowed creature is no longer {@condition restrained} by it and can escape from the corpse by using 20 feet of movement, exiting {@condition prone}."
					]
				},
				{
					"name": "Acid Breath {@recharge 5}",
					"entries": [
						"The neothelid exhales acid in a 60-foot cone. Each creature in that area must make a {@dc 18} Dexterity saving throw, taking 35 ({@damage 10d6}) acid damage on a failed save, or half as much damage on a successful one."
					]
				}
			],
			"environment": [
				"underdark"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/neothelid.mp3"
			},
			"traitTags": [
				"Magic Resistance"
			],
			"senseTags": [
				"B"
			],
			"actionTags": [
				"Swallow",
				"Tentacles"
			],
			"damageTags": [
				"A",
				"B",
				"Y"
			],
			"spellcastingTags": [
				"I",
				"P"
			],
			"miscTags": [
				"AOE",
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"blinded",
				"restrained"
			],
			"conditionInflictSpell": [
				"restrained"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Nilbog",
			"source": "VGM",
			"page": 182,
			"size": "S",
			"type": {
				"type": "humanoid",
				"tags": [
					"goblinoid"
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
				"average": 7,
				"formula": "2d6"
			},
			"speed": {
				"walk": 30
			},
			"str": 8,
			"dex": 14,
			"con": 10,
			"int": 10,
			"wis": 8,
			"cha": 15,
			"skill": {
				"stealth": "+6"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 9,
			"languages": [
				"Common",
				"Goblin"
			],
			"cr": "1",
			"spellcasting": [
				{
					"name": "Innate Spellcasting",
					"headerEntries": [
						"The nilbog's innate spellcasting ability is Charisma (spell save {@dc 12}). It can innately cast the following spells, requiring no material components:"
					],
					"will": [
						"{@spell mage hand}",
						"{@spell Tasha's hideous laughter}",
						"{@spell vicious mockery}"
					],
					"daily": {
						"1": [
							"{@spell confusion}"
						]
					},
					"ability": "cha"
				}
			],
			"trait": [
				{
					"name": "Nilbogism",
					"entries": [
						"Any creature that attempts to damage the nilbog must first succeed on a {@dc 12} Charisma saving throw or be {@condition charmed} until the end of the creature's next turn. A creature {@condition charmed} in this way must use its action praising the nilbog. The nilbog can't regain hit points, including through magical healing, except through its Reversal of Fortune reaction."
					]
				},
				{
					"name": "Nimble Escape",
					"entries": [
						"The nilbog can take the Disengage or Hide action as a bonus action on each of its turns."
					]
				}
			],
			"action": [
				{
					"name": "Fool's Scepter",
					"entries": [
						"{@atk mw} {@hit 4} to hit, reach 5 ft., one target. {@h}5 ({@damage 1d6 + 2}) bludgeoning damage."
					]
				},
				{
					"name": "Shortbow",
					"entries": [
						"{@atk rw} {@hit 4} to hit, range 80/320 ft., one target. {@h}5 ({@damage 1d6 + 2}) piercing damage."
					]
				}
			],
			"reaction": [
				{
					"name": "Reversal of Fortune",
					"entries": [
						"In response to another creature dealing damage to the nilbog, the nilbog reduces the damage to 0 and regains {@dice 1d6} hit points."
					]
				}
			],
			"environment": [
				"underdark",
				"forest",
				"hill"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/nilbog.mp3"
			},
			"senseTags": [
				"D"
			],
			"languageTags": [
				"C",
				"GO"
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
				"RNG",
				"RW"
			],
			"conditionInflict": [
				"charmed"
			],
			"conditionInflictSpell": [
				"incapacitated",
				"prone"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Orc Blade of Ilneval",
			"source": "VGM",
			"page": 183,
			"size": "M",
			"type": {
				"type": "humanoid",
				"tags": [
					"orc"
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
						"{@item chain mail|phb}",
						"{@item shield|phb}"
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
			"str": 17,
			"dex": 11,
			"con": 17,
			"int": 10,
			"wis": 12,
			"cha": 14,
			"save": {
				"wis": "+3"
			},
			"skill": {
				"insight": "+3",
				"intimidation": "+4",
				"perception": "+3"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 13,
			"languages": [
				"Common",
				"Orc"
			],
			"cr": "4",
			"trait": [
				{
					"name": "Aggressive",
					"entries": [
						"As a bonus action, the orc can move up to its speed toward a hostile creature that it can see."
					]
				},
				{
					"name": "Foe Smiter of Ilneval",
					"entries": [
						"The orc deals an extra die of damage when it hits with a longsword attack (included in the attack)."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The orc makes two melee attacks with its longsword or two ranged attacks with its javelins. If Ilneval's Command is available to use, the orc can use it after these attacks."
					]
				},
				{
					"name": "Longsword",
					"entries": [
						"{@atk mw} {@hit 5} to hit, reach 5 ft., one target. {@h}12 ({@damage 2d8 + 3}) slashing damage, or 14 ({@damage 2d10 + 3}) slashing damage when used with two hands."
					]
				},
				{
					"name": "Javelin",
					"entries": [
						"{@atk mw,rw} {@hit 5} to hit, reach 5 ft. or range 30/120 ft., one target. {@h}6 ({@damage 1d6 + 3}) piercing damage."
					]
				},
				{
					"name": "Ilneval's Command (Recharges 4\u20136)",
					"entries": [
						"Up to three allied orcs within 120 feet of this orc that can hear it can use their reactions to each make one weapon attack."
					]
				}
			],
			"environment": [
				"underdark",
				"mountain",
				"grassland",
				"forest",
				"hill"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/orc-blade-of-ilneval.mp3"
			},
			"traitTags": [
				"Aggressive"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C",
				"O"
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
			"name": "Orc Claw of Luthic",
			"source": "VGM",
			"page": 183,
			"size": "M",
			"type": {
				"type": "humanoid",
				"tags": [
					"orc"
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
						"{@item hide armor|phb}"
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
			"str": 14,
			"dex": 15,
			"con": 16,
			"int": 10,
			"wis": 15,
			"cha": 11,
			"skill": {
				"intimidation": "+2",
				"medicine": "+4",
				"survival": "+4"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 12,
			"languages": [
				"Common",
				"Orc"
			],
			"cr": "2",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The orc is a 5th-level spellcaster. Its spellcasting ability is Wisdom (spell save {@dc 12}, {@hit 4} to hit with spell attacks). The orc has the following cleric spells prepared:"
					],
					"spells": {
						"0": {
							"spells": [
								"{@spell guidance}",
								"{@spell mending}",
								"{@spell resistance}",
								"{@spell thaumaturgy}"
							]
						},
						"1": {
							"slots": 4,
							"spells": [
								"{@spell bane}",
								"{@spell cure wounds}",
								"{@spell guiding bolt}"
							]
						},
						"2": {
							"slots": 3,
							"spells": [
								"{@spell augury}",
								"{@spell warding bond}"
							]
						},
						"3": {
							"slots": 2,
							"spells": [
								"{@spell bestow curse}",
								"{@spell create food and water}"
							]
						}
					},
					"ability": "wis"
				}
			],
			"trait": [
				{
					"name": "Aggressive",
					"entries": [
						"As a bonus action, the orc can move up to its speed toward a hostile creature that it can see."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The orc makes two claw attacks, or four claw attacks if it has fewer than half of its hit points remaining."
					]
				},
				{
					"name": "Claw",
					"entries": [
						"{@atk mw} {@hit 4} to hit, reach 5 ft., one target. {@h}6 ({@damage 1d8 + 2}) slashing damage."
					]
				}
			],
			"environment": [
				"underdark",
				"mountain"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/orc-claw-of-luthic.mp3"
			},
			"traitTags": [
				"Aggressive"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C",
				"O"
			],
			"damageTags": [
				"S"
			],
			"spellcastingTags": [
				"CC"
			],
			"miscTags": [
				"MW"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Orc Hand of Yurtrus",
			"source": "VGM",
			"page": 184,
			"size": "M",
			"type": {
				"type": "humanoid",
				"tags": [
					"orc"
				]
			},
			"alignment": [
				"C",
				"E"
			],
			"ac": [
				{
					"ac": 12,
					"from": [
						"{@item hide armor|phb}"
					]
				}
			],
			"hp": {
				"average": 30,
				"formula": "4d8 + 12"
			},
			"speed": {
				"walk": 30
			},
			"str": 12,
			"dex": 11,
			"con": 16,
			"int": 11,
			"wis": 14,
			"cha": 9,
			"skill": {
				"arcana": "+2",
				"intimidation": "+1",
				"medicine": "+4",
				"religion": "+2"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 12,
			"languages": [
				"understands Common and Orc but can't speak"
			],
			"cr": "2",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The orc is a 4th-level spellcaster. Its spellcasting ability is Wisdom (spell save {@dc 12}, {@hit 4} to hit with spell attacks). It requires no verbal components to cast its spells. The orc has the following cleric spells prepared:"
					],
					"spells": {
						"0": {
							"spells": [
								"{@spell guidance}",
								"{@spell mending}",
								"{@spell resistance}",
								"{@spell thaumaturgy}"
							]
						},
						"1": {
							"slots": 4,
							"spells": [
								"{@spell bane}",
								"{@spell detect magic}",
								"{@spell inflict wounds}",
								"{@spell protection from evil and good}"
							]
						},
						"2": {
							"slots": 3,
							"spells": [
								"{@spell blindness/deafness}",
								"{@spell silence}"
							]
						}
					},
					"ability": "wis"
				}
			],
			"trait": [
				{
					"name": "Aggressive",
					"entries": [
						"As a bonus action, the orc can move up to its speed toward a hostile creature that it can see."
					]
				}
			],
			"action": [
				{
					"name": "Touch of the White Hand",
					"entries": [
						"{@atk mw} {@hit 3} to hit, reach 5 ft., one target. {@h}9 ({@damage 2d8}) necrotic damage."
					]
				}
			],
			"environment": [
				"underdark",
				"mountain",
				"grassland",
				"forest",
				"hill"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/orc-hand-of-yurtrus.mp3"
			},
			"traitTags": [
				"Aggressive"
			],
			"senseTags": [
				"D"
			],
			"languageTags": [
				"C",
				"CS",
				"O"
			],
			"damageTags": [
				"N"
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
			"name": "Orc Nurtured One of Yurtrus",
			"source": "VGM",
			"page": 184,
			"size": "M",
			"type": {
				"type": "humanoid",
				"tags": [
					"orc"
				]
			},
			"alignment": [
				"C",
				"E"
			],
			"ac": [
				9
			],
			"hp": {
				"average": 30,
				"formula": "4d8 + 12"
			},
			"speed": {
				"walk": 30
			},
			"str": 15,
			"dex": 8,
			"con": 16,
			"int": 7,
			"wis": 11,
			"cha": 7,
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 10,
			"languages": [
				"Common",
				"Orc"
			],
			"cr": "1/2",
			"trait": [
				{
					"name": "Aggressive",
					"entries": [
						"As a bonus action, the orc can move up to its speed toward a hostile creature that it can see."
					]
				},
				{
					"name": "Corrupted Carrier",
					"entries": [
						"When the orc is reduced to 0 hit points, it explodes, and any creature within 10 feet of it must make a {@dc 13} Constitution saving throw. On a failed save, the creature takes 14 ({@damage 4d6}) poison damage and becomes {@condition poisoned}. On a success, the creature takes half as much damage and isn't {@condition poisoned}. A creature {@condition poisoned} by this effect can repeat the save at the end of each of its turn, ending the effect on itself on a success. While {@condition poisoned} by this effect, a creature can't regain hit points."
					]
				},
				{
					"name": "Nurtured One of Yurtrus",
					"entries": [
						"The orc has advantage on saving throws against poison and disease."
					]
				}
			],
			"action": [
				{
					"name": "Claws",
					"entries": [
						"{@atk mw} {@hit 4} to hit, reach 5 ft., one target. {@h}4 ({@damage 1d4 + 2}) slashing damage plus 2 ({@damage 1d4}) necrotic damage."
					]
				},
				{
					"name": "Corrupted Vengeance",
					"entries": [
						"The orc reduces itself to 0 hit points, triggering its Corrupted Carrier trait."
					]
				}
			],
			"environment": [
				"underdark",
				"mountain",
				"grassland",
				"forest",
				"hill"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/orc-nurtured-one-of-yurtrus.mp3"
			},
			"traitTags": [
				"Aggressive"
			],
			"senseTags": [
				"D"
			],
			"languageTags": [
				"C",
				"O"
			],
			"damageTags": [
				"I",
				"N",
				"S"
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
			"name": "Orc Red Fang of Shargaas",
			"source": "VGM",
			"page": 185,
			"size": "M",
			"type": {
				"type": "humanoid",
				"tags": [
					"orc"
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
				"average": 52,
				"formula": "8d8 + 16"
			},
			"speed": {
				"walk": 30
			},
			"str": 11,
			"dex": 16,
			"con": 15,
			"int": 9,
			"wis": 11,
			"cha": 9,
			"skill": {
				"intimidation": "+1",
				"perception": "+2",
				"stealth": "+5"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 12,
			"languages": [
				"Common",
				"Orc"
			],
			"cr": "3",
			"trait": [
				{
					"name": "Cunning Action",
					"entries": [
						"On each of its turns, the orc can use a bonus action to take the Dash, Disengage, or Hide action."
					]
				},
				{
					"name": "Hand of Shargaas",
					"entries": [
						"The orc deals 2 extra dice of damage when it hits a target with a weapon attack (included in its attacks)."
					]
				},
				{
					"name": "Shargaas's Sight",
					"entries": [
						"Magical darkness doesn't impede the orc's darkvision."
					]
				},
				{
					"name": "Slayer",
					"entries": [
						"In the first round of a combat, the orc has advantage on attack rolls against any creature that hasn't taken a turn yet. If the orc hits a creature that round who was surprised, the hit is automatically a critical hit."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The orc makes two scimitar or dart attacks."
					]
				},
				{
					"name": "Scimitar",
					"entries": [
						"{@atk mw} {@hit 5} to hit, reach 5 ft., one target. {@h}13 ({@damage 3d6 + 3}) slashing damage."
					]
				},
				{
					"name": "Dart",
					"entries": [
						"{@atk rw} {@hit 5} to hit, range 20/60 ft., one target. {@h}10 ({@damage 3d4 + 3}) piercing damage."
					]
				},
				{
					"name": "Veil of Shargaas (Recharges after a Short or Long Rest)",
					"entries": [
						"The orc casts {@spell darkness} without any components. Wisdom is its spellcasting ability."
					]
				}
			],
			"environment": [
				"underdark",
				"mountain",
				"forest",
				"hill",
				"urban"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/orc-red-fang.mp3"
			},
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C",
				"O"
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
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Ox",
			"source": "VGM",
			"page": 208,
			"otherSources": [
				{
					"source": "PotA"
				}
			],
			"size": "L",
			"type": "beast",
			"alignment": [
				"U"
			],
			"ac": [
				10
			],
			"hp": {
				"average": 15,
				"formula": "2d10 + 4"
			},
			"speed": {
				"walk": 30
			},
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
					"name": "Charge",
					"entries": [
						"If the ox moves at least 20 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 7 ({@damage 2d6}) piercing damage."
					]
				},
				{
					"name": "Beast of Burden",
					"entries": [
						"The oxen is considered to be a Huge animal for the purposes of determining its carrying capacity."
					]
				}
			],
			"action": [
				{
					"name": "Gore",
					"entries": [
						"{@atk mw} {@hit 6} to hit, reach 5 ft., one target. {@h}7 ({@damage 1d6 + 4}) piercing damage."
					]
				}
			],
			"environment": [
				"grassland"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/ox.mp3"
			},
			"traitTags": [
				"Charge"
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
			"name": "Quetzalcoatlus",
			"group": "Dinosaurs",
			"source": "VGM",
			"page": 140,
			"otherSources": [
				{
					"source": "ToA"
				}
			],
			"size": "H",
			"type": "beast",
			"alignment": [
				"U"
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
				"average": 30,
				"formula": "4d12 + 4"
			},
			"speed": {
				"walk": 10,
				"fly": 80
			},
			"str": 15,
			"dex": 13,
			"con": 13,
			"int": 2,
			"wis": 10,
			"cha": 5,
			"skill": {
				"perception": "+2"
			},
			"passive": 12,
			"cr": "2",
			"trait": [
				{
					"name": "Dive Attack",
					"entries": [
						"If the quetzalcoatlus is flying and dives at least 30 feet toward a target and then hits with a bite attack, the attack deals an extra 10 ({@dice 3d6}) damage to the target."
					]
				},
				{
					"name": "Flyby",
					"entries": [
						"The quetzalcoatlus doesn't provoke an opportunity attack when it flies out of an enemy's reach."
					]
				}
			],
			"action": [
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 4} to hit, reach 10 ft., one creature. {@h}12 ({@damage 3d6 + 2}) piercing damage."
					]
				}
			],
			"environment": [
				"mountain",
				"hill",
				"coastal"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/quetzalcoatlus.mp3"
			},
			"traitTags": [
				"Flyby"
			],
			"damageTags": [
				"P"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"hasFluff": true
		},
		{
			"name": "Quickling",
			"source": "VGM",
			"page": 187,
			"size": "T",
			"type": "fey",
			"alignment": [
				"C",
				"E"
			],
			"ac": [
				16
			],
			"hp": {
				"average": 10,
				"formula": "3d4 + 3"
			},
			"speed": {
				"walk": 120
			},
			"str": 4,
			"dex": 23,
			"con": 13,
			"int": 10,
			"wis": 12,
			"cha": 7,
			"skill": {
				"acrobatics": "+8",
				"perception": "+5",
				"sleight of hand": "+8",
				"stealth": "+8"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 15,
			"languages": [
				"Common",
				"Sylvan"
			],
			"cr": "1",
			"trait": [
				{
					"name": "Blurred Movement",
					"entries": [
						"Attack rolls against the quickling have disadvantage unless the quickling is {@condition incapacitated} or {@condition restrained}."
					]
				},
				{
					"name": "Evasion",
					"entries": [
						"If the quickling is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The quickling makes three dagger attacks."
					]
				},
				{
					"name": "Dagger",
					"entries": [
						"{@atk mw,rw} {@hit 8} to hit, reach 5 ft. or range 20/60 ft., one target. {@h}8 ({@damage 1d4 + 6}) piercing damage."
					]
				}
			],
			"environment": [
				"forest"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/quickling.mp3"
			},
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C",
				"S"
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
			"name": "Red Guard Drake",
			"source": "VGM",
			"page": 158,
			"size": "M",
			"type": "dragon",
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
				"average": 52,
				"formula": "7d8 + 21"
			},
			"speed": {
				"walk": 30,
				"climb": 30
			},
			"str": 16,
			"dex": 11,
			"con": 16,
			"int": 4,
			"wis": 10,
			"cha": 7,
			"skill": {
				"perception": "+2"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 12,
			"resist": [
				"fire"
			],
			"languages": [
				"understands Draconic but can't speak it"
			],
			"cr": "2",
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The drake attacks twice, once with its bite and once with its tail."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 5} to hit, reach 5 ft., one target. {@h}7 ({@damage 1d8 + 3}) piercing damage."
					]
				},
				{
					"name": "Tail",
					"entries": [
						"{@atk mw} {@hit 5} to hit, reach 5 ft., one target. {@h}6 ({@damage 1d6 + 3}) bludgeoning damage."
					]
				}
			],
			"environment": [
				"mountain",
				"underdark",
				"urban"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/guard-drake.mp3"
			},
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"CS",
				"DR"
			],
			"damageTags": [
				"B",
				"P"
			],
			"miscTags": [
				"MW"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Redcap",
			"source": "VGM",
			"page": 188,
			"otherSources": [
				{
					"source": "ToA"
				},
				{
					"source": "BGDIA"
				},
				{
					"source": "IMR"
				}
			],
			"size": "S",
			"type": "fey",
			"alignment": [
				"C",
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
				"average": 45,
				"formula": "6d6 + 24"
			},
			"speed": {
				"walk": 25
			},
			"str": 18,
			"dex": 13,
			"con": 18,
			"int": 10,
			"wis": 12,
			"cha": 9,
			"skill": {
				"athletics": "+6",
				"perception": "+3"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 13,
			"languages": [
				"Common",
				"Sylvan"
			],
			"cr": "3",
			"trait": [
				{
					"name": "Iron Boots",
					"entries": [
						"While moving, the redcap has disadvantage on Dexterity ({@skill Stealth}) checks."
					]
				},
				{
					"name": "Outsize Strength",
					"entries": [
						"While grappling, the redcap is considered to be Medium. Also, wielding a heavy weapon doesn't impose disadvantage on its attack rolls."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The redcap makes three attacks with its wicked sickle."
					]
				},
				{
					"name": "Wicked Sickle",
					"entries": [
						"{@atk mw} {@hit 6} to hit, reach 5 ft., one target. {@h}9 ({@damage 2d4 + 4}) slashing damage."
					]
				},
				{
					"name": "Ironbound Pursuit",
					"entries": [
						"The redcap moves up to its speed to a creature it can see and kicks with its iron boots. The target must succeed on a {@dc 14} Dexterity saving throw or take 20 ({@damage 3d10 + 4}) bludgeoning damage and be knocked {@condition prone}."
					]
				}
			],
			"variant": [
				{
					"type": "variant",
					"name": "Madcap",
					"entries": [
						"A madcap is a redcap that soaks its hat in demon ichor instead of blood. Contact with demon ichor makes the creature even more psychotic, causing it to brood over irrational hatreds. A group of madcaps will sometimes band together over a shared hatred of something, such as music, creatures with curly hair, the word \"cool,\" or the color blue.",
						"When a madcap drops to 0 hit points, its hateful existence comes to an end in spectacular fashion as it bursts into flames, reducing itself, its ichor-soaked hat, and its pants to ashes instantly while leaving behind its weapon and smoldering iron boots."
					],
					"variantSource": {
						"source": "BGDIA",
						"page": 240
					}
				}
			],
			"environment": [
				"forest",
				"swamp",
				"hill"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/redcap.mp3"
			},
			"altArt": [
				{
					"name": "Madcap",
					"source": "BGDIA"
				}
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C",
				"S"
			],
			"damageTags": [
				"B",
				"S"
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
			"name": "Rothé",
			"source": "VGM",
			"page": 208,
			"size": "L",
			"type": "beast",
			"alignment": [
				"U"
			],
			"ac": [
				10
			],
			"hp": {
				"average": 15,
				"formula": "2d10 + 4"
			},
			"speed": {
				"walk": 30
			},
			"str": 18,
			"dex": 10,
			"con": 14,
			"int": 2,
			"wis": 10,
			"cha": 4,
			"senses": [
				"darkvision 30 ft."
			],
			"passive": 10,
			"cr": "1/4",
			"trait": [
				{
					"name": "Charge",
					"entries": [
						"If the rothé moves at least 20 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 7 ({@damage 2d6}) piercing damage."
					]
				}
			],
			"action": [
				{
					"name": "Gore",
					"entries": [
						"{@atk mw} {@hit 6} to hit, reach 5 ft., one target. {@h}7 ({@damage 1d6 + 4}) piercing damage."
					]
				}
			],
			"environment": [
				"grassland"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/rothe.mp3"
			},
			"traitTags": [
				"Charge"
			],
			"senseTags": [
				"D"
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
			"name": "Sea Spawn",
			"source": "VGM",
			"page": 189,
			"size": "M",
			"type": "humanoid",
			"alignment": [
				"N",
				"E"
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
				"average": 32,
				"formula": "5d8 + 10"
			},
			"speed": {
				"walk": 20,
				"swim": 30
			},
			"str": 15,
			"dex": 8,
			"con": 15,
			"int": 6,
			"wis": 10,
			"cha": 8,
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 10,
			"languages": [
				"understands Aquan and Common but can't speak"
			],
			"cr": "1",
			"trait": [
				{
					"name": "Limited Amphibiousness",
					"entries": [
						"The sea spawn can breathe air and water, but needs to be submerged in the sea at least once a day for 1 minute to avoid suffocating."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The sea spawn makes three attacks: two unarmed strikes and one with its Piscine Anatomy."
					]
				},
				{
					"name": "Unarmed Strike",
					"entries": [
						"{@atk mw} {@hit 4} to hit, reach 5 ft., one target. {@h}4 ({@damage 1d4 + 2}) bludgeoning damage."
					]
				},
				{
					"name": "Piscine Anatomy",
					"entries": [
						"The sea spawn has one or more of the following attack options, provided it has the appropriate anatomy:",
						{
							"type": "list",
							"style": "list-hang-notitle",
							"items": [
								{
									"type": "item",
									"name": "Bite.",
									"entry": "{@atk mw} {@hit 5} to hit, reach 5 ft., one target. {@h}4 ({@damage 1d4 + 2}) piercing damage."
								},
								{
									"type": "item",
									"name": "Poison Quills.",
									"entry": "{@atk mw} {@hit 5} to hit, reach 5 ft., one creature. {@h}3 ({@damage 1d6}) poison damage, and the target must succeed on a {@dc 12} Constitution saving throw or be {@condition poisoned} for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
								},
								{
									"type": "item",
									"name": "Tentacle.",
									"entry": "{@atk mw} {@hit 5} to hit, reach 10 ft., one target. {@h}5 ({@damage 1d6 + 2}) bludgeoning damage, and the target is {@condition grappled} (escape {@dc 12}) if it is a Medium or smaller creature. Until this grapple ends, the sea spawn can't use this tentacle on another target."
								}
							]
						}
					]
				}
			],
			"environment": [
				"underwater",
				"coastal"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/sea-spawn.mp3"
			},
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"AQ",
				"C",
				"CS"
			],
			"damageTags": [
				"B",
				"I",
				"P"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"grappled",
				"poisoned"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Shadow Mastiff",
			"source": "VGM",
			"page": 190,
			"size": "M",
			"type": "monstrosity",
			"alignment": [
				"N",
				"E"
			],
			"ac": [
				12
			],
			"hp": {
				"average": 33,
				"formula": "6d8 + 6"
			},
			"speed": {
				"walk": 40
			},
			"str": 16,
			"dex": 14,
			"con": 13,
			"int": 5,
			"wis": 12,
			"cha": 5,
			"skill": {
				"perception": "+3",
				"stealth": "+6"
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
					"note": "from nonmagical attacks while in dim light or darkness",
					"cond": true
				}
			],
			"cr": "2",
			"trait": [
				{
					"name": "Ethereal Awareness",
					"entries": [
						"The shadow mastiff can see ethereal creatures and objects."
					]
				},
				{
					"name": "Keen Hearing and Smell",
					"entries": [
						"The shadow mastiff has advantage on Wisdom ({@skill Perception}) checks that rely on hearing or smell."
					]
				},
				{
					"name": "Shadow Blend",
					"entries": [
						"While in dim light or darkness, the shadow mastiff can use a bonus action to become {@condition invisible}, along with anything it is wearing or carrying. The invisibility lasts until the shadow mastiff uses a bonus action to end it or until the shadow mastiff attacks, is in bright light, or is {@condition incapacitated}."
					]
				},
				{
					"name": "Sunlight Weakness",
					"entries": [
						"While in bright light created by sunlight, the shadow mastiff has disadvantage on attack rolls, ability checks, and saving throws."
					]
				}
			],
			"action": [
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 5} to hit, reach 5 ft., one target. {@h}10 ({@damage 2d6 + 3}) piercing damage. If the target is a creature, it must succeed on a {@dc 13} Strength saving throw or be knocked {@condition prone}."
					]
				}
			],
			"variant": [
				{
					"type": "variant",
					"name": "Shadow Mastiff Alpha",
					"entries": [
						"A shadow mastiff alpha has the statistics of a normal shadow mastiff, with the following modifications:",
						{
							"type": "list",
							"items": [
								"The alpha has above average (42\u201354) hit points.",
								"It has an Intelligence of 6 (-2).",
								"It has the Terrifying Howl action option described below."
							]
						},
						{
							"type": "entries",
							"name": "Terrifying Howl",
							"entries": [
								"The shadow mastiff howls. Any beast or humanoid within 300 feet of the mastiff and able to hear its howl must succeed on a {@dc 11} Wisdom saving throw or be {@condition frightened} for 1 minute. A {@condition frightened} target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a target's saving throw is successful or the effect ends for it, the target is immune to any shadow mastiff's Terrifying Howl for the next 24 hours."
							]
						}
					]
				}
			],
			"environment": [
				"forest",
				"swamp",
				"hill"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/shadow-mastiff.mp3"
			},
			"traitTags": [
				"Keen Senses"
			],
			"senseTags": [
				"D"
			],
			"damageTags": [
				"P"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"frightened",
				"prone"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Shoosuva",
			"source": "VGM",
			"page": 137,
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
					"ac": 14,
					"from": [
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 110,
				"formula": "13d10 + 39"
			},
			"speed": {
				"walk": 40
			},
			"str": 18,
			"dex": 13,
			"con": 17,
			"int": 7,
			"wis": 14,
			"cha": 9,
			"save": {
				"dex": "+4",
				"con": "+6",
				"wis": "+5"
			},
			"senses": [
				"darkvision 60 ft."
			],
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
				"Gnoll",
				"telepathy 120 ft."
			],
			"cr": "8",
			"trait": [
				{
					"name": "Rampage",
					"entries": [
						"When it reduces a creature to 0 hit points with a melee attack on its turn, the shoosuva can take a bonus action to move up to half its speed and make a bite attack."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The shoosuva makes two attacks: one with its bite and one with its tail stinger."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 7} to hit, reach 5 ft., one target. {@h}26 ({@damage 4d10 + 4}) piercing damage."
					]
				},
				{
					"name": "Tail Stinger",
					"entries": [
						"{@atk mw} {@hit 7} to hit, reach 15 ft., one creature. {@h}13 ({@damage 2d8 + 4}) piercing damage, and the target must succeed on a {@dc 14} Constitution saving throw or become {@condition poisoned}. While {@condition poisoned}, the target is also {@condition paralyzed}. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
					]
				}
			],
			"environment": [
				"grassland",
				"forest",
				"hill",
				"arctic"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/shoosuva.mp3"
			},
			"traitTags": [
				"Rampage"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"AB",
				"OTH",
				"TP"
			],
			"damageTags": [
				"P"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"paralyzed",
				"poisoned"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Slithering Tracker",
			"source": "VGM",
			"page": 191,
			"otherSources": [
				{
					"source": "ToA"
				},
				{
					"source": "IMR"
				},
				{
					"source": "MOT"
				}
			],
			"size": "M",
			"type": "ooze",
			"alignment": [
				"C",
				"E"
			],
			"ac": [
				14
			],
			"hp": {
				"average": 32,
				"formula": "5d8 + 10"
			},
			"speed": {
				"walk": 30,
				"climb": 30,
				"swim": 30
			},
			"str": 16,
			"dex": 19,
			"con": 15,
			"int": 10,
			"wis": 14,
			"cha": 11,
			"skill": {
				"stealth": "+8"
			},
			"senses": [
				"blindsight 120 ft."
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
			"vulnerable": [
				"cold",
				"fire"
			],
			"conditionImmune": [
				"blinded",
				"deafened",
				"exhaustion",
				"grappled",
				"paralyzed",
				"petrified",
				"prone",
				"restrained",
				"unconscious"
			],
			"languages": [
				"understands languages it knew in its previous form but can't speak"
			],
			"cr": "3",
			"trait": [
				{
					"name": "Ambusher",
					"entries": [
						"In the first round of a combat, the slithering tracker has advantage on attack rolls against any creature it surprised."
					]
				},
				{
					"name": "Damage Transfer",
					"entries": [
						"While grappling a creature, the slithering tracker takes only haIf the damage dealt to it, and the creature it is grappling takes the other half."
					]
				},
				{
					"name": "False Appearance",
					"entries": [
						"While the slithering tracker remains motionless, it is indistinguishable from a puddle, unless an observer succeeds on a {@dc 18} Intelligence (Investigation) check."
					]
				},
				{
					"name": "Keen Tracker",
					"entries": [
						"The slithering tracker has advantage on Wisdom checks to track prey."
					]
				},
				{
					"name": "Liquid Form",
					"entries": [
						"The slithering tracker can enter an enemy's space and stop there. It can also move through a space as narrow as 1 inch wide without squeezing."
					]
				},
				{
					"name": "Spider Climb",
					"entries": [
						"The slithering tracker can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
					]
				},
				{
					"name": "Watery Stealth",
					"entries": [
						"While underwater, the slithering tracker has advantage on Dexterity (Stealth) checks made to hide, and it can take the Hide action as a bonus action."
					]
				}
			],
			"action": [
				{
					"name": "Slam",
					"entries": [
						"{@atk mw} {@hit 5} to hit, reach 5 ft., one target. {@h}8 ({@damage 1d10 + 3}) bludgeoning damage."
					]
				},
				{
					"name": "Life Leech",
					"entries": [
						"One Large or smaller creature that the slithering tracker can see within 5 feet of it must succeed on a {@dc 13} Dexterity saving throw or be {@condition grappled} (escape {@dc 13}). Until this grapple ends, the target is {@condition restrained} and unable to breathe unless it can breathe water. In addition, the {@condition grappled} target takes 16 ({@damage 3d10}) necrotic damage at the start of each of its turns. The slithering tracker can grapple only one target at a time."
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
				"path": "bestiary/slithering-tracker.mp3"
			},
			"traitTags": [
				"Ambusher",
				"False Appearance",
				"Keen Senses",
				"Spider Climb"
			],
			"senseTags": [
				"B"
			],
			"languageTags": [
				"CS"
			],
			"damageTags": [
				"B",
				"N"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"grappled",
				"restrained"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Spawn of Kyuss",
			"source": "VGM",
			"page": 192,
			"size": "M",
			"type": "undead",
			"alignment": [
				"C",
				"E"
			],
			"ac": [
				10
			],
			"hp": {
				"average": 76,
				"formula": "9d8 + 36"
			},
			"speed": {
				"walk": 30
			},
			"str": 16,
			"dex": 11,
			"con": 18,
			"int": 5,
			"wis": 7,
			"cha": 3,
			"save": {
				"wis": "+1"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 8,
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"exhaustion",
				"poisoned"
			],
			"languages": [
				"understands the languages it knew in life but can't speak"
			],
			"cr": "5",
			"trait": [
				{
					"name": "Regeneration",
					"entries": [
						"The spawn of Kyuss regains 10 hit points at the start of its turn if it has at least 1 hit point and isn't in sunlight or a body of running water. If the spawn takes acid, fire, or radiant damage, this trait doesn't function at the start of the spawn's next turn. The spawn is destroyed only if it starts its turn with 0 hit points and doesn't regenerate."
					]
				},
				{
					"name": "Worms",
					"entries": [
						"If the spawn of Kyuss is targeted by an effect that cures disease or removes a curse, all the worms infesting it wither away, and it loses its Burrowing Worm action."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The spawn of Kyuss makes two attacks with its claws and uses Burrowing Worm."
					]
				},
				{
					"name": "Burrowing Worm",
					"entries": [
						"A worm launches from the spawn of Kyuss at one humanoid that the spawn can see within 10 feet of it. The worm latches onto the target's skin unless the target succeeds on a {@dc 11} Dexterity saving throw. The worm is a Tiny undead with AC 6, 1 hit point, a 2 (-4) in every ability score, and a speed of 1 foot. While on the target's skin, the worm can be killed by normal means or scraped off using an action (the spawn can use this action to launch a scraped-off worm at a humanoid it can see within 10 feet of the worm). Otherwise, the worm burrows under the target's skin at the end of the target's next turn, dealing 1 piercing damage to it. At the end of each of its turns thereafter, the target takes 7 ({@damage 2d6}) necrotic damage per worm infesting it (maximum of {@dice 10d6}). A worm-infested target dies if it drops to 0 hit points, then rises 10 minutes later as a spawn of Kyuss. If a worm-infested creature is targeted by an effect that cures disease or removes a curse, all the worms infesting it wither away."
					]
				},
				{
					"name": "Claw",
					"entries": [
						"{@atk mw} {@hit 6} to hit, reach 5 ft., one target. {@h}6 ({@damage 1d6 + 3}) slashing damage plus 7 ({@damage 2d6}) necrotic damage."
					]
				}
			],
			"environment": [
				"underdark",
				"desert"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/spawn-of-kyuss.mp3"
			},
			"traitTags": [
				"Regeneration"
			],
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
			"name": "Stegosaurus",
			"group": "Dinosaurs",
			"source": "VGM",
			"page": 140,
			"otherSources": [
				{
					"source": "ToA"
				}
			],
			"size": "H",
			"type": "beast",
			"alignment": [
				"U"
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
				"average": 76,
				"formula": "8d12 + 24"
			},
			"speed": {
				"walk": 40
			},
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
					"name": "Tail",
					"entries": [
						"{@atk mw} {@hit 7} to hit, reach 10 ft., one target. {@h}26 ({@damage 6d6 + 5}) piercing damage."
					]
				}
			],
			"environment": [
				"grassland",
				"forest"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/stegosaurus.mp3"
			},
			"damageTags": [
				"P"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Stench Kow",
			"source": "VGM",
			"page": 208,
			"size": "L",
			"type": "beast",
			"alignment": [
				"U"
			],
			"ac": [
				10
			],
			"hp": {
				"average": 15,
				"formula": "2d10 + 4"
			},
			"speed": {
				"walk": 30
			},
			"str": 18,
			"dex": 10,
			"con": 14,
			"int": 2,
			"wis": 10,
			"cha": 4,
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 10,
			"resist": [
				"cold",
				"fire",
				"poison"
			],
			"cr": "1/4",
			"trait": [
				{
					"name": "Charge",
					"entries": [
						"If the kow moves at least 20 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 7 ({@damage 2d6}) piercing damage."
					]
				},
				{
					"name": "Stench",
					"entries": [
						"Any creature other than a stench kow that starts its turn within 5 feet of the stench kow must succeed on a {@dc 12} Constitution saving throw or be {@condition poisoned} until the start of the creature's next turn. On a successful saving throw, the creature is immune to the stench of all stench kows for 1 hour."
					]
				}
			],
			"action": [
				{
					"name": "Gore",
					"entries": [
						"{@atk mw} {@hit 6} to hit, reach 5 ft., one target. {@h}7 ({@damage 1d6 + 4}) piercing damage."
					]
				}
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/stench-cow.mp3"
			},
			"traitTags": [
				"Charge"
			],
			"senseTags": [
				"D"
			],
			"damageTags": [
				"P"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"poisoned"
			],
			"hasFluff": true
		},
		{
			"name": "Stone Giant Dreamwalker",
			"source": "VGM",
			"page": 150,
			"size": "H",
			"type": {
				"type": "giant",
				"tags": [
					"stone giant"
				]
			},
			"alignment": [
				"C",
				"N"
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
				"average": 161,
				"formula": "14d12 + 70"
			},
			"speed": {
				"walk": 40
			},
			"str": 23,
			"dex": 14,
			"con": 21,
			"int": 10,
			"wis": 8,
			"cha": 12,
			"save": {
				"dex": "+6",
				"con": "+9",
				"wis": "+3"
			},
			"skill": {
				"athletics": "+14",
				"perception": "+3"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 13,
			"conditionImmune": [
				"charmed",
				"frightened"
			],
			"languages": [
				"Common",
				"Giant"
			],
			"cr": "10",
			"trait": [
				{
					"name": "Dreamwalker's Charm",
					"entries": [
						"An enemy that starts its turn within 30 feet of the giant must make a {@dc 13} Charisma saving throw, provided that the giant isn't {@condition incapacitated}. On a failed save, the creature is {@condition charmed} by the giant. A creature {@condition charmed} in this way can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Once it succeeds on the saving throw, the creature is immune to this giant's Dreamwalker's Charm for 24 hours."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The giant makes two attacks with its greatclub."
					]
				},
				{
					"name": "Greatclub",
					"entries": [
						"{@atk mw} {@hit 10} to hit, reach 15 ft., one target. {@h}19 ({@damage 3d8 + 6}) bludgeoning damage."
					]
				},
				{
					"name": "Petrifying Touch",
					"entries": [
						"The giant touches one Medium or smaller creature within 10 feet of it that is {@condition charmed} by it. The target must make a {@dc 17} Constitution saving throw. On a failed save, the target becomes {@condition petrified}, and the giant can adhere the target to its stony body. {@spell Greater restoration} spells and other magic that can undo petrification have no effect on a {@condition petrified} creature on the giant unless the giant is dead, in which case the magic works normally, freeing the {@condition petrified} creature as well as ending the {@condition petrified} condition on it."
					]
				},
				{
					"name": "Rock",
					"entries": [
						"{@atk rw} {@hit 10} to hit, range 60/240 ft., one target. {@h}28 ({@damage 4d10 + 6}) bludgeoning damage. If the target is a creature, it must succeed on a {@dc 17} Strength saving throw or be knocked {@condition prone}."
					]
				}
			],
			"environment": [
				"mountain",
				"hill",
				"coastal"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/stone-giant-dreamwalker.mp3"
			},
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
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
				"RCH",
				"RW"
			],
			"conditionInflict": [
				"charmed",
				"petrified",
				"prone"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Storm Giant Quintessent",
			"source": "VGM",
			"page": 151,
			"otherSources": [
				{
					"source": "GoS"
				}
			],
			"size": "H",
			"type": {
				"type": "giant",
				"tags": [
					"storm giant"
				]
			},
			"alignment": [
				"C",
				"G"
			],
			"ac": [
				12
			],
			"hp": {
				"average": 230,
				"formula": "20d12 + 100"
			},
			"speed": {
				"walk": 50,
				"fly": {
					"number": 50,
					"condition": "(hover)"
				},
				"swim": 50,
				"canHover": true
			},
			"str": 29,
			"dex": 14,
			"con": 20,
			"int": 17,
			"wis": 20,
			"cha": 19,
			"save": {
				"str": "+14",
				"con": "+10",
				"wis": "+10",
				"cha": "+9"
			},
			"skill": {
				"arcana": "+8",
				"history": "+8"
			},
			"senses": [
				"truesight 60 ft."
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
					"note": "from nonmagical attacks",
					"cond": true
				}
			],
			"immune": [
				"lightning",
				"thunder"
			],
			"languages": [
				"Common",
				"Giant"
			],
			"cr": "16",
			"trait": [
				{
					"name": "Amphibious",
					"entries": [
						"The giant can breathe air and water."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The giant makes two Lightning Sword attacks or uses Wind Javelin twice."
					]
				},
				{
					"name": "Lightning Sword",
					"entries": [
						"{@atk mw} {@hit 14} to hit, reach 15 ft., one target. {@h}40 ({@damage 9d6 + 9}) lightning damage."
					]
				},
				{
					"name": "Windjavelin",
					"entries": [
						"The giant coalesces wind into a javelin-like form and hurls it at a creature it can see within 600 feet of it. The javelin is considered a magic weapon and deals 19 ({@damage 3d6 + 9}) piercing damage to the target, striking unerringly. The javelin disappears after it hits."
					]
				}
			],
			"legendary": [
				{
					"name": "Gust",
					"entries": [
						"The giant targets a creature it can see within 60 feet of it and creates a magical gust of wind around it. The target must succeed on a {@dc 18} Strength saving throw or be pushed up to 20 feet in any horizontal direction the giant chooses."
					]
				},
				{
					"name": "Thunderbolt (2 Actions)",
					"entries": [
						"The giant hurls a thunderbolt at a creature it can see within 600 feet of it. The target must make a {@dc 18} Dexterity saving throw, taking 22 ({@damage 4d10}) thunder damage on a failed save, or half as much damage on a successful one."
					]
				},
				{
					"name": "One with the Storm (3 Actions)",
					"entries": [
						"The giant vanishes, dispersing itself into the storm surrounding its lair. The giant can end this effect at the start of any of its turns, becoming a giant once more and appearing in any location it chooses within its lair. While dispersed, the giant can't take any actions other than lair actions, and it can't be targeted by attacks, spells, or other effects. The giant can't use this ability outside its lair, nor can it use this ability if another creature is using a control weather spell or similar magic to quell the storm."
					]
				}
			],
			"legendaryGroup": {
				"name": "Storm Giant Quintessent",
				"source": "VGM"
			},
			"environment": [
				"underwater",
				"mountain",
				"desert",
				"coastal",
				"arctic"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/storm-giant-quintessent.mp3"
			},
			"traitTags": [
				"Amphibious"
			],
			"senseTags": [
				"U"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C",
				"GI"
			],
			"damageTags": [
				"L",
				"P",
				"T"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Swarm of Cranium Rats",
			"source": "VGM",
			"page": 133,
			"size": "M",
			"type": {
				"type": "beast",
				"swarmSize": "T"
			},
			"alignment": [
				"L",
				"E"
			],
			"ac": [
				12
			],
			"hp": {
				"average": 36,
				"formula": "8d8"
			},
			"speed": {
				"walk": 30
			},
			"str": 9,
			"dex": 14,
			"con": 10,
			"int": 15,
			"wis": 11,
			"cha": 14,
			"senses": [
				"darkvision 30 ft."
			],
			"passive": 10,
			"resist": [
				"bludgeoning",
				"piercing",
				"slashing"
			],
			"conditionImmune": [
				"charmed",
				"frightened",
				"grappled",
				"paralyzed",
				"petrified",
				"prone",
				"restrained",
				"stunned"
			],
			"languages": [
				"telepathy 30 ft."
			],
			"cr": "5",
			"spellcasting": [
				{
					"name": "Innate Spellcasting (Psionics)",
					"headerEntries": [
						"The swarm's innate spellcasting ability is Intelligence (spell save {@dc 13}). As long as it has more than half of its hit points, it can innately cast the following spells, requiring no components:"
					],
					"will": [
						"{@spell command}",
						"{@spell comprehend languages}",
						"{@spell detect thoughts}"
					],
					"daily": {
						"1e": [
							"{@spell confusion}",
							"{@spell dominate monster}"
						]
					},
					"ability": "int"
				}
			],
			"trait": [
				{
					"name": "Illumination",
					"entries": [
						"As a bonus action, the swarm can shed dim light from its brains in a 5-foot radius, increase the illumination to bright light in a 5 to 20-foot radius (and dim light for an additional number of feet equal to the chosen radius), or extinguish the light."
					]
				},
				{
					"name": "Swarm",
					"entries": [
						"The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny rat. The swarm can't regain hit points or gain temporary hit points."
					]
				},
				{
					"name": "Telepathic Shroud",
					"entries": [
						"The swarm is immune to any effect that would sense its emotions or read its thoughts. as well as to all divination spells."
					]
				}
			],
			"action": [
				{
					"name": "Bites",
					"entries": [
						"{@atk mw} {@hit 5} to hit, reach 0 ft., one target in the swarm's space. {@h}14 ({@damage 4d6}) piercing damage, or 7 ({@damage 2d6}) piercing damage if the swarm has half of its hit points or fewer."
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
				"path": "bestiary/swarm-of-cranium-rats.mp3"
			},
			"traitTags": [
				"Illumination"
			],
			"senseTags": [
				"D"
			],
			"languageTags": [
				"TP"
			],
			"damageTags": [
				"P"
			],
			"spellcastingTags": [
				"I",
				"P"
			],
			"miscTags": [
				"AOE",
				"MW"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Swarm of Rot Grubs",
			"source": "VGM",
			"page": 208,
			"otherSources": [
				{
					"source": "GoS"
				}
			],
			"size": "M",
			"type": {
				"type": "beast",
				"swarmSize": "T"
			},
			"alignment": [
				"U"
			],
			"ac": [
				8
			],
			"hp": {
				"average": 22,
				"formula": "5d8"
			},
			"speed": {
				"walk": 5,
				"climb": 5
			},
			"str": 2,
			"dex": 7,
			"con": 10,
			"int": 1,
			"wis": 2,
			"cha": 1,
			"senses": [
				"blindsight 10 ft."
			],
			"passive": 6,
			"resist": [
				"piercing",
				"slashing"
			],
			"conditionImmune": [
				"charmed",
				"frightened",
				"grappled",
				"paralyzed",
				"petrified",
				"prone",
				"restrained"
			],
			"cr": "1/2",
			"trait": [
				{
					"name": "Swarm",
					"entries": [
						"The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny maggot. The swarm can't regain hit points or gain temporary hit points."
					]
				}
			],
			"action": [
				{
					"name": "Bites",
					"entries": [
						"{@atk mw} {@hit 0} to hit, reach 0 ft., one creature in the swarm's space. {@h}The target is infested by {@dice 1d4} rot grubs. At the start of each of the target's turns, the target takes {@dice 1d6} piercing damage per rot grub infesting it. Applying fire to the bite wound before the end of the target's next turn deals 1 fire damage to the target and kills these rot grubs. After this time, these rot grubs are too far under the skin to be burned. If a target infested by rot grubs ends its turn with 0 hit points, it dies as the rot grubs burrow into its heart and kill it. Any effect that cures disease kills all rot grubs infesting the target."
					]
				}
			],
			"environment": [
				"underdark",
				"swamp"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/swarm-of-rot-grubs.mp3"
			},
			"senseTags": [
				"B"
			],
			"damageTags": [
				"F",
				"P"
			],
			"miscTags": [
				"MW"
			],
			"hasFluff": true
		},
		{
			"name": "Swashbuckler",
			"source": "VGM",
			"page": 217,
			"otherSources": [
				{
					"source": "WDH"
				},
				{
					"source": "ToA"
				},
				{
					"source": "DIP"
				},
				{
					"source": "SLW"
				},
				{
					"source": "SDW"
				}
			],
			"size": "M",
			"type": {
				"type": "humanoid",
				"tags": [
					"any race"
				]
			},
			"alignment": [
				"NX",
				"C",
				"G",
				"NY",
				"E"
			],
			"ac": [
				{
					"ac": 17,
					"from": [
						"{@item leather armor|phb}"
					]
				}
			],
			"hp": {
				"average": 66,
				"formula": "12d8 + 12"
			},
			"speed": {
				"walk": 30
			},
			"str": 12,
			"dex": 18,
			"con": 12,
			"int": 14,
			"wis": 11,
			"cha": 15,
			"skill": {
				"acrobatics": "+8",
				"athletics": "+5",
				"persuasion": "+6"
			},
			"passive": 10,
			"languages": [
				"any one language (usually Common)"
			],
			"cr": "3",
			"trait": [
				{
					"name": "Lightfooted",
					"entries": [
						"The swashbuckler can take the Dash or Disengage action as a bonus action on each of its turns."
					]
				},
				{
					"name": "Suave Defense",
					"entries": [
						"While the swashbuckler is wearing light or no armor and wielding no shield, its AC includes its Charisma modifier."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The swashbuckler makes three attacks: one with a dagger and two with its rapier."
					]
				},
				{
					"name": "Dagger",
					"entries": [
						"{@atk mw,rw} {@hit 6} to hit, reach 5 ft. or range 20/60 ft., one target. {@h}6 ({@damage 1d4 + 4}) piercing damage."
					]
				},
				{
					"name": "Rapier",
					"entries": [
						"{@atk mw} {@hit 6} to hit, reach 5 ft., one target. {@h}8 ({@damage 1d8 + 4}) piercing damage."
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
				"path": "bestiary/swashbuckler.mp3"
			},
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"C",
				"X"
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
			"name": "Tanarukk",
			"source": "VGM",
			"page": 186,
			"size": "M",
			"type": {
				"type": "fiend",
				"tags": [
					"demon",
					"orc"
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
				"average": 95,
				"formula": "10d8 + 50"
			},
			"speed": {
				"walk": 30
			},
			"str": 18,
			"dex": 13,
			"con": 20,
			"int": 9,
			"wis": 9,
			"cha": 9,
			"skill": {
				"intimidation": "+2",
				"perception": "+2"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 12,
			"resist": [
				"fire",
				"poison"
			],
			"languages": [
				"Abyssal",
				"Common",
				"Orc"
			],
			"cr": "5",
			"trait": [
				{
					"name": "Aggressive",
					"entries": [
						"As a bonus action, the tanarukk can move up to its speed toward a hostile creature that it can see."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"The tanarukk has advantage on saving throws against spells and other magical effects."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The tanarukk makes two attacks: one with its bite and one with its greatsword."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 7} to hit, reach 5 ft., one target. {@h}8 ({@damage 1d8 + 4}) piercing damage."
					]
				},
				{
					"name": "Greatsword",
					"entries": [
						"{@atk mw} {@hit 7} to hit, reach 5 ft., one target. {@h}11 ({@damage 2d6 + 4}) slashing damage."
					]
				}
			],
			"reaction": [
				{
					"name": "Unbridled Fury",
					"entries": [
						"In response to being hit by a melee attack, the tanarukk can make one melee weapon attack with advantage against the attacker."
					]
				}
			],
			"environment": [
				"underdark",
				"mountain",
				"hill"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/tanarukk.mp3"
			},
			"traitTags": [
				"Aggressive",
				"Magic Resistance"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"AB",
				"C",
				"O"
			],
			"damageTags": [
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
			"name": "Thorny",
			"source": "VGM",
			"page": 197,
			"otherSources": [
				{
					"source": "ToA"
				}
			],
			"size": "M",
			"type": "plant",
			"alignment": [
				"N"
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
				"average": 27,
				"formula": "5d8 + 5"
			},
			"speed": {
				"walk": 30
			},
			"str": 13,
			"dex": 12,
			"con": 13,
			"int": 2,
			"wis": 10,
			"cha": 6,
			"skill": {
				"perception": "+4",
				"stealth": "+3"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 14,
			"resist": [
				"lightning",
				"piercing"
			],
			"cr": "1",
			"trait": [
				{
					"name": "Plant Camouflage",
					"entries": [
						"The thorny has advantage on Dexterity ({@skill Stealth}) checks it makes in any terrain with ample obscuring plant life."
					]
				},
				{
					"name": "Regeneration",
					"entries": [
						"The thorny regains 5 hit points at the start of its turn. If it takes cold, fire, or necrotic damage, this trait doesn't function at the start of the thorny's next turn. The thorny dies only if it starts its turn with 0 hit points and doesn't regenerate."
					]
				},
				{
					"name": "Thorny Body",
					"entries": [
						"At the start of its turn, the thorny deals 2 ({@damage 1d4}) piercing damage to any creature grappling it."
					]
				}
			],
			"action": [
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 3} to hit, reach 5 ft., one target. {@h}8 ({@damage 2d6 + 1}) piercing damage."
					]
				}
			],
			"environment": [
				"forest",
				"swamp"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/thorny.mp3"
			},
			"traitTags": [
				"Regeneration"
			],
			"senseTags": [
				"D"
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
			"name": "Tlincalli",
			"source": "VGM",
			"page": 193,
			"size": "L",
			"type": "monstrosity",
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
				"average": 85,
				"formula": "10d10 + 30"
			},
			"speed": {
				"walk": 40
			},
			"str": 16,
			"dex": 13,
			"con": 16,
			"int": 8,
			"wis": 12,
			"cha": 8,
			"skill": {
				"perception": "+4",
				"stealth": "+4",
				"survival": "+4"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 14,
			"languages": [
				"Tlincalli"
			],
			"cr": "5",
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The tlincalli makes two attacks: one with its longsword or spiked chain, and one with its sting."
					]
				},
				{
					"name": "Longsword",
					"entries": [
						"{@atk mw} {@hit 6} to hit, reach 5 ft., one target. {@h}7 ({@damage 1d8 + 3}) slashing damage, or 8 ({@damage 1d10 + 3}) slashing damage if used with two hands."
					]
				},
				{
					"name": "Spiked Chain",
					"entries": [
						"{@atk mw} {@hit 6} to hit, reach 10 ft., one target. {@h}6 ({@damage 1d6 + 3}) piercing damage, and the target is {@condition grappled} (escape {@dc 11}) if it is a Large or smaller creature. Until this grapple ends, the target is {@condition restrained}, and the tlincalli can't use the spiked chain against another target."
					]
				},
				{
					"name": "Sting",
					"entries": [
						"{@atk mw} {@hit 6} to hit, reach 5 ft., one creature. {@h}6 ({@damage 1d6 + 3}) piercing damage plus 14 ({@damage 4d6}) poison damage, and the target must succeed on a {@dc 14} Constitution saving throw or be {@condition poisoned} for 1 minute. If it fails the saving throw by 5 or more, the target is also {@condition paralyzed} while {@condition poisoned}. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
					]
				}
			],
			"environment": [
				"desert"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/tlincalli.mp3"
			},
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"OTH"
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
			"conditionInflict": [
				"grappled",
				"paralyzed",
				"poisoned",
				"restrained"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Transmuter",
			"source": "VGM",
			"page": 218,
			"otherSources": [
				{
					"source": "TftYP"
				}
			],
			"size": "M",
			"type": {
				"type": "humanoid",
				"tags": [
					"any race"
				]
			},
			"alignment": [
				"A"
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
				"average": 40,
				"formula": "9d8"
			},
			"speed": {
				"walk": 30
			},
			"str": 9,
			"dex": 14,
			"con": 11,
			"int": 17,
			"wis": 12,
			"cha": 11,
			"save": {
				"int": "+6",
				"wis": "+4"
			},
			"skill": {
				"arcana": "+6",
				"history": "+6"
			},
			"passive": 11,
			"languages": [
				"any four languages"
			],
			"cr": "5",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The transmuter is a 9th-level spellcaster. Its spellcasting ability is Intelligence (spell save {@dc 14}, {@hit 6} to hit with spell attacks). The transmuter has the following wizard spells prepared:"
					],
					"spells": {
						"0": {
							"spells": [
								"{@spell light}",
								"{@spell mending}",
								"{@spell prestidigitation}",
								"{@spell ray of frost}"
							]
						},
						"1": {
							"slots": 4,
							"spells": [
								"{@spell chromatic orb}",
								"{@spell expeditious retreat}*",
								"{@spell mage armor}"
							]
						},
						"2": {
							"slots": 3,
							"spells": [
								"{@spell alter self}*",
								"{@spell hold person}",
								"{@spell knock}*"
							]
						},
						"3": {
							"slots": 3,
							"spells": [
								"{@spell blink}*",
								"{@spell fireball}",
								"{@spell slow}*"
							]
						},
						"4": {
							"slots": 3,
							"spells": [
								"{@spell polymorph}*",
								"{@spell stoneskin}"
							]
						},
						"5": {
							"slots": 1,
							"spells": [
								"{@spell telekinesis}*"
							]
						}
					},
					"footerEntries": [
						"*Transmutation spell of 1st level or higher"
					],
					"ability": "int"
				}
			],
			"trait": [
				{
					"name": "Transmuter's Stone",
					"entries": [
						"The transmuter carries a magic stone it crafted that grants its bearer one of the following effects:",
						"Darkvision out to a range of 60 feet",
						"An extra 10 feet of speed while the bearer is unencumbered",
						"Proficiency with Constitution saving throws",
						"Resistance to acid, cold, fire, lightning, or thunder damage (transmuter's choice whenever the transmuter chooses this benefit)",
						"If the transmuter has the stone and casts a transmutation spell of 1st level or higher, it can change the effect of the stone."
					]
				}
			],
			"action": [
				{
					"name": "Quarterstaff",
					"entries": [
						"{@atk mw} {@hit 2} to hit, reach 5 ft., one target. {@h}2 ({@damage 1d6 - 1}) bludgeoning damage, or 3 ({@damage 1d8 - 1}) bludgeoning damage if used with two hands."
					]
				}
			],
			"environment": [
				"urban"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/transmuter.mp3"
			},
			"languageTags": [
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
			"hasFluff": true
		},
		{
			"name": "Trapper",
			"source": "VGM",
			"page": 194,
			"otherSources": [
				{
					"source": "IMR"
				}
			],
			"size": "L",
			"type": "monstrosity",
			"alignment": [
				"U"
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
				"average": 85,
				"formula": "10d10 + 30"
			},
			"speed": {
				"walk": 10,
				"climb": 10
			},
			"str": 17,
			"dex": 10,
			"con": 17,
			"int": 2,
			"wis": 13,
			"cha": 4,
			"skill": {
				"stealth": "+2"
			},
			"senses": [
				"blindsight 30 ft.",
				"darkvision 60 ft."
			],
			"passive": 11,
			"cr": "3",
			"trait": [
				{
					"name": "False Appearance",
					"entries": [
						"While the trapper is attached to a ceiling, floor, or wall and remains motionless, it is almost indistinguishable from an ordinary section of ceiling, floor, or wall. A creature that can see it and succeeds on a {@dc 20} Intelligence (Investigation) or Intelligence (Nature) check can discern its presence."
					]
				},
				{
					"name": "Spider Climb",
					"entries": [
						"The trapper can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
					]
				}
			],
			"action": [
				{
					"name": "Smother",
					"entries": [
						"One Large or smaller creature within 5 feet of the trapper must succeed on a {@dc 14} Dexterity saving throw or be {@condition grappled} (escape {@dc 14}). Until the grapple ends, the target takes 17 ({@damage 4d6 + 3}) bludgeoning damage plus 3 ({@damage 1d6}) acid damage at the start of each of its turns. While {@condition grappled} in this way, the target is {@condition restrained}, {@condition blinded}, and at risk of suffocating. The trapper can smother only one creature at a time."
					]
				}
			],
			"environment": [
				"underdark"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/trapper.mp3"
			},
			"traitTags": [
				"False Appearance",
				"Spider Climb"
			],
			"senseTags": [
				"B",
				"D"
			],
			"damageTags": [
				"A",
				"B"
			],
			"conditionInflict": [
				"blinded",
				"grappled",
				"restrained"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Ulitharid",
			"source": "VGM",
			"page": 175,
			"otherSources": [
				{
					"source": "WDMM"
				}
			],
			"size": "L",
			"type": "aberration",
			"alignment": [
				"L",
				"E"
			],
			"ac": [
				{
					"ac": 15,
					"from": [
						"{@item breastplate|phb}"
					]
				}
			],
			"hp": {
				"average": 127,
				"formula": "17d10 + 14"
			},
			"speed": {
				"walk": 30
			},
			"str": 15,
			"dex": 12,
			"con": 15,
			"int": 21,
			"wis": 19,
			"cha": 21,
			"save": {
				"int": "+9",
				"wis": "+8",
				"cha": "+9"
			},
			"skill": {
				"arcana": "+9",
				"insight": "+8",
				"perception": "+8",
				"stealth": "+5"
			},
			"senses": [
				"darkvision 120 ft."
			],
			"passive": 18,
			"languages": [
				"Deep Speech",
				"Undercommon",
				"telepathy 2 miles"
			],
			"cr": "9",
			"spellcasting": [
				{
					"name": "Innate Spellcasting (Psionics)",
					"headerEntries": [
						"The ulitharid's innate spellcasting ability is Intelligence (spell save {@dc 17}). It can innately cast the following spells, requiring no components:"
					],
					"will": [
						"{@spell detect thoughts}",
						"{@spell levitate}"
					],
					"daily": {
						"1e": [
							"{@spell confusion}",
							"{@spell dominate monster}",
							"{@spell eyebite}",
							"{@spell feeblemind}",
							"{@spell mass suggestion}",
							"{@spell plane shift} (self only)",
							"{@spell project image}",
							"{@spell scrying}",
							"{@spell telekinesis}"
						]
					},
					"ability": "int"
				}
			],
			"trait": [
				{
					"name": "Creature Sense",
					"entries": [
						"The ulitharid is aware of the presence of creatures within 2 miles of it that have an Intelligence score of 4 or higher. It knows the distance and direction to each creature, as well as each creature's intelligence score, but can't sense anything else about it. A creature protected by a mind blank spell, a nondetection spell, or similar magic can't be perceived in this manner."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"The ulitharid has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Psionic Hub",
					"entries": [
						"If an elder brain establishes a psychic link with the ulitharid, the elder brain can form a psychic link with any other creature the ulitharid can detect using its Creature Sense. Any such link ends if the creature falls outside the telepathy ranges of both the ulitharid and the elder brain. The ulitharid can maintain its psychic link with the elder brain regardless of the distance between them, so long as they are both on the same plane of existence. If the ulitharid is more than 5 miles away from the elder brain, it can end the psychic link at any time (no action required)."
					]
				}
			],
			"action": [
				{
					"name": "Tentacles",
					"entries": [
						"{@atk mw} {@hit 9} to hit, reach 10 ft., one creature. {@h}27 ({@damage 4d10 + 5}) psychic damage. If the target is Large or smaller, it is {@condition grappled} (escape {@dc 14}) and must succeed on a {@dc 17} Intelligence saving throw or be {@condition stunned} until this grapple ends."
					]
				},
				{
					"name": "Extract Brain",
					"entries": [
						"{@atk mw} {@hit 9} to hit, reach 5 ft., one {@condition incapacitated} humanoid {@condition grappled} by the ulitharid. {@h}55 ({@damage 10d10}) piercing damage. If this damage reduces the target to 0 hit points, the ulitharid kills the target by extracting and devouring its brain."
					]
				},
				{
					"name": "Mind Blast {@recharge 5}",
					"entries": [
						"The ulitharid magically emits psychic energy in a 60-foot cone. Each creature in that area must succeed on a {@dc 17} Intelligence saving throw or take 31 ({@damage 4d12 + 5}) psychic damage and be {@condition stunned} for 1 minute. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
					]
				}
			],
			"environment": [
				"underdark"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/ulitharid.mp3"
			},
			"traitTags": [
				"Magic Resistance"
			],
			"senseTags": [
				"SD"
			],
			"actionTags": [
				"Tentacles"
			],
			"languageTags": [
				"DS",
				"TP",
				"U"
			],
			"damageTags": [
				"P",
				"Y"
			],
			"spellcastingTags": [
				"I",
				"P"
			],
			"miscTags": [
				"AOE",
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"grappled",
				"stunned"
			],
			"conditionInflictSpell": [
				"blinded",
				"charmed",
				"deafened",
				"frightened",
				"restrained",
				"unconscious"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Vargouille",
			"source": "VGM",
			"page": 195,
			"size": "T",
			"type": "fiend",
			"alignment": [
				"C",
				"E"
			],
			"ac": [
				12
			],
			"hp": {
				"average": 13,
				"formula": "3d4 + 6"
			},
			"speed": {
				"walk": 5,
				"fly": 40
			},
			"str": 6,
			"dex": 14,
			"con": 14,
			"int": 4,
			"wis": 7,
			"cha": 2,
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 8,
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
				"understands Abyssal",
				"Infernal",
				"and any languages it knew before becoming a vargouille but can't speak"
			],
			"cr": "1",
			"action": [
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 4} to hit, reach 5 ft., one target. {@h}5 ({@damage 1d6 + 2}) piercing damage plus 10 ({@damage 3d6}) poison damage."
					]
				},
				{
					"name": "Kiss",
					"entries": [
						"The vargouille kisses one {@condition incapacitated} humanoid within 5 feet of it. The target must succeed on a {@dc 12} Charisma saving throw or become cursed. The cursed target loses 1 point of Charisma after each hour, as its head takes on fiendish aspects. The curse doesn't advance while the target is in sunlight or the area of a {@spell daylight} spell; don't count that time. When the cursed target's Charisma becomes 2, it dies, and its head tears from its body and becomes a new vargouille. Casting {@spell remove curse}, {@spell greater restoration}, or a similar spell on the target before the transformation is complete can end the curse. Doing so undoes the changes made to the target by the curse."
					]
				},
				{
					"name": "Stunning Shriek",
					"entries": [
						"The vargouille shrieks. Each humanoid and beast within 30 feet of the vargouille and able to hear it must succeed on a {@dc 12} Wisdom saving throw or be {@condition frightened} until the end of the vargouille's next turn. While {@condition frightened} in this way, a target is {@condition stunned}. If a target's saving throw is successful or the effect ends for it, the target is immune to the Stunning Shriek of all vargouilles for 1 hour."
					]
				}
			],
			"environment": [
				"underdark",
				"swamp",
				"desert"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/vargouille.mp3"
			},
			"senseTags": [
				"D"
			],
			"languageTags": [
				"AB",
				"CS",
				"I"
			],
			"damageTags": [
				"I",
				"P"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"frightened",
				"stunned"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Vegepygmy",
			"source": "VGM",
			"page": 196,
			"otherSources": [
				{
					"source": "ToA"
				}
			],
			"size": "S",
			"type": "plant",
			"alignment": [
				"N"
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
				"average": 9,
				"formula": "2d6 + 2"
			},
			"speed": {
				"walk": 30
			},
			"str": 7,
			"dex": 14,
			"con": 13,
			"int": 6,
			"wis": 11,
			"cha": 7,
			"skill": {
				"perception": "+2",
				"stealth": "+4"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 12,
			"resist": [
				"lightning",
				"piercing"
			],
			"languages": [
				"Vegepygmy"
			],
			"cr": "1/4",
			"trait": [
				{
					"name": "Plant Camouflage",
					"entries": [
						"The vegepygmy has advantage on Dexterity ({@skill Stealth}) checks it makes in any terrain with ample obscuring plant life."
					]
				},
				{
					"name": "Regeneration",
					"entries": [
						"The vegepygmy regains 3 hit points at the start of its turn. If it takes cold, fire, or necrotic damage, this trait doesn't function at the start of the vegepygmy's next turn. The vegepygmy dies only if it starts its turn with 0 hit points and doesn't regenerate."
					]
				}
			],
			"action": [
				{
					"name": "Claws",
					"entries": [
						"{@atk mw} {@hit 4} to hit, reach 5 ft., one target. {@h}5 ({@damage 1d6 + 2}) slashing damage."
					]
				},
				{
					"name": "Sling",
					"entries": [
						"{@atk rw} {@hit 4} to hit, range 30/120 ft., one target. {@h}4 ({@damage 1d4 + 2}) bludgeoning damage."
					]
				}
			],
			"environment": [
				"forest",
				"swamp"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/vegepygmy.mp3"
			},
			"traitTags": [
				"Regeneration"
			],
			"senseTags": [
				"D"
			],
			"languageTags": [
				"OTH"
			],
			"damageTags": [
				"B",
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
			"name": "Vegepygmy Chief",
			"source": "VGM",
			"page": 197,
			"otherSources": [
				{
					"source": "ToA"
				}
			],
			"size": "S",
			"type": "plant",
			"alignment": [
				"N"
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
				"average": 33,
				"formula": "6d6 + 12"
			},
			"speed": {
				"walk": 30
			},
			"str": 14,
			"dex": 14,
			"con": 14,
			"int": 7,
			"wis": 12,
			"cha": 9,
			"skill": {
				"perception": "+3",
				"stealth": "+4"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 13,
			"resist": [
				"lightning",
				"piercing"
			],
			"languages": [
				"Vegepygmy"
			],
			"cr": "2",
			"trait": [
				{
					"name": "Plant Camouflage",
					"entries": [
						"The vegepygmy has advantage on Dexterity ({@skill Stealth}) checks it makes in any terrain with ample obscuring plant life."
					]
				},
				{
					"name": "Regeneration",
					"entries": [
						"The vegepygmy regains 5 hit points at the start of its turn. If it takes cold, fire, or necrotic damage, this trait doesn't function at the start of the vegepygmy's next turn. The vegepygmy dies only if it starts its turn with 0 hit points and doesn't regenerate."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The vegepygmy makes two attacks with its claws or two melee attacks with its spear."
					]
				},
				{
					"name": "Claws",
					"entries": [
						"{@atk mw} {@hit 4} to hit, reach 5 ft., one target. {@h}5 ({@damage 1d6 + 2}) slashing damage."
					]
				},
				{
					"name": "Spear",
					"entries": [
						"{@atk mw,rw} {@hit 4} to hit, reach 5 ft. or range 20/60 ft., one target. {@h}5 ({@damage 1d6 + 2}) piercing damage, or 6 ({@damage 1d8 + 2}) piercing damage if used with two hands to make a melee attack."
					]
				},
				{
					"name": "Spores (1/Day)",
					"entries": [
						"A 15-foot-radius cloud of toxic spores extends out from the vegepygmy. The spores spread around corners. Each creature in that area that isn't a plant must succeed on a {@dc 12} Constitution saving throw or be {@condition poisoned}. While {@condition poisoned} in this way, a target takes 9 ({@damage 2d8}) poison damage at the start of each of its turns. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
					]
				}
			],
			"environment": [
				"forest",
				"swamp"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/vegepygmy-chief.mp3"
			},
			"traitTags": [
				"Regeneration"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"OTH"
			],
			"damageTags": [
				"I",
				"P",
				"S"
			],
			"miscTags": [
				"AOE",
				"MW",
				"RW",
				"THW"
			],
			"conditionInflict": [
				"poisoned"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Velociraptor",
			"group": "Dinosaurs",
			"source": "VGM",
			"page": 140,
			"otherSources": [
				{
					"source": "ToA"
				}
			],
			"size": "T",
			"type": "beast",
			"alignment": [
				"U"
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
				"average": 10,
				"formula": "3d4 + 3"
			},
			"speed": {
				"walk": 30
			},
			"str": 6,
			"dex": 14,
			"con": 13,
			"int": 4,
			"wis": 12,
			"cha": 6,
			"skill": {
				"perception": "+3"
			},
			"passive": 13,
			"cr": "1/4",
			"trait": [
				{
					"name": "Pack Tactics",
					"entries": [
						"The velociraptor has advantage on an attack roll against a creature if at least one of the velociraptor's allies is within 5 feet of the creature and the ally isn't {@condition incapacitated}."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The velociraptor makes two attacks: one with its bite and one with its claws."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 4} to hit, reach 5 ft., one creature. {@h}5 ({@damage 1d6 + 2}) piercing damage."
					]
				},
				{
					"name": "Claws",
					"entries": [
						"{@atk mw} {@hit 4} to hit, reach 5 ft., one target. {@h}4 ({@damage 1d4 + 2}) slashing damage."
					]
				}
			],
			"environment": [
				"grassland",
				"forest"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/velociraptor.mp3"
			},
			"traitTags": [
				"Pack Tactics"
			],
			"actionTags": [
				"Multiattack"
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
			"name": "War Priest",
			"source": "VGM",
			"page": 218,
			"otherSources": [
				{
					"source": "DC"
				},
				{
					"source": "DIP"
				},
				{
					"source": "SDW"
				},
				{
					"source": "MOT"
				}
			],
			"size": "M",
			"type": {
				"type": "humanoid",
				"tags": [
					"any race"
				]
			},
			"alignment": [
				"A"
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
				"walk": 30
			},
			"str": 16,
			"dex": 10,
			"con": 14,
			"int": 11,
			"wis": 17,
			"cha": 13,
			"save": {
				"con": "+6",
				"wis": "+7"
			},
			"skill": {
				"intimidation": "+5",
				"religion": "+4"
			},
			"passive": 13,
			"languages": [
				"any two languages"
			],
			"cr": "9",
			"spellcasting": [
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The priest is a 9th-level spellcaster. Its spellcasting ability is Wisdom (spell save {@dc 15}, {@hit 7} to hit with spell attacks). It has the following cleric spells prepared:"
					],
					"spells": {
						"0": {
							"spells": [
								"{@spell light}",
								"{@spell mending}",
								"{@spell sacred flame}",
								"{@spell spare the dying}"
							]
						},
						"1": {
							"slots": 4,
							"spells": [
								"{@spell divine favor}",
								"{@spell guiding bolt}",
								"{@spell healing word}",
								"{@spell shield of faith}"
							]
						},
						"2": {
							"slots": 3,
							"spells": [
								"{@spell lesser restoration}",
								"{@spell magic weapon}",
								"{@spell prayer of healing}",
								"{@spell silence}",
								"{@spell spiritual weapon}"
							]
						},
						"3": {
							"slots": 3,
							"spells": [
								"{@spell beacon of hope}",
								"{@spell crusader's mantle}",
								"{@spell dispel magic}",
								"{@spell revivify}",
								"{@spell spirit guardians}",
								"{@spell water walk}"
							]
						},
						"4": {
							"slots": 3,
							"spells": [
								"{@spell banishment}",
								"{@spell freedom of movement}",
								"{@spell guardian of faith}",
								"{@spell stoneskin}"
							]
						},
						"5": {
							"slots": 1,
							"spells": [
								"{@spell flame strike}",
								"{@spell mass cure wounds}",
								"{@spell hold monster}"
							]
						}
					},
					"ability": "wis"
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The priest makes two melee attacks."
					]
				},
				{
					"name": "Maul",
					"entries": [
						"{@atk mw} {@hit 7} to hit, reach 5 ft., one target. {@h}10 ({@damage 2d6 + 3}) bludgeoning damage."
					]
				}
			],
			"reaction": [
				{
					"name": "Guided Strike (Recharges after a Short or Long Rest)",
					"entries": [
						"The priest grants a +10 bonus to an attack roll made by itself or another creature within 30 feet of it. The priest can make this choice after the roll is made but before it hits or misses."
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
				"path": "bestiary/war-priest.mp3"
			},
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"X"
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
			"name": "Warlock of the Archfey",
			"source": "VGM",
			"page": 219,
			"size": "M",
			"type": {
				"type": "humanoid",
				"tags": [
					"any race"
				]
			},
			"alignment": [
				"A"
			],
			"ac": [
				11,
				{
					"ac": 14,
					"condition": "with {@spell mage armor}",
					"braces": true
				}
			],
			"hp": {
				"average": 49,
				"formula": "11d8"
			},
			"speed": {
				"walk": 30
			},
			"str": 9,
			"dex": 13,
			"con": 11,
			"int": 11,
			"wis": 12,
			"cha": 18,
			"save": {
				"wis": "+3",
				"cha": "+6"
			},
			"skill": {
				"arcana": "+2",
				"deception": "+6",
				"nature": "+2",
				"persuasion": "+6"
			},
			"passive": 11,
			"conditionImmune": [
				"charmed"
			],
			"languages": [
				"any two languages (usually Sylvan)"
			],
			"cr": "4",
			"spellcasting": [
				{
					"name": "Innate Spellcasting",
					"headerEntries": [
						"The warlock's innate spellcasting ability is Charisma. It can innately cast the following spells (spell save {@dc 15}), requiring no material components:"
					],
					"will": [
						"{@spell disguise self}",
						"{@spell mage armor} (self only)",
						"{@spell silent image}",
						"{@spell speak with animals}"
					],
					"daily": {
						"1": [
							"{@spell conjure fey}"
						]
					},
					"ability": "cha"
				},
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The warlock is an 11th-level spellcaster. Its spellcasting ability is Charisma (spell save {@dc 14}, {@hit 6} to hit with spell attacks). It regains its expended spell slots when it finishes a short or long rest. It knows the following warlock spells:"
					],
					"spells": {
						"0": {
							"spells": [
								"{@spell dancing lights}",
								"{@spell eldritch blast}",
								"{@spell friends}",
								"{@spell mage hand}",
								"{@spell minor illusion}",
								"{@spell prestidigitation}",
								"{@spell vicious mockery}"
							]
						},
						"5": {
							"lower": 1,
							"slots": 3,
							"spells": [
								"{@spell blink}",
								"{@spell charm person}",
								"{@spell dimension door}",
								"{@spell dominate beast}",
								"{@spell faerie fire}",
								"{@spell fear}",
								"{@spell hold monster}",
								"{@spell misty step}",
								"{@spell phantasmal force}",
								"{@spell seeming}",
								"{@spell sleep}"
							]
						}
					},
					"ability": "cha"
				}
			],
			"action": [
				{
					"name": "Dagger",
					"entries": [
						"{@atk mw,rw} {@hit 3} to hit, reach 5 ft. or range 20/60 ft., one target. {@h}4 ({@damage 1d4 + 2}) piercing damage."
					]
				}
			],
			"reaction": [
				{
					"name": "Misty Escape (Recharges after a Short or Long Rest)",
					"entries": [
						"In response to taking damage, the warlock turns {@condition invisible} and teleports up to 60 feet to an unoccupied space it can see. It remains {@condition invisible} until the start of its next turn or until it attacks, makes a damage roll, or casts a spell."
					]
				}
			],
			"environment": [
				"arctic",
				"forest",
				"mountain",
				"swamp",
				"urban"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/warlock-of-the-archfey.mp3"
			},
			"languageTags": [
				"S",
				"X"
			],
			"damageTags": [
				"P"
			],
			"spellcastingTags": [
				"CL",
				"I"
			],
			"miscTags": [
				"MW",
				"RW",
				"THW"
			],
			"conditionInflictSpell": [
				"charmed",
				"frightened",
				"paralyzed",
				"unconscious"
			],
			"hasFluff": true
		},
		{
			"name": "Warlock of the Fiend",
			"source": "VGM",
			"page": 219,
			"otherSources": [
				{
					"source": "IMR"
				}
			],
			"size": "M",
			"type": {
				"type": "humanoid",
				"tags": [
					"any race"
				]
			},
			"alignment": [
				"A"
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
				"average": 78,
				"formula": "12d8 + 24"
			},
			"speed": {
				"walk": 30
			},
			"str": 10,
			"dex": 14,
			"con": 15,
			"int": 12,
			"wis": 12,
			"cha": 18,
			"save": {
				"wis": "+4",
				"cha": "+7"
			},
			"skill": {
				"arcana": "+4",
				"deception": "+7",
				"persuasion": "+7",
				"religion": "+4"
			},
			"senses": [
				"darkvision 60 ft."
			],
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
			"languages": [
				"any two languages (usually Abyssal or Infernal)"
			],
			"cr": "7",
			"spellcasting": [
				{
					"name": "Innate Spellcasting",
					"headerEntries": [
						"The warlock's innate spellcasting ability is Charisma. It can innately cast the following spells (spell save {@dc 15}), requiring no material components:"
					],
					"will": [
						"{@spell alter self}",
						"{@spell false life}",
						"{@spell levitate} (self only)",
						"{@spell mage armor} (self only)",
						"{@spell silent image}"
					],
					"daily": {
						"1e": [
							"{@spell feeblemind}",
							"{@spell finger of death}",
							"{@spell plane shift}"
						]
					},
					"ability": "cha"
				},
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The warlock is a 17th-level spellcaster. Its spellcasting ability is Charisma (spell save {@dc 15}, {@hit 7} to hit with spell attacks). It regains its expended spell slots when it finishes a short or long rest. It knows the following warlock spells:"
					],
					"spells": {
						"0": {
							"spells": [
								"{@spell eldritch blast}",
								"{@spell fire bolt}",
								"{@spell friends}",
								"{@spell mage hand}",
								"{@spell minor illusion}",
								"{@spell prestidigitation}",
								"{@spell shocking grasp}"
							]
						},
						"5": {
							"lower": 1,
							"slots": 4,
							"spells": [
								"{@spell banishment}",
								"{@spell burning hands}",
								"{@spell flame strike}",
								"{@spell hellish rebuke}",
								"{@spell magic circle}",
								"{@spell scorching ray}",
								"{@spell scrying}",
								"{@spell stinking cloud}",
								"{@spell suggestion}",
								"{@spell wall of fire}"
							]
						}
					},
					"ability": "cha"
				}
			],
			"trait": [
				{
					"name": "Dark One's Own Luck (Recharges after a Short or Long Rest)",
					"entries": [
						"When the warlock makes an ability check or saving throw, it can add a {@dice d10} to the roll. It can do this after the roll is made but before any of the roll's effects occur."
					]
				}
			],
			"action": [
				{
					"name": "Mace",
					"entries": [
						"{@atk mw} {@hit 3} to hit, reach 5 ft., one target. {@h}3 ({@damage 1d6}) bludgeoning damage plus 10 ({@damage 3d6}) fire damage."
					]
				}
			],
			"environment": [
				"arctic",
				"desert",
				"underdark",
				"urban"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/warlock-of-the-fiend.mp3"
			},
			"senseTags": [
				"D"
			],
			"languageTags": [
				"AB",
				"I",
				"X"
			],
			"damageTags": [
				"B",
				"F"
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
			"name": "Warlock of the Great Old One",
			"source": "VGM",
			"page": 220,
			"otherSources": [
				{
					"source": "IMR"
				}
			],
			"size": "M",
			"type": {
				"type": "humanoid",
				"tags": [
					"any race"
				]
			},
			"alignment": [
				"A"
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
				"average": 91,
				"formula": "14d8 + 28"
			},
			"speed": {
				"walk": 30
			},
			"str": 9,
			"dex": 14,
			"con": 15,
			"int": 12,
			"wis": 12,
			"cha": 18,
			"save": {
				"wis": "+4",
				"cha": "+7"
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
				"psychic"
			],
			"languages": [
				"any two languages",
				"telepathy 30 ft."
			],
			"cr": "6",
			"spellcasting": [
				{
					"name": "Innate Spellcasting",
					"headerEntries": [
						"The warlock's innate spellcasting ability is Charisma. It can innately cast the following spells (spell save {@dc 15}), requiring no material components:"
					],
					"will": [
						"{@spell detect magic}",
						"{@spell jump}",
						"{@spell levitate}",
						"{@spell mage armor} (self only)",
						"{@spell speak with dead}"
					],
					"daily": {
						"1e": [
							"{@spell arcane gate}",
							"{@spell true seeing}"
						]
					},
					"ability": "cha"
				},
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The warlock is a 14th-level spellcaster. Its spellcasting ability is Charisma (spell save {@dc 15}, {@hit 7} to hit with spell attacks). It regains its expended spell slots when it finishes a short or long rest. It knows the following warlock spells:"
					],
					"spells": {
						"0": {
							"spells": [
								"{@spell chill touch}",
								"{@spell eldritch blast}",
								"{@spell guidance}",
								"{@spell mage hand}",
								"{@spell minor illusion}",
								"{@spell prestidigitation}",
								"{@spell shocking grasp}"
							]
						},
						"5": {
							"lower": 1,
							"slots": 3,
							"spells": [
								"{@spell armor of Agathys}",
								"{@spell arms of Hadar}",
								"{@spell crown of madness}",
								"{@spell clairvoyance}",
								"{@spell contact other plane}",
								"{@spell detect thoughts}",
								"{@spell dimension door}",
								"{@spell dissonant whispers}",
								"{@spell dominate beast}",
								"{@spell telekinesis}",
								"{@spell vampiric touch}"
							]
						}
					},
					"ability": "cha"
				}
			],
			"trait": [
				{
					"name": "Whispering Aura",
					"entries": [
						"At the start of each of the warlock's turns, each creature of its choice within 5 feet of it must succeed on a {@dc 15} Wisdom saving throw or take 10 ({@damage 3d6}) psychic damage, provided that the warlock isn't {@condition incapacitated}."
					]
				}
			],
			"action": [
				{
					"name": "Dagger",
					"entries": [
						"{@atk mw,rw} {@hit 5} to hit, reach 5 ft. or range 20/60 ft., one target. {@h}4 ({@damage 1d4 + 2}) piercing damage."
					]
				}
			],
			"environment": [
				"desert",
				"hill",
				"mountain",
				"underdark",
				"urban"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/warlock-of-the-great-old-one.mp3"
			},
			"senseTags": [
				"D"
			],
			"languageTags": [
				"TP",
				"X"
			],
			"damageTags": [
				"P",
				"Y"
			],
			"spellcastingTags": [
				"CL",
				"I"
			],
			"miscTags": [
				"MW",
				"RW",
				"THW"
			],
			"conditionInflictSpell": [
				"charmed",
				"restrained"
			],
			"hasFluff": true
		},
		{
			"name": "Warlord",
			"source": "VGM",
			"page": 220,
			"otherSources": [
				{
					"source": "IMR"
				}
			],
			"size": "M",
			"type": {
				"type": "humanoid",
				"tags": [
					"any race"
				]
			},
			"alignment": [
				"A"
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
				"average": 229,
				"formula": "27d8 + 108"
			},
			"speed": {
				"walk": 30
			},
			"str": 20,
			"dex": 16,
			"con": 18,
			"int": 12,
			"wis": 12,
			"cha": 18,
			"save": {
				"str": "+9",
				"dex": "+7",
				"con": "+8"
			},
			"skill": {
				"athletics": "+9",
				"intimidation": "+8",
				"perception": "+5",
				"persuasion": "+8"
			},
			"passive": 15,
			"languages": [
				"any two languages"
			],
			"cr": "12",
			"trait": [
				{
					"name": "Indomitable (3/Day)",
					"entries": [
						"The warlord can reroll a saving throw it fails. It must use the new roll."
					]
				},
				{
					"name": "Survivor",
					"entries": [
						"The warlord regains 10 hit points at the start of its turn if it has at least 1 hit point but fewer hit points than half its hit point maximum."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The warlord makes two weapon attacks."
					]
				},
				{
					"name": "Greatsword",
					"entries": [
						"{@atk mw} {@hit 9} to hit, reach 5 ft., one target. {@h}12 ({@damage 2d6 + 5}) slashing damage."
					]
				},
				{
					"name": "Shortbow",
					"entries": [
						"{@atk rw} {@hit 7} to hit, range 80/320 ft., one target. {@h}6 ({@damage 1d6 + 3}) piercing damage."
					]
				}
			],
			"legendary": [
				{
					"name": "Weapon Attack",
					"entries": [
						"The warlord makes a weapon attack."
					]
				},
				{
					"name": "Command Ally",
					"entries": [
						"The warlord targets one ally it can see within 30 feet of it. if the target can see and hear the warlord, the target can make one weapon attack as a reaction and gains advantage on the attack roll."
					]
				},
				{
					"name": "Frighten Foe (Costs 2 Actions)",
					"entries": [
						"The warlord targets one enemy it can see within 30 feet of it. If the target can see and hear it, the target must succeed on a {@dc 16} Wisdom saving throw or be {@condition frightened} until the end of warlord's next turn."
					]
				}
			],
			"environment": [
				"urban"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/warlord.mp3"
			},
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"X"
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
			"conditionInflict": [
				"frightened"
			],
			"hasFluff": true
		},
		{
			"name": "White Guard Drake",
			"source": "VGM",
			"page": 158,
			"size": "M",
			"type": "dragon",
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
				"average": 52,
				"formula": "7d8 + 21"
			},
			"speed": {
				"walk": 30,
				"burrow": 20,
				"climb": 30
			},
			"str": 16,
			"dex": 11,
			"con": 16,
			"int": 4,
			"wis": 10,
			"cha": 7,
			"skill": {
				"perception": "+2"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 12,
			"resist": [
				"cold"
			],
			"languages": [
				"understands Draconic but can't speak it"
			],
			"cr": "2",
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The drake attacks twice, once with its bite and once with its tail."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 5} to hit, reach 5 ft., one target. {@h}7 ({@damage 1d8 + 3}) piercing damage."
					]
				},
				{
					"name": "Tail",
					"entries": [
						"{@atk mw} {@hit 5} to hit, reach 5 ft., one target. {@h}6 ({@damage 1d6 + 3}) bludgeoning damage."
					]
				}
			],
			"environment": [
				"arctic",
				"urban"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/guard-drake.mp3"
			},
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"CS",
				"DR"
			],
			"damageTags": [
				"B",
				"P"
			],
			"miscTags": [
				"MW"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Wood Woad",
			"source": "VGM",
			"page": 198,
			"otherSources": [
				{
					"source": "DIP"
				},
				{
					"source": "SDW"
				}
			],
			"size": "M",
			"type": "plant",
			"alignment": [
				"L",
				"N"
			],
			"ac": [
				{
					"ac": 18,
					"from": [
						"natural armor",
						"{@item shield|phb}"
					]
				}
			],
			"hp": {
				"average": 75,
				"formula": "10d8 + 30"
			},
			"speed": {
				"walk": 30,
				"climb": 30
			},
			"str": 18,
			"dex": 12,
			"con": 16,
			"int": 10,
			"wis": 13,
			"cha": 8,
			"skill": {
				"athletics": "+7",
				"perception": "+4",
				"stealth": "+4"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 14,
			"resist": [
				"bludgeoning",
				"piercing"
			],
			"vulnerable": [
				"fire"
			],
			"conditionImmune": [
				"charmed",
				"frightened"
			],
			"languages": [
				"Sylvan"
			],
			"cr": "5",
			"trait": [
				{
					"name": "Magic Club",
					"entries": [
						"In the wood woad's hand, its club is magical and deals 7 ({@damage 3d4}) extra damage (included in its attacks)."
					]
				},
				{
					"name": "Plant Camouflage",
					"entries": [
						"The wood woad has advantage on Dexterity ({@skill Stealth}) checks it makes in any terrain with ample obscuring plant life."
					]
				},
				{
					"name": "Regeneration",
					"entries": [
						"The wood woad regains 10 hit points at the start of its turn if it is in contact with the ground. If the wood woad takes fire damage, this trait doesn't function at the start of the wood woad's next turn. The wood woad dies only if it starts its turn with 0 hit points and doesn't regenerate."
					]
				},
				{
					"name": "Tree Stride",
					"entries": [
						"Once on each of its turns, the wood woad can use 10 feet of its movement to step magically into one living tree within 5 feet of it and emerge from a second living tree within 60 feet of it that it can see, appearing in an unoccupied space within 5 feet of the second tree. Both trees must be Large or bigger."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The wood woad makes two attacks with its club."
					]
				},
				{
					"name": "Club",
					"entries": [
						"{@atk mw} {@hit 7} to hit, reach 5 ft., one target. {@h}14 ({@damage 4d4 + 4}) bludgeoning damage."
					]
				}
			],
			"environment": [
				"forest"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/wood-woad.mp3"
			},
			"traitTags": [
				"Regeneration"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"S"
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
			"name": "Xvart",
			"source": "VGM",
			"page": 200,
			"size": "S",
			"type": {
				"type": "humanoid",
				"tags": [
					"xvart"
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
				"average": 7,
				"formula": "2d6"
			},
			"speed": {
				"walk": 30
			},
			"str": 8,
			"dex": 14,
			"con": 10,
			"int": 8,
			"wis": 7,
			"cha": 7,
			"skill": {
				"stealth": "+4"
			},
			"senses": [
				"darkvision 30 ft."
			],
			"passive": 8,
			"languages": [
				"Abyssal"
			],
			"cr": "1/8",
			"trait": [
				{
					"name": "Low Cunning",
					"entries": [
						"The xvart can take the Disengage action as a bonus action on each of its turns."
					]
				},
				{
					"name": "Overbearing Pack",
					"entries": [
						"The xvart has advantage on Strength (Athletics) checks to shove a creature if at least one of the xvart's allies is within 5 feet of the target and the ally isn't {@condition incapacitated}."
					]
				},
				{
					"name": "Raxivort's Tongue",
					"entries": [
						"The xvart can communicate with ordinary bats and rats, as well as giant bats and giant rats."
					]
				}
			],
			"action": [
				{
					"name": "Shortsword",
					"entries": [
						"{@atk mw} {@hit 4} to hit, reach 5 ft., one target. {@h}5 ({@damage 1d6 + 2}) piercing damage."
					]
				},
				{
					"name": "Sling",
					"entries": [
						"{@atk rw} {@hit 4} to hit, range 30/120 ft., one target. {@h}4 ({@damage 1d4 + 2}) bludgeoning damage."
					]
				}
			],
			"environment": [
				"underdark",
				"hill"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/xvart.mp3"
			},
			"senseTags": [
				"D"
			],
			"languageTags": [
				"AB"
			],
			"damageTags": [
				"B",
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
			"name": "Xvart Speaker",
			"source": "VGM",
			"page": 200,
			"size": "S",
			"type": {
				"type": "humanoid",
				"tags": [
					"xvart"
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
				"average": 7,
				"formula": "2d6"
			},
			"speed": {
				"walk": 30
			},
			"str": 8,
			"dex": 14,
			"con": 10,
			"int": 13,
			"wis": 7,
			"cha": 7,
			"skill": {
				"stealth": "+4"
			},
			"senses": [
				"darkvision 30 ft."
			],
			"passive": 8,
			"languages": [
				"Abyssal and one additional language (usually Common or Goblin)"
			],
			"cr": "1/8",
			"trait": [
				{
					"name": "Low Cunning",
					"entries": [
						"The xvart can take the Disengage action as a bonus action on each of its turns."
					]
				},
				{
					"name": "Overbearing Pack",
					"entries": [
						"The xvart has advantage on Strength (Athletics) checks to shove a creature if at least one of the xvart's allies is within 5 feet of the target and the ally isn't {@condition incapacitated}."
					]
				},
				{
					"name": "Raxivort's Tongue",
					"entries": [
						"The xvart can communicate with ordinary bats and rats, as well as giant bats and giant rats."
					]
				}
			],
			"action": [
				{
					"name": "Shortsword",
					"entries": [
						"{@atk mw} {@hit 4} to hit, reach 5 ft., one target. {@h}5 ({@damage 1d6 + 2}) piercing damage."
					]
				},
				{
					"name": "Sling",
					"entries": [
						"{@atk rw} {@hit 4} to hit, range 30/120 ft., one target. {@h}4 ({@damage 1d4 + 2}) bludgeoning damage."
					]
				}
			],
			"environment": [
				"underdark",
				"hill"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/xvart-speaker.mp3"
			},
			"senseTags": [
				"D"
			],
			"languageTags": [
				"AB",
				"C",
				"GO",
				"X"
			],
			"damageTags": [
				"B",
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
			"name": "Xvart Warlock of Raxivort",
			"source": "VGM",
			"page": 200,
			"size": "S",
			"type": {
				"type": "humanoid",
				"tags": [
					"xvart"
				]
			},
			"alignment": [
				"C",
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
				"average": 22,
				"formula": "5d6 + 5"
			},
			"speed": {
				"walk": 30
			},
			"str": 8,
			"dex": 14,
			"con": 12,
			"int": 8,
			"wis": 11,
			"cha": 12,
			"skill": {
				"stealth": "+4"
			},
			"senses": [
				"darkvision 30 ft."
			],
			"passive": 10,
			"languages": [
				"Abyssal"
			],
			"cr": "1",
			"spellcasting": [
				{
					"name": "Innate Spellcasting",
					"headerEntries": [
						"The xvart's innate spellcasting ability is Charisma. it can innately cast the following spells, requiring no material components:"
					],
					"will": [
						"{@spell detect magic}",
						"{@spell mage armor} (self only)"
					],
					"ability": "cha"
				},
				{
					"name": "Spellcasting",
					"headerEntries": [
						"The xvart is a 3rd-level spellcaster. Its spellcasting ability is Charisma (spell save {@dc 11}, {@hit 3} to hit with spell attacks). It regains its expended spell slots when it finishes a short or long rest. It knows the following warlock spells:"
					],
					"spells": {
						"0": {
							"spells": [
								"{@spell eldritch blast}",
								"{@spell mage hand}",
								"{@spell minor illusion}",
								"{@spell poison spray}",
								"{@spell prestidigitation}"
							]
						},
						"2": {
							"lower": 1,
							"slots": 2,
							"spells": [
								"{@spell burning hands}",
								"{@spell expeditious retreat}",
								"{@spell invisibility}",
								"{@spell scorching ray}"
							]
						}
					},
					"ability": "cha"
				}
			],
			"trait": [
				{
					"name": "Low Cunning",
					"entries": [
						"The xvart can take the Disengage action as a bonus action on each of its turns."
					]
				},
				{
					"name": "Overbearing Pack",
					"entries": [
						"The xvart has advantage on Strength (Athletics) checks to shove a creature if at least one of the xvart's allies is within 5 feet of the target and the ally isn't {@condition incapacitated}."
					]
				},
				{
					"name": "Raxivort's Tongue",
					"entries": [
						"The xvart can communicate with ordinary bats and rats, as well as giant bats and giant rats."
					]
				}
			],
			"action": [
				{
					"name": "Scimitar",
					"entries": [
						"{@atk mw} {@hit 4} to hit, reach 5 ft., one target. {@h}5 ({@damage 1d6 + 2}) slashing damage."
					]
				}
			],
			"environment": [
				"underdark",
				"hill"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/xvart-warlock-of-raxivort.mp3"
			},
			"senseTags": [
				"D"
			],
			"languageTags": [
				"AB"
			],
			"damageTags": [
				"S"
			],
			"spellcastingTags": [
				"CL",
				"I"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflictSpell": [
				"invisible"
			],
			"hasFluff": true
		},
		{
			"name": "Yeth Hound",
			"source": "VGM",
			"page": 201,
			"size": "L",
			"type": "fey",
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
				"average": 51,
				"formula": "6d10 + 18"
			},
			"speed": {
				"walk": 40,
				"fly": {
					"number": 40,
					"condition": "(hover)"
				},
				"canHover": true
			},
			"str": 18,
			"dex": 17,
			"con": 16,
			"int": 5,
			"wis": 12,
			"cha": 7,
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 11,
			"immune": [
				{
					"immune": [
						"bludgeoning",
						"piercing",
						"slashing"
					],
					"note": "from nonmagical attacks not made with silvered weapons",
					"cond": true
				}
			],
			"conditionImmune": [
				"charmed",
				"exhaustion",
				"frightened"
			],
			"languages": [
				"understands Common",
				"Elvish",
				"and Sylvan but can't speak"
			],
			"cr": "4",
			"trait": [
				{
					"name": "Keen Hearing and Smell",
					"entries": [
						"The yeth hound has advantage on Wisdom ({@skill Perception}) checks that rely on hearing or smell."
					]
				},
				{
					"name": "Sunlight Banishment",
					"entries": [
						"If the yeth hound starts its turn in sunlight, it is transported to the Ethereal Plane. While sunlight shines on the spot from which it vanished, the hound must remain in the Deep Ethereal. After sunset, it returns to the Border Ethereal at the same spot, whereupon it typically sets out to find its pack or its master. The hound is visible on the Material Plane while it is in the Border Ethereal, and vice versa, but it can't affect or be affected by anything on the other plane. Once it is adjacent to its master or a pack mate that is on the Material Plane, a yeth hound in the Border Ethereal can return to the Material Plane as an action."
					]
				},
				{
					"name": "Telepathic Bond",
					"entries": [
						"While the yeth hound is on the same plane of existence as its master, it can magically convey what it senses to its master, and the two can communicate telepathically with each other."
					]
				}
			],
			"action": [
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 6} to hit, reach 5 ft., one target. {@h}11 ({@damage 2d6 + 4}) piercing damage, plus 14 ({@damage 4d6}) psychic damage if the target is {@condition frightened}."
					]
				},
				{
					"name": "Baleful Baying",
					"entries": [
						"The yeth hound bays magically. Every enemy within 300 feet of the hound that can hear it must succeed on a {@dc 13} Wisdom saving throw or be {@condition frightened} until the end of the hound's next turn or until the hound is {@condition incapacitated}. A {@condition frightened} target that starts its turn within 30 feet of the hound must use all its movement on that turn to get as far from the hound as possible, must finish the move before taking an action, and must take the most direct route, even if hazards lie that way. A target that successfully saves is immune to the baying of all yeth hounds for the next 24 hours."
					]
				}
			],
			"environment": [
				"grassland",
				"forest",
				"hill"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/yeth-hound.mp3"
			},
			"traitTags": [
				"Keen Senses"
			],
			"senseTags": [
				"D"
			],
			"languageTags": [
				"C",
				"CS",
				"E",
				"S"
			],
			"damageTags": [
				"P",
				"Y"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"frightened"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Yuan-ti Anathema",
			"source": "VGM",
			"page": 202,
			"size": "H",
			"type": {
				"type": "monstrosity",
				"tags": [
					"shapechanger",
					"yuan-ti"
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
				"average": 189,
				"formula": "18d12 + 72"
			},
			"speed": {
				"walk": 40,
				"climb": 30,
				"swim": 30
			},
			"str": 23,
			"dex": 13,
			"con": 19,
			"int": 19,
			"wis": 17,
			"cha": 20,
			"skill": {
				"perception": "+7",
				"stealth": "+5"
			},
			"senses": [
				"darkvision 60 ft.",
				"blindsight 30 ft."
			],
			"passive": 17,
			"resist": [
				"acid",
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
				"Common",
				"Draconic"
			],
			"cr": "12",
			"spellcasting": [
				{
					"name": "Innate Spellcasting (Anathema Form Only)",
					"headerEntries": [
						"The anathema's innate spellcasting ability is Charisma (spell save {@dc 17}). It can innately cast the following spells, requiring no material components:"
					],
					"will": [
						"{@spell animal friendship} (snakes only)"
					],
					"daily": {
						"1": [
							"{@spell divine word}"
						],
						"3e": [
							"{@spell darkness}",
							"{@spell entangle}",
							"{@spell fear}",
							"{@spell haste}",
							"{@spell suggestion}",
							"{@spell polymorph}"
						]
					},
					"ability": "cha"
				}
			],
			"trait": [
				{
					"name": "Magic Resistance",
					"entries": [
						"The anathema has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Ophidiophobia Aura",
					"entries": [
						"Any creature of the anathema's choice, other than a snake or a yuan-ti, that starts its turn within 30 feet of the anathema and can see or hear it must succeed on a {@dc 17} Wisdom saving throw or become {@condition frightened} of snakes and yuan-ti. A {@condition frightened} target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a target's saving throw is successful or the effect ends for it, the target is immune to this aura for the next 24 hours."
					]
				},
				{
					"name": "Shapechanger",
					"entries": [
						"The anathema can use its action to polymorph into a Huge giant constrictor snake, or back into its true form. its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed."
					]
				},
				{
					"name": "Six Heads",
					"entries": [
						"The anathema has advantage on Wisdom ({@skill Perception}) checks and on saving throws against being {@condition blinded}. {@condition charmed}, {@condition deafened}, {@condition frightened}, {@condition stunned}, or knocked {@condition unconscious}."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack (Anathema Form Only)",
					"entries": [
						"The anathema makes two claw attacks, one constrict attack, and one Flurry of Bites attack."
					]
				},
				{
					"name": "Claw (Anathema Form Only)",
					"entries": [
						"{@atk mw} {@hit 10} to hit, reach 10 ft., one target. {@h}13 ({@damage 2d6 + 6}) slashing damage."
					]
				},
				{
					"name": "Constrict",
					"entries": [
						"{@atk mw} {@hit 10} to hit, reach 15 ft., one Large or smaller creature. {@h}16 ({@damage 3d6 + 6}) bludgeoning damage plus 7 ({@damage 2d6}) acid damage, and the target is {@condition grappled} (escape {@dc 16}). Until this grapple ends, the target is {@condition restrained} and takes 16 ({@damage 3d6 + 6}) bludgeoning damage plus 7 ({@damage 2d6}) acid damage at the start of each of its turns, and the anathema can't constrict another target."
					]
				},
				{
					"name": "Flurry of Bites",
					"entries": [
						"{@atk mw} {@hit 10} to hit, reach 10 ft., one creature. {@h}27 ({@damage 6d6 + 6}) piercing damage plus 14 ({@damage 4d6}) poison damage."
					]
				}
			],
			"variant": [
				{
					"type": "variant",
					"name": "Acid Slime",
					"entries": [
						"As a bonus action, the yuan-ti can coat its body in a slimy acid that lasts for 1 minute. A creature that touches the yuan-ti, hits it with a melee attack while within 5 feet of it, or is hit by its constrict attack takes 5 ({@damage 1d10}) acid damage."
					]
				},
				{
					"type": "variant",
					"name": "Chameleon Skin",
					"entries": [
						"The yuan-ti has advantage on Dexterity (Stealth) checks made to hide."
					]
				},
				{
					"type": "variant",
					"name": "Shed Skin (1/Day)",
					"entries": [
						"The yuan-ti can shed its skin as a bonus action to free itself from a grapple, shackles, or other restraints. If the yuan-ti spends 1 minute eating its shed skin, it regains hit points equal to half its hit point maximum."
					]
				}
			],
			"environment": [
				"underdark",
				"forest",
				"desert"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/yuan-ti-anathema.mp3"
			},
			"traitTags": [
				"Magic Resistance",
				"Shapechanger"
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
				"C",
				"DR"
			],
			"damageTags": [
				"A",
				"B",
				"I",
				"P",
				"S"
			],
			"spellcastingTags": [
				"F",
				"I"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"frightened",
				"grappled",
				"restrained"
			],
			"conditionInflictSpell": [
				"blinded",
				"charmed",
				"deafened",
				"frightened",
				"restrained",
				"stunned"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Yuan-ti Broodguard",
			"source": "VGM",
			"page": 203,
			"otherSources": [
				{
					"source": "ToA"
				}
			],
			"size": "M",
			"type": {
				"type": "humanoid",
				"tags": [
					"yuan-ti"
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
						"natural armor"
					]
				}
			],
			"hp": {
				"average": 45,
				"formula": "7d8 + 14"
			},
			"speed": {
				"walk": 30
			},
			"str": 15,
			"dex": 14,
			"con": 14,
			"int": 6,
			"wis": 11,
			"cha": 4,
			"save": {
				"str": "+4",
				"dex": "+4",
				"wis": "+2"
			},
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
				"Abyssal",
				"Common",
				"Draconic"
			],
			"cr": "2",
			"trait": [
				{
					"name": "Mental Resistance",
					"entries": [
						"The broodguard has advantage on saving throws against being {@condition charmed}, and magic can't paralyze it."
					]
				},
				{
					"name": "Reckless",
					"entries": [
						"At the start of its turn, the broodguard can gain advantage on all melee weapon attack rolls it makes during that turn, but attack rolls against it have advantage until the start of its next turn."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The broodguard makes three attacks: one with its bite and two with its claws."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 4} to hit, reach 5 ft., one target. {@h}6 ({@damage 1d8 + 2}) piercing damage."
					]
				},
				{
					"name": "Claws",
					"entries": [
						"{@atk mw} {@hit 4} to hit, reach 5 ft., one target. {@h}5 ({@damage 1d6 + 2}) slashing damage."
					]
				}
			],
			"variant": [
				{
					"type": "variant",
					"name": "Chameleon Skin",
					"entries": [
						"The yuan-ti has advantage on Dexterity (Stealth) checks made to hide."
					]
				},
				{
					"type": "variant",
					"name": "Shed Skin (1/Day)",
					"entries": [
						"The yuan-ti can shed its skin as a bonus action to free itself from a grapple, shackles, or other restraints. If the yuan-ti spends 1 minute eating its shed skin, it regains hit points equal to half its hit point maximum."
					]
				}
			],
			"environment": [
				"underdark",
				"forest",
				"desert"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/yuan-ti-broodguard.mp3"
			},
			"traitTags": [
				"Reckless"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"AB",
				"C",
				"DR"
			],
			"damageTags": [
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
			"name": "Yuan-ti Malison (Type 4)",
			"source": "VGM",
			"page": 96,
			"otherSources": [
				{
					"source": "ToA"
				}
			],
			"size": "M",
			"type": {
				"type": "monstrosity",
				"tags": [
					"shapechanger",
					"yuan-ti"
				]
			},
			"alignment": [
				"N",
				"E"
			],
			"ac": [
				12
			],
			"hp": {
				"average": 66,
				"formula": "12d8 + 12"
			},
			"speed": {
				"walk": 30
			},
			"str": 16,
			"dex": 14,
			"con": 13,
			"int": 14,
			"wis": 12,
			"cha": 16,
			"skill": {
				"deception": "+5",
				"stealth": "+4"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 11,
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"poisoned"
			],
			"languages": [
				"Abyssal",
				"Common",
				"Draconic"
			],
			"cr": "3",
			"spellcasting": [
				{
					"name": "Innate Spellcasting (Yuan-ti Form Only)",
					"headerEntries": [
						"The yuan-ti's innate spellcasting ability is Charisma (spell save {@dc 13}). The yuan-ti can innately cast the following spells, requiring no material components:"
					],
					"will": [
						"{@spell animal friendship} (snakes only)"
					],
					"daily": {
						"3": [
							"{@spell suggestion}"
						]
					},
					"ability": "cha"
				}
			],
			"trait": [
				{
					"name": "Shapechanger",
					"entries": [
						"The yuan-ti can use its action to polymorph into a Medium snake, or back into its true form. Its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. It doesn't change form if it dies."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"The yuan-ti has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Malison Type",
					"entries": [
						"The yuan-ti has one of the following types:",
						{
							"type": "list",
							"style": "list-hang-notitle",
							"items": [
								{
									"type": "item",
									"name": "Type 4:",
									"entry": "Human form with one or more serpentine tails"
								},
								{
									"type": "item",
									"name": "Type 5:",
									"entry": "Human form covered in scales"
								}
							]
						}
					]
				}
			],
			"action": [
				{
					"name": "Multiattack (Yuan-ti Form Only)",
					"entries": [
						"The yuan-ti makes two ranged attacks or two melee attacks."
					]
				},
				{
					"name": "Bite (Snake Form Only)",
					"entries": [
						"{@atk mw} {@hit 5} to hit, reach 5 ft., one creature. {@h}5 ({@damage 1d4 + 3}) piercing damage plus 7 ({@damage 2d6}) poison damage."
					]
				},
				{
					"name": "Scimitar (Yuan-ti Form Only)",
					"entries": [
						"{@atk mw} {@hit 5} to hit, reach 5 ft., one target. {@h}6 ({@damage 1d6 + 3}) slashing damage."
					]
				},
				{
					"name": "Longbow (Yuan-ti Form Only)",
					"entries": [
						"{@atk rw} {@hit 4} to hit, range 150/600 ft., one target. {@h}6 ({@damage 1d8 + 2}) piercing damage."
					]
				}
			],
			"environment": [
				"forest",
				"swamp",
				"desert"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/yuan-ti-malison.mp3"
			},
			"traitTags": [
				"Magic Resistance",
				"Shapechanger"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"AB",
				"C",
				"DR"
			],
			"damageTags": [
				"I",
				"P",
				"S"
			],
			"spellcastingTags": [
				"F",
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
			"name": "Yuan-ti Malison (Type 5)",
			"source": "VGM",
			"page": 96,
			"otherSources": [
				{
					"source": "ToA"
				}
			],
			"size": "M",
			"type": {
				"type": "monstrosity",
				"tags": [
					"shapechanger",
					"yuan-ti"
				]
			},
			"alignment": [
				"N",
				"E"
			],
			"ac": [
				12
			],
			"hp": {
				"average": 66,
				"formula": "12d8 + 12"
			},
			"speed": {
				"walk": 30
			},
			"str": 16,
			"dex": 14,
			"con": 13,
			"int": 14,
			"wis": 12,
			"cha": 16,
			"skill": {
				"deception": "+5",
				"stealth": "+4"
			},
			"senses": [
				"darkvision 60 ft."
			],
			"passive": 11,
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"poisoned"
			],
			"languages": [
				"Abyssal",
				"Common",
				"Draconic"
			],
			"cr": "3",
			"spellcasting": [
				{
					"name": "Innate Spellcasting (Yuan-ti Form Only)",
					"headerEntries": [
						"The yuan-ti's innate spellcasting ability is Charisma (spell save {@dc 13}). The yuan-ti can innately cast the following spells, requiring no material components:"
					],
					"will": [
						"{@spell animal friendship} (snakes only)"
					],
					"daily": {
						"3": [
							"{@spell suggestion}"
						]
					},
					"ability": "cha"
				}
			],
			"trait": [
				{
					"name": "Shapechanger",
					"entries": [
						"The yuan-ti can use its action to polymorph into a Medium snake, or back into its true form. Its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. It doesn't change form if it dies."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"The yuan-ti has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Malison Type",
					"entries": [
						"The yuan-ti has one of the following types:",
						{
							"type": "list",
							"style": "list-hang-notitle",
							"items": [
								{
									"type": "item",
									"name": "Type 4:",
									"entry": "Human form with one or more serpentine tails"
								},
								{
									"type": "item",
									"name": "Type 5:",
									"entry": "Human form covered in scales"
								}
							]
						}
					]
				}
			],
			"action": [
				{
					"name": "Multiattack (Yuan-ti Form Only)",
					"entries": [
						"The yuan-ti makes two ranged attacks or two melee attacks."
					]
				},
				{
					"name": "Bite (Snake Form Only)",
					"entries": [
						"{@atk mw} {@hit 5} to hit, reach 5 ft., one creature. {@h}5 ({@damage 1d4 + 3}) piercing damage plus 7 ({@damage 2d6}) poison damage."
					]
				},
				{
					"name": "Scimitar (Yuan-ti Form Only)",
					"entries": [
						"{@atk mw} {@hit 5} to hit, reach 5 ft., one target. {@h}6 ({@damage 1d6 + 3}) slashing damage."
					]
				},
				{
					"name": "Longbow (Yuan-ti Form Only)",
					"entries": [
						"{@atk rw} {@hit 4} to hit, range 150/600 ft., one target. {@h}6 ({@damage 1d8 + 2}) piercing damage."
					]
				}
			],
			"environment": [
				"forest",
				"swamp",
				"desert"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/yuan-ti-malison.mp3"
			},
			"traitTags": [
				"Magic Resistance",
				"Shapechanger"
			],
			"senseTags": [
				"D"
			],
			"actionTags": [
				"Multiattack"
			],
			"languageTags": [
				"AB",
				"C",
				"DR"
			],
			"damageTags": [
				"I",
				"P",
				"S"
			],
			"spellcastingTags": [
				"F",
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
			"name": "Yuan-ti Mind Whisperer",
			"source": "VGM",
			"page": 204,
			"size": "M",
			"type": {
				"type": "monstrosity",
				"tags": [
					"shapechanger",
					"yuan-ti"
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
						"natural armor"
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
			"str": 16,
			"dex": 14,
			"con": 13,
			"int": 14,
			"wis": 14,
			"cha": 16,
			"save": {
				"wis": "+4",
				"cha": "+5"
			},
			"skill": {
				"deception": "+5",
				"stealth": "+4"
			},
			"senses": [
				"darkvision 120 ft. (penetrates magical darkness)"
			],
			"passive": 12,
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"poisoned"
			],
			"languages": [
				"Abyssal",
				"Common",
				"Draconic"
			],
			"cr": "4",
			"spellcasting": [
				{
					"name": "Innate Spellcasting (Yuan-ti Form Only)",
					"headerEntries": [
						"The yuan-ti's innate spellcasting ability is Charisma (spell save {@dc 13}). The yuan-ti can innately cast the following spells, requiring no material components:"
					],
					"will": [
						"{@spell animal friendship} (snakes only)"
					],
					"daily": {
						"3": [
							"{@spell suggestion}"
						]
					},
					"ability": "cha"
				},
				{
					"name": "Spellcasting (Yuan-ti Form Only)",
					"headerEntries": [
						"The yuan-ti is a 6th-level spellcaster. Its spellcasting ability is Charisma (spell save {@dc 13}, {@hit 5} to hit with spell attacks). It regains its expended spell slots when it finishes a short or long rest. It knows the following warlock spells:"
					],
					"spells": {
						"0": {
							"spells": [
								"{@spell eldritch blast} (range 300 ft., +3 bonus to each damage roll)",
								"{@spell friends}",
								"{@spell message}",
								"{@spell minor illusion}",
								"{@spell poison spray}",
								"{@spell prestidigitation}"
							]
						},
						"3": {
							"lower": 1,
							"slots": 2,
							"spells": [
								"{@spell charm person}",
								"{@spell crown of madness}",
								"{@spell detect thoughts}",
								"{@spell expeditious retreat}",
								"{@spell fly}",
								"{@spell hypnotic pattern}",
								"{@spell illusory script}"
							]
						}
					},
					"ability": "cha"
				}
			],
			"trait": [
				{
					"name": "Shapechanger",
					"entries": [
						"The yuan-ti can use its action to polymorph into a Medium snake or back into its true form. Its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. If it dies, it stays in its current form."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"The yuan-ti has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Mind Fangs (2/Day)",
					"entries": [
						"The first time the yuan-ti hits with a melee attack on its turn, it can deal an extra 16 ({@damage 3d10}) psychic damage to the target."
					]
				},
				{
					"name": "Sseth's Blessing",
					"entries": [
						"When the yuan-ti reduces an enemy to 0 hit points, the yuan-ti gains 9 temporary hit points."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack (Yuan-ti Form Only)",
					"entries": [
						"The yuan-ti makes one bite attack and one scimitar attack."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 5} to hit, reach 5 ft., one target. {@h}5 ({@damage 1d4 + 3}) piercing damage plus 7 ({@damage 2d6}) poison damage."
					]
				},
				{
					"name": "Scimitar (Yuan-ti Form Only)",
					"entries": [
						"{@atk mw} {@hit 5} to hit, reach 5 ft., one target. {@h}6 ({@damage 1d6 + 3}) slashing damage."
					]
				}
			],
			"variant": [
				{
					"type": "variant",
					"name": "Chameleon Skin",
					"entries": [
						"The yuan-ti has advantage on Dexterity (Stealth) checks made to hide."
					]
				},
				{
					"type": "variant",
					"name": "Shed Skin (1/Day)",
					"entries": [
						"The yuan-ti can shed its skin as a bonus action to free itself from a grapple, shackles, or other restraints. If the yuan-ti spends 1 minute eating its shed skin, it regains hit points equal to half its hit point maximum."
					]
				}
			],
			"environment": [
				"underdark",
				"forest",
				"desert"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/yuan-ti-mind-whisperer.mp3"
			},
			"traitTags": [
				"Magic Resistance",
				"Shapechanger"
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
				"DR"
			],
			"damageTags": [
				"I",
				"P",
				"S",
				"Y"
			],
			"spellcastingTags": [
				"CL",
				"F",
				"I"
			],
			"miscTags": [
				"MW"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Yuan-ti Nightmare Speaker",
			"source": "VGM",
			"page": 205,
			"otherSources": [
				{
					"source": "ToA"
				}
			],
			"size": "M",
			"type": {
				"type": "monstrosity",
				"tags": [
					"shapechanger",
					"yuan-ti"
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
						"natural armor"
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
			"str": 16,
			"dex": 14,
			"con": 13,
			"int": 14,
			"wis": 12,
			"cha": 16,
			"save": {
				"wis": "+3",
				"cha": "+5"
			},
			"skill": {
				"deception": "+5",
				"stealth": "+4"
			},
			"senses": [
				"darkvision 120 ft. (penetrates magical darkness)"
			],
			"passive": 11,
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"poisoned"
			],
			"languages": [
				"Abyssal",
				"Common",
				"Draconic"
			],
			"cr": "4",
			"spellcasting": [
				{
					"name": "Innate Spellcasting (Yuan-ti Form Only)",
					"headerEntries": [
						"The yuan-ti's innate spellcasting ability is Charisma (spell save {@dc 13}). The yuan-ti can innately cast the following spells, requiring no material components:"
					],
					"will": [
						"{@spell animal friendship} (snakes only)"
					],
					"daily": {
						"3": [
							"{@spell suggestion}"
						]
					},
					"ability": "cha"
				},
				{
					"name": "Spellcasting (Yuan-ti Form Only)",
					"headerEntries": [
						"The yuan-ti is a 6th-level spellcaster. Its spellcasting ability is Charisma (spell save {@dc 13}, {@hit 5} to hit with spell attacks). It regains its expended spell slots when it finishes a short or long rest. It knows the following warlock spells:"
					],
					"spells": {
						"0": {
							"spells": [
								"{@spell chill touch}",
								"{@spell eldritch blast} (range 300 ft., +3 bonus to each damage roll)",
								"{@spell mage hand}",
								"{@spell message}",
								"{@spell poison spray}",
								"{@spell prestidigitation}"
							]
						},
						"3": {
							"lower": 1,
							"slots": 2,
							"spells": [
								"{@spell arms of Hadar}",
								"{@spell darkness}",
								"{@spell fear}",
								"{@spell hex}",
								"{@spell hold person}",
								"{@spell hunger of Hadar}",
								"{@spell witch bolt}"
							]
						}
					},
					"ability": "cha"
				}
			],
			"trait": [
				{
					"name": "Shapechanger",
					"entries": [
						"The yuan-ti can use its action to polymorph into a Medium snake or back into its true form. Its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. If it dies, it stays in its current form."
					]
				},
				{
					"name": "Death Fangs (2/Day)",
					"entries": [
						"The first time the yuan-ti hits with a melee attack on its turn, it can deal an extra 16 ({@damage 3d10}) necrotic damage to the target."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"The yuan-ti has advantage on saving throws against spells and other magical effects."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack (Yuan-ti Form Only)",
					"entries": [
						"The yuan-ti makes one constrict attack and one scimitar attack."
					]
				},
				{
					"name": "Constrict",
					"entries": [
						"{@atk mw} {@hit 5} to hit, reach 10 ft., one target. {@h}10 ({@damage 2d6 + 3}) bludgeoning damage, and the target is {@condition grappled} (escape {@dc 14}) if it is a Large or smaller creature. Until this grapple ends, the target is {@condition restrained}, and the yuan-ti can't constrict another target."
					]
				},
				{
					"name": "Scimitar (Yuan-ti Form Only)",
					"entries": [
						"{@atk mw} {@hit 5} to hit, reach 5 ft., one target. {@h}6 ({@damage 1d6 + 3}) slashing damage."
					]
				},
				{
					"name": "Invoke Nightmare (Recharges after a Short or Long Rest)",
					"entries": [
						"The yuan-ti taps into the nightmares of a creature it can see within 60 feet of it and creates an illusory, immobile manifestation of the creature's deepest fears, visible only to that creature. The target must make a {@dc 13} Intelligence saving throw. On a failed save, the target takes 11 ({@damage 2d10}) psychic damage and is {@condition frightened} of the manifestation, believing it to be real. The yuan-ti must concentrate to maintain the illusion (as if concentrating on a spell), which lasts for up to 1 minute and can't be harmed. The target can repeat the saving throw at the end of each of its turns, ending the illusion on a success, or taking 11 ({@damage 2d10}) psychic damage on a failure."
					]
				}
			],
			"variant": [
				{
					"type": "variant",
					"name": "Chameleon Skin",
					"entries": [
						"The yuan-ti has advantage on Dexterity (Stealth) checks made to hide."
					]
				},
				{
					"type": "variant",
					"name": "Shed Skin (1/Day)",
					"entries": [
						"The yuan-ti can shed its skin as a bonus action to free itself from a grapple, shackles, or other restraints. If the yuan-ti spends 1 minute eating its shed skin, it regains hit points equal to half its hit point maximum."
					]
				}
			],
			"environment": [
				"underdark",
				"forest",
				"desert"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/yuan-ti-nightmare-speaker.mp3"
			},
			"traitTags": [
				"Magic Resistance",
				"Shapechanger"
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
				"DR"
			],
			"damageTags": [
				"B",
				"N",
				"S",
				"Y"
			],
			"spellcastingTags": [
				"CL",
				"F",
				"I"
			],
			"miscTags": [
				"MW",
				"RCH"
			],
			"conditionInflict": [
				"frightened",
				"grappled",
				"restrained"
			],
			"conditionInflictSpell": [
				"blinded",
				"charmed",
				"frightened",
				"paralyzed"
			],
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Yuan-ti Pit Master",
			"source": "VGM",
			"page": 206,
			"size": "M",
			"type": {
				"type": "monstrosity",
				"tags": [
					"shapechanger",
					"yuan-ti"
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
			"str": 16,
			"dex": 14,
			"con": 13,
			"int": 14,
			"wis": 12,
			"cha": 16,
			"save": {
				"wis": "+4",
				"cha": "+6"
			},
			"skill": {
				"deception": "+6",
				"stealth": "+5"
			},
			"senses": [
				"darkvision 120 ft. (penetrates magical darkness)"
			],
			"passive": 11,
			"immune": [
				"poison"
			],
			"conditionImmune": [
				"poisoned"
			],
			"languages": [
				"Abyssal",
				"Common",
				"Draconic"
			],
			"cr": "5",
			"spellcasting": [
				{
					"name": "Innate Spellcasting (Yuan-ti Form Only)",
					"headerEntries": [
						"The yuan-ti's innate spellcasting ability is Charisma (spell save {@dc 13}). The yuan-ti can innately cast the following spells, requiring no material components:"
					],
					"will": [
						"{@spell animal friendship} (snakes only)"
					],
					"daily": {
						"3": [
							"{@spell suggestion}"
						]
					},
					"ability": "cha"
				},
				{
					"name": "Spellcasting (Yuan-ti Form Only)",
					"headerEntries": [
						"The yuan-ti is a 6th-level spellcaster. Its spellcasting ability is Charisma (spell save {@dc 13}, {@hit 5} to hit with spell attacks). It regains its expended spell slots when it finishes a short or long rest. It knows the following warlock spells:"
					],
					"spells": {
						"0": {
							"spells": [
								"{@spell eldritch blast} (range 300 ft., +3 bonus to each damage roll)",
								"{@spell friends}",
								"{@spell guidance}",
								"{@spell mage hand}",
								"{@spell message}",
								"{@spell poison spray}"
							]
						},
						"3": {
							"lower": 1,
							"slots": 2,
							"spells": [
								"{@spell command}",
								"{@spell counterspell}",
								"{@spell hellish rebuke}",
								"{@spell invisibility}",
								"{@spell misty step}",
								"{@spell unseen servant}",
								"{@spell vampiric touch}"
							]
						}
					},
					"ability": "cha"
				}
			],
			"trait": [
				{
					"name": "Shapechanger",
					"entries": [
						"The yuan-ti can use its action to polymorph into a Medium snake or back into its true form. Its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. It doesn't change form if it dies."
					]
				},
				{
					"name": "Magic Resistance",
					"entries": [
						"The yuan-ti has advantage on saving throws against spells and other magical effects."
					]
				},
				{
					"name": "Poison's Disciple (2/Day)",
					"entries": [
						"The first time the yuan-ti hits with a melee attack on its turn, it can deal an extra 16 ({@damage 3d10}) poison damage to the target."
					]
				}
			],
			"action": [
				{
					"name": "Multiattack (Yuan-ti Form Only)",
					"entries": [
						"The yuan-ti makes two bite attacks using its snake arms."
					]
				},
				{
					"name": "Bite",
					"entries": [
						"{@atk mw} {@hit 5} to hit, reach 5 ft., one target. {@h}5 ({@damage 1d4 + 3}) piercing damage plus 7 ({@damage 2d6}) poison damage."
					]
				},
				{
					"name": "Merrshaulk's Slumber (1/Day)",
					"entries": [
						"The yuan-ti targets up to five creatures that it can see within 60 feet of it. Each target must succeed on a {@dc 13} Constitution saving throw or fall into a magical sleep and be {@condition unconscious} for 10 minutes. A sleeping target awakens if it takes damage or if someone uses an action to shake or slap it awake. This magical sleep has no effect on a creature immune to being {@condition charmed}."
					]
				}
			],
			"variant": [
				{
					"type": "variant",
					"name": "Chameleon Skin",
					"entries": [
						"The yuan-ti has advantage on Dexterity (Stealth) checks made to hide."
					]
				},
				{
					"type": "variant",
					"name": "Shed Skin (1/Day)",
					"entries": [
						"The yuan-ti can shed its skin as a bonus action to free itself from a grapple, shackles, or other restraints. If the yuan-ti spends 1 minute eating its shed skin, it regains hit points equal to half its hit point maximum."
					]
				}
			],
			"environment": [
				"underdark",
				"forest",
				"desert"
			],
			"hasToken": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/yuan-ti-pit-master.mp3"
			},
			"traitTags": [
				"Magic Resistance",
				"Shapechanger"
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
				"DR"
			],
			"damageTags": [
				"I",
				"P"
			],
			"spellcastingTags": [
				"CL",
				"F",
				"I"
			],
			"miscTags": [
				"MW"
			],
			"conditionInflict": [
				"unconscious"
			],
			"conditionInflictSpell": [
				"charmed",
				"invisible",
				"prone"
			],
			"hasFluff": true,
			"hasFluffImages": true
		}
	]
}
