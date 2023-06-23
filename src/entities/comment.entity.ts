import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Car } from "./car.entity";
import { User } from "./user.entity";


@Entity('carComments')
export class CarComment {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: 'text' })
    text: string

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(() => Car, (car) => car.comments)
    car: Car;

    @ManyToOne(() => User, (user) => user.comments)
    user: User;
}