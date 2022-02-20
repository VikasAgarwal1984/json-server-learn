var studentApi = require("./mocks/students");
// and so on

module.exports = function () {
  return {
    students: studentApi.generatFakeStudents(100)
  };
};
