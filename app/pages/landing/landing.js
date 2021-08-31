import { lite } from 'lite';
import { Gridify } from 'gridify';

export let vm = lite.extend({
    content : `
        <span>hello there</span>
        <div id='grid-container'></div>    
    `,
    initialize : function() { 
        new Gridify({
            container : 'grid-container',
            data : [{ a : 1, b : 2 }]
        })
    }
});