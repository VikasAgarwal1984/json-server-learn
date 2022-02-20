import { faker } from "@faker-js/faker";

export class StudentMockDataGenerator {
  generatFakeStudents = (count: number) => {
    const students = [];
    while (count !== 0) {
      const randomCard = faker.helpers.createCard();
      const { website, company, accountHistory, posts, ...card } = randomCard;

      students.push(randomCard);
      count--;
    }
    return students;
  };
}

/* Generate Students data */
// console.log(generatFakeStudents(10))
