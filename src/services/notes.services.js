import { BaseRepository } from '../common/baseRepository.js';
import NotesSchema from '../models/notes.js';



export class NoteService extends BaseRepository {
    constructor() {
        super(NotesSchema);
    }

    async createNote(data) {
        return await this.insert(data);
    }

    async findAllNotes() {
        return await this.findAll({});
    }

    async findNotesById(id) {
        return await this.findNotesById(id);
    }

    async updateNote(data) {
        const { id, ...rest } = data;
        return await this.update({id}, rest);
    }

    async deleteNote(id) {
        return await this.delete(id);
    }
}