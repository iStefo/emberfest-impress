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

  isDragging: false,
  dragOrigin: null,

  mouseDown: function(e) {
    console.log(e);
    // enter dragging only if we are selected
    if (this.get('controller.isSelected')) {
      console.log('enter dragging');
      this.set('isDragging', true);
      this.set('dragOrigin', {
        x: e.offsetX,
        y: e.offsetY
      });
      return false;
    }
    
  },

  mouseMove: function(e)  {
    console.log('mousemove');
    if (this.get('isDragging')) {
      var dX =  e.offsetX - this.get('dragOrigin.x');
      var dY = e.offsetY - this.get('dragOrigin.y');
      this.get('controller').incrementProperty('x', dX);
      this.get('controller').incrementProperty('y', dY);
    }

  },

  mouseUp: function(e) {
    if (this.get('isDragging')) {

    }
    this.set('isDragging', false);
    return false;
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
    if (!this.get('isDragging')) {
      //$('#impress').jmpress('reselect');
    }
    
  },

  selectedObserver: function() {
    $('#impress').jmpress('select', this.$());
  }.observes('controller.isSelected', 'controller.isEditing')
});

export default SlideView;