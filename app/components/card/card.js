import html from './card.html'
import { Lite } from 'lite'

export class Card { 
    constructor(options) {
        this.container = Lite.append(options.container, html);

        this.image = options.image;
        this.title = options.title;
        this.body = options.body;

        if(options.click)
            this.container.addEventListener('click', options.click);

        this.bindData();
    }

    get ui()  {
        let card = this;
        return { 
            get image() { return card.container.querySelector('.card__image'); },
            get title() { return card.container.querySelector('.tile__title'); },
            get body() { return card.container.querySelector('.card__body'); }
        }
    }
    
    bindData() {
        let proxy = Lite.bindings.bind(this.container, {
            title : this.title,
            body : this.body
        });
        if(this.image) {
            this.ui.image.style.backgroundImage = `url("${this.image}")`;
        }
    }

}