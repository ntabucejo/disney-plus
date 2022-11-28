const randomNumber = (start: number, end: number) => {
  return Math.floor(Math.random() * end) + start;
};

export default randomNumber;
