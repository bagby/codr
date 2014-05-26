var Topic = DS.Model.extend({
  title: DS.attr('string'),
  topicItems: DS.hasMany('topic-item', { async: true })
});

Topic.reopenClass({
  FIXTURES: [{
    id: 1,
    title: 'events',
    topicItems: [1, 2, 3]
  }, {
    id: 2,
    title: 'motion'
  }, {
    id: 3,
    title: 'control'
  }, {
    id: 4,
    title: 'operators'
  }]
});

export default Topic;
