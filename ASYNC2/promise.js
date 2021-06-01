const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Got the user");
    // resolve({ user: "DD18" });
    reject(new Error("User not logged in"));
  }, 2000);
});

promise
  .then((user) => console.log(user))
  .catch((err) => {
    console.error(err.message);
  });
