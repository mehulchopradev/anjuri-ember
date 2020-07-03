import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    description: DS.attr('string'),

    name: DS.attr('string'),

    book: DS.belongsTo('book')
});
