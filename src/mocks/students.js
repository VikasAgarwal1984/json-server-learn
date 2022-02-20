const { faker } = require('@faker-js/faker');

/* Generate Students data */
const generatFakeStudents = (number) => {
  const students = [];
  while (number !== 0) {
    const randomCard = faker.helpers.createCard();
    delete randomCard.website;
    delete randomCard.company;
    delete randomCard.accountHistory;
    delete randomCard.posts;

    students.push(randomCard);
    number--;   
  }
  return students;
};

// console.log(generatFakeStudents(10))

module.exports = {generatFakeStudents};