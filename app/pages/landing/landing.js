import { lite, xhr } from 'lite';
import { Gridify } from 'gridify';

export let vm = lite.extend({
    content : `
        <textarea id='text'></textarea>    
    `,
    initialize : function() { 
        new Gridify({
            container : 'grid-container',
            data : [{ a : 1, b : 2 }]
        });

        import('../../../5e/spells/spells.js')
            .then(lib => {
                console.log(lib.spells);
            });
    }
});