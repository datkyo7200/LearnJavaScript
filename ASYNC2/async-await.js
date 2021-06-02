console.log("Start");

const loginUser = (email, password) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Now we have the data");
      resolve({ userEmail: email });
    }, 3000);
  });

const getUserVideos = (email) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { id: "video1", title: "title of video 1" },
        { id: "video2", title: "title of video 2" },
        { id: "video3", title: "title of video 3" },
        { id: "video4", title: "title of video 4" },
      ]);
    }, 1000);
  });

const videoDetails = (video) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(video);
    }, 2000);
  });

// loginUser("developer@gogo.com", "12345678")
//   .then((user) => getUserVideos(user.userEmail))
//   .then((videos) => videoDetails(videos[0]))
//   .then((detail) => console.log(detail));

const displayUser = async () => {
  try {
    const loggedUser = await loginUser("developer@gogo.com", "12345678");
    const videos = await getUserVideos(loggedUser.userEmail);
    const detail = await videoDetails(videos[0].title);

    console.log(loggedUser);
    console.log(videos);
    console.log(detail);
  } catch (error) {
    console.log("We could not get the videos");
  }
};

displayUser();

console.log("End");
