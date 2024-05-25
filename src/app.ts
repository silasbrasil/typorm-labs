import { AppDataSource } from "./DataSource";
import { Course, Student } from "./entities";

AppDataSource.initialize().then(async () => {
  console.log("Conectado!!!");

  const students = await AppDataSource.manager.find(Student);
  const courses = await AppDataSource.manager.find(Course);

  console.log(students);
  console.log(courses);

}).catch(error => console.log(error));
