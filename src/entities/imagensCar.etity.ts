import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Car } from "./car.entity";

@Entity("imagePoster")
export class ImagePoster {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  url: string;

  @ManyToOne(() => Car, (car) => car.images, { onDelete: "CASCADE" })
  car: Car;
}
