import html from './stats.html'
import { Lite } from 'lite'

export class Stats {
    constructor(options) {
        this.container = Lite.append(options.container, html);
        this.character = options.character;

        this.#setSaveText();
        this.#setStats();
        this.#setLevelText();

        this.#bindData();
    }

    #setSaveText() { 
        let saves = [];
        for(let name in this.character.Defenses.Saves) {
            let save = this.character.Defenses.Saves[name];
            saves.push(name.substring(0, 3) +  (save < 0 ? '' : '+') + save);
        }
        this.character.SaveText = saves.join(', ');
    }

    #setStats() {
        let stats = this.character.Stats;

        let setStatBonus = (value) => 
            value 
                + (value < 10 ? '' : '+')
                + this.character.getBonus(value);

        Stats.Strength = setStatBonus(stats.Strength);
        stats.Dexterity = setStatBonus(stats.Dexterity);
        stats.Constitution = setStatBonus(stats.Constitution);
        stats.Intelligence = setStatBonus(stats.Intelligence);
        stats.Wisdom = setStatBonus(stats.Wisdom);
        stats.Charisma = setStatBonus(stats.Charisma); 
    }

    #setLevelText() {
        let classes = this.character.Classes;
        let levelText = [];
        for(let className in classes) 
            levelText.push(classes[className].Name + ' ' + classes[className].Level);
        this.character.LevelText = levelText.join('/');
    }

    #bindData() {
        Lite.bindings.bind(this.container, this.character);
        this.#bindKeyValues('Features', 'features');
        this.#bindKeyValues('Actions', 'actions');
        this.#bindKeyValues('Reactions', 'reactions');
        this.#hideEmpty();
    }

    #bindKeyValues(key, container) {
        let data = this.character[key];
        container = this.container.querySelector('#' + container)
        if(!data) return this.#hide(container);

        for(let i in data) 
            container.appendChild(this.#getKeyValueDiv(i, data[i]));

    }

    #getKeyValueDiv(key, value) { 
        let div = document.createElement('div');
        let label = div.appendChild(document.createElement('span'));
        let description = div.appendChild(document.createElement('span'));
        
        label.className = 'grey-left';
        label.innerHTML = key + '. ';
        description.innerHTML = value;
        
        return div;
    }

    #hide(container) {
        console.log(container)
        if(!(container instanceof HTMLElement)) 
            container = this.container.querySelector('#' + container);
        container.setAttribute('hidden', '');
    }

    #hideEmpty() {
        let defenses = this.character.Defenses;
        if(!defenses.Resistances) this.#hide('resistances')
        if(!defenses.Immunities) this.#hide('immunities');
        if(!defenses.ConditionImmunities) this.#hide('condition-immunities');
    }

}
