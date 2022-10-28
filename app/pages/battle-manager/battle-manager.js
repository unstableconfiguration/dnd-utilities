import { Lite } from 'lite';
import html from './battle-manager.html';
// import dice?
import { AddParticipant } from './add-participant/add-participant.js';
import { ParticipantGrid } from './participants-grid/participants-grid.js';
import { Modal } from '../../components/modal/modal.js';

export class BattleManager {
    constructor(args) {
        this.container = Lite.append(args.container, html);
        this.data = [];
        this.addEventListeners();
    }

    addEventListeners() { 
        let vm = this;
        document.getElementById('btnShowAddParticipantModal')
            .addEventListener('click', vm.btnShowAddParticipantModalClicked.bind(vm));
    }
    
    btnShowAddParticipantModalClicked() { 
        let vm = this;
        let modal = new Modal();
        new AddParticipant({
            container : modal.body,
            onParticipantAdded : vm.onParticipantAdded.bind(vm)
        });
    }

    onParticipantAdded(participantData) {
        let vm = this;
        vm.data.push(participantData);
        vm.drawGrid();
        document.getElementById('btnShowAddParticipantModal').focus();
    }

    drawGrid() { 
        let vm = this;
        if(!vm.data.length) { return; }
        new ParticipantGrid({
            parent : vm, 
            container : 'battle-table-container',
            data : vm.data
        });
    }
}

export const View = BattleManager;
