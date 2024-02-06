import { URLS } from '../common/urls.js';
import userController from '../controllers/users.controller.js';


export const userRoutes = (router) => {
    router.get(URLS.userId, userController);// -
    router.get(URLS.users, userController);// -
    router.post(URLS.user, userController);// -
    router.put(URLS.userId, userController);// -
    router.delete(URLS.userId, userController); // -
}