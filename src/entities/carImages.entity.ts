import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { Car } from "./car.entity";

@Entity("images")
export class Images {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    one: string;

    @Column({ nullable: true })
    two?: string;

    @Column({ nullable: true })
    three?: string;

    @Column({ nullable: true })
    four?: string;

    @Column({ nullable: true })
    five?: string;

    @Column({ nullable: true })
    six?: string;

    @OneToOne(() => Car, (car) => car.images, { onDelete: "CASCADE" })
    @JoinColumn()
    car: Car;
}
