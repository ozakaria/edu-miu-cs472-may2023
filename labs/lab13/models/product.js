let db = [];
let counter = 0;

module.exports = class Product {
    constructor(id, title, description, price) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
    }

    save() {
        this.id = ++counter;
        db.push(this);
        return this;
    }

    edit() {
        const index = db.findIndex(prod => prod.id === this.id);
        if (index !== -1) {
            db[index] = this;
        }
        return this;
    }

    static getAll() {
        return db;
    }

    static deleteById(prodId) {
        const index = db.findIndex(prod => prod.id === prodId);
        if (index !== -1) {
            return db.splice(index, 1)[0];
        }
        return null;
    }
};
