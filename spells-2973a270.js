import { L as Lite, _ as _classPrivateMethodGet, G as Gridify } from './index.js';
import { s as spells, S as SpellBox } from './spellbox-6973dd1c.js';
import { P as Pagination } from './pagination-ca704f50.js';
import { M as Modal } from './modal-74c39af9.js';

var _prepareSpells = /*#__PURE__*/new WeakSet();

var _buildGrid = /*#__PURE__*/new WeakSet();

var _getRitualFilter = /*#__PURE__*/new WeakSet();

class SpellLookup {
  constructor(args) {
    _getRitualFilter.add(this);

    _buildGrid.add(this);

    _prepareSpells.add(this);

    this.container = Lite.append(args.container, "<div id='spells-grid'>Spells Grid Loaded</div>");

    var _spellsArray = _classPrivateMethodGet(this, _prepareSpells, _prepareSpells2).call(this, spells);

    _classPrivateMethodGet(this, _buildGrid, _buildGrid2).call(this, _spellsArray);
  }

}

function _prepareSpells2(spells) {
  var spellsArray = [];

  for (var k in spells) {
    var spell = spells[k];
    spell.Ritual = !!spell.Ritual ? 'Yes' : 'No';
    spellsArray.push(spell);
  }

  return spellsArray;
}

function _buildGrid2(spellsArray) {
  var vm = this;
  vm.grid = new Gridify({
    container: 'spells-grid',
    data: spellsArray,
    columns: [{
      field: 'Name',
      header: "Name",
      style: 'width:200px; text-align:left; text-decoration:underline; white-space:nowrap; overflow:hidden;',
      sort: true,
      filter: true,
      click: ev => {
        var modal = new Modal();
        new SpellBox({
          container: modal.body,
          data: spells[ev.target.innerHTML]
        });
      }
    }, {
      field: 'Level',
      header: 'Level',
      filter: true,
      sort: true,
      style: 'width:80px;'
    }, {
      field: 'School',
      header: 'School',
      filter: true,
      sort: true,
      style: 'width:100px; text-align:left;'
    }, {
      field: 'CastingTime',
      header: 'Cast Time',
      filter: true,
      sort: true,
      style: 'width:125px; text-align:left;'
    }, {
      field: 'Ritual',
      header: "Ritual",
      filter: _classPrivateMethodGet(vm, _getRitualFilter, _getRitualFilter2).call(vm),
      style: 'width:50px;'
    }, {
      field: 'Range',
      header: 'Range',
      filter: true,
      sort: true,
      style: 'width:100px; text-align:left; white-space:nowrap; overflow:hidden;'
    }, {
      field: 'Duration',
      header: 'Duration',
      filter: true,
      sort: true,
      style: 'width:125px; text-align:left; white-space:nowrap; overflow:hidden;'
    }],
    paging: {
      rows: 10
    },
    className: 'table small',
    style: 'table-layout:fixed',

    onTableCellCreated(td, options) {
      if (td.style.overflow === 'hidden') {
        td.title = td.innerText;
        td.innerText = td.innerText.replace('Concentration, up to', 'Concen...');
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
  var pageContainer = vm.grid.html.querySelector('#spells-grid-grid-paging');
  new Pagination({
    container: pageContainer,
    grid: vm.grid,
    data: vm.grid.paging.data
  });
}

function _getRitualFilter2() {
  var vm = this;
  var checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBox.addEventListener('click', e => {
    e.target.value = e.target.checked;
    vm.grid.filter();
  });

  var compare = function compare(columnValue, filterValue) {
    return filterValue == 'true' ? columnValue == 'Yes' : true;
  };

  return {
    control: checkBox,
    compare: compare
  };
}

export { SpellLookup };
