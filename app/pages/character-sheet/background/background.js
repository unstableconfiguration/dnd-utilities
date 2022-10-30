import html from './background.html'
import { Lite } from 'lite'
import { marked } from 'marked'

export class Background {
    constructor(options) {
        this.container = Lite.append(options.container, html);
        this.character = options.character;

        this.#bindData();
    }

    #bindData() {
        let background = this.container.querySelector('#background');
        let markup = '';
        for(let b in this.character.Background)
            markup += '* **' + b + '**: ' + this.character.Background[b] + ' \n';
            
        markup = marked.parse(markup);
        background.innerHTML = markup;
    }
}
