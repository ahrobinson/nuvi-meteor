import { Template } from 'meteor/templating';
import './media.html';



Template.media.onCreated(function mediaOnCreated() {
  let url = 'https://nuvi-challenge.herokuapp.com/activities'
  Meteor.call("nuviData", url, (error, result) => {
    if(error){
      console.log("error", error);
    }
    if(result){
      console.log(result.data);
      Session.set('nuviData', result.data);
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
