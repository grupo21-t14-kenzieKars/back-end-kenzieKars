import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterCarTable1688420499357 implements MigrationInterface {
    name = 'AlterCarTable1688420499357'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cars" ADD "is_active" boolean NOT NULL DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cars" DROP COLUMN "is_active"`);
    }

}
