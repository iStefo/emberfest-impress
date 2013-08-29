import Slide from '../models/slide';

//debugger;
var EditorController = Ember.ArrayController.extend({
    //content: Ember.A(),
    addSlide : function(){
        this.pushObject(Slide.create());
    }
});


export default EditorController;