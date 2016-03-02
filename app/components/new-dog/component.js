import Ember from 'ember';

export default Ember.Component.extend({
  sortProperties: ['name'],
  sortedBreeds: Ember.computed.sort('allBreeds', 'sortProperties'),
  breeds: [],

  sexes: ['female', 'male'],
  sex: '',

  images: [],

  actions: {
    handleFocus(select, event) {
      select.actions.open();
    },

    selectSex(sex) {
      this.set('sex', sex);
    },

    addImage() {
      this.get('images').pushObject({url: this.get('imageURL')});
      this.set('image', '');
    },

    removeImage(image) {
      this.get('images').removeObject(image);
    },

    saveDog() {
      var params = {
        name: this.get('name'),
        breeds: this.get('breeds'),
        sex: this.get('sex'),
        weight: this.get('weight'),
        birthday: this.get('birthday'),
        fee: this.get('fee'),
        description: this.get('description'),
        images: this.get('images'),
        appointments: [],
        available: true,
        createdAt: Date.now(),
        adoptedAt: null
      };
      this.sendAction('saveDog', params);
    }
  }
});
