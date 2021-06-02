const getFruit = (fruit) => {
  setTimeout(() => {
    console.log(fruit);
  }, 1000);
};
const makeSmoothie = async () => {
  try {
    const a = getFruit("apple");
    const b = getFruit("orange");
    const soomothie = await Promise.all([a, b]);
    return soomothie;
  } catch (error) {
    console.log(error);
  }
};
makeSmoothie();
