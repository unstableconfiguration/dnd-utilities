import 'cirrus-ui'; 
import { routes } from './app/scripts/routes.js'
import { router } from 'lite'
import { header } from './app/pages/landing/header/header.js'


window.router = router;
router.addRoutes(routes);
router.onHashChange = function(value) {
    if(typeof(value) == 'function') { value(); }
    else { throw new Exception("could not find value for route"); }
}

new header();

window.onhashchange();