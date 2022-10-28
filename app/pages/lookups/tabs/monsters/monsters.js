import { Gridify } from 'gridify';
import { Lite } from 'lite';
import { monsters } from '../../../../../5e/monsters';
import { Pagination } from '../../pagination/pagination';
import { Modal } from '../../../../components/modal/modal';
import { MonsterBox } from '../../../../components/monsterbox/monsterbox';

export class MonsterLookup {
    constructor(args) {
        this.container = Lite.append(args.container, `<div id='monsters-grid'>Monsters Loaded</div>`);
        
        let monsterArray = this.prepareMonsters(monsters);
        this.buildGrid(monsterArray);
    }

    prepareMonsters(monsters) {
        let monsterArray = [];
        for(let m in monsters) { 
            monsterArray.push(monsters[m]);
        }
        return monsterArray;
    }
    
    buildGrid(monsterArray) { 
        let vm = this;
        vm.grid = new Gridify({
            container : 'monsters-grid',
            data : monsterArray,
            columns : [
                {
                    field : 'Name',
                    header : 'Name',
                    filter : vm.nameFilter,
                    className : 'td-text-long',
                    style : 'width: 200px; text-decoration:underline',
                    sort : true,
                    click : (ev) => {
                        let modal = new Modal();
                        new MonsterBox({
                            container : modal.body,
                            data : monsters[ev.target.innerHTML]
                        });
                    }
                }
                , { field : 'ChallengeRating', header : 'CR', 
                    style : 'width:75px; text-align:right;',
                    filter : vm.crFilter, 
                    sort : vm.crSort
                }
                , { field : 'Type', header : 'Type',
                    className : 'td-text-long',
                    style : 'width: 100px;',
                    filter : true, format : (v)=> { return v.split(',')[0]; }, sort : true }
                , { field : 'Alignment', header : 'Alignment', style : 'width:100px;', className : 'td-text-long', filter : true, sort : true }
            ],
            paging : { rows : 10 },
            style : 'table-layout:fixed;',
            className : 'table small',
            onTableCellCreated(td, options) {
                if(td.style.overflow === 'hidden') { 
                    td.title = td.innerText; 
                }
            },
            onHeaderCreated(thead, options) {
                thead.querySelectorAll('input[type="text"]')
                    .forEach(i => i.className = "input-xsmall");
            },
            onHeaderCellCreated(th, options) { 
                let sortIcon = th.querySelector('.sort');
                if(sortIcon) { sortIcon.className = 'fa fa-sort'; } 
            }    
        });
        let pageContainer = vm.grid.html.querySelector('#monsters-grid-grid-paging');
        new Pagination({ container : pageContainer, grid : vm.grid, data : vm.grid.paging.data });
    
    }

    crSort(a, b) {
        let parse = (cr) => cr.indexOf('/') === -1 ? +cr : 1/(cr.split('/')[1]); 
        a = parse(a);
        b = parse(b);
        if(a == b) { return 0; }
        return a > b ? 1 : -1;
    }

    crFilter(cellValue, filterValue) {
        if(+filterValue === 1) { return +cellValue === 1; }
        return ('' + cellValue).slice(0, filterValue.length) === filterValue; 
    }

    nameFilter(cellValue, filterValue) { 
        return cellValue.toLowerCase()
            .includes(filterValue.toLowerCase());
    }
}

