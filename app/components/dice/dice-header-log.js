import { lite } from 'lite';
import { Gridify } from 'gridify';

export let log = lite.extend({
    content : `<div id='log-container' style='max-height:20rem; overflow-y:scroll'></div>`,
    initialize : function()  {
        this.updateLog();
    },
    updateLog : function() { 
        let vm = this;

        vm.grid = new Gridify({
            container : vm.container.querySelector('#log-container'),
            data : vm.data,
            columns : [ 
                { field : 'equation', style : 'text-align:right; border-right: 1px solid rgba(222,226,230,.5);', click : vm.onRollClicked },
                { field : 'solution', style : 'text-align:left' },
                { field : 'remove' }
            ],
            className : 'table small',
            onTableCellCreated : function(td, colDef) {
                if(colDef.field == 'remove') {
                    td.innerText = '';
                    td.appendChild(vm.tdRemoveButton(td));
                }
            }
        });
    },
    onRollClicked : function(e) {
        document.getElementById('dice-input').value = e.target.innerHTML;
        document.getElementById('dice-input').focus();
    },
    tdRemoveButton : function(td) { 
        let vm = this;

        let button = document.createElement('button');
        button.innerHTML = '-'
        button.className = 'btn-xsmall btn-dark';
        button.style.width = '60%';

        button.addEventListener('click', function() { 
            td.parentElement.parentElement.removeChild(td.parentElement);
            vm.parent.log = vm.grid.data.get();
        });

        return button
    }
});