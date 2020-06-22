import Component from '@ember/component';

export default Component.extend({
    todos: [
        {
            description: 'get up early',
            done: true,
        },
        {
            description: 'go for bath',
            done: true,
        },
        {
            description: 'Code',
            done: false,
        },
        {
            description: 'Lunch',
            done: false,
        }
    ]
});
