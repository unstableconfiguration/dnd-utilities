import { lite } from 'lite';
import { Gridify } from 'gridify';

export let log = lite.extend({
    content : `<div id='log-container' style='max-height:20rem; overflow-y:scroll'></div>`,
    initialize : function()  {
        this.updateLog();
    },
    updateLog : function() { 
        let vm = this;
        vm.data[0].equation = vm.data[0].equation + ': ';

        let grid = new Gridify({
            container : vm.container.querySelector('#log-container'),
            data : vm.data,
            columns : [ 
                { field : 'equation', style : 'text-align:right' },
                { field : 'solution', style : 'text-align:left' }
            ],
            className : 'table small'
        });

    }
});