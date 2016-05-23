Meteor.methods({
  nuviData(){
    let promise = new Promise( (reject, resolve) => {
      HTTP.get("https://nuvi-challenge.herokuapp.com/activities", function(error, result){
        if(error){
          console.log("error", error);
        }
        if(result){
          resolve(result);
        }
      });
    });
    return promise.then( (data) => {
      return data;
    })
  }
});
