import { Schema, model } from 'mongoose';


const NotesSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

export default model('Note', NotesSchema, 'Notes');