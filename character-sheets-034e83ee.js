import { L as Lite, _ as _classPrivateMethodInitSpec, b as _classPrivateMethodGet } from './index.js';

var html$1 = "<div id='character-sheets'>\r\n    <div id='card-container' class='row'>\r\n    </div>\r\n</div>";

var html = "\r\n<div class=\"card\" style=\"max-width: 350px;\">\r\n    <div class=\"card__container\" style='min-height:18rem;'>\r\n        <div class=\"card__image\" style=\"background-image:url(https://unsplash.it/200/200?random&amp;blur)\"></div>        <div class=\"card__title-container\">\r\n            <p class=\"title\" name='title'>Title</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"content\">\r\n        <p name='body'></p>\r\n    </div>\r\n</div>\r\n";

class Card {
  constructor(options) {
    this.container = Lite.append(options.container, html);
    this.image = options.image;
    this.title = options.title;
    this.body = options.body;
    if (options.click) this.container.addEventListener('click', options.click);
    this.bindData();
  }
  get ui() {
    var card = this;
    return {
      get image() {
        return card.container.querySelector('.card__image');
      },
      get title() {
        return card.container.querySelector('.tile__title');
      },
      get body() {
        return card.container.querySelector('.card__body');
      }
    };
  }
  bindData() {
    Lite.bindings.bind(this.container, {
      title: this.title,
      body: this.body
    });
    if (this.image) {
      this.ui.image.style.backgroundImage = "url(\"".concat(this.image, "\")");
    }
  }
}

var characters = [{
  name: 'Barbican Brady',
  description: 'wandering professional wrestler',
  url: '#character-sheet/barbican-brady'
}, {
  name: 'One Trick',
  description: 'Tabaxi adventurer',
  url: '#character-sheet/one-trick'
}];
var _addCards = /*#__PURE__*/new WeakSet();
var _getDiv = /*#__PURE__*/new WeakSet();
class CharacterSheets {
  constructor(options) {
    _classPrivateMethodInitSpec(this, _getDiv);
    _classPrivateMethodInitSpec(this, _addCards);
    this.container = Lite.append(options.container, html$1);
    _classPrivateMethodGet(this, _addCards, _addCards2).call(this);
  }
}
function _addCards2() {
  var _this = this;
  var _loop = function _loop() {
    var div = _classPrivateMethodGet(_this, _getDiv, _getDiv2).call(_this, i);
    var character = characters[i];
    new Card({
      container: div,
      title: character.name,
      body: character.description,
      image: character.image,
      click() {
        window.location.hash = character.url;
      }
    });
  };
  for (var i in characters) {
    _loop();
  }
}
function _getDiv2(i) {
  var cardContainer = this.container.querySelector('#card-container');
  cardContainer.insertAdjacentHTML('beforeend', "\n            <div class='col-4'>\n                <div id='card-".concat(i, "'>\n                </div>\n            </div>\n        "));
  return cardContainer.querySelector("#card-".concat(i));
}
var View = CharacterSheets;

export { CharacterSheets, View };
