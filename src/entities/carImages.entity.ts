import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { Car } from "./car.entity";

@Entity("images")
export class Images {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    one: string;

    @Column({ type: 'text', nullable: true, default: null })
    two?: string | null;

    @Column({ type: 'text', nullable: true, default: null })
    three?: string | null;

    @Column({ type: 'text', nullable: true, default: null })
    four?: string | null;

    @Column({ type: 'text', nullable: true, default: null })
    five?: string | null;

    @Column({ type: 'text', nullable: true, default: null })
    six?: string | null;

    @OneToOne(() => Car, (car) => car.images, { onDelete: "CASCADE" })
    @JoinColumn()
    car: Car;
}
