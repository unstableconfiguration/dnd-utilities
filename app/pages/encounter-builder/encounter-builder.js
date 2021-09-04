import { lite } from 'lite';
import { EncounterBuilder } from './encounterBuilder.js';
import { Gridify } from 'gridify';
import html from './encounter-builder.html';


export let vm = lite.extend({
    content : html,
    initialize : function() { 
        let vm = this;

        vm.setElements();
        vm.populateCRDropDowns();
        vm.setEventListeners();
        
        vm.initializeBuilder();
    },
    setElements : function() { 
        let vm = this;
        vm.elements = {
            'characters' : '#characters',
            'crMax' : '#crMax',
            'crMin' : '#crMin',
            'difficulty' : '#difficulty',
            'monsterCountMax' : '#monsterCountMax',
            'monsterCountMin' : '#monsterCountMin'

        };
        for(let k in vm.elements) { 
            vm.elements[k] = vm.container.querySelector(vm.elements[k]);
        }
    },
    initializeBuilder : function() {
        let vm = this;
        vm.encounterBuilder = new EncounterBuilder();
        vm.builderArgs = vm.EncounterBuilderArgs();
        vm.setArgDefaults();
    },
    EncounterBuilderArgs : function() {
        let builderArgs = {
            players : [],
            difficulty : '',
            crRange : { min : 0, max : 0 },
            monsterCountRange : { min : 0, max : 0 },

            setCharacters : function(value) {
                builderArgs.players = value
                    .split(',')
                    .map(c => { return { level : +c||0 } });
            },
            setDifficulty : function(value) {
                builderArgs.difficulty = value;
            },
            setCRMin : function(value) { 
                builderArgs.crRange.min = +value;
            },
            setCRMax : function(value) { 
                builderArgs.crRange.max = +value;
            },
            setCountMin : function(value) { 
                builderArgs.monsterCountRange.min = +value;
            },
            setCountMax : function(value) { 
                builderArgs.monsterCountRange.max = +value;
            }
        }
        return builderArgs;
    },
    setArgDefaults : function () { 
        let vm = this;
        vm.builderArgs.setCharacters(vm.elements.characters.value);
        vm.builderArgs.setDifficulty(vm.elements.difficulty.value);
        vm.builderArgs.setCRMin(vm.elements.crMin.value);
        vm.builderArgs.setCRMax(vm.elements.crMax.value);
        vm.builderArgs.setCountMin(vm.elements.monsterCountMin.value);
        vm.builderArgs.setCountMax(vm.elements.monsterCountMax.value);
        
    },
    populateCRDropDowns : function() { 
        let vm = this;
        vm.populateCRSelect(vm.elements.crMin, 1);
        vm.populateCRSelect(vm.elements.crMax, 5);
    },
    populateCRSelect : function (select, defaultValue = 1) { 
        let createOption = function(innerText, value) {
            let option = document.createElement('option');
            option.innerText = innerText; 
            option.value = value;
            if(value === defaultValue) {
                option.selected = true;
            }
            select.appendChild(option);
        }

        createOption('0', 0);
        createOption('1/8', .135);
        createOption('1/4', .25);
        createOption('1/2', .5);
        for(let i = 1; i <= 30; i++) { 
            createOption(i, i);
        }
    },
    patterns : {
        notNumbers : /[^\d]/g,
        notNumberList : /[^\d,\s]/g
    },
    removeCharacters : function(event, rgx) { 
        event.target.value = event.target.value.replace(rgx, '');
    },
    setEventListeners : function() {
        let vm = this;
        vm.elements.characters.addEventListener('keyup', (e) => {
            vm.removeCharacters(e, vm.patterns.notNumberList);
            vm.builderArgs.setCharacters(e.target.value);
            vm.generateEncounter();
        });

        vm.elements.difficulty.addEventListener('change', (e) => {
            vm.builderArgs.setDifficulty(e.target.value);
            vm.generateEncounter();
        });

        vm.elements.crMin.addEventListener('change', (e) => { 
            vm.builderArgs.setCRMin(e.target.value);
            vm.generateEncounter();
        });

        vm.elements.crMax.addEventListener('change', (e) => { 
            vm.builderArgs.setCRMax(e.target.value);
            vm.generateEncounter();
        });

        vm.elements.monsterCountMin.addEventListener('keyup', (e) => { 
            vm.removeCharacters(e, vm.patterns.notNumbers);
            vm.builderArgs.setCountMin(e.target.value);
            vm.generateEncounter();    
        });

        vm.elements.monsterCountMax.addEventListener('keyup', (e) => { 
            vm.removeCharacters(e, vm.patterns.notNumbers);
            vm.builderArgs.setCountMax(e.target.value);
            vm.generateEncounter();
        });
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
            // Sort them and join them to a single string
            encounter.crsString = crsStrings
                .sort((a, b) => a <= b)
                .join(', ');
        });

        return encounters;
    },
    wildcardFilter : function(cellVal, filterVal) { 
        return cellVal.includes(filterVal);
    },
    writeOutput : function(encounters) { 
        let numberSort = function(a, b) { return +a >= +b ? 1 : -1 };
        let wildcardFilter = this.wildcardFilter;

        new Gridify({
            container : 'output-table',
            data : encounters,
            columns : [
                { field : 'count', header : '# Monsters', filter : true, sort : numberSort, className : 'monster-count-col' }
                , { field : 'xpCost', header : 'XP Cost', filter : true, sort : numberSort, className : 'xp-cost-col' }
                , { field : 'crsString', header : 'Challenge Ratings', filter : wildcardFilter, sort : true , className : 'cr-col' }
            ], 
            paging : true, 
            className : 'table small'
        });
    }
});

