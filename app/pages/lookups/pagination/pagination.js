import { lite } from 'lite'
import html from './pagination.html'

export let pagination = lite.extend({
    content : html,
    initialize : function() {
        let vm = this;
        vm.setElements();
        vm.addEventListeners();
        
        // After filtering, reset page count
        let filter = this.grid.filters.filter;
        this.grid.filters.filter = function(...args) { 
            filter(...args);
            vm.updateElements();
        }
        
        vm.updateElements();
    },
    setElements : function() { 
        let vm = this;
        vm.elements = {
            btnPrev : vm.container.querySelector('#btnPrev'),
            btnNext : vm.container.querySelector("#btnNext"),
            display : vm.container.querySelector('#pagination-text')
        };
    },
    addEventListeners : function() { 
        this.elements.btnPrev.addEventListener('click', this.onPrevButtonClick.bind(this));
        this.elements.btnNext.addEventListener('click', this.onNextButtonClick.bind(this))
    },
    onPrevButtonClick : function(e) { 
        this.data.currentPage--;
        this.grid.page(this.data.currentPage);
        
        this.updateElements();
    },
    onNextButtonClick : function(e) { 
        this.data.currentPage++;
        this.grid.page(this.data.currentPage);

        this.updateElements();
    },
    updateElements : function() { 
        this.elements.btnPrev.classList.toggle("disabled", this.data.currentPage == 1);
        this.elements.btnNext.classList.toggle("disabled", this.data.currentPage == this.data.visiblePages);
        this.elements.display.innerHTML = "Page " + this.data.currentPage + " of " + this.data.visiblePages;
    }
});