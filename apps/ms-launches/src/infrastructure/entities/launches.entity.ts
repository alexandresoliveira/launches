import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Launches {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    rocket: string

    @Column('date')
    date: Date
    
    @Column('success')
    success: boolean
}
