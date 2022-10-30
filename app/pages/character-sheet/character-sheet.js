import html from './character-sheet.html'
import { Lite } from 'lite'
import { Characters } from '../../../5e/characters.js'
import { Stats } from './stats/stats.js'
import { Background } from './background/background.js'
import { Notes } from './notes/notes.js'
import { Skills } from './skills/skills.js'

export class CharacterSheet { 
    constructor(options) {
        this.container = Lite.append(options.container, html);

        this.name = location.hash.split('/').slice(1).join('/');
        Lite.head.addCss('./css/character-sheet.css');

        // load one trick
        // test bindings
        
        this.#addEventListeners();

        this.#loadCharacter();
        this.#toggleTabs();
    }

    // so that's not gonna work, we need this to be a module

    #loadCharacter() {
        let name = 'one-trick' // this.#getCharacterName();
        let character = Characters[name];

        this.character = character;
        // bind data 
            // since we load the views on demand, we need to pass the character to them
    }


    #getCharacterName() {
        return location.hash.replace('#character-sheet/', '');
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

    #toggleTabs() {
        console.log(this.CharacterSheet)

        if(!this.character.Background) 
            this.container.querySelector('.tab-container #background').setAttribute('hidden', '');
        if(!this.character.Notes)
            this.container.querySelector('.tab-container #notes').setAttribute('hidden', '');
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

    get #loadTab() {
        let view = this;
        return {
            stats(container) { new Stats({ container : container, character : view.character }); },
            background(container) { new Background({ container : container, character : view.character }); },
            notes(container) { new Notes({ container : container, character : view.character }); },
            skills(container) { new Skills({ container : container, character : view.character }); },
            //'spells' : (container) => { import('./tabs/spells/spells.js').then(t => new t.SpellLookup({ container : container })) },
            //'monsters' : (container) => { import('./tabs/monsters/monsters.js').then(t => new t.MonsterLookup({ container : container })) },
            //'items' : (container) => { import('./tabs/items/items.js').then(t => new t.ItemLookup({ container : container })) }
        }
    }
}

export let View = CharacterSheet;