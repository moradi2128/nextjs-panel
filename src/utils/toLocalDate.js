export const toLocalDateString = (date) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("fa-IR", options);
};
export const toLocalDateStringShort = (date) => {
  return new Date(date).toLocaleDateString("fa-IR");
};
