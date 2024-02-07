import { Router } from 'express';
import { URLS } from '../common/urls.js';
import { UserService } from '../services/users.services.js';


const userController = Router();
const userService = new UserService();

userController.post(URLS.login, async (req, res) => {
    await userService.login(req.body)
        .then((result) => {
            res.status(200).send({
                data: result,
                code: 200
            });
        })
        .catch((err) => {
            res.status(400).send({
                error: true,
                body: err
            });
        });
});

userController.post(URLS.user, async (req, res) => {
    await userService.createUser(req.body)
        .then((result) => {
            res.status(200).send({
                data: result,
                code: 200
            });
        })
        .catch((err) => {
            res.status(400).send({
                error: true,
                body: err
            });
        });
});

userController.get(URLS.userId, async (req, res) => {
    await userService.findUserById(req.params.id)
        .then((result) => {
            res.status(200).send({
                data: result,
                code: 200
            });
        })
        .catch((err) => {
            res.status(400).send({
                error: true,
                body: err
            });
        });
});

userController.get(URLS.users, async (req, res) => {
    await userService.findAllUsers(req.query)
        .then((result) => {
            res.status(200).send({
                data: result,
                code: 200
            });
        })
        .catch((err) => {
            res.status(400).send({
                error: true,
                body: err
            });
        });
});

userController.put(URLS.userId, async (req, res) => {
    await userService.updateUser({ id: req.params.id ,...req.body})
        .then((result) => {
            res.status(200).send({
                data: result,
                code: 200
            });
        })
        .catch((err) => {
            res.status(400).send({
                error: true,
                body: err
            });
        });
});


userController.delete(URLS.userId, async (req, res) => {
    await userService.deleteUser(req.params.id)
        .then((result) => {
            res.status(200).send({
                data: result,
                code: 200
            });
        })
        .catch((err) => {
            res.status(400).send({
                error: true,
                body: err
            });
        });
});



export default userController;