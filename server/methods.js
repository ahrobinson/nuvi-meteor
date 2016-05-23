Meteor.methods({
  nuviData(url){
    let response;

    try {
      response = HTTP.get(url);
    } catch (e) {
      respone = e.response
    } finally {
      return response
    }
  }
});
