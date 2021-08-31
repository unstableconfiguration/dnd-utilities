import 'cirrus-ui'; 
import { routes } from './app/scripts/routes.js'
import { router } from 'lite'
import { header } from './app/header/header.js'

window.router = router;
router.addRoutes(routes);
router.onHashChange = function(value) {
    if(typeof(value) == 'function') { value(); }
    else { throw new Exception("could not find value for route"); }

    let navs = document.querySelectorAll('.nav-right > .nav-item')
    navs.forEach(nav => {
        let select = nav.querySelector('a').href.includes(location.hash);
        nav.classList.toggle('active', select);
    });
}

new header();

window.onhashchange();