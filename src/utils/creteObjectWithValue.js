export const creteObjectWithValue = (obj, value) => {
  var newObj = {};
  obj.forEach((element) => {
    newObj[element[value]] = "";
  });
  return newObj;
};
export const creteArraytWithValue = (obj, value) => {
  var newArr = [];
  obj.forEach((element) => {
    newArr.push(element[value]);
  });
  return newArr;
};
