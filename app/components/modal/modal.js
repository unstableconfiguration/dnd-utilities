import { lite } from 'lite'

export let modal = lite.extend({
    container : 'modal-container',
    content : `
    <div class="modal shown" id="modal">
        <div class="modal-overlay"></div>
        <div class="modal-content">
            <div class="modal-body">what look like</div>
        </div>
    </div>
    `,
    initialize : function() {
        this.addEventListeners();
    },
    addEventListeners : function() { 
        let modal = this;
        modal.container.querySelector(".modal-overlay")
            .addEventListener('click', function() {
                modal.container.querySelector('.modal')
                    .classList.toggle("shown", false);
            });
    }

});