import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1687811437344 implements MigrationInterface {
    name = 'InitialMigration1687811437344'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "carComments" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "content" text NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "carId" uuid, "userId" uuid, CONSTRAINT "PK_a1fe1ea25b2ef363a5aafbb293d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "images" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "one" character varying NOT NULL, "two" text, "three" text, "four" text, "five" text, "six" text, "carId" uuid, CONSTRAINT "REL_c966d343d95687961368797192" UNIQUE ("carId"), CONSTRAINT "PK_1fe148074c6a1a91b63cb9ee3c9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "reset_token"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "reset_token" text`);
        await queryRunner.query(`ALTER TABLE "carComments" ADD CONSTRAINT "FK_6ce14111d996e553f54a4843fee" FOREIGN KEY ("carId") REFERENCES "cars"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "carComments" ADD CONSTRAINT "FK_40d9e2f8906b68756d33e6e495d" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "images" ADD CONSTRAINT "FK_c966d343d95687961368797192e" FOREIGN KEY ("carId") REFERENCES "cars"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "images" DROP CONSTRAINT "FK_c966d343d95687961368797192e"`);
        await queryRunner.query(`ALTER TABLE "carComments" DROP CONSTRAINT "FK_40d9e2f8906b68756d33e6e495d"`);
        await queryRunner.query(`ALTER TABLE "carComments" DROP CONSTRAINT "FK_6ce14111d996e553f54a4843fee"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "reset_token"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "reset_token" character varying`);
        await queryRunner.query(`DROP TABLE "images"`);
        await queryRunner.query(`DROP TABLE "carComments"`);
    }

}
