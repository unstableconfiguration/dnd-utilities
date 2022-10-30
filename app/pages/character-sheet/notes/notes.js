import { Lite } from 'lite'
import { marked } from 'marked'

export class Notes { 
    constructor(options) {
        this.container = Lite.append(options.container, `<div id='notes'></div>`);
        this.character = options.character;
        this.#bindData();
    }

    #bindData() {
        let div = this.container.querySelector('#notes');

        div.innerHTML = marked.parse(this.character.Notes);
    }
}