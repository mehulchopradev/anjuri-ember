import Component from '@ember/component';

export default Component.extend({
    todos: null,

    /* didReceiveAttrs() {
        this._super(...arguments);

        this.set('todoList', JSON.parse(JSON.stringify(this.todos)));
    }, */

    actions: {
        onCheck(target) {
            const { checked } = target;
            const { onTodoChecked } = this;
            onTodoChecked(checked);
        }
    }
});
