import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./user.entity";

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

  @CreateDateColumn({ type: "date" })
  createdAt!: string;
    userCreat: any;
}



export { Car, Fuels };
