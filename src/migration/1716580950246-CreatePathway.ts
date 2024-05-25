import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePathway1716580950246 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "Pathway",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "title",
            type: "text",
          },
          {
            name: "required",
            type: "boolean",
          }
        ]
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {

  }

}
