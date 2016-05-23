Template.media.onCreated(function mediaOnCreated() {
  Meteor.call("nuviData", function(error, result){
    if(error){
      console.log("error", error);
    }
    if(result){
      console.log(result);
      Session.set('nuviData', result);
    }
  });
});

Template.media.helpers({
  getNuviData() {
    return Session.get('nuviData');
  },
});

Template.media.events({

});
