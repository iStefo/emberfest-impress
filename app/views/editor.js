var EditorView = Ember.View.extend({
  classNames:['pure-g'],
    didInsertElement:function(){
        this.get('controller').playSlideshow();
    },
    elementId:"editor"
});

export default EditorView;