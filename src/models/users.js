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


UserSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

UserSchema.methods.matchPassword = async (password) => {
    return await bcrypt.compare(password, this.password)
};


export default model('User', UserSchema, 'Users');