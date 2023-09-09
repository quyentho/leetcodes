function collectStrings(params) {
  const resultArr = [];

  function helper(obj) {
    for (const value of Object.values(obj)) {
      if (typeof value === "string") {
        resultArr.push(value);
      } else if (typeof value === "object") {
        helper(value);
      }
    }
  }
  helper(params);
  return resultArr;
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
