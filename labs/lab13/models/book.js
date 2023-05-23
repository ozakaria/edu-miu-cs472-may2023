let db = [];
let counter = 0;

module.exports = class Book {
    constructor(id, title, isbn, publishedDate, authors) {
        this.id = id;
        this.title = title;
        this.isbn = isbn;
        this.publishedDate = publishedDate;
        this.authors = authors;
    }

    save() {
        this.id = ++counter;
        db.push(this);
        return this;
    }

    edit() {
        const index = db.findIndex(book => book.id === this.id);
        if (index !== -1) {
            db[index] = this;
        }
        return this;
    }

    static getAll() {
        return db;
    }

    static deleteById(id) {
        const index = db.findIndex(book => book.id === id);
        if (index !== -1) {
            return db.splice(index, 1)[0];
        }
        return null;
    }
};
