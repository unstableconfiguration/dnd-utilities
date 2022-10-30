import { Lite } from 'lite'
import { Gridify } from 'gridify'
import { Modal } from '../../../components/modal/modal'
import { SpellBox } from '../../../components/spellbox/spellbox'
import { spells } from '../../../../5e/spells';

export class Spells {
    constructor(options) { 
        this.container = Lite.append(options.container, `<div id='spells'></div>`);
        this.character = options.character;

        this.#bindGrid();
    }

    #getGridData() {
        let spells = Object.values(this.character.Spells);
        spells.forEach(spell => spell.Ritual = spell.Ritual ? 'Yes' : 'No');
        return spells;
    }

    #bindGrid() {
        let view = this;
        let data = this.#getGridData();

        new Gridify({
            container : 'spells-container',
            data : data,
            columns : [
                { 
                    field : 'Name', 
                    header : 'Name',
                    style : 'text-align:left; text-decoration:underline',
                    filter : true,
                    sort : true,
                    click: (e) => { 
                        let spell = spells[e.target.innerHTML];
                        let modal = new Modal();
                        new SpellBox({
                            data : spell,
                            container : modal.body
                        });
                    } 
                },
                { field : 'Level', header : 'Level', filter : true, sort : true },
                { field : 'CastingTime', header : 'Cast Time', filter : true, style : 'max-width:300px; text-align:left' },
                { field : 'Ritual', header : 'Ritual', filter : view.#getRitualFilter()  },
                { field : 'Range', header : 'Range', filter : true },
                { field : 'Duration', header : 'Duration', filter : true } 
            ],
            className : 'table small',
            onHeaderCreated(thead, options) {
                thead.querySelectorAll('input[type="text"]')
                    .forEach(i => i.className = "input-xsmall");
            },
            onHeaderCellCreated(th, options) { 
                let sortIcon = th.querySelector('.sort');
                if(sortIcon) { sortIcon.className = 'fa fa-sort'; } 
            }
        });
    }

    #getRitualFilter() { 
        let checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.addEventListener('click', (e) => {
            e.target.value = e.target.checked;
        });
    
        let rule = function(cellValue, checked) { 
            return checked == 'true' ? cellValue === 'Yes' : true;
        }
    
        return { 
            control : checkBox,
            event : 'click',
            rule : rule
        }
    }
}


