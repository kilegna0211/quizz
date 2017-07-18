import express from 'express';
import pub from '../models/pub.js';
import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {

    app.get('/token_status', Auth.hasAuthorization, (req, res, next) => {
        res.sendStatus(200);
    });

    var pub = new pub();

    router.post('/newpub', Auth.hasAuthorization, pub.create);

    router.get('/', pub.findAll);

    router.get('/id/:id', Auth.hasAuthorization, pub.findById);

    router.get('/sendcancel/:id', Auth.hasAuthorization, pub.sendAnnulation);

    router.put('/:id', Auth.hasAuthorization, pub.update);

    router.delete('/:id', Auth.hasAuthorization, pub.delete);

    app.use('/pubs', router);

};
