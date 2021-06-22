// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve({ user: "Dev" });
//     console.log("Got the user");
//     reject(new Error("User not logged in"));
//   }, 2000);
// });

// promise
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err.message));

// console.log("Start");

// const loginUser = (email, password) =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Now we have the data");
//       resolve({ userEmail: email });
//     }, 3000);
//   });

// const getUserVideos = (email) =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve([
//         { id: "video1", title: "title of video 1" },
//         { id: "video2", title: "title of video 2" },
//         { id: "video3", title: "title of video 3" },
//         { id: "video4", title: "title of video 4" },
//       ]);
//     }, 1000);
//   });

// const videoDetails = (video) =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(video);
//     }, 2000);
//   });

// const user = loginUser("developer@gogo.com", "12345678", (user) => {
//   console.log(user);
//   getUserVideos(user.userEmail, (videos) => {
//     console.log(videos);
//     videoDetails(videos[0].title, (title) => {
//       console.log(title);
//     });
//   });
// });

// loginUser("developer@gogo.com", "12345678")
//   .then((user) => getUserVideos(user.userEmail))
//   .then((videos) => videoDetails(videos[0]))
//   .then((detail) => console.log(detail));

// console.log("End");

const yt = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Getting stuff form youtube");
    resolve({ videos: [1, 2, 3, 4, 5, 6, 7] });
  }, 2000);
});

const fb = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Getting stuff form fb");
    resolve({ user: "Name" });
  }, 5000);
});

Promise.all([yt, fb]).then((result) => console.log(result));
