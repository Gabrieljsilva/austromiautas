import { MigrationInterface, QueryRunner, Table } from 'typeorm';

import { STATES } from '../../enums/STATES';

export class createAddressesTable1613086596633 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    return queryRunner.createTable(
      new Table({
        name: 'addresses',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'street',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'number',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'neighborhood',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'city',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'state',
            type: 'enum',
            enum: Object.values(STATES),
            isNullable: false,
          },
          {
            name: 'latitude',
            type: 'float',
            isNullable: true,
          },
          {
            name: 'longitude',
            type: 'float',
            isNullable: true,
          },
          {
            name: 'donatorId',
            type: 'varchar',
            isNullable: false,
            isUnique: true,
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updatedAt',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    return queryRunner.dropTable('addresses');
  }
}
