import { lite } from "lite";
import html from './header.html'
import { dice } from '../dice/dice-header.js'

export let header = lite.extend({
    container : document.getElementById('header-container'),
    content : html,
    initialize : function() {
        // Need onContentbound event back
        this.addEventListeners();
        new dice({ container : 'dice-header-container' });
    },
    addEventListeners : function() { 
        let navItems = document.querySelectorAll('.nav-right > .nav-item');
        
        navItems.forEach(nav => {
            nav.addEventListener('click', function() {  
                navItems.forEach(n => n.classList.remove('active'));
                nav.classList.toggle('active');
            });
        });
    }
});