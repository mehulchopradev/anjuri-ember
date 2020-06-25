import DS from 'ember-data';
const { Model } = DS;

// objects from the model class - record

export default Model.extend({
    // every record created from the model class will by default have an id attribute (number)
    title: DS.attr('string'),
});