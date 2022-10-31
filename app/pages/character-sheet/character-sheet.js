import html from './character-sheet.html'
import { Lite } from 'lite'
import { Characters } from '../../../5e/characters.js'
import { Stats } from './stats/stats'
import { Background } from './background/background'
import { Notes } from './notes/notes'
import { Skills } from './skills/skills'
import { Items } from './items/items'
import { Spells } from './spells/spells'

export class CharacterSheet { 
    constructor(options) {
        this.container = Lite.append(options.container, html);
        Lite.head.addCss('./css/character-sheet.css');

        this.#addEventListeners();

        this.#loadCharacter();
        this.#loadTabs();
        this.#toggleTabs();
        this.#toggleContainer('stats')
    }

    #loadCharacter() {
        let name = location.hash.replace('#character-sheet/', '');
        let character = Characters[name];

        this.character = character;
    }

    #addEventListeners() { 
        let view = this;
        let tabs = view.container.querySelectorAll('.tab-container > ul > li');
        
        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                view.#toggleContainer(tab.id);
            });
        });
    }

    #toggleTabs() {
        if(!this.character.Background) 
            this.container.querySelector('.tab-container #background').setAttribute('hidden', '');
        if(!this.character.Notes)
            this.container.querySelector('.tab-container #notes').setAttribute('hidden', '');
        if(!this.character.Spells)
            this.container.querySelector('.tabs-container #spells)').setAttribute('hidden', '');
    }

    #toggleContainer(id) { 
        let view = this;
        // Hide containers
        let containers = view.container.querySelectorAll('#sections>.section');        
        Array.from(containers).forEach(container => container.setAttribute('hidden', ''));
        // show container
        let container = view.container.querySelector('#' + id + '-container');
        container.removeAttribute('hidden');
    }

    #loadTabs() {
        let view = this;
        new Stats({ container : 'stats-container', character : view.character }); 
        new Background({ container : 'background-container', character : view.character }); 
        new Notes({ container : 'notes-container', character : view.character }); 
        new Skills({ container : 'skills-container', character : view.character }); 
        new Items({ container : 'items-container', character : view.character }); 
        new Spells({ container : 'spells-container', character : view.character });
    }
}

export let View = CharacterSheet;