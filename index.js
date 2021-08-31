import { routes } from './app/scripts/routes.js'
import { router } from 'lite'

window.router = router;
router.addRoutes(routes);
router.onHashChange = function(value) {
    if(typeof(value) == 'function') { value(); }
    else { throw new Exception("could not find value for route"); }
}

window.onhashchange();