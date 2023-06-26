import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1687789276068 implements MigrationInterface {
    name = 'InitialMigration1687789276068'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "images" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "one" character varying NOT NULL, "two" text, "three" text, "four" text, "five" text, "six" text, "carId" uuid, CONSTRAINT "REL_c966d343d95687961368797192" UNIQUE ("carId"), CONSTRAINT "PK_1fe148074c6a1a91b63cb9ee3c9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "carComments" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "content" text NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "carId" uuid, "userId" uuid, CONSTRAINT "PK_a1fe1ea25b2ef363a5aafbb293d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."cars_fuel_type_enum" AS ENUM('Diesel', 'Etanol', 'Gasolina', 'Flex')`);
        await queryRunner.query(`CREATE TABLE "cars" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "brand" character varying(50) NOT NULL, "model" character varying(50) NOT NULL, "year" character varying(4) NOT NULL, "fuel_type" "public"."cars_fuel_type_enum" NOT NULL, "color" character varying(50) NOT NULL, "kilometers" integer NOT NULL, "fipe_price" double precision NOT NULL, "price" double precision NOT NULL, "description" text NOT NULL, "createdAt" date NOT NULL DEFAULT now(), "userId" uuid, CONSTRAINT "PK_fc218aa84e79b477d55322271b6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying(50) NOT NULL, "name" character varying(127) NOT NULL, "cpf" character varying(11) NOT NULL, "phone" character varying(13) NOT NULL, "birth_date" date NOT NULL, "description" character varying NOT NULL, "password" character varying(127) NOT NULL, "is_seller" boolean NOT NULL DEFAULT false, "reset_token" text, "reset_token_date" TIMESTAMP WITH TIME ZONE, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "UQ_a6235b5ef0939d8deaad755fc87" UNIQUE ("cpf"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "address" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "zip_code" character varying(8) NOT NULL, "city" character varying(50) NOT NULL, "state" character varying(2) NOT NULL, "street" character varying(127) NOT NULL, "number" character varying(20), "complement" character varying(127), "userId" uuid, CONSTRAINT "REL_d25f1ea79e282cc8a42bd616aa" UNIQUE ("userId"), CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "imagePoster" ("id" SERIAL NOT NULL, "url" character varying NOT NULL, "carId" uuid, CONSTRAINT "PK_e1d774a1438e6fab6e7bcea8a21" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "images" ADD CONSTRAINT "FK_c966d343d95687961368797192e" FOREIGN KEY ("carId") REFERENCES "cars"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "carComments" ADD CONSTRAINT "FK_6ce14111d996e553f54a4843fee" FOREIGN KEY ("carId") REFERENCES "cars"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "carComments" ADD CONSTRAINT "FK_40d9e2f8906b68756d33e6e495d" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cars" ADD CONSTRAINT "FK_6431b6fec12c4090bb357fba2c2" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "address" ADD CONSTRAINT "FK_d25f1ea79e282cc8a42bd616aa3" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "imagePoster" ADD CONSTRAINT "FK_584f8ba1d3d00ac7db807f26260" FOREIGN KEY ("carId") REFERENCES "cars"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "imagePoster" DROP CONSTRAINT "FK_584f8ba1d3d00ac7db807f26260"`);
        await queryRunner.query(`ALTER TABLE "address" DROP CONSTRAINT "FK_d25f1ea79e282cc8a42bd616aa3"`);
        await queryRunner.query(`ALTER TABLE "cars" DROP CONSTRAINT "FK_6431b6fec12c4090bb357fba2c2"`);
        await queryRunner.query(`ALTER TABLE "carComments" DROP CONSTRAINT "FK_40d9e2f8906b68756d33e6e495d"`);
        await queryRunner.query(`ALTER TABLE "carComments" DROP CONSTRAINT "FK_6ce14111d996e553f54a4843fee"`);
        await queryRunner.query(`ALTER TABLE "images" DROP CONSTRAINT "FK_c966d343d95687961368797192e"`);
        await queryRunner.query(`DROP TABLE "imagePoster"`);
        await queryRunner.query(`DROP TABLE "address"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "cars"`);
        await queryRunner.query(`DROP TYPE "public"."cars_fuel_type_enum"`);
        await queryRunner.query(`DROP TABLE "carComments"`);
        await queryRunner.query(`DROP TABLE "images"`);
    }

}
