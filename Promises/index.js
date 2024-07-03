// Promise object represent the eventual completion and failure of an asynchronus operation and its resulting value
//pending
//fulfilled
//rejected
const promise1 = new Promise(function (resolve, reject) {
  //Do an asyn task
  //DB calls, cryptography, network
  setTimeout(function () {
    console.log("asyn task is complete");
    resolve();
  }, 1000);
});

// second method of writing promise

promise1.then(function () {
  console.log("promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("async 2 resolved");
});

//third approach

const promise3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "rishabh", email: "rishabh@gmail.com" });
  }, 1000);
});

promise3.then(function (user) {
  console.log(user);
});

//Fourth Promise

const promise4 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "rishabh", email: "rishabh@gmail.com" });
    } else {
      reject("Error: something went wrong");
    }
  }, 1000);
});

promise4
  .then((user) => {
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(function () {
    console.log("promise is either resolved or rejected");
  });

//fifth promise

const promise5 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "javascript", password: "12345" });
    } else {
      reject("Error: JS Went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promise5;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

async function getAllUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log("data is", data);
  } catch (error) {
    console.log(error);
  }
}

//getAllUser();


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{console.log(error)})

//404 is also a response