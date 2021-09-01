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
        new Gridify({
            container : 'spells-grid',
            data : spells,
            columns : [
                { 
                    field : 'Name', 
                    header : 'Name',
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
                { field : 'Level', header : 'Level', filter : true }, // filter : true, sort : true, style: 'width:50px; text-align:right;' },
                { field : 'School', header : 'School', filter : true }, // filter : true, sort : true, style : 'width:125px'},
                { field : 'CastingTime', header : 'Casting Time', filter : true }, // filter : true, sort:true, style: 'width:125px;' },
                { field : 'Ritual', header : 'Ritual', filter : true }, //filter : null/*view.getRitualFilter()*/, style : 'width:50px; text-align:center;'},
                { field : 'Range', header : 'Range', filter : true }, //filter : true, sort : true, style: 'width:100px; overflow:hidden;' },
                { field : 'Duration', header : 'Duration', filter : true }, //filter : true, sort : true, style: 'width:100px;' } 
            ],

            paging : true,
            //style : 'table-layout:fixed; width:750px;',
            className : 'table',
            onTableCellCreated(td, options) {
                if(td.style.overflow === 'hidden') { td.title = td.innerText; }
            }
        })
    }
});