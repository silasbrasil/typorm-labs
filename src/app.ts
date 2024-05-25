import { AppDataSource } from "./DataSource";
import { Course, Student, Pathway } from "./entities";

AppDataSource.initialize().then(async () => {
  console.log("Conectado!!!");

  const students = await AppDataSource.manager.find(Student);
  const courses = await AppDataSource.manager.find(Course);
  const pathways = await AppDataSource.manager.find(Pathway);

  console.log(students);
  console.log(courses);
  console.log(pathways);

}).catch(error => console.log(error));
