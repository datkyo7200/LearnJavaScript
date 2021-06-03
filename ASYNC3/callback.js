let greeting = (name) => console.log(`Hello ${name}`);

const useInfo = (firstName, lastName, callback) => {
  const fullname = `${firstName} ${lastName}`;
  callback(fullname);
};

useInfo("Dev", "Chicken", greeting);
