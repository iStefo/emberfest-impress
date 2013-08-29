var Slide = Ember.Object.extend({
  name: 'new slide',
  isSelected:false,
  isEditing:false,
  value:'my default value',
  x: 0,
  y: 0,
  scale: 1,
  rotate: 0
});

export default Slide;