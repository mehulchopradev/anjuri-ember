import Controller from '@ember/controller';

export default Controller.extend({
    formVisible: false,

    searchTitle: null,

    queryParams: ['title'],

    book: null,

    actions: {
        onShowBookForm() {
            this.set('book', this.store.createRecord('book', {}));
            this.set('formVisible', true);
        },

        onCancel() {
            this.set('formVisible', false);
            const { book } = this;
            book.deleteRecord();
        },

        onSearch() {
            const { searchTitle } = this;
            this.set('title', searchTitle);
        },

        onClear() {
            this.set('searchTitle', null);
            this.set('title', null);
        },

        onSave() {
            this.set('book', this.store.createRecord('book', {}));
        },

        onEdit(book) {
            this.set('formVisible', true);
            this.set('book', book);
        }
    }
});
