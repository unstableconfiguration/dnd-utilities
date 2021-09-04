import { lite } from 'lite';
import { Gridify } from 'gridify';
import { monsters } from '../../../../5e/monsters.js';
import { modal } from '../../../components/modal/modal.js';
import { MonsterBox } from '../../../components/monsterbox/monsterbox.js';

export let view = lite.extend({
    content : ' '
    , initialize : function() {
        this.drawGrid();
    }
    , drawGrid : function() {
        let vm = this;
        vm.grid = new Gridify({
            container : 'battle-table-container',
            id : 'battle-table',
            data : vm.data,
            columns : [
                { field : 'init', header : 'Init', sort : vm.numberSort,
                    style : 'width:75px; text-align:right;' },
                { field : 'id', header : 'Id',
                    style : 'width:150px;' },
                { field : 'name', header : 'Name', click : vm.onNameClick,
                    style : 'width:150px; text-align:center; text-decoration:underline' },
                { field : 'hp', header : 'HP', 
                    style : 'width:150px;' }, 
                { field : 'remove', header : 'Remove', 
                    style : 'width:75px; text-align:center;' }
            ],
            onTableCellCreated : function(td, colDef) {
                switch(colDef.field) { 
                    case 'init' :       
                        td.innerText = '';
                        td.appendChild(vm.tdInit(td));
                    break;
                    case 'id' :     
                        td.innerText = '';
                        td.appendChild(vm.tdId(td));
                    break;
                    case 'hp' : 
                        td.innerText = '';
                        td.appendChild(vm.tdHP(td));
                    break;
                    case 'remove': 
                        td.innerText = '';
                        td.appendChild(vm.tdRemoveButton(td));
                    break;
                }
            },
            style : 'table-layout:fixed;',
            className : 'table small'
        });
        vm.grid.sort('init');
    }
    , numberSort : function(a, b) {
        if(a === b) { return 0; }
        return +a > +b ? 1 : -1;
    }
    , onNameClick : function(e) { 
        let monster = monsters[e.target.value];
        if(!monster) { return; }
        new modal({
            body : new MonsterBox({
                data : monster
            })
        });
    }
    , tdInit : function(td) { 
        let vm = this;
        let input = document.createElement('input');
        input.value = td.value;
        input.style = td.style.cssText;
        input.className = 'input-xsmall'

        input.addEventListener('change', () => { 
            td.value = input.value; 
            // sort twice so we stay descending
            vm.grid.sort('init');
            vm.grid.sort('init');
        });
        return input;
    }
    , tdId : function(td) {
        let input = document.createElement('input');
        input.value = td.value;
        input.style = td.style.cssText;
        input.className = 'input-xsmall'

        input.addEventListener('change', () => { 
            td.value = input.value;
        });

        return input;
    }
    , tdHP : function(td) { 
        let input = document.createElement('input');
        input.value = td.value;
        input.style = td.style.cssText;
        input.className = 'input-xsmall'

        input.addEventListener('change', () => {
            td.value = input.value;
        });

        return input;
     }
    , tdRemoveButton : function(td) { 
        let vm = this;

        let button = document.createElement('button');
        button.innerHTML = '-'
        button.className = 'btn-xsmall btn-dark';
        button.style.width = '60%';

        button.addEventListener('click', function() { 
            td.parentElement.parentElement.removeChild(td.parentElement);
            vm.parent.data = vm.grid.data.get();
        });

        return button
    }
});
export let ParticipantsGrid = view;



