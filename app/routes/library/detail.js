import Route from '@ember/routing/route';

export default Route.extend({

    beforeModel(transition) {
        this._super(...arguments);

        const { book_id } = transition.to.params;
        if (isNaN(book_id)) {
            this.transitionTo('library.index'); // transition to the current route (details) will be automatically
            // aborted
        }
    },

    async model(params) {
        const { book_id } = params;
        const book = await this.store.findRecord('book', book_id);
        return book;
    }
});
