import { Router } from 'express';
import { URLS } from '../common/urls.js';
import { NoteService } from '../services/notes.services.js';


const noteController = Router();
const noteService = new NoteService();


noteController.post(URLS.note, async (req, res) => {
    await noteService.createNote(req.body)
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

noteController.get(URLS.noteId, async (req, res) => {
    await noteService.findNotesById(req.params.id)
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

noteController.get(URLS.notes, async (req, res) => {
    await noteService.findAllNotes(req.body)
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

noteController.put(URLS.noteId, async (req, res) => {
    await noteService.updateNote({ id: req.params.id, ...req.body})
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

noteController.delete(URLS.noteId, async (req, res) => {
    await noteService.deleteNote(req.params.id)
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

export default noteController;