import html from './character-sheets.html'
import { Lite } from 'lite';

export class CharacterSheets {
    constructor(options) { 
        this.container = Lite.append(options.container, html);
    }

}
export let View = CharacterSheets;