import Component from '@ember/component';
import { inject } from '@ember/service';
import { task } from 'ember-concurrency';

export default Component.extend({

    book: inject(),

    editTask: task(function * (book) {
        const bookObj = yield this.book.getBookById(book.id);

        const { onEdit } = this;
        onEdit(bookObj);
    }).drop(),
});
