import Ember from 'ember';

export default Ember.Controller.extend({

actions: {
    createSong() {
      var song = this.store.createRecord("song", {
        title: this.get('title'),
      });
      song.save();

      this.set('title', '');
    },
  }
});
