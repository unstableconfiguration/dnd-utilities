import { L as Lite, _ as _classPrivateMethodGet, a as _classPrivateFieldGet } from './index.js';

var html = "<style>\r\n    #table-container .td-text-long {\r\n        /* Overriding cirrus .table */\r\n        text-align:left !important; \r\n        overflow: hidden;\r\n        white-space: nowrap;\r\n    }\r\n</style>\r\n<div class=\"tab-container\">\r\n    <ul>\r\n        <li id=\"spells\"><div class=\"tab-item-content\">Spells</div></li>\r\n        <li id=\"monsters\"><div class=\"tab-item-content\">Monsters</div></li>\r\n        <li id=\"items\"><div class=\"tab-item-content\">Items</div></li>\r\n    </ul>\r\n</div>\r\n<div id=\"table-container\">\r\n\r\n</div>";

var _addEventListeners = /*#__PURE__*/new WeakSet();

var _loadTab = /*#__PURE__*/new WeakMap();

class Lookups {
  constructor(args) {
    _addEventListeners.add(this);

    _loadTab.set(this, {
      writable: true,
      value: {
        'spells': container => {
          import('./spells-d2992015.js').then(t => new t.SpellLookup({
            container: container
          }));
        },
        'monsters': container => {
          import('./monsters-ebcdcc3e.js').then(t => new t.MonsterLookup({
            container: container
          }));
        },
        'items': container => {
          import('./items-7b46c6dc.js').then(t => new t.ItemLookup({
            container: container
          }));
        }
      }
    });

    this.container = Lite.append(args.container, html);

    _classPrivateMethodGet(this, _addEventListeners, _addEventListeners2).call(this);

    this.container.querySelector('#spells').click();
  }

}

function _addEventListeners2() {
  var vm = this;
  var tabs = document.querySelectorAll('.tab-container > ul > li');
  var tableContainer = this.container.querySelector('#table-container');
  tabs.forEach(tab => {
    tab.addEventListener('click', function () {
      _classPrivateFieldGet(vm, _loadTab)[tab.id](tableContainer);
    });
  });
}

var View = Lookups;

export { Lookups, View };
