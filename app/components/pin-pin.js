var PinPinComponent = Ember.Component.extend({
  classNames: ['handler'],
  click: function (ev) {
    ev.stopImmediatePropagation();
    console.log('component is active');
  }
});

export default PinPinComponent;