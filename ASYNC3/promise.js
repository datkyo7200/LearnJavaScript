const hasMeeting = true;
const meeting = new Promise((resolve, reject) => {
  //Do stuff
  if (hasMeeting) {
    const meetingDetails = {
      name: "Marketing Metting",
      location: "Skype",
      time: "1:00 PM",
    };
    resolve(meetingDetails);
  } else {
    reject(new Error("Meeting already scheduled"));
  }
});

const addToCalendar = (meetingDetails) => {
  const calendar = `${meetingDetails.name} is scheduled at ${meetingDetails.time} on ${meetingDetails.location}`;
  return Promise.resolve(calendar);
};

meeting
  .then(addToCalendar)
  .then((result) => {
    console.log("Meeting Scheduled");
    //resolve
    console.log(result);
  })
  .catch(
    (err) => console.error(err.message) //reject
  );
