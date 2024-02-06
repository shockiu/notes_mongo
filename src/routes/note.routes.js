import { URLS } from '../common/urls.js';
import noteController from '../controllers/notes.controller.js';

export const notesRoutes = (router) => {
    router.get(URLS.noteId, noteController)
    router.get(URLS.notes, noteController);
    router.post(URLS.note, noteController);
    router.put(URLS.noteId, noteController);
    router.delete(URLS.noteId, noteController);
}