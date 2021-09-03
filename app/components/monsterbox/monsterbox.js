import { lite } from 'lite';
//import { monsters } from '../../../';
import html from './monsterbox.html';

export let vm = lite.extend({
    content : html
});
export let MonsterBox = vm;