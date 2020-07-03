import Component from '@ember/component';
import { inject } from '@ember/service';
import Changeset from 'ember-changeset';
import lookupValidator from 'ember-changeset-validations';
import BookValidations from '../../validations/book';


export default Component.extend({
    // model: null,
    error: null,

    // book: null,

    store: inject(), // because store object is auto injected only in controllers/routes

    /*
    * On receiving the book attribute, store the book object in an object of Ember changeset.
    * Bind the UI elements not to the book attribute, but the changeset attribute
    */

    didReceiveAttrs() {
        this._super(...arguments);

        this.set('error', false);

        const { book } = this;
        const bookChangesetObj = new Changeset(book, lookupValidator(BookValidations), BookValidations);
        this.set('model', bookChangesetObj);
        this.set('book', book);
    },

    /* init() {
        this._super(...arguments);

        /* this.model = {
            title: null,
            price: null,
            pages: null,
        }; */

        // this.book = this.store.createRecord('book', {});

        /* this.error = false;
    }, */

    actions: {
        /* async onSave() {
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
        } */

        /* async onSave() {
            this.set('error', false);
            
            try {
                await this.book.save();
            } catch (err) {
                console.log(err);
                this.set('error', true);
                return; 
            }

            const { onSaveSuccess } = this;
            onSaveSuccess();
        }, */

        async onSave() {
            const { model, book } = this;

            await model.validate();

            /* console.log(model.isDirty);
            console.log(model.isPristine);
            console.log(model.isInvalid); */

            if (model.isInvalid) {
                return;
            }

            try {
                await model.save(); // asks ember changset to move the `changes` to the final object that is proxies
                // final object in our case is ember data model record
                // the changeset function after moving the changes will also attempt to call the save() on the proxied object
                alert(`Book ${book.title} was saved successfully`);
            } catch (err) {
                console.log(err);
                this.set('error', true);
                return; 
            }

            const { onSaveSuccess } = this;
            onSaveSuccess();
        },

        onReset() {
            this.model.rollback();
        }

        /* onCancelBook() {
            const { book, onCancel } = this;
            book.deleteRecord();

            onCancel();
        } */
    },
});
