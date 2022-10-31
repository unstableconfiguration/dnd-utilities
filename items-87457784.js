import { L as Lite, G as Gridify } from './index.js';
import { i as items } from './items-7818512a.js';
import { P as Pagination } from './pagination-ca704f50.js';

class ItemLookup {
  constructor(args) {
    this.container = Lite.append(args.container, "<div id='items-grid'></div>");
    var itemArray = this.getItemArray(items);
    this.buildItemGrid(itemArray);
  }

  getItemArray(items) {
    var itemsArray = [];

    for (var k in items) {
      var item = items[k];
      if (!item.Value) item.Value = '';
      if (!item.Weight) item.Weight = '';
      itemsArray.push(item);
    }

    return itemsArray;
  }

  buildItemGrid(itemsArray) {
    var vm = this;
    vm.grid = new Gridify({
      container: 'items-grid',
      data: itemsArray,
      columns: [{
        field: 'Name',
        header: 'Name',
        filter: true,
        sort: true,
        style: 'width: 175px; overflow:hidden;'
      }, {
        field: 'Weight',
        header: 'Weight',
        filter: true,
        sort: vm.numberSort,
        style: 'width: 75px; text-align: right;'
      }, {
        field: 'Value',
        header: 'Value',
        filter: true,
        sort: vm.coinSort.bind(vm),
        style: 'width: 75px; text-align: right;'
      }],
      paging: {
        rows: 10
      },
      style: 'table-layout:fixed;',
      className: 'table small',

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
    var pageContainer = vm.grid.html.querySelector('#items-grid-grid-paging');
    new Pagination({
      container: pageContainer,
      grid: vm.grid,
      data: vm.grid.paging.data
    });
  }

  numberSort(a, b) {
    a = +a || 0;
    b = +b || 0;

    if (a === b) {
      return 0;
    }

    return a > b ? 1 : -1;
  }

  getCoinValue(val) {
    var coinValues = {
      cp: 1,
      sp: 10,
      ep: 50,
      gp: 100,
      pp: 1000
    };
    var value = +val.replace(/[^\d\.]/g, '');

    for (var cv in coinValues) {
      if (val.includes(cv)) {
        value = value * coinValues[cv];
      }
    }

    return +value || -1;
  }

  coinSort(a, b) {
    a = this.getCoinValue(a);
    b = this.getCoinValue(b);

    if (a === b) {
      return 0;
    } else return a > b ? 1 : -1;
  }

}

export { ItemLookup };
