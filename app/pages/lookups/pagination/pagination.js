import { lite } from 'lite'
import html from './pagination.html'

export let pagination = lite.extend({
    content : html,
    initialize : function() {
        let vm = this;
        vm.setControls();
        vm.addEventListeners();
        
        // After filtering, reset page count
        let filter = this.grid.filters.filter;
        this.grid.filters.filter = function(...args) { 
            filter(...args);
            vm.updateControls();
        }
        
        vm.updateControls();
    },
    setControls : function() { 
        let vm = this;
        vm.controls = {
            btnPrev : vm.container.querySelector('#btnPrev'),
            btnNext : vm.container.querySelector("#btnNext"),
            display : vm.container.querySelector('#pagination-text')
        };
    },
    addEventListeners : function() { 
        this.controls.btnPrev.addEventListener('click', this.onPrevButtonClick.bind(this));
        this.controls.btnNext.addEventListener('click', this.onNextButtonClick.bind(this))
    },
    onPrevButtonClick : function(e) { 
        this.data.currentPage--;
        this.grid.page(this.data.currentPage);
        
        this.updateControls();
    },
    onNextButtonClick : function(e) { 
        this.data.currentPage++;
        this.grid.page(this.data.currentPage);

        this.updateControls();
    },
    updateControls : function() { 
        this.controls.btnPrev.classList.toggle("disabled", this.data.currentPage == 1);
        this.controls.btnNext.classList.toggle("disabled", this.data.currentPage == this.data.visiblePages);
        this.controls.display.innerHTML = "Page " + this.data.currentPage + " of " + this.data.visiblePages;
    }
});