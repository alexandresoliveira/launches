import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn,
} from 'typeorm'
import { Rocket } from './rocket.entity'
import crypto from 'crypto'

@Entity()
export class Launches {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  rocketId: number;

  @OneToOne(() => Rocket, { cascade: true })
  @JoinColumn()
  rocket: Rocket;

  @Column('date')
  date: Date;

  @Column({
      nullable: true,
      default: false,
  })
  success: boolean;

  @Column({
      unique: true,
      default: crypto.randomUUID(),
  })
  launchCode: string;
}
