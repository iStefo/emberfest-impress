var EditorView = Ember.View.extend({
  classNames:['pure-g'],
    didInsertElement:function(){
        console.log('slide view inserted');
    },
    elementId:"editor"
});

export default EditorView;