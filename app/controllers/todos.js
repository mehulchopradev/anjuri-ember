import Controller from '@ember/controller';
import moment from 'moment';

export default Controller.extend({
    todosCount: 0,
    todos: [],

    actions: {
        onNewTodo(newTodo) {
            this.todos.pushObject({
                description: newTodo,
                done: false,
                createdDate: moment(new Date()),
            });
        }
    }
});
