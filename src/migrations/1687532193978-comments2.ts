import { MigrationInterface, QueryRunner } from "typeorm";

export class Comments21687532193978 implements MigrationInterface {
    name = 'Comments21687532193978'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "carComments" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "carComments" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "carComments" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "carComments" DROP COLUMN "createdAt"`);
    }

}
