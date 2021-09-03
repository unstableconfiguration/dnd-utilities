import { Gridify } from 'gridify';
import { lite } from 'lite';
import { monsters } from '../../../../../5e/monsters';

export let table = lite.extend({
    content : '<div id="monsters-grid">Test 2</div>', 
    initialize : function() { 
        let monsterArray = this.prepareMonsters(monsters);
        this.buildGrid(monsterArray);
    },
    prepareMonsters : function(monsters) {
        let monsterArray = [];
        for(let m in monsters) { 
            monsterArray.push(monsters[m]);
        }
        return monsterArray;
    },
    buildGrid : function(monsterArray) { 
        let vm = this;
        new Gridify({
            container : 'monsters-grid',
            data : monsterArray,
            columns : [
                {
                    field : 'Name',
                    header : 'Name',
                    filter : { rule : vm.nameFilter },
                    className : 'td-text-long',
                    style : 'width: 200px; text-decoration:underline',
                    sort : true,
                    click : (e) => {
                            // new monsterbox modal
                    }
                }
                , { field : 'ChallengeRating', header : 'CR', 
                    style : 'width:75px; text-align:right;',
                    filter : { rule : vm.crFilter }, 
                    sort : { comparator : vm.crSort }
                }
                , { field : 'Type', header : 'Type',
                    className : 'td-text-long',
                    style : 'width: 100px;',
                    filter : true, format : (v)=> { return v.split(',')[0]; }, sort : true }
                , { field : 'Alignment', header : 'Alignment', style : 'width:100px; text-align:left;', filter : true, sort : true }
            ]
            , paging : { rows : 10 }
            , style : 'table-layout:fixed;'
            , className : 'table small'      
        });
    },
    crSort : function(a, b) {
        let parse = (cr) => cr.indexOf('/') === -1 ? +cr : 1/(cr.split('/')[1]); 
        a = parse(a);
        b = parse(b);
        if(a == b) { return 0; }
        return a > b ? 1 : -1;
    },
    crFilter : function(cellValue, filterValue) {
        if(+filterValue === 1) { return +cell_value === 1; }
        return ('' + cellValue).substr(0, filterValue.length) === filterValue; 
    },
    nameFilter : function(cellValue, filterValue) { 
        return cellValue.toLowerCase()
            .includes(filterValue.toLowerCase());
    }
});