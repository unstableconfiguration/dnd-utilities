import { lite } from 'lite';
import html from './dice-header.html'
import { Dice, MathModule, LoggingModule, DnDModule } from 'dice';
import { log } from './dice-header-log.js'

// .toggle('shown');

export let vm = lite.extend({
    content : html,
    initialize : function() { 
        this.dice = new Dice({ modules : [MathModule, DnDModule, LoggingModule]});
        this.log = [];
        this.setElements();
        this.addEventListeners();
    },
    setElements : function() { 
        let vm = this;
        vm.elements = {
            input : vm.container.querySelector('#dice-input'),
            output : vm.container.querySelector('#dice-output'),
            outputLog : vm.container.querySelector('#dice-output-log')
        }
    },
    addEventListeners : function() { 
        let vm = this;
        vm.elements.input.addEventListener('keydown', e => { 
            if(e.keyCode == 13) { 
                vm.roll(e.target.value);
                new log({ container : vm.elements.outputLog, parent : vm, data : vm.log });
            }
        });
    },
    roll : function(equation) { 
        let vm = this;
        let roll = vm.dice.solve(equation);

        let logItem = vm.getLogItem(equation, roll);
        vm.log.unshift(logItem);

        vm.elements.output.innerHTML = roll || '=';  
    },
    // Bypass an issue with logging advantage
    getLogItem : function(equation, solution) { 
        let logItem = this.dice.log.reverse()
            .find(e => e.equation == equation);
        if(!logItem.solution) { logItem.solution = solution; }
        return logItem
    }
});
export let dice = vm;