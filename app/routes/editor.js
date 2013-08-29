var EditorRoute = Ember.Route.extend({
  model: function() {
    console.log('editor route is showing');
    return Ember.A();
  }
});

export default EditorRoute;
