import {StudentMockDataGenerator} from "./mocks/students";

// and so on
export class Routes {
  getRoutes() {
    const obj = new StudentMockDataGenerator();
    return {
      students: obj.generatFakeStudents(100)
    };
  }
}
