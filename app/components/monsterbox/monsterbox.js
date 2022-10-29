import { Lite } from 'lite';
//import { monsters } from '../../../';
import html from './monsterbox.html';

export class MonsterBox {
    constructor(args) {
        this.container = Lite.append(args.container, html);
        let data = this.data = args.data;

        this.toggleVisibility();
        this.bindNameTextCollection('#monster-traits', data.Traits);
        this.bindNameTextCollection('#monster-actions', data.Actions);
        this.bindNameTextCollection('#monster-reactions', data.Reactions);
        this.bindNameTextCollection('#monster-legendary-actions', data.LegendaryActions);
        this.bindNameTextCollection('#monster-items', data.Items);

        window.data = this.data;
        

        window.proxy = Lite.bindings.bind('monsterbox', this.data);
    }

    /* Hides elements with no content */
    toggleVisibility() { 
        let vm = this;
        let data = vm.data;
        let hide = (id) => vm.container.querySelector('#' + id).parentElement.style.display = 'none';
        if(!data.Languages) hide('Languages');
        if(!data.Defenses.Saves) hide('Saves');
        if(!data.Senses) hide('Senses');
        if(!data.Skills) hide('Skills');
        if(!data.Defenses.Vulnerable) hide('Vulnerable');
        if(!data.Defenses.Immune) hide('Immune');
        if(!data.Defenses.Resist) hide('Resist');
        if(!data.Defenses.ConditionImmune) hide('ConditionImmune');
        if(!data.Reactions.length) vm.container.querySelector('#monster-reactions').style.display = 'none';
        if(!data.LegendaryActions.length) vm.container.querySelector('#monster-legendary-actions').style.display = 'none' ;
        if(!data.Items.length) vm.container.querySelector('#monster-items').style.display = 'none';
    }

    addNameTextItem(name, text) { 
        let div = document.createElement('div');
        let label = div.appendChild(document.createElement('em'));
        let description = div.appendChild(document.createElement('span'));
        label.className = 'text-grey-600; font-bold';
        label.innerHTML = name + '. ';
        description.innerHTML = text;
        return div;
    }

    bindNameTextCollection(containerId, data) { 
        let vm = this;
        if(!data) { return; }

        let div = vm.container.querySelector(containerId);
        data.forEach(item => {
            div.appendChild(vm.addNameTextItem(item.Name, item.Text));
        })
    }
}

export let View = MonsterBox;
