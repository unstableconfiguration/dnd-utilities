import { lite } from 'lite'

export let modal = lite.extend({
    container : 'modal-container',
    content : `
    <div class="modal modal-large shown" id="modal">
        <div class="modal-overlay"></div>
        <div class="modal-content">
            <div class="modal-header"></div>
            <div class="modal-body" style="max-height:80vh"></div>
            <div class="modal-footer"></div>
        </div>
    </div>
    `,
    initialize : function() {
        this.setElements();
        this.addEventListeners();
        this.setHeader();
        this.setBody();
        this.setFooter();
    },
    setElements : function() { 
        let modal = this;
        modal.elements = {
            header : modal.container.querySelector('.modal-header'),
            body : modal.container.querySelector('.modal-body'),
            footer : modal.container.querySelector('.modal-footer'),
            overlay : modal.container.querySelector('.modal-overlay'),
            wrapper : modal.container.querySelector('.modal')
        }
    },
    addEventListeners : function() { 
        let modal = this;
        modal.elements.overlay.addEventListener('click', modal.hide);
    },
    setHeader : function() { 
        if(!this.header) { return this.elements.header.style.display = 'none'; }
        if(this.header.extend) { this.header.container = this.elements.header; }
        else this.elements.header.innerHTML = this.header;
    },
    setBody : function() {
        if(!this.body) { return; }
        // don't have a working instanceof
        if(this.body.extend) { this.body.container = this.elements.body; }
        else this.elements.body.innerHTML = this.body;
    },
    setFooter : function() { 
        if(!this.footer) { return this.elements.footer.style.display = 'none'; }
        if(this.footer.extend) { this.footer.container = this.elements.footer; }
        else this.elements.footer.innerHTML = this.footer;
    },
    hide : function() {
        this.container.querySelector('.shown').classList.toggle('shown');    
    }

});