import { Lite } from 'lite';
//import { spells } from '../../../';
import html from './spellbox.html';

export class SpellBox {
    constructor(args) {
        this.container = Lite.append(args.container, html);
        this.data = args.data;

        Lite.bindings.bind('spellbox', this.data);
    }
}
export let View = SpellBox;
