import { lite } from 'lite';
//import { spells } from '../../../';
import html from './spellbox.html';

export let vm = lite.extend({
    content : html,
    initialize : function() {}
});
export let SpellBox = vm;