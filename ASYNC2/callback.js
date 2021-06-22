// Sync code example

// const otherFunct = () => {
//     console.log('we are in another function');

// callbacks in asynchronus

console.log("Start");

const loginUser = (email, password, callback) => {
    setTimeout(() => {
        console.log("Now we have the data");
        callback({ userEmail: email });
    }, 3000);
};

const getUserVideos = (email, callback) => {
    setTimeout(() => {
        callback([
            { id: "video1", title: "title of video 1" },
            { id: "video2", title: "title of video 2" },
            { id: "video3", title: "title of video 3" },
            { id: "video4", title: "title of video 4" },
        ]);
    }, 1000);
};

const videoDetails = (video, callback) => {
    setTimeout(() => {
        callback(video);
    }, 2000);
};

const user = loginUser("datkyo7200@gmail.com", "12345678", (user) => {
    console.log(user);
    getUserVideos(user.userEmail, (videos) => {
        console.log(videos);
        videoDetails(videos[0].title, (title) => {
            console.log(title);
        });
    });
});

console.log(user);
console.log("End");
