function stringifyNumbers(params) {
  const newObject = Object.assign({}, params);
  function helper(newObj, oldObj) {
    for (const key in oldObj) {
      if (Object.hasOwnProperty.call(oldObj, key)) {
        const value = oldObj[key];
        if (typeof value === "number") {
          newObj[key] = oldObj[key].toString();
        } else if (typeof value === "object") {
          if (Array.isArray(value)) {
            // did not handle array of object cases
            newObj[key] = Array.from(value);
          } else {
            newObj[key] = Object.assign({}, value);
            helper(newObj[key], oldObj[key]);
          }
        }
      }
    }
  }
  helper(newObject, params);
  return newObject;
}
let obj = {
  num: 1,
  test: [{ test: 4 }],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

const result = stringifyNumbers(obj);

console.log(obj);
obj.test.push(1);
console.log(result);
/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}*/
