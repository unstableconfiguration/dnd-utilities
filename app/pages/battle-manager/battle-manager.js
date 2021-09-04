import { lite } from 'lite';
import html from './battle-manager.html';
// import dice?
import { AddParticipant } from './add-participant/add-participant.js';
import { ParticipantsGrid } from './participants-grid/participants-grid.js';
import { modal } from '../../components/modal/modal.js';

export let vm = lite.extend({
    content : html,
    initialize : function() {
        this.data = [];
        this.addEventListeners();
    },
    addEventListeners : function() { 
        let vm = this;
        document.getElementById('btnShowAddParticipantModal')
            .addEventListener('click', vm.btnShowAddParticipantModalClicked.bind(vm));
    },
    btnShowAddParticipantModalClicked : function() { 
        let vm = this;
        new modal({
            body : new AddParticipant({
                parent : vm,
                onParticipantAdded : vm.onParticipantAdded.bind(vm)
            })
        });
    },
    onParticipantAdded : function(participantData) {
        let vm = this;
        vm.data.push(participantData);
        vm.drawGrid();
        document.getElementById('btnShowAddParticipantModal').focus();
    },
    drawGrid : function() { 
        let vm = this;
        if(!vm.data.length) { return; }
        new ParticipantsGrid({
            parent : vm, 
            container : 'battle-table-container',
            data : vm.data
        });
    }
});


