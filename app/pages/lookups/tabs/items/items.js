import { lite } from 'lite';
import { Gridify } from 'gridify';
import { items } from '../../../../../5e/items.js';
import { pagination } from '../../pagination/pagination.js';

export let table = lite.extend({
    content : '<div id="items-grid"></div>',
    initialize : function() { 
        let itemsArray = this.getItemsArray(items);
        this.buildItemsGrid(itemsArray);
    },
    getItemsArray : function(items) { 
        let itemsArray = [];
        for(let k in items) { itemsArray.push(items[k]); }
        return itemsArray;
    },
    buildItemsGrid : function(itemsArray) {
        let vm = this;
        vm.grid = new Gridify( { 
            container : 'items-grid',
            data : itemsArray,
            columns : [
                { field : 'Name', header : 'Name', filter : true, sort : true, style : 'width: 175px; overflow:hidden;' }
                , { field : 'Weight', header : 'Weight', filter : true, sort : vm.numberSort, style : 'width: 75px; text-align: right;' }
                , { field : 'Value', header : 'Value', filter : true, sort : vm.coinSort.bind(vm), style : 'width: 75px; text-align: right;' }
            ],
            paging : { rows : 10 },
            style : 'table-layout:fixed;',
            className : 'table small',
            onHeaderCreated(thead, options) {
                thead.querySelectorAll('input[type="text"]')
                    .forEach(i => i.className = "input-xsmall");
            },
            onHeaderCellCreated(th, options) { 
                let sortIcon = th.querySelector('.sort');
                if(sortIcon) { sortIcon.className = 'fa fa-sort'; } 
            }
        });
        let pageContainer = vm.grid.html.querySelector('#items-grid-grid-paging');
        new pagination({ container : pageContainer, grid : vm.grid, data : vm.grid.paging.data });
    }, 
    numberSort : function(a, b) {
        a = +a || 0;
        b = +b || 0;
        if(a === b) { return 0; }
        return a > b ? 1 : -1;
    }, 
    getCoinValue : function(val) {
        let coinValues = { cp : 1, sp : 10, ep : 50, gp : 100, pp : 1000 };
        let value = +val.replace(/[^\d\.]/g, '');
        for(let cv in coinValues) {
            if(val.includes(cv)) { value = value * coinValues[cv]; }
        }
        return +value || -1;
    }, 
    coinSort : function(a, b) { 
        a = this.getCoinValue(a);
        b = this.getCoinValue(b);

        if(a === b) { return 0; }
        else return a > b ? 1 : -1;
    }
});


