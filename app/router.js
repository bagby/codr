var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
  this.route('home');
  this.resource('quiz', { path: '/quiz' }, function(){
    this.route('question1');
    this.route('result');
  });
  //TODO: convert the javascript resource to a generic language resource
  this.resource('javascript', { path: '/javascript' }, function(){
    this.resource('sections', { path: '/sections' }, function(){
      this.resource('section', { path: '/:section_id' }, function() {
        this.resource('modules', { path: '/modules' }, function(){
          this.resource('module', { path: '/:module_id' }, function(){
            this.resource('topic-items', { path: '/topic-items' }, function(){
              this.resource('topic-item', { path: '/:topic_item_id' });
            });
          });
        });
      });
    });
  });
});

export default Router;
