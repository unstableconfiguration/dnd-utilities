import html from './character-sheet.html'
import { Lite } from 'lite'

export class CharacterSheet { 
    constructor(options) {
        this.container = Lite.append(options.container, html);

        this.name = location.hash.split('/').slice(1).join('/');
        
        this.#addEventListeners();
    }

    #addEventListeners() { 
        let view = this;
        let tabs = view.container.querySelectorAll('.tab-container > ul > li');
        

        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                let container = view.#toggleContainer(tab.id);
                view.#loadTab[tab.id](container);
            });
        });
    }

    #toggleContainer(id) { 
        let view = this;
        // Hide containers
        let containers = view.container.querySelectorAll('#sections>.section');        
        Array.from(containers).forEach(container => container.setAttribute('hidden', ''));
        // show container
        let container = view.container.querySelector('#' + id + '-container');
        container.removeAttribute('hidden');
        return container;
    }

    #loadTab = {
        stats(container) { import('./stats/stats.js').then(t => new t.Stats({ container : container })); },
        background(container) { import('./background/background.js').then(t => new t.Background({ container : container })); },
        
        //'spells' : (container) => { import('./tabs/spells/spells.js').then(t => new t.SpellLookup({ container : container })) },
        //'monsters' : (container) => { import('./tabs/monsters/monsters.js').then(t => new t.MonsterLookup({ container : container })) },
        //'items' : (container) => { import('./tabs/items/items.js').then(t => new t.ItemLookup({ container : container })) }
    }
}

export let View = CharacterSheet;