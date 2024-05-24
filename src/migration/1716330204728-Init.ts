import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Init1716330204728 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "student",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true
          },
          {
            name: "name",
            type: "varchar",
            length: "100"
          }
        ]
      }),
      true
    );

    await queryRunner.createTable(
      new Table({
        name: "course",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true
          },
          {
            name: "title",
            type: "text",
          },
          {
            name: "passing_grade",
            type: "float"
          }
        ]
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable("student");
    queryRunner.dropTable("course");
  }

}
