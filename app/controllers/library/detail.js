import Controller from '@ember/controller';

export default Controller.extend({
    description: null,
    name: null,

    actions: {
        async onSaveReview() {
            const { description, name, model } = this;
            const review = this.store.createRecord('review', {
                description,
                name,
                book: model,
            });

            await review.save();
        }
    }
});
