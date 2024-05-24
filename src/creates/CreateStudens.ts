import { AppDataSource } from "../DataSource";
import { Student } from "../entities";
import { faker } from "@faker-js/faker";


AppDataSource.initialize().then(async () => {
  console.log("Conectado!!!");

  const student = new Student();
  student.id = faker.string.uuid();
  student.name = faker.person.fullName();

  await AppDataSource.manager.save(student);
  console.log("Student has been saved. Student id is", student.id);

}).catch(error => console.log(error))