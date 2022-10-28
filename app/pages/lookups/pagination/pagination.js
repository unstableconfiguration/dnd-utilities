import { Lite } from 'lite'
import html from './pagination.html'

export class Pagination {
    constructor(args) {
        this.container = Lite.append(args.container, html);
        this.grid = args.grid;
        this.data = args.data;
    
        this.setElements();
        this.addEventListeners();

        // Convert to function
        let filter = this.grid.filters.filter;
        this.grid.filters.filter = (...args) => {
            filter(...args);
            this.updateElements();
        }

        this.updateElements();
    }

    setElements() { 
        let vm = this;
        vm.elements = {
            btnPrev : vm.container.querySelector('#btnPrev'),
            btnNext : vm.container.querySelector("#btnNext"),
            display : vm.container.querySelector('#pagination-text')
        };
    }

    addEventListeners() { 
        this.elements.btnPrev.addEventListener('click', this.onPrevButtonClick.bind(this));
        this.elements.btnNext.addEventListener('click', this.onNextButtonClick.bind(this))
    }

    onPrevButtonClick(ev) { 
        this.data.currentPage--;
        this.grid.page(this.data.currentPage);
        
        this.updateElements();
    }

    onNextButtonClick(ev) { 
        this.data.currentPage++;
        this.grid.page(this.data.currentPage);

        this.updateElements();
    }

    updateElements() { 
        this.elements.btnPrev.classList.toggle("disabled", this.data.currentPage == 1);
        this.elements.btnNext.classList.toggle("disabled", this.data.currentPage == this.data.visiblePages);
        this.elements.display.innerHTML = "Page " + this.data.currentPage + " of " + this.data.visiblePages;
    }
}