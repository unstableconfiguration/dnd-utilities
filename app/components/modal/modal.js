import { Lite } from 'lite'

const content = `
<div class="modal modal-large shown" id="modal">
    <div class="modal-overlay"></div>
    <div class="modal-content">
        <div class="modal-header"></div>
        <div class="modal-body" style="max-height:80vh"></div>
        <div class="modal-footer"></div>
    </div>
</div>
`

export class Modal { 
    constructor() {
        this.container = Lite.append('modal-container', content);
        this.#addEventListeners();
    }
    
    hide() {
        this.container.querySelector('.shown').classList.toggle('shown');    
    }

    get header() { return this.container.querySelector('.modal-header'); }
    get body() { return this.container.querySelector('.modal-body'); }
    get footer() { return this.container.querySelector('.modal-footer'); }

    #addEventListeners() { 
        let overlay = this.container.querySelector('.modal-overlay');
        overlay.addEventListener('click', this.hide.bind(this));
    }

}
