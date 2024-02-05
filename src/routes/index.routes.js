import { Router } from 'express';


const routes = Router();

routes.get('/', (req, res) => {
    res.send({
        msg: 'hola'
    })
});

export default routes;