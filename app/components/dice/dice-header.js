import { Lite } from 'lite';
import html from './dice-header.html'
import { Dice, MathModule, LoggingModule, DnDModule } from 'dice';
import { DiceLog } from './dice-header-log.js'

export class DiceHeader {

    constructor(args) {
        this.container = Lite.append(args.container, html);

        this.dice = new Dice({ modules : [MathModule, DnDModule, LoggingModule]});
        this.log = [];
        this.#setElements();
        this.#addEventListeners();
    }

    roll(equation) {
        let vm = this;
        let roll = vm.dice.solve(equation);

        let logItem = vm.#getLogItem(equation, roll);
        vm.log.unshift(logItem);

        vm.elements.output.innerHTML = roll || '='; 
    }

    #setElements() {
        let vm = this;
        vm.elements = {
            input : vm.container.querySelector('#dice-input'),
            output : vm.container.querySelector('#dice-output'),
            outputLog : vm.container.querySelector('#dice-output-log')
        }
    }

    #addEventListeners() {
        let vm = this;
        vm.elements.input.addEventListener('keydown', e => { 
            if(e.keyCode == 13) { 
                vm.roll(e.target.value);
                new DiceLog({ container : vm.elements.outputLog, parent : vm, data : vm.log });
            }
        }); 
    }

    #getLogItem(equation, solution) { 
        let logItem = this.dice.log.slice(-1)[0];
        // Fixes issue with how advantage logs
        logItem.equation = equation; 
        return logItem
    }
}
