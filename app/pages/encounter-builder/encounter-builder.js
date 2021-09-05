import { lite } from 'lite';
import { EncounterBuilder } from './encounterBuilder.js';
import { Gridify } from 'gridify';
import { pagination } from '../lookups/pagination/pagination.js';
import html from './encounter-builder.html';

/* 
    CR filters not working below 1
*/

export let vm = lite.extend({
    content : html,
    initialize : function() { 
        let vm = this;

        vm.setElements();
        vm.setEventListeners();
        
        vm.initializeBuilder();
    },
    setElements : function() { 
        let vm = this;
        vm.elements = {
            crMax : '#crMax',
            crMin : '#crMin',
            difficulty : '#difficulty',
            monsterCountMax : '#monsterCountMax',
            monsterCountMin : '#monsterCountMin',
            partySize : '#party-size',
            partyLevel : '#party-level'
        };
        for(let k in vm.elements) { 
            vm.elements[k] = vm.container.querySelector(vm.elements[k]);
        }
    },
    setEventListeners : function() {
        let vm = this;

        let setOnChange = function(el, callback) {
            el.addEventListener('change', (e) => {
                callback(e.target.value);
                vm.generateEncounter();
            });
        }

        setOnChange(vm.elements.crMax, v => vm.builderArgs.crRange.max = +v);
        setOnChange(vm.elements.crMin, v => vm.builderArgs.crRange.min = +v);
        setOnChange(vm.elements.monsterCountMax, v => vm.builderArgs.monsterCountRange.max = +v);
        setOnChange(vm.elements.monsterCountMin, v => vm.builderArgs.monsterCountRange.min = +v);
        setOnChange(vm.elements.difficulty, v => vm.builderArgs.difficulty = v);
        
        let getPlayers = function() { 
            let size = +vm.elements.partySize.value;
            let level = +vm.elements.partyLevel.value;
            return Array(size).fill(level)
                .map(l => { return { level : +l }});
        }

        setOnChange(vm.elements.partySize, v => vm.builderArgs.players = getPlayers());
        setOnChange(vm.elements.partyLevel, v => vm.builderArgs.players = getPlayers());
        
        // block non-numerics on min/max
        vm.elements.monsterCountMin.addEventListener('keypress', function(e) { 
            if(isNaN(String.fromCharCode(e.charCode))) { return e.preventDefault(); }
        });
        vm.elements.monsterCountMax.addEventListener('keypress', e => { 
            if(isNaN(String.fromCharCode(e.charCode))) { return e.preventDefault(); }
        });

    },
    initializeBuilder : function() {
        let vm = this;
        vm.encounterBuilder = new EncounterBuilder();
        vm.builderArgs = vm.defaultArgs();
    },
    defaultArgs : function() {
        let vm = this;
        let args = {
            players : [], // [{ level : 0}]
            difficulty : '', 
            crRange : { min : 0, max : 0 },
            monsterCountRange : { min : 0, max : 0 },
        }

        args.players = [];
        args.difficulty = vm.elements.difficulty.value;
        args.crRange.min = +vm.elements.crMin.value;
        args.crRange.max = +vm.elements.crMax.value;
        args.monsterCountRange.min = +vm.elements.monsterCountMin.value;
        args.monsterCountRange.max = +vm.elements.monsterCountMax.value;

        return args;
    },
    generateEncounter : function() { 
        let vm = this;
        let encounters = vm.encounterBuilder.getEncounters(vm.builderArgs);
        encounters = vm.prepareOutput(encounters);
        vm.writeOutput(encounters);        
    },
    prepareOutput : function(encounters) { 
        encounters.forEach(encounter => { 
            // Get a count of how many times each CR occurs
            let crs = {}
            encounter.crs.forEach(cr => { 
                crs[cr] = crs[cr] ? crs[cr]+1 : 1;
            });
            // Prepare them as display strings
            let crsStrings = [];
            for(let cr in crs) {
                crsStrings.push('CR' + cr + ' x' + crs[cr]);
            }
            // Replace decimals with fractions i.e. 0.135 => 1/8
            crsStrings = crsStrings.map(str => {
                str = str.replace('0.135', '1/8');
                str = str.replace('0.25', '1/4');
                str = str.replace('0.5', '1/2');
                return str;
            })

            // Sort them and join them to a single string
            encounter.crsString = crsStrings
                .sort((a, b) => a <= b)
                .join(', ');
        });

        return encounters;
    },
    writeOutput : function(encounters) { 
        let numberSort = function(a, b) { return +a >= +b ? 1 : -1 };
        let wildcardFilter = (cellVal, filterVal) => cellVal.includes(filterVal);
        
        let grid = new Gridify({
            container : 'output-table',
            data : encounters,
            columns : [
                { field : 'count', header : '# Monsters', filter : true, sort : numberSort }
                , { field : 'xpCost', header : 'XP Cost', filter : true, sort : numberSort }
                , { field : 'crsString', header : 'Challenge Ratings', filter : wildcardFilter, sort : true }
            ], 
            paging : { rows : 10 }, 
            className : 'table small',
            onHeaderCellCreated(th, options) { 
                let sortIcon = th.querySelector('.sort');
                if(sortIcon) { sortIcon.className = 'fa fa-sort'; } 
            },
            onHeaderCreated(thead, options) {
                thead.querySelectorAll('input[type="text"]')
                    .forEach(i => i.className = "input-xsmall");
            },
        });
        let pageContainer = grid.html.querySelector('#output-table-grid-paging');
        new pagination({ container : pageContainer, grid : grid, data : grid.paging.data });
    
    }
});

