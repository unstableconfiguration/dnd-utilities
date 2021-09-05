import { l as lite } from './index.js';

var modal = lite.extend({
  container: 'modal-container',
  content: "\n    <div class=\"modal modal-large shown\" id=\"modal\">\n        <div class=\"modal-overlay\"></div>\n        <div class=\"modal-content\">\n            <div class=\"modal-header\"></div>\n            <div class=\"modal-body\" style=\"max-height:80vh\"></div>\n            <div class=\"modal-footer\"></div>\n        </div>\n    </div>\n    ",
  initialize: function initialize() {
    this.setElements();
    this.addEventListeners();
    this.setHeader();
    this.setBody();
    this.setFooter();
  },
  setElements: function setElements() {
    var modal = this;
    modal.elements = {
      header: modal.container.querySelector('.modal-header'),
      body: modal.container.querySelector('.modal-body'),
      footer: modal.container.querySelector('.modal-footer'),
      overlay: modal.container.querySelector('.modal-overlay'),
      wrapper: modal.container.querySelector('.modal')
    };
  },
  addEventListeners: function addEventListeners() {
    var modal = this;
    modal.elements.overlay.addEventListener('click', function () {
      modal.elements.wrapper.classList.toggle('shown', false);
    });
  },
  setHeader: function setHeader() {
    if (!this.header) {
      return this.elements.header.style.display = 'none';
    }

    if (this.header.extend) {
      this.header.container = this.elements.header;
    } else this.elements.header.innerHTML = this.header;
  },
  setBody: function setBody() {
    if (!this.body) {
      return;
    } // don't have a working instanceof


    if (this.body.extend) {
      this.body.container = this.elements.body;
    } else this.elements.body.innerHTML = this.body;
  },
  setFooter: function setFooter() {
    if (!this.footer) {
      return this.elements.footer.style.display = 'none';
    }

    if (this.footer.extend) {
      this.footer.container = this.elements.footer;
    } else this.elements.footer.innerHTML = this.footer;
  },
  hide: function hide() {
    this.container.querySelector('.shown').classList.toggle('shown');
  }
});

export { modal as m };
