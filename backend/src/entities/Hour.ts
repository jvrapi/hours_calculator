import { Column, Entity, PrimaryColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity('hours')
class Hour {
  @PrimaryColumn('uuid')
  readonly id: string

  @Column()
  activity_id: string

  @Column()
  started: Date

  @Column()
  ended: Date

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}
export { Hour }
