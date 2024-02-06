import { Router } from 'express';
import { URLS } from '../common/urls.js';
import { NoteService } from '../services/notes.services.js';


const noteController = Router();
const noteService = new NoteService();


noteController.post(URLS.note, async (req, res) => {
    await noteService.createNote(req.body)
        .then((result) => {
            res.status(200).send(result);
        })
        .catch((err) => {
            res.status(400).send({
                error: true,
                body: err
            });
        });
});



export default noteController;