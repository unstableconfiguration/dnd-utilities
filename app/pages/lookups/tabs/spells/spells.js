import { lite } from 'lite';
import html from './spells.html';
import { spells } from '../../../../../5e/spells.js';
import { Gridify } from 'gridify';
import { pagination } from '../../pagination/pagination.js';

export let table = lite.extend({
    content : html,
    initialize : function() { 
        let spellsData = this.prepareSpells(spells);
        this.buildGrid(spellsData);
    },
    prepareSpells : function(spells) {
        let spellsArray = [];
        for(let k in spells) {
            spellsArray.push(spells[k]);
        }
        return spellsArray;
    },
    buildGrid : function(spells) { 
        let vm = this;
        vm.grid = new Gridify({
            container : 'spells-grid',
            data : spells,
            columns : [
                { 
                    field : 'Name', 
                    header : "Name",
                    style : 'width:200px; text-align:left; text-decoration:underline;',
                    sort : true,
                    filter : true,
                    click : (e) => {
                        new Modal({
                            container: document.getElementById('modal-container')
                        }).attach();
                        new SpellBox({
                            data : spells[e.target.innerHTML],
                            container : document.getElementById('modal-content')
                        }).attach();
                    } 
                },
                { field : 'Level', header : 'Level', filter : true, sort : true, style: 'width:100px;' },
                { field : 'School', header : 'School', filter : true, sort : true, style : 'width:125px; text-align:left;'},
                { field : 'CastingTime', header : 'Cast Time', filter : true, sort : true, style: 'width:150px; text-align:left;' },
                { field : 'Ritual', header : 'Ritual', filter : vm.getRitualFilter(), style : 'width:50px;'},
                { field : 'Range', header : 'Range', filter : true, sort : true, style: 'width:100px; text-align:left;' },
                { field : 'Duration', header : 'Duration', filter : true, sort : true, style: 'width:100px;; text-align:left;' } 
            ],
            paging : { rows : 10 },
            className : 'table small',
            onTableCellCreated(td, options) {
                if(td.style.overflow === 'hidden') { td.title = td.innerText; }
            },
            onHeaderCreated(thead, options) {
                thead.querySelectorAll('input[type="text"]')
                    .forEach(i => i.className = "input-xsmall");
            },
            onHeaderCellCreated(th, options) { 
                let sortIcon = th.querySelector('.sort');
                if(sortIcon) { sortIcon.className = 'fa fa-sort'; } 
            }
        });
        let pageContainer = vm.grid.html.querySelector('#spells-grid-grid-paging');
        new pagination({ container : pageContainer, grid : vm.grid, data : vm.grid.paging.data });
    },
    getRitualFilter : function() { 
        let vm = this;
        let checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.addEventListener('click', (e) => {
            e.target.value = e.target.checked;
            vm.grid.filter();
        });

        let compare = function(columnValue, filterValue) {
            return filterValue == 'true'
                ? columnValue == 1
                : true;
        }

        return { 
            control : checkBox,
            compare : compare
        }
    }
});