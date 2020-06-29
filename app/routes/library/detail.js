import Route from '@ember/routing/route';

export default Route.extend({
    async model(params) {
        const { book_id } = params;
        const book = await this.store.findRecord('book', book_id);
        return book;
    }
});
