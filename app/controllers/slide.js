var SlideController = Ember.ObjectController.extend({
  needs: ['editor'],

  toggleSelected: function() {
    this.get('controllers.editor').selectSlideAction(this.get('content'));
  }
});


export default SlideController;