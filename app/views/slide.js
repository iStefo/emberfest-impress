var SlideView = Ember.View.extend({
  classNames: ['editor-slide', 'step'],
  click: function () {
    if (!this.get('controller.content.isEditing')){
      this.get('controller').toggleSelected();
    }
  },
  doubleClick:function(){
    this.set('controller.content.isEditing',true);
  }
});

export default SlideView;