import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    newTodo: null,

    isDisabled: computed('newTodo', function () {
        const { newTodo } = this;
        return !newTodo;
    }),

    actions: {
        onSave() {
           const { newTodo, save } = this;
           save(newTodo);
           this.set('newTodo', null);
        }
    }
});
