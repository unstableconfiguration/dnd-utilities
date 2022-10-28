import { Lite } from 'lite';
import { monsters } from '../../../../5e/monsters.js';
import { Modal } from '../../../components/modal/modal.js';
import html from './add-participant.html';
import { autoComplete } from '../../../scripts/vendor/autocomplete.js'

export class AddParticipant {
    constructor(args) {
        this.container = Lite.append(args.container, html);
        this.onParticipantAdded = args.onParticipantAdded;

        this.setElements();

        this.elements.init.value = this.rollD20();

        this.setAutoComplete();
        this.elements.init.focus();
    }

    setElements() {
        let vm = this;
        vm.elements = {
            init : '#txtInit',
            name : '#txtName',
            hp : '#txtHp',
            count : '#txtCount',
            add : '#btnAddParticipant'
        }
        for(let k in vm.elements) { 
            vm.elements[k] = vm.container.querySelector(vm.elements[k]);
        }

        vm.elements.add.addEventListener('click', vm.onAddParticipantClicked.bind(this));
        vm.elements.name.addEventListener('change', vm.onNameChanged.bind(this));
        vm.elements.name.addEventListener('keypress', vm.onNameKeyPress.bind(this));
        vm.elements.hp.addEventListener('keypress', vm.onHpKeyPress.bind(this));
        vm.elements.count.addEventListener('keypress', vm.onCountKeyPress.bind(this));
    }

    setAutoComplete() { 
        let monsterNames = Object.keys(monsters);
        new autoComplete({
            selector: '#add-participant-modal #txtName',
            minChars: 2,
            source: function(term, suggest) {
                term = term.toLowerCase();
                let matches = monsterNames.filter(v => {
                    return v.toLowerCase().includes(term);
                });
                suggest(matches);                
            },
            onSelect(e) { 
                // Force .onNameChanged to be called
                e.target.dispatchEvent(new Event('change'));
            }
        });
    }
    
    getParticipant() { 
        let vm = this;
        return { 
            init : vm.elements.init.value,
            id : vm.elements.name.value,
            name : vm.elements.name.value,
            hp : vm.elements.hp.value
        }
    }
    
    onHpKeyPress(e) { 
        if(e.keyCode === 13) { this.addParticipant(); }
    }
    
    onNameChanged(e) {
        let vm = this;
        vm.elements.add.disabled = !vm.isValid();

        let monster = monsters[e.target.value];
        if(monster) { vm.setMonster(monster); }
    }
    
    onNameKeyPress(e) {
        // Press enter twice on name to submit
        if(e.keyCode === 13) { 
            if(e.target.enterPressed) { this.addParticipant(); }
            else e.target.enterPressed = true;
        }
        else 
            e.target.enterPressed = false;
    }
    
    onCountKeyPress(e) {
        if(e.keyCode === 13) { this.addParticipant(); }
    }
    
    setMonster(monster) { 
        let vm = this;
        vm.elements.init.value = 
            vm.rollD20() + Math.floor((monster.Stats.Dex - 10) / 2);

        vm.elements.hp.value = +/\d+/.exec(monster.Defenses.HP)[0];
    }
    
    onAddParticipantClicked() { 
        this.addParticipant();
    }
    
    isValid() { 
        return !!this.elements.name.value;
    }
    
    addParticipant() {
        let vm = this;
        if(!vm.isValid()) { return ; }

        for(let i = 1; i <= +vm.elements.count.value; i++) {
            let participant = vm.getParticipant();
            if(vm.elements.count.value > 1) { 
                participant.id =  participant.id + ' ' + i;
            }
            vm.onParticipantAdded(participant);  
        }
        new Modal().hide()
    }

    onParticipantAdded() { }
    
    rollD20() { 
        return Math.floor(Math.random() * 20) + 1;
    }
}

export let View = AddParticipant;