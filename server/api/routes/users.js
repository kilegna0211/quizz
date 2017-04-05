import express from 'express';
import User from '../models/user.js';
import Auth from '../middlewares/authorization.js';
let router = express.Router();
module.exports = (app) => {
app.get('/token_status', Auth.hasAuthorization, (req, res, next) => {
    res.sendStatus(200);
});

var user = new User();

app.post('/login', user.connect);

router.get('/score/:id', user.getScore);

router.get('/leaders', user.getLeader);

router.get('/', Auth.isAdministrator, user.findAll);

router.get('/:id', Auth.isAdministrator, user.findById);

router.put('/profile/:id', user.updateProfile);

router.post('/', user.create);

router.put('/:id', Auth.isAdministrator, user.update);

router.put('/score/:id', user.updateScore);

router.delete('/:id', Auth.isAdministrator, user.delete);

app.use('/users', router);
};
