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

    doneTodosCount: 0,

    actions: {
        onNewTodo(newTodo) {
            this.todos.pushObject({
                description: newTodo,
                done: false,
                createdDate: moment(new Date()),
            });

            // this.set('todos', JSON.parse(JSON.stringify(this.todos)));
        },

        onCheck(checkedStatus) {
            if (checkedStatus) {
                this.set('doneTodosCount', this.doneTodosCount + 1);
            } else {
                this.set('doneTodosCount', this.doneTodosCount - 1);
            }
        }
    }
});
