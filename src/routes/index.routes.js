import { Router } from 'express';
import { notesRoutes } from './note.routes.js';
import { userRoutes } from './user.routes.js';

const routes = Router();

userRoutes(routes);
notesRoutes(routes);

export default routes;