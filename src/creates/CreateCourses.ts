import { AppDataSource } from "../DataSource";
import { Course } from "../entities";
import { faker } from "@faker-js/faker";


AppDataSource.initialize().then(async () => {
  console.log("Conectado!!!");

  const course = new Course();
  course.id = faker.string.uuid();
  course.title = faker.commerce.productName();
  course.passingGrade = faker.number.int({ min: 5, max: 10 });

  await AppDataSource.manager.save(course);
  console.log("Course has been saved. Course id is", course.id);

}).catch(error => console.log(error))