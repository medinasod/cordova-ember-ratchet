import Ember from 'ember';

// app/controllers/posts.js
export default Ember.Controller.extend({
  sortAscending: true,
  actions: {
    addMuseum: function() {
      var newMuseum = this.store.createRecord('museums', {
        name: this.get('name'),
        address: this.get('address'),
        timestamp: new Date().getTime()
      });
      newMuseum.save();
    }
  }
});
