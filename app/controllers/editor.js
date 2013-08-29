import Slide from '../models/slide';

var EditorController = Ember.ArrayController.extend({
  //the current selected slide
  currentSlide:Ember.K(),
  //action to add a Slide
  addSlideAction : function(){
    this.pushObject(Slide.create());
  },
  //action to select the slide
  selectSlideAction:function(event){
    console.log(event);
  },
  //action to handle the deletion event
  deleteSlideAction : function(event){
    this.removeObject(event);
  }
});


export default EditorController;