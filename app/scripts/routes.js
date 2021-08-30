
let main = document.getElementById('main-content');
const load = (file) => new file.vm({ container : main });

export let routes = [
    { route : '', value : () => { import('../pages/landing/landing.js').then(load); } }
]



