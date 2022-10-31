import html from './character-sheets.html'
import { Lite } from 'lite';
import { Card } from '../../components/card/card.js'

let characters = [
    {
        name : 'Barbican Brady', 
        description : 'wandering professional wrestler',
        url : '#character-sheet/barbican-brady',
    },
    {
        name : 'One Trick',
        description : 'Tabaxi adventurer',
        url : '#character-sheet/one-trick'
    }
];



export class CharacterSheets {
    constructor(options) { 
        this.container = Lite.append(options.container, html);

        this.#addCards();

    }

    #addCards() {
        for(let i in characters) {
            let div = this.#getDiv(i);
            let character = characters[i];
            new Card({
                container : div,
                title : character.name,
                body : character.description,
                image : character.image, 
                click() { window.location.hash = character.url; }
            })
        }

    }

    #getDiv(i) {
        let cardContainer = this.container.querySelector('#card-container');
        cardContainer.insertAdjacentHTML('beforeend', `
            <div class='col-4'>
                <div id='card-${i}'>
                </div>
            </div>
        `);
        return cardContainer.querySelector(`#card-${i}`)
    }

}
export let View = CharacterSheets;