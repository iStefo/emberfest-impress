var SlideView = Ember.View.extend({
  classNames: ['editor-slide', 'step'],
  attributeBindings: ['dataX:data-x', 'dataY:data-y', 'dataRotate:data-rotate', 'dataScale:data-scale'],

  dataX: Ember.computed.alias('controller.x'),
  dataY: Ember.computed.alias('controller.y'),
  dataRotate: Ember.computed.alias('controller.rotate'),
  dataScale: Ember.computed.alias('controller.scale'),

  click: function () {
    this.get('controller').toggleSelected();
  }
});

export default SlideView;