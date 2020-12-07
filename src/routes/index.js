import { validateToken } from '../authenticate.js';

export default (router) => {
    router.get('/', validateToken, function(req, res) {
        res.status(200).send('Welcome to the Workast test');
    });

    return router;
}
