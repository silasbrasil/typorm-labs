import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pathway {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @Column({ type: "boolean" })
  required: boolean;
}