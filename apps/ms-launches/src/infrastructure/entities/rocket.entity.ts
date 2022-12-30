import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Rocket {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
