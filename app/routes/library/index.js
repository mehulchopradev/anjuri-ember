import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({

    book: inject(),

    queryParams: {
        title: {
            refreshModel: true
        }
    },

    model(params, transition) {
        const { queryParams } = transition.to;

        if (queryParams && queryParams.title) {
            return this.book.filterBooksByTitle(queryParams.title);
        }

        return this.book.getAllBooks();

        // const books = await this.store.findAll('book');
        // const books = await this.store.query('book', queryParams)
        // return books;
    },
});
