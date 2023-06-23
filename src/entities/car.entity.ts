import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Images } from './carImages.entity'
import { User } from "./user.entity";
import { CarComment } from "./comment.entity";

enum Fuels {
  DIESEL = "Diesel",
  ETANOL = "Etanol",
  GASOLINE = "Gasolina",
  FLEX = "Flex",
}

@Entity("cars")
class Car {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 50 })
  brand: string;

  @Column({ length: 50 })
  model: string;

  @Column({ length: 4 })
  year: string;

  @Column({
    type: "enum",
    enum: Fuels,
  })
  fuel_type: Fuels;

  @Column({ length: 50 })
  color: string;

  @Column()
  kilometers: number;

  @Column({ type: "float" })
  fipe_price: number;

  @Column({ type: "float" })
  price: number;

  @Column({ type: "text" })
  description: string;

  @ManyToOne(() => User, (user) => user.cars, { onDelete: "CASCADE" })
  user: User;

  @OneToOne(() => Images, (images) => images.car, {
    cascade: ["insert", "update"],
  })
  images: Images;

  @OneToMany(() => CarComment, (comment) => comment.car)
  comments: CarComment[]
  @CreateDateColumn({ type: "date" })
  createdAt!: string;
  userCreat: any;
}

export { Car, Fuels };
