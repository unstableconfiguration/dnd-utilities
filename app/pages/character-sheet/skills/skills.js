import { Lite } from 'lite'
import { Gridify } from 'gridify'

export class Skills { 
    constructor(options) {
        this.container = Lite.append(options.container, `<div id='skills'></div>`);
        this.character = options.character;

        this.#bindData();
    }

    #getGridData() { 
        let results =  [];
        let skills = this.character.Skills;
        for(let name in skills) results.push(skills[name]);
        results.forEach(skill => skill.Trained = skill.Trained ? 'Yes' : 'No' );

        return results;
    }

    #bindData() { 
        let view = this;
        let gridData = this.#getGridData();
        let container = this.container.querySelector('#skills');
            
        new Gridify({
            container : container, 
            data : gridData,
            columns : [
                { field : 'Name', header : 'Name', style : 'text-align:left', sort : true },
                { field : 'Ability', header : 'Ability', style : 'text-align:center', sort : true },
                { field : 'Trained', header : 'Trained', style : 'text-align:center', sort : true },
                { field : 'Bonus', header : 'Bonus', style : 'text-align:right', sort : view.#numberSort }
            ]
        });
    }

    #numberSort(a, b) {
        if(+a === +b) { return 0; }
        else return +a > +b ? 1 : -1;
    }
}

