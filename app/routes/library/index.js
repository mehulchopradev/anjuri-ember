import Route from '@ember/routing/route';

export default Route.extend({
    async model() {
        const books = await this.store.findAll('book');
        return books;
    },
});
