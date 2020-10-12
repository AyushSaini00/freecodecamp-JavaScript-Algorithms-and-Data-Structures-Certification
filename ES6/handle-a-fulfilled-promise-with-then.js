const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});
makeServerRequest.then(result => {
  console.log(result);
});

/*
The then method is executed immediately after your promise is fulfilled with resolve. Here’s an example:

myPromise.then(result => {
  // do something with the result.
});

result comes from the argument given to the resolve method.
*/