import { l as lite, G as Gridify } from './index.js';
import { p as pagination } from './pagination-00c90425.js';

var EncounterBuilder = function EncounterBuilder() {
  var builder = this;
  /* Read-only values and look up tables based on book definitions */

  Object.defineProperties(builder, {
    xpThresholds: {
      value: {
        1: {
          'Easy': 25,
          'Medium': 50,
          'Hard': 75,
          'Deadly': 100
        },
        2: {
          'Easy': 50,
          'Medium': 100,
          'Hard': 150,
          'Deadly': 200
        },
        3: {
          'Easy': 75,
          'Medium': 150,
          'Hard': 225,
          'Deadly': 400
        },
        4: {
          'Easy': 125,
          'Medium': 250,
          'Hard': 375,
          'Deadly': 500
        },
        5: {
          'Easy': 250,
          'Medium': 500,
          'Hard': 750,
          'Deadly': 1100
        },
        6: {
          'Easy': 300,
          'Medium': 600,
          'Hard': 900,
          'Deadly': 1400
        },
        7: {
          'Easy': 350,
          'Medium': 750,
          'Hard': 1100,
          'Deadly': 1700
        },
        8: {
          'Easy': 450,
          'Medium': 900,
          'Hard': 1400,
          'Deadly': 2100
        },
        9: {
          'Easy': 550,
          'Medium': 1100,
          'Hard': 1600,
          'Deadly': 2400
        },
        10: {
          'Easy': 600,
          'Medium': 1200,
          'Hard': 1900,
          'Deadly': 2800
        },
        11: {
          'Easy': 800,
          'Medium': 1600,
          'Hard': 2400,
          'Deadly': 3600
        },
        12: {
          'Easy': 1000,
          'Medium': 2000,
          'Hard': 3000,
          'Deadly': 4500
        },
        13: {
          'Easy': 1100,
          'Medium': 2200,
          'Hard': 3400,
          'Deadly': 5100
        },
        14: {
          'Easy': 1250,
          'Medium': 2500,
          'Hard': 3800,
          'Deadly': 5700
        },
        15: {
          'Easy': 1400,
          'Medium': 2800,
          'Hard': 4300,
          'Deadly': 6400
        },
        16: {
          'Easy': 1600,
          'Medium': 3200,
          'Hard': 4800,
          'Deadly': 7200
        },
        17: {
          'Easy': 2000,
          'Medium': 3900,
          'Hard': 5900,
          'Deadly': 8800
        },
        18: {
          'Easy': 2100,
          'Medium': 4200,
          'Hard': 6300,
          'Deadly': 9500
        },
        19: {
          'Easy': 2400,
          'Medium': 4900,
          'Hard': 7300,
          'Deadly': 10900
        },
        20: {
          'Easy': 2800,
          'Medium': 5700,
          'Hard': 8500,
          'Deadly': 12700
        }
      },
      writable: false
    },
    xpMultipliers: {
      value: {
        1: 1,
        2: 1.5,
        3: 2,
        4: 2.5,
        5: 3,
        6: 4
      },
      writable: false
    },
    challengeRatingXPValues: {
      value: {
        /* 0, 1/8, 1/4, 1/2 */
        0: 10,
        .135: 25,
        .25: 50,
        .5: 100,
        // 1-10
        1: 200,
        2: 450,
        3: 700,
        4: 1100,
        5: 1800,
        6: 2300,
        7: 2900,
        8: 3900,
        9: 5000,
        10: 5900,
        // 11-20
        11: 7200,
        12: 8400,
        13: 10000,
        14: 11500,
        15: 13000,
        16: 15000,
        17: 18000,
        19: 22000,
        20: 25000,
        // 21-30
        21: 33000,
        22: 41000,
        23: 50000,
        24: 62000,
        25: 75000,
        26: 90000,
        27: 105000,
        28: 120000,
        29: 135000,
        30: 155000
      },
      writable: false
    },
    challengeRatings: {
      value: [0, .135, .25, .5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
      writable: false
    }
  });

  builder.getEncounters = function (args) {
    args = builder._setDefaults(args);

    var groupThresholdRange = builder._getGroupThresholdRange(args.players, args.difficulty);

    args.crRange.max = builder._getCRCieling(groupThresholdRange, args.crRange);
    args.crRange.min = builder._getCRFloor(args.crRange);
    return builder._getEncounters(args.players.length, groupThresholdRange, args.monsterCountRange, args.crRange);
  };

  builder._setDefaults = function (args) {
    args = JSON.parse(JSON.stringify(args));
    var encounterArgs = {};
    encounterArgs.players = args.players || [];
    encounterArgs.crRange = args.crRange || {
      min: .135,
      max: 30
    };
    encounterArgs.monsterCountRange = args.monsterCountRange || {
      min: 1,
      max: 15
    };
    encounterArgs.difficulty = args.difficulty || 'Medium';
    return encounterArgs;
  };

  builder._getGroupThresholdRange = function (players, difficulty) {
    return players.reduce((accumulator, player) => {
      var playerXPThreshold = builder._getPlayerThresholdRange(player, difficulty);

      accumulator.min += playerXPThreshold.min;
      accumulator.max += playerXPThreshold.max;
      return accumulator;
    }, {
      min: 1,
      max: 0
    });
  };
  /* If our crRange.max exceeds our xpRange.max, we can lower it to filter out monsters of overly high CRs */


  builder._getCRCieling = function (xpRange, crRange) {
    for (var i = crRange.max; i > 0; i--) {
      if (builder.challengeRatingXPValues[crRange.max] > xpRange.max) {
        crRange.max = builder._lowerChallengeRating(crRange.max);
      } else {
        break;
      }
    }

    return crRange.max;
  };
  /* To avoid wasting cycles on too-weak monsters, crRange.min must be at least 1/10th the xp of crRange.max
      This gets a lot more generous as levels increase, and mostly serves to filter out CR 0-.5 early as those 
      quickly become one-hit-kills */


  builder._getCRFloor = function (crRange) {
    for (var i = crRange.min; i <= crRange.max; i++) {
      if (builder.challengeRatingXPValues[crRange.min] < builder.challengeRatingXPValues[crRange.max] / 10) {
        crRange.min = builder._raiseChallengeRating(crRange.min);
      } else {
        break;
      }
    }

    return crRange.min;
  };

  builder._getPlayerThresholdRange = function (player, difficulty) {
    var playerXPThreshold = {
      min: 0,
      max: 0
    };

    if (!player.level) {
      return playerXPThreshold;
    }

    var lowerDifficulty = 'Easy';

    if (difficulty === 'Deadly') {
      lowerDifficulty = 'Hard';
    } else if (difficulty === 'Hard') {
      lowerDifficulty = 'Medium';
    } else if (difficulty === 'Medium') {
      lowerDifficulty = 'Easy';
    }

    playerXPThreshold.max = builder.xpThresholds[player.level][difficulty];

    if (difficulty === 'Easy') {
      playerXPThreshold.min = Math.round(playerXPThreshold.max * .75);
    } else {
      playerXPThreshold.min = builder.xpThresholds[player.level][lowerDifficulty];
    }

    return playerXPThreshold;
  };

  builder._getMultiplier = function (playerCount, monsterCount) {
    var fightSize = builder._getFightSize(playerCount, monsterCount);

    return builder.xpMultipliers[fightSize];
  };

  builder._getFightSize = function (playerCount, monsterCount) {
    var fightSize = 0;

    if (monsterCount === 1) {
      fightSize = 1;
    } else if (monsterCount === 2) {
      fightSize = 2;
    } else if (monsterCount > 2 && monsterCount <= 6) {
      fightSize = 3;
    } else if (monsterCount >= 7 && monsterCount <= 10) {
      fightSize = 4;
    } else if (monsterCount >= 11 && monsterCount <= 14) {
      fightSize = 5;
    } else if (monsterCount >= 15) {
      fightSize = 6;
    }

    if (playerCount <= 2 && fightSize < 6) {
      fightSize++;
    } else if (playerCount >= 6 && fightSize > 1) {
      fightSize--;
    }

    return fightSize;
  };

  builder._getEncounters = function (playerCount, xpRange, countRange, crRange) {
    var encounters = [];

    for (var monsterCount = countRange.min; monsterCount <= countRange.max; monsterCount++) {
      var xpMultiplier = builder._getMultiplier(playerCount, monsterCount);

      var encounter = {
        count: monsterCount,
        crRange: crRange,
        xpCost: 0,
        crs: Array(monsterCount).fill(crRange.min)
      };

      for (var loopMax = 10000; loopMax > 0; loopMax--) {
        encounter = builder._getNextEncounter(encounter);
        encounter.xpCost = builder._getEncounterCost(encounter.crs, xpMultiplier);

        if (encounter.xpCost > xpRange.min && encounter.xpCost <= xpRange.max) {
          encounters.push(JSON.parse(JSON.stringify(encounter)));
        }
        /* Performance improvement. Once we have exceeded the xp budget we'll always exceed it with our highest value. */


        if (encounter.xpCost > xpRange.max) {
          encounter.crRange.max = builder._lowerChallengeRating(encounter.crRange.max);
        }

        if (encounter.crs[0] >= encounter.crRange.max) {
          break;
        }
      }
    }

    return encounters;
  };

  builder._lowerChallengeRating = function (cr) {
    if (cr > 0) return builder.challengeRatings[builder.challengeRatings.indexOf(cr) - 1];
    return cr;
  };

  builder._raiseChallengeRating = function (cr) {
    if (cr < 30) return builder.challengeRatings[builder.challengeRatings.indexOf(cr) + 1];
    return cr;
  };
  /* "Counts" through the possible arrangements of challenge ratings. 
      Starts at the rightmost (idx = .length -1) value in the array. 
          If that value is less than the max cr, it increases it by 1 and exits. 
          If the value is at max cr, it recursively attempts the same thing to the next item
  */


  builder._getNextEncounter = function (encounter) {
    var iterateEncounter = function iterateEncounter(idx) {
      var value = encounter.crs[idx];

      if (value < encounter.crRange.max) {
        encounter.crs[idx] = builder._raiseChallengeRating(value);
      } else {
        if (idx <= 0) {
          return;
        }

        iterateEncounter(idx - 1);
        /* Performance tweak. 
            Once a value iterates, there is no reason for values to its right to be of 
            a lower value than it. */

        for (var i = idx - 1; i < encounter.crs.length; i++) {
          encounter.crs[i] = encounter.crs[idx - 1];
        }
      }
    };

    iterateEncounter(encounter.crs.length - 1);
    return encounter;
  };
  /* Get Encounter Cost 
      Looks up the XP values for the provided challenge ratings and sums their values. 
  */


  builder._getEncounterCost = function () {
    var crs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var xpMultiplier = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var xpSum = crs.reduce((accumulator, cr) => {
      return accumulator + builder.challengeRatingXPValues[cr];
    }, 0);
    return xpSum * xpMultiplier;
  };

  return builder;
};

var html = "<div id=\"encounter-builder\">\r\n    <div class=\"grid\">\r\n        <div class=\"form-group grid-c-8\">\r\n            <label class=\"form-group-label label-small\" style=\"min-width:125px;\">Party:</label>\r\n            <input class=\"form-group-input input-small\" type=\"text\" id=\"party-size\" placeholder=\"number of players\">\r\n            <input class=\"form-group-input input-small\" type=\"text\" id=\"party-level\" placeholder=\"average level\">\r\n        </div>\r\n        <div class=\"grid-c-4\"></div>\r\n        <div class=\"form-group grid-c-4\">\r\n            <label class=\"form-group-label label-small\" style=\"min-width:125px;\">Difficulty:</label>\r\n            <select id=\"difficulty\" class=\"form-group-input input-small\">\r\n                <option value=\"Easy\">Easy</option>\r\n                <option value=\"Medium\">Medium</option>\r\n                <option value=\"Hard\" selected=\"selected\">Hard</option>\r\n                <option value=\"Deadly\">Deadly</option>   \r\n            </select>    \r\n        </div>\r\n        <div class=\"grid-c-8\"></div>\r\n        \r\n        <div class=\"form-group grid-c-8\">\r\n            <label class=\"form-group-label label-small\" style=\"min-width:125px;\">CR Range</label>\r\n            <label class=\"form-group-label label-small\">Min:</label>    \r\n            <select id=\"crMin\" class=\"form-group-input input-small\">\r\n                <option>1/8</option><option>1/4</option><option>1/2</option>\r\n                <!-- Default CR min-->\r\n                <option selected=\"selected\">1</option>\r\n                <option>2</option><option>3</option><option>4</option><option>5</option>\r\n                <option>6</option><option>7</option><option>8</option><option>9</option><option>10</option>\r\n                <option>11</option><option>12</option><option>13</option><option>14</option><option>15</option>\r\n                <option>16</option><option>17</option><option>18</option><option>19</option><option>20</option>\r\n                <option>21</option><option>22</option><option>23</option><option>24</option><option>25</option>\r\n                <option>26</option><option>27</option><option>28</option><option>29</option><option>30</option>   \r\n            </select>\r\n            <label class=\"form-group-label label-small\">Max:</label>\r\n            <select id=\"crMax\" class=\"form-group-input input-small\">\r\n                <option>1/8</option><option>1/4</option><option>1/2</option>\r\n                <option>1</option><option>2</option><option>3</option><option>4</option>\r\n                <!-- Default CR Max-->\r\n                <option selected=\"selected\">5</option>\r\n                <option>6</option><option>7</option><option>8</option><option>9</option><option>10</option>\r\n                <option>11</option><option>12</option><option>13</option><option>14</option><option>15</option>\r\n                <option>16</option><option>17</option><option>18</option><option>19</option><option>20</option>\r\n                <option>21</option><option>22</option><option>23</option><option>24</option><option>25</option>\r\n                <option>26</option><option>27</option><option>28</option><option>29</option><option>30</option>   \r\n            </select>    \r\n        </div>\r\n        <div class=\"grid-c-4\"></div>\r\n        <div class=\"form-group grid-c-8\">\r\n            <label class=\"form-group-label label-small\" style=\"min-width:125px;\">Monster Count:</label>\r\n            <label class=\"form-group-label label-small\">Min:</label>\r\n            <input id=\"monsterCountMin\" class=\"form-group-input input-small\" type=\"number\" maxlength=\"2\" value=\"1\">\r\n            <label class=\"form-group-label label-small\">Max:</label>\r\n            <input id=\"monsterCountMax\" class=\"form-group-input input-small\" type=\"number\" maxlength=\"2\" value=\"6\">\r\n        </div>\r\n        <div class=\"grid-c-4\"></div>\r\n    </div>\r\n    <div id=\"output-table\"></div>\r\n</div>";

/* 
    CR filters not working below 1
*/

var vm = lite.extend({
  content: html,
  initialize: function initialize() {
    var vm = this;
    vm.setElements();
    vm.setEventListeners();
    vm.initializeBuilder();
  },
  setElements: function setElements() {
    var vm = this;
    vm.elements = {
      crMax: '#crMax',
      crMin: '#crMin',
      difficulty: '#difficulty',
      monsterCountMax: '#monsterCountMax',
      monsterCountMin: '#monsterCountMin',
      partySize: '#party-size',
      partyLevel: '#party-level'
    };

    for (var k in vm.elements) {
      vm.elements[k] = vm.container.querySelector(vm.elements[k]);
    }
  },
  setEventListeners: function setEventListeners() {
    var vm = this;

    var setOnChange = function setOnChange(el, callback) {
      el.addEventListener('change', e => {
        callback(e.target.value);
        vm.generateEncounter();
      });
    };

    setOnChange(vm.elements.crMax, v => vm.builderArgs.crRange.max = +v);
    setOnChange(vm.elements.crMin, v => vm.builderArgs.crRange.min = +v);
    setOnChange(vm.elements.monsterCountMax, v => vm.builderArgs.monsterCountRange.max = +v);
    setOnChange(vm.elements.monsterCountMin, v => vm.builderArgs.monsterCountRange.min = +v);
    setOnChange(vm.elements.difficulty, v => vm.builderArgs.difficulty = v);

    var getPlayers = function getPlayers() {
      var size = +vm.elements.partySize.value;
      var level = +vm.elements.partyLevel.value;
      return Array(size).fill(level).map(l => {
        return {
          level: +l
        };
      });
    };

    setOnChange(vm.elements.partySize, v => vm.builderArgs.players = getPlayers());
    setOnChange(vm.elements.partyLevel, v => vm.builderArgs.players = getPlayers()); // block non-numerics on min/max

    vm.elements.monsterCountMin.addEventListener('keypress', function (e) {
      if (isNaN(String.fromCharCode(e.charCode))) {
        return e.preventDefault();
      }
    });
    vm.elements.monsterCountMax.addEventListener('keypress', e => {
      if (isNaN(String.fromCharCode(e.charCode))) {
        return e.preventDefault();
      }
    });
  },
  initializeBuilder: function initializeBuilder() {
    var vm = this;
    vm.encounterBuilder = new EncounterBuilder();
    vm.builderArgs = vm.defaultArgs();
  },
  defaultArgs: function defaultArgs() {
    var vm = this;
    var args = {
      players: [],
      // [{ level : 0}]
      difficulty: '',
      crRange: {
        min: 0,
        max: 0
      },
      monsterCountRange: {
        min: 0,
        max: 0
      }
    };
    args.players = [];
    args.difficulty = vm.elements.difficulty.value;
    args.crRange.min = +vm.elements.crMin.value;
    args.crRange.max = +vm.elements.crMax.value;
    args.monsterCountRange.min = +vm.elements.monsterCountMin.value;
    args.monsterCountRange.max = +vm.elements.monsterCountMax.value;
    return args;
  },
  generateEncounter: function generateEncounter() {
    var vm = this;
    var encounters = vm.encounterBuilder.getEncounters(vm.builderArgs);
    encounters = vm.prepareOutput(encounters);
    vm.writeOutput(encounters);
  },
  prepareOutput: function prepareOutput(encounters) {
    encounters.forEach(encounter => {
      // Get a count of how many times each CR occurs
      var crs = {};
      encounter.crs.forEach(cr => {
        crs[cr] = crs[cr] ? crs[cr] + 1 : 1;
      }); // Prepare them as display strings

      var crsStrings = [];

      for (var cr in crs) {
        crsStrings.push('CR' + cr + ' x' + crs[cr]);
      } // Replace decimals with fractions i.e. 0.135 => 1/8


      crsStrings = crsStrings.map(str => {
        str = str.replace('0.135', '1/8');
        str = str.replace('0.25', '1/4');
        str = str.replace('0.5', '1/2');
        return str;
      }); // Sort them and join them to a single string

      encounter.crsString = crsStrings.sort((a, b) => a <= b).join(', ');
    });
    return encounters;
  },
  writeOutput: function writeOutput(encounters) {
    var numberSort = function numberSort(a, b) {
      return +a >= +b ? 1 : -1;
    };

    var wildcardFilter = (cellVal, filterVal) => cellVal.includes(filterVal);

    var grid = new Gridify({
      container: 'output-table',
      data: encounters,
      columns: [{
        field: 'count',
        header: '# Monsters',
        filter: true,
        sort: numberSort
      }, {
        field: 'xpCost',
        header: 'XP Cost',
        filter: true,
        sort: numberSort
      }, {
        field: 'crsString',
        header: 'Challenge Ratings',
        filter: wildcardFilter,
        sort: true
      }],
      paging: {
        rows: 10
      },
      className: 'table small',

      onHeaderCellCreated(th, options) {
        var sortIcon = th.querySelector('.sort');

        if (sortIcon) {
          sortIcon.className = 'fa fa-sort';
        }
      },

      onHeaderCreated(thead, options) {
        thead.querySelectorAll('input[type="text"]').forEach(i => i.className = "input-xsmall");
      }

    });
    var pageContainer = grid.html.querySelector('#output-table-grid-paging');
    new pagination({
      container: pageContainer,
      grid: grid,
      data: grid.paging.data
    });
  }
});

export { vm };
