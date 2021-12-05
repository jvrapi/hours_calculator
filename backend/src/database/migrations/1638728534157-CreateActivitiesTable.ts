import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateActivitiesTable1638728534157 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'activities',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            length: '36',
            isPrimary: true
          },
          {
            name: 'name',
            type: 'varchar'
          },
          {
            name: 'user_id',
            type: 'varchar',
            length: '36'
          }
        ],
        foreignKeys: [
          {
            name: 'FKActivities_Users',
            columnNames: ['user_id'],
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('activities')
  }
}
