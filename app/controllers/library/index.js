import Controller from '@ember/controller';

export default Controller.extend({
    formVisible: false,

    searchTitle: null,

    queryParams: ['title'],

    actions: {
        onShowBookForm() {
            this.set('formVisible', true);
        },

        onCancel() {
            this.set('formVisible', false);
        },

        onSearch() {
            const { searchTitle } = this;
            this.set('title', searchTitle);
        },

        onClear() {
            this.set('searchTitle', null);
            this.set('title', null);
        }
    }
});
