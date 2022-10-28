import { Lite } from 'lite';
import html from './lookups.html';

export class Lookups { 
    constructor(args) {
        this.container = Lite.append(args.container, html);

        this.#addEventListeners();
        this.container.querySelector('#spells').click();
    }

    #addEventListeners() { 
        let vm = this;
        let tabs = document.querySelectorAll('.tab-container > ul > li');
        let tableContainer = this.container.querySelector('#table-container');
        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                vm.#loadTab[tab.id](tableContainer);
            });
        });
    }

    #loadTab = {
        'spells' : (container) => { import('./tabs/spells/spells.js').then(t => new t.SpellsLookup({ container : container })) },
        //'monsters' : (container) => { import('./tabs/monsters/monsters.js').then(t => new t.table({ container : container })) },
        //'items' : (container) => { import('./tabs/items/items.js').then(t => new t.table({ container : container })) }
    }
}
export let View = Lookups;
