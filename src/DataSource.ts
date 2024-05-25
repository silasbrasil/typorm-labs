import "reflect-metadata";
import { DataSource } from "typeorm";
import { Student, Course } from "./entities";
import { Init1716330204728 } from "./migration/1716330204728-Init";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "labs",
  synchronize: false,
  logging: false,
  entities: [Student, Course],
  migrations: [Init1716330204728],
  subscribers: [],
})

// Create a migration
// npm run typeorm migration:create ./src/migration/{NOME DA MIGRATION}

// Apply migration
// npm run typeorm migration:run -- -d {PATH TO DATASOURCE CONFIG}
