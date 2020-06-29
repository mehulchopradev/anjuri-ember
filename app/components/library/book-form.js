import Component from '@ember/component';
import { inject } from '@ember/service';

export default Component.extend({
    model: null,
    error: null,

    store: inject(), // because store object is auto injected only in controllers/routes

    init() {
        this._super(...arguments);

        this.model = {
            title: null,
            price: null,
            pages: null,
        };

        this.error = false;
    },

    actions: {
        async onSave() {
            this.set('error', false);
            const { model, store } = this;
            const book = store.createRecord('book', model);

            try {
                await book.save();
            } catch (err) {
                console.log(err);
                this.set('error', true);
                return;
            }

            this.set('model', {
                title: null,
                price: null,
                pages: null,
            });
        }
    },
});
