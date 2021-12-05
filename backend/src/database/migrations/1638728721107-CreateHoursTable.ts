import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateHoursTable1638728721107 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'hours',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            length: '36',
            isPrimary: true
          },
          {
            name: 'activity_id',
            type: 'varchar',
            length: '36'
          },
          {
            name: 'started',
            type: 'datetime'
          },
          {
            name: 'ended',
            type: 'datetime'
          }
        ],
        foreignKeys: [
          {
            name: 'FKHours_Activities',
            columnNames: ['activity_id'],
            referencedTableName: 'activities',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('hours')
  }
}
