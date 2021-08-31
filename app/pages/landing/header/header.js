import { lite } from "lite";
import html from './header.html'

export let header = lite.extend({
    container : document.getElementById('header-container'),
    initialize : function() { 
        this.content = html;
        // Need onContentbound event back
        this.addEventListeners();
    },
    addEventListeners : function() { 
        let navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(nav => {
            nav.addEventListener('click', function() {  
                navItems.forEach(n => n.classList.remove('active'));
                nav.classList.toggle('active');
            });
        });
    }
});