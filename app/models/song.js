import DS from 'ember-data';

export default DS.Model.extend({
  pageNum: DS.attr('string'),
  title: DS.attr('string'),
  // composedDate: DS.attr('date'),
  // meter: DS.attr('string'),
  // text: DS.attr('string'),
  rev: DS.attr('string')
});
