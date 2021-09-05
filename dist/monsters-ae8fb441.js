import { G as Gridify } from './gridify-e8a24bcd.js';
import { l as lite } from './index.js';
import { m as monsters, M as MonsterBox } from './monsterbox-69f998db.js';
import { p as pagination } from './pagination-cdf5870f.js';
import { m as modal } from './modal-fb7914d8.js';

var table = lite.extend({
  content: '<div id="monsters-grid">Test 2</div>',
  initialize: function initialize() {
    var monsterArray = this.prepareMonsters(monsters);
    this.buildGrid(monsterArray);
  },
  prepareMonsters: function prepareMonsters(monsters) {
    var monsterArray = [];

    for (var m in monsters) {
      monsterArray.push(monsters[m]);
    }

    return monsterArray;
  },
  buildGrid: function buildGrid(monsterArray) {
    var vm = this;
    vm.grid = new Gridify({
      container: 'monsters-grid',
      data: monsterArray,
      columns: [{
        field: 'Name',
        header: 'Name',
        filter: vm.nameFilter,
        className: 'td-text-long',
        style: 'width: 200px; text-decoration:underline',
        sort: true,
        click: e => {
          new modal({
            body: new MonsterBox({
              data: monsters[e.target.innerHTML]
            })
          });
        }
      }, {
        field: 'ChallengeRating',
        header: 'CR',
        style: 'width:75px; text-align:right;',
        filter: vm.crFilter,
        sort: vm.crSort
      }, {
        field: 'Type',
        header: 'Type',
        className: 'td-text-long',
        style: 'width: 100px;',
        filter: true,
        format: v => {
          return v.split(',')[0];
        },
        sort: true
      }, {
        field: 'Alignment',
        header: 'Alignment',
        style: 'width:100px;',
        className: 'td-text-long',
        filter: true,
        sort: true
      }],
      paging: {
        rows: 10
      },
      style: 'table-layout:fixed;',
      className: 'table small',

      onTableCellCreated(td, options) {
        if (td.style.overflow === 'hidden') {
          td.title = td.innerText;
        }
      },

      onHeaderCreated(thead, options) {
        thead.querySelectorAll('input[type="text"]').forEach(i => i.className = "input-xsmall");
      },

      onHeaderCellCreated(th, options) {
        var sortIcon = th.querySelector('.sort');

        if (sortIcon) {
          sortIcon.className = 'fa fa-sort';
        }
      }

    });
    var pageContainer = vm.grid.html.querySelector('#monsters-grid-grid-paging');
    new pagination({
      container: pageContainer,
      grid: vm.grid,
      data: vm.grid.paging.data
    });
  },
  crSort: function crSort(a, b) {
    var parse = cr => cr.indexOf('/') === -1 ? +cr : 1 / cr.split('/')[1];

    a = parse(a);
    b = parse(b);

    if (a == b) {
      return 0;
    }

    return a > b ? 1 : -1;
  },
  crFilter: function crFilter(cellValue, filterValue) {
    if (+filterValue === 1) {
      return +cellValue === 1;
    }

    return ('' + cellValue).substr(0, filterValue.length) === filterValue;
  },
  nameFilter: function nameFilter(cellValue, filterValue) {
    return cellValue.toLowerCase().includes(filterValue.toLowerCase());
  }
});

export { table };
