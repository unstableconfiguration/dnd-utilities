
let main = document.getElementById('main-content');
const load = (file) => new file.vm({ container : main });

export let routes = [
    { route : '', value : () => { import('../pages/lookups/lookups.js').then(load); } },
    { route : 'lookups', value : () => { import('../pages/lookups/lookups.js').then(load); } },
    { route : 'battle-manager', value : () => { import('../pages/battle-manager/battle-manager.js').then(load); } },
    { route : 'encounter-builder', value : () => { import('../pages/encounter-builder/encounter-builder.js').then(load); } },
]



