import Slide from '../models/slide';

var EditorRoute = Ember.Route.extend({
  model: function() {
    return [
      Slide.create({value:"<q>Don't you think that presentations given <strong>in modern browsers</strong> shouldn't <strong>copy the limits</strong> of 'classic' slide decks?</q>"}),
      Slide.create({x: 250, y: 100, value:"<q>Aren't you just <b>bored</b> with all those slides-based presentations?</q>"}),
      Slide.create({x: 800, y: 0, scale: 2, rotate: 90, value:"<q>Don't you think that presentations given <strong>in modern browsers</strong> shouldn't <strong>copy the limits</strong> of 'classic' slide decks?</q>"}),
      Slide.create({x: 300, y: 400, rotate: 230, value:"<q>Don't you think that presentations given <strong>in modern browsers</strong> shouldn't <strong>copy the limits</strong> of 'classic' slide decks?</q>"})
      



    ];
  }
});

export default EditorRoute;
