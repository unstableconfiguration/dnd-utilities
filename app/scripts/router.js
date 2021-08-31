import { router } from 'lite'

let main = document.getElementById('main-content');
const load = (file) => new file.vm({ container : main });

router.addRoutes([
    { route : '', value : () => { import('../pages/lookups/lookups.js').then(load); } },
    { route : 'lookups', value : () => { import('../pages/lookups/lookups.js').then(load); } },
    { route : 'battle-manager', value : () => { import('../pages/battle-manager/battle-manager.js').then(load); } },
    { route : 'encounter-builder', value : () => { import('../pages/encounter-builder/encounter-builder.js').then(load); } },
]);

router.onHashChange = function(value) {
    if(typeof(value) == 'function') { value(); }
    else { throw new Exception("could not find value for route"); }

    let navs = document.querySelectorAll('.nav-right > .nav-item')
    navs.forEach(nav => {
        let hash = location.hash || 'lookups'
        let select = nav.querySelector('a').href.includes(hash);
        nav.classList.toggle('active', select);
    });
}

