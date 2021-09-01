import { lite } from 'lite';
import html from './spells.html';
import { spells } from '../../../../../5e/spells.js';
import { Gridify } from 'gridify';

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
                    header : 'Name',
                    //style : 'width:200px; text-align:left; text-decoration:underline;',
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
                { field : 'Level', header : 'Level', filter : true, sort : true }, // sort : true, style: 'width:50px; text-align:right;' },
                { field : 'School', header : 'School', filter : true, sort : true }, // sort : true, style : 'width:125px'},
                { field : 'CastingTime', header : 'Casting Time', filter : true, sort : true }, // sort:true, style: 'width:125px;' },
                { field : 'Ritual', header : 'Ritual', filter : vm.getRitualFilter() }, // style : 'width:50px; text-align:center;'},
                { field : 'Range', header : 'Range', filter : true, sort : true }, // sort : true, style: 'width:100px; overflow:hidden;' },
                { field : 'Duration', header : 'Duration', filter : true, sort : true } // sort : true, style: 'width:100px;' } 
            ],

            //paging : true,
            //style : 'table-layout:fixed; width:750px;',
            className : 'table',
            onTableCellCreated(td, options) {
                if(td.style.overflow === 'hidden') { td.title = td.innerText; }
            }
        })
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