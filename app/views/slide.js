var SlideView = Ember.View.extend({
  classNames: ['editor-slide', 'step'],
  click: function () {
    this.get('controller').toggleSelected();
  }
});

export default SlideView;