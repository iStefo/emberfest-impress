var SlideView = Ember.View.extend({
  classNames: ['editor-slide', 'step'],
  attributeBindings: ['dataX:data-x', 'dataY:data-y', 'dataRotate:data-rotate', 'dataScale:data-scale'],

  dataX: Ember.computed.alias('controller.x'),
  dataY: Ember.computed.alias('controller.y'),
  dataRotate: Ember.computed.alias('controller.rotate'),
  dataScale: Ember.computed.alias('controller.scale'),

  click: function () {
    if (!this.get('controller.content.isEditing')){
      this.get('controller').toggleSelected();
    }
  },

  xObserver: function() {
    this.$().data('stepData').x = this.get('dataX');
    this.reapply();
  }.observes('dataX'),

  yObserver: function() {
    this.$().data('stepData').y = this.get('dataY');
    this.reapply();
  }.observes('dataY'),

  scaleObserver: function() {
    this.$().data('stepData').scale = this.get('dataScale');
    this.reapply();
  }.observes('dataScale'),

  rotateObserver: function() {
    this.$().data('stepData').rotate = this.get('dataRotate');
    this.reapply();
  }.observes('dataRotate'),

  reapply: function() {
    $('#impress').jmpress('reapply', this.$());
    $('#impress').jmpress('reselect');
  },

  selectedObserver: function() {
    $('#impress').jmpress('select', this.$());
  }.observes('controller.isSelected', 'controller.isEditing')
});

export default SlideView;