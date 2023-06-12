import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Address } from "./address.entity";
import { getRounds, hashSync } from "bcryptjs";
import { Car } from "./car.entity";

@Entity("user")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 50, unique: true })
  email: string;

  @Column({ length: 127 })
  name: string;

  @Column({ length: 11, unique: true })
  cpf: string;

  @Column({ length: 13 })
  phone: string;

  @Column({ type: "date" })
  birth_date: string;

  @Column()
  description: string;

  @Column({ length: 127 })
  password: string;

  @Column({ default: false })
  is_seller: boolean;

  @Column({ nullable: true })
  reset_token?: string;

  @Column({ nullable: true, type: "date" })
  reset_token_date?: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @OneToOne(() => Address, (address) => address.user, {
    cascade: ["insert", "update"],
  })
  address: Address;

@OneToMany(() => Car, (car) => car.user)
  posters: Car[];


  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    const isEncrypted = getRounds(this.password);
    if (!isEncrypted) {
      this.password = hashSync(this.password, 10);
    }
  }
}
