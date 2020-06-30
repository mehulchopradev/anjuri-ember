import Service, { inject } from '@ember/service';

export default Service.extend({

    store: inject(),

    async getAllBooks() {
        const books = await this.store.findAll('book');
        return books;
    },

    async filterBooksByTitle(title) {
        const books = await this.store.query('book', {
            title,
        });

        return books;
    }
});
