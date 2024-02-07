import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';

const UserSchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true,
        unique: true
    },
    password: {

    }
}, {
    timestamps: true,
    versionKey: false
});


export default model('User', UserSchema, 'Users');