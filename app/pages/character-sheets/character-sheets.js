import html from './character-sheets.html'
import { Lite } from 'lite';
import { Card } from '../../components/card/card.js'

export class CharacterSheets {
    constructor(options) { 
        this.container = Lite.append(options.container, html);

        // for route
        // #character-sheets from top nav
        // #character-sheet/{name}

        let test = this.container.querySelector('#test');
        new Card({
            container : test,
            body : 'body test',
            title : 'title test',
            image : 'https://picsum.photos/id/237/200/300/?blur=2',
            click() { window.location.hash = '#character-sheet/barbican-brady' }
        })

    }

    // we need a way to show names to click on
    // we could do a tab system to be consistent
    // I'd want that to be a potential carousel though or something similar.


    // lets use tabs and we can adjust it if/when we need more items

    // or we can do cards for more visual appeal


    // cards are nice visually, but how do we represent it
    // we can load the cards, clicking on one does a redirect
    // yeah that's fine

}
export let View = CharacterSheets;