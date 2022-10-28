import { Lite } from 'lite';
import html from './header.html'
import { DiceHeader } from '../dice/dice-header.js'

export class Header {

    constructor() {
        Lite.append('header-container', html);
        this.addEventListeners();

        new DiceHeader({ container : 'dice-header-container' });
    }

    addEventListeners() {
        let navItems = document.querySelectorAll('.nav-right > .nav-item');
        
        navItems.forEach(nav => {
            nav.addEventListener('click', function() {  
                navItems.forEach(n => n.classList.remove('active'));
                nav.classList.toggle('active');
            });
        });
    }
}
