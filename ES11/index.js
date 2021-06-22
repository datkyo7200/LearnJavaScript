const player = {
  details: {
    name: {
      firstName: "Quang",
      lastName: "Hai",
      age: 20,
    },
  },
  jobs: ["dev js", "dev php"],
};

const playerFirstName = player?.details?.name?.firstName;

console.log(playerFirstName);
