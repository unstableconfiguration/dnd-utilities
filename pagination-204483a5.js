import { L as Lite } from './index.js';

var html = "<div class=\"pagination\">\r\n    <div class=\"pagination-item\"><a id='btnPrev' class=\"disabled\">Prev</a></div>\r\n    <div style=\"min-width:150px\" class=\"pagination-item\"><span id='pagination-text'>Page 1 of 100</span></div>\r\n    <div class=\"pagination-item\"><a id='btnNext'>Next</a></div>\r\n</div>";

class Pagination {
  constructor(args) {
    var _this = this;
    this.container = Lite.append(args.container, html);
    this.grid = args.grid;
    this.data = args.data;
    this.setElements();
    this.addEventListeners();

    // Convert to function
    var filter = this.grid.filters.filter;
    this.grid.filters.filter = function () {
      filter(...arguments);
      _this.updateElements();
    };
    this.updateElements();
  }
  setElements() {
    var vm = this;
    vm.elements = {
      btnPrev: vm.container.querySelector('#btnPrev'),
      btnNext: vm.container.querySelector("#btnNext"),
      display: vm.container.querySelector('#pagination-text')
    };
  }
  addEventListeners() {
    this.elements.btnPrev.addEventListener('click', this.onPrevButtonClick.bind(this));
    this.elements.btnNext.addEventListener('click', this.onNextButtonClick.bind(this));
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

export { Pagination as P };
