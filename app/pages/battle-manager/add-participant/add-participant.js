import { lite } from 'lite';
import { monsters } from '../../../../5e/monsters.js';
import { modal } from '../../../components/modal/modal.js';
import html from './add-participant.html';
import { autoComplete } from '../../../scripts/vendor/autocomplete.js'

export let view = lite.extend({
    name : 'add-participant',
    content : html,
    onContentBound : function() {
        let view = this;
        view.setControls();

        view.controls.init.value = view.rollD20();

        view.setAutoComplete();
        view.controls.init.focus();
    }
    , setControls : function() {
        let vm = this;
        vm.controls = {
            init : '#txtInit',
            name : '#txtName',
            hp : '#txtHp',
            count : '#txtCount',
            add : '#btnAddParticipant'
        }
        for(let k in vm.controls) { 
            vm.controls[k] = vm.container.querySelector(vm.controls[k]);
        }

        vm.controls.add.addEventListener('click', vm.onAddParticipantClicked.bind(this));
        vm.controls.name.addEventListener('change', vm.onNameChanged.bind(this));
        vm.controls.name.addEventListener('keypress', vm.onNameKeyPress.bind(this));
        vm.controls.hp.addEventListener('keypress', vm.onHpKeyPress.bind(this));
        vm.controls.count.addEventListener('keypress', vm.onCountKeyPress.bind(this));
    },
    setAutoComplete : function() { 
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
            onSelect : function(e) { 
                // Force .onNameChanged to be called
                e.target.dispatchEvent(new Event('change'));
            }
        });
    }
    , getParticipant : function() { 
        let vm = this;
        return { 
            init : vm.controls.init.value,
            id : vm.controls.name.value,
            name : vm.controls.name.value,
            hp : vm.controls.hp.value
        }
    }
    , onHpKeyPress : function(e) { 
        if(e.keyCode === 13) { this.addParticipant(); }
    }
    , onNameChanged : function(e) {
        let vm = this;
        vm.controls.add.disabled = !vm.isValid();

        let monster = monsters[e.target.value];
        if(monster) { vm.setMonster(monster); }
    }
    , onNameKeyPress : function(e) {
        // Press enter twice on name to submit
        if(e.keyCode === 13) { 
            if(e.target.enterPressed) { this.addParticipant(); }
            else e.target.enterPressed = true;
        }
        else 
            e.target.enterPressed = false;
    }
    , onCountKeyPress : function(e) {
        if(e.keyCode === 13) { this.addParticipant(); }
    }
    , setMonster : function(monster) { 
        let vm = this;
        vm.controls.init.value = 
            vm.rollD20() + Math.floor((monster.Stats.Dex - 10) / 2);

        vm.controls.hp.value = +/\d+/.exec(monster.Defenses.HP)[0];
    }
    , onAddParticipantClicked : function() { 
        this.addParticipant();
    }
    , isValid : function() { 
        return !!this.controls.name.value;
    }
    , addParticipant : function() {
        let vm = this;
        if(!vm.isValid()) { return ; }

        for(let i = 1; i <= +vm.controls.count.value; i++) {
            let participant = vm.getParticipant();
            if(vm.controls.count.value > 1) { 
                participant.id =  participant.id + ' ' + i;
            }
            vm.onParticipantAdded(participant);  
        }
        new modal().hide()
    }
    , onParticipantAdded : function() { }
    , rollD20 : function() { 
        return Math.floor(Math.random() * 20) + 1;
    }
});
export let AddParticipant = view;