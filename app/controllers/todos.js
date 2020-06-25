import Controller from '@ember/controller';
import { computed } from '@ember/object';
import moment from 'moment';

export default Controller.extend({
    todosCount: 0,
    todos: [],

    /* doneTodosCount: computed('todos.@each.done', function () {
        const { todos } = this;
        return todos.filter(todo => todo.done).length;
    }), */

    doneTodosCount: computed('checkedTodos.[]', function () {
        return this.checkedTodos.length;
    }),

    isDisabled: computed('checkedTodos.[]', function () {
        return this.checkedTodos.length == 0;
    }),

    checkedTodos: [],

    actions: {
        onNewTodo(newTodo) {
            this.todos.pushObject({
                id: new Date().getTime(),
                description: newTodo,
                done: false,
                createdDate: moment(new Date()),
            });

            // this.set('todos', JSON.parse(JSON.stringify(this.todos)));
        },

        onCheck(checkedStatus) {
            const { id, checked } = checkedStatus;
            if (checked) {
                this.checkedTodos.pushObject(Number(id));
            } else {
                this.checkedTodos.removeObject(Number(id));
            }
        },

        onClearCompletedTodos() {
            // Would need a list of todos marked for completion (done=true) ?????
            // from todos remove the above set of todos

            const { checkedTodos, todos } = this;
            const notDoneTodos = todos.filter((todo) => {
                return !checkedTodos.includes(todo.id);
            });

            this.set('todos', notDoneTodos);
            this.checkedTodos.clear();
        }
    }
});
