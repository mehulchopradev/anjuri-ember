import DS from 'ember-data';
const { Model } = DS;

// objects from the model class - record

export default Model.extend({
    // every record created from the model class will by default have an id attribute (number)
    title: DS.attr('string'),

    price: DS.attr('number'),

    pages: DS.attr('number'),

    publicationHouse: DS.attr('string'),

    ratings: DS.attr('number'),

    reviews: DS.hasMany('review')
});
