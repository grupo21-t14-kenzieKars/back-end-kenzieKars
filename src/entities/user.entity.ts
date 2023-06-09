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
import { CarComment } from "./comments.entity";

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

  @Column({ type: 'text', nullable: true })
  reset_token?: string | null

  @Column({ nullable: true, type: "timestamptz" })
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
  cars: Car[];

  @OneToMany(() => CarComment, (comment) => comment.user)
  comments: CarComment[];

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    const isEncrypted = getRounds(this.password);
    if (!isEncrypted) {
      this.password = hashSync(this.password, 10);
    }
  }
}
