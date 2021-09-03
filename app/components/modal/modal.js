import { lite } from 'lite'

export let modal = lite.extend({
    container : 'modal-container',
    content : `
    <div class="modal modal-large shown" id="modal">
        <div class="modal-overlay"></div>
        <div class="modal-content">
            <div class="modal-header"></div>
            <div class="modal-body">what look like</div>
            <div class="modal-footer"></div>
        </div>
    </div>
    `,
    initialize : function() {
        this.setControls();
        this.addEventListeners();
        this.setHeader();
        this.setBody();
        this.setFooter();
    },
    setControls : function() { 
        let modal = this;
        modal.controls = {
            header : modal.container.querySelector('.modal-header'),
            body : modal.container.querySelector('.modal-body'),
            footer : modal.container.querySelector('.modal-footer'),
            overlay : modal.container.querySelector('.modal-overlay'),
            wrapper : modal.container.querySelector('.modal')
        }
    },
    addEventListeners : function() { 
        let modal = this;
        modal.controls.overlay.addEventListener('click',
            function() { 
                modal.controls.wrapper.classList.toggle('shown', false); 
            });
    },
    setHeader : function() { 
        if(!this.header) { return this.controls.header.style.display = 'none'; }
        if(this.header.extend) { this.header.container = this.controls.header; }
        else this.controls.header.innerHTML = this.header;
    },
    setBody : function() {
        if(!this.body) { return; }
        // don't have a working instanceof
        if(this.body.extend) { this.body.container = this.controls.body; }
        else this.controls.body.innerHTML = this.body;
    },
    setFooter : function() { 
        if(!this.footer) { return this.controls.footer.style.display = 'none'; }
        if(this.footer.extend) { this.footer.container = this.controls.footer; }
        else this.controls.footer.innerHTML = this.footer;
    }

});