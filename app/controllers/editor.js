import Slide from '../models/slide';

var EditorController = Ember.ArrayController.extend({
  //the current selected slide
  currentSlide:Ember.K(),
  //action to add a Slide
  addSlideAction : function(){
    this.pushObject(Slide.create());
  },
  //action to select the slide
  selectSlideAction:function(slide){
    var wasSelected = slide.get('isSelected');
    this.get('content').setEach('isSelected',false);
    if (!wasSelected) {
      slide.set('isSelected',true);  
    }
  },
  //action to handle the deletion event
  deleteSlideAction : function(slide){
    this.removeObject(slide);
    slide.destroy();
  },
  editSlideAction:function(slide){
    var wasEditing = slide.get('isEditing');
    //
    this.get('content').setEach('isEditing',false);
    slide.set('isEditing',!wasEditing);
  },

  playSlideshow: function() {
    $('#impress').jmpress();
  }
});


export default EditorController;