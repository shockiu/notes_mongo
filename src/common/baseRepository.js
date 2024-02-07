export class BaseRepository {
    constructor(model) {
        this.model = model;
    }

    async insert(data) {
        return await this.model.create(data);
    }

    async findId(id) {
        return await this.model.findById(id);
    }

    async findOne(filter) {
        return await this.model.findOne(filter).lean();
    }

    async findAll(filter) {
        return await this.model.find(filter)
    }

    async update(filter, data) {
        return await this.model.updateOne(filter, data);
    }

    async delete(filter) {
        return await this.model.deleteOne(filter);
    }
}