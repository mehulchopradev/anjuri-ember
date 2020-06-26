import Controller from '@ember/controller';

export default Controller.extend({
    formVisible: false,

    actions: {
        onShowBookForm() {
            this.set('formVisible', true);
        },

        onCancel() {
            this.set('formVisible', false);
        }
    }
});
