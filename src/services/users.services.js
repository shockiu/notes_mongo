import { BaseRepository } from '../common/baseRepository.js';
import UserSchema from '../models/users.js';
import bcrypt from 'bcryptjs';



export class UserService extends BaseRepository {
    constructor() {
        super(UserSchema);
    }

    async createUser(data) {
        const salt = await bcrypt.genSalt(10);
        data.password = await bcrypt.hash(data.password, salt);
        return await this.insert(data);
    }

    async findAllUsers() {
        return await this.findAll({});
    }

    async findUserById(id) {
        return await this.findId(id);
    }

    async updateUser(data) {
        const { id, ...rest } = data;
        return await this.update({_id: id}, rest);
    }

    async deleteUser(id) {
        return await this.delete({_id: id});
    }
}