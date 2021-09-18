import { l as lite } from './index.js';

var html = "<style>\r\n    #table-container .td-text-long {\r\n        /* Overriding cirrus .table */\r\n        text-align:left !important; \r\n        overflow: hidden;\r\n        white-space: nowrap;\r\n    }\r\n</style>\r\n<div class=\"tab-container\">\r\n    <ul>\r\n        <li id=\"spells\"><div class=\"tab-item-content\">Spells</div></li>\r\n        <li id=\"monsters\"><div class=\"tab-item-content\">Monsters</div></li>\r\n        <li id=\"items\"><div class=\"tab-item-content\">Items</div></li>\r\n    </ul>\r\n</div>\r\n<div id=\"table-container\">\r\n\r\n</div>";

var vm = lite.extend({
  content: html,
  initialize: function initialize() {
    this.addEventListeners();
    this.container.querySelector('#spells').click();
  },
  loadTab: {
    'spells': container => {
      import('./spells-35ab2338.js').then(t => new t.table({
        container: container
      }));
    },
    'monsters': container => {
      import('./monsters-9f31b951.js').then(t => new t.table({
        container: container
      }));
    },
    'items': container => {
      import('./items-59dfba68.js').then(t => new t.table({
        container: container
      }));
    }
  },
  addEventListeners: function addEventListeners() {
    var vm = this;
    var tabs = document.querySelectorAll('.tab-container > ul > li');
    var tableContainer = this.container.querySelector('#table-container');
    tabs.forEach(tab => {
      tab.addEventListener('click', function () {
        vm.loadTab[tab.id](tableContainer);
      });
    });
  }
});

export { vm };
