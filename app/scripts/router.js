import { Lite } from 'lite'

let main = document.getElementById('main-content');

const load = (file) => new file.View({ container : main });

Lite.router.initialize();
Lite.router.addRoutes([
    { route : '', value : () => { import('../pages/lookups/lookups.js').then(load); } },
    { route : 'lookups', value : () => { import('../pages/lookups/lookups.js').then(load); } },
    { route : 'battle-manager', value : () => { import('../pages/battle-manager/battle-manager.js').then(load); } },
    { route : 'encounter-builder', value : () => { import('../pages/encounter-builder/encounter-builder.js').then(load); } },
    { route : 'character-sheets', value : () => { import('../pages/character-sheets/character-sheets.js').then(load); } },
    { route : 'character-sheet/{name}', value : () => { import('../pages/character-sheet/character-sheet.js').then(load); } }
]);

Lite.router.onHashChange = function(value) {
    if(typeof(value) == 'function') { value(); }
    else { throw new Error("could not find value for route: " + location.hash); }
}

