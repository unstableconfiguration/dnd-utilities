import { lite } from 'lite';
import { Gridify } from 'gridify';

export let log = lite.extend({
    content : `<div id='log-container' style='max-height:20rem; overflow-y:scroll'></div>`,
    initialize : function()  {
        this.updateLog();
    },
    updateLog : function() { 
        let vm = this;
        vm.data[0].rolls = vm.getRolls(vm.data[0]);
        
        vm.grid = new Gridify({
            container : vm.container.querySelector('#log-container'),
            data : vm.data,
            columns : [ 
                { field : 'equation', style : 'text-align:right; border-right: 1px solid rgba(222,226,230,.5);', click : vm.onRollClicked },
                { field : 'solution', style : 'text-align:left; white-space:nowrap;' },
                { field : 'rolls', style : 'white-space:nowrap' },
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
    getRolls : function(log) { 
        // Advantage has 2 dice ops, one of which is a dud so we skip it
        let diceOp = log.operations.filter(op => op.name == 'dice').slice(-1)[0];
        if(!diceOp) { return ''; }
        let rolls = diceOp.resolve.map(res => {
            res.rolls.sort((a, b) => a<=b);
            return res.operands.join('d') + '(' + res.rolls.join(', ') + ')';
        }).join(', ')

        return rolls
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