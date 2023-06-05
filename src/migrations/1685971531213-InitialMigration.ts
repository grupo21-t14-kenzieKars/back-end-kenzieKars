import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1685971531213 implements MigrationInterface {
    name = 'InitialMigration1685971531213'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."cars_fuel_type_enum" AS ENUM('Diesel', 'Etanol', 'Gasolina', 'Flex')`);
        await queryRunner.query(`CREATE TABLE "cars" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "brand" character varying(50) NOT NULL, "model" character varying(50) NOT NULL, "year" character varying(4) NOT NULL, "fuel_type" "public"."cars_fuel_type_enum" NOT NULL DEFAULT 'Flex', "color" character varying(50) NOT NULL, "kilometers" integer NOT NULL, "fipe_price" double precision NOT NULL, "price" double precision NOT NULL, "description" text NOT NULL, "createdAt" date NOT NULL DEFAULT now(), CONSTRAINT "PK_fc218aa84e79b477d55322271b6" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "cars"`);
        await queryRunner.query(`DROP TYPE "public"."cars_fuel_type_enum"`);
    }

}
