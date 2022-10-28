import { L as Lite, _ as _classPrivateMethodGet } from './index.js';

var content = "\n<div class=\"modal modal-large shown\" id=\"modal\">\n    <div class=\"modal-overlay\"></div>\n    <div class=\"modal-content\">\n        <div class=\"modal-header\"></div>\n        <div class=\"modal-body\" style=\"max-height:80vh\"></div>\n        <div class=\"modal-footer\"></div>\n    </div>\n</div>\n";

var _addEventListeners = /*#__PURE__*/new WeakSet();

class Modal {
  constructor() {
    _addEventListeners.add(this);

    this.container = Lite.append('modal-container', content);

    _classPrivateMethodGet(this, _addEventListeners, _addEventListeners2).call(this);
  }

  hide() {
    this.container.querySelector('.shown').classList.toggle('shown');
  }

  get header() {
    return this.container.querySelector('.modal-header');
  }

  get body() {
    return this.container.querySelector('.modal-body');
  }

  get footer() {
    return this.container.querySelector('.modal-footer');
  }

}

function _addEventListeners2() {
  var overlay = this.container.querySelector('.modal-overlay');
  overlay.addEventListener('click', this.hide.bind(this));
}

export { Modal as M };
