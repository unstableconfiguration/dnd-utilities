import { l as lite } from './index.js';
import { m as monsters, M as MonsterBox } from './monsterbox-69f998db.js';
import { m as modal } from './modal-fb7914d8.js';
import { G as Gridify } from './gridify-e8a24bcd.js';

var html$1 = "<div id=\"battle-manager\">\r\n    <div id=\"left\">\r\n        <div>\r\n            <button id=\"btnShowAddParticipantModal\" class=\"btn-primary\">+Add Participant</button>\r\n        </div>\r\n        <div>\r\n            <div id=\"battle-table-container\"></div>\r\n        </div>\r\n    </div>\r\n    <div id=\"right\">\r\n        <div id=\"dice-container\"></div>\r\n    </div>\r\n</div>";

var html = "<style>\r\n    .autocomplete-suggestions {\r\n        text-align: left; cursor: default; border: 1px solid #ccc; border-top: 0; background: #fff; box-shadow: -1px 1px 3px rgba(0,0,0,.1);\r\n\r\n        /* core styles should not be changed */\r\n        position: absolute; display: none; z-index: 9999; max-height: 254px; overflow: hidden; overflow-y: auto; box-sizing: border-box;\r\n    }\r\n    .autocomplete-suggestion { position: relative; padding: 0 .6em; line-height: 23px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-size: 1.02em; color: #333; }\r\n    .autocomplete-suggestion b { font-weight: normal; color: #1f8dd6; }\r\n    .autocomplete-suggestion.selected { background: #f0f0f0; }\r\n</style>\r\n<div id=\"add-participant-modal\">\r\n    <div>\r\n        <div style=\"display:inline-block;\">\r\n            <label for=\"txtInit\">initiative</label>\r\n            <input id=\"txtInit\" placeholder=\"init\">\r\n        </div>\r\n        <div style=\"display:inline-block;\">\r\n            <label for=\"txtName\">name</label>\r\n            <input id=\"txtName\" placeholder=\"name\">\r\n        </div>\r\n        <div style=\"display:inline-block;\">\r\n            <label for=\"txtHp\">hit points</label>\r\n            <input id=\"txtHp\" placeholder=\"hp\">\r\n        </div>\r\n        <div style=\"display:inline-block;\">\r\n            <label for=\"txtCount\">count</label>\r\n            <input id=\"txtCount\" placeholder=\"#\" value=\"1\">\r\n        </div>\r\n        <button id=\"btnAddParticipant\" class=\"btn-primary\" disabled=\"disabled\">Add</button>\r\n    </div>\r\n</div>\r\n";

/*
    JavaScript autoComplete v1.0.4
    Copyright (c) 2014 Simon Steinberger / Pixabay
    GitHub: https://github.com/Pixabay/JavaScript-autoComplete
    License: http://www.opensource.org/licenses/mit-license.php
*/
var autoComplete = function () {
  // "use strict";
  function autoComplete(options) {
    if (!document.querySelector) return; // helpers

    function hasClass(el, className) {
      return el.classList ? el.classList.contains(className) : new RegExp('\\b' + className + '\\b').test(el.className);
    }

    function addEvent(el, type, handler) {
      if (el.attachEvent) el.attachEvent('on' + type, handler);else el.addEventListener(type, handler);
    }

    function removeEvent(el, type, handler) {
      // if (el.removeEventListener) not working in IE11
      if (el.detachEvent) el.detachEvent('on' + type, handler);else el.removeEventListener(type, handler);
    }

    function live(elClass, event, cb, context) {
      addEvent(context || document, event, function (e) {
        var found,
            el = e.target || e.srcElement;

        while (el && !(found = hasClass(el, elClass))) {
          el = el.parentElement;
        }

        if (found) cb.call(el, e);
      });
    }

    var o = {
      selector: 0,
      source: 0,
      minChars: 3,
      delay: 150,
      offsetLeft: 0,
      offsetTop: 1,
      cache: 1,
      menuClass: '',
      renderItem: function renderItem(item, search) {
        // escape special characters
        search = search.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        var re = new RegExp("(" + search.split(' ').join('|') + ")", "gi");
        return '<div class="autocomplete-suggestion" data-val="' + item + '">' + item.replace(re, "<b>$1</b>") + '</div>';
      },
      onSelect: function onSelect(e, term, item) {}
    };

    for (var k in options) {
      if (options.hasOwnProperty(k)) o[k] = options[k];
    } // init


    var elems = typeof o.selector == 'object' ? [o.selector] : document.querySelectorAll(o.selector);

    for (var i = 0; i < elems.length; i++) {
      var that = elems[i]; // create suggestions container "sc"

      that.sc = document.createElement('div');
      that.sc.className = 'autocomplete-suggestions ' + o.menuClass;
      that.autocompleteAttr = that.getAttribute('autocomplete');
      that.setAttribute('autocomplete', 'off');
      that.cache = {};
      that.last_val = '';

      that.updateSC = function (resize, next) {
        var rect = that.getBoundingClientRect();
        that.sc.style.left = Math.round(rect.left + (window.pageXOffset || document.documentElement.scrollLeft) + o.offsetLeft) + 'px';
        that.sc.style.top = Math.round(rect.bottom + (window.pageYOffset || document.documentElement.scrollTop) + o.offsetTop) + 'px';
        that.sc.style.width = Math.round(rect.right - rect.left) + 'px'; // outerWidth

        if (!resize) {
          that.sc.style.display = 'block';

          if (!that.sc.maxHeight) {
            that.sc.maxHeight = parseInt((window.getComputedStyle ? getComputedStyle(that.sc, null) : that.sc.currentStyle).maxHeight);
          }

          if (!that.sc.suggestionHeight) that.sc.suggestionHeight = that.sc.querySelector('.autocomplete-suggestion').offsetHeight;
          if (that.sc.suggestionHeight) if (!next) that.sc.scrollTop = 0;else {
            var scrTop = that.sc.scrollTop,
                selTop = next.getBoundingClientRect().top - that.sc.getBoundingClientRect().top;
            if (selTop + that.sc.suggestionHeight - that.sc.maxHeight > 0) that.sc.scrollTop = selTop + that.sc.suggestionHeight + scrTop - that.sc.maxHeight;else if (selTop < 0) that.sc.scrollTop = selTop + scrTop;
          }
        }
      };

      addEvent(window, 'resize', that.updateSC);
      document.body.appendChild(that.sc);
      live('autocomplete-suggestion', 'mouseleave', function (e) {
        var sel = that.sc.querySelector('.autocomplete-suggestion.selected');
        if (sel) setTimeout(function () {
          sel.className = sel.className.replace('selected', '');
        }, 20);
      }, that.sc);
      live('autocomplete-suggestion', 'mouseover', function (e) {
        var sel = that.sc.querySelector('.autocomplete-suggestion.selected');
        if (sel) sel.className = sel.className.replace('selected', '');
        this.className += ' selected';
      }, that.sc);
      live('autocomplete-suggestion', 'mousedown', function (e) {
        if (hasClass(this, 'autocomplete-suggestion')) {
          // else outside click
          var v = this.getAttribute('data-val');
          that.value = v;
          o.onSelect(e, v, this);
          that.sc.style.display = 'none';
        }
      }, that.sc);

      that.blurHandler = function () {
        try {
          var over_sb = document.querySelector('.autocomplete-suggestions:hover');
        } catch (e) {
          var over_sb = 0;
        }

        if (!over_sb) {
          that.last_val = that.value;
          that.sc.style.display = 'none';
          setTimeout(function () {
            that.sc.style.display = 'none';
          }, 350); // hide suggestions on fast input
        } else if (that !== document.activeElement) setTimeout(function () {
          that.focus();
        }, 20);
      };

      addEvent(that, 'blur', that.blurHandler);

      var suggest = function suggest(data) {
        var val = that.value;
        that.cache[val] = data;

        if (data.length && val.length >= o.minChars) {
          var s = '';

          for (var i = 0; i < data.length; i++) {
            s += o.renderItem(data[i], val);
          }

          that.sc.innerHTML = s;
          that.updateSC(0);
        } else that.sc.style.display = 'none';
      };

      that.keydownHandler = function (e) {
        var key = window.event ? e.keyCode : e.which; // down (40), up (38)

        if ((key == 40 || key == 38) && that.sc.innerHTML) {
          var next,
              sel = that.sc.querySelector('.autocomplete-suggestion.selected');

          if (!sel) {
            next = key == 40 ? that.sc.querySelector('.autocomplete-suggestion') : that.sc.childNodes[that.sc.childNodes.length - 1]; // first : last

            next.className += ' selected';
            that.value = next.getAttribute('data-val');
          } else {
            next = key == 40 ? sel.nextSibling : sel.previousSibling;

            if (next) {
              sel.className = sel.className.replace('selected', '');
              next.className += ' selected';
              that.value = next.getAttribute('data-val');
            } else {
              sel.className = sel.className.replace('selected', '');
              that.value = that.last_val;
              next = 0;
            }
          }

          that.updateSC(0, next);
          return false;
        } // esc
        else if (key == 27) {
          that.value = that.last_val;
          that.sc.style.display = 'none';
        } // enter
        else if (key == 13 || key == 9) {
          var sel = that.sc.querySelector('.autocomplete-suggestion.selected');

          if (sel && that.sc.style.display != 'none') {
            o.onSelect(e, sel.getAttribute('data-val'), sel);
            setTimeout(function () {
              that.sc.style.display = 'none';
            }, 20);
          }
        }
      };

      addEvent(that, 'keydown', that.keydownHandler);

      that.keyupHandler = function (e) {
        var key = window.event ? e.keyCode : e.which;

        if (!key || (key < 35 || key > 40) && key != 13 && key != 27) {
          var val = that.value;

          if (val.length >= o.minChars) {
            if (val != that.last_val) {
              that.last_val = val;
              clearTimeout(that.timer);

              if (o.cache) {
                if (val in that.cache) {
                  suggest(that.cache[val]);
                  return;
                } // no requests if previous suggestions were empty


                for (var i = 1; i < val.length - o.minChars; i++) {
                  var part = val.slice(0, val.length - i);

                  if (part in that.cache && !that.cache[part].length) {
                    suggest([]);
                    return;
                  }
                }
              }

              that.timer = setTimeout(function () {
                o.source(val, suggest);
              }, o.delay);
            }
          } else {
            that.last_val = val;
            that.sc.style.display = 'none';
          }
        }
      };

      addEvent(that, 'keyup', that.keyupHandler);

      that.focusHandler = function (e) {
        that.last_val = '\n';
        that.keyupHandler(e);
      };

      if (!o.minChars) addEvent(that, 'focus', that.focusHandler);
    } // public destroy method


    this.destroy = function () {
      for (var i = 0; i < elems.length; i++) {
        var that = elems[i];
        removeEvent(window, 'resize', that.updateSC);
        removeEvent(that, 'blur', that.blurHandler);
        removeEvent(that, 'focus', that.focusHandler);
        removeEvent(that, 'keydown', that.keydownHandler);
        removeEvent(that, 'keyup', that.keyupHandler);
        if (that.autocompleteAttr) that.setAttribute('autocomplete', that.autocompleteAttr);else that.removeAttribute('autocomplete');
        document.body.removeChild(that.sc);
        that = null;
      }
    };
  }

  return autoComplete;
}();

(function () {
  if (typeof define === 'function' && define.amd) define('autoComplete', function () {
    return autoComplete;
  });else if (typeof module !== 'undefined' && module.exports) module.exports = autoComplete;else window.autoComplete = autoComplete;
})();

var view$1 = lite.extend({
  name: 'add-participant',
  content: html,
  onContentBound: function onContentBound() {
    var view = this;
    view.setElements();
    view.elements.init.value = view.rollD20();
    view.setAutoComplete();
    view.elements.init.focus();
  },
  setElements: function setElements() {
    var vm = this;
    vm.elements = {
      init: '#txtInit',
      name: '#txtName',
      hp: '#txtHp',
      count: '#txtCount',
      add: '#btnAddParticipant'
    };

    for (var k in vm.elements) {
      vm.elements[k] = vm.container.querySelector(vm.elements[k]);
    }

    vm.elements.add.addEventListener('click', vm.onAddParticipantClicked.bind(this));
    vm.elements.name.addEventListener('change', vm.onNameChanged.bind(this));
    vm.elements.name.addEventListener('keypress', vm.onNameKeyPress.bind(this));
    vm.elements.hp.addEventListener('keypress', vm.onHpKeyPress.bind(this));
    vm.elements.count.addEventListener('keypress', vm.onCountKeyPress.bind(this));
  },
  setAutoComplete: function setAutoComplete() {
    var monsterNames = Object.keys(monsters);
    new autoComplete({
      selector: '#add-participant-modal #txtName',
      minChars: 2,
      source: function source(term, suggest) {
        term = term.toLowerCase();
        var matches = monsterNames.filter(v => {
          return v.toLowerCase().includes(term);
        });
        suggest(matches);
      },
      onSelect: function onSelect(e) {
        // Force .onNameChanged to be called
        e.target.dispatchEvent(new Event('change'));
      }
    });
  },
  getParticipant: function getParticipant() {
    var vm = this;
    return {
      init: vm.elements.init.value,
      id: vm.elements.name.value,
      name: vm.elements.name.value,
      hp: vm.elements.hp.value
    };
  },
  onHpKeyPress: function onHpKeyPress(e) {
    if (e.keyCode === 13) {
      this.addParticipant();
    }
  },
  onNameChanged: function onNameChanged(e) {
    var vm = this;
    vm.elements.add.disabled = !vm.isValid();
    var monster = monsters[e.target.value];

    if (monster) {
      vm.setMonster(monster);
    }
  },
  onNameKeyPress: function onNameKeyPress(e) {
    // Press enter twice on name to submit
    if (e.keyCode === 13) {
      if (e.target.enterPressed) {
        this.addParticipant();
      } else e.target.enterPressed = true;
    } else e.target.enterPressed = false;
  },
  onCountKeyPress: function onCountKeyPress(e) {
    if (e.keyCode === 13) {
      this.addParticipant();
    }
  },
  setMonster: function setMonster(monster) {
    var vm = this;
    vm.elements.init.value = vm.rollD20() + Math.floor((monster.Stats.Dex - 10) / 2);
    vm.elements.hp.value = +/\d+/.exec(monster.Defenses.HP)[0];
  },
  onAddParticipantClicked: function onAddParticipantClicked() {
    this.addParticipant();
  },
  isValid: function isValid() {
    return !!this.elements.name.value;
  },
  addParticipant: function addParticipant() {
    var vm = this;

    if (!vm.isValid()) {
      return;
    }

    for (var i = 1; i <= +vm.elements.count.value; i++) {
      var participant = vm.getParticipant();

      if (vm.elements.count.value > 1) {
        participant.id = participant.id + ' ' + i;
      }

      vm.onParticipantAdded(participant);
    }

    new modal().hide();
  },
  onParticipantAdded: function onParticipantAdded() {},
  rollD20: function rollD20() {
    return Math.floor(Math.random() * 20) + 1;
  }
});
var AddParticipant = view$1;

var view = lite.extend({
  content: ' ',
  initialize: function initialize() {
    this.drawGrid();
  },
  drawGrid: function drawGrid() {
    var vm = this;
    vm.grid = new Gridify({
      container: 'battle-table-container',
      id: 'battle-table',
      data: vm.data,
      columns: [{
        field: 'init',
        header: 'Init',
        sort: vm.numberSort,
        style: 'width:75px; text-align:right;'
      }, {
        field: 'id',
        header: 'Id',
        style: 'width:150px;'
      }, {
        field: 'name',
        header: 'Name',
        click: vm.onNameClick,
        style: 'width:150px; text-align:center; text-decoration:underline'
      }, {
        field: 'hp',
        header: 'HP',
        style: 'width:150px;'
      }, {
        field: 'remove',
        header: 'Remove',
        style: 'width:75px; text-align:center;'
      }],
      onTableCellCreated: function onTableCellCreated(td, colDef) {
        switch (colDef.field) {
          case 'init':
            td.innerText = '';
            td.appendChild(vm.tdInit(td));
            break;

          case 'id':
            td.innerText = '';
            td.appendChild(vm.tdId(td));
            break;

          case 'hp':
            td.innerText = '';
            td.appendChild(vm.tdHP(td));
            break;

          case 'remove':
            td.innerText = '';
            td.appendChild(vm.tdRemoveButton(td));
            break;
        }
      },
      style: 'table-layout:fixed;',
      className: 'table small'
    });
    vm.grid.sort('init');
  },
  numberSort: function numberSort(a, b) {
    if (a === b) {
      return 0;
    }

    return +a > +b ? 1 : -1;
  },
  onNameClick: function onNameClick(e) {
    var monster = monsters[e.target.value];

    if (!monster) {
      return;
    }

    new modal({
      body: new MonsterBox({
        data: monster
      })
    });
  },
  tdInit: function tdInit(td) {
    var vm = this;
    var input = document.createElement('input');
    input.value = td.value;
    input.style = td.style.cssText;
    input.className = 'input-xsmall';
    input.addEventListener('change', () => {
      td.value = input.value; // sort twice so we stay descending

      vm.grid.sort('init');
      vm.grid.sort('init');
    });
    return input;
  },
  tdId: function tdId(td) {
    var input = document.createElement('input');
    input.value = td.value;
    input.style = td.style.cssText;
    input.className = 'input-xsmall';
    input.addEventListener('change', () => {
      td.value = input.value;
    });
    return input;
  },
  tdHP: function tdHP(td) {
    var input = document.createElement('input');
    input.value = td.value;
    input.style = td.style.cssText;
    input.className = 'input-xsmall';
    input.addEventListener('change', () => {
      td.value = input.value;
    });
    return input;
  },
  tdRemoveButton: function tdRemoveButton(td) {
    var vm = this;
    var button = document.createElement('button');
    button.innerHTML = '-';
    button.className = 'btn-xsmall btn-dark';
    button.style.width = '60%';
    button.addEventListener('click', function () {
      td.parentElement.parentElement.removeChild(td.parentElement);
      vm.parent.data = vm.grid.data.get();
    });
    return button;
  }
});
var ParticipantsGrid = view;

var vm = lite.extend({
  content: html$1,
  initialize: function initialize() {
    this.data = [];
    this.addEventListeners();
  },
  addEventListeners: function addEventListeners() {
    var vm = this;
    document.getElementById('btnShowAddParticipantModal').addEventListener('click', vm.btnShowAddParticipantModalClicked.bind(vm));
  },
  btnShowAddParticipantModalClicked: function btnShowAddParticipantModalClicked() {
    var vm = this;
    new modal({
      body: new AddParticipant({
        parent: vm,
        onParticipantAdded: vm.onParticipantAdded.bind(vm)
      })
    });
  },
  onParticipantAdded: function onParticipantAdded(participantData) {
    var vm = this;
    vm.data.push(participantData);
    vm.drawGrid();
    document.getElementById('btnShowAddParticipantModal').focus();
  },
  drawGrid: function drawGrid() {
    var vm = this;

    if (!vm.data.length) {
      return;
    }

    new ParticipantsGrid({
      parent: vm,
      container: 'battle-table-container',
      data: vm.data
    });
  }
});

export { vm };
