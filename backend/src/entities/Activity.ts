import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'
import { User } from './User'

@Entity('activities')
class Activity {
  @PrimaryColumn('uuid')
  readonly id: string

  @Column()
  name: string

  @Column()
  user_id: string

  @ManyToOne(() => User, user => user.activities)
  user: User

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}
export { Activity }
