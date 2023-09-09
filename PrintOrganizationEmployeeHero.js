// Given CSV input our job is to output an organisational chart to show the manager/employee structure of the organisation.  The CSV input is of the following format:

// employee_id,name,reports_to

// For example

// 1,Ben,0
// 2,Kate,1
// 3,Damien,2
// 4,Jane,1
// 5,Meng,4

// Produces the Chart

// Ben
//   Kate
//     Damien
//   Jane
//     Meng

/**
 *
 * @param {string} input
 */
let input = `1,Ben,0
2,Kate,1
3,Damien,2
4,Jane,1
5,Meng,4`;

function printOrganization(input) {
  const result = input.split("\n").map((r) => r.split(","));
  const reportToDict = {};
  for (const record of result) {
    const [id, name, reportTo] = record;
    if (!reportToDict[reportTo]) {
      reportToDict[reportTo] = [];
    }
    reportToDict[reportTo].push(record);
  }

  const [id, name, reportTo] = reportToDict[0][0];
  function helper(rootId, rootName, level) {
    if (!reportToDict[rootId]) {
      return "";
    }

    let result = " ".repeat(level).concat(rootName, "\n");
    for (const reportArr of reportToDict[rootId]) {
      const currentId = reportArr[0];
      const currentName = reportArr[1];
      if (reportToDict[currentId]) {
        result = result.concat(helper(currentId, currentName, level + 1));
      } else {
        result = result.concat(" ".repeat(level + 1), currentName, "\n");
      }
    }
    return result;
  }
  return helper(id, name, 0);
}
console.log(printOrganization(input));
