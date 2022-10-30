import html from './items.html'
import { Lite } from 'lite'
import { Gridify } from 'gridify'

export class Items {
    constructor(options) {
        this.container = Lite.append(options.container, html);
        this.character = options.character;
        this.#bindData();
    }


    #bindData() {
        let data = this.#getGridData();
        this.#bindCarryWeight(data);
        this.#bindGrid(data);
    }

    #getGridData() {
        let items = [];
        Object.values(this.character.Items).forEach(item => {
            if(!(typeof(item) == 'object')) return;
            
            item.Weight = item.Weight || 0;
            item.Value = item.Value || '0gp';
            items.push(item);
        });
        return items;
    }

    #bindCarryWeight(data) {
        let totalWeight = data.reduce((acc, item) => (acc += item.Weight || 0), 0);
        let capacityDiv = this.container.querySelector('#carrying-capacity');
        capacityDiv.innerHTML = capacityDiv.innerHTML + ' ' + totalWeight + '/' + this.character.CarryWeight;
    }   

    #bindGrid(data) {
        let view = this; 
        // styling looks a bit weird. 
        // we had a 'grid' class that might be useful. 
        new Gridify({
            container : 'items-grid-container',
            data : data,
            columns : [
                { field : 'Name', header : 'Name', style : 'text-align:left', sort : true },
                { field : 'Count', header : 'Count', style : 'text-align:right' },
                { field : 'Value', header : 'Value', sort: view.#coinSort, style : 'text-align:center' },
                { field : 'Weight', header : 'Weight', style : 'text-align:right', sort : view.#numberSort }
            ]
        });
    }

    #numberSort(a, b) {
        if(+a === +b) { return 0; }
        else return +a > +b ? 1 : -1;
    }

    #coinSort(a, b) { 
        let coinValues = [
            { suffix : 'cp', rate : 1 },
            { suffix : 'sp', rate : 10 },
            { suffix : 'ep', rate : 50 },
            { suffix : 'gp', rate : 100 },
            { suffix : 'pp', rate : 1000 },
        ];
        
        let convertToCopper = function(value) { 
            let conversion = coinValues.find(v => value.includes(v.suffix));
            if(!conversion) { return -1; }
            value = +value.replace(conversion.suffix, '');
            value = value * conversion.rate;
            return value;
        }
        
        a = convertToCopper(a);
        b = convertToCopper(b);
        if(a === b) { return 0; }
        return a > b ? 1 : -1;
    }
}