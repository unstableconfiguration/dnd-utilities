import { lite } from 'lite';
import { spells } from '../../../../../5e/spells.js';
import { Gridify } from 'gridify';
import { pagination } from '../../pagination/pagination.js';
import { modal } from '../../../../components/modal/modal.js';
import { SpellBox } from '../../../../components/spellbox/spellbox';

export let table = lite.extend({
    content : '<div id="spells-grid">Test</div>',
    initialize : function() { 
        let spellsArray = this.prepareSpells(spells);
        this.buildGrid(spellsArray);
    },
    prepareSpells : function(spells) {
        let spellsArray = [];
        for(let k in spells) {
            let spell = spells[k];
            spell.Ritual = !!spell.Ritual ? 'Yes' : 'No';
            spellsArray.push(spell);
        }
        return spellsArray;
    },
    buildGrid : function(spellsArray) { 
        let vm = this;
        vm.grid = new Gridify({
            container : 'spells-grid',
            data : spellsArray,
            columns : [
                { 
                    field : 'Name', 
                    header : "Name",
                    style : 'width:200px; text-align:left; text-decoration:underline; white-space:nowrap; overflow:hidden;',
                    sort : true,
                    filter : true,
                    click : (e) => {
                        new modal({ 
                            body : new SpellBox({
                                data : spells[e.target.innerHTML]
                            })
                        });
                    } 
                },
                { field : 'Level', header : 'Level', filter : true, sort : true, style: 'width:80px;' },
                { field : 'School', header : 'School', filter : true, sort : true, style : 'width:100px; text-align:left;'},
                { field : 'CastingTime', header : 'Cast Time', filter : true, sort : true, style: 'width:125px; text-align:left;' },
                { field : 'Ritual', header : "Ritual", filter : vm.getRitualFilter(), style : 'width:50px;' },
                { field : 'Range', header : 'Range', filter : true, sort : true, style: 'width:100px; text-align:left; white-space:nowrap; overflow:hidden;' },
                { field : 'Duration', header : 'Duration', filter : true, sort : true, style: 'width:125px; text-align:left; white-space:nowrap; overflow:hidden;' } 
            ],
            paging : { rows : 10 },
            className : 'table small',
            style : 'table-layout:fixed',
            onTableCellCreated(td, options) {
                if(td.style.overflow === 'hidden') { 
                    td.title = td.innerText; 
                    td.innerText = td.innerText.replace('Concentration, up to', 'Concen...');
                }
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
                ? columnValue == 'Yes'
                : true;
        }

        return { 
            control : checkBox,
            compare : compare
        }
    }
});