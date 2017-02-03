import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  datePosted: DS.attr('date'),
  text: DS.attr('string'),
  rev: DS.attr('string')
});
