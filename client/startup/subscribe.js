Template.messages.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('messages', Session.get('channel'));
  });
});
Meteor.subscribe('allUsernames');
Meteor.subscribe('channels');
